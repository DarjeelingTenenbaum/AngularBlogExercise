import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() postTitle : string;
  @Input() postContent : string;
  @Input() postLoveIt:number;
  @Input() postCreateDate: Date;

  increase(){
    this.postLoveIt += 1;
    console.log(this.postLoveIt);
  }
  decrease(){
    this.postLoveIt -= 1;
    console.log(this.postLoveIt);
  }
  getLove(){
    return this.postLoveIt;
  }
}
