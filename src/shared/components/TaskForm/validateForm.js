import taskValidationSchema from './taskValidationSchema';
import { showErrorValidation } from 'shared/utils/notifications';
export const validateForm = async task => {
  try {
    await taskValidationSchema.validate(task, { abortEarly: false });
  } catch (error) {
    const validationErrors = [...error.errors].join(' ');
    showErrorValidation(validationErrors);
    return false;
  }

  return true;
};
