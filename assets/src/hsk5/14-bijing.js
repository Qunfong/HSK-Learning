({
  id: "14", slug: "bijing", title: "毕竟", sub: "Per slot van rekening: het feit dat alles verklaart",
  canDo: "Je kunt nu een begrip of een excuus onderbouwen met het belangrijkste feit, met 毕竟, en je haalt het niet door elkaar met 到底 en 终于.",
  guess: {
    q: "别怪他了，他毕竟还是个孩子。Wat betekent dit, denk je?",
    options: ["Neem het hem niet kwalijk, hij is tenslotte nog een kind.", "Neem het hem niet kwalijk, hij is eindelijk geen kind meer.", "Is hij nou een kind of niet?", "Neem het hem kwalijk, ook al is hij een kind."], answer: 0,
    why: ["Goed: 毕竟 = per slot van rekening. Het noemt het feit dat alles verklaart.", "毕竟 betekent niet \"eindelijk\". Dat is 终于. En 还是个孩子 = nog een kind.", "De zin is geen vraag. Een vraag als \"nou ... of niet\" maak je met 到底.", "别怪他 = neem het hem níet kwalijk."]
  },
  problem: "In het Nederlands zeg je: \"Wees niet te streng, hij is tenslotte nieuw.\" Je noemt het feit dat alles verklaart of goedpraat. In het Chinees doe je dat met 毕竟 (bìjìng). Let op: \"tenslotte\" is niet \"ten slotte\" (als laatste). En 毕竟 is ook niet \"eindelijk\".",
  pattern: [
    { l: "situatie", v: "别怪他了，", c: 1 }, { l: "wie", v: "他", c: 3 }, { l: "毕竟", v: "毕竟", c: 2, key: true },
    { l: "doorslaggevend feit", v: "还是个孩子", c: 4 }
  ],
  patternCap: "(Situatie of oordeel) + ，(wie) + 毕竟 + (是) + doorslaggevend feit. Ook: 虽然 ... ，但(是)毕竟 ...",
  rules: [
    "毕竟 staat vóór of na het onderwerp: 他毕竟是新人 of 毕竟他是新人.",
    "Na 毕竟 komt vaak 是 + naamwoord, of een feit met 才, 还, 已经: 他毕竟才来两个星期。",
    "Het deel met 毕竟 geeft de reden of het excuus. Het staat vaak na een oordeel of advies.",
    "毕竟 kan niet in een vraag. Voor \"nou ... eigenlijk?\" gebruik je 到底.",
    "毕竟 is neutraal: je hoort het in gesprekken en leest het in teksten."
  ],
  pitfall: "毕竟 is geen \"eindelijk\". Gaat het om iets wat na lang wachten gebeurt, gebruik dan 终于.",
  examples: [
    { cn: "别怪他了，他毕竟还是个孩子。", py: "Bié guài tā le, tā bìjìng hái shì ge háizi.", nl: "Neem het hem niet kwalijk, hij is tenslotte nog een kind." },
    { cn: "毕竟是第一次，紧张一点儿很正常。", py: "Bìjìng shì dì-yī cì, jǐnzhāng yìdiǎnr hěn zhèngcháng.", nl: "Het is tenslotte de eerste keer. Een beetje zenuwachtig zijn is normaal." },
    { cn: "他虽然有很多缺点，但毕竟是我的朋友。", py: "Tā suīrán yǒu hěn duō quēdiǎn, dàn bìjìng shì wǒ de péngyou.", nl: "Hij heeft veel gebreken, maar hij is per slot van rekening mijn vriend." },
    { cn: "北京毕竟是大城市，机会比较多。", py: "Běijīng bìjìng shì dà chéngshì, jīhuì bǐjiào duō.", nl: "Beijing is tenslotte een grote stad, dus er zijn meer kansen." }
  ],
  nuance: [
    { h: "毕竟 of 到底?",
      p: "In een vraag kan alleen 到底: \"nou ... eigenlijk?\" Je dringt aan op een antwoord. 毕竟 staat nooit in een vraag. In een bewering met 是 kan 到底 soms ook \"tenslotte\" betekenen, maar 毕竟 is daar veel gewoner. Kies in een bewering dus 毕竟.",
      ex: [
        { cn: "你到底去不去？", py: "Nǐ dàodǐ qù bu qù?", nl: "Ga je nou mee of niet?" },
        { cn: "他毕竟是新来的，慢慢教他吧。", py: "Tā bìjìng shì xīn lái de, mànmàn jiāo tā ba.", nl: "Hij is tenslotte nieuw. Leer het hem rustig aan." }
      ] },
    { h: "毕竟 of 终于?",
      p: "终于 betekent \"eindelijk\": na lang wachten of veel moeite gebeurt iets. 毕竟 zegt niets over tijd. Het noemt een feit dat iets verklaart. In het Nederlands kan \"uiteindelijk\" bij allebei passen. Denk daarom aan de functie: verklaren (毕竟) of eindelijk gebeuren (终于).",
      ex: [
        { cn: "等了三年，他终于回国了。", py: "Děngle sān nián, tā zhōngyú huíguó le.", nl: "Na drie jaar wachten kwam hij eindelijk terug naar huis." },
        { cn: "他毕竟在国外住了三年，中文有点儿忘了。", py: "Tā bìjìng zài guówài zhùle sān nián, Zhōngwén yǒudiǎnr wàng le.", nl: "Hij heeft tenslotte drie jaar in het buitenland gewoond. Hij is zijn Chinees een beetje vergeten." }
      ] },
    { h: "虽然 ... 但(是)毕竟",
      p: "Vaak geef je eerst iets toe, en daarna het feit dat zwaarder weegt. Dat doe je met 虽然 ... 但是毕竟. Dit hoor je veel in discussies en lees je in betogen.",
      ex: [
        { cn: "这个办法虽然慢，但毕竟比较安全。", py: "Zhège bànfǎ suīrán màn, dàn bìjìng bǐjiào ānquán.", nl: "Deze methode is traag, maar ze is per slot van rekening veiliger." }
      ] }
  ],
  mistakes: [
    { wrong: "你毕竟去不去？", right: "你到底去不去？", why: "毕竟 kan niet in een vraag. Voor \"nou ... of niet?\" gebruik je 到底." },
    { wrong: "等了半天，公交车毕竟来了。", right: "等了半天，公交车终于来了。", why: "Na lang wachten gebeurt iets: dat is 终于 (eindelijk), niet 毕竟." },
    { wrong: "他是毕竟孩子。", right: "他毕竟是孩子。", why: "毕竟 is een bijwoord en staat vóór 是, niet erna." }
  ],
  vocab: [
    ["毕竟", "bìjìng", "per slot van rekening, tenslotte"], ["怪", "guài", "verwijten, kwalijk nemen"], ["正常", "zhèngcháng", "normaal"],
    ["缺点", "quēdiǎn", "gebrek, zwak punt"], ["经验", "jīngyàn", "ervaring"], ["批评", "pīpíng", "bekritiseren"],
    ["孤单", "gūdān", "eenzaam"], ["适应", "shìyìng", "wennen aan, zich aanpassen"], ["安慰", "ānwèi", "troosten"], ["成长", "chéngzhǎng", "groeien, volwassen worden"]
  ],
  dialogue: [
    ["A", "小李今天又把报告写错了，我真想批评他。", "Xiǎo Lǐ jīntiān yòu bǎ bàogào xiěcuò le, wǒ zhēn xiǎng pīpíng tā.", "Xiao Li heeft het rapport vandaag weer fout geschreven. Ik wil hem echt op zijn kop geven."],
    ["B", "别太生气了，他毕竟才来两个星期。", "Bié tài shēngqì le, tā bìjìng cái lái liǎng ge xīngqī.", "Word niet te boos. Hij is hier tenslotte pas twee weken."],
    ["A", "两个星期也不短了吧？", "Liǎng ge xīngqī yě bù duǎn le ba?", "Twee weken is toch ook niet kort meer?"],
    ["B", "他毕竟没有经验。我们刚工作的时候，不也常常出错吗？", "Tā bìjìng méiyǒu jīngyàn. Wǒmen gāng gōngzuò de shíhou, bù yě chángcháng chūcuò ma?", "Hij heeft tenslotte geen ervaring. Toen wij net begonnen, maakten wij toch ook vaak fouten?"],
    ["A", "你说得也对。那我明天好好教教他。", "Nǐ shuō de yě duì. Nà wǒ míngtiān hǎohāo jiāojiao tā.", "Daar heb je ook gelijk in. Dan leg ik het hem morgen goed uit."]
  ],
  reading: {
    title: "留学第一年",
    lines: [
      { cn: "刚到荷兰的时候，我常常觉得很孤单。", py: "Gāng dào Hélán de shíhou, wǒ chángcháng juéde hěn gūdān.", nl: "Toen ik net in Nederland was, voelde ik me vaak eenzaam." },
      { cn: "这里的人都很友好，可是这里毕竟不是我的家。", py: "Zhèli de rén dōu hěn yǒuhǎo, kěshì zhèli bìjìng bú shì wǒ de jiā.", nl: "De mensen hier zijn heel vriendelijk, maar dit is per slot van rekening mijn thuis niet." },
      { cn: "我听不懂荷兰语，吃不惯这里的饭，也不习惯这里的天气。", py: "Wǒ tīng bu dǒng Hélányǔ, chī bu guàn zhèli de fàn, yě bù xíguàn zhèli de tiānqì.", nl: "Ik verstond geen Nederlands, was niet gewend aan het eten hier, en ook niet aan het weer." },
      { cn: "有一次考试没考好，我在电话里哭了。", py: "Yǒu yí cì kǎoshì méi kǎohǎo, wǒ zài diànhuà li kū le.", nl: "Eén keer ging een examen slecht, en huilde ik aan de telefoon." },
      { cn: "妈妈安慰我说：\"你毕竟是第一次出国，不适应很正常。\"", py: "Māma ānwèi wǒ shuō: \"Nǐ bìjìng shì dì-yī cì chūguó, bú shìyìng hěn zhèngcháng.\"", nl: "Mijn moeder troostte me: \"Je bent tenslotte voor het eerst in het buitenland. Dat je er nog niet aan gewend bent, is normaal.\"" },
      { cn: "她还说：\"时间长了，一切都会好起来的。\"", py: "Tā hái shuō: \"Shíjiān cháng le, yíqiè dōu huì hǎo qǐlai de.\"", nl: "Ze zei ook: \"Na een tijdje komt alles goed.\"" },
      { cn: "后来，我慢慢交了几个朋友，也学会了自己做饭。", py: "Hòulái, wǒ mànmàn jiāole jǐ ge péngyou, yě xuéhuìle zìjǐ zuò fàn.", nl: "Daarna maakte ik langzaam een paar vrienden en leerde ik zelf koken." },
      { cn: "一年过去了，我终于适应了这里的生活。", py: "Yì nián guòqu le, wǒ zhōngyú shìyìngle zhèli de shēnghuó.", nl: "Er ging een jaar voorbij, en eindelijk was ik gewend aan het leven hier." },
      { cn: "现在想起来，那段时间虽然辛苦，但毕竟让我成长了很多。", py: "Xiànzài xiǎng qǐlai, nà duàn shíjiān suīrán xīnkǔ, dàn bìjìng ràng wǒ chéngzhǎngle hěn duō.", nl: "Als ik er nu aan terugdenk: die tijd was zwaar, maar ik ben er per slot van rekening veel door gegroeid." }
    ],
    questions: [
      { type: "mc", q: "Wat vond de schrijver in het begin moeilijk?",
        options: ["De taal, het eten en het weer.", "De mensen waren onvriendelijk.", "Ze kon niet koken en had geen telefoon.", "Ze had te veel vrienden en te weinig tijd."], answer: 0,
        why: ["Goed: 听不懂荷兰语，吃不惯这里的饭，也不习惯这里的天气。", "De mensen waren juist vriendelijk: 都很友好.", "Koken leerde ze later, en ze belde wél met haar moeder.", "Vrienden maakte ze pas later."] },
      { type: "mc", q: "Wanneer was de schrijver gewend aan het leven in Nederland?",
        options: ["Na een jaar.", "Na een week.", "Na het eerste examen.", "Ze is er nog steeds niet aan gewend."], answer: 0,
        why: ["Goed: 一年过去了，我终于适应了这里的生活。", "Er staat 一年, niet een week.", "Na dat examen huilde ze juist.", "终于适应了 = eindelijk gewend."] },
      { type: "mc", q: "你毕竟是第一次出国。Wat bedoelt de moeder met 毕竟?",
        options: ["Het is tenslotte de eerste keer: dat verklaart waarom het moeilijk is.", "Eindelijk ben je voor het eerst in het buitenland.", "Is het nou je eerste keer of niet?", "Ten slotte ben je naar het buitenland gegaan."], answer: 0,
        why: ["Goed: 毕竟 noemt het feit dat alles verklaart.", "毕竟 is niet \"eindelijk\". Dat is 终于.", "毕竟 staat niet in een vraag. Dat zou 到底 zijn.", "\"Ten slotte\" (als laatste) is 最后, niet 毕竟."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Neem het hem niet kwalijk, hij is tenslotte nog een kind.\"",
      options: ["别生他的气，他毕竟还是个孩子。", "别生他的气，他终于还是个孩子。", "别生他的气，他是毕竟还个孩子。", "别生他的气，毕竟他还是个孩子吗？"], answer: 0,
      why: ["Goed: 毕竟 + 还是个孩子 geeft het verklarende feit.", "终于 betekent \"eindelijk\". Dat past niet.", "毕竟 staat vóór 是, niet erna.", "Met 毕竟 maak je geen vraag. 吗 hoort er niet bij."] },
    { type: "mc", q: "你___想不想去？(Wil je nou wel of niet gaan?)",
      options: ["到底", "毕竟", "终于", "幸亏"], answer: 0,
      why: ["Goed: in een vraag dring je aan met 到底.", "毕竟 kan niet in een vraag.", "终于 betekent \"eindelijk\" en past niet in een vraag.", "幸亏 betekent \"gelukkig\" en past niet in een vraag."] },
    { type: "mc", q: "等了两个小时，飞机___起飞了。(Na twee uur wachten vertrok het vliegtuig eindelijk.)",
      options: ["终于", "毕竟", "难道", "曾经"], answer: 0,
      why: ["Goed: na lang wachten gebeurt het: 终于.", "毕竟 noemt een verklarend feit, niet \"eindelijk\".", "难道 maakt een retorische vraag.", "曾经 betekent \"ooit, vroeger\". Dat past niet bij lang wachten."] },
    { type: "fill", q: "他___是新来的，很多事还不懂。(Hij is tenslotte nieuw, hij weet veel nog niet.)", answers: ["毕竟", "到底"],
      hint: "Welk woord noemt het feit dat alles verklaart?", why: "毕竟 + 是 + feit. 到底 kan hier ook, maar 毕竟 is veel gewoner." },
    { type: "order", q: "Zet in de goede volgorde: \"Hij heeft tenslotte tien jaar in China gewoond.\"",
      tokens: [["他毕竟", "tā bìjìng"], ["在中国", "zài Zhōngguó"], ["生活了", "shēnghuóle"], ["十年", "shí nián"]] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["你毕竟去不去？", "你到底去不去？", "他毕竟是你哥哥。", "毕竟是第一次，别紧张。"], answer: 0,
      why: ["Goed: deze is fout. 毕竟 kan niet in een vraag.", "Deze klopt: 到底 in een vraag.", "Deze klopt: 毕竟 + 是 + feit.", "Deze klopt: 毕竟 mag aan het begin staan."] },
    { type: "mc", q: "北京毕竟是大城市，机会比较多。Wat betekent dit?",
      options: ["Beijing is tenslotte een grote stad, dus er zijn meer kansen.", "Beijing is eindelijk een grote stad geworden.", "Is Beijing nou een grote stad of niet?", "Beijing is toch geen grote stad?"], answer: 0,
      why: ["Goed: 毕竟 noemt het feit dat de kansen verklaart.", "毕竟 is niet \"eindelijk\" en er staat geen 了.", "毕竟 maakt geen vraag.", "De zin zegt juist dat Beijing een grote stad is."] },
    { type: "mc", q: "\"Ten slotte wil ik iedereen bedanken.\" Welk woord past?",
      options: ["最后，我想感谢大家。", "毕竟，我想感谢大家。", "终于，我想感谢大家。", "到底，我想感谢大家。"], answer: 0,
      why: ["Goed: \"ten slotte\" (als laatste punt) is 最后.", "毕竟 is \"tenslotte\" (per slot van rekening), niet \"als laatste\".", "终于 is \"eindelijk\", na lang wachten.", "到底 dringt aan in een vraag. Het betekent niet \"als laatste\"."] },
    { type: "mc", q: "他虽然说错了，但___是好心。(Hij zei het verkeerd, maar hij bedoelde het tenslotte goed.)",
      options: ["毕竟", "终于", "竟然", "难道"], answer: 0,
      why: ["Goed: 虽然 ... 但毕竟: het feit dat zwaarder weegt.", "终于 is \"eindelijk\". Er is geen wachten.", "竟然 drukt verbazing uit, geen verklarend feit.", "难道 maakt een retorische vraag."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hij heeft veel gebreken, maar hij is tenslotte mijn vriend.\"",
      tokens: [["他虽然", "tā suīrán"], ["有很多缺点", "yǒu hěn duō quēdiǎn"], ["但毕竟是", "dàn bìjìng shì"], ["我的朋友", "wǒ de péngyou"]] },
    { type: "open", q: "Vertaal: \"Wees niet zo streng, hij is tenslotte nieuw.\"", model: ["别太严格了，他毕竟是新来的。", "别对他这么严，他毕竟是新人。"],
      tip: "Check: staat 毕竟 vóór 是 en vóór het feit?" },
    { type: "open", q: "Vertaal: \"Het is tenslotte de eerste keer, zenuwachtig zijn is normaal.\"", model: ["毕竟是第一次，紧张很正常。", "这毕竟是第一次，紧张一点儿是正常的。"],
      tip: "Check: gebruik 毕竟, niet 终于 of 最后." }
  ],
  review: [
    { type: "mc", q: "\"Hij is tenslotte je vader, bel hem eens.\"",
      options: ["他毕竟是你爸爸，给他打个电话吧。", "他终于是你爸爸，给他打个电话吧。", "他是毕竟你爸爸，给他打个电话吧。", "他毕竟你爸爸是，给他打个电话吧。"], answer: 0,
      why: ["Goed: 毕竟 + 是 + feit.", "终于 is \"eindelijk\".", "毕竟 staat vóór 是.", "是 staat vóór 你爸爸, niet aan het eind."] },
    { type: "mc", q: "这件事你___打算怎么办？(Wat ben je nou eigenlijk van plan met deze zaak?)",
      options: ["到底", "毕竟", "终于", "幸亏"], answer: 0,
      why: ["Goed: aandringen in een vraag = 到底.", "毕竟 kan niet in een vraag.", "终于 is \"eindelijk\" en past niet in een vraag.", "幸亏 is \"gelukkig\" en past niet in een vraag."] },
    { type: "mc", q: "找了三个月，她___找到了工作。(Na drie maanden zoeken vond ze eindelijk werk.)",
      options: ["终于", "毕竟", "难道", "千万"], answer: 0,
      why: ["Goed: na lang zoeken = 终于.", "毕竟 noemt een verklarend feit, niet \"eindelijk\".", "难道 maakt een retorische vraag.", "千万 gebruik je bij een dringend advies: \"zeker (niet)\"."] }
  ]
})
