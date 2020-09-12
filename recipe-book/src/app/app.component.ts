import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { LogginService } from './loggin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private loggingService: LogginService
  ) {}

  ngOnInit() {
    this.authService.autoLogin();
  }
}
