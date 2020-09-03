import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  employeeID: number;
  age: number;
  gender: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {employeeID: 2151, name: 'Ralph Lauren', age: 80, gender: 'M'},
  {employeeID: 2152, name: 'Warren Baffett', age: 92, gender: 'M'},
  {employeeID: 2153, name: 'Leornado Da Vinci', age: 105, gender: 'M'},
  {employeeID: 2154, name: 'Shaun Carter', age: 57, gender: 'M'},
  {employeeID: 2155, name: 'Alexander McQueen', age: 85, gender: 'M'},
  {employeeID: 2156, name: 'Albert Einstein', age: 110, gender: 'M'},
  {employeeID: 2157, name: 'Steve Jobs', age: 75, gender: 'M'},
  {employeeID: 2158, name: '‎Tony Hawk', age: 42, gender: 'M'},
  {employeeID: 2159, name: 'Nelson Mandela', age: 115, gender: 'M'},
  {employeeID: 2160, name: 'Robert Sobukwe', age: 93, gender: 'M'},
];

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = ['employeeID', 'name', 'age', 'gender'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
