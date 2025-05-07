import React, { useContext, useState } from 'react';
import Preloader from './component/Preloader'
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Footer from './component/Footer';
import BackToTop from './component/BackToTop';

import { ToastContainer } from 'react-toastify';
import PopupModel from './component/PopupModel';
import { Route,  Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogDetails from './pages/BlogDetails';
import { AppContext } from './context/AppContext';

const App = () => {
  const { loading, showPopup, setShowPopup } = useContext(AppContext)
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);


  if (loading) return <Preloader />;

  return (
    <>

      <ToastContainer />
      <BackToTop />
      <Header setIsSidebarOpen={setIsSidebarOpen} showPopupModel={() => setShowPopup(true)} />
      <Sidebar isSideBarOpen={isSideBarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
      </Routes>

      <PopupModel show={showPopup} onClose={() => setShowPopup(false)} />
      <Footer />








    </>
  )
}

export default App
