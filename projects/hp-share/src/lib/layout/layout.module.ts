import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VerticalComponent} from "./vertical/vertical.component";
import {TopbarComponent} from "./topbar/topbar.component";
import {LayoutComponent} from "./layout.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    VerticalComponent,
    LayoutComponent,
    SidebarComponent,
    TopbarComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLinkWithHref,
    TranslateModule
  ]
})
export class LayoutModule {
}
