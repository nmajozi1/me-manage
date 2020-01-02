import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  testSubject$: Subject<any> = new Subject();

  constructor() { }

  ngOnInit() {
    this.testSubject$.subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }

  testFunction() {
    console.log('On login event fired. ');
  }

}
