import { Component, OnInit } from '@angular/core';
import { OrdreService } from '../ordre.service';

@Component({
  selector: 'app-ajouterordre',
  templateUrl: './ajouterordre.component.html',
  styleUrl: './ajouterordre.component.css'
})
export class AjouterordreComponent implements OnInit {


constructor(private service : OrdreService){};

isModalOpen = false;

ordre: any = {
  "id": 0,
  "matricule": "",
  "client":0 ,
  "chargementNom": "",
  "chargementAdr1": "",
  "chargementAdr2": "",
  "chargementVille": "",
  "chargementDate": "",
  "livraisonNom": "",
  "livraisonAdr1": "",
  "livraisonAdr2": " ",
  "livraisonVille": "",
  "livraisonDate": "",
  "codeArticle": "",
  "designation": "",
  "ut": "",
  "dev": "",
  "uf": "",
  "qteTrs": 0.0,
  "qteTaxee": 0.0,
  "prixUnitaire": 0.0,
  "montant1": 0.0,
  "act": "",
  "frais": 0.0,
  "numeroFR": "",
  "poids": 0.0,
  "volume": 0.0,
  "nombrePalettes": 0,
  "nombreColis": 0,
  "longueur": 0.0,
  "reference": "",
  "dateSaisie": "",
  "montant": 0.0,
  "statut": "NON_CONFIRME",
  "commentaires": []
  
};
  ordres:any[]=[];
  ordrenconf:any[]=[];
  ngOnInit(): void {
    this.afficher();
    console.log(this.ordres)
    
  } 
  
  // Méthode pour afficher ou masquer le formulaire d'ajout de tâche
  
  afficher() {
    this.service.afficher().subscribe(ordres => {this.ordres = ordres;

      for(let i of ordres){

        if(i.statut=='NON_CONFIRME'){
           this.ordrenconf.push(i);

        }
      }
     
    });
   
  }
  openModal() {
    this.isModalOpen = true;
  }

  closeModal(event?: MouseEvent) {
    this.isModalOpen = false;
  }
consulter(i:any){

this.ordre=i;
this.openModal

}


confirmer(i:any){

  this.service.confirmer(i);
}

}
