({
  id: "11", slug: "weichangbu", title: "未尝不", sub: "Voorzichtig positief: best wel, eigenlijk ook",
  canDo: "Je kunt nu in formele tekst voorzichtig iets positiefs zeggen met 未尝不 (\"best wel\"), je houdt het uit elkaar van 未必 en 不是不, en je weet dat je in gesprek 也不是不行 zegt.",
  guess: {
    q: "Je collega schrijft: 这未尝不是一个好办法。Wat bedoelt ze, denk je?",
    options: ["Dat het best een goede oplossing kan zijn.", "Dat het zeker geen goede oplossing is.", "Dat het niet per se een goede oplossing is.", "Dat ze het nooit een goede oplossing heeft gevonden."], answer: 0,
    why: ["Goed: twee ontkenningen (未尝 + 不) maken samen een voorzichtig \"ja\".", "Er staan twee ontkenningen in de zin. Die heffen elkaar op.", "Dat is 未必是. 未尝不是 kantelt juist naar positief.", "未尝 kan \"nooit\" betekenen, maar 未尝不是 is een vaste combinatie voor \"best wel\"."]
  },
  problem: "Soms wil je iets positiefs zeggen, maar niet te stellig. In het Nederlands zeg je \"dat is eigenlijk best een goed idee\" of \"waarom niet?\". In formele tekst gebruik je daarvoor 未尝不 (wèicháng bù): letterlijk \"niet per se niet\". In spreektaal zeg je 也不是不行 of 说不定也挺好.",
  pattern: [
    { l: "onderwerp", v: "这", c: 1 }, { l: "niet per se niet", v: "未尝不", c: 2, key: true },
    { l: "werkwoord", v: "是", c: 4 }, { l: "beoordeling", v: "一个好办法", c: 5 }
  ],
  patternCap: "Onderwerp + 未尝不 + 是/可/能 + ... · vaste vormen: 未尝不是, 未尝不可, 未尝没有 + zn · spreektaal: 也不是不行, 说不定也挺好",
  rules: [
    "未尝不 staat na het onderwerp en vóór het werkwoord: 这未尝不是……",
    "Vaste combinaties: 未尝不是 (best een ...), 未尝不可 (kan best), 未尝不能 (zou best kunnen).",
    "Met een zelfstandig naamwoord zeg je 未尝没有: 未尝没有好处 (heeft best voordelen).",
    "De toon is voorzichtig positief: je stelt iets voor of ziet een goede kant.",
    "未尝 zonder 不 betekent in literaire tekst \"nooit\": 他未尝离开过家乡。"
  ],
  pitfall: "未尝不 en 未必 lijken op elkaar, maar wijzen de andere kant op. 这未尝不是好事 = dit is best een goede zaak. 这未必是好事 = dit is niet per se een goede zaak.",
  examples: [
    { cn: "换个角度看，失败未尝不是一件好事。", py: "Huàn ge jiǎodù kàn, shībài wèicháng bú shì yí jiàn hǎoshì.", nl: "Vanuit een andere hoek bekeken is mislukken best een goede zaak." },
    { cn: "如果双方都同意，推迟会议未尝不可。", py: "Rúguǒ shuāngfāng dōu tóngyì, tuīchí huìyì wèicháng bù kě.", nl: "Als beide partijen akkoord zijn, kan de vergadering best worden uitgesteld." },
    { cn: "适当放慢发展速度，未尝不是一种明智的选择。", py: "Shìdàng fàngmàn fāzhǎn sùdù, wèicháng bú shì yì zhǒng míngzhì de xuǎnzé.", nl: "Het groeitempo wat vertragen is best een verstandige keuze." },
    { cn: "这些批评虽然尖锐，对公司来说却未尝没有好处。", py: "Zhèxiē pīpíng suīrán jiānruì, duì gōngsī lái shuō què wèicháng méiyǒu hǎochu.", nl: "Deze kritiek is scherp, maar voor het bedrijf heeft ze best voordelen." }
  ],
  nuance: [
    { h: "未尝不 of 未必?",
      p: "Beide klinken voorzichtig, maar de richting is tegengesteld. 未尝不 zegt: \"misschien denk je van niet, maar het is best goed\". 未必 zegt: \"misschien denk je van wel, maar het hoeft niet zo te zijn\". Gebruik 未尝不 om iets aan te raden. Gebruik 未必 om te waarschuwen of te twijfelen.",
      ex: [
        { cn: "离开大城市未尝不是好事。", py: "Líkāi dà chéngshì wèicháng bú shì hǎoshì.", nl: "De grote stad verlaten is best een goede zaak." },
        { cn: "离开大城市未必是好事。", py: "Líkāi dà chéngshì wèibì shì hǎoshì.", nl: "De grote stad verlaten is niet per se een goede zaak." }
      ] },
    { h: "未尝不 of 不是不?",
      p: "不是不 corrigeert een misverstand over een feit of een gevoel: \"het is niet zo dat ik niet wil\". Er volgt vaak een echte reden met 是, 只是 of 而是. 未尝不 geeft een beoordeling of een voorstel. 不是不 hoort ook in spreektaal; 未尝不 vooral in schrijftaal.",
      ex: [
        { cn: "我不是不同意，只是有点担心成本。", py: "Wǒ bú shì bù tóngyì, zhǐshì yǒudiǎn dānxīn chéngběn.", nl: "Het is niet zo dat ik het oneens ben, ik maak me alleen wat zorgen over de kosten." },
        { cn: "先小范围试一试，未尝不可。", py: "Xiān xiǎo fànwéi shì yi shì, wèicháng bù kě.", nl: "Het eerst op kleine schaal proberen kan best." }
      ] },
    { h: "Register: wat zeg je in gesprek?",
      p: "未尝不 hoort bij artikelen, rapporten, essays en formele toespraken. In een gewoon gesprek klinkt het boekachtig. Zeg dan 也不是不行, 也可以啊 of 说不定也挺好.",
      ex: [
        { cn: "推迟一周也不是不行。", py: "Tuīchí yì zhōu yě bú shì bù xíng.", nl: "Een week uitstellen kan ook wel. (spreektaal)" },
        { cn: "推迟一周未尝不可。", py: "Tuīchí yì zhōu wèicháng bù kě.", nl: "Een week uitstellen kan best. (schrijftaal)" }
      ] }
  ],
  mistakes: [
    { wrong: "这未尝是一个好办法。", right: "这未尝不是一个好办法。", why: "Zonder 不 betekent 未尝 \"nooit\". Voor \"best wel\" heb je 未尝不 nodig." },
    { wrong: "未尝不这是一个机会。", right: "这未尝不是一个机会。", why: "未尝不 staat na het onderwerp en vóór het werkwoord 是." },
    { wrong: "你别太乐观，这未尝不是好事。", right: "你别太乐观，这未必是好事。", why: "Een waarschuwing vraagt 未必 (niet per se). 未尝不 is juist positief." },
    { wrong: "我觉得这样做未尝不可，所以我反对。", right: "我觉得这样做未尝不可，所以我支持。", why: "未尝不可 betekent \"kan best\". Daar past steun bij, geen bezwaar." }
  ],
  vocab: [
    ["未尝不", "wèicháng bù", "niet per se niet; best wel"], ["未必", "wèibì", "niet per se, niet noodzakelijk"], ["角度", "jiǎodù", "invalshoek, perspectief"],
    ["推迟", "tuīchí", "uitstellen"], ["明智", "míngzhì", "verstandig"], ["适当", "shìdàng", "gepast, in redelijke mate"],
    ["尖锐", "jiānruì", "scherp (van kritiek)"], ["尝试", "chángshì", "proef, poging; proberen"], ["通勤", "tōngqín", "woon-werkverkeer, pendelen"], ["折中", "zhézhōng", "compromis; tussenweg"]
  ],
  dialogue: [
    ["A", "项目进度太慢了，我们是不是该换个供应商？", "Xiàngmù jìndù tài màn le, wǒmen shì bu shì gāi huàn ge gōngyìngshāng?", "Het project loopt te traag. Moeten we niet van leverancier wisselen?"],
    ["B", "换供应商未尝不可，但成本会增加不少。", "Huàn gōngyìngshāng wèicháng bù kě, dàn chéngběn huì zēngjiā bù shǎo.", "Van leverancier wisselen kan best, maar de kosten stijgen flink."],
    ["A", "你的意思是，你不是反对，只是担心成本？", "Nǐ de yìsi shì, nǐ bú shì fǎnduì, zhǐshì dānxīn chéngběn?", "Je bedoelt dat je er niet tegen bent, maar je zorgen maakt over de kosten?"],
    ["B", "对。其实先跟现在的供应商谈一谈，也未尝不是一个办法。", "Duì. Qíshí xiān gēn xiànzài de gōngyìngshāng tán yi tán, yě wèicháng bú shì yí ge bànfǎ.", "Ja. Eerst met de huidige leverancier praten is eigenlijk ook best een optie."],
    ["A", "好，那我明天先联系他们。", "Hǎo, nà wǒ míngtiān xiān liánxì tāmen.", "Goed, dan neem ik morgen eerst contact met ze op."]
  ],
  reading: {
    title: "远程办公的另一面",
    lines: [
      { cn: "疫情期间，许多企业不得不让员工在家办公。", py: "Yìqíng qījiān, xǔduō qǐyè bùdébù ràng yuángōng zài jiā bàngōng.", nl: "Tijdens de pandemie moesten veel bedrijven hun personeel thuis laten werken." },
      { cn: "当时，不少管理者认为这只是一种无奈的选择。", py: "Dāngshí, bù shǎo guǎnlǐzhě rènwéi zhè zhǐ shì yì zhǒng wúnài de xuǎnzé.", nl: "Destijds vonden veel managers dat dit alleen een noodgedwongen keuze was." },
      { cn: "然而，从另一个角度看，这未尝不是一次难得的尝试。", py: "Rán'ér, cóng lìng yí ge jiǎodù kàn, zhè wèicháng bú shì yí cì nándé de chángshì.", nl: "Maar vanuit een andere hoek was het best een zeldzame proef." },
      { cn: "员工节省了通勤时间，企业也降低了办公成本。", py: "Yuángōng jiéshěngle tōngqín shíjiān, qǐyè yě jiàngdīle bàngōng chéngběn.", nl: "Werknemers bespaarden reistijd, en bedrijven verlaagden hun kantoorkosten." },
      { cn: "当然，远程办公也带来了沟通不便等问题。", py: "Dāngrán, yuǎnchéng bàngōng yě dàiláile gōutōng búbiàn děng wèntí.", nl: "Natuurlijk bracht thuiswerken ook problemen mee, zoals lastige communicatie." },
      { cn: "有专家指出，这些问题对企业来说未尝没有好处，因为它们促使管理方式不断改进。", py: "Yǒu zhuānjiā zhǐchū, zhèxiē wèntí duì qǐyè lái shuō wèicháng méiyǒu hǎochu, yīnwèi tāmen cùshǐ guǎnlǐ fāngshì búduàn gǎijìn.", nl: "Experts wijzen erop dat deze problemen bedrijven best voordelen brengen, omdat ze de manier van leidinggeven steeds verbeteren." },
      { cn: "如今，不少企业采用了混合办公模式：员工每周有两三天在家工作。", py: "Rújīn, bù shǎo qǐyè cǎiyòngle hùnhé bàngōng móshì: yuángōng měi zhōu yǒu liǎng-sān tiān zài jiā gōngzuò.", nl: "Nu werken veel bedrijven hybride: medewerkers werken twee à drie dagen per week thuis." },
      { cn: "对很多公司而言，这种折中的做法未尝不是一个明智的选择。", py: "Duì hěn duō gōngsī ér yán, zhè zhǒng zhézhōng de zuòfǎ wèicháng bú shì yí ge míngzhì de xuǎnzé.", nl: "Voor veel bedrijven is deze tussenweg best een verstandige keuze." }
    ],
    questions: [
      { type: "mc", q: "Wat leverde thuiswerken volgens de tekst op?",
        options: ["Minder reistijd en lagere kantoorkosten.", "Betere communicatie tussen collega's.", "Hogere salarissen voor medewerkers.", "Minder werk voor managers."], answer: 0,
        why: ["Goed: 员工节省了通勤时间，企业也降低了办公成本。", "Communicatie werd juist lastiger: 沟通不便.", "Over salarissen staat niets in de tekst.", "Er staat dat leidinggeven moest verbeteren, niet dat het minder werk werd."] },
      { type: "mc", q: "Welk model gebruiken veel bedrijven nu?",
        options: ["Twee à drie dagen per week thuiswerken.", "Altijd thuiswerken.", "Altijd op kantoor werken.", "Eén dag per maand thuiswerken."], answer: 0,
        why: ["Goed: 员工每周有两三天在家工作 (混合办公).", "De tekst noemt een tussenweg (折中), niet volledig thuiswerken.", "Dan zou er geen 混合 (hybride) model zijn.", "Er staat 每周两三天, niet één dag per maand."] },
      { type: "mc", q: "这些问题对企业来说未尝没有好处。Wat bedoelt de schrijver?",
        options: ["De problemen hebben voor bedrijven best ook voordelen.", "De problemen hebben voor bedrijven geen enkel voordeel.", "De problemen hebben niet per se voordelen.", "De problemen hebben nog nooit voordelen gehad."], answer: 0,
        why: ["Goed: 未尝没有 = \"niet per se geen\", dus voorzichtig: er zijn best voordelen.", "Dan negeer je de tweede ontkenning: 未尝 + 没有 maakt het positief.", "Dat zou 未必有好处 zijn: twijfel, geen positieve kijk.", "In deze vaste combinatie betekent 未尝 niet \"nooit\"."] }
    ]
  },
  questions: [
    { type: "mc", q: "这未尝不是一个解决问题的办法。Wat betekent dit?",
      options: ["Dit is best een manier om het probleem op te lossen.", "Dit is zeker geen manier om het probleem op te lossen.", "Dit is niet per se een manier om het probleem op te lossen.", "Dit is nooit een manier geweest om het probleem op te lossen."], answer: 0,
      why: ["Goed: 未尝不是 = best wel, voorzichtig positief.", "Twee ontkenningen maken samen geen sterke ontkenning, maar een voorzichtig \"ja\".", "Dat is de betekenis van 未必是.", "未尝不是 is een vaste vorm; hier gaat het niet om \"nooit\"."] },
    { type: "mc", q: "你的建议很有道理，我们先试一个月也___。(Je voorstel is zinnig; een maand proberen kan best.)",
      options: ["未尝不可", "未必可以", "未尝可以", "不可不"], answer: 0,
      why: ["Goed: 未尝不可 = kan best.", "未必可以 = kan niet per se. Dat past niet bij 很有道理.", "Zonder 不 betekent 未尝 \"nooit\". 未尝可以 bestaat niet als vaste vorm.", "不可不 = moet beslist. Dat is te sterk en past niet aan het eind."] },
    { type: "order", q: "Zet in de goede volgorde: \"Dit is best een goede kans.\"",
      tokens: [["这", "zhè"], ["未尝不", "wèicháng bù"], ["是", "shì"], ["一个", "yí ge"], ["好机会", "hǎo jīhuì"]] },
    { type: "mc", q: "你别高兴得太早，这___是好事。(Wees niet te snel blij, dit is niet per se goed.)",
      options: ["未必", "未尝不", "不是不", "未尝"], answer: 0,
      why: ["Goed: een waarschuwing vraagt 未必 (niet per se).", "未尝不是好事 = best goed. Dat botst met 别高兴得太早.", "不是不是好事 is geen correcte zin.", "未尝是 betekent \"nooit geweest\" en past hier niet."] },
    { type: "mc", q: "你误会了，我___喜欢这份工作，而是太累了。(Je begrijpt het verkeerd: het is niet dat ik dit werk niet leuk vind, ik ben alleen te moe.)",
      options: ["不是不", "未尝不", "未必", "不必"], answer: 0,
      why: ["Goed: 不是不 ... 而是 corrigeert een misverstand over jezelf.", "而是 vraagt 不是 ervoor. 未尝不 geeft een beoordeling, geen correctie.", "未必喜欢 = niet per se leuk vinden. Dat corrigeert niets.", "不必 = het hoeft niet. Dat past niet bij 喜欢."] },
    { type: "mc", q: "Welke zin is de spreektaal-versie van 推迟一周未尝不可？",
      options: ["推迟一周也不是不行。", "推迟一周可不行。", "推迟一周不太行。", "推迟一周未必行。"], answer: 0,
      why: ["Goed: 也不是不行 = kan ook wel, net als 未尝不可.", "可不行 = dat kan echt niet. Dat is het tegendeel.", "不太行 = gaat niet echt. Dat is negatief.", "未必行 = lukt niet per se: twijfel, en nog steeds schrijftaal."] },
    { type: "fill", q: "换个角度想，这次失败___不是一件好事。(Vanuit een andere hoek bekeken is deze mislukking best een goede zaak.)", answers: ["未尝"],
      hint: "Welk woord maakt met 不 samen \"niet per se niet\"?", why: "未尝 + 不是 = best wel. Twee ontkenningen geven een voorzichtig positief oordeel." },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["未尝不这是一个办法。", "这未尝不是一个办法。", "这样做未尝不可。", "这对我们未尝没有好处。"], answer: 0,
      why: ["Goed gezien: 未尝不 hoort na het onderwerp 这, vóór 是.", "Deze zin klopt: onderwerp + 未尝不 + 是.", "Deze zin klopt: 未尝不可 is een vaste vorm.", "Deze zin klopt: 未尝没有 + zelfstandig naamwoord."] },
    { type: "order", q: "Zet in de goede volgorde: \"De vergadering wat uitstellen kan best.\"",
      tokens: [["适当", "shìdàng"], ["推迟", "tuīchí"], ["会议", "huìyì"], ["未尝不可", "wèicháng bù kě"]] },
    { type: "mc", q: "他一生未尝离开过故乡。Wat betekent 未尝 hier?",
      options: ["Nooit: hij heeft zijn geboortestreek nooit verlaten.", "Best wel: hij heeft zijn geboortestreek best verlaten.", "Niet per se: hij heeft zijn geboortestreek misschien verlaten.", "Vaak: hij heeft zijn geboortestreek vaak verlaten."], answer: 0,
      why: ["Goed: zonder 不 betekent 未尝 + werkwoord + 过 in literaire tekst \"nooit\".", "\"Best wel\" hoort bij 未尝不. Hier staat geen 不.", "\"Niet per se\" is 未必.", "未尝 is een ontkenning, geen woord voor frequentie."] },
    { type: "open", q: "Vertaal in formeel Chinees: \"Even pauze nemen is best een verstandige keuze.\"",
      model: ["暂停一下未尝不是一个明智的选择。", "适当休息未尝不是一种明智的选择。"],
      tip: "Check: 未尝不 staat vóór 是, en je gebruikt 不 (niet 没)." },
    { type: "open", q: "Zeg dit in gewone spreektaal: 这样做未尝不可。",
      model: ["这样做也不是不行。", "这样做也可以啊。", "这样做也行。"],
      tip: "Check: de betekenis blijft \"kan best\", maar zonder het boekachtige 未尝." }
  ],
  review: [
    { type: "mc", q: "先在一个城市试点，未尝不是一个稳妥的办法。Wat betekent dit?",
      options: ["Eerst in één stad testen is best een veilige aanpak.", "Eerst in één stad testen is zeker geen veilige aanpak.", "Eerst in één stad testen is niet per se een veilige aanpak.", "Eerst in één stad testen is nooit een veilige aanpak geweest."], answer: 0,
      why: ["Goed: 未尝不是 = best wel, voorzichtig positief.", "Twee ontkenningen geven samen een voorzichtig \"ja\".", "Dat zou 未必是 zijn.", "未尝不是 is een vaste vorm voor \"best wel\", niet \"nooit\"."] },
    { type: "mc", q: "价格低___质量好，购买前要仔细比较。(Een lage prijs betekent niet per se goede kwaliteit.)",
      options: ["未必", "未尝不", "不是不", "未尝"], answer: 0,
      why: ["Goed: 未必 = niet per se; het past bij een waarschuwing.", "未尝不 is positief en past niet bij de waarschuwing.", "不是不 corrigeert een misverstand en past hier niet in de zin.", "未尝 zonder 不 betekent \"nooit\"."] },
    { type: "mc", q: "Welke zin zeg je in een gewoon gesprek voor 让孩子自己做决定未尝不可？",
      options: ["让孩子自己决定也不是不行。", "让孩子自己决定可不行。", "让孩子自己决定不太好。", "让孩子自己决定未必好。"], answer: 0,
      why: ["Goed: 也不是不行 = kan ook wel.", "可不行 = echt niet. Dat is het tegendeel.", "不太好 is negatief.", "未必好 is twijfel, geen voorzichtig \"ja\"."] }
  ]
})
