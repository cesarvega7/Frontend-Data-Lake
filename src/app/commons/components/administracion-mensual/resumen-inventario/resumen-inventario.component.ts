import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

export interface Datos {
  FechaCarga: string;
  Usuario: string;
  EtapaProyecto: string;
  Archivo: string;
}
const ELEMENT_DATAv2: Datos[] = [
  {   FechaCarga:'09/19/2022', Usuario: 'Nelson R' ,EtapaProyecto:'LA ALAMEDA DEL RIMAC - ETAPA 4',Archivo:'31102022_user_xls'},
  {   FechaCarga:'09/19/2022', Usuario: 'Nelson R' ,EtapaProyecto:'LA ALAMEDA DEL RIMAC - ETAPA 4',Archivo:'31102022_user_xls'},
  {   FechaCarga:'09/19/2022', Usuario: 'Nelson R' ,EtapaProyecto:'LA ALAMEDA DEL RIMAC - ETAPA 4',Archivo:'31102022_user_xls'},
  {   FechaCarga:'09/19/2022', Usuario: 'Nelson R' ,EtapaProyecto:'LA ALAMEDA DEL RIMAC - ETAPA 4',Archivo:'31102022_user_xls'},
  {   FechaCarga:'09/19/2022', Usuario: 'Nelson R' ,EtapaProyecto:'LA ALAMEDA DEL RIMAC - ETAPA 4',Archivo:'31102022_user_xls'},
  {   FechaCarga:'09/19/2022', Usuario: 'Nelson R' ,EtapaProyecto:'LA ALAMEDA DEL RIMAC - ETAPA 4',Archivo:'31102022_user_xls'},
  {   FechaCarga:'09/19/2022', Usuario: 'Nelson R' ,EtapaProyecto:'LA ALAMEDA DEL RIMAC - ETAPA 4',Archivo:'31102022_user_xls'},
];

@Component({
  selector: 'app-resumen-inventario',
  templateUrl: './resumen-inventario.component.html',
  styleUrls: ['./resumen-inventario.component.scss']
})
export class ResumenInventarioComponent implements OnInit {
  displayedColumns: string[] =['FechaCarga', 'Usuario', 'EtapaProyecto', 'Archivo','select'];
  dataSource = new MatTableDataSource<Datos>(ELEMENT_DATAv2);
  selection = new SelectionModel<Datos>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  myfilename='Seleccione archivo';
  constructor() { }
  tooltip="1. Código de artículo\n2. Nombre del producto\n3. Configuración \n4. Tamaño \n5.Color" +
          "\n6. Estilo \n7. Inventario Físico \n8. Importe de Coste Financiero \n9. Importe de Coste Físico"
  ngOnInit(): void {
  }

}
