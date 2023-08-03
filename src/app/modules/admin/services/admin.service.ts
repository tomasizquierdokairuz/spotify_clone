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
    return this.http.get('https://backend-spotify-bootcamps-tribe.onrender.com/api/1.0/tracks');
  }

  addTrack$(data: any): Observable<any> {
    return this.http.post('https://backend-spotify-bootcamps-tribe.onrender.com/api/1.0/tracks/add', data);
  }

  updateTrack$(data: any): Observable<any> {
    return this.http.put(`https://backend-spotify-bootcamps-tribe.onrender.com/api/1.0/tracks/edit/${data.uid}`, data);
  }

  deleteTrack$(id: number): Observable<any> {
    return this.http.delete(`https://backend-spotify-bootcamps-tribe.onrender.com/api/1.0/tracks/delete/${id}`);
  }



}