import React from "react";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log("error---",error);
  let title = "An error Occurred!";
  let message = "Something went wrong!";
  if (error.status === 500) {
    // message = JSON.parse(error.data).message;
    message=error.data.message;
  }
  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resource";
  }
  return (
    <>
      <MainNavigation></MainNavigation>
      <PageContent title={title}>{message}</PageContent>
    </>
  );
};

export default Error;
