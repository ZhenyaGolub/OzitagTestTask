export const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Please fill in the field';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Please fill in the field';
    } else if (values.password.length < 4) {
        errors.password = 'Must be 4 characters or more';
    } else if(values.password.length > 20){
        errors.password = 'Must be 20 characters or less';
    }
  
    return errors;
};