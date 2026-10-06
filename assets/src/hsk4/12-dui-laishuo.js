({
  id: "12", slug: "dui-laishuo", title: "对……来说, 对于, 关于", sub: "Voor, wat betreft en over",
  canDo: "Je kunt nu zeggen voor wie iets geldt (对……来说), waarop een houding gericht is (对于) en waarover iets gaat (关于).",
  guess: {
    q: "\"Voor mij is karakters schrijven het moeilijkst.\" Welke zin klopt, denk je?",
    options: ["对我来说，写汉字最难。", "对我说，写汉字最难。", "关于我来说，写汉字最难。", "我来说对，写汉字最难。"], answer: 0,
    why: ["Goed: 对 + persoon + 来说 = \"voor ...\", vanuit iemands standpunt.", "对我说 betekent \"tegen mij zeggen\". Je mist 来.", "关于 betekent \"over\" en past niet bij 来说.", "对 staat vóór de persoon: 对我来说."]
  },
  problem: "Het Nederlandse \"voor\", \"wat betreft\" en \"over\" vertaal je in het Chinees met drie verschillende woorden. 对……来说: voor wie iets geldt. 对于: waarop je mening of aanpak gericht is. 关于: het onderwerp waarover iets gaat. Ze lijken op elkaar, maar ze zijn niet uitwisselbaar.",
  pattern: [
    { l: "对", v: "对", c: 1, key: true }, { l: "wie", v: "我", c: 2 }, { l: "来说", v: "来说，", c: 3, key: true },
    { l: "onderwerp", v: "汉字", c: 4 }, { l: "oordeel", v: "最难", c: 5 }
  ],
  patternCap: "对 + persoon + 来说 = voor ... | 对于 + zaak = wat betreft, ten aanzien van | 关于 + onderwerp = over",
  rules: [
    "对……来说 staat aan het begin van de zin of direct na het onderwerp: 这件事对我来说很重要。",
    "Na 对……来说 volgt een oordeel: 很重要, 太难, 不容易 ...",
    "关于 + onderwerp staat aan het begin van de zin, nooit na het onderwerp: 关于这件事，我不知道。",
    "关于 kan ook met 的 vóór een naamwoord staan: 一本关于历史的书.",
    "对于 mag vóór of na het onderwerp staan. Het is formeler dan 对; in spreektaal zeg je meestal 对."
  ],
  pitfall: "关于 en 对于 niet verwisselen. 关于 noemt het onderwerp (\"over\"). 对于 noemt waarop je houding of handeling gericht is. En 关于 kan niet na het onderwerp staan.",
  examples: [
    { cn: "对我来说，写汉字比说汉语难。", py: "Duì wǒ lái shuō, xiě Hànzì bǐ shuō Hànyǔ nán.", nl: "Voor mij is karakters schrijven moeilijker dan Chinees spreken." },
    { cn: "这次机会对他来说非常重要。", py: "Zhè cì jīhuì duì tā lái shuō fēicháng zhòngyào.", nl: "Deze kans is voor hem heel belangrijk." },
    { cn: "对于这个问题，大家的看法不一样。", py: "Duìyú zhège wèntí, dàjiā de kànfǎ bù yíyàng.", nl: "Over deze kwestie verschillen de meningen." },
    { cn: "我买了一本关于中国历史的书。", py: "Wǒ mǎile yì běn guānyú Zhōngguó lìshǐ de shū.", nl: "Ik heb een boek over Chinese geschiedenis gekocht." }
  ],
  nuance: [
    { h: "对于 of 关于?",
      p: "关于 noemt het onderwerp: waarover gaat het boek, het gesprek, de mededeling? 对于 noemt het doel van een houding of handeling: waarop reageer je, wat behandel je? Soms passen beide aan het begin van een zin. Maar na het onderwerp kan alleen 对于, en vóór 的 + naamwoord (\"een boek over\") alleen 关于.",
      ex: [
        { cn: "我们对于这件事很重视。", py: "Wǒmen duìyú zhè jiàn shì hěn zhòngshì.", nl: "Wij nemen deze zaak heel serieus." },
        { cn: "这是一本关于熊猫的书。", py: "Zhè shì yì běn guānyú xióngmāo de shū.", nl: "Dit is een boek over panda's." }
      ] },
    { h: "对, 对于 en 对……来说",
      p: "对 is het gewone woord voor \"tegenover, tegen\": 她对我很好 (zij is aardig tegen mij). Bij personen kun je hier geen 对于 gebruiken. 对……来说 is iets anders: het geeft een standpunt, \"voor mij, vind ik\". Vergelijk de twee zinnen hieronder.",
      ex: [
        { cn: "她对我很好。", py: "Tā duì wǒ hěn hǎo.", nl: "Zij is aardig tegen mij." },
        { cn: "对我来说，她是最好的老师。", py: "Duì wǒ lái shuō, tā shì zuì hǎo de lǎoshī.", nl: "Voor mij is zij de beste leraar." }
      ] },
    { h: "Register: titels en mededelingen",
      p: "对于 en 关于 hoor je vooral in formele taal: nieuws, vergaderingen, officiële teksten. Een officiële mededeling begint vaak met 关于……的通知. In een gewoon gesprek zeg je liever 对 of 说到.",
      ex: [
        { cn: "关于春节放假的通知", py: "Guānyú Chūnjié fàngjià de tōngzhī", nl: "Mededeling over de vakantie rond het Lentefeest" }
      ] }
  ],
  mistakes: [
    { wrong: "我关于这个问题有一些看法。", right: "关于这个问题，我有一些看法。", why: "关于 staat aan het begin van de zin, niet na het onderwerp." },
    { wrong: "一本对于中国文化的书", right: "一本关于中国文化的书", why: "Waarover een boek gaat, is een onderwerp. Daarvoor gebruik je 关于." },
    { wrong: "我来说，这个工作太累了。", right: "对我来说，这个工作太累了。", why: "来说 heeft 对 nodig: 对 + persoon + 来说." },
    { wrong: "老师对于我们很好。", right: "老师对我们很好。", why: "Voor een houding tegenover personen gebruik je 对, niet 对于." }
  ],
  vocab: [
    ["对……来说", "duì ... lái shuō", "voor ... (vanuit iemands standpunt)"], ["对于", "duìyú", "wat betreft, ten aanzien van"], ["关于", "guānyú", "over (onderwerp)"],
    ["看法", "kànfǎ", "mening, kijk"], ["机会", "jīhuì", "kans, gelegenheid"], ["历史", "lìshǐ", "geschiedenis"],
    ["通知", "tōngzhī", "mededeling, bericht"], ["文化", "wénhuà", "cultuur"], ["耐心", "nàixīn", "geduld; geduldig"], ["错误", "cuòwù", "fout, vergissing"]
  ],
  dialogue: [
    ["A", "你觉得学汉语最难的是什么？", "Nǐ juéde xué Hànyǔ zuì nán de shì shénme?", "Wat vind jij het moeilijkst aan Chinees leren?"],
    ["B", "对我来说，声调最难。你呢？", "Duì wǒ lái shuō, shēngdiào zuì nán. Nǐ ne?", "Voor mij zijn de tonen het moeilijkst. En jij?"],
    ["A", "我觉得汉字更难。我最近在看一本关于汉字历史的书。", "Wǒ juéde Hànzì gèng nán. Wǒ zuìjìn zài kàn yì běn guānyú Hànzì lìshǐ de shū.", "Ik vind karakters moeilijker. Ik lees nu een boek over de geschiedenis van karakters."],
    ["B", "有用吗？", "Yǒuyòng ma?", "Heb je er wat aan?"],
    ["A", "很有用。知道了每个字的故事，就好记多了。", "Hěn yǒuyòng. Zhīdàole měi ge zì de gùshi, jiù hǎo jì duō le.", "Heel veel. Als je het verhaal achter elk karakter kent, onthoud je ze veel makkelijker."],
    ["B", "对我这样的懒学生来说，这个办法也许不错。", "Duì wǒ zhèyàng de lǎn xuésheng lái shuō, zhège bànfǎ yěxǔ búcuò.", "Voor een luie student zoals ik is dat misschien een goede methode."]
  ],
  reading: {
    title: "关于学外语",
    lines: [
      { cn: "关于怎样学外语，每个人的看法都不一样。", py: "Guānyú zěnyàng xué wàiyǔ, měi ge rén de kànfǎ dōu bù yíyàng.", nl: "Over hoe je een vreemde taal leert, denkt iedereen anders." },
      { cn: "对一些人来说，语法最重要。", py: "Duì yìxiē rén lái shuō, yǔfǎ zuì zhòngyào.", nl: "Voor sommige mensen is grammatica het belangrijkst." },
      { cn: "对另一些人来说，多听多说才是最好的办法。", py: "Duì lìng yìxiē rén lái shuō, duō tīng duō shuō cái shì zuì hǎo de bànfǎ.", nl: "Voor anderen is veel luisteren en veel spreken de beste methode." },
      { cn: "我的老师认为，对于学生的错误，老师要有耐心。", py: "Wǒ de lǎoshī rènwéi, duìyú xuésheng de cuòwù, lǎoshī yào yǒu nàixīn.", nl: "Mijn leraar vindt dat een leraar geduld moet hebben met de fouten van studenten." },
      { cn: "她上课的时候，常常给我们讲一些关于中国文化的故事。", py: "Tā shàngkè de shíhou, chángcháng gěi wǒmen jiǎng yìxiē guānyú Zhōngguó wénhuà de gùshi.", nl: "In de les vertelt ze ons vaak verhalen over de Chinese cultuur." },
      { cn: "这些故事让我对汉语越来越感兴趣。", py: "Zhèxiē gùshi ràng wǒ duì Hànyǔ yuè lái yuè gǎn xìngqù.", nl: "Door die verhalen raak ik steeds meer geïnteresseerd in Chinees." },
      { cn: "现在，对我来说，学汉语是一件很快乐的事。", py: "Xiànzài, duì wǒ lái shuō, xué Hànyǔ shì yí jiàn hěn kuàilè de shì.", nl: "Nu is Chinees leren voor mij iets heel leuks." },
      { cn: "所以我觉得，兴趣才是最好的老师。", py: "Suǒyǐ wǒ juéde, xìngqù cái shì zuì hǎo de lǎoshī.", nl: "Daarom denk ik dat interesse de beste leraar is." }
    ],
    questions: [
      { type: "mc", q: "Wat vindt de leraar van de schrijver?",
        options: ["Een leraar moet geduld hebben met fouten van studenten.", "Grammatica is het belangrijkst.", "Veel luisteren en spreken is de beste methode.", "Studenten mogen geen fouten maken."], answer: 0,
        why: ["Goed: 对于学生的错误，老师要有耐心。", "Dat vinden \"sommige mensen\", niet de leraar.", "Dat vinden \"anderen\", niet de leraar.", "De leraar zegt juist dat je geduld moet hebben met fouten."] },
      { type: "mc", q: "Waardoor kreeg de schrijver meer interesse in Chinees?",
        options: ["Door de verhalen over de Chinese cultuur.", "Door veel grammatica te leren.", "Door een boek over karakters.", "Door een reis naar China."], answer: 0,
        why: ["Goed: 这些故事让我对汉语越来越感兴趣。", "Grammatica wordt genoemd, maar niet als reden.", "Het boek over karakters hoort bij de dialoog.", "Een reis staat niet in de tekst."] },
      { type: "mc", q: "\"关于中国文化的故事\": wat betekent 关于 hier?",
        options: ["over", "voor", "tegen", "volgens"], answer: 0,
        why: ["Goed: 关于 noemt het onderwerp: verhalen óver de Chinese cultuur.", "\"Voor\" (vanuit iemands standpunt) is 对……来说.", "\"Tegen iemand\" is 对.", "\"Volgens\" is 根据 of 按照."] }
    ]
  },
  questions: [
    { type: "mc", q: "___我来说，这件事很重要。(Voor mij is dit heel belangrijk.)",
      options: ["对", "关于", "给", "跟"], answer: 0,
      why: ["Goed: 对 + persoon + 来说.", "关于 betekent \"over\" en gaat niet samen met 来说.", "给 betekent \"aan, voor (iemand iets geven)\" en gaat niet samen met 来说.", "跟 betekent \"met\" en gaat niet samen met 来说."] },
    { type: "mc", q: "\"Ik heb een boek over Chinese geschiedenis gekocht.\"",
      options: ["我买了一本关于中国历史的书。", "我买了一本对于中国历史的书。", "我买了一本关于中国历史书的。", "我关于中国历史买了一本书。"], answer: 0,
      why: ["Goed: 关于 + onderwerp + 的 + 书.", "Waarover een boek gaat, is een onderwerp: 关于, niet 对于.", "的 staat vóór het naamwoord: 历史的书.", "关于 kan niet na het onderwerp staan."] },
    { type: "order", q: "Zet in de goede volgorde: \"Dit is een artikel over milieuproblemen.\"",
      tokens: [["这是", "zhè shì"], ["一篇", "yì piān"], ["关于", "guānyú"], ["环境问题的", "huánjìng wèntí de"], ["文章", "wénzhāng"]] },
    { type: "fill", q: "老师___我们很好。(De leraar is heel aardig tegen ons.)", answers: ["对"],
      hint: "Welk kort woord betekent \"tegen(over)\" bij personen?", why: "Een houding tegenover personen: 对. 对于 kan hier niet." },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["我关于这件事没有意见。", "关于这件事，我没有意见。", "我对这件事没有意见。", "对于这件事，我没有意见。"], answer: 0,
      why: ["Goed: dit is fout. 关于 kan niet na het onderwerp staan.", "Deze klopt: 关于 staat aan het begin.", "Deze klopt: 对 mag na het onderwerp.", "Deze klopt: 对于 mag aan het begin staan."] },
    { type: "order", q: "Zet in de goede volgorde: \"Voor hem is dit een goede kans.\"",
      tokens: [["对", "duì"], ["他", "tā"], ["来说", "lái shuō"], ["这是", "zhè shì"], ["一个好机会", "yí ge hǎo jīhuì"]] },
    { type: "mc", q: "对他来说，钱不是最重要的。 Wat betekent dit?",
      options: ["Voor hem is geld niet het belangrijkst.", "Hij zegt tegen mij dat geld niet het belangrijkst is.", "Over geld zegt hij niets.", "Voor geld doet hij alles."], answer: 0,
      why: ["Goed: 对他来说 = vanuit zijn standpunt.", "\"Tegen iemand zeggen\" is 对……说, zonder 来.", "关于钱 zou \"over geld\" zijn; dat staat er niet.", "Dat is het tegenovergestelde van wat er staat."] },
    { type: "mc", q: "他对我说：\"汉语不难。\" Wat betekent 对我说 hier?",
      options: ["Hij zei tegen mij", "Voor mij", "Hij zei over mij", "Volgens mij"], answer: 0,
      why: ["Goed: 对 + persoon + 说 = tegen iemand zeggen.", "\"Voor mij\" is 对我来说, met 来.", "\"Over mij\" zou 关于我 zijn.", "\"Volgens mij\" is 我觉得 of 我认为."] },
    { type: "mc", q: "Welke titel past bij een officiële mededeling over de vakantie?",
      options: ["关于春节放假的通知", "对于春节放假的通知", "对春节放假来说的通知", "春节放假关于的通知"], answer: 0,
      why: ["Goed: 关于……的通知 is de vaste vorm voor een officiële mededeling.", "Het onderwerp van een mededeling vraagt 关于, niet 对于.", "对……来说 geeft een standpunt, geen onderwerp.", "关于 staat vóór het onderwerp."] },
    { type: "mc", q: "___中国人来说，春节是最重要的节日。(Voor Chinezen is het Lentefeest de belangrijkste feestdag.)",
      options: ["对", "关于", "给", "从"], answer: 0,
      why: ["Goed: 对 + 中国人 + 来说.", "关于 noemt een onderwerp en gaat niet samen met 来说.", "给 gaat niet samen met 来说.", "从 betekent \"vanaf\" en gaat hier niet samen met 来说."] },
    { type: "open", q: "Vertaal: \"Voor mij is Chinees leren heel interessant.\"", model: ["对我来说，学汉语很有意思。", "学汉语对我来说很有意思。"],
      tip: "Check: 对 + 我 + 来说, aan het begin of na het onderwerp." },
    { type: "open", q: "Vertaal: \"Ik heb een artikel over het milieu gelezen.\"", model: ["我看了一篇关于环境的文章。", "我读了一篇关于环境问题的文章。"],
      tip: "Check: 关于 + onderwerp + 的 + 文章. Geen 对于." }
  ],
  review: [
    { type: "mc", q: "\"Voor oude mensen is deze telefoon te ingewikkeld.\"",
      options: ["对老人来说，这个手机太复杂了。", "对老人说，这个手机太复杂了。", "关于老人来说，这个手机太复杂了。", "老人来说对，这个手机太复杂了。"], answer: 0,
      why: ["Goed.", "Zonder 来 betekent het \"tegen oude mensen zeggen\".", "关于 gaat niet samen met 来说.", "对 staat vóór de persoon."] },
    { type: "mc", q: "\"Hij heeft een film over Chinese thee gezien.\"",
      options: ["他看了一部关于中国茶的电影。", "他看了一部对于中国茶的电影。", "他关于中国茶看了一部电影。", "他看了一部中国茶关于的电影。"], answer: 0,
      why: ["Goed: 关于 + onderwerp + 的 + 电影.", "Het onderwerp van een film: 关于, niet 对于.", "关于 kan niet na het onderwerp staan.", "关于 staat vóór het onderwerp."] },
    { type: "mc", q: "她___孩子非常有耐心。(Zij is heel geduldig met kinderen.)",
      options: ["对", "关于", "来说", "给"], answer: 0,
      why: ["Goed: een houding tegenover personen: 对.", "关于 noemt een onderwerp en staat niet na het onderwerp.", "来说 hoort samen met 对 te staan: 对……来说.", "给 past niet bij een houding als 有耐心."] }
  ]
})
