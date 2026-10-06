({
  id: "08", slug: "zhiyou-cai", title: "只有……才", sub: "Alleen als ..., pas dan ...",
  canDo: "Je kunt nu zeggen dat iets alleen onder één voorwaarde lukt, met 只有……才, en je kunt het onderscheiden van 只要……就.",
  guess: {
    q: "只有多练习，你才能说好中文。Wat betekent dit, denk je?",
    options: ["Alleen als je veel oefent, leer je goed Chinees spreken.", "Als je maar een beetje oefent, spreek je al goed Chinees.", "Je oefent veel, maar je spreekt nog geen goed Chinees.", "Je hebt maar weinig oefening nodig voor Chinees."], answer: 0,
    why: ["Goed: 只有 = de enige voorwaarde, 才 = pas dan het resultaat.", "Dat is de betekenis van 只要……就: een kleine voorwaarde is genoeg.", "Er staat geen tegenstelling in de zin.", "只有 zegt niet dat weinig genoeg is. Zonder oefenen lukt het niet."]
  },
  problem: "In het Nederlands zeg je: \"Alleen als je oefent, ga je vooruit.\" Er is maar één voorwaarde, en zonder die voorwaarde lukt het niet. In het Chinees zet je 只有 (zhǐyǒu) vóór de voorwaarde en 才 (cái) vóór het resultaat. Let op: 只要……就 lijkt erop, maar betekent iets anders.",
  pattern: [
    { l: "只有", v: "只有", c: 2, key: true }, { l: "voorwaarde", v: "多练习", c: 3 }, { l: "wie", v: "你", c: 1 },
    { l: "才", v: "才", c: 2, key: true }, { l: "resultaat", v: "能说好中文", c: 5 }
  ],
  patternCap: "只有 + enige voorwaarde，(onderwerp) + 才 + resultaat · ook: 只有 + persoon/tijd + 才: 只有他才知道, 只有周末才有空",
  rules: [
    "只有 staat aan het begin van de voorwaarde, vóór of na het onderwerp.",
    "才 staat in het tweede deel na het onderwerp, direct vóór het werkwoord of 能/会/可以.",
    "只有 hoort bij 才. Je kunt 才 niet vervangen door 就.",
    "De voorwaarde kan ook een persoon of een tijd zijn: 只有他才知道。只有周末我才有时间。",
    "Na 才 staat vaak 能, 会 of 可以: dan pas kan het."
  ],
  pitfall: "只有 hoort bij 才, 只要 hoort bij 就. Wissel ze nooit om: 只有……就 en 只要……才 zijn fout.",
  examples: [
    { cn: "只有多练习，你才能说好中文。", py: "Zhǐyǒu duō liànxí, nǐ cái néng shuōhǎo Zhōngwén.", nl: "Alleen als je veel oefent, leer je goed Chinees spreken." },
    { cn: "只有周末，我才有时间去看父母。", py: "Zhǐyǒu zhōumò, wǒ cái yǒu shíjiān qù kàn fùmǔ.", nl: "Alleen in het weekend heb ik tijd om mijn ouders te bezoeken." },
    { cn: "只有他才知道这件事。", py: "Zhǐyǒu tā cái zhīdào zhè jiàn shì.", nl: "Alleen hij weet hiervan." },
    { cn: "只有拿到签证，你才可以去中国留学。", py: "Zhǐyǒu nádào qiānzhèng, nǐ cái kěyǐ qù Zhōngguó liúxué.", nl: "Pas als je een visum hebt, kun je in China gaan studeren." }
  ],
  nuance: [
    { h: "只有……才 of 只要……就: enige of minimale voorwaarde?",
      p: "只要……就 betekent \"als ... maar, dan\": de voorwaarde is klein, en meer is niet nodig. 只有……才 betekent \"alleen als ..., pas dan\": deze voorwaarde is de enige weg, en zonder lukt het niet. 只要 klinkt dus geruststellend, 只有 klinkt streng.",
      ex: [
        { cn: "只要你努力，就能通过考试。", py: "Zhǐyào nǐ nǔlì, jiù néng tōngguò kǎoshì.", nl: "Als je maar je best doet, slaag je voor het examen." },
        { cn: "只有你努力，才能通过考试。", py: "Zhǐyǒu nǐ nǔlì, cái néng tōngguò kǎoshì.", nl: "Alleen als je je best doet, slaag je voor het examen." }
      ] },
    { h: "只有 + 才, of gewoon 只 + 有?",
      p: "只有 kan ook gewoon \"maar ... hebben\" betekenen: 只 (alleen) + 有 (hebben). Dan staat het na het onderwerp, gevolgd door een hoeveelheid, en er komt geen 才. In het patroon 只有……才 gaat het om een voorwaarde, en volgt er altijd een tweede deel met 才.",
      ex: [
        { cn: "我只有一百块钱。", py: "Wǒ zhǐ yǒu yìbǎi kuài qián.", nl: "Ik heb maar honderd yuan." },
        { cn: "只有有钱，你才能买这个房子。", py: "Zhǐyǒu yǒu qián, nǐ cái néng mǎi zhège fángzi.", nl: "Alleen als je geld hebt, kun je dit huis kopen." }
      ] },
    { h: "Waarom 才?",
      p: "Je kent 才 al als \"pas\": 他十点才起床 (hij stond pas om tien uur op). Hier is het hetzelfde idee: pas onder die voorwaarde gebeurt het, eerder niet. Daarom past 就 (meteen, zonder moeite) er niet bij. Je hoort 只有……才 veel in advies, regels en uitleg."
    }
  ],
  mistakes: [
    { wrong: "只有多练习，你就能说好中文。", right: "只有多练习，你才能说好中文。", why: "只有 hoort bij 才. 就 hoort bij 只要." },
    { wrong: "只要有时间，我才去。", right: "只要有时间，我就去。", why: "只要 = als ... maar. Daar hoort 就 bij, niet 才." },
    { wrong: "只有努力，才你能成功。", right: "只有努力，你才能成功。", why: "才 staat na het onderwerp, vóór 能." },
    { wrong: "只有你说清楚，我能明白。", right: "只有你说清楚，我才能明白。", why: "Het tweede deel heeft 才 nodig. Zonder 才 is het patroon niet af." }
  ],
  vocab: [
    ["只有……才", "zhǐyǒu……cái", "alleen als ..., pas dan ..."], ["签证", "qiānzhèng", "visum"], ["留学", "liúxué", "in het buitenland studeren"],
    ["申请", "shēnqǐng", "aanvragen, solliciteren"], ["通过", "tōngguò", "slagen voor, door ... heen komen"], ["驾照", "jiàzhào", "rijbewijs"],
    ["教练", "jiàoliàn", "instructeur, coach"], ["坚持", "jiānchí", "volhouden"], ["成功", "chénggōng", "slagen, succes hebben"], ["终于", "zhōngyú", "eindelijk"]
  ],
  dialogue: [
    ["A", "我想申请去中国留学，需要什么？", "Wǒ xiǎng shēnqǐng qù Zhōngguó liúxué, xūyào shénme?", "Ik wil me aanmelden om in China te studeren. Wat heb ik nodig?"],
    ["B", "只有通过HSK四级，你才可以申请这个项目。", "Zhǐyǒu tōngguò HSK sì jí, nǐ cái kěyǐ shēnqǐng zhège xiàngmù.", "Alleen als je voor HSK 4 slaagt, kun je je voor dit programma aanmelden."],
    ["A", "只要通过四级就行吗？", "Zhǐyào tōngguò sì jí jiù xíng ma?", "Is het genoeg als ik gewoon voor niveau 4 slaag?"],
    ["B", "不行，还要有老师的推荐信。只有材料都准备好了，学校才会看你的申请。", "Bù xíng, hái yào yǒu lǎoshī de tuījiànxìn. Zhǐyǒu cáiliào dōu zhǔnbèi hǎo le, xuéxiào cái huì kàn nǐ de shēnqǐng.", "Nee, je hebt ook een aanbevelingsbrief van een docent nodig. Pas als alle papieren klaar zijn, bekijkt de school je aanvraag."],
    ["A", "明白了。那我得马上开始准备。", "Míngbai le. Nà wǒ děi mǎshàng kāishǐ zhǔnbèi.", "Duidelijk. Dan moet ik meteen beginnen met voorbereiden."]
  ],
  reading: {
    title: "学开车",
    lines: [
      { cn: "二十五岁那年，我决定去学开车。", py: "Èrshíwǔ suì nà nián, wǒ juédìng qù xué kāichē.", nl: "Toen ik vijfentwintig was, besloot ik te leren autorijden." },
      { cn: "第一天，教练就告诉我：\"只有每个星期都练习，你才能早点儿拿到驾照。\"", py: "Dì-yī tiān, jiàoliàn jiù gàosu wǒ: \"Zhǐyǒu měi ge xīngqī dōu liànxí, nǐ cái néng zǎo diǎnr nádào jiàzhào.\"", nl: "Op de eerste dag zei de instructeur: \"Alleen als je elke week oefent, haal je snel je rijbewijs.\"" },
      { cn: "可是我工作很忙，只有周末才有时间去练车。", py: "Kěshì wǒ gōngzuò hěn máng, zhǐyǒu zhōumò cái yǒu shíjiān qù liànchē.", nl: "Maar ik had het druk met werk en had alleen in het weekend tijd om te oefenen." },
      { cn: "我以为只要看看书，就能通过考试。", py: "Wǒ yǐwéi zhǐyào kànkan shū, jiù néng tōngguò kǎoshì.", nl: "Ik dacht dat ik voor het examen zou slagen als ik maar wat in het boek las." },
      { cn: "结果，第一次考试我没通过。", py: "Jiéguǒ, dì-yī cì kǎoshì wǒ méi tōngguò.", nl: "Het resultaat: ik zakte voor mijn eerste examen." },
      { cn: "教练说：\"开车不是看书。只有多开，才能真的学会。\"", py: "Jiàoliàn shuō: \"Kāichē bú shì kàn shū. Zhǐyǒu duō kāi, cái néng zhēn de xuéhuì.\"", nl: "De instructeur zei: \"Autorijden is geen boek lezen. Alleen door veel te rijden leer je het echt.\"" },
      { cn: "后来，我每天下班以后都去练习半个小时。", py: "Hòulái, wǒ měi tiān xiàbān yǐhòu dōu qù liànxí bàn ge xiǎoshí.", nl: "Daarna ging ik elke dag na het werk een half uur oefenen." },
      { cn: "两个月以后，我终于通过了考试。", py: "Liǎng ge yuè yǐhòu, wǒ zhōngyú tōngguòle kǎoshì.", nl: "Twee maanden later slaagde ik eindelijk." },
      { cn: "现在我明白了：只有坚持，才能成功。", py: "Xiànzài wǒ míngbai le: zhǐyǒu jiānchí, cái néng chénggōng.", nl: "Nu begrijp ik het: alleen als je volhoudt, slaag je." }
    ],
    questions: [
      { type: "mc", q: "Waarom zakte de schrijver de eerste keer?",
        options: ["Hij dacht dat lezen genoeg was en reed te weinig.", "De instructeur legde het slecht uit.", "Hij had geen boek om te lezen.", "Hij oefende elke dag, maar was te zenuwachtig."], answer: 0,
        why: ["Goed: 我以为只要看看书，就能通过考试 en hij oefende alleen in het weekend.", "De tekst zegt niets slechts over de instructeur.", "Hij las wel in een boek. Dat was juist niet genoeg.", "Elke dag oefenen deed hij pas later, en zenuwen staan niet in de tekst."] },
      { type: "mc", q: "Wat veranderde hij na het eerste examen?",
        options: ["Hij oefende elke dag na het werk een half uur.", "Hij nam een andere instructeur.", "Hij las meer boeken.", "Hij stopte met werken."], answer: 0,
        why: ["Goed: 我每天下班以后都去练习半个小时.", "Er staat geen nieuwe instructeur in de tekst.", "Meer lezen was juist niet de oplossing.", "Hij ging na het werk oefenen, dus hij werkte nog."] },
      { type: "mc", q: "只有多开，才能真的学会。Wat zegt de instructeur hiermee?",
        options: ["Veel rijden is de enige manier om het echt te leren.", "Als je maar een beetje rijdt, leer je het al.", "Je leert het snel als je minder rijdt.", "Je hoeft niet te rijden om het te leren."], answer: 0,
        why: ["Goed: 只有……才 = de enige voorwaarde.", "Dat zou 只要……就 zijn: een kleine voorwaarde is genoeg.", "多开 betekent juist meer rijden.", "Zonder rijden lukt het volgens hem niet."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Alleen als je veel oefent, kun je goed spreken.\" 只有多练习，你___能说好。",
      options: ["才", "就", "也", "都"], answer: 0,
      why: ["Goed: 只有 hoort bij 才.", "就 hoort bij 只要, niet bij 只有.", "也 maakt het patroon niet af.", "都 betekent \"allemaal\" en past hier niet."] },
    { type: "mc", q: "\"Als je maar op tijd komt, is het goed.\" ___你按时来，就没问题。",
      options: ["只要", "只有", "只是", "虽然"], answer: 0,
      why: ["Goed: 只要……就 = als ... maar, dan. Een kleine voorwaarde is genoeg.", "只有 hoort bij 才, niet bij 就.", "只是 betekent \"alleen maar, het is gewoon\" en maakt geen voorwaarde.", "虽然 betekent \"hoewel\" en hoort bij 但是."] },
    { type: "mc", q: "只有他才知道密码。Wat betekent dit?",
      options: ["Alleen hij kent het wachtwoord.", "Hij kent alleen het wachtwoord.", "Hij kent het wachtwoord pas sinds kort.", "Als hij het wachtwoord kent, is het goed."], answer: 0,
      why: ["Goed: 只有 + persoon + 才 = alleen die persoon.", "只有 staat vóór 他, dus het gaat om de persoon, niet om wat hij kent.", "才 betekent hier niet \"pas sinds kort\".", "Dat is een voorwaarde met 只要, en de zin heeft geen tweede deel."] },
    { type: "mc", q: "\"Alleen als je hard werkt, zul je slagen.\"",
      options: ["只有努力，你才能成功。", "只有努力，才你能成功。", "只有努力，你能才成功。", "只有努力，你才成功能。"], answer: 0,
      why: ["Goed: 才 na het onderwerp, vóór 能.", "才 staat na het onderwerp 你.", "才 staat vóór 能, niet erna.", "能 staat vóór het werkwoord 成功."] },
    { type: "mc", q: "Welke zin zegt dat één telefoontje al genoeg is?",
      options: ["只要你给他打个电话，他就会来。", "只有你给他打个电话，他才会来。", "只有你给他打个电话，他就会来。", "只要你给他打个电话，他才会来。"], answer: 0,
      why: ["Goed: 只要……就 = een kleine voorwaarde is genoeg.", "Correcte zin, maar die zegt iets anders: bellen is de enige manier.", "只有 hoort bij 才, niet bij 就.", "只要 hoort bij 就, niet bij 才."] },
    { type: "mc", q: "我只有一百块钱。Wat betekent 只有 hier?",
      options: ["Ik heb maar honderd yuan.", "Alleen als ik honderd yuan heb ...", "Pas met honderd yuan ...", "Als ik maar honderd yuan heb ..."], answer: 0,
      why: ["Goed: hier is het 只 + 有 = maar ... hebben. Er volgt geen 才.", "Een voorwaarde met 只有 heeft een tweede deel met 才 nodig.", "Er staat geen 才 in de zin.", "Dat zou 只要 zijn, met 就 in een tweede deel."] },
    { type: "fill", q: "只有到了周末，他___有时间。(Alleen in het weekend heeft hij tijd.)", answers: ["才"],
      hint: "Welk woord hoort bij 只有?", why: "只有 + tijd + 才: alleen dan, eerder niet." },
    { type: "order", q: "Zet in de goede volgorde: \"Alleen als je een visum hebt, kun je naar China.\"",
      tokens: [["只有", "zhǐyǒu"], ["拿到签证", "nádào qiānzhèng"], ["你才能", "nǐ cái néng"], ["去中国", "qù Zhōngguó"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Alleen mijn moeder weet het.\"",
      tokens: [["只有", "zhǐyǒu"], ["我妈妈", "wǒ māma"], ["才", "cái"], ["知道", "zhīdào"]] },
    { type: "open", q: "Vertaal: \"Alleen als je vroeg gaat, kun je kaartjes krijgen.\"", model: ["只有早点儿去，你才能买到票。", "只有早去，才买得到票。"],
      tip: "Check: 只有 vóór de voorwaarde, 才 na het onderwerp en vóór 能 of het werkwoord." },
    { type: "open", q: "Geef een vriend een advies met 只有……才, en zeg daarna hetzelfde vriendelijker met 只要……就.", model: ["只有每天复习，你才能记住生词。只要每天复习一点儿，你就能记住。", "只有早点儿睡觉，你才能休息好。只要早点儿睡，你就不会累。"],
      tip: "Check: 只有 met 才, 只要 met 就. Klinkt de 只有-zin als de enige weg, en de 只要-zin als iets kleins dat genoeg is?" }
  ],
  review: [
    { type: "mc", q: "只有下雨的时候，他___坐公共汽车。(Alleen als het regent, neemt hij de bus.)",
      options: ["才", "就", "都", "也"], answer: 0,
      why: ["Goed: 只有 + tijd + 才.", "就 hoort bij 只要.", "都 maakt het patroon niet af.", "也 hoort niet bij 只有."] },
    { type: "mc", q: "\"Als je het hem even uitlegt, begrijpt hij het wel.\" ___你跟他解释一下，他就会明白。",
      options: ["只要", "只有", "除了", "虽然"], answer: 0,
      why: ["Goed: 只要……就 = een kleine voorwaarde is genoeg.", "只有 hoort bij 才, niet bij 就.", "除了 betekent \"behalve\" en maakt geen voorwaarde.", "虽然 betekent \"hoewel\"."] },
    { type: "mc", q: "\"Alleen jij kunt hem helpen.\"",
      options: ["只有你才能帮他。", "只有你就能帮他。", "只有才你能帮他。", "你只有才能帮他。"], answer: 0,
      why: ["Goed: 只有 + persoon + 才能.", "只有 hoort bij 才, niet bij 就.", "才 staat na 你, vóór 能.", "只有 staat vóór 你: het gaat om de persoon."] }
  ]
})
