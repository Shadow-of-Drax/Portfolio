import React, { useState } from "react";
import { races, classes, alignments, backgrounds } from "../data/npcData";

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const NPCGenerator = () => {
  const [npc, setNpc] = useState(null);

  const generateNPC = () => {
    const newNpc = {
      race: getRandomItem(races),
      class: getRandomItem(classes),
      alignment: getRandomItem(alignments),
      background: getRandomItem(backgrounds),
      strength: Math.floor(Math.random() * 16) + 3, // Random ability scores between 3 and 18
      dexterity: Math.floor(Math.random() * 16) + 3,
      constitution: Math.floor(Math.random() * 16) + 3,
      intelligence: Math.floor(Math.random() * 16) + 3,
      wisdom: Math.floor(Math.random() * 16) + 3,
      charisma: Math.floor(Math.random() * 16) + 3,
    };
    setNpc(newNpc);
  };

  return (
    <div>
      <h1>D&D 5e NPC Generator</h1>
      <button onClick={generateNPC}>Generate NPC</button>

      {npc && (
        <div className="npc">
          <h2>Race: {npc.race}</h2>
          <h2>Class: {npc.class}</h2>
          <h3>Alignment: {npc.alignment}</h3>
          <h3>Background: {npc.background}</h3>
          <h3>Ability Scores:</h3>
          <ul>
            <li>Strength: {npc.strength}</li>
            <li>Dexterity: {npc.dexterity}</li>
            <li>Constitution: {npc.constitution}</li>
            <li>Intelligence: {npc.intelligence}</li>
            <li>Wisdom: {npc.wisdom}</li>
            <li>Charisma: {npc.charisma}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NPCGenerator;
