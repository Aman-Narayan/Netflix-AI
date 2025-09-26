export const checkValidateData = (
  email,
  password,
  confirmpassword = null,
  isChecked = true
) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) {
    return "Email is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }
  //  New check for confirm password
  if (confirmpassword != null && password !== confirmpassword) {
    return "Passwords do not match";
  }

  // New check for terms and conditions
  if (!isChecked) {
    return "Please agree to the Terms and Conditions";
  }

  return null;
};
