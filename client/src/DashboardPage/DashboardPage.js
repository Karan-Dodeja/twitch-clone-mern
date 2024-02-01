import React, { useEffect } from "react";
import { Nav } from "./Nav";
import { Content } from "./Content";
import { Sidebar } from "./Sidebar";
import "./dashboardPage.css";
import { useChannels, useUserDetails } from "../shared/hooks";
import { LoadingSpinner } from "../shared/components";

export const DashboardPage = () => {
  const { getChannels, isFetching, allChannels, followedChannels } =
    useChannels();
  const { isLogged } = useUserDetails();
  useEffect(() => {
    getChannels(isLogged);
  }, []);
  if (isFetching) {
    return <LoadingSpinner />;
  }
  return (
    <div className="dashboard-container">
      <Nav />
      <Sidebar channels={followedChannels} />
      <Content channels={allChannels} />
    </div>
  );
};
