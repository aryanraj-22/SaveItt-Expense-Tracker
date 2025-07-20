import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

// Add Transaction
export const addTransactionAPI = async ({
  type,
  category,
  date,
  description,
  amount,
}) => {
  const token = getUserFromStorage(); // Read token here
  const response = await axios.post(
    `${BASE_URL}/transactions/create`,
    { category, date, description, amount, type },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

// Update Category
export const updateCategoryAPI = async ({ name, type, id }) => {
  const token = getUserFromStorage(); // Read token here
  const response = await axios.put(
    `${BASE_URL}/categories/update/${id}`,
    { name, type },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

// Delete Category
export const deleteCategoryAPI = async (id) => {
  const token = getUserFromStorage(); // Read token here
  const response = await axios.delete(`${BASE_URL}/categories/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// List Transactions
export const listTransactionsAPI = async ({
  category,
  type,
  startDate,
  endDate,
}) => {
  const token = getUserFromStorage(); // Read token here
  const response = await axios.get(`${BASE_URL}/transactions/lists`, {
    params: { category, endDate, startDate, type },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
