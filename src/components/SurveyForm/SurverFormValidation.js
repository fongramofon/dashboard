const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'This field is required';
  } else if (values.password.length < 4) {
    errors.password = 'Password must be at least 4 characters';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'This field is required';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords doesn't match";
  }

  return errors;
}

export default validate;