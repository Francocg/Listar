import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-listar-departamento',
  templateUrl: './listar-departamento.component.html',
  styleUrls: ['./listar-departamento.component.css']
})
export class ListarDepartamentoComponent implements OnInit {
  departamento:Departamento[];
  displayedColumns :string[] = ['ID_DEPARTAMENTO','DEPART_NAME']
  constructor(private depatamentoService:DepartamentoService) { }

  ngOnInit(): void {
    this.depatamentoService.getDepartamento().subscribe(
      (data)=>{
        this.departamento =data['cursor_departamento'];
        alert(this.departamento);
      }
    )  
  }


}
