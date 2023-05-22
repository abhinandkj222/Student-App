import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
// student dashboard
{
path: '', component:StudentDashboardComponent
},


//   page not found
//   {
// path:'**' , component:PageNotfoundComponent
//   },
  {
    path:'view/:id' , component:ViewComponent
  },
  {
  path:'edit/:id' , component:EditComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
