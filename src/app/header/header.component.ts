import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { NadpisComponent } from './nadpis/nadpis.component';

@Component({
  selector: 'app-header',
  imports: [LogoComponent, NadpisComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
