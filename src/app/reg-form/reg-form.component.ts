import { Component, OnInit, Inject } from '@angular/core';
import { RegService } from '../services/reg.service';
import { User } from '../user';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  constructor(private regService: RegService, @Inject(User) public data: User) { }

  register(): void {
    this.regService.userReg(this.data)
    .subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
