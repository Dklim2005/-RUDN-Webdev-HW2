import { Box, Typography } from "@mui/material"
import type { Task } from "../../types/Task"
import TaskCard from "../TaskCard/TaskCard"

type Props = {
  title: string
  status: number
  tasks: Task[]
}

function Column({ title, status, tasks }: Props) {
  const filteredTasks = tasks.filter(task => task.status === status)

  return (
    <Box sx={{ width: 300 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {title}
      </Typography>
      {filteredTasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </Box>
  )
}

export default Column
