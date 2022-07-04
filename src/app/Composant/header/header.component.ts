import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pages: any[] = [
    {
      name: 'home',
      uri: 'home',
    },
    {
      name: 'products',
      uri: 'products',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
