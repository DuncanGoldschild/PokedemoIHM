import { Injectable, OnInit } from '@angular/core';
import {HttpClient}    from '@angular/common/http';
import { Pokemon } from "./pokemon";

@Injectable({
  providedIn: 'root'
})

export class PokeApiService implements OnInit {
  ngOnInit(): void {
    
  }

  pokemons = []
  searchedPokemon : Pokemon
  

  
  getInfos(individu){
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/'+individu).subscribe(data => {
    let types = []
    data.types.forEach(type => {
      types.push(type)
    });
     this.searchedPokemon = {
        id : data.id,
        name : data.species.name,
        abilities : data.abilities,
        sprites : {frontdefault : data.sprites.front_default, backdefault : data.sprites.back_default},
        stats : {
          speed : data.stats[0].base_stat,
          specialdefense : data.stats[1].base_stat,
          specialattack : data.stats[2].base_stat,
          defense : data.stats[3].base_stat,
          attack : data.stats[4].base_stat,
          hp : data.stats[5].base_stat
        },
        types : types,
        height : data.height,
        weight : data.weight
      }
    });   
  }

  getData(): void {
    this.http.get<any>('https://pokeapi.co/api/v2/pokedex/1').subscribe(data => {
      data.pokemon_entries.forEach(pok => {
       let p1 : Pokemon = {
          id : ""+pok.entry_number,
          name : pok.pokemon_species.name
        }
        this.pokemons.push(p1)
      });
    });
  }

  constructor(private http : HttpClient) { }


}
