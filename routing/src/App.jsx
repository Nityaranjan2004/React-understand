import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Page1" replace />} />
        <Route path="/Page1" element={<Page1/>}/>
        <Route path="/Page2" element={<Page2/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
