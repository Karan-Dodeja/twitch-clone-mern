import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Channels } from "./Channels";
import { ChannelView } from "./ChannelView";

export const Content = () => {
  return <div className="content-container">
  <Routes >
    <Route path="settings" element={<div>Settings</div>} />
    <Route path="channels" element={<Channels />} />
    <Route path="channel/:id" element={<ChannelView />} />
  </Routes>
  </div>;
};
