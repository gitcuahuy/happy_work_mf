import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CalendarHomeComponent} from './calendar-home/calendar-home.component';
import {LayoutComponent} from "../../../../hp-share/src/lib/layout/layout.component";
import {createTranslateLoader, HpShareModule} from "hp-share";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";

export const CALENDAR_ROUTES: Routes = [
  {
    path: '',
    component: CalendarHomeComponent,
    // component: LayoutComponent,
    // children: [{
    //   path: '',
    //   component: CalendarHomeComponent
    // }]
  },

];

@NgModule({
  declarations: [
    CalendarHomeComponent
  ],
  imports: [
    CommonModule,
    HpShareModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'vi',
    }),
    RouterModule.forChild(CALENDAR_ROUTES),
  ],
  providers: [HttpClient],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CalendarModule {
}
