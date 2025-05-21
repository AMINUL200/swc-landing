import React, { useContext, useState } from 'react';
import Preloader from './component/Preloader'
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Footer from './component/Footer';
import BackToTop from './component/BackToTop';

import { ToastContainer } from 'react-toastify';
import PopupModel from './component/PopupModel';
import { Outlet, Route, Routes } from 'react-router-dom';
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
      <Sidebar isSideBarOpen={isSideBarOpen} setIsSidebarOpen={setIsSidebarOpen}  showPopupModel={() => setShowPopup(true)}/>

      {/* <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog/:id' loader={blogdataInfo} element={<BlogDetails />} />
      </Routes> */}

      <Outlet />

      <PopupModel show={showPopup} onClose={() => setShowPopup(false)} />
      <Footer />








    </>
  )
}

export default App
