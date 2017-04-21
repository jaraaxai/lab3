import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DbService} from '../db.service';

@Component({
  selector: 'app-hero-detail',
  providers: [DbService],
  template: `
    <h2>Student show</h2>
    
    <b>name</b>: {{student.name}}<br/>
    <b>email</b>: {{student.email}}
  `,
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  public id;
  public students;
  student;
  constructor(private route: ActivatedRoute, private dbService: DbService) {
    route.params.subscribe(params => {
      this.id = params['id'];
      this.students = this.dbService.getData();
      for (const key in this.students) {
        if ( this.students[key].id === this.id * 1) {
          this.student = this.students[key];
        }
      }
    });
  }

  ngOnInit() {
  }

}
