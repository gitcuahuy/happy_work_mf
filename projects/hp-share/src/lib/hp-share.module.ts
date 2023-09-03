import {NgModule} from '@angular/core';
import {HpShareComponent} from './hp-share.component';
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import {JwtInterceptor} from "./auth/helpers/jwt.interceptor";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {registerLocaleData} from "@angular/common";
import vi from '@angular/common/locales/vi';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {ToastrModule} from "ngx-toastr";
// import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {ScrollToModule} from "@nicky-lenaers/ngx-scroll-to";
import {ComponentsModule} from "./components/components.module";
import {LayoutModule} from "./layout/layout.module";

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

registerLocaleData(vi);
@NgModule({
  declarations: [
    HpShareComponent
  ],
  imports: [

    ScrollToModule.forRoot(),
    // NgbNavModule,
    ComponentsModule,
    LayoutModule,
    ToastrModule.forRoot({timeOut: 10000}), // ToastrModule added
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    HpShareComponent,
    ComponentsModule,
    TranslateModule,
    LayoutModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    ]
})
export class HpShareModule { }
