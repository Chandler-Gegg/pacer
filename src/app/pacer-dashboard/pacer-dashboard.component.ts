import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacer-dashboard',
  templateUrl: './pacer-dashboard.component.html',
  styleUrls: ['./pacer-dashboard.component.css']
})
export class PacerDashboardComponent implements OnInit {
  newUser: any;
  constructor() { }

  ngOnInit() {
  }

  addNewClient(){

  }

  updateClientActivity(client) {
    //#7 todo update whether user is active or inactive
  }


}
