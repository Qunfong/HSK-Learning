({
  id: "05", slug: "chule", title: "除了……以外", sub: "Behalve, of naast",
  canDo: "Je kunt nu met 除了 ... 以外 zeggen wie of wat erbuiten valt (都), of wat er nog bij komt (还 / 也).",
  guess: {
    q: "除了小王以外，我们都去了。Wie is er gegaan, denk je?",
    options: ["Iedereen, behalve Xiao Wang.", "Alleen Xiao Wang.", "Iedereen, en Xiao Wang ook.", "Niemand."], answer: 0,
    why: ["Goed: 除了 ... 都 = behalve. Xiao Wang valt erbuiten.", "除了 betekent niet \"alleen\".", "Met 都 valt Xiao Wang er juist buiten. \"Ook\" zou 还 of 也 zijn.", "我们都去了 zegt dat wij allemaal gingen."]
  },
  problem: "\"Behalve Xiao Wang\" kan in het Nederlands twee dingen betekenen. Xiao Wang doet niet mee. Of: hij doet mee, en er is nog meer. In het Chinees begin je in beide gevallen met 除了 (chúle). Het verschil zie je aan het woord in de tweede helft: 都, of 还 / 也.",
  pattern: [
    { l: "除了", v: "除了", c: 1, key: true }, { l: "A", v: "小王", c: 2 }, { l: "以外", v: "以外", c: 1 },
    { l: "wie", v: "我们", c: 3 }, { l: "都 / 还 / 也", v: "都", c: 4, key: true }, { l: "werkwoord", v: "去了", c: 5 }
  ],
  patternCap: "除了 A 以外，... 都 = behalve A (A niet) · 除了 A 以外，... 还 / 也 = naast A (A ook)",
  rules: [
    "除了 ... 都: A valt erbuiten. 除了他以外，我们都去了。",
    "除了 ... 还 / 也: A hoort erbij, en er is nog meer.",
    "以外 mag weg: 除了他，我们都去了。",
    "都, 还 en 也 staan na het onderwerp, vóór het werkwoord.",
    "A kan een woord zijn, maar ook een handeling: 除了打网球以外 ..."
  ],
  pitfall: "Let op het woord in de tweede helft. 都 betekent: A niet. 还 of 也 betekent: A ook.",
  examples: [
    { cn: "除了汉语以外，我还学日语。", py: "Chúle Hànyǔ yǐwài, wǒ hái xué Rìyǔ.", nl: "Naast Chinees leer ik ook Japans." },
    { cn: "除了星期天，我每天都上班。", py: "Chúle xīngqītiān, wǒ měi tiān dōu shàngbān.", nl: "Behalve op zondag werk ik elke dag." },
    { cn: "除了我以外，小李也会开车。", py: "Chúle wǒ yǐwài, Xiǎo Lǐ yě huì kāichē.", nl: "Naast mij kan Xiao Li ook autorijden." }
  ],
  nuance: [
    { h: "除了……都 of 除了……还?",
      p: "Dit is het belangrijkste verschil. Met 都 haal je A uit de groep: alle anderen wel, A niet. Met 还 tel je iets op: A, en daarnaast nog iets. Eén woord verandert de hele betekenis. Kijk naar de twee zinnen hieronder.",
      ex: [
        { cn: "除了小李，我们都去了。", py: "Chúle Xiǎo Lǐ, wǒmen dōu qù le.", nl: "Behalve Xiao Li zijn we allemaal gegaan. (Xiao Li niet)" },
        { cn: "除了小李，我们还请了小王。", py: "Chúle Xiǎo Lǐ, wǒmen hái qǐngle Xiǎo Wáng.", nl: "Naast Xiao Li hebben we ook Xiao Wang uitgenodigd. (Xiao Li ook)" }
      ] },
    { h: "还 of 也?",
      p: "Gaat het over hetzelfde onderwerp dat nog iets doet? Dan is 还 het gewoonst: 除了汉语，我还学日语。 Is A zelf een persoon, en doet een tweede persoon hetzelfde? Dan gebruik je 也: 除了我，小李也会开车。",
      ex: [
        { cn: "除了游泳，他还喜欢跑步。", py: "Chúle yóuyǒng, tā hái xǐhuan pǎobù.", nl: "Naast zwemmen houdt hij ook van hardlopen." }
      ] },
    { h: "Met een ontkenning: alleen A",
      p: "除了 A + 都没 / 都不 betekent: A wel, de rest niet. Zo zeg je eigenlijk \"alleen A\". In geschreven en formele tekst zie je ook 除了……之外. Dat betekent hetzelfde als 除了……以外.",
      ex: [
        { cn: "除了他，谁都没来。", py: "Chúle tā, shéi dōu méi lái.", nl: "Behalve hij is er niemand gekomen. (alleen hij kwam)" },
        { cn: "除了上课之外，学生还要参加很多活动。", py: "Chúle shàngkè zhīwài, xuésheng hái yào cānjiā hěn duō huódòng.", nl: "Naast de lessen moeten studenten ook aan veel activiteiten meedoen." }
      ] }
  ],
  mistakes: [
    { wrong: "除了英语以外，他都会说法语。", right: "除了英语以外，他还会说法语。", why: "Engels hoort erbij, er komt Frans bij. Dan gebruik je 还, niet 都." },
    { wrong: "除了星期天，我每天还上班。", right: "除了星期天，我每天都上班。", why: "Zondag valt erbuiten. Dan gebruik je 都." },
    { wrong: "除了汉语以外，还我学日语。", right: "除了汉语以外，我还学日语。", why: "还 staat na het onderwerp, vlak vóór het werkwoord." },
    { wrong: "除了以外他，我们都去了。", right: "除了他以外，我们都去了。", why: "A staat tussen 除了 en 以外." }
  ],
  vocab: [
    ["除了……以外", "chúle……yǐwài", "behalve; naast"], ["之外", "zhīwài", "behalve (formeler dan 以外)"], ["网球", "wǎngqiú", "tennis"],
    ["京剧", "jīngjù", "Peking-opera"], ["吵", "chǎo", "lawaaiig"], ["一般", "yìbān", "meestal, gewoonlijk"],
    ["别人", "biérén", "anderen"], ["法语", "Fǎyǔ", "Frans"], ["活动", "huódòng", "activiteit"], ["表演", "biǎoyǎn", "optreden, voorstelling"]
  ],
  dialogue: [
    ["A", "你周末一般做什么？", "Nǐ zhōumò yìbān zuò shénme?", "Wat doe je meestal in het weekend?"],
    ["B", "除了打网球以外，我还喜欢看京剧。", "Chúle dǎ wǎngqiú yǐwài, wǒ hái xǐhuan kàn jīngjù.", "Naast tennissen kijk ik graag Peking-opera."],
    ["A", "京剧？你们家还有谁喜欢？", "Jīngjù? Nǐmen jiā hái yǒu shéi xǐhuan?", "Peking-opera? Wie vindt dat bij jullie thuis nog meer leuk?"],
    ["B", "除了我妹妹以外，我们家的人都喜欢。她说太吵了。", "Chúle wǒ mèimei yǐwài, wǒmen jiā de rén dōu xǐhuan. Tā shuō tài chǎo le.", "Behalve mijn zusje vindt iedereen thuis het leuk. Zij vindt het te lawaaiig."],
    ["A", "哈哈，我跟你妹妹一样。", "Hāha, wǒ gēn nǐ mèimei yíyàng.", "Haha, ik ben net als je zusje."]
  ],
  reading: {
    title: "学校的新年晚会",
    lines: [
      { cn: "上个星期五，我们学校开了一个新年晚会。", py: "Shàng ge xīngqīwǔ, wǒmen xuéxiào kāile yí ge xīnnián wǎnhuì.", nl: "Afgelopen vrijdag hield onze school een nieuwjaarsfeest." },
      { cn: "除了学生以外，很多老师也来了。", py: "Chúle xuésheng yǐwài, hěn duō lǎoshī yě lái le.", nl: "Naast de studenten kwamen er ook veel leraren." },
      { cn: "晚会上有很多表演。除了唱歌，还有跳舞和京剧。", py: "Wǎnhuì shang yǒu hěn duō biǎoyǎn. Chúle chàng gē, hái yǒu tiàowǔ hé jīngjù.", nl: "Er waren veel optredens. Naast zingen was er ook dans en Peking-opera." },
      { cn: "我们班的同学都上台了，除了小林。", py: "Wǒmen bān de tóngxué dōu shàng tái le, chúle Xiǎo Lín.", nl: "Alle klasgenoten van onze klas gingen het podium op, behalve Xiao Lin." },
      { cn: "他说他太紧张了，不敢上台。", py: "Tā shuō tā tài jǐnzhāng le, bù gǎn shàng tái.", nl: "Hij zei dat hij te zenuwachtig was en het podium niet op durfde." },
      { cn: "可是最后，老师请大家一起唱一首歌。", py: "Kěshì zuìhòu, lǎoshī qǐng dàjiā yìqǐ chàng yì shǒu gē.", nl: "Maar aan het eind vroeg de leraar iedereen om samen een lied te zingen." },
      { cn: "这一次，除了小林以外，校长也上台了。", py: "Zhè yí cì, chúle Xiǎo Lín yǐwài, xiàozhǎng yě shàng tái le.", nl: "Deze keer ging naast Xiao Lin ook de directeur het podium op." },
      { cn: "大家都说，这是最开心的一个晚上。", py: "Dàjiā dōu shuō, zhè shì zuì kāixīn de yí ge wǎnshang.", nl: "Iedereen zei dat het de leukste avond was." }
    ],
    questions: [
      { type: "mc", q: "Wie kwamen er naar het feest?",
        options: ["Studenten en ook veel leraren.", "Alleen studenten.", "Alleen leraren.", "Studenten, maar geen leraren."], answer: 0,
        why: ["Goed: 除了学生以外，很多老师也来了。", "Er staat 也: de leraren kwamen ook.", "De studenten waren er ook.", "Er staat 很多老师也来了: leraren kwamen wel."] },
      { type: "mc", q: "Waarom ging Xiao Lin eerst niet het podium op?",
        options: ["Hij was te zenuwachtig.", "Hij was ziek.", "Hij kon niet zingen.", "Hij was te laat."], answer: 0,
        why: ["Goed: 他太紧张了，不敢上台。", "Over ziek zijn staat niets in de tekst.", "De tekst zegt niet dat hij niet kon zingen.", "Over te laat komen staat niets in de tekst."] },
      { type: "mc", q: "这一次，除了小林以外，校长也上台了。Wat betekent dit?",
        options: ["Xiao Lin ging nu ook het podium op, en de directeur ook.", "Iedereen ging het podium op, behalve Xiao Lin.", "Alleen de directeur ging het podium op.", "De directeur ging, Xiao Lin bleef zitten."], answer: 0,
        why: ["Goed: 除了 ... 也 = naast A, dus Xiao Lin hoort er nu bij.", "Dat zou 都 zijn. Hier staat 也.", "除了 betekent niet \"alleen\".", "Met 也 hoort Xiao Lin er juist bij."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Naast Engels spreekt hij ook Frans.\"",
      options: ["除了英语以外，他还会说法语。", "除了英语以外，他都会说法语。", "除了英语以外，还他会说法语。", "除了以外英语，他还会说法语。"], answer: 0,
      why: ["Goed: Engels hoort erbij, dus 还.", "都 zou betekenen dat Engels erbuiten valt; dat past hier niet.", "还 staat ná het onderwerp, niet ervoor.", "A staat tussen 除了 en 以外."] },
    { type: "mc", q: "Wat betekent: 除了咖啡，我什么都喝。",
      options: ["Ik drink alles, behalve koffie.", "Ik drink alles, ook koffie.", "Ik drink alleen koffie.", "Naast koffie drink ik niets."], answer: 0,
      why: ["Goed: 除了 ... 都 = koffie valt erbuiten.", "Met 都 valt koffie er juist buiten.", "除了 betekent niet \"alleen\".", "什么都喝 betekent \"alles drinken\", niet \"niets\"."] },
    { type: "order", q: "Zet in de goede volgorde: \"Behalve hij zijn alle anderen gekomen.\"",
      tokens: [["除了", "chúle"], ["他", "tā"], ["以外", "yǐwài"], ["别人", "biérén"], ["都", "dōu"], ["来了", "lái le"]] },
    { type: "mc", q: "\"Naast Beijing ben ik ook in Shanghai geweest.\" 除了北京以外，我___去过上海。",
      options: ["还", "都", "就", "才"], answer: 0,
      why: ["Goed: Beijing hoort erbij, en Shanghai komt erbij: 还.", "都 zou betekenen dat Beijing erbuiten valt.", "就 betekent \"dan, meteen\" en past niet bij 除了.", "才 betekent \"pas\" en past hier niet."] },
    { type: "mc", q: "除了他，谁都没来。Wie is er gekomen?",
      options: ["Alleen hij.", "Iedereen behalve hij.", "Niemand, ook hij niet.", "Hij en nog een paar anderen."], answer: 0,
      why: ["Goed: 除了 A + 都没 = A wel, de rest niet.", "Er staat 都没来: de anderen kwamen juist niet.", "除了 haalt hem uit de groep die niet kwam: hij kwam wel.", "谁都没来 betekent dat verder niemand kwam."] },
    { type: "mc", q: "\"Naast mij kan mijn broer ook goed koken.\" Welke zin klopt?",
      options: ["除了我以外，我哥哥也很会做饭。", "除了我以外，我哥哥都很会做饭。", "除了我以外，也我哥哥很会做饭。", "除了我以外，我哥哥不会做饭。"], answer: 0,
      why: ["Goed: twee personen die hetzelfde kunnen, dus 也.", "都 zou betekenen dat ik erbuiten val.", "也 staat na het onderwerp (我哥哥), niet ervoor.", "Nu kan hij juist niet koken: een andere betekenis."] },
    { type: "fill", q: "除了星期六，我们每天___有课。(Behalve op zaterdag hebben we elke dag les.)", answers: ["都"],
      hint: "Zaterdag valt erbuiten. Welk woord past dan?", why: "除了 A ... 都: A valt erbuiten. 每天都 = elke dag." },
    { type: "order", q: "Zet in de goede volgorde: \"Naast zwemmen houdt hij ook van hardlopen.\"",
      tokens: [["除了游泳", "chúle yóuyǒng"], ["他", "tā"], ["还", "hái"], ["喜欢", "xǐhuan"], ["跑步", "pǎobù"]],
      alt: ["他除了游泳还喜欢跑步"] },
    { type: "mc", q: "Je schrijft een formeel bericht: \"Naast de lessen organiseert de school ook veel activiteiten.\" Welke zin past het best?",
      options: ["除了上课之外，学校还组织很多活动。", "除了上课之外，学校都组织很多活动。", "除了之外上课，学校还组织很多活动。", "除了上课之外，还学校组织很多活动。"], answer: 0,
      why: ["Goed: 之外 klinkt formeel, en 还 voegt iets toe.", "都 zou de lessen uitsluiten; hier komt er juist iets bij.", "A (上课) staat tussen 除了 en 之外.", "还 staat na het onderwerp (学校)."] },
    { type: "open", q: "Vertel wat je naast je werk of studie nog meer doet.",
      model: ["除了工作以外，我还学汉语。", "除了上班，我也喜欢打网球。"],
      tip: "Check: gebruik je 还 of 也 (niet 都)? Je werk hoort er namelijk bij." },
    { type: "open", q: "Vertaal: \"Behalve mijn vader eet iedereen in mijn familie graag vis.\"",
      model: ["除了我爸爸以外，我们家的人都喜欢吃鱼。", "除了我爸爸，我家里人都爱吃鱼。"],
      tip: "Check: je vader valt erbuiten, dus 都 vóór 喜欢 of 爱." }
  ],
  review: [
    { type: "mc", q: "\"Behalve op maandag ben ik elke dag thuis.\"",
      options: ["除了星期一以外，我每天都在家。", "除了星期一以外，我每天还在家。", "除了星期一以外，都我每天在家。", "除了以外星期一，我每天都在家。"], answer: 0,
      why: ["Goed: maandag valt erbuiten, dus 都.", "还 zou betekenen dat maandag erbij hoort.", "都 staat vóór het werkwoord, niet vóór het onderwerp.", "A staat tussen 除了 en 以外."] },
    { type: "mc", q: "\"Naast tomaten wil ik ook druiven kopen.\" 除了西红柿，我___想买葡萄。",
      options: ["还", "都", "不", "才"], answer: 0,
      why: ["Goed: tomaten horen erbij, en druiven komen erbij.", "都 zou betekenen dat tomaten erbuiten vallen.", "不 maakt er \"geen druiven\" van: een andere betekenis.", "才 betekent \"pas\" en past hier niet."] },
    { type: "mc", q: "\"Behalve Anna heeft iedereen het examen gehaald.\"",
      options: ["除了安娜以外，大家都通过了考试。", "除了安娜以外，大家还通过了考试。", "除了安娜以外，都大家通过了考试。", "除了以外安娜，大家都通过了考试。"], answer: 0,
      why: ["Goed: Anna valt erbuiten, dus 都.", "还 zou betekenen dat Anna het ook gehaald heeft.", "都 staat na het onderwerp (大家).", "A staat tussen 除了 en 以外."] }
  ]
})
