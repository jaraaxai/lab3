import { Component, OnInit } from '@angular/core';
import {DbService} from '../db.service';

@Component({
  selector: 'app-hero-list',
  providers: [DbService],
  template: `
    <h2>Students</h2>
    <ul>
      <li *ngFor="let student of students"><a href="/profile/{{student.id}}">{{student.name}}</a></li>
    </ul>
    
  `
})
export class HeroListComponent implements OnInit {
  public students;
  constructor(private dbService: DbService) { }

  ngOnInit() {
    this.students = this.dbService.getData();
  }

}
