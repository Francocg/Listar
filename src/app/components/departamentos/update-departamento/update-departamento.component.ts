import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-update-departamento',
  templateUrl: './update-departamento.component.html',
  styleUrls: ['./update-departamento.component.css']
})
export class UpdateDepartamentoComponent implements OnInit {
  departamentos:any;
  departamento:Departamento=new Departamento();

  constructor(private departamentoService:DepartamentoService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarDepartamento();
  }
  cargarDepartamento():void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.departamentoService.getDepartamento(id).subscribe(
          (data)=>{
            this.departamentos=data['cursor_departamento']
           
            this.departamento.depart_name=this.departamentos[0].DEPART_NAME;
            this.departamento.id_departamento=this.departamentos[0].ID_DEPARTAMENTO;
            
          })
        
        
        
      }
    })
  }
  modificarDepartamento():void{
    this.departamentoService.updateDepartamento(this.departamento).subscribe(
      response=>{
        swal.fire({
          title: 'Estas seguro?',
          text: "No podras revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, update it!'
       
        }).then((result) =>{
          if(result.isConfirmed){
            this.router.navigate(['/listar'])
            swal.fire(
              'Actualizado!',
              'El registro ha sido Modificado.',
              'success'
            )
          }
        })
      })
  }
}
