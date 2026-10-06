({
  id: "13", slug: "genju", title: "根据 en 按照", sub: "Volgens, op basis van",
  canDo: "Je kunt nu zeggen waarop je een conclusie baseert (根据) en volgens welke regel of welk plan je iets doet (按照).",
  guess: {
    q: "\"Volgens de weersvoorspelling gaat het morgen regenen.\" Welke zin klopt, denk je?",
    options: ["根据天气预报，明天会下雨。", "天气预报根据，明天会下雨。", "对天气预报来说，明天会下雨。", "关于天气预报，明天会下雨。"], answer: 0,
    why: ["Goed: 根据 + bron, en dan wat je daaruit weet.", "根据 staat vóór de bron, niet erachter.", "对……来说 betekent \"voor iemand\", niet \"volgens\".", "关于 betekent \"over\": dan gaat het óver de weersvoorspelling."]
  },
  problem: "In het Nederlands zeg je \"volgens\" bij een bron (\"volgens het nieuws\") en bij een regel (\"volgens plan\"). Het Chinees maakt verschil. 根据: je baseert een conclusie of besluit op feiten of een bron. 按照: je doet iets zoals een regel, plan of eis het voorschrijft.",
  pattern: [
    { l: "根据", v: "根据", c: 1, key: true }, { l: "bron", v: "天气预报", c: 2 }, { l: "", v: "，", c: 3 },
    { l: "wanneer", v: "明天", c: 4 }, { l: "conclusie", v: "会下雨", c: 5 }
  ],
  patternCap: "根据 + feiten / bron, + conclusie of besluit | 按照 + regel / plan / eis + handeling | 依照 (schrijftaal), 按 (kort)",
  rules: [
    "根据 en 按照 + naamwoordgroep staan aan het begin van de zin of direct vóór het werkwoord.",
    "根据 + feiten, gegevens, bronnen, ervaring: 根据调查, 根据我的经验.",
    "按照 + regels, plannen, eisen, volgorde: 按照规定, 按照计划, 按照顺序.",
    "根据 is ook een zelfstandig naamwoord (\"grond, basis\"): 你这么说有什么根据？ Met 按照 kan dat niet.",
    "按 is een korte vorm van 按照, vooral in vaste combinaties: 按时 (op tijd). 依照 is formeel, voor wetten en officiële teksten."
  ],
  pitfall: "Zet 根据 en 按照 vóór het werkwoord, niet erachter zoals in het Nederlands: 我们按照计划出发, niet 我们出发按照计划.",
  examples: [
    { cn: "根据天气预报，明天会下大雨。", py: "Gēnjù tiānqì yùbào, míngtiān huì xià dà yǔ.", nl: "Volgens de weersvoorspelling gaat het morgen hard regenen." },
    { cn: "这部电影是根据一个真实的故事拍的。", py: "Zhè bù diànyǐng shì gēnjù yí ge zhēnshí de gùshi pāi de.", nl: "Deze film is gebaseerd op een waargebeurd verhaal." },
    { cn: "请按照老师的要求写作业。", py: "Qǐng ànzhào lǎoshī de yāoqiú xiě zuòyè.", nl: "Maak je huiswerk volgens de eisen van de leraar." },
    { cn: "我们按照计划，下个月去上海。", py: "Wǒmen ànzhào jìhuà, xià ge yuè qù Shànghǎi.", nl: "Volgens plan gaan we volgende maand naar Shanghai." }
  ],
  nuance: [
    { h: "根据 of 按照?",
      p: "Gebruik 根据 als je iets afleidt of besluit op basis van informatie: een onderzoek, cijfers, het nieuws, ervaring. Gebruik 按照 als je een handeling uitvoert zoals voorgeschreven: een regel, een plan, een volgorde. Bij 规定 en 要求 hoor je allebei, maar 按照 legt de nadruk op het opvolgen.",
      ex: [
        { cn: "根据大家的意见，我们改了计划。", py: "Gēnjù dàjiā de yìjiàn, wǒmen gǎile jìhuà.", nl: "Op basis van ieders mening hebben we het plan aangepast." },
        { cn: "按照新的计划，我们明天出发。", py: "Ànzhào xīn de jìhuà, wǒmen míngtiān chūfā.", nl: "Volgens het nieuwe plan vertrekken we morgen." }
      ] },
    { h: "根据 als zelfstandig naamwoord",
      p: "根据 kan ook \"grond, basis, bewijs\" betekenen. Dan staat het na 有 of 没有. Zo vraag je waarop iemand een bewering baseert. 按照 is alleen een voorzetsel en kan dit niet.",
      ex: [
        { cn: "你这么说，有什么根据？", py: "Nǐ zhème shuō, yǒu shénme gēnjù?", nl: "Waarop baseer je dat?" }
      ] },
    { h: "Register: 按 en 依照",
      p: "In spreektaal en vaste combinaties hoor je vaak het korte 按: 按时 (op tijd), 按顺序 (op volgorde). 依照 betekent hetzelfde als 按照, maar is formeel. Je ziet het in wetteksten en officiële regels. Gebruik 依照 niet in een gewoon gesprek.",
      ex: [
        { cn: "请按时吃药。", py: "Qǐng ànshí chī yào.", nl: "Neem je medicijnen op tijd in." },
        { cn: "依照法律，开车的时候不能喝酒。", py: "Yīzhào fǎlǜ, kāichē de shíhou bù néng hē jiǔ.", nl: "Volgens de wet mag je niet drinken als je rijdt." }
      ] }
  ],
  mistakes: [
    { wrong: "我们出发按照计划。", right: "我们按照计划出发。", why: "按照 + plan staat vóór het werkwoord, niet erachter zoals in het Nederlands." },
    { wrong: "你这么说有什么按照？", right: "你这么说有什么根据？", why: "Alleen 根据 kan een zelfstandig naamwoord zijn (\"grond, basis\")." },
    { wrong: "按照天气预报，明天会下雨。", right: "根据天气预报，明天会下雨。", why: "Een voorspelling is een bron waaruit je iets afleidt. Daarvoor is 根据 het natuurlijke woord." },
    { wrong: "请按照时吃药。", right: "请按时吃药。", why: "\"Op tijd\" is de vaste combinatie 按时, met het korte 按." }
  ],
  vocab: [
    ["根据", "gēnjù", "volgens, op basis van; grond, basis"], ["按照", "ànzhào", "volgens (regel, plan)"], ["依照", "yīzhào", "volgens (formeel)"],
    ["天气预报", "tiānqì yùbào", "weersvoorspelling"], ["计划", "jìhuà", "plan; plannen"], ["要求", "yāoqiú", "eis; eisen"],
    ["规定", "guīdìng", "regel, voorschrift"], ["调查", "diàochá", "onderzoek, enquête"], ["结果", "jiéguǒ", "resultaat, uitkomst"], ["经验", "jīngyàn", "ervaring"]
  ],
  dialogue: [
    ["A", "明天我们还去爬山吗？", "Míngtiān wǒmen hái qù pá shān ma?", "Gaan we morgen nog steeds de berg op?"],
    ["B", "根据天气预报，明天下午有大雨。", "Gēnjù tiānqì yùbào, míngtiān xiàwǔ yǒu dà yǔ.", "Volgens de weersvoorspelling regent het morgenmiddag hard."],
    ["A", "可是按照计划，我们明天上午就出发。", "Kěshì ànzhào jìhuà, wǒmen míngtiān shàngwǔ jiù chūfā.", "Maar volgens plan vertrekken we morgenochtend al."],
    ["B", "那我们早点儿出发，中午以前下山。", "Nà wǒmen zǎo diǎnr chūfā, zhōngwǔ yǐqián xià shān.", "Dan vertrekken we wat vroeger en zijn we voor de middag weer beneden."],
    ["A", "好主意。根据我的经验，山上的天气变得很快。", "Hǎo zhǔyi. Gēnjù wǒ de jīngyàn, shān shang de tiānqì biàn de hěn kuài.", "Goed idee. Uit ervaring weet ik dat het weer in de bergen snel omslaat."],
    ["B", "那我们都带上雨衣吧。", "Nà wǒmen dōu dàishang yǔyī ba.", "Laten we dan allemaal een regenjas meenemen."]
  ],
  reading: {
    title: "一次调查",
    lines: [
      { cn: "最近，我们学校做了一次关于学生睡眠的调查。", py: "Zuìjìn, wǒmen xuéxiào zuòle yí cì guānyú xuésheng shuìmián de diàochá.", nl: "Onlangs deed onze school een onderzoek naar de slaap van leerlingen." },
      { cn: "根据调查结果，很多学生每天睡不到七个小时。", py: "Gēnjù diàochá jiéguǒ, hěn duō xuésheng měi tiān shuì bú dào qī ge xiǎoshí.", nl: "Uit de resultaten bleek dat veel leerlingen minder dan zeven uur per nacht slapen." },
      { cn: "医生说，按照健康的标准，学生每天应该睡八个小时左右。", py: "Yīshēng shuō, ànzhào jiànkāng de biāozhǔn, xuésheng měi tiān yīnggāi shuì bā ge xiǎoshí zuǒyòu.", nl: "Volgens de gezondheidsnorm, zei een arts, moeten leerlingen ongeveer acht uur per nacht slapen." },
      { cn: "根据这些情况，学校决定做一些改变。", py: "Gēnjù zhèxiē qíngkuàng, xuéxiào juédìng zuò yìxiē gǎibiàn.", nl: "Op basis daarvan besloot de school een paar dingen te veranderen." },
      { cn: "按照新的规定，早上的第一节课从八点改到八点半。", py: "Ànzhào xīn de guīdìng, zǎoshang de dì yī jié kè cóng bā diǎn gǎi dào bā diǎn bàn.", nl: "Volgens de nieuwe regel begint het eerste lesuur niet meer om acht uur, maar om half negen." },
      { cn: "老师们也要按照新的要求，少留一点儿作业。", py: "Lǎoshīmen yě yào ànzhào xīn de yāoqiú, shǎo liú yìdiǎnr zuòyè.", nl: "Ook moeten de leraren volgens de nieuwe eisen wat minder huiswerk opgeven." },
      { cn: "一个月以后，学生们都觉得上课的时候精神好多了。", py: "Yí ge yuè yǐhòu, xuéshengmen dōu juéde shàngkè de shíhou jīngshen hǎo duō le.", nl: "Na een maand voelden alle leerlingen zich in de les veel frisser." },
      { cn: "这说明，有根据的决定才是好的决定。", py: "Zhè shuōmíng, yǒu gēnjù de juédìng cái shì hǎo de juédìng.", nl: "Dit laat zien dat een goed onderbouwd besluit pas een goed besluit is." }
    ],
    questions: [
      { type: "mc", q: "Wat bleek uit het onderzoek?",
        options: ["Veel leerlingen slapen minder dan zeven uur.", "Veel leerlingen slapen meer dan acht uur.", "De leerlingen krijgen te weinig huiswerk.", "De lessen beginnen te laat."], answer: 0,
        why: ["Goed: 很多学生每天睡不到七个小时。", "Acht uur is de norm van de arts, niet de uitkomst.", "Er was juist te veel huiswerk: 少留一点儿作业.", "De lessen begonnen juist te vroeg."] },
      { type: "mc", q: "Wat veranderde de school?",
        options: ["Het eerste lesuur begint om half negen en er is minder huiswerk.", "Het eerste lesuur begint om acht uur.", "De leerlingen moeten meer slapen op school.", "Er zijn geen lessen meer in de ochtend."], answer: 0,
        why: ["Goed: 从八点改到八点半 en 少留一点儿作业.", "Acht uur was de oude tijd.", "Slapen op school staat niet in de tekst.", "De ochtendlessen blijven, alleen later."] },
      { type: "mc", q: "\"按照新的规定\": waarom staat hier 按照 en niet 根据?",
        options: ["De school voert iets uit volgens een regel.", "De school trekt een conclusie uit gegevens.", "De zin noemt het onderwerp van een gesprek.", "De zin noemt voor wie iets belangrijk is."], answer: 0,
        why: ["Goed: 按照 + regel + handeling: de les begint later, zoals de regel voorschrijft.", "Een conclusie uit gegevens is 根据调查结果, eerder in de tekst.", "Een onderwerp noem je met 关于.", "Voor wie iets geldt, zeg je met 对……来说."] }
    ]
  },
  questions: [
    { type: "mc", q: "___天气预报，今天不会下雨。(Volgens de weersvoorspelling regent het vandaag niet.)",
      options: ["根据", "关于", "对于", "为了"], answer: 0,
      why: ["Goed: 根据 + bron, dan wat je daaruit weet.", "关于 betekent \"over\": een onderwerp, geen bron.", "对于 noemt waarop een houding gericht is, geen bron.", "为了 betekent \"om ... te\": een doel."] },
    { type: "mc", q: "请大家___老师的要求做练习。(Doe de oefeningen volgens de eisen van de leraar.)",
      options: ["按照", "关于", "对", "为了"], answer: 0,
      why: ["Goed: 按照 + eis + handeling.", "关于 betekent \"over\" en past niet bij het opvolgen van een eis.", "对 betekent \"tegenover\", niet \"volgens\".", "为了 noemt een doel: \"om de eisen ...\" past hier niet."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["我们出发按照计划。", "我们按照计划出发。", "按照计划，我们明天出发。", "根据计划，我们明天出发。"], answer: 0,
      why: ["Goed: dit is fout. 按照 + plan staat vóór het werkwoord.", "Deze klopt: 按照计划 vóór 出发.", "Deze klopt: 按照计划 aan het begin van de zin.", "Deze klopt: ook 根据计划 komt voor."] },
    { type: "order", q: "Zet in de goede volgorde: \"Stap allemaal op volgorde in, alsjeblieft.\"",
      tokens: [["请", "qǐng"], ["大家", "dàjiā"], ["按照", "ànzhào"], ["顺序", "shùnxù"], ["上车", "shàng chē"]],
      alt: ["大家请按照顺序上车"] },
    { type: "fill", q: "你说他是小偷，有什么___？(Je zegt dat hij een dief is. Waarop baseer je dat?)", answers: ["根据", "证据"],
      hint: "Welk woord uit deze les kan ook een zelfstandig naamwoord zijn?", why: "根据 betekent hier \"grond, basis\". 按照 kan geen zelfstandig naamwoord zijn." },
    { type: "order", q: "Zet in de goede volgorde: \"Deze film is gebaseerd op een waargebeurd verhaal.\"",
      tokens: [["这部电影", "zhè bù diànyǐng"], ["是", "shì"], ["根据", "gēnjù"], ["一个真实的故事", "yí ge zhēnshí de gùshi"], ["拍的", "pāi de"]] },
    { type: "mc", q: "按照规定，考试的时候不能用手机。 Wat betekent 按照规定?",
      options: ["Volgens de regels", "Over de regels", "Ondanks de regels", "Voor de regels"], answer: 0,
      why: ["Goed: 按照 + regel = volgens de regel.", "\"Over de regels\" zou 关于规定 zijn.", "\"Ondanks\" is 尽管 of 虽然.", "\"Voor\" (vanuit een standpunt) is 对……来说."] },
    { type: "mc", q: "根据调查结果，大多数人喜欢在网上买东西。 Waarom staat hier 根据?",
      options: ["De zin trekt een conclusie uit gegevens.", "De zin volgt een regel op.", "De zin noemt het onderwerp van het onderzoek.", "De zin noemt voor wie het onderzoek belangrijk is."], answer: 0,
      why: ["Goed: 根据 + gegevens, en dan wat je daaruit weet.", "Een regel opvolgen is 按照 + handeling.", "Het onderwerp noem je met 关于.", "Voor wie iets geldt, zeg je met 对……来说."] },
    { type: "mc", q: "\"Neem je medicijnen op tijd in.\"",
      options: ["请按时吃药。", "请按照时吃药。", "请根据时吃药。", "请吃药按时。"], answer: 0,
      why: ["Goed: 按时 is een vaste combinatie: op tijd.", "\"Op tijd\" is altijd het korte 按时.", "根据 vraagt een bron of gegevens, en 根据时 bestaat niet.", "按时 staat vóór het werkwoord."] },
    { type: "mc", q: "\"Hij heeft het werk volgens de eisen van de klant afgemaakt.\"",
      options: ["他按照客户的要求完成了工作。", "他按照完成了客户的要求工作。", "他完成了工作按照客户的要求。", "他关于客户的要求完成了工作。"], answer: 0,
      why: ["Goed: 按照 + eis vóór het werkwoord.", "Na 按照 komt direct de eis, niet het werkwoord.", "按照 + eis staat vóór het werkwoord, niet erachter.", "关于 betekent \"over\", niet \"volgens\"."] },
    { type: "open", q: "Vertaal: \"Volgens de weersvoorspelling wordt het morgen heel koud.\"", model: ["根据天气预报，明天会很冷。", "根据天气预报，明天特别冷。"],
      tip: "Check: 根据 + 天气预报 aan het begin. Een bron vraagt 根据, niet 按照." },
    { type: "open", q: "Vertaal: \"Doe het volgens het plan.\"", model: ["请按照计划做。", "按照计划去做吧。"],
      tip: "Check: 按照 + 计划 vóór het werkwoord 做." }
  ],
  review: [
    { type: "mc", q: "___地图，我们应该往左走。(Volgens de kaart moeten we naar links.)",
      options: ["根据", "关于", "对于", "为了"], answer: 0,
      why: ["Goed: de kaart is een bron waaruit je iets afleidt.", "关于 betekent \"over\".", "对于 noemt waarop een houding gericht is.", "为了 noemt een doel."] },
    { type: "mc", q: "\"Je moet volgens de regels parkeren.\"",
      options: ["你要按照规定停车。", "你要停车按照规定。", "你要关于规定停车。", "你要按照停车规定。"], answer: 0,
      why: ["Goed: 按照 + regel vóór het werkwoord.", "按照 + regel staat vóór het werkwoord.", "关于 betekent \"over\", niet \"volgens\".", "Hier ontbreekt het werkwoord: 停车 hoort na 按照规定."] },
    { type: "mc", q: "他这么说没有___。(Hij zegt dat zonder enige grond.)",
      options: ["根据", "按照", "按时", "依照"], answer: 0,
      why: ["Goed: 根据 kan een zelfstandig naamwoord zijn: grond, basis.", "按照 is alleen een voorzetsel.", "按时 betekent \"op tijd\".", "依照 is alleen een (formeel) voorzetsel."] }
  ]
})
