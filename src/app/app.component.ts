import { Component } from '@angular/core';
import { ProjectSrv } from './services/projects.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  projects: any;

  constructor(public projectSrv: ProjectSrv){
    this.projectSrv.getProjects().subscribe((res: Response) => {
      this.projects = res;
    });
  }
}
