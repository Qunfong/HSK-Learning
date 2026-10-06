({
  id: "04", slug: "guo-le", title: "过 of 了", sub: "Ooit meegemaakt, of net gebeurd",
  canDo: "Je kunt nu met 过 vertellen wat je ooit hebt meegemaakt, en het verschil met 了 zien.",
  guess: {
    q: "Welke zin zegt: \"Ik heb (ooit in mijn leven) Chinees geleerd\"?",
    options: ["我学过汉语。", "我学了汉语。", "我在学汉语。", "我要学汉语。"], answer: 0,
    why: ["Goed: 过 = ervaring, ergens in je verleden.", "了 zegt dat het op een bepaald moment gebeurd is, niet dat het een ervaring is.", "在 = nu bezig.", "要 = gaat gebeuren."]
  },
  problem: "\"Ben je weleens in China geweest?\" gaat niet over één moment. Het gaat over je ervaring tot nu. Daarvoor zet je 过 (guo) achter het werkwoord. Met 了 vertel je wat er op een bepaald moment gebeurde.",
  pattern: [
    { l: "wie", v: "我", c: 1 }, { l: "werkwoord", v: "去", c: 4 }, { l: "ervaring", v: "过", c: 2, key: true }, { l: "waar/wat", v: "中国", c: 3 }
  ],
  patternCap: "Werkwoord + 过 = ooit, ergens in je leven · werkwoord + 了 = gebeurd, vaak op een genoemd moment (去年, 昨天)",
  rules: [
    "Ervaring: werkwoord + 过. 我去过中国。",
    "Ontkennen: 没 + werkwoord + 过. 我没去过中国。 Nooit: 从来没 ... 过.",
    "Vragen: 你去过中国吗？ of 你去过中国没有？",
    "Hoe vaak: 过 + aantal + 次. 我去过两次。 Een persoon staat vóór 次: 我见过他两次。"
  ],
  pitfall: "Bij 过 gebruik je 没, nooit 不: 我不去过 is fout. En met 没 blijft 过 staan: 我没去过.",
  examples: [
    { cn: "我去过中国。", py: "Wǒ qùguo Zhōngguó.", nl: "Ik ben weleens in China geweest." },
    { cn: "我去年去了中国。", py: "Wǒ qùnián qùle Zhōngguó.", nl: "Vorig jaar ben ik naar China gegaan." },
    { cn: "我从来没吃过北京烤鸭。", py: "Wǒ cónglái méi chīguo Běijīng kǎoyā.", nl: "Ik heb nog nooit Pekingeend gegeten." },
    { cn: "我曾经在北京住过一年。", py: "Wǒ céngjīng zài Běijīng zhùguo yì nián.", nl: "Ik heb ooit een jaar in Beijing gewoond." }
  ],
  nuance: [
    { h: "过 of 了: ervaring of gebeurtenis",
      p: "Met 过 zeg je dat je iets kent uit ervaring. Wanneer het was, is niet belangrijk. Met 了 vertel je wat er gebeurde, vaak op een genoemd moment. Wil je een verhaal vertellen over gisteren, gebruik dan 了.",
      ex: [
        { cn: "我吃过烤鸭。", py: "Wǒ chīguo kǎoyā.", nl: "Ik heb weleens eend gegeten. (Ik weet hoe het smaakt.)" },
        { cn: "我昨天吃了烤鸭。", py: "Wǒ zuótiān chīle kǎoyā.", nl: "Ik heb gisteren eend gegeten." }
      ] },
    { h: "过: het is voorbij",
      p: "过 zegt ook dat de situatie nu voorbij is. 我在北京住过 betekent: vroeger woonde ik daar, nu niet meer. Met 了 kan de situatie nog steeds zo zijn. Vergelijk de twee zinnen hieronder.",
      ex: [
        { cn: "他结过婚。", py: "Tā jiéguo hūn.", nl: "Hij is ooit getrouwd geweest. (Nu niet meer.)" },
        { cn: "他结婚了。", py: "Tā jiéhūn le.", nl: "Hij is getrouwd." }
      ] },
    { h: "Hoe vaak: 次 na 过",
      p: "Het aantal keer staat achter 过. Bij een plaats of ding mag het aantal ervoor of erna. Bij een persoon (他, 你) komt het aantal altijd achteraan.",
      ex: [
        { cn: "我去过两次上海。", py: "Wǒ qùguo liǎng cì Shànghǎi.", nl: "Ik ben twee keer in Shanghai geweest." },
        { cn: "我见过他一次。", py: "Wǒ jiànguo tā yí cì.", nl: "Ik heb hem één keer ontmoet." }
      ] }
  ],
  mistakes: [
    { wrong: "我不去过中国。", right: "我没去过中国。", why: "Bij 过 ontken je met 没, niet met 不." },
    { wrong: "我去中国过。", right: "我去过中国。", why: "过 staat direct achter het werkwoord, vóór de plaats of het ding." },
    { wrong: "我从来没吃了烤鸭。", right: "我从来没吃过烤鸭。", why: "\"Nog nooit\" gaat over ervaring. Dat is 过, en na 没 valt 了 weg." },
    { wrong: "我见过两次他。", right: "我见过他两次。", why: "Bij een persoon komt het aantal keer achter de persoon." }
  ],
  vocab: [
    ["过", "guo", "(ervaring: weleens)"], ["从来", "cónglái", "altijd (从来没 = nog nooit)"], ["曾经", "céngjīng", "ooit, vroeger"],
    ["次", "cì", "keer"], ["国家", "guójiā", "land"], ["旅游", "lǚyóu", "reizen, toerisme"],
    ["长城", "Chángchéng", "de Chinese Muur"], ["熊猫", "xióngmāo", "panda"], ["饺子", "jiǎozi", "Chinese dumpling"], ["包", "bāo", "vouwen (饺子), inpakken"]
  ],
  dialogue: [
    ["A", "你去过中国吗？", "Nǐ qùguo Zhōngguó ma?", "Ben je weleens in China geweest?"],
    ["B", "去过，去过两次。", "Qùguo, qùguo liǎng cì.", "Ja, twee keer."],
    ["A", "你爬过长城吗？", "Nǐ páguo Chángchéng ma?", "Heb je weleens de Chinese Muur beklommen?"],
    ["B", "爬过！去年我去了北京，第一天就爬了长城。", "Páguo! Qùnián wǒ qùle Běijīng, dì yī tiān jiù pále Chángchéng.", "Ja! Vorig jaar ging ik naar Beijing en de eerste dag beklom ik meteen de Muur."],
    ["A", "真好。我从来没去过中国。", "Zhēn hǎo. Wǒ cónglái méi qùguo Zhōngguó.", "Wat mooi. Ik ben nog nooit in China geweest."]
  ],
  reading: {
    title: "大卫的第一次",
    lines: [
      { cn: "我的朋友大卫是英国人，他很喜欢旅游。", py: "Wǒ de péngyou Dàwèi shì Yīngguó rén, tā hěn xǐhuan lǚyóu.", nl: "Mijn vriend David is Engels. Hij reist graag." },
      { cn: "他去过很多国家，也来过中国三次。", py: "Tā qùguo hěn duō guójiā, yě láiguo Zhōngguó sān cì.", nl: "Hij is in veel landen geweest, en ook drie keer in China." },
      { cn: "他爬过长城，看过熊猫，还在上海住过半年。", py: "Tā páguo Chángchéng, kànguo xióngmāo, hái zài Shànghǎi zhùguo bàn nián.", nl: "Hij heeft de Muur beklommen, panda's gezien en zelfs een half jaar in Shanghai gewoond." },
      { cn: "可是他从来没吃过饺子。", py: "Kěshì tā cónglái méi chīguo jiǎozi.", nl: "Maar hij had nog nooit dumplings gegeten." },
      { cn: "上个周末，我请他来我家。", py: "Shàng ge zhōumò, wǒ qǐng tā lái wǒ jiā.", nl: "Vorig weekend nodigde ik hem bij mij thuis uit." },
      { cn: "我们一起包了饺子，他吃了二十个！", py: "Wǒmen yìqǐ bāole jiǎozi, tā chīle èrshí ge!", nl: "We maakten samen dumplings, en hij at er twintig!" },
      { cn: "他说：\"这是我吃过的最好吃的东西。\"", py: "Tā shuō: \"Zhè shì wǒ chīguo de zuì hǎochī de dōngxi.\"", nl: "Hij zei: \"Dit is het lekkerste wat ik ooit gegeten heb.\"" },
      { cn: "现在，他也会包饺子了。", py: "Xiànzài, tā yě huì bāo jiǎozi le.", nl: "Nu kan hij ook zelf dumplings maken." }
    ],
    questions: [
      { type: "mc", q: "Wat had David vóór vorig weekend nog nooit gedaan?",
        options: ["Dumplings eten.", "De Muur beklimmen.", "Panda's zien.", "In China wonen."], answer: 0,
        why: ["Goed: 他从来没吃过饺子。", "Dat heeft hij wel gedaan: 他爬过长城.", "Dat heeft hij wel gedaan: 看过熊猫.", "Hij heeft wel in Shanghai gewoond: 在上海住过半年."] },
      { type: "mc", q: "Hoe vaak is David in China geweest?",
        options: ["Drie keer.", "Twee keer.", "Nog nooit.", "Een half jaar lang, één keer."], answer: 0,
        why: ["Goed: 来过中国三次.", "Twee keer staat in de dialoog, niet in deze tekst.", "Hij is er wel geweest: 来过.", "Het halve jaar gaat over Shanghai, niet over het aantal keer."] },
      { type: "mc", q: "他吃了二十个。Waarom staat hier 了 en niet 过?",
        options: ["Het gaat om wat er op één moment gebeurde: vorig weekend.", "Het gaat om een ervaring ergens in zijn leven.", "Het gaat om iets wat nog moet gebeuren.", "Hij is nog steeds aan het eten."], answer: 0,
        why: ["Goed: 了 vertelt wat er op een bepaald moment gebeurde.", "Een ervaring zonder moment zou 过 zijn.", "了 zegt dat het al gebeurd is.", "Bezig zijn is 在 of 着, niet 了."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik ben nog nooit in Japan geweest.\"",
      options: ["我从来没去过日本。", "我从来不去过日本。", "我从来没去了日本。", "我没从来去过日本。"], answer: 0,
      why: ["Goed: 从来没 + werkwoord + 过.", "Bij 过 gebruik je 没, niet 不.", "Voor \"nog nooit\" is het 过, niet 了.", "从来 komt vóór 没."] },
    { type: "mc", q: "Iemand vraagt: 你去过上海吗？ Welk antwoord past?",
      options: ["去过，去过两次。", "没去了。", "不去过。", "去着。"], answer: 0,
      why: ["Goed: je antwoordt met hetzelfde werkwoord + 过.", "Met 没 valt 了 weg, en de vraag ging over 过.", "Bij 过 gebruik je 没, niet 不.", "着 betekent \"bezig met / in een toestand\"."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik heb nog nooit een panda gezien.\"",
      tokens: [["我", "wǒ"], ["从来", "cónglái"], ["没", "méi"], ["看过", "kànguo"], ["熊猫", "xióngmāo"]] },
    { type: "mc", q: "Wat betekent: 我曾经在北京住过一年。",
      options: ["Ik heb ooit een jaar in Beijing gewoond.", "Ik woon al een jaar in Beijing.", "Ik ga een jaar in Beijing wonen.", "Ik woon sinds vorig jaar in Beijing."], answer: 0,
      why: ["Goed: 曾经 ... 过 = ooit, in het verleden.", "\"Al een jaar en nog steeds\" zou 了 ... 了 zijn.", "Dit gaat over de toekomst; 过 gaat over het verleden.", "过 zegt dat het voorbij is, niet dat je er nu woont."] },
    { type: "mc", q: "他结过婚。Wat betekent dit?",
      options: ["Hij is ooit getrouwd geweest, nu niet meer.", "Hij is net getrouwd.", "Hij gaat binnenkort trouwen.", "Hij is nog nooit getrouwd geweest."], answer: 0,
      why: ["Goed: 过 = ervaring die voorbij is.", "Net getrouwd is 他刚结婚.", "Toekomst is 要结婚 of 快结婚了.", "Nog nooit is 没结过婚."] },
    { type: "mc", q: "\"Ik heb hem twee keer ontmoet.\"",
      options: ["我见过他两次。", "我见过两次他。", "我两次见过他。", "我见两次过他。"], answer: 0,
      why: ["Goed: bij een persoon komt het aantal keer achteraan.", "Bij een persoon (他) staat 两次 niet vóór de persoon.", "Het aantal keer staat achter het werkwoord, niet ervoor.", "过 staat direct achter 见."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["我不吃过饺子。", "我没吃过饺子。", "我吃过两次饺子。", "我从来没吃过饺子。"], answer: 0,
      why: ["Goed: deze is fout. Bij 过 ontken je met 没, niet met 不.", "Deze klopt: 没 + werkwoord + 过.", "Deze klopt: 过 + aantal keer + ding.", "Deze klopt: 从来没 ... 过 = nog nooit."] },
    { type: "fill", q: "你看___这本书吗？(Heb je dit boek weleens gelezen?)", answers: ["过"],
      hint: "Welk woord zegt \"weleens\"?", why: "看过 = weleens gelezen. Het gaat om ervaring, niet om een bepaald moment." },
    { type: "order", q: "Zet in de goede volgorde: \"Ik heb ooit een half jaar in Shanghai gewoond.\"",
      tokens: [["我曾经", "wǒ céngjīng"], ["在上海", "zài Shànghǎi"], ["住过", "zhùguo"], ["半年", "bàn nián"]] },
    { type: "open", q: "Vertel iets wat je nog nooit gedaan hebt.", model: ["我从来没爬过黄山。", "我从来没吃过臭豆腐。"],
      tip: "Check: 从来没 + werkwoord + 过 + ding." },
    { type: "open", q: "Vertaal: \"Ik ben twee keer in Beijing geweest.\"", model: ["我去过两次北京。", "我去过北京两次。"],
      tip: "Check: 去过, en 两次 direct achter 过 of achter 北京. Geen 了 en geen 不." }
  ],
  review: [
    { type: "mc", q: "\"Heb je weleens Chinese thee gedronken?\"",
      options: ["你喝过中国茶吗？", "你喝了中国茶过吗？", "你过喝中国茶吗？", "你喝中国茶过吗？"], answer: 0,
      why: ["Goed.", "过 staat direct achter het werkwoord, zonder 了.", "过 komt ná het werkwoord.", "过 staat direct achter 喝, niet na het ding."] },
    { type: "mc", q: "\"Deze film heb ik nog nooit gezien.\" 这部电影我从来没看___。",
      options: ["过", "了", "着", "的"], answer: 0,
      why: ["Goed: 从来没 ... 过.", "Met 没 valt 了 weg.", "着 is \"bezig / in een toestand\".", "的 hoort hier niet."] },
    { type: "mc", q: "\"Ik heb nog nooit Japans geleerd.\"",
      options: ["我从来没学过日语。", "我从来没学了日语。", "我从来不学过日语。", "我从来没过学日语。"], answer: 0,
      why: ["Goed: 从来没 + werkwoord + 过 + ding.", "\"Nog nooit\" is 过, en na 没 valt 了 weg.", "Bij 过 gebruik je 没, niet 不.", "过 staat ná het werkwoord 学."] }
  ]
})
