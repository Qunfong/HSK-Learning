({
  id: "01", slug: "jianyu", title: "Gezien ... met 鉴于", sub: "Een formele reden vóór een besluit",
  canDo: "Je kunt nu in formele tekst een besluit onderbouwen met 鉴于, en je weet dat je in gesprek 因为 of 考虑到 zegt.",
  guess: {
    q: "鉴于天气原因，比赛推迟举行。Wat betekent dit, denk je?",
    options: ["Gezien het weer wordt de wedstrijd uitgesteld.", "Ondanks het weer gaat de wedstrijd gewoon door.", "Als het weer goed is, gaat de wedstrijd door.", "Na het slechte weer begint de wedstrijd weer."], answer: 0,
    why: ["Goed: 鉴于 noemt de reden waarom iets besloten wordt.", "鉴于 is geen tegenstelling. \"Ondanks\" is 尽管.", "鉴于 is geen voorwaarde. \"Als\" is 如果.", "鉴于 zegt niets over tijd of volgorde."]
  },
  problem: "In een officiële tekst onderbouw je een besluit. Eerst noem je de feiten, dan het besluit. 因为 klinkt dan te gewoon. Daarvoor is 鉴于 (jiànyú): \"gezien\" of \"in aanmerking nemend dat\".",
  pattern: [
    { l: "gezien", v: "鉴于", c: 2, key: true }, { l: "feit / situatie", v: "目前的情况", c: 3 },
    { l: "wie", v: "公司", c: 1 }, { l: "besluit", v: "决定", c: 4 }, { l: "maatregel", v: "暂停招聘", c: 5 }
  ],
  patternCap: "鉴于 + feit of situatie，+ besluit, advies of maatregel · 鉴于此 / 鉴于以上原因 · spreektaal: 因为 / 考虑到 / 既然",
  rules: [
    "鉴于 staat aan het begin van de zin, vóór het feit.",
    "Het tweede deel is een besluit, advies of maatregel, vaak met 决定, 建议 of 将.",
    "Het is schrijftaal: brieven, regels, nieuws. In gesprek zeg je 因为 of 考虑到.",
    "Vaste formules: 鉴于此 (gezien dit) en 鉴于以上原因 (om bovenstaande redenen)."
  ],
  pitfall: "鉴于 hoort bij een bewuste keuze. Voor een gewoon gevolg gebruik je 因为 of 由于: 因为下雨，路很湿, niet 鉴于下雨，路很湿.",
  examples: [
    { cn: "鉴于目前的情况，公司决定暂停招聘。", py: "Jiànyú mùqián de qíngkuàng, gōngsī juédìng zàntíng zhāopìn.", nl: "Gezien de huidige situatie besluit het bedrijf de werving tijdelijk stop te zetten." },
    { cn: "鉴于以上原因，我们建议推迟这个项目。", py: "Jiànyú yǐshàng yuányīn, wǒmen jiànyì tuīchí zhège xiàngmù.", nl: "Om bovenstaande redenen adviseren wij dit project uit te stellen." },
    { cn: "鉴于该产品存在安全隐患，厂家已全部召回。", py: "Jiànyú gāi chǎnpǐn cúnzài ānquán yǐnhuàn, chǎngjiā yǐ quánbù zhàohuí.", nl: "Gezien de veiligheidsrisico's van het product heeft de fabrikant alles teruggeroepen." }
  ],
  nuance: [
    { h: "鉴于 of 由于?",
      p: "由于 noemt een oorzaak. Daarna kan elk gevolg komen, ook iets wat vanzelf gebeurt. 鉴于 noemt een feit dat iemand bewust afweegt. Daarna komt altijd een besluit of advies. Gaat het om een gevolg zonder keuze, zoals een vertraging? Dan kan alleen 由于.",
      ex: [
        { cn: "由于大雨，航班延误了。", py: "Yóuyú dàyǔ, hángbān yánwù le.", nl: "Door de zware regen had de vlucht vertraging." },
        { cn: "鉴于大雨，机场决定取消所有航班。", py: "Jiànyú dàyǔ, jīchǎng juédìng qǔxiāo suǒyǒu hángbān.", nl: "Gezien de zware regen besluit het vliegveld alle vluchten te schrappen." }
      ] },
    { h: "Spreektaal: 因为, 考虑到 en 既然",
      p: "In een gesprek klinkt 鉴于 stijf, als een brief van de overheid. Zeg dan 因为 voor een gewone reden. Wil je zeggen dat je iets meeweegt, zeg dan 考虑到. Gaat het om iets wat de ander net zei, gebruik dan 既然 ... 就.",
      ex: [
        { cn: "考虑到天气不好，我们改天再去吧。", py: "Kǎolǜ dào tiānqì bù hǎo, wǒmen gǎitiān zài qù ba.", nl: "Omdat het weer slecht is, gaan we maar een andere dag." },
        { cn: "既然你累了，就早点休息吧。", py: "Jìrán nǐ lèi le, jiù zǎo diǎn xiūxi ba.", nl: "Als je toch moe bent, ga dan maar vroeg rusten." }
      ] },
    { h: "鉴于此: terugverwijzen naar wat net gezegd is",
      p: "In rapporten en brieven noem je eerst de feiten in een paar zinnen. Daarna begin je een nieuwe zin met 鉴于此 of 鉴于以上情况. 此 verwijst naar alles wat ervóór staat. Zo maak je de overgang naar het besluit. 所以 past hier niet, want 鉴于 zelf geeft al de reden.",
      ex: [
        { cn: "今年原材料价格上涨了百分之三十。鉴于此，公司将适当提高产品价格。", py: "Jīnnián yuáncáiliào jiàgé shàngzhǎngle bǎi fēn zhī sānshí. Jiànyú cǐ, gōngsī jiāng shìdàng tígāo chǎnpǐn jiàgé.", nl: "Dit jaar zijn de grondstofprijzen met dertig procent gestegen. Gezien dit zal het bedrijf de productprijzen in redelijke mate verhogen." }
      ] }
  ],
  mistakes: [
    { wrong: "鉴于下雨，路很滑。", right: "因为下雨，路很滑。", why: "Een glad wegdek is een gevolg, geen besluit. Voor een gewoon gevolg gebruik je 因为 of 由于." },
    { wrong: "鉴于天气恶劣，所以比赛取消。", right: "鉴于天气恶劣，比赛取消。", why: "鉴于 geeft zelf de reden. Na de komma volgt direct het besluit, zonder 所以." },
    { wrong: "天气恶劣鉴于，比赛取消。", right: "鉴于天气恶劣，比赛取消。", why: "鉴于 staat vóór het feit, net als het Nederlandse \"gezien\"." },
    { wrong: "鉴于你饿了，我们去吃饭吧。", right: "既然你饿了，我们去吃饭吧。", why: "Tegen een vriend klinkt 鉴于 te formeel. In spreektaal zeg je 既然 of 因为." }
  ],
  vocab: [
    ["鉴于", "jiànyú", "gezien, in aanmerking nemend (formeel)"], ["暂停", "zàntíng", "tijdelijk stopzetten"], ["招聘", "zhāopìn", "personeel werven"],
    ["推迟", "tuīchí", "uitstellen"], ["隐患", "yǐnhuàn", "verborgen risico"], ["召回", "zhàohuí", "terugroepen"],
    ["局势", "júshì", "situatie, toestand"], ["采取", "cǎiqǔ", "nemen (maatregel)"], ["谨慎", "jǐnshèn", "voorzichtig"], ["措施", "cuòshī", "maatregel"]
  ],
  dialogue: [
    ["A", "最近订单明显减少，大家有什么看法？", "Zuìjìn dìngdān míngxiǎn jiǎnshǎo, dàjiā yǒu shénme kànfǎ?", "De orders zijn de laatste tijd duidelijk gedaald. Wat vinden jullie?"],
    ["B", "鉴于目前的局势，我建议暂停新项目。", "Jiànyú mùqián de júshì, wǒ jiànyì zàntíng xīn xiàngmù.", "Gezien de huidige situatie stel ik voor nieuwe projecten te pauzeren."],
    ["A", "那已经开始的项目呢？", "Nà yǐjīng kāishǐ de xiàngmù ne?", "En de projecten die al begonnen zijn?"],
    ["B", "可以继续，但要采取更谨慎的措施。", "Kěyǐ jìxù, dàn yào cǎiqǔ gèng jǐnshèn de cuòshī.", "Die kunnen doorgaan, maar met voorzichtigere maatregelen."],
    ["A", "好。鉴于大家意见一致，就这么决定。", "Hǎo. Jiànyú dàjiā yìjiàn yízhì, jiù zhème juédìng.", "Goed. Gezien iedereen het eens is, besluiten we het zo."]
  ],
  reading: {
    title: "图书馆通知",
    lines: [
      { cn: "各位读者：", py: "Gèwèi dúzhě:", nl: "Beste lezers," },
      { cn: "近期，图书馆部分电线出现了老化问题。", py: "Jìnqī, túshūguǎn bùfen diànxiàn chūxiànle lǎohuà wèntí.", nl: "Onlangs is een deel van de bedrading in de bibliotheek verouderd geraakt." },
      { cn: "鉴于夜间用电量较大，存在一定的安全隐患，图书馆决定自下周一起暂停夜间开放。", py: "Jiànyú yèjiān yòngdiànliàng jiào dà, cúnzài yídìng de ānquán yǐnhuàn, túshūguǎn juédìng zì xià zhōuyī qǐ zàntíng yèjiān kāifàng.", nl: "Gezien het hoge stroomverbruik 's avonds, en het veiligheidsrisico dat daarbij hoort, sluit de bibliotheek vanaf volgende maandag 's avonds tijdelijk." },
      { cn: "维修工作预计需要两周时间。", py: "Wéixiū gōngzuò yùjì xūyào liǎng zhōu shíjiān.", nl: "De reparatie duurt naar verwachting twee weken." },
      { cn: "鉴于期末考试即将到来，图书馆将提前一小时开门，即早上七点开放。", py: "Jiànyú qīmò kǎoshì jíjiāng dàolái, túshūguǎn jiāng tíqián yì xiǎoshí kāimén, jí zǎoshang qī diǎn kāifàng.", nl: "Gezien de naderende eindexamens gaat de bibliotheek een uur eerder open, dus om zeven uur 's ochtends." },
      { cn: "同时，二楼自习室将照常开放。", py: "Tóngshí, èr lóu zìxíshì jiāng zhàocháng kāifàng.", nl: "De studiezaal op de eerste verdieping blijft gewoon open." },
      { cn: "鉴于以上情况，请各位读者合理安排学习时间。", py: "Jiànyú yǐshàng qíngkuàng, qǐng gèwèi dúzhě hélǐ ānpái xuéxí shíjiān.", nl: "Gezien het bovenstaande vragen wij alle lezers hun studietijd goed te plannen." },
      { cn: "由此带来的不便，敬请谅解。", py: "Yóu cǐ dàilái de búbiàn, jìngqǐng liàngjiě.", nl: "Wij vragen uw begrip voor het ongemak." }
    ],
    questions: [
      { type: "mc", q: "Waarom sluit de bibliotheek 's avonds?",
        options: ["De oude bedrading is 's avonds een veiligheidsrisico.", "Er komen 's avonds te weinig lezers.", "De studenten moeten 's avonds slapen voor de examens.", "De studiezaal wordt opgeknapt."], answer: 0,
        why: ["Goed: 电线出现了老化问题 en 存在一定的安全隐患.", "Over het aantal lezers staat niets in de tekst.", "De examens zijn de reden voor de vroege opening, niet voor de sluiting.", "De studiezaal blijft juist open: 照常开放."] },
      { type: "mc", q: "Wat doet de bibliotheek vanwege de examens?",
        options: ["Ze gaat een uur eerder open, om zeven uur.", "Ze blijft 's avonds langer open.", "Ze sluit de studiezaal.", "Ze stelt de reparatie uit."], answer: 0,
        why: ["Goed: 提前一小时开门，即早上七点开放.", "De avondopening stopt juist tijdelijk.", "De studiezaal blijft open: 照常开放.", "De reparatie gaat door: ze duurt twee weken."] },
      { type: "mc", q: "鉴于以上情况，请各位读者合理安排学习时间。Wat doet 鉴于以上情况 hier?",
        options: ["Het verwijst terug naar alle feiten en leidt het verzoek in.", "Het geeft een tegenstelling met het vorige deel.", "Het noemt een voorwaarde voor de toekomst.", "Het geeft aan dat de feiten nog onzeker zijn."], answer: 0,
        why: ["Goed: 以上情况 = alles wat erboven staat. Daarna volgt het verzoek.", "Een tegenstelling maak je met 尽管 of 但是, niet met 鉴于.", "Een voorwaarde maak je met 如果 of 只要.", "鉴于 noemt juist vaststaande feiten."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Gezien het slechte weer heeft het vliegveld alle vluchten geschrapt.\"",
      options: ["鉴于天气恶劣，机场取消了全部航班。", "尽管天气恶劣，机场取消了全部航班。", "天气恶劣鉴于，机场取消了全部航班。", "即使天气恶劣，机场取消了全部航班。"], answer: 0,
      why: ["Goed: 鉴于 + feit vooraan, dan het besluit.", "尽管 betekent \"ondanks\": dat is een tegenstelling.", "鉴于 staat vóór het feit, niet erachter.", "即使 betekent \"zelfs als\" en vraagt om 也."] },
    { type: "mc", q: "Een officiële mededeling: ___以上原因，本次活动取消。",
      options: ["鉴于", "尽管", "即使", "除了"], answer: 0,
      why: ["Goed: 鉴于以上原因 = om bovenstaande redenen.", "尽管 betekent \"ondanks\": dat past niet bij een reden.", "即使 betekent \"zelfs als\" en vraagt om 也.", "除了 betekent \"behalve\": dat geeft geen reden."] },
    { type: "order", q: "Zet in de goede volgorde: \"Om bovenstaande redenen wordt deze vergadering naar volgende week verplaatst.\" (Begin met 鉴于.)",
      tokens: [["鉴于", "jiànyú"], ["以上原因，", "yǐshàng yuányīn,"], ["本次会议", "běn cì huìyì"], ["改在", "gǎi zài"], ["下周举行", "xià zhōu jǔxíng"]] },
    { type: "mc", q: "Welke zin gebruikt 鉴于 NIET goed?",
      options: ["鉴于他个子很高，他的衣服都很大。", "鉴于病情严重，医生决定马上手术。", "鉴于交通拥堵，政府决定修建地铁。", "鉴于成本上涨，公司决定提高价格。"], answer: 0,
      why: ["Goed: hier is geen besluit, alleen een gevolg. Zeg: 因为他个子很高，所以衣服都很大。", "Dit kan: gezien de ernst besluit de arts te opereren.", "Dit kan: gezien de files besluit de overheid een metro te bouwen.", "Dit kan: gezien de hogere kosten besluit het bedrijf de prijs te verhogen."] },
    { type: "mc", q: "___堵车，他今天上班迟到了。(Door de file kwam hij vandaag te laat op het werk.)",
      options: ["由于", "鉴于", "尽管", "即使"], answer: 0,
      why: ["Goed: te laat komen is een gevolg, geen besluit. Dan past 由于 (of 因为).", "鉴于 vraagt om een bewust besluit in het tweede deel. Te laat komen kies je niet.", "尽管 betekent \"ondanks\": dat is een tegenstelling.", "即使 betekent \"zelfs als\" en vraagt om 也."] },
    { type: "mc", q: "Je zegt tegen een vriend: \"Gezien het slechte weer blijven we maar thuis.\" Welke zin past het best?",
      options: ["考虑到天气不好，咱们待在家吧。", "鉴于天气不好，咱们待在家吧。", "尽管天气不好，咱们待在家吧。", "即使天气不好，咱们待在家吧。"], answer: 0,
      why: ["Goed: 考虑到 is de gewone spreektaal voor \"gezien\".", "鉴于 is schrijftaal. Met 咱们 en 吧 erbij klinkt het vreemd stijf.", "尽管 betekent \"ondanks\": dat is een tegenstelling.", "即使 betekent \"zelfs als\" en vraagt om 也."] },
    { type: "mc", q: "前三个月销售额下降了百分之二十。鉴于此，公司决定调整策略。Waar verwijst 此 naar?",
      options: ["Naar de daling van de omzet in de eerste drie maanden.", "Naar de nieuwe strategie van het bedrijf.", "Naar de komende drie maanden.", "Naar het besluit van het bedrijf."], answer: 0,
      why: ["Goed: 此 verwijst terug naar het feit dat net genoemd is.", "De strategie is het besluit, niet de reden.", "此 verwijst terug, niet vooruit.", "Na 鉴于 staat de reden, niet het besluit."] },
    { type: "fill", q: "___此，我们决定取消这份订单。(Gezien dit besluiten wij deze bestelling te annuleren.)", answers: ["鉴于", "有鉴于"],
      hint: "Welk formeel woord betekent \"gezien\"?", why: "鉴于此 = gezien dit. 此 verwijst terug naar de feiten ervóór." },
    { type: "order", q: "Zet in de goede volgorde: \"Gezien de toestand van de patiënt raadt de arts aan direct te opereren.\" (Begin met 鉴于.)",
      tokens: [["鉴于", "jiànyú"], ["病人的情况，", "bìngrén de qíngkuàng,"], ["医生建议", "yīshēng jiànyì"], ["立即手术", "lìjí shǒushù"]] },
    { type: "open", q: "Schrijf een formele zin: \"Gezien de hoge kosten stelt de gemeente het project uit.\"",
      model: ["鉴于成本过高，市政府决定推迟这个项目。", "鉴于费用太高，市政府推迟了该项目。"],
      tip: "Check: staat 鉴于 vooraan, en volgt er een besluit (决定, 推迟)?" },
    { type: "open", q: "Vertaal (formeel): \"Gezien het grote aantal klachten besluit de school de regel te wijzigen.\"",
      model: ["鉴于投诉较多，学校决定修改这项规定。", "鉴于大量的投诉，学校决定修改该规定。"],
      tip: "Check: 鉴于 + feit vooraan, geen 所以, en daarna een besluit met 决定." }
  ],
  review: [
    { type: "mc", q: "\"Gezien de klachten van klanten heeft het bedrijf de regels aangepast.\"",
      options: ["鉴于顾客的投诉，公司修改了规定。", "尽管顾客的投诉，公司修改了规定。", "顾客的投诉鉴于，公司修改了规定。", "即使顾客的投诉，公司修改了规定。"], answer: 0,
      why: ["Goed.", "尽管 betekent \"ondanks\": dat is geen reden.", "鉴于 staat vóór het feit.", "即使 betekent \"zelfs als\" en vraagt om 也."] },
    { type: "mc", q: "Officiële notulen: ___双方意见不同，会议决定下次再讨论。",
      options: ["鉴于", "即使", "不但", "只要"], answer: 0,
      why: ["Goed: gezien het verschil van mening volgt een besluit.", "即使 betekent \"zelfs als\" en vraagt om 也.", "不但 vraagt om 而且 in het tweede deel.", "只要 betekent \"als ... maar\" en vraagt om 就."] },
    { type: "mc", q: "Een nieuwsbericht: ___该地区发生洪水，政府决定紧急撤离居民。",
      options: ["鉴于", "尽管", "即使", "除非"], answer: 0,
      why: ["Goed: gezien de overstroming besluit de overheid de bewoners te evacueren.", "尽管 betekent \"ondanks\": dat is een tegenstelling.", "即使 betekent \"zelfs als\" en vraagt om 也.", "除非 betekent \"tenzij\": dat is een voorwaarde."] }
  ]
})
