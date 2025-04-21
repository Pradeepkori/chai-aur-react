import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx' // ✅ Add this line
import Contact from './components/Contact/contact.jsx'
import User from './components/User/user.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path:"user/:userid",
        element: <User/>
      },
      {
        loader: githubInfoLoader,   // 👈 use colon here
        path: "github",
        element: <Github />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
