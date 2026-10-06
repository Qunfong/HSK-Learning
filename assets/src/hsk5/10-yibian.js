({
  id: "10", slug: "yibian", title: "以便", sub: "Iets doen zodat een doel makkelijker wordt",
  canDo: "Je kunt nu in formele taal zeggen met welk doel je iets doet, met 以便, en het onderscheiden van 以免 en 为了.",
  guess: {
    q: "请留下您的电话号码，以便我们联系您。Wat betekent dit, denk je?",
    options: ["Laat uw telefoonnummer achter, zodat we contact met u kunnen opnemen.", "Laat uw telefoonnummer achter, want we hebben contact met u opgenomen.", "Laat uw telefoonnummer achter, zodat we u niet hoeven te bellen.", "Laat uw telefoonnummer niet achter, we nemen zelf contact op."], answer: 0,
    why: ["Goed: na 以便 staat het doel van de handeling.", "以便 geeft geen reden. Het noemt wat je wilt bereiken.", "Na 以便 staat wat je wél wilt. Er staat geen ontkenning.", "请留下 vraagt juist om het nummer achter te laten."]
  },
  problem: "\"Laat uw nummer achter, zodat we u kunnen bellen.\" In formeel Chinees noem je eerst de handeling. Daarna komt 以便 (yǐbiàn) en het doel: wat door die handeling makkelijker of mogelijk wordt. Je ziet 以便 vooral in mededelingen, instructies en e-mails.",
  pattern: [
    { l: "handeling", v: "请留下电话", c: 4 }, { l: "以便", v: "以便", c: 2, key: true },
    { l: "wie", v: "我们", c: 1 }, { l: "doel", v: "联系您", c: 5 }
  ],
  patternCap: "Handeling + ，以便 (+ wie) + doel (vaak met 能 / 及时 / 更好地); spreektaal: (wie) + 好 / 好让; vooraan: 为了 + doel, handeling",
  rules: [
    "以便 staat aan het begin van het tweede deel, ná de handeling. Nooit vooraan in de zin.",
    "Na 以便 staat wat je wilt bereiken, als werkwoordgroep. Vaak met 能, 可以, 及时 of 更好地.",
    "Na 以便 mag een onderwerp staan: 以便大家参考。",
    "以便 is formeel: instructies, mededelingen, e-mails, verslagen. In gesprekken zeg je 好 of 好让.",
    "De handeling maakt het doel makkelijker. 以便 zegt dus ook: daarom doe ik dit."
  ],
  pitfall: "Begin een zin niet met 以便. Wil je het doel vooraan zetten, gebruik dan 为了: 为了准时到达，我们提前出发了。",
  examples: [
    { cn: "请留下您的电话号码，以便我们及时联系您。", py: "Qǐng liúxià nín de diànhuà hàomǎ, yǐbiàn wǒmen jíshí liánxì nín.", nl: "Laat uw telefoonnummer achter, zodat we u tijdig kunnen bereiken." },
    { cn: "会议资料请提前发给大家，以便大家准备。", py: "Huìyì zīliào qǐng tíqián fā gěi dàjiā, yǐbiàn dàjiā zhǔnbèi.", nl: "Stuur de vergaderstukken van tevoren rond, zodat iedereen zich kan voorbereiden." },
    { cn: "他上课时认真记笔记，以便复习的时候用。", py: "Tā shàngkè shí rènzhēn jì bǐjì, yǐbiàn fùxí de shíhou yòng.", nl: "Hij maakt in de les zorgvuldig aantekeningen, zodat hij ze bij het herhalen kan gebruiken." },
    { cn: "图书馆延长了开放时间，以便学生考试前复习。", py: "Túshūguǎn yánchángle kāifàng shíjiān, yǐbiàn xuésheng kǎoshì qián fùxí.", nl: "De bibliotheek heeft de openingstijden verlengd, zodat studenten voor de examens kunnen studeren." }
  ],
  nuance: [
    { h: "以便 of 以免?",
      p: "Allebei staan ze in het tweede deel, en allebei zijn ze formeel. De richting is tegengesteld. Na 以便 staat wat je wél wilt bereiken. Na 以免 (les 05) staat wat je níet wilt laten gebeuren. Vraag jezelf: wil ik dit bereiken of voorkomen?",
      ex: [
        { cn: "把地址写下来，以便以后查找。", py: "Bǎ dìzhǐ xiě xiàlai, yǐbiàn yǐhòu cházhǎo.", nl: "Schrijf het adres op, zodat je het later kunt opzoeken." },
        { cn: "把地址写下来，以免忘了。", py: "Bǎ dìzhǐ xiě xiàlai, yǐmiǎn wàng le.", nl: "Schrijf het adres op, zodat je het niet vergeet." }
      ] },
    { h: "以便 of 为了?",
      p: "为了 (wèile) zet het doel meestal vooraan: 为了 + doel, dan de handeling. 以便 staat altijd achteraan, na de handeling. 为了 kan ook met een zelfstandig naamwoord (为了孩子) en past in elk register. Wil je met 为了 het doel achteraan noemen? Zeg dan 是为了.",
      ex: [
        { cn: "为了准时到达，我们提前出发了。", py: "Wèile zhǔnshí dàodá, wǒmen tíqián chūfā le.", nl: "Om op tijd aan te komen, zijn we eerder vertrokken." },
        { cn: "我们提前出发了，以便准时到达。", py: "Wǒmen tíqián chūfā le, yǐbiàn zhǔnshí dàodá.", nl: "We zijn eerder vertrokken, zodat we op tijd aankomen." }
      ] },
    { h: "Spreektaal: 好 en 好让",
      p: "Tegen vrienden of familie klinkt 以便 stijf. In gesprekken gebruik je 好 of 好让 (hǎoràng). 好 staat ná het onderwerp, vlak vóór het werkwoord: 我好准备. 好让 staat vóór het onderwerp: 好让我准备. De betekenis is dezelfde: zodat.",
      ex: [
        { cn: "你早点儿告诉我，我好准备。", py: "Nǐ zǎo diǎnr gàosu wǒ, wǒ hǎo zhǔnbèi.", nl: "Zeg het me op tijd, dan kan ik me voorbereiden." },
        { cn: "你把地址发给我，好让我找得到。", py: "Nǐ bǎ dìzhǐ fā gěi wǒ, hǎo ràng wǒ zhǎo de dào.", nl: "Stuur me het adres, zodat ik het kan vinden." }
      ] }
  ],
  mistakes: [
    { wrong: "以便准时到达，我们提前出发了。", right: "为了准时到达，我们提前出发了。", why: "以便 staat nooit vooraan. Voor een doel aan het begin van de zin gebruik je 为了." },
    { wrong: "多穿点儿衣服，以便不感冒。", right: "多穿点儿衣服，以免感冒。", why: "Je wilt iets voorkomen. Dan gebruik je 以免, zonder 不." },
    { wrong: "我们准备了地图，以便游客。", right: "我们准备了地图，以便游客使用。", why: "Na 以便 staat een werkwoordgroep: wat iemand kan doen. Alleen een zelfstandig naamwoord is niet genoeg." },
    { wrong: "妈，你把钥匙给我，以便我开门。", right: "妈，你把钥匙给我，我好开门。", why: "以便 is formeel en klinkt tegen familie stijf. In een gesprek zeg je 好 of 好让." }
  ],
  vocab: [
    ["以便", "yǐbiàn", "zodat, om ... te kunnen (formeel)"], ["好让", "hǎoràng", "zodat (spreektaal)"], ["及时", "jíshí", "tijdig, op tijd"],
    ["资料", "zīliào", "materiaal, documentatie"], ["延长", "yáncháng", "verlengen"], ["笔记", "bǐjì", "aantekeningen"],
    ["标签", "biāoqiān", "etiket, label"], ["回收", "huíshōu", "recyclen, inzamelen"], ["分类", "fēnlèi", "sorteren, indelen"],
    ["居民", "jūmín", "bewoner"]
  ],
  dialogue: [
    ["A", "小王，明天开会的资料准备好了吗？", "Xiǎo Wáng, míngtiān kāihuì de zīliào zhǔnbèi hǎo le ma?", "Xiao Wang, zijn de stukken voor de vergadering van morgen klaar?"],
    ["B", "准备好了。我今天下午就发给大家，以便大家提前看一看。", "Zhǔnbèi hǎo le. Wǒ jīntiān xiàwǔ jiù fā gěi dàjiā, yǐbiàn dàjiā tíqián kàn yi kàn.", "Ja. Ik stuur ze vanmiddag rond, zodat iedereen ze van tevoren kan bekijken."],
    ["A", "很好。请你把会议地点也写在邮件里，以便新同事找到会议室。", "Hěn hǎo. Qǐng nǐ bǎ huìyì dìdiǎn yě xiě zài yóujiàn li, yǐbiàn xīn tóngshì zhǎodào huìyìshì.", "Prima. Zet de locatie ook in de mail, zodat de nieuwe collega's de vergaderzaal kunnen vinden."],
    ["B", "没问题。上次会议的笔记要不要也发过去？", "Méi wèntí. Shàng cì huìyì de bǐjì yào bu yào yě fā guòqu?", "Geen probleem. Zal ik de aantekeningen van de vorige vergadering ook meesturen?"],
    ["A", "发吧，好让他们了解一下情况。", "Fā ba, hǎo ràng tāmen liǎojiě yíxià qíngkuàng.", "Ja, doe maar, zodat ze weten hoe het ervoor staat."],
    ["B", "好的，我马上去办。", "Hǎo de, wǒ mǎshàng qù bàn.", "Goed, ik regel het meteen."]
  ],
  reading: {
    title: "小区垃圾分类通知",
    lines: [
      { cn: "各位居民：为了保护环境，本小区从下个月起实行垃圾分类。", py: "Gèwèi jūmín: wèile bǎohù huánjìng, běn xiǎoqū cóng xià ge yuè qǐ shíxíng lājī fēnlèi.", nl: "Beste bewoners: om het milieu te beschermen, sorteren we in deze wijk vanaf volgende maand het afval." },
      { cn: "我们在每栋楼下放了四种颜色的垃圾桶，以便大家分类投放。", py: "Wǒmen zài měi dòng lóu xià fàngle sì zhǒng yánsè de lājītǒng, yǐbiàn dàjiā fēnlèi tóufàng.", nl: "Bij elk gebouw staan vier afvalbakken in verschillende kleuren, zodat iedereen het afval gescheiden kan weggooien." },
      { cn: "每个垃圾桶上都贴了标签，以便居民看清楚每种垃圾应该放在哪里。", py: "Měi ge lājītǒng shang dōu tiēle biāoqiān, yǐbiàn jūmín kàn qīngchu měi zhǒng lājī yīnggāi fàng zài nǎlǐ.", nl: "Op elke bak zit een etiket, zodat bewoners goed kunnen zien waar elk soort afval hoort." },
      { cn: "塑料瓶和纸盒请先洗干净，再压扁，以便回收。", py: "Sùliàopíng hé zhǐhé qǐng xiān xǐ gānjìng, zài yābiǎn, yǐbiàn huíshōu.", nl: "Spoel plastic flessen en kartonnen dozen eerst schoon en druk ze daarna plat, zodat ze gerecycled kunnen worden." },
      { cn: "电池等有害垃圾请单独放好，以免污染环境。", py: "Diànchí děng yǒuhài lājī qǐng dāndú fànghǎo, yǐmiǎn wūrǎn huánjìng.", nl: "Houd schadelijk afval zoals batterijen apart, om vervuiling van het milieu te voorkomen." },
      { cn: "下周六上午，物业将在小区门口举办讲座，以便大家更好地了解分类方法。", py: "Xià zhōuliù shàngwǔ, wùyè jiāng zài xiǎoqū ménkǒu jǔbàn jiǎngzuò, yǐbiàn dàjiā gèng hǎo de liǎojiě fēnlèi fāngfǎ.", nl: "Volgende zaterdagochtend geeft het beheer een voorlichting bij de ingang, zodat iedereen beter begrijpt hoe het sorteren werkt." },
      { cn: "如有问题，请拨打物业电话，以便我们及时为您解答。", py: "Rú yǒu wèntí, qǐng bōdǎ wùyè diànhuà, yǐbiàn wǒmen jíshí wèi nín jiědá.", nl: "Hebt u vragen, bel dan het beheer, zodat we u snel kunnen antwoorden." },
      { cn: "谢谢大家的配合！", py: "Xièxie dàjiā de pèihé!", nl: "Bedankt voor uw medewerking!" }
    ],
    questions: [
      { type: "mc", q: "Waarom zit er een etiket op elke afvalbak?",
        options: ["Zodat bewoners kunnen zien waar elk soort afval hoort.", "Zodat het afval gerecycled kan worden.", "Om vervuiling van het milieu te voorkomen.", "Zodat bewoners het beheer kunnen bellen."], answer: 0,
        why: ["Goed: 以便居民看清楚每种垃圾应该放在哪里。", "Dat is de reden om flessen schoon te spoelen en plat te drukken.", "Dat hoort bij de batterijen (以免污染环境).", "Daarvoor staat het telefoonnummer van het beheer erbij."] },
      { type: "mc", q: "Wat gebeurt er volgende zaterdagochtend?",
        options: ["Er is een voorlichting over het sorteren.", "De nieuwe afvalbakken worden geplaatst.", "Het afval wordt opgehaald.", "Het beheer belt alle bewoners."], answer: 0,
        why: ["Goed: 物业将在小区门口举办讲座。", "De bakken staan er al: 放了.", "Dat staat niet in de tekst.", "Bewoners kunnen zelf het beheer bellen."] },
      { type: "mc", q: "In welke zin staat geen doel maar iets wat je wilt voorkomen?",
        options: ["电池等有害垃圾请单独放好，以免污染环境。", "塑料瓶和纸盒请先洗干净，再压扁，以便回收。", "如有问题，请拨打物业电话，以便我们及时为您解答。", "我们放了四种颜色的垃圾桶，以便大家分类投放。"], answer: 0,
        why: ["Goed: na 以免 staat wat je wilt voorkomen.", "Hier staat 以便: recyclen is een doel.", "Hier staat 以便: snel antwoord geven is een doel.", "Hier staat 以便: gescheiden weggooien is een doel."] }
    ]
  },
  questions: [
    { type: "mc", q: "Wat betekent: 请把会议资料提前发给大家，以便大家准备。",
      options: ["Stuur de stukken van tevoren rond, zodat iedereen zich kan voorbereiden.", "Stuur de stukken van tevoren rond, zodat niemand zich hoeft voor te bereiden.", "Stuur de stukken van tevoren rond, omdat iedereen zich al voorbereid heeft.", "Stuur de stukken pas rond als iedereen zich voorbereid heeft."], answer: 0,
      why: ["Goed: na 以便 staat het doel: 大家准备.", "Er staat geen ontkenning na 以便.", "以便 geeft geen reden, maar een doel.", "提前 betekent \"van tevoren\", niet \"pas daarna\"."] },
    { type: "mc", q: "请在信封上写清楚地址，___邮递员找到。(Schrijf het adres duidelijk op de envelop, zodat de postbode het kan vinden.)",
      options: ["以便", "以免", "因为", "尽管"], answer: 0,
      why: ["Goed: de postbode moet het vinden. Dat is een doel.", "以免 zou zeggen dat je wilt voorkomen dat de postbode het vindt.", "因为 geeft een reden, geen doel.", "尽管 betekent \"hoewel\"."] },
    { type: "order", q: "Zet in de goede volgorde: \"Schrijf uw naam op het etiket, zodat we het kunnen terugvinden.\"",
      tokens: [["请在标签上", "qǐng zài biāoqiān shang"], ["写上名字", "xiěshang míngzi"], ["以便", "yǐbiàn"], ["我们", "wǒmen"], ["查找", "cházhǎo"]] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["多穿点儿衣服，以便不感冒。", "多穿点儿衣服，以免感冒。", "多带点儿钱，以便路上用。", "把门锁好，以免东西被偷。"], answer: 0,
      why: ["Goed: deze klopt niet. Iets voorkomen doe je met 以免 + 感冒, zonder 不.", "Deze klopt: 以免 + wat je wilt voorkomen.", "Deze klopt: 以便 + doel.", "Deze klopt: 以免 + wat je wilt voorkomen."] },
    { type: "mc", q: "\"Om zijn Chinees te verbeteren, ging hij in China studeren.\"",
      options: ["为了提高汉语水平，他去中国留学了。", "以便提高汉语水平，他去中国留学了。", "为了提高汉语水平，他以便去中国留学了。", "他去中国留学了，以免提高汉语水平。"], answer: 0,
      why: ["Goed: 为了 + doel staat vooraan, de handeling volgt.", "以便 staat nooit vooraan in de zin.", "以便 staat niet vóór het werkwoord van de handeling.", "以免 betekent \"om te voorkomen dat\". Hij wil zijn Chinees juist verbeteren."] },
    { type: "mc", q: "Je stuurt een vriend een berichtje. Wat klinkt het meest natuurlijk?",
      options: ["你把地址发给我，我好去找你。", "你把地址发给我，以便本人前往拜访。", "你把地址发给我，以免我去找你。", "你把地址发给我，我好不去找你。"], answer: 0,
      why: ["Goed: tegen een vriend gebruik je 好: zodat.", "以便本人前往拜访 is heel formeel en klinkt vreemd tegen een vriend.", "以免 zegt dat je wilt voorkomen dat je hem gaat zoeken.", "De ontkenning maakt het doel onlogisch."] },
    { type: "mc", q: "Wat staat er na 以便?",
      options: ["Wat je wilt bereiken.", "Wat je wilt voorkomen.", "De reden waarom iets al gebeurd is.", "Een tegenstelling."], answer: 0,
      why: ["Goed: 以便 + doel.", "Dat is 以免.", "Een reden geef je met 因为.", "Een tegenstelling geef je met 但是 of 尽管."] },
    { type: "order", q: "Zet in de goede volgorde: \"Het bedrijf gaf elke werknemer een computer, zodat ze thuis konden werken.\"",
      tokens: [["公司", "gōngsī"], ["给每个员工", "gěi měi ge yuángōng"], ["发了一台电脑", "fāle yì tái diànnǎo"], ["以便", "yǐbiàn"], ["在家工作", "zài jiā gōngzuò"]] },
    { type: "fill", q: "请留下您的邮箱，___我们把结果发给您。(Laat uw e-mailadres achter, zodat we u de uitslag kunnen sturen.)",
      answers: ["以便", "好让"], hint: "Welk woord noemt het doel en past in een formeel verzoek?", why: "以便 + 我们 + doel. 好让 kan ook, maar klinkt minder formeel." },
    { type: "open", q: "Vertaal (formeel): \"Bewaar uw kassabon, zodat u het product kunt ruilen.\"",
      model: ["请保留好购物小票，以便退换商品。", "请保存好收据，以便您更换商品。"],
      tip: "Check: eerst de handeling, dan 以便 aan het begin van het tweede deel, dan het doel als werkwoordgroep." },
    { type: "open", q: "Vertaal (spreektaal): \"Bel me even als je er bent, dan kan ik je ophalen.\"",
      model: ["你到了给我打个电话，我好去接你。", "你到了就给我打电话，好让我去接你。"],
      tip: "Check: in een gesprek kies je 好 (ná het onderwerp) of 好让 (vóór het onderwerp), niet 以便." }
  ],
  review: [
    { type: "mc", q: "\"Zet de tijd van de vergadering in het bericht, zodat iedereen het weet.\" (formeel)",
      options: ["请把会议时间写在通知上，以便大家知道。", "以便大家知道，请把会议时间写在通知上。", "请把会议时间写在通知上，以免大家知道。", "请把会议时间写在通知上，以便大家不知道。"], answer: 0,
      why: ["Goed: handeling, dan 以便 + doel.", "以便 staat nooit vooraan in de zin.", "以免 zou betekenen dat niemand het mag weten.", "De ontkenning maakt het doel onlogisch."] },
    { type: "mc", q: "他把重要的内容都抄在本子上，___以后查看。(Hij schrijft alle belangrijke dingen over in een schrift, zodat hij ze later kan nakijken.)",
      options: ["以便", "以免", "尽管", "否则"], answer: 0,
      why: ["Goed: later nakijken is het doel.", "以免 zou zeggen dat hij later nakijken wil voorkomen.", "尽管 betekent \"hoewel\".", "否则 betekent \"anders\"."] },
    { type: "mc", q: "___多赚点儿钱，他晚上也去打工。(Om wat meer te verdienen, werkt hij 's avonds ook.)",
      options: ["为了", "以便", "以免", "否则"], answer: 0,
      why: ["Goed: het doel staat vooraan. Dan gebruik je 为了.", "以便 staat nooit vooraan, alleen in het tweede deel.", "以免 betekent \"om te voorkomen dat\".", "否则 betekent \"anders\" en staat in het tweede deel."] }
  ]
})
