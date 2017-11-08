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
  items: Observable<any[]>;
  msgVal: string = '';
  itemsRef;
  authState: any = null;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, private db: AngularFirestore) {
    //1#todo convert items collection to a collection of "clients"
    this.itemsRef = af.list('items');
    this.items = this.itemsRef.valueChanges();
    this.user = this.afAuth.authState;
  }

  updateClientActivity(client){
    //#4 update client activity or toggle between active and inactive locally
  }

  addNewClient() {
    //#6 push newClient member to firebase
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
  
  }


}
