import React, { useMemo } from 'react';
import { getHeroeByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroeCard } from './HeroeCard';


export const HeroeList =(props)=>{
    const {publisher} = props;

    /**
     * when the state change this compoennet is executed again,
     * so to avoid that we can useMemo in some blocks code for
     * to be executed when  it be necesary and not always
     * 
     * for example heroes_publisher is a function that allways is
     * executed each time the state change.
     */

    const heroes_publusher = useMemo(()=>
        getHeroeByPublisher(publisher),
        [publisher], //This only is activated if publisher changes
    );
    // const heroes_publusher = getHeroeByPublisher(publisher);
    return(
        <div className="card-column animate__animated animate__fadeIn">
            {
                heroes_publusher.map(h=>(
                <HeroeCard  {...h} key={h.id}/>
                ))
            }
        </div>
    );
}