import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const TaskService = {
  getTasks: async () => {
    const response = await api.get('/tarefas');
    return response.data.map((task: any) => ({
      id: task.id,
      task: task.tarefa,
      isChecked: !!task.status,
    }));
  },
  

  createTask: async (task: string) => {
    const response = await api.post('/tasks', { task });
    const { id, task: taskName } = response.data.task;
    return { id, task: taskName, isChecked: false };
  },

  updateTask: async (taskId: number, task: string) => {
    await api.put(`/tasks/${taskId}`, { task });
  },

  taskCheck: async (taskId: number, isChecked: boolean) => {
    await api.put(`/tasks/${taskId}/check`, { isChecked });
  },

  deleteTask: async (taskId: number) => {
    await api.delete(`/tasks/${taskId}`);
  },
};
