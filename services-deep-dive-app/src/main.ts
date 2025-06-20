import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { InjectionToken } from '@angular/core';
import { TaskService } from './app/tasks/tasks.service';

export const TasksServiceToken = new InjectionToken<TaskService>('tasks-service-token');

// bootstrapApplication(AppComponent).catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [{provide: TasksServiceToken, useClass: TaskService}],
}).catch((err) => console.error(err));
