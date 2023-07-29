import { Injectable, InjectionToken } from "@angular/core";
import { Theme } from "./theme-toggle.model";

/**
 * Storage injection token
 */
export const THEME_STORAGE_SERVICE = new InjectionToken<ThemeStorageService>(
  "THEME_STORAGE"
);

/**
 * Service that provides methods to assign and retrieve the theme of the application to and from the local storage
 */
@Injectable()
export class ThemeStorageService {
  LOCAL_STORAGE_KEY: string = "theme";

  /**
   * function for setting the passed theme
   * @param theme 
   */
  setNewTheme(theme: Theme): void {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, theme.toString());
  }

  /**
   * function for getting the current theme
   */
  getCurrentTheme(): Theme {
    return localStorage.getItem(this.LOCAL_STORAGE_KEY) as Theme || undefined;
  }
}