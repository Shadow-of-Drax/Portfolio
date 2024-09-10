import React, { useState } from "react";
import jsPDF from "jspdf";
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

const NPCGenerator = () => {
  const [npc, setNpc] = useState(null);

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
      strength: Math.floor(Math.random() * 16) + 3,
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

  const exportToPDF = () => {
    if (!npc) return;

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("D&D 5e NPC Character Sheet", 10, 10);

    doc.setFontSize(12);
    doc.text(`Race: ${npc.race}`, 10, 30);
    doc.text(`Class: ${npc.class}`, 10, 40);
    doc.text(`Alignment: ${npc.alignment}`, 10, 50);
    doc.text(`Background: ${npc.background}`, 10, 60);
    doc.text(`Personality Trait: ${npc.personalityTrait}`, 10, 70);
    doc.text(`Ideal: ${npc.ideal}`, 10, 80);
    doc.text(`Bond: ${npc.bond}`, 10, 90);
    doc.text(`Flaw: ${npc.flaw}`, 10, 100);
    doc.text(`Skill Proficiency: ${npc.skill}`, 10, 110);
    doc.text(`Weapon: ${npc.weapon}`, 10, 120);
    doc.text(`Armor: ${npc.armor}`, 10, 130);

    doc.text("Ability Scores:", 10, 140);
    doc.text(`Strength: ${npc.strength}`, 10, 150);
    doc.text(`Dexterity: ${npc.dexterity}`, 10, 160);
    doc.text(`Constitution: ${npc.constitution}`, 10, 170);
    doc.text(`Intelligence: ${npc.intelligence}`, 10, 180);
    doc.text(`Wisdom: ${npc.wisdom}`, 10, 190);
    doc.text(`Charisma: ${npc.charisma}`, 10, 200);

    doc.text(`HP: ${npc.hp}`, 10, 210);
    doc.text(`AC: ${npc.ac}`, 10, 220);

    doc.save("npc-character-sheet.pdf");
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
          <button onClick={exportToPDF}>Export to PDF</button>
        </div>
      )}
    </div>
  );
};

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateHitPoints = (npcClass) => {
  const hitDice = {
    Fighter: 10,
    Wizard: 6,
    Rogue: 8,
    Cleric: 8,
    Barbarian: 12,
    Paladin: 10,
    Druid: 8,
    Ranger: 10,
    Sorcerer: 6,
    Warlock: 8,
  };
  return hitDice[npcClass] + Math.floor(Math.random() * 6 + 1); // Random modifier
};

const generateArmorClass = (dexterity) => {
  const baseAC = 10;
  return baseAC + Math.floor((dexterity - 10) / 2); // Dexterity modifier
};

export default NPCGenerator;
