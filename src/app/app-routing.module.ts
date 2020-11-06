import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDepartamentoComponent } from './components/departamentos/add-departamento/add-departamento.component';
import { ListarDepartamentoComponent } from './components/departamentos/listar-departamento/listar-departamento.component';
import { UpdateDepartamentoComponent } from './components/departamentos/update-departamento/update-departamento.component';

const routes: Routes = [
  {path: '',redirectTo:"/home", pathMatch: "full"},
  {path: 'listar',component:ListarDepartamentoComponent},
  {path: 'add/dep', component:AddDepartamentoComponent},
  {path: 'upd/dep', component:UpdateDepartamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
