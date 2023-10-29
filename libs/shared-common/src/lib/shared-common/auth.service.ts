import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  count$ = new BehaviorSubject(0);
  // constructor() {
  // }
}
