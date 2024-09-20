import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { database } from '../firebaseConfig.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage.jsx'
import WeddingPartyPage from './pages/WeddingPartyPage.jsx'
import Travel from './pages/TravelPage.jsx'
import RSVP from './pages/RSVPPage.jsx'
import QA from './pages/Q&APage.jsx'




// Make sure to create error page component for errorElement and error handling

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/weddingparty",
        element: <WeddingPartyPage />,
      },
      {
        path: "/travel",
        element: <Travel />,
      },
      {
        path: "/rsvp",
        element: <RSVP />,
      },
      {
        path: "/q&a",
        element: <QA />,
      },
    ],
  },
]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router}>
//       <App />
//     </RouterProvider>
//   </StrictMode>
// );

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);