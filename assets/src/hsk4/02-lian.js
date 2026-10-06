({
  id: "02", slug: "lian", title: "连……都 / 也", sub: "Zelfs ... (niet)",
  canDo: "Je kunt nu met 连 ... 都 / 也 een extreem geval benadrukken: zelfs dit, zelfs hij.",
  guess: {
    q: "他连水都没喝。Wat betekent dit, denk je?",
    options: ["Hij heeft zelfs geen water gedronken.", "Hij heeft alleen water gedronken.", "Hij heeft al het water opgedronken.", "Hij heeft ook water gedronken."], answer: 0,
    why: ["Goed: 连 ... 都 + 没 = zelfs niet.", "连 betekent \"zelfs\", niet \"alleen\".", "都 betekent hier niet \"alles\". En 没 zegt dat hij niet dronk.", "Er staat 没: hij heeft het niet gedronken."]
  },
  problem: "Soms wil je laten zien hoe extreem iets is. \"Hij had het zo druk dat hij zelfs niet at.\" Je noemt dan het meest onverwachte geval. In het Nederlands zet je \"zelfs\" of \"niet eens\" ergens in de zin. In het Chinees zet je 连 (lián) vóór dat geval. Daarna komt 都 of 也.",
  pattern: [
    { l: "wie", v: "他", c: 1 }, { l: "连", v: "连", c: 2, key: true }, { l: "geval", v: "饭", c: 3 },
    { l: "都 / 也", v: "都", c: 4, key: true }, { l: "werkwoord", v: "没吃", c: 5 }
  ],
  patternCap: "Wie + 连 + extreem geval + 都 / 也 + (没 / 不) + werkwoord · Ook: 连 + wie + 都 + werkwoord",
  rules: [
    "Na 连 komt het meest onverwachte geval.",
    "都 of 也 staat direct vóór het werkwoord, of vóór 不 / 没.",
    "连 kan ook vóór het onderwerp staan: 连孩子都知道。",
    "Vaak met een ontkenning: 他连一分钟都没休息。",
    "Na 没 valt 了 weg: 他连饭都没吃, niet 没吃了."
  ],
  pitfall: "Vergeet 都 of 也 niet. 他连饭没吃 is fout. Zeg 他连饭都没吃。",
  examples: [
    { cn: "连孩子都知道这件事。", py: "Lián háizi dōu zhīdào zhè jiàn shì.", nl: "Zelfs kinderen weten dit." },
    { cn: "他忙得连饭都没吃。", py: "Tā máng de lián fàn dōu méi chī.", nl: "Hij had het zo druk dat hij niet eens gegeten heeft." },
    { cn: "我连一个字也看不懂。", py: "Wǒ lián yí ge zì yě kàn bu dǒng.", nl: "Ik begrijp er niet eens één karakter van." },
    { cn: "这个问题连老师也不会回答。", py: "Zhège wèntí lián lǎoshī yě bú huì huídá.", nl: "Zelfs de leraar kan deze vraag niet beantwoorden." }
  ],
  nuance: [
    { h: "连……都 of 甚至?",
      p: "Beide betekenen \"zelfs\". 连 staat vóór een woord en heeft 都 of 也 nodig. 甚至 is een bijwoord: het staat vóór het werkwoord of vóór een heel zinsdeel, zonder 都. 甚至 klinkt iets formeler en komt vaak aan het eind van een opsomming. Je kunt ze ook samen gebruiken: 甚至连……都.",
      ex: [
        { cn: "他忙得连饭都没吃。", py: "Tā máng de lián fàn dōu méi chī.", nl: "Hij had het zo druk dat hij niet eens at." },
        { cn: "他很忙，甚至没时间吃饭。", py: "Tā hěn máng, shènzhì méi shíjiān chī fàn.", nl: "Hij is heel druk, hij heeft zelfs geen tijd om te eten." }
      ] },
    { h: "都 of 也?",
      p: "In bevestigende zinnen gebruik je meestal 都: 连孩子都知道。 In ontkennende zinnen kunnen 都 en 也 allebei. 也 hoor je dan heel vaak, vooral met 一 + maatwoord: 我连一分钱也没有。",
      ex: [
        { cn: "我连一分钱也没有。", py: "Wǒ lián yì fēn qián yě méiyǒu.", nl: "Ik heb niet eens één cent." }
      ] },
    { h: "连 + werkwoord + 都没 + werkwoord",
      p: "Na 连 kan ook een werkwoord staan. Je herhaalt het dan na 都没. Zo zeg je dat iemand de kleinste stap niet eens deed. Dit is heel gewoon in de spreektaal.",
      ex: [
        { cn: "他连看都没看就走了。", py: "Tā lián kàn dōu méi kàn jiù zǒu le.", nl: "Hij keek er niet eens naar en ging weg." },
        { cn: "这个菜我连听都没听说过。", py: "Zhège cài wǒ lián tīng dōu méi tīngshuōguo.", nl: "Van dit gerecht heb ik nog nooit gehoord." }
      ] }
  ],
  mistakes: [
    { wrong: "他连饭没吃。", right: "他连饭都没吃。", why: "连 heeft altijd 都 of 也 nodig, direct vóór het werkwoord of 没." },
    { wrong: "他都连饭没吃。", right: "他连饭都没吃。", why: "连 staat vóór het geval, 都 erna." },
    { wrong: "连孩子知道都。", right: "连孩子都知道。", why: "都 staat vóór het werkwoord, nooit aan het eind." },
    { wrong: "他忙得甚至饭都没吃。", right: "他忙得连饭都没吃。", why: "Na 甚至 komt geen los voorwerp met 都. Gebruik 连 vóór 饭, of zeg 甚至连饭都没吃." }
  ],
  vocab: [
    ["连……都 / 也", "lián……dōu / yě", "zelfs ... (niet)"], ["甚至", "shènzhì", "zelfs"], ["加班", "jiābān", "overwerken"],
    ["周末", "zhōumò", "weekend"], ["邻居", "línjū", "buurman, buren"], ["打招呼", "dǎ zhāohu", "groeten"],
    ["辛苦", "xīnkǔ", "zwaar, vermoeiend"], ["老板", "lǎobǎn", "baas"], ["厨房", "chúfáng", "keuken"], ["发现", "fāxiàn", "ontdekken, merken"]
  ],
  dialogue: [
    ["A", "你最近怎么样？", "Nǐ zuìjìn zěnmeyàng?", "Hoe gaat het de laatste tijd?"],
    ["B", "别提了，天天加班，连周末都要工作。", "Bié tí le, tiāntiān jiābān, lián zhōumò dōu yào gōngzuò.", "Hou op. Elke dag overwerken. Zelfs in het weekend moet ik werken."],
    ["A", "那你有时间休息吗？", "Nà nǐ yǒu shíjiān xiūxi ma?", "Heb je dan nog tijd om uit te rusten?"],
    ["B", "没有。我连跟邻居打招呼的时间都没有。", "Méiyǒu. Wǒ lián gēn línjū dǎ zhāohu de shíjiān dōu méiyǒu.", "Nee. Ik heb niet eens tijd om de buren te groeten."],
    ["A", "太辛苦了！你得跟老板说一说。", "Tài xīnkǔ le! Nǐ děi gēn lǎobǎn shuō yi shuō.", "Wat zwaar! Je moet het eens met je baas bespreken."]
  ],
  reading: {
    title: "我的室友",
    lines: [
      { cn: "我的室友小王非常喜欢学习。", py: "Wǒ de shìyǒu Xiǎo Wáng fēicháng xǐhuan xuéxí.", nl: "Mijn kamergenoot Xiao Wang houdt heel erg van studeren." },
      { cn: "他每天早上六点起床，连周末也不睡懒觉。", py: "Tā měi tiān zǎoshang liù diǎn qǐchuáng, lián zhōumò yě bú shuì lǎnjiào.", nl: "Hij staat elke ochtend om zes uur op. Zelfs in het weekend slaapt hij niet uit." },
      { cn: "可是他不会做饭，连鸡蛋都不会炒。", py: "Kěshì tā bú huì zuò fàn, lián jīdàn dōu bú huì chǎo.", nl: "Maar hij kan niet koken. Hij kan niet eens een ei bakken." },
      { cn: "他也不太关心房间，桌子上的东西多得连电脑都找不到。", py: "Tā yě bú tài guānxīn fángjiān, zhuōzi shang de dōngxi duō de lián diànnǎo dōu zhǎo bu dào.", nl: "Hij geeft ook weinig om zijn kamer. Er ligt zoveel op zijn bureau dat hij zelfs zijn computer niet kan vinden." },
      { cn: "上个星期，他考试考得很好，老师都很吃惊。", py: "Shàng ge xīngqī, tā kǎoshì kǎo de hěn hǎo, lǎoshī dōu hěn chījīng.", nl: "Vorige week deed hij een examen heel goed. Zelfs de leraren waren verbaasd." },
      { cn: "那天晚上，他第一次走进了厨房。", py: "Nà tiān wǎnshang, tā dì yī cì zǒujìnle chúfáng.", nl: "Die avond liep hij voor het eerst de keuken in." },
      { cn: "他说要给我做一个菜，我连话都说不出来了。", py: "Tā shuō yào gěi wǒ zuò yí ge cài, wǒ lián huà dōu shuō bu chūlái le.", nl: "Hij zei dat hij een gerecht voor me ging maken. Ik kon niet eens meer iets zeggen." },
      { cn: "一个小时以后，他笑着说：\"我们还是出去吃吧。\"", py: "Yí ge xiǎoshí yǐhòu, tā xiàozhe shuō: \"Wǒmen háishi chūqu chī ba.\"", nl: "Een uur later zei hij lachend: \"Laten we toch maar buiten de deur eten.\"" }
    ],
    questions: [
      { type: "mc", q: "Wat doet Xiao Wang in het weekend?",
        options: ["Hij staat ook vroeg op.", "Hij slaapt lang uit.", "Hij kookt voor zijn kamergenoot.", "Hij ruimt zijn bureau op."], answer: 0,
        why: ["Goed: 连周末也不睡懒觉。", "De tekst zegt het omgekeerde: 不睡懒觉.", "Hij kan niet koken: 连鸡蛋都不会炒。", "Zijn bureau is juist heel vol."] },
      { type: "mc", q: "Hoe liep het koken af?",
        options: ["Ze gingen toch buiten de deur eten.", "Hij maakte een lekker gerecht.", "Hij bakte een ei.", "De leraar kwam helpen."], answer: 0,
        why: ["Goed: 我们还是出去吃吧。", "Er staat niet dat het gerecht lukte.", "Hij kan niet eens een ei bakken.", "De leraar hoort bij het examen, niet bij het koken."] },
      { type: "mc", q: "他连鸡蛋都不会炒。Wat wil de schrijver zeggen?",
        options: ["Hij kan heel slecht koken: zelfs het makkelijkste lukt niet.", "Hij kan alleen een ei bakken.", "Hij houdt niet van eieren.", "Hij kan alle gerechten met ei maken."], answer: 0,
        why: ["Goed: 连 noemt het makkelijkste geval. Zelfs dat kan hij niet.", "连 betekent \"zelfs\", niet \"alleen\".", "Het gaat om kunnen (会), niet om lekker vinden.", "Er staat 不会: hij kan het niet."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Zelfs mijn moeder weet het.\"",
      options: ["连我妈妈都知道。", "连我妈妈知道。", "我妈妈连都知道。", "连都我妈妈知道。"], answer: 0,
      why: ["Goed: 连 + wie + 都 + werkwoord.", "Na 连 ... moet 都 of 也 komen.", "Na 连 komt eerst het geval (我妈妈), daarna pas 都.", "都 staat vóór het werkwoord, niet direct na 连."] },
    { type: "mc", q: "\"Hij was zo moe dat hij zonder te eten ging slapen.\" 他太累了，连饭___没吃就睡了。",
      options: ["都", "才", "就", "很"], answer: 0,
      why: ["Goed: 连 ... 都 + 没.", "连 vraagt om 都 of 也. 才 (\"pas\") past niet bij 连.", "就 hoort niet bij 连; het staat al later in de zin.", "很 is \"heel\" en past niet na 连 ... ."] },
    { type: "order", q: "Zet in de goede volgorde: \"Zelfs de leraar weet het niet.\"",
      tokens: [["连", "lián"], ["老师", "lǎoshī"], ["也", "yě"], ["不", "bù"], ["知道", "zhīdào"]] },
    { type: "mc", q: "Wat betekent: 这个汉字连我女儿都认识。",
      options: ["Zelfs mijn dochter kent dit karakter.", "Alleen mijn dochter kent dit karakter.", "Mijn dochter kent alle karakters.", "Zelfs mijn dochter kent dit karakter niet."], answer: 0,
      why: ["Goed: 连 + 我女儿 + 都 = zelfs mijn dochter.", "连 betekent \"zelfs\", niet \"alleen\".", "都 betekent hier niet \"alle\"; het gaat om dit ene karakter.", "Er staat geen 不 of 没 in de zin."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["他甚至连饭没吃。", "他甚至没吃饭。", "他连饭都没吃。", "他甚至连饭都没吃。"], answer: 0,
      why: ["Goed gezien: met 连 moet 都 of 也 komen, ook als 甚至 erbij staat.", "Dit klopt: 甚至 staat vóór het werkwoord, zonder 都.", "Dit klopt: 连 + geval + 都 + 没.", "Dit klopt: 甚至 en 连……都 kunnen samen."] },
    { type: "mc", q: "\"Hij keek er niet eens naar.\"",
      options: ["他连看都没看。", "他连看没都看。", "他都连看没看。", "他连看都没看了。"], answer: 0,
      why: ["Goed: 连 + werkwoord + 都没 + werkwoord.", "都 staat vóór 没, niet erna.", "连 komt eerst, dan het werkwoord, dan 都.", "Na 没 valt 了 weg."] },
    { type: "fill", q: "这件事___我爸爸都不知道。(Zelfs mijn vader weet dit niet.)", answers: ["连"],
      hint: "Welk woord staat vóór het onverwachte geval?", why: "连 + 我爸爸 + 都 + 不知道: zelfs mijn vader niet." },
    { type: "order", q: "Zet in de goede volgorde: \"Ik heb niet eens één cent.\"",
      tokens: [["我", "wǒ"], ["连", "lián"], ["一分钱", "yì fēn qián"], ["也", "yě"], ["没有", "méiyǒu"]],
      alt: ["连一分钱我也没有"] },
    { type: "mc", q: "Je schrijft een formeel verslag: \"Sommige studenten slapen slecht, en hebben zelfs gezondheidsproblemen.\" Welk woord past het best?",
      options: ["有些学生睡不好，甚至有健康问题。", "有些学生睡不好，连有健康问题。", "有些学生睡不好，都有健康问题。", "有些学生睡不好，连健康问题。"], answer: 0,
      why: ["Goed: 甚至 staat vóór een heel zinsdeel en past bij een opsomming.", "Na 连 moet 都 of 也 volgen; hier past 甚至 beter.", "都 alleen betekent \"allemaal\", niet \"zelfs\".", "Deze zin mist 都 én een werkwoord."] },
    { type: "open", q: "Zeg dat je zo moe bent dat je niet eens wilt eten.",
      model: ["我累得连饭都不想吃。", "我太累了，连饭也不想吃。"],
      tip: "Check: 连 + geval (饭), en dan 都 of 也 direct vóór 不想." },
    { type: "open", q: "Vertaal: \"Zelfs kinderen kunnen dit liedje zingen.\"",
      model: ["连孩子都会唱这首歌。", "这首歌连孩子都会唱。", "连小孩儿也会唱这首歌。"],
      tip: "Check: 连 vóór 孩子, en 都 of 也 direct vóór 会." }
  ],
  review: [
    { type: "mc", q: "\"Hij heeft vandaag niet eens één glas water gedronken.\"",
      options: ["他今天连一杯水都没喝。", "他今天连一杯水没喝。", "他今天一杯水连都没喝。", "他今天连一杯水都没喝了。"], answer: 0,
      why: ["Goed.", "Na 连 ... moet 都 of 也 komen.", "连 staat vóór het geval (一杯水), niet erachter.", "Met 没 valt 了 weg."] },
    { type: "mc", q: "\"Zo'n makkelijke vraag kunnen zelfs basisschoolkinderen.\" 这么简单的问题，___小学生都会。",
      options: ["连", "也", "就", "只"], answer: 0,
      why: ["Goed: 连 + wie + 都.", "也 staat vóór het werkwoord, niet vóór 小学生.", "就 past niet bij 都 hier en betekent geen \"zelfs\".", "只 betekent \"alleen\": dat is het tegenovergestelde."] },
    { type: "mc", q: "\"Mijn opa kan zelfs WeChat gebruiken.\"",
      options: ["我爷爷连微信都会用。", "我爷爷连微信会用。", "我爷爷都连微信会用。", "我爷爷连微信会用都。"], answer: 0,
      why: ["Goed: 连 + 微信 + 都 + 会用.", "Na 连 ... moet 都 of 也 komen.", "连 staat vóór het geval, 都 erna.", "都 staat vóór het werkwoord, niet aan het eind."] }
  ]
})
