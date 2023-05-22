import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Studentschema } from 'src/models/contactschema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
BASE_URL='https://student-app-f9s1.onrender.com'
  constructor(private http:HttpClient) { }



  // handle error
  handleError(error:HttpErrorResponse){
    let errorMsg:string=''
  

    if(error.error){
      // client error
      errorMsg =`Error: ${error.message}`
    }
    else{
      errorMsg = `status: ${error.status} \n Error: ${error.message}`
    }
    return throwError(()=>errorMsg)

  }

  // get all student details

  getallStudentDetails(){
    // api call
 return this.http.get(`${this.BASE_URL}/student`)
  }


  // viewdetais

  viewDetails(id:any){
// api call:http://localhost:3000/student/id
return this.http.get(`${this.BASE_URL}/student/${id}`) 
  }
  // groupdetails
getGroup(id:any){
  // api call:http://localhost:3000/groups/A
  return this.http.get(`${this.BASE_URL}/groups/${id}`)
}
// get all group
getAllgroupDetails(){
  // api call:http://localhost:3000/groups
  return this.http.get(`${this.BASE_URL}/groups`)
}

// add stydent
addStudent(student:Studentschema){
  // /api call
  return this.http.post(`${this.BASE_URL}/student`,student)
}

// delete
deleteStudent(id:any){
  // api call
  return this.http.delete(`${this.BASE_URL}/student/${id}`)
}
// edit particular
editstudent(id:any, student:Studentschema){
  return this.http.put(`${this.BASE_URL}/student/${id}`,student)

}

  
}
