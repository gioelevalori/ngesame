import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private http: HttpClient) { }

  list(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/posts');
  }

  jsontest(): Observable<any>{
    return this.http.get('assets/jsonapi/test.json');
  }

  show(id: number): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/posts/'+id);
  }

  update(id: number, titolo: string, testo: string) {
    return this.http.put('http://127.0.0.1:8000/api/posts/'+id,{titolo,testo} , {headers: {Authorization: 'Bearer 2|AoxRTEVSGhIeizI1EqPw6SHoPMrnckI00wYrX1fE'}});
  }

}

