import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable , of, throwError, empty} from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    let httpClient = TestBed.inject(HttpClient);
    service = new TodoService(httpClient);
    component = new TodosComponent(service)
  });

  it('should get todo from API and assign to todos property to component', () => {
    let todos = [1,2,3]
    spyOn(service,'getTodos').and.callFake(() => {
      return of(todos);
    })
    component.ngOnInit();
    expect(component.todos).toBe(todos);
  });

  it('should add todo when add todo get success response', () => {    
    let todo = {id : 1};

    spyOn(service,'add').and.callFake((todo) => {
      return of(todo);
    })
    component.add();

    expect(component.todos[0].title).toEqual('... ');
  });

});