({
  id: "02", slug: "yiwei", title: "以 ... 为 ...", sub: "Iets nemen als basis, doel of voorbeeld",
  canDo: "Je kunt nu in formele tekst zeggen wat de kern, het doel of het voorbeeld is, met 以……为主/为目标/为例.",
  guess: {
    q: "这家餐厅以海鲜为主。Wat betekent dit, denk je?",
    options: ["Dit restaurant serveert vooral zeevruchten.", "Dit restaurant serveert geen zeevruchten.", "Dit restaurant is eigenaar van een visbedrijf.", "Dit restaurant serveert zeevruchten als bijgerecht."], answer: 0,
    why: ["Goed: 以 X 为主 = X is het belangrijkste.", "Er staat geen ontkenning in de zin.", "主 betekent hier \"hoofdzaak\", niet \"eigenaar\".", "为主 = als hoofdzaak, niet als bijzaak."]
  },
  problem: "Je wilt zeggen: \"We nemen X als doel\" of \"vooral X\". In schrijftaal doe je dat kort met 以 (yǐ) ... 为 (wéi) .... 以 betekent hier \"nemen\". 为 betekent hier \"als\" of \"zijn\".",
  pattern: [
    { l: "wie/wat", v: "公司", c: 1 }, { l: "neemt", v: "以", c: 2, key: true }, { l: "X", v: "客户", c: 3 },
    { l: "als", v: "为", c: 2, key: true }, { l: "Y", v: "中心", c: 5 }
  ],
  patternCap: "以 X 为 Y = X als Y nemen · 以……为主 (vooral) · 以……为目标 (als doel) · 以……为例 (als voorbeeld) · 以……为准 (maatgevend) · spreektaal: 主要是 / 把……当作…… / 拿……来说",
  rules: [
    "为 spreek je hier uit als wéi, niet wèi.",
    "Y is meestal kort: 主, 例, 准, 目标, 中心, 重点.",
    "以……为例 staat vaak aan het begin: 以中国为例，……",
    "Het is schrijftaal. In gesprek zeg je 主要是 ... of 把 ... 当作 ...."
  ],
  pitfall: "In het tweede deel staat 为, niet 是: 以客户是中心 is fout. Zeg 以客户为中心.",
  examples: [
    { cn: "本公司始终以客户为中心。", py: "Běn gōngsī shǐzhōng yǐ kèhù wéi zhōngxīn.", nl: "Ons bedrijf stelt altijd de klant centraal." },
    { cn: "这次改革以提高效率为目标。", py: "Zhè cì gǎigé yǐ tígāo xiàolǜ wéi mùbiāo.", nl: "Deze hervorming heeft als doel de efficiëntie te verhogen." },
    { cn: "以中国为例，城市人口增长很快。", py: "Yǐ Zhōngguó wéi lì, chéngshì rénkǒu zēngzhǎng hěn kuài.", nl: "Neem China als voorbeeld: de stadsbevolking groeit snel." },
    { cn: "该地区的经济以农业为主。", py: "Gāi dìqū de jīngjì yǐ nóngyè wéi zhǔ.", nl: "De economie van deze regio draait vooral op landbouw." }
  ],
  nuance: [
    { h: "以……为 of 把……当作?",
      p: "Beide betekenen \"X als Y nemen\". 以……为 is schrijftaal en past bij principes, doelen en regels. 把……当作 (of 当成) is spreektaal. Het kan ook een persoonlijke kijk of een vergissing zijn. Voor een vergissing kan alleen 把……当成.",
      ex: [
        { cn: "我们以客户为中心。", py: "Wǒmen yǐ kèhù wéi zhōngxīn.", nl: "Wij stellen de klant centraal. (formeel)" },
        { cn: "他把我当成了他哥哥。", py: "Tā bǎ wǒ dàngchéngle tā gēge.", nl: "Hij zag me aan voor zijn oudere broer." }
      ] },
    { h: "Vaste combinaties: 为主, 为准, 为荣 ...",
      p: "Na 为 staat meestal een kort woord. Elke combinatie heeft een vaste betekenis. 以……为主: vooral. 以……为准: X is maatgevend. 以……为荣: trots zijn op X. 以……为榜样: X als voorbeeld nemen. Leer ze als vaste blokken.",
      ex: [
        { cn: "考试时间以北京时间为准。", py: "Kǎoshì shíjiān yǐ Běijīng shíjiān wéi zhǔn.", nl: "Voor de examentijd geldt de Beijingse tijd." },
        { cn: "父母以他为荣。", py: "Fùmǔ yǐ tā wéi róng.", nl: "Zijn ouders zijn trots op hem." }
      ] },
    { h: "Niet verwarren met 以为",
      p: "以为 (yǐwéi) is één woord: \"(ten onrechte) denken\". Het is gewone spreektaal. In 以……为 staat er altijd iets tussen 以 en 为. Staan ze direct naast elkaar, dan is het meestal 以为.",
      ex: [
        { cn: "我以为他是老师，其实他是学生。", py: "Wǒ yǐwéi tā shì lǎoshī, qíshí tā shì xuésheng.", nl: "Ik dacht dat hij leraar was, maar hij is student." }
      ] },
    { h: "Spreektaal: 主要是 en 拿……来说",
      p: "In een gesprek zeg je niet 以……为主, maar 主要是. In plaats van 以……为例 zeg je 拿……来说 of 比如说. De betekenis blijft hetzelfde.",
      ex: [
        { cn: "拿北京来说，房价特别高。", py: "Ná Běijīng lái shuō, fángjià tèbié gāo.", nl: "Neem Beijing: de huizenprijzen zijn erg hoog." }
      ] }
  ],
  mistakes: [
    { wrong: "我们以客户是中心。", right: "我们以客户为中心。", why: "In deze vaste vorm staat 为 (wéi), niet 是." },
    { wrong: "为中国以例，城市人口增长很快。", right: "以中国为例，城市人口增长很快。", why: "以 komt eerst, dan X, dan pas 为 + Y." },
    { wrong: "以中国为例子，城市人口增长很快。", right: "以中国为例，城市人口增长很快。", why: "De vaste vorm is kort: 为例, niet 为例子." },
    { wrong: "他以我为他哥哥了。", right: "他把我当成他哥哥了。", why: "Voor een vergissing gebruik je 把……当成. 以……为 is voor bewuste principes en doelen." }
  ],
  vocab: [
    ["以……为……", "yǐ……wéi……", "X als Y nemen (formeel)"], ["始终", "shǐzhōng", "altijd, steeds"], ["宗旨", "zōngzhǐ", "missie, doelstelling"],
    ["改革", "gǎigé", "hervorming"], ["效率", "xiàolǜ", "efficiëntie"], ["农业", "nóngyè", "landbouw"],
    ["缩短", "suōduǎn", "verkorten"], ["重点", "zhòngdiǎn", "zwaartepunt"], ["扩大", "kuòdà", "uitbreiden"], ["规划", "guīhuà", "planning, plan"]
  ],
  dialogue: [
    ["记者", "贵公司的宗旨是什么？", "Guì gōngsī de zōngzhǐ shì shénme?", "Wat is de missie van uw bedrijf?"],
    ["经理", "我们始终以客户为中心。", "Wǒmen shǐzhōng yǐ kèhù wéi zhōngxīn.", "Wij stellen altijd de klant centraal."],
    ["记者", "今年的重点是什么？", "Jīnnián de zhòngdiǎn shì shénme?", "Wat is dit jaar het zwaartepunt?"],
    ["经理", "今年以提高效率为目标，市场以国内为主。", "Jīnnián yǐ tígāo xiàolǜ wéi mùbiāo, shìchǎng yǐ guónèi wéi zhǔ.", "Dit jaar is het doel de efficiëntie te verhogen. De markt is vooral binnenlands."],
    ["记者", "能举个例子吗？", "Néng jǔ ge lìzi ma?", "Kunt u een voorbeeld geven?"],
    ["经理", "以我们的新工厂为例，生产时间缩短了一半。", "Yǐ wǒmen de xīn gōngchǎng wéi lì, shēngchǎn shíjiān suōduǎnle yíbàn.", "Neem onze nieuwe fabriek: de productietijd is gehalveerd."]
  ],
  reading: {
    title: "绿色城市计划",
    lines: [
      { cn: "近年来，本市大力发展绿色交通。", py: "Jìnnián lái, běn shì dàlì fāzhǎn lǜsè jiāotōng.", nl: "De laatste jaren zet onze stad sterk in op groen vervoer." },
      { cn: "新的城市规划以\"减少汽车、方便步行\"为目标。", py: "Xīn de chéngshì guīhuà yǐ \"jiǎnshǎo qìchē, fāngbiàn bùxíng\" wéi mùbiāo.", nl: "Het nieuwe stadsplan heeft als doel: \"minder auto's, makkelijker lopen\"." },
      { cn: "市中心的交通将以公共汽车和地铁为主。", py: "Shì zhōngxīn de jiāotōng jiāng yǐ gōnggòng qìchē hé dìtiě wéi zhǔ.", nl: "Het verkeer in het centrum zal vooral uit bussen en metro bestaan." },
      { cn: "自行车道的长度预计在五年内增加一倍。", py: "Zìxíngchēdào de chángdù yùjì zài wǔ nián nèi zēngjiā yí bèi.", nl: "De lengte van de fietspaden zal naar verwachting binnen vijf jaar verdubbelen." },
      { cn: "以老城区为例，去年已有三条街道改为步行街。", py: "Yǐ lǎo chéngqū wéi lì, qùnián yǐ yǒu sān tiáo jiēdào gǎiwéi bùxíngjiē.", nl: "Neem de oude binnenstad: vorig jaar zijn al drie straten voetgangersgebied geworden." },
      { cn: "附近商店的顾客反而比以前多了。", py: "Fùjìn shāngdiàn de gùkè fǎn'ér bǐ yǐqián duō le.", nl: "De winkels in de buurt hebben juist meer klanten dan vroeger." },
      { cn: "当然，计划也遇到了一些困难，例如停车位不足。", py: "Dāngrán, jìhuà yě yùdàole yìxiē kùnnan, lìrú tíngchēwèi bùzú.", nl: "Natuurlijk stuit het plan ook op problemen, zoals te weinig parkeerplaatsen." },
      { cn: "市政府表示，今后的工作将以听取市民意见为重点。", py: "Shì zhèngfǔ biǎoshì, jīnhòu de gōngzuò jiāng yǐ tīngqǔ shìmín yìjiàn wéi zhòngdiǎn.", nl: "Het stadsbestuur zegt dat het voortaan vooral naar de mening van de inwoners wil luisteren." }
    ],
    questions: [
      { type: "mc", q: "Wat wordt het belangrijkste vervoer in het centrum?",
        options: ["Bussen en metro.", "Auto's.", "Fietsen.", "Taxi's."], answer: 0,
        why: ["Goed: 以公共汽车和地铁为主.", "Het doel is juist minder auto's: 减少汽车.", "De fietspaden groeien, maar 为主 staat bij bussen en metro.", "Taxi's komen in de tekst niet voor."] },
      { type: "mc", q: "Wat gebeurde er in de oude binnenstad?",
        options: ["Drie straten werden voetgangersgebied, en de winkels kregen meer klanten.", "Drie straten werden voetgangersgebied, en de winkels verloren klanten.", "Er kwamen drie nieuwe parkeerplaatsen bij.", "Er kwam een nieuwe metrolijn."], answer: 0,
        why: ["Goed: 三条街道改为步行街 en 顾客反而比以前多了.", "反而 betekent \"juist\": er kwamen meer klanten, niet minder.", "Parkeerplaatsen zijn juist een probleem: 停车位不足.", "Over een nieuwe metrolijn staat niets in de tekst."] },
      { type: "mc", q: "以老城区为例，…… Wat doet 以……为例 hier?",
        options: ["Het noemt de oude binnenstad als voorbeeld van het plan.", "Het noemt de oude binnenstad als doel van het plan.", "Het zegt dat de oude binnenstad het belangrijkste deel is.", "Het zegt dat de oude binnenstad een uitzondering is."], answer: 0,
        why: ["Goed: 以 X 为例 = X als voorbeeld nemen.", "Een doel is 为目标, niet 为例.", "\"Het belangrijkste\" is 为主 of 为重点.", "Een uitzondering noem je met 除了, niet met 为例."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Deze cursus richt zich vooral op spreekvaardigheid.\"",
      options: ["这门课程以口语为主。", "这门课程以口语是主。", "这门课程为口语以主。", "这门课程以口语为例。"], answer: 0,
      why: ["Goed: 以 X 为主 = vooral X.", "In het tweede deel staat 为, niet 是.", "以 komt eerst, 为 daarna.", "为例 betekent \"als voorbeeld\", niet \"vooral\"."] },
    { type: "mc", q: "公司以扩大海外市场为___。(Het doel van het bedrijf is de buitenlandse markt uitbreiden.)",
      options: ["目标", "例", "原因", "结果"], answer: 0,
      why: ["Goed: 以……为目标 = als doel hebben.", "为例 betekent \"als voorbeeld\".", "原因 is een reden, geen doel.", "结果 is een uitkomst, geen doel."] },
    { type: "order", q: "Zet in de goede volgorde: \"Het ziekenhuis stelt de patiënt centraal.\"",
      tokens: [["医院", "yīyuàn"], ["以", "yǐ"], ["病人", "bìngrén"], ["为", "wéi"], ["中心", "zhōngxīn"]] },
    { type: "mc", q: "Hoe spreek je 为 uit in 以客户为中心?",
      options: ["wéi", "wèi", "wěi", "wēi"], answer: 0,
      why: ["Goed: in 以……为…… is het wéi (\"als, zijn\").", "wèi betekent \"voor, ten behoeve van\": een ander woord.", "wěi is geen uitspraak van 为.", "wēi is geen uitspraak van 为."] },
    { type: "mc", q: "Welke zin is NIET goed?",
      options: ["他以我为他哥哥了。", "我们以他为榜样。", "考试时间以北京时间为准。", "这家医院以病人为中心。"], answer: 0,
      why: ["Goed: een vergissing is geen principe. Zeg: 他把我当成他哥哥了。", "Dit kan: 以……为榜样 = als voorbeeld nemen.", "Dit kan: 以……为准 = is maatgevend.", "Dit kan: 以……为中心 = centraal stellen."] },
    { type: "mc", q: "我以为会议三点开始，其实是两点。Wat betekent 以为 hier?",
      options: ["Ik dacht (ten onrechte) dat de vergadering om drie uur begon.", "Ik nam drie uur als uitgangspunt voor de vergadering.", "Ik besloot dat de vergadering om drie uur begon.", "Ik wist zeker dat de vergadering om drie uur begon."], answer: 0,
      why: ["Goed: 以为 is één woord: (ten onrechte) denken. 其实 laat zien dat het fout was.", "Dat zou 以……为…… zijn, met iets ertussen. Hier staat 以为 als één woord.", "以为 is denken, niet besluiten.", "以为 gaat juist over een idee dat niet klopt."] },
    { type: "mc", q: "报名截止日期以网上公告为准。Wat betekent dit?",
      options: ["Voor de inschrijfdeadline geldt wat online is aangekondigd.", "De inschrijfdeadline staat vooral online.", "De online aankondiging is een voorbeeld van een deadline.", "De deadline is het doel van de online aankondiging."], answer: 0,
      why: ["Goed: 以 X 为准 = X is maatgevend.", "\"Vooral\" is 为主, niet 为准.", "\"Als voorbeeld\" is 为例.", "\"Als doel\" is 为目标."] },
    { type: "order", q: "Zet in de goede volgorde: \"Voor de examentijd geldt de Beijingse tijd.\"",
      tokens: [["考试时间", "kǎoshì shíjiān"], ["以", "yǐ"], ["北京时间", "Běijīng shíjiān"], ["为准", "wéi zhǔn"]] },
    { type: "fill", q: "___北京为例，地铁线路已经超过二十条。(Neem Beijing als voorbeeld: er zijn al meer dan twintig metrolijnen.)", answers: ["以"],
      hint: "Welk woord hoort vóór X in 以……为例?", why: "以 + voorbeeld + 为例. In spreektaal zeg je 拿北京来说." },
    { type: "open", q: "Schrijf een formele zin met 以……为例 over jouw land.",
      model: ["以荷兰为例，很多人骑自行车上班。", "以我的国家为例，农业非常发达。"],
      tip: "Check: 以 + voorbeeld + 为例 vooraan, dan een komma en de uitleg." },
    { type: "open", q: "Vertaal (formeel): \"Deze training richt zich vooral op de praktijk.\"",
      model: ["这次培训以实践为主。", "本次培训以实际操作为主。"],
      tip: "Check: 以 + X + 为主, met 为 (wéi) en zonder 是." }
  ],
  review: [
    { type: "mc", q: "\"De economie van deze regio draait vooral op toerisme.\"",
      options: ["这个地区的经济以旅游业为主。", "这个地区的经济以旅游业是主。", "这个地区的经济为旅游业以主。", "这个地区的经济以旅游业为主要。"], answer: 0,
      why: ["Goed.", "In het tweede deel staat 为, niet 是.", "以 komt eerst, 为 daarna.", "De vaste vorm is 为主, zonder 要."] },
    { type: "mc", q: "\"Laten we Japan als voorbeeld nemen.\" 我们以日本___例。",
      options: ["为", "是", "对", "把"], answer: 0,
      why: ["Goed: 以……为例.", "In deze vaste vorm staat 为, niet 是.", "对 betekent \"tegenover, voor\": dat past hier niet.", "把 hoort niet in 以……为例."] },
    { type: "mc", q: "Een schoolreglement: \"Bij twijfel geldt de Chinese tekst.\" 如有疑问，以中文版本为___。",
      options: ["准", "例", "主", "荣"], answer: 0,
      why: ["Goed: 以……为准 = is maatgevend.", "为例 = als voorbeeld. Dat past niet bij een regel.", "为主 = vooral. Dat zegt niet welke tekst geldt.", "为荣 = trots zijn op. Dat past hier niet."] }
  ]
})
