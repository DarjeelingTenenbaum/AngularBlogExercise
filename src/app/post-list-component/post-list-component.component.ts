import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

posts =[
    {
      title: "The beginner’s guide to Angular Universal",
      content: "Getting started isn’t difficult. It’s powerful but it’s not magic. The goal of this guide is not only to get you started but to give you a deeper understanding of how Angular Universal works. This guide takes you from zero to universal with these steps",
      loveIt: 0,
      createdDate: new Date()
    },
    {
      title: "Advanced Angular Concepts",
      content: "This session was presented as part of AngularMix, Orlando 2017. Learn advanced Angular concepts with Alex Rickabaugh.",
      loveIt: 0,
      createdDate: new Date()
    },
    {
      title: "Version 5.0.0 of Angular Now Available",
      content: "We are pleased to announce version 5.0.0 of Angular, pentagonal-donut. This is a major release containing new features and bugfixes.",
      loveIt: 0,
      createdDate: new Date()
    }
  ];

}


