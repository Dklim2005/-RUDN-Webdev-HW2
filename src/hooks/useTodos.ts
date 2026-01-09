import { useQuery } from "@tanstack/react-query"
import { fetchTodos } from "../api/todos"
import { Task } from "../types/Task"

export const useTodos = () => {
  return useQuery<Task[]>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  })
}
