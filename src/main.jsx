import {
  createBrowserRouter,
  RouterProvider
} from "react-router"
import ReactDOM from "react-dom/client"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutUs from "./routes/AboutUs.jsx"
import Coporate from "./routes/Coporate.jsx"
import Campaigns from "./routes/Campaigns.jsx"
import Covid19 from "./routes/Covid19.jsx"
import Retail from "./routes/retail.jsx"
import Sme from "./routes/sme.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>

  },
  {
    path: "/aboutus",
    element: <AboutUs/>
    
  },
   {
    path: "/corporate",
    element: <Coporate/>
    
  },
   {
    path: "/campaigns",
    element: <Campaigns/>
    
  },
   {
    path: "/covid19",
    element: <Covid19/>,
    
  },
   {
    path: "/retail",
    element: <Retail/>,
    
  },
   {
    path: "/sme",
    element: <Sme/>,
    
  },


])




createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}></RouterProvider>
)
