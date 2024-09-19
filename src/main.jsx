import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { database } from '../firebaseConfig.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/WeddingPartyPage",
        element: <WeddingParty />,
      },
      {
        path: "/Travel",
        element: <Travel />,
      },
      {
        path: "/RSVP",
        element: <RSVP />,
      },
      {
        path: "/Q&A",
        element: <QA />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);