import { Box, TextField, Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useQueryClient } from "@tanstack/react-query"
import type { Task } from "../../types/Task"


function CreateTaskPage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const handleCreate = () => {
    if (!title) {
      return
    }

    queryClient.setQueryData<Task[]>(["todos"], old => {
      const tasks = old ?? []
      const newTask: Task = {
        id: Date.now(),
        title,
        description,
        createdAt: new Date(),
        status: 0,
      }
      return [newTask, ...tasks]
    })

    navigate("/board")
  }

  return (
    <Box p={4} maxWidth={400}>
      <TextField
        label="Название"
        fullWidth
        value={title}
        onChange={e => setTitle(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Описание"
        fullWidth
        multiline
        minRows={3}
        value={description}
        onChange={e => setDescription(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleCreate}>
        Создать
      </Button>
    </Box>
  )
}

export default CreateTaskPage
