({
  id: "13", slug: "cai-jiu", title: "才 of 就", sub: "Pas laat, of al vroeg",
  canDo: "Je kunt nu zeggen dat iets later of eerder gebeurde dan verwacht, met 才 en 就.",
  guess: {
    q: "\"Hij stond pas om acht uur op.\" (later dan normaal) Welke zin klopt, denk je?",
    options: ["他八点才起床。", "他八点就起床了。", "他才八点起床了。", "他八点才起床了。"], answer: 0,
    why: ["Goed: tijd + 才 + werkwoord = pas (laat), zonder 了.", "就 betekent \"al\": dan stond hij juist vroeg op.", "才 staat na de tijd, vlak vóór het werkwoord.", "Bij 才 komt geen 了 aan het eind."]
  },
  problem: "In het Nederlands zeg je \"pas om acht uur\" of \"al om zes uur\". Zo laat je horen of iets laat of vroeg is. Het Chinees doet dat met twee kleine woorden vóór het werkwoord. 才 (cái) = pas, later dan verwacht. 就 (jiù) = al, eerder dan verwacht.",
  pattern: [
    { l: "wie", v: "他", c: 1 }, { l: "tijd", v: "八点", c: 2 },
    { l: "才 / 就", v: "才", c: 3, key: true }, { l: "werkwoord", v: "起床", c: 4 }
  ],
  patternCap: "Wie + tijd/hoeveelheid + 才 + werkwoord (pas, laat)  |  Wie + tijd + 就 + werkwoord + 了 (al, vroeg)",
  rules: [
    "才 en 就 staan direct vóór het werkwoord, na de tijd of de hoeveelheid.",
    "就 bij iets wat al gebeurd is: meestal met 了 aan het eind. 他六点就起床了。",
    "才 krijgt geen 了: 他八点才起床。",
    "Het onderwerp staat vóór de tijd of na de tijd, maar 才/就 staan altijd ná het onderwerp."
  ],
  pitfall: "了 hoort bij 就, niet bij 才. 他八点才起床了 is fout.",
  examples: [
    { cn: "他六点就起床了。", py: "Tā liù diǎn jiù qǐchuáng le.", nl: "Hij stond al om zes uur op." },
    { cn: "他八点才起床。", py: "Tā bā diǎn cái qǐchuáng.", nl: "Hij stond pas om acht uur op." },
    { cn: "电影七点开始，他七点半才来。", py: "Diànyǐng qī diǎn kāishǐ, tā qī diǎn bàn cái lái.", nl: "De film begon om zeven uur. Hij kwam pas om half acht." },
    { cn: "我五分钟就做完了。", py: "Wǒ wǔ fēnzhōng jiù zuòwán le.", nl: "Ik was al in vijf minuten klaar." }
  ],
  nuance: [
    { h: "Laat en veel, of vroeg en weinig",
      p: "才 en 就 werken ook met tijdsduur en hoeveelheid. 才 = later, langer of meer moeite dan verwacht. 就 = sneller, korter of makkelijker dan verwacht. Je kijkt dus altijd naar je eigen verwachting.",
      ex: [
        { cn: "我找了三个小时才找到。", py: "Wǒ zhǎole sān ge xiǎoshí cái zhǎodào.", nl: "Ik zocht drie uur voordat ik het vond." },
        { cn: "我找了五分钟就找到了。", py: "Wǒ zhǎole wǔ fēnzhōng jiù zhǎodào le.", nl: "Ik zocht vijf minuten en had het al." }
      ] },
    { h: "Minimaal paar: 才 zonder 了, 就 met 了",
      p: "Dezelfde tijd kan met allebei. Het verschil zit in je gevoel. 九点才到 = je vindt het laat. 九点就到了 = je vindt het vroeg. Let op 了: alleen bij 就.",
      ex: [
        { cn: "飞机九点才到。", py: "Fēijī jiǔ diǎn cái dào.", nl: "Het vliegtuig kwam pas om negen uur aan." },
        { cn: "飞机九点就到了。", py: "Fēijī jiǔ diǎn jiù dào le.", nl: "Het vliegtuig was al om negen uur aan." }
      ] },
    { h: "Ander gebruik: 就 = meteen, 才 = nog maar",
      p: "Zonder tijd betekent 就 vaak \"meteen\" of \"dan\": 我马上就来 (ik kom zo). 才 voor een getal betekent \"nog maar\": 他才五岁 (hij is nog maar vijf). Herken dus ook deze betekenissen.",
      ex: [
        { cn: "他才五岁，但是会说三种语言。", py: "Tā cái wǔ suì, dànshì huì shuō sān zhǒng yǔyán.", nl: "Hij is nog maar vijf, maar hij spreekt drie talen." }
      ] }
  ],
  mistakes: [
    { wrong: "他八点才起床了。", right: "他八点才起床。", why: "Bij 才 hoort geen 了." },
    { wrong: "他才八点起床。", right: "他八点才起床。", why: "才 staat na de tijd, direct vóór het werkwoord." },
    { wrong: "我六点起床就了。", right: "我六点就起床了。", why: "就 staat vóór het werkwoord, 了 aan het eind." },
    { wrong: "就他六点起床了。", right: "他六点就起床了。", why: "就 staat na het onderwerp en de tijd, niet vooraan." }
  ],
  vocab: [
    ["才 / 就", "cái / jiù", "pas (laat) / al (vroeg)"], ["起床", "qǐchuáng", "opstaan"], ["迟到", "chídào", "te laat komen"],
    ["开始", "kāishǐ", "beginnen"], ["分钟", "fēnzhōng", "minuut"], ["小时", "xiǎoshí", "uur (duur)"],
    ["飞机", "fēijī", "vliegtuig"], ["终于", "zhōngyú", "eindelijk"], ["堵车", "dǔchē", "file, vastzitten in het verkeer"], ["已经", "yǐjīng", "al"]
  ],
  dialogue: [
    ["A", "你怎么现在才来？我们七点就到了。", "Nǐ zěnme xiànzài cái lái? Wǒmen qī diǎn jiù dào le.", "Waarom kom je nu pas? Wij waren er al om zeven uur."],
    ["B", "对不起，路上堵车，我开了一个半小时才到。", "Duìbuqǐ, lùshang dǔchē, wǒ kāile yí ge bàn xiǎoshí cái dào.", "Sorry, er was file. Ik heb anderhalf uur gereden voordat ik hier was."],
    ["A", "下次坐地铁吧，半个小时就到了。", "Xià cì zuò dìtiě ba, bàn ge xiǎoshí jiù dào le.", "Neem de volgende keer de metro. Dan ben je er in een half uur."],
    ["B", "好的。菜已经点了吗？", "Hǎo de. Cài yǐjīng diǎnle ma?", "Goed. Is het eten al besteld?"],
    ["A", "早就点了，快吃吧！", "Zǎo jiù diǎn le, kuài chī ba!", "Allang. Eet maar snel!"]
  ],
  reading: {
    title: "我和我弟弟",
    lines: [
      { cn: "我和我弟弟很不一样。", py: "Wǒ hé wǒ dìdi hěn bù yíyàng.", nl: "Mijn broertje en ik zijn heel verschillend." },
      { cn: "我每天早上六点就起床了，弟弟九点才起床。", py: "Wǒ měi tiān zǎoshang liù diǎn jiù qǐchuáng le, dìdi jiǔ diǎn cái qǐchuáng.", nl: "Ik sta elke ochtend al om zes uur op. Mijn broertje staat pas om negen uur op." },
      { cn: "我吃早饭很快，十分钟就吃完了。", py: "Wǒ chī zǎofàn hěn kuài, shí fēnzhōng jiù chīwán le.", nl: "Ik ontbijt snel, in tien minuten ben ik al klaar." },
      { cn: "弟弟吃得很慢，要吃一个小时才吃完。", py: "Dìdi chī de hěn màn, yào chī yí ge xiǎoshí cái chīwán.", nl: "Mijn broertje eet heel langzaam. Hij doet er een uur over." },
      { cn: "可是做作业的时候，他半个小时就做完了。", py: "Kěshì zuò zuòyè de shíhou, tā bàn ge xiǎoshí jiù zuòwán le.", nl: "Maar met huiswerk is hij al in een half uur klaar." },
      { cn: "我常常要做两三个小时才做完。", py: "Wǒ chángcháng yào zuò liǎng sān ge xiǎoshí cái zuòwán.", nl: "Ik heb vaak twee à drie uur nodig." },
      { cn: "妈妈说：\"你们两个人，一个快，一个慢，真有意思。\"", py: "Māma shuō: \"Nǐmen liǎng ge rén, yí ge kuài, yí ge màn, zhēn yǒu yìsi.\"", nl: "Mama zegt: \"Jullie twee: de een snel, de ander langzaam. Echt grappig.\"" }
    ],
    questions: [
      { type: "mc", q: "Hoe laat staat het broertje op?",
        options: ["Pas om negen uur.", "Al om zes uur.", "Om tien uur.", "Dat staat niet in de tekst."], answer: 0,
        why: ["Goed: 弟弟九点才起床。", "Zes uur is de schrijver zelf.", "Tien uur staat niet in de tekst.", "Het staat er wel: 九点才起床."] },
      { type: "mc", q: "Waar is het broertje snel in?",
        options: ["Huiswerk maken.", "Ontbijten.", "Opstaan.", "Nergens in."], answer: 0,
        why: ["Goed: 他半个小时就做完了。", "Hij eet juist langzaam: 一个小时才吃完.", "Hij staat juist laat op: 九点才起床.", "Met huiswerk is hij snel."] },
      { type: "mc", q: "我常常要做两三个小时才做完。Wat laat 才 hier zien?",
        options: ["Het duurt langer dan je zou willen.", "Het gaat sneller dan verwacht.", "Het is nog maar net begonnen.", "Het gebeurt elke dag om drie uur."], answer: 0,
        why: ["Goed: 才 = pas na veel tijd, later dan verwacht.", "Sneller dan verwacht is 就.", "才 gaat hier over tijdsduur, niet over het begin.", "两三个小时 is een duur, geen klokuur."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"De les begint om negen uur. Zij was er al om acht uur.\"",
      options: ["她八点就到了。", "她八点才到了。", "她八点才到。", "她就八点到了。"], answer: 0,
      why: ["Goed: vroeger dan nodig = 就 ... 了.", "才 betekent \"pas\", en krijgt geen 了.", "才 betekent \"pas\": dan was acht uur laat.", "就 staat na de tijd, vlak vóór het werkwoord."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["我十一点才睡觉了。", "我十一点才睡觉。", "我九点就睡觉了。", "我十一点就睡觉了。"], answer: 0,
      why: ["Goed: deze is fout. Bij 才 komt geen 了.", "Deze klopt: pas om elf uur.", "Deze klopt: al om negen uur.", "Deze klopt: je vindt elf uur vroeg (bijvoorbeeld op oudejaarsavond)."] },
    { type: "fill", q: "我等了他一个小时，他___来。(Ik heb een uur op hem gewacht, hij kwam pas toen.)", answers: ["才"],
      hint: "Later dan verwacht, en er staat geen 了.", why: "Een uur wachten is lang: 才来, zonder 了." },
    { type: "order", q: "Zet in de goede volgorde: \"Hij was al in tien minuten klaar.\"",
      tokens: [["他十分钟", "tā shí fēnzhōng"], ["就", "jiù"], ["做完", "zuòwán"], ["了", "le"]] },
    { type: "mc", q: "这本书很难，我看了三遍___看懂。",
      options: ["才", "就", "都", "也"], answer: 0,
      why: ["Goed: drie keer lezen is veel moeite: 才.", "就 = sneller dan verwacht, en dan hoort er 了 bij.", "都 betekent \"allemaal\".", "也 betekent \"ook\"."] },
    { type: "mc", q: "这个问题很简单，我一看___明白了。",
      options: ["就", "才", "再", "还"], answer: 0,
      why: ["Goed: makkelijk en snel: 就 ... 了.", "才 = pas na moeite. Bovendien staat er 了.", "再 betekent \"nog een keer, daarna\".", "还 betekent \"nog\"."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik heb pas om twaalf uur geluncht.\"",
      tokens: [["我十二点", "wǒ shí'èr diǎn"], ["才", "cái"], ["吃", "chī"], ["午饭", "wǔfàn"]] },
    { type: "mc", q: "飞机三点到。A: 他两点就来了。B: 他四点才来。Wie was te laat?",
      options: ["Persoon B: 四点才来.", "Persoon A: 两点就来了.", "Allebei.", "Niemand."], answer: 0,
      why: ["Goed: 才 = pas, later dan verwacht.", "就 = al, eerder dan verwacht.", "A was juist vroeg.", "B kwam pas om vier uur, na het vliegtuig."] },
    { type: "mc", q: "\"Hij is nog maar zestien.\"",
      options: ["他才十六岁。", "他就十六岁了。", "他十六岁才。", "他十六才岁。"], answer: 0,
      why: ["Goed: 才 + getal = nog maar.", "就 ... 了 zou \"al\" betekenen.", "才 staat vóór het getal.", "才 staat vóór het getal, niet tussen getal en 岁."] },
    { type: "open", q: "Vertaal: \"Ik stond vandaag al om vijf uur op.\"", model: ["我今天五点就起床了。", "今天我五点就起床了。"],
      tip: "Check: 就 vlak vóór 起床, en 了 aan het eind." },
    { type: "open", q: "Vertaal: \"De trein vertrok pas om tien uur.\"", model: ["火车十点才开。", "火车十点才出发。"],
      tip: "Check: 才 na de tijd, vóór het werkwoord, en geen 了." }
  ],
  review: [
    { type: "mc", q: "\"Mijn vader kwam pas om elf uur thuis.\"",
      options: ["我爸爸十一点才回家。", "我爸爸十一点才回家了。", "我爸爸才十一点回家了。", "我爸爸十一点回家才。"], answer: 0,
      why: ["Goed.", "Bij 才 komt geen 了.", "才 staat na de tijd, vóór het werkwoord.", "才 staat vóór het werkwoord."] },
    { type: "mc", q: "她学了两个月___会游泳了。(Ze kon al na twee maanden zwemmen.)",
      options: ["就", "才", "再", "又"], answer: 0,
      why: ["Goed: snel, en er staat 了: 就.", "才 = pas, en past niet bij 了.", "再 = daarna, nog een keer.", "又 = weer, opnieuw."] },
    { type: "mc", q: "Welk woord krijgt meestal 了 aan het eind van de zin?",
      options: ["就", "才", "Allebei", "Geen van beide"], answer: 0,
      why: ["Goed: 就 ... 了 voor iets wat al vroeg gebeurde.", "才 krijgt geen 了.", "Alleen 就, niet 才.", "就 krijgt wel 了."] }
  ]
})
