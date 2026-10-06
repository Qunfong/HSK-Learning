({
  id: "14", slug: "jiner", title: "进而", sub: "En vervolgens, en verder nog",
  canDo: "Je kunt nu in formele tekst een volgende, verdere stap toevoegen met 进而, je houdt het uit elkaar van 从而 en 然后, en je weet dat je in gesprek 然后再 zegt.",
  guess: {
    q: "我们应先了解用户需求，进而改进产品设计。Wat doet 进而 hier, denk je?",
    options: ["Het voegt een volgende stap toe die op de eerste voortbouwt.", "Het noemt een tegenstelling met de eerste stap.", "Het zegt dat beide stappen tegelijk gebeuren.", "Het geeft de reden voor de eerste stap."], answer: 0,
    why: ["Goed: eerst A (begrijpen), daarna verder naar B (verbeteren).", "Een tegenstelling zou 反而 of 但是 zijn.", "\"Tegelijk\" is 同时. 进而 geeft een volgorde.", "Een reden zou 因为 zijn. Hier staat B ná A."]
  },
  problem: "In rapporten en betogen beschrijf je vaak stappen die op elkaar voortbouwen: eerst iets begrijpen, en dan verder gaan. In het Nederlands zeg je \"en vervolgens\" of \"en vandaar verder\". In formeel Chinees gebruik je 进而 (jìn'ér). In spreektaal zeg je 然后再 of 再进一步.",
  pattern: [
    { l: "eerste stap", v: "先了解问题", c: 1 }, { l: "en verder", v: "进而", c: 2, key: true },
    { l: "volgende stap", v: "找到解决办法", c: 4 }
  ],
  patternCap: "(先/首先) A，进而 + B (verdere stap) · kettingeffect: A 影响 X，进而影响 Y · spreektaal: 先……，然后再……",
  rules: [
    "进而 staat aan het begin van het tweede deel, direct vóór het werkwoord.",
    "Het onderwerp is meestal hetzelfde en wordt niet herhaald.",
    "B bouwt voort op A: een volgende, vaak grotere of diepere stap. Vaak staat 先 of 首先 in het eerste deel.",
    "Ook voor een kettingeffect: A beïnvloedt X, 进而 beïnvloedt Y.",
    "Na 进而 komt altijd een werkwoordgroep, geen los zelfstandig naamwoord."
  ],
  pitfall: "进而 is niet hetzelfde als 从而. 从而 noemt het resultaat dat A oplevert (\"waardoor\"). 进而 zet een nieuwe, verdere stap (\"en vervolgens\"). Is B gewoon het volgende moment, zonder verdieping? Dan is 然后 genoeg.",
  examples: [
    { cn: "我们应先了解用户的需求，进而改进产品设计。", py: "Wǒmen yīng xiān liǎojiě yònghù de xūqiú, jìn'ér gǎijìn chǎnpǐn shèjì.", nl: "We moeten eerst de behoeften van de gebruikers begrijpen en vervolgens het productontwerp verbeteren." },
    { cn: "空气污染会损害居民健康，进而影响整个城市的经济发展。", py: "Kōngqì wūrǎn huì sǔnhài jūmín jiànkāng, jìn'ér yǐngxiǎng zhěnggè chéngshì de jīngjì fāzhǎn.", nl: "Luchtvervuiling schaadt de gezondheid van inwoners en raakt vervolgens de economie van de hele stad." },
    { cn: "他先在本地开了一家小店，进而把生意扩展到全国。", py: "Tā xiān zài běndì kāile yì jiā xiǎo diàn, jìn'ér bǎ shēngyi kuòzhǎn dào quánguó.", nl: "Hij opende eerst een winkeltje in zijn eigen stad en breidde zijn zaak daarna uit naar het hele land." },
    { cn: "只有正视问题，才能分析原因，进而找到解决办法。", py: "Zhǐyǒu zhèngshì wèntí, cái néng fēnxī yuányīn, jìn'ér zhǎodào jiějué bànfǎ.", nl: "Alleen als je het probleem onder ogen ziet, kun je de oorzaken analyseren en vervolgens een oplossing vinden." }
  ],
  nuance: [
    { h: "进而 of 从而?",
      p: "从而 betekent \"waardoor, zodat\": B is het resultaat dat A oplevert. Vaak volgt 提高, 降低 of 实现. 进而 betekent \"en vervolgens verder\": B is een nieuwe stap die pas mogelijk wordt na A. Vraag jezelf: is B het effect van A (从而), of de volgende fase (进而)?",
      ex: [
        { cn: "公司引进了新技术，从而提高了生产效率。", py: "Gōngsī yǐnjìnle xīn jìshù, cóng'ér tígāole shēngchǎn xiàolǜ.", nl: "Het bedrijf voerde nieuwe technologie in, waardoor de productie efficiënter werd." },
        { cn: "公司先在国内站稳脚跟，进而进入国际市场。", py: "Gōngsī xiān zài guónèi zhànwěn jiǎogēn, jìn'ér jìnrù guójì shìchǎng.", nl: "Het bedrijf kreeg eerst vaste voet in eigen land en betrad vervolgens de internationale markt." }
      ] },
    { h: "进而 of 然后?",
      p: "然后 is een neutraal \"daarna\" voor elke volgorde, ook alledaagse. 进而 is formeel en suggereert verdieping of uitbreiding. Voor eten en dan naar de film gebruik je dus 然后, niet 进而.",
      ex: [
        { cn: "我先吃饭，然后去看电影。", py: "Wǒ xiān chīfàn, ránhòu qù kàn diànyǐng.", nl: "Ik eet eerst, en daarna ga ik naar de film." },
        { cn: "我们先进行调查，进而提出改进建议。", py: "Wǒmen xiān jìnxíng diàochá, jìn'ér tíchū gǎijìn jiànyì.", nl: "We doen eerst onderzoek en doen vervolgens verbetervoorstellen." }
      ] },
    { h: "Spreektaal",
      p: "进而 hoort bij rapporten, nieuws en betogen. In een gesprek zeg je 先……，然后再…… of 再进一步…….",
      ex: [
        { cn: "先把问题弄清楚，然后再想办法。", py: "Xiān bǎ wèntí nòng qīngchu, ránhòu zài xiǎng bànfǎ.", nl: "Zoek eerst uit wat het probleem is, en bedenk dan een oplossing." }
      ] }
  ],
  mistakes: [
    { wrong: "我先吃了饭，进而去看电影。", right: "我先吃了饭，然后去看电影。", why: "Dit is een gewone volgorde zonder verdieping. 进而 is hier te formeel en te zwaar; gebruik 然后." },
    { wrong: "他先学会了中文，从而开始研究中国历史。", right: "他先学会了中文，进而开始研究中国历史。", why: "Geschiedenis onderzoeken is geen resultaat van Chinees leren, maar een volgende stap. Dat is 进而." },
    { wrong: "他们降低了价格，进而销量。", right: "他们降低了价格，进而扩大了销量。", why: "Na 进而 moet een werkwoord staan." },
    { wrong: "进而，我们要提高产品质量。", right: "我们要先保证产品质量，进而提高品牌影响力。", why: "进而 heeft een eerste stap nodig waarop het voortbouwt. Het opent geen tekst." }
  ],
  vocab: [
    ["进而", "jìn'ér", "en vervolgens, en verder"], ["从而", "cóng'ér", "waardoor, zodat"], ["需求", "xūqiú", "behoefte, vraag"],
    ["改进", "gǎijìn", "verbeteren"], ["损害", "sǔnhài", "schaden"], ["扩展", "kuòzhǎn", "uitbreiden"],
    ["正视", "zhèngshì", "onder ogen zien"], ["站稳脚跟", "zhànwěn jiǎogēn", "vaste voet krijgen"], ["恶性循环", "èxìng xúnhuán", "vicieuze cirkel"], ["开拓", "kāità", "openen, ontginnen (een markt)"]
  ],
  dialogue: [
    ["A", "我们的新产品为什么卖得不好？", "Wǒmen de xīn chǎnpǐn wèi shénme mài de bù hǎo?", "Waarom verkoopt ons nieuwe product slecht?"],
    ["B", "我觉得我们得先做个调查，了解用户到底需要什么。", "Wǒ juéde wǒmen děi xiān zuò ge diàochá, liǎojiě yònghù dàodǐ xūyào shénme.", "Ik denk dat we eerst onderzoek moeten doen naar wat gebruikers echt nodig hebben."],
    ["A", "然后呢？", "Ránhòu ne?", "En dan?"],
    ["B", "然后再根据结果改产品。报告里可以写：\"先了解用户需求，进而改进产品设计。\"", "Ránhòu zài gēnjù jiéguǒ gǎi chǎnpǐn. Bàogào li kěyǐ xiě: \"Xiān liǎojiě yònghù xūqiú, jìn'ér gǎijìn chǎnpǐn shèjì.\"", "Dan passen we het product aan op basis van de resultaten. In het rapport kun je schrijven: \"eerst de behoeften begrijpen, en vervolgens het ontwerp verbeteren\"."],
    ["A", "如果产品改好了，我们还可以再进一步，开拓海外市场。", "Rúguǒ chǎnpǐn gǎihǎo le, wǒmen hái kěyǐ zài jìn yí bù, kāità hǎiwài shìchǎng.", "Als het product beter is, kunnen we nog een stap verder gaan en de buitenlandse markt op."],
    ["B", "对，报告里就写\"进而开拓海外市场\"。", "Duì, bàogào li jiù xiě \"jìn'ér kāità hǎiwài shìchǎng\".", "Klopt, in het rapport schrijven we dan \"进而开拓海外市场\"."]
  ],
  reading: {
    title: "睡眠不足的连锁反应",
    lines: [
      { cn: "一项最新调查显示，超过一半的中学生睡眠不足。", py: "Yí xiàng zuì xīn diàochá xiǎnshì, chāoguò yíbàn de zhōngxuéshēng shuìmián bùzú.", nl: "Uit recent onderzoek blijkt dat meer dan de helft van de middelbare scholieren te weinig slaapt." },
      { cn: "长期睡眠不足会降低学生的注意力，进而影响学习成绩。", py: "Chángqī shuìmián bùzú huì jiàngdī xuésheng de zhùyìlì, jìn'ér yǐngxiǎng xuéxí chéngjì.", nl: "Langdurig slaaptekort vermindert de concentratie van leerlingen en raakt vervolgens hun schoolresultaten." },
      { cn: "成绩下降又会带来压力，使学生更难入睡。", py: "Chéngjì xiàjiàng yòu huì dàilái yālì, shǐ xuésheng gèng nán rùshuì.", nl: "Slechtere cijfers brengen weer stress, waardoor leerlingen nog moeilijker in slaap vallen." },
      { cn: "这样就形成了一个恶性循环。", py: "Zhèyàng jiù xíngchéngle yí ge èxìng xúnhuán.", nl: "Zo ontstaat een vicieuze cirkel." },
      { cn: "研究人员认为，学校应首先减少课后作业，从而保证学生的睡眠时间。", py: "Yánjiū rényuán rènwéi, xuéxiào yīng shǒuxiān jiǎnshǎo kèhòu zuòyè, cóng'ér bǎozhèng xuésheng de shuìmián shíjiān.", nl: "Volgens de onderzoekers moeten scholen eerst minder huiswerk geven, zodat leerlingen genoeg slaaptijd hebben." },
      { cn: "家长也应该限制孩子晚上使用手机。", py: "Jiāzhǎng yě yīnggāi xiànzhì háizi wǎnshang shǐyòng shǒujī.", nl: "Ook ouders moeten het telefoongebruik van hun kinderen 's avonds beperken." },
      { cn: "学生睡眠充足了，学习效率就会提高，进而增强自信心。", py: "Xuésheng shuìmián chōngzú le, xuéxí xiàolǜ jiù huì tígāo, jìn'ér zēngqiáng zìxìnxīn.", nl: "Als leerlingen genoeg slapen, leren ze efficiënter, en dat versterkt vervolgens hun zelfvertrouwen." },
      { cn: "报告指出，关注睡眠问题有助于保护学生健康，进而促进教育质量的整体提高。", py: "Bàogào zhǐchū, guānzhù shuìmián wèntí yǒu zhùyú bǎohù xuésheng jiànkāng, jìn'ér cùjìn jiàoyù zhìliàng de zhěngtǐ tígāo.", nl: "Volgens het rapport helpt aandacht voor slaap de gezondheid van leerlingen te beschermen, en bevordert het vervolgens de kwaliteit van het onderwijs als geheel." }
    ],
    questions: [
      { type: "mc", q: "Wat is volgens de tekst de vicieuze cirkel?",
        options: ["Slaaptekort, slechtere cijfers, stress, nog minder slaap.", "Te veel slaap, minder huiswerk, slechtere cijfers.", "Te veel telefoneren, minder vrienden, stress.", "Minder huiswerk, meer slaap, betere cijfers."], answer: 0,
        why: ["Goed: 睡眠不足 → 成绩下降 → 压力 → 更难入睡.", "Te veel slaap is in de tekst geen probleem.", "Over vrienden zegt de tekst niets.", "Dat is de oplossing, geen vicieuze cirkel."] },
      { type: "mc", q: "Wat moeten scholen volgens de onderzoekers eerst doen?",
        options: ["Minder huiswerk geven.", "Telefoons verbieden.", "Later beginnen met de lessen.", "Meer toetsen afnemen."], answer: 0,
        why: ["Goed: 学校应首先减少课后作业.", "Telefoongebruik beperken is een taak voor ouders: 家长……限制.", "Over begintijden staat niets in de tekst.", "Dat staat niet in de tekst."] },
      { type: "mc", q: "学习效率就会提高，进而增强自信心。Wat drukt 进而 hier uit?",
        options: ["Een verdere stap: na het beter leren groeit ook het zelfvertrouwen.", "Een tegenstelling: ze leren beter, maar hebben minder zelfvertrouwen.", "Een reden: ze leren beter omdat ze zelfvertrouwen hebben.", "Gelijktijdigheid: beter leren en zelfvertrouwen staan los van elkaar."], answer: 0,
        why: ["Goed: 进而 = en vervolgens verder.", "Een tegenstelling vraagt 反而 of 但是.", "进而 geeft geen reden; de volgorde is A dan B.", "进而 verbindt de stappen juist: B bouwt op A."] }
    ]
  },
  questions: [
    { type: "mc", q: "这家公司先在国内站稳脚跟，进而进入国际市场。Wat betekent dit?",
      options: ["Het bedrijf kreeg eerst vaste voet in eigen land en ging vervolgens de internationale markt op.", "Het bedrijf kreeg vaste voet in eigen land in plaats van op de internationale markt.", "Het bedrijf kreeg vaste voet in eigen land of op de internationale markt.", "Het bedrijf kreeg vaste voet in eigen land, maar ging niet de internationale markt op."], answer: 0,
      why: ["Goed: 先 A，进而 B = eerst A, en vervolgens verder naar B.", "进而 is geen \"in plaats van\"; dat zou 而不是 zijn.", "进而 geeft geen keuze; \"of\" is 或者.", "Er staat geen ontkenning; 进入 gebeurt wel."] },
    { type: "mc", q: "他先学会了中文，___开始研究中国历史。(Hij leerde eerst Chinees en ging vervolgens Chinese geschiedenis bestuderen.)",
      options: ["进而", "从而", "因而", "反而"], answer: 0,
      why: ["Goed: geschiedenis bestuderen is een volgende, diepere stap.", "从而 noemt een resultaat van A. Chinees leren levert niet vanzelf onderzoek op.", "因而 = daarom: een gevolg, en het botst met 先.", "反而 = juist niet, integendeel. Er is geen tegenstelling."] },
    { type: "order", q: "Zet in de goede volgorde: \"We moeten eerst de situatie begrijpen en vervolgens voorstellen doen.\"",
      tokens: [["我们", "wǒmen"], ["应该先", "yīnggāi xiān"], ["了解情况", "liǎojiě qíngkuàng"], ["进而", "jìn'ér"], ["提出建议", "tíchū jiànyì"]] },
    { type: "mc", q: "我先洗了个澡，___上床睡觉了。(Ik nam eerst een douche en ging daarna naar bed.)",
      options: ["然后", "进而", "从而", "因而"], answer: 0,
      why: ["Goed: een gewone volgorde zonder verdieping vraagt 然后.", "进而 is formeel en suggereert een verdere stap. Dat past niet bij douchen en slapen.", "从而 noemt een resultaat; slapen is geen resultaat van douchen.", "因而 = daarom. Er is geen oorzaak-gevolg."] },
    { type: "mc", q: "物价上涨会减少消费，进而影响经济增长。Wat betekent dit?",
      options: ["Prijsstijgingen verminderen de consumptie en raken vervolgens ook de economische groei.", "Prijsstijgingen verminderen de consumptie, maar de economie groeit toch.", "Prijsstijgingen verminderen de consumptie omdat de economie groeit.", "Prijsstijgingen verminderen de consumptie of de economische groei."], answer: 0,
      why: ["Goed: een kettingeffect: A raakt X, 进而 raakt Y.", "进而 is geen tegenstelling.", "进而 geeft geen reden; het gaat vooruit in de keten.", "进而 betekent geen \"of\"."] },
    { type: "mc", q: "Welke zin zeg je in een gewoon gesprek voor 先调查清楚，进而提出解决办法？",
      options: ["先弄清楚情况，然后再想办法。", "先弄清楚情况，从而再想办法。", "先弄清楚情况，反而再想办法。", "先弄清楚情况，不过再想办法。"], answer: 0,
      why: ["Goed: 先……，然后再…… is de gewone spreektaal-volgorde.", "从而 is schrijftaal en noemt een resultaat; het past niet bij 再.", "反而 drukt een tegenstelling uit.", "不过 = maar. Er is geen tegenstelling."] },
    { type: "fill", q: "长期熬夜会损害健康，___影响工作效率。(Langdurig laat opblijven schaadt je gezondheid en tast vervolgens ook je werkefficiëntie aan.)", answers: ["进而", "从而", "进一步"],
      hint: "Welk formeel woord betekent \"en vervolgens verder\"?", why: "进而 voegt de volgende schakel in de keten toe: gezondheid, dan werk." },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["他们降低了价格，进而销量。", "他们降低了价格，进而扩大了市场。", "先打好基础，进而深入研究。", "这会影响健康，进而影响工作。"], answer: 0,
      why: ["Goed gezien: na 进而 ontbreekt een werkwoord (bijvoorbeeld 提高了销量).", "Deze zin klopt: 进而 + werkwoord + object.", "Deze zin klopt: 先 A，进而 B.", "Deze zin klopt: een kettingeffect."] },
    { type: "order", q: "Zet in de goede volgorde: \"Luchtvervuiling schaadt de gezondheid en raakt vervolgens de economische ontwikkeling.\"",
      tokens: [["空气污染", "kōngqì wūrǎn"], ["损害健康", "sǔnhài jiànkāng"], ["进而", "jìn'ér"], ["影响", "yǐngxiǎng"], ["经济发展", "jīngjì fāzhǎn"]] },
    { type: "mc", q: "Welke uitspraak klopt?",
      options: ["进而 voegt een verdere stap toe; 从而 noemt het resultaat van A.", "进而 en 从而 zijn altijd verwisselbaar.", "进而 drukt een tegenstelling uit, net als 反而.", "进而 is spreektaal en 然后 is schrijftaal."], answer: 0,
      why: ["Goed: 进而 = en vervolgens verder; 从而 = waardoor.", "Ze overlappen soms, maar de focus verschilt: stap tegenover resultaat.", "进而 gaat vooruit in dezelfde richting; het is geen tegenstelling.", "Het is omgekeerd: 进而 is schrijftaal, 然后 is neutraal en spreektaal."] },
    { type: "open", q: "Vertaal in formeel Chinees: \"We moeten eerst het probleem analyseren en vervolgens een oplossing zoeken.\"",
      model: ["我们应该先分析问题，进而寻找解决办法。", "我们应先分析问题，进而找到解决方案。"],
      tip: "Check: 先 in het eerste deel, 进而 direct vóór het tweede werkwoord." },
    { type: "open", q: "Zeg dit in gewone spreektaal: 先了解用户需求，进而改进产品。",
      model: ["先了解用户需要什么，然后再改进产品。", "先搞清楚用户要什么，然后再把产品改好。"],
      tip: "Check: 先……，然后再……; geen 进而." }
  ],
  review: [
    { type: "mc", q: "他先当了几年老师，进而当上了校长。Wat betekent dit?",
      options: ["Hij was eerst een paar jaar leraar en werd vervolgens directeur.", "Hij was een paar jaar leraar in plaats van directeur.", "Hij was een paar jaar leraar, maar werd geen directeur.", "Hij was een paar jaar tegelijk leraar en directeur."], answer: 0,
      why: ["Goed: 先 A，进而 B = eerst A, en vervolgens verder naar B.", "进而 is geen \"in plaats van\".", "Er staat geen ontkenning: 当上了 = werd wel.", "进而 geeft een volgorde, geen gelijktijdigheid."] },
    { type: "mc", q: "我下了班，___去超市买菜。(Na het werk ga ik daarna naar de supermarkt.)",
      options: ["然后", "进而", "从而", "反而"], answer: 0,
      why: ["Goed: een alledaagse volgorde vraagt 然后.", "进而 is formeel en suggereert een verdere stap.", "从而 noemt een resultaat; boodschappen doen is geen resultaat van werken.", "反而 drukt een tegenstelling uit."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["他吃完饭，进而去洗碗了。", "先提高质量，进而扩大市场。", "失业会减少收入，进而影响家庭生活。", "我们先进行调查，进而提出建议。"], answer: 0,
      why: ["Goed gezien: afwassen na het eten is een gewone volgorde. Gebruik 然后.", "Deze zin klopt: een verdere stap.", "Deze zin klopt: een kettingeffect.", "Deze zin klopt: onderzoek, dan voorstellen."] }
  ]
})
