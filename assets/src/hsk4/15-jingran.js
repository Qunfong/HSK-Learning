({
  id: "15", slug: "jingran", title: "竟然 / 居然", sub: "Tegen alle verwachting in",
  canDo: "Je kunt nu met 竟然 of 居然 laten horen dat iets je verbaast, en je kunt dat onderscheiden van 果然 (zoals verwacht) en 突然 (plotseling).",
  guess: {
    q: "Je dacht dat hij niet zou komen. Hij is er toch! Wat zeg je, denk je?",
    options: ["他竟然来了！", "他果然来了！", "他来了竟然！", "他竟然不来了！"], answer: 0,
    why: ["Goed: 竟然 laat zien dat iets tegen je verwachting in gebeurt.", "果然 betekent \"zoals verwacht\". Jij verwachtte juist dat hij niet kwam.", "竟然 staat vóór het werkwoord, niet aan het eind.", "Dan zeg je dat hij tot je verbazing níet komt. Dat is het omgekeerde."]
  },
  problem: "In het Nederlands zeg je \"tot mijn verbazing\", \"nota bene\" of met nadruk: \"hij is tóch gekomen!\" Het Chinees gebruikt daarvoor het bijwoord 竟然 of 居然. Je laat horen dat iets anders gaat dan je verwachtte. Let op twee lijkende woorden: 果然 (zoals verwacht) en 突然 (plotseling).",
  pattern: [
    { l: "wie", v: "他", c: 1 }, { l: "竟然", v: "竟然", c: 2, key: true }, { l: "werkwoord", v: "忘了", c: 3 },
    { l: "ding", v: "我的生日", c: 4 }
  ],
  patternCap: "Onderwerp + 竟然 / 居然 + (ontkenning / hulpwerkwoord) + werkwoord of bijv. nw. = tot mijn verbazing ...",
  rules: [
    "竟然 en 居然 zijn bijwoorden: ze staan na het onderwerp en vóór het werkwoord of bijvoeglijk naamwoord.",
    "Ze staan ook vóór een ontkenning of hulpwerkwoord: 他竟然不知道, 他居然会说日语.",
    "De verrassing kan positief of negatief zijn: 居然考了第一名, 竟然忘了我的生日.",
    "Vaak gaat er een zin met 以为 of 没想到 aan vooraf: 我以为他不会来，没想到他竟然来了.",
    "竟然 en 居然 betekenen hetzelfde. 居然 klinkt iets meer als spreektaal."
  ],
  pitfall: "竟然 en 果然 zijn bijna tegengesteld. 竟然: het gaat anders dan je dacht. 果然: het gaat precies zoals je dacht.",
  examples: [
    { cn: "他竟然忘了我的生日。", py: "Tā jìngrán wàngle wǒ de shēngrì.", nl: "Hij is nota bene mijn verjaardag vergeten." },
    { cn: "才学了半年，她居然能看中文报纸了。", py: "Cái xuéle bàn nián, tā jūrán néng kàn Zhōngwén bàozhǐ le.", nl: "Ze leert pas een half jaar, en ze kan tot mijn verbazing al Chinese kranten lezen." },
    { cn: "这么简单的问题，他竟然不会。", py: "Zhème jiǎndān de wèntí, tā jìngrán bú huì.", nl: "Zo'n simpele vraag, en hij weet het tot mijn verbazing niet." },
    { cn: "这么冷的天，他居然只穿了一件衬衫。", py: "Zhème lěng de tiān, tā jūrán zhǐ chuānle yí jiàn chènshān.", nl: "Het is zo koud, en hij draagt nota bene alleen een overhemd." }
  ],
  nuance: [
    { h: "竟然 of 果然?",
      p: "Met 竟然 zeg je: ik verwachtte iets anders. Met 果然 zeg je: ik verwachtte dit al, en het klopt. Dezelfde gebeurtenis kan dus met beide woorden, afhankelijk van wat je dacht. 果然 kan ook aan het begin van de zin staan: 果然，他来了.",
      ex: [
        { cn: "我以为他不会来，他竟然来了。", py: "Wǒ yǐwéi tā bú huì lái, tā jìngrán lái le.", nl: "Ik dacht dat hij niet zou komen, maar hij kwam toch." },
        { cn: "我知道他一定会来，他果然来了。", py: "Wǒ zhīdào tā yídìng huì lái, tā guǒrán lái le.", nl: "Ik wist dat hij zou komen, en ja hoor, hij kwam." }
      ] },
    { h: "竟然 of 突然?",
      p: "突然 gaat over tijd: iets gebeurt plotseling, zonder waarschuwing. Het zegt niets over je verwachting. 突然 is ook een bijvoeglijk naamwoord: 这件事太突然了. 竟然 en 居然 kunnen dat niet; zij zijn alleen bijwoorden.",
      ex: [
        { cn: "我们正在吃饭，灯突然灭了。", py: "Wǒmen zhèngzài chī fàn, dēng tūrán miè le.", nl: "We zaten te eten, toen ineens het licht uitging." },
        { cn: "这个消息太突然了。", py: "Zhège xiāoxi tài tūrán le.", nl: "Dit nieuws komt erg onverwacht." }
      ] },
    { h: "竟然 of 居然: register en toon",
      p: "竟然 en 居然 zijn bijna altijd uitwisselbaar. 居然 hoor je wat vaker in gesprekken, 竟然 wat vaker in geschreven tekst. Ze kunnen bewondering laten horen, maar ook ergernis. De rest van de zin maakt dat duidelijk.",
      ex: [
        { cn: "你居然还记得！", py: "Nǐ jūrán hái jìde!", nl: "Dat je dat nog weet!" }
      ] }
  ],
  mistakes: [
    { wrong: "天气预报说下雨，竟然下雨了。", right: "天气预报说下雨，果然下雨了。", why: "Het gaat zoals verwacht. Daarvoor gebruik je 果然, niet 竟然." },
    { wrong: "这个消息太竟然了。", right: "这个消息太突然了。", why: "竟然 is alleen een bijwoord. Als bijvoeglijk naamwoord (\"onverwacht\") gebruik je 突然." },
    { wrong: "竟然他考了第一名。", right: "他竟然考了第一名。", why: "竟然 staat na het onderwerp, vlak vóór het werkwoord." },
    { wrong: "他忘了竟然我的生日。", right: "他竟然忘了我的生日。", why: "竟然 staat vóór het werkwoord, niet erachter." }
  ],
  vocab: [
    ["竟然 / 居然", "jìngrán / jūrán", "tot mijn verbazing, nota bene"], ["果然", "guǒrán", "zoals verwacht, en ja hoor"], ["突然", "tūrán", "plotseling; onverwacht"],
    ["以为", "yǐwéi", "(ten onrechte) denken"], ["冠军", "guànjūn", "kampioen"], ["输", "shū", "verliezen"],
    ["赢", "yíng", "winnen"], ["比赛", "bǐsài", "wedstrijd"], ["消息", "xiāoxi", "nieuws, bericht"], ["吃惊", "chījīng", "verbaasd, geschrokken"]
  ],
  dialogue: [
    ["A", "你知道吗？小李居然要结婚了！", "Nǐ zhīdào ma? Xiǎo Lǐ jūrán yào jiéhūn le!", "Weet je het al? Xiao Li gaat nota bene trouwen!"],
    ["B", "真的？他不是说不想结婚吗？", "Zhēn de? Tā bú shì shuō bù xiǎng jiéhūn ma?", "Echt? Hij zei toch dat hij niet wilde trouwen?"],
    ["A", "是啊，所以我听到这个消息的时候，也很吃惊。", "Shì a, suǒyǐ wǒ tīngdào zhège xiāoxi de shíhou, yě hěn chījīng.", "Ja, daarom schrok ik ook toen ik het hoorde."],
    ["B", "新娘是谁？", "Xīnniáng shì shéi?", "Wie is de bruid?"],
    ["A", "是他的大学同学小王。", "Shì tā de dàxué tóngxué Xiǎo Wáng.", "Xiao Wang, een studiegenoot van hem."],
    ["B", "我早就觉得他们俩会在一起，果然没猜错！", "Wǒ zǎo jiù juéde tāmen liǎ huì zài yìqǐ, guǒrán méi cāicuò!", "Ik dacht al lang dat die twee samen zouden komen. Ik had het dus goed!"]
  ],
  reading: {
    title: "一场比赛",
    lines: [
      { cn: "上个星期，我们学校举行了一场乒乓球比赛。", py: "Shàng ge xīngqī, wǒmen xuéxiào jǔxíngle yì chǎng pīngpāngqiú bǐsài.", nl: "Vorige week hield onze school een tafeltenniswedstrijd." },
      { cn: "大家都以为去年的冠军小张一定会赢。", py: "Dàjiā dōu yǐwéi qùnián de guànjūn Xiǎo Zhāng yídìng huì yíng.", nl: "Iedereen dacht dat Xiao Zhang, de kampioen van vorig jaar, zeker zou winnen." },
      { cn: "可是第一场比赛，他竟然输给了一个新同学。", py: "Kěshì dì yī chǎng bǐsài, tā jìngrán shū gěile yí ge xīn tóngxué.", nl: "Maar in de eerste wedstrijd verloor hij tot ieders verbazing van een nieuwe klasgenoot." },
      { cn: "这个新同学叫安娜，是从德国来的留学生。", py: "Zhège xīn tóngxué jiào Ānnà, shì cóng Déguó lái de liúxuéshēng.", nl: "Die nieuwe klasgenoot heet Anna. Ze is een buitenlandse student uit Duitsland." },
      { cn: "她才学了两年乒乓球，居然打得这么好！", py: "Tā cái xuéle liǎng nián pīngpāngqiú, jūrán dǎ de zhème hǎo!", nl: "Ze speelt pas twee jaar tafeltennis, en toch speelt ze zo goed!" },
      { cn: "后来我们才知道，她竟然每天练习三个小时。", py: "Hòulái wǒmen cái zhīdào, tā jìngrán měi tiān liànxí sān ge xiǎoshí.", nl: "Later hoorden we dat ze nota bene elke dag drie uur oefent." },
      { cn: "老师说：\"我早就觉得她会成功。\"最后，她果然得了第一名。", py: "Lǎoshī shuō: \"Wǒ zǎo jiù juéde tā huì chénggōng.\" Zuìhòu, tā guǒrán déle dì yī míng.", nl: "De leraar zei: \"Ik dacht al lang dat ze zou slagen.\" En ja hoor, uiteindelijk werd ze eerste." },
      { cn: "比赛结束的时候，突然下起了大雨，可是大家都很高兴。", py: "Bǐsài jiéshù de shíhou, tūrán xiàqǐle dà yǔ, kěshì dàjiā dōu hěn gāoxìng.", nl: "Toen de wedstrijd afliep, begon het ineens hard te regenen, maar iedereen was blij." }
    ],
    questions: [
      { type: "mc", q: "Wie was de kampioen van vorig jaar?",
        options: ["Xiao Zhang.", "Anna.", "De leraar.", "Dat staat niet in de tekst."], answer: 0,
        why: ["Goed: 去年的冠军小张.", "Anna is nieuw; zij won dit jaar.", "De leraar speelde niet mee.", "Het staat in de tweede zin."] },
      { type: "mc", q: "Waarom speelt Anna zo goed?",
        options: ["Ze oefent elke dag drie uur.", "Ze speelt al tien jaar.", "Ze heeft les van de kampioen.", "Ze komt uit een tafeltennisfamilie."], answer: 0,
        why: ["Goed: 她竟然每天练习三个小时。", "Ze speelt pas twee jaar: 才学了两年.", "Dat staat niet in de tekst.", "Over haar familie staat niets in de tekst."] },
      { type: "mc", q: "\"他竟然输给了一个新同学\": wat laat 竟然 hier zien?",
        options: ["Niemand verwachtte dat hij zou verliezen.", "Iedereen verwachtte dat hij zou verliezen.", "Hij verloor heel plotseling, in één seconde.", "Hij verloor met opzet."], answer: 0,
        why: ["Goed: 竟然 = tegen de verwachting in. Iedereen dacht dat hij zou winnen.", "Dan zou er 果然 staan.", "\"Plotseling\" is 突然.", "Over opzet zegt 竟然 niets."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik dacht dat hij zou winnen, maar hij heeft tot mijn verbazing verloren.\"",
      options: ["我以为他会赢，他竟然输了。", "我以为他会赢，他果然输了。", "我以为他会赢，他输竟然了。", "我以为他会赢，他竟然赢了。"], answer: 0,
      why: ["Goed: 竟然 vóór het werkwoord: iets onverwachts.", "果然 = zoals verwacht. Jij verwachtte juist winst.", "竟然 staat vóór het werkwoord.", "Winnen was wat je verwachtte; dat verbaast je niet."] },
    { type: "mc", q: "天气预报说今天有雨，___下雨了。(De weersvoorspelling zei regen, en ja hoor: het regende.)",
      options: ["果然", "竟然", "居然", "突然"], answer: 0,
      why: ["Goed: het gaat zoals verwacht: 果然.", "竟然 betekent dat het tegen de verwachting in gaat.", "居然 betekent hetzelfde als 竟然: tegen de verwachting in.", "突然 betekent \"plotseling\", niet \"en ja hoor\"."] },
    { type: "mc", q: "我们正在吃饭，灯___灭了。(We zaten te eten, toen ineens het licht uitging.)",
      options: ["突然", "果然", "当然", "本来"], answer: 0,
      why: ["Goed: 突然 = plotseling, zonder waarschuwing.", "果然 = zoals verwacht; niemand verwachtte dit.", "当然 = natuurlijk, vanzelfsprekend.", "本来 = oorspronkelijk; het past niet bij \"ineens\"."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hij is nota bene mijn verjaardag vergeten.\"",
      tokens: [["他", "tā"], ["竟然", "jìngrán"], ["把", "bǎ"], ["我的生日", "wǒ de shēngrì"], ["忘了", "wàng le"]] },
    { type: "fill", q: "我以为他不会来，没想到他___来了。(Ik dacht dat hij niet zou komen, maar tot mijn verbazing kwam hij toch.)", answers: ["竟然", "居然"],
      hint: "Welk bijwoord betekent \"tegen de verwachting in\"?", why: "竟然 of 居然: na het onderwerp, vóór het werkwoord." },
    { type: "order", q: "Zet in de goede volgorde: \"Dat je dat nog weet!\"",
      tokens: [["你", "nǐ"], ["居然", "jūrán"], ["还", "hái"], ["记得", "jìde"]] },
    { type: "mc", q: "他果然来了。 Wat bedoelt de spreker?",
      options: ["Ik verwachtte al dat hij zou komen, en dat klopte.", "Ik verwachtte niet dat hij zou komen.", "Hij kwam plotseling, zonder waarschuwing.", "Hij is niet gekomen."], answer: 0,
      why: ["Goed: 果然 = zoals verwacht.", "Dat zou 竟然 of 居然 zijn.", "Dat zou 突然 zijn.", "来了 betekent dat hij wél kwam."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["这个消息太竟然了。", "这个消息太突然了。", "他竟然知道这个消息。", "他果然知道这个消息。"], answer: 0,
      why: ["Goed: dit is fout. 竟然 is alleen een bijwoord, geen bijvoeglijk naamwoord.", "Deze klopt: 突然 kan een bijvoeglijk naamwoord zijn.", "Deze klopt: 竟然 vóór het werkwoord.", "Deze klopt: 果然 vóór het werkwoord."] },
    { type: "mc", q: "Wat is het verschil tussen 竟然 en 居然?",
      options: ["Bijna geen: beide betekenen \"tegen de verwachting in\"; 居然 klinkt iets meer als spreektaal.", "居然 betekent \"zoals verwacht\", 竟然 \"tegen de verwachting in\".", "竟然 betekent \"plotseling\", 居然 \"tot mijn verbazing\".", "居然 is alleen voor positieve verrassingen."], answer: 0,
      why: ["Goed: ze zijn bijna altijd uitwisselbaar.", "\"Zoals verwacht\" is 果然, niet 居然.", "\"Plotseling\" is 突然, niet 竟然.", "居然 kan ook bij negatieve verrassingen: 他居然忘了."] },
    { type: "mc", q: "\"Hij is tot ieders verbazing niet gekomen.\"",
      options: ["他竟然没来。", "他没竟然来。", "他竟然来没。", "他果然没来。"], answer: 0,
      why: ["Goed: 竟然 vóór de ontkenning 没.", "竟然 staat vóór 没, niet erna.", "没 staat vóór het werkwoord.", "果然 = zoals verwacht; hier is het een verrassing."] },
    { type: "open", q: "Vertaal: \"Hij is tot mijn verbazing voor het examen geslaagd.\"", model: ["他竟然通过了考试。", "他居然考过了。"],
      tip: "Check: 竟然 of 居然 na het onderwerp, vóór het werkwoord." },
    { type: "open", q: "Vertaal: \"De weersvoorspelling zei sneeuw, en ja hoor: het sneeuwde.\"", model: ["天气预报说会下雪，果然下雪了。", "天气预报说要下雪，果然下雪了。"],
      tip: "Check: het gaat zoals verwacht, dus 果然, niet 竟然." }
  ],
  review: [
    { type: "mc", q: "\"Ik dacht dat het duur zou zijn, maar het was tot mijn verbazing heel goedkoop.\"",
      options: ["我以为很贵，没想到竟然这么便宜。", "我以为很贵，没想到果然这么便宜。", "我以为很贵，没想到突然这么便宜。", "我以为很贵，没想到这么竟然便宜。"], answer: 0,
      why: ["Goed.", "果然 = zoals verwacht; jij verwachtte juist iets duurs.", "突然 = plotseling; het gaat om je verwachting, niet om tijd.", "竟然 staat vóór 这么便宜."] },
    { type: "mc", q: "他说今天会迟到，他___迟到了。(Hij zei dat hij te laat zou komen, en ja hoor.)",
      options: ["果然", "竟然", "居然", "突然"], answer: 0,
      why: ["Goed: het ging zoals verwacht.", "竟然 = tegen de verwachting in.", "居然 = tegen de verwachting in.", "突然 = plotseling."] },
    { type: "mc", q: "这件事太___了，我一点儿准备都没有。(Dit kwam zo onverwacht, ik was er totaal niet op voorbereid.)",
      options: ["突然", "竟然", "居然", "果然"], answer: 0,
      why: ["Goed: 突然 kan een bijvoeglijk naamwoord zijn: onverwacht.", "竟然 is alleen een bijwoord.", "居然 is alleen een bijwoord.", "果然 is een bijwoord en betekent \"zoals verwacht\"."] }
  ]
})
