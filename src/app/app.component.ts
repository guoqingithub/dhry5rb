import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public translateService: TranslateService) {
  }

  ngOnInit() {
    /* --- set i18n begin ---*/
    this.translateService.addLangs(['zh', 'en']);
    this.translateService.setDefaultLang('zh');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    /* --- set i18n end ---*/
  }

  title = 'ReallyFresh';
}



