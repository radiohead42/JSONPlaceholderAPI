import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../../services/user';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IUser } from '../../../../models/user.model';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-user-form',
  styleUrl: './user-form.scss',
  templateUrl: './user-form.html',
})
export class UserForm implements OnInit {

  private formBuilder = inject(FormBuilder);
  private userService = inject(User);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isEditMode = false;
  userId: number | null = null;

  userForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
  });

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.isEditMode = true;
      this.userId = Number(idParam);

      this.userService.getUserById(this.userId).subscribe({
        next: (user) => {
          this.userForm.patchValue(user);
        },
        error: (error) => console.error('Error al obtener el usuario', error)
      });
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      const form = this.userForm.value as Partial<IUser>;

      if (this.isEditMode && this.userId) {
        this.userService.updateUser(this.userId, form).subscribe({
          next: () => {
            alert('Usuario actualizado correctamente');
            this.router.navigate(['/']);
          },
          error: () => alert('Error al actualizar el usuario')
        });
      } else {
        const newUser = this.userForm.value as Omit<IUser, 'id'>;
        this.userService.createUser(newUser).subscribe({
          next: () => {
            alert('Usuario creado correctamente');
            this.router.navigate(['/']);
          },
          error: () => alert('Error al crear el usuario. Por favor, inténtelo de nuevo.')
        });
      }
    } else {
      this.userForm.markAllAsTouched();
    }
  }

}
