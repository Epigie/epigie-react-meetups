import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import AllMeetUps from "./pages/AllMeetups";
import ErrorScreen from "./pages/ErrorScreen";
import FavouriteMeetUps from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";

const ReactMeetUps = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<AllMeetUps />} />
          <Route path="new-meetup" element={<NewMeetup />} />
          <Route path="favourites" element={<FavouriteMeetUps />} />
        </Route>
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ReactMeetUps;
