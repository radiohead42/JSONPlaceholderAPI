import { Component, inject } from '@angular/core';
import { User } from '../../services/user';
import { toSignal } from '@angular/core/rxjs-interop';
import { IUser } from '../../models/user.model';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-user-list',
  styleUrl: './user-list.scss',
  templateUrl: './user-list.html',
})
export class UserList{

  private userService = inject(User);

  users = toSignal<IUser[]>(this.userService.getUsers());

}
