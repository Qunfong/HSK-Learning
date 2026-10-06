({
  id: "07", slug: "richting", title: "Richting: 来 en 去", sub: "Naar binnen, naar buiten, terug, omhoog",
  canDo: "Je kunt nu zeggen in welke richting iemand of iets beweegt, en waar het naartoe gaat, met 来 en 去 na het werkwoord.",
  guess: {
    q: "Jij staat binnen. Je vriend staat buiten voor de deur. Wat zeg je?",
    options: ["进来吧！", "进去吧！", "出来吧！", "出去吧！"], answer: 0,
    why: ["Goed: hij komt naar binnen (进), naar jou toe (来).", "去 betekent: van jou af. Hij komt juist naar jou toe.", "出 is naar buiten. Hij staat al buiten.", "出 is naar buiten, en 去 is van jou af. Allebei de verkeerde kant."]
  },
  problem: "In het Nederlands zeg je \"kom binnen\" of \"ga naar buiten\". In het Chinees zet je de richting áchter het werkwoord. 来 (lái) betekent: naar de spreker toe. 去 (qù) betekent: van de spreker af. Daarvoor kan nog 进, 出, 上, 下, 回 of 起 staan.",
  pattern: [
    { l: "wie", v: "老师", c: 1 }, { l: "werkwoord", v: "走", c: 4 }, { l: "richting", v: "进", c: 2, key: true },
    { l: "plaats", v: "教室", c: 3 }, { l: "来/去", v: "来", c: 5, key: true }
  ],
  patternCap: "Werkwoord + (上/下/进/出/回/过/起) + (plaats) + 来/去. Een plaats staat altijd vóór 来/去.",
  rules: [
    "来 = naar de spreker toe. 去 = van de spreker af.",
    "Een plaats staat vóór 来 of 去: 回家去, 走进教室来. Nooit 回来家.",
    "Een ding mag vóór of na 来/去: 带回来一本书 of 带一本书回来. Met 把 kan ook: 把书带回来.",
    "Ontkennen met 没 vóór het werkwoord: 他没回来。",
    "起来 is omhoog: 站起来 (opstaan). 起来 heeft geen 起去."
  ],
  pitfall: "Zet een plaats nooit ná 来 of 去. 他走进来教室 is fout: zeg 他走进教室来.",
  examples: [
    { cn: "老师走进教室来了。", py: "Lǎoshī zǒu jìn jiàoshì lái le.", nl: "De leraar kwam het klaslokaal binnen." },
    { cn: "他从图书馆带回来两本书。", py: "Tā cóng túshūguǎn dài huílai liǎng běn shū.", nl: "Hij nam twee boeken mee terug uit de bibliotheek." },
    { cn: "她跑下楼去了。", py: "Tā pǎo xià lóu qù le.", nl: "Zij rende de trap af naar beneden." },
    { cn: "大家都站起来了。", py: "Dàjiā dōu zhàn qilai le.", nl: "Iedereen stond op." }
  ],
  nuance: [
    { h: "来 of 去: waar sta jij?",
      p: "Dezelfde beweging krijgt 来 of 去, afhankelijk van waar de spreker is. Sta je beneden en moet je vriend naar jou toe komen? Dan zeg je 下来. Sta je boven en stuur je hem weg naar beneden? Dan zeg je 下去. Kijk dus altijd eerst waar de spreker staat.",
      ex: [
        { cn: "你下来吧，我在楼下等你。", py: "Nǐ xiàlai ba, wǒ zài lóu xià děng nǐ.", nl: "Kom naar beneden, ik wacht beneden op je." },
        { cn: "你下去吧，他在楼下等你。", py: "Nǐ xiàqu ba, tā zài lóu xià děng nǐ.", nl: "Ga maar naar beneden, hij wacht beneden op je." }
      ] },
    { h: "Waar komt de plaats, en waar het ding?",
      p: "Een plaats (家, 教室, 楼) staat altijd tussen de richting en 来/去. Een ding (书, 礼物) is vrijer: het mag ervoor of erachter. Wil je benadrukken wat er met een bekend ding gebeurt, gebruik dan 把.",
      ex: [
        { cn: "他回家去了。", py: "Tā huí jiā qù le.", nl: "Hij is naar huis gegaan." },
        { cn: "他带了一个朋友回来。", py: "Tā dàile yí ge péngyou huílai.", nl: "Hij bracht een vriend mee terug." },
        { cn: "请把书拿出来。", py: "Qǐng bǎ shū ná chūlai.", nl: "Pak je boek eens tevoorschijn." }
      ] },
    { h: "Niet alleen beweging: 起来 en 出来",
      p: "Sommige richtingen hebben ook een figuurlijke betekenis. 想起来 betekent: iets schiet je weer te binnen. 笑起来 betekent: beginnen te lachen. Dat zijn vaste combinaties. Leer ze als woord, net als de resultaatwoorden uit les 2.",
      ex: [
        { cn: "我想起来了，他叫大卫！", py: "Wǒ xiǎng qilai le, tā jiào Dàwèi!", nl: "Nu weet ik het weer, hij heet David!" },
        { cn: "听了这个故事，大家都笑起来了。", py: "Tīngle zhège gùshi, dàjiā dōu xiào qilai le.", nl: "Na dat verhaal begon iedereen te lachen." }
      ] }
  ],
  mistakes: [
    { wrong: "他回来家了。", right: "他回家来了。", why: "Een plaats staat vóór 来/去, niet erna." },
    { wrong: "老师走进来教室。", right: "老师走进教室来。", why: "教室 is een plaats. Die staat tussen 进 en 来." },
    { wrong: "(Jij bent binnen) 你进去吧。", right: "(Jij bent binnen) 你进来吧。", why: "Je vriend komt naar jou toe, dus 来. 去 is van de spreker af." },
    { wrong: "他昨天不回来。", right: "他昨天没回来。", why: "Voor iets wat (niet) gebeurd is gebruik je 没, niet 不." }
  ],
  vocab: [
    ["来 / 去", "lái / qù", "(richting: naar de spreker toe / ervan af)"], ["进", "jìn", "naar binnen"], ["出", "chū", "naar buiten"],
    ["回", "huí", "terug"], ["起来", "qǐlai", "omhoog, op(staan)"], ["带", "dài", "meenemen, meebrengen"],
    ["站", "zhàn", "staan"], ["楼", "lóu", "verdieping, gebouw"], ["教室", "jiàoshì", "klaslokaal"], ["照片", "zhàopiàn", "foto"]
  ],
  dialogue: [
    ["妈妈", "小明，你在哪儿？饭做好了，快上来吧！", "Xiǎo Míng, nǐ zài nǎr? Fàn zuòhǎo le, kuài shànglai ba!", "Xiao Ming, waar ben je? Het eten is klaar, kom snel naar boven!"],
    ["小明", "我在楼下买东西，马上上去。", "Wǒ zài lóu xià mǎi dōngxi, mǎshàng shàngqu.", "Ik ben beneden iets aan het kopen, ik kom zo naar boven."],
    ["妈妈", "你上来的时候，带一瓶水上来。", "Nǐ shànglai de shíhou, dài yì píng shuǐ shànglai.", "Neem een fles water mee als je naar boven komt."],
    ["小明", "好。还要带什么上去吗？", "Hǎo. Hái yào dài shénme shàngqu ma?", "Goed. Moet ik nog iets anders mee naar boven nemen?"],
    ["妈妈", "不用了。你快回来吧！", "Bú yòng le. Nǐ kuài huílai ba!", "Nee, hoeft niet. Kom nu maar snel terug!"]
  ],
  reading: {
    title: "开学第一天",
    lines: [
      { cn: "今天是新学期的第一天，我很早就到了教室。", py: "Jīntiān shì xīn xuéqī de dì yī tiān, wǒ hěn zǎo jiù dàole jiàoshì.", nl: "Vandaag was de eerste dag van het nieuwe semester. Ik was al vroeg in het lokaal." },
      { cn: "八点，同学们一个一个走进教室来。", py: "Bā diǎn, tóngxuémen yí gè yí gè zǒu jìn jiàoshì lái.", nl: "Om acht uur kwamen de klasgenoten een voor een het lokaal binnen." },
      { cn: "大卫从外面跑进来，说：\"对不起，我来晚了！\"", py: "Dàwèi cóng wàimian pǎo jìnlai, shuō: \"Duìbuqǐ, wǒ láiwǎn le!\"", nl: "David kwam van buiten binnenrennen en zei: \"Sorry, ik ben te laat!\"" },
      { cn: "他刚从中国回来，带回来很多照片。", py: "Tā gāng cóng Zhōngguó huílai, dài huílai hěn duō zhàopiàn.", nl: "Hij was net terug uit China en had veel foto's meegenomen." },
      { cn: "老师走进来的时候，大家都站起来了。", py: "Lǎoshī zǒu jìnlai de shíhou, dàjiā dōu zhàn qilai le.", nl: "Toen de leraar binnenkwam, stond iedereen op." },
      { cn: "老师说：\"请坐。大卫，你把照片拿出来给大家看看吧。\"", py: "Lǎoshī shuō: \"Qǐng zuò. Dàwèi, nǐ bǎ zhàopiàn ná chūlai gěi dàjiā kànkan ba.\"", nl: "De leraar zei: \"Ga zitten. David, laat je foto's maar eens aan iedereen zien.\"" },
      { cn: "大卫拿出来一张照片，上面是长城。", py: "Dàwèi ná chūlai yì zhāng zhàopiàn, shàngmian shì Chángchéng.", nl: "David haalde een foto tevoorschijn. Daarop stond de Chinese Muur." },
      { cn: "下课以后，大卫说：\"明年我还想回中国去。\"", py: "Xiàkè yǐhòu, Dàwèi shuō: \"Míngnián wǒ hái xiǎng huí Zhōngguó qù.\"", nl: "Na de les zei David: \"Volgend jaar wil ik weer terug naar China.\"" }
    ],
    questions: [
      { type: "mc", q: "Wat had David meegenomen uit China?",
        options: ["Veel foto's.", "Een boek over de Chinese Muur.", "Cadeaus voor de klas.", "Niets, hij kwam te laat."], answer: 0,
        why: ["Goed: 带回来很多照片。", "De Muur staat op een foto, niet in een boek.", "Over cadeaus staat niets in de tekst.", "Hij kwam te laat, maar had wel foto's meegenomen."] },
      { type: "mc", q: "Wat deed iedereen toen de leraar binnenkwam?",
        options: ["Ze stonden op.", "Ze gingen naar buiten.", "Ze gingen zitten.", "Ze haalden hun boeken tevoorschijn."], answer: 0,
        why: ["Goed: 大家都站起来了。", "Niemand ging naar buiten: 出去 staat niet in de tekst.", "Ze gingen pas zitten toen de leraar 请坐 zei.", "Alleen David haalde iets tevoorschijn: een foto."] },
      { type: "mc", q: "明年我还想回中国去。Waarom staat 中国 tussen 回 en 去?",
        options: ["中国 is een plaats, en een plaats staat vóór 去.", "Omdat David nu in China is.", "Omdat 去 altijd aan het eind van een zin staat.", "Omdat 回去 en 去回 hetzelfde betekenen."], answer: 0,
        why: ["Goed: plaats tussen de richting en 来/去: 回中国去.", "David is in de klas, niet in China. Daarom 去: van hem af.", "去 hoeft niet aan het eind: 他带回来两本书 eindigt met het ding.", "去回 bestaat niet. De vorm is 回 + plaats + 去."] }
    ]
  },
  questions: [
    { type: "mc", q: "Jij bent boven. Je zus staat beneden. \"Kom naar boven!\"",
      options: ["你上来吧！", "你上去吧！", "你下来吧！", "你下去吧！"], answer: 0,
      why: ["Goed: omhoog (上), naar jou toe (来).", "去 is van jou af. Ze komt juist naar jou.", "下 is naar beneden. Ze staat al beneden.", "下去 is naar beneden en van jou af: de omgekeerde richting."] },
    { type: "mc", q: "\"Hij is naar huis gegaan.\"",
      options: ["他回家去了。", "他回去家了。", "他家回去了。", "他去回家了。"], answer: 0,
      why: ["Goed: 回 + plaats + 去.", "De plaats staat vóór 去, niet erna.", "回 komt vóór de plaats: 回家.", "去 komt achteraan, na de plaats."] },
    { type: "order", q: "Zet in de goede volgorde: \"De leraar kwam het klaslokaal binnen.\"",
      tokens: [["老师", "lǎoshī"], ["走进", "zǒu jìn"], ["教室", "jiàoshì"], ["来了", "lái le"]] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["他走进来教室了。", "他走进教室来了。", "他带回来一本书。", "他带了一本书回来。"], answer: 0,
      why: ["Goed: 教室 is een plaats en hoort vóór 来: 走进教室来.", "Dit klopt: de plaats staat tussen 进 en 来.", "Dit klopt: een ding mag na 回来 staan.", "Dit klopt: een ding mag ook tussen 带 en 回来 staan."] },
    { type: "fill", q: "外面下雨了，快进___吧！(Het regent buiten, kom snel binnen!)", answers: ["来"],
      hint: "Komt je vriend naar jou toe, of gaat hij van je weg?", why: "Hij komt naar de spreker toe, dus 进来." },
    { type: "mc", q: "\"O ja, nu weet ik het weer!\"",
      options: ["我想起来了！", "我想上来了！", "我想出去了！", "我想下来了！"], answer: 0,
      why: ["Goed: 想起来 = iets schiet je weer te binnen.", "上来 is naar boven komen: een beweging.", "想出去 betekent \"naar buiten willen\".", "下来 is naar beneden komen: een beweging."] },
    { type: "mc", q: "\"Hij is gisteren niet teruggekomen.\"",
      options: ["他昨天没回来。", "他昨天回没来。", "他昨天回来没。", "他昨天没回去来。"], answer: 0,
      why: ["Goed: 没 vóór het werkwoord.", "没 staat vóór het hele werkwoord, niet midden in 回来.", "没 staat niet achteraan.", "去 en 来 samen kan niet: kies één richting."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hij is al teruggegaan naar zijn kamer.\"",
      tokens: [["他", "tā"], ["已经", "yǐjīng"], ["回", "huí"], ["房间", "fángjiān"], ["去了", "qù le"]] },
    { type: "mc", q: "\"Breng het boek terug (hierheen).\"",
      options: ["把书拿回来。", "把书拿来回。", "把回来书拿。", "把书回拿来。"], answer: 0,
      why: ["Goed: 把 + ding + werkwoord + 回来.", "De volgorde is 回来, niet 来回.", "Na 把 komt eerst het ding.", "Eerst het werkwoord 拿, dan de richting 回来."] },
    { type: "open", q: "Vertaal: \"Kom binnen, alsjeblieft.\"", model: ["请进来。", "请进来吧。", "快进来吧。"],
      tip: "Check: de spreker is binnen, dus 进来, niet 进去." },
    { type: "open", q: "Vertaal: \"Hij rende het klaslokaal uit.\"", model: ["他跑出教室去了。", "他跑出了教室。"],
      tip: "Check: 跑 + 出 + 教室 + 去. De plaats staat vóór 去, nooit erna." }
  ],
  review: [
    { type: "mc", q: "Jij staat beneden. Je vriend staat boven. \"Kom naar beneden!\"",
      options: ["你下来吧！", "你下去吧！", "你上来吧！", "你上去吧！"], answer: 0,
      why: ["Goed: naar beneden (下), naar jou toe (来).", "去 is van jou af. Hij komt juist naar jou.", "上 is naar boven. Hij is al boven.", "上去 is omhoog en van jou af: de verkeerde kant."] },
    { type: "mc", q: "\"Zij ging de winkel in.\"",
      options: ["她走进商店去了。", "她走进去商店了。", "她走商店进去了。", "她进走商店去了。"], answer: 0,
      why: ["Goed: 走 + 进 + plaats + 去.", "De plaats staat vóór 去, niet erna.", "进 staat direct na het werkwoord, vóór de plaats.", "Eerst het werkwoord 走, dan de richting 进."] },
    { type: "mc", q: "\"Mijn vader is net teruggekomen uit Shanghai.\"",
      options: ["我爸爸刚从上海回来。", "我爸爸刚回来从上海。", "我爸爸刚从上海来回。", "我爸爸刚上海从回来。"], answer: 0,
      why: ["Goed: 从 + plaats staat vóór het werkwoord 回来.", "从上海 staat vóór het werkwoord, niet erachter.", "Terugkomen is 回来, niet 来回.", "从 staat vóór de plaats: 从上海."] }
  ]
})
