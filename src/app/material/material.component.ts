import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {
  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  showOrdersSubMenu = false;

  isCollapsed = true;

  constructor(private observer: BreakpointObserver , private service:NotificationService) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });

    this.afficher();
  }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false;
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;    }
  }


  toggleSubMenu(menu: string) {
    if (menu === 'orders') {
      this.showOrdersSubMenu = !this.showOrdersSubMenu;
    }
  }

 


  showNotifications: boolean = false;
  notifications: any[] = [];
  clients:any[]=[];
  hasNewNotifications: boolean = this.service.read; // Indique qu'il y a de nouvelles notifications

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  

    if (this.showNotifications) {
      this.hasNewNotifications = false; // Réinitialiser l'état de nouvelles notifications
      for(let i of this.clients){

            i.isRead=false;

      }

    }
  }

 
  afficher() {
    this.service.afficher().subscribe(clients => {this.clients = clients;

      this.clients=this.clients.reverse();
    
    });



  }

}
