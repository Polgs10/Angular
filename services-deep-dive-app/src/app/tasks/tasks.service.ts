import { inject, Injectable, signal } from "@angular/core";
import { Task } from "./task.model";
import { LoggingService } from "../logging.service";

// @Injectable({
//   providedIn: 'root',
// })
export class TaskService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);
  allTasks = this.tasks.asReadonly();

  addTask(taskData: {title: string; description: string}) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN'
    }
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    this.loggingService.log('ADDED TASK: ' + taskData.title);
  }

  updateTaskStatus(taskId: string, newStatus: 'OPEN' | 'IN_PROGRESS' | 'DONE') {
    this.tasks.update((oldTasks) => oldTasks.map((task) => task.id === taskId ? {...task, status: newStatus} : task));
    this.loggingService.log('CHANGE TASK: ' + newStatus);
  }
}
