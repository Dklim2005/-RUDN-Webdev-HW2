import axios from "axios"
import { Task } from "../types/Task"

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
})

export const fetchTodos = async (): Promise<Task[]> => {
  const response = await api.get("/todos")
  return response.data.map((item: any) => ({
    id: item.id,
    title: item.title,
    description: "",
    createdAt: new Date(),
    status: item.completed ? 2 : 0,
  }))
}
