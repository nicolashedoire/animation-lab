"use client";
import React, { useState } from "react";
import { animated as a } from "react-spring";
import { Header, Body, Content, MovieTitle, MovieMeta, MovieCategory } from "./animations";

export default function Home() {
  const [open, toggle] = useState(false);

  return (
    <React.Fragment>
      <a.div
        className="w-full text-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/book-of-jungle.webp')",
          ...Header(open),
        }}
      ></a.div>
      <a.div
        className={`flex justify-center text-center flex-col text-white bg-gray-900`}
        style={Body(open)}
      >
        <a.p className="mb-6 -top-6 text-white/50" style={MovieCategory(open)}>Dessin animé</a.p>
        <a.h1 className={`text-4xl mb-3`} style={MovieTitle(open)}>Le Livre de la Jungle</a.h1>
        <a.p className="text-white" style={MovieMeta(open)}>1967 ‧ Enfants/Animation ‧ 1h 29m</a.p>
        <div className="text-justify max-w-3xl mx-auto">
          <a.p className={`mt-6`} style={Content(open)}>
            Le retour dans la jungle du tigre Shere Khan inquiète les loups. Le
            félin mangeur d&apos;hommes risque de s&apos;attaquer à Mowgli,
            l&apos;enfant qu&apos;ils ont recueilli et élevé. La panthère
            Bagheera, sa protectrice, décide donc de ramener le jeune garçon
            chez les siens, parmi lesquels il sera en sécurité. Mowgli, quant à
            lui, n&apos;a aucune envie de quitter la jungle et suit Bagheera à
            contre-coeur.
          </a.p>
        </div>
        <button
          className="bg-[#6c5ce7] hover:bg-[#6c5ce7]/60 transition fixed mx-auto left-1/2 bottom-12 w-38 h-14 text-white outline-none uppercase pl-6 pr-6 rounded-md border border-white border-1 translate-x-[-50%]"
          onClick={() => toggle(!open)}
        >
          Explorer
        </button>
      </a.div>
    </React.Fragment>
  );
}
