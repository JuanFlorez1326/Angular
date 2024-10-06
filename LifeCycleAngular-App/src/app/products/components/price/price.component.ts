import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input('thePrice') public price: number = 0;

  public interval$!: Subscription;

  ngOnInit(): void {
    console.log('Price Component: ngOnInit');
    this.interval$ = interval(1000).subscribe( value => console.log('Tick:', value))
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Price Component: ngOnChanges');
    console.log({changes});
  }

  ngOnDestroy(): void {
    console.log('Price Component: ngOnDestroy');
    this.interval$?.unsubscribe();
  }
}