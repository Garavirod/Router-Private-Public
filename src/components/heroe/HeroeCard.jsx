import React from "react";
import { Link } from "react-router-dom";

export const HeroeCard = (props) => {
  // Properties
  const {
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
  } = props;

  return (
    <div className="card ms-3" style={{ maxWidth: 540 }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`./assets/heroes/${id}.jpg`}
            alt={superhero}
            className="card-img"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
                <p className="cardt-text">{alter_ego}</p>
                {
                    (alter_ego !== characters)
                && <p className="card-text">{characters}</p>
                }
                <p className="card-text">
                    <small className="text-muted">{first_appearance}</small>
                </p>
                <Link to={`./heroe/${id}`} className="btn btn-info rounded">see more...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
