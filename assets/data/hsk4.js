// HSK 4 lessons. Vocabulary is level-appropriate practice, not a certified official HSK 3.0 list.
// Question types: mc (answer = index), order (tokens in the right order), open (self-check with model answers).
// "review" questions never appear in the lesson itself; they come back on the review page.
window.HSK = window.HSK || {};
window.HSK.hsk4 = {
  level: "HSK 4", dir: "hsk4",
  lessons: [
    {
      id: "01", slug: "shide", title: "De 是……的-zin", sub: "Wanneer, waar en hoe het gebeurde",
      canDo: "Je kunt nu vragen en vertellen wanneer, waar, hoe of met wie iets in het verleden gebeurde, met 是……的.",
      guess: {
        q: "Je bent gisteren aangekomen. De nadruk ligt op \"gisteren\". Welke zin klopt, denk je?",
        options: ["我是昨天到的。", "我是昨天到了。", "我昨天是到的。", "我是到昨天的。"], answer: 0,
        why: ["Goed: 是 vóór het detail (昨天), 的 aan het eind.", "In een 是……的-zin gebruik je geen 了.", "是 staat direct vóór het detail dat je benadrukt, niet vóór het werkwoord.", "Het detail (昨天) staat vóór het werkwoord, niet erachter."]
      },
      problem: "Iemand weet al dat je naar China bent geweest. Hij wil nu weten wanneer, hoe of met wie. Het gebeurde dus al. Je benadrukt alleen het detail. Daarvoor gebruik je 是 (shì) ... 的 (de).",
      pattern: [
        { l: "wie", v: "我", c: 1 }, { l: "是", v: "是", c: 2, key: true }, { l: "detail", v: "坐火车", c: 3 },
        { l: "werkwoord", v: "来", c: 4 }, { l: "的", v: "的", c: 5, key: true }
      ],
      patternCap: "Wie + 是 + wanneer / waar / hoe / met wie + werkwoord + 的. Het gebeurde al; jij benadrukt het detail.",
      rules: [
        "是 staat direct vóór het detail dat je benadrukt.",
        "的 staat aan het eind van de zin.",
        "In een bevestigende zin mag 是 weg: 我昨天来的。",
        "Ontkennen doe je met 不是: 我不是坐飞机来的。"
      ],
      pitfall: "Gebruik geen 了 in een 是……的-zin. 我是昨天到了 is fout. Zeg 我是昨天到的。",
      examples: [
        { cn: "你是什么时候来的？", py: "Nǐ shì shénme shíhou lái de?", nl: "Wanneer ben je gekomen?" },
        { cn: "我是坐火车来的。", py: "Wǒ shì zuò huǒchē lái de.", nl: "Ik ben met de trein gekomen." },
        { cn: "这本书是在北京买的。", py: "Zhè běn shū shì zài Běijīng mǎi de.", nl: "Dit boek is in Beijing gekocht." },
        { cn: "我不是一个人去的，是跟朋友一起去的。", py: "Wǒ bú shì yí ge rén qù de, shì gēn péngyou yìqǐ qù de.", nl: "Ik ben niet alleen gegaan, ik ben met een vriend gegaan." }
      ],
      vocab: [
        ["是……的", "shì……de", "(benadrukt wanneer, waar, hoe)"], ["火车", "huǒchē", "trein"], ["飞机", "fēijī", "vliegtuig"],
        ["风景", "fēngjǐng", "landschap, uitzicht"], ["路上", "lù shang", "onderweg"], ["毕业", "bìyè", "afstuderen"],
        ["认识", "rènshi", "(leren) kennen"], ["网上", "wǎng shang", "online"], ["地铁", "dìtiě", "metro"], ["自行车", "zìxíngchē", "fiets"]
      ],
      dialogue: [
        ["A", "你是什么时候到上海的？", "Nǐ shì shénme shíhou dào Shànghǎi de?", "Wanneer ben je in Shanghai aangekomen?"],
        ["B", "我是上个星期五到的。", "Wǒ shì shàng ge xīngqīwǔ dào de.", "Vorige week vrijdag."],
        ["A", "你是坐飞机来的吗？", "Nǐ shì zuò fēijī lái de ma?", "Ben je met het vliegtuig gekomen?"],
        ["B", "不是，我是坐火车来的。我想看看路上的风景。", "Bú shì, wǒ shì zuò huǒchē lái de. Wǒ xiǎng kànkan lù shang de fēngjǐng.", "Nee, met de trein. Ik wilde onderweg het landschap zien."],
        ["A", "你是一个人来的吗？", "Nǐ shì yí ge rén lái de ma?", "Ben je alleen gekomen?"],
        ["B", "不是，我是跟我女朋友一起来的。", "Bú shì, wǒ shì gēn wǒ nǚpéngyou yìqǐ lái de.", "Nee, ik ben samen met mijn vriendin gekomen."]
      ],
      questions: [
        { type: "mc", q: "\"Ik ben niet met de bus gekomen.\" Welke zin klopt?",
          options: ["我不是坐公共汽车来的。", "我是不坐公共汽车来的。", "我没是坐公共汽车来的。", "我不是坐公共汽车来了。"], answer: 0,
          why: ["Goed: 不 staat vóór 是.", "Je ontkent 是, niet het detail: 不 hoort vóór 是.", "是 ontken je met 不, nooit met 没.", "In een 是……的-zin gebruik je 的, geen 了."] },
        { type: "order", q: "Zet in de goede volgorde: \"Ik heb hem vorig jaar leren kennen.\"",
          tokens: [["我", "wǒ"], ["是", "shì"], ["去年", "qùnián"], ["认识他", "rènshi tā"], ["的", "de"]] },
        { type: "mc", q: "Je collega is op vakantie geweest. Je vraagt met wie hij ging. Wat zeg je?",
          options: ["你是跟谁一起去的？", "你跟谁一起去？", "你是跟谁一起去了？", "你跟谁是一起去的？"], answer: 0,
          why: ["Goed: het gebeurde al, en je vraagt naar een detail.", "Zonder 是……的 klinkt dit als een plan: met wie ga je?", "In een 是……的-zin gebruik je geen 了.", "是 staat vóór het detail (跟谁), niet erachter."] },
        { type: "mc", q: "\"Waar heb je deze jas gekocht?\" 这件衣服你是在哪儿买___？",
          options: ["的", "了", "过", "着"], answer: 0,
          why: ["Goed: 是 ... 的 hoort bij elkaar.", "Met 是 vóór het detail sluit je af met 的, niet met 了.", "过 gaat over ervaring, niet over een detail van één keer.", "着 betekent \"bezig / in een toestand\"."] },
        { type: "open", q: "Vertel hoe je vandaag naar je werk of school bent gegaan.", model: ["我是骑自行车去公司的。", "我是坐地铁来的。", "我是走路去学校的。"],
          tip: "Check: staat 是 vóór hoe je ging, staat 的 aan het eind, en is er geen 了?" }
      ],
      review: [
        { type: "mc", q: "我是在网上认识她的。Wat benadruk je hier?",
          options: ["Waar ik haar heb leren kennen.", "Dat ik haar ga leren kennen.", "Dat ik haar nog niet ken.", "Wanneer ik haar heb leren kennen."], answer: 0,
          why: ["Goed: 是 staat vóór 在网上, dus de plaats (online) krijgt de nadruk.", "是……的 gaat over iets wat al gebeurd is, niet over de toekomst.", "Er staat geen ontkenning in de zin.", "在网上 is een plaats (online), geen tijd."] },
        { type: "mc", q: "\"In welk jaar is zij afgestudeerd?\"",
          options: ["她是哪年毕业的？", "她是哪年毕业了？", "她哪年是毕业的？", "她是毕业哪年的？"], answer: 0,
          why: ["Goed.", "Geen 了 in een 是……的-zin.", "是 staat vóór het detail (哪年), niet vóór het werkwoord.", "Het detail (哪年) komt vóór het werkwoord."] }
      ]
    },
    {
      id: "02", slug: "lian", title: "连……都 / 也", sub: "Zelfs ... (niet)",
      canDo: "Je kunt nu met 连 ... 都 / 也 een extreem geval benadrukken: zelfs dit, zelfs hij.",
      guess: {
        q: "他连水都没喝。Wat betekent dit, denk je?",
        options: ["Hij heeft zelfs geen water gedronken.", "Hij heeft alleen water gedronken.", "Hij heeft al het water opgedronken.", "Hij heeft ook water gedronken."], answer: 0,
        why: ["Goed: 连 ... 都 + 没 = zelfs niet.", "连 betekent \"zelfs\", niet \"alleen\".", "都 betekent hier niet \"alles\". En 没 zegt dat hij niet dronk.", "Er staat 没: hij heeft het niet gedronken."]
      },
      problem: "Soms wil je laten zien hoe extreem iets is. \"Hij had het zo druk dat hij zelfs niet at.\" Je noemt dan het meest onverwachte geval. In het Chinees zet je 连 (lián) vóór dat geval. Daarna komt 都 of 也.",
      pattern: [
        { l: "wie", v: "他", c: 1 }, { l: "连", v: "连", c: 2, key: true }, { l: "geval", v: "饭", c: 3 },
        { l: "都 / 也", v: "都", c: 5, key: true }, { l: "werkwoord", v: "没吃", c: 4 }
      ],
      patternCap: "Wie + 连 + extreem geval + 都 / 也 + (没 / 不) + werkwoord · Ook: 连 + wie + 都 + werkwoord",
      rules: [
        "Na 连 komt het meest onverwachte geval.",
        "都 of 也 staat direct vóór het werkwoord, of vóór 不 / 没.",
        "连 kan ook vóór het onderwerp staan: 连孩子都知道。",
        "Vaak met een ontkenning: 他连一分钟都没休息。"
      ],
      pitfall: "Vergeet 都 of 也 niet. 他连饭没吃 is fout. Zeg 他连饭都没吃。",
      examples: [
        { cn: "连孩子都知道这件事。", py: "Lián háizi dōu zhīdào zhè jiàn shì.", nl: "Zelfs kinderen weten dit." },
        { cn: "他忙得连饭都没吃。", py: "Tā máng de lián fàn dōu méi chī.", nl: "Hij had het zo druk dat hij niet eens gegeten heeft." },
        { cn: "我连一个字也看不懂。", py: "Wǒ lián yí ge zì yě kàn bu dǒng.", nl: "Ik begrijp er niet eens één karakter van." },
        { cn: "这个问题连老师也不会回答。", py: "Zhège wèntí lián lǎoshī yě bú huì huídá.", nl: "Zelfs de leraar kan deze vraag niet beantwoorden." }
      ],
      vocab: [
        ["连", "lián", "(zelfs ...)"], ["加班", "jiābān", "overwerken"], ["周末", "zhōumò", "weekend"],
        ["邻居", "línjū", "buurman, buren"], ["打招呼", "dǎ zhāohu", "groeten"], ["辛苦", "xīnkǔ", "zwaar, vermoeiend"],
        ["老板", "lǎobǎn", "baas"], ["休息", "xiūxi", "uitrusten"], ["回答", "huídá", "antwoorden"], ["别提了", "bié tí le", "hou op (erover)"]
      ],
      dialogue: [
        ["A", "你最近怎么样？", "Nǐ zuìjìn zěnmeyàng?", "Hoe gaat het de laatste tijd?"],
        ["B", "别提了，天天加班，连周末都要工作。", "Bié tí le, tiāntiān jiābān, lián zhōumò dōu yào gōngzuò.", "Hou op. Elke dag overwerken. Zelfs in het weekend moet ik werken."],
        ["A", "那你有时间休息吗？", "Nà nǐ yǒu shíjiān xiūxi ma?", "Heb je dan nog tijd om uit te rusten?"],
        ["B", "没有。我连跟邻居打招呼的时间都没有。", "Méiyǒu. Wǒ lián gēn línjū dǎ zhāohu de shíjiān dōu méiyǒu.", "Nee. Ik heb niet eens tijd om de buren te groeten."],
        ["A", "太辛苦了！你得跟老板说一说。", "Tài xīnkǔ le! Nǐ děi gēn lǎobǎn shuō yi shuō.", "Wat zwaar! Je moet het eens met je baas bespreken."]
      ],
      questions: [
        { type: "mc", q: "\"Zelfs mijn moeder weet het.\"",
          options: ["连我妈妈都知道。", "连我妈妈知道。", "我妈妈连都知道。", "连都我妈妈知道。"], answer: 0,
          why: ["Goed: 连 + wie + 都 + werkwoord.", "Na 连 ... moet 都 of 也 komen.", "Na 连 komt eerst het geval (我妈妈), daarna pas 都.", "都 staat vóór het werkwoord, niet direct na 连."] },
        { type: "mc", q: "\"Hij was zo moe dat hij zonder te eten ging slapen.\" 他太累了，连饭___没吃就睡了。",
          options: ["都", "才", "就", "很"], answer: 0,
          why: ["Goed: 连 ... 都 + 没.", "连 vraagt om 都 of 也. 才 (\"pas\") past niet bij 连.", "就 hoort niet bij 连; het staat al later in de zin.", "很 is \"heel\" en past niet na 连 ... ."] },
        { type: "order", q: "Zet in de goede volgorde: \"Zelfs de leraar weet het niet.\"",
          tokens: [["连", "lián"], ["老师", "lǎoshī"], ["也", "yě"], ["不", "bù"], ["知道", "zhīdào"]] },
        { type: "mc", q: "Wat betekent: 这个汉字连我女儿都认识。",
          options: ["Zelfs mijn dochter kent dit karakter.", "Alleen mijn dochter kent dit karakter.", "Mijn dochter kent alle karakters.", "Zelfs mijn dochter kent dit karakter niet."], answer: 0,
          why: ["Goed: 连 + 我女儿 + 都 = zelfs mijn dochter.", "连 betekent \"zelfs\", niet \"alleen\".", "都 betekent hier niet \"alle\"; het gaat om dit ene karakter.", "Er staat geen 不 of 没 in de zin."] },
        { type: "open", q: "Zeg dat je zo moe bent dat je niet eens wilt eten.", model: ["我累得连饭都不想吃。", "我太累了，连饭也不想吃。"],
          tip: "Check: 连 + geval (饭), en dan 都 of 也 direct vóór 不想." }
      ],
      review: [
        { type: "mc", q: "\"Hij heeft vandaag niet eens één glas water gedronken.\"",
          options: ["他今天连一杯水都没喝。", "他今天连一杯水没喝。", "他今天一杯水连都没喝。", "他今天连一杯水都没喝了。"], answer: 0,
          why: ["Goed.", "Na 连 ... moet 都 of 也 komen.", "连 staat vóór het geval (一杯水), niet erachter.", "Met 没 valt 了 weg."] },
        { type: "mc", q: "\"Zo'n makkelijke vraag kunnen zelfs basisschoolkinderen.\" 这么简单的问题，___小学生都会。",
          options: ["连", "也", "就", "只"], answer: 0,
          why: ["Goed: 连 + wie + 都.", "也 staat vóór het werkwoord, niet vóór 小学生.", "就 past niet bij 都 hier en betekent geen \"zelfs\".", "只 betekent \"alleen\": dat is het tegenovergestelde."] }
      ]
    },
    {
      id: "03", slug: "budan", title: "不但……而且", sub: "Niet alleen ... maar ook",
      canDo: "Je kunt nu twee eigenschappen of feiten opstapelen met 不但 ... 而且.",
      guess: {
        q: "\"Ze is niet alleen slim, maar ook hartelijk.\" Welke zin klopt, denk je?",
        options: ["她不但聪明，而且很热情。", "她不但聪明，但是很热情。", "她而且聪明，不但很热情。", "不但她聪明，而且很热情。"], answer: 0,
        why: ["Goed: wie + 不但 A, 而且 B.", "但是 is \"maar\" voor een tegenstelling. Hier is er geen tegenstelling.", "不但 komt eerst, 而且 in de tweede helft.", "Bij één onderwerp staat dat onderwerp vóór 不但."]
      },
      problem: "Je wilt twee dingen opnoemen. Het tweede gaat verder dan het eerste. In het Nederlands: \"niet alleen ..., maar ook ...\". In het Chinees gebruik je 不但 (búdàn) ... 而且 (érqiě) ....",
      pattern: [
        { l: "wie", v: "他", c: 1 }, { l: "不但", v: "不但", c: 2, key: true }, { l: "A", v: "会说汉语", c: 4 },
        { l: "而且", v: "而且", c: 5, key: true }, { l: "B", v: "还会写汉字", c: 3 }
      ],
      patternCap: "Eén onderwerp: wie + 不但 A，而且 (还 / 也) B · Twee onderwerpen: 不但 wie1 A，而且 wie2 也 B",
      rules: [
        "Eén onderwerp: dat staat vóór 不但.",
        "Twee onderwerpen: 不但 staat vóór het eerste onderwerp.",
        "Na 而且 komt vaak nog 还 of 也.",
        "B gaat verder dan A: het is meer of sterker."
      ],
      pitfall: "Gebruik geen 但是 in de tweede helft. 不但 ... 但是 is fout, want het gaat niet om een tegenstelling.",
      examples: [
        { cn: "这家饭馆的菜不但好吃，而且很便宜。", py: "Zhè jiā fànguǎn de cài búdàn hǎochī, érqiě hěn piányi.", nl: "Het eten in dit restaurant is niet alleen lekker, maar ook goedkoop." },
        { cn: "他不但会说汉语，而且还会写汉字。", py: "Tā búdàn huì shuō Hànyǔ, érqiě hái huì xiě Hànzì.", nl: "Hij kan niet alleen Chinees spreken, maar ook karakters schrijven." },
        { cn: "不但我喜欢这个电影，而且我爸爸也喜欢。", py: "Búdàn wǒ xǐhuan zhège diànyǐng, érqiě wǒ bàba yě xǐhuan.", nl: "Niet alleen ik vind deze film leuk, mijn vader ook." }
      ],
      vocab: [
        ["不但", "búdàn", "(niet alleen ...)"], ["而且", "érqiě", "(maar ook ...)"], ["聪明", "cōngming", "slim"],
        ["热情", "rèqíng", "hartelijk"], ["幽默", "yōumò", "grappig, humoristisch"], ["收入", "shōurù", "inkomen"],
        ["同事", "tóngshì", "collega"], ["耐心", "nàixīn", "geduld; geduldig"], ["适合", "shìhé", "passen bij"], ["修", "xiū", "repareren"]
      ],
      dialogue: [
        ["A", "你的新工作怎么样？", "Nǐ de xīn gōngzuò zěnmeyàng?", "Hoe is je nieuwe baan?"],
        ["B", "很好！不但离家近，而且收入也不错。", "Hěn hǎo! Búdàn lí jiā jìn, érqiě shōurù yě búcuò.", "Goed! Hij is niet alleen dicht bij huis, het salaris is ook prima."],
        ["A", "同事们呢？", "Tóngshìmen ne?", "En je collega's?"],
        ["B", "他们不但很热情，而且很有耐心。", "Tāmen búdàn hěn rèqíng, érqiě hěn yǒu nàixīn.", "Ze zijn niet alleen hartelijk, maar ook heel geduldig."],
        ["A", "听起来这个工作很适合你。", "Tīng qilai zhège gōngzuò hěn shìhé nǐ.", "Het klinkt alsof deze baan goed bij je past."]
      ],
      questions: [
        { type: "mc", q: "\"Hij is niet alleen grappig, maar ook slim.\"",
          options: ["他不但幽默，而且很聪明。", "他不但幽默，但是很聪明。", "不但他幽默，而且很聪明。", "他而且幽默，不但很聪明。"], answer: 0,
          why: ["Goed: één onderwerp vóór 不但.", "但是 is voor een tegenstelling; hier gebruik je 而且.", "Bij één onderwerp staat dat onderwerp vóór 不但.", "不但 komt eerst, 而且 in de tweede helft."] },
        { type: "mc", q: "\"Niet alleen ik wil gaan, mijn vriend ook.\"",
          options: ["不但我想去，而且我朋友也想去。", "不但我想去，而且也我朋友想去。", "不但我想去，但是我朋友也想去。", "我想去不但，而且我朋友也想去。"], answer: 0,
          why: ["Goed: twee onderwerpen, dus 不但 vóór het eerste onderwerp.", "也 staat ná het onderwerp, vlak vóór het werkwoord.", "Na 不但 komt 而且, niet 但是.", "不但 staat vooraan, niet aan het eind van de eerste helft."] },
        { type: "order", q: "Zet in de goede volgorde: \"Hij kan niet alleen autorijden, maar ook auto's repareren.\"",
          tokens: [["他", "tā"], ["不但", "búdàn"], ["会开车", "huì kāichē"], ["而且", "érqiě"], ["还会修车", "hái huì xiū chē"]] },
        { type: "mc", q: "\"Dit huis is niet alleen groot, het ligt ook dicht bij het metrostation.\" 这个房子不但很大，___离地铁站很近。",
          options: ["而且", "但是", "因为", "所以"], answer: 0,
          why: ["Goed: 不但 ... 而且.", "但是 is voor een tegenstelling, en past niet bij 不但.", "因为 geeft een reden. Groot zijn is geen reden voor een korte afstand.", "所以 geeft een gevolg. Dicht bij de metro is geen gevolg van groot zijn."] },
        { type: "open", q: "Beschrijf een vriend of collega met 不但 ... 而且.", model: ["我的朋友不但很聪明，而且很幽默。", "小王不但会做饭，而且做得很好吃。"],
          tip: "Check: staat het onderwerp vóór 不但, en gebruik je 而且 (niet 但是)?" }
      ],
      review: [
        { type: "mc", q: "\"Deze telefoon is niet alleen duur, maar ook zwaar.\"",
          options: ["这个手机不但很贵，而且很重。", "这个手机不但很贵，但是很重。", "不但这个手机很贵，而且很重。", "这个手机而且很贵，不但很重。"], answer: 0,
          why: ["Goed.", "Na 不但 komt 而且, niet 但是.", "Bij één onderwerp staat dat onderwerp vóór 不但.", "不但 komt in de eerste helft, 而且 in de tweede."] },
        { type: "mc", q: "\"Niet alleen hij kan zingen, zijn zus ook.\" ___他会唱歌，而且他妹妹也会唱。",
          options: ["不但", "但是", "虽然", "而且"], answer: 0,
          why: ["Goed: twee onderwerpen, dus 不但 vóór het eerste.", "但是 staat niet aan het begin van de eerste helft.", "虽然 hoort bij 但是, niet bij 而且.", "而且 staat al in de tweede helft."] }
      ]
    },
    {
      id: "04", slug: "jishi", title: "即使……也", sub: "Zelfs als ..., toch ...",
      canDo: "Je kunt nu met 即使 ... 也 zeggen dat iets doorgaat, zelfs in een moeilijk geval.",
      guess: {
        q: "即使下雨，我也去。Wat betekent dit, denk je?",
        options: ["Zelfs als het regent, ga ik.", "Omdat het regent, ga ik.", "Als het regent, ga ik niet.", "Het regent, maar ik ga toch."], answer: 0,
        why: ["Goed: 即使 ... 也 = zelfs als ..., toch.", "即使 geeft geen reden. Dat zou 因为 zijn.", "Er staat geen ontkenning: 我也去 = ik ga toch.", "Dan regent het echt. Dat is 虽然 ... 但是. Bij 即使 is het een \"stel dat\"."]
      },
      problem: "Je wilt zeggen dat iets doorgaat, wat er ook gebeurt. \"Zelfs als het regent, ga ik.\" Het geval is vaak nog niet waar. Je stelt het je alleen voor. Daarvoor gebruik je 即使 (jíshǐ) ... 也 (yě).",
      pattern: [
        { l: "即使", v: "即使", c: 2, key: true }, { l: "geval", v: "下雨", c: 3 }, { l: "wie", v: "我", c: 1 },
        { l: "也", v: "也", c: 5, key: true }, { l: "gevolg", v: "去", c: 4 }
      ],
      patternCap: "即使 + geval，wie + 也 + gevolg. Het geval is meestal een veronderstelling: \"stel dat\".",
      rules: [
        "即使 staat vóór het geval: aan het begin, of na het onderwerp.",
        "也 staat in de tweede helft, na het onderwerp en vóór het werkwoord.",
        "Het geval is vaak niet echt. Het is een \"stel dat\".",
        "Is het wél echt zo? Gebruik dan 虽然 ... 但是."
      ],
      pitfall: "也 staat nooit vóór het onderwerp. 即使下雨，也我去 is fout. Zeg 即使下雨，我也去。",
      examples: [
        { cn: "即使明天下雨，我们也去爬山。", py: "Jíshǐ míngtiān xià yǔ, wǒmen yě qù páshān.", nl: "Zelfs als het morgen regent, gaan we de berg op." },
        { cn: "即使你不说，我也知道。", py: "Jíshǐ nǐ bù shuō, wǒ yě zhīdào.", nl: "Zelfs als je het niet zegt, weet ik het." },
        { cn: "即使工作再忙，他也每天运动。", py: "Jíshǐ gōngzuò zài máng, tā yě měi tiān yùndòng.", nl: "Hoe druk zijn werk ook is, hij sport elke dag." }
      ],
      vocab: [
        ["即使", "jíshǐ", "(zelfs als ...)"], ["哪怕", "nǎpà", "(zelfs als ...)"], ["比赛", "bǐsài", "wedstrijd"],
        ["参加", "cānjiā", "meedoen aan"], ["对方", "duìfāng", "tegenpartij"], ["厉害", "lìhai", "sterk, geweldig"],
        ["输", "shū", "verliezen"], ["放弃", "fàngqì", "opgeven"], ["坚持", "jiānchí", "volhouden"], ["失败", "shībài", "mislukken"]
      ],
      dialogue: [
        ["A", "明天的比赛你还参加吗？听说会下大雨。", "Míngtiān de bǐsài nǐ hái cānjiā ma? Tīngshuō huì xià dà yǔ.", "Doe je morgen nog mee aan de wedstrijd? Ik hoor dat het hard gaat regenen."],
        ["B", "参加。即使下大雨，我也要去。", "Cānjiā. Jíshǐ xià dà yǔ, wǒ yě yào qù.", "Ja. Zelfs als het hard regent, ga ik."],
        ["A", "可是对方很厉害，你们可能会输。", "Kěshì duìfāng hěn lìhai, nǐmen kěnéng huì shū.", "Maar de tegenstander is sterk. Jullie verliezen misschien."],
        ["B", "即使输了，我们也不会放弃。", "Jíshǐ shū le, wǒmen yě bú huì fàngqì.", "Zelfs als we verliezen, geven we niet op."],
        ["A", "好，那我去给你们加油！", "Hǎo, nà wǒ qù gěi nǐmen jiāyóu!", "Goed, dan kom ik jullie aanmoedigen!"]
      ],
      questions: [
        { type: "mc", q: "\"Zelfs als hij het weet, zal hij het niet zeggen.\"",
          options: ["即使他知道，他也不会说。", "即使他知道，他不会说也。", "即使他知道，也他不会说。", "即使他知道，所以他不会说。"], answer: 0,
          why: ["Goed: 也 na het onderwerp, vóór 不会.", "也 staat vóór het werkwoord, nooit aan het eind.", "也 staat ná het onderwerp, niet ervoor.", "即使 gaat samen met 也, niet met 所以."] },
        { type: "mc", q: "\"Hoe druk je het ook hebt, je moet eten.\" ___再忙，你也要吃饭。",
          options: ["即使", "因为", "虽然", "只要"], answer: 0,
          why: ["Goed: 即使 ... 也 = zelfs als.", "因为 geeft een reden en past niet bij 也.", "虽然 gaat over iets wat echt zo is, en past niet bij 再忙.", "只要 betekent \"als maar\" en hoort bij 就."] },
        { type: "order", q: "Zet in de goede volgorde: \"Zelfs als jij niet gaat, ga ik wel.\"",
          tokens: [["即使", "jíshǐ"], ["你不去", "nǐ bú qù"], ["我", "wǒ"], ["也", "yě"], ["要去", "yào qù"]] },
        { type: "mc", q: "Wat betekent: 哪怕很贵，我也要买。",
          options: ["Zelfs als het duur is, wil ik het kopen.", "Omdat het duur is, wil ik het kopen.", "Als het duur is, koop ik het niet.", "Het is niet duur, dus ik koop het."], answer: 0,
          why: ["Goed: 哪怕 ... 也 betekent hetzelfde als 即使 ... 也.", "哪怕 geeft geen reden.", "Er staat geen ontkenning: 我也要买.", "很贵 betekent \"heel duur\", niet \"niet duur\"."] },
        { type: "open", q: "Zeg iets wat je zeker blijft doen, met 即使 ... 也.", model: ["即使很累，我也每天学汉语。", "即使下雨，我也骑自行车上班。"],
          tip: "Check: staat 也 ná het onderwerp van de tweede helft, vlak vóór het werkwoord?" }
      ],
      review: [
        { type: "mc", q: "\"Zelfs als je het me vraagt, zeg ik het niet.\"",
          options: ["即使你问我，我也不说。", "即使你问我，也我不说。", "即使你问我，我不说也。", "即使你问我，我就不说。"], answer: 0,
          why: ["Goed.", "也 staat ná het onderwerp (我).", "也 staat vóór het werkwoord, niet aan het eind.", "就 maakt er \"als ..., dan\" van: als je het vraagt, zeg ik het niet."] },
        { type: "mc", q: "\"Zelfs als het mislukt, moeten we doorzetten.\" 即使失败了，我们___要坚持。",
          options: ["也", "就", "才", "所以"], answer: 0,
          why: ["Goed: 即使 ... 也.", "就 betekent \"dan\": het mislukt, dan zetten we door. Dat is geen \"zelfs als\".", "才 betekent \"pas\": dat past hier niet.", "所以 staat vóór het onderwerp en hoort bij 因为."] }
      ]
    },
    {
      id: "05", slug: "chule", title: "除了……以外", sub: "Behalve, of naast",
      canDo: "Je kunt nu met 除了 ... 以外 zeggen wie of wat erbuiten valt (都), of wat er nog bij komt (还 / 也).",
      guess: {
        q: "除了小王以外，我们都去了。Wie is er gegaan, denk je?",
        options: ["Iedereen, behalve Xiao Wang.", "Alleen Xiao Wang.", "Iedereen, en Xiao Wang ook.", "Niemand."], answer: 0,
        why: ["Goed: 除了 ... 都 = behalve. Xiao Wang valt erbuiten.", "除了 betekent niet \"alleen\".", "Met 都 valt Xiao Wang er juist buiten. \"Ook\" zou 还 of 也 zijn.", "我们都去了 zegt dat wij allemaal gingen."]
      },
      problem: "\"Behalve Xiao Wang\" kan twee dingen betekenen. Xiao Wang doet niet mee. Of: hij doet mee, en er is nog meer. In het Chinees zie je het verschil aan het woord erna: 都, of 还 / 也.",
      pattern: [
        { l: "除了", v: "除了", c: 2, key: true }, { l: "A", v: "小王", c: 3 }, { l: "以外", v: "以外", c: 2 },
        { l: "wie", v: "我们", c: 1 }, { l: "都 / 还 / 也", v: "都", c: 5, key: true }, { l: "werkwoord", v: "去了", c: 4 }
      ],
      patternCap: "除了 A 以外，... 都 = behalve A (A niet) · 除了 A 以外，... 还 / 也 = naast A (A ook)",
      rules: [
        "除了 ... 都: A valt erbuiten. 除了他以外，我们都去了。",
        "除了 ... 还 / 也: A hoort erbij, en er is nog meer.",
        "以外 mag weg: 除了他，我们都去了。",
        "都, 还 en 也 staan na het onderwerp, vóór het werkwoord."
      ],
      pitfall: "Let op het woord in de tweede helft. 都 betekent: A niet. 还 of 也 betekent: A ook.",
      examples: [
        { cn: "除了汉语以外，我还学日语。", py: "Chúle Hànyǔ yǐwài, wǒ hái xué Rìyǔ.", nl: "Naast Chinees leer ik ook Japans." },
        { cn: "除了星期天，我每天都上班。", py: "Chúle xīngqītiān, wǒ měi tiān dōu shàngbān.", nl: "Behalve op zondag werk ik elke dag." },
        { cn: "除了我以外，小李也会开车。", py: "Chúle wǒ yǐwài, Xiǎo Lǐ yě huì kāichē.", nl: "Naast mij kan Xiao Li ook autorijden." }
      ],
      vocab: [
        ["除了", "chúle", "(behalve, naast)"], ["以外", "yǐwài", "(behalve)"], ["网球", "wǎngqiú", "tennis"],
        ["京剧", "jīngjù", "Peking-opera"], ["吵", "chǎo", "lawaaiig"], ["一般", "yìbān", "meestal, gewoonlijk"],
        ["别人", "biérén", "anderen"], ["法语", "Fǎyǔ", "Frans"], ["西红柿", "xīhóngshì", "tomaat"], ["葡萄", "pútao", "druif"]
      ],
      dialogue: [
        ["A", "你周末一般做什么？", "Nǐ zhōumò yìbān zuò shénme?", "Wat doe je meestal in het weekend?"],
        ["B", "除了打网球以外，我还喜欢看京剧。", "Chúle dǎ wǎngqiú yǐwài, wǒ hái xǐhuan kàn jīngjù.", "Naast tennissen kijk ik graag Peking-opera."],
        ["A", "京剧？你们家还有谁喜欢？", "Jīngjù? Nǐmen jiā hái yǒu shéi xǐhuan?", "Peking-opera? Wie vindt dat bij jullie thuis nog meer leuk?"],
        ["B", "除了我妹妹以外，我们家的人都喜欢。她说太吵了。", "Chúle wǒ mèimei yǐwài, wǒmen jiā de rén dōu xǐhuan. Tā shuō tài chǎo le.", "Behalve mijn zusje vindt iedereen thuis het leuk. Zij vindt het te lawaaiig."],
        ["A", "哈哈，我跟你妹妹一样。", "Hāha, wǒ gēn nǐ mèimei yíyàng.", "Haha, ik ben net als je zusje."]
      ],
      questions: [
        { type: "mc", q: "\"Naast Engels spreekt hij ook Frans.\"",
          options: ["除了英语以外，他还会说法语。", "除了英语以外，他都会说法语。", "除了英语以外，还他会说法语。", "除了英语以外，他不会说法语。"], answer: 0,
          why: ["Goed: Engels hoort erbij, dus 还.", "都 zou betekenen dat Engels erbuiten valt; dat past hier niet.", "还 staat ná het onderwerp, niet ervoor.", "Nu spreekt hij geen Frans: dat is een andere betekenis."] },
        { type: "mc", q: "Wat betekent: 除了咖啡，我什么都喝。",
          options: ["Ik drink alles, behalve koffie.", "Ik drink alles, ook koffie.", "Ik drink alleen koffie.", "Naast koffie drink ik niets."], answer: 0,
          why: ["Goed: 除了 ... 都 = koffie valt erbuiten.", "Met 都 valt koffie er juist buiten.", "除了 betekent niet \"alleen\".", "什么都喝 betekent \"alles drinken\", niet \"niets\"."] },
        { type: "order", q: "Zet in de goede volgorde: \"Behalve hij zijn alle anderen gekomen.\"",
          tokens: [["除了", "chúle"], ["他", "tā"], ["以外", "yǐwài"], ["别人", "biérén"], ["都", "dōu"], ["来了", "lái le"]] },
        { type: "mc", q: "\"Naast Beijing ben ik ook in Shanghai geweest.\" 除了北京以外，我___去过上海。",
          options: ["还", "都", "就", "才"], answer: 0,
          why: ["Goed: Beijing hoort erbij, en Shanghai komt erbij: 还.", "都 zou betekenen dat Beijing erbuiten valt.", "就 betekent \"dan, meteen\" en past niet bij 除了.", "才 betekent \"pas\" en past hier niet."] },
        { type: "open", q: "Vertel wat je naast je werk of studie nog meer doet.", model: ["除了工作以外，我还学汉语。", "除了上班，我也喜欢打网球。"],
          tip: "Check: gebruik je 还 of 也 (niet 都)? Je werk hoort er namelijk bij." }
      ],
      review: [
        { type: "mc", q: "\"Behalve op maandag ben ik elke dag thuis.\"",
          options: ["除了星期一以外，我每天都在家。", "除了星期一以外，我每天还在家。", "除了星期一以外，都我每天在家。", "除了以外星期一，我每天都在家。"], answer: 0,
          why: ["Goed: maandag valt erbuiten, dus 都.", "还 zou betekenen dat maandag erbij hoort.", "都 staat vóór het werkwoord, niet vóór het onderwerp.", "A staat tussen 除了 en 以外."] },
        { type: "mc", q: "\"Naast tomaten wil ik ook druiven kopen.\" 除了西红柿，我___想买葡萄。",
          options: ["还", "都", "不", "才"], answer: 0,
          why: ["Goed: tomaten horen erbij, en druiven komen erbij.", "都 zou betekenen dat tomaten erbuiten vallen.", "不 maakt er \"geen druiven\" van: een andere betekenis.", "才 betekent \"pas\" en past hier niet."] }
      ]
    },
    {
      id: "06", slug: "potentieel", title: "Kunnen of niet: V得 / V不 + resultaat", sub: "听得懂, 听不懂, 做不完, 买不到",
      canDo: "Je kunt nu zeggen of iets wel of niet lukt, met 得 of 不 tussen werkwoord en resultaat.",
      guess: {
        q: "老师说得太快，我听不懂。Wat betekent 听不懂, denk je?",
        options: ["Ik kan het niet verstaan.", "Ik wil niet luisteren.", "Ik heb niet geluisterd.", "Ik hoef het niet te begrijpen."], answer: 0,
        why: ["Goed: V + 不 + resultaat = het lukt niet.", "Het gaat niet om willen; je luistert wel.", "Je luistert wel, maar het begrijpen lukt niet.", "Het gaat niet om moeten; het lukt gewoon niet."]
      },
      problem: "Soms lukt iets niet, hoe hard je ook probeert. De les gaat te snel. Het eten is te veel. Dan zet je 得 (de) of 不 (bu) tussen het werkwoord en het resultaat. 听得懂 betekent: ik kan het verstaan. 听不懂: dat lukt niet.",
      pattern: [
        { l: "wie", v: "我", c: 1 }, { l: "werkwoord", v: "听", c: 4 }, { l: "得 / 不", v: "不", c: 2, key: true }, { l: "resultaat", v: "懂", c: 5 }
      ],
      patternCap: "听懂 = begrepen · 听得懂 = kan begrijpen · 听不懂 = kan niet begrijpen. Zo ook: 做不完, 买不到, 看得清楚.",
      rules: [
        "Het lukt: werkwoord + 得 + resultaat. 我听得懂。",
        "Het lukt niet: werkwoord + 不 + resultaat. 我做不完。",
        "Vragen: 你听得懂吗？ of 你听得懂听不懂？",
        "Het ding komt erachter, of vooraan: 我买不到票。 / 票我买不到。"
      ],
      pitfall: "Zeg niet 我不能听懂 of 我不听懂. Lukt het niet? Zet 不 tussen werkwoord en resultaat: 我听不懂。",
      examples: [
        { cn: "黑板上的字你看得清楚吗？", py: "Hēibǎn shang de zì nǐ kàn de qīngchu ma?", nl: "Kun je de tekst op het bord goed lezen?" },
        { cn: "菜太多了，我吃不完。", py: "Cài tài duō le, wǒ chī bu wán.", nl: "Het is te veel eten, ik krijg het niet op." },
        { cn: "这么晚了，我们买不到票了。", py: "Zhème wǎn le, wǒmen mǎi bu dào piào le.", nl: "Het is zo laat, we kunnen geen kaartjes meer krijgen." },
        { cn: "他说得很慢，我听得懂。", py: "Tā shuō de hěn màn, wǒ tīng de dǒng.", nl: "Hij praat langzaam, ik kan het verstaan." }
      ],
      vocab: [
        ["得", "de", "(V得 + resultaat: het lukt)"], ["清楚", "qīngchu", "duidelijk"], ["黑板", "hēibǎn", "schoolbord"],
        ["演出", "yǎnchū", "voorstelling"], ["座位", "zuòwèi", "zitplaats"], ["剧场", "jùchǎng", "theater"],
        ["声音", "shēngyīn", "geluid, stem"], ["来得及", "láidejí", "op tijd zijn"], ["搬", "bān", "verplaatsen, verhuizen"], ["箱子", "xiāngzi", "koffer, kist"]
      ],
      dialogue: [
        ["A", "今天晚上的演出，你买到票了吗？", "Jīntiān wǎnshang de yǎnchū, nǐ mǎidào piào le ma?", "Heb je kaartjes voor de voorstelling van vanavond kunnen kopen?"],
        ["B", "没有，太晚了，买不到了。", "Méiyǒu, tài wǎn le, mǎi bu dào le.", "Nee, het was te laat. Ze zijn niet meer te krijgen."],
        ["A", "我这儿有两张，是后面的座位。", "Wǒ zhèr yǒu liǎng zhāng, shì hòumian de zuòwèi.", "Ik heb er hier twee. Het zijn plaatsen achterin."],
        ["B", "后面？听得清楚吗？", "Hòumian? Tīng de qīngchu ma?", "Achterin? Kun je het daar goed horen?"],
        ["A", "听得清楚，那个剧场的声音很好。", "Tīng de qīngchu, nàge jùchǎng de shēngyīn hěn hǎo.", "Ja, het geluid in dat theater is heel goed."],
        ["B", "太好了！现在七点，我们还来得及。", "Tài hǎo le! Xiànzài qī diǎn, wǒmen hái láidejí.", "Geweldig! Het is nu zeven uur, we zijn nog op tijd."]
      ],
      questions: [
        { type: "mc", q: "\"Dit boek is te moeilijk. Ik kan het niet begrijpen.\" 这本书太难了，我___。",
          options: ["看不懂", "不看懂", "看懂不", "没看得懂"], answer: 0,
          why: ["Goed: 不 staat tussen werkwoord en resultaat.", "不 staat niet vóór het werkwoord, maar ertussen.", "不 staat tussen 看 en 懂, niet aan het eind.", "得 en 不 gaan niet samen, en 没 hoort hier niet."] },
        { type: "mc", q: "\"Kun je het verstaan?\"",
          options: ["你听得懂吗？", "你听懂得吗？", "你得听懂吗？", "你听得懂不吗？"], answer: 0,
          why: ["Goed: 得 tussen 听 en 懂.", "得 staat tussen werkwoord en resultaat, niet erachter.", "得 staat ná het werkwoord, niet ervoor.", "Met 吗 heb je geen 不 meer nodig."] },
        { type: "order", q: "Zet in de goede volgorde: \"De koffer is te zwaar, ik krijg hem niet verplaatst.\"",
          tokens: [["箱子", "xiāngzi"], ["太重了", "tài zhòng le"], ["我", "wǒ"], ["搬", "bān"], ["不", "bu"], ["动", "dòng"]] },
        { type: "mc", q: "\"De kaartjes zijn uitverkocht. Ik kan geen kaartje meer krijgen.\" 票都卖完了，我___票了。",
          options: ["买不到", "买不完", "买不懂", "买得到"], answer: 0,
          why: ["Goed: 到 = bereiken, krijgen. 买不到 = niet te krijgen.", "完 betekent \"af\": je kunt het kopen niet afmaken. Dat bedoel je niet.", "懂 hoort bij begrijpen (听懂, 看懂), niet bij kopen.", "得 betekent dat het wél lukt."] },
        { type: "open", q: "Zeg dat iets je niet lukt: afmaken, vinden of verstaan.", model: ["作业太多了，我今天做不完。", "我找不到我的钥匙。", "他说得太快，我听不懂。"],
          tip: "Check: staat 不 tussen werkwoord en resultaat, en niet vóór het werkwoord?" }
      ],
      review: [
        { type: "mc", q: "\"Ik kan mijn bril niet vinden.\"",
          options: ["我找不到我的眼镜。", "我不找到我的眼镜。", "我找到不我的眼镜。", "我没找得到我的眼镜。"], answer: 0,
          why: ["Goed.", "不 staat tussen 找 en 到, niet ervoor.", "不 staat tussen werkwoord en resultaat, niet erachter.", "得 betekent dat het lukt, en 没 past hier niet."] },
        { type: "mc", q: "\"Zoveel gerechten, krijg je dat allemaal op?\" 这么多菜，你吃得___吗？",
          options: ["完", "懂", "到", "见"], answer: 0,
          why: ["Goed: 吃得完 = het op kunnen.", "懂 hoort bij begrijpen, niet bij eten.", "吃得到 betekent \"te krijgen zijn\", niet \"op kunnen\".", "见 hoort bij zien of horen (看见, 听见)."] }
      ]
    }
  ]
};
