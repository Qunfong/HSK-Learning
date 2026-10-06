({
  id: "09", slug: "yi-jiu", title: "一……就", sub: "Zodra ..., meteen ...",
  canDo: "Je kunt nu zeggen dat iets meteen na iets anders gebeurt, of elke keer als iets gebeurt, met 一……就.",
  guess: {
    q: "我一到家就给你打电话。Wat betekent dit, denk je?",
    options: ["Zodra ik thuis ben, bel ik je.", "Ik bel je één keer als ik thuis ben.", "Pas als ik thuis ben, bel ik je misschien.", "Ik ben thuis en ik heb je gebeld."], answer: 0,
    why: ["Goed: 一 + eerste handeling, 就 + wat er meteen daarna gebeurt.", "一 betekent hier niet \"één keer\", maar \"zodra\".", "就 zegt juist dat het snel gebeurt. \"Pas\" is 才.", "De zin gaat over wat je gaat doen. Er staat geen 了."]
  },
  problem: "In het Nederlands zeg je: \"Zodra ik thuis ben, bel ik je.\" Twee dingen gebeuren direct na elkaar. In het Chinees zet je 一 (yī) vóór de eerste handeling en 就 (jiù) vóór de tweede. Hetzelfde patroon betekent ook: \"elke keer als ..., dan ...\".",
  pattern: [
    { l: "wie", v: "我", c: 1 }, { l: "一", v: "一", c: 2, key: true }, { l: "handeling 1", v: "到家", c: 3 },
    { l: "就", v: "就", c: 4, key: true }, { l: "handeling 2", v: "给你打电话", c: 5 }
  ],
  patternCap: "Onderwerp + 一 + V1，(onderwerp 2) + 就 + V2 · zodra ... meteen / elke keer als ... dan",
  rules: [
    "一 en 就 staan allebei na hun onderwerp, direct vóór het werkwoord.",
    "Zijn er twee onderwerpen? Dan staat 就 na het tweede onderwerp: 我一到家，妈妈就开始做饭了。",
    "Na het eerste werkwoord komt geen 了. Is het al gebeurd, dan staat 了 aan het eind: 他一下课就走了。",
    "Toon: 一 wordt yí vóór een vierde toon (一到 yí dào) en yì vóór de andere tonen (一听 yì tīng).",
    "Zonder 了 en met een gewoonte betekent het \"elke keer als\": 他一喝酒就脸红。"
  ],
  pitfall: "就 staat na het tweede onderwerp, niet ervoor. Zeg 老师一来，我们就开始, niet 老师一来，就我们开始.",
  examples: [
    { cn: "我一到家就给你打电话。", py: "Wǒ yí dào jiā jiù gěi nǐ dǎ diànhuà.", nl: "Zodra ik thuis ben, bel ik je." },
    { cn: "他一下课就去图书馆了。", py: "Tā yí xiàkè jiù qù túshūguǎn le.", nl: "Meteen na de les ging hij naar de bibliotheek." },
    { cn: "我一紧张就说不出话来。", py: "Wǒ yì jǐnzhāng jiù shuō bu chū huà lái.", nl: "Elke keer als ik zenuwachtig ben, krijg ik geen woord over mijn lippen." },
    { cn: "天一黑，路灯就亮了。", py: "Tiān yì hēi, lùdēng jiù liàng le.", nl: "Zodra het donker werd, gingen de straatlantaarns aan." }
  ],
  nuance: [
    { h: "Zodra, of elke keer als?",
      p: "一……就 heeft twee betekenissen. Gaat het om één gebeurtenis, dan is het \"zodra\". Gaat het om een gewoonte of iets wat altijd zo is, dan is het \"elke keer als\". De context en 了 helpen: met 了 is het meestal één keer, zonder 了 vaak een gewoonte.",
      ex: [
        { cn: "他一喝酒就脸红。", py: "Tā yì hē jiǔ jiù liǎn hóng.", nl: "Elke keer als hij alcohol drinkt, krijgt hij een rood gezicht." },
        { cn: "电影一结束，他就走了。", py: "Diànyǐng yì jiéshù, tā jiù zǒu le.", nl: "Zodra de film afgelopen was, ging hij weg." }
      ] },
    { h: "就 of 才: snel of laat?",
      p: "就 betekent dat iets snel, vroeg of makkelijk gebeurt. 才 betekent juist: pas, later of moeilijker dan je dacht. Met een hoeveelheid ervoor zie je het verschil goed. Eén keer lezen en meteen begrijpen: 就. Drie keer lezen en dan pas begrijpen: 才. Let op: na 才 komt geen 了.",
      ex: [
        { cn: "我看了一遍就懂了。", py: "Wǒ kànle yí biàn jiù dǒng le.", nl: "Ik las het één keer en begreep het meteen." },
        { cn: "我看了三遍才懂。", py: "Wǒ kànle sān biàn cái dǒng.", nl: "Ik moest het drie keer lezen voordat ik het begreep." }
      ] },
    { h: "Vooruitblik: 一旦 (HSK 6)",
      p: "一旦 (yídàn) lijkt op 一……就, maar gaat over iets wat nog niet gebeurd is en misschien ooit gebeurt. Vaak is het iets ernstigs, en het klinkt formeel. Je ziet het op borden en in regels. Voor gewoontes en gewone gebeurtenissen gebruik je 一……就.",
      ex: [
        { cn: "一旦发生火灾，请马上离开大楼。", py: "Yídàn fāshēng huǒzāi, qǐng mǎshàng líkāi dàlóu.", nl: "Mocht er brand uitbreken, verlaat het gebouw dan onmiddellijk." }
      ] }
  ],
  mistakes: [
    { wrong: "我一到家，就妈妈开始做饭了。", right: "我一到家，妈妈就开始做饭了。", why: "就 staat na het tweede onderwerp, vóór het werkwoord." },
    { wrong: "他下课一就走了。", right: "他一下课就走了。", why: "一 staat vóór het eerste werkwoord, niet erachter." },
    { wrong: "我一看了就明白了。", right: "我一看就明白了。", why: "Na het eerste werkwoord komt geen 了. 了 staat aan het eind van de zin." },
    { wrong: "我看了三遍就懂了。(bedoeld: pas na drie keer)", right: "我看了三遍才懂。", why: "Ging het langzaam of moeilijk, dan gebruik je 才, niet 就." }
  ],
  vocab: [
    ["一……就", "yī……jiù", "zodra ..., meteen; elke keer als ..."], ["闹钟", "nàozhōng", "wekker"], ["响", "xiǎng", "afgaan, klinken"],
    ["新闻", "xīnwén", "nieuws"], ["解决", "jiějué", "oplossen"], ["毛病", "máobìng", "slechte gewoonte, gebrek"],
    ["堵车", "dǔchē", "file, vaststaan in het verkeer"], ["着急", "zháojí", "ongeduldig, gehaast"], ["准时", "zhǔnshí", "op tijd"], ["一旦", "yídàn", "zodra, mocht ooit"]
  ],
  dialogue: [
    ["A", "你今天几点下班？", "Nǐ jīntiān jǐ diǎn xiàbān?", "Hoe laat ben je vandaag klaar met werken?"],
    ["B", "六点。我一下班就去地铁站。", "Liù diǎn. Wǒ yí xiàbān jiù qù dìtiězhàn.", "Om zes uur. Zodra ik klaar ben, ga ik naar het metrostation."],
    ["A", "好。我们七点在饭馆门口见吧。", "Hǎo. Wǒmen qī diǎn zài fànguǎn ménkǒu jiàn ba.", "Goed. Laten we om zeven uur afspreken bij de ingang van het restaurant."],
    ["B", "没问题，我一出地铁站就给你打电话。", "Méi wèntí, wǒ yì chū dìtiězhàn jiù gěi nǐ dǎ diànhuà.", "Prima. Zodra ik het metrostation uit ben, bel ik je."],
    ["A", "别忘了！上次你八点才到。", "Bié wàng le! Shàng cì nǐ bā diǎn cái dào.", "Niet vergeten! Vorige keer kwam je pas om acht uur."],
    ["B", "上次是因为开会。这次我一定准时。", "Shàng cì shì yīnwèi kāihuì. Zhè cì wǒ yídìng zhǔnshí.", "Vorige keer had ik een vergadering. Deze keer ben ik zeker op tijd."]
  ],
  reading: {
    title: "着急的爸爸",
    lines: [
      { cn: "我爸爸做什么事都很快。", py: "Wǒ bàba zuò shénme shì dōu hěn kuài.", nl: "Mijn vader doet alles snel." },
      { cn: "每天早上，闹钟一响，他就起床。", py: "Měi tiān zǎoshang, nàozhōng yì xiǎng, tā jiù qǐchuáng.", nl: "Elke ochtend staat hij op zodra de wekker gaat." },
      { cn: "他一起床就打开电视看新闻。", py: "Tā yì qǐchuáng jiù dǎkāi diànshì kàn xīnwén.", nl: "Meteen na het opstaan zet hij de tv aan om het nieuws te kijken." },
      { cn: "工作的时候，他一有问题就马上去解决。", py: "Gōngzuò de shíhou, tā yì yǒu wèntí jiù mǎshàng qù jiějué.", nl: "Op zijn werk lost hij elk probleem meteen op." },
      { cn: "可是，他也有一个毛病：一堵车就生气。", py: "Kěshì, tā yě yǒu yí ge máobìng: yì dǔchē jiù shēngqì.", nl: "Maar hij heeft ook een slechte gewoonte: elke keer als hij in de file staat, wordt hij boos." },
      { cn: "有一天，路上车特别多，我们开了四十分钟才到学校。", py: "Yǒu yì tiān, lù shang chē tèbié duō, wǒmen kāile sìshí fēnzhōng cái dào xuéxiào.", nl: "Op een dag was het erg druk op de weg. We deden er veertig minuten over voordat we bij school waren." },
      { cn: "爸爸一路上都在说：\"太慢了！太慢了！\"", py: "Bàba yílù shang dōu zài shuō: \"Tài màn le! Tài màn le!\"", nl: "Mijn vader zei de hele weg: \"Veel te langzaam!\"" },
      { cn: "妈妈笑着说：\"你一着急，大家就都紧张了。\"", py: "Māma xiàozhe shuō: \"Nǐ yì zháojí, dàjiā jiù dōu jǐnzhāng le.\"", nl: "Mijn moeder zei lachend: \"Zodra jij ongeduldig wordt, wordt iedereen zenuwachtig.\"" },
      { cn: "从那以后，爸爸开车的时候总是听音乐，心情好多了。", py: "Cóng nà yǐhòu, bàba kāichē de shíhou zǒngshì tīng yīnyuè, xīnqíng hǎo duō le.", nl: "Sindsdien luistert mijn vader altijd naar muziek als hij rijdt, en is zijn humeur veel beter." }
    ],
    questions: [
      { type: "mc", q: "Wat is de slechte gewoonte van de vader?",
        options: ["Hij wordt boos als hij in de file staat.", "Hij staat te laat op.", "Hij kijkt te veel tv.", "Hij lost problemen niet op."], answer: 0,
        why: ["Goed: 一堵车就生气.", "Hij staat juist meteen op als de wekker gaat.", "Hij kijkt 's ochtends het nieuws, maar dat noemt de tekst geen slechte gewoonte.", "Hij lost problemen juist meteen op."] },
      { type: "mc", q: "Hoe lang duurde de rit naar school op die drukke dag?",
        options: ["Veertig minuten.", "Vier minuten.", "Een uur.", "Veertien minuten."], answer: 0,
        why: ["Goed: 开了四十分钟才到学校.", "四十 is veertig, niet vier.", "Een uur staat niet in de tekst.", "Veertien is 十四, niet 四十."] },
      { type: "mc", q: "闹钟一响，他就起床。Wat betekent 一……就 hier?",
        options: ["Elke ochtend staat hij op direct nadat de wekker gaat.", "De wekker gaat één keer, en daarna slaapt hij verder.", "Hij staat pas laat op, lang na de wekker.", "Hij zet de wekker als hij opstaat."], answer: 0,
        why: ["Goed: 一……就 = zodra, en met 每天早上 is het een gewoonte.", "一 betekent hier niet \"één keer\".", "\"Pas laat\" zou 才 zijn, niet 就.", "De volgorde is: eerst gaat de wekker, dan staat hij op."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Zodra ik thuis ben, ga ik koken.\"",
      options: ["我一到家就做饭。", "我到家一就做饭。", "一我到家就做饭。", "我一到家做饭就。"], answer: 0,
      why: ["Goed: onderwerp + 一 + V1 + 就 + V2.", "一 staat vóór het werkwoord 到, niet erachter.", "一 staat na het onderwerp.", "就 staat vóór het tweede werkwoord, niet aan het eind."] },
    { type: "mc", q: "\"Ik las het één keer en begreep het meteen.\" 我看了一遍___懂了。",
      options: ["就", "才", "也", "还"], answer: 0,
      why: ["Goed: 就 = snel, makkelijk.", "才 zou betekenen dat het lang duurde.", "也 betekent \"ook\" en past hier niet.", "还 betekent \"nog\" en past hier niet."] },
    { type: "mc", q: "\"Ik moest het drie keer lezen voordat ik het begreep.\" 我看了三遍___懂。",
      options: ["才", "就", "也", "都"], answer: 0,
      why: ["Goed: 才 = pas, het duurde lang.", "就 zou zeggen dat het snel ging.", "也 betekent \"ook\".", "都 betekent \"allemaal\" en maakt geen \"pas\"."] },
    { type: "mc", q: "他一喝酒就脸红。Wat betekent dit?",
      options: ["Elke keer als hij alcohol drinkt, krijgt hij een rood gezicht.", "Hij drinkt elke dag één glas.", "Hij drinkt pas laat, en dan wordt hij rood.", "Eerst wordt hij rood, dan drinkt hij."], answer: 0,
      why: ["Goed: zonder 了 en bij een gewoonte = elke keer als.", "一 is hier geen getal.", "\"Pas laat\" zou 才 zijn.", "De volgorde is andersom: eerst drinken, dan rood."] },
    { type: "mc", q: "\"Zodra de leraar binnenkomt, worden de studenten stil.\"",
      options: ["老师一进来，学生们就安静了。", "老师一进来，就学生们安静了。", "一老师进来，学生们就安静了。", "老师进来一，学生们就安静了。"], answer: 0,
      why: ["Goed: 就 na het tweede onderwerp.", "就 staat na 学生们, niet ervoor.", "一 staat na het onderwerp 老师.", "一 staat vóór het werkwoord 进来."] },
    { type: "mc", q: "Wat is het verschil tussen 一旦 en 一……就?",
      options: ["一旦 gaat over iets wat misschien ooit gebeurt, vaak iets ernstigs.", "一旦 betekent \"pas\", net als 才.", "一旦 gebruik je voor gewoontes: elke keer als.", "一旦 is spreektaal, 一……就 is alleen schrijftaal."], answer: 0,
      why: ["Goed: 一旦 = mocht het ooit gebeuren. Het klinkt formeel.", "一旦 gaat niet over laat of pas.", "Voor gewoontes gebruik je juist 一……就.", "Het is andersom: 一旦 is formeler, 一……就 hoor je overal."] },
    { type: "mc", q: "Hoe spreek je 一 uit in 一到家?",
      options: ["yí", "yī", "yì", "yǐ"], answer: 0,
      why: ["Goed: vóór een vierde toon (到 dào) wordt 一 yí.", "yī gebruik je alleen als 一 los staat of aan het eind.", "yì gebruik je vóór de eerste, tweede en derde toon.", "一 krijgt nooit de derde toon."] },
    { type: "fill", q: "他一下课___去打篮球了。(Meteen na de les ging hij basketballen.)", answers: ["就"],
      hint: "Welk woord hoort bij 一 vóór de tweede handeling?", why: "一 + V1 + 就 + V2: de tweede handeling volgt meteen." },
    { type: "order", q: "Zet in de goede volgorde: \"Zodra hij thuiskwam, ging hij slapen.\"",
      tokens: [["他", "tā"], ["一回家", "yì huíjiā"], ["就", "jiù"], ["睡觉了", "shuìjiào le"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Zodra het warm wordt, gaat ze zwemmen.\"",
      tokens: [["天气", "tiānqì"], ["一热", "yí rè"], ["她就", "tā jiù"], ["去游泳", "qù yóuyǒng"]] },
    { type: "open", q: "Vertaal: \"Zodra ik in Beijing aankom, stuur ik je een bericht.\"", model: ["我一到北京就给你发信息。", "我一到北京，就给你发短信。"],
      tip: "Check: 一 vóór 到, 就 vóór het tweede werkwoord, en geen 了 na 到." },
    { type: "open", q: "Beschrijf een gewoonte van jezelf met 一……就.", model: ["我一累就想喝咖啡。", "我一到周末就睡懒觉。", "我一看书就想睡觉。"],
      tip: "Check: geen 了 na het eerste werkwoord, en betekent je zin \"elke keer als\"?" }
  ],
  review: [
    { type: "mc", q: "\"Zodra hij het nieuws hoorde, lachte hij.\"",
      options: ["他一听到这个消息就笑了。", "他听到一这个消息就笑了。", "一他听到这个消息就笑了。", "他一听到这个消息笑就了。"], answer: 0,
      why: ["Goed.", "一 staat vóór het werkwoord 听到.", "一 staat na het onderwerp.", "就 staat vóór het tweede werkwoord 笑."] },
    { type: "mc", q: "我们等了两个小时，他___来。(We wachtten twee uur, en pas toen kwam hij.)",
      options: ["才", "就", "也", "都"], answer: 0,
      why: ["Goed: 才 = pas, na lang wachten.", "就 zou zeggen dat hij snel kwam.", "也 betekent \"ook\".", "都 betekent \"allemaal\"."] },
    { type: "mc", q: "我一喝咖啡就睡不着。Wat betekent dit?",
      options: ["Elke keer als ik koffie drink, kan ik niet slapen.", "Ik drink één kop koffie, en dan kan ik slapen.", "Pas na koffie kan ik slapen.", "Ik kan niet slapen, en daarna drink ik koffie."], answer: 0,
      why: ["Goed: 一……就 als gewoonte, met 睡不着 = niet in slaap kunnen komen.", "一 is hier geen getal, en 睡不着 betekent juist niet kunnen slapen.", "\"Pas\" is 才, en 睡不着 is ontkennend.", "De volgorde is: eerst koffie, dan niet slapen."] }
  ]
})
