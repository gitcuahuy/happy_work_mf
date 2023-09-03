import { Injectable } from '@angular/core';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader} from "@ngx-translate/core";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TranslateHttpLoaderCustomService  implements TranslateLoader{


  constructor() { }

  getTranslation(lang: string): Observable<Object> {
    return of({});
  }
}
