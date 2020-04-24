import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent implements OnInit {
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}