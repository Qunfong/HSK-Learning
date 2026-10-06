({
  id: "14", slug: "er", title: "而", sub: "Terwijl ... en: tegenstelling en toevoeging",
  canDo: "Je kunt nu met 而 twee dingen tegenover elkaar zetten (terwijl) en in schrijftaal twee eigenschappen verbinden (聪明而勇敢).",
  guess: {
    q: "\"Hij houdt van rust, terwijl zij van drukte houdt.\" Welke zin klopt, denk je?",
    options: ["他喜欢安静，而她喜欢热闹。", "他喜欢安静，而且她喜欢热闹。", "他喜欢安静，她而喜欢热闹。", "他而喜欢安静，她喜欢热闹。"], answer: 0,
    why: ["Goed: 而 zet twee verschillende dingen tegenover elkaar, en staat vóór het tweede onderwerp.", "而且 betekent \"en bovendien\". Het voegt iets toe, het zet niets tegenover elkaar.", "而 staat vóór het onderwerp van het tweede deel, niet erna.", "而 hoort aan het begin van het tweede deel."]
  },
  problem: "In het Nederlands zeg je \"terwijl\" om twee dingen te vergelijken: \"Ik drink thee, terwijl hij koffie drinkt.\" Het Chinees gebruikt daarvoor 而 (ér). In schrijftaal verbindt 而 ook twee eigenschappen: \"slim en dapper\". Let op: 而 lijkt op 而且 en 但是, maar werkt anders.",
  pattern: [
    { l: "wie", v: "他", c: 1 }, { l: "A", v: "喜欢安静，", c: 2 }, { l: "而", v: "而", c: 3, key: true },
    { l: "ander onderwerp", v: "她", c: 4 }, { l: "B (anders)", v: "喜欢热闹", c: 5 }
  ],
  patternCap: "A，而 B = A, terwijl B (tegenstelling) | bijv. nw. + 而 + bijv. nw. = ... en ... (schrijftaal: 聪明而勇敢)",
  rules: [
    "Als tegenstelling staat 而 aan het begin van het tweede deel, vóór het onderwerp: ……，而她……",
    "De twee delen hebben vaak een ander onderwerp en een tegengesteld kenmerk: 北方……，而南方…….",
    "Als toevoeging verbindt 而 twee bijvoeglijke naamwoorden, vaak van twee lettergrepen: 简单而有效.",
    "而 verbindt geen zelfstandige naamwoorden. Daarvoor gebruik je 和: 苹果和香蕉.",
    "而 is vooral schrijftaal. In spreektaal hoor je vaker 可是, 但是 of 又……又……."
  ],
  pitfall: "而 is niet hetzelfde als 而且. 而且 betekent \"en bovendien\": 他会说汉语，而且会说日语. Met 而 zet je juist twee dingen tegenover elkaar.",
  examples: [
    { cn: "他喜欢安静，而她喜欢热闹。", py: "Tā xǐhuan ānjìng, ér tā xǐhuan rènao.", nl: "Hij houdt van rust, terwijl zij van drukte houdt." },
    { cn: "北方的冬天很冷，而南方的冬天比较暖和。", py: "Běifāng de dōngtiān hěn lěng, ér nánfāng de dōngtiān bǐjiào nuǎnhuo.", nl: "In het noorden zijn de winters koud, terwijl ze in het zuiden vrij mild zijn." },
    { cn: "她是一个聪明而勇敢的女孩。", py: "Tā shì yí ge cōngming ér yǒnggǎn de nǚhái.", nl: "Zij is een slim en dapper meisje." },
    { cn: "这个方法简单而有效。", py: "Zhège fāngfǎ jiǎndān ér yǒuxiào.", nl: "Deze methode is eenvoudig en effectief." }
  ],
  nuance: [
    { h: "而 of 但是?",
      p: "但是 gebruik je als iets tegen de verwachting ingaat: \"moe, maar toch blij\". 而 zet twee dingen neutraal naast elkaar die verschillen: \"hij lang, zijn broer klein\". Begint de zin met 虽然, dan volgt 但是 of 可是, nooit 而.",
      ex: [
        { cn: "虽然他很累，但是他很开心。", py: "Suīrán tā hěn lèi, dànshì tā hěn kāixīn.", nl: "Hij is wel moe, maar hij is blij." },
        { cn: "哥哥很高，而弟弟很矮。", py: "Gēge hěn gāo, ér dìdi hěn ǎi.", nl: "De oudere broer is lang, terwijl de jongere broer klein is." }
      ] },
    { h: "而 of 而且?",
      p: "Ze lijken op elkaar, maar het zijn verschillende woorden. 而且 voegt iets toe in dezelfde richting: \"en bovendien\". Het hoort vaak bij 不但. 而 tussen twee zinsdelen zet juist iets tegenover elkaar. Gebruik dus geen 而 voor \"en ook\".",
      ex: [
        { cn: "他不但会说汉语，而且会说日语。", py: "Tā búdàn huì shuō Hànyǔ, érqiě huì shuō Rìyǔ.", nl: "Hij spreekt niet alleen Chinees, maar ook Japans." },
        { cn: "他会说汉语，而我只会说英语。", py: "Tā huì shuō Hànyǔ, ér wǒ zhǐ huì shuō Yīngyǔ.", nl: "Hij spreekt Chinees, terwijl ik alleen Engels spreek." }
      ] },
    { h: "Register, en de vaste vorm 不是……而是",
      p: "聪明而勇敢 klinkt geschreven en netjes. In een gesprek zeg je eerder 又聪明又勇敢. Een vaste combinatie die je ook in spreektaal hoort, is 不是 A，而是 B: \"niet A, maar B\". Zo verbeter je een verkeerde gedachte.",
      ex: [
        { cn: "她又聪明又勇敢。", py: "Tā yòu cōngming yòu yǒnggǎn.", nl: "Ze is slim en dapper. (spreektaal)" },
        { cn: "不是我不想去，而是我没有时间。", py: "Bú shì wǒ bù xiǎng qù, ér shì wǒ méiyǒu shíjiān.", nl: "Het is niet dat ik niet wil, maar ik heb geen tijd." }
      ] }
  ],
  mistakes: [
    { wrong: "他会说汉语，而会说日语。", right: "他会说汉语，而且会说日语。", why: "Voor \"en bovendien\" gebruik je 而且. 而 zet dingen tegenover elkaar." },
    { wrong: "我买了苹果而香蕉。", right: "我买了苹果和香蕉。", why: "而 verbindt geen zelfstandige naamwoorden. Gebruik 和." },
    { wrong: "虽然下雨了，而我们还是去了。", right: "虽然下雨了，但是我们还是去了。", why: "虽然 hoort bij 但是 of 可是. Het gaat om iets tegen de verwachting in." },
    { wrong: "他喜欢安静，她而喜欢热闹。", right: "他喜欢安静，而她喜欢热闹。", why: "而 staat vóór het onderwerp van het tweede deel." }
  ],
  vocab: [
    ["而", "ér", "terwijl; en (schrijftaal)"], ["热闹", "rènao", "druk, levendig"], ["勇敢", "yǒnggǎn", "dapper, moedig"],
    ["有效", "yǒuxiào", "effectief, werkzaam"], ["性格", "xìnggé", "karakter, aard"], ["温暖", "wēnnuǎn", "warm, mild"],
    ["直接", "zhíjiē", "direct, rechtstreeks"], ["热情", "rèqíng", "hartelijk, enthousiast"], ["双胞胎", "shuāngbāotāi", "tweeling"], ["愉快", "yúkuài", "prettig, aangenaam"]
  ],
  dialogue: [
    ["A", "你和你妹妹是双胞胎，性格一样吗？", "Nǐ hé nǐ mèimei shì shuāngbāotāi, xìnggé yíyàng ma?", "Jij en je zus zijn een tweeling. Hebben jullie hetzelfde karakter?"],
    ["B", "完全不一样。我喜欢安静，而她喜欢热闹。", "Wánquán bù yíyàng. Wǒ xǐhuan ānjìng, ér tā xǐhuan rènao.", "Totaal niet. Ik houd van rust, terwijl zij van drukte houdt."],
    ["A", "那周末你们怎么过？", "Nà zhōumò nǐmen zěnme guò?", "Hoe brengen jullie dan het weekend door?"],
    ["B", "我在家看书，而她常常跟朋友去唱歌。", "Wǒ zài jiā kàn shū, ér tā chángcháng gēn péngyou qù chàng gē.", "Ik lees thuis, terwijl zij vaak met vrienden gaat zingen."],
    ["A", "你们常常吵架吗？", "Nǐmen chángcháng chǎojià ma?", "Maken jullie vaak ruzie?"],
    ["B", "很少。她很热情，而且很会照顾人。", "Hěn shǎo. Tā hěn rèqíng, érqiě hěn huì zhàogù rén.", "Bijna nooit. Ze is hartelijk, en ze kan bovendien goed voor anderen zorgen."]
  ],
  reading: {
    title: "南方人和北方人",
    lines: [
      { cn: "中国很大，南方和北方有很多不同。", py: "Zhōngguó hěn dà, nánfāng hé běifāng yǒu hěn duō bù tóng.", nl: "China is groot. Het zuiden en het noorden verschillen op veel punten." },
      { cn: "北方的冬天又冷又干，而南方的冬天比较温暖。", py: "Běifāng de dōngtiān yòu lěng yòu gān, ér nánfāng de dōngtiān bǐjiào wēnnuǎn.", nl: "In het noorden is de winter koud en droog, terwijl hij in het zuiden vrij mild is." },
      { cn: "在饮食方面，北方人爱吃面食，而南方人更喜欢吃米饭。", py: "Zài yǐnshí fāngmiàn, běifāng rén ài chī miànshí, ér nánfāng rén gèng xǐhuan chī mǐfàn.", nl: "Wat eten betreft: noorderlingen eten graag deeggerechten, terwijl zuiderlingen liever rijst eten." },
      { cn: "有人说，北方人说话直接而热情。", py: "Yǒu rén shuō, běifāng rén shuōhuà zhíjiē ér rèqíng.", nl: "Sommigen zeggen dat noorderlingen direct en hartelijk praten." },
      { cn: "也有人说，南方人说话比较温和。", py: "Yě yǒu rén shuō, nánfāng rén shuōhuà bǐjiào wēnhé.", nl: "Anderen zeggen dat zuiderlingen zachter praten." },
      { cn: "不过，这些说法并不一定对。", py: "Búguò, zhèxiē shuōfǎ bìng bù yídìng duì.", nl: "Maar deze beweringen kloppen niet altijd." },
      { cn: "一个人的性格不是只由家乡决定的，而是跟很多原因有关。", py: "Yí ge rén de xìnggé bú shì zhǐ yóu jiāxiāng juédìng de, ér shì gēn hěn duō yuányīn yǒuguān.", nl: "Iemands karakter hangt niet alleen af van zijn geboortestreek, maar van veel factoren." },
      { cn: "了解这些不同，可以让我们的交流更简单而愉快。", py: "Liǎojiě zhèxiē bù tóng, kěyǐ ràng wǒmen de jiāoliú gèng jiǎndān ér yúkuài.", nl: "Als je deze verschillen kent, wordt contact met elkaar eenvoudiger en prettiger." }
    ],
    questions: [
      { type: "mc", q: "Wat eten zuiderlingen volgens de tekst liever?",
        options: ["Rijst.", "Deeggerechten.", "Allebei evenveel.", "Dat staat niet in de tekst."], answer: 0,
        why: ["Goed: 南方人更喜欢吃米饭。", "Deeggerechten (面食) eten noorderlingen graag.", "De tekst noemt juist een verschil.", "Het staat in de derde zin."] },
      { type: "mc", q: "Wat vindt de schrijver van de verschillen in karakter?",
        options: ["Ze kloppen niet altijd; karakter hangt van veel dingen af.", "Ze kloppen altijd.", "Karakter hangt alleen af van je geboortestreek.", "Noorderlingen zijn altijd vriendelijker."], answer: 0,
        why: ["Goed: 这些说法并不一定对 en 跟很多原因有关.", "De schrijver zegt juist: 并不一定对.", "De tekst zegt: 不是只由家乡决定的.", "Dat zegt \"men\", en de schrijver twijfelt eraan."] },
      { type: "mc", q: "\"北方人爱吃面食，而南方人更喜欢吃米饭\": wat doet 而 hier?",
        options: ["Het zet twee verschillende gewoontes tegenover elkaar: \"terwijl\".", "Het voegt iets toe in dezelfde richting: \"en bovendien\".", "Het geeft een reden: \"omdat\".", "Het geeft iets tegen de verwachting in: \"maar toch\"."], answer: 0,
        why: ["Goed: 而 = terwijl. Noord en zuid worden vergeleken.", "\"En bovendien\" is 而且.", "Een reden geef je met 因为.", "\"Maar toch\" (tegen de verwachting) is eerder 但是 of 却."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Hij is extravert, terwijl zijn broer heel stil is.\"",
      options: ["他很外向，而他哥哥很安静。", "他很外向，而且他哥哥很安静。", "他很外向，他哥哥而很安静。", "他很外向而，他哥哥很安静。"], answer: 0,
      why: ["Goed: 而 aan het begin van het tweede deel, vóór het onderwerp.", "而且 voegt iets toe; het zet niets tegenover elkaar.", "而 staat vóór 他哥哥, niet erna.", "而 hoort bij het tweede deel, niet aan het eind van het eerste."] },
    { type: "mc", q: "她是一个___的人。(Zij is een slim en dapper mens.)",
      options: ["聪明而勇敢", "聪明但是勇敢", "聪明而是勇敢", "而聪明勇敢"], answer: 0,
      why: ["Goed: bijv. nw. + 而 + bijv. nw.", "但是 geeft een tegenstelling; slim en dapper spreken elkaar niet tegen.", "而是 hoort bij 不是……而是 (niet A, maar B).", "而 staat tussen de twee eigenschappen."] },
    { type: "order", q: "Zet in de goede volgorde: \"Dit is een eenvoudige en effectieve methode.\"",
      tokens: [["这是", "zhè shì"], ["一个", "yí ge"], ["简单", "jiǎndān"], ["而", "ér"], ["有效的", "yǒuxiào de"], ["方法", "fāngfǎ"]] },
    { type: "fill", q: "他会说汉语，___会说日语。(Hij spreekt Chinees, en bovendien Japans.)", answers: ["而且", "并且"],
      hint: "Je voegt iets toe in dezelfde richting. Twee tekens.", why: "而且 = en bovendien. 而 zou een tegenstelling maken." },
    { type: "mc", q: "我喜欢喝茶，而我丈夫喜欢喝咖啡。 Wat drukt 而 uit?",
      options: ["Een tegenstelling: ik thee, hij koffie.", "Een toevoeging: hij drinkt ook thee.", "Een reden: omdat ik thee drink.", "Iets tegen de verwachting in: ik drink toch thee."], answer: 0,
      why: ["Goed: 而 = terwijl. Twee verschillende voorkeuren.", "Een toevoeging is 而且 of 也.", "Een reden geef je met 因为.", "Tegen de verwachting in is eerder 但是 of 却."] },
    { type: "order", q: "Zet in de goede volgorde: \"Het is niet dat ik niet wil, maar ik heb geen tijd.\"",
      tokens: [["不是", "bú shì"], ["我不想去", "wǒ bù xiǎng qù"], ["而是", "ér shì"], ["我没有时间", "wǒ méiyǒu shíjiān"]] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["虽然很累，而我很开心。", "虽然很累，但是我很开心。", "我很累，而他很精神。", "这个办法简单而有效。"], answer: 0,
      why: ["Goed: dit is fout. 虽然 hoort bij 但是 of 可是, niet bij 而.", "Deze klopt: 虽然……但是…….", "Deze klopt: 而 zet ik en hij tegenover elkaar.", "Deze klopt: 而 verbindt twee eigenschappen."] },
    { type: "mc", q: "我买了苹果___香蕉。(Ik heb appels en bananen gekocht.)",
      options: ["和", "而", "而且", "但是"], answer: 0,
      why: ["Goed: twee zelfstandige naamwoorden verbind je met 和.", "而 verbindt geen zelfstandige naamwoorden.", "而且 verbindt zinsdelen, geen losse naamwoorden.", "但是 geeft een tegenstelling, en verbindt geen naamwoorden."] },
    { type: "mc", q: "Welke zin klinkt het meest als schrijftaal?",
      options: ["她聪明而美丽。", "她又聪明又漂亮。", "她很聪明，也很漂亮。", "她挺聪明的，还很漂亮。"], answer: 0,
      why: ["Goed: bijv. nw. + 而 + bijv. nw. is formeel en geschreven.", "又……又…… is gewone spreektaal.", "很……也很…… is gewone spreektaal.", "挺……的 en 还 zijn duidelijk spreektaal."] },
    { type: "mc", q: "他不是不想来，___是太忙了。(Het is niet dat hij niet wil komen, hij heeft het gewoon te druk.)",
      options: ["而", "和", "也", "很"], answer: 0,
      why: ["Goed: de vaste vorm is 不是 A，而是 B.", "和 verbindt naamwoorden, geen zinsdelen.", "也 betekent \"ook\" en past niet bij 不是…….", "很 betekent \"heel\" en past hier niet."] },
    { type: "open", q: "Vertaal: \"Mijn vader houdt van vlees, terwijl mijn moeder van groente houdt.\"", model: ["我爸爸喜欢吃肉，而我妈妈喜欢吃菜。", "我爸爸爱吃肉，而妈妈爱吃蔬菜。"],
      tip: "Check: 而 aan het begin van het tweede deel, vóór 妈妈. Niet 而且." },
    { type: "open", q: "Vertaal in schrijftaal: \"Het leven daar is eenvoudig en gelukkig.\"", model: ["那里的生活简单而幸福。", "那儿的生活简单而快乐。"],
      tip: "Check: bijv. nw. + 而 + bijv. nw., zonder 很 ertussen." }
  ],
  review: [
    { type: "mc", q: "\"In de stad is het druk, terwijl het op het platteland rustig is.\"",
      options: ["城市里很热闹，而农村很安静。", "城市里很热闹，而且农村很安静。", "城市里很热闹，农村而很安静。", "城市里而很热闹，农村很安静。"], answer: 0,
      why: ["Goed.", "而且 voegt toe; hier wil je een tegenstelling.", "而 staat vóór het tweede onderwerp.", "而 hoort aan het begin van het tweede deel."] },
    { type: "mc", q: "这个办法简单___有效。(Deze methode is eenvoudig en effectief.)",
      options: ["而", "但是", "和", "而是"], answer: 0,
      why: ["Goed: bijv. nw. + 而 + bijv. nw.", "但是 geeft een tegenstelling; eenvoudig en effectief botsen niet.", "和 verbindt geen twee bijvoeglijke naamwoorden als gezegde.", "而是 hoort bij 不是……而是."] },
    { type: "mc", q: "他会弹钢琴，___会画画。(Hij kan piano spelen, en bovendien tekenen.)",
      options: ["而且", "而", "但是", "而是"], answer: 0,
      why: ["Goed: 而且 = en bovendien.", "而 zou een tegenstelling maken, geen toevoeging.", "但是 geeft een tegenstelling.", "而是 hoort bij 不是……而是."] }
  ]
})
