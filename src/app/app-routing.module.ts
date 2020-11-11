import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarDepartamentoComponent } from './components/buscar-departamento/buscar-departamento.component';
import { AddDepartamentoComponent } from './components/departamentos/add-departamento/add-departamento.component';
import { DatosBuscarComponent } from './components/departamentos/datos-buscar/datos-buscar.component';
import { ListarDepartamentoComponent } from './components/departamentos/listar-departamento/listar-departamento.component';
import { UpdateDepartamentoComponent } from './components/departamentos/update-departamento/update-departamento.component';

const routes: Routes = [
 // {path: '',redirectTo:"/home", pathMatch: "full"},
  {path: 'listar',component:ListarDepartamentoComponent},
  {path: 'dep/add', component:AddDepartamentoComponent},
  {path: 'update/:id', component:UpdateDepartamentoComponent},
  {path: 'bus/dep', component:BuscarDepartamentoComponent},
  {path: 'dat/bus', component:DatosBuscarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
