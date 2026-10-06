({
  id: "13", slug: "hechang", title: "何尝", sub: "Retorisch: wanneer zou ik ooit ...?",
  canDo: "Je kunt nu met 何尝 een retorische vraag stellen die iets sterk bevestigt of ontkent, je houdt het uit elkaar van 难道 en 未尝, en je weet dat je in gesprek 怎么会 of 什么时候 zegt.",
  guess: {
    q: "Iemand verwijt je dat je niet mee wilt. Je antwoordt: 我何尝不想去？Wat bedoel je, denk je?",
    options: ["Natuurlijk wil ik wel gaan!", "Ik wil echt niet gaan.", "Ik wil niet per se gaan.", "Wanneer wil ik gaan?"], answer: 0,
    why: ["Goed: 何尝不 is een retorische vraag: \"wanneer zou ik niet willen?\" = ik wil juist wel.", "Er staat 不, maar de retorische vraag draait de betekenis om.", "\"Niet per se\" is 未必. 何尝 is veel sterker.", "Het is geen echte vraag naar een tijdstip; je verwacht geen antwoord."]
  },
  problem: "Als iemand je verkeerd begrijpt, wil je je soms fel verdedigen: \"Natuurlijk wil ik dat!\" of \"Wanneer heb ik dat ooit gezegd?\". In formele en literaire tekst gebruik je daarvoor 何尝 (hécháng): letterlijk \"wanneer ooit\". 何尝不 = juist wel. 何尝 + werkwoord + 过 = nooit. In spreektaal zeg je 我怎么会不想……? of 我什么时候说过……?",
  pattern: [
    { l: "onderwerp", v: "我", c: 1 }, { l: "wanneer ooit", v: "何尝", c: 2, key: true },
    { l: "ontkenning", v: "不", c: 3 }, { l: "werkwoord", v: "想去", c: 4 }, { l: "vraag", v: "？", c: 5 }
  ],
  patternCap: "Onderwerp + 何尝 + 不 + werkwoord (呢)？ = juist wel · Onderwerp + 何尝 + werkwoord + 过？ = nooit · spreektaal: 怎么会不……, 什么时候……过",
  rules: [
    "何尝 staat na het onderwerp en vóór (不 +) het werkwoord: 我何尝不想……",
    "何尝不 + werkwoord = sterke bevestiging: \"natuurlijk wel\".",
    "何尝 + werkwoord (vaak + 过) = sterke ontkenning: \"nooit\". 我何尝说过？",
    "Geen 吗 aan het eind. De zin eindigt op ？, ！ of 。, soms met 呢.",
    "De toon is verdedigend of emotioneel. 何尝 hoort bij schrijftaal en literaire tekst."
  ],
  pitfall: "何尝不 klinkt negatief, maar is juist sterk positief. 我何尝不想去？ = ik wil heel graag. Na zo'n zin volgt vaak een 可是 of 只是 met de reden waarom het toch niet lukt.",
  examples: [
    { cn: "我何尝不想回家过年？可是工作实在走不开。", py: "Wǒ hécháng bù xiǎng huí jiā guònián? Kěshì gōngzuò shízài zǒu bu kāi.", nl: "Natuurlijk wil ik voor Nieuwjaar naar huis. Maar ik kan echt niet weg van mijn werk." },
    { cn: "我何尝说过反对你的话？", py: "Wǒ hécháng shuōguo fǎnduì nǐ de huà?", nl: "Wanneer heb ik ooit gezegd dat ik tegen je ben?" },
    { cn: "父母何尝不希望孩子幸福呢？", py: "Fùmǔ hécháng bù xīwàng háizi xìngfú ne?", nl: "Welke ouders willen nu niet dat hun kind gelukkig is?" },
    { cn: "离开这家公司，对他来说何尝不是一种解脱？", py: "Líkāi zhè jiā gōngsī, duì tā lái shuō hécháng bú shì yì zhǒng jiětuō?", nl: "Is het verlaten van dit bedrijf voor hem eigenlijk niet juist een bevrijding?" }
  ],
  nuance: [
    { h: "何尝 of 难道?",
      p: "Beide maken een retorische vraag. 难道 daagt vaak de ander uit: \"je weet toch wel ...?\". Het kan aan het begin staan en neemt vaak 吗. 难道 hoort ook in spreektaal. 何尝 verdedigt meestal je eigen standpunt, staat na het onderwerp en neemt geen 吗. 何尝 is boekachtig.",
      ex: [
        { cn: "你难道不想去吗？", py: "Nǐ nándào bù xiǎng qù ma?", nl: "Je wilt toch zeker wel gaan?" },
        { cn: "我何尝不想去？", py: "Wǒ hécháng bù xiǎng qù?", nl: "Natuurlijk wil ik wel gaan!" }
      ] },
    { h: "何尝不 of 未尝不?",
      p: "Allebei betekenen \"toch wel\". 未尝不 is rustig en voorzichtig: een nuchtere beoordeling in een rapport. 何尝不 is een retorische vraag met gevoel: je spreekt iemand tegen of je benadrukt iets. Voor een neutraal advies kies je 未尝不.",
      ex: [
        { cn: "推迟一年未尝不是一个办法。", py: "Tuīchí yì nián wèicháng bú shì yí ge bànfǎ.", nl: "Een jaar uitstellen is best een optie. (rustig)" },
        { cn: "推迟一年何尝不是一个办法？", py: "Tuīchí yì nián hécháng bú shì yí ge bànfǎ?", nl: "Waarom zou een jaar uitstellen géén optie zijn? (nadrukkelijk)" }
      ] },
    { h: "Spreektaal",
      p: "In een gewoon gesprek klinkt 何尝 plechtig. Voor \"natuurlijk wel\" zeg je 我怎么会不想……呢? of 谁不想……? Voor \"nooit\" zeg je 我什么时候说过……? of 我哪儿说过……?",
      ex: [
        { cn: "我怎么会不想去呢？", py: "Wǒ zěnme huì bù xiǎng qù ne?", nl: "Hoe zou ik nou niet willen gaan?" },
        { cn: "我什么时候说过这句话？", py: "Wǒ shénme shíhou shuōguo zhè jù huà?", nl: "Wanneer heb ik dat ooit gezegd?" }
      ] }
  ],
  mistakes: [
    { wrong: "我何尝不想去吗？", right: "我何尝不想去？", why: "何尝 maakt zelf al een retorische vraag. Daar komt geen 吗 bij." },
    { wrong: "何尝我不想去？", right: "我何尝不想去？", why: "何尝 staat na het onderwerp, vóór 不 + werkwoord." },
    { wrong: "我何尝不想去，所以我不去了。", right: "我何尝不想去，只是没有时间。", why: "何尝不想 = ik wil juist wel. Daarna volgt een reden waarom het niet lukt, geen conclusie dat je niet wilt." },
    { wrong: "我何尝说这句话了？", right: "我何尝说过这句话？", why: "何尝 + werkwoord = nooit (in het verleden). Gebruik 过, niet 了." }
  ],
  vocab: [
    ["何尝", "hécháng", "(retorisch) wanneer ooit; juist wel / nooit"], ["难道", "nándào", "(retorisch) toch zeker niet ...?"], ["走不开", "zǒu bu kāi", "niet weg kunnen"],
    ["解脱", "jiětuō", "bevrijding, verlossing"], ["坚守", "jiānshǒu", "standhouden, op zijn post blijven"], ["岗位", "gǎngwèi", "post, functie"],
    ["团聚", "tuánjù", "samenkomen (met familie)"], ["列车员", "lièchēyuán", "treinconducteur"], ["抱怨", "bàoyuàn", "klagen"], ["连续", "liánxù", "achter elkaar, op rij"]
  ],
  dialogue: [
    ["A", "你最近总是加班，是不是不想陪我们？", "Nǐ zuìjìn zǒngshì jiābān, shì bu shì bù xiǎng péi wǒmen?", "Je werkt de laatste tijd steeds over. Wil je soms geen tijd met ons doorbrengen?"],
    ["B", "我何尝不想多陪陪你们？项目下周就要交了。", "Wǒ hécháng bù xiǎng duō péipei nǐmen? Xiàngmù xià zhōu jiù yào jiāo le.", "Natuurlijk wil ik meer bij jullie zijn! Het project moet volgende week af."],
    ["A", "可你上个月说项目已经快结束了。", "Kě nǐ shàng ge yuè shuō xiàngmù yǐjīng kuài jiéshù le.", "Maar vorige maand zei je dat het project bijna klaar was."],
    ["B", "我何尝这么说过？我只说会尽量早点回家。", "Wǒ hécháng zhème shuōguo? Wǒ zhǐ shuō huì jǐnliàng zǎo diǎn huí jiā.", "Wanneer heb ik dat ooit gezegd? Ik zei alleen dat ik zo vroeg mogelijk thuis zou komen."],
    ["A", "好吧。难道这个周末也要加班吗？", "Hǎo ba. Nándào zhège zhōumò yě yào jiābān ma?", "Oké. Je moet toch niet ook dit weekend overwerken?"],
    ["B", "不用。这个周末我一定陪你们。", "Bú yòng. Zhège zhōumò wǒ yídìng péi nǐmen.", "Nee. Dit weekend ben ik zeker bij jullie."]
  ],
  reading: {
    title: "春节里的坚守",
    lines: [
      { cn: "每到春节，总有一些人不能回家团聚。", py: "Měi dào Chūnjié, zǒng yǒu yìxiē rén bù néng huí jiā tuánjù.", nl: "Elk Chinees Nieuwjaar zijn er mensen die niet naar huis kunnen om bij hun familie te zijn." },
      { cn: "医生、警察和铁路工人仍然坚守在自己的岗位上。", py: "Yīshēng, jǐngchá hé tiělù gōngrén réngrán jiānshǒu zài zìjǐ de gǎngwèi shang.", nl: "Artsen, agenten en spoorwegpersoneel blijven op hun post." },
      { cn: "有人问一位列车员：\"你不想家吗？\"", py: "Yǒu rén wèn yí wèi lièchēyuán: \"Nǐ bù xiǎng jiā ma?\"", nl: "Iemand vroeg een conductrice: \"Heb je geen heimwee?\"" },
      { cn: "她笑了笑说：\"我何尝不想家？可是总得有人在车上工作。\"", py: "Tā xiàole xiào shuō: \"Wǒ hécháng bù xiǎng jiā? Kěshì zǒngděi yǒu rén zài chē shang gōngzuò.\"", nl: "Ze glimlachte en zei: \"Natuurlijk mis ik thuis! Maar er moet toch iemand in de trein werken.\"" },
      { cn: "她已经连续五年没有在家过年了。", py: "Tā yǐjīng liánxù wǔ nián méiyǒu zài jiā guònián le.", nl: "Ze heeft al vijf jaar op rij Nieuwjaar niet thuis gevierd." },
      { cn: "她的女儿曾经抱怨妈妈不关心家里。", py: "Tā de nǚ'ér céngjīng bàoyuàn māma bù guānxīn jiā li.", nl: "Haar dochter klaagde ooit dat haar moeder niet om het gezin gaf." },
      { cn: "她回答：\"我何尝不关心你？我每天都给你打电话啊。\"", py: "Tā huídá: \"Wǒ hécháng bù guānxīn nǐ? Wǒ měi tiān dōu gěi nǐ dǎ diànhuà a.\"", nl: "Ze antwoordde: \"Natuurlijk geef ik om je! Ik bel je toch elke dag.\"" },
      { cn: "如今，女儿也明白了：妈妈的坚守，何尝不是另一种爱？", py: "Rújīn, nǚ'ér yě míngbai le: māma de jiānshǒu, hécháng bú shì lìng yì zhǒng ài?", nl: "Nu begrijpt de dochter het ook: is de toewijding van haar moeder niet juist een andere vorm van liefde?" },
      { cn: "正是因为有他们，千千万万的人才能平安回家。", py: "Zhèng shì yīnwèi yǒu tāmen, qiānqiān-wànwàn de rén cái néng píng'ān huí jiā.", nl: "Juist dankzij hen kunnen miljoenen mensen veilig naar huis." }
    ],
    questions: [
      { type: "mc", q: "Waarom gaat de conductrice met Nieuwjaar niet naar huis?",
        options: ["Er moet iemand in de trein werken.", "Ze heeft geen heimwee.", "Ze heeft ruzie met haar dochter.", "Ze woont in de trein."], answer: 0,
        why: ["Goed: 总得有人在车上工作.", "Ze heeft juist wel heimwee: 我何尝不想家.", "Haar dochter klaagde wel, maar er staat geen ruzie als reden.", "Daar staat niets over in de tekst."] },
      { type: "mc", q: "Hoe houdt ze contact met haar dochter?",
        options: ["Ze belt haar elke dag.", "Ze schrijft haar elke week.", "Ze ziet haar elk weekend.", "Ze neemt haar mee in de trein."], answer: 0,
        why: ["Goed: 我每天都给你打电话.", "Er staat 打电话 (bellen), geen brieven.", "Over weekenden zegt de tekst niets.", "Dat staat niet in de tekst."] },
      { type: "mc", q: "我何尝不想家？Wat bedoelt de conductrice?",
        options: ["Natuurlijk mis ik thuis.", "Ik mis thuis niet.", "Ik mis thuis niet per se.", "Ik heb thuis nooit gemist."], answer: 0,
        why: ["Goed: 何尝不 = retorisch \"natuurlijk wel\".", "De retorische vraag draait 不 om: ze mist thuis juist wel.", "\"Niet per se\" is 未必, veel zwakker.", "\"Nooit\" is 何尝 zonder 不, met 过."] }
    ]
  },
  questions: [
    { type: "mc", q: "我何尝不想出国留学？Wat betekent dit?",
      options: ["Natuurlijk wil ik in het buitenland studeren.", "Ik wil echt niet in het buitenland studeren.", "Ik wil niet per se in het buitenland studeren.", "Wanneer ga ik in het buitenland studeren?"], answer: 0,
      why: ["Goed: 何尝不 = juist wel.", "De retorische vraag draait de ontkenning om.", "\"Niet per se\" is 未必.", "Het is geen echte vraag naar een tijdstip."] },
    { type: "mc", q: "我何尝答应过你？Wat betekent dit?",
      options: ["Ik heb je nooit iets beloofd.", "Ik heb je wel degelijk iets beloofd.", "Wanneer beloof ik het je?", "Ik heb je niet per se iets beloofd."], answer: 0,
      why: ["Goed: 何尝 + werkwoord + 过, zonder 不 = nooit.", "Dat zou 何尝没答应过 zijn. Hier staat geen ontkenning.", "Het is geen echte vraag; en 过 wijst naar het verleden.", "何尝 is een sterke ontkenning, niet \"niet per se\"."] },
    { type: "order", q: "Zet in de goede volgorde: \"Natuurlijk wil ik een paar dagen meer rust!\"",
      tokens: [["我", "wǒ"], ["何尝", "hécháng"], ["不想", "bù xiǎng"], ["多休息", "duō xiūxi"], ["几天", "jǐ tiān"]] },
    { type: "mc", q: "我何尝不想去___？(Natuurlijk wil ik wel gaan!)",
      options: ["呢", "吗", "了", "过"], answer: 0,
      why: ["Goed: na 何尝 kan 呢 staan, of geen partikel.", "何尝 maakt al een retorische vraag; 吗 komt er niet bij.", "了 past niet bij een retorische vraag over willen.", "过 hoort na het werkwoord bij \"nooit\", niet na 想去 met 不."] },
    { type: "mc", q: "你___不知道这件事吗？(Je weet dit toch zeker wel?)",
      options: ["难道", "何尝", "未尝", "未必"], answer: 0,
      why: ["Goed: 难道 ... 吗 = je ... toch zeker wel?", "Na 何尝 komt geen 吗.", "未尝不 is een rustige uitspraak, geen vraag met 吗.", "未必 = niet per se; dat maakt geen retorische vraag."] },
    { type: "mc", q: "Je schrijft een rustig, neutraal rapport. Welke zin past het best?",
      options: ["推迟一年未尝不是一个可行的办法。", "推迟一年何尝不是一个可行的办法吗？", "推迟一年难道是一个可行的办法。", "推迟一年何尝是一个可行的办法。"], answer: 0,
      why: ["Goed: 未尝不 is een rustige, voorzichtig positieve beoordeling.", "何尝 neemt geen 吗, en de toon is te emotioneel.", "难道 maakt een vraag; met een punt erachter klopt de zin niet.", "Zonder 不 betekent 何尝 hier \"nooit\": het tegendeel."] },
    { type: "fill", q: "我___说过这样的话？你一定听错了。(Wanneer heb ik ooit zoiets gezegd? Je hebt het vast verkeerd gehoord.)", answers: ["何尝", "什么时候", "哪里", "哪儿"],
      hint: "Welk formeel woord betekent \"wanneer ooit\"?", why: "何尝 + 说过 = nooit gezegd. In spreektaal kan ook 什么时候 of 哪儿." },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["何尝我不想休息？", "我何尝不想休息？", "他何尝说过这句话？", "这何尝不是一次机会？"], answer: 0,
      why: ["Goed gezien: 何尝 staat na het onderwerp 我.", "Deze zin klopt: onderwerp + 何尝不 + werkwoord.", "Deze zin klopt: 何尝 + werkwoord + 过 = nooit.", "Deze zin klopt: 何尝不是 = is juist wel."] },
    { type: "order", q: "Zet in de goede volgorde: \"Welke ouders willen nu niet dat hun kind gelukkig is?\"",
      tokens: [["父母", "fùmǔ"], ["何尝", "hécháng"], ["不希望", "bù xīwàng"], ["孩子", "háizi"], ["幸福呢", "xìngfú ne"]] },
    { type: "mc", q: "Welke zin zeg je in een gewoon gesprek voor 我何尝不想去？",
      options: ["我怎么会不想去呢？", "我怎么会想去呢？", "我为什么不去呢？", "我真的不想去。"], answer: 0,
      why: ["Goed: 怎么会不……呢 = hoe zou ik nou niet willen = natuurlijk wel.", "Zonder 不 betekent het: ik wil helemaal niet.", "Dit is een echte vraag naar een reden.", "Dit is het tegendeel: ik wil echt niet."] },
    { type: "open", q: "Vertaal in formeel Chinees: \"Natuurlijk wil ik je helpen, maar ik heb echt geen tijd.\"",
      model: ["我何尝不想帮你？可是我实在没有时间。", "我何尝不想帮你，只是实在没时间。"],
      tip: "Check: 何尝 na 我, dan 不想; geen 吗; daarna 可是 of 只是 met de reden." },
    { type: "open", q: "Zeg dit in gewone spreektaal: 我何尝说过要放弃？",
      model: ["我什么时候说过要放弃？", "我哪儿说过要放弃？"],
      tip: "Check: de betekenis blijft \"ik heb nooit gezegd\"; houd 过." }
  ],
  review: [
    { type: "mc", q: "他何尝不明白这个道理？Wat betekent dit?",
      options: ["Natuurlijk begrijpt hij dit.", "Hij begrijpt dit echt niet.", "Hij begrijpt dit niet per se.", "Wanneer gaat hij dit begrijpen?"], answer: 0,
      why: ["Goed: 何尝不 = juist wel.", "De retorische vraag draait 不 om.", "\"Niet per se\" is 未必.", "Het is geen echte vraag naar een tijdstip."] },
    { type: "mc", q: "我们何尝反对过改革？Wat betekent dit?",
      options: ["We zijn nooit tegen de hervorming geweest.", "We zijn altijd tegen de hervorming geweest.", "We zijn niet per se voor de hervorming.", "Wanneer waren we tegen de hervorming?"], answer: 0,
      why: ["Goed: 何尝 + werkwoord + 过 = nooit.", "何尝 ontkent juist; het bevestigt niet.", "Dat zou 未必支持 zijn.", "Het is een retorische vraag; er wordt geen tijdstip gevraagd."] },
    { type: "mc", q: "这件事你___没听说过吗？(Je hebt hier toch zeker wel van gehoord?)",
      options: ["难道", "何尝", "未尝", "未必"], answer: 0,
      why: ["Goed: 难道 ... 吗 daagt de ander uit.", "Na 何尝 komt geen 吗.", "未尝 maakt geen vraag met 吗.", "未必 = niet per se; dat is geen retorische vraag."] }
  ]
})
