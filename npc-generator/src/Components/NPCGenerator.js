import React, { useState, useEffect } from "react";
import {
  races,
  classes,
  alignments,
  backgrounds,
  appearanceTraits,
  spells,
} from "./npcData";
import jsPDF from "jspdf";

const NPCGenerator = () => {
  const [npcParty, setNpcParty] = useState([]);
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/spells")
      .then((res) => res.json())
      .then((data) => setSpells(data.results));
  }, []);

  const generateNPC = () => {
    return {
      race: getRandomItem(races),
      class: getRandomItem(classes),
      alignment: getRandomItem(alignments),
      background: getRandomItem(backgrounds).name,
      appearance: generateAppearance(),
      abilityScores: generateStandardArrayStats(),
      backstory: generateBackstory(),
    };
  };

  const generateParty = (size) => {
    const party = [];
    for (let i = 0; i < size; i++) {
      party.push(generateNPC());
    }
    setNpcParty(generateRelationships(party));
  };

  return (
    <div>
      <h1>D&D 5e NPC Generator</h1>
      <button onClick={() => generateParty(5)}>Generate Party of 5</button>
      {npcParty.map((npc, index) => (
        <NPCDisplay key={index} npc={npc} />
      ))}
    </div>
  );
};

export default NPCGenerator;
