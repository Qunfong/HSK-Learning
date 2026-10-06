({
  id: "05", slug: "weiyou", title: "唯有 ... 才", sub: "Alleen als ..., dan pas",
  canDo: "Je kunt nu in formele tekst de enige voorwaarde voor een resultaat noemen met 唯有……才, en je weet dat je in gesprek 只有……才 zegt.",
  guess: {
    q: "唯有坚持，才能成功。Wat betekent dit, denk je?",
    options: ["Alleen met volharding kun je slagen.", "Met volharding slaag je altijd meteen.", "Zelfs met volharding kun je niet slagen.", "Zonder volharding kun je ook slagen."], answer: 0,
    why: ["Goed: 唯有 ... 才 = alleen dit leidt tot het resultaat.", "才 betekent \"pas dan\", niet \"altijd meteen\".", "Er staat geen ontkenning in de zin.", "唯有 zegt juist dat volharding nodig is."]
  },
  problem: "Soms is er maar één weg naar een resultaat. In het Nederlands zeg je \"alleen als ..., dan pas\". In spreektaal is dat 只有 ... 才. In schrijftaal en toespraken zeg je 唯有 (wéiyǒu) ... 才 (cái).",
  pattern: [
    { l: "alleen", v: "唯有", c: 2, key: true }, { l: "enige voorwaarde", v: "不断学习", c: 3 },
    { l: "wie", v: "我们", c: 1 }, { l: "pas dan", v: "才", c: 2, key: true }, { l: "resultaat", v: "能进步", c: 5 }
  ],
  patternCap: "唯有 + enige voorwaarde，(wie) + 才 + resultaat · vaste vorm: 唯有如此 · spreektaal: 只有……才",
  rules: [
    "唯有 staat vooraan, vóór de voorwaarde.",
    "才 staat in het tweede deel, na het onderwerp en vóór het werkwoord.",
    "Na 才 komt vaak 能 of 可以.",
    "Gebruik 才, niet 就: 就 hoort bij 只要 (\"als ... maar\")."
  ],
  pitfall: "唯有 ... 就 is fout. 只要 ... 就 = als ... maar (dat is genoeg). 唯有 ... 才 = alleen als (dat is nodig).",
  examples: [
    { cn: "唯有不断创新，企业才能生存。", py: "Wéiyǒu búduàn chuàngxīn, qǐyè cái néng shēngcún.", nl: "Alleen door steeds te vernieuwen kan een bedrijf overleven." },
    { cn: "唯有双方共同努力，问题才能得到解决。", py: "Wéiyǒu shuāngfāng gòngtóng nǔlì, wèntí cái néng dédào jiějué.", nl: "Alleen als beide partijen samen hun best doen, kan het probleem worden opgelost." },
    { cn: "唯有通过考试，才能获得证书。", py: "Wéiyǒu tōngguò kǎoshì, cái néng huòdé zhèngshū.", nl: "Alleen wie het examen haalt, krijgt het certificaat." },
    { cn: "唯有如此，我们才能赢得信任。", py: "Wéiyǒu rúcǐ, wǒmen cái néng yíngdé xìnrèn.", nl: "Alleen zo kunnen we vertrouwen winnen." }
  ],
  nuance: [
    { h: "唯有 of 只有?",
      p: "De betekenis is hetzelfde: \"alleen als\". Beide gaan samen met 才. 只有 is gewone spreektaal en kan overal. 唯有 is schrijftaal: toespraken, rapporten, krantenartikelen. Het klinkt plechtiger en legt meer nadruk op \"de enige weg\". Tegen een vriend zeg je 只有.",
      ex: [
        { cn: "只有多练习，你的口语才能进步。", py: "Zhǐyǒu duō liànxí, nǐ de kǒuyǔ cái néng jìnbù.", nl: "Alleen als je veel oefent, wordt je spreekvaardigheid beter." },
        { cn: "唯有深化改革，经济才能持续发展。", py: "Wéiyǒu shēnhuà gǎigé, jīngjì cái néng chíxù fāzhǎn.", nl: "Alleen door de hervormingen te verdiepen kan de economie blijven groeien." }
      ] },
    { h: "唯有……才 of 只要……就?",
      p: "唯有 (of 只有) ... 才: de voorwaarde is nodig. Zonder lukt het niet. 只要 ... 就: de voorwaarde is genoeg. Meer hoef je niet te doen. Vergelijk de twee zinnen: in de eerste is een paspoort verplicht, in de tweede is het voldoende.",
      ex: [
        { cn: "唯有持有护照，才能入境。", py: "Wéiyǒu chíyǒu hùzhào, cái néng rùjìng.", nl: "Alleen met een paspoort mag je het land in." },
        { cn: "只要有护照，就能入境。", py: "Zhǐyào yǒu hùzhào, jiù néng rùjìng.", nl: "Als je maar een paspoort hebt, mag je het land in." }
      ] },
    { h: "唯有 + persoon, en 唯一",
      p: "唯有 kan ook vóór een persoon of ding staan, zonder 才. Dan betekent het \"alleen ... (en verder niemand)\". Niet verwarren met 唯一 (wéiyī): dat is een bijvoeglijk naamwoord, \"de enige\", vóór een zelfstandig naamwoord.",
      ex: [
        { cn: "大家都同意了，唯有他表示反对。", py: "Dàjiā dōu tóngyì le, wéiyǒu tā biǎoshì fǎnduì.", nl: "Iedereen ging akkoord, alleen hij was tegen." },
        { cn: "这是解决问题的唯一办法。", py: "Zhè shì jiějué wèntí de wéiyī bànfǎ.", nl: "Dit is de enige manier om het probleem op te lossen." }
      ] }
  ],
  mistakes: [
    { wrong: "唯有坚持，就能成功。", right: "唯有坚持，才能成功。", why: "唯有 hoort bij 才. 就 hoort bij 只要." },
    { wrong: "唯有坚持，才我们能成功。", right: "唯有坚持，我们才能成功。", why: "才 is een bijwoord. Het staat na het onderwerp, vlak vóór het werkwoord." },
    { wrong: "唯一坚持，才能成功。", right: "唯有坚持，才能成功。", why: "唯一 betekent \"de enige\" en staat vóór een zelfstandig naamwoord. Voor \"alleen als\" gebruik je 唯有." },
    { wrong: "只要坚持，才能成功。", right: "只有坚持，才能成功。", why: "只要 hoort bij 就. Wil je 才 gebruiken, kies dan 只有 (spreektaal) of 唯有 (schrijftaal)." }
  ],
  vocab: [
    ["唯有", "wéiyǒu", "alleen (als) (formeel)"], ["创新", "chuàngxīn", "innoveren, vernieuwing"], ["生存", "shēngcún", "overleven"],
    ["双方", "shuāngfāng", "beide partijen"], ["谈判", "tánpàn", "onderhandeling"], ["分歧", "fēnqí", "meningsverschil"],
    ["让步", "ràngbù", "toegeven"], ["达成", "dáchéng", "bereiken (akkoord)"], ["协议", "xiéyì", "overeenkomst"], ["如此", "rúcǐ", "zo (formeel)"]
  ],
  dialogue: [
    ["A", "这次谈判很困难，双方分歧很大。", "Zhè cì tánpàn hěn kùnnan, shuāngfāng fēnqí hěn dà.", "Deze onderhandeling is lastig. De partijen staan ver uit elkaar."],
    ["B", "是的。唯有互相让步，才能达成协议。", "Shì de. Wéiyǒu hùxiāng ràngbù, cái néng dáchéng xiéyì.", "Ja. Alleen als we allebei toegeven, komen we tot een akkoord."],
    ["A", "我们能让步多少？", "Wǒmen néng ràngbù duōshao?", "Hoeveel kunnen wij toegeven?"],
    ["B", "价格可以谈，但质量不能降低。唯有保证质量，我们才能赢得客户的信任。", "Jiàgé kěyǐ tán, dàn zhìliàng bù néng jiàngdī. Wéiyǒu bǎozhèng zhìliàng, wǒmen cái néng yíngdé kèhù de xìnrèn.", "Over de prijs valt te praten, maar de kwaliteit mag niet omlaag. Alleen met goede kwaliteit winnen we het vertrouwen van klanten."],
    ["A", "同意。", "Tóngyì.", "Akkoord."]
  ],
  reading: {
    title: "毕业致辞",
    lines: [
      { cn: "各位同学，今天你们就要毕业了。", py: "Gèwèi tóngxué, jīntiān nǐmen jiù yào bìyè le.", nl: "Beste studenten, vandaag studeren jullie af." },
      { cn: "四年来，你们学到了很多知识。", py: "Sì nián lái, nǐmen xuédàole hěn duō zhīshi.", nl: "In vier jaar hebben jullie veel kennis opgedaan." },
      { cn: "但是，社会变化得非常快。", py: "Dànshì, shèhuì biànhuà de fēicháng kuài.", nl: "Maar de samenleving verandert heel snel." },
      { cn: "唯有不断学习，你们才能跟上时代的发展。", py: "Wéiyǒu búduàn xuéxí, nǐmen cái néng gēnshàng shídài de fāzhǎn.", nl: "Alleen door steeds te blijven leren, kunnen jullie de ontwikkelingen van deze tijd bijhouden." },
      { cn: "工作中难免会遇到失败。", py: "Gōngzuò zhōng nánmiǎn huì yùdào shībài.", nl: "In je werk loop je onvermijdelijk tegen mislukkingen aan." },
      { cn: "唯有勇敢面对失败，我们才能真正成长。", py: "Wéiyǒu yǒnggǎn miànduì shībài, wǒmen cái néng zhēnzhèng chéngzhǎng.", nl: "Alleen als we mislukkingen moedig onder ogen zien, groeien we echt." },
      { cn: "此外，成功从来不是一个人的事。", py: "Cǐwài, chénggōng cónglái bú shì yí ge rén de shì.", nl: "Bovendien is succes nooit de zaak van één persoon." },
      { cn: "唯有学会与人合作，才能走得更远。", py: "Wéiyǒu xuéhuì yǔ rén hézuò, cái néng zǒu de gèng yuǎn.", nl: "Alleen wie leert samenwerken, komt verder." },
      { cn: "祝大家前程似锦！", py: "Zhù dàjiā qiánchéng sì jǐn!", nl: "Ik wens jullie allemaal een stralende toekomst!" }
    ],
    questions: [
      { type: "mc", q: "Waarom moeten de studenten blijven leren?",
        options: ["Omdat de samenleving heel snel verandert.", "Omdat ze in vier jaar te weinig geleerd hebben.", "Omdat ze anders geen diploma krijgen.", "Omdat ze anders geen collega's vinden."], answer: 0,
        why: ["Goed: 社会变化得非常快，唯有不断学习……", "De tekst zegt juist: 你们学到了很多知识.", "Het diploma krijgen ze vandaag al: 你们就要毕业了.", "Samenwerken is een ander punt in de toespraak."] },
      { type: "mc", q: "Wat zegt de spreker over succes?",
        options: ["Je bereikt het niet alleen: je moet leren samenwerken.", "Je bereikt het alleen door hard alleen te werken.", "Succes komt vanzelf na de studie.", "Wie nooit faalt, heeft succes."], answer: 0,
        why: ["Goed: 成功从来不是一个人的事 en 唯有学会与人合作.", "Volgens de tekst is succes juist niet de zaak van één persoon.", "De spreker zegt dat je moet blijven leren. Het komt niet vanzelf.", "De spreker zegt dat falen erbij hoort: 难免会遇到失败."] },
      { type: "mc", q: "唯有勇敢面对失败，我们才能真正成长。Wat zegt deze zin?",
        options: ["Mislukkingen moedig onder ogen zien is nodig om echt te groeien.", "Als je mislukkingen onder ogen ziet, is dat genoeg om te groeien.", "Zelfs als je mislukkingen onder ogen ziet, groei je niet.", "Je groeit echt zonder mislukkingen onder ogen te zien."], answer: 0,
        why: ["Goed: 唯有……才 noemt een voorwaarde die nodig is.", "\"Genoeg\" is 只要……就, niet 唯有……才.", "Er staat geen ontkenning; 即使……也 zou \"zelfs als\" zijn.", "唯有 zegt juist dat het zonder niet lukt."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Alleen door hard te werken kun je je doel bereiken.\"",
      options: ["唯有努力，才能实现目标。", "唯有努力，就能实现目标。", "才有努力，唯能实现目标。", "唯有努力，也能实现目标。"], answer: 0,
      why: ["Goed: 唯有 ... 才.", "就 hoort bij 只要, niet bij 唯有.", "唯有 en 才 zijn omgewisseld.", "也 hoort bij 即使 (\"zelfs als\")."] },
    { type: "mc", q: "Hoe zeg je 唯有坚持，才能成功 in spreektaal?",
      options: ["只有坚持，才能成功。", "只要坚持，才能成功。", "只有坚持，就能成功。", "虽然坚持，才能成功。"], answer: 0,
      why: ["Goed: 只有 ... 才 is de spreektaal-variant.", "只要 hoort bij 就, niet bij 才.", "只有 hoort bij 才, niet bij 就.", "虽然 betekent \"hoewel\" en vraagt om 但是."] },
    { type: "order", q: "Zet in de goede volgorde: \"Alleen zo kan het probleem worden opgelost.\"",
      tokens: [["唯有", "wéiyǒu"], ["如此，", "rúcǐ,"], ["才能", "cái néng"], ["解决问题", "jiějué wèntí"]] },
    { type: "mc", q: "唯有经过专业培训，员工___能上岗。",
      options: ["才", "就", "也", "都"], answer: 0,
      why: ["Goed: 唯有 ... 才.", "就 hoort bij 只要, niet bij 唯有.", "也 hoort bij 即使.", "都 past niet bij 唯有: het gaat om één voorwaarde."] },
    { type: "mc", q: "Welke zin zegt dat een paspoort GENOEG is om het land in te mogen?",
      options: ["只要有护照，就能入境。", "唯有持有护照，才能入境。", "只有持有护照，才能入境。", "即使持有护照，也不能入境。"], answer: 0,
      why: ["Goed: 只要……就 = de voorwaarde is genoeg.", "唯有……才 zegt dat een paspoort nodig is, niet dat het genoeg is.", "只有……才 zegt ook dat het nodig is, niet dat het genoeg is.", "即使……也不 zegt dat je er zelfs mét paspoort niet in mag."] },
    { type: "mc", q: "大家都同意了，唯有他表示反对。Wat betekent dit?",
      options: ["Iedereen ging akkoord, alleen hij was tegen.", "Iedereen ging akkoord, ook hij.", "Iedereen was tegen, alleen hij ging akkoord.", "Alleen als hij tegen is, gaat iedereen akkoord."], answer: 0,
      why: ["Goed: 唯有 + persoon = alleen die persoon.", "唯有 maakt hem juist de uitzondering.", "De rollen zijn omgedraaid: 大家都同意了, en hij 反对.", "Er staat geen 才: hier is 唯有 geen voorwaarde maar \"alleen hij\"."] },
    { type: "mc", q: "这是解决问题的___办法。(Dit is de enige manier om het probleem op te lossen.)",
      options: ["唯一", "唯有", "只要", "只是"], answer: 0,
      why: ["Goed: 唯一 = de enige, vóór een zelfstandig naamwoord.", "唯有 betekent \"alleen (als)\" en staat niet als bijvoeglijk naamwoord vóór 办法.", "只要 betekent \"als ... maar\" en hoort bij 就.", "只是 betekent \"alleen maar, slechts\" en staat niet vóór 办法."] },
    { type: "order", q: "Zet in de goede volgorde: \"Alleen door het milieu te beschermen kan de mensheid overleven.\" (Begin met 唯有.)",
      tokens: [["唯有", "wéiyǒu"], ["保护环境，", "bǎohù huánjìng,"], ["人类才能", "rénlèi cái néng"], ["生存下去", "shēngcún xiàqu"]] },
    { type: "fill", q: "___多读多写，你的中文才能提高。(Alleen als je veel leest en schrijft, wordt je Chinees beter.)", answers: ["唯有", "只有"],
      hint: "Welk woord van twee tekens hoort bij 才?", why: "唯有 (formeel) of 只有 (spreektaal) + voorwaarde, dan 才. 只要 kan niet: dat hoort bij 就." },
    { type: "open", q: "Schrijf een formele zin met 唯有 ... 才 over het leren van Chinees.",
      model: ["唯有每天练习，才能真正掌握中文。", "唯有多读多写，我们的中文水平才能提高。"],
      tip: "Check: 唯有 vooraan, 才 vóór het werkwoord in het tweede deel, en geen 就." },
    { type: "open", q: "Vertaal (formeel): \"Alleen door samen te werken kunnen we deze crisis overwinnen.\"",
      model: ["唯有团结合作，我们才能战胜这场危机。", "唯有共同合作，我们才能度过这次危机。"],
      tip: "Check: 唯有 + voorwaarde, dan 我们 + 才能 + werkwoord. Geen 就." }
  ],
  review: [
    { type: "mc", q: "\"Alleen als iedereen de regels volgt, kan het systeem goed werken.\"",
      options: ["唯有人人遵守规则，系统才能正常运行。", "唯有人人遵守规则，系统就能正常运行。", "唯有人人遵守规则，才系统能正常运行。", "唯有人人遵守规则，系统也能正常运行。"], answer: 0,
      why: ["Goed.", "就 hoort bij 只要, niet bij 唯有.", "才 staat na het onderwerp, niet ervoor.", "也 hoort bij 即使."] },
    { type: "mc", q: "Een officieel rapport: ___加强管理，才能减少事故。",
      options: ["唯有", "只要", "虽然", "即使"], answer: 0,
      why: ["Goed: 唯有 ... 才.", "只要 vraagt om 就, niet om 才.", "虽然 betekent \"hoewel\" en vraagt om 但是.", "即使 betekent \"zelfs als\" en vraagt om 也."] },
    { type: "mc", q: "Een regel: \"Alleen als de stukken compleet zijn, wordt de aanvraag behandeld.\" 唯有材料齐全，申请___会被受理。",
      options: ["才", "就", "也", "都"], answer: 0,
      why: ["Goed: 唯有 ... 才.", "就 hoort bij 只要: dan is compleet zijn genoeg, niet de enige voorwaarde.", "也 hoort bij 即使 (\"zelfs als\").", "都 past niet bij 唯有: het gaat om één voorwaarde."] }
  ]
})
