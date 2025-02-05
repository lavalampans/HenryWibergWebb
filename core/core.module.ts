import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Firestore
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule} from 'angularfire2/firestore';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: []
})
export class CoreModule { }