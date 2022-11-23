import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-administracion-mensual',
  templateUrl: './administracion-mensual.component.html',
  styleUrls: ['./administracion-mensual.component.scss']
})
export class AdministracionMensualComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor() { }

  ngOnInit(): void {
  }
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
