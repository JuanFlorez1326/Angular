import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-couter-page',
  templateUrl: './couter-page.component.html',
  styleUrls: ['./couter-page.component.css']
})
export class CouterPageComponent {

  public counter: WritableSignal<number> = signal(10);
  public squareCounter: Signal<number> = computed( () => this.counter() * this.counter() );

  public increaseBy( value: number ): void {
    //Form 1
    // this.counter.set( this.counter() + value );

    //Form 2
    this.counter.update( current => current + value );
  }
}