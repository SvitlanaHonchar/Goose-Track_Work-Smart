import { NoMatchPageComponent } from 'modules/NoMatchPageComponent/';
import React from 'react';

import { Navigate, useLocation } from 'react-router';
import TaskModal from 'shared/components/TaskModal/TaskModal';
import useModal from 'shared/hooks/useModal';
const NoMatchPage = () => {
  // --for redirect
  const location = useLocation();
  const path = location.pathname;

  const currentMonth = new Date().toISOString().slice(0, 7);
  const currentDay = new Date().toISOString().slice(0, 10);
  // --/for redirect

  const { isOpen, action, closeModal, toggleModal, details } = useModal();

  const myTaskDetails = {
    id: '64389732a7f30f6c375297a0',
    title: 'Refining designs based on feedback',
    start: '09-30',
    end: '14-40',
    priority: 'high', // (string: "low", 'medium' , 'high')
  };

  const handleAddTaskClick = () => {
    toggleModal('add', { details: {} });
  };

  const handleEditTaskClick = () => {
    toggleModal('edit', { details: myTaskDetails });
  };
  return (
    <div>
      {path === '/calendar/month' && (
        <Navigate replace to={`/calendar/month/${currentMonth}`} />
      )}
      {path === '/calendar/day' && (
        <Navigate replace to={`/calendar/day/${currentDay}`} />
      )}
      No match page
      <button type="button" onClick={handleAddTaskClick}>
        Add task
      </button>
      <button type="button" onClick={handleEditTaskClick}>
        Edit task
      </button>
      {isOpen && (
        <TaskModal
          action={action}
          onClose={closeModal}
          isOpen={isOpen}
          category="in-progress" // string : 'to-do', 'in-progress', 'done'
          date="2023-04-18T00:00:00.000Z"
          taskDetails={details ? details.details : {}}
        />
      )}
      <NoMatchPageComponent />
    </div>
  );
};

export default NoMatchPage;
