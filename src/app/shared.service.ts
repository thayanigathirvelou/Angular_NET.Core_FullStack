import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Students } from './Models/students.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
    readonly APIUrl = "https://localhost:44325/api";
    constructor(private http: HttpClient) {}
    getStudentList(): Observable <Students[]> {
        console.log(this.APIUrl + '/contacts');
        return this.http.get <Students[]> (this.APIUrl + '/contacts');
        
    }

    getStudent(id: any): Observable<Students> {
        return this.http.get<Students>(this.APIUrl + '/contacts/' + id);
    }
    addStudent(val: any) {
        return this.http.post(this.APIUrl + '/contacts', val);
    }
    updateStudent(id:any,val: any){
        return this.http.put(this.APIUrl + '/contacts/'+ id, val);
    }

    /* updateStudent(id:any,val:any){
        return this.http.put(this.APIUrl + '/contacts/'+ id, val);
    } */
    deleteStudent(id: any) {
        return this.http.delete(this.APIUrl + '/contacts/' + id);
    }
   
    
}