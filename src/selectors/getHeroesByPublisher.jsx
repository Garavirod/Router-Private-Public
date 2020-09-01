import { heroes } from "../data/HeroesData";



export const getHeroeByPublisher = (publisher)=>{
    const validPublisher = ['DC Comics', 'Marvel Comics'];
    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher} is not a valid publiher`);
    }

    return heroes.filter(h=>h.publisher === publisher);
};