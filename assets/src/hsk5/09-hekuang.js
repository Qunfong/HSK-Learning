({
  id: "09", slug: "hekuang", title: "何况", sub: "Laat staan ..., of: en bovendien ...",
  canDo: "Je kunt nu zeggen dat iets nog meer voor de hand ligt (\"laat staan\") en een extra reden toevoegen (\"bovendien\"), met 何况.",
  guess: {
    q: "这个字连老师都不认识，何况我呢？Wat betekent dit, denk je?",
    options: ["Zelfs de leraar kent dit karakter niet, laat staan ik.", "De leraar kent dit karakter niet, maar ik wel.", "Ik ken dit karakter niet, maar de leraar wel.", "De leraar kent dit karakter niet, dus vraag het mij."], answer: 0,
    why: ["Goed: als zelfs de leraar het niet weet, weet ik het zeker niet.", "何况我呢 zegt juist dat ik het nog minder weet.", "Er staat 连老师都不认识: ook de leraar kent het niet.", "何况 is een retorische vraag, geen verzoek."]
  },
  problem: "\"Zelfs de leraar weet het niet, laat staan ik.\" In het Chinees noem je eerst het moeilijke geval met 都 of 也. Dan zeg je 何况 (hékuàng) + het geval dat nog meer voor de hand ligt, vaak met 呢. 何况 heeft nog een tweede betekenis: \"en bovendien\", om een extra reden te geven.",
  pattern: [
    { l: "moeilijk geval + 都", v: "老师都不会", c: 3 }, { l: "何况", v: "何况", c: 2, key: true },
    { l: "nog duidelijker geval", v: "我", c: 1 }, { l: "呢", v: "呢", c: 5 }
  ],
  patternCap: "(连) A + 都 / 也 + ..., 何况 B (呢)? = laat staan B; reden 1, 何况 (+ 还 / 也 / 又) reden 2 = en bovendien",
  rules: [
    "\"Laat staan\": het eerste deel heeft 都 of 也, vaak met 连. 何况 begint het tweede deel.",
    "Na 何况 staat dan vaak alleen een kort deel + 呢. Het is een retorische vraag: het antwoord is vanzelfsprekend.",
    "\"Bovendien\": na 何况 volgt een hele zin met een extra reden, vaak met 还, 也 of 又.",
    "更何况 is een sterkere vorm en kan in beide betekenissen.",
    "何况 hoor je in gesprekken en lees je in teksten. Het klinkt iets formeler dan 更不用说."
  ],
  pitfall: "Let op de richting. Vóór 何况 staat het moeilijke geval met 都, ná 何况 het geval dat nog meer voor de hand ligt. 老师都不会，何况我呢, niet 我都不会，何况老师呢.",
  examples: [
    { cn: "这个字连老师都不认识，何况我呢？", py: "Zhège zì lián lǎoshī dōu bú rènshi, hékuàng wǒ ne?", nl: "Zelfs de leraar kent dit karakter niet, laat staan ik." },
    { cn: "大人都觉得累，何况孩子呢？", py: "Dàrén dōu juéde lèi, hékuàng háizi ne?", nl: "Zelfs volwassenen worden er moe van, laat staan kinderen." },
    { cn: "这家饭店太贵了，何况离这儿也很远，我们换一家吧。", py: "Zhè jiā fàndiàn tài guì le, hékuàng lí zhèr yě hěn yuǎn, wǒmen huàn yì jiā ba.", nl: "Dit restaurant is te duur, en bovendien is het ver weg. Laten we een ander nemen." },
    { cn: "别担心，你一直很努力，何况这次考试也不难。", py: "Bié dānxīn, nǐ yìzhí hěn nǔlì, hékuàng zhè cì kǎoshì yě bù nán.", nl: "Maak je geen zorgen. Je hebt altijd hard gewerkt, en bovendien is dit examen niet moeilijk." }
  ],
  nuance: [
    { h: "Twee betekenissen: hoe zie je het verschil?",
      p: "Kijk naar het eerste deel en naar wat na 何况 komt. Staat er 都 of 也 in het eerste deel, en na 何况 alleen een kort deel met 呢? Dan is het \"laat staan\". Volgt er na 何况 een hele zin met 还, 也 of 又? Dan geeft 何况 een extra reden: \"en bovendien\".",
      ex: [
        { cn: "这么重的箱子大人都搬不动，何况孩子呢？", py: "Zhème zhòng de xiāngzi dàrén dōu bān bu dòng, hékuàng háizi ne?", nl: "Zo'n zware doos krijgen zelfs volwassenen niet van hun plek, laat staan kinderen." },
        { cn: "现在去太晚了，何况外面还下着雨。", py: "Xiànzài qù tài wǎn le, hékuàng wàimiàn hái xiàzhe yǔ.", nl: "Het is te laat om nu te gaan, en bovendien regent het buiten." }
      ] },
    { h: "何况 of 更不用说?",
      p: "Beide betekenen \"laat staan\". 更不用说 is een gewone bewering en eindigt meestal op 了, niet op 呢. 何况 maakt er vaak een retorische vraag van met 呢. 更不用说 heeft geen betekenis \"bovendien\": een extra reden geef je met 何况 of 况且.",
      ex: [
        { cn: "他连英语都说不好，更不用说法语了。", py: "Tā lián Yīngyǔ dōu shuō bu hǎo, gèng búyòng shuō Fǎyǔ le.", nl: "Hij spreekt zelfs geen goed Engels, om over Frans nog maar te zwijgen." },
        { cn: "他连英语都说不好，何况法语呢？", py: "Tā lián Yīngyǔ dōu shuō bu hǎo, hékuàng Fǎyǔ ne?", nl: "Hij spreekt zelfs geen goed Engels, laat staan Frans." }
      ] },
    { h: "更何况 en 况且",
      p: "更何况 is 何况 met extra nadruk. Je hoort het vaak bij een laatste, doorslaggevend argument. 况且 (kuàngqiě) betekent alleen \"bovendien\" en nooit \"laat staan\". Na 况且 staat dus altijd een hele zin met een extra reden.",
      ex: [
        { cn: "这件事你不用管，更何况你也管不了。", py: "Zhè jiàn shì nǐ búyòng guǎn, gèng hékuàng nǐ yě guǎn bu liǎo.", nl: "Hier hoef je je niet mee te bemoeien, en bovendien kun je er toch niets aan doen." },
        { cn: "这个房子很便宜，况且离公司也近。", py: "Zhège fángzi hěn piányi, kuàngqiě lí gōngsī yě jìn.", nl: "Dit huis is goedkoop, en bovendien dicht bij het werk." }
      ] }
  ],
  mistakes: [
    { wrong: "我都不会，何况老师呢？", right: "老师都不会，何况我呢？", why: "Vóór 何况 staat het moeilijke geval met 都. Ná 何况 het geval dat nog meer voor de hand ligt." },
    { wrong: "老师不会，何况我呢？", right: "老师都不会，何况我呢？", why: "Voor \"laat staan\" heeft het eerste deel 都 of 也 nodig: \"zelfs de leraar\"." },
    { wrong: "他连英语都说不好，更不用说法语呢。", right: "他连英语都说不好，更不用说法语了。", why: "更不用说 is een bewering en eindigt op 了. 呢 hoort bij 何况." },
    { wrong: "我喜欢苹果，何况喜欢香蕉。", right: "我喜欢苹果，也喜欢香蕉。", why: "何况 is geen gewoon \"en ook\". Het voegt een extra reden toe voor een conclusie, of betekent \"laat staan\"." }
  ],
  vocab: [
    ["何况", "hékuàng", "laat staan; en bovendien"], ["更不用说", "gèng búyòng shuō", "laat staan, om nog maar te zwijgen van"], ["况且", "kuàngqiě", "bovendien"],
    ["钢琴", "gāngqín", "piano"], ["年龄", "niánlíng", "leeftijd"], ["难度", "nándù", "moeilijkheidsgraad"],
    ["坚持", "jiānchí", "volhouden"], ["业余", "yèyú", "amateur, in de vrije tijd"], ["专业", "zhuānyè", "professioneel; studierichting"],
    ["吃惊", "chījīng", "verbaasd, geschrokken"]
  ],
  dialogue: [
    ["A", "周末我们去爬黄山吧？", "Zhōumò wǒmen qù pá Huáng Shān ba?", "Zullen we in het weekend de Huangshan beklimmen?"],
    ["B", "黄山？我连学校后面的小山都爬不上去，何况黄山呢？", "Huáng Shān? Wǒ lián xuéxiào hòumiàn de xiǎo shān dōu pá bu shàngqu, hékuàng Huáng Shān ne?", "De Huangshan? Ik kom zelfs de heuvel achter school niet op, laat staan de Huangshan."],
    ["A", "别担心，我们慢慢爬。何况山上的风景特别美，累也值得。", "Bié dānxīn, wǒmen mànmàn pá. Hékuàng shān shang de fēngjǐng tèbié měi, lèi yě zhídé.", "Geen zorgen, we klimmen rustig. En bovendien is het uitzicht boven prachtig. Dan is moe worden het waard."],
    ["B", "可是我听说那里周末人特别多。", "Kěshì wǒ tīngshuō nàlǐ zhōumò rén tèbié duō.", "Maar ik hoorde dat het daar in het weekend heel druk is."],
    ["A", "那我们早上五点出发，人就不多了。", "Nà wǒmen zǎoshang wǔ diǎn chūfā, rén jiù bù duō le.", "Dan vertrekken we om vijf uur 's ochtends. Dan is het niet druk."],
    ["B", "五点？我平时八点都起不来，更不用说五点了！", "Wǔ diǎn? Wǒ píngshí bā diǎn dōu qǐ bu lái, gèng búyòng shuō wǔ diǎn le!", "Vijf uur? Normaal kom ik om acht uur al mijn bed niet uit, laat staan om vijf uur!"]
  ],
  reading: {
    title: "六十岁学钢琴",
    lines: [
      { cn: "李阿姨退休以后，决定开始学钢琴。", py: "Lǐ āyí tuìxiū yǐhòu, juédìng kāishǐ xué gāngqín.", nl: "Na haar pensioen besloot mevrouw Li piano te gaan leren." },
      { cn: "她的朋友说：\"学钢琴很难，年轻人都不一定学得会，何况你已经六十岁了呢？\"", py: "Tā de péngyou shuō: \"Xué gāngqín hěn nán, niánqīngrén dōu bù yídìng xué de huì, hékuàng nǐ yǐjīng liùshí suì le ne?\"", nl: "Haar vrienden zeiden: \"Piano leren is moeilijk. Zelfs jongeren leren het niet altijd, laat staan iemand van zestig.\"" },
      { cn: "李阿姨却不这么想。", py: "Lǐ āyí què bú zhème xiǎng.", nl: "Mevrouw Li dacht daar anders over." },
      { cn: "她觉得学习跟年龄没有关系，何况她现在有的是时间。", py: "Tā juéde xuéxí gēn niánlíng méiyǒu guānxi, hékuàng tā xiànzài yǒudeshì shíjiān.", nl: "Ze vond dat leren niets met leeftijd te maken heeft. En bovendien had ze nu tijd genoeg." },
      { cn: "刚开始的时候，她连最简单的曲子都弹不好，更不用说难度大的了。", py: "Gāng kāishǐ de shíhou, tā lián zuì jiǎndān de qǔzi dōu tán bu hǎo, gèng búyòng shuō nándù dà de le.", nl: "In het begin kon ze zelfs de eenvoudigste stukjes niet goed spelen, laat staan de moeilijke." },
      { cn: "可是她每天坚持练习两个小时，从来没有放弃。", py: "Kěshì tā měi tiān jiānchí liànxí liǎng ge xiǎoshí, cónglái méiyǒu fàngqì.", nl: "Maar ze bleef elke dag twee uur oefenen en gaf nooit op." },
      { cn: "两年以后，她在社区的新年晚会上弹了一首曲子，大家都很吃惊。", py: "Liǎng nián yǐhòu, tā zài shèqū de xīnnián wǎnhuì shang tánle yì shǒu qǔzi, dàjiā dōu hěn chījīng.", nl: "Twee jaar later speelde ze een stuk op het nieuwjaarsfeest in de buurt. Iedereen was verbaasd." },
      { cn: "她笑着说：\"专业的钢琴家每天都要练习，何况我这个业余的呢？\"", py: "Tā xiàozhe shuō: \"Zhuānyè de gāngqínjiā měi tiān dōu yào liànxí, hékuàng wǒ zhège yèyú de ne?\"", nl: "Ze zei lachend: \"Zelfs professionele pianisten moeten elke dag oefenen, laat staan een amateur zoals ik.\"" },
      { cn: "现在，她的几个朋友也开始学乐器了。", py: "Xiànzài, tā de jǐ ge péngyou yě kāishǐ xué yuèqì le.", nl: "Nu zijn een paar van haar vrienden ook een instrument gaan leren." }
    ],
    questions: [
      { type: "mc", q: "Wat vonden de vrienden van mevrouw Li van haar plan?",
        options: ["Ze dachten dat het op haar leeftijd te moeilijk was.", "Ze wilden meteen samen met haar leren.", "Ze vonden dat ze te weinig tijd had.", "Ze vonden piano leren makkelijk."], answer: 0,
        why: ["Goed: 年轻人都不一定学得会，何况你已经六十岁了呢？", "Pas aan het eind gingen een paar vrienden ook leren.", "Mevrouw Li zegt juist dat ze tijd genoeg heeft.", "Ze zeiden: 学钢琴很难."] },
      { type: "mc", q: "Hoe lang oefende mevrouw Li elke dag?",
        options: ["Twee uur.", "Een uur.", "Twee jaar.", "Zes uur."], answer: 0,
        why: ["Goed: 每天坚持练习两个小时。", "Er staat 两个小时.", "Na twee jaar speelde ze op het feest.", "Zestig is haar leeftijd, niet het aantal uren."] },
      { type: "mc", q: "她觉得学习跟年龄没有关系，何况她现在有的是时间。Wat betekent 何况 hier?",
        options: ["En bovendien.", "Laat staan.", "Hoewel.", "Anders."], answer: 0,
        why: ["Goed: na 何况 volgt een hele zin met een extra reden.", "Er staat geen 都 in het eerste deel en geen 呢: het is geen \"laat staan\".", "\"Hoewel\" is 虽然 of 尽管.", "\"Anders\" is 否则 of 不然."] }
    ]
  },
  questions: [
    { type: "mc", q: "Wat betekent: 这么简单的题小学生都会，何况大学生呢？",
      options: ["Zelfs een basisschoolkind kan deze makkelijke opgave, dus een student zeker.", "Een basisschoolkind kan deze opgave, maar een student niet.", "Een student kan deze opgave, maar een basisschoolkind niet.", "Deze opgave is makkelijk, omdat studenten hem kunnen maken."], answer: 0,
      why: ["Goed: als het makkelijke geval al lukt, lukt het duidelijkere geval zeker.", "何况 + 呢 zegt juist dat het voor een student nog vanzelfsprekender is.", "Er staat 小学生都会: ook een basisschoolkind kan het.", "何况 geeft geen reden."] },
    { type: "mc", q: "\"Zelfs de dokter weet het niet, laat staan ik.\"",
      options: ["医生都不知道，何况我呢？", "我都不知道，何况医生呢？", "医生都不知道，何况我了。", "医生都不知道，所以我呢？"], answer: 0,
      why: ["Goed: het moeilijke geval met 都, dan 何况 + het duidelijkere geval.", "De richting is omgedraaid: de dokter is het sterkere geval, niet ik.", "Na 何况 + een kort deel hoort 呢, niet 了.", "所以 geeft een gevolg, geen \"laat staan\"."] },
    { type: "order", q: "Zet in de goede volgorde: \"Zelfs volwassenen vinden dit werk zwaar, laat staan kinderen.\"",
      tokens: [["这个工作", "zhège gōngzuò"], ["大人都", "dàrén dōu"], ["觉得累", "juéde lèi"], ["何况", "hékuàng"], ["孩子呢", "háizi ne"]] },
    { type: "mc", q: "你别买了，这个太贵了，何况你也不需要。Wat betekent 何况 hier?",
      options: ["En bovendien.", "Laat staan.", "Hoewel.", "Anders."], answer: 0,
      why: ["Goed: na 何况 volgt een extra reden met 也.", "Er staat geen 都 in het eerste deel en geen 呢.", "\"Hoewel\" is 虽然 of 尽管.", "\"Anders\" is 否则 of 不然."] },
    { type: "mc", q: "他连自己的房间都不打扫，___帮别人打扫了。(Hij maakt zelfs zijn eigen kamer niet schoon, laat staan die van anderen.)",
      options: ["更不用说", "因为", "但是", "所以"], answer: 0,
      why: ["Goed: 更不用说 + ... + 了 = laat staan.", "因为 geeft een reden.", "但是 geeft een tegenstelling, maar hier gaan beide delen dezelfde kant op.", "所以 geeft een gevolg en past niet bij 连……都."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["他连汉字都不认识，更不用说写呢。", "他连汉字都不认识，更不用说写了。", "他连汉字都不认识，何况写呢？", "他连汉字都不认识，更何况写呢？"], answer: 0,
      why: ["Goed: deze klopt niet. 更不用说 eindigt op 了, niet op 呢.", "Deze klopt: 更不用说 + ... + 了.", "Deze klopt: 何况 + ... + 呢.", "Deze klopt: 更何况 is een sterkere vorm van 何况."] },
    { type: "mc", q: "In welke zin betekent 何况 \"en bovendien\"?",
      options: ["现在去太晚了，何况外面还下着雨。", "大人都搬不动，何况孩子呢？", "老师都不会，何况学生呢？", "他连饭都没时间吃，何况休息呢？"], answer: 0,
      why: ["Goed: na 何况 volgt een hele zin met een extra reden (还).", "Dit is \"laat staan\": 都 in het eerste deel en 呢 erna.", "Dit is \"laat staan\": 都 in het eerste deel en 呢 erna.", "Dit is \"laat staan\": 连……都 in het eerste deel en 呢 erna."] },
    { type: "order", q: "Zet in de goede volgorde: \"Het salaris is goed, en bovendien is het dicht bij huis.\"",
      tokens: [["这份工作工资高", "zhè fèn gōngzuò gōngzī gāo"], ["何况", "hékuàng"], ["离家", "lí jiā"], ["也很近", "yě hěn jìn"]] },
    { type: "fill", q: "这个箱子两个人都搬不动，___一个人呢？(Met z'n tweeën krijgen we deze doos al niet van zijn plek, laat staan alleen.)",
      answers: ["何况", "更何况"], hint: "Welk woord past bij 呢 aan het eind?", why: "都 in het eerste deel, dan 何况 + het duidelijkere geval + 呢." },
    { type: "open", q: "Vertaal: \"Zelfs Chinezen vinden dit gedicht moeilijk, laat staan buitenlanders.\"",
      model: ["这首诗连中国人都觉得难，何况外国人呢？", "中国人都觉得这首诗很难，更不用说外国人了。"],
      tip: "Check: 都 in het eerste deel, dan 何况 ... 呢 of 更不用说 ... 了. Staan de Chinezen vóór 何况?" },
    { type: "open", q: "Vertaal: \"Laten we vandaag niet gaan. Het is al laat, en bovendien ben ik moe.\"",
      model: ["我们今天别去了，已经很晚了，何况我也累了。", "今天别去了吧，太晚了，况且我也很累。"],
      tip: "Check: na 何况 (of 况且) volgt een hele zin met een extra reden, vaak met 也 of 还." }
  ],
  review: [
    { type: "mc", q: "\"Zelfs in de zomer is het hier koud, laat staan in de winter.\"",
      options: ["这里夏天都很冷，何况冬天呢？", "这里冬天都很冷，何况夏天呢？", "这里夏天都很冷，何况冬天了。", "这里夏天都很冷，但是冬天呢？"], answer: 0,
      why: ["Goed: zomer is het verrassende geval, winter ligt meer voor de hand.", "De richting is omgedraaid: koud in de winter is niet verrassend.", "Na 何况 + een kort deel hoort 呢, niet 了.", "但是 maakt er een tegenstelling van, geen \"laat staan\"."] },
    { type: "mc", q: "你别怪他了，他还是个孩子，___他已经道歉了。(Neem het hem niet kwalijk. Hij is nog een kind, en bovendien heeft hij al sorry gezegd.)",
      options: ["何况", "所以", "否则", "尽管"], answer: 0,
      why: ["Goed: 何况 voegt een extra reden toe.", "所以 zou zeggen dat hij sorry zei omdat hij een kind is.", "否则 betekent \"anders\".", "尽管 betekent \"hoewel\" en staat in het eerste deel."] },
    { type: "mc", q: "\"Hij kan niet eens fietsen, laat staan autorijden.\"",
      options: ["他连自行车都不会骑，更不用说开车了。", "他连车都不会开，更不用说骑自行车了。", "他不会开车，所以不会骑自行车。", "他会骑自行车，更不用说开车了。"], answer: 0,
      why: ["Goed: het makkelijke geval met 连……都, dan 更不用说 + ... + 了.", "De richting is omgedraaid: fietsen is makkelijker dan autorijden.", "所以 geeft een gevolg, geen \"laat staan\".", "Er moet een ontkenning in: 不会骑."] }
  ]
})
