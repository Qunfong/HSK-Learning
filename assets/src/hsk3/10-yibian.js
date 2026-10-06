({
  id: "10", slug: "yibian", title: "一边……一边 en 又……又", sub: "Twee dingen tegelijk, twee eigenschappen samen",
  canDo: "Je kunt nu zeggen dat iemand twee dingen tegelijk doet, met 一边……一边, en dat iets twee eigenschappen heeft, met 又……又.",
  guess: {
    q: "这个苹果又大又甜。Wat betekent dit, denk je?",
    options: ["Deze appel is groot én zoet.", "Deze appel is groter dan zoet.", "Deze appel is opnieuw groot en zoet.", "Deze appel is groot maar niet zoet."], answer: 0,
    why: ["Goed: 又 + eigenschap + 又 + eigenschap = allebei tegelijk.", "Er wordt niets vergeleken; daarvoor heb je 比 nodig.", "又 kan \"weer\" betekenen, maar 又……又 is \"én ... én\".", "Er staat geen ontkenning; beide eigenschappen kloppen."]
  },
  problem: "In het Nederlands zeg je \"hij eet terwijl hij tv kijkt\" of \"de appel is groot en zoet\". Het Chinees heeft daar twee vaste paren voor. 一边……一边 (yìbiān) is voor twee handelingen tegelijk. 又……又 (yòu) is voor twee eigenschappen samen.",
  pattern: [
    { l: "wie", v: "他", c: 1 }, { l: "一边", v: "一边", c: 2, key: true }, { l: "handeling 1", v: "吃饭", c: 4 },
    { l: "一边", v: "一边", c: 2, key: true }, { l: "handeling 2", v: "看电视", c: 5 }
  ],
  patternCap: "Wie + 一边 + handeling 1 + 一边 + handeling 2  ·  Ding + 又 + eigenschap 1 + 又 + eigenschap 2 (又大又甜)",
  rules: [
    "一边……一边 verbindt twee handelingen die tegelijk gebeuren. Wie het doet staat vóór het eerste 一边.",
    "Na 一边 komt een werkwoord (een handeling), geen eigenschap.",
    "又……又 verbindt twee eigenschappen: 又大又甜. Zet er geen 很 bij.",
    "Bij 又……又 wijzen beide kanten dezelfde kant op: allebei goed of allebei slecht.",
    "In spreektaal kan 一边……一边 korter: 边吃边聊."
  ],
  pitfall: "Eigenschappen (groot, moe, mooi) krijgen 又……又, nooit 一边……一边. 我一边累一边饿 is fout: zeg 我又累又饿.",
  examples: [
    { cn: "他一边吃饭一边看电视。", py: "Tā yìbiān chīfàn yìbiān kàn diànshì.", nl: "Hij eet terwijl hij tv kijkt." },
    { cn: "我们一边走一边聊吧。", py: "Wǒmen yìbiān zǒu yìbiān liáo ba.", nl: "Laten we onder het lopen praten." },
    { cn: "这个苹果又大又甜。", py: "Zhège píngguǒ yòu dà yòu tián.", nl: "Deze appel is groot én zoet." },
    { cn: "今天我又累又饿。", py: "Jīntiān wǒ yòu lèi yòu è.", nl: "Vandaag ben ik moe en heb ik honger." }
  ],
  nuance: [
    { h: "一边……一边 of 又……又?",
      p: "Kijk wat er na het woordje komt. Een handeling die je dóet (eten, lopen, luisteren)? Dan 一边……一边, en die handelingen gebeuren tegelijk. Een eigenschap van iets of iemand (groot, schoon, moe)? Dan 又……又.",
      ex: [
        { cn: "她一边听音乐一边做作业。", py: "Tā yìbiān tīng yīnyuè yìbiān zuò zuòyè.", nl: "Ze maakt huiswerk terwijl ze naar muziek luistert." },
        { cn: "她的房间又大又干净。", py: "Tā de fángjiān yòu dà yòu gānjìng.", nl: "Haar kamer is groot en schoon." }
      ] },
    { h: "又……又: dezelfde kant op",
      p: "Met 又……又 stapel je twee eigenschappen op. Ze zijn allebei positief, of allebei negatief. Wil je een positieve en een negatieve combineren, dan heb je 但是 of 可是 nodig. Zet ook geen 很 achter 又.",
      ex: [
        { cn: "这家饭馆又便宜又好吃。", py: "Zhè jiā fànguǎn yòu piányi yòu hǎochī.", nl: "Dit restaurant is goedkoop en lekker." },
        { cn: "这家饭馆又贵又不好吃。", py: "Zhè jiā fànguǎn yòu guì yòu bù hǎochī.", nl: "Dit restaurant is duur en ook nog niet lekker." }
      ] },
    { h: "一边……一边 of 着 (les 8)?",
      p: "Bij werkwoord + 着 + werkwoord is het eerste werkwoord de manier of houding: lachend, staand. Bij 一边……一边 zijn het twee echte handelingen, allebei even belangrijk. In spreektaal hoor je vaak de korte vorm 边……边.",
      ex: [
        { cn: "他笑着说：\"好啊！\"", py: "Tā xiàozhe shuō: \"Hǎo a!\"", nl: "Hij zei lachend: \"Goed!\"" },
        { cn: "我们边吃边聊吧。", py: "Wǒmen biān chī biān liáo ba.", nl: "Laten we onder het eten praten." }
      ] }
  ],
  mistakes: [
    { wrong: "我一边累一边饿。", right: "我又累又饿。", why: "累 en 饿 zijn toestanden, geen handelingen. Daarvoor is 又……又." },
    { wrong: "这个苹果又很大又很甜。", right: "这个苹果又大又甜。", why: "Na 又 staat de eigenschap zonder 很." },
    { wrong: "这家饭馆又便宜又不好吃。", right: "这家饭馆又便宜又好吃。", why: "Bij 又……又 wijzen beide eigenschappen dezelfde kant op: allebei goed of allebei slecht." },
    { wrong: "一边他吃饭一边看电视。", right: "他一边吃饭一边看电视。", why: "Wie het doet staat vóór het eerste 一边." }
  ],
  vocab: [
    ["一边……一边 / 又……又", "yìbiān……yìbiān / yòu……yòu", "tegelijk ... en ... / zowel ... als ..."], ["聊天", "liáotiān", "kletsen, praten"], ["甜", "tián", "zoet"],
    ["累", "lèi", "moe"], ["饿", "è", "honger hebben"], ["便宜", "piányi", "goedkoop"],
    ["饭馆", "fànguǎn", "restaurant"], ["热情", "rèqíng", "hartelijk, vriendelijk"], ["音乐", "yīnyuè", "muziek"], ["健康", "jiànkāng", "gezond"]
  ],
  dialogue: [
    ["A", "学校旁边那家饭馆怎么样？", "Xuéxiào pángbiān nà jiā fànguǎn zěnmeyàng?", "Hoe is dat restaurant naast de school?"],
    ["B", "很好！那儿的菜又便宜又好吃。", "Hěn hǎo! Nàr de cài yòu piányi yòu hǎochī.", "Heel goed! Het eten daar is goedkoop en lekker."],
    ["A", "服务员呢？", "Fúwùyuán ne?", "En de bediening?"],
    ["B", "服务员也很热情。我常常在那儿一边吃饭一边跟朋友聊天。", "Fúwùyuán yě hěn rèqíng. Wǒ chángcháng zài nàr yìbiān chīfàn yìbiān gēn péngyou liáotiān.", "De bediening is ook heel vriendelijk. Ik zit daar vaak met vrienden te kletsen onder het eten."],
    ["A", "那我们今天晚上就去那儿吧！", "Nà wǒmen jīntiān wǎnshang jiù qù nàr ba!", "Laten we er dan vanavond heen gaan!"]
  ],
  reading: {
    title: "我的奶奶",
    lines: [
      { cn: "我的奶奶今年七十岁了，可是她又健康又快乐。", py: "Wǒ de nǎinai jīnnián qīshí suì le, kěshì tā yòu jiànkāng yòu kuàilè.", nl: "Mijn oma is dit jaar zeventig geworden, maar ze is gezond en vrolijk." },
      { cn: "每天早上，她在公园里一边听音乐一边跑步。", py: "Měi tiān zǎoshang, tā zài gōngyuán li yìbiān tīng yīnyuè yìbiān pǎobù.", nl: "Elke ochtend rent ze in het park terwijl ze naar muziek luistert." },
      { cn: "中午，她常常一边做饭一边给我打电话。", py: "Zhōngwǔ, tā chángcháng yìbiān zuò fàn yìbiān gěi wǒ dǎ diànhuà.", nl: "'s Middags belt ze me vaak terwijl ze kookt." },
      { cn: "她做的菜又好看又好吃。", py: "Tā zuò de cài yòu hǎokàn yòu hǎochī.", nl: "Het eten dat ze maakt, ziet er mooi uit en is lekker." },
      { cn: "下午，她和朋友们一边喝茶一边聊天。", py: "Xiàwǔ, tā hé péngyoumen yìbiān hē chá yìbiān liáotiān.", nl: "'s Middags drinkt ze thee en kletst ze met haar vriendinnen." },
      { cn: "上个星期我去看她，她给了我一个又大又甜的西瓜。", py: "Shàng ge xīngqī wǒ qù kàn tā, tā gěile wǒ yí ge yòu dà yòu tián de xīguā.", nl: "Vorige week ging ik bij haar langs. Ze gaf me een grote, zoete watermeloen." },
      { cn: "我问她：\"奶奶，您为什么每天都这么高兴？\"", py: "Wǒ wèn tā: \"Nǎinai, nín wèi shénme měi tiān dōu zhème gāoxìng?\"", nl: "Ik vroeg haar: \"Oma, waarom bent u elke dag zo blij?\"" },
      { cn: "她笑着说：\"因为我每天都做我喜欢的事！\"", py: "Tā xiàozhe shuō: \"Yīnwèi wǒ měi tiān dōu zuò wǒ xǐhuan de shì!\"", nl: "Ze zei lachend: \"Omdat ik elke dag doe wat ik leuk vind!\"" }
    ],
    questions: [
      { type: "mc", q: "Wat doet oma 's middags (下午)?",
        options: ["Ze drinkt thee en kletst met vriendinnen.", "Ze rent in het park.", "Ze kookt en belt de schrijver.", "Ze koopt een watermeloen."], answer: 0,
        why: ["Goed: 下午，她和朋友们一边喝茶一边聊天。", "Rennen doet ze 's ochtends (早上).", "Koken en bellen doet ze rond het middageten (中午).", "De watermeloen gaf ze vorige week aan de schrijver."] },
      { type: "mc", q: "Wat kreeg de schrijver van oma?",
        options: ["Een grote, zoete watermeloen.", "Een kleine, zoete appel.", "Een kopje thee.", "Een cd met muziek."], answer: 0,
        why: ["Goed: 一个又大又甜的西瓜。", "Het was een watermeloen, en hij was groot.", "Thee drinkt oma met haar vriendinnen.", "Muziek luistert oma zelf, tijdens het rennen."] },
      { type: "mc", q: "她常常一边做饭一边给我打电话。Wat betekent 一边……一边 hier?",
        options: ["Ze kookt en belt tegelijk.", "Ze kookt eerst en belt daarna.", "Ze kookt óf ze belt.", "Ze kookt voor de schrijver."], answer: 0,
        why: ["Goed: 一边……一边 = twee handelingen tegelijk.", "Na elkaar zou 先……然后 zijn.", "\"Of\" is 还是 of 或者, niet 一边.", "给我 hoort bij 打电话: ze belt mij."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik ben moe en heb honger.\"",
      options: ["我又累又饿。", "我一边累一边饿。", "我又很累又很饿。", "我累又饿又。"], answer: 0,
      why: ["Goed: twee toestanden, dus 又……又.", "累 en 饿 zijn geen handelingen; 一边……一边 past niet.", "Na 又 staat geen 很.", "又 staat vóór elke eigenschap."] },
    { type: "mc", q: "\"Hij luistert naar muziek terwijl hij huiswerk maakt.\"",
      options: ["他一边听音乐一边做作业。", "他一边听音乐做作业一边。", "一边他听音乐一边做作业。", "他一边听音乐又做作业。"], answer: 0,
      why: ["Goed: 一边 vóór elke handeling.", "Het tweede 一边 staat vóór de tweede handeling, niet achteraan.", "Wie het doet staat vóór het eerste 一边.", "一边 en 又 meng je niet: het blijft 一边……一边."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ze kocht een grote, zoete watermeloen.\"",
      tokens: [["她", "tā"], ["买了", "mǎile"], ["一个", "yí ge"], ["又大又甜的", "yòu dà yòu tián de"], ["西瓜", "xīguā"]] },
    { type: "fill", q: "这件衣服又便宜___漂亮。(Dit kledingstuk is goedkoop én mooi.)", answers: ["又"],
      hint: "Welk woord staat ook vóór 便宜?", why: "又……又: 又 staat vóór elke eigenschap." },
    { type: "mc", q: "这个西瓜___大___甜。(Deze watermeloen is groot én zoet.)",
      options: ["又……又", "一边……一边", "又……一边", "一边……又"], answer: 0,
      why: ["Goed: twee eigenschappen, dus 又……又.", "一边……一边 is voor handelingen, niet voor eigenschappen.", "De twee woordjes van het paar zijn gelijk: 又……又.", "Je mengt 一边 en 又 niet."] },
    { type: "mc", q: "Hoe zeg je 一边走一边聊 korter, in spreektaal?",
      options: ["边走边聊", "一走一聊", "边走聊", "走边聊边"], answer: 0,
      why: ["Goed: 边……边 is de korte vorm.", "一 alleen is geen korte vorm van 一边.", "Vóór elke handeling moet 边 staan.", "边 staat vóór de handeling, niet erachter."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["他一边高一边帅。", "他又高又帅。", "他一边唱歌一边洗碗。", "这家店的东西又好又便宜。"], answer: 0,
      why: ["Goed: 高 en 帅 zijn eigenschappen. Zeg: 他又高又帅。", "Dit klopt: twee eigenschappen met 又……又.", "Dit klopt: twee handelingen tegelijk.", "Dit klopt: twee positieve eigenschappen."] },
    { type: "mc", q: "这家饭馆又贵又不好吃。Wat zegt de spreker?",
      options: ["Het restaurant is duur en ook nog niet lekker.", "Het restaurant is duur maar wel lekker.", "Het restaurant is goedkoop en lekker.", "Het restaurant wordt steeds duurder."], answer: 0,
      why: ["Goed: twee negatieve eigenschappen samen.", "又……又 zet twee dingen dezelfde kant op; \"maar\" is 但是.", "贵 is duur, niet goedkoop.", "\"Steeds meer\" is 越来越."] },
    { type: "order", q: "Zet in de goede volgorde: \"Mama laat me niet eten terwijl ik tv kijk.\"",
      tokens: [["妈妈", "māma"], ["不让", "bú ràng"], ["我", "wǒ"], ["一边吃饭一边看电视", "yìbiān chīfàn yìbiān kàn diànshì"]] },
    { type: "open", q: "Vertaal: \"Deze appel is groot en zoet.\"", model: ["这个苹果又大又甜。"],
      tip: "Check: 又 vóór elke eigenschap, en geen 很." },
    { type: "open", q: "Vertaal: \"Ze belt terwijl ze kookt.\"", model: ["她一边做饭一边打电话。", "她边做饭边打电话。"],
      tip: "Check: 她 vóór het eerste 一边, en na elk 一边 een handeling." }
  ],
  review: [
    { type: "mc", q: "\"Ik heb het warm en heb dorst.\"",
      options: ["我又热又渴。", "我一边热一边渴。", "我又很热又很渴。", "我热又渴又。"], answer: 0,
      why: ["Goed: twee toestanden, dus 又……又.", "热 en 渴 zijn geen handelingen.", "Na 又 staat geen 很.", "又 staat vóór elke eigenschap."] },
    { type: "mc", q: "\"Hij werkt en studeert tegelijk.\"",
      options: ["他一边工作一边学习。", "他一边工作学习一边。", "一边他工作一边学习。", "他一边工作又学习。"], answer: 0,
      why: ["Goed: 一边 vóór elke handeling.", "Het tweede 一边 staat vóór 学习.", "Wie het doet staat vóór het eerste 一边.", "Je mengt 一边 en 又 niet."] },
    { type: "mc", q: "这个手机又便宜又好用。Wat betekent dit?",
      options: ["Deze telefoon is goedkoop én handig.", "Deze telefoon is goedkoop maar niet handig.", "Deze telefoon wordt steeds goedkoper.", "Deze telefoon is opnieuw goedkoop."], answer: 0,
      why: ["Goed: 又……又 = twee eigenschappen samen.", "Er staat geen ontkenning, en 又……又 wijst dezelfde kant op.", "\"Steeds meer\" is 越来越.", "又……又 is \"én ... én\", niet \"opnieuw\"."] }
  ]
})
