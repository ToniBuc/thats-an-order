import { Component, OnInit } from '@angular/core';
import { ThemeToggleService } from '../theme-toggle/theme-toggle.service';
import { Theme } from '../theme-toggle/theme-toggle.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logoSrc = '';

  constructor(
    private themeToggleService: ThemeToggleService
  ) { }

  ngOnInit() {
    this.themeToggleService.themeChanged$.subscribe(() => {
      if (this.themeToggleService.getCurrentTheme() === Theme.DARK) {
        this.logoSrc = "../../assets/thatsanorder-white.png";
      }
      else {
        this.logoSrc = "../../assets/thatsanorder-black.png";
      }
    })
  }
  
}
