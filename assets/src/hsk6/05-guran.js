({
  id: "05", slug: "guran", title: "固然 ... 但", sub: "Dat klopt weliswaar, maar ...",
  canDo: "Je kunt nu een punt toegeven en daarna een sterker punt maken, met 固然 ... 但.",
  guess: {
    q: "钱固然重要，但健康更重要。Wat bedoelt de spreker, denk je?",
    options: ["Geld is weliswaar belangrijk, maar gezondheid is belangrijker.", "Geld is niet belangrijk, alleen gezondheid is belangrijk.", "Geld is belangrijker dan gezondheid.", "Omdat geld belangrijk is, is gezondheid belangrijker."], answer: 0,
    why: ["Goed: 固然 geeft het eerste punt toe, na 但 komt het sterkere punt.", "固然 ontkent niets: het zegt juist dat geld wél belangrijk is.", "Het zwaardere punt staat na 但: gezondheid.", "固然 geeft geen reden; het is een toegeving."]
  },
  problem: "Je wilt iets toegeven, maar daarna een sterker punt maken. In het Nederlands zeg je: \"Dat is weliswaar waar, maar ...\". Daarvoor is 固然 (gùrán) ... 但(是). Eerst erken je het eerste punt. Na 但 komt wat jij zwaarder vindt. Het is vooral schrijftaal.",
  pattern: [
    { l: "wat", v: "钱", c: 1 }, { l: "weliswaar", v: "固然", c: 2, key: true }, { l: "toegeven", v: "重要", c: 3 },
    { l: "maar", v: "但", c: 4, key: true }, { l: "sterker punt", v: "健康更重要", c: 5 }
  ],
  patternCap: "A + 固然 + toegegeven punt，但(是) / 可是 / 却 + sterker punt · 固然 ... 也 = allebei goed",
  rules: [
    "固然 staat na het onderwerp, vóór het werkwoord of bijvoeglijk naamwoord: 钱固然重要.",
    "Na 但(是) of 可是 komt het punt dat zwaarder weegt. In schrijftaal kan ook 却 na het onderwerp: 质量却不好.",
    "Met 也 erna zijn beide kanten goed: 你来固然好，不来也没关系。",
    "固然 is schrijftaal of formele spreektaal. In spreektaal zeg je vaak 虽然 ... 但是, of 好是好，可是 ...."
  ],
  pitfall: "固然 is geen \"omdat\": gebruik er geen 所以 achter. En 固然 staat altijd tussen onderwerp en gezegde: niet vóór het onderwerp (固然钱重要) en niet achter het gezegde (钱重要固然).",
  examples: [
    { cn: "这个方法固然简单，但效果不太好。", py: "Zhège fāngfǎ gùrán jiǎndān, dàn xiàoguǒ bú tài hǎo.", nl: "Deze methode is weliswaar eenvoudig, maar het effect is niet zo goed." },
    { cn: "工作固然重要，但是家人也不能忽视。", py: "Gōngzuò gùrán zhòngyào, dànshì jiārén yě bù néng hūshì.", nl: "Werk is weliswaar belangrijk, maar je mag je familie niet verwaarlozen." },
    { cn: "你的想法固然有道理，可是现在很难实现。", py: "Nǐ de xiǎngfǎ gùrán yǒu dàolǐ, kěshì xiànzài hěn nán shíxiàn.", nl: "Je idee is weliswaar redelijk, maar het is nu moeilijk uit te voeren." },
    { cn: "坐飞机固然快，坐火车也不错。", py: "Zuò fēijī gùrán kuài, zuò huǒchē yě búcuò.", nl: "Vliegen is natuurlijk snel, maar de trein is ook prima." }
  ],
  nuance: [
    { h: "固然 tegenover 虽然",
      p: "虽然 noemt een feit, en daarna komt iets wat je niet zou verwachten. Het kan vóór of na het onderwerp. 固然 erkent dat het eerste punt waar of waardevol is, en weegt het af tegen een sterker punt. Het staat alleen na het onderwerp. Voor een onverwacht resultaat met 还是 gebruik je 虽然, niet 固然.",
      ex: [
        { cn: "虽然下着大雨，他还是来了。", py: "Suīrán xiàzhe dàyǔ, tā háishi lái le.", nl: "Hoewel het hard regende, kwam hij toch." },
        { cn: "这个工作固然轻松，但收入太低。", py: "Zhège gōngzuò gùrán qīngsōng, dàn shōurù tài dī.", nl: "Dit werk is weliswaar licht, maar het inkomen is te laag." }
      ] },
    { h: "固然 ... 也: beide kanten zijn goed",
      p: "Met 也 in het tweede deel draai je niet om. Je zegt: A is goed, en B is ook goed. Zo laat je de ander vrij kiezen. 虽然 kan dit niet: 虽然 ... 也 heeft een andere betekenis.",
      ex: [
        { cn: "你能来固然好，来不了也没关系。", py: "Nǐ néng lái gùrán hǎo, lái bu liǎo yě méi guānxi.", nl: "Als je kunt komen is dat fijn, en als het niet lukt is het ook niet erg." }
      ] },
    { h: "Register: schrijftaal en spreektaal",
      p: "固然 hoort bij betogen, artikelen en formele gesprekken. In gewone spreektaal klinkt het stijf. Daar zeg je 虽然 ... 但是, of je herhaalt het bijvoeglijk naamwoord: X是X，可是 .... Dat betekent ook: weliswaar X, maar ....",
      ex: [
        { cn: "好看是好看，可是太贵了。", py: "Hǎokàn shì hǎokàn, kěshì tài guì le.", nl: "Mooi is het wel, maar het is te duur." }
      ] }
  ],
  mistakes: [
    { wrong: "固然钱重要，但健康更重要。", right: "钱固然重要，但健康更重要。", why: "固然 staat na het onderwerp, niet ervóór. 虽然 kan wel vooraan staan." },
    { wrong: "钱固然重要，所以健康更重要。", right: "钱固然重要，但健康更重要。", why: "固然 is een toegeving, geen reden. Na 固然 komt 但, niet 所以." },
    { wrong: "固然下着大雨，他还是来了。", right: "虽然下着大雨，他还是来了。", why: "Voor een onverwacht resultaat (还是) gebruik je 虽然. 固然 weegt twee punten tegen elkaar af." },
    { wrong: "你来固然好，不来但没关系。", right: "你来固然好，不来也没关系。", why: "Zijn beide kanten goed? Dan gebruik je 也, en 也 staat vóór het gezegde." }
  ],
  vocab: [
    ["固然……但", "gùrán……dàn", "weliswaar ... maar"], ["效果", "xiàoguǒ", "effect, resultaat"], ["忽视", "hūshì", "verwaarlozen, negeren"],
    ["实现", "shíxiàn", "verwezenlijken"], ["有道理", "yǒu dàolǐ", "redelijk, terecht"], ["收入", "shōurù", "inkomen"],
    ["稳定", "wěndìng", "stabiel"], ["缺点", "quēdiǎn", "nadeel, zwakte"], ["坚持", "jiānchí", "volhouden"], ["自律", "zìlǜ", "zelfdiscipline"]
  ],
  dialogue: [
    ["A", "那家公司给我的工资比现在高很多。", "Nà jiā gōngsī gěi wǒ de gōngzī bǐ xiànzài gāo hěn duō.", "Dat bedrijf biedt me veel meer salaris dan nu."],
    ["B", "工资高固然好，但你考虑过别的方面吗？", "Gōngzī gāo gùrán hǎo, dàn nǐ kǎolǜguo bié de fāngmiàn ma?", "Een hoog salaris is natuurlijk fijn, maar heb je over andere dingen nagedacht?"],
    ["A", "你是说工作时间？", "Nǐ shì shuō gōngzuò shíjiān?", "Bedoel je de werktijden?"],
    ["B", "对。收入固然重要，可是每天加班到晚上十点，对身体不好。", "Duì. Shōurù gùrán zhòngyào, kěshì měitiān jiābān dào wǎnshang shí diǎn, duì shēntǐ bù hǎo.", "Ja. Inkomen is weliswaar belangrijk, maar elke dag tot tien uur overwerken is slecht voor je lichaam."],
    ["A", "我承认，现在的工作比较稳定。", "Wǒ chéngrèn, xiànzài de gōngzuò bǐjiào wěndìng.", "Ik geef toe, mijn huidige baan is vrij stabiel."]
  ],
  reading: {
    title: "网上学习",
    lines: [
      { cn: "近年来，越来越多的人选择在网上学习。", py: "Jìnnián lái, yuè lái yuè duō de rén xuǎnzé zài wǎngshang xuéxí.", nl: "De laatste jaren kiezen steeds meer mensen voor online leren." },
      { cn: "网上学习固然方便，但也有不少问题。", py: "Wǎngshang xuéxí gùrán fāngbiàn, dàn yě yǒu bù shǎo wèntí.", nl: "Online leren is weliswaar handig, maar er zijn ook heel wat problemen." },
      { cn: "学生可以随时随地上课，这一点固然是优点。", py: "Xuésheng kěyǐ suíshí suídì shàngkè, zhè yì diǎn gùrán shì yōudiǎn.", nl: "Studenten kunnen altijd en overal les volgen. Dat is zeker een voordeel." },
      { cn: "可是没有老师在身边，很多人很难坚持下去。", py: "Kěshì méiyǒu lǎoshī zài shēnbiān, hěn duō rén hěn nán jiānchí xiàqu.", nl: "Maar zonder docent in de buurt vinden veel mensen het moeilijk om vol te houden." },
      { cn: "另外，网上的课程固然便宜，质量却参差不齐。", py: "Lìngwài, wǎngshang de kèchéng gùrán piányi, zhìliàng què cēncī bù qí.", nl: "Daarnaast zijn online cursussen weliswaar goedkoop, maar de kwaliteit loopt sterk uiteen." },
      { cn: "有专家认为，技术固然重要，但学习者的自律更重要。", py: "Yǒu zhuānjiā rènwéi, jìshù gùrán zhòngyào, dàn xuéxízhě de zìlǜ gèng zhòngyào.", nl: "Sommige deskundigen vinden techniek weliswaar belangrijk, maar de zelfdiscipline van de leerling belangrijker." },
      { cn: "也有人说，在网上学固然好，去学校上课也不错。", py: "Yě yǒu rén shuō, zài wǎngshang xué gùrán hǎo, qù xuéxiào shàngkè yě búcuò.", nl: "Anderen zeggen: online leren is goed, en op school les volgen is ook prima." },
      { cn: "关键是找到适合自己的方式。", py: "Guānjiàn shì zhǎodào shìhé zìjǐ de fāngshì.", nl: "Waar het om gaat, is een manier vinden die bij je past." }
    ],
    questions: [
      { type: "mc", q: "Welk probleem van online leren noemt de tekst?",
        options: ["Zonder docent in de buurt is volhouden moeilijk.", "Je kunt niet altijd en overal les volgen.", "Online cursussen zijn te duur.", "Er is geen techniek beschikbaar."], answer: 0,
        why: ["Goed: 没有老师在身边，很多人很难坚持下去。", "Dat is juist het voordeel: 随时随地上课.", "De cursussen zijn juist goedkoop: 固然便宜.", "Daarover staat niets in de tekst."] },
      { type: "mc", q: "Wat vinden sommige deskundigen het belangrijkst?",
        options: ["De zelfdiscipline van de leerling.", "De techniek.", "De prijs van de cursus.", "Een docent in de buurt."], answer: 0,
        why: ["Goed: 但学习者的自律更重要。", "Techniek geven ze alleen toe met 固然; het sterkere punt staat na 但.", "Daar zeggen de deskundigen niets over.", "Dat staat in een andere zin, niet bij de deskundigen."] },
      { type: "mc", q: "在网上学固然好，去学校上课也不错。Wat zegt 固然 ... 也 hier?",
        options: ["Beide manieren zijn goed.", "Online leren is beter dan naar school gaan.", "Naar school gaan is beter dan online leren.", "Online leren is goed, omdat school ook goed is."], answer: 0,
        why: ["Goed: met 也 in het tweede deel zijn beide kanten goed.", "Met 也 draai je niet om en kies je geen winnaar.", "Er staat geen 但 + sterker punt; 也 maakt beide gelijk.", "固然 geeft geen reden."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Deze telefoon is weliswaar duur, maar de kwaliteit is erg goed.\"",
      options: ["这个手机固然贵，但质量很好。", "这个手机固然贵，所以质量很好。", "这个手机固然不贵，但质量很好。", "这个手机贵固然，但质量很好。"], answer: 0,
      why: ["Goed: 固然 + toegegeven punt, 但 + sterker punt.", "固然 geeft geen reden; na 固然 komt 但, niet 所以.", "固然 ontkent niets. De telefoon ís duur.", "固然 staat vóór het bijvoeglijk naamwoord, niet erachter."] },
    { type: "mc", q: "这个计划固然有很多优点，___也有一些缺点。",
      options: ["但", "所以", "因为", "而且"], answer: 0,
      why: ["Goed: 固然 ... 但.", "所以 geeft een gevolg. Hier volgt een tegenstelling.", "因为 geeft een reden, geen tegenstelling.", "而且 voegt iets in dezelfde richting toe. Hier draait het om."] },
    { type: "order", q: "Zet in de goede volgorde: \"Autorijden is weliswaar handig, maar het is duur.\"",
      tokens: [["开车", "kāichē"], ["固然", "gùrán"], ["方便", "fāngbiàn"], ["但是", "dànshì"], ["很贵", "hěn guì"]] },
    { type: "mc", q: "Wat betekent: 你来固然好，不来也没关系。",
      options: ["Het is fijn als je komt, maar als je niet komt, is het ook goed.", "Het is fijn als je komt; als je niet komt, is het een probleem.", "Het is beter als je niet komt.", "Pas als je komt, is het goed."], answer: 0,
      why: ["Goed: 固然 ... 也 = allebei goed.", "没关系 zegt juist dat het geen probleem is.", "固然好 zegt dat komen wél fijn is.", "固然 is geen \"pas als\"; met 也 zijn beide kanten goed."] },
    { type: "mc", q: "\"Hoewel het hard regende, kwam hij toch.\" (Dat had je niet verwacht.)",
      options: ["虽然下着大雨，他还是来了。", "固然下着大雨，他还是来了。", "虽然下着大雨，所以他来了。", "下着大雨虽然，他还是来了。"], answer: 0,
      why: ["Goed: voor een onverwacht resultaat met 还是 gebruik je 虽然.", "固然 weegt twee punten af. Het past niet bij een onverwacht resultaat met 还是.", "虽然 combineer je niet met 所以.", "虽然 staat vooraan of na het onderwerp, niet achter het gezegde."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["固然钱重要，但健康更重要。", "钱固然重要，但健康更重要。", "虽然钱重要，但健康更重要。", "钱虽然重要，但健康更重要。"], answer: 0,
      why: ["Goed, deze is fout: 固然 staat na het onderwerp, niet ervóór.", "Deze klopt: onderwerp + 固然 + gezegde.", "Deze klopt: 虽然 mag vóór het onderwerp staan.", "Deze klopt: 虽然 mag ook na het onderwerp staan."] },
    { type: "mc", q: "Je zegt in een gewoon gesprek: \"Mooi is het wel, maar het is te duur.\" Welke zin past het best?",
      options: ["好看是好看，可是太贵了。", "好看是好看，所以太贵了。", "好看是好看，固然太贵了。", "是好看好看，可是太贵了。"], answer: 0,
      why: ["Goed: X是X，可是 ... is de spreektaalvorm van \"weliswaar X, maar\".", "所以 geeft een gevolg, geen tegenstelling.", "固然 hoort bij het toegegeven punt, niet bij het sterkere punt.", "De vorm is X是X: eerst het woord, dan 是, dan weer het woord."] },
    { type: "fill", q: "你自己去固然可以，我们陪你去___行。(Je kunt natuurlijk alleen gaan, maar wij kunnen ook met je mee.)", answers: ["也"],
      hint: "Welk woord maakt beide kanten goed?", why: "固然 ... 也: A is goed, en B is ook goed. 也 staat vóór het gezegde 行." },
    { type: "order", q: "Zet in de goede volgorde: \"Zijn idee is weliswaar redelijk, maar het is moeilijk uit te voeren.\"",
      tokens: [["他的想法", "tā de xiǎngfǎ"], ["固然", "gùrán"], ["有道理", "yǒu dàolǐ"], ["但", "dàn"], ["很难实现", "hěn nán shíxiàn"]] },
    { type: "open", q: "Geef toe dat iets goed is, en noem dan een groter nadeel. Gebruik 固然 ... 但.",
      model: ["这个房子固然漂亮，但离公司太远了。", "网上购物固然方便，但有时候质量不好。"],
      tip: "Check: staat 固然 na het onderwerp, en komt het zwaardere punt na 但?" },
    { type: "open", q: "Vertaal: \"Een hoog salaris is weliswaar fijn, maar vrije tijd is belangrijker.\"",
      model: ["工资高固然好，但自由时间更重要。", "高工资固然好，可是休息时间更重要。"],
      tip: "Check: onderwerp + 固然 + 好, dan 但 of 可是 + het sterkere punt met 更." }
  ],
  review: [
    { type: "mc", q: "\"Talent is weliswaar belangrijk, maar inzet is belangrijker.\"",
      options: ["天赋固然重要，但努力更重要。", "天赋固然重要，所以努力更重要。", "天赋固然不重要，但努力更重要。", "天赋重要固然，但努力更重要。"], answer: 0,
      why: ["Goed.", "固然 geeft geen reden; na 固然 komt 但.", "固然 ontkent niets: talent ís belangrijk.", "固然 staat vóór 重要, niet erachter."] },
    { type: "mc", q: "这家餐厅的菜固然好吃，___价格实在太高了。",
      options: ["但是", "所以", "因此", "并且"], answer: 0,
      why: ["Goed: 固然 ... 但是.", "所以 geeft een gevolg, geen tegenstelling.", "因此 geeft ook een gevolg, geen tegenstelling.", "并且 voegt iets toe in dezelfde richting."] },
    { type: "mc", q: "\"Deze methode is weliswaar langzaam, maar ze is veilig.\"",
      options: ["这个办法固然慢，但很安全。", "这个办法固然慢，所以很安全。", "固然这个办法慢，但很安全。", "这个办法慢固然，但很安全。"], answer: 0,
      why: ["Goed: onderwerp + 固然 + toegegeven punt, 但 + sterker punt.", "固然 geeft geen reden; na 固然 komt 但.", "固然 staat na het onderwerp, niet ervóór.", "固然 staat vóór het gezegde 慢, niet erachter."] }
  ]
})
