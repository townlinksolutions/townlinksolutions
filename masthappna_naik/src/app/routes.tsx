import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Vision } from "./pages/Vision";
import { Achievements } from "./pages/Achievements";
import { News } from "./pages/News";
import { Events } from "./pages/Events";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { Community } from "./pages/Community";
import { Timeline } from "./pages/Timeline";
import { AdminLogin } from "./pages/AdminLogin";
import { AdminDashboard } from "./pages/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "vision", Component: Vision },
      { path: "achievements", Component: Achievements },
      { path: "news", Component: News },
      { path: "events", Component: Events },
      { path: "gallery", Component: Gallery },
      { path: "contact", Component: Contact },
      { path: "community", Component: Community },
      { path: "timeline", Component: Timeline },
      { path: "admin", Component: AdminLogin },
      { path: "admin/dashboard", Component: AdminDashboard },
    ],
  },
]);
