import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Studentschema } from 'src/models/contactschema';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  student:Studentschema={}
  groups:any=[]
    constructor(private editActivateRoute:ActivatedRoute,private api:ApiService ,private editRouter:Router ){
       
    }
    
    ngOnInit(): void {
      this.editActivateRoute.params.subscribe({
        next:(pathparameter:any)=>{
           const {id} =pathparameter
           console.log(id);
          //  call view contact epi
          this.api.viewDetails(id).subscribe({
            next:(response:any)=>{
       console.log(response);
       this.student=response
            }
          })
        }      
      })
      // get all groupsa
      this.api.getAllgroupDetails().subscribe({
        next:(allgroups:any)=>{
          this.groups=allgroups
          console.log(this.groups);
          
        }
      })
    }
    editstudent(id:any){
      // api call to edit student
      this.api.editstudent(id,this.student).subscribe({
        next:(response:any)=>{
        // naviget all student
        this.editRouter.navigateByUrl("")
        }
      })
    }

}
