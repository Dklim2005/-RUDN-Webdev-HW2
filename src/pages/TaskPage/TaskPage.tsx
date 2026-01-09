import { Box, Typography, Button, Stack } from "@mui/material"
import { useParams, useNavigate } from "react-router-dom"
import { useQueryClient } from "@tanstack/react-query"
import type { Task } from "../../types/Task"

function TaskPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const tasks = queryClient.getQueryData<Task[]>(["todos"]) ?? []
  const task = tasks.find(t => t.id === Number(id))

  if (!task) {
    return null
  }

  const updateStatus = (status: number) => {
    queryClient.setQueryData<Task[]>(["todos"], old =>
      (old ?? []).map(t =>
        t.id === task.id ? { ...t, status } : t
      )
    )
  }

  const removeTask = () => {
    queryClient.setQueryData<Task[]>(["todos"], old =>
      (old ?? []).filter(t => t.id !== task.id)
    )
    navigate("/board")
  }

  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>
        #{task.id} {task.title}
      </Typography>
      <Typography sx={{ mb: 2 }}>
        {task.description || "Описание отсутствует"}
      </Typography>
      <Typography sx={{ mb: 1 }}>
        Дата создания: {task.createdAt.toString()}
      </Typography>
      <Typography sx={{ mb: 3 }}>
        Статус: {task.status}
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={() => updateStatus(0)}>
          К выполнению
        </Button>
        <Button variant="outlined" onClick={() => updateStatus(1)}>
          В работу
        </Button>
        <Button variant="outlined" onClick={() => updateStatus(2)}>
          Выполнено
        </Button>
        <Button color="error" variant="contained" onClick={removeTask}>
          Удалить
        </Button>
      </Stack>
    </Box>
  )
}

export default TaskPage
