import { TrackModel } from '@core/models/tracks.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) {

  }

  getAllTracks$(): Observable<any> {
    console.log('ok getAllTracks servicio')
    return this.http.get('${this.URL}/tracks');
  }

  addTrack$(data: any): Observable<any> {
    return this.http.post('${this.URL}/add', data);
  }

  updateTrack$(data: any): Observable<any> {
    return this.http.put(`${this.URL}/edit/${data.uid}`, data);
  }

  deleteTrack$(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/delete/${id}`);
  }



}