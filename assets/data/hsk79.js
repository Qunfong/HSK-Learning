// HSK 7-9 lessons (formal, written Chinese). Vocabulary is level-appropriate practice, not a certified official HSK 3.0 list.
// Question types: mc (answer = index), order (tokens in the right order), open (self-check with model answers).
// "review" questions never appear in the lesson itself; they come back on the review page.
window.HSK = window.HSK || {};
window.HSK.hsk79 = {
  level: "HSK 7–9", dir: "hsk7-9",
  lessons: [
    {
      id: "01", slug: "jianyu", title: "Gezien ... met 鉴于", sub: "Een formele reden vóór een besluit",
      canDo: "Je kunt nu in formele tekst een besluit onderbouwen met 鉴于, en je weet dat je in gesprek 因为 of 考虑到 zegt.",
      guess: {
        q: "鉴于天气原因，比赛推迟举行。Wat betekent dit, denk je?",
        options: ["Gezien het weer wordt de wedstrijd uitgesteld.", "Ondanks het weer gaat de wedstrijd gewoon door.", "Als het weer goed is, gaat de wedstrijd door.", "Na het slechte weer begint de wedstrijd weer."], answer: 0,
        why: ["Goed: 鉴于 noemt de reden waarom iets besloten wordt.", "鉴于 is geen tegenstelling. \"Ondanks\" is 尽管.", "鉴于 is geen voorwaarde. \"Als\" is 如果.", "鉴于 zegt niets over tijd of volgorde."]
      },
      problem: "In een officiële tekst onderbouw je een besluit. Eerst noem je de feiten, dan het besluit. 因为 klinkt dan te gewoon. Daarvoor is 鉴于 (jiànyú): \"gezien\" of \"in aanmerking nemend dat\".",
      pattern: [
        { l: "gezien", v: "鉴于", c: 2, key: true }, { l: "feit / situatie", v: "目前的情况", c: 3 }, { l: "wie", v: "公司", c: 1 },
        { l: "besluit", v: "决定", c: 4 }, { l: "maatregel", v: "暂停招聘", c: 5 }
      ],
      patternCap: "鉴于 + feit of situatie，+ besluit, advies of maatregel · spreektaal: 因为 / 考虑到",
      rules: [
        "鉴于 staat aan het begin van de zin, vóór het feit.",
        "Het tweede deel is een besluit, advies of maatregel.",
        "Het is schrijftaal: brieven, regels, nieuws. In gesprek zeg je 因为 of 考虑到.",
        "Vaste formules: 鉴于此 (gezien dit) en 鉴于以上原因 (om bovenstaande redenen)."
      ],
      pitfall: "鉴于 hoort bij een bewuste keuze. Voor een gewoon gevolg gebruik je 因为: 因为下雨，路很湿, niet 鉴于下雨，路很湿.",
      examples: [
        { cn: "鉴于目前的情况，公司决定暂停招聘。", py: "Jiànyú mùqián de qíngkuàng, gōngsī juédìng zàntíng zhāopìn.", nl: "Gezien de huidige situatie besluit het bedrijf de werving tijdelijk stop te zetten." },
        { cn: "鉴于以上原因，我们建议推迟这个项目。", py: "Jiànyú yǐshàng yuányīn, wǒmen jiànyì tuīchí zhège xiàngmù.", nl: "Om bovenstaande redenen adviseren wij dit project uit te stellen." },
        { cn: "鉴于该产品存在安全隐患，厂家已全部召回。", py: "Jiànyú gāi chǎnpǐn cúnzài ānquán yǐnhuàn, chǎngjiā yǐ quánbù zhàohuí.", nl: "Gezien de veiligheidsrisico's van het product heeft de fabrikant alles teruggeroepen." }
      ],
      vocab: [],
      dialogue: [
        ["A", "最近订单明显减少，大家有什么看法？", "Zuìjìn dìngdān míngxiǎn jiǎnshǎo, dàjiā yǒu shénme kànfǎ?", "De orders zijn de laatste tijd duidelijk gedaald. Wat vinden jullie?"],
        ["B", "鉴于目前的局势，我建议暂停新项目。", "Jiànyú mùqián de júshì, wǒ jiànyì zàntíng xīn xiàngmù.", "Gezien de huidige situatie stel ik voor nieuwe projecten te pauzeren."],
        ["A", "那已经开始的项目呢？", "Nà yǐjīng kāishǐ de xiàngmù ne?", "En de projecten die al begonnen zijn?"],
        ["B", "可以继续，但要采取更谨慎的措施。", "Kěyǐ jìxù, dàn yào cǎiqǔ gèng jǐnshèn de cuòshī.", "Die kunnen doorgaan, maar met voorzichtigere maatregelen."],
        ["A", "好。鉴于大家意见一致，就这么决定。", "Hǎo. Jiànyú dàjiā yìjiàn yízhì, jiù zhème juédìng.", "Goed. Gezien iedereen het eens is, besluiten we het zo."]
      ],
      questions: [
        { type: "mc", q: "\"Gezien het slechte weer heeft het vliegveld alle vluchten geschrapt.\"",
          options: ["鉴于天气恶劣，机场取消了全部航班。", "尽管天气恶劣，机场取消了全部航班。", "天气恶劣鉴于，机场取消了全部航班。", "即使天气恶劣，机场取消了全部航班。"], answer: 0,
          why: ["Goed: 鉴于 + feit vooraan, dan het besluit.", "尽管 betekent \"ondanks\": dat is een tegenstelling.", "鉴于 staat vóór het feit, niet erachter.", "即使 betekent \"zelfs als\" en vraagt om 也."] },
        { type: "mc", q: "Een officiële mededeling: ___以上原因，本次活动取消。",
          options: ["鉴于", "尽管", "即使", "除了"], answer: 0,
          why: ["Goed: 鉴于以上原因 = om bovenstaande redenen.", "尽管 betekent \"ondanks\": dat past niet bij een reden.", "即使 betekent \"zelfs als\" en vraagt om 也.", "除了 betekent \"behalve\": dat geeft geen reden."] },
        { type: "order", q: "Zet in de goede volgorde: \"Om bovenstaande redenen wordt deze vergadering naar volgende week verplaatst.\" (Begin met 鉴于.)",
          tokens: [["鉴于", "jiànyú"], ["以上原因，", "yǐshàng yuányīn,"], ["本次会议", "běn cì huìyì"], ["改在", "gǎi zài"], ["下周举行", "xià zhōu jǔxíng"]] },
        { type: "mc", q: "Welke zin gebruikt 鉴于 NIET goed?",
          options: ["鉴于他个子很高，他的衣服都很大。", "鉴于病情严重，医生决定马上手术。", "鉴于交通拥堵，政府决定修建地铁。", "鉴于成本上涨，公司决定提高价格。"], answer: 0,
          why: ["Goed: hier is geen besluit, alleen een gevolg. Zeg: 因为他个子很高，所以衣服都很大。", "Dit kan: gezien de ernst besluit de arts te opereren.", "Dit kan: gezien de files besluit de overheid een metro te bouwen.", "Dit kan: gezien de hogere kosten besluit het bedrijf de prijs te verhogen."] },
        { type: "open", q: "Schrijf een formele zin: \"Gezien de hoge kosten stelt de gemeente het project uit.\"", model: ["鉴于成本过高，市政府决定推迟这个项目。", "鉴于费用太高，市政府推迟了该项目。"],
          tip: "Check: staat 鉴于 vooraan, en volgt er een besluit (决定, 推迟)?" }
      ],
      review: [
        { type: "mc", q: "\"Gezien de klachten van klanten heeft het bedrijf de regels aangepast.\"",
          options: ["鉴于顾客的投诉，公司修改了规定。", "尽管顾客的投诉，公司修改了规定。", "顾客的投诉鉴于，公司修改了规定。", "即使顾客的投诉，公司修改了规定。"], answer: 0,
          why: ["Goed.", "尽管 betekent \"ondanks\": dat is geen reden.", "鉴于 staat vóór het feit.", "即使 betekent \"zelfs als\" en vraagt om 也."] },
        { type: "mc", q: "Officiële notulen: ___双方意见不同，会议决定下次再讨论。",
          options: ["鉴于", "即使", "不但", "只要"], answer: 0,
          why: ["Goed: gezien het verschil van mening volgt een besluit.", "即使 betekent \"zelfs als\" en vraagt om 也.", "不但 vraagt om 而且 in het tweede deel.", "只要 betekent \"als ... maar\" en vraagt om 就."] }
      ]
    },
    {
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
      patternCap: "以 X 为 Y = X als Y nemen · 以……为主 (vooral) · 以……为目标 (als doel) · 以……为例 (als voorbeeld) · spreektaal: 主要是 / 把……当作……",
      rules: [
        "为 spreek je hier uit als wéi, niet wèi.",
        "Y is meestal kort: 主, 例, 目标, 中心, 重点.",
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
      vocab: [],
      dialogue: [
        ["记者", "贵公司的宗旨是什么？", "Guì gōngsī de zōngzhǐ shì shénme?", "Wat is de missie van uw bedrijf?"],
        ["经理", "我们始终以客户为中心。", "Wǒmen shǐzhōng yǐ kèhù wéi zhōngxīn.", "Wij stellen altijd de klant centraal."],
        ["记者", "今年的重点是什么？", "Jīnnián de zhòngdiǎn shì shénme?", "Wat is dit jaar het zwaartepunt?"],
        ["经理", "今年以提高效率为目标，市场以国内为主。", "Jīnnián yǐ tígāo xiàolǜ wéi mùbiāo, shìchǎng yǐ guónèi wéi zhǔ.", "Dit jaar is het doel de efficiëntie te verhogen. De markt is vooral binnenlands."],
        ["记者", "能举个例子吗？", "Néng jǔ ge lìzi ma?", "Kunt u een voorbeeld geven?"],
        ["经理", "以我们的新工厂为例，生产时间缩短了一半。", "Yǐ wǒmen de xīn gōngchǎng wéi lì, shēngchǎn shíjiān suōduǎn le yíbàn.", "Neem onze nieuwe fabriek: de productietijd is gehalveerd."]
      ],
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
        { type: "open", q: "Schrijf een formele zin met 以……为例 over jouw land.", model: ["以荷兰为例，很多人骑自行车上班。", "以我的国家为例，农业非常发达。"],
          tip: "Check: 以 + voorbeeld + 为例 vooraan, dan een komma en de uitleg." }
      ],
      review: [
        { type: "mc", q: "\"De economie van deze regio draait vooral op toerisme.\"",
          options: ["这个地区的经济以旅游业为主。", "这个地区的经济以旅游业是主。", "这个地区的经济为旅游业以主。", "这个地区的经济以旅游业为主要。"], answer: 0,
          why: ["Goed.", "In het tweede deel staat 为, niet 是.", "以 komt eerst, 为 daarna.", "De vaste vorm is 为主, zonder 要."] },
        { type: "mc", q: "\"Laten we Japan als voorbeeld nemen.\" 我们以日本___例。",
          options: ["为", "是", "对", "把"], answer: 0,
          why: ["Goed: 以……为例.", "In deze vaste vorm staat 为, niet 是.", "对 betekent \"tegenover, voor\": dat past hier niet.", "把 hoort niet in 以……为例."] }
      ]
    },
    {
      id: "03", slug: "yuyi", title: "予以", sub: "Formeel: verlenen, toepassen",
      canDo: "Je kunt nu in regels en officiële brieven zeggen dat een instantie iets goedkeurt, steunt of bestraft, met 予以 en 不予.",
      guess: {
        q: "对违反规定的人，学校将予以处罚。Wat betekent dit, denk je?",
        options: ["Wie de regels overtreedt, krijgt van de school een straf.", "Wie de regels overtreedt, krijgt van de school hulp.", "De school overtreedt de regels en krijgt een straf.", "De school schaft de straf voor overtreders af."], answer: 0,
        why: ["Goed: 予以 + 处罚 = een straf opleggen.", "处罚 betekent straf, niet hulp.", "De school geeft de straf; zij krijgt hem niet.", "予以 betekent toepassen, niet afschaffen."]
      },
      problem: "In regels en officiële brieven zeg je niet 给他们罚款. Je zegt dat een instantie een maatregel toepast. Daarvoor is 予以 (yǔyǐ): \"verlenen, toepassen\". Erna komt een werkwoord van twee lettergrepen, zoals 支持, 批准 of 处罚.",
      pattern: [
        { l: "wie", v: "政府", c: 1 }, { l: "zal", v: "将", c: 3 }, { l: "予以", v: "予以", c: 2, key: true }, { l: "handeling", v: "支持", c: 4 }
      ],
      patternCap: "(对 + wie,) instantie + 予以 + werkwoord van twee lettergrepen: 予以批准, 予以支持, 予以处罚, 予以表扬 · ontkennen: 不予 · spreektaal: 给 ... / gewoon 支持, 批准",
      rules: [
        "Na 予以 komt een werkwoord van twee lettergrepen, soms met een bijwoord ervoor (大力支持). Er komt geen object achter.",
        "Wie het krijgt, noem je vóór 予以, vaak met 对: 对优秀员工予以表扬。",
        "Het is zeer formeel: wetten, regels, besluiten. In gesprek zeg je gewoon 支持 of 批准.",
        "Ontkennen doe je met 不予: 不予批准, 不予受理."
      ],
      pitfall: "Zet geen object achter het werkwoord: 予以支持他们 is fout. Zeg: 对他们予以支持。",
      examples: [
        { cn: "对违反规定的行为，公司将予以处罚。", py: "Duì wéifǎn guīdìng de xíngwéi, gōngsī jiāng yǔyǐ chǔfá.", nl: "Overtredingen van de regels worden door het bedrijf bestraft." },
        { cn: "政府对中小企业予以大力支持。", py: "Zhèngfǔ duì zhōngxiǎo qǐyè yǔyǐ dàlì zhīchí.", nl: "De overheid steunt het mkb krachtig." },
        { cn: "您的申请已予以批准。", py: "Nín de shēnqǐng yǐ yǔyǐ pīzhǔn.", nl: "Uw aanvraag is goedgekeurd." },
        { cn: "材料不全的申请，一律不予受理。", py: "Cáiliào bù quán de shēnqǐng, yílǜ bù yǔ shòulǐ.", nl: "Aanvragen met onvolledige stukken worden niet in behandeling genomen." }
      ],
      vocab: [],
      dialogue: [
        ["记者", "对于这次食品安全问题，政府会怎么处理？", "Duìyú zhè cì shípǐn ānquán wèntí, zhèngfǔ huì zěnme chǔlǐ?", "Hoe gaat de overheid om met dit voedselveiligheidsprobleem?"],
        ["发言人", "我们高度关注此事。对违法企业，将依法予以处罚。", "Wǒmen gāodù guānzhù cǐ shì. Duì wéifǎ qǐyè, jiāng yīfǎ yǔyǐ chǔfá.", "Wij volgen deze zaak nauwlettend. Bedrijven die de wet overtreden, worden volgens de wet bestraft."],
        ["记者", "受影响的消费者能得到赔偿吗？", "Shòu yǐngxiǎng de xiāofèizhě néng dédào péicháng ma?", "Krijgen de getroffen consumenten een vergoeding?"],
        ["发言人", "符合条件的申请，我们都会予以受理。", "Fúhé tiáojiàn de shēnqǐng, wǒmen dōu huì yǔyǐ shòulǐ.", "Aanvragen die aan de voorwaarden voldoen, nemen wij allemaal in behandeling."]
      ],
      questions: [
        { type: "mc", q: "\"De overheid steunt deze projecten.\" (officieel)",
          options: ["政府对这些项目予以支持。", "政府予以支持这些项目。", "政府对这些项目支持予以。", "政府对这些项目不予支持。"], answer: 0,
          why: ["Goed: 对 + wie, dan 予以 + werkwoord.", "Na 予以 + werkwoord komt geen object.", "予以 staat vóór het werkwoord.", "不予 betekent juist \"niet\": dat is het omgekeerde."] },
        { type: "mc", q: "Een brief: \"Uw aanvraag wordt niet goedgekeurd.\" 您的申请___批准。",
          options: ["不予", "予以", "别予", "没予"], answer: 0,
          why: ["Goed: 不予批准 = niet goedkeuren.", "予以批准 betekent juist wél goedkeuren.", "别 is een verbod (\"doe niet\"), geen besluit.", "De vaste ontkenning bij 予 is 不, niet 没."] },
        { type: "order", q: "Zet in de goede volgorde: \"Het bedrijf prijst uitstekende werknemers.\"",
          tokens: [["公司", "gōngsī"], ["对", "duì"], ["优秀员工", "yōuxiù yuángōng"], ["予以", "yǔyǐ"], ["表扬", "biǎoyáng"]] },
        { type: "mc", q: "Welke zin klopt?",
          options: ["对迟到的学生，学校予以批评。", "对迟到的学生，学校予以批评他们。", "对迟到的学生，学校予以骂。", "学校予以对迟到的学生批评。"], answer: 0,
          why: ["Goed: wie het krijgt staat vooraan, na 予以 alleen het werkwoord.", "Na 予以 + werkwoord komt geen object.", "Na 予以 komt een formeel werkwoord van twee lettergrepen, niet 骂.", "Het deel met 对 staat vóór 予以."] },
        { type: "open", q: "Schrijf een officiële regel: \"Wie te laat betaalt, krijgt een boete.\"", model: ["对逾期付款的人，将予以罚款。", "逾期付款者，一律予以罚款。"],
          tip: "Check: wie het krijgt staat vóór 予以, en na 予以 komt alleen een werkwoord van twee lettergrepen." }
      ],
      review: [
        { type: "mc", q: "\"De school prijst deze leerlingen.\" (officieel bericht)",
          options: ["学校对这些学生予以表扬。", "学校予以表扬这些学生。", "学校对这些学生表扬予以。", "学校对这些学生不予表扬。"], answer: 0,
          why: ["Goed.", "Na 予以 + werkwoord komt geen object.", "予以 staat vóór het werkwoord.", "不予 betekent \"niet\": dat is het omgekeerde."] },
        { type: "mc", q: "Een regel: \"Te late aanvragen worden niet in behandeling genomen.\" 逾期的申请一律___受理。",
          options: ["不予", "予以", "别予", "没予"], answer: 0,
          why: ["Goed: 不予受理 = niet in behandeling nemen.", "予以受理 betekent juist wél in behandeling nemen.", "别 is een verbod, geen regel van een instantie.", "De vaste ontkenning bij 予 is 不, niet 没."] }
      ]
    },
    {
      id: "04", slug: "naizhi", title: "乃至", sub: "En zelfs, tot aan",
      canDo: "Je kunt nu in formele tekst een reeks laten oplopen naar het grootste punt met 乃至, en je weet dat je in gesprek 甚至 zegt.",
      guess: {
        q: "这个问题影响了整个城市，乃至全国。Wat betekent dit, denk je?",
        options: ["Het probleem raakt de hele stad en zelfs het hele land.", "Het probleem raakt de hele stad, maar niet het land.", "Het probleem raakt het land, maar niet de stad.", "Het probleem raakt de stad of het hele land."], answer: 0,
        why: ["Goed: 乃至 voegt iets groters toe: \"en zelfs\".", "乃至 sluit niets uit; het breidt uit.", "De stad hoort er ook bij; 乃至 voegt alleen toe.", "乃至 is geen keuze zoals 或者."]
      },
      problem: "Je somt dingen op en het laatste is het grootste of meest verrassende. In het Nederlands zeg je \"en zelfs\" of \"tot aan\". In schrijftaal is dat 乃至 (nǎizhì). In gesprek zeg je 甚至.",
      pattern: [
        { l: "A", v: "个人", c: 3 }, { l: "B", v: "家庭", c: 4 }, { l: "en zelfs", v: "乃至", c: 2, key: true }, { l: "grootste C", v: "整个社会", c: 5 }
      ],
      patternCap: "A、B 乃至 C · C is het grootste of verst gaande punt · spreektaal: 甚至",
      rules: [
        "乃至 staat vóór het laatste, grootste deel van de reeks.",
        "De reeks loopt op: van klein naar groot, of van gewoon naar verrassend.",
        "Meestal verbind je zelfstandige naamwoorden: 城市乃至国家.",
        "Het is schrijftaal. In gesprek zeg je 甚至."
      ],
      pitfall: "Zet het grootste deel achteraan. 全世界乃至中国 is fout. Zeg 中国乃至全世界.",
      examples: [
        { cn: "这项技术将改变整个行业，乃至整个社会。", py: "Zhè xiàng jìshù jiāng gǎibiàn zhěnggè hángyè, nǎizhì zhěnggè shèhuì.", nl: "Deze technologie zal de hele sector veranderen, en zelfs de hele samenleving." },
        { cn: "环境污染影响着个人、家庭乃至后代的健康。", py: "Huánjìng wūrǎn yǐngxiǎng zhe gèrén, jiātíng nǎizhì hòudài de jiànkāng.", nl: "Milieuvervuiling tast de gezondheid aan van individuen, gezinnen en zelfs volgende generaties." },
        { cn: "他的研究在中国乃至全世界都很有影响。", py: "Tā de yánjiū zài Zhōngguó nǎizhì quán shìjiè dōu hěn yǒu yǐngxiǎng.", nl: "Zijn onderzoek heeft veel invloed in China en zelfs in de hele wereld." },
        { cn: "这个错误可能造成几个月乃至几年的损失。", py: "Zhège cuòwù kěnéng zàochéng jǐ ge yuè nǎizhì jǐ nián de sǔnshī.", nl: "Deze fout kan maanden en zelfs jaren aan schade veroorzaken." }
      ],
      vocab: [],
      dialogue: [
        ["主持人", "您怎么看人工智能的发展？", "Nín zěnme kàn réngōng zhìnéng de fāzhǎn?", "Hoe kijkt u naar de ontwikkeling van AI?"],
        ["教授", "它会影响教育、医疗乃至整个社会。", "Tā huì yǐngxiǎng jiàoyù, yīliáo nǎizhì zhěnggè shèhuì.", "Het zal onderwijs, zorg en zelfs de hele samenleving beïnvloeden."],
        ["主持人", "影响的范围有多大？", "Yǐngxiǎng de fànwéi yǒu duō dà?", "Hoe groot is de reikwijdte?"],
        ["教授", "不只在中国。在亚洲乃至全世界，很多人都在研究它。", "Bù zhǐ zài Zhōngguó. Zài Yàzhōu nǎizhì quán shìjiè, hěn duō rén dōu zài yánjiū tā.", "Niet alleen in China. In Azië en zelfs de hele wereld onderzoeken veel mensen het."],
        ["主持人", "那我们普通人应该怎么准备？", "Nà wǒmen pǔtōng rén yīnggāi zěnme zhǔnbèi?", "Hoe moeten gewone mensen zich dan voorbereiden?"],
        ["教授", "终身学习。这关系到个人、家庭乃至后代的发展。", "Zhōngshēn xuéxí. Zhè guānxì dào gèrén, jiātíng nǎizhì hòudài de fāzhǎn.", "Levenslang leren. Dat raakt de ontwikkeling van individuen, gezinnen en zelfs volgende generaties."]
      ],
      questions: [
        { type: "mc", q: "\"Dit beleid raakt de provincie en zelfs het hele land.\"",
          options: ["这项政策影响到全省乃至全国。", "这项政策影响到全国乃至全省。", "这项政策乃至影响到全省全国。", "这项政策影响到全省或者全国。"], answer: 0,
          why: ["Goed: het grootste deel (全国) staat na 乃至.", "De reeks loopt op: het grootste deel komt achteraan.", "乃至 staat vóór het laatste deel van de reeks.", "或者 is een keuze, geen \"en zelfs\"."] },
        { type: "mc", q: "Welk woord gebruik je in een gesprek met een vriend in plaats van 乃至?",
          options: ["甚至", "或者", "但是", "所以"], answer: 0,
          why: ["Goed: 甚至 = zelfs, de spreektaal-variant.", "或者 is een keuze (\"of\").", "但是 is een tegenstelling (\"maar\").", "所以 geeft een gevolg (\"dus\")."] },
        { type: "order", q: "Zet in de goede volgorde: \"Deze zaak raakt het bedrijf en zelfs de hele sector.\"",
          tokens: [["这件事", "zhè jiàn shì"], ["影响到", "yǐngxiǎng dào"], ["公司", "gōngsī"], ["乃至", "nǎizhì"], ["整个行业", "zhěnggè hángyè"]] },
        { type: "mc", q: "他的作品在亚洲乃至___都很有名。",
          options: ["全世界", "一个城市", "他家附近", "一个小村"], answer: 0,
          why: ["Goed: na 乃至 komt iets groters dan Azië.", "Een stad is kleiner dan Azië: de reeks moet oplopen.", "De buurt is kleiner dan Azië: de reeks moet oplopen.", "Een dorp is kleiner dan Azië: de reeks moet oplopen."] },
        { type: "open", q: "Schrijf een formele zin met 乃至 over iets dat steeds verder reikt.", model: ["这个问题影响到学校乃至整个城市。", "学好中文对工作乃至生活都有帮助。"],
          tip: "Check: staat het grootste of verst gaande deel achter 乃至?" }
      ],
      review: [
        { type: "mc", q: "\"Deze fout kan weken en zelfs maanden vertraging geven.\"",
          options: ["这个错误可能造成几周乃至几个月的延误。", "这个错误可能造成几个月乃至几周的延误。", "这个错误乃至可能造成几周几个月的延误。", "这个错误可能造成几周或者几个月的延误。"], answer: 0,
          why: ["Goed.", "De reeks loopt op: maanden komen na weken.", "乃至 staat vóór het laatste deel van de reeks.", "或者 is \"of\", niet \"en zelfs\"."] },
        { type: "mc", q: "Een rapport: 这一发现对医学___整个科学界都有重要意义。",
          options: ["乃至", "不但", "因此", "即使"], answer: 0,
          why: ["Goed: geneeskunde en zelfs de hele wetenschap.", "不但 staat vóór het eerste deel en vraagt om 而且.", "因此 geeft een gevolg (\"daarom\").", "即使 betekent \"zelfs als\" en vraagt om 也."] }
      ]
    },
    {
      id: "05", slug: "weiyou", title: "唯有 ... 才", sub: "Alleen als ..., dan pas",
      canDo: "Je kunt nu in formele tekst de enige voorwaarde voor een resultaat noemen met 唯有……才, en je weet dat je in gesprek 只有……才 zegt.",
      guess: {
        q: "唯有坚持，才能成功。Wat betekent dit, denk je?",
        options: ["Alleen met volharding kun je slagen.", "Met volharding slaag je altijd meteen.", "Zelfs met volharding kun je niet slagen.", "Zonder volharding kun je ook slagen."], answer: 0,
        why: ["Goed: 唯有 ... 才 = alleen dit leidt tot het resultaat.", "才 betekent \"pas dan\", niet \"altijd meteen\".", "Er staat geen ontkenning in de zin.", "唯有 zegt juist dat volharding nodig is."]
      },
      problem: "Soms is er maar één weg naar een resultaat. In het Nederlands zeg je \"alleen als ..., dan pas\". In spreektaal is dat 只有 ... 才. In schrijftaal en toespraken zeg je 唯有 (wéiyǒu) ... 才 (cái).",
      pattern: [
        { l: "alleen", v: "唯有", c: 2, key: true }, { l: "enige voorwaarde", v: "不断学习", c: 3 }, { l: "wie", v: "我们", c: 1 },
        { l: "pas dan", v: "才", c: 2, key: true }, { l: "resultaat", v: "能进步", c: 5 }
      ],
      patternCap: "唯有 + enige voorwaarde，(wie) + 才 + resultaat · spreektaal: 只有……才",
      rules: [
        "唯有 staat vooraan, vóór de voorwaarde.",
        "才 staat in het tweede deel, na het onderwerp en vóór het werkwoord.",
        "Na 才 komt vaak 能 of 可以.",
        "Gebruik 才, niet 就: 就 hoort bij 只要 (\"als ... maar\")."
      ],
      pitfall: "唯有 ... 就 is fout. 只要 ... 就 = als ... maar (dat is genoeg). 唯有 ... 才 = alleen als (dat is nodig).",
      examples: [
        { cn: "唯有不断创新，企业才能生存。", py: "Wéiyǒu búduàn chuàngxīn, qǐyè cái néng shēngcún.", nl: "Alleen door steeds te vernieuwen kan een bedrijf overleven." },
        { cn: "唯有双方共同努力，问题才能得到解决。", py: "Wéiyǒu shuāngfāng gòngtóng nǔlì, wèntí cái néng dédào jiějué.", nl: "Alleen als beide partijen samen hun best doen, kan het probleem worden opgelost." },
        { cn: "唯有通过考试，才能获得证书。", py: "Wéiyǒu tōngguò kǎoshì, cái néng huòdé zhèngshū.", nl: "Alleen wie het examen haalt, krijgt het certificaat." },
        { cn: "唯有如此，我们才能赢得信任。", py: "Wéiyǒu rúcǐ, wǒmen cái néng yíngdé xìnrèn.", nl: "Alleen zo kunnen we vertrouwen winnen." }
      ],
      vocab: [],
      dialogue: [
        ["A", "这次谈判很困难，双方分歧很大。", "Zhè cì tánpàn hěn kùnnan, shuāngfāng fēnqí hěn dà.", "Deze onderhandeling is lastig. De partijen staan ver uit elkaar."],
        ["B", "是的。唯有互相让步，才能达成协议。", "Shì de. Wéiyǒu hùxiāng ràngbù, cái néng dáchéng xiéyì.", "Ja. Alleen als we allebei toegeven, komen we tot een akkoord."],
        ["A", "我们能让步多少？", "Wǒmen néng ràngbù duōshao?", "Hoeveel kunnen wij toegeven?"],
        ["B", "价格可以谈，但质量不能降低。唯有保证质量，我们才能赢得客户的信任。", "Jiàgé kěyǐ tán, dàn zhìliàng bù néng jiàngdī. Wéiyǒu bǎozhèng zhìliàng, wǒmen cái néng yíngdé kèhù de xìnrèn.", "Over de prijs valt te praten, maar de kwaliteit mag niet omlaag. Alleen met goede kwaliteit winnen we het vertrouwen van klanten."],
        ["A", "同意。", "Tóngyì.", "Akkoord."]
      ],
      questions: [
        { type: "mc", q: "\"Alleen door hard te werken kun je je doel bereiken.\"",
          options: ["唯有努力，才能实现目标。", "唯有努力，就能实现目标。", "才有努力，唯能实现目标。", "唯有努力，也能实现目标。"], answer: 0,
          why: ["Goed: 唯有 ... 才.", "就 hoort bij 只要, niet bij 唯有.", "唯有 en 才 zijn omgewisseld.", "也 hoort bij 即使 (\"zelfs als\")."] },
        { type: "mc", q: "Hoe zeg je 唯有坚持，才能成功 in spreektaal?",
          options: ["只有坚持，才能成功。", "只要坚持，才能成功。", "只有坚持，就能成功。", "虽然坚持，才能成功。"], answer: 0,
          why: ["Goed: 只有 ... 才 is de spreektaal-variant.", "只要 hoort bij 就, niet bij 才.", "只有 hoort bij 才, niet bij 就.", "虽然 betekent \"hoewel\" en vraagt om 但是."] },
        { type: "order", q: "Zet in de goede volgorde: \"Alleen zo kan het probleem worden opgelost.\"",
          tokens: [["唯有", "wéiyǒu"], ["如此", "rúcǐ"], ["才能", "cái néng"], ["解决", "jiějué"], ["问题", "wèntí"]] },
        { type: "mc", q: "唯有经过专业培训，员工___能上岗。",
          options: ["才", "就", "也", "都"], answer: 0,
          why: ["Goed: 唯有 ... 才.", "就 hoort bij 只要, niet bij 唯有.", "也 hoort bij 即使.", "都 past niet bij 唯有: het gaat om één voorwaarde."] },
        { type: "open", q: "Schrijf een formele zin met 唯有 ... 才 over het leren van Chinees.", model: ["唯有每天练习，才能真正掌握中文。", "唯有多读多写，我们的中文水平才能提高。"],
          tip: "Check: 唯有 vooraan, 才 vóór het werkwoord in het tweede deel, en geen 就." }
      ],
      review: [
        { type: "mc", q: "\"Alleen als iedereen de regels volgt, kan het systeem goed werken.\"",
          options: ["唯有人人遵守规则，系统才能正常运行。", "唯有人人遵守规则，系统就能正常运行。", "唯有人人遵守规则，才系统能正常运行。", "唯有人人遵守规则，系统也能正常运行。"], answer: 0,
          why: ["Goed.", "就 hoort bij 只要, niet bij 唯有.", "才 staat na het onderwerp, niet ervoor.", "也 hoort bij 即使."] },
        { type: "mc", q: "Een officieel rapport: ___加强管理，才能减少事故。",
          options: ["唯有", "只要", "虽然", "即使"], answer: 0,
          why: ["Goed: 唯有 ... 才.", "只要 vraagt om 就, niet om 才.", "虽然 betekent \"hoewel\" en vraagt om 但是.", "即使 betekent \"zelfs als\" en vraagt om 也."] }
      ]
    },
    {
      id: "06", slug: "tangruo", title: "倘若 ... 便/就", sub: "Formeel: indien ..., dan ...",
      canDo: "Je kunt nu in contracten en regels een voorwaarde en gevolg formuleren met 倘若……便/就, en je weet dat je in gesprek 如果……就 zegt.",
      guess: {
        q: "倘若明天下雨，比赛便取消。Wat betekent dit, denk je?",
        options: ["Indien het morgen regent, gaat de wedstrijd niet door.", "Omdat het morgen regent, gaat de wedstrijd niet door.", "Hoewel het morgen regent, gaat de wedstrijd gewoon door.", "Ook als het morgen regent, gaat de wedstrijd gewoon door."], answer: 0,
        why: ["Goed: 倘若 = indien. 便 = dan.", "倘若 is een voorwaarde, geen zekere reden zoals 因为.", "倘若 is geen tegenstelling zoals 虽然.", "\"Ook als\" zou 即使 ... 也 zijn."]
      },
      problem: "In contracten en regels beschrijf je wat er gebeurt in een bepaald geval. In gesprek zeg je 如果 ... 就. In schrijftaal zeg je 倘若 (tǎngruò) ... 便 (biàn) of 就. 便 is de formele vorm van 就.",
      pattern: [
        { l: "indien", v: "倘若", c: 2, key: true }, { l: "voorwaarde", v: "对方违约", c: 3 }, { l: "wie", v: "本公司", c: 1 },
        { l: "dan", v: "便", c: 2, key: true }, { l: "gevolg", v: "有权终止合同", c: 5 }
      ],
      patternCap: "倘若 + voorwaarde，(wie) + 便/就 + gevolg · spreektaal: 如果……就 / 要是……就",
      rules: [
        "倘若 staat aan het begin van de voorwaarde.",
        "便 of 就 staat in het tweede deel, na het onderwerp en vóór het werkwoord.",
        "便 is formeler dan 就. In schrijftaal passen beide.",
        "In gesprek zeg je 如果 ... 就 of 要是 ... 就."
      ],
      pitfall: "便 en 就 staan nooit vóór het onderwerp. 倘若你同意，便我们签合同 is fout. Zeg: 倘若你同意，我们便签合同。",
      examples: [
        { cn: "倘若对方违约，本公司便有权终止合同。", py: "Tǎngruò duìfāng wéiyuē, běn gōngsī biàn yǒu quán zhōngzhǐ hétong.", nl: "Indien de wederpartij het contract schendt, heeft ons bedrijf het recht het contract te beëindigen." },
        { cn: "倘若发现问题，请立即报告。", py: "Tǎngruò fāxiàn wèntí, qǐng lìjí bàogào.", nl: "Indien u een probleem ontdekt, meld het dan onmiddellijk." },
        { cn: "倘若没有大家的支持，这个项目就不可能完成。", py: "Tǎngruò méiyǒu dàjiā de zhīchí, zhège xiàngmù jiù bù kěnéng wánchéng.", nl: "Zonder de steun van iedereen kan dit project niet worden voltooid." },
        { cn: "倘若天气良好，活动便在室外举行。", py: "Tǎngruò tiānqì liánghǎo, huódòng biàn zài shìwài jǔxíng.", nl: "Indien het weer goed is, vindt de activiteit buiten plaats." }
      ],
      vocab: [],
      dialogue: [
        ["律师", "合同第五条写得很清楚。", "Hétong dì wǔ tiáo xiě de hěn qīngchu.", "Artikel vijf van het contract is heel duidelijk."],
        ["客户", "倘若对方没有按时交货，我们怎么办？", "Tǎngruò duìfāng méiyǒu ànshí jiāohuò, wǒmen zěnme bàn?", "Wat doen we als de wederpartij niet op tijd levert?"],
        ["律师", "倘若延迟超过三十天，贵公司便有权终止合同。", "Tǎngruò yánchí chāoguò sānshí tiān, guì gōngsī biàn yǒu quán zhōngzhǐ hétong.", "Indien de vertraging meer dan dertig dagen is, heeft uw bedrijf het recht het contract te beëindigen."],
        ["客户", "那损失呢？", "Nà sǔnshī ne?", "En de schade?"],
        ["律师", "根据这一条款，对方还须支付赔偿。", "Gēnjù zhè yī tiáokuǎn, duìfāng hái xū zhīfù péicháng.", "Volgens deze clausule moet de wederpartij ook een vergoeding betalen."],
        ["客户", "好。倘若没有其他问题，我们就签字吧。", "Hǎo. Tǎngruò méiyǒu qítā wèntí, wǒmen jiù qiānzì ba.", "Goed. Als er verder geen vragen zijn, laten we tekenen."]
      ],
      questions: [
        { type: "mc", q: "\"Indien de klant het product terugstuurt, betaalt het bedrijf het geld terug.\"",
          options: ["倘若顾客退货，公司便退款。", "倘若顾客退货，便公司退款。", "倘若顾客退货，公司退款便。", "即使顾客退货，公司便退款。"], answer: 0,
          why: ["Goed: 倘若 + voorwaarde, dan onderwerp + 便.", "便 staat na het onderwerp, niet ervoor.", "便 staat vóór het werkwoord, niet achteraan.", "即使 betekent \"zelfs als\" en vraagt om 也."] },
        { type: "mc", q: "Welk woord is de spreektaal-variant van 倘若?",
          options: ["如果", "因为", "虽然", "即使"], answer: 0,
          why: ["Goed: 如果 = als, indien.", "因为 geeft een reden, geen voorwaarde.", "虽然 betekent \"hoewel\".", "即使 betekent \"zelfs als\"."] },
        { type: "order", q: "Zet in de goede volgorde: \"Indien het weer goed is, wordt de ceremonie buiten gehouden.\"",
          tokens: [["倘若", "tǎngruò"], ["天气好", "tiānqì hǎo"], ["典礼", "diǎnlǐ"], ["便", "biàn"], ["在室外举行", "zài shìwài jǔxíng"]] },
        { type: "mc", q: "倘若资金不足，项目___无法继续。",
          options: ["便", "才", "而", "却"], answer: 0,
          why: ["Goed: 倘若 ... 便 = indien ..., dan.", "才 (\"pas dan\") hoort bij 只有 of 唯有, niet bij 倘若.", "而 verbindt geen voorwaarde met een gevolg.", "却 betekent \"maar\": dat is een tegenstelling."] },
        { type: "open", q: "Schrijf een regel voor een bibliotheek met 倘若 ... 便.", model: ["倘若图书逾期未还，读者便须支付罚款。", "倘若读者损坏图书，图书馆便要求赔偿。"],
          tip: "Check: 倘若 vooraan, en 便 na het onderwerp, vóór het werkwoord." }
      ],
      review: [
        { type: "mc", q: "\"Indien de stukken onvolledig zijn, wordt de aanvraag afgewezen.\"",
          options: ["倘若材料不全，申请便被拒绝。", "倘若材料不全，便申请被拒绝。", "虽然材料不全，申请便被拒绝。", "即使材料不全，申请便被拒绝。"], answer: 0,
          why: ["Goed.", "便 staat na het onderwerp, niet ervoor.", "虽然 betekent \"hoewel\": dat is geen voorwaarde.", "即使 betekent \"zelfs als\" en vraagt om 也."] },
        { type: "mc", q: "Een officiële brief: ___贵方同意以上条款，请在合同上签字。",
          options: ["倘若", "虽然", "即使", "无论"], answer: 0,
          why: ["Goed: 倘若 = indien.", "虽然 betekent \"hoewel\" en vraagt om 但是.", "即使 betekent \"zelfs als\" en vraagt om 也.", "无论 vraagt om een vraagwoord of keuze, zoals 是否."] }
      ]
    }
  ]
};
