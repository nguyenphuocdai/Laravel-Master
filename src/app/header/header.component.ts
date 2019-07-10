import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
declare var $: any;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    $(
      ".primary-menu ul.navbar-nav li.dropdown, .login-signup ul.navbar-nav li.dropdown"
    ).on("mouseover", function() {
      if ($(window).width() > 991) {
        $(this)
          .find("> .dropdown-menu")
          .stop()
          .slideDown("fast");
        $(this).bind("mouseleave", function() {
          $(this)
            .find("> .dropdown-menu")
            .stop()
            .css("display", "none");
        });
      }
    });
  }
  isActiveSendRequestRouter() {
    // router  is an instance of Router, injected in the constructor
    return this.router.isActive('/request-money', true) || this.router.isActive('/send-money',true) ? 'active' : '';
  }

  isActiveRouter() {
    // router  is an instance of Router, injected in the constructor
    return this.router.isActive('/request-money', true) || this.router.isActive('/send-money',true) ? 'active' : '';
  }
}
