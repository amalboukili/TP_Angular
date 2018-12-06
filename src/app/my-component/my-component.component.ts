import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  private listeNom: string [] = [];
  // private favicon: string = './assets/favicon.ico';
  private nom:string ="";

  constructor() {

   }

  ngOnInit() { }

  createList() {
    if (this.nom) {
      this.listeNom.push(this.nom);
      this.nom ="";
    }
  }

}
