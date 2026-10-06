({
  id: "02", slug: "jiran", title: "既然 ... 就", sub: "Een bekend feit, en wat daaruit volgt",
  canDo: "Je kunt nu uit een bekend feit een advies of besluit trekken, met 既然 ... 就.",
  guess: {
    q: "既然你病了，就在家休息吧。Wat betekent dit, denk je?",
    options: ["Nu je toch ziek bent, blijf dan thuis rusten.", "Als je ziek wordt, blijf dan thuis rusten.", "Hoewel je ziek bent, moet je gaan werken.", "Je bent ziek omdat je thuis bleef."], answer: 0,
    why: ["Goed: 既然 = nu ... toch (een feit). 就 = dan (de conclusie).", "既然 gaat over iets wat al zo is, niet over een mogelijkheid.", "就 geeft een logisch gevolg, geen tegenstelling.", "Eerst komt het feit, daarna het advies. Er staat geen oorzaak."]
  },
  problem: "Soms weet je iets al zeker. Daaruit volgt een advies of besluit. \"Je bent nu toch hier, eet dan mee.\" Daarvoor gebruik je 既然 (jìrán) ... 就 (jiù). Na 既然 staat het bekende feit. Na 就 staat de conclusie.",
  pattern: [
    { l: "既然", v: "既然", c: 2, key: true }, { l: "bekend feit", v: "你来了", c: 3 },
    { l: "就", v: "就", c: 2, key: true }, { l: "conclusie", v: "多住几天吧", c: 4 }
  ],
  patternCap: "既然 + bekend feit, (wie) + 就 + conclusie (vaak met 吧, 应该, 别 of 要); ook: 既然 ... 为什么还 ...?",
  rules: [
    "Het deel na 既然 is al waar. Meestal weten beide sprekers het.",
    "De conclusie is vaak een advies of besluit: 吧, 应该, 别.",
    "就 staat ná het onderwerp van het tweede deel: 既然你累了，你就睡吧。",
    "既然 mag ook ná het onderwerp: 你既然知道了，就告诉我吧。",
    "Het tweede deel kan ook een vraag zijn: 既然知道，为什么还问？"
  ],
  pitfall: "既然 is niet hetzelfde als 如果. 如果 is een mogelijkheid: misschien. 既然 is een feit: het is al zo.",
  examples: [
    { cn: "既然你已经决定了，就去做吧。", py: "Jìrán nǐ yǐjīng juédìng le, jiù qù zuò ba.", nl: "Nu je toch besloten hebt, doe het dan." },
    { cn: "既然下雨了，我们就别出去了。", py: "Jìrán xiàyǔ le, wǒmen jiù bié chūqu le.", nl: "Nu het toch regent, gaan we maar niet naar buiten." },
    { cn: "既然大家都同意，那就这么办。", py: "Jìrán dàjiā dōu tóngyì, nà jiù zhème bàn.", nl: "Iedereen is het eens, dus dan doen we het zo." },
    { cn: "你既然知道错了，就应该道歉。", py: "Nǐ jìrán zhīdào cuò le, jiù yīnggāi dàoqiàn.", nl: "Nu je weet dat je fout zat, moet je ook sorry zeggen." }
  ],
  nuance: [
    { h: "既然 of 因为?",
      p: "Beide geven een reden, maar de functie verschilt. 因为 ... 所以 legt uit waarom iets gebeurde: een verslag. 既然 ... 就 begint bij een feit dat iedereen al kent. Daarna volgt wat je nu moet doen of denkt: een advies, besluit of vraag. Combineer 既然 dus niet met 所以.",
      ex: [
        { cn: "因为下雨了，所以比赛取消了。", py: "Yīnwèi xiàyǔ le, suǒyǐ bǐsài qǔxiāo le.", nl: "Omdat het regende, is de wedstrijd afgelast." },
        { cn: "既然下雨了，我们就别去了。", py: "Jìrán xiàyǔ le, wǒmen jiù bié qù le.", nl: "Nu het toch regent, gaan we maar niet." }
      ] },
    { h: "既然 of 如果?",
      p: "如果 opent een mogelijkheid: misschien gebeurt het. 既然 noemt iets wat al vaststaat. Over de toekomst praat je daarom meestal met 如果. Alleen als iets in de toekomst al zeker is, kan 既然: 既然明天放假 ...",
      ex: [
        { cn: "如果你明天有空，就来我家吧。", py: "Rúguǒ nǐ míngtiān yǒu kòng, jiù lái wǒ jiā ba.", nl: "Als je morgen tijd hebt, kom dan naar mijn huis." },
        { cn: "既然你明天有空，就来我家吧。", py: "Jìrán nǐ míngtiān yǒu kòng, jiù lái wǒ jiā ba.", nl: "Je hebt morgen toch tijd, kom dan naar mijn huis." }
      ] },
    { h: "既然 met een vraag, en 既然如此",
      p: "Met 为什么还 of 何必 maak je een verwijtende vraag: je weet het toch, waarom dan nog? In de spreektaal hoor je ook 那就 in het tweede deel. 既然如此 (nu dat zo is) klinkt formeel en staat vaak aan het begin van een zin.",
      ex: [
        { cn: "既然你知道这样不对，为什么还要做？", py: "Jìrán nǐ zhīdào zhèyàng bú duì, wèishénme hái yào zuò?", nl: "Je weet toch dat dit niet goed is, waarom doe je het dan nog?" },
        { cn: "既然如此，我们只好改天再谈。", py: "Jìrán rúcǐ, wǒmen zhǐhǎo gǎitiān zài tán.", nl: "Nu dat zo is, moeten we het maar een andere dag bespreken." }
      ] }
  ],
  mistakes: [
    { wrong: "既然明天下雨，我们就不去了。", right: "如果明天下雨，我们就不去了。", why: "Of het morgen regent, is nog niet zeker. Voor een mogelijkheid gebruik je 如果." },
    { wrong: "既然你累了，所以休息吧。", right: "既然你累了，就休息吧。", why: "Bij 既然 hoort 就, niet 所以. 所以 hoort bij 因为." },
    { wrong: "既然你累了，就你休息吧。", right: "既然你累了，你就休息吧。", why: "就 staat ná het onderwerp, vlak vóór het werkwoord." },
    { wrong: "因为你累了，就休息吧。", right: "既然你累了，就休息吧。", why: "Een advies uit een bekend feit maak je met 既然. 因为 legt alleen een oorzaak uit." }
  ],
  vocab: [
    ["既然", "jìrán", "(nu ... toch)"], ["决定", "juédìng", "beslissen"], ["同意", "tóngyì", "het eens zijn"],
    ["道歉", "dàoqiàn", "sorry zeggen"], ["无聊", "wúliáo", "saai, verveeld"], ["出发", "chūfā", "vertrekken"],
    ["待", "dāi", "blijven, verblijven"], ["辞职", "cízhí", "ontslag nemen"], ["考虑", "kǎolǜ", "overwegen, nadenken over"],
    ["支持", "zhīchí", "steunen"]
  ],
  dialogue: [
    ["A", "这个周末我想去爬山，可是一个人有点儿无聊。", "Zhège zhōumò wǒ xiǎng qù páshān, kěshì yí ge rén yǒudiǎnr wúliáo.", "Dit weekend wil ik de bergen in, maar alleen is wat saai."],
    ["B", "我周末也没事。", "Wǒ zhōumò yě méi shì.", "Ik heb dit weekend ook niets te doen."],
    ["A", "既然你也有空，就跟我一起去吧！", "Jìrán nǐ yě yǒu kòng, jiù gēn wǒ yìqǐ qù ba!", "Nu je toch ook tijd hebt, ga dan met me mee!"],
    ["B", "好啊。不过听说那座山很高。", "Hǎo a. Búguò tīngshuō nà zuò shān hěn gāo.", "Goed. Maar ik hoor dat die berg erg hoog is."],
    ["A", "既然山那么高，我们就早点儿出发。", "Jìrán shān nàme gāo, wǒmen jiù zǎo diǎnr chūfā.", "Nu die berg zo hoog is, vertrekken we gewoon wat vroeger."]
  ],
  reading: {
    title: "小林的咖啡馆",
    lines: [
      { cn: "小林在一家大公司工作了五年，收入不错，可是她一直不太开心。", py: "Xiǎo Lín zài yì jiā dà gōngsī gōngzuòle wǔ nián, shōurù búcuò, kěshì tā yìzhí bú tài kāixīn.", nl: "Xiao Lin werkte vijf jaar bij een groot bedrijf. Ze verdiende goed, maar ze was nooit echt gelukkig." },
      { cn: "她从小就喜欢做蛋糕，梦想是开一家自己的咖啡馆。", py: "Tā cóngxiǎo jiù xǐhuan zuò dàngāo, mèngxiǎng shì kāi yì jiā zìjǐ de kāfēiguǎn.", nl: "Al van jongs af aan bakte ze graag taart. Haar droom was een eigen café." },
      { cn: "有一天，她终于告诉父母，她想辞职。", py: "Yǒu yì tiān, tā zhōngyú gàosu fùmǔ, tā xiǎng cízhí.", nl: "Op een dag vertelde ze haar ouders eindelijk dat ze ontslag wilde nemen." },
      { cn: "妈妈很担心：\"开店有风险，你考虑清楚了吗？\"", py: "Māma hěn dānxīn: \"Kāi diàn yǒu fēngxiǎn, nǐ kǎolǜ qīngchu le ma?\"", nl: "Haar moeder was bezorgd: \"Een zaak beginnen is riskant. Heb je er goed over nagedacht?\"" },
      { cn: "小林说：\"我已经考虑一年了。\"", py: "Xiǎo Lín shuō: \"Wǒ yǐjīng kǎolǜ yì nián le.\"", nl: "Xiao Lin zei: \"Ik denk er al een jaar over na.\"" },
      { cn: "爸爸想了想，说：\"既然你已经决定了，我们就支持你。\"", py: "Bàba xiǎngle xiǎng, shuō: \"Jìrán nǐ yǐjīng juédìng le, wǒmen jiù zhīchí nǐ.\"", nl: "Haar vader dacht even na en zei: \"Nu je toch besloten hebt, steunen we je.\"" },
      { cn: "\"不过，既然要开店，就要做好吃苦的准备。\"", py: "\"Búguò, jìrán yào kāi diàn, jiù yào zuòhǎo chīkǔ de zhǔnbèi.\"", nl: "\"Maar als je dan toch een zaak begint, moet je je voorbereiden op hard werken.\"" },
      { cn: "半年以后，小林的咖啡馆开业了，第一位客人就是她妈妈。", py: "Bàn nián yǐhòu, Xiǎo Lín de kāfēiguǎn kāiyè le, dì yī wèi kèrén jiù shì tā māma.", nl: "Een half jaar later ging het café van Xiao Lin open. De eerste klant was haar moeder." },
      { cn: "妈妈尝了一口蛋糕，笑着说：\"既然这么好吃，我以后天天来！\"", py: "Māma chángle yì kǒu dàngāo, xiàozhe shuō: \"Jìrán zhème hǎochī, wǒ yǐhòu tiāntiān lái!\"", nl: "Haar moeder proefde een hap taart en zei lachend: \"Nu het zo lekker is, kom ik voortaan elke dag!\"" }
    ],
    questions: [
      { type: "mc", q: "Hoe reageerde de vader?",
        options: ["Hij steunde haar, maar zei dat het hard werken zou worden.", "Hij was bezorgd over het risico.", "Hij wilde dat ze bij het bedrijf bleef.", "Hij werd de eerste klant van het café."], answer: 0,
        why: ["Goed: 我们就支持你 ... 就要做好吃苦的准备。", "Dat was de moeder: 开店有风险.", "Hij zegt juist: 我们就支持你.", "De eerste klant was de moeder."] },
      { type: "mc", q: "Hoe lang dacht Xiao Lin al na over haar plan?",
        options: ["Een jaar.", "Vijf jaar.", "Een half jaar.", "Twee weken."], answer: 0,
        why: ["Goed: 我已经考虑一年了。", "Vijf jaar werkte ze bij het bedrijf.", "Een half jaar later ging het café open.", "Twee weken staat niet in de tekst."] },
      { type: "mc", q: "既然你已经决定了，我们就支持你。Wat laat 既然 hier zien?",
        options: ["Het besluit is al een feit; daaruit volgt de steun.", "Misschien neemt ze nog een besluit.", "Ze steunen haar, hoewel ze het niet eens zijn.", "Ze besloot het omdat haar ouders haar steunden."], answer: 0,
        why: ["Goed: 既然 + bekend feit, 就 + conclusie.", "Voor \"misschien\" zou je 如果 gebruiken.", "既然 geeft geen tegenstelling; dat doet 虽然.", "De volgorde is andersom: eerst het besluit, dan de steun."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Nu je toch hier bent, eet dan hier.\" Welke zin klopt?",
      options: ["既然你来了，就在这儿吃饭吧。", "你来了既然，就在这儿吃饭吧。", "既然你来了，但是在这儿吃饭吧。", "无论你来了，就在这儿吃饭吧。"], answer: 0,
      why: ["Goed: 既然 + feit, dan 就 + advies.", "既然 staat vóór het feit, niet erachter.", "既然 geeft een gevolg, geen tegenstelling. 但是 past niet.", "Na 无论 hoort een vraagwoord. Voor een bekend feit gebruik je 既然."] },
    { type: "mc", q: "___你已经买了票，我们就去看吧。(Je hebt de kaartjes toch al gekocht, dus laten we gaan kijken.)",
      options: ["既然", "虽然", "无论", "除了"], answer: 0,
      why: ["Goed: een bekend feit (票买了) + 就 + advies.", "虽然 geeft een tegenstelling en past niet bij 就 ... 吧.", "Na 无论 hoort een vraagwoord, geen feit.", "除了 betekent \"behalve\"."] },
    { type: "order", q: "Zet in de goede volgorde: \"Nu het toch regent, blijven we maar thuis.\"",
      tokens: [["既然", "jìrán"], ["下雨了", "xiàyǔ le"], ["我们", "wǒmen"], ["就", "jiù"], ["待在家里", "dāi zài jiā li"], ["吧", "ba"]] },
    { type: "mc", q: "Wanneer gebruik je 既然, en niet 如果?",
      options: ["Als het eerste deel al een feit is.", "Als het eerste deel misschien gebeurt.", "Als de twee delen elkaar tegenspreken.", "Als de oorzaak in het tweede deel staat."], answer: 0,
      why: ["Goed: 既然 = het is al zo.", "Voor \"misschien\" gebruik je 如果.", "Voor een tegenstelling gebruik je 虽然 of 尽管.", "Bij 既然 staat het feit in het eerste deel."] },
    { type: "mc", q: "Een nieuwsbericht: \"Door de zware sneeuw zijn de vluchten geannuleerd.\" Welke zin klopt?",
      options: ["因为下了大雪，所以航班取消了。", "既然下了大雪，所以航班取消了。", "如果下了大雪，所以航班取消了。", "虽然下了大雪，所以航班取消了。"], answer: 0,
      why: ["Goed: een verslag van oorzaak en gevolg is 因为 ... 所以.", "既然 trekt een conclusie (advies, besluit) en past niet bij 所以.", "如果 is een mogelijkheid, maar de sneeuw is echt gevallen.", "虽然 geeft een tegenstelling, geen oorzaak."] },
    { type: "mc", q: "明天___下雨，我们就不去爬山了。(Als het morgen regent, gaan we niet de bergen in.)",
      options: ["如果", "既然", "虽然", "无论"], answer: 0,
      why: ["Goed: regen morgen is een mogelijkheid, dus 如果.", "既然 vraagt om een feit; morgen is nog niet zeker.", "虽然 geeft een tegenstelling en past niet bij 就.", "Na 无论 hoort een vraag of keuze, zoals 下不下雨."] },
    { type: "mc", q: "既然你知道这样不对，为什么还要做？Wat betekent dit?",
      options: ["Je weet toch dat het fout is, waarom doe je het dan nog?", "Als je weet dat het fout is, doe het dan niet.", "Omdat je wist dat het fout was, deed je het niet.", "Hoewel je weet dat het fout is, moet je het doen."], answer: 0,
      why: ["Goed: 既然 + feit, dan een verwijtende vraag met 为什么还.", "既然 is geen \"als\", en de zin is een vraag, geen advies.", "De zin zegt juist dat je het tóch doet.", "既然 geeft geen tegenstelling, en er staat geen \"moeten\"."] },
    { type: "order", q: "Zet in de goede volgorde: \"Iedereen is er toch, dan beginnen we.\"",
      tokens: [["既然", "jìrán"], ["大家都到了", "dàjiā dōu dào le"], ["我们就", "wǒmen jiù"], ["开始吧", "kāishǐ ba"]] },
    { type: "fill", q: "___你已经来了，就多住几天吧。(Nu je toch gekomen bent, blijf dan een paar dagen langer.)", answers: ["既然"],
      hint: "Welk woord noemt een bekend feit en past bij 就?", why: "既然 + feit (你已经来了) + 就 + advies." },
    { type: "open", q: "Iemand zegt: 我不舒服。Geef advies met 既然 ... 就.", model: ["既然你不舒服，就早点儿回家吧。", "既然不舒服，你就去看医生吧。", "你既然不舒服，就别去上班了。"],
      tip: "Check: 既然 + het feit, dan 就 vóór het advies. Het advies eindigt vaak op 吧 of 了." },
    { type: "open", q: "Vertaal: \"Nu je het toch weet, vertel het me dan.\"", model: ["既然你知道了，就告诉我吧。", "你既然知道，就告诉我吧。"],
      tip: "Check: 既然 vóór het feit, 就 vóór 告诉, en geen 所以." }
  ],
  review: [
    { type: "mc", q: "既然你不喜欢这份工作，___换一个吧。(Je vindt deze baan toch niet leuk, zoek dan een andere.)",
      options: ["就", "都", "所以", "却"], answer: 0,
      why: ["Goed: 既然 ... 就.", "都 betekent \"allemaal\" en maakt geen conclusie.", "Bij 既然 hoort 就, niet 所以.", "却 geeft een tegenstelling, geen conclusie."] },
    { type: "mc", q: "Wat betekent: 既然你不想去，就别去了。",
      options: ["Je wilt toch niet gaan, ga dan niet.", "Als je misschien niet wilt, ga dan toch.", "Hoewel je niet wilt, moet je gaan.", "Omdat je niet ging, wil je niet meer."], answer: 0,
      why: ["Goed.", "既然 is een feit, geen \"misschien\". En 别去 = ga niet.", "就 geeft een gevolg, geen tegenstelling.", "Het feit staat in het eerste deel: je wilt niet."] },
    { type: "mc", q: "\"Nu je toch in Beijing bent, kom dan bij me langs.\"",
      options: ["既然你到北京了，就来看看我吧。", "既然你到北京了，都来看看我吧。", "你到北京了既然，就来看看我吧。", "既然你到北京了，就你来看看我吧。"], answer: 0,
      why: ["Goed: 既然 + feit, 就 + advies.", "Bij 既然 hoort 就, niet 都.", "既然 staat vóór het feit, niet erachter.", "就 staat ná het onderwerp: 你就来看看我吧."] }
  ]
})
