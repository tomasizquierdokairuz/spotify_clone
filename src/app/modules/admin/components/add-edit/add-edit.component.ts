import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TrackModel } from '@core/models/tracks.model';
import { AdminPageComponent } from '@modules/admin/pages/admin-page/admin-page/admin-page.component';
import { AdminService } from '@modules/admin/services/admin.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})

export class AddEditComponent implements OnInit {
  @Input() tracks: any[]=[]
  tracksTrending: Array<TrackModel> = []
  
  Tracks = null as any;
  trackToUpdate = {
    name:"",
    album:"",
    cover:"",
    artist:"",
    durationStart:"",
    durationEnd:"",
    url:"",
    userEmail:"",
    uid:"",
  }

  visibleForm = false;

  constructor(private adminService: AdminService, private  adminpage: AdminPageComponent){}

  ngOnInit(): void{

  }

  addNewTrack(newTrackForm: NgForm) {
      this.adminService.addTrack$(newTrackForm.value).subscribe({
        next: (responseOk) => {
          console.log(responseOk);
          newTrackForm.reset();
          this.visibleForm = false;
          this.adminpage.loadDataAll();
        },
        error:(err) => {
          console.log('Falló el ingreso');
        },
        complete: () => console.info('Ingreso correcto') 
    });
  }

  deleteTrack(id: number) {
    console.log('ok loadDataAll cargo')
    this.adminService.deleteTrack$(id).subscribe({
      next: (responseOk) => {
        console.log(responseOk)
        this.visibleForm = false;
        this.adminpage.loadDataAll();
      },
      error: console.log,
    });
  }

  editTrack(track: any){
    console.log('Llegamos al edit',track)
    this.trackToUpdate = track;
    this.visibleForm = true;
  }

  insert(){
    console.log('Llegamos al insert')
    this.visibleForm = true;
    this.trackToUpdate =  {
      name:"",
      album:"",
      cover:"",
      artist:"",
      durationStart:"",
      durationEnd:"",
      url:"",
      userEmail:"",
      uid:"",
    };
  }

  updateTrack(){
    console.log(this.trackToUpdate);
    this.adminService.updateTrack$(this.trackToUpdate).subscribe({
      next:(responseOk) => {
        console.log(responseOk,this.trackToUpdate);
        this.visibleForm = false;
      },
      error:(err) => {
        console.log(err);
      }
    });
  }


  ngOnDestroy(): void {

  }


}


