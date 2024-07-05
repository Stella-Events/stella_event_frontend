import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Landing from "./pages/landing"
import About from "./pages/about"
import Events from "./pages/eventss"
import Gallery from "./pages/gallery"
import Contact from "./pages/contact"
import RootLayout from "./layout/rootLayout"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Landing />
        },
        {
          path: "/about-us",
          element: <About />,
        },

        {
          path: "/events",
          element: <Events />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },

        {
          path: "/contact-us",
          element: <Contact />
        }
      ]
    }

  ])
  return <RouterProvider router={router} />
}


export default App
