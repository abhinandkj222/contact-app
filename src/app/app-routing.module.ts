import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // all contact:path :http://localhost:4200/
  {
    path:'',component:AllContactsComponent
  },
  // add contacts http://localhost:4200/add-contact

  {
path:'add-contact',component:AddContactComponent
  },
  // view contact http://localhost:4200/
  {
    path:'view-contact/:id',component:ViewContactComponent
  },
  // edit component
  {
    path:'edit-contact/:id',component:EditContactComponent

  },
  // page nit found
{
  path:'**' , component:PageNotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
