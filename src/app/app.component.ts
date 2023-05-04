import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularRoutes';
  constructor(private router: Router){

  }
  ngOnInit(): void {
    // naming convention for observables
    // observable function inside of observable
    // how to create and access an observable
    // javascript function with features
    // subscribe is how we call observable
    // next is how we return a value from observable function
    // good for async and synchronous
    const obsTest$ = new Observable( observer=>{
      // we can return multiple things, with regular function returns we cant
      observer.next('return from observable')
      observer.next('return from observable 2')
      observer.next('return from observable 3')
    }).subscribe(value =>{
      console.log(value);
      
    })
    // unsubscribe so it doesnt slow down our app
    obsTest$.unsubscribe()

    const obsTest = function(){
      return 'return from func'
    }

   const returnData = obsTest();
   console.log(returnData)
  }
  onSubmit(){
    this.router.navigate(['/posts'])
  }
  
}
