import React from "react";
import queryString from "query-string";
import { HeroeCard } from "../heroe/HeroeCard";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router-dom";
import { getHeroByName } from "../../selectors/getHeroByName";
import { useMemo } from "react";

export const SearchScreen = (props) => {
  // Location component thi way I can save the location when app refresh
  const location = useLocation();
  // Parsing the url with query-string
  const { q = "" } = queryString.parse(location.search);

  // History properies
  const { history } = props;

  // Data that process the useForm
  const initialForm = {
    hero_search: q, //initail forms's value
  };
  // Hook which process initialFrom
  const [formValues, handleInputchange, reset] = useForm(initialForm);

  // desestruct of data that returns the Hook
  const { hero_search } = formValues;

  /* Data filter just when the query 'q' changes it is going to filter
        it happens when button is pushed, this way BDD is not going to be
        requiered all th etime someone modify the state while is writing the input
    */

  const heroesFilter = useMemo(() => getHeroByName(q), [q]);

  // Event
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save in  history the last query done
    history.push(`?q=${hero_search}`);
  };

  return (
    <div>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search a hero below</h4>
          <hr />
          <form action="" onSubmit={handleSubmit}>
            <input
              t
              type="text"
              value={hero_search}
              name="hero_search"
              placeholder="hero"
              className="from-control"
              onChange={handleInputchange}
              autoComplete="off"
            />
            <button type="submit" className="btn btn-outline-info ml-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {heroesFilter.map((h) => (
            <HeroeCard {...h} key={h.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
