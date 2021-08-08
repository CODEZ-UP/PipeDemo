import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipeDemo';

  header = "custom pipes example"

  user = 
  {
    "name" : "john wick",
    "age" : "20",
    "branch" : "CSE",
    "dob" : new Date(1999, 8, 22),
    "college" : "iit",
    "rollno" : "3SJ567CS2019"
  }

}
