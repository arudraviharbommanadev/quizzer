export const required = (value) => !!value || 'This field is required.';
export const emailPattern = (value) => {
  if (!value) return 'Email is required.';
  return /^\S+@\S+\.\S+$/.test(value) ? true : 'Enter a valid email.';
};
