({
  id: "06", slug: "jinguan", title: "尽管 ... 但是/还是", sub: "Hoewel het zo is, gebeurt het toch",
  canDo: "Je kunt nu zeggen dat iets toch gebeurt, ondanks een feit, met 尽管 ... 但是 of 还是. En je kunt iemand iets \"gerust\" laten doen met 尽管.",
  guess: {
    q: "尽管很累，他还是把工作做完了。Wat betekent dit, denk je?",
    options: ["Hoewel hij moe was, maakte hij het werk toch af.", "Omdat hij moe was, maakte hij het werk niet af.", "Hij was moe omdat hij het werk afmaakte.", "Als hij moe is, maakt hij het werk niet af."], answer: 0,
    why: ["Goed: 尽管 = hoewel. 还是 = toch.", "尽管 geeft geen reden, en het werk is wél af (做完了).", "De oorzaak staat er niet. 尽管 geeft een tegenstelling.", "尽管 is geen voorwaarde. Het gaat over een feit."]
  },
  problem: "Soms gebeurt iets, terwijl je iets anders verwacht. \"Hoewel het regende, ging hij toch fietsen.\" In het Chinees zet je 尽管 (jǐnguǎn) vóór het feit. In het tweede deel komt 但是, 可是 of 还是 (toch).",
  pattern: [
    { l: "尽管", v: "尽管", c: 2, key: true }, { l: "feit", v: "下着雨", c: 3 }, { l: "wie", v: "他", c: 1 },
    { l: "toch", v: "还是", c: 2, key: true }, { l: "wat toch gebeurt", v: "骑车去了", c: 4 }
  ],
  patternCap: "尽管 + feit, (但是 / 可是) + wie + (还是 / 也 / 仍然) + wat toch gebeurt; los: wie + 尽管 + werkwoord = gerust",
  rules: [
    "尽管 lijkt op 虽然. Het deel na 尽管 is een feit, geen veronderstelling.",
    "但是 of 可是 staat vooraan in het tweede deel, vóór het onderwerp.",
    "还是, 也 of 仍然 staat ná het onderwerp, vóór het werkwoord.",
    "但是 en 还是 mogen samen: 尽管很累，但是他还是去了。",
    "In geschreven tekst mag het 尽管-deel ook achteraan staan: 他还是去了，尽管很累。"
  ],
  pitfall: "但是 staat niet ná het onderwerp. 他但是去了 is fout. Zeg 但是他去了 of 他还是去了.",
  examples: [
    { cn: "尽管下着雨，他还是骑车去上班了。", py: "Jǐnguǎn xiàzhe yǔ, tā háishi qí chē qù shàngbān le.", nl: "Hoewel het regende, fietste hij toch naar zijn werk." },
    { cn: "尽管这个工作很辛苦，但是我很喜欢。", py: "Jǐnguǎn zhège gōngzuò hěn xīnkǔ, dànshì wǒ hěn xǐhuan.", nl: "Hoewel dit werk zwaar is, vind ik het heel leuk." },
    { cn: "尽管他学了三年汉语，可是还听不懂新闻。", py: "Jǐnguǎn tā xuéle sān nián Hànyǔ, kěshì hái tīng bu dǒng xīnwén.", nl: "Hoewel hij drie jaar Chinees heeft geleerd, verstaat hij het nieuws nog niet." },
    { cn: "尽管很忙，她每天还是去健身房。", py: "Jǐnguǎn hěn máng, tā měitiān háishi qù jiànshēnfáng.", nl: "Hoewel ze het druk heeft, gaat ze toch elke dag naar de sportschool." }
  ],
  nuance: [
    { h: "尽管 of 虽然?",
      p: "Allebei betekenen ze \"hoewel\", en na allebei staat een feit. Meestal kun je ze ruilen. 虽然 is het gewone woord voor elke dag. 尽管 legt iets meer nadruk op de tegenstelling en klinkt wat formeler. Handig in schrijftaal: 尽管如此 aan het begin van een zin betekent \"desondanks\".",
      ex: [
        { cn: "虽然下着雨，他还是骑车去上班了。", py: "Suīrán xiàzhe yǔ, tā háishi qí chē qù shàngbān le.", nl: "Hoewel het regende, fietste hij toch naar zijn werk." },
        { cn: "尽管如此，他还是没有放弃。", py: "Jǐnguǎn rúcǐ, tā háishi méiyǒu fàngqì.", nl: "Desondanks gaf hij niet op." }
      ] },
    { h: "尽管 of 即使: feit of veronderstelling?",
      p: "Na 尽管 staat iets wat echt zo is. Na 即使 (jíshǐ) staat iets wat misschien gebeurt: \"zelfs als\". 即使 combineer je met 也. Gaat het over morgen, of over iets wat je niet zeker weet? Dan kies je 即使, niet 尽管.",
      ex: [
        { cn: "尽管昨天下雨，比赛还是进行了。", py: "Jǐnguǎn zuótiān xià yǔ, bǐsài háishi jìnxíng le.", nl: "Hoewel het gisteren regende, ging de wedstrijd toch door." },
        { cn: "即使明天下雨，比赛也会进行。", py: "Jíshǐ míngtiān xià yǔ, bǐsài yě huì jìnxíng.", nl: "Zelfs als het morgen regent, gaat de wedstrijd door." }
      ] },
    { h: "尽管 als bijwoord: \"gerust\"",
      p: "尽管 heeft nog een tweede betekenis. Direct vóór een werkwoord betekent het \"gerust, zonder aarzelen\". Dan is er geen tegenstelling en geen 但是. Je hoort het vaak in spreektaal, als je iemand iets aanbiedt: 有问题尽管问. Het onderwerp staat vóór 尽管.",
      ex: [
        { cn: "有什么问题，你尽管问我。", py: "Yǒu shénme wèntí, nǐ jǐnguǎn wèn wǒ.", nl: "Als je een vraag hebt, vraag het me gerust." },
        { cn: "这件事交给我，你尽管放心。", py: "Zhè jiàn shì jiāo gěi wǒ, nǐ jǐnguǎn fàngxīn.", nl: "Laat dit maar aan mij over, je kunt gerust zijn." }
      ] }
  ],
  mistakes: [
    { wrong: "尽管明天下雨，我们也要去。", right: "即使明天下雨，我们也要去。", why: "Regen morgen is een veronderstelling. Voor \"zelfs als\" gebruik je 即使, niet 尽管." },
    { wrong: "尽管他很累，所以还是去了。", right: "尽管他很累，但是还是去了。", why: "所以 geeft een gevolg. Na 尽管 komt een tegenstelling met 但是 of 可是." },
    { wrong: "尽管很累，他但是去了。", right: "尽管很累，但是他去了。", why: "但是 staat vóór het onderwerp, niet erna." },
    { wrong: "有问题，尽管你问我。", right: "有问题，你尽管问我。", why: "In de betekenis \"gerust\" staat 尽管 direct vóór het werkwoord, ná het onderwerp." }
  ],
  vocab: [
    ["尽管", "jǐnguǎn", "hoewel; gerust (vóór een werkwoord)"], ["仍然", "réngrán", "nog steeds, toch"], ["辛苦", "xīnkǔ", "zwaar, vermoeiend"],
    ["新闻", "xīnwén", "nieuws"], ["健身房", "jiànshēnfáng", "sportschool"], ["通过", "tōngguò", "slagen voor"],
    ["退休", "tuìxiū", "met pensioen gaan"], ["充分", "chōngfèn", "grondig, voldoende"], ["邻居", "línjū", "buren"],
    ["报酬", "bàochou", "beloning, vergoeding"]
  ],
  dialogue: [
    ["A", "听说你通过HSK五级了，恭喜！", "Tīngshuō nǐ tōngguò HSK wǔ jí le, gōngxǐ!", "Ik hoorde dat je voor HSK 5 geslaagd bent. Gefeliciteerd!"],
    ["B", "谢谢！尽管考试很难，但是我准备得很充分。", "Xièxie! Jǐnguǎn kǎoshì hěn nán, dànshì wǒ zhǔnbèi de hěn chōngfèn.", "Dank je! Het examen was moeilijk, maar ik was goed voorbereid."],
    ["A", "你工作那么忙，怎么有时间学习？", "Nǐ gōngzuò nàme máng, zěnme yǒu shíjiān xuéxí?", "Je hebt het zo druk met je werk. Hoe vind je tijd om te leren?"],
    ["B", "尽管很忙，我每天晚上还是学一个小时。", "Jǐnguǎn hěn máng, wǒ měitiān wǎnshang háishi xué yí ge xiǎoshí.", "Hoewel ik het druk heb, leer ik toch elke avond een uur."],
    ["A", "真不容易。我也要向你学习。", "Zhēn bù róngyì. Wǒ yě yào xiàng nǐ xuéxí.", "Dat is niet makkelijk. Ik ga jouw voorbeeld volgen."],
    ["B", "好啊，学习上有什么问题，你尽管问我。", "Hǎo a, xuéxí shang yǒu shénme wèntí, nǐ jǐnguǎn wèn wǒ.", "Goed! Heb je vragen over het leren, vraag het me gerust."]
  ],
  reading: {
    title: "退休以后的王老师",
    lines: [
      { cn: "王老师今年已经七十五岁了。", py: "Wáng lǎoshī jīnnián yǐjīng qīshíwǔ suì le.", nl: "Meester Wang is dit jaar al vijfenzeventig." },
      { cn: "尽管年纪大了，他每天早上还是六点起床，去公园锻炼身体。", py: "Jǐnguǎn niánjì dà le, tā měitiān zǎoshang háishi liù diǎn qǐchuáng, qù gōngyuán duànliàn shēntǐ.", nl: "Hoewel hij oud is, staat hij elke ochtend toch om zes uur op om in het park te sporten." },
      { cn: "退休以前，他是一名中学数学老师。", py: "Tuìxiū yǐqián, tā shì yì míng zhōngxué shùxué lǎoshī.", nl: "Voor zijn pensioen was hij wiskundeleraar op een middelbare school." },
      { cn: "尽管已经退休十年了，他仍然很关心孩子们的学习。", py: "Jǐnguǎn yǐjīng tuìxiū shí nián le, tā réngrán hěn guānxīn háizimen de xuéxí.", nl: "Hoewel hij al tien jaar met pensioen is, geeft hij nog steeds veel om het leren van kinderen." },
      { cn: "每个周末，他都在社区图书馆免费给孩子们辅导数学。", py: "Měi ge zhōumò, tā dōu zài shèqū túshūguǎn miǎnfèi gěi háizimen fǔdǎo shùxué.", nl: "Elk weekend geeft hij kinderen gratis bijles wiskunde in de buurtbibliotheek." },
      { cn: "有的家长觉得不好意思，想给他一些钱，可是他总是拒绝。", py: "Yǒu de jiāzhǎng juéde bù hǎoyìsi, xiǎng gěi tā yìxiē qián, kěshì tā zǒngshì jùjué.", nl: "Sommige ouders voelen zich bezwaard en willen hem wat geld geven, maar hij weigert altijd." },
      { cn: "他常常对孩子们说：\"学习上有困难，你们尽管来问我。\"", py: "Tā chángcháng duì háizimen shuō: \"Xuéxí shang yǒu kùnnan, nǐmen jǐnguǎn lái wèn wǒ.\"", nl: "Hij zegt vaak tegen de kinderen: \"Hebben jullie moeite met leren, kom het me gerust vragen.\"" },
      { cn: "尽管这份工作没有报酬，但是他觉得生活非常充实。", py: "Jǐnguǎn zhè fèn gōngzuò méiyǒu bàochou, dànshì tā juéde shēnghuó fēicháng chōngshí.", nl: "Hoewel hij voor dit werk niets krijgt, vindt hij zijn leven heel vol en zinvol." }
    ],
    questions: [
      { type: "mc", q: "Wat doet meester Wang in het weekend?",
        options: ["Hij geeft kinderen gratis bijles wiskunde.", "Hij geeft les op een middelbare school.", "Hij sport om zes uur in het park.", "Hij werkt in de bibliotheek voor geld."], answer: 0,
        why: ["Goed: 每个周末，他都在社区图书馆免费给孩子们辅导数学。", "Dat deed hij vóór zijn pensioen.", "Dat doet hij elke ochtend, niet speciaal in het weekend.", "Hij doet het gratis (免费) en weigert geld."] },
      { type: "mc", q: "Wat doet hij als ouders hem geld willen geven?",
        options: ["Hij weigert het altijd.", "Hij neemt het aan.", "Hij geeft het aan de bibliotheek.", "Hij vraagt om meer geld."], answer: 0,
        why: ["Goed: 可是他总是拒绝。", "Er staat 拒绝: weigeren.", "Dat staat niet in de tekst.", "Hij wil juist geen geld."] },
      { type: "mc", q: "你们尽管来问我。Wat betekent 尽管 hier?",
        options: ["Gerust, zonder aarzelen.", "Hoewel.", "Zelfs als.", "Anders."], answer: 0,
        why: ["Goed: 尽管 direct vóór een werkwoord = gerust.", "\"Hoewel\" past niet: er is geen tegenstelling en geen 但是.", "\"Zelfs als\" is 即使, en hier is geen voorwaarde.", "\"Anders\" is 否则 of 不然."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Hoewel het duur is, koop ik het toch.\"",
      options: ["尽管很贵，我还是要买。", "尽管很贵，所以我要买。", "无论很贵，我还是要买。", "尽管很贵，我但是要买。"], answer: 0,
      why: ["Goed: 尽管 + feit, dan 还是 ná het onderwerp.", "所以 geeft een gevolg. Na 尽管 komt een tegenstelling.", "Na 无论 hoort een vraagwoord. Voor een feit gebruik je 尽管.", "但是 staat vóór het onderwerp, niet erna."] },
    { type: "mc", q: "___他身体不好，但是他每天都来上班。(Hoewel hij niet gezond is, komt hij elke dag naar zijn werk.)",
      options: ["尽管", "因为", "无论", "既然"], answer: 0,
      why: ["Goed: 尽管 ... 但是 = hoewel ... toch.", "因为 geeft een reden en past niet bij 但是.", "Na 无论 hoort een vraagwoord, geen feit.", "既然 geeft een conclusie met 就, geen tegenstelling."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hoewel het koud was, ging hij toch zwemmen.\"",
      tokens: [["尽管", "jǐnguǎn"], ["天气很冷", "tiānqì hěn lěng"], ["他还是", "tā háishi"], ["去游泳了", "qù yóuyǒng le"]] },
    { type: "mc", q: "Wat betekent: 尽管我们是邻居，可是很少说话。",
      options: ["Hoewel we buren zijn, praten we weinig met elkaar.", "Omdat we buren zijn, praten we weinig met elkaar.", "Hoewel we buren zijn, praten we vaak met elkaar.", "Als we buren worden, praten we minder met elkaar."], answer: 0,
      why: ["Goed.", "尽管 geeft een tegenstelling, geen reden.", "很少 betekent \"weinig\", niet \"vaak\".", "尽管 gaat over een feit, niet over een voorwaarde."] },
    { type: "open", q: "Vertaal: \"Hoewel Chinees moeilijk is, leer ik het toch graag.\"",
      model: ["尽管汉语很难，但是我很喜欢学。", "尽管汉语很难，我还是很喜欢学。", "尽管汉语很难，可是我还是喜欢学汉语。"],
      tip: "Check: 尽管 + het feit, dan 但是/可是 vóór het onderwerp, of 还是 ná het onderwerp." },
    { type: "mc", q: "___明天下雨，我们也要去爬山。(Zelfs als het morgen regent, gaan we toch bergwandelen.)",
      options: ["即使", "尽管", "因为", "所以"], answer: 0,
      why: ["Goed: regen morgen is een veronderstelling. 即使 ... 也 = zelfs als.", "Na 尽管 staat een feit. Of het morgen regent, weet je nog niet.", "因为 geeft een reden, en dat past niet bij 也.", "所以 geeft een gevolg en staat in het tweede deel."] },
    { type: "mc", q: "Wat betekent: 需要帮忙的话，你尽管说。",
      options: ["Als je hulp nodig hebt, zeg het gerust.", "Hoewel je hulp nodig hebt, zeg je niets.", "Zelfs als je hulp nodig hebt, zeg niets.", "Als je hulp nodig hebt, zeg het dan niet."], answer: 0,
      why: ["Goed: 尽管 vóór een werkwoord = gerust.", "Hier is 尽管 geen \"hoewel\": het staat direct vóór 说 en er is geen 但是.", "\"Zelfs als\" is 即使. Hier staat een aanbod.", "Er staat geen ontkenning in de zin."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["尽管你给我一百万，我也不卖。", "即使你给我一百万，我也不卖。", "尽管他给了我很多钱，我还是没卖。", "虽然他给了我很多钱，但是我没卖。"], answer: 0,
      why: ["Goed: deze klopt niet. Een miljoen krijgen is een veronderstelling. Dan gebruik je 即使, niet 尽管.", "Deze klopt: 即使 + veronderstelling, dan 也.", "Deze klopt: 尽管 + een feit uit het verleden, dan 还是.", "Deze klopt: 虽然 ... 但是 met een feit."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hoewel hij niet veel geld had, hielp hij anderen toch vaak.\"",
      tokens: [["尽管", "jǐnguǎn"], ["他的钱不多", "tā de qián bù duō"], ["但是", "dànshì"], ["他还是经常", "tā háishi jīngcháng"], ["帮助别人", "bāngzhù biérén"]] },
    { type: "fill", q: "___他是老板，可是他每天都第一个到公司。(Hoewel hij de baas is, is hij elke dag als eerste op kantoor.)",
      answers: ["尽管", "虽然"], hint: "Welk woord betekent \"hoewel\" en past bij 可是?", why: "尽管 of 虽然 + feit, dan 可是 in het tweede deel." },
    { type: "open", q: "Vertaal: \"Als je hulp nodig hebt, bel me gerust.\"",
      model: ["需要帮忙的话，你尽管给我打电话。", "如果你需要帮助，尽管给我打电话。"],
      tip: "Check: 尽管 staat direct vóór het werkwoord (给我打电话), zonder 但是." }
  ],
  review: [
    { type: "mc", q: "\"Hoewel hij het wist, zei hij niets.\"",
      options: ["尽管他知道，可是他什么也没说。", "尽管他知道，所以他什么也没说。", "无论他知道，可是他什么也没说。", "尽管他不知道，可是他什么也没说。"], answer: 0,
      why: ["Goed.", "所以 geeft een gevolg. Na 尽管 komt een tegenstelling.", "Na 无论 hoort een vraagwoord. Voor een feit gebruik je 尽管.", "Hier staat dat hij het níet wist. Dat is een andere betekenis."] },
    { type: "mc", q: "尽管医生让他休息，他___去上班了。(Hoewel de dokter zei dat hij moest rusten, ging hij toch werken.)",
      options: ["还是", "所以", "才", "不但"], answer: 0,
      why: ["Goed: 还是 = toch, ná het onderwerp.", "所以 geeft een gevolg, geen tegenstelling.", "才 betekent \"pas\" en past hier niet.", "不但 hoort bij 而且: niet alleen ... maar ook."] },
    { type: "mc", q: "\"Eet gerust, er is nog genoeg.\"",
      options: ["你尽管吃，还有很多。", "尽管你吃，还有很多。", "你尽管吃，但是还有很多。", "你即使吃，还有很多。"], answer: 0,
      why: ["Goed: onderwerp + 尽管 + werkwoord = gerust.", "Als \"gerust\" staat 尽管 ná het onderwerp, direct vóór het werkwoord.", "但是 hoort bij \"hoewel\". Bij \"gerust\" is er geen tegenstelling.", "即使 betekent \"zelfs als\" en vraagt om 也."] }
  ]
})
