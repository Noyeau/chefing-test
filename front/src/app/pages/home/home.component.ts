import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  elem=null
  constructor(
    private dialogService: DialogService,
    private authService: AuthService

  ) { }

  ngOnInit() {
  }


  createElem(){
    this.dialogService.openForm(null, "Ajouter un élément")
  }

  logOut(){
    this.authService.logOut()
  }
}
