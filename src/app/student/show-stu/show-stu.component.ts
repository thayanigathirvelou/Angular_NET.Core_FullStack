import { Component, Input, OnInit } from '@angular/core';
import { Students } from 'src/app/Models/students.model';
import { SharedService } from "src/app/shared.service";

@Component({
  selector: 'app-show-stu',
  templateUrl: './show-stu.component.html',
  styleUrls: ['./show-stu.component.css']
})
export class ShowStuComponent implements OnInit {

  modalTitle:any;
  activateAddEditStuCom:boolean = false;
  // Studentadd :boolean=false;

  addoredit:boolean = false;




  //employeesFromChild: any;
  

 
  

  student:any;

  studentList:any = [];
  Studentadd: boolean =false;


  popupenable: boolean =false;
  content: boolean=false;
  
  //students: Students[]=[];

  
/* 
  public masterArray:Array<Object> = [
    {firstname: '', age:0,jobProfile:''}
  ]; */

  

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.refreshStudentList();
    
    
  }

  refreshStudentList() {
    this.sharedService.getStudentList().subscribe(data =>{
      //console.log(data);
      //this.students = data;
      this.studentList=data;
      
      
    });
  }
/*
  countChangedHandler(student:any) {
    this.ClickCounter = student;
    console.log(student);
  }*/


  AddStudent(){
    this.popupenable=true;
    this.Studentadd =true;
    
    
    this.student={
      studentId:0,
      fullName:"",
      class:""
    }
    this.content=false;
    //console.log(this.content);
    
    this.modalTitle = "Add Student";
    this.activateAddEditStuCom = true; 
  }
 
  EditStudent(item: any){

    this.popupenable=true;
    this.student = item;
    this.content=true;
    this.Studentadd = false;
    this.activateAddEditStuCom = true;
    this.modalTitle = "Update Student";
    console.log(this.student);
  }

  
  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.sharedService.deleteStudent(item.studentId).subscribe(data =>{
        this.refreshStudentList();
      })
    }
  }

  closeClick(){
    this.activateAddEditStuCom=false;
    this.refreshStudentList();
    this.popupenable=false;
  }
  
 
}