import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../core/customers.service';
import { DisplayUser} from '../models/displayUser.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  showSpinner: Boolean = true;
  
  users: DisplayUser[];
  filteredUsers: DisplayUser[];

  private _searchTerm: string;
  
  public get searchTerm() : string {
    return this._searchTerm;
  }
  public set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredUsers = this.filterUsers(value);
  }

  public filterUsers(searchString: String) {
    return this.users.filter(user =>
      user.displayName.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
  }
  
  constructor(private custService: CustomersService, private _router: Router) { }

  ngOnInit() {
    this.custService.getCustomers().subscribe((ref) => {
      this.users = ref;
      this.showSpinner = false;
      this.filteredUsers = this.users;
    });
  }

  public onClick(userId: string) {
    this._router.navigate(['/admin', userId]);
    this.read(userId);
  }

  public read(userId: string){
    this.custService.readUpdate(userId);
  }


}
