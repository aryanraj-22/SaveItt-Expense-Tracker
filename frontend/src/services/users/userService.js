import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

//! Login
export const loginAPI = async ({ email, password }) => {
  const response = await axios.post(`${BASE_URL}/users/login`, {
    email,
    password,
  });
  return response.data;
};

//! Register
export const registerAPI = async ({ email, password, username }) => {
  const response = await axios.post(`${BASE_URL}/users/register`, {
    email,
    password,
    username,
  });
  return response.data;
};

//! Change Password
export const changePasswordAPI = async (newPassword) => {
  const token = getUserFromStorage();
  const response = await axios.put(
    `${BASE_URL}/users/change-password`,
    { newPassword },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

//! Update Profile
export const updateProfileAPI = async ({ email, username }) => {
  const token = getUserFromStorage();
  const response = await axios.put(
    `${BASE_URL}/users/update-profile`,
    { email, username },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
