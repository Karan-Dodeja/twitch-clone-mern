import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Channels } from "./Channels";
import { ChannelView } from "./ChannelView";
import { Settings } from "./Settings";

export const Content = ({ channels, getChannels }) => {
  return (
    <div className="content-container">
      <Routes>
        <Route path="settings" element={<Settings />} />
        <Route path="channels" element={<Channels channels={channels} />} />
        <Route
          path="channel/:id"
          element={<ChannelView getChannels={getChannels} />}
        />
      </Routes>
    </div>
  );
};
