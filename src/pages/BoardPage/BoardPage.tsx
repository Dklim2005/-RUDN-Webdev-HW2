import { Box, CircularProgress } from "@mui/material"
import Column from "../../components/Column/Column"
import { useTodos } from "../../hooks/useTodos"

function BoardPage() {
  const { data, isLoading } = useTodos()

  if (isLoading || !data) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box display="flex" gap={4} p={4}>
      <Column title="К выполнению" status={0} tasks={data} />
      <Column title="В работе" status={1} tasks={data} />
      <Column title="Выполнено" status={2} tasks={data} />
    </Box>
  )
}

export default BoardPage
