({
  id: "14", slug: "yaobushi", title: "要不是 ... (就)", sub: "Als dat er niet was geweest, dan ...",
  canDo: "Je kunt nu zeggen wat er gebeurd zou zijn zonder een bepaald feit, met 要不是 ... (就).",
  guess: {
    q: "要不是你提醒我，我就忘了。Wat is er echt gebeurd, denk je?",
    options: ["Je herinnerde me eraan, dus ik vergat het niet.", "Je herinnerde me er niet aan, dus ik vergat het.", "Je herinnerde me eraan, maar ik vergat het toch.", "Ik vergat het, en daarna herinnerde je me eraan."], answer: 0,
    why: ["Goed: 要不是 noemt een echt feit (je herinnerde me eraan). Na 就 staat wat er anders gebeurd was.", "要不是 bevat zelf de ontkenning. Het feit erna is juist wél gebeurd.", "Na 就 staat wat er níet gebeurd is, dankzij jou.", "Ik vergat het niet: 忘了 is wat er zonder jou gebeurd was."]
  },
  problem: "Soms wil je zeggen: \"Als jij er niet was geweest, was het misgegaan.\" In het Nederlands heb je daarvoor een hele constructie nodig. In het Chinees zeg je 要不是 (yàobushì) + het echte feit. Daarna volgt, vaak met 就, wat er anders gebeurd zou zijn.",
  pattern: [
    { l: "als niet", v: "要不是", c: 1, key: true }, { l: "echt feit", v: "你提醒我", c: 2 },
    { l: "wie", v: "我", c: 3 }, { l: "dan", v: "就", c: 4 }, { l: "wat anders gebeurd was", v: "忘了", c: 5 }
  ],
  patternCap: "要不是 + echt feit (zin of naamwoord)，(onderwerp) + 就/早就/可能/肯定 + ander resultaat (了) · formeel: 若不是 / 如果不是",
  rules: [
    "Na 要不是 komt een feit dat echt waar is. De ontkenning zit al in 要不是.",
    "Na 要不是 kan een zin of alleen een naamwoord staan: 要不是你 / 要不是这场雨.",
    "In de tweede zin staat vaak 就, 早就, 可能 of 肯定, en aan het eind vaak 了.",
    "De tweede zin beschrijft wat er níet gebeurd is (maar gebeurd zou zijn).",
    "要不是 is spreektaal. In schrijftaal gebruik je 如果不是 of 若不是."
  ],
  pitfall: "Zet geen tweede ontkenning na 要不是. 要不是你帮我 betekent \"als jij me niet had geholpen\". 要不是你不帮我 is fout.",
  examples: [
    { cn: "要不是你提醒我，我就忘了。", py: "Yàobushì nǐ tíxǐng wǒ, wǒ jiù wàng le.", nl: "Als jij me er niet aan had herinnerd, was ik het vergeten." },
    { cn: "要不是这场雨，比赛早就结束了。", py: "Yàobushì zhè chǎng yǔ, bǐsài zǎojiù jiéshù le.", nl: "Zonder deze regen was de wedstrijd allang afgelopen." },
    { cn: "要不是堵车，我们八点就到了。", py: "Yàobushì dǔchē, wǒmen bā diǎn jiù dào le.", nl: "Als er geen file was geweest, waren we om acht uur al aangekomen." },
    { cn: "要不是你，我可能已经放弃了。", py: "Yàobushì nǐ, wǒ kěnéng yǐjīng fàngqì le.", nl: "Zonder jou had ik het waarschijnlijk al opgegeven." }
  ],
  nuance: [
    { h: "要不是 of 如果不?",
      p: "要不是 gaat altijd over een feit dat echt waar is. Je kijkt terug en denkt: zonder dat was het anders gelopen. 如果不 ... 就 is een gewone voorwaarde. Die kan ook over de toekomst gaan: misschien gebeurt het, misschien niet. Voor de toekomst gebruik je dus nooit 要不是.",
      ex: [
        { cn: "如果你不来，我就自己去。", py: "Rúguǒ nǐ bù lái, wǒ jiù zìjǐ qù.", nl: "Als jij niet komt, ga ik alleen. (toekomst, onzeker)" },
        { cn: "要不是你来了，我就自己去了。", py: "Yàobushì nǐ lái le, wǒ jiù zìjǐ qù le.", nl: "Als jij niet was gekomen, was ik alleen gegaan. (je kwam echt)" }
      ] },
    { h: "要不是 of 幸亏?",
      p: "幸亏 (xìngkuī) zegt hetzelfde feit, maar dan positief: \"gelukkig ...\". Daarna volgt 不然 of 要不然 met wat er anders gebeurd was. Je kunt vaak het ene in het andere omzetten: 要不是 A，就 B = 幸亏 A，不然 B. 幸亏 legt de nadruk op het geluk; 要不是 op wat er bijna misging.",
      ex: [
        { cn: "幸亏你提醒我，不然我就忘了。", py: "Xìngkuī nǐ tíxǐng wǒ, bùrán wǒ jiù wàng le.", nl: "Gelukkig herinnerde je me eraan, anders was ik het vergeten." },
        { cn: "要不是你提醒我，我就忘了。", py: "Yàobushì nǐ tíxǐng wǒ, wǒ jiù wàng le.", nl: "Als jij me er niet aan had herinnerd, was ik het vergeten." }
      ] },
    { h: "Niet verwarren met 要不",
      p: "要不 (zonder 是) betekent \"anders\" of \"zullen we ...?\". Het staat in de tweede zin of aan het begin van een voorstel. 要不是 staat altijd in de eerste zin, vóór het feit.",
      ex: [
        { cn: "快走吧，要不就来不及了。", py: "Kuài zǒu ba, yàobù jiù láibují le.", nl: "Laten we snel gaan, anders zijn we te laat." }
      ] },
    { h: "Register",
      p: "要不是 hoort bij spreektaal en verhalend proza. In formele teksten schrijf je 如果不是 of 若不是 (ruò bú shì). De betekenis blijft gelijk: een feit, en wat er zonder dat feit gebeurd was."
    }
  ],
  mistakes: [
    { wrong: "要不是你不帮我，我就失败了。", right: "要不是你帮我，我就失败了。", why: "要不是 bevat de ontkenning al. Het feit erna is positief: je hebt me geholpen." },
    { wrong: "要不是明天下雨，我们就去爬山。", right: "如果明天不下雨，我们就去爬山。", why: "Morgen is nog geen feit. Voor een voorwaarde in de toekomst gebruik je 如果不." },
    { wrong: "幸亏你提醒我，我就忘了。", right: "要不是你提醒我，我就忘了。", why: "Na 幸亏 komt 不然 + wat er anders gebeurd was. Zonder 不然 klopt de betekenis niet." },
    { wrong: "我就忘了，要不是你提醒我。", right: "要不是你提醒我，我就忘了。", why: "要不是 + feit staat in de eerste zin. Het resultaat met 就 volgt daarna." }
  ],
  vocab: [
    ["要不是", "yàobushì", "als ... niet (geweest was)"], ["幸亏", "xìngkuī", "gelukkig"], ["提醒", "tíxǐng", "eraan herinneren, waarschuwen"],
    ["堵车", "dǔchē", "file"], ["放弃", "fàngqì", "opgeven"], ["不然", "bùrán", "anders"],
    ["航班", "hángbān", "vlucht"], ["护照", "hùzhào", "paspoort"], ["及时", "jíshí", "op tijd, tijdig"], ["后果", "hòuguǒ", "gevolg (meestal negatief)"]
  ],
  dialogue: [
    ["A", "你终于到了！路上怎么样？", "Nǐ zhōngyú dào le! Lùshang zěnmeyàng?", "Je bent er eindelijk! Hoe was de reis?"],
    ["B", "别提了。要不是司机开得快，我就赶不上飞机了。", "Bié tí le. Yàobushì sījī kāi de kuài, wǒ jiù gǎn bu shàng fēijī le.", "Hou op. Als de chauffeur niet zo snel had gereden, had ik het vliegtuig gemist."],
    ["A", "怎么了？", "Zěnme le?", "Wat was er?"],
    ["B", "我出门以后才发现护照忘带了，又跑回家拿。", "Wǒ chūmén yǐhòu cái fāxiàn hùzhào wàng dài le, yòu pǎo huí jiā ná.", "Pas toen ik buiten was, merkte ik dat ik mijn paspoort vergeten was. Ik rende terug om het te halen."],
    ["A", "幸亏你发现得早，不然后果很严重。", "Xìngkuī nǐ fāxiàn de zǎo, bùrán hòuguǒ hěn yánzhòng.", "Gelukkig merkte je het op tijd, anders waren de gevolgen ernstig geweest."],
    ["B", "是啊，要不是我妈打电话问我，我到机场才会发现。", "Shì a, yàobushì wǒ mā dǎ diànhuà wèn wǒ, wǒ dào jīchǎng cái huì fāxiàn.", "Ja. Als mijn moeder niet had gebeld om het te vragen, had ik het pas op het vliegveld gemerkt."]
  ],
  reading: {
    title: "一次难忘的登山",
    lines: [
      { cn: "去年秋天，我和朋友去爬一座有名的山。", py: "Qùnián qiūtiān, wǒ hé péngyou qù pá yí zuò yǒumíng de shān.", nl: "Afgelopen herfst gingen een vriend en ik een bekende berg beklimmen." },
      { cn: "出发前，一位老人提醒我们：下午山上可能会下大雨。", py: "Chūfā qián, yí wèi lǎorén tíxǐng wǒmen: xiàwǔ shān shang kěnéng huì xià dà yǔ.", nl: "Voor vertrek waarschuwde een oude man ons: 's middags kon het op de berg hard gaan regenen." },
      { cn: "我们听了他的话，带上了雨衣，也决定中午以前下山。", py: "Wǒmen tīngle tā de huà, dàishangle yǔyī, yě juédìng zhōngwǔ yǐqián xià shān.", nl: "We luisterden naar hem, namen regenjassen mee en besloten voor de middag af te dalen." },
      { cn: "果然，一点钟左右，天突然黑了，雨越下越大。", py: "Guǒrán, yī diǎn zhōng zuǒyòu, tiān tūrán hēi le, yǔ yuè xià yuè dà.", nl: "En inderdaad: rond één uur werd het plotseling donker en ging het steeds harder regenen." },
      { cn: "那时我们已经在山下的饭馆里吃饭了。", py: "Nà shí wǒmen yǐjīng zài shān xià de fànguǎn li chīfàn le.", nl: "Op dat moment zaten we al te eten in een restaurant onder aan de berg." },
      { cn: "要不是那位老人，我们可能还在山顶上。", py: "Yàobushì nà wèi lǎorén, wǒmen kěnéng hái zài shāndǐng shang.", nl: "Zonder die oude man hadden we misschien nog op de top gestaan." },
      { cn: "听说有几个人被困在山上，到晚上才被救下来。", py: "Tīngshuō yǒu jǐ ge rén bèi kùn zài shān shang, dào wǎnshang cái bèi jiù xiàlai.", nl: "We hoorden dat een paar mensen vast kwamen te zitten op de berg en pas 's avonds werden gered." },
      { cn: "要不是我们及时下山，后果真的很难想象。", py: "Yàobushì wǒmen jíshí xià shān, hòuguǒ zhēn de hěn nán xiǎngxiàng.", nl: "Als we niet op tijd waren afgedaald, waren de gevolgen echt moeilijk voor te stellen." },
      { cn: "要不是这次经历，我也不会明白：听听老人的话，有时候能救命。", py: "Yàobushì zhè cì jīnglì, wǒ yě bú huì míngbai: tīngting lǎorén de huà, yǒushíhou néng jiù mìng.", nl: "Zonder deze ervaring had ik niet begrepen dat luisteren naar ouderen soms je leven kan redden." }
    ],
    questions: [
      { type: "mc", q: "Wat deden de schrijver en zijn vriend na de waarschuwing?",
        options: ["Ze namen regenjassen mee en daalden voor de middag af.", "Ze bleven thuis.", "Ze klommen snel naar de top en bleven daar.", "Ze gingen 's middags pas vertrekken."], answer: 0,
        why: ["Goed: 带上了雨衣，也决定中午以前下山。", "Ze gingen wel de berg op.", "Ze daalden juist op tijd af.", "Ze besloten voor de middag beneden te zijn."] },
      { type: "mc", q: "Waar waren ze toen de regen begon?",
        options: ["In een restaurant onder aan de berg.", "Op de top van de berg.", "Halverwege de berg.", "Thuis bij de oude man."], answer: 0,
        why: ["Goed: 已经在山下的饭馆里吃饭了。", "Op de top waren ze juist níet, dankzij de oude man.", "Ze waren al beneden.", "Dat staat niet in de tekst."] },
      { type: "mc", q: "要不是那位老人，我们可能还在山顶上。Wat is echt gebeurd?",
        options: ["De oude man waarschuwde hen, dus ze waren niet meer op de top.", "Er was geen oude man, dus ze zaten op de top.", "De oude man stond zelf op de top.", "Ze bleven op de top, ondanks de oude man."], answer: 0,
        why: ["Goed: 要不是 + feit (de oude man was er). Het tweede deel is níet gebeurd.", "要不是 bevat de ontkenning al; de oude man was er wel.", "Over de oude man op de top staat niets in de tekst.", "Het tweede deel na 要不是 is juist niet gebeurd."] }
    ]
  },
  questions: [
    { type: "mc", q: "___你帮忙，我一个人搬不完。(Als jij niet had geholpen, had ik het in mijn eentje niet kunnen verhuizen.)",
      options: ["要不是", "要不", "幸亏", "如果"], answer: 0,
      why: ["Goed: 要不是 + feit (je hielp), daarna wat er anders gebeurd was.", "要不 betekent \"anders\" en staat niet vóór het feit in de eerste zin.", "Na 幸亏 moet 不然 komen voor het andere resultaat.", "如果你帮忙 betekent \"als je helpt\": de ontkenning ontbreekt."] },
    { type: "mc", q: "Welke zin klopt?",
      options: ["要不是你告诉我，我还不知道呢。", "要不是你不告诉我，我还不知道呢。", "要不是你告诉我，我不还知道呢。", "你告诉我要不是，我还不知道呢。"], answer: 0,
      why: ["Goed: 要不是 + positief feit.", "要不是 bevat de ontkenning al; 不告诉 maakt het dubbel.", "还 staat vóór 不: 还不知道.", "要不是 staat vóór het feit, niet erna."] },
    { type: "order", q: "Zet in de goede volgorde: \"Als er geen file was geweest, waren we er al.\"",
      tokens: [["要不是", "yàobushì"], ["堵车，", "dǔchē,"], ["我们", "wǒmen"], ["早就", "zǎojiù"], ["到了", "dào le"]],
      alt: ["我们要不是堵车，早就到了"] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["要不是明天考试，我就去看电影。", "要不是今天考试，我就去看电影了。", "如果明天不考试，我就去看电影。", "幸亏今天没考试，不然我就去不了了。"], answer: 0,
      why: ["Goed: morgen is nog geen feit. Gebruik 如果明天不考试.", "Dit klopt: vandaag is er echt een examen.", "Dit klopt: 如果不 voor een voorwaarde in de toekomst.", "Dit klopt: 幸亏 + feit, 不然 + wat er anders was gebeurd."] },
    { type: "mc", q: "要不是你提醒我，我就忘了。Welke zin betekent hetzelfde?",
      options: ["幸亏你提醒我，不然我就忘了。", "幸亏你没提醒我，不然我就忘了。", "幸亏你提醒我，我就忘了。", "如果你提醒我，我就忘了。"], answer: 0,
      why: ["Goed: 要不是 A，就 B = 幸亏 A，不然 B.", "Er hoort geen ontkenning bij het feit: je hebt me wél herinnerd.", "Zonder 不然 klopt de betekenis niet: dan vergat ik het juist.", "如果 zonder 不 geeft de omgekeerde betekenis."] },
    { type: "fill", q: "要不是他，我们早___输了。(Zonder hem hadden we allang verloren.)", answers: ["就"],
      hint: "Welk woord volgt op 早 in de tweede zin?", why: "早就 = allang. In de tweede zin na 要不是 staat vaak 就 of 早就." },
    { type: "mc", q: "快点儿吧，___就来不及了。(Schiet op, anders zijn we te laat.)",
      options: ["要不", "要不是", "幸亏", "就算"], answer: 0,
      why: ["Goed: 要不 = anders, in de tweede zin.", "要不是 staat in de eerste zin, vóór een feit.", "幸亏 betekent \"gelukkig\" en past hier niet.", "就算 betekent \"zelfs als\" en vraagt om 也."] },
    { type: "order", q: "Zet in de goede volgorde: \"Gelukkig had je een paraplu bij je, anders waren we nat geworden.\"",
      tokens: [["幸亏", "xìngkuī"], ["你带了伞，", "nǐ dàile sǎn,"], ["不然", "bùrán"], ["我们就", "wǒmen jiù"], ["淋湿了", "línshī le"]] },
    { type: "mc", q: "Je schrijft een formeel verslag. Welke zin past het best?",
      options: ["若不是及时采取措施，损失将更加严重。", "要不是赶紧想办法，亏得更多了。", "要不是赶紧弄，就惨了。", "幸亏赶紧弄了，要不就惨了。"], answer: 0,
      why: ["Goed: 若不是 is de formele vorm; 采取措施 en 将 passen in schrijftaal.", "Dit is spreektaal; ook 赶紧 en 亏 klinken informeel.", "弄 en 惨了 zijn duidelijk spreektaal.", "要不 en 惨了 zijn spreektaal."] },
    { type: "open", q: "Vertaal: \"Als jij me niet had geholpen, was ik niet geslaagd.\"", model: ["要不是你帮我，我就考不过了。", "要不是你帮助我，我肯定不会成功。"],
      tip: "Check: 要不是 + positief feit (帮我), zonder extra 不 erachter." },
    { type: "open", q: "Vertaal met 幸亏: \"Gelukkig was je er, anders wist ik niet wat ik moest doen.\"", model: ["幸亏你在，不然我不知道该怎么办。", "幸亏有你，要不然我真不知道怎么办。"],
      tip: "Check: 幸亏 + feit, dan 不然/要不然 + wat er anders was gebeurd." }
  ],
  review: [
    { type: "mc", q: "___这张地图，我们早就迷路了。(Zonder deze kaart waren we allang verdwaald.)",
      options: ["要不是", "要不", "只要", "就算"], answer: 0,
      why: ["Goed: 要不是 + naamwoord (een feit: we hadden de kaart).", "要不 betekent \"anders\" en staat niet vóór een feit in de eerste zin.", "只要 betekent \"als ... maar\" en geeft geen tegengesteld resultaat.", "就算 betekent \"zelfs als\" en vraagt om 也."] },
    { type: "mc", q: "Welke zin klopt?",
      options: ["要不是下雪，飞机早就起飞了。", "要不是不下雪，飞机早就起飞了。", "要不是下雪，飞机早就起飞。", "飞机早就起飞了，要不是下雪就。"], answer: 0,
      why: ["Goed: 要不是 + feit, 早就 ... 了.", "要不是 bevat de ontkenning al.", "Bij 早就 hoort 了 aan het eind.", "要不是 + feit staat vooraan, en 就 staat in de tweede zin."] },
    { type: "mc", q: "Wanneer gebruik je 要不是, en niet 如果不?",
      options: ["Als het feit echt waar is en je terugkijkt.", "Als je het over de toekomst hebt.", "Als het feit niet waar is.", "Alleen in formele teksten."], answer: 0,
      why: ["Goed.", "Voor de toekomst gebruik je 如果不.", "Na 要不是 komt juist een feit dat wél waar is.", "要不是 is spreektaal; formeel is 若不是."] }
  ]
})
