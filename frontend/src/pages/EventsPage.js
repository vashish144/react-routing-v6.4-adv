import React, { useEffect, useState } from "react";
import { Link, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

const eventList = [
  {
    id: 1,
    title: "Event 1",
    description: "This is the first event",
    price: 100,
    date: "2021-01-01",
    creator: "1",
  },
  {
    id: 2,
    title: "Event 2",
    description: "This is the second event",
    price: 200,
    date: "2021-02-01",
    creator: "1",
  },
  {
    id: 3,
    title: "Event 3",
    description: "This is the third event",
    price: 300,
    date: "2021-03-01",
    creator: "1",
  },
];

const EventsPage = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);
  //     const response = await fetch('http://localhost:8080/events');

  //     if (!response.ok) {
  //       setError('Fetching events failed.');
  //     } else {
  //       const resData = await response.json();
  //       setFetchedEvents(resData.events);
  //     }
  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);
  // console.log("fetchedEvents--->",fetchedEvents);

  // ----------------------------------------------------------
  const data = useLoaderData();
  if (data.isError) {
    return <p>{data.message}</p>;
  }
  const events = data.events;

  return (
    // <div>
    //   <h1>Events Page</h1>
    //   <ul>
    //     {events.map((event) => (
    //       <li key={event.id}>
    //         <Link to={`${event.id}`}>{event.title}</Link>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <EventsList events={events}/>
  );
};

export default EventsPage;

export async function eventsLoader() {
  const response = await await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "could not fetch events" }), {
    //   status: 500,
    // });
    throw json({ message: "could not fetch events" }, { status: 500 });
  } else {
    const data = await response.json();
    return data;
  }
}
