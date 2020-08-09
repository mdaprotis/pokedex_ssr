import React from "react";
import ReactDom from "react-dom";

import Main from "./components/Main/Main";

const main = <Main pokeList={window._pokeList} />;

ReactDom.hydrate(main, document.getElementById("root"));
