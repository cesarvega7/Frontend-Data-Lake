import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionMensualComponent } from './commons/components/administracion-mensual/administracion-mensual.component';
import { HomeMainComponent } from './commons/components/home-main/home-main.component';
import { LoginComponent } from './commons/components/login/login.component';



//PROVE

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path:'home-main',
    component:HomeMainComponent
  },
  {
    path:'administracion-mensual',
    component:AdministracionMensualComponent
  },
  

];

const isIframe = window !== window.parent && !window.opener;
const _hash = true; // anteriormente ha estado en true
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: _hash,
      initialNavigation: !isIframe ? 'enabled' : 'disabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
