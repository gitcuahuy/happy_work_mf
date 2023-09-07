import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VerticalComponent} from "./vertical/vertical.component";
import {TopbarComponent} from "./topbar/topbar.component";
import {LayoutComponent} from "./layout.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {RouterLinkActive, RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {SimplebarAngularModule} from "simplebar-angular";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import { PublicLayoutComponent } from './public-layout/public-layout.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    TopbarComponent,
    VerticalComponent,
    PublicLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLinkWithHref,
    TranslateModule,
    RouterLinkActive,
    SimplebarAngularModule,
    NgbDropdownModule
  ],
  exports: [
    LayoutComponent,
    SidebarComponent,
    TopbarComponent,
    VerticalComponent,
    PublicLayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {
}
