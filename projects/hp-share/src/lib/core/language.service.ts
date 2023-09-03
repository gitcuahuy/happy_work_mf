import {Injectable, Injector} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root', deps: [TranslateService, HttpClient]})
export class LanguageService {
  public languages: string[] = ['en', 'es', 'de', 'it', 'ru'];

  constructor(
    // public translate: TranslateService,
    private cookieService: CookieService) {
    setTimeout(() => {
      // const translateService = this.injector.get(TranslateService);
      // console.log(translateService)
    },2000)
    // let browserLang: string | undefined;
    // this.translate.addLangs(this.languages);
    // if (this.cookieService.check('lang')) {
    //   browserLang = this.cookieService.get('lang');
    // } else {
    //   browserLang = translate.getBrowserLang();
    // }
    // translate.use(browserLang?.match(/en|es|de|it|ru/) ? browserLang : 'en');
  }

  public setLanguage(lang: string): void {
    // this.translate.use(lang);
    this.cookieService.set('lang', lang);
  }

}
