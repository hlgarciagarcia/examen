import { Component } from '@angular/core';
import { PERSONAJES } from "../data/data.personajes";
import { Personaje } from "../interfaces/personaje.interface";
import { SwapiService } from './ng2-swapi';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  selector: 'my-custom-selector',
  templateUrl: 'my-componet-template.component.html',
  providers: [ SwapiService ]
})
  export class HomePage {

  export class myComponent {
        constructor (private swapi: SwapiService) {}
      }

  personajes: Personaje[]=[];

}
