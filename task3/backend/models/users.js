import { users } from "../users.js";

export const getAllItems = () => {
  return ["bug"];
};

export const addItem = (objBody) => {
  users.unshift(objBody);
  return users;
};


