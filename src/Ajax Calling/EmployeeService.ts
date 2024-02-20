import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EmployeeOperation{
    constructor(private http:HttpClient){

    }
    GetEmployees(){
        return this.http.get("https://ciitinstitute.com/api/dummyemployee");
    }
    AddEmployee(e:any){
        return this.http.post("https://ciitinstitute.com/api/dummyemployee",e)
    }
    UpdateEmployee(e:any){
        return this.http.put("https://ciitinstitute.com/api/dummyemployee",e)
    }
    DeleteEmployee(eid:any){
        return this.http.delete("https://ciitinstitute.com/api/dummyemployee",eid)
    }

}