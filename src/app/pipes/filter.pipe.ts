import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allStudentDetails:any[],searchKey:string,propertyname:string):any[] {
    const result:any=[]
    if(!allStudentDetails || searchKey=="" || propertyname=="" ){
      return allStudentDetails
    }
    allStudentDetails.forEach((item:any)=>{
      if(item[propertyname].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
      
    })
    return result ;
  }

}
