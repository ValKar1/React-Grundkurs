import React from "react";
import {MemoCard} from "./MemoCard";

export function App1() {
  const foobar = "<b>Hallo!</b>";
  return (
    <>
      <p dangerouslySetInnerHTML={{__html: foobar}}></p>
      <MemoCard
        front="Wie kann ich JSX Comments nutzen?"
        back="Indem JavaScript Kommentare genutzt werden :)"
      />
      {/** hallo JSX comment! */}
      <MemoCard
        front="Kann ich mit JSX HTML aus Variablen setzen?"
        back="Ja, aber es ist gefährlich!"
      />
    </>
  );
}
