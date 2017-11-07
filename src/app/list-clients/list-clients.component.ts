import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
  clientsList;
  constructor() {
    
  }

  newClient(){
    //todo push new client to clients collection
  }

  ngOnInit() {
    
  }

}
