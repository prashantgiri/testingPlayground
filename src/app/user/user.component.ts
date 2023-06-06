import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  title = 'testingPlayground';

  constructor(private router : Router, private route: ActivatedRoute){
    this.route.params.subscribe((id)=>{
      if(id['id'] == 0) {
        console.log("inside router");
        this.router.navigate([''])
      }
    })
  }

  gotoGreeter(){
    this.router.navigate(['greeter'])
  }

}
