import { Component, OnInit } from '@angular/core';
import { MatDialog  } from '@angular/material/dialog';
import { NewProjectComponent} from '../new-project/new-project.component';

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
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: 'this is my data sent'});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });
  }
}
