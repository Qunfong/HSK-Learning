({
  id: "11", slug: "wufei", title: "无非", sub: "Het is niets anders dan ...",
  canDo: "Je kunt nu zeggen dat iets eigenlijk eenvoudig is en niet meer dan dat, met 无非.",
  guess: {
    q: "他说了那么多，无非是想让你帮忙。Wat bedoelt de spreker, denk je?",
    options: ["Al dat gepraat: hij wil gewoon dat je helpt.", "Hij praat veel, maar wil geen hulp.", "Hij praat veel, en wil ook nog hulp.", "Hij wil helpen, daarom praat hij veel."], answer: 0,
    why: ["Goed: 无非 zegt dat er achter al die woorden niets anders zit dan één doel.", "无非 ontkent het doel niet; het noemt juist het doel.", "无非 voegt niets toe; het brengt alles terug tot één ding.", "Hij wil niet helpen; hij wil dat jíj helpt (让你帮忙)."]
  },
  problem: "Soms lijkt iets ingewikkeld, maar is het eigenlijk heel eenvoudig. In het Nederlands zeg je: \"Het is niets anders dan ...\" of \"Hij wil gewoon maar ...\". Daarvoor is 无非 (wúfēi). Je brengt iets terug tot de kern. Vaak klinkt er wat relativering of kritiek in mee.",
  pattern: [
    { l: "wat", v: "他这么做", c: 1 }, { l: "niets anders dan", v: "无非", c: 2, key: true }, { l: "(是)", v: "是", c: 3 },
    { l: "de kern", v: "想引起大家的注意", c: 4 }
  ],
  patternCap: "A + 无非(是) + kern · 无非 + 两种/几个 ... (niet meer dan) · 无非就是 (spreektaal)",
  rules: [
    "无非 staat na het onderwerp, vóór het werkwoord of vóór 是.",
    "Na 无非 komt vaak 是: 无非是 + zin of zelfstandig naamwoord.",
    "Met een getal noem je hoeveel mogelijkheden er zijn: 无非两种情况.",
    "In spreektaal hoor je vaak 无非就是. In schrijftaal is 无非 alleen ook gewoon.",
    "无非 is geen voegwoord. Het betekent nooit \"maar\" aan het begin van een zin."
  ],
  pitfall: "无非 betekent niet \"maar\" (tegenstelling). Voor \"hij is slim, maar een beetje lui\" gebruik je 只是 of 不过, nooit 无非.",
  examples: [
    { cn: "他这么做，无非是想引起大家的注意。", py: "Tā zhème zuò, wúfēi shì xiǎng yǐnqǐ dàjiā de zhùyì.", nl: "Hij doet dit gewoon om de aandacht van iedereen te trekken." },
    { cn: "周末我无非就是在家看看书、睡睡觉。", py: "Zhōumò wǒ wúfēi jiùshì zài jiā kànkan shū, shuìshui jiào.", nl: "In het weekend lees ik gewoon wat en slaap ik wat thuis, meer niet." },
    { cn: "结果无非两种：成功或者失败。", py: "Jiéguǒ wúfēi liǎng zhǒng: chénggōng huòzhě shībài.", nl: "Er zijn maar twee uitkomsten: slagen of mislukken." },
    { cn: "他说身体不舒服，无非是个借口。", py: "Tā shuō shēntǐ bù shūfu, wúfēi shì ge jièkǒu.", nl: "Hij zegt dat hij zich niet lekker voelt, maar dat is gewoon een smoes." }
  ],
  nuance: [
    { h: "Wanneer 无非?",
      p: "Gebruik 无非 als je iets kleiner of eenvoudiger maakt dan het lijkt. Vaak gaat het om iemands bedoeling (想 ...) of om een beperkt aantal mogelijkheden. Er klinkt meestal relativering in mee: \"meer is het niet\". Gebruik 无非 niet voor een neutrale hoeveelheid, zoals \"ik heb maar tien euro\". Dan zeg je 只有.",
      ex: [
        { cn: "他天天加班，无非是想多挣点儿钱。", py: "Tā tiāntiān jiābān, wúfēi shì xiǎng duō zhèng diǎnr qián.", nl: "Hij werkt elke dag over, gewoon om wat meer te verdienen." },
        { cn: "我只有十块钱。", py: "Wǒ zhǐ yǒu shí kuài qián.", nl: "Ik heb maar tien yuan." }
      ] },
    { h: "无非 of 只是?",
      p: "只是 betekent \"alleen maar\", net als 无非. Maar 只是 kan ook \"alleen, maar\" zijn: een zachte tegenstelling tussen twee zinnen. 无非 kan dat niet. Daarnaast klinkt 无非 sterker: \"het is niets anders dan dat\".",
      ex: [
        { cn: "这件衣服很好看，只是有点儿贵。", py: "Zhè jiàn yīfu hěn hǎokàn, zhǐshì yǒudiǎnr guì.", nl: "Deze jas is mooi, alleen een beetje duur." },
        { cn: "他道歉，无非是怕老板生气。", py: "Tā dàoqiàn, wúfēi shì pà lǎobǎn shēngqì.", nl: "Hij biedt zijn excuses aan, gewoon omdat hij bang is dat de baas boos wordt." }
      ] },
    { h: "无非 of 不过?",
      p: "不过 is in de eerste plaats \"maar\" (tegenstelling). Als 不过是 of 只不过是 betekent het ook \"slechts\", en dan ligt het dicht bij 无非是. Het verschil: 不过是 maakt iets klein (\"slechts een kind\"), 无非是 brengt iets terug tot de kern of de enige mogelijkheden.",
      ex: [
        { cn: "他不过是个孩子，别对他太严格。", py: "Tā búguò shì ge háizi, bié duì tā tài yángé.", nl: "Hij is maar een kind, wees niet te streng voor hem." },
        { cn: "办法无非两个：加人，或者加班。", py: "Bànfǎ wúfēi liǎng ge: jiā rén, huòzhě jiābān.", nl: "Er zijn maar twee oplossingen: meer mensen of overwerken." }
      ] },
    { h: "Register",
      p: "无非 hoort bij geschreven en formeel gesproken Chinees, maar je hoort het ook in gewone gesprekken. In spreektaal zegt men vaak 无非就是. In formele teksten staat 无非 vaak bij een opsomming: 无非是 A、B 和 C."
    }
  ],
  mistakes: [
    { wrong: "他很聪明，无非有点儿懒。", right: "他很聪明，只是有点儿懒。", why: "无非 is geen \"maar\". Voor een zachte tegenstelling gebruik je 只是 of 不过." },
    { wrong: "我无非有十块钱。", right: "我只有十块钱。", why: "Voor een neutrale kleine hoeveelheid gebruik je 只. 无非 brengt iets terug tot de kern." },
    { wrong: "无非他是想借钱。", right: "他无非是想借钱。", why: "无非 is een bijwoord en staat na het onderwerp." },
    { wrong: "他这么说，并非是想让你高兴。（bedoeld: gewoon om je blij te maken）", right: "他这么说，无非是想让你高兴。", why: "并非 betekent \"helemaal niet\". 无非 betekent \"niets anders dan\". Ze lijken op elkaar, maar betekenen bijna het tegenovergestelde." }
  ],
  vocab: [
    ["无非", "wúfēi", "niets anders dan, gewoon maar"], ["借口", "jièkǒu", "smoes, uitvlucht"], ["引起", "yǐnqǐ", "veroorzaken, opwekken"],
    ["秘诀", "mìjué", "geheim (van succes), sleutel"], ["勤奋", "qínfèn", "ijverig"], ["坚持", "jiānchí", "volhouden"],
    ["捷径", "jiéjìng", "kortere weg, shortcut"], ["吃苦", "chīkǔ", "moeite doen, ontberingen doorstaan"], ["中途", "zhōngtú", "halverwege"], ["道歉", "dàoqiàn", "excuses aanbieden"]
  ],
  dialogue: [
    ["A", "小王最近对我特别热情，又请我吃饭，又送我礼物。", "Xiǎo Wáng zuìjìn duì wǒ tèbié rèqíng, yòu qǐng wǒ chīfàn, yòu sòng wǒ lǐwù.", "Xiao Wang is de laatste tijd heel hartelijk tegen me. Hij trakteert me op eten en geeft me cadeaus."],
    ["B", "他这么做，无非是想让你帮他换个部门。", "Tā zhème zuò, wúfēi shì xiǎng ràng nǐ bāng tā huàn ge bùmén.", "Hij doet dat gewoon omdat hij wil dat jij hem helpt om van afdeling te wisselen."],
    ["A", "你怎么知道？", "Nǐ zěnme zhīdào?", "Hoe weet je dat?"],
    ["B", "上个月他对我也是这样。他说的那些好话，无非就是客气客气。", "Shàng ge yuè tā duì wǒ yě shì zhèyàng. Tā shuō de nàxiē hǎohuà, wúfēi jiùshì kèqi kèqi.", "Vorige maand deed hij bij mij precies hetzelfde. Al die mooie woorden zijn gewoon beleefdheid."],
    ["A", "那我该怎么办？", "Nà wǒ gāi zěnme bàn?", "Wat moet ik dan doen?"],
    ["B", "办法无非两个：帮他，或者直接告诉他你帮不了。", "Bànfǎ wúfēi liǎng ge: bāng tā, huòzhě zhíjiē gàosu tā nǐ bāng bu liǎo.", "Je hebt maar twee mogelijkheden: hem helpen, of hem eerlijk zeggen dat je het niet kunt."]
  ],
  reading: {
    title: "成功的秘诀",
    lines: [
      { cn: "常常有年轻人问王教授：成功有什么秘诀？", py: "Chángcháng yǒu niánqīngrén wèn Wáng jiàoshòu: chénggōng yǒu shénme mìjué?", nl: "Jonge mensen vragen professor Wang vaak: wat is het geheim van succes?" },
      { cn: "王教授总是笑着回答：秘诀无非是勤奋和坚持。", py: "Wáng jiàoshòu zǒngshì xiàozhe huídá: mìjué wúfēi shì qínfèn hé jiānchí.", nl: "Professor Wang antwoordt altijd met een glimlach: het geheim is niets anders dan ijver en volhouden." },
      { cn: "有人不满意，觉得这个答案太普通了。", py: "Yǒu rén bù mǎnyì, juéde zhège dá'àn tài pǔtōng le.", nl: "Sommigen zijn niet tevreden. Ze vinden dat antwoord te gewoon." },
      { cn: "他们希望听到一个特别的方法。", py: "Tāmen xīwàng tīngdào yí ge tèbié de fāngfǎ.", nl: "Ze hopen een bijzondere methode te horen." },
      { cn: "王教授解释说：人们寻找捷径，无非是不愿意吃苦。", py: "Wáng jiàoshòu jiěshì shuō: rénmen xúnzhǎo jiéjìng, wúfēi shì bú yuànyì chīkǔ.", nl: "Professor Wang legt uit: mensen zoeken een kortere weg, gewoon omdat ze geen moeite willen doen." },
      { cn: "其实，一个人每天进步一点儿，十年以后差别就很大了。", py: "Qíshí, yí ge rén měitiān jìnbù yìdiǎnr, shí nián yǐhòu chābié jiù hěn dà le.", nl: "Als iemand elke dag een beetje vooruitgaat, is het verschil na tien jaar al heel groot." },
      { cn: "失败的原因也无非两种：方向错了，或者中途放弃了。", py: "Shībài de yuányīn yě wúfēi liǎng zhǒng: fāngxiàng cuò le, huòzhě zhōngtú fàngqì le.", nl: "Er zijn ook maar twee oorzaken van mislukking: de verkeerde richting, of halverwege opgeven." },
      { cn: "这些道理说起来简单，做起来却很难。", py: "Zhèxiē dàolǐ shuō qǐlai jiǎndān, zuò qǐlai què hěn nán.", nl: "Deze principes klinken eenvoudig, maar zijn moeilijk in de praktijk." }
    ],
    questions: [
      { type: "mc", q: "Wat is volgens professor Wang het geheim van succes?",
        options: ["IJver en volhouden.", "Een bijzondere methode.", "Een kortere weg vinden.", "De goede richting en geluk."], answer: 0,
        why: ["Goed: 秘诀无非是勤奋和坚持。", "Die methode willen de jongeren horen, maar Wang geeft die niet.", "Een kortere weg zoeken is volgens Wang juist het probleem.", "Geluk staat niet in de tekst."] },
      { type: "mc", q: "Waarom zoeken mensen volgens Wang een kortere weg?",
        options: ["Omdat ze geen moeite willen doen.", "Omdat ze te weinig tijd hebben.", "Omdat de lange weg verkeerd is.", "Omdat de professor het aanraadt."], answer: 0,
        why: ["Goed: 无非是不愿意吃苦。", "Tijd wordt niet genoemd als reden.", "De tekst zegt niet dat de lange weg verkeerd is.", "Wang raadt juist volhouden aan."] },
      { type: "mc", q: "失败的原因也无非两种。Wat betekent 无非 hier?",
        options: ["Er zijn niet meer dan twee oorzaken.", "Er zijn helemaal geen twee oorzaken.", "Er zijn minstens twee oorzaken.", "De twee oorzaken zijn niet belangrijk."], answer: 0,
        why: ["Goed: 无非 + getal = niet meer dan dat aantal mogelijkheden.", "Dat zou 并非 zijn: \"helemaal niet\".", "无非 legt een grens naar boven, niet naar beneden.", "无非 zegt niets over hoe belangrijk de oorzaken zijn."] }
    ]
  },
  questions: [
    { type: "mc", q: "他说了这么多，___是想借钱。(Al dat gepraat: hij wil gewoon geld lenen.)",
      options: ["无非", "除非", "并非", "莫非"], answer: 0,
      why: ["Goed: 无非是 = niets anders dan.", "除非 betekent \"tenzij\" en past niet vóór 是想.", "并非 betekent \"helemaal niet\": dat is het tegenovergestelde.", "莫非 betekent \"zou het kunnen dat ...?\" en vraagt om een vraagzin."] },
    { type: "mc", q: "这家饭馆的菜很好吃，___服务有点儿慢。(Het eten is lekker, alleen is de bediening wat traag.)",
      options: ["只是", "无非", "无论", "以免"], answer: 0,
      why: ["Goed: 只是 kan een zachte tegenstelling maken: \"alleen\".", "无非 is geen voegwoord en kan niet \"maar\" of \"alleen\" (tegenstelling) betekenen.", "无论 betekent \"ongeacht\".", "以免 betekent \"om te voorkomen dat\"."] },
    { type: "mc", q: "Welke zin klopt?",
      options: ["他无非是想让你高兴。", "无非他是想让你高兴。", "他是想无非让你高兴。", "他是想让你高兴无非。"], answer: 0,
      why: ["Goed: 无非 staat na het onderwerp, vóór 是.", "无非 is een bijwoord en staat niet vóór het onderwerp.", "无非 staat vóór 是, niet erna.", "无非 staat nooit aan het eind van de zin."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hij doet dit gewoon om aandacht te trekken.\"",
      tokens: [["他这么做", "tā zhème zuò"], ["无非是", "wúfēi shì"], ["想", "xiǎng"], ["引起", "yǐnqǐ"], ["大家的注意", "dàjiā de zhùyì"]] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["我无非有五块钱。", "办法无非两个。", "他无非是怕麻烦。", "周末无非就是休息。"], answer: 0,
      why: ["Goed: voor een neutrale kleine hoeveelheid zeg je 我只有五块钱.", "Dit kan: 无非 + getal = niet meer dan twee mogelijkheden.", "Dit kan: 无非是 + de echte reden.", "Dit kan: 无非就是 is spreektaal."] },
    { type: "fill", q: "考试的题目___就是这几种，别紧张。(De examenvragen zijn gewoon maar deze paar soorten, wees niet zenuwachtig.)", answers: ["无非"],
      hint: "Welk woord staat vóór 就是 en betekent \"niets anders dan\"?", why: "无非就是 = niets anders dan, gewoon maar (spreektaal)." },
    { type: "mc", q: "他不过是个学生。Welke zin ligt het dichtst bij deze betekenis?",
      options: ["他只是个学生。", "他并非是个学生。", "他除非是个学生。", "他竟然是个学生。"], answer: 0,
      why: ["Goed: 不过是 en 只是 betekenen hier allebei \"slechts\".", "并非 ontkent: \"hij is helemaal geen student\".", "除非 betekent \"tenzij\" en past hier niet.", "竟然 drukt verbazing uit, geen \"slechts\"."] },
    { type: "mc", q: "In welke situatie past 无非 het best?",
      options: ["Je zegt dat iemands lange verhaal maar één doel heeft.", "Je zegt dat je maar tien euro in je zak hebt.", "Je wilt \"maar\" zeggen tussen twee zinnen.", "Je wilt zeggen dat iets zeker niet waar is."], answer: 0,
      why: ["Goed: 无非 brengt iets terug tot de kern.", "Voor een neutrale hoeveelheid gebruik je 只.", "Voor \"maar\" gebruik je 不过, 只是 of 但是.", "Voor \"zeker niet\" gebruik je 并非 of 绝不."] },
    { type: "order", q: "Zet in de goede volgorde: \"Er zijn maar twee mogelijkheden: ja of nee.\"",
      tokens: [["无非", "wúfēi"], ["两种", "liǎng zhǒng"], ["可能", "kěnéng"], ["：同意", "：tóngyì"], ["或者不同意", "huòzhě bù tóngyì"]] },
    { type: "open", q: "Vertaal: \"Hij zegt dat hij moe is, maar dat is gewoon een smoes.\"", model: ["他说他累了，无非是个借口。", "他说自己很累，这无非是一个借口。"],
      tip: "Check: staat 无非 vóór 是, en volgt daarna de kern (借口)?" },
    { type: "open", q: "Vertaal: \"Ze werkt elke dag over, gewoon om meer geld te verdienen.\"", model: ["她天天加班，无非是想多挣点儿钱。", "她每天加班，无非就是为了多赚钱。"],
      tip: "Check: 无非(是/就是) staat na de eerste zin, vóór het doel (想/为了 ...)." }
  ],
  review: [
    { type: "mc", q: "她每天打扮得这么漂亮，___是想让别人夸她。(Ze kleedt zich elke dag zo mooi aan, gewoon zodat anderen haar complimenten geven.)",
      options: ["无非", "并非", "除非", "未必"], answer: 0,
      why: ["Goed: 无非是 = niets anders dan.", "并非 betekent \"helemaal niet\": het tegenovergestelde.", "除非 betekent \"tenzij\".", "未必 betekent \"niet noodzakelijk\"."] },
    { type: "mc", q: "Welke zin klopt?",
      options: ["他很努力，只是方法不对。", "他很努力，无非方法不对。", "他很努力，无非是方法不对。", "他很努力，并非方法不对。"], answer: 0,
      why: ["Goed: 只是 maakt hier een zachte tegenstelling: \"alleen\".", "无非 is geen \"maar\" of \"alleen\" tussen twee zinnen.", "Ook met 是 erbij wordt 无非 geen tegenstelling.", "并非 ontkent: dat zegt het tegenovergestelde."] },
    { type: "mc", q: "选择无非两种。Wat betekent dit?",
      options: ["Er zijn maar twee keuzes.", "Er zijn geen twee keuzes.", "Er zijn meer dan twee keuzes.", "De twee keuzes zijn slecht."], answer: 0,
      why: ["Goed: 无非 + getal = niet meer dan dat.", "无非 ontkent niet; dat zou 并非 zijn.", "无非 legt juist een grens: niet meer dan twee.", "无非 zegt niets over goed of slecht."] }
  ]
})
