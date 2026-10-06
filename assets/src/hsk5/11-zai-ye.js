({
  id: "11", slug: "zai-ye", title: "再 + eigenschap + 也", sub: "Hoe ... ook: 再忙也要吃饭",
  canDo: "Je kunt nu zeggen dat iets blijft gelden, hoe sterk een eigenschap ook is, met 再 ... 也.",
  guess: {
    q: "再忙也要吃饭。Wat betekent dit, denk je?",
    options: ["Hoe druk je het ook hebt, je moet eten.", "Als je weer druk bent, moet je eten.", "Je bent te druk om te eten.", "Eet eerst, dan kun je weer aan het werk."], answer: 0,
    why: ["Goed: 再 + eigenschap (忙) + 也 = hoe ... ook. Het eten blijft nodig.", "再 betekent hier niet \"weer\" of \"opnieuw\". Het versterkt 忙 tot \"hoe druk ook\".", "De zin zegt juist dat je wél moet eten, ondanks de drukte.", "Er staat geen volgorde van eerst en dan: 也 zegt dat het toch moet."]
  },
  problem: "Je kent 再 als \"nog een keer\". Maar 再 + eigenschap + 也 betekent \"hoe ... ook\". \"Hoe druk je het ook hebt, je moet eten.\" De eigenschap mag zo sterk zijn als je wilt: het resultaat na 也 verandert niet. Het is kort, en je hoort het veel in de spreektaal.",
  pattern: [
    { l: "wie/wat", v: "工作", c: 1 }, { l: "再", v: "再", c: 2, key: true }, { l: "eigenschap", v: "忙", c: 3 },
    { l: "也", v: "也", c: 2, key: true }, { l: "resultaat", v: "要吃饭", c: 4 }
  ],
  patternCap: "(Wie/wat) + 再 + bijv. naamwoord / werkwoord + ，(wie) + 也 + resultaat. Variant: 再怎么 + werkwoord + 也 ...",
  rules: [
    "再 staat direct vóór het bijvoeglijk naamwoord: 再忙, 再贵, 再难. Er komt geen 很 bij.",
    "也 staat in het tweede deel ná het onderwerp, direct vóór het werkwoord: 再忙，我也要去。",
    "Na 也 volgt vaak 要, 得, 会, 能 of een ontkenning: 也不, 也没用, 也别.",
    "Met een werkwoord betekent het \"hoeveel je ook ...\": 你再说也没用。 Met 再怎么 + werkwoord: \"hoe je ook ...\".",
    "Is er één onderwerp, dan mag het vóór 再 staan en weg in het tweede deel: 他再累也去上班。"
  ],
  pitfall: "Na 再 komt één eigenschap, geen keuze of vraag. 再刮风还是下雨 kan niet: dat is werk voor 无论 ... 都.",
  examples: [
    { cn: "工作再忙，也要按时吃饭。", py: "Gōngzuò zài máng, yě yào ànshí chī fàn.", nl: "Hoe druk het werk ook is, je moet op tijd eten." },
    { cn: "这个问题再难，我们也要解决。", py: "Zhège wèntí zài nán, wǒmen yě yào jiějué.", nl: "Hoe moeilijk dit probleem ook is, we moeten het oplossen." },
    { cn: "东西再便宜，不需要也别买。", py: "Dōngxi zài piányi, bù xūyào yě bié mǎi.", nl: "Hoe goedkoop iets ook is, koop het niet als je het niet nodig hebt." },
    { cn: "你再说也没用，我已经决定了。", py: "Nǐ zài shuō yě méi yòng, wǒ yǐjīng juédìng le.", nl: "Hoeveel je ook praat, het helpt niet. Ik heb al besloten." }
  ],
  nuance: [
    { h: "再 ... 也 of 无论 ... 都?",
      p: "Gaat het om één eigenschap in sterke mate, dan betekenen ze hetzelfde: 再忙也 = 无论多忙都. 再 is korter en klinkt meer als spreektaal. Gaat het om verschillende situaties of een keuze, dan kan alleen 无论. Na 无论 staat een vraagwoord of A 还是 B.",
      ex: [
        { cn: "天气再冷，他也去跑步。", py: "Tiānqì zài lěng, tā yě qù pǎobù.", nl: "Hoe koud het ook is, hij gaat hardlopen." },
        { cn: "无论刮风还是下雨，他都去跑步。", py: "Wúlùn guāfēng háishi xiàyǔ, tā dōu qù pǎobù.", nl: "Of het nu waait of regent, hij gaat hardlopen." }
      ] },
    { h: "再 ... 也 of 即使 ... 也?",
      p: "Na 即使 staat een hele situatie die misschien gebeurt: \"zelfs als het morgen regent\". Na 再 staat de mate van één eigenschap: \"hoe hard het ook regent\". Is het een gebeurtenis zonder eigenschap, kies dan 即使.",
      ex: [
        { cn: "即使明天下雨，比赛也不会取消。", py: "Jíshǐ míngtiān xiàyǔ, bǐsài yě bú huì qǔxiāo.", nl: "Zelfs als het morgen regent, wordt de wedstrijd niet afgelast." },
        { cn: "雨再大，比赛也不会取消。", py: "Yǔ zài dà, bǐsài yě bú huì qǔxiāo.", nl: "Hoe hard het ook regent, de wedstrijd wordt niet afgelast." }
      ] },
    { h: "Let op: 再好不过 is iets anders",
      p: "再 + eigenschap + 不过 (了) betekent \"het kan niet beter\". Er volgt dan geen 也. Verwar dit niet met \"hoe ... ook\". En 再 + werkwoord zonder 也 is gewoon \"nog een keer\" of \"daarna\".",
      ex: [
        { cn: "你能来帮忙，那就再好不过了。", py: "Nǐ néng lái bāngmáng, nà jiù zài hǎo búguò le.", nl: "Als je kunt komen helpen, is dat het allerbeste." }
      ] }
  ],
  mistakes: [
    { wrong: "再很忙也要吃饭。", right: "再忙也要吃饭。", why: "再 vervangt 很. Zet het bijvoeglijk naamwoord direct na 再." },
    { wrong: "再忙也我要吃饭。", right: "再忙我也要吃饭。", why: "也 staat ná het onderwerp, direct vóór het werkwoord." },
    { wrong: "他再忙，但是要吃饭。", right: "他再忙，也要吃饭。", why: "再 hoort bij 也, niet bij 但是. 再 is geen \"hoewel\"." },
    { wrong: "再刮风还是下雨，他也去跑步。", right: "无论刮风还是下雨，他都去跑步。", why: "Een keuze tussen situaties (A 还是 B) kan niet na 再. Gebruik 无论 ... 都." }
  ],
  vocab: [
    ["再……也", "zài……yě", "hoe ... ook"], ["按时", "ànshí", "op tijd"], ["解决", "jiějué", "oplossen"],
    ["决定", "juédìng", "besluiten; besluit"], ["没用", "méi yòng", "nutteloos, het helpt niet"], ["取消", "qǔxiāo", "afgelasten, annuleren"],
    ["坚持", "jiānchí", "volhouden"], ["习惯", "xíguàn", "gewoonte"], ["停止", "tíngzhǐ", "stoppen, ophouden"], ["报告", "bàogào", "rapport, verslag"]
  ],
  dialogue: [
    ["A", "都一点了，你怎么还不去吃饭？", "Dōu yī diǎn le, nǐ zěnme hái bú qù chī fàn?", "Het is al één uur. Waarom ga je nog niet eten?"],
    ["B", "这个报告今天必须交，我实在太忙了。", "Zhège bàogào jīntiān bìxū jiāo, wǒ shízài tài máng le.", "Dit rapport moet vandaag af. Ik heb het echt te druk."],
    ["A", "再忙也要吃饭啊，身体最重要。", "Zài máng yě yào chī fàn a, shēntǐ zuì zhòngyào.", "Hoe druk je het ook hebt, je moet eten. Je gezondheid is het belangrijkst."],
    ["B", "可是我怕写不完。", "Kěshì wǒ pà xiě bu wán.", "Maar ik ben bang dat ik het niet afkrijg."],
    ["A", "你不吃饭，再怎么努力也写不好。走吧，二十分钟就回来。", "Nǐ bù chī fàn, zài zěnme nǔlì yě xiě bu hǎo. Zǒu ba, èrshí fēnzhōng jiù huílai.", "Als je niet eet, schrijf je het niet goed, hoe hard je ook werkt. Kom, over twintig minuten ben je terug."],
    ["B", "好吧，听你的。", "Hǎo ba, tīng nǐ de.", "Goed dan, ik luister naar je."]
  ],
  reading: {
    title: "跑步的张爷爷",
    lines: [
      { cn: "我的邻居张爷爷今年七十五岁了。", py: "Wǒ de línjū Zhāng yéye jīnnián qīshíwǔ suì le.", nl: "Mijn buurman, opa Zhang, is dit jaar vijfenzeventig." },
      { cn: "他有一个习惯：每天早上六点去公园跑步。", py: "Tā yǒu yí ge xíguàn: měitiān zǎoshang liù diǎn qù gōngyuán pǎobù.", nl: "Hij heeft een gewoonte: elke ochtend om zes uur gaat hij hardlopen in het park." },
      { cn: "天气再冷，他也穿上运动服出门。", py: "Tiānqì zài lěng, tā yě chuānshang yùndòngfú chūmén.", nl: "Hoe koud het ook is, hij trekt zijn sportkleren aan en gaat naar buiten." },
      { cn: "有一次他感冒了，家里人劝他在家休息。", py: "Yǒu yí cì tā gǎnmào le, jiā li rén quàn tā zài jiā xiūxi.", nl: "Eén keer was hij verkouden. Zijn familie raadde hem aan thuis te rusten." },
      { cn: "他却笑着说：\"只是小感冒，再不舒服也要出去走走。\"", py: "Tā què xiàozhe shuō: \"Zhǐshì xiǎo gǎnmào, zài bù shūfu yě yào chūqu zǒuzou.\"", nl: "Maar hij zei lachend: \"Het is maar een verkoudheid. Hoe beroerd ik me ook voel, ik ga even naar buiten.\"" },
      { cn: "他常常对我说，人再老，也不能停止学习和运动。", py: "Tā chángcháng duì wǒ shuō, rén zài lǎo, yě bù néng tíngzhǐ xuéxí hé yùndòng.", nl: "Hij zegt vaak tegen mij: hoe oud je ook bent, je mag niet stoppen met leren en bewegen." },
      { cn: "去年，他开始学用智能手机。", py: "Qùnián, tā kāishǐ xué yòng zhìnéng shǒujī.", nl: "Vorig jaar begon hij te leren hoe je een smartphone gebruikt." },
      { cn: "刚开始的时候，他总是学不会发照片。", py: "Gāng kāishǐ de shíhou, tā zǒngshì xué bu huì fā zhàopiàn.", nl: "In het begin lukte het hem steeds niet om foto's te versturen." },
      { cn: "可是他说：\"再难的东西，多练几次也能学会。\"", py: "Kěshì tā shuō: \"Zài nán de dōngxi, duō liàn jǐ cì yě néng xuéhuì.\"", nl: "Maar hij zei: \"Hoe moeilijk iets ook is, als je het vaak oefent, leer je het toch.\"" },
      { cn: "现在，他每天都用手机给孙子发照片。", py: "Xiànzài, tā měitiān dōu yòng shǒujī gěi sūnzi fā zhàopiàn.", nl: "Nu stuurt hij elke dag met zijn telefoon foto's naar zijn kleinzoon." }
    ],
    questions: [
      { type: "mc", q: "Wat doet opa Zhang elke ochtend?",
        options: ["Hij gaat om zes uur hardlopen in het park.", "Hij stuurt om zes uur foto's naar zijn kleinzoon.", "Hij rust om zes uur thuis uit.", "Hij oefent om zes uur met zijn telefoon."], answer: 0,
        why: ["Goed: 每天早上六点去公园跑步。", "Foto's stuurt hij elke dag, maar de tekst noemt daar geen tijd bij.", "Thuis rusten was het advies van zijn familie, niet zijn gewoonte.", "Hij oefende met de telefoon, maar niet elke ochtend om zes uur."] },
      { type: "mc", q: "Wat vond opa Zhang in het begin moeilijk?",
        options: ["Foto's versturen met zijn telefoon.", "Hardlopen in de kou.", "Thuis blijven als hij ziek was.", "Sportkleren kopen."], answer: 0,
        why: ["Goed: 他总是学不会发照片。", "De kou houdt hem juist niet tegen: 天气再冷，他也 ...", "Hij bleef juist niet thuis: 再不舒服也要出去走走。", "Over sportkleren kopen staat niets in de tekst."] },
      { type: "mc", q: "人再老，也不能停止学习和运动。Wat betekent 再老 ... 也 hier?",
        options: ["Hoe oud je ook bent, je mag niet stoppen.", "Als je weer ouder wordt, moet je stoppen.", "Oude mensen moeten opnieuw beginnen met leren.", "Je bent te oud om te leren en te bewegen."], answer: 0,
        why: ["Goed: 再 + 老 + 也 = hoe oud ook. Het resultaat na 也 blijft.", "再 betekent hier niet \"weer\". En de zin zegt juist: niet stoppen.", "Er staat niets over opnieuw beginnen: 再 versterkt 老.", "也不能停止 zegt het tegenovergestelde: je moet doorgaan."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Hoe moe je ook bent, je moet je huiswerk afmaken.\"",
      options: ["你再累也要把作业做完。", "你再很累也要把作业做完。", "你累再也要把作业做完。", "你再累，但是要把作业做完。"], answer: 0,
      why: ["Goed: 再 + 累 + 也 + 要.", "Na 再 komt geen 很: 再 vervangt het.", "再 staat vóór het bijvoeglijk naamwoord, niet erna.", "再 werkt samen met 也, niet met 但是."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hoe goedkoop iets ook is, koop niet zomaar.\"",
      tokens: [["东西", "dōngxi"], ["再", "zài"], ["便宜", "piányi"], ["也别", "yě bié"], ["乱买", "luàn mǎi"]] },
    { type: "fill", q: "工作再忙，___要注意身体。(Hoe druk het werk ook is, je moet op je gezondheid letten.)", answers: ["也"],
      hint: "Welk woord hoort bij 再 in het tweede deel?", why: "再 + eigenschap, dan 也 + werkwoord: 再忙，也要 ..." },
    { type: "mc", q: "___刮风还是下雨，他都去跑步。(Of het nu waait of regent, hij gaat hardlopen.)",
      options: ["无论", "再", "即使", "虽然"], answer: 0,
      why: ["Goed: een keuze (A 还是 B) + 都 vraagt om 无论.", "Na 再 komt één eigenschap, geen keuze tussen situaties.", "即使 gaat over één situatie die misschien gebeurt, niet over een keuze met 还是.", "虽然 is \"hoewel\" over een feit. Het past niet bij A 还是 B."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["再很贵我也买。", "再贵我也买。", "东西再贵，他也要买。", "再怎么贵，我也要买。"], answer: 0,
      why: ["Goed: deze is fout. Na 再 komt geen 很.", "Deze klopt: 再 + 贵 + 也.", "Deze klopt: onderwerp vóór 再, en 也 na 他.", "Deze klopt: 再怎么 + eigenschap kan ook."] },
    { type: "mc", q: "你再说也没用。Wat betekent dit?",
      options: ["Hoeveel je ook praat, het helpt niet.", "Zeg het nog een keer, dan helpt het.", "Je hebt het al gezegd, maar het hielp niet.", "Als je niets zegt, helpt het niet."], answer: 0,
      why: ["Goed: 再 + werkwoord + 也 = hoeveel je ook ... Het resultaat blijft: 没用.", "也没用 zegt juist dat het niet helpt, ook niet als je het herhaalt.", "De zin gaat over wat je nog zou zeggen, niet over wat je al zei.", "Er staat geen ontkenning bij 说."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hoe hard hij ook werkt, hij komt er niet door.\"",
      tokens: [["他", "tā"], ["再怎么", "zài zěnme"], ["努力", "nǔlì"], ["也", "yě"], ["考不上", "kǎo bu shàng"]] },
    { type: "mc", q: "___明天下雨，比赛也不会取消。(Zelfs als het morgen regent, wordt de wedstrijd niet afgelast.)",
      options: ["即使", "再", "无论", "因为"], answer: 0,
      why: ["Goed: na 即使 staat een hele situatie die misschien gebeurt.", "再 staat vóór een eigenschap (雨再大), niet vóór een hele situatie met tijd.", "Na 无论 moet een vraagwoord of keuze staan, en dan 都.", "因为 geeft een reden. 也不会 past daar niet bij."] },
    { type: "mc", q: "这道题再难，我___做出来。(Hoe moeilijk deze opgave ook is, ik ga hem oplossen.)",
      options: ["也要", "就要", "才要", "又要"], answer: 0,
      why: ["Goed: 再 ... 也: het resultaat blijft, hoe moeilijk ook.", "就 geeft een gevolg aan (dan ...), geen \"toch\".", "才 betekent \"pas\". Dat past niet bij \"hoe ... ook\".", "又 betekent \"weer\". Er staat niets over een herhaling."] },
    { type: "mc", q: "你能来帮忙，那就再好不过了。Wat betekent 再好不过?",
      options: ["Het kan niet beter.", "Hoe goed het ook is, het helpt niet.", "Het is weer goed.", "Het is niet goed genoeg."], answer: 0,
      why: ["Goed: 再 + eigenschap + 不过 = het kan niet ... er. Er staat geen 也.", "Dat zou 再 ... 也 zijn. Hier staat 不过, niet 也.", "再 betekent hier niet \"weer\".", "不过 is hier geen ontkenning: het betekent \"meer dan dit kan niet\"."] },
    { type: "open", q: "Vertaal: \"Hoe druk je het ook hebt, je moet slapen.\"", model: ["再忙也要睡觉。", "你再忙也得睡觉。", "工作再忙，也要睡觉。"],
      tip: "Check: staat 忙 direct na 再 (zonder 很), en staat 也 vóór het werkwoord?" },
    { type: "open", q: "Vertaal: \"Hoe duur het ook is, ik koop het.\"", model: ["再贵我也买。", "再贵我也要买。", "东西再贵，我也会买。"],
      tip: "Check: 再 + 贵, en dan 我也 + werkwoord. 也 staat ná 我." }
  ],
  review: [
    { type: "mc", q: "\"Hoe laat het ook wordt, bel me.\"",
      options: ["再晚也要给我打电话。", "再很晚也要给我打电话。", "晚再也要给我打电话。", "再晚，但是要给我打电话。"], answer: 0,
      why: ["Goed: 再 + 晚 + 也 + 要.", "Na 再 komt geen 很.", "再 staat vóór 晚, niet erna.", "再 hoort bij 也, niet bij 但是."] },
    { type: "mc", q: "___有多累，他都坚持去游泳。(Hoe moe hij ook is, hij blijft gaan zwemmen.)",
      options: ["无论", "再", "即使", "虽然"], answer: 0,
      why: ["Goed: 无论 + 多 + eigenschap + 都.", "再 staat direct vóór de eigenschap (再累), zonder 有多 en met 也.", "即使 neemt geen vraagvorm met 多.", "虽然 neemt geen vraagvorm met 多, en past niet bij 都."] },
    { type: "mc", q: "孩子再小，也应该学会说谢谢。Wat betekent dit?",
      options: ["Hoe klein een kind ook is, het moet leren bedankt te zeggen.", "Als het kind weer klein is, moet het bedankt zeggen.", "Het kind is te klein om bedankt te zeggen.", "Kleine kinderen zeggen nog een keer bedankt."], answer: 0,
      why: ["Goed: 再 + 小 + 也 = hoe klein ook.", "再 betekent hier niet \"weer\".", "也应该 zegt juist dat het moet, ook als het kind klein is.", "再 versterkt 小. Het gaat niet om \"nog een keer\"."] }
  ]
})
