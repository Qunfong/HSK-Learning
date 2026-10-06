({
  id: "09", slug: "de-graad", title: "Hoe goed: werkwoord + 得", sub: "Hij rent snel, jij spreekt goed Chinees",
  canDo: "Je kunt nu zeggen hoe goed, hoe snel of hoe mooi iemand iets doet, met werkwoord + 得 + beoordeling.",
  guess: {
    q: "\"Hij spreekt heel goed Chinees.\" Welke zin klopt, denk je?",
    options: ["他汉语说得很好。", "他说汉语得很好。", "他汉语说很好得。", "他得说汉语很好。"], answer: 0,
    why: ["Goed: het object (汉语) vooraan, dan 说 + 得 + 很好.", "得 moet direct na het werkwoord staan, niet na het object.", "得 staat vóór de beoordeling, niet erachter.", "得 komt ná het werkwoord, niet ervoor."]
  },
  problem: "In het Nederlands zet je \"snel\" of \"goed\" gewoon bij het werkwoord: hij rent snel. In het Chinees gaat dat niet zomaar. Je zet 得 (de) direct na het werkwoord, en daarna je oordeel: 跑得很快. Zo zeg je hoe goed of hoe iemand iets doet.",
  pattern: [
    { l: "wie", v: "他", c: 1 }, { l: "(object)", v: "汉语", c: 3 }, { l: "werkwoord", v: "说", c: 4 },
    { l: "得", v: "得", c: 2, key: true }, { l: "beoordeling", v: "很好", c: 5 }
  ],
  patternCap: "Wie + werkwoord + 得 + (很/非常/不) + bijvoeglijk naamwoord. Met object: 说汉语说得很好 of 汉语说得很好.",
  rules: [
    "得 staat direct na het werkwoord. Daarna komt het oordeel: 跑得很快.",
    "Met een object herhaal je het werkwoord (说汉语说得很好), of je zet het object vóór het werkwoord (汉语说得很好).",
    "Ontkennen doe je ná 得: 跑得不快.",
    "Vragen: 跑得快不快？ of 跑得怎么样？",
    "Na 得 staat meestal 很, 非常 of 不太. Een kaal 快 klinkt als een vergelijking."
  ],
  pitfall: "Er mag nooit een object tussen het werkwoord en 得, of na 得. 他说汉语得很好 en 他说得汉语很好 zijn fout.",
  examples: [
    { cn: "他跑得很快。", py: "Tā pǎo de hěn kuài.", nl: "Hij rent heel snel." },
    { cn: "你汉语说得很好！", py: "Nǐ Hànyǔ shuō de hěn hǎo!", nl: "Je spreekt heel goed Chinees!" },
    { cn: "她做饭做得非常好吃。", py: "Tā zuò fàn zuò de fēicháng hǎochī.", nl: "Zij kookt heel lekker." },
    { cn: "我昨天睡得不好。", py: "Wǒ zuótiān shuì de bù hǎo.", nl: "Ik heb gisteren niet goed geslapen." }
  ],
  nuance: [
    { h: "Het object: herhalen of vooraan?",
      p: "Allebei is goed. Het werkwoord herhalen is duidelijk en volledig. Het object vooraan zetten is korter en hoor je veel in spreektaal. Wat nooit kan: het object na het werkwoord laten staan en dan 得 erachter.",
      ex: [
        { cn: "他唱歌唱得很好。", py: "Tā chànggē chàng de hěn hǎo.", nl: "Hij zingt heel goed." },
        { cn: "他歌唱得很好。", py: "Tā gē chàng de hěn hǎo.", nl: "Hij zingt heel goed." }
      ] },
    { h: "Oordeel, geen gebeurtenis: geen 了",
      p: "Met 得 geef je een oordeel over hoe iets gaat of ging. Je vertelt niet alleen dát het gebeurde. Daarom staat er geen 了 achter het werkwoord. 他跑了 is: hij is weggerend. 他跑得很快 is: hij rent (of rende) snel.",
      ex: [
        { cn: "他跑了。", py: "Tā pǎo le.", nl: "Hij is weggerend." },
        { cn: "他昨天跑得很快。", py: "Tā zuótiān pǎo de hěn kuài.", nl: "Hij rende gisteren heel snel." }
      ] },
    { h: "得 of 地?",
      p: "Beide klinken als de. 地 staat vóór het werkwoord en zegt hoe iemand iets doet: 高兴地说 (blij zeggen). 得 staat ná het werkwoord en geeft een oordeel over het resultaat: 说得很清楚 (duidelijk spreken). 的 staat vóór een zelfstandig naamwoord.",
      ex: [
        { cn: "他高兴地说：\"太好了！\"", py: "Tā gāoxìng de shuō: \"Tài hǎo le!\"", nl: "Hij zei blij: \"Geweldig!\"" },
        { cn: "老师说得很清楚。", py: "Lǎoshī shuō de hěn qīngchu.", nl: "De leraar praat heel duidelijk." }
      ] },
    { h: "Even vooruitkijken: 听得懂",
      p: "Je kent misschien al 听得懂 (kunnen verstaan). Daar staat na 得 een resultaat, en betekent 得 \"kunnen\". Dat leer je later (HSK 4). Het verschil: staat er een oordeel met 很 of 不 na 得, dan gaat het om hoe goed. Ontkennen gaat ook anders: 说得不好, maar 听不懂.",
      ex: [
        { cn: "我听得懂，可是说得不好。", py: "Wǒ tīng de dǒng, kěshì shuō de bù hǎo.", nl: "Ik kan het verstaan, maar ik spreek het niet goed." }
      ] }
  ],
  mistakes: [
    { wrong: "他说汉语得很好。", right: "他说汉语说得很好。", why: "得 staat direct na het werkwoord. Herhaal het werkwoord na het object." },
    { wrong: "你说得汉语很好。", right: "你汉语说得很好。", why: "Het object staat nooit na 得. Zet het vóór het werkwoord." },
    { wrong: "他不跑得快。", right: "他跑得不快。", why: "Bij 得 staat 不 ná 得, vóór het oordeel." },
    { wrong: "他跑了得很快。", right: "他跑得很快。", why: "Met 得 geef je een oordeel. Daar hoort geen 了 bij het werkwoord." }
  ],
  vocab: [
    ["得", "de", "(na werkwoord: hoe goed / hoe)"], ["跑", "pǎo", "rennen"], ["快", "kuài", "snel"],
    ["慢", "màn", "langzaam"], ["清楚", "qīngchu", "duidelijk"], ["唱歌", "chànggē", "zingen"],
    ["游泳", "yóuyǒng", "zwemmen"], ["比赛", "bǐsài", "wedstrijd"], ["好吃", "hǎochī", "lekker"], ["认真", "rènzhēn", "serieus, zorgvuldig"]
  ],
  dialogue: [
    ["A", "听说你上个星期去比赛了。你游得怎么样？", "Tīngshuō nǐ shàng ge xīngqī qù bǐsài le. Nǐ yóu de zěnmeyàng?", "Ik hoorde dat je vorige week een wedstrijd had. Hoe zwom je?"],
    ["B", "游得不太好，我是第五名。", "Yóu de bú tài hǎo, wǒ shì dì wǔ míng.", "Niet zo goed, ik werd vijfde."],
    ["A", "第五名也不错啊！", "Dì wǔ míng yě búcuò a!", "Vijfde is toch ook niet slecht!"],
    ["B", "可是我朋友游得比我快多了，她是第一名。", "Kěshì wǒ péngyou yóu de bǐ wǒ kuài duō le, tā shì dì yī míng.", "Maar mijn vriendin zwom veel sneller dan ik, zij werd eerste."],
    ["A", "你游泳游得已经很好了，别着急。", "Nǐ yóuyǒng yóu de yǐjīng hěn hǎo le, bié zháojí.", "Je zwemt al heel goed, maak je geen zorgen."]
  ],
  reading: {
    title: "我的同屋",
    lines: [
      { cn: "我的同屋叫小王，她是中国人。", py: "Wǒ de tóngwū jiào Xiǎo Wáng, tā shì Zhōngguó rén.", nl: "Mijn kamergenote heet Xiao Wang. Ze is Chinees." },
      { cn: "小王做饭做得非常好吃，每天晚上我们一起吃饭。", py: "Xiǎo Wáng zuò fàn zuò de fēicháng hǎochī, měi tiān wǎnshang wǒmen yìqǐ chīfàn.", nl: "Xiao Wang kookt heel lekker. Elke avond eten we samen." },
      { cn: "她英语也说得很好，可是说得太快了。", py: "Tā Yīngyǔ yě shuō de hěn hǎo, kěshì shuō de tài kuài le.", nl: "Ze spreekt ook goed Engels, maar ze praat te snel." },
      { cn: "我想学汉语，所以她每天教我半个小时。", py: "Wǒ xiǎng xué Hànyǔ, suǒyǐ tā měi tiān jiāo wǒ bàn ge xiǎoshí.", nl: "Ik wil Chinees leren, dus ze geeft me elke dag een half uur les." },
      { cn: "上课的时候，她说得很慢，也很清楚。", py: "Shàngkè de shíhou, tā shuō de hěn màn, yě hěn qīngchu.", nl: "Tijdens de les praat ze heel langzaam en duidelijk." },
      { cn: "我学得很认真，可是汉字写得不太好。", py: "Wǒ xué de hěn rènzhēn, kěshì Hànzì xiě de bú tài hǎo.", nl: "Ik leer heel serieus, maar ik schrijf de karakters niet zo goed." },
      { cn: "上个月，我第一次用汉语给她写了一张生日卡。", py: "Shàng ge yuè, wǒ dì yī cì yòng Hànyǔ gěi tā xiěle yì zhāng shēngrìkǎ.", nl: "Vorige maand schreef ik voor het eerst een verjaardagskaart in het Chinees voor haar." },
      { cn: "她看了以后很高兴，说：\"你写得真好！\"", py: "Tā kànle yǐhòu hěn gāoxìng, shuō: \"Nǐ xiě de zhēn hǎo!\"", nl: "Toen ze hem gelezen had, was ze heel blij en zei: \"Wat schrijf je mooi!\"" }
    ],
    questions: [
      { type: "mc", q: "Wat kan Xiao Wang heel goed?",
        options: ["Koken.", "Karakters schrijven.", "Zwemmen.", "Langzaam Engels praten."], answer: 0,
        why: ["Goed: 小王做饭做得非常好吃。", "Karakters schrijven gaat over de schrijver: 汉字写得不太好.", "Over zwemmen staat niets in de tekst.", "Ze praat Engels juist te snel: 说得太快了."] },
      { type: "mc", q: "Wat vindt de schrijver nog moeilijk?",
        options: ["Karakters schrijven.", "Serieus leren.", "Xiao Wang verstaan in de les.", "Elke dag samen eten."], answer: 0,
        why: ["Goed: 汉字写得不太好。", "De schrijver leert juist heel serieus: 学得很认真.", "In de les praat Xiao Wang langzaam en duidelijk.", "Samen eten is gewoon wat ze elke avond doen."] },
      { type: "mc", q: "上课的时候，她说得很慢。Wat zegt 得很慢 hier?",
        options: ["Hoe ze praat: langzaam.", "Dat ze laat begint met praten.", "Dat ze niet kan praten.", "Dat ze gestopt is met praten."], answer: 0,
        why: ["Goed: werkwoord + 得 + oordeel = hoe iemand iets doet.", "得很慢 zegt niets over wanneer ze begint.", "\"Niet kunnen\" is een andere vorm: 说不了 of 说不出来.", "Er staat niets over stoppen."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Hij rent niet snel.\"",
      options: ["他跑得不快。", "他不跑得快。", "他跑不得快。", "他跑得快不。"], answer: 0,
      why: ["Goed: 不 staat ná 得, vóór het oordeel.", "Bij 得 staat 不 niet vóór het werkwoord.", "不 komt na 得, niet ervoor.", "不 staat niet achteraan."] },
    { type: "mc", q: "\"Je spreekt goed Chinees.\"",
      options: ["你汉语说得很好。", "你说汉语得很好。", "你说得汉语很好。", "你汉语得说很好。"], answer: 0,
      why: ["Goed: object vooraan, dan 说得很好.", "得 moet direct na het werkwoord staan.", "Het object staat nooit na 得.", "得 staat ná het werkwoord."] },
    { type: "order", q: "Zet in de goede volgorde: \"Zij kookt heel lekker.\"",
      tokens: [["她", "tā"], ["做饭", "zuò fàn"], ["做得", "zuò de"], ["非常", "fēicháng"], ["好吃", "hǎochī"]] },
    { type: "fill", q: "他写字写___很好看。(Hij schrijft heel mooi.)", answers: ["得"],
      hint: "Welk woord komt tussen het werkwoord en het oordeel?", why: "Werkwoord + 得 + oordeel: 写得很好看." },
    { type: "mc", q: "\"Hoe zingt ze?\"",
      options: ["她唱得怎么样？", "她怎么样唱得？", "她唱怎么样得？", "她得唱怎么样？"], answer: 0,
      why: ["Goed: werkwoord + 得 + 怎么样.", "怎么样 staat op de plaats van het oordeel: ná 得.", "得 staat direct na het werkwoord.", "得 komt ná het werkwoord."] },
    { type: "mc", q: "他高兴___说：\"太好了！\"(Hij zei blij: \"Geweldig!\")",
      options: ["地", "得", "的", "了"], answer: 0,
      why: ["Goed: 地 staat vóór het werkwoord en zegt hoe iemand iets doet.", "得 staat ná het werkwoord, niet ervoor.", "的 staat vóór een zelfstandig naamwoord.", "了 past hier niet tussen 高兴 en 说."] },
    { type: "mc", q: "Welke zin zegt HOE GOED iemand iets doet?",
      options: ["他说得很清楚。", "他听得懂。", "他听不懂。", "他说完了。"], answer: 0,
      why: ["Goed: 得 + oordeel (很清楚) = hoe goed.", "听得懂 betekent \"kan verstaan\": dat gaat over kunnen.", "听不懂 betekent \"kan niet verstaan\".", "说完了 is een resultaat: hij is klaar met praten."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["他昨天跑了得很快。", "他昨天跑得很快。", "他跑步跑得很快。", "他跑得快不快？"], answer: 0,
      why: ["Goed: bij 得 hoort geen 了. Zeg: 他昨天跑得很快。", "Dit klopt: een oordeel over gisteren, zonder 了.", "Dit klopt: het werkwoord is herhaald na het object.", "Dit klopt: een ja/nee-vraag met 快不快."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik heb gisteren niet goed geslapen.\"",
      tokens: [["我昨天", "wǒ zuótiān"], ["睡得", "shuì de"], ["不", "bù"], ["好", "hǎo"]] },
    { type: "open", q: "Vertaal: \"Hij zwemt heel snel.\"", model: ["他游泳游得很快。", "他游得很快。", "他游泳游得非常快。"],
      tip: "Check: staat 得 direct na 游, en staat er 很 of 非常 vóór 快?" },
    { type: "open", q: "Vertaal: \"Mijn moeder kookt heel lekker.\"", model: ["我妈妈做饭做得很好吃。", "我妈妈饭做得很好吃。"],
      tip: "Check: herhaal 做 na 饭, of zet 饭 vóór 做. Nooit 做饭得." }
  ],
  review: [
    { type: "mc", q: "\"Zij danst heel mooi.\"",
      options: ["她跳舞跳得很好看。", "她跳舞得很好看。", "她跳得舞很好看。", "她跳舞跳很好看得。"], answer: 0,
      why: ["Goed: het werkwoord herhaald, dan 得 + oordeel.", "得 moet direct na het werkwoord staan, niet na het object.", "Het object staat nooit na 得.", "得 staat vóór het oordeel."] },
    { type: "mc", q: "\"Hij werkt niet zorgvuldig.\"",
      options: ["他工作得不认真。", "他不工作得认真。", "他工作不得认真。", "他工作得认真不。"], answer: 0,
      why: ["Goed: 不 na 得.", "不 staat niet vóór het werkwoord.", "不 komt na 得, niet ervoor.", "不 staat niet achteraan."] },
    { type: "mc", q: "\"Loopt je opa snel?\"",
      options: ["你爷爷走得快不快？", "你爷爷走快不快得？", "你爷爷得走快不快？", "你爷爷走得快快不？"], answer: 0,
      why: ["Goed: werkwoord + 得 + 快不快.", "得 staat direct na het werkwoord.", "得 komt ná het werkwoord.", "De vraag is 快不快: ja-vorm, 不, ja-vorm."] }
  ]
})
