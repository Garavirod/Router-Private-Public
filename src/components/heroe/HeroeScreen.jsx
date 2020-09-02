import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroeById } from "../../selectors/getHeroeById";

export const HeroeScreen = (props) => {

  const {history} = props;

  const { heroeId } = useParams(); //Hook which extract the params

  // Usig useMemo for optimazing the code
  const dataHero = useMemo( ()=>
    getHeroeById(heroeId),
    [heroeId], //Only is activated if heroId changes
  );

  // if not exist the id
  if (!dataHero) return <Redirect to="/" />;
  // Desestructuture the data
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = dataHero;

  // Redirect section previos last section on click
  const handleReturn = ()=>{
    // verify the pila del hitory
    if(history.length <=2)
      history.push('/');
    else
      history.goBack();

  };

  return (
    <div className="row mt-5">
      <div className="col-md-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8 animate__animated animate__fadeInUp">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego : </b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher : </b> {publisher}
          </li>
          <li className="list-group-item">
            <b>first appearance : </b> {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button 
          className="btn btn-outline-primary"
          onClick={handleReturn}
          >Go back</button>
      </div>
    </div>
  );
};
