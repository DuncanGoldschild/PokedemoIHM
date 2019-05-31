import { Component, OnInit } from '@angular/core';
import { PokeApiService } from "../poke-api.service";
import { DataService } from '../data.service';
@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  constructor(private pokeService : PokeApiService, private dataService : DataService) { }

  searchedPokemon = this.pokeService.searchedPokemon
  


  displayedColumns: string[] = ['Speed', 'Special Defense', 'Special Attack', 'Defense', 'Attack', 'Hp'];
  dataSource = [
    {speed: this.searchedPokemon.stats.speed,
      specialdefense: this.searchedPokemon.stats.specialdefense,
      specialattack: this.searchedPokemon.stats.specialattack,
      defense: this.searchedPokemon.stats.defense,
      attack: this.searchedPokemon.stats.attack,
      hp: this.searchedPokemon.stats.hp
    }
  ];



  ngOnInit() {
    this.dataService.subject.subscribe((pokemon) => { //subscribe au subject
      this.searchedPokemon = pokemon
  });
  }

}
