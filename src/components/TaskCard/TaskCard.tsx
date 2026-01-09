import { Card, CardContent, Typography, Box } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Task } from "../../types/Task"

type Props = {
  task: Task
}

function TaskCard({ task }: Props) {
  const navigate = useNavigate()

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box display="flex" gap={1}>
          <Typography
            variant="body1"
            sx={{ cursor: "pointer", fontWeight: "bold" }}
            onClick={() => navigate(`/task/${task.id}`)}
          >
            #{task.id}
          </Typography>
          <Typography variant="body1">{task.title}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default TaskCard
