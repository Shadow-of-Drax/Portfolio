import React, { useState } from "react";
import {
  races,
  classes,
  alignments,
  backgrounds,
  personalityTraits,
  ideals,
  bonds,
  flaws,
  skills,
  weapons,
  armor,
} from "../data/npcData";

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const NPCGenerator = () => {
  const [npc, setNpc] = useState(null);
  const [savedNpcs, setSavedNpcs] = useState(loadNPCs());

  const generateNPC = () => {
    const newNpc = {
      race: getRandomItem(races),
      class: getRandomItem(classes),
      alignment: getRandomItem(alignments),
      background: getRandomItem(backgrounds),
      personalityTrait: getRandomItem(personalityTraits),
      ideal: getRandomItem(ideals),
      bond: getRandomItem(bonds),
      flaw: getRandomItem(flaws),
      skill: getRandomItem(skills),
      weapon: getRandomItem(weapons),
      armor: getRandomItem(armor),
      strength: Math.floor(Math.random() * 16) + 3, // Random ability scores between 3 and 18
      dexterity: Math.floor(Math.random() * 16) + 3,
      constitution: Math.floor(Math.random() * 16) + 3,
      intelligence: Math.floor(Math.random() * 16) + 3,
      wisdom: Math.floor(Math.random() * 16) + 3,
      charisma: Math.floor(Math.random() * 16) + 3,
      hp: generateHitPoints(getRandomItem(classes)),
      ac: generateArmorClass(Math.floor(Math.random() * 16) + 3),
    };
    setNpc(newNpc);
  };

  const saveNpcHandler = () => {
    saveNPC(npc);
    setSavedNpcs(loadNPCs());
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
          <p>
            <strong>Personality Trait:</strong> {npc.personalityTrait}
          </p>
          <p>
            <strong>Ideal:</strong> {npc.ideal}
          </p>
          <p>
            <strong>Bond:</strong> {npc.bond}
          </p>
          <p>
            <strong>Flaw:</strong> {npc.flaw}
          </p>
          <p>
            <strong>Skill Proficiency:</strong> {npc.skill}
          </p>
          <h3>Weapons & Armor:</h3>
          <p>
            <strong>Weapon:</strong> {npc.weapon}
          </p>
          <p>
            <strong>Armor:</strong> {npc.armor}
          </p>
          <h3>Ability Scores:</h3>
          <ul>
            <li>Strength: {npc.strength}</li>
            <li>Dexterity: {npc.dexterity}</li>
            <li>Constitution: {npc.constitution}</li>
            <li>Intelligence: {npc.intelligence}</li>
            <li>Wisdom: {npc.wisdom}</li>
            <li>Charisma: {npc.charisma}</li>
          </ul>
          <h3>Combat Stats:</h3>
          <ul>
            <li>HP: {npc.hp}</li>
            <li>AC: {npc.ac}</li>
          </ul>
          <button onClick={saveNpcHandler}>Save NPC</button>
        </div>
      )}

      <h2>Saved NPCs</h2>
      <div>
        {savedNpcs.length > 0 ? (
          savedNpcs.map((savedNpc, index) => (
            <div key={index}>
              <h3>NPC #{index + 1}</h3>
              <p>Race: {savedNpc.race}</p>
              <p>Class: {savedNpc.class}</p>
            </div>
          ))
        ) : (
          <p>No saved NPCs</p>
        )}
      </div>
    </div>
  );
};

const loadNPCs = () => {
  return JSON.parse(localStorage.getItem("savedNPCs")) || [];
};

export default NPCGenerator;
