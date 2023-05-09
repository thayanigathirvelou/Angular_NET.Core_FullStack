import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SharedService } from "src/app/shared.service";
import { Students } from 'src/app/Models/students.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-stu',
  templateUrl: './add-edit-stu.component.html',
  styleUrls: ['./add-edit-stu.component.css']
})
export class AddEditStuComponent implements OnInit {


  @Input() popupenable: boolean =false;


/* 
  @Output()
  outputFromChild: EventEmitter<any> = new EventEmitter<any>() */



 /*  student: Students = {
    studentId:0,
    fullName:'',
    class:''

  }; */

  @Input() student: any;
  StudentId:string="";
  FullName: string ="";
  Class: string ="";
  @Input() Studentadd :boolean = false;

  @Input() content:boolean = false;

  
  

  //@Output() countChanged: EventEmitter<any> =   new EventEmitter();



  
  submitted = false;
  message='';
  isSubmitted=false;




  constructor(private service: SharedService,
    private router: Router) { 
      
    }

  ngOnInit(): void {
    console.log(this.student);

    console.log(this.content);

    if(this.content)
    {
      this.StudentId = this.student.studentId;
      this.FullName = this.student.fullName;
      this.Class = this.student.class; 

    }
  
      

    
  }


  /* gotoHome() {
    this.router.navigate(['/home']);
  } */


  addStudent(){

    this.popupenable=true;
    /* const data = {
      Studentid: this.student.studentId,
      FullName:this.student.fullName,
      Class:this.student.class
    }; */
    var val = {
      FullName:this.FullName,
      Class:this.Class};

      console.log(val);
      this.service.addStudent(val).subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was added successfully!';
          //this.Router.navigate(['/home']);
          alert(this.message);
    })
  }


  Editstudent() {

    this.popupenable=true;
    this.Studentadd =false;

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

        var val = {studentId:this.StudentId,
          fullName:this.FullName,
          class:this.Class};
          console.log(val);
          
          this.service.updateStudent(this.StudentId,val).subscribe(
            response => {
              console.log(response);
              this.message = 'The tutorial was updated successfully!';
              //this.Router.navigate(['/home']);
              alert(this.message);
        })
      
    }

    /* this.service.addStudent(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
      this.gotoHome(); */
     
      
}
  




  
