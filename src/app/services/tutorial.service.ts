import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../modelos/tutorial.model';

const baseUrl = 'http://localhost:8080/api/tutoriales';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

    constructor(private http: HttpClient) { }
    getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl);
    }
    get(id: any): Observable<Tutorial> {
    return this.http.get(`${baseUrl}/${id}`);
    }
    create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
    }
    update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
    }
    delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
    }
    deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
    }
    findByTitulo(titulo: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?titulo=${titulo}`);
    }
}
