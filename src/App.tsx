import { Routes, Route, Navigate } from "react-router-dom"
import Header from "./components/Header/Header"
import BoardPage from "./pages/BoardPage/BoardPage"
import CreateTaskPage from "./pages/CreateTaskPage/CreateTaskPage"
import TaskPage from "./pages/TaskPage/TaskPage"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/board" replace />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/create" element={<CreateTaskPage />} />
        <Route path="/task/:id" element={<TaskPage />} />
      </Routes>
    </>
  )
}

export default App
