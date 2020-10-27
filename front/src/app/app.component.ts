import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  appReady=false

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.initApp().subscribe(() => {
      console.log("appInit")
      this.appReady = true
    })

    this.authService.isConnected().subscribe(res=>{
      console.log(res)
      if(res){
        this.router.navigate(['/'])
        return 
      }
      this.router.navigate(['/offline'])

    })
  }


}
