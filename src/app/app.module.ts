import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ArticleComponent } from './article/article.component';
import { OrdreComponent } from './ordre/ordre.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AjouterordreComponent } from './ajouterordre/ajouterordre.component';
import { OrdrenonconformComponent } from './ordrenonconform/ordrenonconform.component';
import { OrdredetailComponent } from './ordredetail/ordredetail.component';
import { EmailsComponent } from './emails/emails.component';
import { MaterialComponent } from './material/material.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    ArticleComponent,
    OrdreComponent,
    UsersComponent,
    LoginComponent,
    AjouterordreComponent,
    OrdrenonconformComponent,
    OrdredetailComponent,
    EmailsComponent,
    MaterialComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
