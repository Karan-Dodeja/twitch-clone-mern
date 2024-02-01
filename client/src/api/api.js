import axios from "axios";

// Connect server api
const appClient = axios.create({
  baseURL: "htpp://localhost:5002/api",
  timeout: 1000,
});

// Token attach to authorization header
appClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");
    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

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
    return await appClient.get("/settings/channel");
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const updateChannelSettings = async (data) => {
  try {
    return await appClient.put("/settings/channel", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const changePassword = async (data) => {
  try {
    return await appClient.patch("/settings/password", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getFollowedChannels = async () => {
  try {
    return await appClient.get("/channels/followed");
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getChannels = async () => {
  try {
    return await appClient.get("/channels");
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getChannelDetails = async (channelId) => {
  try {
    return await appClient.get(`/channels/${channelId}`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const followChannel = async (channelId) => {
  try {
    return await appClient.post("/channels/follow", {
      channelId,
    });
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
