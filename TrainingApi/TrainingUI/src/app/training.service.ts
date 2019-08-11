import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from './training'

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  url = 'http://localhost:61916//api/training';  
  constructor(private http: HttpClient) { }  

  createTraining(training: Training): Observable<Training> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Training>(this.url + '/Post/',  
    training, httpOptions);  
  }  
}
