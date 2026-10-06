({
  id: "11", slug: "suiran", title: "虽然 ... 但是", sub: "Hoewel ... toch",
  canDo: "Je kunt nu een tegenstelling maken met 虽然 ... 但是/可是: iets is zo, en toch gebeurt iets anders.",
  guess: {
    q: "\"Hoewel het regent, gaat hij toch hardlopen.\" Welke zin klopt, denk je?",
    options: ["虽然下雨，但是他还是去跑步。", "虽然下雨，所以他去跑步。", "但是下雨，虽然他去跑步。", "虽然下雨，他但是去跑步。"], answer: 0,
    why: ["Goed: 虽然 in het eerste deel, 但是 aan het begin van het tweede deel.", "所以 betekent \"daarom\". Regen is geen reden om te gaan hardlopen.", "De volgorde is omgedraaid: 虽然 hoort in het eerste deel.", "但是 staat aan het begin van het tweede deel, niet na het onderwerp."]
  },
  problem: "In het Nederlands zeg je: \"Hoewel het duur is, koop ik het.\" Je hebt dan één woord voor de tegenstelling. In het Chinees markeer je beide delen: 虽然 (suīrán) in het eerste deel, en 但是 of 可是 in het tweede. Zo hoort de luisteraar meteen dat er een \"toch\" aankomt.",
  pattern: [
    { l: "虽然", v: "虽然", c: 1, key: true }, { l: "feit", v: "这件衣服很贵", c: 2 },
    { l: "但是", v: "但是", c: 3, key: true }, { l: "toch", v: "我还是想买", c: 4 }
  ],
  patternCap: "虽然 + feit，但是/可是 + (onderwerp) + (还是/也) + tegenovergesteld resultaat",
  rules: [
    "虽然 staat vóór of na het onderwerp: 虽然他很累 en 他虽然很累 zijn allebei goed.",
    "但是 of 可是 staat altijd helemaal aan het begin van het tweede deel, vóór het onderwerp.",
    "虽然 mag je weglaten. 但是/可是 laat je meestal niet weg.",
    "In het tweede deel komt vaak 还是 of 也 erbij: 但是他还是去了。"
  ],
  pitfall: "Gebruik nooit 虽然 ... 所以. 所以 betekent \"daarom\" en geeft een gevolg, geen tegenstelling.",
  examples: [
    { cn: "虽然这件衣服很贵，但是我还是想买。", py: "Suīrán zhè jiàn yīfu hěn guì, dànshì wǒ háishi xiǎng mǎi.", nl: "Hoewel deze kleding duur is, wil ik hem toch kopen." },
    { cn: "他虽然很累，可是还在工作。", py: "Tā suīrán hěn lèi, kěshì hái zài gōngzuò.", nl: "Hoewel hij erg moe is, werkt hij nog steeds." },
    { cn: "虽然我学了两年中文，但是说得不太好。", py: "Suīrán wǒ xuéle liǎng nián Zhōngwén, dànshì shuō de bú tài hǎo.", nl: "Hoewel ik twee jaar Chinees heb geleerd, spreek ik het niet zo goed." },
    { cn: "外面很冷，但是我们也要出去。", py: "Wàimiàn hěn lěng, dànshì wǒmen yě yào chūqu.", nl: "Het is koud buiten, maar we gaan toch naar buiten." }
  ],
  nuance: [
    { h: "虽然 mag weg, 但是 meestal niet",
      p: "Het tweede woord draagt de tegenstelling. Zonder 虽然 klinkt de zin nog goed. Zonder 但是/可是 hangt de zin in de lucht: 虽然很贵，我想买 klinkt onaf. In spreektaal laten mensen 虽然 vaak weg.",
      ex: [
        { cn: "这个菜很辣，但是很好吃。", py: "Zhège cài hěn là, dànshì hěn hǎochī.", nl: "Dit gerecht is pittig, maar heel lekker." }
      ] },
    { h: "Niet 虽然 ... 所以",
      p: "虽然 ... 但是 = tegenstelling: \"hoewel ... toch\". 因为 ... 所以 = oorzaak en gevolg: \"omdat ... daarom\". Kijk naar de logica: verwacht je het tweede deel, of is het een verrassing?",
      ex: [
        { cn: "虽然下雨，但是他来了。", py: "Suīrán xià yǔ, dànshì tā lái le.", nl: "Hoewel het regende, kwam hij toch." },
        { cn: "因为下雨，所以他没来。", py: "Yīnwèi xià yǔ, suǒyǐ tā méi lái.", nl: "Omdat het regende, kwam hij niet." }
      ] },
    { h: "但是, 可是 en 不过",
      p: "但是 is het neutrale woord. 可是 is iets meer spreektaal. 不过 is zachter: \"alleen\", \"wel\". Je gebruikt 不过 vaak los, zonder 虽然, als een kleine aanvulling. Na 虽然 kiezen sprekers meestal 但是 of 可是.",
      ex: [
        { cn: "这个房子很好，不过有点儿小。", py: "Zhège fángzi hěn hǎo, búguò yǒudiǎnr xiǎo.", nl: "Dit huis is goed, alleen een beetje klein." }
      ] }
  ],
  mistakes: [
    { wrong: "虽然他很忙，所以他来了。", right: "虽然他很忙，但是他来了。", why: "Na 虽然 komt een tegenstelling (但是), geen gevolg (所以)." },
    { wrong: "虽然很贵，我但是想买。", right: "虽然很贵，但是我想买。", why: "但是 staat vóór het onderwerp, aan het begin van het tweede deel." },
    { wrong: "虽然天气不好，我们去公园。", right: "虽然天气不好，但是我们还是去公园。", why: "Zonder 但是/可是 is de zin onaf. 还是 maakt het \"toch\" nog duidelijker." },
    { wrong: "虽然很冷，但是还是我去了。", right: "虽然很冷，但是我还是去了。", why: "还是 staat na het onderwerp: 我还是去了。Alleen 但是 staat vóór het onderwerp." }
  ],
  vocab: [
    ["虽然 ... 但是", "suīrán ... dànshì", "hoewel ... toch"], ["可是", "kěshì", "maar"], ["不过", "búguò", "maar, alleen"],
    ["还是", "háishi", "toch, nog steeds"], ["累", "lèi", "moe"], ["辣", "là", "pittig, scherp"],
    ["努力", "nǔlì", "hard werken, zijn best doen"], ["比赛", "bǐsài", "wedstrijd"], ["感冒", "gǎnmào", "verkouden zijn"], ["舒服", "shūfu", "lekker, prettig"]
  ],
  dialogue: [
    ["A", "你感冒了，今天还去上班吗？", "Nǐ gǎnmào le, jīntiān hái qù shàngbān ma?", "Je bent verkouden. Ga je vandaag toch naar je werk?"],
    ["B", "虽然有点儿不舒服，但是今天有个重要的会。", "Suīrán yǒudiǎnr bù shūfu, dànshì jīntiān yǒu ge zhòngyào de huì.", "Ik voel me wel een beetje beroerd, maar vandaag is er een belangrijke vergadering."],
    ["A", "可是你应该在家休息。", "Kěshì nǐ yīnggāi zài jiā xiūxi.", "Maar je zou thuis moeten rusten."],
    ["B", "我知道。不过开完会我就回家。", "Wǒ zhīdào. Búguò kāiwán huì wǒ jiù huí jiā.", "Dat weet ik. Maar na de vergadering ga ik naar huis."],
    ["A", "好吧，多喝点儿水。", "Hǎo ba, duō hē diǎnr shuǐ.", "Oké, drink wat meer water."]
  ],
  reading: {
    title: "小王的比赛",
    lines: [
      { cn: "小王很喜欢踢足球。", py: "Xiǎo Wáng hěn xǐhuan tī zúqiú.", nl: "Xiao Wang houdt erg van voetballen." },
      { cn: "虽然他个子不高，但是跑得很快。", py: "Suīrán tā gèzi bù gāo, dànshì pǎo de hěn kuài.", nl: "Hoewel hij niet groot is, rent hij heel snel." },
      { cn: "上个星期六有一场比赛，可是那天早上他感冒了。", py: "Shàng ge xīngqīliù yǒu yì chǎng bǐsài, kěshì nà tiān zǎoshang tā gǎnmào le.", nl: "Afgelopen zaterdag was er een wedstrijd, maar die ochtend was hij verkouden." },
      { cn: "虽然他很不舒服，但是他还是去了。", py: "Suīrán tā hěn bù shūfu, dànshì tā háishi qù le.", nl: "Hoewel hij zich erg beroerd voelde, ging hij toch." },
      { cn: "他非常努力，最后踢进了一个球。", py: "Tā fēicháng nǔlì, zuìhòu tījìnle yí ge qiú.", nl: "Hij deed heel erg zijn best en scoorde uiteindelijk een doelpunt." },
      { cn: "虽然他们没有赢，可是大家都很高兴。", py: "Suīrán tāmen méiyǒu yíng, kěshì dàjiā dōu hěn gāoxìng.", nl: "Hoewel ze niet wonnen, was iedereen blij." },
      { cn: "回家以后，小王马上就睡觉了。", py: "Huí jiā yǐhòu, Xiǎo Wáng mǎshàng jiù shuìjiào le.", nl: "Na thuiskomst ging Xiao Wang meteen slapen." }
    ],
    questions: [
      { type: "mc", q: "Wat is waar over Xiao Wang?",
        options: ["Hij is niet groot, maar rent snel.", "Hij is groot en rent snel.", "Hij is niet groot en rent langzaam.", "Hij houdt niet van voetbal."], answer: 0,
        why: ["Goed: 虽然他个子不高，但是跑得很快。", "De tekst zegt 个子不高: hij is niet groot.", "De tekst zegt 跑得很快: hij rent snel.", "De tekst zegt 很喜欢踢足球."] },
      { type: "mc", q: "Hoe ging de wedstrijd?",
        options: ["Ze verloren, maar iedereen was blij.", "Ze wonnen en iedereen was blij.", "Xiao Wang speelde niet mee.", "Xiao Wang scoorde niet."], answer: 0,
        why: ["Goed: 虽然他们没有赢，可是大家都很高兴。", "没有赢 betekent: ze wonnen niet.", "Hij ging toch: 他还是去了。", "Hij scoorde wel: 踢进了一个球."] },
      { type: "mc", q: "虽然他很不舒服，但是他还是去了。Wat betekent deze zin?",
        options: ["Hij voelde zich slecht en ging toch.", "Hij voelde zich slecht en ging daarom niet.", "Hij ging omdat hij zich slecht voelde.", "Hij voelde zich goed en ging."], answer: 0,
        why: ["Goed: 虽然 ... 但是 ... 还是 = hoewel ... toch.", "去了 betekent dat hij wel ging.", "虽然 geeft geen reden; dat doet 因为.", "不舒服 betekent dat hij zich niet goed voelde."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Hoewel hij rijk is, is hij niet gelukkig.\" Welke zin klopt?",
      options: ["他虽然很有钱，但是不快乐。", "他虽然很有钱，所以不快乐。", "他因为很有钱，但是不快乐。", "他但是很有钱，虽然不快乐。"], answer: 0,
      why: ["Goed: 虽然 ... 但是 voor een tegenstelling.", "所以 geeft een gevolg, geen tegenstelling.", "因为 hoort bij 所以, niet bij 但是.", "De woorden staan omgedraaid: 虽然 eerst, 但是 daarna."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hoewel het druk is, is het heel lekker.\" (over een restaurant)",
      tokens: [["虽然", "suīrán"], ["人很多", "rén hěn duō"], ["但是", "dànshì"], ["菜很好吃", "cài hěn hǎochī"]] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["虽然很晚了，所以他还在工作。", "虽然很晚了，但是他还在工作。", "虽然很晚了，可是他还在工作。", "很晚了，但是他还在工作。"], answer: 0,
      why: ["Goed: deze is fout. Na 虽然 komt geen 所以.", "Deze klopt: 虽然 ... 但是.", "Deze klopt: 可是 kan ook na 虽然.", "Deze klopt: 虽然 mag weg."] },
    { type: "fill", q: "虽然他学习很努力，___考试没考好。(Hoewel hij hard studeerde, ging het examen niet goed.)", answers: ["但是", "可是"],
      hint: "Welk woord opent het tweede deel bij 虽然?", why: "虽然 ... 但是/可是: het tweede deel begint met de tegenstelling." },
    { type: "mc", q: "Waar staat 但是?",
      options: ["虽然下雪，但是孩子们很高兴。", "虽然下雪，孩子们但是很高兴。", "虽然下雪，孩子们很但是高兴。", "虽然下雪，孩子们很高兴但是。"], answer: 0,
      why: ["Goed: 但是 staat aan het begin van het tweede deel.", "但是 staat niet na het onderwerp; dat kan alleen 虽然.", "但是 komt niet tussen 很 en het bijvoeglijk naamwoord.", "但是 staat niet aan het eind."] },
    { type: "mc", q: "\"Dit huis is mooi, alleen een beetje duur.\" Welk woord past het best als zachte aanvulling, zonder 虽然?",
      options: ["这个房子很漂亮，不过有点儿贵。", "这个房子很漂亮，所以有点儿贵。", "这个房子很漂亮，因为有点儿贵。", "这个房子很漂亮，虽然有点儿贵。"], answer: 0,
      why: ["Goed: 不过 = \"alleen\", een zachte tegenstelling.", "所以 maakt er een gevolg van: mooi, daarom duur.", "因为 maakt er een reden van: mooi omdat het duur is.", "虽然 hoort in het eerste deel, met 但是 erna."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hoewel ik moe ben, wil ik toch gaan.\"",
      tokens: [["虽然", "suīrán"], ["我很累", "wǒ hěn lèi"], ["可是", "kěshì"], ["我还是", "wǒ háishi"], ["想去", "xiǎng qù"]] },
    { type: "mc", q: "他虽然生病了，___还是来上课了。",
      options: ["可是", "所以", "因为", "如果"], answer: 0,
      why: ["Goed: tegenstelling na 虽然: 可是.", "所以 = daarom: ziek zijn is geen reden om naar de les te komen.", "因为 = omdat: dat geeft een reden, geen tegenstelling.", "如果 = als: dat is een voorwaarde."] },
    { type: "mc", q: "Welke zin klinkt onaf?",
      options: ["虽然这本书很难，我看完了。", "虽然这本书很难，但是我看完了。", "这本书很难，但是我看完了。", "这本书虽然很难，可是我看完了。"], answer: 0,
      why: ["Goed: na 虽然 ontbreekt 但是/可是.", "Compleet: 虽然 ... 但是.", "Compleet: 虽然 mag weg.", "Compleet: 虽然 na het onderwerp, met 可是."] },
    { type: "open", q: "Vertaal: \"Hoewel het koud is, gaan we toch zwemmen.\"", model: ["虽然很冷，但是我们还是去游泳。", "虽然天气很冷，可是我们还是去游泳。", "天气虽然很冷，但是我们也要去游泳。"],
      tip: "Check: 虽然 in het eerste deel, 但是/可是 vóór 我们, en 还是 of 也 voor \"toch\"." },
    { type: "open", q: "Maak een zin over jezelf met 虽然 ... 但是: iets wat moeilijk is, maar wat je toch leuk vindt.", model: ["虽然中文很难，但是我很喜欢学。", "虽然工作很忙，可是我很喜欢我的工作。"],
      tip: "Check: geen 所以 in het tweede deel, en 但是/可是 aan het begin van dat deel." }
  ],
  review: [
    { type: "mc", q: "\"Hoewel de kamer klein is, is hij erg schoon.\"",
      options: ["房间虽然很小，但是很干净。", "房间虽然很小，所以很干净。", "房间但是很小，虽然很干净。", "房间虽然很小，很干净但是。"], answer: 0,
      why: ["Goed.", "所以 geeft een gevolg, geen tegenstelling.", "虽然 hoort in het eerste deel, 但是 in het tweede.", "但是 staat aan het begin van het tweede deel."] },
    { type: "mc", q: "虽然他不会说中文，___他很想去中国。",
      options: ["可是", "所以", "因为", "就"], answer: 0,
      why: ["Goed: 虽然 ... 可是 = hoewel ... toch.", "所以 maakt er een gevolg van, dat is onlogisch.", "因为 geeft een reden, geen tegenstelling.", "就 opent geen tegenstelling."] },
    { type: "mc", q: "Welk woord kun je in 虽然 ... 但是 meestal weglaten?",
      options: ["虽然", "但是", "Allebei nooit", "Allebei altijd"], answer: 0,
      why: ["Goed: 虽然 mag weg, 但是 draagt de tegenstelling.", "Zonder 但是 klinkt de zin onaf.", "虽然 kan wel weg.", "但是 laat je meestal niet weg."] }
  ]
})
