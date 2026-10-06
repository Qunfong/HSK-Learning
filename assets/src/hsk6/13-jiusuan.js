({
  id: "13", slug: "jiusuan", title: "就算 ... 也", sub: "Zelfs als dat zo is, verandert er niets",
  canDo: "Je kunt nu in gewone spreektaal zeggen dat iets zelfs in het slechtste geval doorgaat, met 就算 ... 也.",
  guess: {
    q: "就算明天下雨，我们也去爬山。Wat bedoelt de spreker, denk je?",
    options: ["Zelfs als het morgen regent, gaan we bergwandelen.", "Omdat het morgen regent, gaan we bergwandelen.", "Als het morgen regent, gaan we niet bergwandelen.", "Het regent morgen, maar we gaan toch bergwandelen."], answer: 0,
    why: ["Goed: 就算 noemt een mogelijke situatie; na 也 komt wat toch gebeurt.", "就算 geeft geen reden. Regen is hier een hindernis, geen oorzaak.", "也 zegt juist dat het plan doorgaat.", "就算 gaat over een mogelijkheid, niet over een feit. We weten niet of het regent."]
  },
  problem: "Je wilt zeggen dat iets doorgaat, wat er ook gebeurt. In het Nederlands zeg je: \"Zelfs als ..., dan nog ...\". In formeel Chinees gebruik je 即使 ... 也. In gewone spreektaal zeg je 就算 (jiùsuàn) ... 也. Na 就算 komt een situatie die misschien gebeurt. Na 也 komt wat niet verandert.",
  pattern: [
    { l: "zelfs als", v: "就算", c: 1, key: true }, { l: "mogelijke situatie", v: "你不同意", c: 2 },
    { l: "wie", v: "我", c: 3 }, { l: "ook", v: "也", c: 4, key: true }, { l: "wat niet verandert", v: "要去", c: 5 }
  ],
  patternCap: "就算 + situatie，(onderwerp) + 也/还 + resultaat · 就算是 + naamwoord · formeel: 即使 ... 也 · nadruk: 哪怕 ... 也",
  rules: [
    "就算 staat vóór of na het onderwerp van de eerste zin: 就算你不去 / 你就算不去.",
    "In de tweede zin staat 也 (soms 还) na het onderwerp, vóór het werkwoord.",
    "De situatie na 就算 is een veronderstelling: het is (nog) geen feit.",
    "Voor een zelfstandig naamwoord zeg je 就算是: 就算是专家，也会犯错。",
    "就算 is spreektaal. In formele teksten gebruik je 即使 of 即便."
  ],
  pitfall: "就算 gaat over een mogelijkheid, niet over een feit. Is het echt al zo? Gebruik dan 虽然 ... 但是, niet 就算.",
  examples: [
    { cn: "就算你不同意，我也要去。", py: "Jiùsuàn nǐ bù tóngyì, wǒ yě yào qù.", nl: "Zelfs als jij het er niet mee eens bent, ga ik toch." },
    { cn: "就算再忙，你也得吃饭啊。", py: "Jiùsuàn zài máng, nǐ yě děi chīfàn a.", nl: "Hoe druk je het ook hebt, je moet toch eten." },
    { cn: "就算是专家，也会犯错。", py: "Jiùsuàn shì zhuānjiā, yě huì fàn cuò.", nl: "Zelfs een expert maakt weleens fouten." },
    { cn: "现在去也来不及了，就算打车也赶不上。", py: "Xiànzài qù yě láibují le, jiùsuàn dǎchē yě gǎn bu shàng.", nl: "Nu gaan heeft geen zin meer. Zelfs met een taxi halen we het niet." }
  ],
  nuance: [
    { h: "就算 of 虽然?",
      p: "虽然 gaat over een feit: het is echt zo. 就算 gaat over een mogelijkheid: misschien gebeurt het. Vergelijk: het regent nu echt (虽然), of het regent morgen misschien (就算). Na 虽然 komt 但是 of 可是; na 就算 komt 也.",
      ex: [
        { cn: "虽然下雨了，但是我们还是去了。", py: "Suīrán xià yǔ le, dànshì wǒmen háishi qù le.", nl: "Hoewel het regende, gingen we toch." },
        { cn: "就算下雨，我们也去。", py: "Jiùsuàn xià yǔ, wǒmen yě qù.", nl: "Zelfs als het regent, gaan we." }
      ] },
    { h: "就算 of 即使?",
      p: "De betekenis is bijna gelijk. Het verschil is register. 即使 (jíshǐ) is neutraal tot formeel en past in teksten, nieuws en toespraken. 就算 is spreektaal: je hoort het in gesprekken, op social media en in films. In een opstel of een formele e-mail kies je beter 即使.",
      ex: [
        { cn: "即使遇到困难，我们也不会放弃。", py: "Jíshǐ yùdào kùnnan, wǒmen yě bú huì fàngqì.", nl: "Zelfs als we op moeilijkheden stuiten, geven we niet op. (formeel)" },
        { cn: "就算有困难，我也不放弃。", py: "Jiùsuàn yǒu kùnnan, wǒ yě bú fàngqì.", nl: "Al zijn er problemen, ik geef niet op. (spreektaal)" }
      ] },
    { h: "就算 of 哪怕?",
      p: "哪怕 (nǎpà) legt extra nadruk op een uiterste geval: heel klein, heel moeilijk, heel veel. Daarom staat er vaak 只, 一 of 再 bij. Het klinkt emotioneler dan 就算. 哪怕 komt in spreektaal én in verhalende teksten voor. Voor een gewone hindernis, zoals regen, is 就算 neutraler.",
      ex: [
        { cn: "哪怕只有一点儿希望，我们也要试试。", py: "Nǎpà zhǐ yǒu yìdiǎnr xīwàng, wǒmen yě yào shìshi.", nl: "Al is er maar een sprankje hoop, we moeten het proberen." }
      ] },
    { h: "Ook alleen: 就算了?",
      p: "Let op: 就算了 betekent iets heel anders: \"laat maar, dan houdt het op\". 不想去就算了 = \"als je niet wilt, dan laat je het maar\". Dat is 就 + 算了, niet het patroon 就算 ... 也."
    }
  ],
  mistakes: [
    { wrong: "就算明天下雨，我们就去。", right: "就算明天下雨，我们也去。", why: "Na 就算 hoort 也, niet 就. 就 maakt er een gewone voorwaarde van (\"als ..., dan\")." },
    { wrong: "就算昨天下雨了，但是我们去了。", right: "虽然昨天下雨了，但是我们去了。", why: "Gisteren regende het echt: dat is een feit. Voor een feit gebruik je 虽然 ... 但是." },
    { wrong: "就算你不去，也我去。", right: "就算你不去，我也去。", why: "也 is een bijwoord en staat na het onderwerp, vóór het werkwoord." },
    { wrong: "就算专家，也会犯错。", right: "就算是专家，也会犯错。", why: "Voor een zelfstandig naamwoord zet je 是 na 就算." }
  ],
  vocab: [
    ["就算", "jiùsuàn", "zelfs als (spreektaal)"], ["即使", "jíshǐ", "zelfs als (formeel)"], ["哪怕", "nǎpà", "al is het maar, zelfs als"],
    ["专家", "zhuānjiā", "expert"], ["犯错", "fàn cuò", "een fout maken"], ["来不及", "láibují", "geen tijd meer hebben, te laat"],
    ["赶不上", "gǎn bu shàng", "niet op tijd halen"], ["梦想", "mèngxiǎng", "droom"], ["反对", "fǎnduì", "tegen zijn, bezwaar maken"], ["坚定", "jiāndìng", "vastberaden"]
  ],
  dialogue: [
    ["A", "听说你要辞职去开咖啡馆？", "Tīngshuō nǐ yào cízhí qù kāi kāfēiguǎn?", "Ik hoor dat je ontslag neemt om een koffiezaak te openen?"],
    ["B", "对，这是我多年的梦想。", "Duì, zhè shì wǒ duō nián de mèngxiǎng.", "Ja, dat is al jaren mijn droom."],
    ["A", "可是开店风险很大，就算生意好，前两年也很难赚钱。", "Kěshì kāi diàn fēngxiǎn hěn dà, jiùsuàn shēngyi hǎo, qián liǎng nián yě hěn nán zhuàn qián.", "Maar een zaak beginnen is riskant. Zelfs als het goed loopt, verdien je de eerste twee jaar moeilijk iets."],
    ["B", "我知道。就算赔钱，我也想试一试。", "Wǒ zhīdào. Jiùsuàn péi qián, wǒ yě xiǎng shì yi shì.", "Dat weet ik. Zelfs als ik er geld op verlies, wil ik het proberen."],
    ["A", "你父母同意吗？", "Nǐ fùmǔ tóngyì ma?", "Vinden je ouders het goed?"],
    ["B", "还没说呢。不过就算他们反对，我也不会改变主意。", "Hái méi shuō ne. Búguò jiùsuàn tāmen fǎnduì, wǒ yě bú huì gǎibiàn zhǔyi.", "Ik heb het nog niet gezegd. Maar zelfs als ze ertegen zijn, verander ik niet van gedachten."]
  ],
  reading: {
    title: "老李学英语",
    lines: [
      { cn: "老李今年六十五岁，退休以后决定学英语。", py: "Lǎo Lǐ jīnnián liùshíwǔ suì, tuìxiū yǐhòu juédìng xué Yīngyǔ.", nl: "Lao Li is dit jaar vijfenzestig. Na zijn pensioen besloot hij Engels te leren." },
      { cn: "儿子笑他说：\"您这么大年纪了，就算学会了，又有什么用呢？\"", py: "Érzi xiào tā shuō: \"Nín zhème dà niánjì le, jiùsuàn xuéhuì le, yòu yǒu shénme yòng ne?\"", nl: "Zijn zoon lachte hem uit: \"Op uw leeftijd: zelfs als u het leert, wat heeft u eraan?\"" },
      { cn: "老李回答：\"就算没有用，我也觉得有意思。\"", py: "Lǎo Lǐ huídá: \"Jiùsuàn méiyǒu yòng, wǒ yě juéde yǒu yìsi.\"", nl: "Lao Li antwoordde: \"Zelfs als het nutteloos is, vind ik het interessant.\"" },
      { cn: "从那天起，他每天早上六点起床背单词。", py: "Cóng nà tiān qǐ, tā měitiān zǎoshang liù diǎn qǐchuáng bèi dāncí.", nl: "Vanaf die dag stond hij elke ochtend om zes uur op om woordjes te leren." },
      { cn: "就算刮风下雨，他也去公园跟外国人练习口语。", py: "Jiùsuàn guā fēng xià yǔ, tā yě qù gōngyuán gēn wàiguórén liànxí kǒuyǔ.", nl: "Zelfs bij wind en regen ging hij naar het park om met buitenlanders te oefenen." },
      { cn: "一年以后，儿子要带全家去英国旅行。", py: "Yì nián yǐhòu, érzi yào dài quán jiā qù Yīngguó lǚxíng.", nl: "Een jaar later wilde de zoon met het hele gezin naar Engeland op reis." },
      { cn: "到了伦敦，儿子的英语不够用，问路、点菜都要靠老李。", py: "Dàole Lúndūn, érzi de Yīngyǔ bú gòu yòng, wèn lù, diǎn cài dōu yào kào Lǎo Lǐ.", nl: "In Londen schoot het Engels van de zoon tekort. De weg vragen en eten bestellen: alles moest via Lao Li." },
      { cn: "儿子不好意思地说：\"爸，看来学习就算晚一点儿也不怕。\"", py: "Érzi bù hǎoyìsi de shuō: \"Bà, kànlái xuéxí jiùsuàn wǎn yìdiǎnr yě bú pà.\"", nl: "De zoon zei verlegen: \"Pap, het lijkt erop dat het niet erg is als je wat later begint met leren.\"" }
    ],
    questions: [
      { type: "mc", q: "Wat vond de zoon eerst van het plan van Lao Li?",
        options: ["Hij vond het nutteloos op die leeftijd.", "Hij vond het een goed idee.", "Hij wilde samen met hem Engels leren.", "Hij vond dat zijn vader eerst moest reizen."], answer: 0,
        why: ["Goed: 就算学会了，又有什么用呢？", "Hij lachte zijn vader juist uit: 儿子笑他.", "Dat staat niet in de tekst.", "Over reizen gaat het pas een jaar later."] },
      { type: "mc", q: "Wat gebeurde er in Londen?",
        options: ["Lao Li hielp het gezin met zijn Engels.", "De zoon hielp zijn vader met Engels.", "Niemand sprak genoeg Engels.", "Lao Li bleef thuis in het hotel."], answer: 0,
        why: ["Goed: 问路、点菜都要靠老李。", "Het is andersom: het Engels van de zoon schoot tekort.", "Lao Li sprak wel genoeg Engels.", "Dat staat niet in de tekst."] },
      { type: "mc", q: "就算刮风下雨，他也去公园。Wat betekent 就算 ... 也 hier?",
        options: ["Ook bij wind en regen ging hij.", "Omdat het waaide en regende, ging hij.", "Alleen bij wind en regen ging hij.", "Bij wind en regen ging hij niet."], answer: 0,
        why: ["Goed: 就算 noemt een hindernis, 也 zegt dat hij toch ging.", "就算 geeft geen reden; het noemt een hindernis.", "就算 betekent niet \"alleen als\"; dat is 只有 ... 才.", "也 zegt juist dat hij wel ging."] }
    ]
  },
  questions: [
    { type: "mc", q: "___你不喜欢，也得尝一尝。(Zelfs als je het niet lekker vindt, moet je het toch proeven.)",
      options: ["就算", "虽然", "因为", "只要"], answer: 0,
      why: ["Goed: 就算 + mogelijke situatie, 也 + wat toch moet.", "虽然 gaat over een feit en vraagt om 但是, niet om 也.", "因为 geeft een reden; hier is het een hindernis.", "只要 betekent \"als ... maar\" en vraagt om 就."] },
    { type: "mc", q: "Welke zin klopt?",
      options: ["就算你不说，我也知道。", "就算你不说，也我知道。", "就算你不说，我知道也。", "也就算你不说，我知道。"], answer: 0,
      why: ["Goed: 也 staat na het onderwerp 我, vóór het werkwoord.", "也 staat niet vóór het onderwerp.", "也 staat vóór het werkwoord, niet aan het eind.", "也 hoort in de tweede zin, niet vóór 就算."] },
    { type: "order", q: "Zet in de goede volgorde: \"Zelfs als je het er niet mee eens bent, ga ik toch.\"",
      tokens: [["就算", "jiùsuàn"], ["你不同意，", "nǐ bù tóngyì,"], ["我", "wǒ"], ["也要", "yě yào"], ["去", "qù"]] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["就算昨天很冷，但是他去游泳了。", "虽然昨天很冷，但是他去游泳了。", "就算明天很冷，他也要去游泳。", "即使明天很冷，他也要去游泳。"], answer: 0,
      why: ["Goed: gisteren was het echt koud. Voor een feit gebruik je 虽然 ... 但是.", "Dit klopt: 虽然 + feit, 但是 + tegenstelling.", "Dit klopt: morgen is een mogelijkheid.", "Dit klopt: 即使 werkt net als 就算, maar formeler."] },
    { type: "mc", q: "Je schrijft een formeel verslag. Welke zin past het best?",
      options: ["即使面临困难，公司也将继续投资。", "就算有困难，公司也会接着投钱。", "就算困难，公司也继续投资吧。", "哪怕困难嘛，公司也继续投资。"], answer: 0,
      why: ["Goed: 即使 en woorden als 面临 en 将 passen in schrijftaal.", "Dit is correct, maar 就算 en 接着投钱 zijn spreektaal.", "吧 en 就算 maken het informeel; 就算困难 zonder werkwoord is ook zwak.", "嘛 is spreektaal en past niet in een verslag."] },
    { type: "fill", q: "就算是周末，他___要去公司加班。(Zelfs in het weekend moet hij overwerken op kantoor.)", answers: ["也", "还"],
      hint: "Welk bijwoord staat in de tweede zin na 就算?", why: "就算 ... 也 (of 还): 也 staat na het onderwerp, vóór het werkwoord." },
    { type: "mc", q: "___只有一分钟，我也想见你。(Al is het maar één minuut, ik wil je zien.) Welk woord legt de meeste nadruk op het uiterste geval?",
      options: ["哪怕", "虽然", "因为", "既然"], answer: 0,
      why: ["Goed: 哪怕 + 只 legt nadruk op een uiterst klein geval.", "虽然 gaat over een feit en vraagt om 但是.", "因为 geeft een reden.", "既然 betekent \"nu ... toch\" en gaat over een bekend feit."] },
    { type: "order", q: "Zet in de goede volgorde: \"Zelfs een expert maakt weleens fouten.\"",
      tokens: [["就算", "jiùsuàn"], ["是", "shì"], ["专家，", "zhuānjiā,"], ["也会", "yě huì"], ["犯错", "fàn cuò"]] },
    { type: "mc", q: "不想去就算了。Wat betekent dit?",
      options: ["Als je niet wilt gaan, laat het dan maar.", "Zelfs als je niet wilt, ga je toch.", "Je moet gaan, ook als je niet wilt.", "Je wilde niet gaan, maar je ging toch."], answer: 0,
      why: ["Goed: 就算了 = \"dan laat je het maar\". Dit is 就 + 算了.", "Dat zou 就算不想去，也要去 zijn.", "Er staat geen 也 + plicht in de zin.", "Er staat geen 但是 of 还是 in de zin."] },
    { type: "open", q: "Vertaal (spreektaal): \"Zelfs als het morgen regent, gaan we.\"", model: ["就算明天下雨，我们也去。", "明天就算下雨，我们也要去。"],
      tip: "Check: 就算 + situatie, en 也 na 我们, vóór 去." },
    { type: "open", q: "Vertaal: \"Hoe druk je het ook hebt, je moet toch slapen.\" Gebruik 就算.", model: ["就算再忙，你也得睡觉。", "你就算再忙，也要睡觉。"],
      tip: "Check: 就算 + 再忙, en 也 + 得/要 in de tweede zin." }
  ],
  review: [
    { type: "mc", q: "___没人帮我，我也能做完。(Zelfs als niemand me helpt, krijg ik het af.)",
      options: ["就算", "虽然", "只有", "因为"], answer: 0,
      why: ["Goed: 就算 + mogelijke situatie, 也 + resultaat.", "虽然 gaat over een feit en vraagt om 但是.", "只有 vraagt om 才, niet om 也.", "因为 geeft een reden, geen hindernis."] },
    { type: "mc", q: "Welke zin klopt?",
      options: ["就算他道歉，我也不原谅他。", "就算他道歉，也我不原谅他。", "就算他道歉，我不原谅他也。", "就算他道歉，但是我不原谅他。"], answer: 0,
      why: ["Goed: 也 na het onderwerp, vóór het werkwoord.", "也 staat niet vóór het onderwerp.", "也 staat niet aan het eind.", "Na 就算 hoort 也, niet 但是."] },
    { type: "mc", q: "Wat is het verschil tussen 就算 en 即使?",
      options: ["就算 is spreektaal; 即使 is neutraler en formeler.", "即使 is spreektaal; 就算 is formeler.", "就算 gaat over feiten; 即使 over mogelijkheden.", "就算 vraagt om 但是; 即使 om 也."], answer: 0,
      why: ["Goed.", "Het is precies andersom.", "Allebei gaan over mogelijkheden; voor feiten gebruik je 虽然.", "Allebei vragen om 也."] }
  ]
})
