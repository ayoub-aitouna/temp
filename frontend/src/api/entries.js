import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";

export const fetchEntries = async () => {
  try {
    const response = await axios.get(`${API_URL}/entries`);
    return response.data;
  } catch (error) {
    console.error("Error fetching entries:", error);
    return [];
  }
};

export const createEntry = async (entryData) => {
  try {
    const response = await axios.post(`${API_URL}/entries`, entryData);
    return response.data;
  } catch (error) {
    console.error("Error creating entry:", error);
    return null;
  }
};

export const updateEntry = async (entryId, updatedData) => {
  try {
    const response = await axios.put(
      `${API_URL}/entries/${entryId}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating entry:", error);
    return error;
  }
};

export const deleteEntry = async (entryId) => {
  try {
    const response = await axios.delete(`${API_URL}/entries/${entryId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting entry:", error);
    return null;
  }
};
