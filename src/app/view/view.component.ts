import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  viewdetails: any = []
  errorMsg: string = ''
  group: string = ''
  constructor(private api: ApiService, private viewRouter: ActivatedRoute) {

  }
  ngOnInit(): void {
    // get student id from its url
    this.viewRouter.params.subscribe({
      next: (data: any) => {
        // destructuring data object
        const { id } = data
        console.log(id);
        // api call to get  particular student details
        this.api.viewDetails(id).subscribe({
          next: (response: any) => {
            console.log(response);
            const { groupId } = response
            this.api.getGroup(groupId).subscribe({
              next: (result: any) => {
                console.log(result);
                const {name}=result
                this.group = name
              }
            })
            this.viewdetails = response

          },
          error: (err: any) => {
            console.log(err.message);
            this.errorMsg = err.message

          }


        })
      }

    })

    // api call to get group id


  }
}
