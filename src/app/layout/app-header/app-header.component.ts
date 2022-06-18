import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  _destroy$: Subject<any> = new Subject();
  user: any;
  @Output() onSubmit = new EventEmitter()
  constructor() {

  }

  ngOnInit(): void {
  }


  submitEvent() {
    console.log("submitEvents")
    this.onSubmit.emit(true)
  }
}
