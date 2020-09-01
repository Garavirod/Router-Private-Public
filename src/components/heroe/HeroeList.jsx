import React from 'react';
import { getHeroeByPublisher } from '../../selectors/getHeroesByPublisher';


export const HeroeList =(props)=>{
    const {publisher} = props;
    const heroes_publusher = getHeroeByPublisher(publisher);
    return(
        <ul>
            {
                heroes_publusher.map(h=>(
                <li key={h.id}>{h.superhero}</li>
                ))
            }
        </ul>
    );
}