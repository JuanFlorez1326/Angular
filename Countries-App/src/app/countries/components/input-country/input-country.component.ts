import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input-country',
  templateUrl: './input-country.component.html'
})
export class InputCountryComponent implements OnInit {

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(400))
      .subscribe( term => {
        this.onDebounce.emit( term );
        console.log(term);
      });
  }

  @Output() onEnter    : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();
  @Input('plahol') placeholder: string = ''

  debouncer: Subject<string> = new Subject();
  term: string = '';

  search() {
    this.onEnter.emit(this.term);
  }

  keyPressed() {
    this.debouncer.next( this.term );
  }
}