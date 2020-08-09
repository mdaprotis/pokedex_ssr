import express from "express";
import path from "path";
import React from "react";
import ReactDom from "react-dom/server";
import Main from "../client/components/Main/Main";
import serialize from "serialize-javascript";

const app = express();

app.use(
  "/static",
  express.static(path.join(__dirname, "..", "..", "dist", "static"))
);

app.get("/*", async (req, res) => {
  const {
    pokemon_reduced_list,
    indexed_pokemon_list,
  } = await Main.requestPokeData();
  const root = (
    <html>
      <body>
        <div id="root">
          <Main pokeList={pokemon_reduced_list} />
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window._pokeList = ${serialize(pokemon_reduced_list)};
                     window._indexedPokeList = ${serialize(
                       indexed_pokemon_list
                     )};`,
          }}
        />
        <script src="/static/main.js"></script>
        <script
          src="https://kit.fontawesome.com/dea6daa23a.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
  const html = ReactDom.renderToString(root);

  res.send(html);
});

app.listen(3000, () => {
  console.log("server started: http://localhost:3000");
});
