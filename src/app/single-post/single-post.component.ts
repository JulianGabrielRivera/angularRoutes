import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
// how to get the paremeter using the activatedRoute module 
  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void{
    // parammap is an observable, javascript reactive programming, it comes form rxjs
this.route.paramMap.subscribe(value =>{
  console.log(value)
  // get the router parameter
 let id = value.get('id')
//  title router parameter name
 const title = value.get('title')
 console.log(id)
 console.log(title)
})
  }
}
