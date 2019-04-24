import { Injectable } from '@angular/core';

@Injectable()
export class Conf {
  public getUsers = 'http://localhost:9900/getUsers';
  public login = 'http://localhost:9900/login';
}
