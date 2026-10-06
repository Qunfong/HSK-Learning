({
  id: "04", slug: "jishi", title: "即使……也", sub: "Zelfs als ..., toch ...",
  canDo: "Je kunt nu met 即使 ... 也 zeggen dat iets doorgaat, zelfs in een moeilijk geval.",
  guess: {
    q: "即使下雨，我也去。Wat betekent dit, denk je?",
    options: ["Zelfs als het regent, ga ik.", "Omdat het regent, ga ik.", "Als het regent, ga ik niet.", "Het regent, maar ik ga toch."], answer: 0,
    why: ["Goed: 即使 ... 也 = zelfs als ..., toch.", "即使 geeft geen reden. Dat zou 因为 zijn.", "Er staat geen ontkenning: 我也去 = ik ga toch.", "Dan regent het echt. Dat is 虽然 ... 但是. Bij 即使 is het een \"stel dat\"."]
  },
  problem: "Je wilt zeggen dat iets doorgaat, wat er ook gebeurt. \"Zelfs als het regent, ga ik.\" Het geval is vaak nog niet waar. Je stelt het je alleen voor. In het Nederlands zeg je \"zelfs als\" of \"ook al\". In het Chinees gebruik je 即使 (jíshǐ) ... 也 (yě).",
  pattern: [
    { l: "即使", v: "即使", c: 1, key: true }, { l: "geval", v: "下雨", c: 2 }, { l: "wie", v: "我", c: 3 },
    { l: "也", v: "也", c: 4, key: true }, { l: "gevolg", v: "去", c: 5 }
  ],
  patternCap: "即使 + geval，wie + 也 + gevolg. Het geval is meestal een veronderstelling: \"stel dat\".",
  rules: [
    "即使 staat vóór het geval: aan het begin, of na het onderwerp.",
    "也 staat in de tweede helft, na het onderwerp en vóór het werkwoord.",
    "Een ontkenning komt ná 也: 我也不去。",
    "Het geval is vaak niet echt. Het is een \"stel dat\".",
    "Is het wél echt zo? Gebruik dan 虽然 ... 但是."
  ],
  pitfall: "也 staat nooit vóór het onderwerp. 即使下雨，也我去 is fout. Zeg 即使下雨，我也去。",
  examples: [
    { cn: "即使明天下雨，我们也去爬山。", py: "Jíshǐ míngtiān xià yǔ, wǒmen yě qù páshān.", nl: "Zelfs als het morgen regent, gaan we de berg op." },
    { cn: "即使你不说，我也知道。", py: "Jíshǐ nǐ bù shuō, wǒ yě zhīdào.", nl: "Zelfs als je het niet zegt, weet ik het." },
    { cn: "即使工作再忙，他也每天运动。", py: "Jíshǐ gōngzuò zài máng, tā yě měi tiān yùndòng.", nl: "Hoe druk zijn werk ook is, hij sport elke dag." }
  ],
  nuance: [
    { h: "即使 of 虽然?",
      p: "Met 虽然 noem je een feit: het regent echt. Met 即使 noem je een \"stel dat\": misschien regent het, misschien niet. Daarom hoort 即使 bij 也, en 虽然 bij 但是 of 可是. Vergelijk de twee zinnen.",
      ex: [
        { cn: "虽然下雨了，但是我们还是去了。", py: "Suīrán xià yǔ le, dànshì wǒmen háishi qù le.", nl: "Het regende, maar we zijn toch gegaan." },
        { cn: "即使下雨，我们也要去。", py: "Jíshǐ xià yǔ, wǒmen yě yào qù.", nl: "Zelfs als het regent, gaan we." }
      ] },
    { h: "即使 of 哪怕?",
      p: "哪怕 (nǎpà) werkt net als 即使: 哪怕 + geval, wie + 也 + gevolg. 哪怕 klinkt meer als spreektaal en vaak sterker. Je gebruikt het graag bij een heel klein of heel extreem geval: \"al is het maar één minuut\". 即使 is neutraler en past ook in geschreven tekst.",
      ex: [
        { cn: "哪怕只有一分钟，我也想见你。", py: "Nǎpà zhǐ yǒu yì fēnzhōng, wǒ yě xiǎng jiàn nǐ.", nl: "Al is het maar één minuut, ik wil je zien." }
      ] },
    { h: "即使 met 再: hoe ... ook",
      p: "即使 + 再 + bijvoeglijk naamwoord betekent \"hoe ... ook\". Zo zeg je dat zelfs het ergste geval niets verandert. In de spreektaal hoor je ook 就算 (jiùsuàn) met dezelfde betekenis.",
      ex: [
        { cn: "即使再难，我也要学下去。", py: "Jíshǐ zài nán, wǒ yě yào xué xiaqu.", nl: "Hoe moeilijk het ook is, ik ga door met leren." },
        { cn: "就算你不来，我也会去。", py: "Jiùsuàn nǐ bù lái, wǒ yě huì qù.", nl: "Ook al kom jij niet, ik ga toch." }
      ] }
  ],
  mistakes: [
    { wrong: "即使下雨，也我去。", right: "即使下雨，我也去。", why: "也 staat na het onderwerp, vlak vóór het werkwoord." },
    { wrong: "即使下雨，但是我去。", right: "即使下雨，我也去。", why: "即使 hoort bij 也. 但是 hoort bij 虽然." },
    { wrong: "即使你不说，我知道。", right: "即使你不说，我也知道。", why: "Zonder 也 hangt de tweede helft los. 也 is nodig." },
    { wrong: "即使他昨天生病了，他也来上课了。", right: "虽然他昨天生病了，但是他还是来上课了。", why: "Hij was echt ziek: dat is een feit, geen \"stel dat\". Gebruik 虽然 ... 但是." }
  ],
  vocab: [
    ["即使……也", "jíshǐ……yě", "zelfs als ..., toch"], ["哪怕", "nǎpà", "al is het maar, zelfs als"], ["比赛", "bǐsài", "wedstrijd"],
    ["参加", "cānjiā", "meedoen aan"], ["厉害", "lìhai", "sterk, geweldig"], ["输", "shū", "verliezen"],
    ["放弃", "fàngqì", "opgeven"], ["坚持", "jiānchí", "volhouden"], ["失败", "shībài", "mislukken"], ["梦想", "mèngxiǎng", "droom (wens)"]
  ],
  dialogue: [
    ["A", "明天的比赛你还参加吗？听说会下大雨。", "Míngtiān de bǐsài nǐ hái cānjiā ma? Tīngshuō huì xià dà yǔ.", "Doe je morgen nog mee aan de wedstrijd? Ik hoor dat het hard gaat regenen."],
    ["B", "参加。即使下大雨，我也要去。", "Cānjiā. Jíshǐ xià dà yǔ, wǒ yě yào qù.", "Ja. Zelfs als het hard regent, ga ik."],
    ["A", "可是对方很厉害，你们可能会输。", "Kěshì duìfāng hěn lìhai, nǐmen kěnéng huì shū.", "Maar de tegenstander is sterk. Jullie verliezen misschien."],
    ["B", "即使输了，我们也不会放弃。", "Jíshǐ shū le, wǒmen yě bú huì fàngqì.", "Zelfs als we verliezen, geven we niet op."],
    ["A", "好，那我去给你们加油！", "Hǎo, nà wǒ qù gěi nǐmen jiāyóu!", "Goed, dan kom ik jullie aanmoedigen!"]
  ],
  reading: {
    title: "跑马拉松",
    lines: [
      { cn: "我的邻居李阿姨今年六十岁了。", py: "Wǒ de línjū Lǐ āyí jīnnián liùshí suì le.", nl: "Mijn buurvrouw, tante Li, is dit jaar zestig geworden." },
      { cn: "她的梦想是跑一次马拉松。", py: "Tā de mèngxiǎng shì pǎo yí cì mǎlāsōng.", nl: "Haar droom is om één keer een marathon te lopen." },
      { cn: "她的孩子们说：\"妈，您年纪大了，别跑了。\"", py: "Tā de háizimen shuō: \"Mā, nín niánjì dà le, bié pǎo le.\"", nl: "Haar kinderen zeiden: \"Mam, u bent al ouder, ga nou niet hardlopen.\"" },
      { cn: "可是李阿姨说：\"即使跑得很慢，我也要试一试。\"", py: "Kěshì Lǐ āyí shuō: \"Jíshǐ pǎo de hěn màn, wǒ yě yào shì yi shì.\"", nl: "Maar tante Li zei: \"Zelfs als ik heel langzaam loop, wil ik het proberen.\"" },
      { cn: "从那天开始，她每天早上都去公园跑步。", py: "Cóng nà tiān kāishǐ, tā měi tiān zǎoshang dōu qù gōngyuán pǎobù.", nl: "Vanaf die dag ging ze elke ochtend in het park hardlopen." },
      { cn: "即使刮风下雨，她也不休息。", py: "Jíshǐ guā fēng xià yǔ, tā yě bù xiūxi.", nl: "Zelfs als het waait en regent, neemt ze geen rust." },
      { cn: "比赛那天，她跑了六个多小时。", py: "Bǐsài nà tiān, tā pǎole liù ge duō xiǎoshí.", nl: "Op de dag van de wedstrijd liep ze ruim zes uur." },
      { cn: "她是最后几个到的，可是她笑得特别开心。", py: "Tā shì zuìhòu jǐ ge dào de, kěshì tā xiào de tèbié kāixīn.", nl: "Ze kwam als een van de laatsten binnen, maar ze lachte heel blij." },
      { cn: "她对我说：\"哪怕只有一次，我也不后悔。\"", py: "Tā duì wǒ shuō: \"Nǎpà zhǐ yǒu yí cì, wǒ yě bú hòuhuǐ.\"", nl: "Ze zei tegen me: \"Al is het maar één keer, ik heb er geen spijt van.\"" }
    ],
    questions: [
      { type: "mc", q: "Wat vonden de kinderen van tante Li van haar plan?",
        options: ["Ze vonden dat ze niet moest gaan hardlopen.", "Ze wilden met haar meelopen.", "Ze vonden het een heel goed idee.", "Ze wilden haar elke ochtend helpen trainen."], answer: 0,
        why: ["Goed: 您年纪大了，别跑了。", "Er staat niet dat de kinderen meeliepen.", "Ze zeiden juist 别跑了: ga niet lopen.", "Over helpen trainen staat niets in de tekst."] },
      { type: "mc", q: "Hoe ging de marathon?",
        options: ["Ze liep ruim zes uur en kwam als een van de laatsten binnen.", "Ze won de wedstrijd.", "Ze gaf onderweg op.", "Ze liep niet mee vanwege de regen."], answer: 0,
        why: ["Goed: 她跑了六个多小时 en 她是最后几个到的.", "Ze was juist een van de laatsten.", "Ze kwam wel aan: 她是最后几个到的.", "Regen hield haar niet tegen: 即使刮风下雨，她也不休息。"] },
      { type: "mc", q: "即使刮风下雨，她也不休息。Wat betekent dit?",
        options: ["Ook bij wind en regen neemt ze geen rust.", "Omdat het waait en regent, rust ze niet.", "Als het waait en regent, rust ze uit.", "Het waaide en regende, dus ze rustte niet."], answer: 0,
        why: ["Goed: 即使 ... 也 = zelfs als ..., toch.", "即使 geeft geen reden, zoals 因为.", "Er staat 也不休息: ze rust juist niet.", "即使 gaat over elk mogelijk geval, niet over één dag met regen."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Zelfs als hij het weet, zal hij het niet zeggen.\"",
      options: ["即使他知道，他也不会说。", "即使他知道，他不会说也。", "即使他知道，也他不会说。", "即使他知道，所以他不会说。"], answer: 0,
      why: ["Goed: 也 na het onderwerp, vóór 不会.", "也 staat vóór het werkwoord, nooit aan het eind.", "也 staat ná het onderwerp, niet ervoor.", "即使 gaat samen met 也, niet met 所以."] },
    { type: "mc", q: "\"Hoe druk je het ook hebt, je moet eten.\" ___再忙，你也要吃饭。",
      options: ["即使", "因为", "虽然", "只要"], answer: 0,
      why: ["Goed: 即使 ... 也 = zelfs als.", "因为 geeft een reden en past niet bij 也.", "虽然 gaat over iets wat echt zo is, en past niet bij 再忙.", "只要 betekent \"als maar\" en hoort bij 就."] },
    { type: "order", q: "Zet in de goede volgorde: \"Zelfs als jij niet gaat, ga ik wel.\"",
      tokens: [["即使", "jíshǐ"], ["你不去", "nǐ bú qù"], ["我", "wǒ"], ["也", "yě"], ["要去", "yào qù"]] },
    { type: "mc", q: "Wat betekent: 哪怕很贵，我也要买。",
      options: ["Zelfs als het duur is, wil ik het kopen.", "Omdat het duur is, wil ik het kopen.", "Als het duur is, koop ik het niet.", "Het is niet duur, dus ik koop het."], answer: 0,
      why: ["Goed: 哪怕 ... 也 betekent hetzelfde als 即使 ... 也.", "哪怕 geeft geen reden.", "Er staat geen ontkenning: 我也要买.", "很贵 betekent \"heel duur\", niet \"niet duur\"."] },
    { type: "mc", q: "Gisteren was het echt heel koud, en toch ging hij zwemmen. Welke zin past?",
      options: ["虽然昨天很冷，但是他还是去游泳了。", "即使昨天很冷，但是他还是去游泳了。", "虽然昨天很冷，他也去游泳了。", "即使昨天很冷，所以他去游泳了。"], answer: 0,
      why: ["Goed: het was echt koud, dus een feit: 虽然 ... 但是.", "即使 en 但是 horen niet samen, en het gaat om een feit.", "虽然 hoort bij 但是 of 可是, niet alleen bij 也.", "即使 gaat niet samen met 所以."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["即使你不同意，但是我要去。", "即使你不同意，我也要去。", "哪怕你不同意，我也要去。", "就算你不同意，我也要去。"], answer: 0,
      why: ["Goed gezien: 即使 hoort bij 也, niet bij 但是.", "Dit klopt: 即使 ... 也.", "Dit klopt: 哪怕 werkt net als 即使.", "Dit klopt: 就算 is spreektaal voor 即使."] },
    { type: "fill", q: "即使很累，我___要完成今天的作业。(Zelfs als ik moe ben, maak ik mijn huiswerk van vandaag af.)", answers: ["也"],
      hint: "Welk woord hoort bij 即使 in de tweede helft?", why: "即使 ... wie + 也 + werkwoord: 也 staat na 我." },
    { type: "order", q: "Zet in de goede volgorde: \"Al is het maar één dag, ik wil naar Beijing.\"",
      tokens: [["哪怕", "nǎpà"], ["只有一天", "zhǐ yǒu yì tiān"], ["我", "wǒ"], ["也", "yě"], ["想去北京", "xiǎng qù Běijīng"]] },
    { type: "mc", q: "\"Zelfs als het mislukt, geven we niet op.\" Waar staat 不?",
      options: ["即使失败了，我们也不放弃。", "即使失败了，我们不也放弃。", "即使失败了，不我们也放弃。", "即使失败了，我们也放弃不。"], answer: 0,
      why: ["Goed: 也 komt eerst, dan 不, dan het werkwoord.", "不 staat ná 也, niet ervoor.", "不 staat niet vóór het onderwerp.", "不 staat vóór het werkwoord, niet erachter."] },
    { type: "open", q: "Zeg iets wat je zeker blijft doen, met 即使 ... 也.",
      model: ["即使很累，我也每天学汉语。", "即使下雨，我也骑自行车上班。"],
      tip: "Check: staat 也 ná het onderwerp van de tweede helft, vlak vóór het werkwoord?" },
    { type: "open", q: "Vertaal: \"Zelfs als het heel duur is, wil ik deze computer kopen.\"",
      model: ["即使很贵，我也要买这台电脑。", "即使这台电脑很贵，我也想买。", "哪怕很贵，我也要买这台电脑。"],
      tip: "Check: 即使 of 哪怕 in de eerste helft, en 我也 vóór 要买 of 想买." }
  ],
  review: [
    { type: "mc", q: "\"Zelfs als je het me vraagt, zeg ik het niet.\"",
      options: ["即使你问我，我也不说。", "即使你问我，也我不说。", "即使你问我，我不说也。", "即使你问我，我就不说。"], answer: 0,
      why: ["Goed.", "也 staat ná het onderwerp (我).", "也 staat vóór het werkwoord, niet aan het eind.", "就 maakt er \"als ..., dan\" van: als je het vraagt, zeg ik het niet."] },
    { type: "mc", q: "\"Zelfs als het mislukt, moeten we doorzetten.\" 即使失败了，我们___要坚持。",
      options: ["也", "就", "才", "所以"], answer: 0,
      why: ["Goed: 即使 ... 也.", "就 betekent \"dan\": het mislukt, dan zetten we door. Dat is geen \"zelfs als\".", "才 betekent \"pas\": dat past hier niet.", "所以 staat vóór het onderwerp en hoort bij 因为."] },
    { type: "mc", q: "\"Zelfs als de bus te laat is, kom ik op tijd.\"",
      options: ["即使公共汽车晚了，我也会准时到。", "即使公共汽车晚了，也我会准时到。", "即使公共汽车晚了，但是我会准时到。", "即使公共汽车晚了，所以我会准时到。"], answer: 0,
      why: ["Goed: 即使 ... 我也 + werkwoord.", "也 staat ná het onderwerp (我).", "即使 hoort bij 也, niet bij 但是.", "即使 gaat niet samen met 所以."] }
  ]
})
