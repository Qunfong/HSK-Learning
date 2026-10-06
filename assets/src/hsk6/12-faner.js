({
  id: "12", slug: "faner", title: "反而", sub: "Juist het omgekeerde van wat je verwacht",
  canDo: "Je kunt nu zeggen dat een resultaat precies tegen de verwachting in gaat, met 反而.",
  guess: {
    q: "吃了药以后，他的病反而更重了。Wat is er gebeurd, denk je?",
    options: ["Na het medicijn werd hij juist zieker.", "Na het medicijn werd hij beter.", "Hij nam geen medicijn en werd zieker.", "Hij werd zieker en nam toen een medicijn."], answer: 0,
    why: ["Goed: je verwacht dat medicijn helpt. 反而 zegt: het omgekeerde gebeurde.", "Dat is wat je verwacht. 反而 zegt dat juist het tegenovergestelde gebeurde.", "Hij nam het medicijn wel: 吃了药以后.", "De volgorde klopt niet: eerst het medicijn, daarna zieker."]
  },
  problem: "Soms gebeurt precies het omgekeerde van wat je verwacht. In het Nederlands zeg je: \"Hij werd niet boos, hij lachte juist.\" Daarvoor is 反而 (fǎn'ér). Eerst staat de oorzaak of de verwachting. Na 反而 komt het tegenovergestelde resultaat.",
  pattern: [
    { l: "verwachting", v: "他不但没生气，", c: 1 }, { l: "wie", v: "他", c: 2 }, { l: "juist", v: "反而", c: 3, key: true },
    { l: "tegengesteld resultaat", v: "笑了", c: 4 }
  ],
  patternCap: "(不但不/没 A，) + onderwerp + 反而 + B · oorzaak，结果反而 + B",
  rules: [
    "反而 is een bijwoord. Het staat na het onderwerp, vóór het werkwoord of bijvoeglijk naamwoord.",
    "Vaak staat er een ontkenning in de eerste zin: 不但不 ... 反而 ... of 不仅没 ... 反而 ....",
    "Het onderwerp van de tweede zin mag wegvallen als het hetzelfde is: 他不但没生气，反而笑了。",
    "Het resultaat na 反而 is het omgekeerde van wat logisch zou volgen, niet zomaar iets anders.",
    "反而 komt in spreek- en schrijftaal voor. 反倒 (fǎndào) is een iets informelere variant."
  ],
  pitfall: "Na 不但不 ... gebruik je 反而, niet 而且. 而且 voegt iets in dezelfde richting toe; 反而 draait de richting om.",
  examples: [
    { cn: "他不但没生气，反而笑了。", py: "Tā búdàn méi shēngqì, fǎn'ér xiào le.", nl: "Hij werd niet boos, hij moest juist lachen." },
    { cn: "雨不但没停，反而越下越大了。", py: "Yǔ búdàn méi tíng, fǎn'ér yuè xià yuè dà le.", nl: "De regen hield niet op, hij werd juist steeds harder." },
    { cn: "我想帮忙，结果反而添了麻烦。", py: "Wǒ xiǎng bāngmáng, jiéguǒ fǎn'ér tiānle máfan.", nl: "Ik wilde helpen, maar veroorzaakte juist extra problemen." },
    { cn: "东西太便宜，顾客反而不放心。", py: "Dōngxi tài piányi, gùkè fǎn'ér bú fàngxīn.", nl: "Als iets te goedkoop is, vertrouwen klanten het juist niet." }
  ],
  nuance: [
    { h: "Wanneer 反而?",
      p: "Gebruik 反而 als er een duidelijke verwachting is, en het resultaat juist de andere kant op gaat. Die verwachting staat er vaak bij: met 不但不/没, of met een oorzaak zoals 吃了药. Is er alleen een verschil tussen twee dingen, zonder verwachting? Dan past 但是 of 却 beter.",
      ex: [
        { cn: "他工作很忙，身体反而比以前好了。", py: "Tā gōngzuò hěn máng, shēntǐ fǎn'ér bǐ yǐqián hǎo le.", nl: "Hij heeft het heel druk, maar zijn gezondheid is juist beter dan vroeger." }
      ] },
    { h: "反而 of 却?",
      p: "却 (què) betekent \"maar, echter\". Het zet twee feiten tegenover elkaar. 却 is ook iets meer schrijftaal. 反而 is sterker: het eerste deel had een resultaat moeten geven, en het omgekeerde gebeurt. Vergelijk: \"iedereen ging, maar hij niet\" (却) en \"ik zei dat hij niet moest gaan, en hij wilde juist nog meer\" (反而).",
      ex: [
        { cn: "大家都去了，他却没去。", py: "Dàjiā dōu qù le, tā què méi qù.", nl: "Iedereen ging, maar hij niet." },
        { cn: "我劝他别去，他反而更想去了。", py: "Wǒ quàn tā bié qù, tā fǎn'ér gèng xiǎng qù le.", nl: "Ik raadde hem af te gaan, maar hij wilde juist nog liever." }
      ] },
    { h: "反而 of 竟然?",
      p: "竟然 (jìngrán) drukt verbazing uit: \"je gelooft het niet, maar ...\". Het resultaat hoeft niet het omgekeerde te zijn, alleen onverwacht. 反而 draait juist een verwachte richting om, met of zonder verbazing.",
      ex: [
        { cn: "他竟然一个人去了西藏。", py: "Tā jìngrán yí ge rén qùle Xīzàng.", nl: "Hij is warempel in zijn eentje naar Tibet gegaan." },
        { cn: "批评他以后，他反而更努力了。", py: "Pīpíng tā yǐhòu, tā fǎn'ér gèng nǔlì le.", nl: "Na de kritiek ging hij juist harder werken." }
      ] }
  ],
  mistakes: [
    { wrong: "他不但没生气，而且笑了。", right: "他不但没生气，反而笑了。", why: "Na 不但没 komt het omgekeerde resultaat. Dat is 反而, niet 而且 (dat voegt iets toe in dezelfde richting)." },
    { wrong: "他不但没生气，反而他笑了。", right: "他不但没生气，他反而笑了。", why: "反而 is een bijwoord en staat na het onderwerp, niet ervóór." },
    { wrong: "他不但不胖，反而很胖。", right: "他不但不胖，反而很瘦。", why: "Na 反而 komt het tegenovergestelde van wat je verwacht: niet dik, juist mager." },
    { wrong: "我休息了一天，反而病好了。", right: "我休息了一天，病就好了。", why: "Beter worden na rust is wat je verwacht. Dan past 反而 niet." }
  ],
  vocab: [
    ["反而", "fǎn'ér", "juist, integendeel (tegen de verwachting in)"], ["添麻烦", "tiān máfan", "extra problemen veroorzaken"], ["顾客", "gùkè", "klant"],
    ["批评", "pīpíng", "bekritiseren, kritiek"], ["减肥", "jiǎnféi", "afvallen"], ["饿", "è", "hongerig"],
    ["消耗", "xiāohào", "verbruiken"], ["热量", "rèliàng", "calorieën, energie"], ["营养", "yíngyǎng", "voeding, voedingsstoffen"], ["均衡", "jūnhéng", "evenwichtig"]
  ],
  dialogue: [
    ["A", "我昨天跟经理说我想辞职，他会不会很生气？", "Wǒ zuótiān gēn jīnglǐ shuō wǒ xiǎng cízhí, tā huì bu huì hěn shēngqì?", "Ik heb gisteren tegen de manager gezegd dat ik wil stoppen. Zou hij boos zijn?"],
    ["B", "他怎么说？", "Tā zěnme shuō?", "Wat zei hij?"],
    ["A", "他不但没生气，反而给我加了工资。", "Tā búdàn méi shēngqì, fǎn'ér gěi wǒ jiāle gōngzī.", "Hij werd niet boos, hij gaf me juist opslag."],
    ["B", "这不是好事吗？你怎么不高兴？", "Zhè bú shì hǎoshì ma? Nǐ zěnme bù gāoxìng?", "Dat is toch goed nieuws? Waarom ben je niet blij?"],
    ["A", "我本来想换个环境，现在反而不知道该怎么办了。", "Wǒ běnlái xiǎng huàn ge huánjìng, xiànzài fǎn'ér bù zhīdào gāi zěnme bàn le.", "Ik wilde eigenlijk een andere omgeving. Nu weet ik juist niet meer wat ik moet doen."]
  ],
  reading: {
    title: "减肥",
    lines: [
      { cn: "小张觉得自己太胖了，决定减肥。", py: "Xiǎo Zhāng juéde zìjǐ tài pàng le, juédìng jiǎnféi.", nl: "Xiao Zhang vond zichzelf te dik en besloot af te vallen." },
      { cn: "她的办法很简单：不吃晚饭。", py: "Tā de bànfǎ hěn jiǎndān: bù chī wǎnfàn.", nl: "Haar methode was eenvoudig: geen avondeten." },
      { cn: "可是一个月以后，她不但没瘦，反而胖了两公斤。", py: "Kěshì yí ge yuè yǐhòu, tā búdàn méi shòu, fǎn'ér pàngle liǎng gōngjīn.", nl: "Maar na een maand was ze niet afgevallen. Ze was juist twee kilo aangekomen." },
      { cn: "原来她晚上太饿，常常在睡觉前吃很多零食。", py: "Yuánlái tā wǎnshang tài è, chángcháng zài shuìjiào qián chī hěn duō língshí.", nl: "Ze had 's avonds zo'n honger dat ze voor het slapen vaak veel snoep at." },
      { cn: "医生告诉她，饿肚子并不能减肥，反而会让身体更想吃东西。", py: "Yīshēng gàosu tā, è dùzi bìng bù néng jiǎnféi, fǎn'ér huì ràng shēntǐ gèng xiǎng chī dōngxi.", nl: "De dokter vertelde haar dat honger lijden niet helpt bij afvallen. Het lichaam wil dan juist meer eten." },
      { cn: "医生建议她每天正常吃三顿饭，注意营养均衡，再多运动。", py: "Yīshēng jiànyì tā měitiān zhèngcháng chī sān dùn fàn, zhùyì yíngyǎng jūnhéng, zài duō yùndòng.", nl: "De dokter raadde haar aan om elke dag gewoon drie maaltijden te eten, evenwichtig te eten en meer te bewegen." },
      { cn: "运动能消耗热量，她却担心运动以后吃得更多。", py: "Yùndòng néng xiāohào rèliàng, tā què dānxīn yùndòng yǐhòu chī de gèng duō.", nl: "Bewegen verbruikt calorieën, maar toch was ze bang dat ze daarna meer zou eten." },
      { cn: "没想到，开始运动以后，她的胃口反而变小了。", py: "Méi xiǎngdào, kāishǐ yùndòng yǐhòu, tā de wèikǒu fǎn'ér biàn xiǎo le.", nl: "Tot haar verrassing werd haar eetlust juist kleiner toen ze begon te bewegen." }
    ],
    questions: [
      { type: "mc", q: "Wat gebeurde er na een maand zonder avondeten?",
        options: ["Ze was twee kilo aangekomen.", "Ze was twee kilo afgevallen.", "Ze bleef even zwaar.", "Ze werd ziek en ging naar de dokter."], answer: 0,
        why: ["Goed: 不但没瘦，反而胖了两公斤。", "Dat verwachtte ze, maar 反而 zegt: juist het omgekeerde.", "Haar gewicht veranderde wel: 胖了两公斤.", "Ze ging naar de dokter, maar de tekst zegt niet dat ze ziek was."] },
      { type: "mc", q: "Waarom kwam ze aan?",
        options: ["Ze at 's avonds veel snoep omdat ze honger had.", "Ze at drie grote maaltijden per dag.", "Ze bewoog te weinig.", "Ze at te veel als avondeten."], answer: 0,
        why: ["Goed: 晚上太饿，常常在睡觉前吃很多零食。", "Drie maaltijden is het advies van de dokter, niet de oorzaak.", "Bewegen komt pas later in de tekst, als advies.", "Ze at juist geen avondeten."] },
      { type: "mc", q: "她的胃口反而变小了。Wat zegt 反而 hier?",
        options: ["Ze verwachtte meer eetlust, maar die werd juist kleiner.", "Haar eetlust werd steeds groter.", "Haar eetlust bleef hetzelfde.", "Ze was blij dat ze meer kon eten."], answer: 0,
        why: ["Goed: ze was bang meer te eten (担心 ... 吃得更多), maar het omgekeerde gebeurde.", "变小 betekent kleiner worden, niet groter.", "Er is wel een verandering: 变小了.", "De tekst gaat over minder eten, niet over meer."] }
    ]
  },
  questions: [
    { type: "mc", q: "风不但没停，___越刮越大了。(De wind ging niet liggen, hij werd juist steeds harder.)",
      options: ["反而", "而且", "并且", "于是"], answer: 0,
      why: ["Goed: na 不但没 volgt met 反而 het omgekeerde resultaat.", "而且 voegt iets toe in dezelfde richting; hier draait de richting om.", "并且 betekent \"en ook\" en draait niets om.", "于是 betekent \"daarom, toen\": een gevolg, geen omkering."] },
    { type: "mc", q: "Welke zin klopt?",
      options: ["他听了以后反而更生气了。", "他听了以后更反而生气了。", "反而他听了以后更生气了。", "他听了以后更生气了反而。"], answer: 0,
      why: ["Goed: 反而 staat na het onderwerp, vóór het werkwoorddeel.", "反而 staat vóór 更, niet erna.", "反而 staat niet vóór het onderwerp.", "反而 staat nooit aan het eind."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik wilde helpen, maar veroorzaakte juist problemen.\"",
      tokens: [["我想帮忙，", "wǒ xiǎng bāngmáng,"], ["结果", "jiéguǒ"], ["反而", "fǎn'ér"], ["添了", "tiānle"], ["麻烦", "máfan"]] },
    { type: "mc", q: "In welke zin past 反而 NIET?",
      options: ["我睡了一觉，病___好了。", "我吃了药，病___更重了。", "他越解释，大家___越不相信。", "天冷了，他___穿得更少了。"], answer: 0,
      why: ["Goed: na slapen beter worden is wat je verwacht. Daar past 就, geen 反而.", "Dit past: medicijn hoort te helpen, maar het werd erger.", "Dit past: uitleg hoort te overtuigen, maar het omgekeerde gebeurt.", "Dit past: bij kou verwacht je meer kleren, niet minder."] },
    { type: "mc", q: "大家都去了，他___没去。(Iedereen ging, maar hij niet.) Welk woord past het best?",
      options: ["却", "反而", "于是", "而且"], answer: 0,
      why: ["Goed: 却 zet twee feiten tegenover elkaar.", "反而 vraagt om een resultaat dat tegen de verwachting van het eerste deel ingaat. Hier worden alleen twee feiten vergeleken.", "于是 betekent \"daarom, toen\": een gevolg, geen tegenstelling.", "而且 voegt iets toe in dezelfde richting."] },
    { type: "fill", q: "我本来想让他高兴，没想到他___哭了。(Ik wilde hem blij maken, maar hij ging juist huilen.)", answers: ["反而", "反倒"],
      hint: "Welk bijwoord geeft het omgekeerde resultaat?", why: "Blij maken is de verwachting; huilen is het omgekeerde. Dat is 反而 (of informeler 反倒)." },
    { type: "mc", q: "真没想到，他___把我的名字忘了！(Niet te geloven: hij is warempel mijn naam vergeten!)",
      options: ["竟然", "而且", "于是", "因此"], answer: 0,
      why: ["Goed: 竟然 drukt verbazing uit over iets onverwachts.", "而且 voegt iets toe; er is hier geen eerste punt om aan toe te voegen.", "于是 betekent \"toen, daarom\" en drukt geen verbazing uit.", "因此 geeft een gevolg, geen verbazing."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hij werd niet boos, hij lachte juist heel vrolijk.\"",
      tokens: [["他不但没生气，", "tā búdàn méi shēngqì,"], ["反而", "fǎn'ér"], ["笑得", "xiào de"], ["很开心", "hěn kāixīn"]] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["他不但没进步，而且退步了。", "他不但没进步，反而退步了。", "他不但进步了，而且进步很大。", "他不仅没进步，反而退步了。"], answer: 0,
      why: ["Goed: na 不但没 met een omgekeerd resultaat hoort 反而, niet 而且.", "Dit klopt: niet vooruit, juist achteruit.", "Dit klopt: 不但 ... 而且 in dezelfde richting.", "Dit klopt: 不仅没 ... 反而 werkt net als 不但没 ... 反而."] },
    { type: "open", q: "Vertaal: \"De regen hield niet op, hij werd juist harder.\"", model: ["雨不但没停，反而更大了。", "雨不但没有停，反而越下越大了。"],
      tip: "Check: 不但没 in de eerste zin, 反而 vóór het omgekeerde resultaat." },
    { type: "open", q: "Vertaal: \"Na de kritiek ging zij juist harder werken.\"", model: ["被批评以后，她反而更努力了。", "老师批评她以后，她反而更努力了。"],
      tip: "Check: staat 反而 na het onderwerp (她), vóór 更努力?" }
  ],
  review: [
    { type: "mc", q: "他喝了咖啡，___更困了。(Hij dronk koffie, maar werd juist slaperiger.)",
      options: ["反而", "而且", "所以", "竟然"], answer: 0,
      why: ["Goed: koffie hoort wakker te maken; 反而 geeft het omgekeerde resultaat.", "而且 voegt iets toe in dezelfde richting.", "所以 maakt een logisch gevolg; slaperig worden is hier geen logisch gevolg.", "竟然 drukt verbazing uit, maar geeft niet de omkering van de verwachting aan."] },
    { type: "mc", q: "Welke zin klopt?",
      options: ["价格降了，买的人反而少了。", "价格降了，反而买的人少了。", "价格降了，买的人少反而了。", "价格降了，买的人少了反而。"], answer: 0,
      why: ["Goed: 反而 staat na het onderwerp (买的人), vóór 少了.", "反而 staat na het onderwerp, niet ervóór.", "反而 staat vóór het bijvoeglijk naamwoord, niet ertussen.", "反而 staat nooit aan het eind."] },
    { type: "mc", q: "Wat is het verschil tussen 却 en 反而?",
      options: ["反而 geeft het omgekeerde van de verwachting; 却 is een gewone tegenstelling.", "却 geeft het omgekeerde van de verwachting; 反而 is een gewone tegenstelling.", "Er is geen verschil; ze zijn altijd uitwisselbaar.", "反而 drukt verbazing uit; 却 niet."], answer: 0,
      why: ["Goed.", "Het is precies andersom.", "Ze zijn niet altijd uitwisselbaar: 大家都去了，他反而没去 klinkt vreemd.", "Verbazing is vooral 竟然."] }
  ]
})
