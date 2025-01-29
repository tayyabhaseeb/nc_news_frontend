const fakeUser = {
  email: "user@example.com",
  password: "password123",
};

export const login = (email, password) => {
  if (email === fakeUser.email && password === fakeUser.password) {
    localStorage.setItem("isAuthenticated", "true");
    return true;
  }
  return false;
};

export const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};
