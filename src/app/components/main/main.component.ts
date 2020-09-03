import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  username: any;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { 
    let credentials = router.getCurrentNavigation().extras.state;
    console.log(credentials);
  }

  ngOnInit(): void {
    let credentials = history.state; 
    this.username = history.state.username;
  }
  Option(arg){
    console.log('options...');
    if (arg == "Employees") {
      this.router.navigate(['Main/Employees']);
    }
    if (arg == "Careers") {
      this.router.navigate(['Main/Careers']);
    }
    if (arg == "News") {
      this.router.navigate(['Main/New']);
    }
  }

}
