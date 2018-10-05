import { Component, OnInit, Output } from '@angular/core';
import {GetdataService } from '../getdata.service';
import { EventEmitter } from '../../../node_modules/protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // @Output() holidayDataEvent = new EventEmitter();
  holiday: any = [];
  data: any ;
  constructor( private service: GetdataService) { }

  ngOnInit() {
  }
  getdata() {
     this.service.getdata(this.data)
     .subscribe((data: any) => {

      JSON.parse(data)

      this.holiday = data;
     });

  }
}
