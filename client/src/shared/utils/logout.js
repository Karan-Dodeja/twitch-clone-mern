import React from "react";

export const logout = () => {
  localStorage.removeItem("user");
  window.location.href = "/channels";
};
