import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarDepartamentoComponent } from './components/departamentos/listar-departamento/listar-departamento.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
