import { heroes } from "../data/HeroesData";

export const getHeroByName = (name = '') =>{
    if(name==='')
        return [];
    name = name.toLocaleLowerCase();
    return heroes.filter(h=>h.superhero.toLocaleLowerCase().includes(name));
};