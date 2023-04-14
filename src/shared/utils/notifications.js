import toast from 'react-hot-toast';

export const showSuccessLogIn = () => {
  toast.success('You have logged in successfully');
};
export const showError = () => {
  toast.error('Oohps, something has gone wrong. Try again, please.');
};
export const showSuccessAddTask = () => {
  toast.success("You've just created new task");
};
export const showSuccessEditTask = () => {
  toast.success("You've just  editted task");
};
export const showErrorValidation = message => {
  toast.error(message);
};
