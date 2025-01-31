import { Routes, Route } from "react-router-dom"
import CreatePage from "./Pages/CreatePage"
import HomePage from "./Pages/HomePage"
import Navbar from "./components/Navbar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
