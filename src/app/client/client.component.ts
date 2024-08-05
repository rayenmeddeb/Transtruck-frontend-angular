import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from '../client.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  client = {
    code: 0,
    civilite: "",
    type: "",
    statut: "",
    sType: "",
    confiere: false,
    societeFacturation: "",
    siteExploitation: "",
    service: "",
    nom: "",
    adresse: "",
    ville: "",
    pays: "",
    client: "",
    siret: "",
    idEdi: 0,
    idTva: 0,
    codeIso: 0,
    contact: "",
    numeroPortable: "",
    telephone: "",
    fax: "",
    email: ""
  };

  filteredClients: any[] = [];
  searchName: string = '';
  searchCode: string = '';
  clients: any[] = [];
  Detail = true;

  constructor(private modalService: NgbModal, private service: ClientService, private ser: NotificationService) { }

  ngOnInit(): void {
    this.afficher();
  }

  open(content: any) {
    this.modalService.open(content);
  }

  afficher() {
    this.service.afficher().subscribe(clients => {
      this.clients = clients;
      this.filterClients(); // Update filtered clients when data is fetched
    });
  }

  ajouter() {
    this.service.ajouter(this.client).subscribe((res) => {
      console.log(res);
      this.ser.notification.type = "Client";
      this.ser.notification.message = "Création d'un nouveau client :" + this.client.code + this.client.nom;
      this.ser.ajouternotification(this.ser.notification);
    });
  }

  supprimer(id: number) {
    this.service.supprimer(id).subscribe(
      (res) => {
        console.log("Client supprimé avec succès :", res);
        this.afficher(); // Refresh the client list
      }
    );
  }

  creer() {
    this.Detail = true;
  }

  detail(c: any) {
    this.client = c;
    this.Detail = false;
  }

  editer(c: any) {
    this.client = c;
    this.Detail = true;
  }

  filterClients(): void {
    this.filteredClients = this.clients.filter(client =>
      (this.searchName ? client.nom.toLowerCase().includes(this.searchName.toLowerCase()) : true) &&
      (this.searchCode ? client.code.toString().includes(this.searchCode) : true)
    );
  }

  saveClient() {
    console.log('Client sauvegardé:', this.client);
    this.modalService.dismissAll();
  }

  // Call filterClients when search criteria changes
  ngOnChanges(): void {
    this.filterClients();
  }
}
