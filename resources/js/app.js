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

function character() {
    return `${getRace()}\n${getClass()}\n${getBackground()}`
    
};

const gen1Pokemon = [
    'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard',
    'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree',
    'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata',
    'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu',
    'Sandshrew', 'Sandslash', 'Nidoran♀', 'Nidorina', 'Nidoqueen', 'Nidoran♂',
    'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales',
    'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume',
    'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth',
    'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine',
    'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop',
    'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool',
    'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke',
    'Slowbro', 'Magnemite', 'Magneton', 'Farfetch\'d', 'Doduo', 'Dodrio', 'Seel',
    'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter',
    'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 'Electrode',
    'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan',
    'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon', 'Chansey', 'Tangela',
    'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie',
    'Mr. Mime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', 'Tauros',
    'Magikarp', 'Gyarados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon',
    'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl',
    'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 'Dragonite',
    'Mewtwo', 'Mew'
];

const gen2Pokemon = [
    'Chikorita', 'Bayleef', 'Meganium', 'Cyndaquil', 'Quilava', 'Typhlosion',
    'Totodile', 'Croconaw', 'Feraligatr', 'Sentret', 'Furret', 'Hoothoot',
    'Noctowl', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados', 'Crobat', 'Chinchou',
    'Lanturn', 'Pichu', 'Cleffa', 'Igglybuff', 'Togepi', 'Togetic', 'Natu',
    'Xatu', 'Mareep', 'Flaaffy', 'Ampharos', 'Bellossom', 'Marill', 'Azumarill',
    'Sudowoodo', 'Politoed', 'Hoppip', 'Skiploom', 'Jumpluff', 'Aipom', 'Sunkern',
    'Sunflora', 'Yanma', 'Wooper', 'Quagsire', 'Espeon', 'Umbreon', 'Murkrow',
    'Slowking', 'Misdreavous', 'Unown', 'Wobbuffet', 'Girafarig', 'Pineco',
    'Forretress', 'Dunsparce', 'Gligar', 'Steelix', 'Snubbull', 'Granbull',
    'Qwilfish', 'Scizor', 'Shuckle', 'Heracross', 'Sneasel', 'Teddiursa', 'Ursaring',
    'Slugma', 'Magcargo', 'Swinub', 'Piloswine', 'Corsola', 'Remoraid', 'Octillery',
    'Delibird', 'Mantine', 'Skarmory', 'Houndour', 'Houndoom', 'Kingdra', 'Phanpy',
    'Donphan', 'Porygon2', 'Stantler', 'Smeargle', 'Tyrogue', 'Hitmontop', 'Smoochum',
    'Elekid', 'Magby', 'Miltank', 'Blissey', 'Raikou', 'Entei', 'Suicune',
    'Larvitar', 'Pupitar', 'Tyranitar', 'Lugia', 'Ho-Oh', 'Celebi'
];

const gen3Pokemon = [
    'Treecko', 'Grovyle', 'Sceptile', 'Torchic', 'Combusken', 'Blaziken',
    'Mudkip', 'Marshtomp', 'Swampert', 'Poochyena', 'Mightyena', 'Zigzagoon',
    'Linoone', 'Wurmple', 'Silcoon', 'Beautifly', 'Cascoon', 'Dustox', 'Lotad',
    'Lombre', 'Ludicolo', 'Seedot', 'Nuzleaf', 'Shiftry', 'Taillow', 'Swellow',
    'Wingull', 'Pelipper', 'Ralts', 'Kirlia', 'Gardevoir', 'Surskit', 'Masquerain',
    'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking', 'Nincada', 'Ninjask',
    'Shedinja', 'Whismur', 'Loudred', 'Exploud', 'Makuhita', 'Hariyama', 'Azurill',
    'Nosepass', 'Skitty', 'Delcatty', 'Sableye', 'Mawile', 'Aron', 'Lairon',
    'Aggron', 'Meditite', 'Medicham', 'Electrike', 'Manectric', 'Plusle', 'Minun',
    'Volbeat', 'Illumise', 'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo',
    'Wailmer', 'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
    'Spinda', 'Trapinch', 'Vibrava', 'Flygon', 'Cacnea', 'Cacturne', 'Swablu',
    'Altaria', 'Zangoose', 'Seviper', 'Lunatone', 'Solrock', 'Barboach', 'Whiscash',
    'Corphish', 'Crawdaunt', 'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith',
    'Armaldo', 'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
    'Duskull', 'Dusclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut', 'Snorunt',
    'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Clamperl', 'Huntail', 'Gorebyss',
    'Relicanth', 'Luvdisc', 'Bagon', 'Shelgon', 'Salamence', 'Beldum', 'Metang',
    'Metagross', 'Regirock', 'Regice', 'Registeel', 'Latias', 'Latios', 'Kyogre',
    'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys'
];

const gen4Pokemon = [
    'Turtwig', 'Grotle', 'Torterra', 'Chimchar', 'Monferno', 'Infernape',
    'Piplup', 'Prinplup', 'Empoleon', 'Starly', 'Staravia', 'Staraptor',
    'Bidoof', 'Bibarel', 'Kricketot', 'Kricketune', 'Shinx', 'Luxio', 'Luxray',
    'Budew', 'Roserade', 'Cranidos', 'Rampardos', 'Shieldon', 'Bastiodon',
    'Burmy', 'Wormadam', 'Mothim', 'Combee', 'Vespiquen', 'Pachirisu',
    'Buizel', 'Floatzel', 'Cherubi', 'Cherrim', 'Shellos', 'Gastrodon',
    'Ambipom', 'Drifloon', 'Drifblim', 'Buneary', 'Lopunny', 'Mismagius',
    'Honchkrow', 'Glameow', 'Purugly', 'Chingling', 'Stunky', 'Skuntank',
    'Bronzor', 'Bronzong', 'Bonsly', 'Mime Jr.', 'Happiny', 'Chatot', 'Spiritomb',
    'Gible', 'Gabite', 'Garchomp', 'Munchlax', 'Riolu', 'Lucario', 'Hippopotas',
    'Hippowdon', 'Skorupi', 'Drapion', 'Croagunk', 'Toxicroak', 'Carnivine',
    'Finneon', 'Lumineon', 'Mantyke', 'Snover', 'Abomasnow', 'Weavile',
    'Magnezone', 'Lickilicky', 'Rhyperior', 'Tangrowth', 'Electivire',
    'Magmortar', 'Togekiss', 'Yanmega', 'Leafeon', 'Glaceon', 'Gliscor',
    'Mamoswine', 'Porygon-Z', 'Gallade', 'Probopass', 'Dusknoir', 'Froslass',
    'Rotom', 'Uxie', 'Mesprit', 'Azelf', 'Dialga', 'Palkia', 'Heatran',
    'Regigigas', 'Giratina', 'Cresselia', 'Phione', 'Manaphy', 'Darkrai',
    'Shaymin', 'Arceus'
];

const gen5Pokemon = [
    'Snivy', 'Servine', 'Serperior', 'Tepig', 'Pignite', 'Emboar',
    'Oshawott', 'Dewott', 'Samurott', 'Patrat', 'Watchog', 'Lillipup',
    'Herdier', 'Stoutland', 'Purrloin', 'Liepard', 'Pansage', 'Simisage',
    'Pansear', 'Simisear', 'Panpour', 'Simipour', 'Munna', 'Musharna',
    'Pidove', 'Tranquill', 'Unfezant', 'Blitzle', 'Zebstrika', 'Roggenrola',
    'Boldore', 'Gigalith', 'Woobat', 'Swoobat', 'Drilbur', 'Excadrill',
    'Audino', 'Timburr', 'Gurdurr', 'Conkeldurr', 'Tympole', 'Palpitoad',
    'Seismitoad', 'Throh', 'Sawk', 'Sewaddle', 'Swadloon', 'Leavanny',
    'Venipede', 'Whirlipede', 'Scolipede', 'Cottonee', 'Whimsicott',
    'Petilil', 'Lilligant', 'Basculin', 'Sandile', 'Krokorok', 'Krookodile',
    'Darumaka', 'Darmanitan', 'Maractus', 'Dwebble', 'Crustle', 'Scraggy',
    'Scrafty', 'Sigilyph', 'Yamask', 'Cofagrigus', 'Tirtouga', 'Carracosta',
    'Archen', 'Archeops', 'Trubbish', 'Garbodor', 'Zorua', 'Zoroark',
    'Minccino', 'Cinccino', 'Gothita', 'Gothorita', 'Gothitelle',
    'Solosis', 'Duosion', 'Reuniclus', 'Ducklett', 'Swanna', 'Vanillite',
    'Vanillish', 'Vanilluxe', 'Deerling', 'Sawsbuck', 'Emolga', 'Karrablast',
    'Escavalier', 'Foongus', 'Amoonguss', 'Frillish', 'Jellicent', 'Alomomola',
    'Joltik', 'Galvantula', 'Ferroseed', 'Ferrothorn', 'Klink', 'Klang',
    'Klinklang', 'Tynamo', 'Eelektrik', 'Eelektross', 'Elgyem', 'Beheeyem',
    'Litwick', 'Lampent', 'Chandelure', 'Axew', 'Fraxure', 'Haxorus', 'Cubchoo',
    'Beartic', 'Cryogonal', 'Shelmet', 'Accelgor', 'Stunfisk', 'Mienfoo',
    'Mienshao', 'Druddigon', 'Golett', 'Golurk', 'Pawniard', 'Bisharp',
    'Bouffalant', 'Rufflet', 'Braviary', 'Vullaby', 'Mandibuzz', 'Heatmor',
    'Durant', 'Deino', 'Zweilous', 'Hydreigon', 'Larvesta', 'Volcarona',
    'Cobalion', 'Terrakion', 'Virizion', 'Tornadus', 'Thundurus', 'Reshiram',
    'Zekrom', 'Landorus', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect'
];

const gen6Pokemon = [
    'Chespin', 'Quilladin', 'Chesnaught', 'Fennekin', 'Braixen', 'Delphox', 'Froakie', 'Frogadier', 'Greninja', 'Bunnelby', 'Diggersby',
    'Fletchling', 'Fletchinder', 'Talonflame', 'Scatterbug', 'Spewpa', 'Vivillon', 'Litleo', 'Pyroar', 'Flabébé', 'Floette', 'Florges',
    'Skiddo', 'Gogoat', 'Pancham', 'Pangoro', 'Furfrou', 'Espurr', 'Meowstic', 'Honedge', 'Doublade', 'Aegislash', 'Spritzee', 'Aromatisse',
    'Swirlix', 'Slurpuff', 'Inkay', 'Malamar', 'Binacle', 'Barbaracle', 'Skrelp', 'Dragalge', 'Clauncher', 'Clawitzer', 'Helioptile',
    'Heliolisk', 'Tyrunt', 'Tyrantrum', 'Amaura', 'Aurorus', 'Sylveon', 'Hawlucha', 'Dedenne', 'Carbink', 'Goomy', 'Sligoo', 'Goodra',
    'Klefki', 'Phantump', 'Trevenant', 'Pumpkaboo', 'Gourgeist', 'Bergmite', 'Avalugg', 'Noibat', 'Noivern', 'Xerneas', 'Yveltal', 'Zygarde',
    'Diancie', 'Hoopa', 'Volcanion'
];

const gen7Pokemon = [
    'Rowlet', 'Dartrix', 'Decidueye', 'Litten', 'Torracat', 'Incineroar',
    'Popplio', 'Brionne', 'Primarina', 'Pikipek', 'Trumbeak', 'Toucannon',
    'Yungoos', 'Gumshoos', 'Grubbin', 'Charjabug', 'Vikavolt', 'Crabrawler',
    'Crabominable', 'Oricorio', 'Cutiefly', 'Ribombee', 'Rockruff', 'Lycanroc',
    'Wishiwashi', 'Mareanie', 'Toxapex', 'Mudbray', 'Mudsdale', 'Dewpider',
    'Araquanid', 'Fomantis', 'Lurantis', 'Morelull', 'Shiinotic', 'Salandit',
    'Salazzle', 'Stufful', 'Bewear', 'Bounsweet', 'Steenee', 'Tsareena',
    'Comfey', 'Oranguru', 'Passimian', 'Wimpod', 'Golisopod', 'Sandygast',
    'Palossand', 'Pyukumuku', 'Type: Null', 'Silvally', 'Minior', 'Komala',
    'Turtonator', 'Togedemaru', 'Mimikyu', 'Bruxish', 'Drampa', 'Dhelmise',
    'Jangmo-o', 'Hakamo-o', 'Kommo-o', 'Tapu Koko', 'Tapu Lele', 'Tapu Bulu',
    'Tapu Fini', 'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Nihilego', 'Buzzwole',
    'Pheromosa', 'Xurkitree', 'Celesteela', 'Kartana', 'Guzzlord', 'Necrozma',
    'Magearna', 'Marshadow', 'Poipole', 'Naganadel', 'Stakataka', 'Blacephalon',
    'Zeraora', 'Meltan', 'Melmetal'
];

const gen8Pokemon = [
    'Grookey', 'Thwackey', 'Rillaboom', 'Scorbunny', 'Raboot', 'Cinderace',
    'Sobble', 'Drizzile', 'Inteleon', 'Skwovet', 'Greedent', 'Rookidee',
    'Corvisquire', 'Corviknight', 'Blipbug', 'Dottler', 'Orbeetle', 'Nickit',
    'Thievul', 'Gossifleur', 'Eldegoss', 'Wooloo', 'Dubwool', 'Chewtle',
    'Drednaw', 'Yamper', 'Boltund', 'Rolycoly', 'Carkol', 'Coalossal', 'Applin',
    'Flapple', 'Appletun', 'Silicobra', 'Sandaconda', 'Cramorant', 'Arrokuda',
    'Barraskewda', 'Toxel', 'Toxtricity', 'Sizzlipede', 'Centiskorch', 'Clobbopus',
    'Grapploct', 'Sinistea', 'Polteageist', 'Hatenna', 'Hattrem', 'Hatterene',
    'Impidimp', 'Morgrem', 'Grimmsnarl', 'Obstagoon', 'Perrserker', 'Cursola',
    'Sirfetch\'d', 'Mr. Rime', 'Runerigus', 'Milcery', 'Alcremie', 'Falinks',
    'Pincurchin', 'Snom', 'Frosmoth', 'Stonjourner', 'Eiscue', 'Indeedee',
    'Morpeko', 'Cufant', 'Copperajah', 'Dracozolt', 'Arctozolt', 'Dracovish',
    'Arctovish', 'Duraludon', 'Dreepy', 'Drakloak', 'Dragapult', 'Zacian',
    'Zamazenta', 'Eternatus', 'Kubfu', 'Urshifu', 'Zarude', 'Regieleki',
    'Regidrago', 'Glastrier', 'Spectrier', 'Calyrex'
];

const gen9Pokemon = [
    'Sprigatito', 'Floragato', 'Meowscarada', 'Fuecoco', 'Crocalor', 'Skeledirge',
    'Quaxly', 'Quaxwell', 'Quaquaval', 'Lechonk', 'Oinkologne', 'Tarountula',
    'Spidops', 'Nymble', 'Lokix', 'Pawmi', 'Pawmo', 'Pawmot', 'Tandemaus',
    'Maushold', 'Fidough', 'Dachsbun', 'Smoliv', 'Dolliv', 'Arboliva',
    'Squawkabilly', 'Nacli', 'Naclstack', 'Garganacl', 'Charcadet', 'Armarouge',
    'Ceruledge', 'Tadbulb', 'Bellibolt', 'Wattrel', 'Kilowattrel', 'Maschiff',
    'Mabosstiff', 'Shroodle', 'Grafaiai', 'Bramblin', 'Brambleghast', 'Toedscool',
    'Toedscruel', 'Klawf', 'Capsakid', 'Scovillain', 'Rellor', 'Rabsca', 'Flittle',
    'Espathra', 'Tinkatink', 'Tinkatuff', 'Tinkaton', 'Wiglett', 'Wugtrio',
    'Bombirdier', 'Finizen', 'Palafin', 'Varoom', 'Revavroom', 'Cyclizar', 'Orthworm',
    'Glimmet', 'Glimmora', 'Greavard', 'Houndstone', 'Flamigo', 'Cetoddle',
    'Cetitan', 'Veluza', 'Dondozo', 'Tatsugiri', 'Annihilape', 'Clodsire',
    'Farigiraf', 'Dudunsparce', 'Kingambit', 'Great Tusk', 'Scream Tail',
    'Brute Bonnet', 'Flutter Mane', 'Slither Wing', 'Sandy Shocks',
    'Iron Treads', 'Iron Bundle', 'Iron Hands', 'Iron Jugulis', 'Iron Moth',
    'Iron Thorns', 'Frigibax', 'Arctibax', 'Baxcalibur', 'Gimmighoul',
    'Gholdengo', 'Wo-Chien', 'Chien-Pao', 'Ting-Lu', 'Chi-Yu',
    'Roaring Moon', 'Iron Valiant', 'Koraidon', 'Miraidon', 'Walking Wake',
    'Iron Leaves', 'Dipplin', 'Poltchageist', 'Sinistcha', 'Okidogi',
    'Munkidori', 'Fezandipiti', 'Ogerpon', 'Archaludon', 'Hydrapple', 'Gouging Fire',
    'Raging Bolt', 'Iron Boulder', 'Iron Crown', 'Terapagos', 'Pecharunt'
];

function gen1() {
    const pkmn = Math.floor(Math.random() * gen1Pokemon.length);

    return `${gen1Pokemon[pkmn]}`
};

function gen2() {
    const pkmn = Math.floor(Math.random() * gen2Pokemon.length);

    return `${gen2Pokemon[pkmn]}`
};

function gen3() {
    const pkmn = Math.floor(Math.random() * gen3Pokemon.length);

    return `${gen3Pokemon[pkmn]}`
};

function gen4() {
    const pkmn = Math.floor(Math.random() * gen4Pokemon.length);

    return `${gen4Pokemon[pkmn]}`
};

function gen5() {
    const pkmn = Math.floor(Math.random() * gen5Pokemon.length);

    return `${gen5Pokemon[pkmn]}`
};

function gen6() {
    const pkmn = Math.floor(Math.random() * gen6Pokemon.length);

    return `${gen6Pokemon[pkmn]}`
};

function gen7() {
    const pkmn = Math.floor(Math.random() * gen7Pokemon.length);

    return `${gen7Pokemon[pkmn]}`
};

function gen8() {
    const pkmn = Math.floor(Math.random() * gen8Pokemon.length);

    return `${gen8Pokemon[pkmn]}`
};

function gen9() {
    const pkmn = Math.floor(Math.random() * gen9Pokemon.length);

    return `${gen9Pokemon[pkmn]}`
};

function pokemon() {
    return `${gen1()}\n${gen2()}\n${gen3()}\n${gen4()}\n${gen5()}\n${gen6()}\n${gen7()}\n${gen8()}\n${gen9()}`
};

console.log(character());
console.log(pokemon());