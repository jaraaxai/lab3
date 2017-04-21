import { Injectable } from '@angular/core';

@Injectable()
export class DbService {
  public data: any[] = [];
  constructor() {
    const a = {id: 1, name: 'Miga', email: 'miga@mum.edu'};
    const b = {id: 2, name: 'Saad', email: 'asaad@mum.edu'};
    const c = {id: 3, name: 'Omar', email: 'omaar@mum.edu'};
    this.data.push(a);
    this.data.push(b);
    this.data.push(c);
  }

  getData() {
    return this.data;
  }
}
