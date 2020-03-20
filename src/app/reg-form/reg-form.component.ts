import { Component, OnInit, Inject } from '@angular/core';
import { RegService } from '../services/reg.service';
import { User } from '../user';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Register } from '../home/state';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  constructor(
    private regService: RegService,
    @Inject(User) public data: User,
    private store: Store<AppState>,
    ) { }

    ngOnInit() {
    }

  register(): void {


    const regData = {
      TableName: 'Users',
      Item: {
        username: this.data.username,
        name: this.data.name,
        surname: this.data.surname,
        password: this.data.password,
        email: this.data.email,
        role: 'pleb'
      }
    };

    console.log('REGISTER: ', regData);

    this.store.dispatch(new Register(regData));

  }

}
