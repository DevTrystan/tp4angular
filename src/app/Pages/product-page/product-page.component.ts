import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {

  
  films: any[] = [
    {
      id: 1,
      nom: 'La cité de la peur',
      real: 'Alain Berbérian',
      synopsis:
        'Odile Deray, attachée de presse, vient au Festival de Cannes pour',
      annee: 1994,
      img: 'https://fr.web.img2.acsta.net/pictures/19/05/03/14/30/1132544.jpg',
      details: '',
    },
    {
      id: 2,
      nom: 'Le parrain',
      real: 'Francis Ford Coppola',
      synopsis:
        "En 1945, à New York, les Corleone sont une des 5 familles de la mafia. Don Vito Corleone, `parrain' de cette famille .",
      annee: 1972,
      img: 'https://www.bing.com/th?id=OIP.TAWFLJjZ-Pe5fRMfvexFlAHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2',
      details: '',
    },
    {
      id: 3,
      nom: 'Fight Club',
      real: 'David Fincher',
      synopsis:
        "Pourvu d'une situation des plus enviable, un jeune homme à bout de nerfs retrouve un équilibre relatif en compagnie de Marla, rencontrée dans un",
      annee: 1999,
      img: 'https://th.bing.com/th/id/OIP.mNTGxbXX5A0mtqAZuFdK_QHaKb?pid=ImgDet&rs=1',
      details: '',
    },
  ];

  albums: any[] = [
    {
      id: 4,
      nom: 'The Dark Side of the Moon',
      artiste: 'Pink Floyd',
      annee: 1973,
      img: '',
      details: '',
    },
    {
      id: 5,
      nom: 'Space Oddity',
      artiste: 'David Bowie',
      annee: 1969,
      img: '',
      details: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
