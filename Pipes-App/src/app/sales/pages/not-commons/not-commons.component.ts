import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html'
})
export class NotCommonsComponent {
  
  // i18nSelect
  name: string = 'Susana';
  gender: string = 'femenino';

  invitationMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clients: string[] = ['Maria', 'Pedro', 'Juan'];
  clientsMap = {
    '=0': '0 clientes esperando.',
    '=1': '1 cliente esperando.',
    'other': '# clientes esperando.'
  }

  changeClient() {
    this.name = 'Pedro';
    this.gender = 'masculino';
  }

  deleteClient() {
    this.clients.pop();
  }

  // KeyValue Pipe
  person = {
    name: 'Juan Pablo',
    age: 35,
    address: 'Calle falsa 123'
  }

  // Json Pipe
  heroes = [
    {
      name: 'Superman',
      fly: true
    },
    {
      name: 'Robin',
      fly: false
    },
    {
      name: 'Aquaman',
      fly: false
    },
    {
      name: 'Batman',
      fly: false
    }
  ];

  // Async Pipe
  myObservable: Observable<number> = interval(1000); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ...

  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have data from promise.');
    }, 3500);
  });
  
}