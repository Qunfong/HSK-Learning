({
  id: "03", slug: "budan", title: "不但……而且", sub: "Niet alleen ... maar ook",
  canDo: "Je kunt nu twee eigenschappen of feiten opstapelen met 不但 ... 而且.",
  guess: {
    q: "\"Ze is niet alleen slim, maar ook hartelijk.\" Welke zin klopt, denk je?",
    options: ["她不但聪明，而且很热情。", "她不但聪明，但是很热情。", "她而且聪明，不但很热情。", "她聪明不但，而且很热情。"], answer: 0,
    why: ["Goed: wie + 不但 A, 而且 B.", "但是 is \"maar\" voor een tegenstelling. Hier is er geen tegenstelling.", "不但 komt eerst, 而且 in de tweede helft.", "不但 staat vóór A, niet erachter."]
  },
  problem: "Je wilt twee dingen opnoemen. Het tweede gaat verder dan het eerste. In het Nederlands: \"niet alleen ..., maar ook ...\". Let op: het Nederlandse \"maar\" is hier geen tegenstelling. In het Chinees gebruik je daarom niet 但是, maar 不但 (búdàn) ... 而且 (érqiě) ....",
  pattern: [
    { l: "wie", v: "他", c: 1 }, { l: "不但", v: "不但", c: 2, key: true }, { l: "A", v: "会说汉语", c: 3 },
    { l: "而且", v: "而且", c: 4, key: true }, { l: "B", v: "还会写汉字", c: 5 }
  ],
  patternCap: "Eén onderwerp: wie + 不但 A，而且 (还 / 也) B · Twee onderwerpen: 不但 wie1 A，而且 wie2 也 B",
  rules: [
    "Eén onderwerp: dat staat vóór 不但.",
    "Twee onderwerpen: 不但 staat vóór het eerste onderwerp.",
    "Na 而且 komt vaak nog 还 of 也, vlak vóór het werkwoord.",
    "B gaat verder dan A: het is meer of sterker.",
    "A en B zijn beide positief of beide negatief. Een tegenstelling past hier niet."
  ],
  pitfall: "Gebruik geen 但是 in de tweede helft. 不但 ... 但是 is fout, want het gaat niet om een tegenstelling.",
  examples: [
    { cn: "这家饭馆的菜不但好吃，而且很便宜。", py: "Zhè jiā fànguǎn de cài búdàn hǎochī, érqiě hěn piányi.", nl: "Het eten in dit restaurant is niet alleen lekker, maar ook goedkoop." },
    { cn: "他不但会说汉语，而且还会写汉字。", py: "Tā búdàn huì shuō Hànyǔ, érqiě hái huì xiě Hànzì.", nl: "Hij kan niet alleen Chinees spreken, maar ook karakters schrijven." },
    { cn: "不但我喜欢这个电影，而且我爸爸也喜欢。", py: "Búdàn wǒ xǐhuan zhège diànyǐng, érqiě wǒ bàba yě xǐhuan.", nl: "Niet alleen ik vind deze film leuk, mijn vader ook." }
  ],
  nuance: [
    { h: "不但 of 不仅?",
      p: "不仅 (bùjǐn) betekent hetzelfde en werkt op dezelfde manier. 不仅 klinkt iets formeler. Je ziet het veel in kranten, verslagen en toespraken. In een gesprek hoor je vaker 不但. In de tweede helft kan ook 还 of 也 zonder 而且 staan.",
      ex: [
        { cn: "他不但会唱歌，而且会跳舞。", py: "Tā búdàn huì chàng gē, érqiě huì tiàowǔ.", nl: "Hij kan niet alleen zingen, maar ook dansen." },
        { cn: "这个方法不仅简单，还很有效。", py: "Zhège fāngfǎ bùjǐn jiǎndān, hái hěn yǒuxiào.", nl: "Deze methode is niet alleen eenvoudig, maar ook heel effectief." }
      ] },
    { h: "不但……而且 of 虽然……但是?",
      p: "Met 不但……而且 stapel je: A, en zelfs nog B. Met 虽然……但是 zet je twee dingen tegenover elkaar. Is het tweede deel een verrassing tegen het eerste in? Dan heb je 虽然……但是 nodig.",
      ex: [
        { cn: "这个房子不但大，而且很便宜。", py: "Zhège fángzi búdàn dà, érqiě hěn piányi.", nl: "Dit huis is niet alleen groot, maar ook goedkoop." },
        { cn: "这个房子虽然大，但是很贵。", py: "Zhège fángzi suīrán dà, dànshì hěn guì.", nl: "Dit huis is wel groot, maar duur." }
      ] },
    { h: "Waar staat 不但 bij twee onderwerpen?",
      p: "Hebben A en B hetzelfde onderwerp? Zet het onderwerp vóór 不但. Hebben ze elk een eigen onderwerp? Zet 不但 vóór het eerste onderwerp, en 也 na het tweede.",
      ex: [
        { cn: "我不但喜欢这个城市，而且想在这儿工作。", py: "Wǒ búdàn xǐhuan zhège chéngshì, érqiě xiǎng zài zhèr gōngzuò.", nl: "Ik vind deze stad niet alleen leuk, ik wil hier ook werken." },
        { cn: "不但学生喜欢他，而且老师也喜欢他。", py: "Búdàn xuésheng xǐhuan tā, érqiě lǎoshī yě xǐhuan tā.", nl: "Niet alleen de studenten mogen hem, de leraren ook." }
      ] }
  ],
  mistakes: [
    { wrong: "他不但聪明，但是很幽默。", right: "他不但聪明，而且很幽默。", why: "不但 hoort bij 而且. 但是 is voor een tegenstelling." },
    { wrong: "他不但会开车，还而且会修车。", right: "他不但会开车，而且还会修车。", why: "而且 staat vooraan in de tweede helft. 还 komt daarna, vlak vóór het werkwoord." },
    { wrong: "不但我想去，而且也我朋友想去。", right: "不但我想去，而且我朋友也想去。", why: "也 staat na het onderwerp, vlak vóór het werkwoord." },
    { wrong: "她聪明不但，而且很热情。", right: "她不但聪明，而且很热情。", why: "不但 staat vóór A, niet erachter." }
  ],
  vocab: [
    ["不但……而且", "búdàn……érqiě", "niet alleen ... maar ook"], ["不仅", "bùjǐn", "niet alleen (formeler)"], ["聪明", "cōngming", "slim"],
    ["热情", "rèqíng", "hartelijk"], ["幽默", "yōumò", "grappig, humoristisch"], ["收入", "shōurù", "inkomen"],
    ["耐心", "nàixīn", "geduld; geduldig"], ["适合", "shìhé", "passen bij"], ["环境", "huánjìng", "omgeving, milieu"], ["健康", "jiànkāng", "gezond; gezondheid"]
  ],
  dialogue: [
    ["A", "你的新工作怎么样？", "Nǐ de xīn gōngzuò zěnmeyàng?", "Hoe is je nieuwe baan?"],
    ["B", "很好！不但离家近，而且收入也不错。", "Hěn hǎo! Búdàn lí jiā jìn, érqiě shōurù yě búcuò.", "Goed! Hij is niet alleen dicht bij huis, het salaris is ook prima."],
    ["A", "同事们呢？", "Tóngshìmen ne?", "En je collega's?"],
    ["B", "他们不但很热情，而且很有耐心。", "Tāmen búdàn hěn rèqíng, érqiě hěn yǒu nàixīn.", "Ze zijn niet alleen hartelijk, maar ook heel geduldig."],
    ["A", "听起来这个工作很适合你。", "Tīng qilai zhège gōngzuò hěn shìhé nǐ.", "Het klinkt alsof deze baan goed bij je past."]
  ],
  reading: {
    title: "骑自行车的好处",
    lines: [
      { cn: "在荷兰，很多人每天骑自行车上班。", py: "Zài Hélán, hěn duō rén měi tiān qí zìxíngchē shàngbān.", nl: "In Nederland fietsen veel mensen elke dag naar hun werk." },
      { cn: "骑自行车不但对身体好，而且不花钱。", py: "Qí zìxíngchē búdàn duì shēntǐ hǎo, érqiě bù huā qián.", nl: "Fietsen is niet alleen goed voor je lichaam, het kost ook geen geld." },
      { cn: "很多人觉得，骑车不仅比开车健康，还常常比开车快。", py: "Hěn duō rén juéde, qí chē bùjǐn bǐ kāichē jiànkāng, hái chángcháng bǐ kāichē kuài.", nl: "Veel mensen vinden fietsen niet alleen gezonder dan autorijden, het is vaak ook sneller." },
      { cn: "因为城市里车很多，路上经常堵车。", py: "Yīnwèi chéngshì li chē hěn duō, lù shang jīngcháng dǔchē.", nl: "Want in de stad zijn veel auto's, en er staan vaak files." },
      { cn: "另外，骑自行车对环境也有好处。", py: "Lìngwài, qí zìxíngchē duì huánjìng yě yǒu hǎochù.", nl: "Bovendien is fietsen ook goed voor het milieu." },
      { cn: "我的中国朋友来荷兰以后，不但买了一辆自行车，而且每天骑车去学校。", py: "Wǒ de Zhōngguó péngyou lái Hélán yǐhòu, búdàn mǎile yí liàng zìxíngchē, érqiě měi tiān qí chē qù xuéxiào.", nl: "Nadat mijn Chinese vriend naar Nederland kwam, kocht hij niet alleen een fiets, hij fietst ook elke dag naar school." },
      { cn: "他说：\"刚开始很累，可是现在我习惯了。\"", py: "Tā shuō: \"Gāng kāishǐ hěn lèi, kěshì xiànzài wǒ xíguàn le.\"", nl: "Hij zegt: \"In het begin was het vermoeiend, maar nu ben ik eraan gewend.\"" },
      { cn: "下雨的时候，他也骑车。", py: "Xià yǔ de shíhou, tā yě qí chē.", nl: "Ook als het regent, fietst hij." }
    ],
    questions: [
      { type: "mc", q: "Welke voordelen van fietsen noemt de tekst?",
        options: ["Gezond, gratis, vaak sneller en goed voor het milieu.", "Gezond en goed om mensen te ontmoeten.", "Goedkoop, maar langzamer dan de auto.", "Alleen goed voor het milieu."], answer: 0,
        why: ["Goed: 对身体好, 不花钱, 比开车快 en 对环境也有好处.", "Mensen ontmoeten staat niet in de tekst.", "De tekst zegt juist dat fietsen vaak sneller is.", "De tekst noemt meer voordelen dan alleen het milieu."] },
      { type: "mc", q: "Wat deed de Chinese vriend in Nederland?",
        options: ["Hij kocht een fiets en fietst elke dag naar school.", "Hij kocht een auto.", "Hij fietst alleen als het mooi weer is.", "Hij vond fietsen te vermoeiend en stopte."], answer: 0,
        why: ["Goed: 不但买了一辆自行车，而且每天骑车去学校。", "Er staat 自行车, geen auto.", "Hij fietst ook als het regent: 下雨的时候，他也骑车。", "Hij is er nu aan gewend: 现在我习惯了。"] },
      { type: "mc", q: "骑自行车不但对身体好，而且不花钱。Wat laat 不但……而且 hier zien?",
        options: ["Er komt nog een tweede voordeel bij het eerste.", "Het tweede deel is een tegenstelling.", "Het tweede deel is het gevolg van het eerste.", "Het eerste deel is de reden voor het tweede."], answer: 0,
        why: ["Goed: 不但……而且 stapelt twee positieve punten.", "Voor een tegenstelling gebruik je 虽然……但是.", "Voor een gevolg gebruik je 所以.", "Voor een reden gebruik je 因为."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Hij is niet alleen grappig, maar ook slim.\"",
      options: ["他不但幽默，而且很聪明。", "他不但幽默，但是很聪明。", "他幽默不但，而且很聪明。", "他而且幽默，不但很聪明。"], answer: 0,
      why: ["Goed: één onderwerp vóór 不但.", "但是 is voor een tegenstelling; hier gebruik je 而且.", "不但 staat vóór A, niet erachter.", "不但 komt eerst, 而且 in de tweede helft."] },
    { type: "mc", q: "\"Niet alleen ik wil gaan, mijn vriend ook.\"",
      options: ["不但我想去，而且我朋友也想去。", "不但我想去，而且也我朋友想去。", "不但我想去，但是我朋友也想去。", "我想去不但，而且我朋友也想去。"], answer: 0,
      why: ["Goed: twee onderwerpen, dus 不但 vóór het eerste onderwerp.", "也 staat ná het onderwerp, vlak vóór het werkwoord.", "Na 不但 komt 而且, niet 但是.", "不但 staat vooraan, niet aan het eind van de eerste helft."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hij kan niet alleen autorijden, maar ook auto's repareren.\"",
      tokens: [["他", "tā"], ["不但", "búdàn"], ["会开车", "huì kāichē"], ["而且", "érqiě"], ["还会修车", "hái huì xiū chē"]] },
    { type: "mc", q: "\"Dit huis is niet alleen groot, het ligt ook dicht bij het metrostation.\" 这个房子不但很大，___离地铁站很近。",
      options: ["而且", "但是", "因为", "所以"], answer: 0,
      why: ["Goed: 不但 ... 而且.", "但是 is voor een tegenstelling, en past niet bij 不但.", "因为 geeft een reden. Groot zijn is geen reden voor een korte afstand.", "所以 geeft een gevolg. Dicht bij de metro is geen gevolg van groot zijn."] },
    { type: "mc", q: "Welke zin past NIET bij 不但……而且?",
      options: ["这件衣服不但很漂亮，而且太贵了。", "这件衣服不但很漂亮，而且很便宜。", "这件衣服不但很便宜，而且质量很好。", "这件衣服不但很贵，而且不好看。"], answer: 0,
      why: ["Goed gezien: mooi en te duur is een tegenstelling. Zeg: 虽然很漂亮，但是太贵了。", "Dit klopt: mooi en goedkoop zijn allebei positief.", "Dit klopt: goedkoop en goede kwaliteit zijn allebei positief.", "Dit klopt: duur en lelijk zijn allebei negatief."] },
    { type: "mc", q: "Je schrijft een formeel verslag: \"Dit plan bespaart niet alleen geld, maar ook tijd.\" Welke zin past het best?",
      options: ["这个计划不仅能节省钱，而且能节省时间。", "这个计划不仅能节省钱，但是能节省时间。", "这个计划能不仅节省钱，而且能节省时间。", "这个计划不仅能节省钱，所以能节省时间。"], answer: 0,
      why: ["Goed: 不仅 klinkt formeel en werkt net als 不但.", "Na 不仅 komt 而且, niet 但是.", "不仅 staat vóór 能, niet erna.", "所以 geeft een gevolg; tijd besparen is geen gevolg van geld besparen."] },
    { type: "fill", q: "他不但会说英语，___还会说法语。(Hij spreekt niet alleen Engels, maar ook Frans.)", answers: ["而且"],
      hint: "Welk woord hoort bij 不但 in de tweede helft?", why: "不但 A，而且还 B: het tweede gaat verder dan het eerste." },
    { type: "order", q: "Zet in de goede volgorde: \"Niet alleen de kinderen vinden het leuk, de ouders ook.\"",
      tokens: [["不但孩子喜欢", "búdàn háizi xǐhuan"], ["而且", "érqiě"], ["父母", "fùmǔ"], ["也", "yě"], ["喜欢", "xǐhuan"]] },
    { type: "mc", q: "\"Dit restaurant is wel goedkoop, maar het eten is niet lekker.\" Welke zin klopt?",
      options: ["这家饭馆虽然便宜，但是菜不好吃。", "这家饭馆不但便宜，而且菜不好吃。", "这家饭馆不但便宜，但是菜不好吃。", "这家饭馆虽然便宜，而且菜不好吃。"], answer: 0,
      why: ["Goed: goedkoop tegenover niet lekker is een tegenstelling, dus 虽然……但是.", "不但……而且 stapelt; hier is een tegenstelling.", "不但 en 但是 horen niet samen.", "虽然 hoort bij 但是, niet bij 而且."] },
    { type: "open", q: "Beschrijf een vriend of collega met 不但 ... 而且.",
      model: ["我的朋友不但很聪明，而且很幽默。", "小王不但会做饭，而且做得很好吃。"],
      tip: "Check: staat het onderwerp vóór 不但, en gebruik je 而且 (niet 但是)?" },
    { type: "open", q: "Vertaal: \"Deze stad is niet alleen mooi, maar ook heel schoon.\"",
      model: ["这个城市不但很漂亮，而且很干净。", "这座城市不仅很美，而且很干净。"],
      tip: "Check: het onderwerp staat vóór 不但 of 不仅, en de tweede helft begint met 而且." }
  ],
  review: [
    { type: "mc", q: "\"Deze telefoon is niet alleen duur, maar ook zwaar.\"",
      options: ["这个手机不但很贵，而且很重。", "这个手机不但很贵，但是很重。", "这个手机很贵不但，而且很重。", "这个手机而且很贵，不但很重。"], answer: 0,
      why: ["Goed.", "Na 不但 komt 而且, niet 但是.", "不但 staat vóór A, niet erachter.", "不但 komt in de eerste helft, 而且 in de tweede."] },
    { type: "mc", q: "\"Niet alleen hij kan zingen, zijn zus ook.\" ___他会唱歌，而且他妹妹也会唱。",
      options: ["不但", "但是", "虽然", "所以"], answer: 0,
      why: ["Goed: twee onderwerpen, dus 不但 vóór het eerste.", "但是 staat niet aan het begin van de eerste helft.", "虽然 hoort bij 但是, niet bij 而且.", "所以 geeft een gevolg en staat in de tweede helft."] },
    { type: "mc", q: "\"Mijn oma kan niet alleen koken, ze kan ook taarten bakken.\"",
      options: ["我奶奶不但会做饭，而且还会做蛋糕。", "我奶奶不但会做饭，但是还会做蛋糕。", "不但我奶奶会做饭，而且还我奶奶会做蛋糕。", "我奶奶会做饭不但，而且还会做蛋糕。"], answer: 0,
      why: ["Goed: één onderwerp vóór 不但, en 而且还 in de tweede helft.", "Na 不但 komt 而且, niet 但是.", "Bij één onderwerp herhaal je het onderwerp niet na 而且.", "不但 staat vóór A, niet erachter."] }
  ]
})
