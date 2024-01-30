import axios from "axios";

// Connect server api
const appClient = axios.create({
  baseURL: "htpp://localhost:5002/api",
  timeout: 1000,
});

// Connect login server api
export const login = async (data) => {
  try {
    return await appClient.post("/auth/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

// Connect register server api
export const register = async (data) => {
  try {
    return await appClient.post("/auth/register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

// Connect channel settings api
export const getChannelSettings = async (data) => {
  try {
    return await appClient.get("/channels");
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
