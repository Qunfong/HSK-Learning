({
  id: "10", slug: "hebi", title: "何必", sub: "Waarom zou je ...? Dat hoeft toch niet",
  canDo: "Je kunt nu met 何必 iemand ompraten of zeggen dat iets niet nodig is, en je haalt het niet door elkaar met 不必 en 何况.",
  guess: {
    q: "这点小事，你何必生气呢？Wat bedoelt de spreker, denk je?",
    options: ["Waarom zou je boos worden om zo'n kleinigheid? Dat is niet nodig.", "Waarom ben je boos? Vertel me de reden.", "Je moet hier echt boos om worden.", "Om zo'n kleinigheid word je toch niet boos, zeker weten."], answer: 0,
    why: ["Goed: 何必 = waarom zou je, dat hoeft niet. Een retorische vraag.", "何必 vraagt niet naar een reden; de spreker verwacht geen antwoord.", "何必 zegt juist dat het niet nodig is.", "Dat lijkt op 不至于. 何必 gaat over nut, niet over een voorspelling."]
  },
  problem: "In het Nederlands zeg je: \"Waarom zou je dat doen? Dat hoeft toch niet.\" Je vraagt niet echt iets. Je wilt iemand ompraten. In het Chinees zeg je dat met 何必 (hébì), vaak met 呢 aan het eind.",
  pattern: [
    { l: "wie", v: "你", c: 1 }, { l: "waarom zou je", v: "何必", c: 2, key: true }, { l: "onnodige handeling", v: "为这点小事生气", c: 3 },
    { l: "vraag", v: "呢？", c: 4 }
  ],
  patternCap: "(Reden,) (wie +) 何必 + onnodige handeling (+ 呢)？ · kort: 何必呢？ · sterker: 又何必 ... · neutraal: 不必 + werkwoord",
  rules: [
    "何必 staat na het onderwerp en vóór het werkwoord.",
    "De zin is een retorische vraag. Vaak staat 呢 aan het eind, nooit 吗.",
    "Kort reageren kan met 何必呢？ = Waarom zou je?",
    "Vaak staat de reden ervoor: 既然 ..., 何必 ...? of: kleine zaak, 何必 ...?",
    "Register: 何必 werkt in spreektaal en schrijftaal. 又何必 en 这又何必呢 klinken nadrukkelijker."
  ],
  pitfall: "何必 is al een vraag. Zet er geen 吗 achter, en verwacht geen reden als antwoord. De spreker bedoelt: dat is niet nodig.",
  examples: [
    { cn: "既然你不喜欢这份工作，何必勉强自己呢？", py: "Jìrán nǐ bù xǐhuan zhè fèn gōngzuò, hébì miǎnqiǎng zìjǐ ne?", nl: "Als je dit werk niet leuk vindt, waarom zou je jezelf dan dwingen?" },
    { cn: "坐地铁十分钟就到了，何必打车？", py: "Zuò dìtiě shí fēnzhōng jiù dào le, hébì dǎchē?", nl: "Met de metro ben je er in tien minuten. Waarom zou je een taxi nemen?" },
    { cn: "大家都是朋友，何必这么客气？", py: "Dàjiā dōu shì péngyou, hébì zhème kèqi?", nl: "We zijn allemaal vrienden. Waarom zo beleefd?" },
    { cn: "为了一点儿钱跟朋友闹翻，又何必呢？", py: "Wèile yìdiǎnr qián gēn péngyou nàofān, yòu hébì ne?", nl: "Om een beetje geld ruzie krijgen met een vriend, waarom zou je?" }
  ],
  nuance: [
    { h: "何必 of 不必?",
      p: "不必 is een gewone mededeling: het hoeft niet. Het klinkt neutraal en beleefd, ook in formele taal. 何必 is een retorische vraag en klinkt emotioneler. Het kan overtuigen, maar ook verwijtend klinken. Tegen een klant of iemand hoger in rang is 不必 dus veiliger.",
      ex: [
        { cn: "您不必担心，我们会处理好的。", py: "Nín búbì dānxīn, wǒmen huì chǔlǐ hǎo de.", nl: "U hoeft zich geen zorgen te maken. Wij lossen het op." },
        { cn: "你何必担心这么多呢？", py: "Nǐ hébì dānxīn zhème duō ne?", nl: "Waarom zou je je zoveel zorgen maken?" }
      ] },
    { h: "何必 of 何况? Zelfde 何, andere functie",
      p: "何况 (hékuàng) betekent \"laat staan\" of \"bovendien\". Het verbindt twee zinnen: als zelfs A al zo is, dan B zeker. Vaak staat er 都 of 连 in het eerste deel. 何必 zegt alleen dat een handeling niet nodig is.",
      ex: [
        { cn: "这个问题老师都不会，何况我呢？", py: "Zhège wèntí lǎoshī dōu bú huì, hékuàng wǒ ne?", nl: "Zelfs de leraar kan dit niet, laat staan ik." },
        { cn: "这个问题这么难，你何必自己做呢？", py: "Zhège wèntí zhème nán, nǐ hébì zìjǐ zuò ne?", nl: "Dit probleem is zo moeilijk. Waarom zou je het alleen doen?" }
      ] },
    { h: "Spreektaal: 何必呢 en 这又何必呢",
      p: "Als korte reactie zeg je 何必呢？ of 这又何必呢？ Je vindt een plan overdreven of zinloos. Het klinkt meelevend, niet onvriendelijk. In schrijftaal staat 又何必 vaak aan het eind van een betoog, als conclusie.",
      ex: [
        { cn: "他已经道歉了，你还生气，这又何必呢？", py: "Tā yǐjīng dàoqiàn le, nǐ hái shēngqì, zhè yòu hébì ne?", nl: "Hij heeft al sorry gezegd en je bent nog boos. Waarom zou je?" }
      ] }
  ],
  mistakes: [
    { wrong: "你何必生气吗？", right: "你何必生气呢？", why: "何必 is al een vraagwoord. Zet er 呢 achter, geen 吗." },
    { wrong: "何必你这么客气呢？", right: "你何必这么客气呢？", why: "何必 is een bijwoord en staat na het onderwerp." },
    { wrong: "这个问题老师都不会，何必我呢？", right: "这个问题老师都不会，何况我呢？", why: "\"Laat staan ik\" is 何况. 何必 heeft een handeling na zich." },
    { wrong: "（对客人）您何必担心呢？", right: "（对客人）您不必担心。", why: "Een beleefde geruststelling is een mededeling met 不必. 何必 kan verwijtend klinken." }
  ],
  vocab: [
    ["何必", "hébì", "waarom zou je, dat hoeft niet"], ["不必", "búbì", "niet nodig, hoeft niet"], ["何况", "hékuàng", "laat staan, bovendien"],
    ["勉强", "miǎnqiǎng", "dwingen, met tegenzin"], ["隆重", "lóngzhòng", "groots, plechtig"], ["面子", "miànzi", "gezicht, aanzien"],
    ["债", "zhài", "schuld (geld)"], ["攀比", "pānbǐ", "zich met anderen meten"], ["收入", "shōurù", "inkomen"], ["在意", "zàiyì", "belang hechten aan"]
  ],
  dialogue: [
    ["A", "我明天去机场，你不用送我。", "Wǒ míngtiān qù jīchǎng, nǐ búyòng sòng wǒ.", "Ik ga morgen naar het vliegveld. Je hoeft me niet weg te brengen."],
    ["B", "那怎么行？我开车送你吧。", "Nà zěnme xíng? Wǒ kāichē sòng nǐ ba.", "Dat kan toch niet? Ik breng je met de auto."],
    ["A", "机场离这儿那么远，你何必跑一趟呢？我坐机场大巴就行。", "Jīchǎng lí zhèr nàme yuǎn, nǐ hébì pǎo yí tàng ne? Wǒ zuò jīchǎng dàbā jiù xíng.", "Het vliegveld is zo ver. Waarom zou je die hele rit maken? Ik neem gewoon de vliegveldbus."],
    ["B", "可是你的行李那么多。", "Kěshì nǐ de xíngli nàme duō.", "Maar je hebt zoveel bagage."],
    ["A", "就两个箱子，不必担心。", "Jiù liǎng ge xiāngzi, búbì dānxīn.", "Het zijn maar twee koffers. Maak je geen zorgen."],
    ["B", "好吧，那你到了给我发个消息。", "Hǎo ba, nà nǐ dàole gěi wǒ fā ge xiāoxi.", "Goed dan. Stuur me een bericht als je er bent."]
  ],
  reading: {
    title: "婚礼与面子",
    lines: [
      { cn: "我表哥下个月结婚，他打算办一场非常隆重的婚礼。", py: "Wǒ biǎogē xià ge yuè jiéhūn, tā dǎsuàn bàn yì chǎng fēicháng lóngzhòng de hūnlǐ.", nl: "Mijn neef trouwt volgende maand. Hij wil een heel grote bruiloft geven." },
      { cn: "为了这场婚礼，他借了不少钱。", py: "Wèile zhè chǎng hūnlǐ, tā jièle bù shǎo qián.", nl: "Voor die bruiloft heeft hij flink wat geld geleend." },
      { cn: "我问他：\"你们的收入并不高，何必花这么多钱呢？\"", py: "Wǒ wèn tā: \"Nǐmen de shōurù bìng bù gāo, hébì huā zhème duō qián ne?\"", nl: "Ik vroeg hem: \"Jullie inkomen is niet hoog. Waarom zou je zoveel geld uitgeven?\"" },
      { cn: "他说：\"别人都办得很热闹，我们办得太简单，多没面子啊。\"", py: "Tā shuō: \"Biérén dōu bàn de hěn rènao, wǒmen bàn de tài jiǎndān, duō méi miànzi a.\"", nl: "Hij zei: \"Iedereen geeft een groot feest. Als het bij ons te eenvoudig is, verliezen we ons gezicht.\"" },
      { cn: "其实，婚礼只有一天，婚后的生活才是最重要的。", py: "Qíshí, hūnlǐ zhǐ yǒu yì tiān, hūnhòu de shēnghuó cái shì zuì zhòngyào de.", nl: "Eigenlijk duurt een bruiloft maar één dag. Het leven na de bruiloft is het belangrijkst." },
      { cn: "为了一天的面子，背上几年的债，又何必呢？", py: "Wèile yì tiān de miànzi, bēishang jǐ nián de zhài, yòu hébì ne?", nl: "Voor één dag aanzien jarenlang schulden dragen, waarom zou je?" },
      { cn: "我父母当年结婚时只请了几桌客人，现在不是也过得很幸福吗？", py: "Wǒ fùmǔ dāngnián jiéhūn shí zhǐ qǐngle jǐ zhuō kèrén, xiànzài bú shì yě guò de hěn xìngfú ma?", nl: "Mijn ouders nodigden destijds maar een paar tafels gasten uit. Zijn ze nu niet ook heel gelukkig?" },
      { cn: "何况，真正的朋友也不会在意婚礼大不大。", py: "Hékuàng, zhēnzhèng de péngyou yě bú huì zàiyì hūnlǐ dà bu dà.", nl: "Bovendien maakt het echte vrienden niet uit of een bruiloft groot is." },
      { cn: "表哥想了很久，最后说：\"是啊，何必跟别人攀比呢？\"", py: "Biǎogē xiǎngle hěn jiǔ, zuìhòu shuō: \"Shì a, hébì gēn biérén pānbǐ ne?\"", nl: "Mijn neef dacht lang na en zei toen: \"Ja, waarom zou ik me met anderen meten?\"" },
      { cn: "他决定把婚礼办得简单一点儿。", py: "Tā juédìng bǎ hūnlǐ bàn de jiǎndān yìdiǎnr.", nl: "Hij besloot de bruiloft wat eenvoudiger te houden." }
    ],
    questions: [
      { type: "mc", q: "Waarom wilde de neef eerst een grote bruiloft?",
        options: ["Hij was bang zijn gezicht te verliezen.", "Hij had een hoog inkomen.", "Zijn ouders wilden het.", "Zijn vrienden vroegen erom."], answer: 0,
        why: ["Goed: 多没面子啊.", "Het inkomen is juist niet hoog: 收入并不高.", "Zijn ouders hadden zelf een kleine bruiloft.", "Echte vrienden maakt het juist niet uit."] },
      { type: "mc", q: "Wat besloot de neef uiteindelijk?",
        options: ["Een eenvoudigere bruiloft houden.", "Meer geld lenen.", "De bruiloft uitstellen.", "Alleen familie uitnodigen."], answer: 0,
        why: ["Goed: 把婚礼办得简单一点儿.", "Er staat niets over meer lenen.", "Uitstellen staat niet in de tekst.", "Over de gastenlijst besluit hij niets."] },
      { type: "mc", q: "又何必呢？Wat bedoelt de schrijver hiermee?",
        options: ["Dat is toch niet nodig.", "Waarom precies? Leg het uit.", "Dat moet je zeker doen.", "Bovendien zijn er nog meer redenen."], answer: 0,
        why: ["Goed: 何必 = waarom zou je, dat hoeft niet.", "何必 is retorisch; de schrijver vraagt geen uitleg.", "何必 zegt juist het tegendeel.", "\"Bovendien\" is 何况, en dat komt pas in de volgende zin."] }
    ]
  },
  questions: [
    { type: "mc", q: "Wat betekent: 你何必为这点小事跟他吵架呢？",
      options: ["Waarom zou je om zo'n kleinigheid ruzie met hem maken? Dat hoeft niet.", "Waarom heb je ruzie met hem? Vertel het me.", "Je moet hier ruzie met hem over maken.", "Hoe komt het dat hij ruzie met je maakt?"], answer: 0,
      why: ["Goed: 何必 = dat is niet nodig.", "何必 vraagt niet naar een reden.", "何必 zegt juist dat het niet nodig is.", "De vraag gaat over wat jij doet, niet over hem."] },
    { type: "mc", q: "\"Waarom zou je zo beleefd doen?\"",
      options: ["你何必这么客气呢？", "你何必这么客气吗？", "何必你这么客气呢？", "你何必不这么客气呢？"], answer: 0,
      why: ["Goed: onderwerp + 何必 + handeling + 呢.", "何必 is al een vraag; 吗 kan er niet achter.", "何必 staat na het onderwerp.", "Met 不 vraag je waarom je níet beleefd zou zijn."] },
    { type: "mc", q: "这本书大人都看不懂，___孩子呢？(Zelfs volwassenen begrijpen dit boek niet, laat staan kinderen.)",
      options: ["何况", "何必", "不必", "未必"], answer: 0,
      why: ["Goed: A 都 ..., 何况 B = laat staan B.", "何必 heeft een handeling na zich, geen persoon.", "不必 = hoeft niet. Het betekent geen \"laat staan\".", "未必 = niet per se. Het past niet voor een naamwoord."] },
    { type: "mc", q: "Een hotelmedewerker zegt beleefd tegen een gast: \"U hoeft zich geen zorgen te maken.\"",
      options: ["您不必担心。", "您何必担心呢？", "您何况担心。", "您不必担心吗？"], answer: 0,
      why: ["Goed: 不必 is een beleefde, neutrale mededeling.", "Als retorische vraag klinkt 何必 hier verwijtend, niet beleefd.", "何况 = laat staan. Het past hier niet.", "Met 吗 wordt het een vreemde vraag in plaats van een geruststelling."] },
    { type: "mc", q: "A: 我要排两个小时队买这双鞋。B: 何必呢？网上也能买。Wat bedoelt B?",
      options: ["Waarom zou je? Het kan ook online.", "Waarom? Leg het eens uit.", "Ja, dat moet je doen.", "Wat de schoenen betreft: koop ze online."], answer: 0,
      why: ["Goed: 何必呢 = waarom zou je, dat hoeft niet.", "B vraagt geen uitleg; het is retorisch.", "B vindt het juist niet nodig.", "\"Wat betreft\" is 至于, niet 何必."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["这本书老师都看不懂，何必我呢？", "这本书老师都看不懂，何况我呢？", "既然看不懂，何必勉强呢？", "看不懂就不必看了。"], answer: 0,
      why: ["Goed: deze klopt niet. \"Laat staan ik\" is 何况.", "Deze klopt: A 都 ..., 何况 B.", "Deze klopt: 既然 ..., 何必 + handeling.", "Deze klopt: 不必 + werkwoord = hoeft niet."] },
    { type: "order", q: "Zet in de goede volgorde: \"Nu het al gebeurd is, waarom zou je je nog zorgen maken?\"",
      tokens: [["既然", "jìrán"], ["已经发生了", "yǐjīng fāshēng le"], ["你", "nǐ"], ["何必", "hébì"], ["再担心呢", "zài dānxīn ne"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Waarom zou je zoveel geld uitgeven aan merkkleding?\"",
      tokens: [["你", "nǐ"], ["何必", "hébì"], ["花这么多钱买名牌", "huā zhème duō qián mǎi míngpái"], ["呢", "ne"]] },
    { type: "fill", q: "大家都是老同学，___这么客气？(We zijn allemaal oud-klasgenoten. Waarom zo beleefd?)", answers: ["何必", "何苦"],
      hint: "Welk woord maakt er een retorische vraag van: \"waarom zou je\"?", why: "何必 + handeling = waarom zou je, dat hoeft niet. 何苦 is vergelijkbaar maar sterker." },
    { type: "open", q: "Vertaal: \"Waarom zou je zo vroeg opstaan? De les begint pas om tien uur.\"",
      model: ["你何必起这么早呢？十点才上课。", "十点才上课，何必这么早起床？"],
      tip: "Check: 何必 na het onderwerp en vóór het werkwoord, eventueel 呢 aan het eind, geen 吗." },
    { type: "open", q: "Maak er een retorische vraag van met 何必: 这件事你不必告诉他。",
      model: ["这件事你何必告诉他呢？", "这件事，你又何必告诉他呢？"],
      tip: "Check: 不必 wordt 何必, en de zin eindigt op 呢？ (niet 吗)." }
  ],
  review: [
    { type: "mc", q: "Wat betekent: 一件衣服而已，何必买那么贵的？",
      options: ["Het is maar een kledingstuk. Waarom zou je zo'n duur exemplaar kopen?", "Het is maar een kledingstuk. Waarom heb je zo'n duur exemplaar gekocht? Leg uit.", "Het is maar een kledingstuk, dus koop maar een duur exemplaar.", "Het is maar een kledingstuk, laat staan een duur exemplaar."], answer: 0,
      why: ["Goed.", "何必 vraagt niet naar een reden.", "何必 zegt juist dat het niet nodig is.", "\"Laat staan\" is 何况."] },
    { type: "mc", q: "连专家都解决不了，___我们呢？(Zelfs experts lossen het niet op, laat staan wij.)",
      options: ["何况", "何必", "不必", "以至于"], answer: 0,
      why: ["Goed.", "何必 heeft een handeling na zich, geen persoon.", "不必 = hoeft niet.", "以至于 leidt een gevolg in."] },
    { type: "mc", q: "\"Je hoeft niet met me mee te komen.\" (een neutrale mededeling)",
      options: ["你不必跟我去。", "你何必跟我去吗？", "你何况跟我去。", "你未必跟我去。"], answer: 0,
      why: ["Goed: 不必 + werkwoord = hoeft niet.", "何必 is een retorische vraag, en 吗 kan er niet achter.", "何况 = laat staan.", "未必 = niet per se."] }
  ]
})
