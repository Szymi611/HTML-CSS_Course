import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private privateData =[]
  private apiurl ="https://jsonplaceholder.typicode.com/users"
  constructor(private http: HttpClient) { 

  }

  getData(){
    return this.http.get(this.apiurl)
  }

}
