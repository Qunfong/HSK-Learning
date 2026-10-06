({
  id: "08", slug: "congr", title: "从而", sub: "En daardoor, en zo (schrijftaal)",
  canDo: "Je kunt nu in rapporten en nieuws zeggen welk resultaat een maatregel heeft, met 从而, en je kunt het onderscheiden van 因而 en 以便.",
  guess: {
    q: "公司引进了新技术，从而降低了成本。Wat betekent 从而, denk je?",
    options: ["En daardoor", "Om ... te (een doel)", "Maar", "Hoewel"], answer: 0,
    why: ["Goed: de nieuwe techniek leidde tot lagere kosten. 从而 = en daardoor.", "Een doel zou 以便 zijn. Hier is de kostendaling al gebeurd (了).", "\"Maar\" zou 但是 of 然而 zijn: er is geen tegenstelling.", "\"Hoewel\" zou 虽然 of 尽管 zijn."]
  },
  problem: "In een rapport beschrijf je een maatregel en het resultaat: \"de stad bouwde een metro en verminderde zo de files\". In het Nederlands zeg je \"en zo\" of \"waardoor\". In schrijftaal zeg je 从而 (cóng'ér). In gesprek zeg je 这样就 of 所以.",
  pattern: [
    { l: "wie", v: "政府", c: 1 }, { l: "maatregel", v: "加大了对公共交通的投入", c: 3 },
    { l: "en daardoor", v: "从而", c: 2, key: true }, { l: "resultaat", v: "减少了交通拥堵", c: 5 }
  ],
  patternCap: "(wie) + maatregel / handeling，从而 + resultaat (提高, 降低, 减少, 促进 ...) · spreektaal: 这样(一来)就 ... / 所以",
  rules: [
    "Het eerste deel is een maatregel of handeling. Het tweede deel is het resultaat daarvan.",
    "从而 opent het tweede deel. Daarna komt meestal direct een werkwoord, zonder nieuw onderwerp.",
    "Het resultaat kan al gebeurd zijn (从而降低了成本) of verwacht worden in een plan (从而提高效率).",
    "Na 从而 staan vaak formele werkwoorden: 提高, 降低, 减少, 促进, 推动, 增进.",
    "In gesprek zeg je 这样就 of 所以. 从而 is schrijftaal."
  ],
  pitfall: "Het eerste deel moet een maatregel of handeling zijn, geen toevallige oorzaak. 下大雨，从而比赛取消了 is fout: regen is geen maatregel. Zeg 因而 of 所以.",
  examples: [
    { cn: "政府加大了对公共交通的投入，从而减少了交通拥堵。", py: "Zhèngfǔ jiādàle duì gōnggòng jiāotōng de tóurù, cóng'ér jiǎnshǎole jiāotōng yōngdǔ.", nl: "De overheid investeerde meer in het openbaar vervoer en verminderde zo de files." },
    { cn: "公司引进了新技术，从而大大降低了生产成本。", py: "Gōngsī yǐnjìnle xīn jìshù, cóng'ér dàdà jiàngdīle shēngchǎn chéngběn.", nl: "Het bedrijf voerde nieuwe technologie in, waardoor de productiekosten sterk daalden." },
    { cn: "我们应当加强交流，从而增进相互了解。", py: "Wǒmen yīngdāng jiāqiáng jiāoliú, cóng'ér zēngjìn xiānghù liǎojiě.", nl: "We moeten de uitwisseling versterken en zo het wederzijds begrip vergroten." },
    { cn: "通过每天坚持阅读，他扩大了词汇量，从而提高了写作水平。", py: "Tōngguò měi tiān jiānchí yuèdú, tā kuòdàle cíhuìliàng, cóng'ér tígāole xiězuò shuǐpíng.", nl: "Door elke dag te lezen breidde hij zijn woordenschat uit, en zo werd zijn schrijfniveau beter." }
  ],
  nuance: [
    { h: "从而 of 因而?",
      p: "Beide geven een gevolg in schrijftaal. 因而 (daarom) past na elke oorzaak, ook na een situatie of het weer. Na 因而 mag een nieuw onderwerp komen. 从而 past alleen als het eerste deel een maatregel of handeling is die het resultaat oplevert.",
      ex: [
        { cn: "这里交通方便，因而房价比较高。", py: "Zhèlǐ jiāotōng fāngbiàn, yīn'ér fángjià bǐjiào gāo.", nl: "Het openbaar vervoer is hier goed, daarom zijn de huizenprijzen vrij hoog." },
        { cn: "这里修建了地铁，从而方便了居民出行。", py: "Zhèlǐ xiūjiànle dìtiě, cóng'ér fāngbiànle jūmín chūxíng.", nl: "Hier is een metro aangelegd, waardoor bewoners makkelijker reizen." }
      ] },
    { h: "从而 of 以便?",
      p: "以便 (yǐbiàn) geeft een doel: \"zodat, om ... te\". Het doel is nog niet bereikt, dus er staat geen 了 achter het werkwoord. Na 以便 mag een eigen onderwerp komen: 以便我们联系您. 从而 geeft het resultaat dat uit de maatregel volgt, en kan wel met 了.",
      ex: [
        { cn: "请提前到达，以便工作人员安排座位。", py: "Qǐng tíqián dàodá, yǐbiàn gōngzuò rényuán ānpái zuòwèi.", nl: "Kom op tijd, zodat het personeel de plaatsen kan indelen." },
        { cn: "学校延长了开放时间，从而方便了学生学习。", py: "Xuéxiào yánchángle kāifàng shíjiān, cóng'ér fāngbiànle xuésheng xuéxí.", nl: "De school verlengde de openingstijden, waardoor studenten makkelijker kunnen studeren." }
      ] },
    { h: "Spreektaal: 这样就 of 所以",
      p: "从而 hoort bij nieuws, rapporten en essays. In een gesprek klinkt het stijf. Zeg dan 这样就 (zo ... dan) of 这样一来 (op die manier), of gewoon 所以.",
      ex: [
        { cn: "我每天早点出门，这样就不会迟到了。", py: "Wǒ měi tiān zǎo diǎn chūmén, zhèyàng jiù bú huì chídào le.", nl: "Ik ga elke dag wat eerder de deur uit, zo kom ik niet te laat." }
      ] }
  ],
  mistakes: [
    { wrong: "昨天下大雨，从而比赛取消了。", right: "昨天下大雨，因而比赛取消了。", why: "Regen is geen maatregel of handeling. Na een gewone oorzaak gebruik je 因而 of 所以." },
    { wrong: "请留下您的电话，从而我们联系您。", right: "请留下您的电话，以便我们联系您。", why: "Het gaat om een doel (zodat wij u kunnen bellen). Dat is 以便." },
    { wrong: "工厂改进了设备，从而产量提高了。", right: "工厂改进了设备，从而提高了产量。", why: "Na 从而 komt het werkwoord direct, met hetzelfde onderwerp. Zet geen nieuw onderwerp na 从而." },
    { wrong: "公司更新了系统，以便提高了效率。", right: "公司更新了系统，从而提高了效率。", why: "以便 is een doel dat nog niet bereikt is en kan niet met 了. Voor een bereikt resultaat gebruik je 从而." }
  ],
  vocab: [
    ["从而", "cóng'ér", "en daardoor, en zo (schrijftaal)"], ["拥堵", "yōngdǔ", "file, opstopping"], ["引进", "yǐnjìn", "invoeren, introduceren"],
    ["成本", "chéngběn", "kosten"], ["推广", "tuīguǎng", "breder invoeren, verspreiden"], ["设置", "shèzhì", "plaatsen, instellen"],
    ["志愿者", "zhìyuànzhě", "vrijwilliger"], ["掌握", "zhǎngwò", "beheersen, onder de knie krijgen"], ["效率", "xiàolǜ", "efficiëntie"], ["示范", "shìfàn", "voorbeeld (model-)"]
  ],
  dialogue: [
    ["记者", "新的智能信号灯运行半年了，效果怎么样？", "Xīn de zhìnéng xìnhàodēng yùnxíng bàn nián le, xiàoguǒ zěnmeyàng?", "De nieuwe slimme verkeerslichten werken nu een half jaar. Wat is het effect?"],
    ["负责人", "系统能根据车流自动调整时间，从而缩短了等待时间。", "Xìtǒng néng gēnjù chēliú zìdòng tiáozhěng shíjiān, cóng'ér suōduǎnle děngdài shíjiān.", "Het systeem past de tijden automatisch aan het verkeer aan, waardoor de wachttijd korter is geworden."],
    ["记者", "有具体数据吗？", "Yǒu jùtǐ shùjù ma?", "Zijn er concrete cijfers?"],
    ["负责人", "高峰时段平均车速提高了百分之十五，交通事故因而也有所减少。", "Gāofēng shíduàn píngjūn chēsù tígāole bǎi fēn zhī shíwǔ, jiāotōng shìgù yīn'ér yě yǒu suǒ jiǎnshǎo.", "In de spits ligt de gemiddelde snelheid vijftien procent hoger. Daardoor zijn er ook iets minder ongelukken."],
    ["记者", "下一步有什么计划？", "Xià yí bù yǒu shénme jìhuà?", "Wat is de volgende stap?"],
    ["负责人", "我们打算在全市推广这个系统，从而进一步提高道路效率。", "Wǒmen dǎsuan zài quán shì tuīguǎng zhège xìtǒng, cóng'ér jìn yí bù tígāo dàolù xiàolǜ.", "We willen het systeem in de hele stad invoeren en zo de wegen nog efficiënter maken."]
  ],
  reading: {
    title: "社区垃圾分类",
    lines: [
      { cn: "两年前，某社区开始实行垃圾分类。", py: "Liǎng nián qián, mǒu shèqū kāishǐ shíxíng lājī fēnlèi.", nl: "Twee jaar geleden begon een woonwijk met afvalscheiding." },
      { cn: "社区在每栋楼下设置了四种颜色的垃圾桶，从而方便了居民投放。", py: "Shèqū zài měi dòng lóu xià shèzhìle sì zhǒng yánsè de lājītǒng, cóng'ér fāngbiànle jūmín tóufàng.", nl: "Bij elk gebouw zette de wijk afvalbakken in vier kleuren neer, waardoor bewoners hun afval makkelijker kwijt konden." },
      { cn: "志愿者每天早晚在现场指导，从而帮助老人尽快掌握了分类方法。", py: "Zhìyuànzhě měi tiān zǎowǎn zài xiànchǎng zhǐdǎo, cóng'ér bāngzhù lǎorén jǐnkuài zhǎngwòle fēnlèi fāngfǎ.", nl: "Vrijwilligers gaven elke ochtend en avond ter plekke uitleg, zodat ouderen het scheiden snel onder de knie kregen." },
      { cn: "社区还对分类正确的家庭给予积分奖励，以便鼓励更多人参与。", py: "Shèqū hái duì fēnlèi zhèngquè de jiātíng jǐyǔ jīfēn jiǎnglì, yǐbiàn gǔlì gèng duō rén cānyù.", nl: "Gezinnen die goed scheidden, kregen ook punten als beloning, om meer mensen te laten meedoen." },
      { cn: "社区与回收公司合作，集中处理可回收垃圾，从而减少了焚烧量。", py: "Shèqū yǔ huíshōu gōngsī hézuò, jízhōng chǔlǐ kě huíshōu lājī, cóng'ér jiǎnshǎole fénshāoliàng.", nl: "De wijk werkte samen met een recyclingbedrijf en verwerkte recyclebaar afval centraal. Zo werd er minder verbrand." },
      { cn: "由于居民参与度高，该社区因而被评为全市环保示范社区。", py: "Yóuyú jūmín cānyùdù gāo, gāi shèqū yīn'ér bèi píngwéi quán shì huánbǎo shìfàn shèqū.", nl: "Omdat de bewoners goed meededen, werd de wijk uitgeroepen tot milieuvoorbeeld van de stad." },
      { cn: "负责人表示，下一步将推广电子积分卡，从而进一步提高管理效率。", py: "Fùzérén biǎoshì, xià yí bù jiāng tuīguǎng diànzǐ jīfēnkǎ, cóng'ér jìn yí bù tígāo guǎnlǐ xiàolǜ.", nl: "De verantwoordelijke zegt dat de volgende stap een elektronische puntenkaart is, om het beheer nog efficiënter te maken." }
    ],
    questions: [
      { type: "mc", q: "Waarom kregen gezinnen punten?",
        options: ["Om meer mensen te laten meedoen.", "Om ouderen te helpen.", "Omdat ze minder afval hadden.", "Omdat de wijk een prijs had gewonnen."], answer: 0,
        why: ["Goed: 以便鼓励更多人参与.", "Ouderen kregen hulp van vrijwilligers, niet via punten.", "Punten waren voor goed scheiden, niet voor minder afval.", "De prijs kwam later en was niet de reden voor de punten."] },
      { type: "mc", q: "Hoe werd er minder afval verbrand?",
        options: ["Door samen met een recyclingbedrijf recyclebaar afval centraal te verwerken.", "Door bakken in vier kleuren neer te zetten.", "Door vrijwilligers die uitleg gaven.", "Door een elektronische puntenkaart."], answer: 0,
        why: ["Goed: 与回收公司合作……从而减少了焚烧量.", "De bakken maakten het weggooien makkelijker, niet het verbranden minder.", "De vrijwilligers hielpen ouderen met scheiden.", "De puntenkaart is nog een plan voor later."] },
      { type: "mc", q: "社区在每栋楼下设置了垃圾桶，从而方便了居民投放。Wat drukt 从而 hier uit?",
        options: ["Het resultaat van de maatregel: weggooien werd makkelijker.", "Het doel dat de wijk nog wil bereiken.", "De reden waarom de bakken er kwamen.", "Een tegenstelling met de vorige zin."], answer: 0,
        why: ["Goed: maatregel (bakken), dan 从而 + resultaat (方便了).", "Een doel zou 以便 zijn; hier is het resultaat bereikt (了).", "De reden staat niet na 从而. 从而 geeft het gevolg.", "Er is geen tegenstelling; dat zou 然而 zijn."] }
    ]
  },
  questions: [
    { type: "mc", q: "工厂更新了设备，___提高了生产效率。",
      options: ["从而", "以便", "然而", "尽管"], answer: 0,
      why: ["Goed: maatregel, dan 从而 + bereikt resultaat.", "以便 is een doel en kan niet met 了.", "然而 betekent \"maar\": er is geen tegenstelling.", "尽管 betekent \"hoewel\"."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["昨天下大雨，从而比赛取消了。", "昨天下大雨，因而比赛取消了。", "学校增加了图书，从而丰富了学生的课余生活。", "我们改进了方法，从而节省了时间。"], answer: 0,
      why: ["Goed, deze is fout: regen is geen maatregel. Gebruik 因而 of 所以.", "Deze klopt: 因而 past na een gewone oorzaak.", "Deze klopt: maatregel (boeken), dan resultaat.", "Deze klopt: handeling (methode verbeteren), dan resultaat."] },
    { type: "mc", q: "\"Laat uw telefoonnummer achter, zodat wij contact met u kunnen opnemen.\"",
      options: ["请留下电话号码，以便我们与您联系。", "请留下电话号码，从而我们与您联系。", "请留下电话号码，因而我们与您联系。", "请留下电话号码，以便我们与您联系了。"], answer: 0,
      why: ["Goed: een doel = 以便, met een eigen onderwerp erna.", "从而 geeft een resultaat, geen doel, en neemt geen nieuw onderwerp.", "因而 betekent \"daarom\": het nummer is geen oorzaak.", "以便 gaat over iets wat nog moet gebeuren. Daar past geen 了."] },
    { type: "mc", q: "这里交通方便，___房价比较高。",
      options: ["因而", "从而", "以便", "尽管"], answer: 0,
      why: ["Goed: een situatie als oorzaak, en een nieuw onderwerp (房价). Dat is 因而.", "从而 vraagt om een maatregel, en er volgt geen nieuw onderwerp.", "以便 geeft een doel. Hoge prijzen zijn geen doel.", "尽管 betekent \"hoewel\": er is geen tegenstelling."] },
    { type: "mc", q: "Je vertelt een vriend: 我们改进了方法，从而节省了时间。Welke uitdrukking past in een gesprek in plaats van 从而?",
      options: ["这样就", "以便", "由此可见", "尽管"], answer: 0,
      why: ["Goed: 我们改进了方法，这样就节省了时间。", "以便 is ook schrijftaal en geeft een doel, geen resultaat.", "由此可见 trekt een conclusie uit bewijs, en is ook formeel.", "尽管 betekent \"hoewel\"."] },
    { type: "mc", q: "政府加大了投入，从而减少了交通拥堵。Wat betekent 从而 hier?",
      options: ["En daardoor", "Om ... te", "Hoewel", "Hieruit blijkt"], answer: 0,
      why: ["Goed: de investering leidde tot minder files.", "\"Om ... te\" (doel) is 以便.", "\"Hoewel\" is 虽然 of 尽管.", "\"Hieruit blijkt\" is 由此可见."] },
    { type: "order", q: "Zet in de goede volgorde: \"Het bedrijf voerde nieuwe technologie in en verlaagde zo de kosten.\"",
      tokens: [["公司", "gōngsī"], ["引进了新技术", "yǐnjìnle xīn jìshù"], ["从而", "cóng'ér"], ["降低了", "jiàngdīle"], ["成本", "chéngběn"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Hij oefende elke dag en verbeterde zo zijn uitspraak.\"",
      tokens: [["他", "tā"], ["每天坚持练习", "měi tiān jiānchí liànxí"], ["从而", "cóng'ér"], ["改善了", "gǎishànle"], ["发音", "fāyīn"]] },
    { type: "fill", q: "城市修建了地铁，___方便了居民出行。(De stad bouwde een metro en maakte het zo makkelijker voor bewoners om te reizen.)", answers: ["从而", "因而"],
      hint: "Welk formeel woord van twee tekens betekent \"en zo, waardoor\"?", why: "Maatregel (metro) + 从而 + resultaat (方便了). 因而 kan ook." },
    { type: "open", q: "Vertaal (rapport): \"De school verlengde de openingstijden van de bibliotheek, waardoor studenten makkelijker kunnen studeren.\"",
      model: ["学校延长了图书馆的开放时间，从而方便了学生学习。", "学校延长了图书馆开放时间，从而为学生学习提供了方便。"],
      tip: "Check: eerst de maatregel, dan 从而 + werkwoord. Geen nieuw onderwerp direct na 从而." },
    { type: "open", q: "Schrijf een zin voor een beleidsplan: een maatregel en het verwachte resultaat, met 从而.",
      model: ["我们将增加公交线路，从而减少私家车的使用。", "政府应鼓励企业创新，从而推动经济发展。"],
      tip: "Check: is het eerste deel een maatregel? Komt na 从而 direct een werkwoord zoals 减少, 提高 of 推动?" }
  ],
  review: [
    { type: "mc", q: "该市大力推广新能源汽车，___减少了空气污染。",
      options: ["从而", "以便", "尽管", "即使"], answer: 0,
      why: ["Goed: maatregel, dan 从而 + bereikt resultaat.", "以便 is een doel en kan niet met 了.", "尽管 betekent \"hoewel\".", "即使 betekent \"zelfs als\" en vraagt om 也."] },
    { type: "mc", q: "\"Meld u vooraf aan, zodat wij de plaatsen kunnen regelen.\"",
      options: ["请提前报名，以便我们安排座位。", "请提前报名，从而我们安排座位。", "请提前报名，以便我们安排了座位。", "请提前报名，因而我们安排座位。"], answer: 0,
      why: ["Goed: een doel = 以便.", "从而 geeft een resultaat en neemt geen nieuw onderwerp.", "以便 gaat over iets wat nog moet gebeuren; geen 了.", "因而 betekent \"daarom\": aanmelden is hier geen oorzaak."] },
    { type: "mc", q: "由于台风影响，航班___全部取消。",
      options: ["因而", "从而", "以便", "由此可见"], answer: 0,
      why: ["Goed: een tyfoon is een oorzaak, geen maatregel. Dat is 因而.", "从而 vraagt om een maatregel of handeling in het eerste deel.", "以便 geeft een doel. Het annuleren is geen doel van de tyfoon.", "由此可见 trekt een conclusie uit bewijs, het geeft geen gevolg."] }
  ]
})
