import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrdreService } from '../ordre.service';


@Component({
  selector: 'app-ordre',
  templateUrl: './ordre.component.html',
  styleUrl: './ordre.component.css'
})
export class OrdreComponent {



  isModalOpen = false;

  email = {
    to: '',
    subject: '',
    body: ''
  };

  openModal() {
    this.isModalOpen = true;
console.log(this.email.to)
    
  }

  closeModal(event?: MouseEvent) {
    this.isModalOpen = false;
  }

  onSubmit() {
    console.log('Email envoyé:', this.email);
    // Ajoutez ici la logique pour envoyer l'email via un service Angular
    this.closeModal();
  }

  ///////////////////////////////////////////////////////////////////////////////////////////
  getEmail(clientId: number): void {
    this.service.getEmail(clientId).subscribe(
      response => {
        this.email.to = response;
      },
      error => {
        console.error('Error fetching email:', error);
      }
    );
  }

  ordre={
  "id": 4,
  "matricule": "BOUAR202407000001",
  "client": 1,
  "chargementNom": "Entrepôt A",
  "chargementAdr1": "123 Rue de Chargement",
  "chargementAdr2": "Bâtiment B",
  "chargementVille": "Ville A",
  "chargementDate": "2024-07-24",
  "livraisonNom": "Magasin B",
  "livraisonAdr1": "456 Avenue de Livraison",
  "livraisonAdr2": "Étage 2",
  "livraisonVille": "Ville B",
  "livraisonDate": "2024-07-25",
  "id_art": 1,
  "codeArticle": "ART001",
  "type": "Type A",
  "typeDeMarchandise": 1,
  "typeDeRemorque": "Remorque A",
  "unite": "kg",
  "quantiteMinimum": 10.0,
  "prixUnitaire": 100.0,
  "frais": 50.0,
  "numeroFR": "FR123456",
  "poids": 500.0,
  "volume": 3.0,
  "nombrePalettes": 10,
  "nombreColis": 100,
  "longueur": 2.0,
  "reference": "REF001",
  "numero": "ORD001",
  "dateSaisie": "2024-07-23T14:15:25.402+00:00",
  "montant": 1000.0,
  "statut": "NON_PLANIFIE",
  "trancking": {
      "id": 1,
      "departureDateTime": "2024-07-25T09:00:00",
      "depart": null,
      "loadingDateTime": "2024-07-25T10:00:00",
      "chargement": null,
      "deliveryDateTime": "2024-07-26T16:00:00",
      "livraison": null
  }
};

ordres:any[]=[];

constructor(private modalService: NgbModal ,private service: OrdreService) {}

ngOnInit(): void {
  this.afficher();
  
}

// Méthode pour afficher ou masquer le formulaire d'ajout de tâche

afficher() {
  this.service.afficher().subscribe(ordres => {this.ordres = ordres;
   
  });
 
}

detail(i:any){


  this.service.detail=i;
  console.log(this.service.detail);

}




getCellClass(ordre: any, phase: string): string {
  const status = ordre.statut;
  const tracking = ordre.trancking;

  if (status === 'NON_PLANIFIE') {
    return 'gray';
  }

  if (status === 'PLANIFIE') {
    if (phase === 'departure') return 'yellow';
    return 'gray';
  }

  if (status === 'EN_COURS_DE_CHARGEMENT') {
    if (phase === 'departure') return 'green';
    if (phase === 'loading') return 'yellow';
    return 'gray';
  }

  if (status === 'EN_COURS_DE_LIVRAISON') {
    if (phase === 'departure' || phase === 'loading') return 'green';
    if (phase === 'delivery') return 'yellow';
    return '';
  }

  if (status === 'LIVRE') {
    return 'green';
  }

  return '';
}
}