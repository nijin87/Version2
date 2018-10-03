import { Component, OnInit, InjectionToken } from '@angular/core';
import { HeaderService } from '../../services/HeaderService/header.service';
import { LanguageService } from '../../services/languageService/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private headerService: HeaderService,
    public languageService: LanguageService
  ) { }
  dateTimes: Date;
  dateTimesConverted: Date;
  langPopup: boolean;
  langIcon: string;
  LOCALE_ID: InjectionToken<string>;
  navbarOpen = false;

  ngOnInit() {
    this.langIcon = 'assets/images/us.svg';
    this.langPopup = false;
    this.headerService.isDeviceConnencted();
    setTimeout(() => {
      this.dateTimes = new Date();
    }, 2500);

    setTimeout(() => {
      this.dateTimesConverted = new Date();
    }, 2500);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  tooglelanguage() {
    this.langPopup = !this.langPopup;
  }

  changeLanguage(lngArg) {
    if (lngArg === 'en') {
      // this.translateService.use(language);
      this.langIcon = 'assets/images/us.svg';
  } else if (lngArg === 'zh-CN') {
      // this.translateService.use(language);
      this.langIcon = 'assets/images/china.svg';
  }
  this.langPopup = !this.langPopup;
  }
}
