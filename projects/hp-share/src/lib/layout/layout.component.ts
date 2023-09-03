import { Component, OnInit, AfterViewInit } from '@angular/core';


import {
  LAYOUT_VERTICAL, LAYOUT_HORIZONTAL, LAYOUT_WIDTH, TOPBAR
} from './layouts.model';
import {EventService} from "../core/event.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit, AfterViewInit {

  // layout related config
  layoutType: string;
  layoutwidth: string;
  topbar: string;

  constructor(private eventService: EventService) {
    // default settings
    this.layoutType = LAYOUT_VERTICAL;
    this.layoutwidth = LAYOUT_WIDTH;
    this.topbar = TOPBAR;
  }

  ngOnInit() {


    // listen to event and change the layout, theme, etc
    this.eventService.subscribe('changeLayout', (layout: string) => {
      this.layoutType = layout;
    });

    this.LayoutWidth(this.layoutwidth);

    this.eventService.subscribe('changeWidth', (width: string) => {
      this.layoutwidth = width;
      this.LayoutWidth(this.layoutwidth);
    });
  }

  ngAfterViewInit() {
  }

  LayoutWidth(width: string) {
    switch (width) {
      case "fluid":
        document.body.setAttribute("data-layout-size", "fluid");
        document.body.classList.remove("vertical-collpsed");
        document.body.removeAttribute("data-layout-scrollable");
        break;
      case "boxed":
        document.body.setAttribute("data-layout-size", "boxed");
        document.body.classList.add("vertical-collpsed");
        document.body.removeAttribute("data-layout-scrollable");
        break;
      // case "scrollable":
      //   document.body.removeAttribute("data-layout-size");
      //   document.body.setAttribute("data-layout-scrollable", "true");
      //   document.body.setAttribute("data-layout-size", "fluid");
      //   document.body.classList.remove("right-bar-enabled", "vertical-collpsed");
      default:
        document.body.setAttribute("data-layout-size", "fluid");
        break;
    }
  }

  /**
   * Check if the vertical layout is requested
   */
  isVerticalLayoutRequested() {
    return this.layoutType === LAYOUT_VERTICAL;
  }

  /**
   * Check if the horizontal layout is requested
   */
  isHorizontalLayoutRequested() {
    return this.layoutType === LAYOUT_HORIZONTAL;
  }
}
