import { Component } from '@angular/core';
import { OrdreService } from '../ordre.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-ordredetail',
  templateUrl: './ordredetail.component.html',
  styleUrl: './ordredetail.component.css'
})
export class OrdredetailComponent {
  constructor(private service: OrdreService){}
   ordre:any=this.service.detail;

  
   public generatePDF(): void {
    const DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      const fileWidth = 155;
      const fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
}
