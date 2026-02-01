import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductResearchDoc from './pages/ProductResearchDoc'
import Presentation from './pages/Presentation'
import ExplainerVideo from './pages/ExplainerVideo'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductResearchDoc />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/video" element={<ExplainerVideo />} />
      </Routes>
    </div>
  )
}

export default App
