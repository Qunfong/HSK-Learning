({
  id: "15", slug: "xian-zai", title: "先 ... 再 en 再 of 又", sub: "Eerst ... dan, en nog eens of alweer",
  canDo: "Je kunt nu de volgorde van handelingen aangeven met 先 ... 再/然后, en 再 en 又 goed kiezen.",
  guess: {
    q: "\"Eerst eten we, dan gaan we naar de film.\" Welke zin klopt, denk je?",
    options: ["我们先吃饭，再去看电影。", "我们先吃饭，又去看电影。", "先我们吃饭，我们再去看电影了。", "我们吃饭先，再去看电影。"], answer: 0,
    why: ["Goed: 先 + eerste handeling, 再 + tweede handeling.", "又 is voor iets wat al gebeurd is. Dit plan ligt in de toekomst.", "先 staat na het onderwerp, en bij een plan past geen 了.", "先 staat vóór het werkwoord, niet erna."]
  },
  problem: "In het Nederlands zeg je \"eerst ... en dan ...\". In het Chinees zet je 先 (xiān) vóór de eerste handeling en 再 (zài) of 然后 (ránhòu) bij de tweede. Een tweede punt: \"weer\" is in het Chinees twee woorden. 再 = nog eens, in de toekomst. 又 (yòu) = alweer, in het verleden.",
  pattern: [
    { l: "wie", v: "我们", c: 1 }, { l: "先", v: "先", c: 2, key: true }, { l: "eerst", v: "吃饭", c: 3 },
    { l: "再", v: "再", c: 4, key: true }, { l: "dan", v: "去看电影", c: 5 }
  ],
  patternCap: "Wie + 先 + handeling 1，再 + handeling 2  |  先 ...，然后 (+ wie) (+ 再) + handeling 2",
  rules: [
    "先 en 再 zijn bijwoorden: ze staan na het onderwerp, direct vóór het werkwoord.",
    "然后 is een verbindingswoord: het mag vóór het onderwerp staan. 然后我们去看电影。",
    "再 = nog een keer of daarna, in de toekomst, in plannen en verzoeken.",
    "又 = alweer, voor iets wat al (opnieuw) gebeurd is. Meestal met 了."
  ],
  pitfall: "Voor iets wat al opnieuw gebeurd is, gebruik je 又, niet 再. 他昨天又来了, niet 他昨天再来了.",
  examples: [
    { cn: "我们先吃饭，再去看电影。", py: "Wǒmen xiān chīfàn, zài qù kàn diànyǐng.", nl: "Eerst eten we, dan gaan we naar de film." },
    { cn: "你先洗手，然后吃饭。", py: "Nǐ xiān xǐ shǒu, ránhòu chīfàn.", nl: "Was eerst je handen, en eet dan." },
    { cn: "请再说一遍。", py: "Qǐng zài shuō yí biàn.", nl: "Zeg het alsjeblieft nog een keer." },
    { cn: "他昨天又迟到了。", py: "Tā zuótiān yòu chídào le.", nl: "Hij was gisteren alweer te laat." }
  ],
  nuance: [
    { h: "再 of 又: toekomst of verleden",
      p: "Allebei betekenen \"nog een keer\". 再 kijkt vooruit: het moet nog gebeuren. 又 kijkt terug: het is al opnieuw gebeurd. Vaak hoor je ook irritatie of verbazing in 又.",
      ex: [
        { cn: "我明天再来。", py: "Wǒ míngtiān zài lái.", nl: "Ik kom morgen nog eens." },
        { cn: "他今天又来了。", py: "Tā jīntiān yòu lái le.", nl: "Hij is vandaag alweer gekomen." }
      ] },
    { h: "先 ... 再 of 先 ... 然后",
      p: "Ze betekenen bijna hetzelfde. 再 is een bijwoord en staat altijd na het onderwerp. 然后 kan aan het begin van het tweede deel staan, ook vóór een nieuw onderwerp. Je kunt ze ook samen gebruiken: 然后再.",
      ex: [
        { cn: "我先做作业，然后妈妈做饭。", py: "Wǒ xiān zuò zuòyè, ránhòu māma zuò fàn.", nl: "Eerst maak ik huiswerk, daarna kookt mama." },
        { cn: "我们先去超市，然后再回家。", py: "Wǒmen xiān qù chāoshì, ránhòu zài huí jiā.", nl: "We gaan eerst naar de supermarkt en dan naar huis." }
      ] },
    { h: "Uitzondering: 又 voor wat zeker terugkomt",
      p: "Gaat het om iets wat regelmatig terugkomt, zoals een dag of een feest? Dan kun je ook voor de toekomst 又 gebruiken, met 是 ... 了. Bijvoorbeeld: 明天又是星期一了 (morgen is het alweer maandag).",
      ex: [
        { cn: "明天又是星期一了。", py: "Míngtiān yòu shì xīngqīyī le.", nl: "Morgen is het alweer maandag." }
      ] }
  ],
  mistakes: [
    { wrong: "他上个星期再来了。", right: "他上个星期又来了。", why: "Het is al gebeurd: gebruik 又, niet 再." },
    { wrong: "我们吃饭先，再去。", right: "我们先吃饭，再去。", why: "先 staat vóór het werkwoord." },
    { wrong: "我先洗澡，再我睡觉。", right: "我先洗澡，再睡觉。", why: "再 staat na het onderwerp. Gebruik 然后我睡觉 als je het onderwerp wilt herhalen." },
    { wrong: "明天我又来。", right: "明天我再来。", why: "Het moet nog gebeuren: gebruik 再 voor de toekomst." }
  ],
  vocab: [
    ["先 ... 再 / 又", "xiān ... zài / yòu", "eerst ... dan / alweer"], ["然后", "ránhòu", "daarna, en dan"], ["遍", "biàn", "keer (van begin tot eind)"],
    ["洗澡", "xǐzǎo", "douchen, in bad gaan"], ["超市", "chāoshì", "supermarkt"], ["迟到", "chídào", "te laat komen"],
    ["菜单", "càidān", "menukaart"], ["点菜", "diǎn cài", "eten bestellen"], ["打折", "dǎzhé", "korting geven"], ["新鲜", "xīnxiān", "vers"]
  ],
  dialogue: [
    ["A", "服务员，请给我们菜单。", "Fúwùyuán, qǐng gěi wǒmen càidān.", "Ober, de menukaart alstublieft."],
    ["B", "我们先喝点儿什么，再点菜吧。", "Wǒmen xiān hē diǎnr shénme, zài diǎn cài ba.", "Laten we eerst iets drinken, en dan bestellen."],
    ["A", "好。你上次喝的是什么茶？", "Hǎo. Nǐ shàng cì hē de shì shénme chá?", "Goed. Welke thee dronk je de vorige keer?"],
    ["B", "绿茶。我今天又想喝绿茶。", "Lǜchá. Wǒ jīntiān yòu xiǎng hē lǜchá.", "Groene thee. Vandaag wil ik weer groene thee."],
    ["A", "这个菜很好吃，下次我们再来吧。", "Zhège cài hěn hǎochī, xià cì wǒmen zài lái ba.", "Dit gerecht is heel lekker. Laten we de volgende keer terugkomen."]
  ],
  reading: {
    title: "周末买菜",
    lines: [
      { cn: "每个星期六，我先去跑步，然后去超市买菜。", py: "Měi ge xīngqīliù, wǒ xiān qù pǎobù, ránhòu qù chāoshì mǎi cài.", nl: "Elke zaterdag ga ik eerst hardlopen, daarna boodschappen doen in de supermarkt." },
      { cn: "上个星期六，超市的水果打折。", py: "Shàng ge xīngqīliù, chāoshì de shuǐguǒ dǎzhé.", nl: "Afgelopen zaterdag was het fruit in de supermarkt in de aanbieding." },
      { cn: "我买了很多苹果，因为很便宜，也很新鲜。", py: "Wǒ mǎile hěn duō píngguǒ, yīnwèi hěn piányi, yě hěn xīnxiān.", nl: "Ik kocht veel appels, want ze waren goedkoop en vers." },
      { cn: "可是回家以后，我发现忘了买牛奶。", py: "Kěshì huí jiā yǐhòu, wǒ fāxiàn wàngle mǎi niúnǎi.", nl: "Maar thuis merkte ik dat ik melk was vergeten." },
      { cn: "所以下午我又去了一次超市。", py: "Suǒyǐ xiàwǔ wǒ yòu qùle yí cì chāoshì.", nl: "Dus 's middags ging ik nog een keer naar de supermarkt." },
      { cn: "今天我先写了一个单子，再出门。", py: "Jīntiān wǒ xiān xiěle yí ge dānzi, zài chūmén.", nl: "Vandaag schreef ik eerst een lijstje, en ging daarna de deur uit." },
      { cn: "我不想再忘了！", py: "Wǒ bù xiǎng zài wàng le!", nl: "Ik wil het niet nog eens vergeten!" }
    ],
    questions: [
      { type: "mc", q: "Wat doet de schrijver elke zaterdag eerst?",
        options: ["Hardlopen.", "Boodschappen doen.", "Een lijstje schrijven.", "Melk kopen."], answer: 0,
        why: ["Goed: 我先去跑步，然后去超市买菜。", "Boodschappen komen daarna: 然后去超市.", "Het lijstje schreef de schrijver alleen vandaag.", "Melk was juist vergeten."] },
      { type: "mc", q: "Waarom ging de schrijver 's middags nog een keer naar de supermarkt?",
        options: ["De melk was vergeten.", "De appels waren op.", "Het fruit was in de aanbieding.", "Om te gaan hardlopen."], answer: 0,
        why: ["Goed: 忘了买牛奶，所以下午我又去了一次超市。", "De schrijver kocht juist veel appels.", "Dat was de reden voor de appels, niet voor de tweede keer.", "Hardlopen gebeurt vóór het winkelen."] },
      { type: "mc", q: "所以下午我又去了一次超市。Waarom staat hier 又 en niet 再?",
        options: ["Het is al gebeurd.", "Het moet nog gebeuren.", "Het is een verzoek.", "又 betekent hier \"eerst\"."], answer: 0,
        why: ["Goed: 又 voor iets wat al opnieuw gebeurd is.", "Voor de toekomst gebruik je 再.", "Een verzoek gebruikt 再, zoals 请再说一遍.", "\"Eerst\" is 先."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Hij is gisteren alweer ziek geworden.\"",
      options: ["他昨天又病了。", "他昨天再病了。", "他昨天先病了。", "他又昨天病了。"], answer: 0,
      why: ["Goed: al gebeurd, opnieuw: 又 ... 了.", "再 is voor de toekomst.", "先 betekent \"eerst\".", "又 staat vlak vóór het werkwoord, na de tijd."] },
    { type: "mc", q: "\"Ik heb het niet verstaan. Kunt u het nog een keer zeggen?\"",
      options: ["我没听懂，您能再说一遍吗？", "我没听懂，您能又说一遍吗？", "我没听懂，您能先说一遍吗？", "我没听懂，您能说再一遍吗？"], answer: 0,
      why: ["Goed: een verzoek voor de toekomst: 再.", "又 is voor iets wat al gebeurd is.", "先 betekent \"eerst\", niet \"nog een keer\".", "再 staat vóór het werkwoord 说."] },
    { type: "order", q: "Zet in de goede volgorde: \"Eerst doe ik boodschappen, dan ga ik naar huis.\"",
      tokens: [["我", "wǒ"], ["先", "xiān"], ["去超市", "qù chāoshì"], ["再", "zài"], ["回家", "huí jiā"]] },
    { type: "fill", q: "这个电影很好看，我昨天___看了一遍。(Deze film is heel goed. Ik heb hem gisteren nog een keer gezien.)", answers: ["又"],
      hint: "Gisteren: al gebeurd.", why: "Iets wat al opnieuw gebeurd is: 又 ... 了." },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["我先洗澡，再我睡觉。", "我先洗澡，再睡觉。", "我先洗澡，然后睡觉。", "我先洗澡，然后再睡觉。"], answer: 0,
      why: ["Goed: deze is fout. 再 staat na het onderwerp, niet ervoor.", "Deze klopt: 先 ... 再.", "Deze klopt: 先 ... 然后.", "Deze klopt: 然后再 kan samen."] },
    { type: "mc", q: "你们先休息一下，___开始上课。",
      options: ["再", "又", "先", "还"], answer: 0,
      why: ["Goed: 先 ... 再 voor een volgorde in de toekomst.", "又 is voor iets wat al gebeurd is.", "先 staat al bij de eerste handeling. De tweede krijgt 再.", "还 betekent \"nog\", niet \"daarna\"."] },
    { type: "order", q: "Zet in de goede volgorde: \"Doe eerst je huiswerk, daarna mag je tv kijken.\"",
      tokens: [["你", "nǐ"], ["先", "xiān"], ["做作业", "zuò zuòyè"], ["然后", "ránhòu"], ["看电视", "kàn diànshì"]] },
    { type: "mc", q: "Welk woord kan vóór een nieuw onderwerp staan?",
      options: ["然后", "再", "先", "又"], answer: 0,
      why: ["Goed: 然后 is een verbindingswoord: 然后妈妈做饭.", "再 is een bijwoord en staat na het onderwerp.", "先 is een bijwoord en staat na het onderwerp.", "又 is een bijwoord en staat na het onderwerp."] },
    { type: "mc", q: "\"Ik wil volgend jaar nog eens naar Beijing.\"",
      options: ["我明年想再去北京。", "我明年想又去北京。", "我明年想先去北京。", "我明年再想去北京。"], answer: 0,
      why: ["Goed: toekomst, en 再 staat vóór 去.", "又 is voor het verleden.", "先 betekent \"eerst\", niet \"nog eens\".", "再 hoort bij 去, niet bij 想."] },
    { type: "open", q: "Vertaal: \"Laten we eerst koffie drinken en dan werken.\"", model: ["我们先喝咖啡，再工作吧。", "我们先喝杯咖啡，然后再工作吧。"],
      tip: "Check: 先 en 再 na 我们, vóór het werkwoord." },
    { type: "open", q: "Vertaal: \"Mijn telefoon is alweer kapot.\"", model: ["我的手机又坏了。"],
      tip: "Check: al gebeurd, dus 又 ... 了, niet 再." }
  ],
  review: [
    { type: "mc", q: "\"Ze heeft vandaag alweer een nieuw kledingstuk gekocht.\"",
      options: ["她今天又买了一件新衣服。", "她今天再买了一件新衣服。", "她今天先买了一件新衣服。", "她又今天买了一件新衣服。"], answer: 0,
      why: ["Goed.", "再 is voor de toekomst.", "先 betekent \"eerst\".", "又 staat na de tijd, vóór het werkwoord."] },
    { type: "mc", q: "我们先去银行，___去吃饭。",
      options: ["然后", "又", "因为", "如果"], answer: 0,
      why: ["Goed: 先 ... 然后.", "又 is voor iets wat al opnieuw gebeurd is.", "因为 geeft een reden.", "如果 geeft een voorwaarde."] },
    { type: "mc", q: "Het regent vandaag weer, net als gisteren. Welke zin past?",
      options: ["今天又下雨了。", "今天再下雨了。", "今天先下雨了。", "今天下雨又了。"], answer: 0,
      why: ["Goed: het gebeurt alweer: 又 ... 了.", "再 is voor de toekomst.", "先 betekent \"eerst\".", "又 staat vóór het werkwoord."] }
  ]
})
