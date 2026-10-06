({
  id: "12", slug: "zhi", title: "之: het formele 的", sub: "成功之道, 三分之一, 原因之一",
  canDo: "Je kunt nu 之 lezen en gebruiken als schrijftaal-的 en in vaste vormen (breuken, procenten, 之一), en je weet wanneer je gewoon 的 zegt.",
  guess: {
    q: "Een artikel heeft de titel 成功之道. Wat betekent dat, denk je?",
    options: ["De weg naar succes", "Succes is voorbij", "Eén van de successen", "Succes en de weg"], answer: 0,
    why: ["Goed: 之 werkt hier als 的: 成功的道(路) = de weg van/naar succes.", "之 is hier geen werkwoord en zegt niets over tijd.", "\"Eén van\" is 之一, met 一 erachter.", "之 verbindt geen twee gelijke dingen zoals 和; het eerste deel bepaalt het tweede."]
  },
  problem: "In nieuws, rapporten en titels zie je vaak 之 (zhī) waar je in spreektaal 的 zou zeggen: 成功之道, 城市之美. Daarnaast zit 之 vast in vormen die je ook in gesprek gebruikt: breuken (三分之一), procenten (百分之五十) en \"één van\" (原因之一). Deze les laat zien wanneer 之 moet, wanneer het kan, en wanneer alleen 的 goed is.",
  pattern: [
    { l: "bepaler", v: "成功", c: 1 }, { l: "formeel 的", v: "之", c: 2, key: true }, { l: "kern (kort)", v: "道", c: 4 }
  ],
  patternCap: "A + 之 + B (kort, vaak 4 karakters) · breuk: noemer + 分之 + teller · groep + 之一 · 之所以……是因为 · spreektaal: A的B (成功的方法)",
  rules: [
    "A之B betekent \"de B van A\", net als A的B. A bepaalt B.",
    "B is meestal kort, vaak één karakter: 道, 路, 本, 美. Het geheel heeft vaak vier karakters: 成功之道.",
    "Breuken: eerst de noemer, dan 分之, dan de teller. 三分之一 = 1/3. Procenten: 百分之二十 = 20%.",
    "Groep + 之一 = \"één van ...\". 之一 staat aan het eind: 主要原因之一.",
    "之 vervangt 的 niet na voornaamwoorden of in gewone zinnen: 我的朋友, niet 我之朋友."
  ],
  pitfall: "之 is geen algemene vervanger van 的. Het past in korte, boekachtige combinaties en vaste vormen. In een gewone zin (我的手机, 我昨天买的书) is alleen 的 goed.",
  examples: [
    { cn: "诚信是企业的立身之本。", py: "Chéngxìn shì qǐyè de lìshēn zhī běn.", nl: "Integriteit is het fundament van een bedrijf." },
    { cn: "该市约三分之一的居民每天骑自行车上班。", py: "Gāi shì yuē sān fēn zhī yī de jūmín měi tiān qí zìxíngchē shàngbān.", nl: "Ongeveer een derde van de inwoners van deze stad fietst elke dag naar het werk." },
    { cn: "交通拥堵是城市发展面临的主要问题之一。", py: "Jiāotōng yōngdǔ shì chéngshì fāzhǎn miànlín de zhǔyào wèntí zhī yī.", nl: "Files zijn een van de belangrijkste problemen waar de stedelijke ontwikkeling voor staat." },
    { cn: "本文探讨小企业的成功之道。", py: "Běn wén tàntǎo xiǎo qǐyè de chénggōng zhī dào.", nl: "Dit artikel onderzoekt de weg naar succes van kleine bedrijven." }
  ],
  nuance: [
    { h: "之 of 的?",
      p: "之 hoort bij schrijftaal: titels, koppen, essays, toespraken. Het staat in korte, strakke combinaties zoals 成功之道 of 城市之美. 的 kan overal, ook in lange bepalingen en in spreektaal. Twijfel je? Gebruik 的. In gesprek zeg je 成功的方法 of 成功的秘诀, niet 成功之道.",
      ex: [
        { cn: "合作之道在于互相信任。", py: "Hézuò zhī dào zàiyú hùxiāng xìnrèn.", nl: "De sleutel tot samenwerking ligt in wederzijds vertrouwen. (schrijftaal)" },
        { cn: "合作最重要的是互相信任。", py: "Hézuò zuì zhòngyào de shì hùxiāng xìnrèn.", nl: "Bij samenwerken is wederzijds vertrouwen het belangrijkst. (spreektaal)" }
      ] },
    { h: "Vaste vormen: hier moet 之",
      p: "In breuken, procenten en 之一 kun je 之 niet door 的 vervangen. Deze vormen gebruik je ook gewoon in gesprek. Let op de volgorde: eerst het geheel (noemer), dan het deel (teller). Na de breuk volgt vaak 的 + zelfstandig naamwoord: 三分之一的居民.",
      ex: [
        { cn: "百分之八十的学生通过了考试。", py: "Bǎi fēn zhī bāshí de xuésheng tōngguòle kǎoshì.", nl: "Tachtig procent van de studenten is voor het examen geslaagd." },
        { cn: "他是我最好的朋友之一。", py: "Tā shì wǒ zuì hǎo de péngyou zhī yī.", nl: "Hij is een van mijn beste vrienden." }
      ] },
    { h: "Kort: 之所以 ... 是因为",
      p: "In 之所以 zit ook 之. Je noemt eerst het gevolg, dan de reden met 是因为. Dit patroon heb je bij HSK 6 al uitgebreid gezien. In spreektaal zeg je gewoon: gevolg + 是因为 + reden.",
      ex: [
        { cn: "他之所以成功，是因为从不放弃。", py: "Tā zhīsuǒyǐ chénggōng, shì yīnwèi cóng bù fàngqì.", nl: "Dat hij slaagde, komt doordat hij nooit opgaf." },
        { cn: "他成功是因为从来不放弃。", py: "Tā chénggōng shì yīnwèi cónglái bú fàngqì.", nl: "Hij is geslaagd omdat hij nooit opgaf. (spreektaal)" }
      ] }
  ],
  mistakes: [
    { wrong: "一分之三的员工在家办公。", right: "三分之一的员工在家办公。", why: "Eerst de noemer (三), dan 分之, dan de teller (一). 三分之一 = 1/3." },
    { wrong: "这是之一原因。", right: "这是原因之一。", why: "之一 staat aan het eind, na de groep. Niet zoals Engels \"one of the reasons\"." },
    { wrong: "我之朋友明天来。", right: "我的朋友明天来。", why: "Na een voornaamwoord en in een gewone zin gebruik je 的. 之 hoort bij korte, formele combinaties." },
    { wrong: "百分二十的人反对。", right: "百分之二十的人反对。", why: "In procenten is 之 verplicht: 百分之 + getal." }
  ],
  vocab: [
    ["之", "zhī", "(schrijftaal) van, 的; in breuken en 之一"], ["道", "dào", "weg, methode"], ["之一", "zhī yī", "één van"],
    ["诚信", "chéngxìn", "integriteit, betrouwbaarheid"], ["居民", "jūmín", "inwoner"], ["拥堵", "yōngdǔ", "verstopt, file"],
    ["探讨", "tàntǎo", "onderzoeken, bespreken"], ["比例", "bǐlì", "verhouding, aandeel"], ["秘诀", "mìjué", "geheim, sleutel (tot succes)"], ["亟待", "jídài", "dringend nodig hebben"]
  ],
  dialogue: [
    ["A", "报告里写着\"约四分之一的用户来自海外\"，具体是多少人？", "Bàogào li xiězhe \"yuē sì fēn zhī yī de yònghù láizì hǎiwài\", jùtǐ shì duōshao rén?", "In het rapport staat \"ongeveer een kwart van de gebruikers komt uit het buitenland\". Hoeveel mensen zijn dat precies?"],
    ["B", "大概两百万。海外市场已经成了我们的主要市场之一。", "Dàgài liǎngbǎi wàn. Hǎiwài shìchǎng yǐjīng chéngle wǒmen de zhǔyào shìchǎng zhī yī.", "Ongeveer twee miljoen. De buitenlandse markt is een van onze belangrijkste markten geworden."],
    ["A", "那标题\"出海之路\"是什么意思？", "Nà biāotí \"chū hǎi zhī lù\" shì shénme yìsi?", "En wat betekent de titel \"出海之路\"?"],
    ["B", "就是\"走向海外市场的路\"。标题用\"之\"，听起来更正式。", "Jiù shì \"zǒuxiàng hǎiwài shìchǎng de lù\". Biāotí yòng \"zhī\", tīng qilai gèng zhèngshì.", "Gewoon \"de weg naar buitenlandse markten\". Met 之 klinkt een titel formeler."],
    ["A", "明白了。说话的时候，我还是说\"的\"吧。", "Míngbai le. Shuōhuà de shíhou, wǒ háishi shuō \"de\" ba.", "Duidelijk. Als ik praat, zeg ik toch maar 的."]
  ],
  reading: {
    title: "骑行之城",
    lines: [
      { cn: "近日，市交通局发布了《城市骑行报告》。", py: "Jìnrì, shì jiāotōngjú fābùle 《Chéngshì Qíxíng Bàogào》.", nl: "Onlangs heeft de gemeentelijke verkeersdienst het \"Rapport stedelijk fietsen\" gepubliceerd." },
      { cn: "报告显示，全市约三分之一的居民每天骑自行车出行。", py: "Bàogào xiǎnshì, quán shì yuē sān fēn zhī yī de jūmín měi tiān qí zìxíngchē chūxíng.", nl: "Volgens het rapport verplaatst ongeveer een derde van de inwoners zich dagelijks per fiets." },
      { cn: "在二十岁到三十岁的人群中，这一比例超过百分之四十。", py: "Zài èrshí suì dào sānshí suì de rénqún zhōng, zhè yì bǐlì chāoguò bǎi fēn zhī sìshí.", nl: "Bij mensen van twintig tot dertig jaar ligt dit aandeel boven de veertig procent." },
      { cn: "专家认为，完善的自行车道是该市成功的原因之一。", py: "Zhuānjiā rènwéi, wánshàn de zìxíngchēdào shì gāi shì chénggōng de yuányīn zhī yī.", nl: "Volgens experts zijn de goede fietspaden een van de redenen voor het succes van de stad." },
      { cn: "此外，市政府还推出了一系列鼓励绿色出行的政策。", py: "Cǐwài, shì zhèngfǔ hái tuīchūle yí xìliè gǔlì lǜsè chūxíng de zhèngcè.", nl: "Daarnaast heeft het stadsbestuur een reeks maatregelen ingevoerd die groen vervoer stimuleren." },
      { cn: "许多市民表示，骑车上班既省钱，又能锻炼身体。", py: "Xǔduō shìmín biǎoshì, qí chē shàngbān jì shěng qián, yòu néng duànliàn shēntǐ.", nl: "Veel inwoners zeggen dat fietsen naar het werk geld bespaart en goed is voor de gezondheid." },
      { cn: "当然，报告也指出，停车难仍是亟待解决的问题之一。", py: "Dāngrán, bàogào yě zhǐchū, tíngchē nán réng shì jídài jiějué de wèntí zhī yī.", nl: "Het rapport wijst er wel op dat het gebrek aan stallingsplek nog een van de dringende problemen is." },
      { cn: "报告最后写道：\"绿色出行，才是城市的长远发展之道。\"", py: "Bàogào zuìhòu xiědào: \"Lǜsè chūxíng, cái shì chéngshì de chángyuǎn fāzhǎn zhī dào.\"", nl: "Het rapport sluit af met: \"Groen vervoer is de weg naar duurzame ontwikkeling van de stad.\"" }
    ],
    questions: [
      { type: "mc", q: "Hoeveel jongeren (20-30 jaar) fietsen dagelijks?",
        options: ["Meer dan veertig procent.", "Ongeveer een derde.", "Precies dertig procent.", "Minder dan een kwart."], answer: 0,
        why: ["Goed: 这一比例超过百分之四十.", "Een derde (三分之一) geldt voor alle inwoners samen.", "Dertig is hier een leeftijd, geen percentage.", "Een kwart (四分之一) staat niet in de tekst."] },
      { type: "mc", q: "Welk probleem noemt het rapport?",
        options: ["Er is te weinig plek om fietsen te stallen.", "De fietspaden zijn slecht.", "Fietsen is duur.", "Er zijn geen maatregelen voor groen vervoer."], answer: 0,
        why: ["Goed: 停车难仍是亟待解决的问题之一.", "De fietspaden zijn juist goed: 完善的自行车道.", "Inwoners zeggen dat fietsen geld bespaart: 省钱.", "De stad heeft juist maatregelen ingevoerd: 推出了一系列……政策."] },
      { type: "mc", q: "完善的自行车道是该市成功的原因之一。Wat betekent 之一 hier?",
        options: ["De fietspaden zijn één van de redenen, er zijn er meer.", "De fietspaden zijn de enige reden.", "De fietspaden zijn de eerste reden in een lijst.", "De fietspaden zijn de reden van één stad."], answer: 0,
        why: ["Goed: 之一 = één van een groep.", "\"De enige\" zou 唯一 zijn, niet 之一.", "之一 zegt niets over volgorde; \"de eerste\" is 第一.", "一 hoort hier bij 之: \"één van\", niet \"één stad\"."] }
    ]
  },
  questions: [
    { type: "mc", q: "Wat is 五分之二?",
      options: ["2/5", "5/2", "1/5", "2,5"], answer: 0,
      why: ["Goed: eerst de noemer (五), dan de teller (二).", "Je leest de volgorde omgekeerd: de noemer staat vóór 分之.", "De teller is 二, niet 一.", "Een breuk met 分之 is geen kommagetal."] },
    { type: "mc", q: "交通问题是这座城市面临的最大挑战___。(Verkeer is een van de grootste uitdagingen van deze stad.)",
      options: ["之一", "之间", "的一", "一之"], answer: 0,
      why: ["Goed: groep + 之一 = één van.", "之间 = tussen. Dat betekent iets anders.", "In \"één van\" moet 之, niet 的.", "De volgorde is 之一, niet 一之."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ongeveer dertig procent van de studenten koos dit vak.\"",
      tokens: [["约", "yuē"], ["百分之三十", "bǎi fēn zhī sānshí"], ["的", "de"], ["学生", "xuésheng"], ["选择了这门课", "xuǎnzéle zhè mén kè"]] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["我之手机没电了。", "成功之道在于坚持。", "这是原因之一。", "三分之二的人同意。"], answer: 0,
      why: ["Goed gezien: na een voornaamwoord in een gewone zin gebruik je 的: 我的手机.", "Deze zin klopt: 成功之道 is een formele vaste combinatie.", "Deze zin klopt: 之一 aan het eind.", "Deze zin klopt: breuk + 的 + zelfstandig naamwoord."] },
    { type: "mc", q: "Welke zin is de spreektaal-versie van 这就是他的成功之道。",
      options: ["这就是他成功的秘诀。", "这就是他成功之的秘诀。", "这就是他之成功秘诀。", "这就是他的成功之一。"], answer: 0,
      why: ["Goed: in spreektaal zeg je 成功的秘诀 of 成功的方法.", "之 en 的 stapel je niet.", "之 na een voornaamwoord klinkt fout; dat is 他的.", "之一 betekent \"één van\"; dan verandert de betekenis."] },
    { type: "fill", q: "全国百分___六十的家庭有汽车。(Zestig procent van de huishoudens in het land heeft een auto.)", answers: ["之"],
      hint: "Welk woord moet altijd in een procent staan?", why: "百分之 + getal = procent. Hier kan geen 的 staan." },
    { type: "mc", q: "我昨天买___那本书很有意思。(Het boek dat ik gisteren kocht, is erg interessant.)",
      options: ["的", "之", "之一", "所"], answer: 0,
      why: ["Goed: na een lange bepaling met werkwoord gebruik je in een gewone zin 的.", "之 past in korte, formele combinaties, niet na 我昨天买.", "之一 betekent \"één van\" en staat aan het eind.", "所 staat vóór het werkwoord (我昨天所买的), niet erna."] },
    { type: "order", q: "Zet in de goede volgorde: \"Dit is een van de vragen die dit artikel bespreekt.\"",
      tokens: [["这", "zhè"], ["是", "shì"], ["本文", "běn wén"], ["讨论的", "tǎolùn de"], ["问题之一", "wèntí zhī yī"]] },
    { type: "mc", q: "他之所以辞职，___他想自己创业。(Dat hij ontslag nam, komt doordat hij voor zichzelf wil beginnen.)",
      options: ["是因为", "所以", "但是", "因此"], answer: 0,
      why: ["Goed: 之所以 (gevolg) ... 是因为 (reden).", "所以 leidt een gevolg in; het gevolg staat hier al vooraan.", "但是 is een tegenstelling; die is er niet.", "因此 = daarom: ook een gevolg, geen reden."] },
    { type: "mc", q: "Een fotoboek heet 城市之美. Wat betekent dat?",
      options: ["De schoonheid van de stad", "De stad is mooi geworden", "Een van de mooie steden", "De stad en de schoonheid"], answer: 0,
      why: ["Goed: A之B = de B van A: 城市的美.", "之 is geen werkwoord; er staat geen verandering.", "Voor \"een van\" heb je 之一 nodig.", "之 betekent niet \"en\": A bepaalt B."] },
    { type: "open", q: "Vertaal: \"Ongeveer een kwart van de werknemers werkt thuis.\"",
      model: ["约四分之一的员工在家办公。", "大约四分之一的员工在家工作。"],
      tip: "Check: 四分之一 (noemer eerst), en daarna 的 + 员工." },
    { type: "open", q: "Zeg dit in gewone spreektaal: 合作之道在于信任。",
      model: ["合作的关键是信任。", "合作最重要的是互相信任。"],
      tip: "Check: geen 之 en geen 在于; gebruik 的 en 是." }
  ],
  review: [
    { type: "mc", q: "该公司约五分之一的收入来自海外。Wat betekent dit?",
      options: ["Ongeveer een vijfde van de inkomsten komt uit het buitenland.", "Ongeveer vijf procent van de inkomsten komt uit het buitenland.", "Ongeveer vier vijfde van de inkomsten komt uit het buitenland.", "De inkomsten uit het buitenland zijn vijf keer zo hoog."], answer: 0,
      why: ["Goed: 五分之一 = 1/5.", "Vijf procent zou 百分之五 zijn.", "De teller is 一, dus één deel van vijf.", "分之 maakt een breuk, geen vermenigvuldiging."] },
    { type: "mc", q: "这是我读过的最好的书___。(Dit is een van de beste boeken die ik heb gelezen.)",
      options: ["之一", "之间", "的一", "一之"], answer: 0,
      why: ["Goed: groep + 之一.", "之间 = tussen.", "In \"één van\" is 之 verplicht.", "De volgorde is 之一."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["他之妈妈是医生。", "百分之九十的人支持这个方案。", "运动是健康之本。", "这是他成功的原因之一。"], answer: 0,
      why: ["Goed gezien: in een gewone zin na een voornaamwoord zeg je 他的妈妈.", "Deze zin klopt: 百分之 + getal.", "Deze zin klopt: 健康之本 is een korte, formele combinatie.", "Deze zin klopt: 之一 aan het eind."] }
  ]
})
