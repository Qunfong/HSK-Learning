({
  id: "04", slug: "naizhi", title: "乃至", sub: "En zelfs, tot aan",
  canDo: "Je kunt nu in formele tekst een reeks laten oplopen naar het grootste punt met 乃至, en je weet dat je in gesprek 甚至 zegt.",
  guess: {
    q: "这个问题影响了整个城市，乃至全国。Wat betekent dit, denk je?",
    options: ["Het probleem raakt de hele stad en zelfs het hele land.", "Het probleem raakt de hele stad, maar niet het land.", "Het probleem raakt het land, maar niet de stad.", "Het probleem raakt de stad of het hele land."], answer: 0,
    why: ["Goed: 乃至 voegt iets groters toe: \"en zelfs\".", "乃至 sluit niets uit; het breidt uit.", "De stad hoort er ook bij; 乃至 voegt alleen toe.", "乃至 is geen keuze zoals 或者."]
  },
  problem: "Je somt dingen op en het laatste is het grootste of meest verrassende. In het Nederlands zeg je \"en zelfs\" of \"tot aan\". In schrijftaal is dat 乃至 (nǎizhì). In gesprek zeg je 甚至.",
  pattern: [
    { l: "A", v: "个人", c: 3 }, { l: "B", v: "家庭", c: 4 }, { l: "en zelfs", v: "乃至", c: 2, key: true }, { l: "grootste C", v: "整个社会", c: 5 }
  ],
  patternCap: "A、B 乃至 C · C is het grootste of verst gaande punt · ook: 乃至于 · spreektaal: 甚至",
  rules: [
    "乃至 staat vóór het laatste, grootste deel van de reeks.",
    "De reeks loopt op: van klein naar groot, of van gewoon naar verrassend.",
    "Meestal verbind je zelfstandige naamwoorden: 城市乃至国家. Vóór een werkwoord gebruik je 甚至.",
    "Het is schrijftaal. In gesprek zeg je 甚至."
  ],
  pitfall: "Zet het grootste deel achteraan. 全世界乃至中国 is fout. Zeg 中国乃至全世界.",
  examples: [
    { cn: "这项技术将改变整个行业，乃至整个社会。", py: "Zhè xiàng jìshù jiāng gǎibiàn zhěnggè hángyè, nǎizhì zhěnggè shèhuì.", nl: "Deze technologie zal de hele sector veranderen, en zelfs de hele samenleving." },
    { cn: "环境污染影响着个人、家庭乃至后代的健康。", py: "Huánjìng wūrǎn yǐngxiǎngzhe gèrén, jiātíng nǎizhì hòudài de jiànkāng.", nl: "Milieuvervuiling tast de gezondheid aan van individuen, gezinnen en zelfs volgende generaties." },
    { cn: "他的研究在中国乃至全世界都很有影响。", py: "Tā de yánjiū zài Zhōngguó nǎizhì quán shìjiè dōu hěn yǒu yǐngxiǎng.", nl: "Zijn onderzoek heeft veel invloed in China en zelfs in de hele wereld." },
    { cn: "这个错误可能造成几个月乃至几年的损失。", py: "Zhège cuòwù kěnéng zàochéng jǐ ge yuè nǎizhì jǐ nián de sǔnshī.", nl: "Deze fout kan maanden en zelfs jaren aan schade veroorzaken." }
  ],
  nuance: [
    { h: "乃至 of 甚至?",
      p: "Allebei betekenen ze \"en zelfs\". 甚至 is spreektaal én schrijftaal. Het kan ook als bijwoord vóór een werkwoord staan, vaak met 连……都. 乃至 is alleen schrijftaal. Het verbindt vooral delen van een reeks, meestal zelfstandige naamwoorden. Vóór een werkwoord gebruik je dus 甚至.",
      ex: [
        { cn: "他忙得甚至连饭都没吃。", py: "Tā máng de shènzhì lián fàn dōu méi chī.", nl: "Hij had het zo druk dat hij zelfs niet gegeten had." },
        { cn: "这项改革影响到全省乃至全国。", py: "Zhè xiàng gǎigé yǐngxiǎng dào quán shěng nǎizhì quánguó.", nl: "Deze hervorming raakt de provincie en zelfs het hele land." }
      ] },
    { h: "乃至 of 以至于?",
      p: "Ze lijken op elkaar, maar betekenen iets anders. 乃至 zet het laatste deel van een reeks: \"en zelfs\". 以至于 (yǐzhìyú) leidt een gevolg in: \"zodat, met als gevolg dat\". Staat er een hele zin met een gevolg achter? Dan is het 以至于.",
      ex: [
        { cn: "雨下得很大，以至于很多航班都取消了。", py: "Yǔ xià de hěn dà, yǐzhìyú hěn duō hángbān dōu qǔxiāo le.", nl: "Het regende zo hard dat veel vluchten werden geschrapt." }
      ] },
    { h: "Wat telt als \"groter\"?",
      p: "De reeks hoeft niet letterlijk in grootte op te lopen. Het laatste deel kan ook verder in de tijd liggen, belangrijker zijn of meer verrassen. Denk aan 几个月乃至几年 (tijd) of 个人、企业乃至政府 (verantwoordelijkheid). Draai je de volgorde om, dan klopt de zin niet meer.",
      ex: [
        { cn: "解决这个问题需要个人、企业乃至政府的共同努力。", py: "Jiějué zhège wèntí xūyào gèrén, qǐyè nǎizhì zhèngfǔ de gòngtóng nǔlì.", nl: "Om dit probleem op te lossen moeten individuen, bedrijven en zelfs de overheid samen hun best doen." }
      ] }
  ],
  mistakes: [
    { wrong: "他的研究在全世界乃至中国都很有影响。", right: "他的研究在中国乃至全世界都很有影响。", why: "De reeks loopt op. Het grootste deel (全世界) staat achter 乃至." },
    { wrong: "他忙得乃至连饭都没吃。", right: "他忙得甚至连饭都没吃。", why: "Vóór een werkwoord of 连……都 staat 甚至. 乃至 verbindt delen van een reeks." },
    { wrong: "雨下得很大，乃至很多航班都取消了。", right: "雨下得很大，以至于很多航班都取消了。", why: "Hier volgt een gevolg, geen groter deel van een reeks. Voor \"zodat\" gebruik je 以至于." }
  ],
  vocab: [
    ["乃至", "nǎizhì", "en zelfs, tot aan (formeel)"], ["行业", "hángyè", "sector, branche"], ["污染", "wūrǎn", "vervuiling, vervuilen"],
    ["后代", "hòudài", "nakomelingen"], ["造成", "zàochéng", "veroorzaken"], ["损失", "sǔnshī", "verlies, schade"],
    ["人工智能", "réngōng zhìnéng", "kunstmatige intelligentie"], ["医疗", "yīliáo", "gezondheidszorg"], ["终身", "zhōngshēn", "levenslang"], ["分解", "fēnjiě", "afbreken, ontbinden"]
  ],
  dialogue: [
    ["主持人", "您怎么看人工智能的发展？", "Nín zěnme kàn réngōng zhìnéng de fāzhǎn?", "Hoe kijkt u naar de ontwikkeling van AI?"],
    ["教授", "它会影响教育、医疗乃至整个社会。", "Tā huì yǐngxiǎng jiàoyù, yīliáo nǎizhì zhěnggè shèhuì.", "Het zal onderwijs, zorg en zelfs de hele samenleving beïnvloeden."],
    ["主持人", "影响的范围有多大？", "Yǐngxiǎng de fànwéi yǒu duō dà?", "Hoe groot is de reikwijdte?"],
    ["教授", "不只在中国。在亚洲乃至全世界，很多人都在研究它。", "Bù zhǐ zài Zhōngguó. Zài Yàzhōu nǎizhì quán shìjiè, hěn duō rén dōu zài yánjiū tā.", "Niet alleen in China. In Azië en zelfs de hele wereld onderzoeken veel mensen het."],
    ["主持人", "那我们普通人应该怎么准备？", "Nà wǒmen pǔtōng rén yīnggāi zěnme zhǔnbèi?", "Hoe moeten gewone mensen zich dan voorbereiden?"],
    ["教授", "终身学习。这关系到个人、家庭乃至后代的发展。", "Zhōngshēn xuéxí. Zhè guānxì dào gèrén, jiātíng nǎizhì hòudài de fāzhǎn.", "Levenslang leren. Dat raakt de ontwikkeling van individuen, gezinnen en zelfs volgende generaties."]
  ],
  reading: {
    title: "塑料污染",
    lines: [
      { cn: "塑料给人们的生活带来了很大方便。", py: "Sùliào gěi rénmen de shēnghuó dàiláile hěn dà fāngbiàn.", nl: "Plastic heeft het leven van mensen veel makkelijker gemaakt." },
      { cn: "然而，废弃塑料正在污染河流、湖泊乃至整个海洋。", py: "Rán'ér, fèiqì sùliào zhèngzài wūrǎn héliú, húpō nǎizhì zhěnggè hǎiyáng.", nl: "Maar weggegooid plastic vervuilt rivieren, meren en zelfs de hele oceaan." },
      { cn: "研究发现，塑料微粒已经进入了鱼类的身体。", py: "Yánjiū fāxiàn, sùliào wēilì yǐjīng jìnrùle yúlèi de shēntǐ.", nl: "Onderzoek toont aan dat microplastics al in het lichaam van vissen zitten." },
      { cn: "通过食物链，这些微粒可能影响人类乃至后代的健康。", py: "Tōngguò shíwùliàn, zhèxiē wēilì kěnéng yǐngxiǎng rénlèi nǎizhì hòudài de jiànkāng.", nl: "Via de voedselketen kunnen deze deeltjes de gezondheid van mensen en zelfs van volgende generaties aantasten." },
      { cn: "一个塑料袋的分解需要几十年乃至几百年。", py: "Yí ge sùliàodài de fēnjiě xūyào jǐshí nián nǎizhì jǐbǎi nián.", nl: "Een plastic zak doet er tientallen en zelfs honderden jaren over om af te breken." },
      { cn: "为此，许多国家开始限制使用塑料袋。", py: "Wèi cǐ, xǔduō guójiā kāishǐ xiànzhì shǐyòng sùliàodài.", nl: "Daarom beperken veel landen nu het gebruik van plastic zakken." },
      { cn: "专家认为，减少塑料需要个人、企业乃至政府的共同努力。", py: "Zhuānjiā rènwéi, jiǎnshǎo sùliào xūyào gèrén, qǐyè nǎizhì zhèngfǔ de gòngtóng nǔlì.", nl: "Volgens experts vraagt minder plastic om een gezamenlijke inzet van individuen, bedrijven en zelfs de overheid." },
      { cn: "每个人都可以从自带购物袋开始做起。", py: "Měi ge rén dōu kěyǐ cóng zì dài gòuwùdài kāishǐ zuòqǐ.", nl: "Iedereen kan beginnen met een eigen boodschappentas." }
    ],
    questions: [
      { type: "mc", q: "Hoe lang duurt het voordat een plastic zak afbreekt?",
        options: ["Tientallen en zelfs honderden jaren.", "Een paar maanden.", "Precies tien jaar.", "Een paar jaar."], answer: 0,
        why: ["Goed: 需要几十年乃至几百年.", "In de tekst gaat het om jaren, niet om maanden.", "几十年 is \"tientallen jaren\", geen precies getal.", "几十年 is veel langer dan een paar jaar."] },
      { type: "mc", q: "Wie moet volgens de experts iets doen?",
        options: ["Individuen, bedrijven en zelfs de overheid.", "Alleen de overheid.", "Alleen bedrijven.", "Alleen wetenschappers."], answer: 0,
        why: ["Goed: 个人、企业乃至政府的共同努力.", "乃至 voegt de overheid toe. De anderen horen er ook bij.", "Bedrijven zijn er één van de drie.", "Wetenschappers staan niet in dat rijtje."] },
      { type: "mc", q: "污染河流、湖泊乃至整个海洋. Wat laat 乃至 hier zien?",
        options: ["De vervuiling reikt steeds verder, tot aan de hele oceaan.", "Alleen de oceaan is vervuild.", "De rivieren zijn méér vervuild dan de oceaan.", "Óf de rivieren óf de oceaan is vervuild."], answer: 0,
        why: ["Goed: 乃至 zet het grootste deel van de reeks achteraan.", "乃至 sluit niets uit. Rivieren en meren horen er ook bij.", "乃至 zegt iets over bereik, niet over de mate van vervuiling.", "乃至 is geen keuze zoals 或者."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Dit beleid raakt de provincie en zelfs het hele land.\"",
      options: ["这项政策影响到全省乃至全国。", "这项政策影响到全国乃至全省。", "这项政策乃至影响到全省全国。", "这项政策影响到全省或者全国。"], answer: 0,
      why: ["Goed: het grootste deel (全国) staat na 乃至.", "De reeks loopt op: het grootste deel komt achteraan.", "乃至 staat vóór het laatste deel van de reeks.", "或者 is een keuze, geen \"en zelfs\"."] },
    { type: "mc", q: "Welk woord gebruik je in een gesprek met een vriend in plaats van 乃至?",
      options: ["甚至", "或者", "但是", "所以"], answer: 0,
      why: ["Goed: 甚至 = zelfs, de spreektaal-variant.", "或者 is een keuze (\"of\").", "但是 is een tegenstelling (\"maar\").", "所以 geeft een gevolg (\"dus\")."] },
    { type: "order", q: "Zet in de goede volgorde: \"Deze zaak raakt het bedrijf en zelfs de hele sector.\"",
      tokens: [["这件事", "zhè jiàn shì"], ["影响到", "yǐngxiǎng dào"], ["公司", "gōngsī"], ["乃至", "nǎizhì"], ["整个行业", "zhěnggè hángyè"]] },
    { type: "mc", q: "他的作品在亚洲乃至___都很有名。",
      options: ["全世界", "一个城市", "他家附近", "一个小村"], answer: 0,
      why: ["Goed: na 乃至 komt iets groters dan Azië.", "Een stad is kleiner dan Azië: de reeks moet oplopen.", "De buurt is kleiner dan Azië: de reeks moet oplopen.", "Een dorp is kleiner dan Azië: de reeks moet oplopen."] },
    { type: "mc", q: "\"Hij had het zo druk dat hij zelfs niet gegeten had.\"",
      options: ["他忙得甚至连饭都没吃。", "他忙得乃至连饭都没吃。", "他忙得连饭甚至都没吃。", "他忙得甚至连饭都吃了。"], answer: 0,
      why: ["Goed: vóór 连……都 + werkwoord staat 甚至.", "乃至 verbindt delen van een reeks, niet een werkwoord.", "甚至 staat vóór 连, niet erachter.", "都吃了 betekent dat hij wél at: de ontkenning 没 ontbreekt."] },
    { type: "mc", q: "雨下得很大，以至于很多航班都取消了。Wat betekent 以至于 hier?",
      options: ["zodat, met als gevolg dat", "en zelfs (in een opsomming)", "ondanks dat", "voordat"], answer: 0,
      why: ["Goed: 以至于 leidt een gevolg in.", "Dat is 乃至. 以至于 lijkt erop, maar geeft een gevolg.", "\"Ondanks\" is 尽管.", "\"Voordat\" is 以前 of 之前."] },
    { type: "mc", q: "Je vertelt een vriend: \"Mijn hele familie, zelfs mijn opa, speelt dit spel.\" Welke zin past het best?",
      options: ["我们全家，甚至我爷爷，都玩这个游戏。", "我们全家乃至我爷爷，都玩这个游戏。", "我们全家，或者我爷爷，都玩这个游戏。", "我爷爷，甚至我们全家，都玩这个游戏。"], answer: 0,
      why: ["Goed: in gesprek zeg je 甚至, voor het meest verrassende deel.", "乃至 is schrijftaal en klinkt tegen een vriend stijf.", "或者 is een keuze, geen \"zelfs\".", "Het verrassende deel (opa) moet na 甚至 staan, niet ervoor."] },
    { type: "order", q: "Zet in de goede volgorde: \"Dit beleid heeft invloed op het individu en zelfs op de hele samenleving.\"",
      tokens: [["这项政策", "zhè xiàng zhèngcè"], ["对个人", "duì gèrén"], ["乃至", "nǎizhì"], ["整个社会", "zhěnggè shèhuì"], ["都有影响", "dōu yǒu yǐngxiǎng"]] },
    { type: "fill", q: "这种病在亚洲___全世界都很常见。(Deze ziekte komt in Azië en zelfs in de hele wereld veel voor.)", answers: ["乃至", "乃至于", "甚至"],
      hint: "Welk formeel woord betekent \"en zelfs\"?", why: "乃至 staat vóór het grootste deel: 亚洲乃至全世界. 甚至 kan ook, maar is minder formeel." },
    { type: "open", q: "Schrijf een formele zin met 乃至 over iets dat steeds verder reikt.",
      model: ["这个问题影响到学校乃至整个城市。", "学好中文对学习乃至工作都有帮助。"],
      tip: "Check: staat het grootste of verst gaande deel achter 乃至?" },
    { type: "open", q: "Vertaal (formeel): \"Deze ontdekking is belangrijk voor China en zelfs voor de hele wereld.\"",
      model: ["这一发现对中国乃至全世界都很重要。", "这项发现对中国乃至全世界都具有重要意义。"],
      tip: "Check: 中国 vóór 乃至, 全世界 erachter, en 都 vóór het werkwoord." }
  ],
  review: [
    { type: "mc", q: "\"Deze fout kan weken en zelfs maanden vertraging geven.\"",
      options: ["这个错误可能造成几周乃至几个月的延误。", "这个错误可能造成几个月乃至几周的延误。", "这个错误乃至可能造成几周几个月的延误。", "这个错误可能造成几周或者几个月的延误。"], answer: 0,
      why: ["Goed.", "De reeks loopt op: maanden komen na weken.", "乃至 staat vóór het laatste deel van de reeks.", "或者 is \"of\", niet \"en zelfs\"."] },
    { type: "mc", q: "Een rapport: 这一发现对医学___整个科学界都有重要意义。",
      options: ["乃至", "不但", "因此", "即使"], answer: 0,
      why: ["Goed: geneeskunde en zelfs de hele wetenschap.", "不但 staat vóór het eerste deel en vraagt om 而且.", "因此 geeft een gevolg (\"daarom\").", "即使 betekent \"zelfs als\" en vraagt om 也."] },
    { type: "mc", q: "\"Dit probleem bestaat in Europa en zelfs in de hele wereld.\" (rapport)",
      options: ["这个问题在欧洲乃至全世界都存在。", "这个问题在全世界乃至欧洲都存在。", "这个问题乃至在欧洲全世界都存在。", "这个问题在欧洲以至于全世界都存在。"], answer: 0,
      why: ["Goed: Europa, en zelfs (乃至) de hele wereld.", "De reeks loopt op: de hele wereld komt achteraan.", "乃至 staat vóór het laatste deel van de reeks.", "以至于 leidt een gevolg in (\"zodat\"), geen deel van een reeks."] }
  ]
})
