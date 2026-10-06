({
  id: "14", slug: "ruguo", title: "如果 ... 就 en 只要 ... 就", sub: "Als ... dan, en zolang ... dan",
  canDo: "Je kunt nu een voorwaarde stellen met 如果 ... 就, en zeggen dat één ding genoeg is met 只要 ... 就.",
  guess: {
    q: "\"Als het morgen regent, gaan we niet.\" Welke zin klopt, denk je?",
    options: ["如果明天下雨，我们就不去了。", "如果明天下雨，就我们不去了。", "如果明天下雨，我们不去就了。", "明天下雨如果，我们就不去了。"], answer: 0,
    why: ["Goed: 如果 + voorwaarde, dan onderwerp + 就 + gevolg.", "就 staat na het onderwerp, niet ervoor.", "就 staat vóór 不去, niet aan het eind.", "如果 staat aan het begin van de voorwaarde."]
  },
  problem: "In het Nederlands zeg je: \"Als je tijd hebt, kom dan langs.\" Het Chinees markeert ook beide delen. 如果 (rúguǒ) opent de voorwaarde. 就 (jiù) staat in het tweede deel, vlak vóór het werkwoord. 只要 (zhǐyào) ... 就 zegt dat één voorwaarde genoeg is: \"zolang ...\", \"als ... maar\".",
  pattern: [
    { l: "如果", v: "如果", c: 1, key: true }, { l: "voorwaarde", v: "你有时间", c: 2 },
    { l: "wie", v: "我们", c: 3 }, { l: "就", v: "就", c: 4, key: true }, { l: "gevolg", v: "一起去吧", c: 5 }
  ],
  patternCap: "如果/要是/只要 + voorwaarde，(onderwerp) + 就 + gevolg",
  rules: [
    "如果 staat vóór of na het onderwerp: 如果你去 en 你如果去 kunnen allebei.",
    "就 is een bijwoord. Het staat na het onderwerp, direct vóór het werkwoord of 不/要/会.",
    "Ontkennen: 就 staat vóór 不 of 没: 我就不去了。",
    "In spreektaal gebruik je vaak 要是 (yàoshi) in plaats van 如果."
  ],
  pitfall: "就 staat nooit vóór het onderwerp. Zeg 我们就去, niet 就我们去.",
  examples: [
    { cn: "如果你有时间，我们就一起去吧。", py: "Rúguǒ nǐ yǒu shíjiān, wǒmen jiù yìqǐ qù ba.", nl: "Als je tijd hebt, laten we dan samen gaan." },
    { cn: "如果明天不下雨，我就去爬山。", py: "Rúguǒ míngtiān bú xià yǔ, wǒ jiù qù pá shān.", nl: "Als het morgen niet regent, ga ik bergwandelen." },
    { cn: "只要多练习，你就能说好中文。", py: "Zhǐyào duō liànxí, nǐ jiù néng shuōhǎo Zhōngwén.", nl: "Als je maar veel oefent, kun je goed Chinees spreken." },
    { cn: "要是你不舒服，就早点儿回家吧。", py: "Yàoshi nǐ bù shūfu, jiù zǎo diǎnr huí jiā ba.", nl: "Als je je niet goed voelt, ga dan maar vroeg naar huis." }
  ],
  nuance: [
    { h: "如果 of 只要?",
      p: "如果 stelt gewoon een voorwaarde: \"als\". 只要 zegt: deze ene voorwaarde is genoeg, meer is niet nodig. Vertaal 只要 met \"als ... maar\" of \"zolang\". 只要 hoort bijna altijd bij 就.",
      ex: [
        { cn: "如果你来，我就很高兴。", py: "Rúguǒ nǐ lái, wǒ jiù hěn gāoxìng.", nl: "Als je komt, ben ik blij." },
        { cn: "只要你来，我就很高兴。", py: "Zhǐyào nǐ lái, wǒ jiù hěn gāoxìng.", nl: "Als je maar komt, ben ik al blij." }
      ] },
    { h: "要是 in spreektaal",
      p: "要是 betekent hetzelfde als 如果, maar klinkt informeler. Je hoort het veel in gesprekken. In geschreven teksten en op het werk is 如果 gewoner. Allebei combineer je met 就.",
      ex: [
        { cn: "要是你饿了，冰箱里有面包。", py: "Yàoshi nǐ è le, bīngxiāng li yǒu miànbāo.", nl: "Als je honger hebt: er ligt brood in de koelkast." }
      ] },
    { h: "De plaats van 就, en wanneer het weg mag",
      p: "就 staat na het onderwerp en vóór het werkwoord. Zonder onderwerp in het tweede deel staat 就 vooraan dat deel: 如果下雨，就别去了。Na 如果 mag 就 soms weg, vooral in korte zinnen. Na 只要 laat je 就 bijna nooit weg.",
      ex: [
        { cn: "如果下雨，就别去了。", py: "Rúguǒ xià yǔ, jiù bié qù le.", nl: "Als het regent, ga dan maar niet." }
      ] }
  ],
  mistakes: [
    { wrong: "如果你不去，就我也不去。", right: "如果你不去，我也就不去了。", why: "就 staat na het onderwerp: 我就 / 我也就, niet 就我." },
    { wrong: "如果你累了，你休息就吧。", right: "如果你累了，你就休息吧。", why: "就 staat vóór het werkwoord, niet erna." },
    { wrong: "只要你努力，你能考好。", right: "只要你努力，你就能考好。", why: "只要 vraagt bijna altijd om 就 in het tweede deel." },
    { wrong: "如果明天下雨，所以我们不去。", right: "如果明天下雨，我们就不去。", why: "如果 hoort bij 就, niet bij 所以." }
  ],
  vocab: [
    ["如果 ... 就", "rúguǒ ... jiù", "als ... dan"], ["只要 ... 就", "zhǐyào ... jiù", "als ... maar, zolang"], ["要是", "yàoshi", "als (spreektaal)"],
    ["爬山", "pá shān", "bergwandelen"], ["练习", "liànxí", "oefenen"], ["舒服", "shūfu", "lekker, prettig"],
    ["记得", "jìde", "onthouden, niet vergeten"], ["复习", "fùxí", "herhalen, studeren"], ["天气预报", "tiānqì yùbào", "weerbericht"], ["带", "dài", "meenemen"]
  ],
  dialogue: [
    ["A", "这个周末你想做什么？", "Zhège zhōumò nǐ xiǎng zuò shénme?", "Wat wil je dit weekend doen?"],
    ["B", "如果天气好，我就去爬山。", "Rúguǒ tiānqì hǎo, wǒ jiù qù pá shān.", "Als het mooi weer is, ga ik bergwandelen."],
    ["A", "天气预报说星期六会下雨。", "Tiānqì yùbào shuō xīngqīliù huì xià yǔ.", "Het weerbericht zegt dat het zaterdag gaat regenen."],
    ["B", "要是下雨，我就在家看电影。", "Yàoshi xià yǔ, wǒ jiù zài jiā kàn diànyǐng.", "Als het regent, kijk ik thuis een film."],
    ["A", "我可以来吗？只要有好电影，我就高兴。", "Wǒ kěyǐ lái ma? Zhǐyào yǒu hǎo diànyǐng, wǒ jiù gāoxìng.", "Mag ik komen? Als er maar een goede film is, ben ik blij."],
    ["B", "当然可以！", "Dāngrán kěyǐ!", "Natuurlijk!"]
  ],
  reading: {
    title: "老师的话",
    lines: [
      { cn: "下个星期我们有中文考试。", py: "Xià ge xīngqī wǒmen yǒu Zhōngwén kǎoshì.", nl: "Volgende week hebben we een examen Chinees." },
      { cn: "李老师对我们说：\"别担心。\"", py: "Lǐ lǎoshī duì wǒmen shuō: \"Bié dānxīn.\"", nl: "Leraar Li zei tegen ons: \"Maak je geen zorgen.\"" },
      { cn: "\"只要每天复习半个小时，你们就能考好。\"", py: "\"Zhǐyào měi tiān fùxí bàn ge xiǎoshí, nǐmen jiù néng kǎohǎo.\"", nl: "\"Als je maar elke dag een half uur herhaalt, haal je een goed resultaat.\"" },
      { cn: "\"如果有不懂的问题，就来办公室找我。\"", py: "\"Rúguǒ yǒu bù dǒng de wèntí, jiù lái bàngōngshì zhǎo wǒ.\"", nl: "\"Als je iets niet begrijpt, kom me dan opzoeken op mijn kantoor.\"" },
      { cn: "\"考试那天，记得带两支笔。\"", py: "\"Kǎoshì nà tiān, jìde dài liǎng zhī bǐ.\"", nl: "\"Neem op de dag van het examen twee pennen mee.\"" },
      { cn: "\"要是迟到了，你们就不能进教室了。\"", py: "\"Yàoshi chídào le, nǐmen jiù bù néng jìn jiàoshì le.\"", nl: "\"Als je te laat bent, mag je het lokaal niet meer in.\"" },
      { cn: "我们听了以后，都放心了。", py: "Wǒmen tīngle yǐhòu, dōu fàngxīn le.", nl: "Toen we dat hoorden, waren we allemaal gerustgesteld." }
    ],
    questions: [
      { type: "mc", q: "Wat moeten de leerlingen elke dag doen?",
        options: ["Een half uur herhalen.", "Naar het kantoor van de leraar gaan.", "Twee pennen kopen.", "Een uur herhalen."], answer: 0,
        why: ["Goed: 只要每天复习半个小时 ...", "Dat hoeft alleen als je iets niet begrijpt.", "Ze moeten pennen meenemen naar het examen, niet elke dag kopen.", "Het is 半个小时: een half uur."] },
      { type: "mc", q: "Wat gebeurt er als je te laat komt?",
        options: ["Je mag het lokaal niet in.", "Je krijgt een extra pen.", "Je moet naar het kantoor.", "Er gebeurt niets."], answer: 0,
        why: ["Goed: 要是迟到了，你们就不能进教室了。", "Pennen hebben niets met te laat komen te maken.", "Het kantoor is voor vragen.", "De tekst zegt 不能进教室."] },
      { type: "mc", q: "只要每天复习半个小时，你们就能考好。Wat zegt 只要 hier?",
        options: ["Een half uur per dag is genoeg.", "Je moet minstens een uur per dag studeren.", "Je hoeft niet te studeren.", "Je mag niet meer dan een half uur studeren."], answer: 0,
        why: ["Goed: 只要 = deze ene voorwaarde is genoeg.", "Er staat 半个小时, en dat is al genoeg.", "Er staat wel dat je moet herhalen.", "只要 zegt niets over een maximum."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Als je het niet lekker vindt, eet het dan niet.\"",
      options: ["如果你觉得不好吃，就别吃了。", "如果你觉得不好吃，所以别吃了。", "如果你觉得不好吃，别就吃了。", "你觉得不好吃如果，就别吃了。"], answer: 0,
      why: ["Goed: 如果 ... 就.", "如果 hoort bij 就, niet bij 所以.", "就 staat vóór 别, niet erna.", "如果 staat aan het begin van de voorwaarde."] },
    { type: "order", q: "Zet in de goede volgorde: \"Als je tijd hebt, bel me dan.\"",
      tokens: [["如果", "rúguǒ"], ["你有时间", "nǐ yǒu shíjiān"], ["就", "jiù"], ["给我", "gěi wǒ"], ["打电话吧", "dǎ diànhuà ba"]] },
    { type: "mc", q: "Waar staat 就?",
      options: ["如果明天不忙，我就去看你。", "如果明天不忙，就我去看你。", "如果明天不忙，我去就看你。", "如果明天不忙，我去看你就。"], answer: 0,
      why: ["Goed: na het onderwerp, vóór het werkwoord.", "就 staat niet vóór het onderwerp.", "就 staat vóór het eerste werkwoord 去.", "就 staat niet aan het eind."] },
    { type: "fill", q: "___你喜欢，就拿去吧。(Als je het maar leuk vindt, neem het maar.)", answers: ["只要"],
      hint: "Eén voorwaarde is genoeg: \"als ... maar\".", why: "只要 ... 就: dat je het leuk vindt is genoeg." },
    { type: "mc", q: "Welk woord klinkt het meest als spreektaal?",
      options: ["要是", "如果", "只要", "因为"], answer: 0,
      why: ["Goed: 要是 = als, informeel.", "如果 is neutraal en ook formeel.", "只要 betekent \"als ... maar\", niet alleen \"als\".", "因为 betekent \"omdat\"."] },
    { type: "mc", q: "只要你多听多说，你___能学好中文。",
      options: ["就", "才", "所以", "但是"], answer: 0,
      why: ["Goed: 只要 ... 就.", "只要 hoort bij 就. Met 才 hoort 只有.", "所以 hoort bij 因为.", "但是 hoort bij 虽然."] },
    { type: "order", q: "Zet in de goede volgorde: \"Als het morgen regent, gaan we niet.\"",
      tokens: [["如果", "rúguǒ"], ["明天下雨", "míngtiān xià yǔ"], ["我们", "wǒmen"], ["就", "jiù"], ["不去了", "bú qù le"]] },
    { type: "mc", q: "Wat is het verschil? A: 如果你来，我就很高兴。B: 只要你来，我就很高兴。",
      options: ["B zegt: alleen al dat je komt, is genoeg.", "A is fout, B is goed.", "A gaat over het verleden, B over de toekomst.", "Er is geen enkel verschil."], answer: 0,
      why: ["Goed: 只要 = deze voorwaarde is genoeg.", "A is ook goed.", "Allebei gaan over hetzelfde moment.", "只要 legt extra nadruk: \"als ... maar\"."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["要是你饿了，就我们去吃饭。", "要是你饿了，我们就去吃饭。", "如果你饿了，我们就去吃饭。", "你要是饿了，我们就去吃饭。"], answer: 0,
      why: ["Goed: deze is fout. 就 staat na 我们.", "Deze klopt.", "Deze klopt: 如果 = 要是.", "Deze klopt: 要是 mag na het onderwerp."] },
    { type: "open", q: "Vertaal: \"Als je naar China gaat, neem dan veel foto's.\"", model: ["如果你去中国，就多拍点儿照片吧。", "要是你去中国，就多拍照片。"],
      tip: "Check: 如果/要是 bij de voorwaarde, 就 vóór het werkwoord." },
    { type: "open", q: "Vertaal: \"Als je maar elke dag oefent, word je steeds beter.\"", model: ["只要你每天练习，就会越来越好。", "只要每天练习，你就会越来越好。"],
      tip: "Check: 只要 voor \"als ... maar\", en 就 in het tweede deel." }
  ],
  review: [
    { type: "mc", q: "\"Als je het niet weet, vraag het dan aan de leraar.\"",
      options: ["如果你不知道，就问老师。", "如果你不知道，所以问老师。", "如果你不知道，问就老师。", "你不知道如果，就问老师。"], answer: 0,
      why: ["Goed.", "如果 hoort bij 就, niet bij 所以.", "就 staat vóór het werkwoord.", "如果 staat vooraan in de voorwaarde."] },
    { type: "mc", q: "___有你在，我就不怕。(Als jij er maar bent, ben ik niet bang.)",
      options: ["只要", "虽然", "因为", "为了"], answer: 0,
      why: ["Goed: 只要 ... 就: dat jij er bent is genoeg.", "虽然 is \"hoewel\" en hoort bij 但是.", "因为 is \"omdat\" en hoort bij 所以.", "为了 noemt een doel."] },
    { type: "mc", q: "要是明天有空，你___来我家吧。",
      options: ["就", "才", "所以", "但是"], answer: 0,
      why: ["Goed: 要是 ... 就, net als 如果 ... 就.", "才 betekent \"pas\" en past hier niet.", "所以 hoort bij 因为.", "但是 hoort bij een tegenstelling."] }
  ]
})
