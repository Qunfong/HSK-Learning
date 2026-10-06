({
  id: "11", slug: "bushi-ma", title: "不是……吗？", sub: "Dat is toch ...?",
  canDo: "Je kunt nu met 不是……吗 laten horen dat je iets al dacht te weten, en verbazing of een verwijt uitdrukken.",
  guess: {
    q: "Je weet zeker dat je vriend vandaag komt. Iemand twijfelt. Wat zeg je, denk je?",
    options: ["他不是今天来吗？", "他是今天来吗？", "他不是今天来。", "他不是吗今天来？"], answer: 0,
    why: ["Goed: 不是……吗 betekent \"hij komt toch vandaag?\". Je weet het al.", "Dit is een gewone vraag. Je laat niet horen dat je het al weet.", "Zonder 吗 is dit een gewone ontkenning: hij komt vandaag niet.", "吗 staat altijd aan het eind van de zin."]
  },
  problem: "In het Nederlands zeg je: \"Jij spreekt toch Chinees?\" Je vraagt het niet echt, je weet het al. Vaak ben je verbaasd of geïrriteerd. Het Chinees gebruikt daarvoor 不是……吗. Het lijkt een ontkennende vraag, maar het betekent juist iets bevestigends.",
  pattern: [
    { l: "wie", v: "你", c: 1 }, { l: "不是", v: "不是", c: 2, key: true }, { l: "werkwoord", v: "说过", c: 3 },
    { l: "inhoud", v: "明天有空", c: 4 }, { l: "吗", v: "吗？", c: 5, key: true }
  ],
  patternCap: "Onderwerp + 不是 + werkwoordgroep / naamwoord + 吗？ = \"... toch ...?\" (de spreker weet of denkt het al)",
  rules: [
    "不是 staat meestal direct na het onderwerp: 你不是学生吗？",
    "Na 不是 kan een naamwoord, een werkwoordgroep of een bijvoeglijk naamwoord komen: 你不是很忙吗？",
    "吗 staat aan het eind van de hele zin, niet direct na 不是.",
    "Tijd en aspect blijven gewoon in de zin: 你不是已经吃过了吗？",
    "Vaak volgt een tweede zin met 怎么 of 为什么: 你不是在北京吗？怎么在这儿？"
  ],
  pitfall: "不是……吗 betekent het positieve: 你不是中国人吗？ = \"Jij bent toch Chinees?\". De spreker denkt dus dat het wél zo is.",
  examples: [
    { cn: "你不是会说汉语吗？", py: "Nǐ bú shì huì shuō Hànyǔ ma?", nl: "Jij spreekt toch Chinees?" },
    { cn: "他不是去北京了吗？怎么还在这儿？", py: "Tā bú shì qù Běijīng le ma? Zěnme hái zài zhèr?", nl: "Hij was toch naar Beijing? Waarom is hij nog hier?" },
    { cn: "这不是你的手机吗？", py: "Zhè bú shì nǐ de shǒujī ma?", nl: "Dit is toch jouw telefoon?" },
    { cn: "你不是说要早点睡吗？", py: "Nǐ bú shì shuō yào zǎo diǎn shuì ma?", nl: "Je zei toch dat je vroeg ging slapen?" }
  ],
  nuance: [
    { h: "Echte vraag of retorische vraag?",
      p: "Met een gewone 吗-vraag wil je informatie: je weet het antwoord niet. Met 不是……吗 weet je het antwoord al, of denk je dat. Je vraagt om bevestiging, of je bent verbaasd omdat de situatie anders lijkt.",
      ex: [
        { cn: "你是老师吗？", py: "Nǐ shì lǎoshī ma?", nl: "Bent u leraar? (ik weet het niet)" },
        { cn: "你不是老师吗？", py: "Nǐ bú shì lǎoshī ma?", nl: "U bent toch leraar? (dat dacht ik)" }
      ] },
    { h: "Toon: verbazing, herinnering of verwijt",
      p: "De zin kan vriendelijk klinken, als herinnering. Maar hij kan ook verwijtend klinken: je wijst iemand op iets wat hij zelf zei of zou moeten weten. Je intonatie en de tweede zin maken het verschil. Wees voorzichtig met 不是……吗 tegenover je baas of een leraar.",
      ex: [
        { cn: "你不是说你会来吗？怎么没来？", py: "Nǐ bú shì shuō nǐ huì lái ma? Zěnme méi lái?", nl: "Je zei toch dat je zou komen? Waarom ben je niet gekomen?" }
      ] },
    { h: "Sterker: 难道……吗 (HSK 5)",
      p: "难道……吗 is ook een retorische vraag, maar sterker en vaak boos of ongelovig. Met 不是……吗 noem je wat je denkt dat waar is. Met 难道 zeg je eerder: \"dat kan toch niet waar zijn?\" Je kunt ze ook samen gebruiken: 难道你不是学生吗？",
      ex: [
        { cn: "难道你不知道吗？", py: "Nándào nǐ bù zhīdào ma?", nl: "Weet je dat dan echt niet?" }
      ] }
  ],
  mistakes: [
    { wrong: "你是不是学生吗？", right: "你不是学生吗？", why: "是不是 is al een vraag. Daar komt geen 吗 achter. Wil je \"toch\" zeggen, gebruik dan 不是……吗." },
    { wrong: "你不是说过吗明天有空？", right: "你不是说过明天有空吗？", why: "吗 staat aan het eind van de hele zin, niet direct na het werkwoord." },
    { wrong: "A：你不是老师吗？ B：不，我是老师。", right: "A：你不是老师吗？ B：是啊，我是老师。", why: "De vraag verwacht \"ja\". Klopt het, dan bevestig je met 是啊 of 对." },
    { wrong: "你没是学生吗？", right: "你不是学生吗？", why: "是 ontken je altijd met 不, nooit met 没." }
  ],
  vocab: [
    ["不是……吗", "bú shì ... ma", "... toch ...? (retorische vraag)"], ["难道", "nándào", "toch niet ... ? (sterke retorische vraag)"],
    ["约", "yuē", "afspreken"], ["记性", "jìxing", "geheugen"], ["原来", "yuánlái", "het blijkt dat, dus"],
    ["聊天记录", "liáotiān jìlù", "chatgeschiedenis"], ["迟到", "chídào", "te laat komen"], ["放假", "fàngjià", "vakantie hebben, vrij zijn"],
    ["奇怪", "qíguài", "vreemd, verbaasd"], ["看来", "kànlái", "zo te zien, blijkbaar"]
  ],
  dialogue: [
    ["A", "你怎么还在家？你不是八点要上课吗？", "Nǐ zěnme hái zài jiā? Nǐ bú shì bā diǎn yào shàngkè ma?", "Waarom ben je nog thuis? Je hebt toch om acht uur les?"],
    ["B", "今天不是星期六吗？没有课啊。", "Jīntiān bú shì xīngqīliù ma? Méiyǒu kè a.", "Het is toch zaterdag vandaag? Er is geen les."],
    ["A", "今天是星期五！", "Jīntiān shì xīngqīwǔ!", "Het is vrijdag vandaag!"],
    ["B", "啊？学校不是已经放假了吗？", "Á? Xuéxiào bú shì yǐjīng fàngjià le ma?", "Hè? De school heeft toch al vakantie?"],
    ["A", "下个星期才放假呢。", "Xià ge xīngqī cái fàngjià ne.", "Pas volgende week begint de vakantie."],
    ["B", "完了，我要迟到了！", "Wán le, wǒ yào chídào le!", "O nee, ik kom te laat!"]
  ],
  reading: {
    title: "一个误会",
    lines: [
      { cn: "小王约朋友小林星期天去看电影。", py: "Xiǎo Wáng yuē péngyou Xiǎo Lín xīngqītiān qù kàn diànyǐng.", nl: "Xiao Wang sprak met zijn vriend Xiao Lin af om zondag naar de film te gaan." },
      { cn: "星期天下午，小王在电影院门口等了半个小时，小林还没来。", py: "Xīngqītiān xiàwǔ, Xiǎo Wáng zài diànyǐngyuàn ménkǒu děngle bàn ge xiǎoshí, Xiǎo Lín hái méi lái.", nl: "Zondagmiddag wachtte Xiao Wang een half uur bij de ingang van de bioscoop. Xiao Lin was er nog niet." },
      { cn: "他给小林打电话：\"你不是说两点到吗？电影马上就要开始了。\"", py: "Tā gěi Xiǎo Lín dǎ diànhuà: \"Nǐ bú shì shuō liǎng diǎn dào ma? Diànyǐng mǎshàng jiù yào kāishǐ le.\"", nl: "Hij belde Xiao Lin: \"Je zei toch dat je om twee uur zou komen? De film begint zo.\"" },
      { cn: "小林很奇怪地说：\"我们不是约好下个星期天吗？\"", py: "Xiǎo Lín hěn qíguài de shuō: \"Wǒmen bú shì yuēhǎo xià ge xīngqītiān ma?\"", nl: "Xiao Lin zei verbaasd: \"We hadden toch volgende week zondag afgesproken?\"" },
      { cn: "小王打开手机，看了看他们的聊天记录。", py: "Xiǎo Wáng dǎkāi shǒujī, kànle kàn tāmen de liáotiān jìlù.", nl: "Xiao Wang opende zijn telefoon en keek in hun chatgeschiedenis." },
      { cn: "原来小林说得对，是他自己记错了。", py: "Yuánlái Xiǎo Lín shuō de duì, shì tā zìjǐ jìcuò le.", nl: "Xiao Lin bleek gelijk te hebben. Hij had het zelf verkeerd onthouden." },
      { cn: "小王笑着说：\"我不是常说自己记性很好吗？看来我错了！\"", py: "Xiǎo Wáng xiàozhe shuō: \"Wǒ bú shì cháng shuō zìjǐ jìxing hěn hǎo ma? Kànlái wǒ cuò le!\"", nl: "Xiao Wang zei lachend: \"Ik zeg toch altijd dat ik een goed geheugen heb? Blijkbaar had ik het mis!\"" },
      { cn: "最后，他一个人看了那场电影。", py: "Zuìhòu, tā yí ge rén kànle nà chǎng diànyǐng.", nl: "Uiteindelijk keek hij die film in zijn eentje." }
    ],
    questions: [
      { type: "mc", q: "Wie had zich vergist?",
        options: ["Xiao Wang: hij had de verkeerde dag onthouden.", "Xiao Lin: hij was de afspraak vergeten.", "Xiao Lin: hij had de verkeerde tijd onthouden.", "Niemand: de film was verplaatst."], answer: 0,
        why: ["Goed: 原来小林说得对，是他自己记错了。", "Xiao Lin had gelijk: 小林说得对.", "Xiao Lin wist de goede dag nog: volgende week zondag.", "Over een verplaatste film staat niets in de tekst."] },
      { type: "mc", q: "Wanneer hadden ze echt afgesproken?",
        options: ["Volgende week zondag.", "Deze zondag om twee uur.", "Zaterdagmiddag.", "Deze zondag om half drie."], answer: 0,
        why: ["Goed: 我们不是约好下个星期天吗？ En Xiao Lin had gelijk.", "Dat dacht Xiao Wang, maar hij had het mis.", "Zaterdag staat niet in de tekst.", "Half drie staat niet in de tekst."] },
      { type: "mc", q: "\"你不是说两点到吗？\" Wat laat Xiao Wang hiermee horen?",
        options: ["Hij denkt dat Xiao Lin om twee uur zou komen.", "Hij weet niet hoe laat Xiao Lin komt.", "Hij denkt dat Xiao Lin niet om twee uur zou komen.", "Hij vraagt of Xiao Lin om twee uur kan komen."], answer: 0,
        why: ["Goed: 不是……吗 = \"je zei toch ...?\". Hij is verbaasd en een beetje geïrriteerd.", "Hij weet het wel: hij noemt zelf de tijd.", "不是……吗 bevestigt juist: hij denkt dat het wél twee uur was.", "Het is geen verzoek, maar een herinnering aan wat Xiao Lin zei."] }
    ]
  },
  questions: [
    { type: "mc", q: "你不是喜欢吃辣的吗？ Wat bedoelt de spreker?",
      options: ["Ik dacht dat jij van pittig eten houdt.", "Ik dacht dat jij niet van pittig eten houdt.", "Hou jij van pittig eten? Ik heb geen idee.", "Ik hou niet van pittig eten."], answer: 0,
      why: ["Goed: 不是……吗 bevestigt iets wat de spreker al denkt.", "Het lijkt ontkennend, maar 不是……吗 betekent het positieve.", "Dat is een gewone vraag: 你喜欢吃辣的吗？", "Het gaat over 你, niet over de spreker."] },
    { type: "mc", q: "\"Jij woont toch in Shanghai?\"",
      options: ["你不是住在上海吗？", "你是不是住在上海吗？", "你不是住在上海。", "你不是吗住在上海？"], answer: 0,
      why: ["Goed: 不是 na het onderwerp, 吗 aan het eind.", "是不是 is al een vraag; daar komt geen 吗 bij.", "Zonder 吗 zeg je: \"Je woont niet in Shanghai.\"", "吗 staat aan het eind van de zin."] },
    { type: "order", q: "Zet in de goede volgorde: \"Dit is toch het boek dat je gisteren kocht?\"",
      tokens: [["这", "zhè"], ["不是", "bú shì"], ["你昨天买的", "nǐ zuótiān mǎi de"], ["书", "shū"], ["吗", "ma"]] },
    { type: "fill", q: "你___说今天不来吗？怎么来了？(Je zei toch dat je vandaag niet kwam? Waarom ben je er toch?)", answers: ["不是"],
      hint: "Welke twee tekens maken samen met 吗 een \"toch\"-vraag?", why: "不是……吗: je herinnert de ander aan wat hij zelf zei." },
    { type: "mc", q: "Welke zin is een ECHTE vraag, zonder dat de spreker het antwoord al denkt te weten?",
      options: ["你是学生吗？", "你不是学生吗？", "这不是你的书吗？", "他不是走了吗？"], answer: 0,
      why: ["Goed: een gewone 吗-vraag vraagt om informatie.", "Met 不是……吗 denkt de spreker al dat je student bent.", "Met 不是……吗 denkt de spreker al dat het jouw boek is.", "Met 不是……吗 denkt de spreker al dat hij weg is."] },
    { type: "mc", q: "A：你不是会游泳吗？ B kan zwemmen. Wat antwoordt B?",
      options: ["是啊，我会游泳。", "不，我会游泳。", "是啊，我不会游泳。", "不是，我会游泳。"], answer: 0,
      why: ["Goed: A verwacht \"ja\", en dat klopt. Je bevestigt met 是啊.", "Met 不 spreek je A tegen, maar A heeft gelijk.", "是啊 en 不会 spreken elkaar tegen.", "不是 zegt dat A ongelijk heeft, maar A heeft gelijk."] },
    { type: "order", q: "Zet in de goede volgorde: \"Dat is toch jouw zus?\"",
      tokens: [["那", "nà"], ["不是", "bú shì"], ["你", "nǐ"], ["姐姐", "jiějie"], ["吗", "ma"]] },
    { type: "mc", q: "难道你不知道吗？ Hoe klinkt deze zin?",
      options: ["Sterk en verwijtend: \"Weet je dat dan echt niet?\"", "Neutraal: \"Weet jij het?\"", "Als vaststelling: \"Je weet het niet.\"", "Vriendelijk: \"Je weet het toch?\""], answer: 0,
      why: ["Goed: 难道……吗 is een sterke retorische vraag, vaak ongelovig of boos.", "Een neutrale vraag is 你知道吗？", "Een vaststelling heeft geen 吗: 你不知道。", "Dat is eerder 你不是知道吗？ 难道 is veel sterker."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["你是不是老师吗？", "你不是老师吗？", "你是不是老师？", "你是老师吗？"], answer: 0,
      why: ["Goed: dit is fout. 是不是 en 吗 zijn allebei vraagvormen; kies er één.", "Deze klopt: \"U bent toch leraar?\"", "Deze klopt: een ja/nee-vraag met 是不是.", "Deze klopt: een gewone 吗-vraag."] },
    { type: "mc", q: "\"Je zei toch dat je moe was? Waarom ga je nog uit?\"",
      options: ["你不是说你很累吗？怎么还出去？", "你不是说你很累。怎么还出去？", "你说你不是很累吗？怎么还出去？", "你是说你很累吗？怎么还出去？"], answer: 0,
      why: ["Goed: 不是 + 说你很累 + 吗.", "Zonder 吗 zeg je: \"Je zei niet dat je moe was.\"", "Nu staat 不是 bij 很累: \"je zei dat je niet erg moe was?\"", "Dit is een echte vraag zonder \"toch\": \"Zei je dat je moe was?\""] },
    { type: "open", q: "Vertaal: \"U bent toch leraar?\"", model: ["您不是老师吗？", "你不是老师吗？"],
      tip: "Check: staat 不是 na het onderwerp, en eindigt de zin op 吗？" },
    { type: "open", q: "Vertaal: \"Het regent toch? Waarom neem je geen paraplu mee?\"", model: ["不是在下雨吗？你怎么不带伞？", "外面不是下雨了吗？你为什么不带雨伞？"],
      tip: "Check: 不是……吗 in de eerste zin, en 怎么 of 为什么 in de tweede zin." }
  ],
  review: [
    { type: "mc", q: "\"Jij hebt toch een auto?\"",
      options: ["你不是有车吗？", "你不是有车。", "你是不是有车吗？", "你没是有车吗？"], answer: 0,
      why: ["Goed.", "Zonder 吗 is het een ontkenning, geen \"toch\"-vraag.", "是不是 en 吗 samen kan niet.", "是 ontken je met 不, niet met 没."] },
    { type: "mc", q: "他不是去旅行了吗？ Wat denkt de spreker?",
      options: ["Dat hij op reis is.", "Dat hij niet op reis is.", "Niets: hij vraagt het gewoon.", "Dat hij later op reis wil."], answer: 0,
      why: ["Goed: 不是……吗 bevestigt wat de spreker denkt.", "Het lijkt ontkennend, maar het betekent het positieve.", "Een gewone vraag is 他去旅行了吗？", "了 laat zien dat de reis al begonnen is."] },
    { type: "mc", q: "这___你的钱包吗？(Dit is toch jouw portemonnee?)",
      options: ["不是", "是不是", "没是", "不"], answer: 0,
      why: ["Goed: 这不是你的钱包吗？", "是不是 kan niet samen met 吗.", "是 ontken je niet met 没.", "Alleen 不 is te kort: je hebt het werkwoord 是 nodig."] }
  ]
})
