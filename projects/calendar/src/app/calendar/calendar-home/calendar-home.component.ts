import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../../../hp-share/src/lib/services/auth.service";
import {IUser, User, UserState} from "../../../../../hp-share/src/lib/app-state/models/user.model";
import {UserActions} from "../../../../../hp-share/src/lib/app-state/action/index.action";
import {Store} from '@ngrx/store';
import {selectUsersSelector} from "../../../../../hp-share/src/lib/app-state/reducer/index.reducer";

@Component({
  selector: 'app-calendar-home',
  templateUrl: './calendar-home.component.html',
  styleUrls: ['./calendar-home.component.scss']
})
export class CalendarHomeComponent implements OnInit {
  user?: IUser

  // users: Observable<User[]> = ;
  constructor(public authService: AuthenticationService,
              private store: Store<UserState>) {
    // get user from store
    // @ts-ignore
    this.store.select(selectUsersSelector).subscribe(res => {
      console.log('xxxx calendar', res)
    })
    // this.store.select(selectUsers)
    // this.store.select(selectUsers).subscribe(users => {
    //   console.log(users, 'calendar-home')
    // })
  }

  ngOnInit(): void {

  }

  removeUser(user: UserState): void {
    this.store.dispatch(UserActions.removeUser({user}));
  }
}
