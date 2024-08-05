import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { ArticleComponent } from './article/article.component';
import { UsersComponent } from './users/users.component';
import { LayoutComponent } from './layout/layout.component';
import { OrdreComponent } from './ordre/ordre.component';
import { AjouterordreComponent } from './ajouterordre/ajouterordre.component';
import { OrdrenonconformComponent } from './ordrenonconform/ordrenonconform.component';
import { OrdredetailComponent } from './ordredetail/ordredetail.component';
import { EmailsComponent } from './emails/emails.component';
import {  MaterialComponent} from './material/material.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
  { path: 'material', component: MaterialComponent,  children: [
   
    { path: 'articles', component: ArticleComponent },
    { path: 'clients', component: ClientComponent },
    { path: 'ordres', component: OrdreComponent },
    { path: 'ordredetail', component: OrdredetailComponent },
    { path: 'nonplannifies', component: OrdrenonconformComponent },
    { path: 'ajouter', component: AjouterordreComponent },
    { path: 'utilisateurs', component: UsersComponent },
    {path:'email',component:EmailsComponent}
  ]}
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
