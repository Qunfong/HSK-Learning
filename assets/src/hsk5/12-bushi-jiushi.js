({
  id: "12", slug: "bushi-jiushi", title: "不是……就是 vs 不是……而是", sub: "Of het een of het ander, of: niet dit maar dat",
  canDo: "Je kunt nu zeggen dat het steeds een van twee dingen is (不是……就是), en een fout idee verbeteren (不是……而是).",
  guess: {
    q: "这几天不是刮风就是下雨。Wat betekent dit, denk je?",
    options: ["Deze dagen waait het of regent het: steeds een van beide.", "Deze dagen waait het niet, maar het regent.", "Deze dagen waait het niet en regent het niet.", "Deze dagen waait het en regent het tegelijk."], answer: 0,
    why: ["Goed: 不是 A 就是 B = als het A niet is, dan is het B. Steeds een van de twee.", "Dat zou 不是刮风，而是下雨 zijn: niet A maar B.", "De zin ontkent niet allebei. Hij zegt dat er altijd een van beide is.", "不是 ... 就是 gaat over het een óf het ander, niet over tegelijk."]
  },
  problem: "Twee patronen lijken bijna gelijk, maar betekenen iets heel anders. 不是 A 就是 B: \"het is A of B, altijd een van beide\". 不是 A 而是 B: \"het is niet A, maar B\". Eén woord verschil (就 of 而) verandert de hele zin. Chinese leerlingen en buitenlanders halen ze vaak door elkaar.",
  pattern: [
    { l: "wie", v: "他", c: 1 }, { l: "不是", v: "不是", c: 2 }, { l: "A", v: "在睡觉", c: 3 },
    { l: "就是 / 而是", v: "就是", c: 4, key: true }, { l: "B", v: "在玩游戏", c: 5 }
  ],
  patternCap: "不是 A 就是 B (altijd een van beide; of: het moet A of B zijn) / 不是 A，而是 B (niet A, maar B; spreektaal ook: 不是 A，是 B)",
  rules: [
    "A en B hebben dezelfde vorm: twee werkwoorden, twee plaatsen of twee zinsdelen.",
    "不是 ... 就是: 就是 is één geheel. 就 alleen is niet genoeg.",
    "不是 ... 而是: 而是 is één geheel. 而 alleen is niet genoeg.",
    "Het onderwerp staat vóór 不是: 他不是 ... 就是 ... Bij 而是 kan een nieuw deel na een komma volgen.",
    "而是 klinkt wat formeler. In de spreektaal hoor je ook: 不是 A，是 B."
  ],
  pitfall: "Gebruik 就是 alleen als beide dingen waar kunnen zijn (het een of het ander). Wil je iets verbeteren, \"niet A maar B\", dan heb je 而是 nodig.",
  examples: [
    { cn: "他周末不是在家看书，就是去图书馆。", py: "Tā zhōumò bú shì zài jiā kàn shū, jiù shì qù túshūguǎn.", nl: "In het weekend leest hij thuis of gaat hij naar de bibliotheek. Altijd een van de twee." },
    { cn: "钥匙不是在包里，就是在车上。", py: "Yàoshi bú shì zài bāo li, jiù shì zài chē shang.", nl: "De sleutels liggen in de tas of in de auto. Een van de twee." },
    { cn: "我不是不想去，而是没有时间。", py: "Wǒ bú shì bù xiǎng qù, ér shì méiyǒu shíjiān.", nl: "Het is niet dat ik niet wil gaan, maar ik heb geen tijd." },
    { cn: "他不是日本人，而是韩国人。", py: "Tā bú shì Rìběnrén, ér shì Hánguórén.", nl: "Hij is geen Japanner, maar een Koreaan." }
  ],
  nuance: [
    { h: "Twee gebruiken van 不是 ... 就是",
      p: "Ten eerste: iets gebeurt steeds, en het is telkens A of B. Vaak klinkt dat als een klacht. Ten tweede: een gok. Je weet het niet zeker, maar het moet A of B zijn. In beide gevallen zijn A en B allebei mogelijk.",
      ex: [
        { cn: "他一有空，不是睡觉就是玩手机。", py: "Tā yì yǒu kòng, bú shì shuìjiào jiù shì wán shǒujī.", nl: "Zodra hij tijd heeft, slaapt hij of zit hij op zijn telefoon." },
        { cn: "打电话的不是小王就是小李。", py: "Dǎ diànhuà de bú shì Xiǎo Wáng jiù shì Xiǎo Lǐ.", nl: "Wie er belde, was Xiao Wang of Xiao Li." }
      ] },
    { h: "Minimaal paar: 就是 of 而是",
      p: "Met 就是 zijn A en B allebei mogelijk. Met 而是 is A fout en B juist. Je verbetert dan een idee van de luisteraar. Let goed op: de zinnen zijn bijna gelijk, maar de betekenis is anders.",
      ex: [
        { cn: "他不是在睡觉，就是在玩游戏。", py: "Tā bú shì zài shuìjiào, jiù shì zài wán yóuxì.", nl: "Hij slaapt of hij zit te gamen (een van de twee)." },
        { cn: "他不是在睡觉，而是在玩游戏。", py: "Tā bú shì zài shuìjiào, ér shì zài wán yóuxì.", nl: "Hij slaapt niet, hij zit te gamen." }
      ] },
    { h: "Niet verwarren met 要么 ... 要么",
      p: "要么 A，要么 B gebruik je als iemand moet kiezen: \"of jij gaat, of ik ga\". Het is een voorstel of een eis. 不是 ... 就是 beschrijft hoe het is of hoe het zal zijn. Het geeft geen keuze aan de luisteraar.",
      ex: [
        { cn: "要么你去，要么我去，你选吧。", py: "Yàome nǐ qù, yàome wǒ qù, nǐ xuǎn ba.", nl: "Of jij gaat, of ik ga. Kies jij maar." }
      ] }
  ],
  mistakes: [
    { wrong: "这几天不是刮风，而是下雨。", right: "这几天不是刮风，就是下雨。", why: "Je bedoelt: steeds een van beide. Dat is 就是. Met 而是 zeg je: geen wind, maar regen." },
    { wrong: "他周末不是看书就看电视。", right: "他周末不是看书就是看电视。", why: "Het tweede deel is 就是, niet alleen 就." },
    { wrong: "问题不是钱，而时间。", right: "问题不是钱，而是时间。", why: "Het tweede deel is 而是. 而 alleen kan hier niet." },
    { wrong: "钥匙不是在包里，或者在车上。", right: "钥匙不是在包里，就是在车上。", why: "不是 hoort bij 就是. 或者 past niet in dit patroon." }
  ],
  vocab: [
    ["不是……就是……", "bú shì……jiù shì……", "of ... of (altijd een van beide)"], ["不是……而是……", "bú shì……ér shì……", "niet ... maar ..."],
    ["刮风", "guāfēng", "waaien"], ["加班", "jiābān", "overwerken"], ["客户", "kèhù", "klant"],
    ["辞职", "cízhí", "ontslag nemen"], ["出差", "chūchāi", "op zakenreis gaan"], ["实验室", "shíyànshì", "laboratorium"],
    ["比赛", "bǐsài", "wedstrijd"], ["难怪", "nánguài", "geen wonder"]
  ],
  dialogue: [
    ["A", "小张最近怎么老不在宿舍？", "Xiǎo Zhāng zuìjìn zěnme lǎo bú zài sùshè?", "Waarom is Xiao Zhang de laatste tijd nooit op de kamer?"],
    ["B", "他不是在图书馆，就是在实验室。", "Tā bú shì zài túshūguǎn, jiù shì zài shíyànshì.", "Hij zit in de bibliotheek of in het lab."],
    ["A", "这么用功？他要考研究生吗？", "Zhème yònggōng? Tā yào kǎo yánjiūshēng ma?", "Zo ijverig? Gaat hij examen doen voor een master?"],
    ["B", "不是考研究生，而是在准备一个比赛。", "Bú shì kǎo yánjiūshēng, ér shì zài zhǔnbèi yí ge bǐsài.", "Geen masterexamen, hij bereidt zich voor op een wedstrijd."],
    ["A", "难怪。我还以为他不想跟我们一起住呢。", "Nánguài. Wǒ hái yǐwéi tā bù xiǎng gēn wǒmen yìqǐ zhù ne.", "Geen wonder. Ik dacht al dat hij niet met ons wilde samenwonen."],
    ["B", "他不是不想，而是实在没时间。", "Tā bú shì bù xiǎng, ér shì shízài méi shíjiān.", "Het is niet dat hij niet wil, hij heeft echt geen tijd."]
  ],
  reading: {
    title: "换工作",
    lines: [
      { cn: "去年，我从一家大公司辞职了。", py: "Qùnián, wǒ cóng yì jiā dà gōngsī cízhí le.", nl: "Vorig jaar heb ik ontslag genomen bij een groot bedrijf." },
      { cn: "很多朋友以为我嫌工资低，其实问题不是工资，而是太累。", py: "Hěn duō péngyou yǐwéi wǒ xián gōngzī dī, qíshí wèntí bú shì gōngzī, ér shì tài lèi.", nl: "Veel vrienden dachten dat ik het salaris te laag vond. Maar het probleem was niet het salaris, het was te vermoeiend." },
      { cn: "在那家公司，我每天晚上不是加班，就是陪客户吃饭。", py: "Zài nà jiā gōngsī, wǒ měitiān wǎnshang bú shì jiābān, jiù shì péi kèhù chī fàn.", nl: "Bij dat bedrijf werkte ik elke avond over of at ik met klanten." },
      { cn: "周末也不轻松，不是开会就是出差。", py: "Zhōumò yě bù qīngsōng, bú shì kāihuì jiù shì chūchāi.", nl: "Ook het weekend was niet ontspannen: ik had vergaderingen of ging op zakenreis." },
      { cn: "我几乎没有时间陪家人。", py: "Wǒ jīhū méiyǒu shíjiān péi jiārén.", nl: "Ik had bijna geen tijd voor mijn gezin." },
      { cn: "现在我在一家小公司工作，工资不算高。", py: "Xiànzài wǒ zài yì jiā xiǎo gōngsī gōngzuò, gōngzī bú suàn gāo.", nl: "Nu werk ik bij een klein bedrijf. Het salaris is niet bijzonder hoog." },
      { cn: "可是下班以后，我不是在家做饭，就是带孩子去公园。", py: "Kěshì xiàbān yǐhòu, wǒ bú shì zài jiā zuò fàn, jiù shì dài háizi qù gōngyuán.", nl: "Maar na het werk kook ik thuis of ga ik met de kinderen naar het park." },
      { cn: "我觉得，生活中最重要的不是钱，而是时间。", py: "Wǒ juéde, shēnghuó zhōng zuì zhòngyào de bú shì qián, ér shì shíjiān.", nl: "Ik vind dat het belangrijkste in het leven niet geld is, maar tijd." }
    ],
    questions: [
      { type: "mc", q: "Waarom nam de schrijver ontslag?",
        options: ["Het werk was te vermoeiend.", "Het salaris was te laag.", "Het bedrijf was te klein.", "Hij wilde vaker op zakenreis."], answer: 0,
        why: ["Goed: 问题不是工资，而是太累。", "Dat dachten zijn vrienden, maar 不是工资 zegt dat het niet zo was.", "Het oude bedrijf was juist groot: 一家大公司.", "Zakenreizen waren juist een deel van het probleem."] },
      { type: "mc", q: "Wat doet de schrijver nu na het werk?",
        options: ["Hij kookt thuis of gaat met de kinderen naar het park.", "Hij werkt over of eet met klanten.", "Hij vergadert of gaat op zakenreis.", "Hij zoekt een nieuwe baan."], answer: 0,
        why: ["Goed: 不是在家做饭，就是带孩子去公园。", "Dat deed hij bij het oude bedrijf.", "Dat deed hij vroeger in het weekend.", "Daar staat niets over in de tekst."] },
      { type: "mc", q: "我每天晚上不是加班，就是陪客户吃饭。Wat betekent 不是 ... 就是 hier?",
        options: ["Elke avond was het een van de twee: overwerken of eten met klanten.", "Hij werkte 's avonds niet over, maar at met klanten.", "Hij werkte niet over en at niet met klanten.", "Hij mocht kiezen tussen overwerken en eten met klanten."], answer: 0,
        why: ["Goed: 不是 A 就是 B = steeds A of B.", "Dat zou 而是 zijn: niet A, maar B.", "De zin ontkent niet allebei: een van de twee gebeurde altijd.", "Het gaat niet om een keuze. Dat zou eerder 要么 ... 要么 zijn."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Hij is niet ziek, hij is te moe.\"",
      options: ["他不是病了，而是太累了。", "他不是病了，也是太累了。", "他不是病了，而太累了。", "他而是病了，不是太累了。"], answer: 0,
      why: ["Goed: niet A, maar B = 不是 A，而是 B.", "也是 betekent \"ook\". Dat verbetert niets.", "而 alleen is niet genoeg: het is 而是.", "De volgorde is omgedraaid: eerst 不是, dan 而是."] },
    { type: "mc", q: "这个星期不是下雨就是刮风。Wat betekent dit?",
      options: ["Deze week regent of waait het steeds.", "Deze week regent het niet, maar het waait.", "Deze week regent het niet en waait het niet.", "Deze week moet je kiezen: regen of wind."], answer: 0,
      why: ["Goed: 不是 A 就是 B = steeds een van beide.", "Dat zou 不是下雨，而是刮风 zijn.", "De zin zegt juist dat er altijd een van beide is.", "Het weer kies je niet. Het patroon beschrijft hoe het is."] },
    { type: "fill", q: "他晚上不是看电视，___是玩手机。(Hij kijkt 's avonds altijd tv of zit op zijn telefoon.)", answers: ["就"],
      hint: "Steeds een van beide: welk woord hoort voor 是?", why: "不是 A 就是 B: als het A niet is, dan is het B." },
    { type: "order", q: "Zet in de goede volgorde: \"Het is niet dat ik niet wil gaan, maar ik heb geen tijd.\"",
      tokens: [["我", "wǒ"], ["不是", "bú shì"], ["不想去", "bù xiǎng qù"], ["而是", "ér shì"], ["没有时间", "méiyǒu shíjiān"]],
      alt: ["不是我不想去而是没有时间"] },
    { type: "mc", q: "他不是老师，___是医生。(Hij is geen leraar, maar arts.)",
      options: ["而", "就", "也", "还"], answer: 0,
      why: ["Goed: niet A, maar B = 而是.", "就是 zegt: leraar of arts, een van beide. Dat is een andere betekenis.", "也是 betekent \"ook\". Dat past niet bij \"maar\".", "还是 betekent \"toch\" of \"of\". Het verbetert niets."] },
    { type: "mc", q: "Welke zin betekent: altijd een van beide?",
      options: ["他不是喝咖啡就是喝茶。", "他不是喝咖啡，而是喝茶。", "他不喝咖啡，也不喝茶。", "他喝咖啡，也喝茶。"], answer: 0,
      why: ["Goed: 不是 A 就是 B.", "Met 而是: geen koffie, maar thee. Dat is een verbetering.", "Hier drinkt hij geen van beide.", "Hier drinkt hij allebei, niet een van beide."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hij werkt elke avond over of gaat naar de sportschool.\"",
      tokens: [["他每天晚上", "tā měitiān wǎnshang"], ["不是加班", "bú shì jiābān"], ["就是", "jiù shì"], ["去健身房", "qù jiànshēnfáng"]] },
    { type: "mc", q: "钥匙不是在包里就是在车上。Wat bedoelt de spreker?",
      options: ["Hij weet het niet zeker, maar ze liggen op een van die twee plekken.", "Ze liggen niet in de tas, maar in de auto.", "Ze liggen op geen van die twee plekken.", "Ze liggen zowel in de tas als in de auto."], answer: 0,
      why: ["Goed: 不是 ... 就是 kan een gok zijn: het moet A of B zijn.", "Dat zou 不是在包里，而是在车上 zijn.", "De zin ontkent niet allebei.", "Eén set sleutels ligt op één plek: A of B."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["问题不是钱，而时间。", "问题不是钱，而是时间。", "问题不是钱，是时间。", "这几天不是刮风就是下雨。"], answer: 0,
      why: ["Goed: deze is fout. Het moet 而是 zijn, niet alleen 而.", "Deze klopt: 不是 A，而是 B.", "Deze klopt: in de spreektaal mag 不是 A，是 B.", "Deze klopt: steeds een van beide."] },
    { type: "mc", q: "我今天来，不是为了吃饭，___为了见你。(Ik kom vandaag niet om te eten, maar om jou te zien.)",
      options: ["而是", "还是", "但是", "或者"], answer: 0,
      why: ["Goed: niet A, maar B = 不是 A，而是 B.", "还是 betekent \"of\" in een vraag, of \"toch\". Het past niet na 不是.", "但是 hoort bij 虽然, niet bij 不是 in dit patroon.", "或者 betekent \"of\". Je verbetert hier iets, je geeft geen keuze."] },
    { type: "open", q: "Vertaal: \"Het probleem is niet het geld, maar de tijd.\"", model: ["问题不是钱，而是时间。", "问题不是钱，是时间。"],
      tip: "Check: je verbetert iets, dus 而是 (of 是), niet 就是." },
    { type: "open", q: "Vertaal: \"In het weekend slaapt hij altijd of speelt hij games.\"", model: ["他周末不是睡觉就是玩游戏。", "周末他不是在睡觉，就是在玩游戏。"],
      tip: "Check: steeds een van beide, dus 不是 ... 就是. Hebben A en B dezelfde vorm?" }
  ],
  review: [
    { type: "mc", q: "\"Het is niet dat ik het niet weet, ik wil het niet zeggen.\"",
      options: ["我不是不知道，而是不想说。", "我不是不知道，而不想说。", "我而是不知道，不是不想说。", "我不是不知道，还是不想说。"], answer: 0,
      why: ["Goed: 不是 A，而是 B.", "而 alleen is niet genoeg: 而是.", "De volgorde is omgedraaid: 不是 komt eerst.", "还是 betekent \"toch\" of \"nog steeds\". Dat is geen verbetering."] },
    { type: "mc", q: "她每次打电话，不是要钱___要东西。(Elke keer als ze belt, vraagt ze om geld of om spullen.)",
      options: ["就是", "而是", "也是", "还是"], answer: 0,
      why: ["Goed: steeds een van beide = 不是 A 就是 B.", "而是 zou zeggen: niet om geld, maar om spullen.", "也是 betekent \"ook\" en past niet in dit patroon.", "还是 gebruik je in een keuzevraag, niet na 不是."] },
    { type: "mc", q: "这不是技术问题，而是管理问题。Wat betekent dit?",
      options: ["Het is geen technisch probleem, maar een probleem van het management.", "Het is een technisch probleem of een probleem van het management.", "Het is geen technisch probleem en geen probleem van het management.", "Het is zowel een technisch als een managementprobleem."], answer: 0,
      why: ["Goed: 不是 A，而是 B = niet A, maar B.", "Dat zou 不是 ... 就是 zijn: een van beide.", "而是 ontkent B niet, het bevestigt B.", "Het patroon ontkent A. Het zegt niet \"allebei\"."] }
  ]
})
