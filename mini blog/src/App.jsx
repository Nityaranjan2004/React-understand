import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import './App.css'

function App() {
 

  return (
   <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddPost />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
