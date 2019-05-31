import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeApiService } from "../poke-api.service";
import { PokeCardComponent } from "../poke-card/poke-card.component";
import { DataService } from '../data.service';
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor(private pokeService: PokeApiService, private dataService : DataService) { }

  ngOnInit() {
    this.pokeService.getData()
    this.pokemons = this.pokeService.pokemons
  }

  
  pokemons = [];

  id: string = '';
  selectedPokemon = "bulbasaur"
  nameFilter = ""
  idFilter = ""
  searched = false;


  searchPokemon(pokemon) {
    this.dataService.getNewData(pokemon)
    this.searched=true
  }
}
