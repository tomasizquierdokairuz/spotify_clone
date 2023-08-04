import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackModel } from '@core/models/tracks.model';
import { AdminService } from '@modules/admin/services/admin.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  //listResults$: Observable<any> = of([])
  constructor(private adminService: AdminService,    private cookieService: CookieService,private router: Router) { }
  tracksTrending: Array<any> = []

  ngOnInit(): void {
    console.log('ok loadDataAll')
    const role = this.cookieService.get('ROLE')
    if (role == "admin" )
      this.loadDataAll()
    else
      this.router.navigate(['/', 'tracks'])
  }


  loadDataAll(): void{
    
    this.adminService.getAllTracks$().subscribe((responseOk)=>{
      console.log('ok getAllTracks', responseOk)

      const {data} = responseOk
      console.log('ok getAllTracks', data)
      console.log('ok getAllTracks', data.uid)
      this.tracksTrending = data
    })
}



}