import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
