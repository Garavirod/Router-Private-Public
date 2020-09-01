import React from 'react';
import { getHeroeByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroeCard } from './HeroeCard';


export const HeroeList =(props)=>{
    const {publisher} = props;
    const heroes_publusher = getHeroeByPublisher(publisher);
    return(
        <div className="card-column">
            {
                heroes_publusher.map(h=>(
                <HeroeCard  {...h} key={h.id}/>
                ))
            }
        </div>
    );
}