import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testingPlayground';

  //Pipe
  filterModel = "";
  users = [
    {name: "Prashant"},
    {name: "Dipak"},
    {name: "Navya"},
    {name: "Kavya"}
  ]

  count = 0;
  observable = new Observable(observer => {
    setInterval(() => {
      observer.next(`Example of async pipe ${this.count++}`);
    }, 2000);
  });

  constructor(private router : Router){
  }

  gotoGreeter(path:string){
    this.router.navigate([path])
  }

}
