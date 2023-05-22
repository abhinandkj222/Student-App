import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Studentschema } from 'src/models/contactschema';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  student:Studentschema={}
  allStudentDetails:any=[]
  isLoading:boolean = true
  errorMsg:string=''
  groups:any=[]
  todaydate:Date = new Date()
  searchKey:string=""
    constructor(private api:ApiService,private addRoute:Router, private editActivateRoute:ActivatedRoute ){
      this.student.groupId = "select a group"
    }
    ngOnInit(): void {
   


      this.getAllstudentdetails()

// getall group
       this.api.getAllgroupDetails().subscribe({
        next:(response:any)=>{
      console.log(response);
      this.groups = response
 } ,
 error:(err:any)=>{
  console.log(err.message);
  
 }
       })
      
      

    }

    

// get all student
getAllstudentdetails(){
  this.api.getallStudentDetails().subscribe({
    next:(response:any)=>{
      console.log(response);
      setTimeout(()=>{
        this.allStudentDetails = response
      this.isLoading = false
      },300)
    },
    error:(err:any)=>{
      console.log(err.message);
      this.errorMsg=err.message
      this.isLoading=false
      
    }
    
  })

}

    // add student
    addStudent(student:Studentschema){
      // call api
      this.api.addStudent(student).subscribe({
        next:(response:any)=>{
          console.log(response);
        //  load samepage
          this.getAllstudentdetails()          
         alert('successfully added')
        
          
        },
        error:(err:any)=>{
          console.log(err.message);
          
        }
      })
    }
    // delete student
    deleteStudent(id:any){
      this.api.deleteStudent(id).subscribe({
        next:(response:any)=>{
          this.getAllstudentdetails()
        },
        
      })
    }

   

}
