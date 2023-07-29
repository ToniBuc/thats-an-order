import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ThemeStorageService, THEME_STORAGE_SERVICE } from "./theme-storage.service";
import { Theme } from "./theme-toggle.model";

@Injectable()
export class ThemeToggleService {
  private currentTheme: Theme = Theme.LIGHT;
  private themeChanged$ = new BehaviorSubject(this.currentTheme);

  constructor(
    @Inject(DOCUMENT) private document: Document, 
    @Inject(THEME_STORAGE_SERVICE) private themeStorage: ThemeStorageService
    ) {
    this.initTheme();
  }
  
  private initTheme() {
    const windowTheme = window.matchMedia("(prefers-color-scheme: light)");
    let initTheme = this.themeStorage.getCurrentTheme();
    if (!initTheme) {
        windowTheme.matches ? (initTheme = Theme.DARK) : (initTheme = Theme.LIGHT);
    }
    this.updateCurrentTheme(initTheme);
    this.document.body.classList.add(this.currentTheme);
  }

  private updateCurrentTheme(theme: Theme) {
    this.currentTheme = theme;
    this.themeChanged$.next(this.currentTheme);
    this.themeStorage.setNewTheme(this.currentTheme);
  }

  toggleTheme() {
    this.document.body.classList.toggle(Theme.LIGHT);
    this.document.body.classList.toggle(Theme.DARK);
    if (this.currentTheme === Theme.LIGHT) {
      this.updateCurrentTheme(Theme.DARK);
    } 
    else {
      this.updateCurrentTheme(Theme.LIGHT);
    }
  }
}