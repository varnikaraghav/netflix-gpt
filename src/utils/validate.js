export const checkValidData = (name, email, password) => {
  let isNameValid = true;
  if (name) {
    isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  }

  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValid) return "Name is not given correctly";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is incorrect";
  return null;
};
