import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TestmanagerService {

  constructor(private http: Http) { }

  getProjects() {
    this.http.get('http://localhost:5000/projects').subscribe((data) => data.json());
    return [{ id: 1, name: "Test 1" }, { id: 2, name: "Test2" }];
  }
}
