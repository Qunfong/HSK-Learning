({
  id: "03", slug: "vergelijken", title: "Vergelijken met 比", sub: "Groter, niet zo groot, even groot",
  canDo: "Je kunt nu twee dingen vergelijken met 比, 没有 ... 那么 en 跟 ... 一样.",
  guess: {
    q: "\"Hij is twee jaar ouder dan ik.\" Welke zin klopt, denk je?",
    options: ["他比我大两岁。", "他比我两岁大。", "他两岁比我大。", "他比我很大两岁。"], answer: 0,
    why: ["Goed: het verschil komt ná het bijvoeglijk naamwoord.", "Het verschil (两岁) komt achter 大, niet ervoor.", "比我 staat direct na wie je vergelijkt.", "In een 比-zin gebruik je geen 很."]
  },
  problem: "In het Nederlands verander je het woord: groot, groter. In het Chinees verandert het woord niet. Je zet er 比 (bǐ) voor, met wat je vergelijkt. Het verschil zet je achteraan.",
  pattern: [
    { l: "A", v: "他", c: 1 }, { l: "比", v: "比", c: 2, key: true }, { l: "B", v: "我", c: 3 },
    { l: "eigenschap", v: "高", c: 4 }, { l: "verschil", v: "一点儿", c: 5 }
  ],
  patternCap: "A 比 B + eigenschap (+ 一点儿 / 多了 / 两岁) · A 没有 B (那么) + eigenschap · A 跟 B 一样 + eigenschap",
  rules: [
    "Geen 很 of 非常 in een 比-zin. Wel 更 of 还: 他比我还高。",
    "Het verschil komt achteraan: 大两岁, 快多了, 贵一点儿.",
    "\"Niet zo ... als\": A 没有 B 那么 + eigenschap.",
    "\"Even ... als\": A 跟 B 一样 + eigenschap.",
    "Met een werkwoord gebruik je 得: 他跑得比我快。 of 他比我跑得快。"
  ],
  pitfall: "他比我很高 is fout. Zeg 他比我高, 他比我高多了 of 他比我还高.",
  examples: [
    { cn: "今天比昨天冷。", py: "Jīntiān bǐ zuótiān lěng.", nl: "Vandaag is het kouder dan gisteren." },
    { cn: "我哥哥比我高一点儿。", py: "Wǒ gēge bǐ wǒ gāo yìdiǎnr.", nl: "Mijn broer is iets langer dan ik." },
    { cn: "这个房间没有那个房间那么安静。", py: "Zhège fángjiān méiyǒu nàge fángjiān nàme ānjìng.", nl: "Deze kamer is niet zo rustig als die." },
    { cn: "我跟你一样高。", py: "Wǒ gēn nǐ yíyàng gāo.", nl: "Ik ben even lang als jij." }
  ],
  nuance: [
    { h: "Ontkennen: 没有 ... 那么, niet 不比",
      p: "Wil je \"minder ... dan\" zeggen, gebruik dan 没有 ... (那么). 不比 betekent iets anders: \"niet meer ... dan\". Je spreekt er iemand mee tegen. Vaak zijn de twee dan ongeveer gelijk.",
      ex: [
        { cn: "我没有他那么忙。", py: "Wǒ méiyǒu tā nàme máng.", nl: "Ik heb het niet zo druk als hij." },
        { cn: "我不比他忙，我们都很忙。", py: "Wǒ bù bǐ tā máng, wǒmen dōu hěn máng.", nl: "Ik heb het niet drukker dan hij, we hebben het allebei druk." }
      ] },
    { h: "Vergelijken met een werkwoord: 得",
      p: "Vergelijk je hoe iemand iets doet, dan heb je 得 nodig. 比 + B mag vóór het werkwoord staan of na 得. Beide zijn goed. Het verschil komt weer achteraan.",
      ex: [
        { cn: "他跑得比我快。", py: "Tā pǎo de bǐ wǒ kuài.", nl: "Hij loopt harder dan ik." },
        { cn: "她比我说得好多了。", py: "Tā bǐ wǒ shuō de hǎo duō le.", nl: "Zij spreekt het veel beter dan ik." }
      ] },
    { h: "跟 ... 一样 en 跟 ... 不一样",
      p: "跟 ... 一样 zegt dat twee dingen gelijk zijn. Zet je er een eigenschap achter, dan zeg je waarin. 不 staat vóór 一样: 跟 ... 不一样 betekent \"anders dan\". In spreektaal hoor je ook 和 in plaats van 跟.",
      ex: [
        { cn: "我的想法跟你的不一样。", py: "Wǒ de xiǎngfǎ gēn nǐ de bù yíyàng.", nl: "Mijn idee is anders dan het jouwe." }
      ] }
  ],
  mistakes: [
    { wrong: "他比我很高。", right: "他比我还高。", why: "很 en 非常 kunnen niet in een 比-zin. 还 en 更 wel." },
    { wrong: "他比我两岁大。", right: "他比我大两岁。", why: "Het verschil komt ná de eigenschap." },
    { wrong: "我比他不高。", right: "我没有他高。", why: "\"Minder ... dan\" zeg je met 没有, niet met 比 + 不." },
    { wrong: "我跟你一样很高。", right: "我跟你一样高。", why: "Na 一样 komt de eigenschap zonder 很." }
  ],
  vocab: [
    ["比", "bǐ", "dan (bij vergelijken)"], ["更", "gèng", "nog meer"], ["一样", "yíyàng", "hetzelfde, even"],
    ["那么", "nàme", "zo (bij vergelijken)"], ["瘦", "shòu", "dun, slank"], ["安静", "ānjìng", "rustig, stil"],
    ["像", "xiàng", "lijken op"], ["数学", "shùxué", "wiskunde"], ["城市", "chéngshì", "stad"], ["地铁", "dìtiě", "metro"]
  ],
  dialogue: [
    ["A", "北京和上海，你觉得哪个城市好？", "Běijīng hé Shànghǎi, nǐ juéde nǎge chéngshì hǎo?", "Beijing of Shanghai, welke stad vind jij beter?"],
    ["B", "北京的冬天比上海冷多了。", "Běijīng de dōngtiān bǐ Shànghǎi lěng duō le.", "De winter in Beijing is veel kouder dan in Shanghai."],
    ["A", "上海呢？", "Shànghǎi ne?", "En Shanghai?"],
    ["B", "上海没有北京那么冷，可是比北京贵一点儿。", "Shànghǎi méiyǒu Běijīng nàme lěng, kěshì bǐ Běijīng guì yìdiǎnr.", "Shanghai is niet zo koud als Beijing, maar wel iets duurder."],
    ["A", "那我还是去北京吧。", "Nà wǒ háishi qù Běijīng ba.", "Dan ga ik toch maar naar Beijing."]
  ],
  reading: {
    title: "我和我姐姐",
    lines: [
      { cn: "我有一个姐姐，她比我大三岁。", py: "Wǒ yǒu yí ge jiějie, tā bǐ wǒ dà sān suì.", nl: "Ik heb een oudere zus. Ze is drie jaar ouder dan ik." },
      { cn: "我们长得很像，可是她比我高一点儿，也比我瘦。", py: "Wǒmen zhǎng de hěn xiàng, kěshì tā bǐ wǒ gāo yìdiǎnr, yě bǐ wǒ shòu.", nl: "We lijken erg op elkaar, maar zij is iets langer en ook slanker dan ik." },
      { cn: "姐姐很安静，喜欢在家看书。", py: "Jiějie hěn ānjìng, xǐhuan zài jiā kàn shū.", nl: "Mijn zus is rustig en leest graag thuis." },
      { cn: "我没有她那么安静，我更喜欢跟朋友出去玩儿。", py: "Wǒ méiyǒu tā nàme ānjìng, wǒ gèng xǐhuan gēn péngyou chūqu wánr.", nl: "Ik ben niet zo rustig als zij. Ik ga liever met vrienden op stap." },
      { cn: "她的数学比我好多了，可是我的英语比她好。", py: "Tā de shùxué bǐ wǒ hǎo duō le, kěshì wǒ de Yīngyǔ bǐ tā hǎo.", nl: "Ze is veel beter in wiskunde dan ik, maar mijn Engels is beter dan het hare." },
      { cn: "我们都喜欢唱歌。", py: "Wǒmen dōu xǐhuan chàng gē.", nl: "We zingen allebei graag." },
      { cn: "妈妈说，我跟姐姐唱得一样好。", py: "Māma shuō, wǒ gēn jiějie chàng de yíyàng hǎo.", nl: "Mama zegt dat ik even goed zing als mijn zus." },
      { cn: "我觉得，有姐姐比没有姐姐好多了！", py: "Wǒ juéde, yǒu jiějie bǐ méiyǒu jiějie hǎo duō le!", nl: "Ik vind een zus hebben veel beter dan geen zus hebben!" }
    ],
    questions: [
      { type: "mc", q: "Waarin is de schrijver beter dan haar zus?",
        options: ["In Engels.", "In wiskunde.", "In zingen.", "In lezen."], answer: 0,
        why: ["Goed: 我的英语比她好。", "Andersom: 她的数学比我好多了。", "Ze zingen even goed: 唱得一样好.", "Over lezen wordt niet vergeleken; de zus leest graag."] },
      { type: "mc", q: "Wat is waar over de zus?",
        options: ["Ze is ouder, langer en slanker.", "Ze is jonger en langer.", "Ze is ouder, maar kleiner.", "Ze is even oud en even lang."], answer: 0,
        why: ["Goed: 比我大三岁, 比我高一点儿, 也比我瘦.", "Ze is drie jaar ouder (大三岁), niet jonger.", "Ze is iets langer: 比我高一点儿.", "Er is wel verschil: drie jaar en een beetje lengte."] },
      { type: "mc", q: "我没有她那么安静。Wat betekent dit?",
        options: ["Ik ben minder rustig dan zij.", "Ik ben rustiger dan zij.", "Ik ben even rustig als zij.", "Ik ben helemaal niet rustig, en zij ook niet."], answer: 0,
        why: ["Goed: A 没有 B 那么 + eigenschap = A is minder ... dan B.", "Dat zou 我比她安静 zijn.", "Dat zou 我跟她一样安静 zijn.", "没有 ... 那么 vergelijkt; het zegt niets over \"helemaal niet\"."] }
    ]
  },
  questions: [
    { type: "mc", q: "Welke zin klopt?",
      options: ["地铁比公共汽车快多了。", "地铁比公共汽车很快。", "地铁比公共汽车非常快。", "地铁快比公共汽车。"], answer: 0,
      why: ["Goed: 多了 komt achter de eigenschap.", "很 mag niet in een 比-zin.", "非常 mag ook niet in een 比-zin.", "比 + B komt vóór de eigenschap."] },
    { type: "mc", q: "\"Shanghai is niet zo koud als Beijing.\"",
      options: ["上海没有北京那么冷。", "上海不比北京冷。", "上海比北京没有冷。", "上海没有比北京冷。"], answer: 0,
      why: ["Goed: A 没有 B 那么 + eigenschap.", "不比 betekent \"niet kouder dan\": ongeveer even koud. Dat is iets anders.", "没有 staat vóór B, niet na 比 B.", "Gebruik 没有 B 那么, niet 没有 比 B."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik ben even lang als mijn zus.\"",
      tokens: [["我", "wǒ"], ["跟", "gēn"], ["我姐姐", "wǒ jiějie"], ["一样", "yíyàng"], ["高", "gāo"]] },
    { type: "mc", q: "这件衣服比那件___贵。",
      options: ["还", "很", "非常", "太"], answer: 0,
      why: ["Goed: 还 (of 更) mag wel in een 比-zin.", "很 mag niet in een 比-zin.", "非常 mag niet in een 比-zin.", "太 mag niet in een 比-zin."] },
    { type: "mc", q: "\"Hij loopt harder dan ik.\"",
      options: ["他跑得比我快。", "他跑比我得快。", "他比我快跑得。", "他跑得快比我。"], answer: 0,
      why: ["Goed: werkwoord + 得 + 比 B + eigenschap.", "得 hoort direct achter het werkwoord 跑.", "De eigenschap 快 komt achteraan, na 跑得.", "比 + B staat vóór de eigenschap, niet erachter."] },
    { type: "mc", q: "\"Deze is twintig yuan duurder dan die.\"",
      options: ["这个比那个贵二十块。", "这个比那个二十块贵。", "这个二十块比那个贵。", "这个比那个很贵二十块。"], answer: 0,
      why: ["Goed: het verschil (二十块) komt achter 贵.", "Het verschil staat achter de eigenschap, niet ervoor.", "Het verschil hoort niet vooraan in de zin.", "很 mag niet in een 比-zin."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["我比他非常忙。", "我比他忙多了。", "我比他更忙。", "我没有他那么忙。"], answer: 0,
      why: ["Goed: deze is fout. 非常 kan niet in een 比-zin.", "Deze klopt: 多了 achter de eigenschap.", "Deze klopt: 更 mag in een 比-zin.", "Deze klopt: A 没有 B 那么 + eigenschap."] },
    { type: "order", q: "Zet in de goede volgorde: \"Vandaag is het veel kouder dan gisteren.\"",
      tokens: [["今天", "jīntiān"], ["比", "bǐ"], ["昨天", "zuótiān"], ["冷", "lěng"], ["多了", "duō le"]] },
    { type: "fill", q: "我跟你___，也喜欢喝茶。(Ik ben net als jij: ik drink ook graag thee.)", answers: ["一样"],
      hint: "Welk woord hoort bij 跟 als twee dingen gelijk zijn?", why: "A 跟 B 一样 = A is net als B." },
    { type: "mc", q: "我的房间___你的房间那么大。(Mijn kamer is niet zo groot als de jouwe.)",
      options: ["没有", "不比", "不是", "不跟"], answer: 0,
      why: ["Goed: A 没有 B 那么 + eigenschap.", "不比 betekent \"niet groter dan\" en past niet bij 那么.", "不是 vergelijkt niet; het zegt \"is niet\".", "跟 hoort bij 一样, niet bij 那么."] },
    { type: "open", q: "Vergelijk twee dingen uit je eigen leven met 比.", model: ["我的新工作比以前的工作忙多了。", "我的猫比我的狗安静。"],
      tip: "Check: geen 很 in de zin, en het verschil (多了, 一点儿) staat achteraan." },
    { type: "open", q: "Vertaal: \"Mijn broer is drie jaar ouder dan ik.\"", model: ["我哥哥比我大三岁。"],
      tip: "Check: 比 + 我 + 大, en 三岁 staat achter 大. Gebruik 大 voor leeftijd, niet 老." }
  ],
  review: [
    { type: "mc", q: "\"Deze film is niet zo interessant als die.\"",
      options: ["这部电影没有那部电影那么有意思。", "这部电影比那部电影不有意思。", "这部电影不有意思比那部。", "这部电影那么没有那部电影有意思。"], answer: 0,
      why: ["Goed.", "不有意思 bestaat niet, en \"niet zo ... als\" is 没有 ... 那么.", "比 + B komt vóór de eigenschap.", "那么 staat ná B, vlak voor de eigenschap."] },
    { type: "mc", q: "我妹妹___我小三岁。",
      options: ["比", "跟", "没有", "一样"], answer: 0,
      why: ["Goed: 比我小三岁 = drie jaar jonger dan ik.", "跟 vraagt om 一样 erachter.", "没有 ... 小三岁 kan niet: bij 没有 komt geen verschil.", "一样 staat ná B, niet op deze plek."] },
    { type: "mc", q: "\"Deze tas is even duur als die.\"",
      options: ["这个包跟那个包一样贵。", "这个包跟那个包贵一样。", "这个包一样贵跟那个包。", "这个包跟那个包一样很贵。"], answer: 0,
      why: ["Goed: A 跟 B 一样 + eigenschap.", "一样 staat vóór de eigenschap, niet erachter.", "跟 + B komt vóór 一样.", "Na 一样 komt de eigenschap zonder 很."] }
  ]
})
