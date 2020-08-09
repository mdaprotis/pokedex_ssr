import React, { useState, useEffect, useContext } from "react";
import { selectPokemon } from "../../utils/utils.js";
import { StateContext } from "../../context/StateContext";
import NavButtons from "./NavButtons";
import DetailPanel from "./DetailPanel";
import "./style.css";

const Detail = () => {
  const [show, setShow] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const { state, setState } = useContext(StateContext);

  const handlePrev = () => {
    selectPokemon(state.prev, state, setState);
  };

  const handleNext = () => {
    selectPokemon(state.next, state, setState);
  };
  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    if (state.selected_pokemon !== undefined) {
      setShow(true);
      setPokemon(state.selected_pokemon);
    }
  }, [state]);

  return (
    <>
      {show && pokemon != null ? (
        <div
          className={`wrapper ${
            show && pokemon !== null ? "slide-in-bottom" : ""
          }`}
        >
          <div className="detail_container">
            <NavButtons
              next={handleNext}
              prev={handlePrev}
              close={handleClose}
            />
            <DetailPanel pokemon={pokemon} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Detail;
