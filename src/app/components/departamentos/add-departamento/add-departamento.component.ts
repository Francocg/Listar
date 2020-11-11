import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute} from '@angular/router';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-departamento',
  templateUrl: './add-departamento.component.html',
  styleUrls: ['./add-departamento.component.css']
})
export class AddDepartamentoComponent implements OnInit {
  departamentoModel:Departamento = new Departamento();

  constructor(private departamentoService:DepartamentoService,private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {}

 public create():void{
   console.log(this.departamentoModel)
   this.departamentoService.addDepartamento(this.departamentoModel).subscribe(
     response=>{
       this.router.navigate(['/listar'])
      swal.fire('Nuevo Departamento', `Departamento ${this.departamentoModel.depart_name} creado con exito`,"success")  
     }
   )
 }
  

}
