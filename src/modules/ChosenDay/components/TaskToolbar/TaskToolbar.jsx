import React, { useEffect, useState } from 'react';
import sprite from '../../../../shared/icons/sprite.svg';
import {
  CategoryTitle,
  MenuItemColumn,
  MenuList,
  TaskToolbarList,
} from './TaskToolbar.styled';
import useModal from 'shared/hooks/useModal';
import TaskModal from 'shared/components/TaskModal/TaskModal';
import {
  showError,
  showSuccessDeleteTask,
  showSuccessMoveTask,
} from 'shared/utils/notifications';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from 'redux/tasks/tasksOperations';
import { COLUMN_TASKS } from 'shared/constants/tasksCategory';
import { Button } from '@mui/material';
import theme from 'shared/theme';

const TaskToolbar = ({ ...taskData }) => {
  const dispatch = useDispatch();
  const { priority, category, date, title, start, end, _id: id } = taskData;
  const { isOpen, action, closeModal, toggleModal, details } = useModal();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [darkTheme, setDarkTheme] = useState();
  const dark = localStorage.getItem('darkModeGooseTrack');
  useEffect(() => {
    setDarkTheme(dark);
  }, [dark]);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const editedTaskDetails = {
    id,
    title,
    start,
    end,
    priority,
  };

  const availableCategories = COLUMN_TASKS.filter(
    item => item.categories !== category
  );

  function titleCaseCategory(nameOfCategory) {
    const formatString = nameOfCategory
      .replace(/-/g, ' ')
      .replace(/\b\w/g, function (l) {
        return l.toUpperCase();
      });
    return formatString;
  }

  const handleMoveTask = async newCategory => {
    try {
      const updatingTask = {
        ...taskData,
        category: newCategory,
      };
      const response = await dispatch(
        updateTask({ taskId: id, taskData: updatingTask })
      );

      if (response.type === 'task/update/fulfilled') {
        showSuccessMoveTask(titleCaseCategory(newCategory));
      } else {
        showError();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleEditTaskClick = () => {
    toggleModal('edit', { details: editedTaskDetails });
  };

  const handleDeleteTask = async taskId => {
    try {
      const response = await dispatch(deleteTask(taskId));
      if (response.type === 'task/delete/fulfilled') {
        showSuccessDeleteTask(titleCaseCategory(category));
      } else {
        showError();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const isMobile = theme.breakpoints.values.xs;

  return (
    <>
      <TaskToolbarList>
        <li>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{ minWidth: 16 }}
          >
            <svg>
              <use href={sprite + '#arrowInCircle'} />
            </svg>
          </Button>
          <MenuList
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                backgroundColor:
                  darkTheme === 'true'
                    ? `${theme.palette.grey[800]}`
                    : `${theme.palette.custom.mainWhite}`,
                marginTop: { sm: 1, md: 1.5 },
                height: { sm: 80, md: 90, lg: 90 },
                width: { sm: 114, md: 140 },
                borderRadius: '8px',
                boxShadow: '(0px 4px 16px rgba(17, 17, 17, 0.1))',
                padding: { sm: 0.5, md: 1 },
              },
            }}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            transformOrigin={
              isMobile
                ? { horizontal: 'right', vertical: 'top' }
                : { horizontal: 'left', vertical: 'top' }
            }
            anchorOrigin={
              isMobile
                ? { horizontal: 'right', vertical: 'bottom' }
                : { horizontal: 'left', vertical: 'bottom' }
            }
          >
            {availableCategories.map(category => (
              <MenuItemColumn
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 0.7,
                  color:
                    darkTheme === 'true'
                      ? `${theme.palette.custom.mainWhite}`
                      : `${theme.palette.grey[600]}`,
                  stroke:
                    darkTheme === 'true'
                      ? `${theme.palette.custom.mainWhite}`
                      : `${theme.palette.grey[600]}`,
                }}
                key={category.categories}
                onClick={() => {
                  handleMoveTask(category.categories);
                }}
              >
                <CategoryTitle>{category.title}</CategoryTitle>
                <svg>
                  <use href={sprite + '#arrowInCircle'} />
                </svg>
              </MenuItemColumn>
            ))}
          </MenuList>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              handleEditTaskClick();
            }}
          >
            <svg>
              <use href={sprite + '#pencil'} />
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              handleDeleteTask(id);
            }}
          >
            <svg>
              <use href={sprite + '#trash'} />
            </svg>
          </button>
        </li>
      </TaskToolbarList>

      {isOpen && (
        <TaskModal
          action={action}
          onClose={closeModal}
          isOpen={isOpen}
          category={category}
          date={date}
          taskDetails={details ? details.details : {}}
        />
      )}
    </>
  );
};

export default TaskToolbar;
