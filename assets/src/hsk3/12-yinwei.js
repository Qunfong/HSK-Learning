({
  id: "12", slug: "yinwei", title: "因为 ... 所以 en 为了", sub: "Oorzaak of doel: omdat ... of om te ...",
  canDo: "Je kunt nu een reden geven met 因为 ... 所以, en een doel noemen met 为了.",
  guess: {
    q: "\"Om Chinees te leren, is hij naar Beijing gegaan.\" Welke zin klopt, denk je?",
    options: ["为了学中文，他去了北京。", "因为学中文，他去了北京。", "为了学中文，所以他去了北京。", "他去了北京，因为了学中文。"], answer: 0,
    why: ["Goed: 为了 noemt het doel: \"om ... te\".", "因为 geeft een oorzaak die al bestaat. Hier gaat het om een doel.", "为了 combineer je niet met 所以.", "因为了 bestaat niet. Kies 因为 of 为了."]
  },
  problem: "In het Nederlands verschillen \"omdat\" en \"om te\" duidelijk. Leerders halen in het Chinees toch vaak 因为 (yīnwèi) en 为了 (wèile) door elkaar, want in beide zit 为. 因为 ... 所以 geeft een oorzaak en het gevolg. 为了 noemt een doel: iets wat je wilt bereiken.",
  pattern: [
    { l: "因为", v: "因为", c: 1, key: true }, { l: "oorzaak", v: "下雨了", c: 2 },
    { l: "所以", v: "所以", c: 3, key: true }, { l: "gevolg", v: "我们没去公园", c: 4 }
  ],
  patternCap: "因为 + oorzaak，所以 + gevolg  |  为了 + doel，+ handeling",
  rules: [
    "因为 staat vóór of na het onderwerp: 因为他病了 en 他因为病了 kunnen allebei.",
    "所以 staat aan het begin van het tweede deel, vóór het onderwerp.",
    "Je mag 因为 of 所以 weglaten. In spreektaal hoor je vaak alleen 所以.",
    "为了 + doel staat meestal vooraan in de zin. Daarna volgt wat je doet."
  ],
  pitfall: "因为 = oorzaak (iets wat al zo is). 为了 = doel (iets wat je wilt bereiken). Zeg niet 因为 als je \"om te\" bedoelt.",
  examples: [
    { cn: "因为下雨了，所以我们没去公园。", py: "Yīnwèi xià yǔ le, suǒyǐ wǒmen méi qù gōngyuán.", nl: "Omdat het regende, zijn we niet naar het park gegaan." },
    { cn: "他今天没来上课，因为他感冒了。", py: "Tā jīntiān méi lái shàngkè, yīnwèi tā gǎnmào le.", nl: "Hij kwam vandaag niet naar de les, omdat hij verkouden was." },
    { cn: "为了身体健康，我每天早上跑步。", py: "Wèile shēntǐ jiànkāng, wǒ měi tiān zǎoshang pǎobù.", nl: "Om gezond te blijven, ren ik elke ochtend." },
    { cn: "我明天要考试，所以今天不能出去玩。", py: "Wǒ míngtiān yào kǎoshì, suǒyǐ jīntiān bù néng chūqu wán.", nl: "Ik heb morgen een examen, dus ik kan vandaag niet uit." }
  ],
  nuance: [
    { h: "因为 of 为了: oorzaak of doel?",
      p: "Vraag jezelf: is het al zo, of wil je het bereiken? 因为 kijkt terug naar een oorzaak. 为了 kijkt vooruit naar een doel. Ziek zijn is een oorzaak. Beter worden is een doel.",
      ex: [
        { cn: "因为他病了，所以去了医院。", py: "Yīnwèi tā bìng le, suǒyǐ qùle yīyuàn.", nl: "Omdat hij ziek was, ging hij naar het ziekenhuis." },
        { cn: "为了早点儿好，他每天吃药。", py: "Wèile zǎo diǎnr hǎo, tā měi tiān chī yào.", nl: "Om sneller beter te worden, neemt hij elke dag medicijnen." }
      ] },
    { h: "所以 vaak alleen",
      p: "In gewone gesprekken zeg je vaak eerst de situatie, en dan 所以 + gevolg. Het eerste deel heeft dan geen 因为. Dat klinkt natuurlijk, als \"dus\" in het Nederlands. 因为 alleen, achter de hoofdzin, hoor je ook vaak.",
      ex: [
        { cn: "我太累了，所以想早点儿睡觉。", py: "Wǒ tài lèi le, suǒyǐ xiǎng zǎo diǎnr shuìjiào.", nl: "Ik ben te moe, dus ik wil vroeg gaan slapen." }
      ] },
    { h: "为了 en 所以 gaan niet samen",
      p: "为了 heeft geen 所以 nodig. Na het 为了-deel volgt direct de handeling. Je kunt wel 是为了 achteraan gebruiken: \"het is om ... te\". Dat legt het doel uit van iets wat je al noemde.",
      ex: [
        { cn: "我学中文是为了去中国工作。", py: "Wǒ xué Zhōngwén shì wèile qù Zhōngguó gōngzuò.", nl: "Ik leer Chinees om in China te gaan werken." }
      ] }
  ],
  mistakes: [
    { wrong: "因为学好中文，我每天听录音。", right: "为了学好中文，我每天听录音。", why: "\"Chinees goed leren\" is een doel, geen oorzaak. Gebruik 为了." },
    { wrong: "为了学好中文，所以我每天听录音。", right: "为了学好中文，我每天听录音。", why: "为了 gaat niet samen met 所以." },
    { wrong: "因为下雨了，我们所以没去。", right: "因为下雨了，所以我们没去。", why: "所以 staat vóór het onderwerp, aan het begin van het tweede deel." },
    { wrong: "为了他病了，他没来上班。", right: "因为他病了，他没来上班。", why: "Ziek zijn is een oorzaak, geen doel. Gebruik 因为." }
  ],
  vocab: [
    ["因为 ... 所以", "yīnwèi ... suǒyǐ", "omdat ... daarom"], ["为了", "wèile", "om ... te, voor"], ["健康", "jiànkāng", "gezond, gezondheid"],
    ["感冒", "gǎnmào", "verkouden zijn"], ["医院", "yīyuàn", "ziekenhuis"], ["药", "yào", "medicijn"],
    ["录音", "lùyīn", "geluidsopname"], ["考试", "kǎoshì", "examen"], ["锻炼", "duànliàn", "sporten, trainen"], ["胖", "pàng", "dik"]
  ],
  dialogue: [
    ["A", "你最近每天都去健身房，为什么？", "Nǐ zuìjìn měi tiān dōu qù jiànshēnfáng, wèi shénme?", "Je gaat de laatste tijd elke dag naar de sportschool. Waarom?"],
    ["B", "因为我胖了五公斤。", "Yīnwèi wǒ pàngle wǔ gōngjīn.", "Omdat ik vijf kilo ben aangekomen."],
    ["A", "哈哈，所以你不吃蛋糕了？", "Hāha, suǒyǐ nǐ bù chī dàngāo le?", "Haha, dus je eet geen taart meer?"],
    ["B", "对。为了健康，我也不喝可乐了。", "Duì. Wèile jiànkāng, wǒ yě bù hē kělè le.", "Klopt. Voor mijn gezondheid drink ik ook geen cola meer."],
    ["A", "真厉害！我也应该多锻炼。", "Zhēn lìhai! Wǒ yě yīnggāi duō duànliàn.", "Knap hoor! Ik zou ook meer moeten sporten."]
  ],
  reading: {
    title: "安娜为什么学中文",
    lines: [
      { cn: "安娜是荷兰人，今年二十五岁。", py: "Ānnà shì Hélánrén, jīnnián èrshíwǔ suì.", nl: "Anna is Nederlands en dit jaar vijfentwintig." },
      { cn: "因为她的男朋友是中国人，所以她开始学中文。", py: "Yīnwèi tā de nánpéngyou shì Zhōngguórén, suǒyǐ tā kāishǐ xué Zhōngwén.", nl: "Omdat haar vriend Chinees is, begon ze Chinees te leren." },
      { cn: "为了跟他的爸爸妈妈说话，她每天学习一个小时。", py: "Wèile gēn tā de bàba māma shuōhuà, tā měi tiān xuéxí yí ge xiǎoshí.", nl: "Om met zijn ouders te kunnen praten, studeert ze elke dag een uur." },
      { cn: "她工作很忙，所以常常在地铁上听录音。", py: "Tā gōngzuò hěn máng, suǒyǐ chángcháng zài dìtiě shang tīng lùyīn.", nl: "Ze heeft het druk met haar werk, dus luistert ze vaak opnames in de metro." },
      { cn: "去年夏天，她和男朋友一起去了上海。", py: "Qùnián xiàtiān, tā hé nánpéngyou yìqǐ qùle Shànghǎi.", nl: "Vorige zomer ging ze met haar vriend naar Shanghai." },
      { cn: "因为她说得不错，所以他的爸爸妈妈非常高兴。", py: "Yīnwèi tā shuō de búcuò, suǒyǐ tā de bàba māma fēicháng gāoxìng.", nl: "Omdat ze het aardig sprak, waren zijn ouders heel blij." },
      { cn: "现在，为了明年的考试，她学习得更努力了。", py: "Xiànzài, wèile míngnián de kǎoshì, tā xuéxí de gèng nǔlì le.", nl: "Nu studeert ze nog harder, voor het examen van volgend jaar." }
    ],
    questions: [
      { type: "mc", q: "Waarom begon Anna Chinees te leren?",
        options: ["Haar vriend is Chinees.", "Ze werkt in China.", "Ze woont in Shanghai.", "Ze had een examen."], answer: 0,
        why: ["Goed: 因为她的男朋友是中国人。", "De tekst zegt niets over werken in China.", "Ze was op vakantie in Shanghai; ze woont daar niet.", "Het examen is pas volgend jaar."] },
      { type: "mc", q: "Waarom luistert ze opnames in de metro?",
        options: ["Ze heeft het druk met haar werk.", "Ze vindt de metro leuk.", "Haar vriend zegt het.", "Ze heeft thuis geen tijd voor haar ouders."], answer: 0,
        why: ["Goed: 她工作很忙，所以 ...", "Dat staat niet in de tekst.", "Dat staat niet in de tekst.", "Dat staat niet in de tekst."] },
      { type: "mc", q: "为了跟他的爸爸妈妈说话 ... Wat drukt 为了 hier uit?",
        options: ["Een doel: om te kunnen praten.", "Een oorzaak: omdat ze praatte.", "Een tegenstelling: hoewel ze praatte.", "Een tijd: toen ze praatte."], answer: 0,
        why: ["Goed: 为了 = om ... te, een doel.", "Een oorzaak geef je met 因为.", "Een tegenstelling geef je met 虽然.", "Een tijd geef je met 的时候."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Om geld te sparen, kookt ze elke dag zelf.\"",
      options: ["为了省钱，她每天自己做饭。", "因为省钱，她每天自己做饭。", "为了省钱，所以她每天自己做饭。", "她为了每天自己做饭省钱。"], answer: 0,
      why: ["Goed: 为了 + doel, daarna de handeling.", "Geld sparen is hier een doel, geen oorzaak.", "为了 gaat niet samen met 所以.", "Het doel (省钱) hoort direct na 为了."] },
    { type: "mc", q: "\"Omdat hij te laat opstond, miste hij de bus.\"",
      options: ["因为他起晚了，所以没赶上公共汽车。", "为了他起晚了，所以没赶上公共汽车。", "因为他起晚了，但是没赶上公共汽车。", "他起晚了，因为所以没赶上公共汽车。"], answer: 0,
      why: ["Goed: oorzaak met 因为, gevolg met 所以.", "Laat opstaan is geen doel. Gebruik 因为.", "但是 maakt er een tegenstelling van, dat is onlogisch.", "因为 en 所以 staan niet direct naast elkaar."] },
    { type: "order", q: "Zet in de goede volgorde: \"Omdat ik het druk had, heb ik je niet gebeld.\"",
      tokens: [["因为", "yīnwèi"], ["我很忙", "wǒ hěn máng"], ["所以", "suǒyǐ"], ["没给你", "méi gěi nǐ"], ["打电话", "dǎ diànhuà"]] },
    { type: "fill", q: "___学好中文，他每天看中国电视。(Om goed Chinees te leren, kijkt hij elke dag Chinese tv.)", answers: ["为了"],
      hint: "Gaat het om een oorzaak of een doel?", why: "Goed Chinees leren is een doel: 为了." },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["因为见朋友，我去了火车站。", "为了见朋友，我去了火车站。", "我去火车站是为了见朋友。", "因为朋友要来，所以我去了火车站。"], answer: 0,
      why: ["Goed: deze is fout. Een vriend zien is een doel. Gebruik 为了.", "Deze klopt: 为了 + doel.", "Deze klopt: 是为了 legt het doel achteraf uit.", "Deze klopt: dat de vriend komt is een oorzaak."] },
    { type: "mc", q: "外边太冷了，___我不想出去。",
      options: ["所以", "为了", "因为", "虽然"], answer: 0,
      why: ["Goed: eerst de situatie, dan 所以 + gevolg.", "为了 noemt een doel, geen gevolg.", "因为 hoort bij de oorzaak, niet bij het gevolg.", "虽然 is \"hoewel\"; dat past niet in het tweede deel."] },
    { type: "order", q: "Zet in de goede volgorde: \"Om gezond te blijven, sport ik elke dag.\"",
      tokens: [["为了", "wèile"], ["身体健康", "shēntǐ jiànkāng"], ["我每天", "wǒ měi tiān"], ["锻炼", "duànliàn"]] },
    { type: "mc", q: "Waar staat 所以?",
      options: ["因为太贵了，所以我没买。", "因为太贵了，我所以没买。", "因为太贵了，我没所以买。", "所以因为太贵了，我没买。"], answer: 0,
      why: ["Goed: 所以 aan het begin van het tweede deel.", "所以 staat vóór het onderwerp, niet erna.", "所以 staat niet tussen 没 en het werkwoord.", "所以 hoort bij het gevolg, niet vóór 因为."] },
    { type: "mc", q: "我学开车是___周末带孩子去玩儿。(Ik leer autorijden om in het weekend met de kinderen uit te gaan.)",
      options: ["为了", "因为", "所以", "但是"], answer: 0,
      why: ["Goed: 是为了 + doel.", "因为 geeft een oorzaak; het uitje is een doel.", "所以 past niet na 是.", "但是 geeft een tegenstelling."] },
    { type: "open", q: "Vertaal: \"Omdat het morgen regent, gaan we niet naar het park.\"", model: ["因为明天下雨，所以我们不去公园了。", "明天下雨，所以我们不去公园。", "因为明天会下雨，我们不去公园了。"],
      tip: "Check: 因为 bij de oorzaak, 所以 vóór 我们, en geen 为了." },
    { type: "open", q: "Vertaal: \"Om op tijd te zijn, nam ik een taxi.\"", model: ["为了不迟到，我打车去了。", "为了准时到，我坐了出租车。"],
      tip: "Check: 为了 + doel vooraan, geen 所以 erna." }
  ],
  review: [
    { type: "mc", q: "\"Omdat ze honger had, at ze twee kommen rijst.\"",
      options: ["因为她饿了，所以吃了两碗米饭。", "为了她饿了，所以吃了两碗米饭。", "因为她饿了，但是吃了两碗米饭。", "她饿了，为了吃了两碗米饭。"], answer: 0,
      why: ["Goed.", "Honger is een oorzaak, geen doel.", "但是 maakt er een tegenstelling van.", "为了 noemt een doel, geen gevolg."] },
    { type: "mc", q: "___找到好工作，他每天学英语。",
      options: ["为了", "因为", "所以", "虽然"], answer: 0,
      why: ["Goed: een goede baan vinden is een doel.", "因为 is voor een oorzaak die er al is.", "所以 staat bij het gevolg, niet vooraan.", "虽然 is \"hoewel\"."] },
    { type: "mc", q: "Welke combinatie is FOUT?",
      options: ["为了 ... 所以 ...", "因为 ... 所以 ...", "虽然 ... 但是 ...", "... 所以 ... (zonder 因为)"], answer: 0,
      why: ["Goed: 为了 gaat niet samen met 所以.", "Dit is het basispatroon voor oorzaak en gevolg.", "Dit is het patroon voor \"hoewel ... toch\".", "所以 alleen is heel gewoon."] }
  ]
})
