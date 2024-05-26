import React from "react";
import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

export const EventLayout = () => {
  return (
    <>
      <EventsNavigation></EventsNavigation>
      <Outlet />
    </>
  );
};
