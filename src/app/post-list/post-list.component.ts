import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [{
    id:1,
    title:'title 1',
    content:'heyhow are you'
  },
  {
    id:2,
    title:'title 1',
    content:'heyhow are you'
  },{
    id:3,
    title:'title 1',
    content:'heyhow are you'
  }]
  ngOnInit(): void {
    
  }
}
