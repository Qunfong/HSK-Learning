// HSK 5 lessons. Vocabulary is level-appropriate practice, not a certified official HSK 3.0 list.
// Question types: mc (answer = index), order (tokens in the right order), open (self-check with model answers).
// "review" questions never appear in the lesson itself; they come back on the review page.
window.HSK = window.HSK || {};
window.HSK.hsk5 = {
  level: "HSK 5", dir: "hsk5",
  lessons: [
    {
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
        "不管 betekent hetzelfde als 无论. 不管 klinkt wat informeler."
      ],
      pitfall: "Na 无论 komt geen gewone bewering. 无论天气很冷 is fout. Zeg 无论天气多冷 of 无论天气冷不冷.",
      examples: [
        { cn: "无论你什么时候来，我都欢迎。", py: "Wúlùn nǐ shénme shíhou lái, wǒ dōu huānyíng.", nl: "Wanneer je ook komt, je bent altijd welkom." },
        { cn: "无论刮风还是下雨，他都骑自行车上班。", py: "Wúlùn guāfēng háishi xiàyǔ, tā dōu qí zìxíngchē shàngbān.", nl: "Of het nu waait of regent, hij fietst altijd naar zijn werk." },
        { cn: "无论工作多忙，她每天都给妈妈打电话。", py: "Wúlùn gōngzuò duō máng, tā měitiān dōu gěi māma dǎ diànhuà.", nl: "Hoe druk haar werk ook is, ze belt elke dag haar moeder." },
        { cn: "不管别人怎么说，我也不改变主意。", py: "Bùguǎn biérén zěnme shuō, wǒ yě bù gǎibiàn zhǔyi.", nl: "Wat anderen ook zeggen, ik verander niet van mening." }
      ],
      vocab: [
        ["无论", "wúlùn", "(ongeacht, hoe ... ook)"], ["不管", "bùguǎn", "(ongeacht, informeel)"], ["刮风", "guāfēng", "waaien"],
        ["改变", "gǎibiàn", "veranderen"], ["主意", "zhǔyi", "idee, plan"], ["举行", "jǔxíng", "houden (evenement)"],
        ["按时", "ànshí", "op tijd"], ["观众", "guānzhòng", "toeschouwers, publiek"], ["体育馆", "tǐyùguǎn", "sporthal, stadion"],
        ["屋顶", "wūdǐng", "dak"]
      ],
      dialogue: [
        ["A", "明天可能会下大雨，比赛还举行吗？", "Míngtiān kěnéng huì xià dàyǔ, bǐsài hái jǔxíng ma?", "Morgen gaat het misschien hard regenen. Gaat de wedstrijd nog door?"],
        ["B", "无论天气怎么样，比赛都会按时举行。", "Wúlùn tiānqì zěnmeyàng, bǐsài dōu huì ànshí jǔxíng.", "Hoe het weer ook is, de wedstrijd begint op tijd."],
        ["A", "那观众怎么办？", "Nà guānzhòng zěnme bàn?", "En de toeschouwers dan?"],
        ["B", "体育馆有屋顶，无论下多大的雨，观众都不会淋湿。", "Tǐyùguǎn yǒu wūdǐng, wúlùn xià duō dà de yǔ, guānzhòng dōu bú huì línshī.", "Het stadion heeft een dak. Hoe hard het ook regent, de toeschouwers worden niet nat."],
        ["A", "太好了，那我无论多晚都去看。", "Tài hǎo le, nà wǒ wúlùn duō wǎn dōu qù kàn.", "Mooi, dan ga ik kijken, hoe laat het ook wordt."]
      ],
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
        { type: "open", q: "Vertaal: \"Hoe druk ik ook ben, ik sport elke dag.\"", model: ["无论多忙，我每天都运动。", "无论工作多忙，我每天都去运动。", "不管我多忙，我每天都锻炼身体。"],
          tip: "Check: na 无论 staat 多忙 (geen 很忙), en 都 staat vlak vóór het werkwoord." }
      ],
      review: [
        { type: "mc", q: "\"Waar hij ook naartoe gaat, hij heeft zijn camera bij zich.\"",
          options: ["他无论去哪儿，都带着相机。", "他无论去北京，都带着相机。", "他无论去哪儿，就带着相机。", "他去哪儿无论，都带着相机。"], answer: 0,
          why: ["Goed.", "去北京 is één plek. Na 无论 hoort een vraagwoord (哪儿).", "Bij 无论 hoort 都, niet 就.", "无论 staat vóór het deel met het vraagwoord."] },
        { type: "mc", q: "无论发生___事，你都要给我打电话。(Wat er ook gebeurt, bel me.)",
          options: ["什么", "这件", "一些", "很多"], answer: 0,
          why: ["Goed: 什么事 = wat ook. Na 无论 hoort een vraagwoord.", "这件事 is één bekende zaak, geen open vraag.", "一些事 is een gewone bewering, geen vraag.", "很多事 is een gewone bewering, geen vraag."] }
      ]
    },
    {
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
      patternCap: "既然 + bekend feit, (wie) + 就 + conclusie (vaak met 吧, 应该, 别 of 要)",
      rules: [
        "Het deel na 既然 is al waar. Meestal weten beide sprekers het.",
        "De conclusie is vaak een advies of besluit: 吧, 应该, 别.",
        "就 staat ná het onderwerp van het tweede deel: 既然你累了，你就睡吧。",
        "既然 mag ook ná het onderwerp: 你既然知道了，就告诉我吧。"
      ],
      pitfall: "既然 is niet hetzelfde als 如果. 如果 is een mogelijkheid: misschien. 既然 is een feit: het is al zo.",
      examples: [
        { cn: "既然你已经决定了，就去做吧。", py: "Jìrán nǐ yǐjīng juédìng le, jiù qù zuò ba.", nl: "Nu je toch besloten hebt, doe het dan." },
        { cn: "既然下雨了，我们就别出去了。", py: "Jìrán xiàyǔ le, wǒmen jiù bié chūqu le.", nl: "Nu het toch regent, gaan we maar niet naar buiten." },
        { cn: "既然大家都同意，那就这么办。", py: "Jìrán dàjiā dōu tóngyì, nà jiù zhème bàn.", nl: "Iedereen is het eens, dus dan doen we het zo." },
        { cn: "你既然知道错了，就应该道歉。", py: "Nǐ jìrán zhīdào cuò le, jiù yīnggāi dàoqiàn.", nl: "Nu je weet dat je fout zat, moet je ook sorry zeggen." }
      ],
      vocab: [
        ["既然", "jìrán", "(nu ... toch)"], ["决定", "juédìng", "beslissen"], ["同意", "tóngyì", "het eens zijn"],
        ["道歉", "dàoqiàn", "sorry zeggen"], ["无聊", "wúliáo", "saai, verveeld"], ["爬山", "páshān", "bergwandelen"],
        ["出发", "chūfā", "vertrekken"], ["不过", "búguò", "(maar, echter)"], ["待", "dāi", "blijven, verblijven"],
        ["座", "zuò", "(maatwoord voor bergen, gebouwen)"]
      ],
      dialogue: [
        ["A", "这个周末我想去爬山，可是一个人有点儿无聊。", "Zhège zhōumò wǒ xiǎng qù páshān, kěshì yí ge rén yǒudiǎnr wúliáo.", "Dit weekend wil ik de bergen in, maar alleen is wat saai."],
        ["B", "我周末也没事。", "Wǒ zhōumò yě méi shì.", "Ik heb dit weekend ook niets te doen."],
        ["A", "既然你也有空，就跟我一起去吧！", "Jìrán nǐ yě yǒu kòng, jiù gēn wǒ yìqǐ qù ba!", "Nu je toch ook tijd hebt, ga dan met me mee!"],
        ["B", "好啊。不过听说那座山很高。", "Hǎo a. Búguò tīngshuō nà zuò shān hěn gāo.", "Goed. Maar ik hoor dat die berg erg hoog is."],
        ["A", "既然山那么高，我们就早点儿出发。", "Jìrán shān nàme gāo, wǒmen jiù zǎo diǎnr chūfā.", "Als die berg zo hoog is, vertrekken we gewoon wat vroeger."]
      ],
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
        { type: "open", q: "Iemand zegt: 我不舒服。Geef advies met 既然 ... 就.", model: ["既然你不舒服，就早点儿回家吧。", "既然不舒服，你就去看医生吧。", "你既然不舒服，就别去上班了。"],
          tip: "Check: 既然 + het feit, dan 就 vóór het advies. Het advies eindigt vaak op 吧 of 了." }
      ],
      review: [
        { type: "mc", q: "既然你不喜欢这份工作，___换一个吧。(Je vindt deze baan toch niet leuk, zoek dan een andere.)",
          options: ["就", "都", "所以", "却"], answer: 0,
          why: ["Goed: 既然 ... 就.", "都 betekent \"allemaal\" en maakt geen conclusie.", "Bij 既然 hoort 就, niet 所以.", "却 geeft een tegenstelling, geen conclusie."] },
        { type: "mc", q: "Wat betekent: 既然你不想去，就别去了。",
          options: ["Je wilt toch niet gaan, ga dan niet.", "Als je misschien niet wilt, ga dan toch.", "Hoewel je niet wilt, moet je gaan.", "Omdat je niet ging, wil je niet meer."], answer: 0,
          why: ["Goed.", "既然 is een feit, geen \"misschien\". En 别去 = ga niet.", "就 geeft een gevolg, geen tegenstelling.", "Het feit staat in het eerste deel: je wilt niet."] }
      ]
    },
    {
      id: "03", slug: "ningke", title: "宁可 ... 也不", sub: "Liever het ene dan het andere",
      canDo: "Je kunt nu zeggen welke van twee minder leuke keuzes je liever maakt, met 宁可 ... 也不.",
      guess: {
        q: "我宁可走路，也不坐他的车。Wat betekent dit, denk je?",
        options: ["Ik loop liever dan dat ik met zijn auto meerijd.", "Ik rijd liever met zijn auto mee dan dat ik loop.", "Ik loop, en ik rijd ook met zijn auto mee.", "Ik kan niet lopen, dus ik rijd met hem mee."], answer: 0,
        why: ["Goed: na 宁可 staat wat je kiest, na 也不 wat je weigert.", "De delen zijn omgedraaid: 也不 staat bij de auto.", "也不 zegt dat je het níet doet.", "宁可 gaat over een keuze, niet over wat je kunt."]
      },
      problem: "Soms zijn beide keuzes niet leuk. Je kiest de minst slechte. \"Ik sta liever een uur in de rij dan dat ik extra betaal.\" Daarvoor gebruik je 宁可 (nìngkě) ... 也不 (yě bù). Na 宁可 staat wat je kiest. Na 也不 staat wat je weigert.",
      pattern: [
        { l: "wie", v: "我", c: 1 }, { l: "宁可", v: "宁可", c: 2, key: true }, { l: "wat je kiest", v: "走路", c: 4 },
        { l: "也不", v: "也不", c: 2, key: true }, { l: "wat je weigert", v: "坐他的车", c: 5 }
      ],
      patternCap: "Wie + 宁可 + keuze (vaak iets zwaars) + ，也不 + wat je weigert · 宁可 A，也要 B = liever A, als B maar lukt",
      rules: [
        "Na 宁可 staat wat je kiest. Dat is vaak ook niet leuk.",
        "Na 也不 staat wat je zeker niet wilt.",
        "宁可 staat meestal direct na het onderwerp: 我宁可 ...",
        "宁可 A，也要 B: je accepteert A, zodat B zeker gebeurt."
      ],
      pitfall: "Draai de delen niet om. Wat je kiest staat na 宁可. Wat je weigert staat na 也不.",
      examples: [
        { cn: "我宁可多花点儿钱，也不买质量差的东西。", py: "Wǒ nìngkě duō huā diǎnr qián, yě bù mǎi zhìliàng chà de dōngxi.", nl: "Ik geef liever wat meer uit dan dat ik slechte spullen koop." },
        { cn: "他宁可饿着，也不吃快餐。", py: "Tā nìngkě èzhe, yě bù chī kuàicān.", nl: "Hij blijft liever met honger zitten dan dat hij fastfood eet." },
        { cn: "我宁可早点儿起床，也不想迟到。", py: "Wǒ nìngkě zǎo diǎnr qǐchuáng, yě bù xiǎng chídào.", nl: "Ik sta liever vroeg op dan dat ik te laat kom." },
        { cn: "她宁可少睡一会儿，也要把报告写完。", py: "Tā nìngkě shǎo shuì yíhuìr, yě yào bǎ bàogào xiěwán.", nl: "Ze slaapt liever wat minder, als het rapport maar af komt." }
      ],
      vocab: [
        ["宁可", "nìngkě", "(liever)"], ["质量", "zhìliàng", "kwaliteit"], ["饿", "è", "honger hebben"],
        ["快餐", "kuàicān", "fastfood"], ["报告", "bàogào", "rapport, verslag"], ["打车", "dǎchē", "een taxi nemen"],
        ["浪费", "làngfèi", "verspillen"], ["聚会", "jùhuì", "feest, bijeenkomst"], ["脏", "zāng", "vies"],
        ["外卖", "wàimài", "bezorgmaaltijd"]
      ],
      dialogue: [
        ["A", "外面雨这么大，我们打车回去吧？", "Wàimiàn yǔ zhème dà, wǒmen dǎchē huíqu ba?", "Het regent zo hard. Zullen we een taxi naar huis nemen?"],
        ["B", "现在打车要等一个小时。我宁可坐地铁，也不在这儿等。", "Xiànzài dǎchē yào děng yí ge xiǎoshí. Wǒ nìngkě zuò dìtiě, yě bú zài zhèr děng.", "Op een taxi wacht je nu een uur. Ik neem liever de metro dan dat ik hier wacht."],
        ["A", "可是地铁站很远啊。", "Kěshì dìtiězhàn hěn yuǎn a.", "Maar het metrostation is ver weg."],
        ["B", "没关系，我宁可走一会儿，也不想浪费时间。", "Méi guānxi, wǒ nìngkě zǒu yíhuìr, yě bù xiǎng làngfèi shíjiān.", "Geeft niet. Ik loop liever een stukje dan dat ik tijd verspil."],
        ["A", "好吧，那我们走吧。", "Hǎo ba, nà wǒmen zǒu ba.", "Goed, laten we dan gaan."]
      ],
      questions: [
        { type: "mc", q: "\"Ik eet liever thuis dan dat ik naar dat restaurant ga.\"",
          options: ["我宁可在家吃，也不去那家饭馆。", "我宁可去那家饭馆，也不在家吃。", "我宁可在家吃，也去那家饭馆。", "我在家吃宁可，也不去那家饭馆。"], answer: 0,
          why: ["Goed: wat je kiest na 宁可, wat je weigert na 也不.", "De delen zijn omgedraaid: nu kies je het restaurant.", "Zonder 不 zeg je dat je óók naar het restaurant gaat.", "宁可 staat vóór de keuze, niet erachter."] },
        { type: "mc", q: "我___站着，也不坐那把脏椅子。(Ik blijf liever staan dan dat ik op die vieze stoel ga zitten.)",
          options: ["宁可", "无论", "除了", "因为"], answer: 0,
          why: ["Goed: 宁可 ... 也不 = liever ... dan.", "Na 无论 hoort een vraagwoord, en het maakt geen keuze.", "除了 betekent \"behalve\" en maakt geen keuze.", "因为 geeft een reden, geen voorkeur."] },
        { type: "order", q: "Zet in de goede volgorde: \"Hij blijft liever thuis dan dat hij naar het feest gaat.\"",
          tokens: [["他", "tā"], ["宁可", "nìngkě"], ["待在家里", "dāi zài jiā li"], ["也不", "yě bù"], ["去参加聚会", "qù cānjiā jùhuì"]] },
        { type: "mc", q: "Wat betekent: 我宁可自己做，也不要他帮忙。",
          options: ["Ik doe het liever zelf dan dat hij helpt.", "Ik laat hem liever helpen dan dat ik het zelf doe.", "Ik doe het zelf, en hij helpt ook.", "Ik kan het niet zelf, dus hij moet helpen."], answer: 0,
          why: ["Goed.", "De delen zijn omgedraaid: 也不要 staat bij zijn hulp.", "也不要 zegt dat je zijn hulp níet wilt.", "宁可 gaat over een keuze, niet over wat je kunt."] },
        { type: "open", q: "Zeg wat jij liever doet dan iets anders, met 宁可 ... 也不.", model: ["我宁可走路，也不坐公共汽车。", "我宁可在家做饭，也不吃外卖。", "我宁可早点儿出发，也不想迟到。"],
          tip: "Check: wat je kiest staat na 宁可, wat je weigert staat na 也不." }
      ],
      review: [
        { type: "mc", q: "\"Ik wacht liever nog een jaar dan dat ik een huis koop dat ik niet mooi vind.\"",
          options: ["我宁可再等一年，也不买不喜欢的房子。", "我宁可买不喜欢的房子，也不再等一年。", "我宁可再等一年，也买不喜欢的房子。", "我再等一年宁可，也不买不喜欢的房子。"], answer: 0,
          why: ["Goed.", "De delen zijn omgedraaid: nu koop je liever het huis.", "Zonder 不 koop je het huis óók.", "宁可 staat vóór de keuze, niet erachter."] },
        { type: "mc", q: "他宁可自己多做一点，___不让同事加班。(Hij werkt liever zelf wat meer dan dat hij collega's laat overwerken.)",
          options: ["也", "就", "所以", "却"], answer: 0,
          why: ["Goed: 宁可 ... 也不.", "Bij 宁可 hoort 也, niet 就.", "所以 geeft een gevolg, geen voorkeur.", "却 geeft een tegenstelling, geen voorkeur."] }
      ]
    },
    {
      id: "04", slug: "nandao", title: "难道 ... 吗", sub: "Een vraag die eigenlijk een bewering is",
      canDo: "Je kunt nu verbazing of ongeloof tonen met een retorische vraag met 难道 ... 吗, en zo'n vraag goed begrijpen.",
      guess: {
        q: "难道你不知道吗？Wat bedoelt de spreker, denk je?",
        options: ["Je weet het toch wel?", "Ik vraag gewoon of je het weet.", "Je weet het echt niet, dat is duidelijk.", "Ik weet het zelf ook niet."], answer: 0,
        why: ["Goed: 难道 + 不 = \"toch wel\". De spreker is verbaasd.", "难道 maakt geen neutrale vraag. De spreker verwacht het antwoord al.", "De vorm is ontkennend, maar de bedoeling is: je weet het wel.", "De vraag gaat over jou, niet over de spreker."]
      },
      problem: "Soms stel je een vraag, maar je weet het antwoord al. \"Je weet toch wel dat hij jarig is?\" Je bent verbaasd of een beetje boos. In het Chinees zet je 难道 (nándào) in de vraag. Aan het eind staat 吗.",
      pattern: [
        { l: "wie", v: "你", c: 1 }, { l: "难道", v: "难道", c: 2, key: true }, { l: "ontkenning", v: "不知道", c: 4 },
        { l: "吗", v: "吗", c: 5, key: true }
      ],
      patternCap: "难道 + ontkenning + 吗？ = toch wel ... · 难道 + bevestiging + 吗？ = toch niet ...",
      rules: [
        "难道 + 不/没 = \"toch wel\". 难道你没看见吗？ = je hebt het toch gezien.",
        "难道 zonder ontkenning = \"toch niet\". 难道他是老师吗？ = hij is toch geen leraar.",
        "难道 staat vóór of ná het onderwerp: 难道你 ... en 你难道 ... kunnen allebei.",
        "De toon is verbaasd, ongelovig of een beetje boos."
      ],
      pitfall: "Lees 难道你不知道吗？ niet als \"Weet je het niet?\". De spreker bedoelt: \"Je weet het toch wel!\"",
      examples: [
        { cn: "难道你忘了今天是我的生日吗？", py: "Nándào nǐ wàngle jīntiān shì wǒ de shēngrì ma?", nl: "Je bent toch niet vergeten dat ik vandaag jarig ben?" },
        { cn: "这么简单的问题，难道你不会吗？", py: "Zhème jiǎndān de wèntí, nándào nǐ bú huì ma?", nl: "Zo'n eenvoudige vraag, die kun je toch wel?" },
        { cn: "他难道是你哥哥吗？你们一点儿都不像。", py: "Tā nándào shì nǐ gēge ma? Nǐmen yìdiǎnr dōu bú xiàng.", nl: "Is hij echt je broer? Jullie lijken helemaal niet op elkaar." },
        { cn: "难道我说错了吗？", py: "Nándào wǒ shuōcuò le ma?", nl: "Heb ik soms iets verkeerds gezegd?" }
      ],
      vocab: [
        ["难道", "nándào", "(toch niet, soms)"], ["简单", "jiǎndān", "eenvoudig"], ["像", "xiàng", "lijken op"],
        ["接", "jiē", "ophalen"], ["完全", "wánquán", "helemaal"], ["消息", "xiāoxi", "bericht, nieuws"],
        ["发", "fā", "versturen"], ["记住", "jìzhù", "onthouden"], ["马上", "mǎshàng", "meteen"],
        ["听说", "tīngshuō", "horen (dat)"]
      ],
      dialogue: [
        ["A", "你怎么还在睡觉？", "Nǐ zěnme hái zài shuìjiào?", "Waarom lig je nog te slapen?"],
        ["B", "今天是星期六啊。", "Jīntiān shì xīngqīliù a.", "Het is toch zaterdag."],
        ["A", "难道你忘了今天要去机场接奶奶吗？", "Nándào nǐ wàngle jīntiān yào qù jīchǎng jiē nǎinai ma?", "Je bent toch niet vergeten dat we oma vandaag van het vliegveld halen?"],
        ["B", "啊！我完全忘了！几点的飞机？", "À! Wǒ wánquán wàng le! Jǐ diǎn de fēijī?", "Ah! Helemaal vergeten! Hoe laat komt het vliegtuig?"],
        ["A", "十点到。难道你没看我昨天发的消息吗？", "Shí diǎn dào. Nándào nǐ méi kàn wǒ zuótiān fā de xiāoxi ma?", "Om tien uur. Je hebt mijn bericht van gisteren toch wel gelezen?"],
        ["B", "看了，但是没记住。对不起，我马上起来！", "Kàn le, dànshì méi jìzhù. Duìbuqǐ, wǒ mǎshàng qǐlai!", "Gelezen wel, maar niet onthouden. Sorry, ik sta meteen op!"]
      ],
      questions: [
        { type: "mc", q: "Wat bedoelt de spreker met: 难道你没听说吗？",
          options: ["Je hebt het toch wel gehoord?", "Je hebt het toch niet gehoord?", "Ik heb het zelf niet gehoord.", "Wil je het graag horen?"], answer: 0,
          why: ["Goed: 难道 + 没 = toch wel.", "Met een ontkenning betekent 难道 juist \"toch wel\".", "De vraag gaat over jou, niet over de spreker.", "听说 gaat over iets wat je gehoord hebt, niet over willen horen."] },
        { type: "mc", q: "\"Je bent toch geen kind meer!\" Welke zin past?",
          options: ["难道你还是孩子吗？", "难道你不是孩子吗？", "难道你还是孩子。", "你还是孩子难道吗？"], answer: 0,
          why: ["Goed: 难道 zonder ontkenning = toch niet.", "Met 不 wordt het: je bent toch wel een kind.", "难道 maakt een vraag. Zonder 吗 en vraagteken klopt het niet.", "难道 staat vóór of na het onderwerp, niet achteraan."] },
        { type: "order", q: "Zet in de goede volgorde: \"Je hebt mijn bericht toch wel gezien?\"",
          tokens: [["难道你", "nándào nǐ"], ["没看到", "méi kàndào"], ["我的", "wǒ de"], ["消息", "xiāoxi"], ["吗", "ma"]] },
        { type: "mc", q: "这么重要的会，___你不参加吗？(Zo'n belangrijke vergadering, daar ga je toch wel naartoe?)",
          options: ["难道", "既然", "无论", "宁可"], answer: 0,
          why: ["Goed: 难道 + 不 + 吗 = toch wel.", "既然 geeft een feit met een conclusie, geen verbaasde vraag.", "Na 无论 hoort een vraagwoord en 都.", "宁可 hoort bij 也不: liever ... dan."] },
        { type: "open", q: "Reageer verbaasd: \"Je weet toch wel dat er morgen een examen is?\"", model: ["难道你不知道明天考试吗？", "你难道不知道明天要考试吗？", "难道你忘了明天有考试吗？"],
          tip: "Check: 难道 vóór of na 你, een ontkenning (不 of 没) voor \"toch wel\", en 吗 aan het eind." }
      ],
      review: [
        { type: "mc", q: "Wat betekent: 难道这是你写的吗？",
          options: ["Dit heb jij toch niet geschreven?", "Dit heb jij toch wel geschreven?", "Heb jij dit geschreven? (neutrale vraag)", "Dit heb ik niet geschreven."], answer: 0,
          why: ["Goed: 难道 zonder ontkenning = toch niet. De spreker gelooft het niet.", "Voor \"toch wel\" moet er 不 of 没 in de zin staan.", "难道 maakt geen neutrale vraag. De spreker is verbaasd.", "De vraag gaat over jou (你写的), niet over de spreker."] },
        { type: "mc", q: "\"Hij is toch wel je vriend?\" (je verwacht ja)",
          options: ["难道他不是你的朋友吗？", "难道他是你的朋友吗？", "难道他不是你的朋友。", "他不是你的朋友难道吗？"], answer: 0,
          why: ["Goed.", "Zonder 不 betekent het: hij is toch niet je vriend.", "难道 maakt een vraag. Er hoort 吗 en een vraagteken bij.", "难道 staat vóór of na het onderwerp, niet achteraan."] }
      ]
    },
    {
      id: "05", slug: "yimian", title: "以免 en 免得", sub: "Iets doen om een probleem te voorkomen",
      canDo: "Je kunt nu zeggen wat je doet om een probleem te voorkomen, met 以免 en 免得.",
      guess: {
        q: "出门带把伞，以免被雨淋湿。Wat betekent dit, denk je?",
        options: ["Neem een paraplu mee, zodat je niet nat wordt.", "Neem een paraplu mee, want je wordt nat.", "Neem geen paraplu mee, je wordt toch niet nat.", "Je wordt nat, ook met een paraplu."], answer: 0,
        why: ["Goed: na 以免 staat wat je wilt voorkomen.", "以免 geeft geen reden. Het zegt wat je wilt voorkomen.", "带把伞 zegt juist dat je een paraplu meeneemt.", "以免 zegt dat de paraplu het natworden voorkomt."]
      },
      problem: "Je doet iets om een probleem te voorkomen. \"Schrijf het op, anders vergeet je het.\" In het Chinees noem je eerst de handeling. Daarna komt 以免 (yǐmiǎn) of 免得 (miǎnde). Na dat woord staat wat je wilt voorkomen.",
      pattern: [
        { l: "handeling", v: "把地址写下来", c: 4 }, { l: "以免", v: "以免", c: 2, key: true }, { l: "wat je wilt voorkomen", v: "忘了", c: 5 }
      ],
      patternCap: "Handeling + ，以免 / 免得 + wat je wilt voorkomen · 以免 = formeler, vaak geschreven · 免得 = spreektaal",
      rules: [
        "以免 en 免得 staan aan het begin van het tweede deel, ná de handeling.",
        "Na 以免 staat wat je níet wilt. 以免 bevat de ontkenning al.",
        "以免 is formeel en past in geschreven tekst. 免得 hoor je vaker in gesprekken.",
        "Na 免得 mag een onderwerp komen: 早点儿回家，免得妈妈担心。"
      ],
      pitfall: "Zet geen 不 na 以免. 以免迟到 = om niet te laat te komen. 以免不迟到 is fout.",
      examples: [
        { cn: "把地址写下来，以免忘了。", py: "Bǎ dìzhǐ xiě xiàlai, yǐmiǎn wàng le.", nl: "Schrijf het adres op, zodat je het niet vergeet." },
        { cn: "开车要慢一点儿，以免发生事故。", py: "Kāichē yào màn yìdiǎnr, yǐmiǎn fāshēng shìgù.", nl: "Rij wat langzamer, om een ongeluk te voorkomen." },
        { cn: "你早点儿回家，免得妈妈担心。", py: "Nǐ zǎo diǎnr huíjiā, miǎnde māma dānxīn.", nl: "Ga wat vroeger naar huis, zodat je moeder zich geen zorgen maakt." },
        { cn: "多穿点儿衣服，免得感冒。", py: "Duō chuān diǎnr yīfu, miǎnde gǎnmào.", nl: "Trek wat meer kleren aan, zodat je niet verkouden wordt." }
      ],
      vocab: [
        ["以免", "yǐmiǎn", "(om te voorkomen dat)"], ["免得", "miǎnde", "(zodat niet, spreektaal)"], ["地址", "dìzhǐ", "adres"],
        ["发生", "fāshēng", "gebeuren"], ["事故", "shìgù", "ongeluk"], ["担心", "dānxīn", "zich zorgen maken"],
        ["着急", "zháojí", "gehaast, ongerust"], ["身份证", "shēnfènzhèng", "identiteitskaart"], ["影响", "yǐngxiǎng", "beïnvloeden, storen"],
        ["闹钟", "nàozhōng", "wekker"]
      ],
      dialogue: [
        ["A", "明天的考试八点开始，你几点出发？", "Míngtiān de kǎoshì bā diǎn kāishǐ, nǐ jǐ diǎn chūfā?", "Het examen morgen begint om acht uur. Hoe laat vertrek je?"],
        ["B", "七点吧。", "Qī diǎn ba.", "Om zeven uur, denk ik."],
        ["A", "早上路上车很多，你最好六点半出发，免得迟到。", "Zǎoshang lùshang chē hěn duō, nǐ zuìhǎo liù diǎn bàn chūfā, miǎnde chídào.", "'s Ochtends is het druk op de weg. Vertrek beter om half zeven, zodat je niet te laat komt."],
        ["B", "好。我今天晚上就把东西准备好，以免明天早上太着急。", "Hǎo. Wǒ jīntiān wǎnshang jiù bǎ dōngxi zhǔnbèi hǎo, yǐmiǎn míngtiān zǎoshang tài zháojí.", "Goed. Ik leg vanavond alles al klaar, zodat ik morgenochtend geen haast heb."],
        ["A", "对，也别忘了带身份证。", "Duì, yě bié wàngle dài shēnfènzhèng.", "Ja, en vergeet je identiteitskaart niet."]
      ],
      questions: [
        { type: "mc", q: "\"Zet je telefoon uit, zodat je anderen niet stoort.\"",
          options: ["把手机关了，以免影响别人。", "把手机关了，以免不影响别人。", "以免影响别人，把手机关了。", "把手机关了，所以影响别人。"], answer: 0,
          why: ["Goed: eerst de handeling, dan 以免 + wat je wilt voorkomen.", "Geen 不 na 以免: de ontkenning zit al in 以免.", "以免 staat in het tweede deel, ná de handeling.", "所以 geeft een gevolg: nu stoor je de anderen juist."] },
        { type: "mc", q: "路上很滑，你开慢点儿，___出事。(De weg is glad. Rij langzaam, zodat er niets gebeurt.)",
          options: ["免得", "因为", "既然", "难道"], answer: 0,
          why: ["Goed: 免得 + wat je wilt voorkomen.", "因为 geeft een reden. Dan zeg je dat je langzaam rijdt omdat er iets gebeurt.", "既然 staat bij een bekend feit in het eerste deel.", "难道 maakt een verbaasde vraag met 吗."] },
        { type: "order", q: "Zet in de goede volgorde: \"Neem beter je jas mee, zodat je niet verkouden wordt.\"",
          tokens: [["最好", "zuìhǎo"], ["带上", "dàishang"], ["外套", "wàitào"], ["免得", "miǎnde"], ["感冒", "gǎnmào"]] },
        { type: "mc", q: "Wat betekent: 我写完以后再检查一遍，以免出错。",
          options: ["Na het schrijven controleer ik het nog een keer, zodat er geen fouten in staan.", "Na het schrijven controleer ik het nog een keer, omdat er fouten in staan.", "Na het schrijven controleer ik het niet, want er staan geen fouten in.", "Na het schrijven controleer ik het nog een keer, maar er staan toch fouten in."], answer: 0,
          why: ["Goed: 以免出错 = om fouten te voorkomen.", "以免 geeft geen reden. Het zegt wat je wilt voorkomen.", "再检查一遍 zegt juist dat je wel controleert.", "以免 geeft geen tegenstelling. Het zegt wat je wilt voorkomen."] },
        { type: "open", q: "Zeg tegen een vriend: \"Zet een wekker, zodat je je niet verslaapt.\"", model: ["你定个闹钟，免得睡过头。", "定好闹钟，免得明天起晚了。", "你最好定个闹钟，以免迟到。"],
          tip: "Check: eerst de handeling, dan 免得 of 以免, en daarna geen 不." }
      ],
      review: [
        { type: "mc", q: "\"Praat wat zachter, zodat je de baby niet wakker maakt.\"",
          options: ["小声点儿，免得把孩子吵醒。", "小声点儿，免得不把孩子吵醒。", "免得把孩子吵醒，小声点儿。", "小声点儿，所以把孩子吵醒。"], answer: 0,
          why: ["Goed.", "Geen 不 na 免得: de ontkenning zit er al in.", "免得 staat in het tweede deel, ná de handeling.", "所以 geeft een gevolg: nu maak je de baby juist wakker."] },
        { type: "mc", q: "请把票放好，___丢了。(Berg je kaartje goed op, zodat je het niet verliest.)",
          options: ["以免", "以后", "因为", "虽然"], answer: 0,
          why: ["Goed: 以免 + wat je wilt voorkomen.", "以后 betekent \"later, daarna\".", "因为 geeft een reden: dan is het kaartje al kwijt.", "虽然 geeft een tegenstelling."] }
      ]
    },
    {
      id: "06", slug: "jinguan", title: "尽管 ... 但是/还是", sub: "Hoewel het zo is, gebeurt het toch",
      canDo: "Je kunt nu zeggen dat iets toch gebeurt, ondanks een feit, met 尽管 ... 但是 of 还是.",
      guess: {
        q: "尽管很累，他还是把工作做完了。Wat betekent dit, denk je?",
        options: ["Hoewel hij moe was, maakte hij het werk toch af.", "Omdat hij moe was, maakte hij het werk niet af.", "Hij was moe omdat hij het werk afmaakte.", "Als hij moe is, maakt hij het werk niet af."], answer: 0,
        why: ["Goed: 尽管 = hoewel. 还是 = toch.", "尽管 geeft geen reden, en het werk is wél af (做完了).", "De oorzaak staat er niet. 尽管 geeft een tegenstelling.", "尽管 is geen voorwaarde. Het gaat over een feit."]
      },
      problem: "Soms gebeurt iets, terwijl je iets anders verwacht. \"Hoewel het regende, ging hij toch fietsen.\" In het Chinees zet je 尽管 (jǐnguǎn) vóór het feit. In het tweede deel komt 但是, 可是 of 还是 (toch).",
      pattern: [
        { l: "尽管", v: "尽管", c: 2, key: true }, { l: "feit", v: "下着雨", c: 3 }, { l: "wie", v: "他", c: 1 },
        { l: "toch", v: "还是", c: 2, key: true }, { l: "wat toch gebeurt", v: "骑车去了", c: 4 }
      ],
      patternCap: "尽管 + feit, (但是 / 可是) + wie + (还是 / 也 / 仍然) + wat toch gebeurt",
      rules: [
        "尽管 lijkt op 虽然. Het deel na 尽管 is een feit.",
        "但是 of 可是 staat vooraan in het tweede deel, vóór het onderwerp.",
        "还是, 也 of 仍然 staat ná het onderwerp, vóór het werkwoord.",
        "但是 en 还是 mogen samen: 尽管很累，但是他还是去了。"
      ],
      pitfall: "但是 staat niet ná het onderwerp. 他但是去了 is fout. Zeg 但是他去了 of 他还是去了.",
      examples: [
        { cn: "尽管下着雨，他还是骑车去上班了。", py: "Jǐnguǎn xiàzhe yǔ, tā háishi qí chē qù shàngbān le.", nl: "Hoewel het regende, fietste hij toch naar zijn werk." },
        { cn: "尽管这个工作很辛苦，但是我很喜欢。", py: "Jǐnguǎn zhège gōngzuò hěn xīnkǔ, dànshì wǒ hěn xǐhuan.", nl: "Hoewel dit werk zwaar is, vind ik het heel leuk." },
        { cn: "尽管他学了三年汉语，可是还听不懂新闻。", py: "Jǐnguǎn tā xuéle sān nián Hànyǔ, kěshì hái tīng bu dǒng xīnwén.", nl: "Hoewel hij drie jaar Chinees heeft geleerd, verstaat hij het nieuws nog niet." },
        { cn: "尽管很忙，她每天还是去健身房。", py: "Jǐnguǎn hěn máng, tā měitiān háishi qù jiànshēnfáng.", nl: "Hoewel ze het druk heeft, gaat ze toch elke dag naar de sportschool." }
      ],
      vocab: [
        ["尽管", "jǐnguǎn", "(hoewel)"], ["仍然", "réngrán", "(nog steeds, toch)"], ["辛苦", "xīnkǔ", "zwaar, vermoeiend"],
        ["新闻", "xīnwén", "nieuws"], ["健身房", "jiànshēnfáng", "sportschool"], ["通过", "tōngguò", "slagen voor"],
        ["恭喜", "gōngxǐ", "gefeliciteerd"], ["准备", "zhǔnbèi", "voorbereiden"], ["充分", "chōngfèn", "grondig, voldoende"],
        ["邻居", "línjū", "buren"]
      ],
      dialogue: [
        ["A", "听说你通过HSK五级了，恭喜！", "Tīngshuō nǐ tōngguò HSK wǔ jí le, gōngxǐ!", "Ik hoorde dat je voor HSK 5 geslaagd bent. Gefeliciteerd!"],
        ["B", "谢谢！尽管考试很难，但是我准备得很充分。", "Xièxie! Jǐnguǎn kǎoshì hěn nán, dànshì wǒ zhǔnbèi de hěn chōngfèn.", "Dank je! Het examen was moeilijk, maar ik was goed voorbereid."],
        ["A", "你工作那么忙，怎么有时间学习？", "Nǐ gōngzuò nàme máng, zěnme yǒu shíjiān xuéxí?", "Je hebt het zo druk met je werk. Hoe vind je tijd om te leren?"],
        ["B", "尽管很忙，我每天晚上还是学一个小时。", "Jǐnguǎn hěn máng, wǒ měitiān wǎnshang háishi xué yí ge xiǎoshí.", "Hoewel ik het druk heb, leer ik toch elke avond een uur."],
        ["A", "真不容易。我也要向你学习。", "Zhēn bù róngyì. Wǒ yě yào xiàng nǐ xuéxí.", "Dat is niet makkelijk. Ik ga jouw voorbeeld volgen."]
      ],
      questions: [
        { type: "mc", q: "\"Hoewel het duur is, koop ik het toch.\"",
          options: ["尽管很贵，我还是要买。", "尽管很贵，所以我要买。", "无论很贵，我还是要买。", "尽管很贵，我但是要买。"], answer: 0,
          why: ["Goed: 尽管 + feit, dan 还是 ná het onderwerp.", "所以 geeft een gevolg. Na 尽管 komt een tegenstelling.", "Na 无论 hoort een vraagwoord. Voor een feit gebruik je 尽管.", "但是 staat vóór het onderwerp, niet erna."] },
        { type: "mc", q: "___他身体不好，但是他每天都来上班。(Hoewel hij niet gezond is, komt hij elke dag naar zijn werk.)",
          options: ["尽管", "因为", "无论", "既然"], answer: 0,
          why: ["Goed: 尽管 ... 但是 = hoewel ... toch.", "因为 geeft een reden en past niet bij 但是.", "Na 无论 hoort een vraagwoord, geen feit.", "既然 geeft een conclusie met 就, geen tegenstelling."] },
        { type: "order", q: "Zet in de goede volgorde: \"Hoewel het koud was, ging hij toch zwemmen.\"",
          tokens: [["尽管", "jǐnguǎn"], ["天气很冷", "tiānqì hěn lěng"], ["他还是", "tā háishi"], ["去游泳了", "qù yóuyǒng le"]] },
        { type: "mc", q: "Wat betekent: 尽管我们是邻居，可是很少说话。",
          options: ["Hoewel we buren zijn, praten we weinig met elkaar.", "Omdat we buren zijn, praten we weinig met elkaar.", "Hoewel we buren zijn, praten we vaak met elkaar.", "Als we buren worden, praten we minder met elkaar."], answer: 0,
          why: ["Goed.", "尽管 geeft een tegenstelling, geen reden.", "很少 betekent \"weinig\", niet \"vaak\".", "尽管 gaat over een feit, niet over een voorwaarde."] },
        { type: "open", q: "Vertaal: \"Hoewel Chinees moeilijk is, leer ik het toch graag.\"", model: ["尽管汉语很难，但是我很喜欢学。", "尽管汉语很难，我还是很喜欢学。", "尽管汉语很难，可是我还是喜欢学汉语。"],
          tip: "Check: 尽管 + het feit, dan 但是/可是 vóór het onderwerp, of 还是 ná het onderwerp." }
      ],
      review: [
        { type: "mc", q: "\"Hoewel hij het wist, zei hij niets.\"",
          options: ["尽管他知道，可是他什么也没说。", "尽管他知道，所以他什么也没说。", "无论他知道，可是他什么也没说。", "尽管他不知道，可是他什么也没说。"], answer: 0,
          why: ["Goed.", "所以 geeft een gevolg. Na 尽管 komt een tegenstelling.", "Na 无论 hoort een vraagwoord. Voor een feit gebruik je 尽管.", "Hier staat dat hij het níet wist. Dat is een andere betekenis."] },
        { type: "mc", q: "尽管医生让他休息，他___去上班了。(Hoewel de dokter zei dat hij moest rusten, ging hij toch werken.)",
          options: ["还是", "所以", "才", "不但"], answer: 0,
          why: ["Goed: 还是 = toch, ná het onderwerp.", "所以 geeft een gevolg, geen tegenstelling.", "才 betekent \"pas\" en past hier niet.", "不但 hoort bij 而且: niet alleen ... maar ook."] }
      ]
    }
  ]
};
