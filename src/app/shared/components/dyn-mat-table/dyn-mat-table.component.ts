import {Component, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-dyn-mat-table',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './dyn-mat-table.component.html',
  styleUrl: './dyn-mat-table.component.scss'
})
export class DynMatTableComponent implements OnInit {

  constructor() { }
  private testData:any = require('./../../../modules/jenkins/mocks/intro.json')
  data:any = this.testData.data;
  headerData:any = this.testData.headerData;

  columns: string[] = this.headerData.map((headerData: any) => headerData.name)

  ngOnInit(): void {

  }


}
