import { HeroeList } from "../components/heroe/HeroeList";


export const getHeroeById = (props)=>{
    const {id} = props;
    // heroes is an object that comes from HeresList
    return HeroeList.find(heroes=>heroes.id === id);
};