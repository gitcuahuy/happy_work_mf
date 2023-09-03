import {NgModule} from '@angular/core';
import {HpShareComponent} from './hp-share.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./auth/helpers/jwt.interceptor";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {registerLocaleData} from "@angular/common";
import vi from '@angular/common/locales/vi';
import {TranslateModule} from "@ngx-translate/core";
import {ToastrModule} from "ngx-toastr";
// import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {ScrollToModule} from "@nicky-lenaers/ngx-scroll-to";
import {ComponentsModule} from "./components/components.module";
import {LayoutModule} from "./layout/layout.module";
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {LanguageService} from "./core/language.service";

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

registerLocaleData(vi);
@NgModule({
  declarations: [
    HpShareComponent
  ],
  imports: [

    ScrollToModule.forRoot(),
    NgbNavModule,
    ComponentsModule,
    HttpClientModule,
    ToastrModule.forRoot({timeOut: 10000}), // ToastrModule added
    TranslateModule.forRoot(),
    LayoutModule,

  ],
  exports: [
    HpShareComponent,
    ComponentsModule,
    TranslateModule,
    LayoutModule,
    NgbNavModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    HttpClient,
    LanguageService
    ],
})
export class HpShareModule { }
