({
  id: "06", slug: "bei", title: "De 被-zin", sub: "Wat jou (of iets) overkomt",
  canDo: "Je kunt nu met 被 vertellen wat iets of iemand is overkomen, en wie het deed.",
  guess: {
    q: "我的手机被我弟弟弄坏了。Wie heeft de telefoon kapotgemaakt?",
    options: ["Mijn broertje", "Ik", "Niemand, hij ging vanzelf kapot", "Dat staat er niet"], answer: 0,
    why: ["Goed: na 被 staat wie het deed.", "我 staat in 我的手机: het is míjn telefoon, maar ik deed het niet.", "被 + 我弟弟 zegt wie het deed.", "Het staat er wel: direct na 被."]
  },
  problem: "Vaak wil je beginnen met wat er iets overkwam: mijn fiets. Daarna zeg je wie het deed en wat er gebeurde. Daarvoor is 被 (bèi). Het lijkt op 把, maar andersom.",
  pattern: [
    { l: "wat", v: "杯子", c: 3 }, { l: "被", v: "被", c: 2, key: true }, { l: "door wie", v: "我", c: 1 },
    { l: "werkwoord", v: "打", c: 4 }, { l: "resultaat", v: "破了", c: 5 }
  ],
  patternCap: "Vergelijk: 我把杯子打破了 (ik → glas)  ·  杯子被我打破了 (glas ← door mij). Spreektaal: 叫/让 + iemand.",
  rules: [
    "Na het werkwoord komt nog iets, net als bij 把: 了, 走, 坏 ...",
    "Wie het deed mag weg: 我的自行车被偷了。",
    "Ontkennen vóór 被: 他没被骗。",
    "Hulpwerkwoorden en tijdwoorden staan ook vóór 被: 我昨天被骗了。",
    "Vaak gaat het om iets vervelends."
  ],
  pitfall: "被 en 把 niet verwisselen: bij 把 komt eerst wie het doet, bij 被 eerst wat het overkomt.",
  examples: [
    { cn: "我的自行车被偷了。", py: "Wǒ de zìxíngchē bèi tōu le.", nl: "Mijn fiets is gestolen." },
    { cn: "杯子被我打破了。", py: "Bēizi bèi wǒ dǎpò le.", nl: "Het glas is door mij gebroken." },
    { cn: "我的帽子被风吹走了。", py: "Wǒ de màozi bèi fēng chuīzǒu le.", nl: "Mijn hoed is door de wind weggeblazen." },
    { cn: "他没被妈妈发现。", py: "Tā méi bèi māma fāxiàn.", nl: "Hij is niet door zijn moeder betrapt." }
  ],
  nuance: [
    { h: "被 of 把: zelfde gebeurtenis, ander begin",
      p: "Met 把 begin je bij wie iets doet. Met 被 begin je bij wat iets overkomt. De rest van de zin blijft hetzelfde: werkwoord + resultaat. Kies 被 als het ding of de persoon waar het over gaat de hoofdrol heeft.",
      ex: [
        { cn: "弟弟把我的电脑弄坏了。", py: "Dìdi bǎ wǒ de diànnǎo nònghuài le.", nl: "Mijn broertje heeft mijn computer kapotgemaakt." },
        { cn: "我的电脑被弟弟弄坏了。", py: "Wǒ de diànnǎo bèi dìdi nònghuài le.", nl: "Mijn computer is door mijn broertje kapotgemaakt." }
      ] },
    { h: "Spreektaal: 叫 en 让",
      p: "In gesprekken hoor je vaak 叫 (jiào) of 让 (ràng) in plaats van 被. De betekenis is hetzelfde. Eén verschil: na 叫 en 让 moet je zeggen wie het deed. Weet je dat niet, zeg dan 人. 被 kan in alle situaties, ook in geschreven tekst.",
      ex: [
        { cn: "我的自行车让人偷了。", py: "Wǒ de zìxíngchē ràng rén tōu le.", nl: "Mijn fiets is (door iemand) gestolen." },
        { cn: "蛋糕叫弟弟吃了。", py: "Dàngāo jiào dìdi chī le.", nl: "De taart is door mijn broertje opgegeten." }
      ] },
    { h: "Geen 被 waar het Nederlands wel een passief heeft",
      p: "Het Nederlands zegt vaak \"is geschreven\" of \"is klaar gemaakt\". Het Chinees gebruikt dan meestal géén 被. Je noemt gewoon het ding en daarna wat ermee is. Dat geldt vooral voor neutrale of goede resultaten. 这本书被写得很好 klinkt fout.",
      ex: [
        { cn: "这本书写得很好。", py: "Zhè běn shū xiě de hěn hǎo.", nl: "Dit boek is goed geschreven." },
        { cn: "饭做好了。", py: "Fàn zuòhǎo le.", nl: "Het eten is klaar." }
      ] }
  ],
  mistakes: [
    { wrong: "我的钱包被偷。", right: "我的钱包被偷了。", why: "Na het werkwoord moet nog iets komen, zoals 了." },
    { wrong: "他被没骗。", right: "他没被骗。", why: "没 staat vóór 被, niet erna." },
    { wrong: "我的自行车让偷了。", right: "我的自行车让人偷了。", why: "Na 让 en 叫 moet je zeggen wie het deed. Weet je dat niet, gebruik dan 人." },
    { wrong: "作业被写完了。", right: "作业写完了。", why: "Bij een neutraal resultaat gebruik je geen 被. Noem het ding en zeg wat ermee is." }
  ],
  vocab: [
    ["被", "bèi", "(door; wat iemand overkomt)"], ["偷", "tōu", "stelen"], ["小偷", "xiǎotōu", "dief"],
    ["骗", "piàn", "bedriegen"], ["弄坏", "nònghuài", "kapotmaken"], ["打破", "dǎpò", "breken"],
    ["吹", "chuī", "blazen, waaien"], ["风", "fēng", "wind"], ["自行车", "zìxíngchē", "fiets"], ["倒霉", "dǎoméi", "pech hebben"]
  ],
  dialogue: [
    ["A", "你怎么走路来上班？", "Nǐ zěnme zǒulù lái shàngbān?", "Waarom kom je lopend naar je werk?"],
    ["B", "别提了，我的自行车被偷了。", "Bié tí le, wǒ de zìxíngchē bèi tōu le.", "Hou op, mijn fiets is gestolen."],
    ["A", "真的吗？什么时候？", "Zhēn de ma? Shénme shíhou?", "Echt? Wanneer?"],
    ["B", "昨天晚上。今天早上我的伞也被风吹坏了。", "Zuótiān wǎnshang. Jīntiān zǎoshang wǒ de sǎn yě bèi fēng chuīhuài le.", "Gisteravond. En vanochtend is mijn paraplu ook nog kapotgewaaid."],
    ["A", "你最近运气不太好啊。", "Nǐ zuìjìn yùnqi bú tài hǎo a.", "Je hebt de laatste tijd niet veel geluk, hè."]
  ],
  reading: {
    title: "倒霉的一天",
    lines: [
      { cn: "今天是我最倒霉的一天。", py: "Jīntiān shì wǒ zuì dǎoméi de yì tiān.", nl: "Vandaag was mijn dag met de meeste pech." },
      { cn: "早上出门的时候，我的伞被风吹坏了。", py: "Zǎoshang chūmén de shíhou, wǒ de sǎn bèi fēng chuīhuài le.", nl: "Toen ik 's ochtends de deur uitging, waaide mijn paraplu kapot." },
      { cn: "到了公司，我发现我放在冰箱里的午饭被同事吃了。", py: "Dàole gōngsī, wǒ fāxiàn wǒ fàng zài bīngxiāng li de wǔfàn bèi tóngshì chī le.", nl: "Op het werk zag ik dat een collega mijn lunch uit de koelkast had opgegeten." },
      { cn: "我很生气，可是我没说什么。", py: "Wǒ hěn shēngqì, kěshì wǒ méi shuō shénme.", nl: "Ik was boos, maar ik zei niets." },
      { cn: "下班以前，我又被老板叫到了办公室。", py: "Xiàbān yǐqián, wǒ yòu bèi lǎobǎn jiàodàole bàngōngshì.", nl: "Voor het einde van de dag werd ik ook nog door de baas naar zijn kantoor geroepen." },
      { cn: "老板说：\"你的报告写得很好！\"", py: "Lǎobǎn shuō: \"Nǐ de bàogào xiě de hěn hǎo!\"", nl: "De baas zei: \"Je verslag is heel goed geschreven!\"" },
      { cn: "我很高兴。可是下班以后，我找不到我的自行车了。", py: "Wǒ hěn gāoxìng. Kěshì xiàbān yǐhòu, wǒ zhǎo bu dào wǒ de zìxíngchē le.", nl: "Ik was blij. Maar na het werk kon ik mijn fiets niet vinden." },
      { cn: "我想：是不是被人偷了？", py: "Wǒ xiǎng: shì bu shì bèi rén tōu le?", nl: "Ik dacht: is hij soms gestolen?" },
      { cn: "后来我才想起来，今天早上我是走路来上班的！", py: "Hòulái wǒ cái xiǎng qilai, jīntiān zǎoshang wǒ shì zǒulù lái shàngbān de!", nl: "Pas later wist ik het weer: ik was vanochtend lopend naar mijn werk gekomen!" }
    ],
    questions: [
      { type: "mc", q: "Wat gebeurde er met de lunch?",
        options: ["Een collega heeft hem opgegeten.", "De schrijver heeft hem thuis vergeten.", "De baas heeft hem opgegeten.", "Hij was door de wind weggewaaid."], answer: 0,
        why: ["Goed: 我的午饭被同事吃了。", "De lunch lag in de koelkast op het werk.", "De baas riep de schrijver alleen naar zijn kantoor.", "De wind maakte de paraplu kapot, niet de lunch."] },
      { type: "mc", q: "Waarom kon de schrijver de fiets niet vinden?",
        options: ["Hij was die ochtend lopend gekomen.", "Een dief had hem gestolen.", "Een collega had hem meegenomen.", "De wind had hem omgeblazen."], answer: 0,
        why: ["Goed: 今天早上我是走路来上班的。", "Dat dacht hij eerst, maar het was niet zo.", "De collega at alleen de lunch op.", "De wind maakte de paraplu kapot."] },
      { type: "mc", q: "我又被老板叫到了办公室。Wat laat 被 hier zien?",
        options: ["De baas riep de schrijver: het overkwam hem.", "De schrijver riep de baas.", "De schrijver ging zelf naar het kantoor.", "De baas werd naar het kantoor geroepen."], answer: 0,
        why: ["Goed: eerst wie het overkomt (我), dan 被 + wie het deed (老板).", "De rollen zijn omgedraaid: na 被 staat wie het deed.", "被 laat zien dat iemand anders het deed.", "Het kantoor is het doel; de baas is degene die roept."] }
    ]
  },
  questions: [
    { type: "mc", q: "Maak er een 被-zin van: 小偷偷了我的钱包。",
      options: ["我的钱包被小偷偷了。", "小偷被我的钱包偷了。", "我的钱包被偷小偷了。", "被小偷我的钱包偷了。"], answer: 0,
      why: ["Goed: wat het overkomt + 被 + wie + werkwoord + 了.", "Nu steelt de portemonnee de dief: de rollen zijn omgedraaid.", "Wie het deed staat direct na 被, vóór het werkwoord.", "De zin begint met wat het overkomt, niet met 被."] },
    { type: "mc", q: "\"Hij is niet bedrogen.\"",
      options: ["他没被骗。", "他被没骗。", "他不被骗了。", "他被骗没。"], answer: 0,
      why: ["Goed: 没 vóór 被.", "没 staat vóór 被, niet erna.", "Voor iets wat (niet) gebeurd is: 没, en dan zonder 了.", "没 staat nooit achteraan."] },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn taart is door mijn zusje opgegeten.\"",
      tokens: [["我的", "wǒ de"], ["蛋糕", "dàngāo"], ["被", "bèi"], ["妹妹", "mèimei"], ["吃了", "chī le"]] },
    { type: "mc", q: "Welke zin klopt?",
      options: ["窗户被风吹开了。", "窗户被风吹。", "窗户被吹风开了。", "风被窗户吹开了。"], answer: 0,
      why: ["Goed: wat het overkomt + 被 + 风 + 吹开了.", "Na het werkwoord moet nog iets komen (开了).", "Wie het deed (风) staat vóór het werkwoord.", "Nu blaast het raam de wind open: de rollen zijn omgedraaid."] },
    { type: "mc", q: "Welke zin klinkt NIET natuurlijk in het Chinees?",
      options: ["这本书被写得很好。", "这本书写得很好。", "我的钱包被偷了。", "饭做好了。"], answer: 0,
      why: ["Goed: bij een neutraal of goed resultaat gebruik je geen 被. Zeg: 这本书写得很好。", "Dit klopt: geen 被 nodig voor \"goed geschreven\".", "Dit klopt: iets vervelends dat de portemonnee overkwam.", "Dit klopt: \"het eten is klaar\" zonder 被."] },
    { type: "mc", q: "Je vertelt een vriend over je fiets. Welke zin klopt in spreektaal?",
      options: ["我的自行车让人偷了。", "我的自行车让偷了。", "我的自行车人让偷了。", "我的自行车让人偷。"], answer: 0,
      why: ["Goed: 让 + 人 + werkwoord + 了.", "Na 让 moet staan wie het deed. Weet je dat niet, zeg 人.", "让 staat vóór wie het deed, net als 被.", "Na het werkwoord moet nog iets komen, zoals 了."] },
    { type: "mc", q: "我___弟弟的电脑弄坏了。(Ik heb de computer van mijn broertje kapotgemaakt.)",
      options: ["把", "被", "比", "从"], answer: 0,
      why: ["Goed: wie het doet (我) staat voorop, dus 把.", "Met 被 zou de computer van mijn broertje míj kapotmaken.", "比 is voor vergelijken.", "从 betekent \"vanaf\"."] },
    { type: "fill", q: "他___被妈妈发现。(Hij is niet door zijn moeder betrapt.)", answers: ["没"],
      hint: "Welk woord ontkent iets wat (niet) gebeurd is?", why: "没 staat vóór 被: 他没被妈妈发现。" },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn paraplu is door iemand anders meegenomen.\"",
      tokens: [["我的伞", "wǒ de sǎn"], ["被", "bèi"], ["别人", "biérén"], ["拿走了", "názǒu le"]] },
    { type: "open", q: "Vertaal: \"Mijn telefoon is gestolen.\"", model: ["我的手机被偷了。", "我的手机被人偷了。", "我的手机让人偷了。"],
      tip: "Check: eerst 我的手机, dan 被 (of 让/叫 + 人), dan 偷了. Na 让/叫 moet 人 staan." },
    { type: "open", q: "Vertel iets vervelends dat jou overkwam, met 被.", model: ["我的伞被别人拿走了。", "我的手机被我弄坏了。"],
      tip: "Check: eerst wat het overkwam, dan 被, dan wie, dan werkwoord + iets erachter." }
  ],
  review: [
    { type: "mc", q: "\"Mijn boek is door een vriend meegenomen.\"",
      options: ["我的书被朋友拿走了。", "朋友被我的书拿走了。", "我的书被拿走朋友了。", "我的书朋友被拿走了。"], answer: 0,
      why: ["Goed.", "De rollen zijn omgedraaid: nu neemt het boek de vriend mee.", "Wie het deed staat vóór het werkwoord.", "被 staat direct vóór wie het deed."] },
    { type: "mc", q: "杯子___我打破了。",
      options: ["被", "把", "比", "跟"], answer: 0,
      why: ["Goed: het glas staat voorop, dus 被.", "Met 把 komt wie het doet voorop: 我把杯子打破了。", "比 is voor vergelijken.", "跟 betekent \"met\"."] },
    { type: "mc", q: "\"De brief is al geschreven.\"",
      options: ["信已经写好了。", "信已经被写好了。", "信写已经好了。", "已经信写好了。"], answer: 0,
      why: ["Goed: een neutraal resultaat, dus geen 被.", "Bij een neutraal resultaat klinkt 被 onnatuurlijk.", "写好 hoort bij elkaar; 已经 staat vóór het werkwoord.", "Begin met het ding: 信, dan 已经."] }
  ]
})
