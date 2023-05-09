import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from "./student/student.component";
import { EditStuComponent } from './student/edit-stu/edit-stu.component';
import { ShowStuComponent } from './student/show-stu/show-stu.component';

const routes: Routes = [
  {path: 'home', component: ShowStuComponent },
  {path: 'EditEmployee/:id', component: EditStuComponent},
  {path: 'student', component: StudentComponent}
 
  //{path: 'product/:id' , component: ProductDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }