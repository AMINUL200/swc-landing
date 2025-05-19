import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css'
import './Animation.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppContextProvider, { AppContext } from './context/AppContext.jsx';
import HomePage from './pages/HomePage.jsx';
import { path } from 'framer-motion/client';
import BlogDetails, { blogdataInfo } from './pages/BlogDetails.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import BlogPage from './pages/BlogPage.jsx';

// const {blogDataInfo} = useContext(AppContext)
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'blog/:id',
        element: <BlogDetails />,
        // loader: blogdataInfo,
      },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'contact', element: <ContactPage /> },
      {path:'blog', element: <BlogPage />},
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>

)
