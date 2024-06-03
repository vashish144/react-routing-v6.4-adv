import React from "react";
import { json, redirect, useLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEventPage = () => {
  return <EventForm method="POST" />;
};

export default NewEventPage;

export async function actions({ request, params }) {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    body: JSON.stringify(eventData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if(response.status === 422){
    return response
  }
  if (!response.ok) {
    throw new json({ message: "could not save event" }, { status: 500 });
  }
  return redirect("/events");
}
