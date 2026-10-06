({
  id: "15", slug: "qilai-xiaqu", title: "V起来, V下来, V下去", sub: "Beginnen, tot rust komen, doorgaan",
  canDo: "Je kunt nu zeggen dat iets begint (起来), tot rust komt of vastgelegd wordt (下来), of doorgaat (下去).",
  guess: {
    q: "孩子们听到故事，马上安静下来了。Wat betekent 安静下来, denk je?",
    options: ["Ze werden stil: van lawaai naar rust.", "Ze gingen stil naar beneden.", "Ze bleven de hele tijd stil.", "Ze begonnen lawaai te maken."], answer: 0,
    why: ["Goed: 下来 na een eigenschap = tot rust komen, van druk naar stil.", "下来 betekent hier niet letterlijk \"naar beneden\".", "Er staat een verandering: eerst niet stil, daarna wel.", "Lawaai maken is het omgekeerde van 安静."]
  },
  problem: "起来, 下来 en 下去 ken je als richting: omhoog, naar beneden. Maar ze hebben ook een figuurlijke betekenis. 起来: iets begint. 下来: iets komt tot rust, of wordt vastgelegd. 下去: iets gaat door, vanaf nu. In het Nederlands gebruik je daar losse woorden voor, zoals \"beginnen\", \"kalmeren\" of \"doorgaan\".",
  pattern: [
    { l: "wie/wat", v: "我们", c: 1 }, { l: "werkwoord", v: "坚持", c: 3 },
    { l: "起来 / 下来 / 下去", v: "下去", c: 2, key: true }
  ],
  patternCap: "V/bn. + 起来 (begint, of: als je ... = oordeel) / V/bn. + 下来 (tot rust, vastgelegd, tot nu toe) / V + 下去 (doorgaan vanaf nu). Lijdend voorwerp: V + 起 + ding + 来 (下起雨来)",
  rules: [
    "起来 = een handeling of toestand begint en duurt voort: 笑起来, 忙起来. Met 看/听/说 betekent het \"als je ... , dan\": 看起来很好吃.",
    "下来 = van beweging naar rust (停下来, 安静下来), of iets wordt vastgelegd (记下来, 写下来). Ook: volhouden tot nu (坚持下来了).",
    "下去 = doorgaan, vanaf nu verder: 说下去, 坚持下去, 这样下去.",
    "Bij een eigenschap: groei of meer met 起来 (热闹起来, 暖和起来), afname of rust met 下来 (安静下来, 暗下来, 慢下来).",
    "Een lijdend voorwerp staat tussen 起 en 来: 下起雨来, 唱起歌来. Bij 下来 gebruik je vaak 把: 把号码记下来."
  ],
  pitfall: "下来 en 下去 lijken op elkaar, maar de tijd is anders. 下来 kijkt terug: tot nu toe, of vast. 下去 kijkt vooruit: vanaf nu verder.",
  examples: [
    { cn: "这个菜看起来很好吃。", py: "Zhège cài kàn qǐlai hěn hǎochī.", nl: "Dit gerecht ziet er heel lekker uit." },
    { cn: "孩子们听到故事，马上安静下来了。", py: "Háizimen tīngdào gùshi, mǎshàng ānjìng xiàlai le.", nl: "Toen de kinderen het verhaal hoorden, werden ze meteen stil." },
    { cn: "请把我的电话号码记下来。", py: "Qǐng bǎ wǒ de diànhuà hàomǎ jì xiàlai.", nl: "Schrijf mijn telefoonnummer alsjeblieft op." },
    { cn: "再难也要坚持下去。", py: "Zài nán yě yào jiānchí xiàqu.", nl: "Hoe moeilijk het ook is, je moet doorzetten." }
  ],
  nuance: [
    { h: "起来 of 下来 bij een eigenschap",
      p: "Wordt iets meer, drukker of warmer, dan gebruik je 起来. Wordt iets minder, rustiger of donkerder, dan gebruik je 下来. Denk aan de richting: omhoog is groei, omlaag is rust.",
      ex: [
        { cn: "春天到了，天气暖和起来了。", py: "Chūntiān dào le, tiānqì nuǎnhuo qǐlai le.", nl: "Het is lente, het wordt warmer." },
        { cn: "六点以后，天渐渐暗下来了。", py: "Liù diǎn yǐhòu, tiān jiànjiàn àn xiàlai le.", nl: "Na zessen werd het langzaam donker." }
      ] },
    { h: "坚持下来 of 坚持下去",
      p: "坚持下来 kijkt terug: je hebt het tot nu toe volgehouden, vaak met 了. 坚持下去 kijkt vooruit: je gaat vanaf nu door. Hetzelfde geldt voor 活下来 (overleefd) en 活下去 (verder leven).",
      ex: [
        { cn: "这么难的训练，他都坚持下来了。", py: "Zhème nán de xùnliàn, tā dōu jiānchí xiàlai le.", nl: "Hij heeft zelfs zo'n zware training volgehouden." },
        { cn: "不管多难，我都会坚持下去。", py: "Bùguǎn duō nán, wǒ dōu huì jiānchí xiàqu.", nl: "Hoe moeilijk ook, ik ga door." }
      ] },
    { h: "想起来, 记下来 en 说起来",
      p: "想起来 = het schiet je weer te binnen. 记下来 = je schrijft het op of prent het in. 说起来 = \"nu we het erover hebben\" of \"als je erover praat\". Je hoort 说起来 en 看起来 vooral in de spreektaal. In formele tekst schrijf je vaker 看上去.",
      ex: [
        { cn: "我想起来了，他姓王！", py: "Wǒ xiǎng qǐlai le, tā xìng Wáng!", nl: "Ik weet het weer: hij heet Wang!" },
        { cn: "这件事说起来容易，做起来难。", py: "Zhè jiàn shì shuō qǐlai róngyì, zuò qǐlai nán.", nl: "Dit is makkelijker gezegd dan gedaan." }
      ] }
  ],
  mistakes: [
    { wrong: "他突然哭下来了。", right: "他突然哭起来了。", why: "Iets begint plotseling: dat is 起来." },
    { wrong: "孩子们安静起来了。", right: "孩子们安静下来了。", why: "Van lawaai naar rust is een afname. Dat is 下来." },
    { wrong: "外面下雨起来了。", right: "外面下起雨来了。", why: "Het lijdend voorwerp (雨) staat tussen 起 en 来." },
    { wrong: "别停，请你说下来。", right: "别停，请你说下去。", why: "Doorgaan vanaf nu is 下去." }
  ],
  vocab: [
    ["起来 / 下来 / 下去", "qǐlai / xiàlai / xiàqu", "beginnen / tot rust komen, vastleggen / doorgaan"], ["安静", "ānjìng", "stil, rustig"], ["坚持", "jiānchí", "volhouden"],
    ["冷静", "lěngjìng", "kalm"], ["热闹", "rènao", "druk, levendig"], ["暗", "àn", "donker"],
    ["号码", "hàomǎ", "nummer"], ["训练", "xùnliàn", "training"], ["放弃", "fàngqì", "opgeven"], ["演讲", "yǎnjiǎng", "toespraak; een toespraak houden"]
  ],
  dialogue: [
    ["A", "你最近怎么看起来这么累？", "Nǐ zuìjìn zěnme kàn qǐlai zhème lèi?", "Waarom zie je er de laatste tijd zo moe uit?"],
    ["B", "我在学钢琴，每天练两个小时，有点儿坚持不下去了。", "Wǒ zài xué gāngqín, měitiān liàn liǎng ge xiǎoshí, yǒudiǎnr jiānchí bu xiàqu le.", "Ik leer piano, en ik oefen elke dag twee uur. Ik kan het bijna niet meer volhouden."],
    ["A", "别放弃啊！说起来，你学了多久了？", "Bié fàngqì a! Shuō qǐlai, nǐ xuéle duō jiǔ le?", "Niet opgeven! Nu we het erover hebben: hoe lang leer je al?"],
    ["B", "快一年了。", "Kuài yì nián le.", "Bijna een jaar."],
    ["A", "一年都坚持下来了，再坚持下去肯定会更好。", "Yì nián dōu jiānchí xiàlai le, zài jiānchí xiàqu kěndìng huì gèng hǎo.", "Je hebt al een jaar volgehouden. Als je doorgaat, wordt het zeker nog beter."],
    ["B", "好吧。我把老师的建议都记下来，慢慢练。", "Hǎo ba. Wǒ bǎ lǎoshī de jiànyì dōu jì xiàlai, mànmàn liàn.", "Goed dan. Ik schrijf alle tips van de leraar op en oefen rustig verder."]
  ],
  reading: {
    title: "第一次演讲",
    lines: [
      { cn: "上周，我第一次用中文在全班同学面前演讲。", py: "Shàng zhōu, wǒ dì-yī cì yòng Zhōngwén zài quán bān tóngxué miànqián yǎnjiǎng.", nl: "Vorige week hield ik voor het eerst een toespraak in het Chinees, voor de hele klas." },
      { cn: "上台以前，我紧张得手都凉了。", py: "Shàng tái yǐqián, wǒ jǐnzhāng de shǒu dōu liáng le.", nl: "Voordat ik het podium op ging, was ik zo zenuwachtig dat mijn handen koud waren." },
      { cn: "我一开口，大家就安静下来，认真地听我说。", py: "Wǒ yì kāikǒu, dàjiā jiù ānjìng xiàlai, rènzhēn de tīng wǒ shuō.", nl: "Zodra ik begon te praten, werd iedereen stil en luisterde aandachtig." },
      { cn: "说到一半，我突然忘了下一句。", py: "Shuōdào yíbàn, wǒ tūrán wàngle xià yí jù.", nl: "Halverwege vergat ik plotseling de volgende zin." },
      { cn: "这时，老师笑着对我说：\"别着急，慢慢想，说下去。\"", py: "Zhè shí, lǎoshī xiàozhe duì wǒ shuō: \"Bié zháojí, mànmàn xiǎng, shuō xiàqu.\"", nl: "Toen zei de leraar lachend: \"Rustig maar, denk even na en ga door.\"" },
      { cn: "我深吸了一口气，冷静下来，终于想起来了。", py: "Wǒ shēn xīle yì kǒu qì, lěngjìng xiàlai, zhōngyú xiǎng qǐlai le.", nl: "Ik haalde diep adem, werd rustig, en eindelijk wist ik het weer." },
      { cn: "讲到有意思的地方，同学们都笑了起来。", py: "Jiǎngdào yǒu yìsi de dìfang, tóngxuémen dōu xiàole qǐlai.", nl: "Bij de grappige stukken begonnen mijn klasgenoten te lachen." },
      { cn: "演讲结束以后，我把老师的意见都记了下来。", py: "Yǎnjiǎng jiéshù yǐhòu, wǒ bǎ lǎoshī de yìjiàn dōu jìle xiàlai.", nl: "Na de toespraak schreef ik alle opmerkingen van de leraar op." },
      { cn: "我想，只要坚持下去，我的中文一定会越来越好。", py: "Wǒ xiǎng, zhǐyào jiānchí xiàqu, wǒ de Zhōngwén yídìng huì yuè lái yuè hǎo.", nl: "Ik denk: als ik doorzet, wordt mijn Chinees zeker steeds beter." }
    ],
    questions: [
      { type: "mc", q: "Wat gebeurde er halverwege de toespraak?",
        options: ["De schrijver vergat de volgende zin.", "De klasgenoten begonnen te praten.", "De leraar stopte de toespraak.", "De schrijver moest naar huis."], answer: 0,
        why: ["Goed: 说到一半，我突然忘了下一句。", "De klas werd juist stil: 大家就安静下来.", "De leraar zei juist: 说下去, ga door.", "Daar staat niets over in de tekst."] },
      { type: "mc", q: "Wat deed de schrijver na de toespraak?",
        options: ["Hij schreef de opmerkingen van de leraar op.", "Hij hield nog een toespraak.", "Hij ging met de klas lachen.", "Hij vergat alles wat de leraar zei."], answer: 0,
        why: ["Goed: 我把老师的意见都记了下来。", "Er staat niets over een tweede toespraak.", "Het lachen gebeurde tijdens de toespraak, niet erna.", "记下来 = opschrijven, vastleggen. Hij vergat het dus niet."] },
      { type: "mc", q: "我深吸了一口气，冷静下来。Wat betekent 冷静下来 hier?",
        options: ["Hij werd rustig: van zenuwachtig naar kalm.", "Hij ging rustig verder met praten.", "Hij begon zenuwachtig te worden.", "Hij liep kalm naar beneden."], answer: 0,
        why: ["Goed: 下来 na een eigenschap = tot rust komen.", "Doorgaan zou 下去 zijn.", "Een begin met meer spanning zou eerder 紧张起来 zijn.", "下来 is hier figuurlijk, niet \"naar beneden\"."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Plotseling begon hij te huilen.\"",
      options: ["他突然哭起来了。", "他突然哭下来了。", "他突然哭下去了。", "他突然哭上来了。"], answer: 0,
      why: ["Goed: iets begint = 起来.", "下来 is tot rust komen, geen begin.", "下去 is doorgaan, geen begin.", "上来 betekent niet \"beginnen\"."] },
    { type: "mc", q: "孩子们听到故事，马上安静___了。(Toen de kinderen het verhaal hoorden, werden ze meteen stil.)",
      options: ["下来", "起来", "下去", "出来"], answer: 0,
      why: ["Goed: van lawaai naar rust = 下来.", "起来 past bij groei, zoals 热闹起来, niet bij stil worden.", "下去 is doorgaan, geen verandering naar rust.", "出来 past niet bij 安静."] },
    { type: "mc", q: "你别停，继续说___。(Stop niet, ga door met praten.)",
      options: ["下去", "下来", "起来", "出来"], answer: 0,
      why: ["Goed: doorgaan vanaf nu = 下去.", "下来 is tot rust komen of vastleggen, geen doorgaan.", "起来 is beginnen, maar 继续 zegt dat hij al bezig is.", "说出来 is \"uitspreken, zeggen wat je denkt\", geen doorgaan."] },
    { type: "fill", q: "外面下___雨来了。(Buiten begint het te regenen.)", answers: ["起"],
      hint: "Het lijdend voorwerp 雨 staat midden in welk complement?", why: "V + 起 + ding + 来: 下起雨来 = het begint te regenen." },
    { type: "order", q: "Zet in de goede volgorde: \"Schrijf je telefoonnummer alsjeblieft op.\"",
      tokens: [["请", "qǐng"], ["把", "bǎ"], ["你的电话号码", "nǐ de diànhuà hàomǎ"], ["记下来", "jì xiàlai"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Het weer wordt langzaam warmer.\"",
      tokens: [["天气", "tiānqì"], ["渐渐", "jiànjiàn"], ["暖和", "nuǎnhuo"], ["起来了", "qǐlai le"]] },
    { type: "mc", q: "\"Hij heeft die zware training tot het eind volgehouden.\"",
      options: ["这么难的训练，他都坚持下来了。", "这么难的训练，他都坚持起来了。", "这么难的训练，他都坚持出来了。", "这么难的训练，他都坚持上来了。"], answer: 0,
      why: ["Goed: terugkijken, volgehouden tot nu = 坚持下来了.", "起来 is beginnen. Hij is al klaar.", "出来 past niet bij 坚持.", "上来 past niet bij 坚持."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["外面下雨起来了。", "外面下起雨来了。", "他们唱起歌来了。", "大家都笑起来了。"], answer: 0,
      why: ["Goed: deze is fout. 雨 hoort tussen 起 en 来.", "Deze klopt: 下起雨来.", "Deze klopt: 唱起歌来.", "Deze klopt: geen lijdend voorwerp, dus 笑起来."] },
    { type: "mc", q: "我忘了他的名字，现在___了。(Ik was zijn naam vergeten, maar nu weet ik hem weer.)",
      options: ["想起来", "记下来", "想下去", "说起来"], answer: 0,
      why: ["Goed: 想起来 = het schiet je weer te binnen.", "记下来 is opschrijven of onthouden, niet je iets herinneren.", "想下去 is verder nadenken.", "说起来 is \"als je erover praat\"."] },
    { type: "mc", q: "这件事说起来容易，做起来难。Wat betekent dit?",
      options: ["Dit is makkelijker gezegd dan gedaan.", "Begin erover te praten, dan wordt het makkelijk.", "Praat verder, dan wordt het moeilijk.", "Het is opgeschreven, maar nog niet gedaan."], answer: 0,
      why: ["Goed: V起来 = als je ... , dan: als je erover praat / als je het doet.", "起来 is hier geen begin, maar \"als je ...\".", "Doorgaan zou 下去 zijn.", "Opschrijven zou 写下来 zijn."] },
    { type: "open", q: "Vertaal: \"Rustig maar, kalmeer eerst even.\"", model: ["别着急，先冷静下来。", "你先冷静下来吧。"],
      tip: "Check: van onrust naar rust is 下来, niet 起来." },
    { type: "open", q: "Vertaal: \"Hoe moeilijk het ook is, ik ga door.\"", model: ["再难我也要坚持下去。", "不管多难，我都会坚持下去。"],
      tip: "Check: vooruitkijken, doorgaan vanaf nu = 下去." }
  ],
  review: [
    { type: "mc", q: "\"Het werd plotseling levendig op straat.\"",
      options: ["街上突然热闹起来了。", "街上突然热闹下来了。", "街上突然热闹下去了。", "街上突然热闹出来了。"], answer: 0,
      why: ["Goed: meer drukte, groei = 起来.", "下来 past bij afname of rust.", "下去 is doorgaan, geen plotselinge verandering.", "出来 past niet bij 热闹."] },
    { type: "mc", q: "\"Schrijf dit adres op.\"",
      options: ["请把这个地址写下来。", "请把这个地址写起来。", "请把这个地址写下去。", "请把这个地址写过来。"], answer: 0,
      why: ["Goed: vastleggen = 下来.", "起来 is beginnen, niet vastleggen.", "写下去 is doorgaan met schrijven.", "过来 is een beweging naar de spreker toe."] },
    { type: "mc", q: "如果再这样___，我们就要迟到了。(Als het zo doorgaat, komen we te laat.)",
      options: ["下去", "下来", "起来", "出来"], answer: 0,
      why: ["Goed: 这样下去 = als het zo doorgaat.", "下来 kijkt terug of komt tot rust.", "起来 is beginnen.", "出来 past niet bij 这样."] }
  ]
})
