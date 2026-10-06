({
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
  patternCap: "Wie + 宁可 + keuze (vaak iets zwaars) + ，也不 + wat je weigert; 宁可 A，也要 B = liever A, als B maar lukt",
  rules: [
    "Na 宁可 staat wat je kiest. Dat is vaak ook niet leuk.",
    "Na 也不 staat wat je zeker niet wilt.",
    "宁可 staat meestal direct na het onderwerp: 我宁可 ...",
    "宁可 A，也要 B: je accepteert A, zodat B zeker gebeurt.",
    "宁愿 (nìngyuàn) betekent hetzelfde en hoor je veel in de spreektaal."
  ],
  pitfall: "Draai de delen niet om. Wat je kiest staat na 宁可. Wat je weigert staat na 也不.",
  examples: [
    { cn: "我宁可多花点儿钱，也不买质量差的东西。", py: "Wǒ nìngkě duō huā diǎnr qián, yě bù mǎi zhìliàng chà de dōngxi.", nl: "Ik geef liever wat meer uit dan dat ik slechte spullen koop." },
    { cn: "他宁可饿着，也不吃快餐。", py: "Tā nìngkě èzhe, yě bù chī kuàicān.", nl: "Hij blijft liever met honger zitten dan dat hij fastfood eet." },
    { cn: "我宁可早点儿起床，也不想迟到。", py: "Wǒ nìngkě zǎo diǎnr qǐchuáng, yě bù xiǎng chídào.", nl: "Ik sta liever vroeg op dan dat ik te laat kom." },
    { cn: "她宁可少睡一会儿，也要把报告写完。", py: "Tā nìngkě shǎo shuì yíhuìr, yě yào bǎ bàogào xiěwán.", nl: "Ze slaapt liever wat minder, als het rapport maar af komt." }
  ],
  nuance: [
    { h: "宁可 ... 也不 of 与其 ... 不如?",
      p: "Beide betekenen \"liever\", maar de volgorde is omgekeerd. Bij 宁可 noem je eerst wat je kiest. Bij 与其 (yǔqí) noem je eerst wat je afwijst, en na 不如 wat beter is. 宁可 klinkt als een vast besluit, vaak met een offer. 与其 ... 不如 klinkt als een rustige afweging: B is gewoon slimmer.",
      ex: [
        { cn: "我宁可走路，也不坐他的车。", py: "Wǒ nìngkě zǒulù, yě bú zuò tā de chē.", nl: "Ik loop liever dan dat ik met zijn auto meerijd." },
        { cn: "与其坐他的车，不如走路。", py: "Yǔqí zuò tā de chē, bùrú zǒulù.", nl: "In plaats van met zijn auto mee te rijden, kun je beter lopen." }
      ] },
    { h: "宁可 ... 也要: een offer voor een doel",
      p: "Met 也不 weiger je iets. Met 也要 zeg je wat je per se wilt bereiken. Het deel na 宁可 is dan de prijs die je betaalt. Vergelijk: liever honger dan fastfood (weigeren), en liever minder slaap, als het werk maar af is (doel).",
      ex: [
        { cn: "他宁可借钱，也要让孩子上好学校。", py: "Tā nìngkě jiè qián, yě yào ràng háizi shàng hǎo xuéxiào.", nl: "Hij leent nog liever geld, als zijn kind maar naar een goede school gaat." }
      ] },
    { h: "Register: 宁可, 宁愿 en 宁肯",
      p: "宁可 en 宁愿 kun je in gesprekken en teksten gebruiken. 宁愿 legt iets meer nadruk op wat je zelf wilt. 宁肯 (nìngkěn) is formeler en zie je vooral in geschreven taal. De structuur met 也不 of 也要 blijft gelijk.",
      ex: [
        { cn: "我宁愿一个人去，也不跟他一起去。", py: "Wǒ nìngyuàn yí ge rén qù, yě bù gēn tā yìqǐ qù.", nl: "Ik ga liever alleen dan samen met hem." }
      ] }
  ],
  mistakes: [
    { wrong: "我宁可走路，也坐他的车。", right: "我宁可走路，也不坐他的车。", why: "Zonder 不 zeg je dat je het andere óók doet. Wat je weigert staat na 也不." },
    { wrong: "我宁可走路，就不坐他的车。", right: "我宁可走路，也不坐他的车。", why: "Bij 宁可 hoort 也, niet 就." },
    { wrong: "我宁可走路，不如坐他的车。", right: "我宁可走路，也不坐他的车。", why: "不如 hoort bij 与其, niet bij 宁可. Meng de twee patronen niet." },
    { wrong: "宁可我走路，也不坐他的车。", right: "我宁可走路，也不坐他的车。", why: "宁可 staat na het onderwerp, vlak vóór je keuze." }
  ],
  vocab: [
    ["宁可", "nìngkě", "(liever ... dan)"], ["与其", "yǔqí", "(in plaats van, liever niet ...)"], ["质量", "zhìliàng", "kwaliteit"],
    ["饿", "è", "honger hebben"], ["快餐", "kuàicān", "fastfood"], ["打车", "dǎchē", "een taxi nemen"],
    ["浪费", "làngfèi", "verspillen"], ["材料", "cáiliào", "ingrediënten, materiaal"], ["劝", "quàn", "overhalen, aanraden"],
    ["辛苦", "xīnkǔ", "zwaar, vermoeiend"]
  ],
  dialogue: [
    ["A", "外面雨这么大，我们打车回去吧？", "Wàimiàn yǔ zhème dà, wǒmen dǎchē huíqu ba?", "Het regent zo hard. Zullen we een taxi naar huis nemen?"],
    ["B", "现在打车要等一个小时。我宁可坐地铁，也不在这儿等。", "Xiànzài dǎchē yào děng yí ge xiǎoshí. Wǒ nìngkě zuò dìtiě, yě bú zài zhèr děng.", "Op een taxi wacht je nu een uur. Ik neem liever de metro dan dat ik hier wacht."],
    ["A", "可是地铁站很远啊。", "Kěshì dìtiězhàn hěn yuǎn a.", "Maar het metrostation is ver weg."],
    ["B", "没关系，我宁可走一会儿，也不想浪费时间。", "Méi guānxi, wǒ nìngkě zǒu yíhuìr, yě bù xiǎng làngfèi shíjiān.", "Geeft niet. Ik loop liever een stukje dan dat ik tijd verspil."],
    ["A", "好吧，那我们走吧。", "Hǎo ba, nà wǒmen zǒu ba.", "Goed, laten we dan gaan."]
  ],
  reading: {
    title: "老王的面馆",
    lines: [
      { cn: "老王在这条街上开面馆已经二十年了。", py: "Lǎo Wáng zài zhè tiáo jiē shang kāi miànguǎn yǐjīng èrshí nián le.", nl: "Lao Wang heeft al twintig jaar een noedelrestaurant in deze straat." },
      { cn: "他的面很有名，因为他每天都用新鲜的材料。", py: "Tā de miàn hěn yǒumíng, yīnwèi tā měitiān dōu yòng xīnxiān de cáiliào.", nl: "Zijn noedels zijn bekend, want hij gebruikt elke dag verse ingrediënten." },
      { cn: "这几年东西越来越贵，有人劝他用便宜一点儿的肉。", py: "Zhè jǐ nián dōngxi yuè lái yuè guì, yǒu rén quàn tā yòng piányi yìdiǎnr de ròu.", nl: "De laatste jaren wordt alles duurder. Iemand raadde hem aan goedkoper vlees te gebruiken." },
      { cn: "老王摇摇头说：\"我宁可少赚一点儿，也不用质量差的材料。\"", py: "Lǎo Wáng yáoyao tóu shuō: \"Wǒ nìngkě shǎo zhuàn yìdiǎnr, yě bú yòng zhìliàng chà de cáiliào.\"", nl: "Lao Wang schudde zijn hoofd: \"Ik verdien liever wat minder dan dat ik slechte ingrediënten gebruik.\"" },
      { cn: "他的儿子在城里工作，常常担心爸爸太累。", py: "Tā de érzi zài chéng li gōngzuò, chángcháng dānxīn bàba tài lèi.", nl: "Zijn zoon werkt in de stad en is vaak bang dat zijn vader te moe is." },
      { cn: "儿子说：\"爸，您年纪大了，与其这么辛苦，不如把面馆关了吧。\"", py: "Érzi shuō: \"Bà, nín niánjì dà le, yǔqí zhème xīnkǔ, bùrú bǎ miànguǎn guān le ba.\"", nl: "De zoon zei: \"Pa, u wordt ouder. In plaats van zo hard te werken, kunt u het restaurant beter sluiten.\"" },
      { cn: "老王说：\"我宁可累一点儿，也不想每天在家没事做。\"", py: "Lǎo Wáng shuō: \"Wǒ nìngkě lèi yìdiǎnr, yě bù xiǎng měitiān zài jiā méi shì zuò.\"", nl: "Lao Wang zei: \"Ik ben liever wat moe dan dat ik elke dag thuis niets te doen heb.\"" },
      { cn: "后来儿子辞职回来帮忙，他说：\"我宁可工资低一点儿，也要让这家面馆开下去。\"", py: "Hòulái érzi cízhí huílai bāngmáng, tā shuō: \"Wǒ nìngkě gōngzī dī yìdiǎnr, yě yào ràng zhè jiā miànguǎn kāi xiaqu.\"", nl: "Later nam de zoon ontslag en kwam hij helpen. Hij zei: \"Ik verdien liever minder, als dit restaurant maar open blijft.\"" },
      { cn: "现在，每天中午面馆门口都排着长队。", py: "Xiànzài, měitiān zhōngwǔ miànguǎn ménkǒu dōu páizhe chángduì.", nl: "Nu staat er elke middag een lange rij voor de deur." }
    ],
    questions: [
      { type: "mc", q: "Wat stelde de zoon eerst voor?",
        options: ["Het restaurant sluiten.", "Goedkoper vlees gebruiken.", "Samen in de stad gaan werken.", "Een tweede restaurant openen."], answer: 0,
        why: ["Goed: 不如把面馆关了吧。", "Dat stelde iemand anders voor: 有人劝他用便宜一点儿的肉.", "Daar staat niets over in de tekst.", "Daar staat niets over in de tekst."] },
      { type: "mc", q: "Wat deed de zoon later?",
        options: ["Hij nam ontslag en hielp zijn vader.", "Hij sloot het restaurant.", "Hij vond een baan met een hoger salaris.", "Hij overtuigde zijn vader om te stoppen."], answer: 0,
        why: ["Goed: 后来儿子辞职回来帮忙。", "Het restaurant blijft juist open: 也要让这家面馆开下去.", "Hij accepteert juist een lager salaris: 工资低一点儿.", "De vader wil niet stoppen, en de zoon gaat juist helpen."] },
      { type: "mc", q: "我宁可少赚一点儿，也不用质量差的材料。Wat bedoelt Lao Wang?",
        options: ["Minder verdienen accepteert hij; slechte ingrediënten niet.", "Slechte ingrediënten accepteert hij; minder verdienen niet.", "Hij verdient minder omdat zijn ingrediënten slecht zijn.", "Hij gebruikt slechte ingrediënten, maar verdient toch weinig."], answer: 0,
        why: ["Goed: na 宁可 staat wat hij kiest, na 也不 wat hij weigert.", "De delen zijn omgedraaid.", "宁可 geeft een keuze, geen oorzaak.", "也不用 zegt dat hij ze níet gebruikt."] }
    ]
  },
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
    { type: "mc", q: "\"Je kunt beter lopen dan een taxi nemen.\" Welke zin klopt?",
      options: ["与其打车，不如走路。", "与其走路，不如打车。", "与其打车，也不走路。", "宁可打车，也不走路。"], answer: 0,
      why: ["Goed: na 与其 staat wat je afwijst, na 不如 wat beter is.", "De delen zijn omgedraaid: nu is de taxi beter.", "Bij 与其 hoort 不如, niet 也不.", "Na 宁可 staat wat je kiest. Hier kies je dus de taxi."] },
    { type: "mc", q: "她宁可不睡觉，___要把这本书看完。(Ze slaapt nog liever niet, als ze dit boek maar uitleest.)",
      options: ["也", "就", "却", "所以"], answer: 0,
      why: ["Goed: 宁可 A，也要 B: A is de prijs, B het doel.", "Bij 宁可 hoort 也, niet 就.", "却 geeft een tegenstelling, geen doel.", "所以 geeft een gevolg; 宁可 maakt een keuze."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["我宁可走路，就不坐他的车。", "我宁可走路，也不坐他的车。", "我宁愿走路，也不坐他的车。", "与其坐他的车，不如走路。"], answer: 0,
      why: ["Goed gezien: bij 宁可 hoort 也, niet 就.", "Deze klopt: 宁可 ... 也不.", "Deze klopt: 宁愿 werkt net als 宁可.", "Deze klopt: eerst wat je afwijst, dan 不如."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik sta liever vroeg op, als ik de eerste trein maar haal.\"",
      tokens: [["我", "wǒ"], ["宁可", "nìngkě"], ["早点儿起床", "zǎo diǎnr qǐchuáng"], ["也要", "yě yào"], ["赶上第一班车", "gǎnshang dì yī bān chē"]] },
    { type: "fill", q: "我___饿着，也不吃这种东西。(Ik heb nog liever honger dan dat ik zoiets eet.)", answers: ["宁可", "宁愿", "宁肯"],
      hint: "Welk woord past bij 也不 en betekent \"liever\"?", why: "宁可 (of 宁愿) + wat je kiest, 也不 + wat je weigert." },
    { type: "open", q: "Zeg wat jij liever doet dan iets anders, met 宁可 ... 也不.", model: ["我宁可走路，也不坐公共汽车。", "我宁可在家做饭，也不吃外卖。", "我宁可早点儿出发，也不想迟到。"],
      tip: "Check: wat je kiest staat na 宁可, wat je weigert staat na 也不." },
    { type: "open", q: "Vertaal: \"Ik blijf liever thuis dan dat ik in de regen ga wandelen.\"", model: ["我宁可待在家里，也不在雨里散步。", "我宁可在家待着，也不想冒雨去散步。"],
      tip: "Check: 待在家里 staat na 宁可, het wandelen staat na 也不." }
  ],
  review: [
    { type: "mc", q: "\"Ik wacht liever nog een jaar dan dat ik een huis koop dat ik niet mooi vind.\"",
      options: ["我宁可再等一年，也不买不喜欢的房子。", "我宁可买不喜欢的房子，也不再等一年。", "我宁可再等一年，也买不喜欢的房子。", "我再等一年宁可，也不买不喜欢的房子。"], answer: 0,
      why: ["Goed.", "De delen zijn omgedraaid: nu koop je liever het huis.", "Zonder 不 koop je het huis óók.", "宁可 staat vóór de keuze, niet erachter."] },
    { type: "mc", q: "他宁可自己多做一点，___不让同事加班。(Hij werkt liever zelf wat meer dan dat hij collega's laat overwerken.)",
      options: ["也", "就", "所以", "却"], answer: 0,
      why: ["Goed: 宁可 ... 也不.", "Bij 宁可 hoort 也, niet 就.", "所以 geeft een gevolg, geen voorkeur.", "却 geeft een tegenstelling, geen voorkeur."] },
    { type: "mc", q: "与其在家看电视，___出去走走。(In plaats van thuis tv te kijken, kun je beter even naar buiten gaan.)",
      options: ["不如", "也不", "也要", "宁可"], answer: 0,
      why: ["Goed: 与其 A，不如 B.", "也不 hoort bij 宁可, niet bij 与其.", "也要 hoort bij 宁可 en past niet na 与其.", "宁可 staat aan het begin van een keuze, niet in het tweede deel."] }
  ]
})
