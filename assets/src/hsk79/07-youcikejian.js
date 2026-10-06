({
  id: "07", slug: "youcikejian", title: "由此可见 / 可见", sub: "Hieruit blijkt dat ...",
  canDo: "Je kunt nu in rapporten en essays uit feiten of cijfers een conclusie trekken met 由此可见 of 可见, en je weet dat je in gesprek 看来 zegt.",
  guess: {
    q: "调查显示，九成网民使用手机支付。由此可见，手机支付已经非常普及。Wat doet 由此可见, denk je?",
    options: ["Het trekt een conclusie uit de cijfers.", "Het geeft de oorzaak van de cijfers.", "Het vat een lijst van meningen samen.", "Het spreekt de cijfers tegen."], answer: 0,
    why: ["Goed: eerst de cijfers, dan 由此可见 + wat eruit blijkt.", "De oorzaak zou je met 因为 of 由于 geven.", "Een samenvatting van meningen is 总之 (kortom).", "Een tegenspraak zou 但是 of 然而 zijn."]
  },
  problem: "In een rapport geef je eerst feiten of cijfers. Daarna trek je een conclusie: \"hieruit blijkt dat ...\". In schrijftaal zeg je 由此可见 (yóucǐ kějiàn). Korter is 可见. In gesprek zeg je 看来 of 这说明.",
  pattern: [
    { l: "feiten", v: "调查显示，七成居民每年读书不到五本", c: 3 }, { l: "hieruit blijkt", v: "由此可见", c: 2, key: true },
    { l: "conclusie", v: "提高阅读量仍是一项长期任务", c: 5 }
  ],
  patternCap: "feiten / cijfers，由此可见(，) + conclusie · korter: ...，可见 + conclusie · spreektaal: 看来 / 这说明",
  rules: [
    "Eerst komen de feiten, dan pas 由此可见 met de conclusie.",
    "由此可见 staat aan het begin van de conclusie, vaak gevolgd door een komma.",
    "De conclusie is een oordeel over hoe iets is: 很重要, 已经普及, 非常有效.",
    "可见 is korter en kan ook in een gewone zin: 他都答错了，可见他没准备。",
    "In gesprek zeg je 看来 of 这说明. 由此可见 klinkt als een rapport."
  ],
  pitfall: "由此可见 is geen \"daarom\". Het geeft geen gevolg of actie, maar wat je uit bewijs afleidt. 天气太冷，由此可见我们没出门 is fout: dat is 因此.",
  examples: [
    { cn: "近十年来，城市人口增长了一倍，由此可见城市化速度之快。", py: "Jìn shí nián lái, chéngshì rénkǒu zēngzhǎngle yí bèi, yóucǐ kějiàn chéngshìhuà sùdù zhī kuài.", nl: "In de afgelopen tien jaar is de stadsbevolking verdubbeld. Hieruit blijkt hoe snel de verstedelijking gaat." },
    { cn: "调查显示，七成以上的受访者每天使用手机超过五小时。由此可见，手机已成为生活中不可缺少的一部分。", py: "Diàochá xiǎnshì, qī chéng yǐshàng de shòufǎngzhě měi tiān shǐyòng shǒujī chāoguò wǔ xiǎoshí. Yóucǐ kějiàn, shǒujī yǐ chéngwéi shēnghuó zhōng bù kě quēshǎo de yí bùfen.", nl: "Uit onderzoek blijkt dat meer dan zeventig procent van de ondervraagden dagelijks meer dan vijf uur een telefoon gebruikt. De telefoon is dus een onmisbaar deel van het leven geworden." },
    { cn: "这么简单的问题他都答错了，可见他根本没有认真准备。", py: "Zhème jiǎndān de wèntí tā dōu dácuò le, kějiàn tā gēnběn méiyǒu rènzhēn zhǔnbèi.", nl: "Hij had zelfs zo'n eenvoudige vraag fout. Hij heeft zich dus helemaal niet goed voorbereid." },
    { cn: "该地区的交通事故比去年减少了三成，可见新措施已初见成效。", py: "Gāi dìqū de jiāotōng shìgù bǐ qùnián jiǎnshǎole sān chéng, kějiàn xīn cuòshī yǐ chū jiàn chéngxiào.", nl: "In dit gebied zijn er dertig procent minder verkeersongevallen dan vorig jaar. De nieuwe maatregelen hebben dus al eerste resultaat." }
  ],
  nuance: [
    { h: "由此可见 of 因此?",
      p: "因此 (daarom) gaat van oorzaak naar gevolg: iets gebeurt, en daardoor gebeurt iets anders. 由此可见 gaat van bewijs naar conclusie: je ziet iets, en daaruit leid je af hoe het zit. Vraag jezelf: veroorzaakt het eerste deel het tweede? Dan 因此. Bewijst het eerste deel het tweede? Dan 由此可见.",
      ex: [
        { cn: "他每天练习三个小时，因此进步很快。", py: "Tā měi tiān liànxí sān ge xiǎoshí, yīncǐ jìnbù hěn kuài.", nl: "Hij oefent elke dag drie uur, daarom gaat hij snel vooruit." },
        { cn: "他三个月就通过了考试，由此可见他非常努力。", py: "Tā sān ge yuè jiù tōngguòle kǎoshì, yóucǐ kějiàn tā fēicháng nǔlì.", nl: "Hij slaagde al na drie maanden. Hieruit blijkt dat hij heel hard werkt." }
      ] },
    { h: "由此可见 of 总之?",
      p: "总之 betekent \"kortom\". Je vat er een paar punten of meningen mee samen, of je sluit een discussie af. 由此可见 trekt een nieuwe conclusie uit feiten of cijfers. Na 总之 herhaal je de kern. Na 由此可见 zeg je iets wat nog niet gezegd was.",
      ex: [
        { cn: "有人说太贵，有人说太远，总之大家都不想去。", py: "Yǒu rén shuō tài guì, yǒu rén shuō tài yuǎn, zǒngzhī dàjiā dōu bù xiǎng qù.", nl: "Sommigen vinden het te duur, anderen te ver. Kortom, niemand wil gaan." }
      ] },
    { h: "Register: 由此可见, 可见 en 看来",
      p: "由此可见 hoort bij rapporten, nieuws en essays. 可见 is korter en kan in tekst en in een serieus gesprek. In een gewoon gesprek zeg je 看来 (blijkbaar) of 这说明 (dit laat zien). Let op: 看来 kan ook een vermoeden zijn, 由此可见 klinkt als een vaste conclusie.",
      ex: [
        { cn: "他到现在还没回消息，看来他很忙。", py: "Tā dào xiànzài hái méi huí xiāoxi, kànlái tā hěn máng.", nl: "Hij heeft nog steeds niet gereageerd. Hij heeft het blijkbaar druk." }
      ] }
  ],
  mistakes: [
    { wrong: "天气太冷了，由此可见我们没去公园。", right: "天气太冷了，因此我们没去公园。", why: "De kou is de oorzaak, het thuisblijven het gevolg. Dat is 因此, geen conclusie uit bewijs." },
    { wrong: "由此可见，今年销量增长了三成，市场需求很大。", right: "今年销量增长了三成，由此可见市场需求很大。", why: "Eerst het bewijs, dan 由此可见. Het staat vóór de conclusie, niet vóór de feiten." },
    { wrong: "数据增加了一倍，由此看见问题很严重。", right: "数据增加了一倍，由此可见问题很严重。", why: "看见 is \"met je ogen zien\". De vaste vorm is 由此可见." },
    { wrong: "你还没吃饭啊？由此可见你很忙。", right: "你还没吃饭啊？看来你很忙。", why: "In een gewoon gesprek klinkt 由此可见 als een rapport. Zeg 看来." }
  ],
  vocab: [
    ["由此可见", "yóucǐ kějiàn", "hieruit blijkt (formeel)"], ["可见", "kějiàn", "dus blijkt, je ziet dat"], ["调查", "diàochá", "onderzoek, enquête"],
    ["显示", "xiǎnshì", "tonen, laten zien"], ["居民", "jūmín", "inwoner"], ["占", "zhàn", "uitmaken, (een deel) innemen"],
    ["倍", "bèi", "keer (verdubbeling: 一倍)"], ["得当", "dédàng", "passend, goed geregeld"], ["培养", "péiyǎng", "ontwikkelen, kweken"], ["成效", "chéngxiào", "resultaat, effect"]
  ],
  dialogue: [
    ["分析师", "这是上个季度的退货数据。", "Zhè shì shàng ge jìdù de tuìhuò shùjù.", "Dit zijn de retourcijfers van het vorige kwartaal."],
    ["经理", "退货率怎么这么高？", "Tuìhuòlǜ zěnme zhème gāo?", "Waarom is het retourpercentage zo hoog?"],
    ["分析师", "百分之六十的退货是因为尺寸不合适。由此可见，问题不在质量，而在尺码说明。", "Bǎi fēn zhī liùshí de tuìhuò shì yīnwèi chǐcùn bù héshì. Yóucǐ kějiàn, wèntí bú zài zhìliàng, ér zài chǐmǎ shuōmíng.", "Zestig procent van de retouren komt doordat de maat niet past. Het probleem zit dus niet in de kwaliteit, maar in de maatinformatie."],
    ["经理", "有道理。上次我们换了产品图片，销量马上就涨了，可见顾客很看重详细信息。", "Yǒu dàolǐ. Shàng cì wǒmen huànle chǎnpǐn túpiàn, xiāoliàng mǎshàng jiù zhǎng le, kějiàn gùkè hěn kànzhòng xiángxì xìnxī.", "Klopt. Toen we vorige keer de productfoto's vervingen, steeg de verkoop meteen. Klanten vinden gedetailleerde informatie dus belangrijk."],
    ["分析师", "所以我建议在页面上加一个尺码表。", "Suǒyǐ wǒ jiànyì zài yèmiàn shang jiā yí ge chǐmǎbiǎo.", "Daarom stel ik voor een maattabel op de pagina te zetten."],
    ["经理", "好，下周就改。", "Hǎo, xià zhōu jiù gǎi.", "Goed, volgende week passen we het aan."]
  ],
  reading: {
    title: "居民阅读调查",
    lines: [
      { cn: "本市图书馆近日公布了一项关于居民阅读习惯的调查。", py: "Běn shì túshūguǎn jìnrì gōngbùle yí xiàng guānyú jūmín yuèdú xíguàn de diàochá.", nl: "De stadsbibliotheek heeft onlangs een onderzoek naar de leesgewoonten van inwoners gepubliceerd." },
      { cn: "调查显示，七成居民每年读书不到五本。", py: "Diàochá xiǎnshì, qī chéng jūmín měi nián dú shū bú dào wǔ běn.", nl: "Volgens het onderzoek leest zeventig procent van de inwoners minder dan vijf boeken per jaar." },
      { cn: "由此可见，提高居民阅读量仍是一项长期任务。", py: "Yóucǐ kějiàn, tígāo jūmín yuèdúliàng réng shì yí xiàng chángqī rènwu.", nl: "Hieruit blijkt dat meer laten lezen nog steeds een taak voor de lange termijn is." },
      { cn: "不过，电子书的读者比去年增加了百分之二十。", py: "Bùguò, diànzǐshū de dúzhě bǐ qùnián zēngjiāle bǎi fēn zhī èrshí.", nl: "Wel is het aantal lezers van e-books twintig procent hoger dan vorig jaar." },
      { cn: "其中三十岁以下的读者占一半以上，可见年轻人更喜欢在手机上阅读。", py: "Qízhōng sānshí suì yǐxià de dúzhě zhàn yíbàn yǐshàng, kějiàn niánqīngrén gèng xǐhuan zài shǒujī shang yuèdú.", nl: "Meer dan de helft van hen is jonger dan dertig. Jongeren lezen dus liever op hun telefoon." },
      { cn: "另外，参加周末读书会的家庭比去年多了一倍。", py: "Lìngwài, cānjiā zhōumò dúshūhuì de jiātíng bǐ qùnián duōle yí bèi.", nl: "Verder doen twee keer zoveel gezinnen als vorig jaar mee aan de leesclub in het weekend." },
      { cn: "由此可见，只要活动安排得当，居民的阅读兴趣是可以培养的。", py: "Yóucǐ kějiàn, zhǐyào huódòng ānpái dédàng, jūmín de yuèdú xìngqù shì kěyǐ péiyǎng de.", nl: "Hieruit blijkt dat je de leeslust van inwoners kunt ontwikkelen, als de activiteiten goed zijn opgezet." },
      { cn: "图书馆表示，明年将增加电子资源，并举办更多读书活动。", py: "Túshūguǎn biǎoshì, míngnián jiāng zēngjiā diànzǐ zīyuán, bìng jǔbàn gèng duō dúshū huódòng.", nl: "De bibliotheek laat weten dat ze volgend jaar meer digitale bronnen aanbiedt en meer leesactiviteiten organiseert." }
    ],
    questions: [
      { type: "mc", q: "Hoeveel inwoners lezen minder dan vijf boeken per jaar?",
        options: ["Zeventig procent.", "Twintig procent.", "Meer dan de helft van de jongeren.", "Dertig procent."], answer: 0,
        why: ["Goed: 七成居民每年读书不到五本.", "Twintig procent is de groei van het aantal e-booklezers.", "\"Meer dan de helft\" gaat over e-booklezers onder de dertig.", "Dertig staat in de tekst als leeftijd, niet als percentage."] },
      { type: "mc", q: "Wat concludeert de tekst uit de cijfers over e-books?",
        options: ["Jongeren lezen liever op hun telefoon.", "Jongeren lezen helemaal niet meer.", "Ouderen lezen vooral e-books.", "E-books worden minder populair."], answer: 0,
        why: ["Goed: 可见年轻人更喜欢在手机上阅读.", "De tekst zegt juist dat jongeren veel e-books lezen.", "Meer dan de helft van de e-booklezers is jonger dan dertig.", "Het aantal lezers steeg met twintig procent."] },
      { type: "mc", q: "参加读书会的家庭多了一倍。由此可见，……阅读兴趣是可以培养的。Wat doet 由此可见 hier?",
        options: ["Het trekt een conclusie uit de groei van de leesclub.", "Het noemt de oorzaak van de groei.", "Het vat alle cijfers in één woord samen.", "Het kondigt een nieuwe maatregel aan."], answer: 0,
        why: ["Goed: het feit (twee keer zoveel gezinnen) bewijst de conclusie.", "De oorzaak wordt niet genoemd. 由此可见 gaat van bewijs naar conclusie.", "Samenvatten is 总之. Hier gaat het om één feit en een conclusie.", "De maatregel komt pas in de laatste zin, met 将."] }
    ]
  },
  questions: [
    { type: "mc", q: "调查显示，九成学生每天上网。___，网络已成为学生生活的一部分。",
      options: ["由此可见", "因为", "尽管", "例如"], answer: 0,
      why: ["Goed: eerst de cijfers, dan 由此可见 + conclusie.", "因为 geeft een oorzaak. Het internet is geen oorzaak van de cijfers.", "尽管 betekent \"hoewel\": er is geen tegenstelling.", "例如 geeft een voorbeeld, geen conclusie."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["天气太冷，由此可见我们没去公园。", "天气太冷，因此我们没去公园。", "他三个月就学会了开车，可见他学得很快。", "公园里一个人也没有，可见天气太冷了。"], answer: 0,
      why: ["Goed, deze is fout: de kou is een oorzaak, het thuisblijven een gevolg. Dat is 因此.", "Deze klopt: oorzaak, dan gevolg met 因此.", "Deze klopt: het snelle leren bewijst dat hij snel leert.", "Deze klopt: het lege park is bewijs voor de kou."] },
    { type: "mc", q: "Je noemt drie meningen en sluit af met \"kortom, niemand is tevreden\". Welk woord kies je?",
      options: ["总之", "由此可见", "因此", "例如"], answer: 0,
      why: ["Goed: 总之 = kortom. Je vat de meningen samen.", "由此可见 trekt een nieuwe conclusie uit feiten. Hier vat je alleen samen.", "因此 geeft een gevolg, geen samenvatting.", "例如 geeft een voorbeeld."] },
    { type: "mc", q: "Je zegt tegen een vriend: \"Hij reageert niet, hij heeft het blijkbaar druk.\" Welke zin klopt en past in een gesprek?",
      options: ["他还没回消息，看来他很忙。", "他还没回消息，由此看见他很忙。", "他还没回消息，因此他很忙。", "他还没回消息，总之他很忙。"], answer: 0,
      why: ["Goed: 看来 = blijkbaar, gewoon in gesprek.", "看见 is \"met je ogen zien\". Het formele woord is 由此可见, en dat is te stijf voor een vriend.", "因此 maakt het niet reageren tot de oorzaak van de drukte.", "总之 vat samen. Er is niets om samen te vatten."] },
    { type: "mc", q: "\"Het aantal ongelukken daalde met dertig procent. Hieruit blijkt dat het nieuwe beleid werkt.\"",
      options: ["事故减少了三成，由此可见新政策是有效的。", "由此可见事故减少了三成，新政策是有效的。", "事故减少了三成，可见由此新政策是有效的。", "事故减少了三成，由此看见新政策是有效的。"], answer: 0,
      why: ["Goed: feit, dan 由此可见 + conclusie.", "由此可见 staat vóór de conclusie, niet vóór de feiten.", "由此可见 is een vaste vorm: 由此 komt vóór 可见.", "看见 is \"met je ogen zien\". De vaste vorm is 由此可见."] },
    { type: "mc", q: "这么简单的题他都答错了，可见他没有认真准备。Wat betekent 可见 hier?",
      options: ["Daaruit blijkt", "Je kunt het met je ogen zien", "Daarom", "Kortom"], answer: 0,
      why: ["Goed: 可见 = daaruit blijkt, een conclusie uit bewijs.", "可见 gaat hier om afleiden, niet om letterlijk zien.", "\"Daarom\" is 因此: dat geeft een gevolg.", "\"Kortom\" is 总之."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hieruit blijkt dat sport heel belangrijk is voor de gezondheid.\"",
      tokens: [["由此可见", "yóucǐ kějiàn"], ["运动", "yùndòng"], ["对健康", "duì jiànkāng"], ["十分重要", "shífēn zhòngyào"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Het aantal online shoppers stijgt elk jaar; deze manier van kopen wordt dus steeds gewoner.\"",
      tokens: [["网购人数", "wǎnggòu rénshù"], ["逐年增加", "zhúnián zēngjiā"], ["可见", "kějiàn"], ["这种消费方式", "zhè zhǒng xiāofèi fāngshì"], ["越来越普及", "yuèláiyuè pǔjí"]] },
    { type: "fill", q: "他连续三年获得冠军，___他的实力很强。(Hij werd drie jaar op rij kampioen; daaruit blijkt dat hij erg sterk is.)", answers: ["可见", "由此可见", "看来"],
      hint: "Welk woord van twee tekens betekent \"daaruit blijkt\"?", why: "可见 trekt een conclusie uit het feit. 由此可见 is formeler, 看来 is spreektaal." },
    { type: "open", q: "Vertaal (rapport): \"Uit het onderzoek blijkt dat tachtig procent van de jongeren dagelijks online nieuws leest. Het internet is dus hun belangrijkste nieuwsbron.\"",
      model: ["调查显示，八成年轻人每天在网上看新闻。由此可见，网络已成为他们最主要的新闻来源。", "调查显示，百分之八十的年轻人每天上网看新闻，可见网络是他们最重要的新闻来源。"],
      tip: "Check: eerst het feit (调查显示 ...), dan 由此可见 of 可见 + de conclusie. Niet 因此." },
    { type: "open", q: "Schrijf twee zinnen: een feit of cijfer over je eigen stad, en een conclusie met 由此可见.",
      model: ["我们城市的自行车道五年内增加了一倍。由此可见，政府很重视绿色出行。", "近年来来我市旅游的人越来越多，由此可见这里的吸引力在不断提高。"],
      tip: "Check: is het eerste deel bewijs, en is het tweede deel een conclusie (geen gevolg)? Staat 由此可见 vóór de conclusie?" }
  ],
  review: [
    { type: "mc", q: "该公司的员工流失率连续三年下降，___员工满意度在提高。",
      options: ["由此可见", "总之", "尽管", "例如"], answer: 0,
      why: ["Goed: de dalende cijfers bewijzen de conclusie.", "总之 vat meerdere punten samen. Hier trek je een conclusie uit één feit.", "尽管 betekent \"hoewel\": er is geen tegenstelling.", "例如 geeft een voorbeeld."] },
    { type: "mc", q: "\"Hij was ziek, daarom kwam hij niet naar de les.\"",
      options: ["他生病了，因此没来上课。", "他生病了，由此可见没来上课。", "他生病了，总之没来上课。", "他生病了，可见没来上课。"], answer: 0,
      why: ["Goed: oorzaak, dan gevolg met 因此.", "由此可见 leidt iets af uit bewijs. Hier is het een gevolg.", "总之 vat samen; er is niets om samen te vatten.", "可见 trekt een conclusie, het geeft geen gevolg."] },
    { type: "mc", q: "In een essay: \"Hieruit blijkt dat ...\". Welke vorm klopt?",
      options: ["由此可见", "由此看见", "总之可见", "由于可见"], answer: 0,
      why: ["Goed: 由此可见 is de vaste vorm.", "看见 is \"met je ogen zien\".", "总之 betekent \"kortom\" en hoort niet bij 可见.", "由于 betekent \"doordat\". De vaste vorm is 由此."] }
  ]
})
