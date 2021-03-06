import { Component, OnInit } from '@angular/core';
import { NavItem } from './navItem';
import { MenuFacade } from '../../store/facades/menu.facade';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public mf: MenuFacade) {}

  items: NavItem[];

  ngOnInit() {
    this.items = [
      { title: 'Home', url: '/' },
      { title: 'Products', url: '/products' },
      { title: 'About', url: '/about' },
    ];
  }

  toggleMenu() {
    this.mf.toggleMenuVisibility();
  }
}
