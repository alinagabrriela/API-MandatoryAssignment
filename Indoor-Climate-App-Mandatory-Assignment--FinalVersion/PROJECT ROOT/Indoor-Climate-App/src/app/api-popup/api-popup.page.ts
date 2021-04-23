import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';



import {HttpClient} from '@angular/common/http';



@Component({

  selector: 'app-api-popup',

  templateUrl: './api-popup.page.html',

  styleUrls: ['./api-popup.page.scss'],

})



export class ApiPopupPage implements OnInit {



  rooms: Observable<any>;

  public roomArray = [];



    constructor(public httpClient: HttpClient) {



      this.rooms = this.httpClient.get('http://localhost:3000/room');

      this.rooms

      .subscribe(data => {

        console.log('Data in Room Observable object: ', data);

        this.roomArray = data;

        console.log('Data in Room array: ', this.roomArray);



      })



    }



  ngOnInit() {

  }

}








