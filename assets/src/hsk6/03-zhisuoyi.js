({
  id: "03", slug: "zhisuoyi", title: "之所以 ... 是因为", sub: "Eerst het gevolg, dan de reden",
  canDo: "Je kunt nu een bekend feit uitleggen door eerst het gevolg en dan de reden te noemen, met 之所以 ... 是因为.",
  guess: {
    q: "他之所以迟到，是因为路上堵车。Wat zegt de zin, denk je?",
    options: ["Hij was te laat. De reden: er was file.", "Hij was te laat, en daardoor kwam er file.", "Er was file, maar hij was niet te laat.", "Hij was te laat, ook al was er geen file."], answer: 0,
    why: ["Goed: na 之所以 staat het gevolg, na 是因为 de reden.", "Je draait oorzaak en gevolg om: de file is de reden.", "之所以 is geen \"maar\": er is geen tegenstelling.", "是因为 betekent \"is omdat\", niet \"ook al\"."]
  },
  problem: "Normaal zeg je eerst de reden: 因为 ...，所以 .... Maar soms is het gevolg al bekend. Je wilt vooral de reden uitleggen. Dan zet je het gevolg voorop met 之所以 (zhīsuǒyǐ). De reden komt daarna met 是因为. Dit is vrij formeel.",
  pattern: [
    { l: "wie", v: "他", c: 1 }, { l: "gevolg", v: "之所以", c: 2, key: true }, { l: "wat", v: "成功", c: 3 },
    { l: "reden", v: "是因为", c: 4, key: true }, { l: "waarom", v: "他很努力", c: 5 }
  ],
  patternCap: "Wie + 之所以 + gevolg，是因为 / 是由于 + reden · doel: 是为了 · Vergelijk: 因为 + reden，所以 + gevolg",
  rules: [
    "Het gevolg staat voorop, na 之所以. De reden komt na 是因为.",
    "之所以 staat meestal direct na het onderwerp: 我之所以 ....",
    "Na 之所以 komt nooit nog een 所以. Het tweede deel begint met 是因为 (of formeler: 是由于).",
    "Gaat het om een doel in plaats van een oorzaak? Dan gebruik je 是为了: 我之所以早起，是为了跑步。",
    "Het is schrijftaal of formele spreektaal: toespraken, uitleg, artikelen."
  ],
  pitfall: "Draai het niet om. 之所以 staat bij het gevolg, niet bij de reden. 我之所以累，是因为加班 is goed. 我之所以加班，是因为累 zegt iets heel anders.",
  examples: [
    { cn: "我之所以学汉语，是因为我对中国文化很感兴趣。", py: "Wǒ zhīsuǒyǐ xué Hànyǔ, shì yīnwèi wǒ duì Zhōngguó wénhuà hěn gǎn xìngqù.", nl: "De reden dat ik Chinees leer, is dat ik de Chinese cultuur interessant vind." },
    { cn: "这家公司之所以成功，是因为它重视员工。", py: "Zhè jiā gōngsī zhīsuǒyǐ chénggōng, shì yīnwèi tā zhòngshì yuángōng.", nl: "Dit bedrijf is succesvol omdat het zijn personeel belangrijk vindt." },
    { cn: "他之所以没来，是因为身体不舒服。", py: "Tā zhīsuǒyǐ méi lái, shì yīnwèi shēntǐ bù shūfu.", nl: "Hij is niet gekomen omdat hij zich niet goed voelde." }
  ],
  nuance: [
    { h: "之所以 ... 是因为 tegenover 因为 ... 所以",
      p: "因为 ... 所以 is neutraal: eerst de reden, dan het gevolg. Je gebruikt het overal. Met 之所以 is het gevolg al bekend, en ligt de nadruk op de reden. Het voelt als een antwoord op \"hoe komt dat?\". Meng ze niet: 因为 ... 之所以 is fout.",
      ex: [
        { cn: "因为下雨，所以比赛取消了。", py: "Yīnwèi xià yǔ, suǒyǐ bǐsài qǔxiāo le.", nl: "Het regende, dus de wedstrijd werd afgelast." },
        { cn: "比赛之所以取消，是因为下雨。", py: "Bǐsài zhīsuǒyǐ qǔxiāo, shì yīnwèi xià yǔ.", nl: "Dat de wedstrijd werd afgelast, kwam door de regen." }
      ] },
    { h: "是因为, 是由于 of 是为了?",
      p: "是因为 en 是由于 geven een oorzaak. 是由于 klinkt formeler en past goed in artikelen. 是为了 geeft een doel: iets wat je wilt bereiken. Vraag jezelf af: is het tweede deel een oorzaak (omdat) of een doel (om te)?",
      ex: [
        { cn: "我之所以每天早起，是为了锻炼身体。", py: "Wǒ zhīsuǒyǐ měitiān zǎoqǐ, shì wèile duànliàn shēntǐ.", nl: "Ik sta elke dag vroeg op om te sporten." }
      ] },
    { h: "Register: in gewone spreektaal",
      p: "之所以 hoort bij schrijftaal, toespraken en zakelijke uitleg. In een gewoon gesprek klinkt het stijf. Daar zet je gewoon 是因为 of 因为 achter het gevolg.",
      ex: [
        { cn: "我没去，是因为要加班。", py: "Wǒ méi qù, shì yīnwèi yào jiābān.", nl: "Ik ging niet, omdat ik moest overwerken." }
      ] }
  ],
  mistakes: [
    { wrong: "他之所以没来，所以身体不舒服。", right: "他之所以没来，是因为身体不舒服。", why: "Na 之所以 komt geen 所以. Het tweede deel begint met 是因为." },
    { wrong: "因为天气不好，之所以比赛取消了。", right: "因为天气不好，所以比赛取消了。", why: "Begin je met de reden (因为), dan volgt 所以. 之所以 staat alleen bij een gevolg dat vooraan staat." },
    { wrong: "我之所以累，因为加班。", right: "我之所以累，是因为加班。", why: "Het vaste paar is 之所以 ... 是因为. Laat 是 niet weg." },
    { wrong: "我之所以去中国，是因为学汉语。", right: "我之所以去中国，是为了学汉语。", why: "Chinees leren is hier een doel, geen oorzaak. Voor een doel gebruik je 是为了." }
  ],
  vocab: [
    ["之所以……是因为", "zhīsuǒyǐ……shì yīnwèi", "de reden dat ... is dat"], ["由于", "yóuyú", "doordat, vanwege"], ["重视", "zhòngshì", "belangrijk vinden"],
    ["员工", "yuángōng", "werknemer, personeel"], ["吸引", "xīyǐn", "aantrekken"], ["独特", "dútè", "uniek, bijzonder"],
    ["建筑", "jiànzhù", "gebouw, architectuur"], ["保存", "bǎocún", "bewaren, behouden"], ["骄傲", "jiāo'ào", "trots"], ["居民", "jūmín", "inwoner, bewoner"]
  ],
  dialogue: [
    ["A", "这家小饭馆每天都排长队，为什么？", "Zhè jiā xiǎo fànguǎn měitiān dōu pái cháng duì, wèi shénme?", "Bij dit kleine restaurant staat elke dag een lange rij. Hoe komt dat?"],
    ["B", "它之所以吸引这么多人，是因为老板做的菜很独特。", "Tā zhīsuǒyǐ xīyǐn zhème duō rén, shì yīnwèi lǎobǎn zuò de cài hěn dútè.", "Het trekt zoveel mensen omdat de eigenaar heel bijzondere gerechten maakt."],
    ["A", "价格呢？", "Jiàgé ne?", "En de prijs?"],
    ["B", "也不贵。很多人之所以每周都来，是因为这里又好吃又便宜。", "Yě bú guì. Hěn duō rén zhīsuǒyǐ měi zhōu dōu lái, shì yīnwèi zhèli yòu hǎochī yòu piányi.", "Ook niet duur. Veel mensen komen elke week, omdat het hier lekker en goedkoop is."],
    ["A", "那我们今天也去试试吧。", "Nà wǒmen jīntiān yě qù shìshi ba.", "Laten we het dan vandaag ook proberen."]
  ],
  reading: {
    title: "丽江古城",
    lines: [
      { cn: "丽江是中国西南的一座古城。", py: "Lìjiāng shì Zhōngguó xīnán de yí zuò gǔchéng.", nl: "Lijiang is een oude stad in het zuidwesten van China." },
      { cn: "每年都有上百万游客来这里旅游。", py: "Měi nián dōu yǒu shàng bǎi wàn yóukè lái zhèli lǚyóu.", nl: "Elk jaar komen er meer dan een miljoen toeristen." },
      { cn: "丽江之所以吸引这么多人，首先是因为它的建筑很独特。", py: "Lìjiāng zhīsuǒyǐ xīyǐn zhème duō rén, shǒuxiān shì yīnwèi tā de jiànzhù hěn dútè.", nl: "Dat Lijiang zoveel mensen trekt, komt in de eerste plaats door de bijzondere architectuur." },
      { cn: "这里的老房子保存得很好，街道也很有特色。", py: "Zhèli de lǎo fángzi bǎocún de hěn hǎo, jiēdào yě hěn yǒu tèsè.", nl: "De oude huizen zijn goed bewaard gebleven, en de straten hebben een eigen karakter." },
      { cn: "其次，当地人之所以重视传统，是因为他们为自己的文化感到骄傲。", py: "Qícì, dāngdì rén zhīsuǒyǐ zhòngshì chuántǒng, shì yīnwèi tāmen wèi zìjǐ de wénhuà gǎndào jiāo'ào.", nl: "Daarnaast hechten de inwoners aan tradities, omdat ze trots zijn op hun eigen cultuur." },
      { cn: "不过，游客太多也带来了问题。", py: "Búguò, yóukè tài duō yě dàiláile wèntí.", nl: "Maar de vele toeristen brengen ook problemen mee." },
      { cn: "有些老居民之所以搬走，是由于这里的生活越来越吵。", py: "Yǒuxiē lǎo jūmín zhīsuǒyǐ bānzǒu, shì yóuyú zhèli de shēnghuó yuè lái yuè chǎo.", nl: "Sommige oude bewoners zijn verhuisd, doordat het leven hier steeds lawaaiiger wordt." },
      { cn: "如何保护古城，成了一个重要的问题。", py: "Rúhé bǎohù gǔchéng, chéngle yí ge zhòngyào de wèntí.", nl: "Hoe je de oude stad beschermt, is een belangrijke vraag geworden." }
    ],
    questions: [
      { type: "mc", q: "Wat is volgens de tekst de eerste reden dat Lijiang zoveel toeristen trekt?",
        options: ["De bijzondere architectuur.", "De lage prijzen.", "Het rustige leven.", "Het goede eten."], answer: 0,
        why: ["Goed: 首先是因为它的建筑很独特。", "Over prijzen staat niets in de tekst.", "Het leven wordt juist steeds lawaaiiger.", "Over eten staat niets in de tekst."] },
      { type: "mc", q: "Waarom zijn sommige oude bewoners verhuisd?",
        options: ["Het leven werd steeds lawaaiiger.", "Ze waren niet trots op hun cultuur.", "De oude huizen waren slecht bewaard.", "Er kwamen te weinig toeristen."], answer: 0,
        why: ["Goed: 是由于这里的生活越来越吵。", "De inwoners zijn juist trots op hun cultuur.", "De huizen zijn juist goed bewaard: 保存得很好.", "Er komen juist te veel toeristen."] },
      { type: "mc", q: "有些老居民之所以搬走，是由于这里的生活越来越吵。Wat staat er na 是由于?",
        options: ["De oorzaak van het verhuizen.", "Het gevolg van het verhuizen.", "Het doel van het verhuizen.", "Een tegenstelling met het verhuizen."], answer: 0,
        why: ["Goed: 是由于 is een formele variant van 是因为 en geeft de oorzaak.", "Het gevolg (搬走) staat juist na 之所以.", "Een doel zou je met 是为了 geven.", "Er is geen tegenstelling; daarvoor zou 但是 nodig zijn."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ze heeft gewonnen omdat ze elke dag trainde.\"",
      options: ["她之所以赢了，是因为她每天都练习。", "她之所以每天都练习，是因为她赢了。", "她之所以赢了，所以她每天都练习。", "她之所以赢了，但是她每天都练习。"], answer: 0,
      why: ["Goed: gevolg na 之所以, reden na 是因为.", "Je draait het om: nu is winnen de reden van het trainen.", "Na 之所以 komt geen 所以, maar 是因为.", "之所以 maakt geen tegenstelling; 但是 past niet."] },
    { type: "mc", q: "我之所以选择这份工作，___这里离家很近。",
      options: ["是因为", "所以", "但是", "而且"], answer: 0,
      why: ["Goed: 之所以 ... 是因为.", "Na 之所以 komt geen 所以.", "Er is geen tegenstelling; 但是 past niet.", "而且 voegt iets toe, maar geeft geen reden."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hij is niet gekomen omdat hij ziek was.\"",
      tokens: [["他", "tā"], ["之所以", "zhīsuǒyǐ"], ["没来", "méi lái"], ["是因为", "shì yīnwèi"], ["病了", "bìng le"]] },
    { type: "mc", q: "Welke zin betekent hetzelfde als: 因为天气不好，所以比赛取消了。",
      options: ["比赛之所以取消，是因为天气不好。", "天气之所以不好，是因为比赛取消了。", "比赛之所以取消，所以天气不好。", "比赛取消之所以，是因为天气不好。"], answer: 0,
      why: ["Goed: het gevolg (取消) staat voorop, de reden (天气不好) achter 是因为.", "Je draait oorzaak en gevolg om.", "Na 之所以 komt 是因为, niet 所以.", "之所以 staat vóór het gevolg, niet erachter."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["因为他很努力，之所以成功了。", "他之所以成功，是因为他很努力。", "因为他很努力，所以成功了。", "他之所以成功，是由于他很努力。"], answer: 0,
      why: ["Goed, deze is fout: na 因为 + reden komt 所以, niet 之所以.", "Deze klopt: gevolg na 之所以, reden na 是因为.", "Deze klopt: het gewone paar 因为 ... 所以.", "Deze klopt: 是由于 is een formele variant van 是因为."] },
    { type: "mc", q: "\"Ik sta vroeg op om te gaan hardlopen.\" (Hardlopen is je doel.)",
      options: ["我之所以早起，是为了去跑步。", "我之所以早起，所以去跑步。", "我之所以去跑步，是为了早起。", "我之所以早起，为了是去跑步。"], answer: 0,
      why: ["Goed: voor een doel gebruik je 之所以 ... 是为了.", "Na 之所以 komt geen 所以.", "Je draait het om: nu is vroeg opstaan het doel van hardlopen.", "De volgorde is 是为了, niet 为了是."] },
    { type: "mc", q: "Je vertelt een vriend in een gewoon gesprek: \"Ik ben niet naar het feest gegaan, want ik moest overwerken.\" Wat klinkt het natuurlijkst?",
      options: ["我没去聚会，是因为要加班。", "我没去聚会，之所以要加班。", "我没去聚会，所以要加班。", "因为我没去聚会，所以要加班。"], answer: 0,
      why: ["Goed: in spreektaal zet je gewoon 是因为 achter het gevolg.", "之所以 staat bij het gevolg, niet bij de reden.", "所以 maakt van overwerken een gevolg van het feest.", "Je draait oorzaak en gevolg om: nu moet je overwerken omdat je niet ging."] },
    { type: "fill", q: "这家公司之所以发展得这么快，是___它重视员工。(Dit bedrijf groeit zo snel omdat het zijn personeel belangrijk vindt.)", answers: ["因为", "由于"],
      hint: "Welk woord geeft na 是 de oorzaak?", why: "之所以 ... 是因为 (of formeler 是由于) + oorzaak." },
    { type: "order", q: "Zet in de goede volgorde: \"Ik ben verhuisd om dichter bij mijn werk te wonen.\"",
      tokens: [["我", "wǒ"], ["之所以", "zhīsuǒyǐ"], ["搬家", "bānjiā"], ["是为了", "shì wèile"], ["离公司近一点儿", "lí gōngsī jìn yìdiǎnr"]] },
    { type: "open", q: "Leg uit waarom je Chinees leert, met 之所以 ... 是因为.",
      model: ["我之所以学汉语，是因为我想去中国工作。", "我之所以学汉语，是因为我喜欢中国电影。", "我之所以学中文，是由于工作需要。"],
      tip: "Check: staat het gevolg (学汉语) na 之所以, en de reden na 是因为? Geen 所以 erbij." },
    { type: "open", q: "Vertaal: \"Hij is zo moe omdat hij elke dag tot laat overwerkt.\"",
      model: ["他之所以这么累，是因为他每天都加班到很晚。", "他之所以这么累，是由于每天加班到很晚。"],
      tip: "Check: 他 + 之所以 + 这么累, dan 是因为 + reden. Geen 所以 in het tweede deel." }
  ],
  review: [
    { type: "mc", q: "\"Deze stad trekt veel toeristen omdat ze een lange geschiedenis heeft.\"",
      options: ["这座城市之所以吸引很多游客，是因为它的历史很长。", "这座城市之所以历史很长，是因为它吸引很多游客。", "这座城市之所以吸引很多游客，所以它的历史很长。", "这座城市之所以吸引很多游客，但是它的历史很长。"], answer: 0,
      why: ["Goed.", "Je draait het om: nu zijn de toeristen de reden van de geschiedenis.", "Na 之所以 komt 是因为, niet 所以.", "Er is geen tegenstelling; 但是 past niet."] },
    { type: "mc", q: "他之所以搬家，___新公司在城市的另一边。",
      options: ["是因为", "所以", "虽然", "而且"], answer: 0,
      why: ["Goed: 之所以 ... 是因为.", "Na 之所以 komt geen 所以.", "虽然 maakt een tegenstelling, geen reden.", "而且 voegt iets toe, maar geeft geen reden."] },
    { type: "mc", q: "\"De vlucht had vertraging doordat het hard sneeuwde.\"",
      options: ["航班之所以晚点，是因为下了大雪。", "航班之所以晚点，所以下了大雪。", "之所以下了大雪，是因为航班晚点。", "因为下了大雪，之所以航班晚点。"], answer: 0,
      why: ["Goed: gevolg (晚点) na 之所以, oorzaak (大雪) na 是因为.", "Na 之所以 komt 是因为, niet 所以.", "Je draait oorzaak en gevolg om.", "Na 因为 + reden komt 所以, niet 之所以."] }
  ]
})
