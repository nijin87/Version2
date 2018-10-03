import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

// import 'languageJson' from './configurations/dashboard_localization.json';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public languageDictionary: any = {};
  public languageList: any[] = [];
  public lastUpdatedTime: any;

  constructor( private http: HttpClient) {
    this.getLanguageDictionary().subscribe(data => {
      this.languageDictionary = data['en'];
      this.lastUpdatedTime = (new Date()).getTime();
     /* setTimeout(() => {
        this.languageDictionary = data['zh-CN'];
        this.lastUpdatedTime = (new Date()).getTime();
      }, 5000);*/
    });
  }
  public getLanguageDictionary() {
    return this.http.get('./configurations/dashboard_localization.json');
  }
}
