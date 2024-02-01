import React, { useEffect } from "react";
import { Nav } from "./Nav";
import { Content } from "./Content";
import { Sidebar } from "./Sidebar";
import "./dashboardPage.css";
import { useChannels, useUserDetails } from "../shared/hooks";

export const DashboardPage = () => {
  const { getChannels } = useChannels();
  const { isLogged } = useUserDetails();
  useEffect(() => {
    getChannels(isLogged);
  }, []);
  return (
    <div className="dashboard-container">
      <Nav />
      <Sidebar />
      <Content />
    </div>
  );
};
