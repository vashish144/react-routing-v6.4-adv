import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { eventsLoader } from "./pages/EventsPage";
import EventDetailPage, {
  loader as eventDetailData,
  action as deleteEventAction,
} from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import { EditEventPage } from "./pages/EditEventPage";
import RootLayout from "./pages/RootLayout";
import EventsNavigation from "./components/EventsNavigation";
import { EventLayout } from "./pages/EventLayout";
import ErrorPage from "./pages/Error";
import { action as manipulatedEventAction } from "./components/EventForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulatedEventAction,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailData,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: manipulatedEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
