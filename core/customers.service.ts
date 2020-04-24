import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DisplayUser } from '../models/displayUser.model';



@Injectable({
  providedIn: 'root'
})

export class CustomersService {

  users: Observable<any[]>;
  us: Observable<DisplayUser>;


  userCollection: AngularFirestoreCollection<DisplayUser>;
  userDoc: AngularFirestoreDocument<DisplayUser>;

  constructor(private _afs: AngularFirestore) { }

  public getCustomers() {
    this.users = this._afs.collection(`/users`).valueChanges();
    return this.users;
  }

  public getCus(id: string) {
    this.userDoc = this._afs.doc<DisplayUser>('/users/' + id);
    return this.us = this.userDoc.valueChanges();
  }

  public readUpdate(id: string) {
    this.userDoc = this._afs.doc('/users/' + id);
    this.userDoc.update({
      read: true
    })
  }

  public unReadUpdate(id: string) {
    this.userDoc = this._afs.doc('/users/' + id);
    this.userDoc.update({
      read: false
    })
  }

  public deleteUser(id: string) {
    this.userDoc = this._afs.doc('/users/' + id);
    this.userDoc.delete();
  }

}
