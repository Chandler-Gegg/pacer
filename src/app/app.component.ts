import { Component } from '@angular/core';

import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: Observable<firebase.User>;
  clients: Observable<any[]>;
  msgVal: string = '';
  itemsRef;
  authState: any = null;
  model: {} = {firstName: "", lastName: ""};

  minimumHourlyRate: number = 0;
  maximumHourlyRate: number = 0;
  weeklyIncome: number = 0;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, private db: AngularFirestore) {
    //1#todo convert items collection to a collection of "clients"
    this.itemsRef = af.list('clients');
    this.clients = this.itemsRef.valueChanges();
    this.user = this.afAuth.authState;
    this.calculateClientNumbersSummary();

    
  }

  updateClientActivity(client){
    console.log(this.calculateClientNumbersSummary());
    //#4 update client activity or toggle between active and inactive locally
    console.log(this.clients[client]);
    if(client.activity == "Active"){
      client.activity = "Inactive";
    }
    else{
      client.activity = "Active";
    }
    this.itemsRef.update(this.clients);
    //client.activity = !client.activity;
    
    
  }

  addNewClient() {
    //#6 push newClient member to firebase
    this.itemsRef.push(this.model); //push to itemsRef
    this.model = {}; //clear this at end

  }


  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
      this.afAuth.auth.signOut();
  }

  calculateClientNumbersSummary(){
    /* #8
    find minimum $ amount
    find maximum $ amount
    find total $ amount
    */
     this.clients.forEach(client =>{
      client.forEach(c =>{
        if(c["hourlyRateCharged"] != "" && parseInt(c["hourlyRateCharged"]) < this.minimumHourlyRate){
          this.minimumHourlyRate = parseInt(c["hourlyRateCharged"]);
        }
        else if (c["hourlyRateCharged"] && parseInt(c["hourlyRateCharged"]) > this.maximumHourlyRate){
          this.maximumHourlyRate = parseInt(c["hourlyRateCharged"]);
        }
        
        if(c["hourlyRateCharged"]){
          this.weeklyIncome += parseInt(c["hourlyRateCharged"]);
        }
      });    
    });

  }


}
