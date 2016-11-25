import { Component, OnInit } from '@angular/core';
import { TestmanagerService } from '../testmanager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  projects = [];
  constructor(private testmanager: TestmanagerService  ) { }

  ngOnInit() {
    this.projects = this.testmanager.getProjects();
  }

}
