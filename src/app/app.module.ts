import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';


import { LoginComponent } from './commons/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeMainComponent } from './commons/components/home-main/home-main.component';
import { NavHeaderComponent } from './commons/components/nav-header/nav-header.component';
import { AdministracionMensualComponent } from './commons/components/administracion-mensual/administracion-mensual.component';
import { AdministracionMensualChildComponent } from './commons/components/administracion-mensual/administracion-mensual-child/administracion-mensual-child.component';
import { ResumenInventarioComponent } from './commons/components/administracion-mensual/resumen-inventario/resumen-inventario.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeMainComponent,
    NavHeaderComponent,
    AdministracionMensualComponent,
    AdministracionMensualChildComponent,
    ResumenInventarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
