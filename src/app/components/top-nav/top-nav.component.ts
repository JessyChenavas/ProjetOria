import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {VERSION} from '@angular/material/core';
import {NavItem} from '../../model/nav-item';
import {NavService} from '../../services/nav.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit, AfterViewInit {

  @ViewChild('appDrawer') appDrawer: ElementRef;

  navItems: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'home',
      route: ''
    },
    {
      displayName: 'Manage users',
      iconName: 'contacts',
      children: [
        {
          displayName: 'Students',
          iconName: 'contacts',
          route: 'students'
        },
        {
          displayName: 'Teachers',
          iconName: 'contacts',
          route: 'teachers'
        }
      ],
    },
    {
      displayName: 'Promotions',
      iconName: 'contacts',
      route: 'promotions'
    },
    {
      displayName: 'Sites',
      iconName: 'contacts',
      route: 'sites'
    },
    {
      displayName: 'Courses',
      iconName: 'contacts',
      route: 'courses'
    },
    {
      displayName: 'Time Table',
      iconName: 'contacts',
      route: 'timetable'
    }
  ];

  constructor(public navService: NavService, public router: Router) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.navService.appDrawer = this.appDrawer;
  }
}
