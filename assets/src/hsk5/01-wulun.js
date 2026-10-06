({
  id: "01", slug: "wulun", title: "无论 ... 都", sub: "Hoe het ook is, het resultaat blijft",
  canDo: "Je kunt nu zeggen dat iets altijd zo is, wat de omstandigheden ook zijn, met 无论 ... 都.",
  guess: {
    q: "无论天气怎么样，他都去跑步。Wat betekent dit, denk je?",
    options: ["Hoe het weer ook is, hij gaat altijd hardlopen.", "Als het mooi weer is, gaat hij hardlopen.", "Hij gaat hardlopen, maar niet bij slecht weer.", "Het weer is nooit goed om hard te lopen."], answer: 0,
    why: ["Goed: 无论 + vraag (怎么样) = hoe ... ook. 都 = altijd, in elk geval.", "Er staat geen voorwaarde zoals 如果: het weer maakt juist niet uit.", "都 zegt dat het in elk geval gebeurt, ook bij slecht weer.", "De zin zegt niets over goed of slecht weer, alleen dat het niet uitmaakt."]
  },
  problem: "Soms maakt de situatie niet uit. Het resultaat blijft hetzelfde. \"Hoe laat het ook is, hij belt altijd.\" Daarvoor gebruik je 无论 (wúlùn) ... 都 (dōu). Na 无论 komt een open vraag of een keuze. Na 都 komt wat in elk geval gebeurt.",
  pattern: [
    { l: "无论", v: "无论", c: 2, key: true }, { l: "vraag of keuze", v: "天气怎么样", c: 3 }, { l: "wie", v: "他", c: 1 },
    { l: "都", v: "都", c: 2, key: true }, { l: "resultaat", v: "去跑步", c: 4 }
  ],
  patternCap: "无论 + vraagwoord (什么, 谁, 哪儿, 怎么样, 多 + bn.) / A 还是 B / A-niet-A + ，wie + 都 (of 也) + resultaat",
  rules: [
    "Na 无论 staat een vraagwoord: 什么, 谁, 哪儿, 怎么样, of 多 + eigenschap (多忙).",
    "Een keuze kan ook: A 还是 B (刮风还是下雨) of A-niet-A (去不去).",
    "都 of 也 staat ná het onderwerp, direct vóór het werkwoord.",
    "Het onderwerp mag vóór of na 无论 staan: 他无论去哪儿都 ... of 无论去哪儿，他都 ...",
    "不管 betekent hetzelfde als 无论. 不管 klinkt wat informeler."
  ],
  pitfall: "Na 无论 komt geen gewone bewering. 无论天气很冷 is fout. Zeg 无论天气多冷 of 无论天气冷不冷.",
  examples: [
    { cn: "无论你什么时候来，我都欢迎。", py: "Wúlùn nǐ shénme shíhou lái, wǒ dōu huānyíng.", nl: "Wanneer je ook komt, je bent altijd welkom." },
    { cn: "无论刮风还是下雨，他都骑自行车上班。", py: "Wúlùn guāfēng háishi xiàyǔ, tā dōu qí zìxíngchē shàngbān.", nl: "Of het nu waait of regent, hij fietst altijd naar zijn werk." },
    { cn: "无论工作多忙，她每天都给妈妈打电话。", py: "Wúlùn gōngzuò duō máng, tā měitiān dōu gěi māma dǎ diànhuà.", nl: "Hoe druk haar werk ook is, ze belt elke dag haar moeder." },
    { cn: "不管别人怎么说，我也不改变主意。", py: "Bùguǎn biérén zěnme shuō, wǒ yě bù gǎibiàn zhǔyi.", nl: "Wat anderen ook zeggen, ik verander niet van mening." }
  ],
  nuance: [
    { h: "无论 of 不管?",
      p: "Ze betekenen hetzelfde en hebben dezelfde vorm: vraag of keuze, daarna 都. 无论 klinkt formeler. Je ziet het veel in teksten, toespraken en regels. 不管 hoor je vaker in gesprekken. In de vaste uitdrukking 无论如何 (hoe dan ook) gebruik je 无论.",
      ex: [
        { cn: "无论遇到什么困难，我们都要坚持下去。", py: "Wúlùn yùdào shénme kùnnan, wǒmen dōu yào jiānchí xiaqu.", nl: "Welke moeilijkheden we ook tegenkomen, we moeten volhouden." },
        { cn: "不管你去不去，我都去。", py: "Bùguǎn nǐ qù bu qù, wǒ dōu qù.", nl: "Of jij nu gaat of niet, ik ga." }
      ] },
    { h: "无论 of 即使?",
      p: "无论 dekt alle mogelijkheden: daarom volgt een vraag of keuze. 即使 (zelfs als) noemt één geval, vaak een extreem geval. Na 即使 komt dus een gewone bewering, en daarna 也. Vergelijk: \"regen of geen regen\" tegenover \"zelfs als het regent\".",
      ex: [
        { cn: "无论下不下雨，我都去。", py: "Wúlùn xià bu xià yǔ, wǒ dōu qù.", nl: "Of het nu regent of niet, ik ga." },
        { cn: "即使下雨，我也去。", py: "Jíshǐ xiàyǔ, wǒ yě qù.", nl: "Zelfs als het regent, ga ik." }
      ] },
    { h: "都 of 也, en nooit 就",
      p: "Na 无论 gebruik je meestal 都. In ontkennende zinnen hoor je ook vaak 也: 无论怎么说，他也不听. 就 past niet, want 就 hoort bij één voorwaarde (如果 ... 就, 只要 ... 就). Bij 无论 is er juist geen voorwaarde.",
      ex: [
        { cn: "无论我怎么解释，他也不相信。", py: "Wúlùn wǒ zěnme jiěshì, tā yě bù xiāngxìn.", nl: "Hoe ik het ook uitleg, hij gelooft het niet." }
      ] }
  ],
  mistakes: [
    { wrong: "无论天气很冷，他都去游泳。", right: "无论天气多冷，他都去游泳。", why: "Na 无论 komt een vraag (多冷), geen gewone bewering (很冷)." },
    { wrong: "无论你去哪儿，我就跟你去。", right: "无论你去哪儿，我都跟你去。", why: "Bij 无论 hoort 都 of 也. 就 hoort bij een voorwaarde zoals 如果." },
    { wrong: "无论你去哪儿，都我跟你去。", right: "无论你去哪儿，我都跟你去。", why: "都 staat ná het onderwerp, vlak vóór het werkwoord." },
    { wrong: "无论下雨，我都去。", right: "无论下不下雨，我都去。", why: "下雨 is één geval. Gebruik een keuze (下不下雨), of zeg 即使下雨，我也去。" }
  ],
  vocab: [
    ["无论", "wúlùn", "(ongeacht, hoe ... ook)"], ["不管", "bùguǎn", "(ongeacht, informeel)"], ["刮风", "guāfēng", "waaien"],
    ["改变", "gǎibiàn", "veranderen"], ["主意", "zhǔyi", "idee, plan"], ["举行", "jǔxíng", "houden (evenement)"],
    ["按时", "ànshí", "op tijd"], ["观众", "guānzhòng", "toeschouwers, publiek"], ["坚持", "jiānchí", "volhouden, blijven doen"],
    ["轮流", "lúnliú", "om de beurt"]
  ],
  dialogue: [
    ["A", "明天可能会下大雨，比赛还举行吗？", "Míngtiān kěnéng huì xià dàyǔ, bǐsài hái jǔxíng ma?", "Morgen gaat het misschien hard regenen. Gaat de wedstrijd nog door?"],
    ["B", "无论天气怎么样，比赛都会按时举行。", "Wúlùn tiānqì zěnmeyàng, bǐsài dōu huì ànshí jǔxíng.", "Hoe het weer ook is, de wedstrijd begint op tijd."],
    ["A", "那观众怎么办？", "Nà guānzhòng zěnme bàn?", "En de toeschouwers dan?"],
    ["B", "体育馆有屋顶，无论下多大的雨，观众都不会淋湿。", "Tǐyùguǎn yǒu wūdǐng, wúlùn xià duō dà de yǔ, guānzhòng dōu bú huì línshī.", "Het stadion heeft een dak. Hoe hard het ook regent, de toeschouwers worden niet nat."],
    ["A", "太好了，那我无论多晚都去看。", "Tài hǎo le, nà wǒ wúlùn duō wǎn dōu qù kàn.", "Mooi, dan ga ik kijken, hoe laat het ook wordt."]
  ],
  reading: {
    title: "楼下的小书店",
    lines: [
      { cn: "我家楼下有一家小书店，老板是一位七十多岁的老人。", py: "Wǒ jiā lóu xià yǒu yì jiā xiǎo shūdiàn, lǎobǎn shì yí wèi qīshí duō suì de lǎorén.", nl: "Onder ons huis zit een kleine boekwinkel. De eigenaar is een man van in de zeventig." },
      { cn: "无论刮风还是下雨，书店每天早上八点都准时开门。", py: "Wúlùn guāfēng háishi xiàyǔ, shūdiàn měitiān zǎoshang bā diǎn dōu zhǔnshí kāimén.", nl: "Of het nu waait of regent, de winkel gaat elke ochtend precies om acht uur open." },
      { cn: "来买书的人不多，可是无论来的人多还是少，他都热情地跟每个人聊天。", py: "Lái mǎi shū de rén bù duō, kěshì wúlùn lái de rén duō háishi shǎo, tā dōu rèqíng de gēn měi ge rén liáotiān.", nl: "Er komen niet veel klanten. Maar of het er nu veel of weinig zijn, hij praat met iedereen hartelijk." },
      { cn: "有人问他：\"现在大家都在网上买书，您为什么还坚持开书店？\"", py: "Yǒu rén wèn tā: \"Xiànzài dàjiā dōu zài wǎngshang mǎi shū, nín wèishénme hái jiānchí kāi shūdiàn?\"", nl: "Iemand vroeg hem: \"Iedereen koopt nu boeken online. Waarom houdt u de winkel nog open?\"" },
      { cn: "老人笑着说：\"对我来说，书店不只是生意，也是一个让人安静下来的地方。\"", py: "Lǎorén xiàozhe shuō: \"Duì wǒ lái shuō, shūdiàn bù zhǐ shì shēngyi, yě shì yí ge ràng rén ānjìng xiàlai de dìfang.\"", nl: "De oude man zei lachend: \"Voor mij is een boekwinkel niet alleen een zaak. Het is ook een plek waar mensen tot rust komen.\"" },
      { cn: "他还说：\"不管赚不赚钱，我都会一直开下去。\"", py: "Tā hái shuō: \"Bùguǎn zhuàn bu zhuàn qián, wǒ dōu huì yìzhí kāi xiaqu.\"", nl: "Hij zei ook: \"Of ik nu geld verdien of niet, ik blijf hem openhouden.\"" },
      { cn: "去年冬天他生病住院了，书店关了两个星期。", py: "Qùnián dōngtiān tā shēngbìng zhùyuàn le, shūdiàn guānle liǎng ge xīngqī.", nl: "Vorige winter werd hij ziek en moest hij naar het ziekenhuis. De winkel was twee weken dicht." },
      { cn: "邻居们无论多忙，都轮流去医院看他。", py: "Línjūmen wúlùn duō máng, dōu lúnliú qù yīyuàn kàn tā.", nl: "Hoe druk de buren het ook hadden, ze gingen om de beurt naar het ziekenhuis om hem te bezoeken." },
      { cn: "现在书店又开门了，门上多了一张纸：\"欢迎回来！\"", py: "Xiànzài shūdiàn yòu kāimén le, mén shang duōle yì zhāng zhǐ: \"Huānyíng huílai!\"", nl: "Nu is de winkel weer open. Op de deur hangt een nieuw briefje: \"Welkom terug!\"" }
    ],
    questions: [
      { type: "mc", q: "Waarom houdt de oude man de winkel open?",
        options: ["Voor hem is het ook een plek waar mensen tot rust komen.", "Hij verdient er veel geld mee.", "Er komen elke dag veel klanten.", "Zijn buren vragen het hem."], answer: 0,
        why: ["Goed: 书店不只是生意，也是一个让人安静下来的地方。", "Hij zegt juist: 不管赚不赚钱, geld maakt niet uit.", "De tekst zegt: 来买书的人不多.", "De buren bezochten hem, maar vroegen dit niet."] },
      { type: "mc", q: "Wat deden de buren toen hij ziek was?",
        options: ["Ze bezochten hem om de beurt in het ziekenhuis.", "Ze hielden de winkel voor hem open.", "Ze kochten veel boeken online.", "Ze schreven hem een brief."], answer: 0,
        why: ["Goed: 都轮流去医院看他。", "De winkel was juist twee weken dicht.", "Online kopen staat in de vraag van een klant, niet bij de buren.", "Er hangt een briefje op de deur, maar dat is pas later en geen brief aan hem."] },
      { type: "mc", q: "无论刮风还是下雨，书店都准时开门。Wat betekent 无论 ... 都 hier?",
        options: ["Het weer maakt niet uit: de winkel gaat altijd op tijd open.", "Alleen bij wind en regen gaat de winkel open.", "Zelfs bij storm gaat de winkel soms open.", "Als het waait, gaat de winkel later open."], answer: 0,
        why: ["Goed: 无论 + keuze (A 还是 B) + 都 = in elk geval.", "无论 maakt geen voorwaarde: ook bij mooi weer gaat hij open.", "都 betekent altijd, niet soms.", "准时 betekent op tijd, en het weer verandert daar niets aan."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Wat je ook zegt, ik ga.\" Welke zin klopt?",
      options: ["无论你说什么，我都去。", "无论你说了，我都去。", "你说什么无论，我都去。", "无论你说什么，都我去。"], answer: 0,
      why: ["Goed: 无论 + vraagwoord (什么), dan 都 vóór het werkwoord.", "Na 无论 moet een vraagwoord of keuze komen, geen gewone bewering.", "无论 staat vooraan, vóór het deel met het vraagwoord.", "都 staat ná het onderwerp, vlak vóór het werkwoord."] },
    { type: "mc", q: "\"Hoe koud het ook is, hij gaat zwemmen.\" Welke zin klopt?",
      options: ["无论天气多冷，他都去游泳。", "无论天气很冷，他都去游泳。", "无论天气多冷，他就去游泳。", "虽然天气多冷，他都去游泳。"], answer: 0,
      why: ["Goed: 多冷 werkt als vraag: hoe koud ook.", "很冷 is een gewone bewering. Na 无论 hoort een vraag, zoals 多冷.", "Bij 无论 hoort 都 of 也, niet 就.", "虽然 betekent \"hoewel\" en past niet bij 多冷 ... 都."] },
    { type: "order", q: "Zet in de goede volgorde: \"Wie hem ook om hulp vraagt, hij helpt altijd.\"",
      tokens: [["无论", "wúlùn"], ["谁", "shéi"], ["找他", "zhǎo tā"], ["他都", "tā dōu"], ["帮忙", "bāngmáng"]] },
    { type: "mc", q: "___你同意不同意，我都要试一试。(Of je het nu goedvindt of niet, ik ga het proberen.)",
      options: ["无论", "虽然", "因为", "如果"], answer: 0,
      why: ["Goed: 无论 + A-niet-A (同意不同意), dan 都.", "虽然 vraagt om een feit, niet om een keuze als 同意不同意.", "因为 geeft een reden; een keuze is geen reden.", "如果 vraagt om één voorwaarde, niet om \"wel of niet\"."] },
    { type: "mc", q: "\"Zelfs als het morgen regent, gaat de wedstrijd door.\" Welke zin klopt?",
      options: ["即使明天下雨，比赛也会举行。", "无论明天下雨，比赛也会举行。", "即使明天下不下雨，比赛也会举行。", "即使明天下雨，比赛就会举行。"], answer: 0,
      why: ["Goed: 即使 + één geval (下雨) + 也.", "无论 vraagt om een vraag of keuze; 下雨 is één geval.", "即使 noemt één geval; de keuze 下不下雨 hoort bij 无论.", "Bij 即使 hoort 也, niet 就."] },
    { type: "mc", q: "无论如何，你都要按时交报告。Wat betekent 无论如何?",
      options: ["Hoe dan ook", "Zelfs als", "Omdat", "Als het kan"], answer: 0,
      why: ["Goed: 无论如何 = hoe dan ook, in elk geval.", "\"Zelfs als\" is 即使, en daarna komt een geval.", "\"Omdat\" is 因为: dat geeft een reden.", "\"Als het kan\" is een voorwaarde. 无论如何 sluit juist alle uitzonderingen uit."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["无论他很忙，都来帮我。", "无论多忙，他都来帮我。", "不管忙不忙，他都来帮我。", "无论忙还是不忙，他都来帮我。"], answer: 0,
      why: ["Goed gezien: 很忙 is een bewering. Zeg 多忙 of 忙不忙.", "Deze klopt: 多忙 werkt als vraag.", "Deze klopt: A-niet-A is een keuze.", "Deze klopt: A 还是 B is een keuze."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hoe moe ze ook is, ze maakt eerst haar huiswerk af.\"",
      tokens: [["无论", "wúlùn"], ["多累", "duō lèi"], ["她都", "tā dōu"], ["先把作业", "xiān bǎ zuòyè"], ["做完", "zuòwán"]] },
    { type: "fill", q: "___你怎么劝，他都不听。(Hoe je hem ook probeert over te halen, hij luistert niet.)", answers: ["无论", "不管"],
      hint: "Welk woord past bij 怎么 ... 都?", why: "无论 of 不管 + vraagwoord (怎么) + 都: hoe ... ook." },
    { type: "open", q: "Vertaal: \"Hoe druk ik ook ben, ik sport elke dag.\"", model: ["无论多忙，我每天都运动。", "无论工作多忙，我每天都去运动。", "不管我多忙，我每天都锻炼身体。"],
      tip: "Check: na 无论 staat 多忙 (geen 很忙), en 都 staat vlak vóór het werkwoord." },
    { type: "open", q: "Vertaal: \"Wie er ook belt, zeg dat ik er niet ben.\"", model: ["无论谁打电话来，你都说我不在。", "不管谁打电话，都说我不在。"],
      tip: "Check: 无论/不管 + 谁, en daarna 都 vóór 说." }
  ],
  review: [
    { type: "mc", q: "\"Waar hij ook naartoe gaat, hij heeft zijn camera bij zich.\"",
      options: ["他无论去哪儿，都带着相机。", "他无论去北京，都带着相机。", "他无论去哪儿，就带着相机。", "他去哪儿无论，都带着相机。"], answer: 0,
      why: ["Goed.", "去北京 is één plek. Na 无论 hoort een vraagwoord (哪儿).", "Bij 无论 hoort 都, niet 就.", "无论 staat vóór het deel met het vraagwoord."] },
    { type: "mc", q: "无论发生___事，你都要给我打电话。(Wat er ook gebeurt, bel me.)",
      options: ["什么", "这件", "一些", "很多"], answer: 0,
      why: ["Goed: 什么事 = wat ook. Na 无论 hoort een vraagwoord.", "这件事 is één bekende zaak, geen open vraag.", "一些事 is een gewone bewering, geen vraag.", "很多事 is een gewone bewering, geen vraag."] },
    { type: "mc", q: "___你不喜欢他，也应该对他有礼貌。(Zelfs als je hem niet mag, moet je beleefd tegen hem zijn.)",
      options: ["即使", "无论", "因为", "只要"], answer: 0,
      why: ["Goed: 即使 + één geval + 也 = zelfs als.", "Na 无论 moet een vraag of keuze staan, zoals 喜欢不喜欢.", "因为 geeft een reden en past niet bij 也.", "只要 is \"als maar\" en hoort bij 就."] }
  ]
})
