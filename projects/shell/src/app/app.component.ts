import {Component} from '@angular/core';
import {AuthenticationService} from "../../../hp-share/src/lib/services/auth.service";
import {IUser, User, UserState} from "../../../hp-share/src/lib/app-state/models/user.model";
import {Store} from "@ngrx/store";
import {UserActions} from "../../../hp-share/src/lib/app-state/action/index.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  constructor(private authService: AuthenticationService,
              private store: Store<UserState>) {

    let i = 0
    setInterval(() => {
      const user: UserState = {
        email: 'xxzzz' + i,
        fullName: 'xxx' + i
      }
      this.addUser(user);
      i++;
    }, 1000)

  }

  addUser(data: UserState): void {
    this.store.dispatch(UserActions.addUser({user: data}));
    // this.store.dispatch(UserActions.addUser({user: {email: 'xxx'}}));
  }
}
