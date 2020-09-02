import { HeroeList } from "../components/heroe/HeroeList";
import { heroes } from "../data/HeroesData";


export const getHeroeById = (id)=>{    
    // heroes is an object that comes from HeresList
    return heroes.find(h=>h.id === id);
};