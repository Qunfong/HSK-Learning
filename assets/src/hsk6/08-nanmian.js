({
  id: "08", slug: "nanmian", title: "难免 en 免不了", sub: "Het valt niet te vermijden, en dat is begrijpelijk",
  canDo: "Je kunt nu met 难免 en 免不了 zeggen dat iets ongewensts normaal en begrijpelijk is, en je haalt ze niet door elkaar met 避免.",
  guess: {
    q: "第一次上台演讲，难免会紧张。Wat bedoelt de spreker, denk je?",
    options: ["De eerste keer een toespraak houden, dan ben je natuurlijk zenuwachtig.", "De eerste keer een toespraak houden, dan moet je zenuwen vermijden.", "De eerste keer een toespraak houden, dan ben je zeker niet zenuwachtig.", "De eerste keer een toespraak houden, dan is zenuwachtig zijn moeilijk."], answer: 0,
    why: ["Goed: 难免 = het valt moeilijk te vermijden, het is begrijpelijk.", "Vermijden is 避免. 难免 zegt juist dat het moeilijk te vermijden is.", "Er staat geen ontkenning bij 紧张.", "难 hoort bij 免: moeilijk te vermijden, niet moeilijk om te doen."]
  },
  problem: "Je wilt zeggen: \"Het is normaal dat dat gebeurt\" of \"Dat kan haast niet anders.\" Meestal gaat het om iets vervelends, zoals fouten of zenuwen. Je toont er begrip voor. Daarvoor zijn 难免 (nánmiǎn) en, in spreektaal, 免不了 (miǎn bu liǎo).",
  pattern: [
    { l: "situatie", v: "第一次上台", c: 1 }, { l: "onvermijdelijk", v: "难免", c: 2, key: true }, { l: "(hulpww.)", v: "会", c: 3 },
    { l: "ongewenst gevolg", v: "紧张", c: 4 }
  ],
  patternCap: "(Situatie,) (wie +) 难免 (+ 会/要/有) + ongewenst gevolg · ... 是难免的 · spreektaal: 免不了 (+ 要) + gevolg",
  rules: [
    "难免 staat vóór het werkwoord of bijvoeglijk naamwoord, vaak met 会, 要 of 有 erna.",
    "Het gevolg is meestal iets ongewensts: fouten, zenuwen, ruzie, misverstanden.",
    "难免 kan ook achteraan staan als gezegde: 犯错是难免的.",
    "免不了 betekent hetzelfde en is spreektaal. Het kan ook direct een naamwoord krijgen: 免不了一顿批评.",
    "Vaak staat er eerst een situatie die het begrijpelijk maakt: 刚开始, 第一次, 时间长了."
  ],
  pitfall: "难免 is geen werkwoord. \"Iets vermijden\" is 避免 + lijdend voorwerp: 避免错误. 难免 zegt juist: dat valt niet (goed) te vermijden.",
  examples: [
    { cn: "人难免会犯错。", py: "Rén nánmiǎn huì fàn cuò.", nl: "Mensen maken nu eenmaal fouten." },
    { cn: "刚到一个新城市，感到孤独是难免的。", py: "Gāng dào yí ge xīn chéngshì, gǎndào gūdú shì nánmiǎn de.", nl: "Als je net in een nieuwe stad bent, is het normaal dat je je eenzaam voelt." },
    { cn: "两个人一起生活，免不了要吵架。", py: "Liǎng ge rén yìqǐ shēnghuó, miǎn bu liǎo yào chǎojià.", nl: "Als twee mensen samenleven, krijg je onvermijdelijk weleens ruzie." },
    { cn: "这次是他的错，免不了一顿批评。", py: "Zhè cì shì tā de cuò, miǎn bu liǎo yí dùn pīpíng.", nl: "Deze keer is het zijn fout. Een uitbrander kan hij niet ontlopen." }
  ],
  nuance: [
    { h: "难免 of 避免? De klassieke verwarring",
      p: "Beide hebben 免 (vermijden), maar de rol verschilt. 避免 is een werkwoord: je vermijdt actief iets. Er volgt een lijdend voorwerp. 难免 beschrijft een feit: iets valt moeilijk te vermijden. Je kunt ze in één zin combineren: fouten zijn normaal, maar probeer ze te voorkomen.",
      ex: [
        { cn: "犯错是难免的。", py: "Fàn cuò shì nánmiǎn de.", nl: "Fouten maken is onvermijdelijk." },
        { cn: "我们要尽量避免犯错。", py: "Wǒmen yào jǐnliàng bìmiǎn fàn cuò.", nl: "We moeten fouten zo veel mogelijk vermijden." }
      ] },
    { h: "难免 of 免不了?",
      p: "De betekenis is gelijk. 免不了 is spreektaal en klinkt wat gelaten. Het kan direct een naamwoord krijgen: 免不了一场争论. 难免 is neutraal tot schrijftaal en heeft meestal een werkwoord na zich. Meng ze niet: 难免不了 bestaat niet.",
      ex: [
        { cn: "过年回家，免不了被问什么时候结婚。", py: "Guònián huí jiā, miǎn bu liǎo bèi wèn shénme shíhou jiéhūn.", nl: "Met Chinees Nieuwjaar thuis ontkom je er niet aan dat ze vragen wanneer je trouwt." }
      ] },
    { h: "Schrijftaal: begrip en bescheidenheid",
      p: "难免 toont begrip. Je zegt: het is niet vreemd dat dit gebeurt. Daarom staat het vaak in formele teksten, bijvoorbeeld in een voorwoord. De schrijver zegt bescheiden dat er nog fouten in kunnen staan. Het verzacht ook kritiek op een ander.",
      ex: [
        { cn: "本书难免有不足之处，请读者批评指正。", py: "Běn shū nánmiǎn yǒu bùzú zhī chù, qǐng dúzhě pīpíng zhǐzhèng.", nl: "Dit boek zal ongetwijfeld tekortkomingen hebben. Wij horen graag de correcties van de lezer." }
      ] }
  ],
  mistakes: [
    { wrong: "我们要难免错误。", right: "我们要避免错误。", why: "\"Vermijden\" met een lijdend voorwerp is 避免. 难免 is geen werkwoord." },
    { wrong: "犯错是避免的。", right: "犯错是难免的。", why: "In 是 ... 的 wil je zeggen \"onvermijdelijk\": dat is 难免." },
    { wrong: "第一次上台，难免会高兴。", right: "第一次上台，难免会紧张。", why: "Na 难免 staat iets ongewensts. Blij zijn hoef je niet te vermijden." },
    { wrong: "他工作太忙，难免不了出错。", right: "他工作太忙，免不了出错。", why: "Kies 难免 of 免不了. 难免不了 is een mengvorm die niet bestaat." }
  ],
  vocab: [
    ["难免 / 免不了", "nánmiǎn / miǎn bu liǎo", "onvermijdelijk, het is normaal dat"], ["避免", "bìmiǎn", "vermijden"], ["犯错", "fàn cuò", "een fout maken"],
    ["演讲", "yǎnjiǎng", "toespraak (houden)"], ["孤独", "gūdú", "eenzaam"], ["误会", "wùhuì", "misverstand"],
    ["沟通", "gōutōng", "communiceren"], ["包容", "bāoróng", "verdraagzaam zijn"], ["适应", "shìyìng", "zich aanpassen"], ["背景", "bèijǐng", "achtergrond"]
  ],
  dialogue: [
    ["A", "我来公司才一个月，已经出了好几次错，真丢人。", "Wǒ lái gōngsī cái yí ge yuè, yǐjīng chūle hǎo jǐ cì cuò, zhēn diūrén.", "Ik werk hier pas een maand en heb al een paar keer een fout gemaakt. Wat gênant."],
    ["B", "刚开始工作，出错是难免的，别太在意。", "Gāng kāishǐ gōngzuò, chū cuò shì nánmiǎn de, bié tài zàiyì.", "Als je net begint, zijn fouten normaal. Trek het je niet te veel aan."],
    ["A", "可是经理今天批评我了。", "Kěshì jīnglǐ jīntiān pīpíng wǒ le.", "Maar de manager heeft me vandaag op mijn kop gegeven."],
    ["B", "做错了事，免不了被说几句。重要的是以后避免同样的错误。", "Zuòcuòle shì, miǎn bu liǎo bèi shuō jǐ jù. Zhòngyào de shì yǐhòu bìmiǎn tóngyàng de cuòwù.", "Als je iets fout doet, krijg je nu eenmaal wat commentaar. Belangrijk is dat je dezelfde fout later vermijdt."],
    ["A", "你说得对。以后我做完都再检查一遍。", "Nǐ shuō de duì. Yǐhòu wǒ zuòwán dōu zài jiǎnchá yí biàn.", "Je hebt gelijk. Voortaan controleer ik alles nog een keer als ik klaar ben."]
  ],
  reading: {
    title: "留学的第一年",
    lines: [
      { cn: "刚到国外留学的时候，很多学生难免会遇到各种困难。", py: "Gāng dào guówài liúxué de shíhou, hěn duō xuésheng nánmiǎn huì yùdào gè zhǒng kùnnan.", nl: "Als studenten net in het buitenland studeren, krijgen velen onvermijdelijk met allerlei problemen te maken." },
      { cn: "语言不通，生活习惯也不同，感到孤独是难免的。", py: "Yǔyán bù tōng, shēnghuó xíguàn yě bù tóng, gǎndào gūdú shì nánmiǎn de.", nl: "Ze spreken de taal niet goed en hun gewoonten verschillen. Dat je je eenzaam voelt, is normaal." },
      { cn: "和不同文化背景的人一起生活，也免不了产生一些误会。", py: "Hé bùtóng wénhuà bèijǐng de rén yìqǐ shēnghuó, yě miǎn bu liǎo chǎnshēng yìxiē wùhuì.", nl: "Als je samenleeft met mensen met een andere culturele achtergrond, ontstaan er ook onvermijdelijk misverstanden." },
      { cn: "这些问题虽然很难完全避免，但是可以慢慢解决。", py: "Zhèxiē wèntí suīrán hěn nán wánquán bìmiǎn, dànshì kěyǐ mànmàn jiějué.", nl: "Deze problemen zijn moeilijk helemaal te vermijden, maar ze zijn langzaam op te lossen." },
      { cn: "首先，要多和当地人沟通，了解他们的想法。", py: "Shǒuxiān, yào duō hé dāngdìrén gōutōng, liǎojiě tāmen de xiǎngfǎ.", nl: "Ten eerste: praat veel met de lokale mensen en leer hoe zij denken." },
      { cn: "其次，遇到误会的时候，应该互相包容，不要马上生气。", py: "Qícì, yùdào wùhuì de shíhou, yīnggāi hùxiāng bāoróng, búyào mǎshàng shēngqì.", nl: "Ten tweede: bij een misverstand moet je verdraagzaam zijn naar elkaar en niet meteen boos worden." },
      { cn: "另外，多参加一些活动，也能避免一个人在家里感到孤独。", py: "Lìngwài, duō cānjiā yìxiē huódòng, yě néng bìmiǎn yí ge rén zài jiā li gǎndào gūdú.", nl: "Verder voorkom je eenzaamheid thuis als je vaker aan activiteiten meedoet." },
      { cn: "适应新环境需要时间，开始时难免辛苦，但这段经历会让人成长。", py: "Shìyìng xīn huánjìng xūyào shíjiān, kāishǐ shí nánmiǎn xīnkǔ, dàn zhè duàn jīnglì huì ràng rén chéngzhǎng.", nl: "Wennen aan een nieuwe omgeving kost tijd. In het begin is het onvermijdelijk zwaar, maar deze ervaring laat je groeien." }
    ],
    questions: [
      { type: "mc", q: "Welke problemen noemt de tekst?",
        options: ["Eenzaamheid en misverstanden.", "Geldgebrek en slechte cijfers.", "Ruzie met de lokale mensen.", "Heimwee naar het eten."], answer: 0,
        why: ["Goed: 感到孤独 en 产生一些误会.", "Geld en cijfers staan niet in de tekst.", "De tekst noemt misverstanden, geen ruzie.", "Eten wordt niet genoemd."] },
      { type: "mc", q: "Wat moet je doen bij een misverstand?",
        options: ["Verdraagzaam zijn en niet meteen boos worden.", "Het misverstand helemaal vermijden.", "Meer activiteiten doen.", "Thuisblijven tot het over is."], answer: 0,
        why: ["Goed: 应该互相包容，不要马上生气.", "De tekst zegt juist dat je ze moeilijk helemaal kunt vermijden.", "Activiteiten helpen tegen eenzaamheid, niet bij een misverstand.", "Alleen thuis zitten maakt je juist eenzaam."] },
      { type: "mc", q: "感到孤独是难免的。Wat zegt de schrijver hiermee?",
        options: ["Het is normaal en begrijpelijk dat je je eenzaam voelt.", "Je moet eenzaamheid vermijden.", "Het is moeilijk om je eenzaam te voelen.", "Je voelt je zeker niet eenzaam."], answer: 0,
        why: ["Goed: 是难免的 = onvermijdelijk, begrijpelijk.", "Vermijden is 避免. Dat komt pas later in de tekst.", "难 hoort bij 免: moeilijk te vermijden.", "Er staat geen ontkenning."] }
    ]
  },
  questions: [
    { type: "mc", q: "Wat betekent: 第一次开车上路，难免会紧张。",
      options: ["De eerste keer de weg op, dan ben je natuurlijk zenuwachtig.", "De eerste keer de weg op, dan moet je zenuwen vermijden.", "De eerste keer de weg op, dan ben je zeker niet zenuwachtig.", "De eerste keer de weg op, dan is zenuwachtig worden moeilijk."], answer: 0,
      why: ["Goed: 难免 = onvermijdelijk, begrijpelijk.", "Vermijden is 避免, niet 难免.", "Er staat geen ontkenning bij 紧张.", "难 hoort bij 免: moeilijk te vermijden."] },
    { type: "mc", q: "我们应该尽量___这种错误。(We moeten dit soort fouten zo veel mogelijk vermijden.)",
      options: ["避免", "难免", "免不了", "未免"], answer: 0,
      why: ["Goed: 避免 is een werkwoord met een lijdend voorwerp.", "难免 is geen werkwoord; het betekent \"onvermijdelijk\".", "免不了 = je ontkomt er niet aan: het tegendeel.", "未免 = \"wel wat te\". Het geeft kritiek en is geen werkwoord."] },
    { type: "mc", q: "新手犯错是___的。(Dat een beginner fouten maakt, is normaal.)",
      options: ["难免", "避免", "免得", "以免"], answer: 0,
      why: ["Goed: 是难免的 = is onvermijdelijk.", "避免 is een werkwoord en past niet in 是 ... 的.", "免得 = \"zodat niet\". Het verbindt twee zinnen.", "以免 = \"om te voorkomen dat\". Het verbindt ook twee zinnen."] },
    { type: "mc", q: "In spreektaal tegen een vriend: \"Als je samenwoont, krijg je nu eenmaal weleens ruzie.\"",
      options: ["住在一起，免不了要吵架。", "住在一起，避免要吵架。", "住在一起，免不了不吵架。", "住在一起，难免不了吵架。"], answer: 0,
      why: ["Goed: 免不了 (+ 要) + ongewenst gevolg. Typische spreektaal.", "避免 = vermijden: dat zegt het tegendeel.", "Met 不 erbij zeg je dat je niet geen ruzie kunt hebben. Dat is verward.", "难免不了 is een mengvorm die niet bestaat."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["我们要难免误会。", "误会是难免的。", "我们要避免误会。", "误会难免会发生。"], answer: 0,
      why: ["Goed: deze klopt niet. Met 要 + lijdend voorwerp heb je 避免 nodig.", "Deze klopt: 是难免的 = onvermijdelijk.", "Deze klopt: 避免 + lijdend voorwerp.", "Deze klopt: 难免 + 会 + werkwoord."] },
    { type: "mc", q: "In een voorwoord staat: 本书难免有错误。Wat bedoelt de schrijver?",
      options: ["Er staan vast nog fouten in het boek.", "Het boek vermijdt fouten.", "Er staan zeker geen fouten in het boek.", "Het is moeilijk om fouten in het boek te vinden."], answer: 0,
      why: ["Goed: 难免有 = er zijn onvermijdelijk. Een bescheiden formule.", "Vermijden is 避免.", "Er staat geen ontkenning bij 有错误.", "难 hoort bij 免, niet bij \"vinden\"."] },
    { type: "order", q: "Zet in de goede volgorde: \"Nieuwe medewerkers maken nu eenmaal wat fouten.\"",
      tokens: [["新员工", "xīn yuángōng"], ["难免", "nánmiǎn"], ["会", "huì"], ["出", "chū"], ["一些错", "yìxiē cuò"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Als je lang samenwerkt, heb je onvermijdelijk wat wrijving.\"",
      tokens: [["长时间", "cháng shíjiān"], ["一起工作", "yìqǐ gōngzuò"], ["免不了", "miǎn bu liǎo"], ["有一些摩擦", "yǒu yìxiē mócā"]] },
    { type: "fill", q: "刚搬完家，东西乱一点儿是___的。(We zijn net verhuisd. Dat het wat rommelig is, is normaal.)", answers: ["难免", "免不了"],
      hint: "Welk woord betekent \"onvermijdelijk\" en past in 是 ... 的?", why: "是难免的 en 是免不了的 = dat valt niet te vermijden, dat is begrijpelijk." },
    { type: "open", q: "Vertaal: \"Op reis gaat er nu eenmaal weleens iets mis.\"",
      model: ["出门旅行，难免会出点儿问题。", "旅行的时候，免不了遇到一些麻烦。"],
      tip: "Check: staat 难免 (+ 会) vóór het werkwoord, of gebruik je 免不了 in spreektaal?" },
    { type: "open", q: "Schrijf één zin met zowel 难免 als 避免.",
      model: ["犯错是难免的，但我们要尽量避免同样的错误。", "刚开始难免会紧张，多练习就能避免这种情况。"],
      tip: "Check: 难免 = onvermijdelijk (geen lijdend voorwerp), 避免 = vermijden + lijdend voorwerp." }
  ],
  review: [
    { type: "mc", q: "刚学外语，发音不准是___的。(Als je net een taal leert, is een onzuivere uitspraak normaal.)",
      options: ["难免", "避免", "未必", "何必"], answer: 0,
      why: ["Goed.", "避免 is een werkwoord en past niet in 是 ... 的.", "未必 = niet per se. Het past niet in 是 ... 的.", "何必 = waarom zou je. Het past hier niet."] },
    { type: "mc", q: "\"We moeten verspilling vermijden.\"",
      options: ["我们要避免浪费。", "我们要难免浪费。", "我们要免不了浪费。", "我们要以免浪费。"], answer: 0,
      why: ["Goed.", "难免 is geen werkwoord.", "免不了 = je ontkomt er niet aan: het tegendeel.", "以免 verbindt twee zinnen en staat niet na 要."] },
    { type: "mc", q: "Wat betekent: 文化不同，免不了有些误会。",
      options: ["Bij verschillende culturen ontstaan nu eenmaal misverstanden.", "Bij verschillende culturen moet je misverstanden vermijden.", "Bij verschillende culturen ontstaan geen misverstanden.", "Bij verschillende culturen ontstaan niet per se misverstanden."], answer: 0,
      why: ["Goed: 免不了 = je ontkomt er niet aan.", "Vermijden is 避免.", "免不了 is geen ontkenning van het gevolg.", "\"Niet per se\" is 未必."] }
  ]
})
