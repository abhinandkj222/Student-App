import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { EditComponent } from './edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    PageNotfoundComponent,
    ViewComponent,
    FilterPipe,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
