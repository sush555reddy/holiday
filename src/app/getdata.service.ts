import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_KEY} from '../../keys.js';
@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) {}



    getdata(data) {
      // let url = `https://holidayapi.com/v1/holidays?key=${API_KEY}&country=${data.country}`;
      // url += data.year ? `&year=${data.year}` : '';
      return this.http.get('https://holidayapi.com/v1/holidays?key=ed818fb6-dd0e-47cd-b657-2ad0902a05a2&country=US&year=2015');
    }

}
