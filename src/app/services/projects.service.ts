import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectSrv {
  constructor(
    private http: Http
  ){

  }

  getProjects(): Observable<any>{
    return this.http.get('api/projects').map((response: Response) => response.json());
  }

}