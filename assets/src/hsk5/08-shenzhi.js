({
  id: "08", slug: "shenzhi", title: "甚至", sub: "Zelfs: nog een stap verder gaan",
  canDo: "Je kunt nu iets versterken met 甚至 en het meest verrassende geval als laatste noemen.",
  guess: {
    q: "他太忙了，甚至没时间吃饭。Wat betekent dit, denk je?",
    options: ["Hij heeft het zo druk dat hij zelfs geen tijd heeft om te eten.", "Hij heeft het druk, maar hij heeft wel tijd om te eten.", "Hij heeft het druk omdat hij niet eet.", "Hij heeft het druk, dus hij eet snel."], answer: 0,
    why: ["Goed: 甚至 = zelfs. Geen tijd om te eten is het uiterste gevolg.", "没时间 betekent juist \"geen tijd\".", "甚至 geeft geen reden. Het voegt een sterker geval toe.", "甚至 zegt \"zelfs\", niet \"dus\". Er staat ook niets over snel eten."]
  },
  problem: "\"Hij werkt veel, zelfs in het weekend.\" Met \"zelfs\" ga je een stap verder: je noemt iets wat de luisteraar niet verwacht. In het Chinees doe je dat met 甚至 (shènzhì). Let op: 甚至 staat vóór het werkwoord, niet erachter zoals \"zelfs\" in het Nederlands.",
  pattern: [
    { l: "wie", v: "他", c: 1 }, { l: "甚至", v: "甚至", c: 2, key: true },
    { l: "uiterste geval", v: "周末", c: 3 }, { l: "也/都 + werkwoord", v: "也在加班", c: 4 }
  ],
  patternCap: "Wie + 甚至 + (连) + uiterste geval + (都 / 也) + werkwoord; in een lijst: A、B，甚至 C (C = het verst)",
  rules: [
    "Als bijwoord staat 甚至 vóór het werkwoord of het hele gezegde: 他甚至没听说过。",
    "In een opsomming staat 甚至 vóór het laatste deel. Dat deel is het sterkste: 几个月，甚至几年。",
    "甚至 gaat vaak samen met 连……都/也: 甚至连孩子都知道。Ook 甚至还 en 甚至也 zijn heel gewoon.",
    "甚至 kan het tweede deel beginnen dat verder gaat dan het eerste: 他不但没道歉，甚至还笑了。",
    "甚至 past in spreektaal én schrijftaal."
  ],
  pitfall: "Zet 甚至 niet achter het werkwoord. \"Hij spreekt zelfs Arabisch\" = 他甚至会说阿拉伯语, niet 他会说甚至阿拉伯语.",
  examples: [
    { cn: "他太忙了，甚至没时间吃饭。", py: "Tā tài máng le, shènzhì méi shíjiān chīfàn.", nl: "Hij heeft het zo druk dat hij zelfs geen tijd heeft om te eten." },
    { cn: "这个歌手在中国很有名，甚至在国外也有很多粉丝。", py: "Zhège gēshǒu zài Zhōngguó hěn yǒumíng, shènzhì zài guówài yě yǒu hěn duō fěnsī.", nl: "Deze zanger is beroemd in China, en heeft zelfs in het buitenland veel fans." },
    { cn: "这种病要治疗几个月，甚至几年。", py: "Zhè zhǒng bìng yào zhìliáo jǐ ge yuè, shènzhì jǐ nián.", nl: "Deze ziekte moet maanden, soms zelfs jaren behandeld worden." },
    { cn: "这件事甚至连他妈妈都不知道。", py: "Zhè jiàn shì shènzhì lián tā māma dōu bù zhīdào.", nl: "Zelfs zijn moeder weet hier niets van." }
  ],
  nuance: [
    { h: "甚至 of 连……都?",
      p: "连……都 (HSK 4) zet één zelfstandig naamwoord als uiterste geval in de kijker, en heeft altijd 都 of 也 nodig. 甚至 is vrijer: het kan vóór een werkwoord, een heel zinsdeel of het laatste deel van een lijst staan, ook zonder 都. Wil je extra nadruk? Combineer ze: 甚至连……都.",
      ex: [
        { cn: "他连自己的名字都写错了。", py: "Tā lián zìjǐ de míngzi dōu xiěcuò le.", nl: "Hij schreef zelfs zijn eigen naam verkeerd." },
        { cn: "他太紧张了，甚至把自己的名字写错了。", py: "Tā tài jǐnzhāng le, shènzhì bǎ zìjǐ de míngzi xiěcuò le.", nl: "Hij was zo zenuwachtig dat hij zelfs zijn eigen naam verkeerd schreef." }
      ] },
    { h: "De volgorde: van gewoon naar verrassend",
      p: "Wat na 甚至 staat, is het sterkste of minst verwachte geval. De volgorde gaat dus van klein naar groot: 几天，甚至几个星期. Draai je het om, dan klopt het niet meer. Na 甚至 kan ook 更 volgen: 甚至更久, 甚至更多.",
      ex: [
        { cn: "这本书很多中学生，甚至小学生都喜欢看。", py: "Zhè běn shū hěn duō zhōngxuéshēng, shènzhì xiǎoxuéshēng dōu xǐhuan kàn.", nl: "Veel middelbare scholieren, en zelfs basisschoolkinderen, lezen dit boek graag." },
        { cn: "在医院有时候要等两个小时，甚至更久。", py: "Zài yīyuàn yǒu shíhou yào děng liǎng ge xiǎoshí, shènzhì gèng jiǔ.", nl: "In het ziekenhuis moet je soms twee uur wachten, of zelfs langer." }
      ] },
    { h: "Kort: 乃至 (HSK 7-9)",
      p: "乃至 (nǎizhì) betekent ook \"zelfs, tot en met\". Het is heel formeel en staat vooral tussen zelfstandige naamwoorden, vaak bij een steeds groter gebied: persoon, land, wereld. Je ziet het in kranten en toespraken. In een gesprek gebruik je 甚至, en vóór een werkwoord kies je altijd 甚至.",
      ex: [
        { cn: "这项技术对中国乃至全世界都有影响。", py: "Zhè xiàng jìshù duì Zhōngguó nǎizhì quán shìjiè dōu yǒu yǐngxiǎng.", nl: "Deze technologie heeft invloed op China en zelfs op de hele wereld." }
      ] }
  ],
  mistakes: [
    { wrong: "他会说甚至阿拉伯语。", right: "他甚至会说阿拉伯语。", why: "甚至 staat vóór het werkwoord (en vóór 会), niet erachter zoals \"zelfs\" in het Nederlands." },
    { wrong: "甚至连孩子知道这件事。", right: "甚至连孩子都知道这件事。", why: "Met 连 heb je altijd 都 of 也 nodig, ook als 甚至 ervoor staat." },
    { wrong: "这种病要治疗几年，甚至几个月。", right: "这种病要治疗几个月，甚至几年。", why: "Na 甚至 staat het sterkste geval. Jaren is meer dan maanden, dus dat komt achteraan." },
    { wrong: "我累得乃至不想吃饭。", right: "我累得甚至不想吃饭。", why: "乃至 is formeel en staat tussen zelfstandige naamwoorden. Vóór een werkwoord, en in spreektaal, gebruik je 甚至." }
  ],
  vocab: [
    ["甚至", "shènzhì", "zelfs"], ["乃至", "nǎizhì", "zelfs, tot en met (formeel)"], ["治疗", "zhìliáo", "behandelen"],
    ["粉丝", "fěnsī", "fan(s)"], ["加班", "jiābān", "overwerken"], ["项目", "xiàngmù", "project"],
    ["熬夜", "áoyè", "laat opblijven, doorhalen"], ["失眠", "shīmián", "slapeloosheid, niet kunnen slapen"], ["依赖", "yīlài", "afhankelijk zijn van"],
    ["调查", "diàochá", "onderzoek, enquête"]
  ],
  dialogue: [
    ["A", "你最近怎么瘦了这么多？", "Nǐ zuìjìn zěnme shòule zhème duō?", "Hoe komt het dat je de laatste tijd zo afgevallen bent?"],
    ["B", "公司项目太多了，我每天加班，甚至周末也得去公司。", "Gōngsī xiàngmù tài duō le, wǒ měi tiān jiābān, shènzhì zhōumò yě děi qù gōngsī.", "Er zijn te veel projecten op het werk. Ik werk elke dag over, en moet zelfs in het weekend naar kantoor."],
    ["A", "那你吃饭怎么办？", "Nà nǐ chīfàn zěnme bàn?", "En hoe zit het dan met eten?"],
    ["B", "有时候忙得甚至连午饭都忘了吃。", "Yǒu shíhou máng de shènzhì lián wǔfàn dōu wàngle chī.", "Soms heb ik het zo druk dat ik zelfs vergeet te lunchen."],
    ["A", "这样下去不行，身体会出问题的。", "Zhèyàng xiàqu bù xíng, shēntǐ huì chū wèntí de.", "Zo kan het niet doorgaan. Je lichaam gaat het opgeven."],
    ["B", "我知道。下个月项目结束了，我一定好好休息。", "Wǒ zhīdào. Xià ge yuè xiàngmù jiéshù le, wǒ yídìng hǎohāo xiūxi.", "Ik weet het. Volgende maand is het project klaar, dan ga ik echt goed uitrusten."]
  ],
  reading: {
    title: "离不开手机的年轻人",
    lines: [
      { cn: "现在，很多年轻人一天到晚都离不开手机。", py: "Xiànzài, hěn duō niánqīngrén yì tiān dào wǎn dōu lí bu kāi shǒujī.", nl: "Tegenwoordig kunnen veel jongeren van 's ochtends tot 's avonds niet zonder hun telefoon." },
      { cn: "吃饭时看手机，走路时看手机，有的人甚至开车时也看手机。", py: "Chīfàn shí kàn shǒujī, zǒulù shí kàn shǒujī, yǒu de rén shènzhì kāichē shí yě kàn shǒujī.", nl: "Ze kijken op hun telefoon tijdens het eten en tijdens het lopen. Sommigen kijken er zelfs op tijdens het autorijden." },
      { cn: "一项调查发现，有些大学生每天用手机超过八个小时，甚至更长。", py: "Yí xiàng diàochá fāxiàn, yǒuxiē dàxuéshēng měi tiān yòng shǒujī chāoguò bā ge xiǎoshí, shènzhì gèng cháng.", nl: "Uit een onderzoek blijkt dat sommige studenten hun telefoon meer dan acht uur per dag gebruiken, of zelfs langer." },
      { cn: "很多人睡觉前一直看手机，结果经常熬夜，甚至失眠。", py: "Hěn duō rén shuìjiào qián yìzhí kàn shǒujī, jiéguǒ jīngcháng áoyè, shènzhì shīmián.", nl: "Veel mensen kijken voor het slapen steeds op hun telefoon. Daardoor blijven ze vaak laat op, en slapen sommigen zelfs slecht." },
      { cn: "对手机的依赖不但影响健康，甚至会影响人与人之间的关系。", py: "Duì shǒujī de yīlài búdàn yǐngxiǎng jiànkāng, shènzhì huì yǐngxiǎng rén yǔ rén zhījiān de guānxi.", nl: "Afhankelijkheid van de telefoon is niet alleen slecht voor de gezondheid. Het kan zelfs relaties tussen mensen schaden." },
      { cn: "有的家庭一起吃饭时，每个人都低着头看手机，甚至连一句话都不说。", py: "Yǒu de jiātíng yìqǐ chīfàn shí, měi ge rén dōu dīzhe tóu kàn shǒujī, shènzhì lián yí jù huà dōu bù shuō.", nl: "In sommige gezinnen kijkt iedereen tijdens het eten naar zijn telefoon, en zegt niemand zelfs maar één woord." },
      { cn: "专家建议，每天应该留出一段时间，把手机放在一边。", py: "Zhuānjiā jiànyì, měi tiān yīnggāi liúchū yí duàn shíjiān, bǎ shǒujī fàng zài yìbiān.", nl: "Experts raden aan elke dag een tijdje vrij te maken en de telefoon weg te leggen." },
      { cn: "这样做对个人、家庭乃至整个社会都有好处。", py: "Zhèyàng zuò duì gèrén, jiātíng nǎizhì zhěnggè shèhuì dōu yǒu hǎochù.", nl: "Dat is goed voor het individu, het gezin en zelfs de hele samenleving." }
    ],
    questions: [
      { type: "mc", q: "Hoe lang gebruiken sommige studenten hun telefoon per dag?",
        options: ["Meer dan acht uur, of zelfs langer.", "Precies acht uur.", "Minder dan acht uur.", "Alleen tijdens het eten."], answer: 0,
        why: ["Goed: 超过八个小时，甚至更长。", "超过 betekent \"meer dan\".", "超过 betekent \"meer dan\", niet \"minder dan\".", "Eten is maar één van de momenten."] },
      { type: "mc", q: "Wat gebeurt er in sommige gezinnen tijdens het eten?",
        options: ["Iedereen kijkt op zijn telefoon en niemand zegt iets.", "Iedereen legt de telefoon weg.", "Ze praten over hun telefoon.", "Ze kijken samen een film."], answer: 0,
        why: ["Goed: 每个人都低着头看手机，甚至连一句话都不说。", "Dat is juist het advies van de experts.", "Er staat dat ze zelfs geen woord zeggen.", "Dat staat niet in de tekst."] },
      { type: "mc", q: "经常熬夜，甚至失眠。Wat laat 甚至 hier zien?",
        options: ["Slapeloosheid is een nog ernstiger gevolg dan laat opblijven.", "Slapeloosheid is minder erg dan laat opblijven.", "Slapeloosheid is de reden dat ze laat opblijven.", "Laat opblijven en slapeloosheid zijn tegenstellingen."], answer: 0,
        why: ["Goed: na 甚至 komt het sterkste geval.", "Na 甚至 staat juist het sterkere geval.", "甚至 geeft geen reden.", "甚至 voegt een sterker geval toe, geen tegenstelling."] }
    ]
  },
  questions: [
    { type: "mc", q: "Wat betekent: 这道题太难了，甚至老师也不会做。",
      options: ["Deze opgave is te moeilijk. Zelfs de leraar kan hem niet maken.", "Deze opgave is te moeilijk, maar de leraar kan hem maken.", "Deze opgave is te moeilijk omdat de leraar hem niet kan maken.", "Deze opgave is te moeilijk, alleen de leraar kan hem maken."], answer: 0,
      why: ["Goed: 甚至老师也 = zelfs de leraar.", "不会做 betekent \"kan het niet\".", "甚至 geeft geen reden.", "甚至 betekent \"zelfs\", niet \"alleen\"."] },
    { type: "mc", q: "\"Hij spreekt zelfs Arabisch.\"",
      options: ["他甚至会说阿拉伯语。", "他会说甚至阿拉伯语。", "他会说阿拉伯语甚至。", "他甚至会说阿拉伯语都。"], answer: 0,
      why: ["Goed: 甚至 staat vóór 会 + werkwoord.", "甚至 staat niet achter het werkwoord, zoals \"zelfs\" in het Nederlands.", "甚至 staat nooit aan het eind van de zin.", "都 hoort bij 连 of staat vóór het werkwoord, niet aan het eind."] },
    { type: "order", q: "Zet in de goede volgorde: \"Dit werk duurt een paar dagen, misschien zelfs een paar weken.\"",
      tokens: [["这件工作", "zhè jiàn gōngzuò"], ["要做几天", "yào zuò jǐ tiān"], ["甚至", "shènzhì"], ["几个星期", "jǐ ge xīngqī"]] },
    { type: "mc", q: "他太紧张了，甚至连自己的名字___写错了。(Hij was zo zenuwachtig dat hij zelfs zijn eigen naam verkeerd schreef.)",
      options: ["都", "就", "才", "还是"], answer: 0,
      why: ["Goed: 连 heeft 都 of 也 nodig, ook na 甚至.", "就 hoort niet bij 连.", "才 betekent \"pas\" en hoort niet bij 连.", "还是 betekent \"toch\" en vervangt 都 niet."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["这种药要吃几年，甚至几个月。", "这种药要吃几个月，甚至几年。", "他甚至连周末都在工作。", "他不但没帮忙，甚至还笑我。"], answer: 0,
      why: ["Goed: deze klopt niet. Na 甚至 komt het sterkste geval: jaren, niet maanden.", "Deze klopt: van maanden naar jaren.", "Deze klopt: 甚至连……都.", "Deze klopt: 不但……甚至还 gaat een stap verder."] },
    { type: "mc", q: "Welke zin zegt ongeveer hetzelfde als: 他连饭都没吃。",
      options: ["他甚至没吃饭。", "他甚至吃了饭。", "他连饭吃了。", "他没吃饭甚至。"], answer: 0,
      why: ["Goed: 甚至 vóór het werkwoord geeft dezelfde nadruk als 连……都.", "Er moet een ontkenning in: 没吃.", "连 heeft 都 nodig, en de ontkenning ontbreekt.", "甚至 staat niet aan het eind van de zin."] },
    { type: "mc", q: "In welke zin is 乃至 goed gebruikt?",
      options: ["这个问题对国家乃至世界都很重要。", "我累得乃至不想吃饭。", "他乃至连我的名字都忘了。", "你乃至可以明天再来。"], answer: 0,
      why: ["Goed: 乃至 staat formeel tussen zelfstandige naamwoorden: land, wereld.", "Vóór een werkwoord in spreektaal gebruik je 甚至.", "Hier hoort 甚至: 乃至 staat niet vóór 连.", "乃至 betekent \"zelfs\" in een reeks, niet \"ook\"."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hij was zo moe dat hij zelfs geen zin had om te eten.\"",
      tokens: [["他累得", "tā lèi de"], ["甚至", "shènzhì"], ["连饭", "lián fàn"], ["都不想吃", "dōu bù xiǎng chī"]] },
    { type: "fill", q: "这个游戏很受欢迎，孩子们喜欢，___很多老人也喜欢。(Dit spel is populair: kinderen vinden het leuk, en zelfs veel ouderen.)",
      answers: ["甚至", "甚至连", "连"], hint: "Welk woord betekent \"zelfs\" en staat vóór het sterkste geval?", why: "甚至 (of 甚至连 / 连) vóór 很多老人, en 也 vóór het werkwoord." },
    { type: "open", q: "Vertaal: \"Hij heeft het zo druk dat hij zelfs in het weekend overwerkt.\"",
      model: ["他忙得甚至周末也在加班。", "他很忙，甚至周末都要加班。", "他太忙了，甚至连周末也加班。"],
      tip: "Check: 甚至 staat vóór 周末 of vóór het werkwoord, met 也 of 都 vóór 加班." },
    { type: "open", q: "Vertaal: \"Veel jongeren, en zelfs kinderen, hebben een smartphone.\"",
      model: ["很多年轻人，甚至孩子，都有智能手机。", "很多年轻人甚至小孩子都有智能手机。"],
      tip: "Check: 甚至 staat vóór het laatste en sterkste deel (孩子), en 都 vóór 有." }
  ],
  review: [
    { type: "mc", q: "\"Ze is zelfs haar paspoort vergeten.\"",
      options: ["她甚至把护照忘了。", "她把甚至护照忘了。", "她把护照忘了甚至。", "她甚至把护照忘。"], answer: 0,
      why: ["Goed: 甚至 staat vóór het hele gezegde, hier vóór 把.", "甚至 staat niet tussen 把 en het ding.", "甚至 staat niet aan het eind van de zin.", "In een 把-zin moet na 忘 nog iets komen, zoals 了."] },
    { type: "mc", q: "每天来这里的游客有几百个，___上千个。(Hier komen elke dag honderden, soms zelfs meer dan duizend toeristen.)",
      options: ["甚至", "所以", "但是", "因为"], answer: 0,
      why: ["Goed: 甚至 vóór het grotere aantal.", "所以 geeft een gevolg.", "但是 geeft een tegenstelling.", "因为 geeft een reden."] },
    { type: "mc", q: "Wat betekent: 他不但没生气，甚至还请我吃饭。",
      options: ["Hij werd niet boos, en trakteerde me zelfs op eten.", "Hij werd boos en trakteerde me niet.", "Hij werd niet boos, maar trakteerde me ook niet.", "Hij trakteerde me op eten omdat hij boos was."], answer: 0,
      why: ["Goed: 不但……甚至还 gaat een stap verder.", "没生气 betekent \"niet boos\".", "甚至还请 zegt dat hij wél trakteerde.", "甚至 geeft geen reden."] }
  ]
})
