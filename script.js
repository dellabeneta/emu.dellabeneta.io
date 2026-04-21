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
      { title: "Battletoads", year: "1991", file: "battletoads.nes" },
      { title: "Castlevania", year: "1986", file: "castlevania.nes" },
      { title: "Contra", year: "1987", file: "contra.nes" },
      { title: "DuckTales", year: "1989", file: "ducktales.nes" },
      { title: "Final Fantasy", year: "1987", file: "final-fantasy.nes" },
      { title: "Kid Icarus", year: "1986", file: "kid-icarus.nes" },
      { title: "Kirby's Adventure", year: "1993", file: "kirby's-adventure.nes" },
      { title: "Mega Man 2", year: "1988", file: "mega-man-2.nes" },
      { title: "Mega Man", year: "1987", file: "mega-man.nes" },
      { title: "Metal Gear", year: "1987", file: "metal-gear.nes" },
      { title: "Metroid", year: "1986", file: "metroid.nes" },
      { title: "Mike Tyson's Punch-Out!!", year: "1987", file: "mike-tyson's-punch-out!!.nes" },
      { title: "Ninja Gaiden", year: "1988", file: "ninja-gaiden.nes" },
      { title: "River City Ransom", year: "1989", file: "river-city-ransom.nes" },
      { title: "Super Mario Bros. 2", year: "1988", file: "super-mario-bros.-2.nes" },
      { title: "Super Mario Bros. 3", year: "1990", file: "super-mario-bros.-3.nes" },
      { title: "Super Mario Bros.", year: "1985", file: "super-mario-bros.nes" },
      { title: "Teenage Mutant Ninja Turtles II: The Arcade Game", year: "1990", file: "teenage-mutant-ninja-turtles-ii-the-arcade-game.nes" },
      { title: "The Legend of Zelda", year: "1986", file: "the-legend-of-zelda.nes" },
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
      { title: "Aladdin", year: "1992", file: "aladdin.sfc" },
      { title: "Super Mario World", year: "1990", file: "super-mario-world.smc" },
      { title: "Breath of Fire II", year: "1994", file: "breath-of-fire-ii.sfc" },
      { title: "Breath of Fire", year: "1993", file: "breath-of-fire.sfc" },
      { title: "Chrono Trigger", year: "1995", file: "chrono-trigger.sfc" },
      { title: "Contra III: The Alien Wars", year: "1992", file: "contra-iii-the-alien-wars.sfc" },
      { title: "Donkey Kong Country 2: Diddy's Kong Quest", year: "1995", file: "donkey-kong-country-2-diddy's-kong-quest.sfc" },
      { title: "Donkey Kong Country 3: Dixie Kong's Double Trouble!", year: "1996", file: "donkey-kong-country-3-dixie-kong's-double-trouble!.sfc" },
      { title: "Donkey Kong Country", year: "1994", file: "donkey-kong-country.sfc" },
      { title: "EarthBound", year: "1994", file: "earthbound.sfc" },
      { title: "Final Fantasy III", year: "1994", file: "final-fantasy-iii.sfc" },
      { title: "Final Fantasy II", year: "1991", file: "final-fantasy-ii.sfc" },
      { title: "F-Zero", year: "1990", file: "f-zero.sfc" },
      { title: "Jungle Strike", year: "1993", file: "jungle-strike.sfc" },
      { title: "Killer Instinct", year: "1995", file: "killer-instinct.sfc" },
      { title: "Kirby Super Star", year: "1996", file: "kirby-super-star.sfc" },
      { title: "Lufia II: Rise of the Sinistrals", year: "1995", file: "lufia-ii-rise-of-the-sinistrals.sfc" },
      { title: "Mega Man X2", year: "1994", file: "mega-man-x2.sfc" },
      { title: "Mega Man X3", year: "1995", file: "mega-man-x3.sfc" },
      { title: "Mega Man X", year: "1993", file: "mega-man-x.sfc" },
      { title: "Mortal Kombat II", year: "1994", file: "mortal-kombat-ii.sfc" },
      { title: "NBA Jam", year: "1994", file: "nba-jam.sfc" },
      { title: "NHL '94", year: "1993", file: "nhl-'94.sfc" },
      { title: "Out of This World", year: "1992", file: "out-of-this.sfc" },
      { title: "Pilotwings", year: "1990", file: "pilotwings.sfc" },
      { title: "Rock n' Roll Racing", year: "1993", file: "rock-n'-roll-racing.sfc" },
      { title: "R-Type III: The Third Lightning", year: "1993", file: "r-type-iii.sfc" },
      { title: "Secret of Mana", year: "1993", file: "secret-of-mana.sfc" },
      { title: "Shadowrun", year: "1993", file: "shadowrun.sfc" },
      { title: "Star Fox", year: "1993", file: "star-fox.sfc" },
      { title: "Street Fighter Alpha 2", year: "1996", file: "street-fighter-alpha-2.sfc" },
      { title: "Street Fighter II Turbo: Hyper Fighting", year: "1992", file: "street-fighter-ii-turbo.sfc" },
      { title: "Super Castlevania IV", year: "1991", file: "super-castlevania-iv.sfc" },
      { title: "Super Ghouls'n Ghosts", year: "1991", file: "super-ghouls'n-ghosts.sfc" },
      { title: "Super Mario World 2: Yoshi's Island", year: "1995", file: "super-mario-2-yoshi's-island.sfc" },
      { title: "Super Mario All-Stars", year: "1993", file: "super-mario-all-stars.sfc" },
      { title: "Super Mario Kart", year: "1992", file: "super-mario-kart.sfc" },
      { title: "Super Mario RPG: Legend of the Seven Stars", year: "1996", file: "super-mario-rpg-legend-of-the-seven-stars.sfc" },
      { title: "Super Metroid", year: "1994", file: "super-metroid.sfc" },
      { title: "Super Punch-Out!!", year: "1994", file: "super-punch-out!!.sfc" },
      { title: "Super Street Fighter II: The New Challengers", year: "1993", file: "super-street-fighter-ii-the-new-challengers.sfc" },
      { title: "Teenage Mutant Ninja Turtles IV: Turtles in Time", year: "1992", file: "teenage-mutant-ninja-turtles-iv-turtles-in-time.sfc" },
      { title: "Terranigma", year: "1995", file: "terranigma.sfc" },
      { title: "Tetris Attack", year: "1995", file: "tetris-attack.sfc" },
      { title: "Tetris & Dr. Mario", year: "1994", file: "tetris-&-dr.-mario.sfc" },
      { title: "The Adventures of Batman & Robin", year: "1994", file: "the-adventures-of-batman-&-robin.sfc" },
      { title: "The Legend of Zelda: A Link to the Past", year: "1991", file: "the-legend-of-zelda-a-link-to-the-past.sfc" },
      { title: "The Lion King", year: "1994", file: "the-lion-king.sfc" },
      { title: "Ultimate Mortal Kombat 3", year: "1994", file: "ultimate-mortal-kombat-3.sfc" },
      { title: "WWF WrestleMania: The Arcade Game", year: "1995", file: "wwf-wrestlemania-the-arcade-game.sfc" }

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
      { title: "After Burner", year: "1987", file: "after-burner.sms" },
      { title: "Alex Kidd in Miracle World", year: "1986", file: "alex-kidd-in-miracle.sms" },
      { title: "Golden Axe Warrior", year: "1991", file: "golden-axe-warrior.sms" },
      { title: "Mortal Kombat", year: "1993", file: "mortal-kombat.sms" },
      { title: "OutRun", year: "1987", file: "outrun.sms" },
      { title: "Phantasy Star", year: "1987", file: "phantasy-star.sms" },
      { title: "R-Type", year: "1988", file: "r-type.sms" },
      { title: "Shinobi", year: "1988", file: "shinobi.sms" },
      { title: "Sonic the Hedgehog", year: "1991", file: "sonic-the-hedgehog.sms" },
      { title: "Wonder Boy III: The Dragon's Trap", year: "1989", file: "wonder-boy-iii-the-dragon's-trap.sms" }

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
      { title: "Aladdin", year: "1993", file: "aladdin.md" },
      { title: "Castlevania: Bloodlines", year: "1994", file: "castlevania-bloodlines.md" },
      { title: "Contra: Hard Corps", year: "1994", file: "contra-hard-corps.md" },
      { title: "Earthworm Jim", year: "1994", file: "earthworm-jim.md" },
      { title: "Golden Axe", year: "1989", file: "golden-axe.md" },
      { title: "Gunstar Heroes", year: "1993", file: "gunstar-heroes.md" },
      { title: "Mortal Kombat", year: "1993", file: "mortal-kombat.md" },
      { title: "Mortal Kombat II", year: "1994", file: "mortal-kombat-ii.md" },
      { title: "NBA Jam", year: "1993", file: "nba-jam.md" },
      { title: "Phantasy Star IV", year: "1993", file: "phantasy-star-iv.md" },
      { title: "Road Rash II", year: "1992", file: "road-rash-ii.md" },
      { title: "Shinobi III: Return of the Ninja Master", year: "1993", file: "shinobi-iii-return-of-the-ninja-master.md" },
      { title: "Sonic the Hedgehog", year: "1991", file: "sonic-the-hedgehog.md" },
      { title: "Sonic the Hedgehog 2", year: "1992", file: "sonic-the-hedgehog-2.md" },
      { title: "Sonic the Hedgehog 3", year: "1994", file: "sonic-the-hedgehog-3.md" },
      { title: "Street Fighter II': Special Champion Edition", year: "1992", file: "street-fighter-ii'-special-champion-edition.md" },
      { title: "Streets of Rage 2", year: "1992", file: "streets-of-rage-2.md" },
      { title: "The Lion King", year: "1994", file: "the-lion-king.md" },
      { title: "ToeJam & Earl", year: "1991", file: "toejam-and-earl.md" },
      { title: "Vectorman", year: "1995", file: "vectorman.md" }

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
      { title: "Castlevania II: Belmont's Revenge", year: "1991", file: "castlevania-ii-belmonts-revenge.gb" },
      { title: "Contra: The Alien Wars", year: "1994", file: "contra-the-alien-wars.gb" },
      { title: "Donkey Kong", year: "1994", file: "donkey-kong.gb" },
      { title: "Dr. Mario", year: "1990", file: "dr-mario.gb" },
      { title: "DuckTales", year: "1990", file: "ducktales.gb" },
      { title: "The Final Fantasy Legend", year: "1989", file: "final-fantasy-legend-the.gb" },
      { title: "Kirby's Dream Land 2", year: "1995", file: "kirbys-dream-land-2.gb" },
      { title: "The Legend of Zelda: Link's Awakening", year: "1993", file: "legend-of-zelda-the-link's-awakening.gb" },
      { title: "Kirby's Dream Land", year: "1992", file: "kirbys-dream-land.gb" },
      { title: "Mega Man II", year: "1991", file: "mega-man-ii.gb" },
      { title: "Mega Man III", year: "1992", file: "mega-man-iii.gb" },
      { title: "Mega Man IV", year: "1993", file: "mega-man-iv.gb" },
      { title: "Mega Man V", year: "1994", file: "mega-man-v.gb" },
      { title: "Metroid II: Return of Samus", year: "1991", file: "metroid-ii-return-of-samus.gb" },
      { title: "Pokémon Blue", year: "1996", file: "pokemon-blue-version.gb" },
      { title: "Pokémon Red", year: "1996", file: "pokemon-red-version.gb" },
      { title: "Pokémon Yellow: Special Pikachu Edition", year: "1998", file: "pokemon-yellow-version-special-pikachu-Edition.gb" },
      { title: "Super Mario Land 2: 6 Golden Coins", year: "1992", file: "super-mario-land-2-6-golden-coins.gb" },
      { title: "Super Mario Land", year: "1989", file: "super-mario-land.gb" },
      { title: "Wario Land: Super Mario Land 3", year: "1994", file: "wario-land-super-mario-land-3.gb" }
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
      { title: "Dragon Warrior Monsters 2: Tara's Adventure", year: "2001", file: "dragon-warrior-monsters-2-taras-adventure.gbc" },
      { title: "Dragon Warrior Monsters", year: "1998", file: "dragon-warrior-monsters.gbc" },
      { title: "The Legend of Zelda: Link's Awakening DX", year: "1998", file: "legend-of-zelda-the-links-awakening-dx.gbc" },
      { title: "The Legend of Zelda: Oracle of Ages", year: "2001", file: "legend-of-zelda-the-oracle-of-ages.gbc" },
      { title: "The Legend of Zelda: Oracle of Seasons", year: "2001", file: "legend-of-zelda-the-oracle-of-seasons.gbc" },
      { title: "Mario Golf", year: "1999", file: "mario-golf.gbc" },
      { title: "Mario Tennis", year: "2001", file: "mario-tennis.gbc" },
      { title: "Mega Man Xtreme 2", year: "2001", file: "mega-man-xtreme-2.gbc" },
      { title: "Mega Man Xtreme", year: "2000", file: "mega-man-xtreme.gbc" },
      { title: "Metal Gear Solid", year: "2000", file: "metal-gear-solid.gbc" },
      { title: "Pokémon Crystal", year: "2000", file: "pokemon-crystal-version.gbc" },
      { title: "Pokémon Gold", year: "1999", file: "pokemon-gold-version.gbc" },
      { title: "Pokémon Pinball", year: "1999", file: "pokemon-pinball.gbc" },
      { title: "Pokémon Silver", year: "1999", file: "pokemon-silver-version.gbc" },
      { title: "Pokémon Trading Card Game", year: "1998", file: "pokemon-trading-card-game.gbc" },
      { title: "R-Type DX", year: "1999", file: "r-type-dx.gbc" },
      { title: "Shantae", year: "2002", file: "shantae.gbc" },
      { title: "Super Mario Bros. Deluxe", year: "1999", file: "super-mario-bros-deluxe.gbc" },
      { title: "Tetris DX", year: "1998", file: "tetris-dx.gbc" },
      { title: "Wario Land 3", year: "2000", file: "wario-land-3.gbc" }
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
      { title: "Advance Wars", year: "2001", file: "advance-wars.gba" },
      { title: "Castlevania: Aria of Sorrow", year: "2003", file: "castlevania-aria-of-sorrow.gba" },
      { title: "Castlevania: Circle of the Moon", year: "2001", file: "castlevania-circle-of-the-moon.gba" },
      { title: "Donkey Kong Country", year: "2003", file: "donkey-kong-country.gba" },
      { title: "Final Fantasy VI Advance", year: "2006", file: "final-fantasy-vi-advance.gba" },
      { title: "Fire Emblem: The Blazing Blade", year: "2003", file: "fire-emblem.gba" },
      { title: "Golden Sun", year: "2001", file: "golden-sun.gba" },
      { title: "Kirby & The Amazing Mirror", year: "2004", file: "kirby-the-amazing-mirror.gba" },
      { title: "Mario & Luigi: Superstar Saga", year: "2003", file: "mario-and-luigi-superstar-saga.gba" },
      { title: "Mario Kart: Super Circuit", year: "2001", file: "mario-kart-super-circuit.gba" },
      { title: "Mega Man Battle Network 3 Blue", year: "2002", file: "mega-man-battle-network-3-blue-version.gba" },
      { title: "Metroid Fusion", year: "2002", file: "metroid-fusion.gba" },
      { title: "Metroid: Zero Mission", year: "2004", file: "metroid-zero-mission.gba" },
      { title: "Pokémon Emerald", year: "2004", file: "pokemon-emerald-version.gba" },
      { title: "Pokémon FireRed", year: "2004", file: "pokemon-firered-version.gba" },
      { title: "Sonic Advance", year: "2001", file: "sonic-advance.gba" },
      { title: "Street Fighter Alpha 3", year: "2002", file: "street-fighter-alpha-3.gba" },
      { title: "Super Mario Advance 4: Super Mario Bros. 3", year: "2003", file: "super-mario-advance-4.gba" },
      { title: "The Legend of Zelda: The Minish Cap", year: "2004", file: "the-legend-of-zelda-minish-cap.gba" },
      { title: "WarioWare, Inc.: Mega Microgames!", year: "2003", file: "warioware-inc-mega-microgames.gba" },
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
      { title: "Castlevania: Symphony of the Night", year: "1997", file: "castlevania-symphony-of-the-night.chd" },
      { title: "Crash Bandicoot", year: "1996", file: "crash-bandicoot.chd" },
      { title: "Gran Turismo 2 (Arcade Mode)", year: "1999", file: "gran-turismo-2-arcade.chd" },
      { title: "Marvel Super Heroes vs. Street Fighter", year: "1997", file: "marvel-super-heroes-vs-street-fighter.chd" },
      { title: "Metal Gear Solid", year: "1998", file: "metal-gear-solid.chd" },
      { title: "Metal Slug X", year: "1999", file: "metal-slug-x.chd" },
      { title: "Resident Evil 2", year: "1998", file: "resident-evil-2.chd" },
      { title: "Spyro the Dragon", year: "1998", file: "spyro-the-dragon.pbp" },
      { title: "Tekken 3", year: "1997", file: "tekken-3.pbp" },
      { title: "Tony Hawk's Pro Skater 2", year: "2000", file: "tony-hawks-pro-skater-2.chd" }
    ]
  },
  {
    name: "Nintendo 64",
    fullName: "Nintendo 64",
    abbr: "N64",
    era: "1996",
    decade: "90s",
    maker: "Nintendo",
    cores: ["mupen64plus"],
    img: "assets/n64.avif",
    desc: "O Nintendo 64 foi a última grande aposta nos cartuchos numa era já dominada pelos CDs, entregando jogos sem loading times e com qualidade gráfica impressionante para a época. Berço de títulos que definiram o que seria o game design 3D moderno: Ocarina of Time, Mario 64 e GoldenEye moldaram como pensamos em jogos até hoje. Curiosidade: o cartucho do Mario 64 custava o dobro de um jogo de PlayStation, mas a Nintendo apostava que a ausência de loading compensaria — e para milhões de fãs, compensou.",
    games: [
      { title: "Banjo-Kazooie", year: "1998", file: "banjo-kazooie.z64" },
      { title: "Donkey Kong 64", year: "1999", file: "donkey-kong-64.z64" },
      { title: "GoldenEye 007", year: "1997", file: "goldeneye-007.z64" },
      { title: "International Superstar Soccer 64", year: "1997", file: "international-superstar-soccer-64.z64" },
      { title: "Mario Kart 64", year: "1996", file: "mario-kart-64.z64" },
      { title: "Star Fox 64", year: "1997", file: "star-fox-64.z64" },
      { title: "Super Mario 64", year: "1996", file: "super-mario-64.z64" },
      { title: "Super Smash Bros.", year: "1999", file: "super-smash-bros.z64" },
      { title: "The Legend of Zelda: Ocarina of Time", year: "1998", file: "legend-of-zelda-the-ocarina-of-time.z64" },
      { title: "Wave Race 64", year: "1996", file: "wave-race-64.z64" }
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
      { title: "The Simpsons", year: "1991", file: "simpsons2p.zip" },
      { title: "Teenage Mutant Ninja Turtles: The Arcade Game", year: "1989", file: "tmnt22pu.zip" },
      { title: "X-Men", year: "1992", file: "xmen2pa.zip" },
      { title: "Contra", year: "1987", file: "contra.zip" },
      { title: "Pac-Man", year: "1980", file: "pacman.zip" },
      { title: "Ms. Pac-Man", year: "1981", file: "mspacman.zip" },
      { title: "Galaga", year: "1981", file: "galaga.zip" },
      { title: "Space Invaders", year: "1978", file: "invaders.zip" },
      { title: "Donkey Kong", year: "1981", file: "dkong.zip" },
      { title: "Golden Axe", year: "1989", file: "goldnaxe.zip" },
      { title: "Altered Beast", year: "1988", file: "altbeast.zip" },
      { title: "Double Dragon", year: "1987", file: "ddragon.zip" },
      { title: "R-Type", year: "1987", file: "rtype.zip" },
      { title: "OutRun", year: "1986", file: "outrun.zip" },
      { title: "After Burner II", year: "1987", file: "aburner2.zip" },
      { title: "Bubble Bobble", year: "1986", file: "bublbobl.zip" },
      { title: "Gauntlet", year: "1985", file: "gauntlet2p.zip" },
      { title: "1942", year: "1984", file: "1942.zip" },
      { title: "Gradius III", year: "1989", file: "gradius3.zip" },
      { title: "Shinobi", year: "1987", file: "shinobi.zip" },
      { title: "Ghouls 'n Ghosts", year: "1988", file: "gng.zip" },
      { title: "Sunset Riders", year: "1991", file: "ssridersubc.zip" },
      { title: "Punch-Out!!", year: "1983", file: "punchout.zip" },
      { title: "Battletoads", year: "1991", file: "btoads.zip" },
      { title: "Captain America and The Avengers", year: "1991", file: "captaven.zip" },
      { title: "Smash TV", year: "1990", file: "smashtv.zip" },
      { title: "Space Harrier", year: "1985", file: "sharrier.zip" },
      { title: "Arkanoid", year: "1986", file: "arkanoid.zip" },
      { title: "Frogger", year: "1981", file: "frogger.zip" },
      { title: "Aero Fighters", year: "1992", file: "aerofgt.zip" }
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
      { title: "Street Fighter II: The World Warrior", year: "1991", file: "sf2.zip" },
      { title: "Street Fighter II': Champion Edition", year: "1992", file: "sf2ce.zip" },
      { title: "Final Fight", year: "1989", file: "ffight.zip" },
      { title: "Captain Commando", year: "1991", file: "captcomm.zip" },
      { title: "Cadillacs and Dinosaurs", year: "1993", file: "dino.zip" },
      { title: "The Punisher", year: "1993", file: "punisher.zip" },
      { title: "Strider", year: "1989", file: "strider.zip" },
      { title: "Ghouls 'n Ghosts", year: "1988", file: "ghouls.zip" },
      { title: "Knights of the Round", year: "1991", file: "knights.zip" },
      { title: "King of Dragons", year: "1991", file: "kod.zip" },
      { title: "Warriors of Fate", year: "1992", file: "wof.zip" },
      { title: "UN Squadron", year: "1989", file: "unsquad.zip" },
      { title: "Mega Man: Power Battle", year: "1995", file: "megaman.zip" },
      { title: "Saturday Night Slam Masters", year: "1993", file: "slammast.zip" },
      { title: "Forgotten Worlds", year: "1989", file: "forgottn.zip" },
      { title: "Mercs", year: "1990", file: "mercs.zip" },
      { title: "Magic Sword", year: "1990", file: "msword.zip" },
      { title: "Three Wonders", year: "1991", file: "3wonders.zip" },
      { title: "1941: Counter Attack", year: "1990", file: "1941.zip" },
      { title: "Pang! 3", year: "1995", file: "pang3.zip" }
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
      { title: "19XX: The War Against Destiny", year: "1995", file: "19xx.zip" },
      { title: "Mars Matrix", year: "1999", file: "mmatrix.zip" },
      { title: "Marvel Super Heroes vs. Street Fighter", year: "1997", file: "mshvsf.zip" },
      { title: "Night Warriors: Darkstalkers' Revenge", year: "1994", file: "nwarr.zip" },
      { title: "Street Fighter Alpha: Warriors' Dreams", year: "1995", file: "sfa.zip" },
      { title: "Street Fighter Alpha 3", year: "1998", file: "sfa3.zip" },
      { title: "Street Fighter Alpha 2", year: "1996", file: "sfa2.zip" },
      { title: "Marvel vs. Capcom: Clash of Super Heroes", year: "1998", file: "mvsc.zip" },
      { title: "X-Men vs. Street Fighter", year: "1996", file: "xmvsf.zip" },
      { title: "Marvel Super Heroes", year: "1995", file: "msh.zip" },
      { title: "X-Men: Children of the Atom", year: "1994", file: "xmcota.zip" },
      { title: "Darkstalkers: The Night Warriors", year: "1994", file: "dstlk.zip" },
      { title: "Vampire Savior", year: "1997", file: "vsav.zip" },
      { title: "Alien vs. Predator", year: "1994", file: "avsp.zip" },
      { title: "Mega Man 2: Power Fighters", year: "1996", file: "megaman2.zip" },
      { title: "Dungeons & Dragons: Shadow over Mystara", year: "1996", file: "ddsom.zip" },
      { title: "Dungeons & Dragons: Tower of Doom", year: "1994", file: "ddtod.zip" },
      { title: "Super Puzzle Fighter II Turbo", year: "1996", file: "spf2t.zip" },
      { title: "Super Street Fighter II Turbo", year: "1994", file: "ssf2t.zip" },
      { title: "Giga Wing", year: "1999", file: "gigawing.zip" },
      { title: "Progear", year: "2001", file: "progear.zip" },
      { title: "Battle Circuit", year: "1997", file: "batcir.zip" },
      { title: "1944: The Loop Master", year: "2000", file: "1944.zip" },
      { title: "Super Gem Fighter Mini Mix", year: "1997", file: "sgemf.zip" },
      { title: "Armored Warriors", year: "1994", file: "armwar.zip" }
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
      { title: "Street Fighter III: 3rd Strike - Fight for the Future", year: "1999", file: "sfiii3.zip" },
      { title: "Street Fighter III: 2nd Impact - Giant Attack", year: "1997", file: "sfiii2.zip" },
      { title: "Street Fighter III: New Generation", year: "1997", file: "sfiii.zip" },
      { title: "JoJo's Bizarre Adventure", year: "1998", file: "jojo.zip" },
      { title: "Red Earth", year: "1996", file: "redearth.zip" }
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
      { title: "Metal Slug", year: "1996", file: "mslug.zip" },
      { title: "Metal Slug 3", year: "2000", file: "mslug3.zip" },
      { title: "Metal Slug X", year: "1999", file: "mslugx.zip" },
      { title: "The King of Fighters '98", year: "1998", file: "kof98.zip" },
      { title: "The King of Fighters '97", year: "1997", file: "kof97.zip" },
      { title: "The King of Fighters '94", year: "1994", file: "kof94.zip" },
      { title: "The King of Fighters '99", year: "1999", file: "kof99.zip" },
      { title: "The King of Fighters 2002", year: "2002", file: "kof2002.zip" },
      { title: "Garou: Mark of the Wolves", year: "1999", file: "garou.zip" },
      { title: "Samurai Shodown II", year: "1994", file: "samsho2.zip" },
      { title: "Samurai Shodown IV: Amakusa's Revenge", year: "1996", file: "samsho4.zip" },
      { title: "Samurai Shodown V Special", year: "2004", file: "samsh5fe.zip" },
      { title: "The Last Blade", year: "1997", file: "lastblad.zip" },
      { title: "The Last Blade 2", year: "1998", file: "lastbld2.zip" },
      { title: "Neo Turf Masters", year: "1996", file: "turfmast.zip" },
      { title: "Blazing Star", year: "1998", file: "blazstar.zip" },
      { title: "Shock Troopers", year: "1997", file: "shocktro.zip" },
      { title: "Shock Troopers: 2nd Squad", year: "1998", file: "shocktr2.zip" },
      { title: "Windjammers", year: "1994", file: "wjammers.zip" },
      { title: "Pulstar", year: "1995", file: "pulstar.zip" },
      { title: "Sonic Wings 2", year: "1994", file: "sonicwi2.zip" },
      { title: "Sonic Wings 3", year: "1995", file: "sonicwi3.zip" },
      { title: "Puzzle Bobble", year: "1994", file: "pbobblen.zip" },
      { title: "Twinkle Star Sprites", year: "1996", file: "twinspri.zip" },
      { title: "Art of Fighting 2", year: "1994", file: "aof2.zip" },
      { title: "Fatal Fury Special", year: "1993", file: "fatfursp.zip" },
      { title: "Real Bout Fatal Fury 2: The Newcomers", year: "1998", file: "rbff2.zip" },
      { title: "Magician Lord", year: "1990", file: "maglord.zip" },
      { title: "Neo Bomberman", year: "1997", file: "neobombe.zip" },
      { title: "Magical Drop III", year: "1997", file: "magdrop3.zip" }
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
  "Mega Drive":"The Mega Drive brought 'attitude', speed, and Yamaha FM audio, brilliantly challenging Nintendo's hegemony in the 90s. Home of Sonic, Streets of Rage, and Golden Axe, it consolidated an urban visual identity with its famous 'Blast Processing'. Its robust architecture allowed for almost arcade-perfect ports, defining one of the most competitive eras in history.",
  "Master System":"The Sega Master System stood out with vibrant colors and a superior video chip, becoming an absolute legend in Brazil and Europe. It brought arcade power home with ports like After Burner and OutRun, while giving life to heroes like Alex Kidd and Phantasy Star. A durable system that paved the way for the innovation that still defines Sega's identity today.",
  "Capcom CPS-1":"The CPS-1 was the foundation of Capcom's arcade empire, setting the action gold standard in the late 80s. Powerful hardware that gave birth to Street Fighter II and Final Fight with massive sprites and complex animations. With Yamaha sound and vibrant visuals, it proved Capcom was the absolute queen of arcade action and the blueprint for future fighting games.",
  "Capcom CPS-2":"Famous for Q-Sound and colored armored cases, the CPS-2 dominated 90s arcades with Street Fighter Alpha and Darkstalkers. Capable of managing hundreds of colors and fluid sprites, it was the stage for the first explosive Marvel vs. Capcom crossovers. A system that elevated audio-visual fidelity, becoming an immortal icon of the fighting game scene.",
  "Capcom CPS-3":"The absolute pinnacle of hand-drawn 2D animation in the industry. Base of the legendary Street Fighter III and JoJo's Bizarre Adventure, the CPS-3 hardware delivered fluid motions that look like high-definition cartoons. It is the final testament to artistic and mechanical perfection in pixel art before the industry moved to 3D polygons.",
  "Neo Geo MVS": "The Neo Geo MVS revolutionized the market by allowing game swaps on the same board, becoming synonymous with arcade luxury. With hardware delivering colorful sprites and massive sound, it was the home of King of Fighters and Metal Slug. It offered the 'arcade perfect' experience that every gamer from that decade desired to have in their room.",
  "Nintendo 64": "The Nintendo 64 was the last great bet on cartridges in a CD-dominated era, delivering load-time-free games with impressive 3D visuals. The birthplace of titles that defined modern 3D game design: Ocarina of Time, Mario 64, and GoldenEye shaped how we think about games to this day. Its bold hardware choices made it a cult icon beloved by every gamer who grew up in the late 90s.",
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
    footerKeyPlatforms: "plataformas",
    footerKeyGames: "jogos",
    footerKeyPlay: "jogar",
    footerKeySearch: "buscar jogo",
    footerJoystick: "Compatibilidade com Joysticks",
    joystickModalTitle: "JOYSTICK NO BROWSER",
    joystickModalP1: "O site usa a Gamepad API do próprio navegador pra detectar controles — o que significa que ele não faz mágica por conta própria. A regra é simples: se o controle funciona no seu sistema operacional, ele vai funcionar aqui também.",
    joystickModalP2: "Então antes de achar que o site tá bugado, plugue o controle, abra o painel de controle do seu sistema e confirma que ele aparece lá. No Windows você procura por \"Controladores de jogo\", no Mac vai em Preferências do Sistema. Depois é só jogar.",
    joystickModalClose: "FECHAR",
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
    footerKeyPlatforms: "platforms",
    footerKeyGames: "games",
    footerKeyPlay: "play",
    footerKeySearch: "search game",
    footerJoystick: "Joystick Compatible",
    joystickModalTitle: "JOYSTICK IN THE BROWSER",
    joystickModalP1: "The site uses the browser's native Gamepad API to detect controllers — which means it doesn't do any magic on its own. The rule is simple: if the controller works on your operating system, it'll work here too.",
    joystickModalP2: "So before assuming the site is broken, plug in your controller, open your system's game controller settings, and confirm it shows up there. On Windows search for \"Game Controllers\", on Mac go to System Preferences. After that, just play.",
    joystickModalClose: "CLOSE",
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

// Joystick info modal
(function () {
  const btn      = document.getElementById('joystick-info-btn');
  const backdrop = document.getElementById('joystick-backdrop');
  const modal    = document.getElementById('joystick-modal');
  const closeBtn = document.getElementById('joystick-modal-close');

  function openModal() {
    backdrop.classList.add('open');
    modal.classList.add('open');
    closeBtn.focus();
  }
  function closeModal() {
    backdrop.classList.remove('open');
    modal.classList.remove('open');
  }

  btn.addEventListener('click', openModal);
  backdrop.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
})();

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
    img.onerror = () => { wrap.innerHTML = `<span class="c-abbr">${p.abbr.toUpperCase()}</span>`; };
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
    img.onerror = () => { thumb.innerHTML = `<span class="g-abbr">${p.abbr.toUpperCase()}</span>`; };
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
      <span>${translations[currentLang].abbr}: <strong>${p.abbr.toUpperCase()}</strong></span>
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

  const isMobile = window.matchMedia('(max-width: 932px)').matches;

  // Mobile: tap na tela revela/esconde o botão de sair
  if (isMobile) {
    const exitBtn = document.getElementById('exit-emulator');
    const emuContainer = document.getElementById('emulator-container');
    overlay.addEventListener('click', function toggleExit(e) {
      if (e.target === exitBtn || exitBtn.contains(e.target)) return;
      if (emuContainer.contains(e.target)) return;
      exitBtn.classList.toggle('visible');
      clearTimeout(exitBtn._hideTimer);
      if (exitBtn.classList.contains('visible')) {
        exitBtn._hideTimer = setTimeout(() => exitBtn.classList.remove('visible'), 3000);
      }
    });
  }

  // Desktop: animação de boot
  const bootCanvas = document.getElementById('boot-canvas');
  let noiseRaf;
  if (!isMobile) {
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
    const bootLogo = document.querySelector('.boot-logo');
    if (bootLogo) {
      bootLogo.className = 'boot-logo hidden';
      setTimeout(() => { bootLogo.className = 'boot-logo tuning'; }, 800);
      setTimeout(() => { bootLogo.className = 'boot-logo stable'; }, 2100);
    }
  } else {
    // Mobile: esconde boot screen imediatamente
    bootScreen.style.display = 'none';
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
    'fbneo': 'fbneo',
    'N64': 'n64'
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
    'gambatte': 'gb',
    'n64': 'z64'
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

  const injectLoader = () => {
    const s = document.createElement('script');
    s.src = 'https://cdn.emulatorjs.org/stable/data/loader.js';
    s.integrity = 'sha256-aeCQO/Hi9izteIleflEfom4RMW9+tzSSXDXpGboSh7I=';
    s.crossOrigin = 'anonymous';
    document.body.appendChild(s);
  };

  if (isMobile) {
    // iOS Safari: cria e desbloqueia AudioContext dentro do gesto e passa para o EmulatorJS
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        const audioCtx = new AudioCtx();
        audioCtx.resume();
        window.EJS_AudioContext = audioCtx;
      }
    } catch(e) {}

    // Mobile: injeta imediatamente (gesto do usuário ainda válido)
    emuContainer.classList.add('visible');
    injectLoader();
  } else {
    // Desktop: aguarda animação de boot
    setTimeout(injectLoader, 2000);
    setTimeout(() => {
      if (noiseRaf) cancelAnimationFrame(noiseRaf);
      bootScreen.style.opacity = '0';
      emuContainer.classList.add('visible');
      setTimeout(() => { bootScreen.style.display = 'none'; }, 800);
    }, 3000);
  }
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
