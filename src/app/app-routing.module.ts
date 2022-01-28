import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './pages/contacts/contacts.component';
import { EditComponent } from './pages/contacts/edit/edit.component';
import { ContactService } from './shared/services/contact/contact.service';



const routes: Routes = [
  {
    path: "",
    component: ContactsComponent,
  },
  {
    path: "contact/add",
    component: EditComponent
  },
  {
    path: "contact/edit/:id",
    component: EditComponent
  },
  { path: '**', redirectTo: '/' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
