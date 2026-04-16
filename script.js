const PLATFORMS = [
  {
    name: "Nintendo",
    fullName: "Nintendo Entertainment System",
    abbr: "NES",
    era: "1983",
    decade: "80s",
    maker: "Nintendo",
    cores: ["fceumm"],
    img: "assets/nes.avif",
    desc: "O NES resgatou a indústria após o crash de 83, estabelecendo padrões globais de excelência que a Nintendo mantém até hoje. Com hardware baseado no processador MOS 6502, trouxe experiências de arcade para os lares, imortalizando franquias como Super Mario, Zelda e Metroid. Sua vasta biblioteca 8-bit foi o alicerce onde as maiores lendas do design de jogos moderno deram seus primeiros passos revolucionários. Curiosidade: o D-pad em cruz do controle do NES foi inventado por Gunpei Yokoi e é tão revolucionário que está patenteado — sua influência persiste em todos os controles fabricados até hoje.",
    games: [
      { title: "Adventure Island", year: "1986", file: "adventure-island.nes" },
      { title: "Baseball Stars", year: "1989", file: "baseball-stars.nes" },
      { title: "Batman: The Video Game", year: "1989", file: "batman-the-video-game.nes" },
      { title: "Battletoads", year: "1991", file: "battletoads.nes" },
      { title: "Bionic Commando", year: "1987", file: "bionic-commando.nes" },
      { title: "Blades of Steel", year: "1987", file: "blades-of-steel.nes" },
      { title: "Blaster Master", year: "1988", file: "blaster-master.nes" },
      { title: "Bubble Bobble", year: "1986", file: "bubble-bobble.nes" },
      { title: "Castlevania III: Dracula's Curse", year: "1989", file: "castlevania-iii-dracula's-curse.nes" },
      { title: "Castlevania II: Simon's Quest", year: "1987", file: "castlevania-ii-simon's-quest.nes" },
      { title: "Castlevania", year: "1986", file: "castlevania.nes" },
      { title: "Chip 'n Dale: Rescue Rangers", year: "1990", file: "chip-n-dale-rescue-rangers.nes" },
      { title: "Contra", year: "1987", file: "contra.nes" },
      { title: "Crystalis", year: "1990", file: "crystalis.nes" },
      { title: "Dragon Warrior IV", year: "1990", file: "dragon-warrior-iv.nes" },
      { title: "Dragon Warrior", year: "1986", file: "dragon-warrior.nes" },
      { title: "DuckTales", year: "1989", file: "ducktales.nes" },
      { title: "Excitebike", year: "1984", file: "excitebike.nes" },
      { title: "Faxanadu", year: "1987", file: "faxanadu.nes" },
      { title: "Fester's Quest", year: "1989", file: "fester's-quest.nes" },
      { title: "Final Fantasy", year: "1987", file: "final-fantasy.nes" },
      { title: "Gradius", year: "1985", file: "gradius.nes" },
      { title: "Jackal", year: "1986", file: "jackal.nes" },
      { title: "Kid Icarus", year: "1986", file: "kid-icarus.nes" },
      { title: "Kid Niki: Radical Ninja", year: "1986", file: "kid-niki-radical-ninja.nes" },
      { title: "Kirby's Adventure", year: "1993", file: "kirby's-adventure.nes" },
      { title: "Klax", year: "1990", file: "klax.nes" },
      { title: "Life Force", year: "1986", file: "life-force.nes" },
      { title: "Mega Man 2", year: "1988", file: "mega-man-2.nes" },
      { title: "Mega Man 3", year: "1990", file: "mega-man-3.nes" },
      { title: "Mega Man", year: "1987", file: "mega-man.nes" },
      { title: "Metal Gear", year: "1987", file: "metal-gear.nes" },
      { title: "Metal Storm", year: "1991", file: "metal-storm.nes" },
      { title: "Metroid", year: "1986", file: "metroid.nes" },
      { title: "Micro Machines", year: "1991", file: "micro-machines.nes" },
      { title: "Mike Tyson's Punch-Out!!", year: "1987", file: "mike-tyson's-punch-out!!.nes" },
      { title: "Ninja Gaiden II: The Dark Sword Chaos", year: "1990", file: "ninja-gaiden-ii-the-dark-sword-of-chaos.nes" },
      { title: "Ninja Gaiden", year: "1988", file: "ninja-gaiden.nes" },
      { title: "R.C. Pro-Am", year: "1988", file: "r.c.-pro-am.nes" },
      { title: "River City Ransom", year: "1989", file: "river-city-ransom.nes" },
      { title: "Snake Rattle 'n' Roll", year: "1990", file: "snake-rattle-n-roll.nes" },
      { title: "StarTropics", year: "1990", file: "startropics.nes" },
      { title: "Super Mario Bros. 2", year: "1988", file: "super-mario-bros.-2.nes" },
      { title: "Super Mario Bros. 3", year: "1990", file: "super-mario-bros.-3.nes" },
      { title: "Super Mario Bros.", year: "1985", file: "super-mario-bros.nes" },
      { title: "TMNT II: The Arcade Game", year: "1990", file: "teenage-mutant-ninja-turtles-ii-the-arcade-game.nes" },
      { title: "Tetris", year: "1989", file: "tetris.nes" },
      { title: "The Legend of Zelda", year: "1986", file: "the-legend-of-zelda.nes" },
      { title: "Vice: Project Doom", year: "1991", file: "vice-project-doom.nes" },
      { title: "Zelda II: The Adventure of Link", year: "1987", file: "zelda-ii-the-adventure-of-link.nes" }

    ]
  },
  {
    name: "Super Nintendo",
    fullName: "Super Nintendo Entertainment System",
    abbr: "SNES",
    era: "1990",
    decade: "90s",
    maker: "Nintendo",
    cores: ["snes9x"],
    img: "assets/snes.avif",
    desc: "O Super Nintendo é o ápice da era 2D, unindo 16 bits de nostalgia com inovações como o revolucionário Mode 7 e áudio ADPCM. Foi o berço de RPGs monumentais como Chrono Trigger e Final Fantasy VI, além de redefinir plataformas com Donkey Kong Country. Um console onde a criatividade sem limites provou que mundos digitais poderiam ser mágicos, imersivos e tecnicamente inesquecíveis. Curiosidade: o chip de áudio SPC700 era tão avançado para a época que compositores como Koji Kondo e Nobuo Uematsu criaram trilhas sonoras consideradas obras de arte — e que são remixadas e regravadas por orquestras ao redor do mundo até hoje.",
    games: [
      { title: "Aladdin", year: "1992", file: "aladdin" },
      { title: "Super Mario World", year: "1990", file: "super-mario-world.smc" },
      { title: "Breath of Fire II", year: "1994", file: "breath-of-fire-ii" },
      { title: "Breath of Fire", year: "1993", file: "breath-of-fire" },
      { title: "Chrono Trigger", year: "1995", file: "chrono-trigger" },
      { title: "Contra III: The Alien Wars", year: "1992", file: "contra-iii-the-alien-wars" },
      { title: "Donkey Kong Country 2: Diddy's Kong Quest", displayTitle: "Donkey Kong Country 2", year: "1995", file: "donkey-kong-country-2-diddy's-kong-quest" },
      { title: "Donkey Kong Country 3: Dixie Kong's Double Trouble!", displayTitle: "Donkey Kong Country 3", year: "1996", file: "donkey-kong-country-3-dixie-kong's-double-trouble!" },
      { title: "Donkey Kong Country", year: "1994", file: "donkey-kong-country" },
      { title: "EarthBound", year: "1994", file: "earthbound" },
      { title: "Final Fantasy III", year: "1994", file: "final-fantasy-iii" },
      { title: "Final Fantasy II", year: "1991", file: "final-fantasy-ii" },
      { title: "F-Zero", year: "1990", file: "f-zero" },
      { title: "Jungle Strike", year: "1993", file: "jungle-strike" },
      { title: "Killer Instinct", year: "1995", file: "killer-instinct" },
      { title: "Kirby Super Star", year: "1996", file: "kirby-super-star" },
      { title: "Lufia II: Rise of the Sinistrals", year: "1995", file: "lufia-ii-rise-of-the-sinistrals" },
      { title: "Mega Man X2", year: "1994", file: "mega-man-x2" },
      { title: "Mega Man X3", year: "1995", file: "mega-man-x3" },
      { title: "Mega Man X", year: "1993", file: "mega-man-x" },
      { title: "Mortal Kombat II", year: "1994", file: "mortal-kombat-ii" },
      { title: "NBA Jam", year: "1994", file: "nba-jam" },
      { title: "NHL '94", year: "1993", file: "nhl-'94" },
      { title: "Out of This World", year: "1992", file: "out-of-this" },
      { title: "Pilotwings", year: "1990", file: "pilotwings" },
      { title: "Rock n' Roll Racing", year: "1993", file: "rock-n'-roll-racing" },
      { title: "R-Type III", year: "1993", file: "r-type-iii" },
      { title: "Secret of Mana", year: "1993", file: "secret-of-mana" },
      { title: "Shadowrun", year: "1993", file: "shadowrun" },
      { title: "Star Fox", year: "1993", file: "star-fox" },
      { title: "Street Fighter Alpha 2", year: "1996", file: "street-fighter-alpha-2" },
      { title: "Street Fighter II Turbo", year: "1992", file: "street-fighter-ii-turbo" },
      { title: "Super Castlevania IV", year: "1991", file: "super-castlevania-iv" },
      { title: "Super Ghouls 'n Ghosts", year: "1991", file: "super-ghouls'n-ghosts" },
      { title: "Super Mario World 2: Yoshi's Island", year: "1995", file: "super-mario-2-yoshi's-island" },
      { title: "Super Mario All-Stars", year: "1993", file: "super-mario-all-stars" },
      { title: "Super Mario Kart", year: "1992", file: "super-mario-kart" },
      { title: "Super Mario RPG", year: "1996", file: "super-mario-rpg-legend-of-the-seven-stars" },
      { title: "Super Metroid", year: "1994", file: "super-metroid" },
      { title: "Super Punch-Out!!", year: "1994", file: "super-punch-out!!" },
      { title: "Super Street Fighter II", year: "1993", file: "super-street-fighter-ii-the-new-challengers" },
      { title: "TMNT IV: Turtles in Time", year: "1992", file: "teenage-mutant-ninja-turtles-iv-turtles-in-time" },
      { title: "Terranigma", year: "1995", file: "terranigma" },
      { title: "Tetris Attack", year: "1995", file: "tetris-attack" },
      { title: "Tetris & Dr. Mario", year: "1994", file: "tetris-&-dr.-mario.sfc" },
      { title: "The Adventures of Batman & Robin", year: "1994", file: "the-adventures-of-batman-&-robin" },
      { title: "The Legend of Zelda: A Link to the Past", year: "1991", file: "the-legend-of-zelda-a-link-to-the-past" },
      { title: "The Lion King", year: "1994", file: "the-lion-king" },
      { title: "Ultimate Mortal Kombat 3", year: "1994", file: "ultimate-mortal-kombat-3" },
      { title: "Zombies Ate My Neighbors", year: "1993", file: "zombies-ate-my-neighbors" }

    ]
  },
  {
    name: "Master System",
    fullName: "Sega Master System",
    abbr: "MASTER",
    era: "1985",
    decade: "80s",
    maker: "Sega",
    cores: ["genesis_plus_gx"],
    img: "assets/master.avif",
    desc: "O Sega Master System destacou-se por cores vibrantes e um chip de vídeo superior, tornando-se uma lenda absoluta no Brasil e Europa. Trouxe a força dos fliperamas para casa com ports como After Burner e OutRun, além de dar vida a heróis como Alex Kidd e Phantasy Star. Um sistema durável que pavimentou o caminho de atitude e inovação que definiria a identidade da Sega nas décadas seguintes. Curiosidade: no Brasil a Tectoy ainda fabricava versões do console em 2016, tornando-o um dos videogames com maior longevidade comercial da história.",
    games: [
      { title: "Baku Baku Animal", year: "1995", file: "baku-baku-animal" },
      { title: "Castle of Illusion", year: "1990", file: "castle-of-illion-starring-mickey-moe" },
      { title: "Desert Strike", year: "1993", file: "desert-strike" },
      { title: "Dynamite Headdy", year: "1994", file: "dynamite-headdy" },
      { title: "Fantasy Zone II", year: "1987", file: "fantasy-zone-ii-the-tears-of-opa-opa" },
      { title: "Fantasy Zone", year: "1986", file: "fantasy-zone" },
      { title: "Ghouls 'n Ghosts", year: "1988", file: "ghouls'n-ghosts" },
      { title: "Golden Axe", year: "1990", file: "golden-axe" },
      { title: "Golden Axe Warrior", year: "1991", file: "golden-axe-warrior" },
      { title: "Land of Illusion", year: "1992", file: "land-of-illion-starring-mickey-moe" },
      { title: "Lemmings", year: "1991", file: "lemmings" },
      { title: "Master of Darkness", year: "1992", file: "master-of-darkness" },
      { title: "Mortal Kombat II", year: "1994", file: "mortal-kombat-ii" },
      { title: "Mortal Kombat", year: "1993", file: "mortal-kombat" },
      { title: "Operation Wolf", year: "1988", file: "operation-wolf" },
      { title: "OutRun", year: "1987", file: "outrun" },
      { title: "Phantasy Star", year: "1987", file: "phantasy-star" },
      { title: "Prince of Persia", year: "1992", file: "prince-of-persia" },
      { title: "Rainbow Islands", year: "1990", file: "rainbow-islands" },
      { title: "R-Type", year: "1988", file: "r-type" },
      { title: "Shinobi", year: "1988", file: "shinobi" },
      { title: "Sonic Chaos", year: "1993", file: "sonic-chaos" },
      { title: "Sonic the Hedgehog 2", year: "1992", file: "sonic-the-hedgehog-2" },
      { title: "Sonic the Hedgehog", year: "1991", file: "sonic-the-hedgehog" },
      { title: "Street Fighter II", year: "1993", file: "street-fighter-ii" },
      { title: "Wonder Boy III: The Dragon's Trap", year: "1989", file: "wonder-boy-iii-the-dragon's-trap" },
      { title: "Wonder Boy in Monster Land", year: "1988", file: "wonder-boy-in-monster-land" },
      { title: "Wonder Boy", year: "1986", file: "wonder-boy" },
      { title: "Ys: The Vanished Omens", year: "1988", file: "ys-the-vanished-omens" },
      { title: "Zillion", year: "1987", file: "zillion" }

    ]
  },
  {
    name: "Mega Drive",
    fullName: "Sega Mega Drive / Genesis",
    abbr: "MEGA",
    era: "1988",
    decade: "80s",
    maker: "Sega",
    cores: ["genesis_plus_gx"],
    img: "assets/mega.avif",
    desc: "O Sega Mega Drive trouxe velocidade, 'atitude' e áudio FM da Yamaha, desafiando a hegemonia da Nintendo nos anos 90. Casa do Sonic, Streets of Rage e Golden Axe, consolidou uma identidade visual urbana que atraiu milhões com o famoso 'Blast Processing'. Sua arquitetura robusta permitiu ports de arcade quase perfeitos, definindo uma das eras mais competitivas e criativas da história. Curiosidade: o processador principal era um Motorola 68000 — o mesmo chip usado nos primeiros computadores Macintosh da Apple.",
    games: [
      { title: "Aladdin", year: "1993", file: "aladdin" },
      { title: "Castlevania: Bloodlines", year: "1994", file: "castlevania-bloodlines" },
      { title: "Comix Zone", year: "1995", file: "comix-zone" },
      { title: "Contra: Hard Corps", year: "1994", file: "contra-hard-corps" },
      { title: "Earthworm Jim", year: "1994", file: "earthworm-jim" },
      { title: "Ecco the Dolphin", year: "1992", file: "ecco-the-dolphin" },
      { title: "Ecco: The Tides of Time", year: "1994", file: "ecco-the-tides-of-time" },
      { title: "Fatal Fury 2", year: "1993", file: "fatal-fury-2" },
      { title: "Fatal Fury", year: "1992", file: "fatal-fury" },
      { title: "Ghouls 'n Ghosts", year: "1989", file: "ghouls'n-ghosts" },
      { title: "Golden Axe III", year: "1993", file: "golden-axe-iii" },
      { title: "Golden Axe", year: "1989", file: "golden-axe" },
      { title: "Gunstar Heroes", year: "1993", file: "gunstar-heroes" },
      { title: "Jurassic Park", year: "1993", file: "jurassic-park" },
      { title: "Landstalker", year: "1992", file: "landstalker" },
      { title: "Lemmings", year: "1991", file: "lemmings" },
      { title: "Mega Bomberman", year: "1993", file: "mega-bomberman" },
      { title: "Monster World IV", year: "1994", file: "monster-iv" },
      { title: "Mortal Kombat II", year: "1994", file: "mortal-kombat-ii" },
      { title: "Mortal Kombat", year: "1993", file: "mortal-kombat" },
      { title: "NBA Jam", year: "1993", file: "nba-jam" },
      { title: "NHL '94", year: "1993", file: "nhl-'94" },
      { title: "Phantasy Star II", year: "1989", file: "phantasy-star-ii" },
      { title: "Phantasy Star IV", year: "1993", file: "phantasy-star-iv" },
      { title: "Ristar", year: "1995", file: "ristar" },
      { title: "Road Rash 3", year: "1995", file: "road-rash-3" },
      { title: "Road Rash II", year: "1992", file: "road-rash-ii" },
      { title: "Road Rash", year: "1991", file: "road-rash" },
      { title: "Rocket Knight Adventures", year: "1993", file: "rocket-knight-adventures" },
      { title: "Samurai Shodown", year: "1994", file: "samurai-shodown" },
      { title: "Shining Force", year: "1992", file: "shining-force" },
      { title: "Shinobi III: Return of the Ninja Master", year: "1993", file: "shinobi-iii-return-of-the-ninja-master" },
      { title: "Sonic & Knuckles", year: "1994", file: "sonic-&-knuckles" },
      { title: "Sonic the Hedgehog 2", year: "1992", file: "sonic-the-hedgehog-2" },
      { title: "Sonic the Hedgehog 3", year: "1994", file: "sonic-the-hedgehog-3" },
      { title: "Sonic the Hedgehog", year: "1991", file: "sonic-the-hedgehog" },
      { title: "Splatterhouse 2", year: "1992", file: "splatterhoe-2" },
      { title: "Splatterhouse 3", year: "1993", file: "splatterhoe-3" },
      { title: "Street Fighter II': Special Champion Edition", year: "1992", file: "street-fighter-ii'-special-champion-edition" },
      { title: "Streets of Rage 2", year: "1992", file: "streets-of-rage-2" },
      { title: "Streets of Rage 3", year: "1994", file: "streets-of-rage-3" },
      { title: "Super Street Fighter II", year: "1993", file: "super-street-fighter-ii" },
      { title: "The Lion King", year: "1994", file: "the-lion-king" },
      { title: "The Revenge of Shinobi", year: "1989", file: "the-revenge-of-shinobi" },
      { title: "ToeJam & Earl", year: "1991", file: "toejam-and-earl" },
      { title: "ToeJam & Earl in Panic on Funkotron", year: "1993", file: "toejam-&-earl-in-panic-on-funkotron" },
      { title: "Vectorman 2", year: "1996", file: "vectorman-2" },
      { title: "Vectorman", year: "1995", file: "vectorman" },
      { title: "X-Men 2: Clone Wars", year: "1995", file: "x-men-2-clone-wars" },
      { title: "X-Men", year: "1993", file: "x-men" }

    ]
  },
  {
    name: "Game Boy",
    fullName: "Game Boy",
    abbr: "GB",
    era: "1989",
    decade: "80s",
    maker: "Nintendo",
    cores: ["gambatte"],
    img: "assets/gb.avif",
    desc: "O Game Boy original provou que a jogabilidade supera qualquer especificação técnica, tornando-se um fenômeno global junto com Tetris. Com incrível autonomia de bateria e uma biblioteca imbatível, foi o lar de Pokémon e das primeiras aventuras portáteis de Link. Sua robustez quase indestrutível consolidou a Nintendo como rainha absoluta do mercado portátil por mais de uma década. Curiosidade: uma unidade de Game Boy sobreviveu a um bombardeio durante a Guerra do Golfo e ainda funcionava — a Nintendo a exibiu por anos em sua sede em Kyoto como prova de durabilidade.",
    games: [
      { title: "Castlevania II", year: "1991", file: "castlevania-ii-belmonts-revenge.gb" },
      { title: "Contra: The Alien Wars", year: "1994", file: "contra-the-alien-wars.gb" },
      { title: "Donkey Kong (94)", year: "1994", file: "donkey-kong.gb" },
      { title: "Dr. Mario", year: "1990", file: "dr-mario.gb" },
      { title: "DuckTales", year: "1990", file: "ducktales.gb" },
      { title: "Final Fantasy Legend", year: "1989", file: "final-fantasy-legend-the.gb" },
      { title: "Kirby's Dream Land 2", year: "1995", file: "kirbys-dream-land-2.gb" },
      { title: "Kirby's Dream Land", year: "1992", file: "kirbys-dream-land.gb" },
      { title: "Mega Man II", year: "1991", file: "mega-man-ii.gb" },
      { title: "Mega Man III", year: "1992", file: "mega-man-iii.gb" },
      { title: "Mega Man IV", year: "1993", file: "mega-man-iv.gb" },
      { title: "Mega Man V", year: "1994", file: "mega-man-v.gb" },
      { title: "Metroid II: Return of Samus", year: "1991", file: "metroid-ii-return-of-samus.gb" },
      { title: "Pokémon Blue", year: "1996", file: "pokemon-blue-version.gb" },
      { title: "Pokémon Red", year: "1996", file: "pokemon-red-version.gb" },
      { title: "Super Mario Land 2: 6 Golden Coins", year: "1992", file: "super-mario-land-2-6-golden-coins.gb" },
      { title: "Super Mario Land", year: "1989", file: "super-mario-land.gb" },
      { title: "Tetris", year: "1989", file: "tetris.gb" },
      { title: "Wario Land II", year: "1998", file: "wario-land-ii.gb" },
      { title: "Wario Land (SML3)", year: "1994", file: "wario-land-super-mario-land-3.gb" }
    ]
  },
  {
    name: "Game Boy Color",
    fullName: "Game Boy Color",
    abbr: "GBC",
    era: "1998",
    decade: "90s",
    maker: "Nintendo",
    cores: ["gambatte"],
    img: "assets/gbc.avif",
    desc: "Lançado em 1998, o Game Boy Color trouxe cores vibrantes e um processador mais rápido, mantendo retrocompatibilidade total com o original. Permitiu mundos mais detalhados em clássicos como Pokémon Gold/Silver e The Legend of Zelda. Foi a ponte tecnológica perfeita entre a simplicidade 8-bit inicial e a sofisticação que viria com a futura geração Advance. Curiosidade: a Nintendo o classificou oficialmente como uma simples atualização — não uma nova geração — mesmo rodando quase o dobro da velocidade do Game Boy original.",
    games: [
      { title: "Dragon Warrior Monsters 2", year: "2001", file: "dragon-warrior-monsters-2-taras-adventure.gbc" },
      { title: "Dragon Warrior Monsters", year: "1998", file: "dragon-warrior-monsters.gbc" },
      { title: "Harvest Moon 3", year: "2001", file: "harvest-moon-3-gbc.gbc" },
      { title: "Kirby Tilt 'n' Tumble", year: "2000", file: "kirby-tilt-n-tumble.gbc" },
      { title: "Zelda: Link's Awakening DX", year: "1998", file: "legend-of-zelda-the-links-awakening-dx.gbc" },
      { title: "Zelda: Oracle of Ages", year: "2001", file: "legend-of-zelda-the-oracle-of-ages.gbc" },
      { title: "Zelda: Oracle of Seasons", year: "2001", file: "legend-of-zelda-the-oracle-of-seasons.gbc" },
      { title: "Mario Golf", year: "1999", file: "mario-golf.gbc" },
      { title: "Mega Man Xtreme 2", year: "2001", file: "mega-man-xtreme-2.gbc" },
      { title: "Mega Man Xtreme", year: "2000", file: "mega-man-xtreme.gbc" },
      { title: "Metal Gear Solid", year: "2000", file: "metal-gear-solid.gbc" },
      { title: "Pokémon Crystal", year: "2000", file: "pokemon-crystal-version.gbc" },
      { title: "Pokémon Gold", year: "1999", file: "pokemon-gold-version.gbc" },
      { title: "Pokémon Pinball", year: "1999", file: "pokemon-pinball.gbc" },
      { title: "Pokémon Silver", year: "1999", file: "pokemon-silver-version.gbc" },
      { title: "Pokémon Trading Card Game", year: "1998", file: "pokemon-trading-card-game.gbc" },
      { title: "R-Type DX", year: "1999", file: "r-type-dx.gbc" },
      { title: "Street Fighter Alpha", year: "1999", file: "street-fighter-alpha-warriors-dreams.gbc" },
      { title: "Super Mario Bros. Deluxe", year: "1999", file: "super-mario-bros-deluxe.gbc" },
      { title: "Tetris DX", year: "1998", file: "tetris-dx.gbc" }
    ]
  },
  {
    name: "Game Boy Advance",
    fullName: "Game Boy Advance",
    abbr: "GBA",
    era: "2001",
    decade: "00s",
    maker: "Nintendo",
    cores: ["mgba"],
    img: "assets/gba.avif",
    desc: "O Game Boy Advance levou o poder do SNES para o bolso, sendo o santuário supremo da pixel art de alta fidelidade em 32 bits. Entregou ports impecáveis e obras-primas como Metroid Fusion e Castlevania: Aria of Sorrow em sua tela widescreen. Uma máquina lendária amada por puristas do 2D por oferecer experiências profundas e cinematográficas em qualquer lugar. Curiosidade: o áudio estéreo completo só saía pelo conector de fone — o alto-falante emitia som mono. Muitos desenvolvedores nem sabiam que os jogadores de fone recebiam uma experiência sonora completamente diferente.",
    games: [
      { title: "Fire Emblem (JP)", year: "2002", file: "fire-emblem-fuuin-no-tsurugi.gba" },
      { title: "Kirby & The Amazing Mirror", year: "2004", file: "kirby-the-amazing-mirror.gba" },
      { title: "Mario Kart: Super Circuit", year: "2001", file: "mario-kart-super-circuit.gba" },
      { title: "Mega Man Battle Network 2", year: "2001", file: "mega-man-battle-network-2.gba" },
      { title: "Mega Man Battle Network 3 Blue", year: "2002", file: "mega-man-battle-network-3-blue-version.gba" },
      { title: "Mega Man Battle Network 3 White", year: "2002", file: "mega-man-battle-network-3-white-version.gba" },
      { title: "Mega Man Battle Network 6: Falzar", year: "2005", file: "mega-man-battle-network-6-cybeast-falzar.gba" },
      { title: "Mega Man Zero", year: "2002", file: "mega-man-zero.gba" },
      { title: "Metroid: Zero Mission", year: "2004", file: "metroid-zero-mission.gba" },
      { title: "Pokémon FireRed", year: "2004", file: "pokemon-firered-version.gba" },
      { title: "Pokémon LeafGreen", year: "2004", file: "pokemon-leafgreen-version.gba" },
      { title: "Pokémon Ruby", year: "2002", file: "pokemon-ruby-version.gba" },
      { title: "Pokémon Sapphire", year: "2002", file: "pokemon-sapphire-version.gba" },
      { title: "Super Mario Advance 2", year: "2002", file: "super-mario-advance-2-super-mario.gba" },
      { title: "Super Mario Advance 3: Yoshi's Island", year: "2002", file: "super-mario-advance-3-yoshis-island.gba" },
      { title: "Super Mario Advance 4: SMB 3", year: "2003", file: "super-mario-advance-4-super-mario-bros-3.gba" },
      { title: "Zelda: A Link to the Past", year: "2002", file: "the-legend-of-zelda-a-link-to-the-past-four-swords.gba" },
      { title: "The Legend of Zelda: Minish Cap", year: "2004", file: "the-legend-of-zelda-the-minish-cap.gba" },
      { title: "WarioWare, Inc.", year: "2003", file: "warioware-inc-mega-microgame.gba" },
      { title: "WarioWare: Twisted!", year: "2004", file: "warioware-twisted.gba" }
    ]
  },
  {
    name: "PlayStation 1",
    fullName: "PlayStation",
    abbr: "PSX",
    era: "1994",
    decade: "90s",
    maker: "Sony",
    cores: ["pcsx_rearmed"],
    img: "assets/psx.avif",
    desc: "O PlayStation 1 mudou a história ao mainstreamizar polígonos 3D e o CD-ROM, encerrando a supremacia dos cartuchos nos lares. Franquias cinematográficas como Final Fantasy VII e Metal Gear Solid definiram sua identidade e narrativa madura. Com mais de 100 milhões de unidades vendidas, consolidou a Sony como a nova gigante global da indústria de entretenimento. Curiosidade: o PlayStation nasceu como um add-on para o Super Nintendo em parceria com a Nintendo — quando a Nintendo abandonou o projeto, a Sony decidiu lançar o hardware sozinha, criando acidentalmente seu maior concorrente.",
    games: [
      { title: "Alundra", year: "1997", file: "alundra.chd" },
      { title: "Azure Dreams", year: "1997", file: "azure-dreams.pbp" },
      { title: "Castlevania: Symphony of the Night", year: "1997", file: "castlevania-symphony-of-the-night.chd" },
      { title: "Chocobo's Dungeon 2", year: "1998", file: "chocobos-dungeon-2.chd" },
      { title: "Crash Bandicoot: Warped", year: "1998", file: "crash-bandicoot-warped.pbp" },
      { title: "Crash Team Racing", year: "1999", file: "ctr-crash-team-racing.chd" },
      { title: "Einhänder", year: "1997", file: "einhaender.pbp" },
      { title: "Intelligent Qube", year: "1997", file: "intelligent-cube.pbp" },
      { title: "Klonoa: Door to Phantomile", year: "1997", file: "klonoa-door-to-phantomile.pbp" },
      { title: "Legacy of Kain: Soul Reaver", year: "1999", file: "legacy-of-kain-soul-reaver.chd" },
      { title: "Mega Man X4", year: "1997", file: "mega-man-x4.chd" },
      { title: "Oddworld: Abe's Oddysee", year: "1997", file: "oddworld-abes-oddysee.pbp" },
      { title: "R-Type Delta", year: "1998", file: "r-type-delta.pbp" },
      { title: "R4: Ridge Racer Type 4", year: "1998", file: "r4-ridge-racer-type-4.chd" },
      { title: "The Raiden Project", year: "1995", file: "raiden-project.pbp" },
      { title: "Silent Bomber", year: "1999", file: "silent-bomber.chd" },
      { title: "Spyro the Dragon", year: "1998", file: "spyro-the-dragon.pbp" },
      { title: "Street Fighter Alpha 3", year: "1998", file: "street-fighter-alpha-3.pbp" },
      { title: "Strider 2", year: "1999", file: "strider-2.pbp" },
      { title: "Suikoden II", year: "1998", file: "suikoden-2.pbp" },
      { title: "Super Puzzle Fighter II Turbo", year: "1996", file: "super-puzzle-fighter-ii-turbo.chd" },
      { title: "Tekken 3", year: "1997", file: "tekken-3.pbp" },
      { title: "Tomba!", year: "1997", file: "tomba.chd" },
      { title: "Tony Hawk's Pro Skater 2", year: "2000", file: "tony-hawks-pro-skater-2.chd" },
      { title: "Vagrant Story", year: "2000", file: "vagrant-story.chd" },
      { title: "Wipeout 3: Special Edition", year: "1999", file: "wipeout-3-special-edition.pbp" },
      { title: "WWF WrestleMania: The Arcade Game", year: "1995", file: "wwf-wrestlemania-the-arcade-game.chd" }
    ]
  },
  {
    name: "Arcade Classics",
    fullName: "Arcade Classics (FBNeo)",
    abbr: "fbneo",
    era: "Various",
    decade: "80s/90s",
    maker: "Various",
    cores: ["fbneo"],
    img: "assets/konami.avif",
    desc: "Um portal para a era de ouro dos fliperamas sob o potente motor FinalBurn Neo. Reúne sucessos da Konami, Midway e Capcom, cobrindo desde os pioneiros dos anos 80 até os complexos beat 'em ups cooperativos como The Simpsons e Sunset Riders. Oferece emulação de alta fidelidade que preserva cada pixel e nota musical, honrando o legado frenético dos coin-ops originais. Curiosidade: o FinalBurn Neo suporta mais de 10.000 títulos de arcade e é mantido voluntariamente pela comunidade até hoje, preservando hardware que seria impossível de emular comercialmente.",
    games: [
      { title: "The Simpsons", year: "1991", file: "simpsons2p" },
      { title: "Sunset Riders", year: "1991", file: "ssridersubc" },
      { title: "TMNT: Arcade Game", year: "1989", file: "tmnt22pu" },
      { title: "TMNT: Arcade Game (JP)", year: "1989", file: "tmnt2pj" },
      { title: "X-Men", year: "1992", file: "xmen2pa" },
      { title: "Contra", year: "1987", file: "contra" },
      { title: "Super Contra", year: "1988", file: "scontra" },
      { title: "After Burner II", year: "1987", file: "aburner2" },
      { title: "OutRun", year: "1986", file: "outrun" },
      { title: "Hang-On", year: "1985", file: "hangon" },
      { title: "Space Harrier", year: "1985", file: "sharrier" },
      { title: "Shinobi", year: "1987", file: "shinobi" },
      { title: "Golden Axe", year: "1989", file: "goldnaxe" },
      { title: "Altered Beast", year: "1988", file: "altbeast" },
      { title: "Pac-Man", year: "1980", file: "pacman" },
      { title: "Ms. Pac-Man", year: "1981", file: "mspacman" },
      { title: "Galaga", year: "1981", file: "galaga" },
      { title: "Galaxian", year: "1979", file: "galaxian" },
      { title: "Dig Dug", year: "1982", file: "digdug" },
      { title: "Frogger", year: "1981", file: "frogger" },
      { title: "Donkey Kong", year: "1981", file: "dkong" },
      { title: "Donkey Kong Jr", year: "1982", file: "dkongjr" },
      { title: "Mario Bros", year: "1983", file: "mario" },
      { title: "Space Invaders", year: "1978", file: "invaders" },
      { title: "Asteroids", year: "1979", file: "asteroid" },
      { title: "Missile Command", year: "1980", file: "missile" },
      { title: "Centipede", year: "1980", file: "centiped" },
      { title: "Gradius III", year: "1989", file: "gradius3" },
      { title: "R-Type", year: "1987", file: "rtype" },
      { title: "1942", year: "1984", file: "1942" },
      { title: "1943", year: "1987", file: "1943" },
      { title: "Commando", year: "1985", file: "commando" },
      { title: "Double Dragon", year: "1987", file: "ddragon" },
      { title: "Double Dragon II", year: "1988", file: "ddragon2" },
      { title: "Bubble Bobble", year: "1986", file: "bublbobl" },
      { title: "Snow Bros", year: "1990", file: "snowbros" },
      { title: "Kung-Fu Master", year: "1984", file: "kungfum" },
      { title: "Punch-Out!!", year: "1983", file: "punchout" },
      { title: "Track & Field", year: "1983", file: "trackfld" },
      { title: "Q*bert", year: "1982", file: "qbert" },
      { title: "Joust", year: "1982", file: "joust" },
      { title: "Defender", year: "1981", file: "defender" },
      { title: "Rampage", year: "1986", file: "rampage" },
      { title: "Gauntlet", year: "1985", file: "gauntlet2p" },
      { title: "Smash TV", year: "1990", file: "smashtv" },
      { title: "Battletoads", year: "1991", file: "btoads" },
      { title: "Captain America", year: "1991", file: "captaven" },
      { title: "Elevator Action", year: "1983", file: "elevator" },
      { title: "Arkanoid", year: "1986", file: "arkanoid" },
      { title: "Burger Time", year: "1982", file: "btime" },
      { title: "Popeye", year: "1982", file: "popeye" },
      { title: "Splatter House", year: "1988", file: "splatter" },
      { title: "Bad Dudes", year: "1988", file: "baddudes" },
      { title: "Ghouls 'n Ghosts", year: "1988", file: "gng" },
      { title: "Parodius DA!", year: "1990", file: "parodius" },
      { title: "Aero Fighters", year: "1992", file: "aerofgt" },
      { title: "Asterix", year: "1992", file: "asterix" },
      { title: "Chase H.Q.", year: "1988", file: "chasehq" }
    ]
  },
  {
    name: "Capcom CPS-1",
    fullName: "CP System",
    abbr: "cps1",
    era: "1988",
    decade: "80s",
    maker: "Capcom",
    cores: ["fbneo"],
    img: "assets/cps1.avif",
    desc: "A CPS-1 foi o alicerce do império de fliperamas da Capcom, definindo o padrão de ação do final dos anos 80. Hardware poderoso que deu vida a Street Fighter II e Final Fight com sprites enormes e animações complexas. Com áudio Yamaha e visuais vibrantes, provou que a Capcom era a rainha absoluta da ação arcade e estabeleceu as bases de todos os futuros jogos de luta. Curiosidade: a Capcom protegia as placas com uma bateria que apagava as chaves de criptografia ao morrer — quando a bateria acaba, a placa morre definitivamente, tornando muitas originais irrecuperáveis hoje.",
    games: [
      { title: "Street Fighter II", year: "1991", file: "sf2" },
      { title: "Street Fighter II' CE", year: "1992", file: "sf2ce" },
      { title: "Final Fight", year: "1989", file: "ffight" },
      { title: "Captain Commando", year: "1991", file: "captcomm" },
      { title: "Cadillacs and Dinosaurs", year: "1993", file: "dino" },
      { title: "The Punisher", year: "1993", file: "punisher" },
      { title: "Strider", year: "1989", file: "strider" },
      { title: "Ghouls 'n Ghosts", year: "1988", file: "ghouls" },
      { title: "Knights of the Round", year: "1991", file: "knights" },
      { title: "King of Dragons", year: "1991", file: "kod" },
      { title: "Warriors of Fate", year: "1992", file: "wof" },
      { title: "UN Squadron", year: "1989", file: "unsquad" },
      { title: "Mega Man: Power Battle", year: "1995", file: "megaman" },
      { title: "Saturday Night Slam Masters", year: "1993", file: "slammast" },
      { title: "Forgotten Worlds", year: "1989", file: "forgottn" },
      { title: "Mercs", year: "1990", file: "mercs" },
      { title: "Magic Sword", year: "1990", file: "msword" },
      { title: "Three Wonders", year: "1991", file: "3wonders" },
      { title: "1941: Counter Attack", year: "1990", file: "1941" },
      { title: "Pang! 3", year: "1995", file: "pang3" }
    ]
  },
  {
    name: "Capcom CPS-2",
    fullName: "CP System II",
    abbr: "cps2",
    era: "1993",
    decade: "90s",
    maker: "Capcom",
    cores: ["fbneo"],
    img: "assets/cps2.avif",
    desc: "Famosa pelo som Q-Sound e carcaças coloridas, a CPS-2 dominou os fliperamas dos anos 90 com Street Fighter Alpha e Darkstalkers. Capaz de gerenciar centenas de cores e sprites fluídos, foi o palco dos primeiros crossovers explosivos da Marvel vs. Capcom. Um sistema que elevou a fidelidade sonora e visual, tornando-se um ícone imortal da cena de jogos de luta competitivos. Curiosidade: a CPS-2 também usava a mesma bateria suicida da CPS-1, mas a comunidade desenvolveu técnicas para ressuscitar as placas mortas, salvando centenas de máquinas que seriam perdidas para sempre.",
    games: [
      { title: "Street Fighter Alpha 3", year: "1998", file: "sfa3" },
      { title: "Street Fighter Alpha 2", year: "1996", file: "sfa2" },
      { title: "Marvel vs. Capcom", year: "1998", file: "mvsc" },
      { title: "X-Men vs. SF", year: "1996", file: "xmvsf" },
      { title: "Marvel Super Heroes", year: "1995", file: "msh" },
      { title: "X-Men: COTA", year: "1994", file: "xmcota" },
      { title: "Darkstalkers", year: "1994", file: "dstlk" },
      { title: "Vampire Savior", year: "1997", file: "vsav" },
      { title: "Alien vs. Predator", year: "1994", file: "avsp" },
      { title: "Mega Man 2: Power Fighters", year: "1996", file: "megaman2" },
      { title: "Dungeons & Dragons: SOM", year: "1996", file: "ddsom" },
      { title: "Dungeons & Dragons: TOD", year: "1994", file: "ddtod" },
      { title: "Super Puzzle Fighter II T", year: "1996", file: "spf2t" },
      { title: "Super Street Fighter II T", year: "1994", file: "ssf2t" },
      { title: "Giga Wing", year: "1999", file: "gigawing" },
      { title: "Progear", year: "2001", file: "progear" },
      { title: "Battle Circuit", year: "1997", file: "batcir" },
      { title: "1944: The Loop Master", year: "2000", file: "1944" },
      { title: "Super Gem Fighter", year: "1997", file: "sgemf" },
      { title: "Armored Warriors", year: "1994", file: "armwar" }
    ]
  },
  {
    name: "Capcom CPS-3",
    fullName: "CP System III",
    abbr: "cps3",
    era: "1996",
    decade: "90s",
    maker: "Capcom",
    cores: ["fbneo"],
    img: "assets/cps3.avif",
    desc: "O ápice absoluto da animação 2D feita à mão na indústria. Base do lendário Street Fighter III e JoJo's Bizarre Adventure, o hardware CPS-3 entregou movimentos fluídos que parecem desenhos animados em alta definição. É o testamento final da perfeição artística e mecânica em pixel art antes da transição definitiva da indústria para os polígonos 3D. Curiosidade: a Capcom lançou apenas seis jogos para a CPS-3 — o hardware era tão caro e exclusivo que nunca foi amplamente adotado, tornando-o um dos sistemas de arcade mais raros e cobiçados por colecionadores.",
    games: [
      { title: "Street Fighter III: 3rd Strike", year: "1999", file: "sfiii3" },
      { title: "Street Fighter III: 2nd Impact", year: "1997", file: "sfiii2" },
      { title: "Street Fighter III: New Generation", year: "1997", file: "sfiii" },
      { title: "JoJo's Bizarre Adventure", year: "1998", file: "jojo" },
      { title: "JoJo: Heritage for Future", year: "1999", file: "jojoba" }
    ]
  },
  {
    name: "Neo Geo MVS",
    fullName: "Neo Geo MVS",
    abbr: "neogeo",
    era: "1990",
    decade: "90s",
    maker: "SNK",
    cores: ["fbneo"],
    img: "assets/neogeo.avif",
    desc: "O sistema de arcade mais icônico de todos os tempos, o Neo Geo MVS permitia que os donos de fliperamas trocassem cartuchos em uma mesma placa, revolucionando o mercado. Com um hardware poderoso que entregava sprites enormes e cores vibrantes, tornou-se sinônimo de luxo e qualidade nos anos 90. Lar de franquias imortais como The King of Fighters, Metal Slug e Samurai Shodown, ele oferecia a experiência 'arcade perfect' que todos os jogadores da época desejavam ter em suas salas. Curiosidade: a versão doméstica Neo Geo AES custava $649 em 1990 — equivalente a mais de $1.400 hoje — tornando-o o console mais caro já lançado para o consumidor final.",
    games: [
      { title: "Metal Slug", year: "1996", file: "mslug" },
      { title: "Metal Slug 3", year: "2000", file: "mslug3" },
      { title: "Metal Slug X", year: "1999", file: "mslugx" },
      { title: "KOF 98", year: "1998", file: "kof98" },
      { title: "KOF 97", year: "1997", file: "kof97" },
      { title: "KOF 94", year: "1994", file: "kof94" },
      { title: "KOF 99", year: "1999", file: "kof99" },
      { title: "KOF 2002", year: "2002", file: "kof2002" },
      { title: "Garou: Mark of the Wolves", year: "1999", file: "garou" },
      { title: "Samurai Shodown II", year: "1994", file: "samsho2" },
      { title: "Samurai Shodown IV", year: "1996", file: "samsho4" },
      { title: "Samurai Shodown V Special", year: "2004", file: "samsh5fe" },
      { title: "The Last Blade", year: "1997", file: "lastblad" },
      { title: "The Last Blade 2", year: "1998", file: "lastbld2" },
      { title: "Neo Turf Masters", year: "1996", file: "turfmast" },
      { title: "Blazing Star", year: "1998", file: "blazstar" },
      { title: "Shock Troopers", year: "1997", file: "shocktro" },
      { title: "Shock Troopers: 2nd Squad", year: "1998", file: "shocktr2" },
      { title: "Windjammers", year: "1994", file: "wjammers" },
      { title: "Nightmare in the Dark", year: "2000", file: "ncommand" },
      { title: "Sengoku 3", year: "2001", file: "sengoku3" },
      { title: "Matrimelee", year: "2003", file: "matrim" },
      { title: "Last Resort", year: "1992", file: "lresort" },
      { title: "Rage of the Dragons", year: "2002", file: "rotd" },
      { title: "Waku Waku 7", year: "1996", file: "wakuwak7" },
      { title: "Karnov's Revenge", year: "1994", file: "karnovr" },
      { title: "Street Hoop", year: "1994", file: "strhoop" },
      { title: "Double Dragon", year: "1995", file: "doubledr" },
      { title: "Pulstar", year: "1995", file: "pulstar" },
      { title: "Breakers Revenge", year: "1998", file: "breakrev" },
      { title: "Sonic Wings 2", year: "1994", file: "sonicwi2" },
      { title: "Sonic Wings 3", year: "1995", file: "sonicwi3" },
      { title: "Puzzle Bobble", year: "1994", file: "pbobblen" },
      { title: "Puzzle Bobble 2", year: "1995", file: "pbobbl2n" },
      { title: "Twinkle Star Sprites", year: "1996", file: "twinspri" },
      { title: "Art of Fighting 2", year: "1994", file: "aof2" },
      { title: "Art of Fighting 3", year: "1996", file: "aof3" },
      { title: "Fatal Fury Special", year: "1993", file: "fatfursp" },
      { title: "Real Bout Fatal Fury 2", year: "1998", file: "rbff2" },
      { title: "NAM-1975", year: "1990", file: "nam1975" },
      { title: "Kabuki Klash", year: "1995", file: "kabukikl" },
      { title: "Spinmaster", year: "1993", file: "spinmast" },
      { title: "Super Dodge Ball", year: "1996", file: "sdodgeb" },
      { title: "Top Hunter", year: "1994", file: "tophuntr" },
      { title: "Magician Lord", year: "1990", file: "maglord" },
      { title: "Neo Bomberman", year: "1997", file: "neobombe" },
      { title: "League Bowling", year: "1990", file: "lbowling" },
      { title: "Mutation Nation", year: "1992", file: "mutnat" },
      { title: "Magical Drop III", year: "1997", file: "magdrop3" },
      { title: "Viewpoint", year: "1992", file: "viewpoin" }
    ]
  }
];

const desc_en = {
  "Nintendo": "The NES rescued the industry after the 83 crash, establishing global standards of excellence that Nintendo maintains today. With hardware based on the MOS 6502, it brought arcade experiences home, immortalizing franchises like Mario, Zelda, and Metroid. Its vast 8-bit library was the foundation where the greatest legends of design took their first revolutionary steps.",
  "Super Nintendo": "The SNES is the pinnacle of the 2D era, combining 16 bits of nostalgia with innovations like Mode 7 and ADPCM audio. It was the cradle of monumental RPGs like Chrono Trigger and Final Fantasy VI, while redefining platformers with Donkey Kong Country. A console where limitless creativity proved that digital worlds could be magical, immersive, and technically unforgettable icons.",
  "Game Boy": "The original Game Boy proved that gameplay immersion always trumps raw specs, becoming a global phenomenon with Tetris. With extreme battery life and an unbeatable library, it was the home of Pokémon and Link's first portable adventures. Its almost indestructible build solidified Nintendo as the absolute queen of the handheld market for over a decade.",
  "Game Boy Color": "Released in 1998, the Game Boy Color brought vibrant hues and a faster processor while maintaining full backward compatibility. It allowed for more detailed worlds in classics like Pokémon Gold/Silver and the Zelda Oracle series. It served as the perfect technical bridge between the initial 8-bit simplicity and the 32-bit sophistication of the Advance generation.",
  "Game Boy Advance": "The GBA brought SNES-quality power to your pocket, being the ultimate 32-bit sanctuary for high-fidelity pixel art. It delivered flawless ports and masterpieces like Metroid Fusion and Castlevania: Aria of Sorrow on its widescreen display. A legendary machine loved by 2D purists for offering deep, cinematic gaming experiences anywhere, anytime.",
  "PlayStation 1": "The PlayStation 1 changed history by mainstreaming 3D polygons and the CD-ROM, ending home cartridge supremacy. Cinematic franchises like Final Fantasy VII and Metal Gear Solid defined its identity and mature storytelling. With over 100 million units sold, it consolidated Sony as the new global giant of the gaming industry.",
  "Sega Mega Drive": "The Mega Drive brought 'attitude', speed, and Yamaha FM audio, brilliantly challenging Nintendo's hegemony in the 90s. Home of Sonic, Streets of Rage, and Golden Axe, it consolidated an urban visual identity with its famous 'Blast Processing'. Its robust architecture allowed for almost arcade-perfect ports, defining one of the most competitive eras in history.",
  "Sega Master System": "The Sega Master System stood out with vibrant colors and a superior video chip, becoming an absolute legend in Brazil and Europe. It brought arcade power home with ports like After Burner and OutRun, while giving life to heroes like Alex Kidd and Phantasy Star. A durable system that paved the way for the innovation that still defines Sega's identity today.",
  "Capcom Play System 1": "The CPS-1 was the foundation of Capcom's arcade empire, setting the action gold standard in the late 80s. Powerful hardware that gave birth to Street Fighter II and Final Fight with massive sprites and complex animations. With Yamaha sound and vibrant visuals, it proved Capcom was the absolute queen of arcade action and the blueprint for future fighting games.",
  "Capcom Play System 2": "Famous for Q-Sound and colored armored cases, the CPS-2 dominated 90s arcades with Street Fighter Alpha and Darkstalkers. Capable of managing hundreds of colors and fluid sprites, it was the stage for the first explosive Marvel vs. Capcom crossovers. A system that elevated audio-visual fidelity, becoming an immortal icon of the fighting game scene.",
  "Capcom Play System 3": "The absolute pinnacle of hand-drawn 2D animation in the industry. Base of the legendary Street Fighter III and JoJo's Bizarre Adventure, the CPS-3 hardware delivered fluid motions that look like high-definition cartoons. It is the final testament to artistic and mechanical perfection in pixel art before the industry moved to 3D polygons.",
  "Neo Geo MVS": "The Neo Geo MVS revolutionized the market by allowing game swaps on the same board, becoming synonymous with arcade luxury. With hardware delivering colorful sprites and massive sound, it was the home of King of Fighters and Metal Slug. It offered the 'arcade perfect' experience that every gamer from that decade desired to have in their room.",
  "Arcade Classics": "A massive portal to the golden age of coin-ops under the powerful FinalBurn Neo engine. It brings together hits from Konami, Midway, and Capcom, covering 80s pioneers and complex cooperative beat 'em ups like The Simpsons. This system preserves every pixel and musical note, honoring the high-octane legacy of the original arcade machines.",
};

const translations = {
  pt: {
    headerStats: "%G JOGOS DISPONÍVEIS EM %P PLATAFORMAS DIFERENTES",
    controlsTitle: "// ESCOLHA UMA PLATAFORMA",
    filterEra: "FILTRAR POR DÉCADA",
    filterAll: "TODAS",
    searchLabel: "PESQUISA (P)",
    searchPlaceholder: "POR PLATAFORMA...",
    placeholder: "// SELECIONE UMA PLATAFORMA",
    allPlatforms: "TODAS AS PLATAFORMAS",
    footerMid: "COM TECNOLOGIA EMULATORJS + NÚCLEOS RETROARCH",
    release: "LANÇAMENTO",
    maker: "FABRICANTE",
    abbr: "SIGLA",
    cores: "NÚCLEO",
    era80s: "Anos 80",
    era90s: "Anos 90",
    era00s: "Anos 2000",
    games: "JOGOS (J)",
    searchGamesPlaceholder: "FILTRAR JOGOS...",
    booting: "CARREGANDO SISTEMA..."
  },
  en: {
    headerStats: "%G GAMES AVAILABLE ACROSS %P DIFFERENT PLATFORMS",
    controlsTitle: "// CHOOSE A PLATFORM",
    filterEra: "FILTER BY ERA",
    filterAll: "ALL",
    searchLabel: "SEARCH (P)",
    searchPlaceholder: "BY PLATFORM...",
    placeholder: "// SELECT A PLATFORM",
    allPlatforms: "ALL PLATFORMS",
    footerMid: "POWERED BY EMULATORJS + RETROARCH CORES",
    release: "RELEASE",
    maker: "MAKER",
    abbr: "ABBR",
    cores: "CORE",
    era80s: "80s",
    era90s: "90s",
    era00s: "00s",
    games: "GAMES (J)",
    searchGamesPlaceholder: "FILTER GAMES...",
    booting: "BOOTING SYSTEM..."
  }
};

let currentLang = 'pt';

function updateUI() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // Atualiza as estatísticas do Header
  const headerStatsEl = document.getElementById('header-stats');
  if (headerStatsEl) {
    let totalGames = 0;
    PLATFORMS.forEach(p => { if (p.games) totalGames += p.games.length; });
    const totalPlatforms = PLATFORMS.length;

    let text = translations[currentLang].headerStats;
    text = text.replace('%G', `<span class="stats-highlight">${totalGames}</span>`)
      .replace('%P', `<span class="stats-highlight">${totalPlatforms}</span>`);
    headerStatsEl.innerHTML = text;
  }

  const searchEl = document.getElementById('search');
  if (searchEl && translations[currentLang][searchEl.getAttribute('data-i18n-placeholder')]) {
    searchEl.placeholder = translations[currentLang][searchEl.getAttribute('data-i18n-placeholder')];
  }
}

document.getElementById('lang-toggle').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentLang = e.target.getAttribute('data-lang');
    updateUI();
    if (activeIdx !== null) { selectPlatform(activeIdx); } else { detailInner.innerHTML = '<div class="detail-placeholder" data-i18n="placeholder">' + translations[currentLang].placeholder + '</div>'; }
    buildCarousel();
    // buildGrid();
  }
});

// ===== STATE =====
let filtered = [...PLATFORMS];
let activeIdx = 0; // Default: Primeira plataforma (Nintendo)
let VISIBLE = 5;
let carOffset = 0;

// ===== ELEMENTS =====
const track = document.getElementById('carousel-track');
const dotsRow = document.getElementById('dots-row');
const navLeft = document.getElementById('nav-left');
const navRight = document.getElementById('nav-right');
const detailInner = document.getElementById('detail-inner');
const detailPanel = document.getElementById('detail-panel');
const grid = document.getElementById('grid');
const searchEl = document.getElementById('search');

function getCardStep() {
  const firstCard = track.querySelector('.c-card');
  return firstCard ? firstCard.offsetWidth + 16 : 236;
}

function calcVisible() {
  const vp = document.querySelector('.carousel-container');
  if (vp) {
    const w = vp.clientWidth;
    const step = getCardStep();
    VISIBLE = Math.max(1, Math.floor((w - 64 + 16) / step));
  }
}

function buildCarousel() {
  track.innerHTML = '';

  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'c-card' + (activeIdx === i ? ' active' : '');
    card.style.animationDelay = (i * 0.04) + 's';

    const wrap = document.createElement('div');
    wrap.className = 'c-img-wrap';
    const img = document.createElement('img');
    img.src = p.img;
    img.alt = p.name;
    img.loading = 'lazy';
    img.onerror = () => { wrap.innerHTML = `<span class="c-abbr">${p.abbr}</span>`; };
    wrap.appendChild(img);

    const name = document.createElement('div');
    name.className = 'c-name';
    name.innerText = p.name;

    const era = document.createElement('div');
    era.className = 'c-era';
    era.innerText = p.era;

    card.appendChild(wrap);
    card.appendChild(name);
    card.appendChild(era);
    card.addEventListener('click', () => selectPlatform(i));
    track.appendChild(card);
  });

  calcVisible(); // lê o tamanho real dos cards já renderizados
  applyCarouselOffset();
  updateNav();
}

function applyCarouselOffset() {
  const vp = document.querySelector('.carousel-container');
  const w = vp ? vp.clientWidth : 0;
  const step = getCardStep(); // lê o tamanho real do card + gap

  const centerPadding = 16;
  const moveX = (carOffset * step) - centerPadding;

  track.style.transform = `translateX(${-moveX}px)`;
}


function updateNav() {
  const max = Math.max(0, filtered.length - VISIBLE);
  navLeft.disabled = carOffset <= 0;
  navRight.disabled = carOffset >= max;
}

function syncNav() {
  applyCarouselOffset();
  updateNav();
}

function goTo(dir) {
  const max = Math.max(0, filtered.length - VISIBLE);
  // No teclado/setas, movemos 1 a 1 para precisão
  carOffset = Math.max(0, Math.min(carOffset + dir, max));
  syncNav();
}

navLeft.addEventListener('click', () => goTo(-1));
navRight.addEventListener('click', () => goTo(1));

document.getElementById('carousel-container').addEventListener('wheel', e => {
  e.preventDefault();
  goTo(e.deltaY > 0 ? 1 : -1);
}, { passive: false });

// ===== GRID =====
function buildGrid() {
  grid.innerHTML = '';
  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'g-card' + (activeIdx === i ? ' active' : '');
    card.style.animationDelay = (i * 0.02) + 's';

    const thumb = document.createElement('div');
    thumb.className = 'g-thumb';
    const img = document.createElement('img');
    img.src = p.img;
    img.alt = p.name;
    img.loading = 'lazy';
    img.onerror = () => { thumb.innerHTML = `<span class="g-abbr">${p.abbr}</span>`; };
    thumb.appendChild(img);

    const info = document.createElement('div');
    info.className = 'g-info';
    info.innerHTML = `<div class="g-name">${p.name}</div><div class="g-era">${p.era} // ${p.maker}</div>`;

    card.appendChild(thumb);
    card.appendChild(info);
    card.addEventListener('click', () => selectPlatform(i));
    grid.appendChild(card);
  });
}

// ===== DETAIL =====
function selectPlatform(idx) {
  activeIdx = idx;
  const p = filtered[idx];

  document.querySelectorAll('.c-card').forEach((c, i) => c.classList.toggle('active', i === idx));
  document.querySelectorAll('.g-card').forEach((c, i) => c.classList.toggle('active', i === idx));

  const cores = p.cores.map(c => `<span class="core-badge">${c}</span>`).join('');

  detailInner.innerHTML = `
  <div class="detail-info">
    <div class="detail-name">${p.fullName || p.name}</div>
    <div class="detail-meta">
      <span>${translations[currentLang].release}: <strong>${p.era}</strong></span>
      <span>${translations[currentLang].maker}: <strong>${p.maker}</strong></span>
      <span>${translations[currentLang].abbr}: <strong>${p.abbr}</strong></span>
    </div>
    <div class="detail-desc">${currentLang === 'en' && desc_en[p.name] ? desc_en[p.name] : p.desc}</div>
    <div style="margin-top:auto;padding-top:0.75rem;">
      <span style="font-size:0.85rem;letter-spacing:0.12em;color:var(--text3);">${translations[currentLang].cores}: </span>
      ${cores}
    </div>
  </div>
  <div class="detail-games">
    <div class="games-header">
      <span data-i18n="games">${translations[currentLang].games}</span>
      <span style="font-size:0.85rem;opacity:1;color:var(--green);">${p.games ? p.games.length : 0} ${currentLang === 'pt' ? 'ITENS' : 'ITEMS'}</span>
    </div>
    <div class="game-search-box">
      <span class="search-icon">></span>
      <input type="text" id="game-search" placeholder="${translations[currentLang].searchGamesPlaceholder}" />
    </div>
    <div class="game-list" id="game-list-view">
      <!-- Games will be rendered here -->
    </div>
  </div>
  `;

  renderGameList(p.games || []);

  const firstItem = document.querySelector('.game-item');
  if (firstItem && !window.matchMedia('(max-width: 932px)').matches) firstItem.click();

  const gSearch = document.getElementById('game-search');
  if (gSearch) {
    gSearch.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      const filteredGames = (p.games || []).filter(g => g.title.toLowerCase().includes(q));
      renderGameList(filteredGames);
    });
  }

  detailPanel.classList.add('loaded');
  // detailPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Desktop: centraliza o item selecionado no carrossel (navegação por teclado)
  // Mobile: não recentaliza — o drag é livre e o carrossel não briga com o toque
  if (!window.matchMedia('(max-width: 932px)').matches) {
    const maxScroll = Math.max(0, filtered.length - VISIBLE);
    carOffset = Math.max(0, Math.min(idx - Math.floor(VISIBLE / 2), maxScroll));
  }

  syncNav();
}

function renderGameList(gamesList) {
  const container = document.getElementById('game-list-view');

  if (!container) return;

  const sorted = [...gamesList].sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }));

  if (sorted.length === 0) {
    container.innerHTML = `<div style="font-size:0.8rem;opacity:0.4;padding:1rem;text-align:center;">${currentLang === 'en' ? 'NO GAMES FOUND' : 'NENHUM JOGO ENCONTRADO'}</div>`;
    return;
  }

  container.innerHTML = sorted.map(g => `
    <div class="game-item" data-title="${g.title}">
      <span class="game-title">${g.displayTitle || g.title}</span>
      <span class="game-year">${g.year}</span>
      <span class="game-launch">${currentLang === 'pt' ? 'JOGAR' : 'PLAY'}</span>
    </div>
  `).join('');

  document.querySelectorAll('.game-item').forEach(item => {
    item.addEventListener('click', e => {
      if (e.target.classList.contains('game-launch')) return;
      document.querySelectorAll('.game-item').forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');

      const p = filtered[activeIdx];
      const title = item.getAttribute('data-title');
      selectedGameIdx = p.games.findIndex(g => g.title === title);
    });

    item.querySelector('.game-launch').addEventListener('click', e => {
      e.stopPropagation();
      if (item.classList.contains('selected')) launchGame();
    });
  });
}

// ===== FILTERS =====
function applyFilters() {
  const era = document.querySelector('.filter-btn.active')?.dataset.era || 'all';
  const query = searchEl ? searchEl.value.toLowerCase().trim() : '';

  filtered = PLATFORMS.filter(p => {
    const eraMatch = era === 'all' || p.decade === era;
    const queryMatch = !query ||
      p.name.toLowerCase().includes(query) ||
      p.abbr.toLowerCase().includes(query) ||
      p.maker.toLowerCase().includes(query) ||
      p.cores.some(c => c.toLowerCase().includes(query));
    return eraMatch && queryMatch;
  });

  carOffset = 0;
  buildCarousel();

  if (filtered.length > 0) {
    selectPlatform(0);
  }
}

document.getElementById('era-filter').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilters();
});

if (searchEl) searchEl.addEventListener('input', applyFilters);

// ===== KEYBOARD NAV =====
let lastKeyTime = 0;
const KEY_THROTTLE = 80;
let selectedGameIdx = 0;
let isEmulatorRunning = false;

document.addEventListener('keydown', e => {
  // Bloqueio do TAB sempre ativo
  if (e.key === 'Tab') {
    e.preventDefault();
    return;
  }

  // Com emulador aberto, só ESC é permitido
  if (isEmulatorRunning) {
    if (e.key === 'Escape') closeEmulator();
    return;
  }

  // Se estiver digitando em um input, ignoramos os atalhos P e J
  if (e.target.tagName === 'INPUT') return;

  const now = Date.now();
  const max = filtered.length;
  if (max === 0) return;

  // Bloqueio de repetição muito rápida para as setas
  if (now - lastKeyTime < KEY_THROTTLE) return;

  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    lastKeyTime = now;
    track.style.pointerEvents = 'none';
    if (activeIdx === null) selectPlatform(0);
    else selectPlatform(Math.max(0, activeIdx - 1));
  }

  if (e.key === 'ArrowRight') {
    e.preventDefault();
    lastKeyTime = now;
    track.style.pointerEvents = 'none';
    if (activeIdx === null) selectPlatform(0);
    else selectPlatform(Math.min(max - 1, activeIdx + 1));
  }

  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    if (activeIdx === null) return;
    e.preventDefault();
    lastKeyTime = now;
    const items = [...document.querySelectorAll('.game-item')];
    if (!items.length) return;
    const currentDomIdx = items.findIndex(item => item.classList.contains('selected'));
    let nextDomIdx;
    if (e.key === 'ArrowUp') {
      nextDomIdx = currentDomIdx <= 0 ? items.length - 1 : currentDomIdx - 1;
    } else {
      nextDomIdx = currentDomIdx < 0 || currentDomIdx >= items.length - 1 ? 0 : currentDomIdx + 1;
    }
    const gameList = document.getElementById('game-list-view');
    if (gameList) gameList.style.pointerEvents = 'none';
    items[nextDomIdx].click();
    items[nextDomIdx].scrollIntoView({ block: 'nearest' });
  }

  if (e.key === 'Enter') {
    if (activeIdx !== null) launchGame();
  }

// Atalho para Pesquisa de JOGOS (se houver plataforma selecionada)
  if (e.key.toLowerCase() === 'j') {
    if (activeIdx !== null) {
      e.preventDefault();
      const gameSearchEl = document.getElementById('game-search');
      if (gameSearchEl) gameSearchEl.focus();
    }
  }
});

// ===== START =====
function init() {
  // Pequeno delay para garantir que o DOM e as fontes foram processados pelo navegador
  setTimeout(() => {
    // Tenta restaurar estado anterior (pós-fechamento de emulador)
    const savedActive = localStorage.getItem('retroVault_activeIdx');
    const savedGame = localStorage.getItem('retroVault_selectedGameIdx');

    if (savedActive !== null) {
      activeIdx = parseInt(savedActive);
      selectedGameIdx = parseInt(savedGame) || 0;
      localStorage.removeItem('retroVault_activeIdx');
      localStorage.removeItem('retroVault_selectedGameIdx');
    }

    // Inicializa o catálogo
    if (window.matchMedia('(max-width: 932px)').matches) {
      // Mobile: começa sem seleção — usuário desliza e toca para escolher
      activeIdx = null;
      updateUI();
      buildCarousel();
      detailInner.innerHTML = '<div class="detail-placeholder" data-i18n="placeholder">' + translations[currentLang].placeholder + '</div>';
    } else {
      selectPlatform(activeIdx);
      updateUI();
      buildCarousel();
    }
    
    // Força um evento de resize para garantir que os cálculos de largura (clientWidth) ocorram
    window.dispatchEvent(new Event('resize'));
    
    console.log("Catálogo RetroVault inicializado com sucesso.");
  }, 100);
}


window.addEventListener('resize', buildCarousel);

document.addEventListener('mousemove', () => {
  track.style.pointerEvents = '';
  const gameList = document.getElementById('game-list-view');
  if (gameList) gameList.style.pointerEvents = '';
});

window.addEventListener('load', init);

// ===== EMULATOR INTEGRATION =====

function launchGame() {
  if (activeIdx === null || isEmulatorRunning) return;
  isEmulatorRunning = true;
  const platform = filtered[activeIdx];
  const selectedGame = platform.games[selectedGameIdx];
  if (!selectedGame) return;

  const overlay = document.getElementById('emulator-overlay');
  const bootScreen = document.getElementById('boot-screen');
  
  // 1. Mostrar Overlay e Reseta Boot
  overlay.style.display = 'flex';
  bootScreen.style.opacity = '1';
  bootScreen.style.display = 'flex';

  // Mobile: tap na tela revela/esconde o botão de sair
  if (window.matchMedia('(max-width: 932px)').matches) {
    const exitBtn = document.getElementById('exit-emulator');
    overlay.addEventListener('click', function toggleExit(e) {
      if (e.target === exitBtn || exitBtn.contains(e.target)) return;
      exitBtn.classList.toggle('visible');
      clearTimeout(exitBtn._hideTimer);
      if (exitBtn.classList.contains('visible')) {
        exitBtn._hideTimer = setTimeout(() => exitBtn.classList.remove('visible'), 3000);
      }
    });
  }

  // Canvas noise
  const bootCanvas = document.getElementById('boot-canvas');
  let noiseRaf;
  if (bootCanvas) {
    const ctx = bootCanvas.getContext('2d');
    bootCanvas.width  = bootCanvas.offsetWidth;
    bootCanvas.height = bootCanvas.offsetHeight;
    function drawNoise() {
      const w = bootCanvas.width, h = bootCanvas.height;
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255 | 0;
        data[i] = v; data[i+1] = v; data[i+2] = v; data[i+3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);
      noiseRaf = requestAnimationFrame(drawNoise);
    }
    drawNoise();
  }

  // Fases do boot
  const bootLogo = document.querySelector('.boot-logo');
  if (bootLogo) {
    bootLogo.className = 'boot-logo hidden';
    setTimeout(() => { bootLogo.className = 'boot-logo tuning'; }, 800);
    setTimeout(() => { bootLogo.className = 'boot-logo stable'; }, 2100);
  }



  // 2. Configuração do EmulatorJS
  // Mapeamento de cores baseado na nossa lista PLATFORMS
  const coreMap = {
    'NES': 'nes',
    'SNES': 'snes',
    'GB': 'gambatte',
    'GBC': 'gambatte',
    'GBA': 'gba',
    'PSX': 'pcsx_rearmed',
    'MEGA': 'genesis_plus_gx',
    'MASTER': 'genesis_plus_gx',
    'cps1': 'fbneo',
    'cps2': 'fbneo',
    'cps3': 'fbneo',
    'neogeo': 'fbneo',
    'TUNIT': 'fbneo',
    'fbneo': 'fbneo',
    'DOS': 'dos'
  };

  const extMap = {
    'snes': 'sfc',
    'nes': 'nes',
    'gba': 'gba',
    'gbc': 'gbc',
    'gb': 'gb',
    'genesis': 'md',
    'sms': 'sms',
    'psx': 'chd',
    'genesis_plus_gx': 'sms',
    'gambatte': 'gb'
  };
  // 2. Configuração do EmulatorJS (Método Global Infallível)
  const currentCore = coreMap[platform.abbr] || 'snes';
  let ext = extMap[currentCore] || 'zip';

  // Overrides específicos para cores multi-sistema

  // Overrides específicos para cores multi-sistema
  if (platform.abbr === 'MEGA') ext = 'md';
  if (platform.abbr === 'MASTER') ext = 'sms';
  if (platform.abbr === 'GB') ext = 'gb';
  if (platform.abbr === 'GBC') ext = 'gbc';

  const filename = selectedGame.file || selectedGame.title.replace(/\s+/g, '_').toLowerCase();

  const emuContainer = document.getElementById('emulator-container');
  emuContainer.innerHTML = ''; // Limpa antes de carregar
  emuContainer.style.opacity = '0';

  // BIOS INTELLIGENCE
  window.EJS_biosUrl = undefined;
  if (platform.abbr === 'PSX') {
    window.EJS_biosUrl = 'roms/psx/scph5501.bin';
    ext = 'chd';
  } else if (platform.abbr === 'neogeo') {
    window.EJS_biosUrl = 'roms/neogeo/neogeo.zip';
  }

  // Variáveis Globais para o Loader.js
  window.EJS_player = '#emulator-container';
  const finalFilename = filename.includes('.') ? filename : `${filename}.${ext}`;
  window.EJS_gameUrl = `roms/${platform.abbr.toLowerCase()}/${finalFilename}`;
  window.EJS_core = currentCore;
  window.EJS_pathtodata = 'https://cdn.emulatorjs.org/stable/data/';
  window.EJS_startOnLoaded = true;
  window.EJS_allow_Focus_Inputs = true;
  window.EJS_showMenu = false;
  window.EJS_core_config = false;
  window.EJS_mouse = false;
  window.EJS_threads = false;
  window.EJS_Buttons = {}; // Remove todos os botões da barra (Save, Load, etc)
  window.EJS_Settings = {}; // Remove o acesso às configurações

  console.log("--- INICIANDO VIA GLOBAL (STABLE) ---");
  console.log("ROM:", window.EJS_gameUrl);
  console.log("CORE:", window.EJS_core);
  if (window.EJS_biosUrl) console.log("BIOS:", window.EJS_biosUrl);

  // Injeção Dinâmica do Script (Atrasada em 2s para garantir o silêncio do branding)
  setTimeout(() => {
    console.log("Injetando motor do emulador em background (STABLE)...");
    const s = document.createElement('script');
    s.src = 'https://cdn.emulatorjs.org/stable/data/loader.js';
    document.body.appendChild(s);
  }, 2000);

  // 3. Simulação de Boot (3 Segundos de Branding)

  setTimeout(() => {
    if (noiseRaf) cancelAnimationFrame(noiseRaf);
    bootScreen.style.opacity = '0';
    emuContainer.classList.add('visible');

    setTimeout(() => {
      bootScreen.style.display = 'none';
    }, 800);
  }, 3000);
}

function closeEmulator() {
  isEmulatorRunning = false;
  console.log("Salvando estado e reiniciando sistema para limpeza total...");
  // Salva onde o usuário estava
  localStorage.setItem('retroVault_activeIdx', activeIdx);
  localStorage.setItem('retroVault_selectedGameIdx', selectedGameIdx);
  
  // Reinicia a página (única forma 100% garantida de matar o AudioContext órfão)
  window.location.reload();
}

// ===== TOUCH: DRAG FÍSICO COM INÉRCIA NO CARROSSEL =====
(function() {
  const container = document.getElementById('carousel-container');

  let startX = 0;
  let startY = 0;
  let baseTranslate = 0;   // translateX em px no momento do toque
  let cachedStep = 0;      // largura do card + gap — cacheada no touchstart
  let isDragging = false;
  let isHorizontal = null;
  let lastX = 0;
  let lastTime = 0;
  let velocity = 0;
  let pendingX = 0;
  let rafPending = false;

  function readCurrentTranslate() {
    const m = track.style.transform.match(/translateX\((-?[\d.]+)px\)/);
    return m ? parseFloat(m[1]) : -(carOffset * cachedStep - 16);
  }

  container.addEventListener('touchstart', e => {
    cachedStep = getCardStep();           // lê o DOM uma única vez
    startX     = e.touches[0].clientX;
    startY     = e.touches[0].clientY;
    lastX      = startX;
    lastTime   = Date.now();
    baseTranslate = readCurrentTranslate();
    pendingX      = baseTranslate;
    isDragging    = false;
    isHorizontal  = null;
    velocity      = 0;
    track.style.transition = 'none';     // congela transição imediatamente
  }, { passive: true });

  container.addEventListener('touchmove', e => {
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;

    // Decide direção dominante na primeira movimentação
    if (isHorizontal === null && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
      isHorizontal = Math.abs(dx) >= Math.abs(dy);
    }
    if (!isHorizontal) return;

    e.preventDefault();
    isDragging = true;

    // Velocidade (pixels/ms)
    const now = Date.now();
    const dt  = now - lastTime;
    if (dt > 0) velocity = (e.touches[0].clientX - lastX) / dt;
    lastX    = e.touches[0].clientX;
    lastTime = now;

    // Movimento limitado às bordas do carrossel
    const maxOffset  = Math.max(0, filtered.length - VISIBLE);
    const minTranslate = -(maxOffset * cachedStep - 16); // último card
    const maxTranslate = 16;                             // primeiro card
    pendingX = Math.max(minTranslate, Math.min(maxTranslate, baseTranslate + dx));

    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(() => {
        track.style.transform = `translateX(${pendingX}px)`;
        rafPending = false;
      });
    }
  }, { passive: false });

  container.addEventListener('touchend', () => {
    if (!isHorizontal || !isDragging) return;

    // Projeta posição final com inércia
    const projected    = pendingX + velocity * 200;
    const maxOffset    = Math.max(0, filtered.length - VISIBLE);
    // Converte translateX de volta para carOffset: translateX = -(carOffset * step - 16)
    const rawOffset    = -(projected - 16) / cachedStep;
    const targetOffset = Math.round(Math.max(0, Math.min(rawOffset, maxOffset)));

    carOffset = targetOffset;
    track.style.transition = '';         // reativa transição para o snap final
    applyCarouselOffset();
    updateNav();

    isDragging = false;
  }, { passive: true });
})();

// ===== MOBILE: BOTTOM SHEET DE CONFIRMAÇÃO =====
(function() {
  const backdrop = document.getElementById('mobile-sheet-backdrop');
  const sheet    = document.getElementById('mobile-sheet');
  const titleEl  = document.getElementById('sheet-game-title');
  const metaEl   = document.getElementById('sheet-game-meta');
  const playBtn  = document.getElementById('sheet-play');
  const cancelBtn= document.getElementById('sheet-cancel');

  function openSheet(game, platform) {
    titleEl.textContent = game.displayTitle || game.title;
    metaEl.textContent  = `${platform.name} · ${game.year}`;
    backdrop.classList.add('open');
    sheet.classList.add('open');
  }

  function closeSheet() {
    sheet.classList.remove('open');
    backdrop.classList.remove('open');
  }

  // Abre o sheet ao tocar num jogo (mobile)
  document.addEventListener('click', e => {
    if (!window.matchMedia('(max-width: 932px)').matches) return;
    const item = e.target.closest('.game-item');
    if (!item) return;

    e.stopPropagation();
    const platform = filtered[activeIdx];
    if (!platform) return;

    const title = item.getAttribute('data-title');
    const gameIdx = platform.games.findIndex(g => g.title === title);
    if (gameIdx === -1) return;

    selectedGameIdx = gameIdx;
    openSheet(platform.games[gameIdx], platform);
  }, true);

  playBtn.addEventListener('click', () => { closeSheet(); launchGame(); });
  cancelBtn.addEventListener('click', closeSheet);
  backdrop.addEventListener('click', closeSheet);
})();

// ===== GAMEPAD: auto-oculta controles touch quando gamepad conectado =====
window.addEventListener('gamepadconnected', () => {
  document.body.classList.add('has-gamepad');
});
window.addEventListener('gamepaddisconnected', () => {
  document.body.classList.remove('has-gamepad');
});

// Listeners para os botões novos
document.addEventListener('click', e => {
  const target = e.target.closest('button, .game-item'); 
  if (!target) return;

  if (target.id === 'exit-emulator') {
    closeEmulator();
  }
  
  // Seleção de jogos na lista lateral
  if (target.classList.contains('game-item')) {
    const idx = parseInt(target.getAttribute('data-idx'));
    if (!isNaN(idx)) {
      selectedGameIdx = idx;
      console.log("Jogo selecionado ID:", idx);
      
      // Atualiza visualmente a seleção
      document.querySelectorAll('.game-item').forEach(el => el.classList.remove('selected'));
      target.classList.add('selected');
    }
  }
});
