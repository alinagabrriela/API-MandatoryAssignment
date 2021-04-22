import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-api-popup',
  templateUrl: './api-popup.page.html',
  styleUrls: ['./api-popup.page.scss'],
})
export class ApiPopupPage implements OnInit {
  public rooms: Observable<any>;
 

  constructor(public httpClient: HttpClient) { 
    this.rooms = this.httpClient.get('http://localhost:3000/room');
    this.rooms
    .subscribe(data => {
      this.rooms = data.results;
        resolve(this.rooms);
    })
   
  }

  ngOnInit() {
  }

}
function resolve(rooms: Observable<any>) {
  throw new Error('Function not implemented.');
}

