
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs';

export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo:any) {
    return this.http.post('...', todo).pipe(map(r => JSON.stringify(r)));
  }

  getTodos():any { 
    return this.http.get('...').pipe(map(r => JSON.stringify(r)));
  }

  delete(id:any) {
    return this.http.delete('...').pipe(map(r => JSON.stringify(r)));
  }
}