import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SharedService } from "src/app/shared.service";
import { Students } from 'src/app/Models/students.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-stu',
  templateUrl: './edit-stu.component.html',
  styleUrls: ['./edit-stu.component.css']
})
export class EditStuComponent implements OnInit {

  
/* 
  @Input()
  student :Students =  {
    studentId:0,
    fullName:"",
    class:""

  }; */

  @Input() student:any;
  StudentId:string = "";
  FullName: string ="";
  Class: string ="";


 // studentId: any;
  isSubmitted = false;
  
  message: string | undefined;
  
  Router: any;

  modalTitle:any;
  activateAddEditStuCom:boolean = false;

  /* @Output()
  outputFromChild: EventEmitter<any> = new EventEmitter<any>() */
  
  
  
    constructor(private service: SharedService, 
      private route: ActivatedRoute,
      private router: Router) { }



    /* gotoHome() {
        this.router.navigate(['/home']);
    } */
  
    ngOnInit(): void {
      //console.log(this.route);
      //this.studentId = this.route.snapshot.paramMap.get('id');
      /* this.studentId=this.student.studentId;
      console.log(this.studentId);
      this.getEmployeeDetailById(); */

      this.StudentId = this.student.studentId;
      this.FullName = this.student.fullName;
      this.Class = this.student.class;
      console.log(this.StudentId);
  
      
      //this.outputFromChild.emit(this.student);
      
    }


  /*   getEmployeeDetailById() {
      this.service.getStudent(this.studentId).subscribe((data: any) => {
        if (data != null) {
          var resultData = data;
          if (resultData) {
            this.student.studentId=resultData.studentId;
            this.student.fullName=resultData.fullName;
            this.student.class=resultData.class;
          }
        }
      },
        (error: any) => { });
    } */

    Editstudent() {
      this.isSubmitted = true;
      
      /*   this.service.updateStudent(this.studentId, this.student).subscribe(
          response => {
            console.log(response);
            this.message = 'The tutorial was updated successfully!';
            this.Router.navigate(['/home']);
            alert(this.message);
            
          },
          error => {
            console.log(error);
          }); */

          var val = {StudentId:this.StudentId,
            FullName:this.FullName,
            Class:this.Class};
            console.log(val);
            
            this.service.updateStudent(this.StudentId,val).subscribe(
              response => {
                console.log(response);
                this.message = 'The tutorial was updated successfully!';
                //this.Router.navigate(['/home']);
                alert(this.message);
          })
      }

      closeClick(){
        this.activateAddEditStuCom=false;
        alert(this.message);
        
      }     
    
  }
  
    
  
    
