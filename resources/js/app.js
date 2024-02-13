const race = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Tiefling"];
const dndClass = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
const background = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Guild Artisan", "Haunted One", "Noble", "Outlander", "Sage", "Soldier", "Urchin"];


function getRace() {
        const randomRace = Math.floor(Math.random() * race.length);

        return `Your race should be ${race[randomRace]}.`;
    };

function getClass() {
        const randomClass = Math.floor(Math.random() * dndClass.length);

        return `How about trying ${dndClass[randomClass]} as your class.`;
    };

function getBackground() {
        const randomBackground = Math.floor(Math.random() * background.length);

        return `With a background as a(n) ${background[randomBackground]}.`;
};

console.log(getRace());
console.log(getClass());
console.log(getBackground());