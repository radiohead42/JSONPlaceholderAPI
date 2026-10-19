import { Routes } from '@angular/router';
import { UserList } from './components/user-list/user-list';
import { UserDetail } from './src/app/components/user-detail/user-detail';
import { UserForm } from './src/app/components/user-form/user-form';

export const routes: Routes = [

  { path: '', component: UserList },
  { path: 'user/create', component: UserForm },
  { path: 'user/edit/:id', component: UserForm },
  { path: 'user/:id', component: UserDetail },
  { path: '**', redirectTo: '' }

];
