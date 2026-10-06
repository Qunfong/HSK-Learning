({
  id: "01", slug: "yuqi", title: "与其 ... 不如", sub: "In plaats van A, kun je beter B",
  canDo: "Je kunt nu twee keuzes afwegen en de betere aanraden, met 与其 ... 不如.",
  guess: {
    q: "与其在家等，不如出去找找。Wat betekent dit, denk je?",
    options: ["In plaats van thuis te wachten, kun je beter gaan zoeken.", "In plaats van te gaan zoeken, kun je beter thuis wachten.", "Thuis wachten is net zo goed als gaan zoeken.", "Als je thuis gewacht hebt, ga je daarna zoeken."], answer: 0,
    why: ["Goed: na 与其 staat de slechtere keuze, na 不如 de betere.", "Je draait de keuzes om: 与其 hoort bij wat je afwijst.", "不如 betekent \"is niet zo goed als\": de keuzes zijn niet gelijk.", "Het gaat niet om een volgorde in de tijd, maar om een keuze."]
  },
  problem: "Je moet kiezen tussen twee dingen. Het ene vind je minder goed, het andere beter. Met 与其 (yǔqí) A，不如 (bùrú) B zeg je: laat A, kies liever B. Het klinkt vrij formeel. Je hoort het in schrijftaal en in serieuze gesprekken.",
  pattern: [
    { l: "afwijzen", v: "与其", c: 2, key: true }, { l: "keuze A", v: "抱怨", c: 3 },
    { l: "beter", v: "不如", c: 4, key: true }, { l: "keuze B", v: "想办法", c: 5 }
  ],
  patternCap: "与其 + A (minder goede keuze)，(还/倒) 不如 + B (betere keuze) · 与其说 A，不如说 B = niet zozeer A, eerder B",
  rules: [
    "Na 与其 staat de keuze die je afwijst. Na 不如 staat de keuze die je aanraadt.",
    "Je kunt 还 of 倒 vóór 不如 zetten: 还不如. Dat maakt het advies sterker.",
    "与其说 A，不如说 B betekent: het is niet zozeer A, het is eerder B.",
    "A en B zijn meestal werkwoordgroepen. Het onderwerp mag vóór 与其 staan of in beide delen verschillen: 与其你去，不如我去。",
    "Het is schrijftaal of formele spreektaal. In gewone spreektaal zeg je vaak alleen 还不如 + B."
  ],
  pitfall: "Draai A en B niet om. 与其 staat bij de slechtere keuze, niet bij de betere. En gebruik na 与其 geen 但是 of 所以: het tweede deel begint altijd met 不如.",
  examples: [
    { cn: "与其在家抱怨，不如出去找工作。", py: "Yǔqí zài jiā bàoyuàn, bùrú chūqu zhǎo gōngzuò.", nl: "In plaats van thuis te klagen, kun je beter werk gaan zoeken." },
    { cn: "与其坐出租车，还不如坐地铁，又快又便宜。", py: "Yǔqí zuò chūzūchē, hái bùrú zuò dìtiě, yòu kuài yòu piányi.", nl: "In plaats van een taxi te nemen, neem je beter de metro. Die is sneller en goedkoper." },
    { cn: "与其说他聪明，不如说他努力。", py: "Yǔqí shuō tā cōngming, bùrú shuō tā nǔlì.", nl: "Hij is niet zozeer slim, hij werkt eerder hard." }
  ],
  nuance: [
    { h: "与其 ... 不如 tegenover 宁可 ... 也不",
      p: "Beide gaan over een keuze, maar de volgorde is omgekeerd. Na 与其 staat wat je afwijst. Na 宁可 staat juist wat je kiest, en na 也不 wat je afwijst. 宁可 gebruik je als beide opties slecht zijn: je accepteert liever het kleinere kwaad. 与其 ... 不如 is vooral een rustig advies.",
      ex: [
        { cn: "与其坐他的车，不如走路。", py: "Yǔqí zuò tā de chē, bùrú zǒulù.", nl: "In plaats van met hem mee te rijden, kun je beter lopen." },
        { cn: "我宁可走路，也不坐他的车。", py: "Wǒ nìngkě zǒulù, yě bú zuò tā de chē.", nl: "Ik loop nog liever dan dat ik met hem meerijd." }
      ] },
    { h: "A 不如 B: vergelijken zonder 与其",
      p: "不如 kan ook alleen staan als vergelijking: A 不如 B = A is niet zo goed als B. Dat is een feit, geen advies. Met 与其 ervoor wordt het een keuze tussen twee handelingen.",
      ex: [
        { cn: "坐出租车不如坐地铁快。", py: "Zuò chūzūchē bùrú zuò dìtiě kuài.", nl: "Met de taxi ben je niet zo snel als met de metro." }
      ] },
    { h: "Register: schrijftaal en spreektaal",
      p: "与其 ... 不如 hoort bij schrijftaal, toespraken en serieuze gesprekken. In de spreektaal laat je 与其 vaak weg. Je noemt de situatie en zegt dan 还不如 of 倒不如 + je voorstel. 呢 aan het eind maakt het nog losser.",
      ex: [
        { cn: "这么贵，还不如自己做呢。", py: "Zhème guì, hái bùrú zìjǐ zuò ne.", nl: "Zo duur, dan kun je het beter zelf maken." }
      ] }
  ],
  mistakes: [
    { wrong: "与其在家等，但是出去找。", right: "与其在家等，不如出去找。", why: "与其 vraagt altijd om 不如 in het tweede deel, niet om 但是." },
    { wrong: "与其抱怨，宁可想办法。", right: "与其抱怨，不如想办法。", why: "与其 hoort bij 不如. 宁可 hoort bij 也不, met de keuze in omgekeerde volgorde." },
    { wrong: "与其说他聪明，不如他努力。", right: "与其说他聪明，不如说他努力。", why: "Begin je met 与其说, dan moet het tweede deel ook 不如说 hebben." },
    { wrong: "与其坐地铁，不如坐出租车，又快又便宜。", right: "与其坐出租车，不如坐地铁，又快又便宜。", why: "De betere keuze en haar voordelen staan na 不如. De metro is snel en goedkoop, dus die komt na 不如." }
  ],
  vocab: [
    ["与其……不如", "yǔqí……bùrú", "in plaats van ... kun je beter"], ["抱怨", "bàoyuàn", "klagen"], ["辞职", "cízhí", "ontslag nemen"],
    ["犹豫", "yóuyù", "aarzelen, twijfelen"], ["干脆", "gāncuì", "gewoon, meteen maar"], ["后悔", "hòuhuǐ", "spijt hebben"],
    ["焦虑", "jiāolǜ", "angstig, gespannen"], ["熬夜", "áoyè", "doorhalen, laat opblijven"], ["取决于", "qǔjué yú", "afhangen van"], ["羡慕", "xiànmù", "benijden, jaloers zijn op"]
  ],
  dialogue: [
    ["A", "这份工作我做得一点儿也不开心，可是又不敢辞职。", "Zhè fèn gōngzuò wǒ zuò de yìdiǎnr yě bù kāixīn, kěshì yòu bù gǎn cízhí.", "Ik ben helemaal niet blij met dit werk, maar ik durf ook geen ontslag te nemen."],
    ["B", "与其每天抱怨，不如好好想想自己想要什么。", "Yǔqí měitiān bàoyuàn, bùrú hǎohǎo xiǎngxiang zìjǐ xiǎng yào shénme.", "In plaats van elke dag te klagen, kun je beter goed nadenken over wat je zelf wilt."],
    ["A", "我已经犹豫了半年了。", "Wǒ yǐjīng yóuyùle bàn nián le.", "Ik twijfel al een half jaar."],
    ["B", "与其这样浪费时间，还不如干脆试试新的方向。", "Yǔqí zhèyàng làngfèi shíjiān, hái bùrú gāncuì shìshi xīn de fāngxiàng.", "In plaats van zo je tijd te verspillen, kun je beter gewoon een nieuwe richting proberen."],
    ["A", "你说得对。我不想以后后悔。", "Nǐ shuō de duì. Wǒ bù xiǎng yǐhòu hòuhuǐ.", "Je hebt gelijk. Ik wil later geen spijt hebben."]
  ],
  reading: {
    title: "考试前的建议",
    lines: [
      { cn: "很多学生在考试前感到焦虑。", py: "Hěn duō xuésheng zài kǎoshì qián gǎndào jiāolǜ.", nl: "Veel studenten voelen zich gespannen voor een examen." },
      { cn: "他们常常整夜复习，第二天却没有精神。", py: "Tāmen chángcháng zhěngyè fùxí, dì-èr tiān què méiyǒu jīngshen.", nl: "Ze leren vaak de hele nacht door, maar hebben de volgende dag geen energie." },
      { cn: "王老师认为，与其熬夜复习，不如保证充足的睡眠。", py: "Wáng lǎoshī rènwéi, yǔqí áoyè fùxí, bùrú bǎozhèng chōngzú de shuìmián.", nl: "Docent Wang vindt dat je beter genoeg kunt slapen dan 's nachts te leren." },
      { cn: "她还指出，与其一遍遍地读课本，不如自己动手做练习题。", py: "Tā hái zhǐchū, yǔqí yí biànbiàn de dú kèběn, bùrú zìjǐ dòngshǒu zuò liànxítí.", nl: "Ze wijst er ook op dat je beter zelf oefenopgaven kunt maken dan het boek steeds opnieuw te lezen." },
      { cn: "在她看来，成绩好坏与其说取决于聪明，不如说取决于方法。", py: "Zài tā kànlái, chéngjì hǎohuài yǔqí shuō qǔjué yú cōngming, bùrú shuō qǔjué yú fāngfǎ.", nl: "Volgens haar hangen goede of slechte cijfers niet zozeer af van slimheid, maar eerder van de aanpak." },
      { cn: "有的学生一开始并不相信。", py: "Yǒude xuésheng yì kāishǐ bìng bù xiāngxìn.", nl: "Sommige studenten geloofden het eerst helemaal niet." },
      { cn: "可是试了一个学期以后，他们的成绩明显提高了。", py: "Kěshì shìle yí ge xuéqī yǐhòu, tāmen de chéngjì míngxiǎn tígāo le.", nl: "Maar na een semester proberen waren hun cijfers duidelijk beter." },
      { cn: "一个学生说：\"与其羡慕别人，不如改变自己的习惯。\"", py: "Yí ge xuésheng shuō: \"Yǔqí xiànmù biérén, bùrú gǎibiàn zìjǐ de xíguàn.\"", nl: "Een student zei: \"In plaats van anderen te benijden, kun je beter je eigen gewoonten veranderen.\"" }
    ],
    questions: [
      { type: "mc", q: "Wat raadt docent Wang aan voor de nacht vóór een examen?",
        options: ["Genoeg slapen.", "De hele nacht leren.", "Het boek nog eens lezen.", "Andere studenten om hulp vragen."], answer: 0,
        why: ["Goed: 不如保证充足的睡眠。", "Dat wijst ze juist af: 与其熬夜复习.", "Ook dat wijst ze af: 与其一遍遍地读课本.", "Daar staat niets over in de tekst."] },
      { type: "mc", q: "Wat gebeurde er na een semester?",
        options: ["De cijfers van de studenten werden duidelijk beter.", "De studenten geloofden de docent nog steeds niet.", "De studenten gingen meer 's nachts leren.", "De docent veranderde haar advies."], answer: 0,
        why: ["Goed: 他们的成绩明显提高了。", "Alleen in het begin geloofden ze het niet: 一开始并不相信.", "Ze volgden juist het advies om niet door te halen.", "Daar staat niets over in de tekst."] },
      { type: "mc", q: "成绩好坏与其说取决于聪明，不如说取决于方法。Wat bedoelt de docent?",
        options: ["Cijfers hangen meer af van de aanpak dan van slimheid.", "Cijfers hangen meer af van slimheid dan van de aanpak.", "Cijfers hangen even veel af van slimheid als van de aanpak.", "Als je slim bent, heb je geen aanpak nodig."], answer: 0,
        why: ["Goed: 与其说 A，不如说 B = niet zozeer A, eerder B.", "Je draait het om: na 不如说 staat wat volgens haar telt.", "与其说 ... 不如说 kiest één kant; het zegt niet \"even veel\".", "与其 is geen \"als\": het maakt geen voorwaarde."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"In plaats van op anderen te wachten, kun je het beter zelf doen.\"",
      options: ["与其等别人，不如自己做。", "与其自己做，不如等别人。", "与其等别人，但是自己做。", "不如等别人，与其自己做。"], answer: 0,
      why: ["Goed: 与其 + afgewezen keuze, 不如 + betere keuze.", "De keuzes zijn omgedraaid: nu raad je aan te wachten.", "Na 与其 komt 不如, niet 但是.", "与其 staat in het eerste deel, 不如 in het tweede."] },
    { type: "mc", q: "与其在网上看评论，___自己去试一试。",
      options: ["不如", "而且", "所以", "或者"], answer: 0,
      why: ["Goed: 与其 vraagt om 不如 in het tweede deel.", "而且 voegt iets toe; het maakt geen keuze.", "所以 geeft een gevolg; 与其 vraagt om een betere keuze.", "或者 geeft twee gelijke opties; 与其 zegt welke beter is."] },
    { type: "order", q: "Zet in de goede volgorde: \"In plaats van een taxi te nemen, neem je beter de metro.\"",
      tokens: [["与其", "yǔqí"], ["坐出租车", "zuò chūzūchē"], ["还", "hái"], ["不如", "bùrú"], ["坐地铁", "zuò dìtiě"]] },
    { type: "mc", q: "Wat betekent: 与其说这是运气，不如说这是他努力的结果。",
      options: ["Dit is niet zozeer geluk, het is eerder het resultaat van zijn inzet.", "Dit is niet zozeer zijn inzet, het is eerder geluk.", "Dit is zowel geluk als het resultaat van zijn inzet.", "Als hij geluk heeft, ziet hij het resultaat van zijn inzet."], answer: 0,
      why: ["Goed: 与其说 A，不如说 B = niet zozeer A, eerder B.", "Je draait het om: na 不如说 staat de betere beschrijving.", "与其 ... 不如 kiest één van de twee, het zegt niet \"allebei\".", "与其 is geen \"als\": het maakt geen voorwaarde."] },
    { type: "mc", q: "\"Ik loop nog liever dan dat ik met hem meerijd.\" (Beide opties zijn niet leuk.) Welke zin past het best?",
      options: ["我宁可走路，也不坐他的车。", "我宁可坐他的车，也不走路。", "我与其走路，也不坐他的车。", "我宁可走路，不如坐他的车。"], answer: 0,
      why: ["Goed: 宁可 + gekozen optie, 也不 + afgewezen optie.", "Je draait het om: na 宁可 staat wat je kiest, dus 走路.", "与其 combineer je niet met 也不; 与其 hoort bij 不如.", "宁可 combineer je niet met 不如; 宁可 hoort bij 也不."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["与其等他，所以我们先走吧。", "与其等他，不如我们先走。", "与其说他不会，不如说他不想。", "与其浪费时间，还不如早点儿回家。"], answer: 0,
      why: ["Goed, deze is fout: na 与其 komt 不如, niet 所以.", "Deze klopt: het onderwerp 我们 mag in het tweede deel staan.", "Deze klopt: 与其说 ... 不如说.", "Deze klopt: 还 vóór 不如 maakt het advies sterker."] },
    { type: "mc", q: "Een vriendin zegt in een gewoon gesprek: 这么贵，还不如自己做呢。Wat bedoelt ze?",
      options: ["Zo duur, dan kun je het beter zelf maken.", "Zo duur, en zelf maken is nog duurder.", "Zo duur, toch maakt ze het zelf.", "Zo duur, omdat je het zelf maakt."], answer: 0,
      why: ["Goed: in spreektaal laat je 与其 weg; 还不如 + B is het advies.", "还不如 zegt dat B beter is, niet slechter.", "不如 is geen \"toch\": het geeft een betere keuze.", "不如 geeft geen reden."] },
    { type: "fill", q: "与其坐着等，___主动去问。(In plaats van te zitten wachten, kun je beter zelf gaan vragen.)", answers: ["不如", "还不如", "倒不如"],
      hint: "Welk woord hoort bij 与其?", why: "与其 + A，(还/倒) 不如 + B. Na 不如 staat de betere keuze: zelf vragen." },
    { type: "order", q: "Zet in de goede volgorde: \"Het is niet zozeer dat hij het niet kan, het is eerder dat hij het niet wil.\"",
      tokens: [["与其说", "yǔqí shuō"], ["他不会", "tā bú huì"], ["不如说", "bùrú shuō"], ["他不想", "tā bù xiǎng"]] },
    { type: "open", q: "Een vriend klaagt steeds dat Chinees moeilijk is. Geef advies met 与其 ... 不如.",
      model: ["与其抱怨汉语难，不如每天多练习。", "与其天天抱怨，还不如找个老师。", "与其说汉语难，不如说你练习得太少。"],
      tip: "Check: staat na 与其 wat hij nu doet (de slechtere keuze), en na 不如 jouw advies?" },
    { type: "open", q: "Vertaal: \"In plaats van een nieuwe telefoon te kopen, kun je de oude beter laten repareren.\"",
      model: ["与其买新手机，不如把旧的拿去修一修。", "与其买一部新手机，还不如把旧手机修好。"],
      tip: "Check: staat 买新手机 na 与其 en repareren na 不如? Niet omdraaien, en geen 但是 of 所以." }
  ],
  review: [
    { type: "mc", q: "\"In plaats van te aarzelen, kun je beter meteen beslissen.\"",
      options: ["与其犹豫，不如马上决定。", "与其马上决定，不如犹豫。", "与其犹豫，所以马上决定。", "不如犹豫，与其马上决定。"], answer: 0,
      why: ["Goed.", "De keuzes zijn omgedraaid: nu raad je aarzelen aan.", "Na 与其 komt 不如, niet 所以.", "与其 komt eerst, 不如 daarna."] },
    { type: "mc", q: "与其花钱买新的，___把旧的修一修。(In plaats van geld uit te geven aan iets nieuws, kun je beter het oude repareren.)",
      options: ["不如", "而且", "因此", "虽然"], answer: 0,
      why: ["Goed: 与其 ... 不如.", "而且 voegt iets toe; het maakt geen keuze.", "因此 geeft een gevolg, geen betere keuze.", "虽然 staat in het eerste deel van een tegenstelling."] },
    { type: "mc", q: "\"Het is niet zozeer een probleem van geld, het is eerder een probleem van tijd.\"",
      options: ["与其说是钱的问题，不如说是时间的问题。", "与其说是时间的问题，不如说是钱的问题。", "与其说是钱的问题，所以说是时间的问题。", "与其说是钱的问题，不如是时间的问题。"], answer: 0,
      why: ["Goed: 与其说 A，不如说 B.", "Je draait het om: tijd is het echte probleem, dus dat staat na 不如说.", "Na 与其说 komt 不如说, niet 所以说.", "Begin je met 与其说, dan hoort er ook 不如说 te staan."] }
  ]
})
