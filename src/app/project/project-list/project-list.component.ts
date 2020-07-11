import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      "name": "Enterprise platform",
      "desc": "This is a internal platform",
      "coverImg": "assets/covers/0.jpg",
    },
    {
      "name": "Enterprise platform",
      "desc": "This is a internal platform",
      "coverImg": "assets/covers/1.jpg",
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  openNewProjectDialog() {
    
  }
}
