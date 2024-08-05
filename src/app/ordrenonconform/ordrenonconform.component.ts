import { Component } from '@angular/core';
import { OrdreService } from '../ordre.service';

@Component({
  selector: 'app-ordrenonconform',
  templateUrl: './ordrenonconform.component.html',
  styleUrl: './ordrenonconform.component.css'
})
export class OrdrenonconformComponent {


  constructor(private service:OrdreService){}

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

commentaire="";

  ajouter() {
    this.service.ajouter(this.ordre).subscribe((res) => {
      console.log(res);
     
    });

this.ordre= {
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
       new window.Notification("success"); 


  }

  ajoutercommentaire(i:any){

this.ordre.commentaires.push(i);
this.commentaire="";

}

}
