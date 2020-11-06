import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-add-departamento',
  templateUrl: './add-departamento.component.html',
  styleUrls: ['./add-departamento.component.css']
})
export class AddDepartamentoComponent implements OnInit {

  constructor(private departamentoService:DepartamentoService,private router:Router) { }

  ngOnInit(): void {
  }
  departamentoModel:Departamento = new Departamento();
  onSubmit(){

  }
  

}
