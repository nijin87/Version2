import { Component } from '@angular/core';
import { LanguageService } from './shared/services/languageService/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DDSAP';
  constructor( private languageService: LanguageService){}
}
