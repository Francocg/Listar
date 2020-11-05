import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { ListarDepartamentoComponent } from './components/departamentos/listar-departamento/listar-departamento.component';
import { AddDepartamentoComponent } from './components/departamentos/add-departamento/add-departamento.component';
import { UpdateDepartamentoComponent } from './components/departamentos/update-departamento/update-departamento.component';
import { DepartamentoService } from './services/departamento.service';
import {MatMenuModule} from '@angular/material/menu';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListarDepartamentoComponent,
    AddDepartamentoComponent,
    UpdateDepartamentoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [
    DepartamentoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
