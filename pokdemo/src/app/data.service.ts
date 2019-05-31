import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Pokemon } from './pokemon';
import { PokeApiService } from './poke-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
  ngOnInit(): void {
  }

  constructor(private pokeService : PokeApiService) { }


  subject = new Subject<Pokemon>();  
  
  getNewData(pokemon){
    this.pokeService.getInfos(pokemon)
    setTimeout(() => {
      let newPok = this.pokeService.searchedPokemon
      this.subject.next(newPok);  // On envoie une donnée
    }, 500);

  }



  
}
