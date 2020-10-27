import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ListService {
    private apiUrl = environment.apiBackUrl

    public list: BehaviorSubject<any>= new BehaviorSubject([])

    constructor(
        private http: HttpClient
    ) {
    }


    getList() {
        return this.http.get(this.apiUrl + "/list").pipe(map((res:any[])=>{
            this.list.next(res)
            return res
        }))
    }

    saveElem(elem) {
        return this.http.post(this.apiUrl + "/list", elem).pipe(map((res:any[])=>{
            this.getList().subscribe()
        }))
    }

    deleteElem(elemId) {
        return this.http.delete(this.apiUrl + "/list/" + elemId).pipe(map((res:any[])=>{
            this.getList().subscribe()
        }))
    }


}
