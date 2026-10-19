import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { User } from '../../../../services/user';
import { toSignal } from '@angular/core/rxjs-interop';
import { IUser } from '../../../../models/user.model';

@Component({
  imports: [RouterLink],
  selector: 'app-user-detail',
  styleUrl: './user-detail.scss',
  templateUrl: './user-detail.html',
})
export class UserDetail {

  private route = inject(ActivatedRoute);
  private userService = inject(User);
  private router = inject(Router);

  private userId = Number(this.route.snapshot.paramMap.get('id'));

  users = toSignal<IUser>(this.userService.getUserById(this.userId));

  onDelete() {
    const confirmDelete = confirm('Estás seguro de que deseas eliminar este usuario?');

    if (confirmDelete) {
      this.userService.deleteUser(this.userId).subscribe({
        next: () => {
          alert('usuario eliminado correctamente');
          this.router.navigate(['/users']);
        },
        error: (error) => {
          console.error('Error al eliminar el usuario:', error);
          alert('Ocurrió un error al eliminar el usuario');
        }
      });

    }
  }
}
