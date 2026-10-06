({
  id: "15", slug: "eryan", title: "就 ... 而言 / 对 ... 而言", sub: "Wat ... betreft, voor ... (schrijftaal)",
  canDo: "Je kunt nu in formele taal aangeven vanuit welk aspect of voor wie iets geldt, met 就 ... 而言 en 对 ... 而言.",
  guess: {
    q: "就价格而言，这款手机很有优势。Wat bedoelt de schrijver, denk je?",
    options: ["Wat de prijs betreft, heeft deze telefoon een voordeel.", "Omdat de prijs laag is, is de telefoon goed.", "Alleen de prijs van deze telefoon is goed.", "De prijs zegt iets over deze telefoon."], answer: 0,
    why: ["Goed: 就 ... 而言 noemt het aspect waarover je iets zegt.", "就 ... 而言 geeft geen reden; het beperkt de uitspraak tot één aspect.", "就 ... 而言 zegt niet dat de rest slecht is.", "而言 betekent hier niet \"zeggen\"; het hoort bij de vaste vorm \"wat ... betreft\"."]
  },
  problem: "In een tekst wil je vaak aangeven vanuit welke kant je iets bekijkt. In het Nederlands schrijf je: \"Wat de prijs betreft ...\" of \"Voor studenten ...\". In formeel Chinees gebruik je 就 ... 而言 (jiù ... ér yán) voor een aspect, en 对 ... 而言 (duì ... ér yán) voor een persoon of groep. In spreektaal zeg je 对 ... 来说.",
  pattern: [
    { l: "wat betreft", v: "就", c: 1, key: true }, { l: "aspect", v: "质量", c: 2 }, { l: "", v: "而言", c: 3, key: true },
    { l: "uitspraak", v: "，这家公司是最好的", c: 4 }
  ],
  patternCap: "就 + aspect + 而言，uitspraak · 对 + persoon/groep + 而言，uitspraak · spreektaal: 对 ... 来说 · vast: 一般而言, 总体而言",
  rules: [
    "就 ... 而言 staat meestal aan het begin van de zin, gevolgd door een komma.",
    "Na 就 komt een aspect of onderwerp: 价格, 质量, 经济, 这一点.",
    "Na 对 komt een persoon of groep voor wie iets geldt: 学生, 我们, 老年人.",
    "对 ... 而言 kan ook na het onderwerp staan: 这件事对我而言很重要。",
    "而言 is schrijftaal. In gesprekken zeg je 对 ... 来说 of 从 ... 来看."
  ],
  pitfall: "Meng de twee vaste vormen niet: 对 ... 而言 en 对 ... 来说 zijn goed, maar 对我来而言 of 对我而说 bestaan niet.",
  examples: [
    { cn: "就质量而言，这家公司的产品是最好的。", py: "Jiù zhìliàng ér yán, zhè jiā gōngsī de chǎnpǐn shì zuì hǎo de.", nl: "Wat kwaliteit betreft, zijn de producten van dit bedrijf de beste." },
    { cn: "对年轻人而言，买房是一个很大的压力。", py: "Duì niánqīngrén ér yán, mǎi fáng shì yí ge hěn dà de yālì.", nl: "Voor jonge mensen is een huis kopen een grote last." },
    { cn: "一般而言，城市的生活成本比农村高。", py: "Yìbān ér yán, chéngshì de shēnghuó chéngběn bǐ nóngcūn gāo.", nl: "In het algemeen zijn de kosten van levensonderhoud in de stad hoger dan op het platteland." },
    { cn: "这次失败对他而言是一个重要的教训。", py: "Zhè cì shībài duì tā ér yán shì yí ge zhòngyào de jiàoxùn.", nl: "Deze mislukking was voor hem een belangrijke les." }
  ],
  nuance: [
    { h: "就 ... 而言 of 对 ... 而言?",
      p: "Beide eindigen op 而言, maar ze kijken anders. 就 ... 而言 noemt een aspect: vanuit welke kant bekijk je het? 对 ... 而言 noemt een persoon of groep: voor wie geldt het? Vergelijk: wat de prijs betreft (就), of voor studenten (对).",
      ex: [
        { cn: "就价格而言，这款电脑很便宜。", py: "Jiù jiàgé ér yán, zhè kuǎn diànnǎo hěn piányi.", nl: "Wat de prijs betreft, is deze computer goedkoop." },
        { cn: "对学生而言，这款电脑还是太贵。", py: "Duì xuésheng ér yán, zhè kuǎn diànnǎo háishi tài guì.", nl: "Voor studenten is deze computer toch te duur." }
      ] },
    { h: "对 ... 而言 of 对 ... 来说?",
      p: "De betekenis is gelijk: \"voor iemand\". Het verschil is register. 对 ... 来说 is neutraal en hoor je overal, ook in gesprekken. 对 ... 而言 hoort bij schrijftaal: artikelen, verslagen, toespraken. In een gewoon gesprek klinkt 而言 stijf.",
      ex: [
        { cn: "对我来说，周末最重要的是睡懒觉。", py: "Duì wǒ lái shuō, zhōumò zuì zhòngyào de shì shuì lǎnjiào.", nl: "Voor mij is uitslapen het belangrijkste in het weekend. (spreektaal)" },
        { cn: "对企业而言，人才是最重要的资源。", py: "Duì qǐyè ér yán, réncái shì zuì zhòngyào de zīyuán.", nl: "Voor bedrijven is talent de belangrijkste hulpbron. (schrijftaal)" }
      ] },
    { h: "Vaste uitdrukkingen met 而言",
      p: "Sommige combinaties zie je heel vaak in teksten: 一般而言 (in het algemeen), 总体而言 (over het geheel genomen), 相对而言 (relatief gezien). Ze staan aan het begin van de zin. Ook hier geldt: in spreektaal zeg je liever 一般来说 of 总的来说.",
      ex: [
        { cn: "相对而言，这个方案的风险比较小。", py: "Xiāngduì ér yán, zhège fāng'àn de fēngxiǎn bǐjiào xiǎo.", nl: "Relatief gezien is het risico van dit plan vrij klein." }
      ] }
  ],
  mistakes: [
    { wrong: "对我来而言，这件事很重要。", right: "对我而言，这件事很重要。", why: "Kies één vaste vorm: 对 ... 而言 of 对 ... 来说. 来 en 而言 samen bestaan niet." },
    { wrong: "在经济而言，这个城市发展得很快。", right: "就经济而言，这个城市发展得很快。", why: "Voor een aspect gebruik je 就 ... 而言, niet 在." },
    { wrong: "对价格而言，这款手机很便宜。", right: "就价格而言，这款手机很便宜。", why: "Prijs is een aspect, geen persoon of groep. Daarom 就, niet 对." },
    { wrong: "这件事很重要，对我而言。", right: "这件事对我而言很重要。", why: "对 ... 而言 staat aan het begin van de zin of na het onderwerp, niet achteraan." }
  ],
  vocab: [
    ["就 ... 而言", "jiù ... ér yán", "wat ... betreft"], ["对 ... 而言", "duì ... ér yán", "voor ... (schrijftaal)"], ["员工", "yuángōng", "werknemer"],
    ["节省", "jiéshěng", "besparen"], ["成本", "chéngběn", "kosten"], ["沟通", "gōutōng", "communiceren, communicatie"],
    ["意味着", "yìwèizhe", "betekenen, inhouden"], ["有利有弊", "yǒu lì yǒu bì", "voor- en nadelen hebben"], ["模式", "móshì", "model, vorm"], ["资源", "zīyuán", "hulpbron, middelen"]
  ],
  dialogue: [
    ["A", "王老师，我的论文写得怎么样？", "Wáng lǎoshī, wǒ de lùnwén xiě de zěnmeyàng?", "Docent Wang, hoe is mijn scriptie?"],
    ["B", "就内容而言，写得很好，观点也很清楚。", "Jiù nèiróng ér yán, xiě de hěn hǎo, guāndiǎn yě hěn qīngchu.", "Wat de inhoud betreft, is het goed geschreven, en je standpunt is duidelijk."],
    ["A", "那语言方面呢？", "Nà yǔyán fāngmiàn ne?", "En de taal?"],
    ["B", "语言太口语化了。比如你写\"对我来说\"，论文里最好写\"对笔者而言\"。", "Yǔyán tài kǒuyǔhuà le. Bǐrú nǐ xiě \"duì wǒ lái shuō\", lùnwén li zuìhǎo xiě \"duì bǐzhě ér yán\".", "De taal is te informeel. Je schrijft bijvoorbeeld \"voor mij\"; in een scriptie schrijf je beter \"voor de auteur\"."],
    ["A", "明白了。我会改得正式一点儿。", "Míngbai le. Wǒ huì gǎi de zhèngshì yìdiǎnr.", "Begrepen. Ik maak het wat formeler."],
    ["B", "好。总体而言，这是一篇不错的论文。", "Hǎo. Zǒngtǐ ér yán, zhè shì yì piān búcuò de lùnwén.", "Goed. Over het geheel genomen is het een goede scriptie."]
  ],
  reading: {
    title: "在家办公的利与弊",
    lines: [
      { cn: "近年来，越来越多的公司允许员工在家办公。", py: "Jìnnián lái, yuè lái yuè duō de gōngsī yǔnxǔ yuángōng zài jiā bàngōng.", nl: "De laatste jaren laten steeds meer bedrijven werknemers thuiswerken." },
      { cn: "对员工而言，最大的好处是节省了上下班的时间。", py: "Duì yuángōng ér yán, zuì dà de hǎochù shì jiéshěngle shàng xià bān de shíjiān.", nl: "Voor werknemers is het grootste voordeel dat ze reistijd besparen." },
      { cn: "对公司而言，办公室的成本也降低了。", py: "Duì gōngsī ér yán, bàngōngshì de chéngběn yě jiàngdī le.", nl: "Voor bedrijven zijn ook de kantoorkosten lager geworden." },
      { cn: "然而，就沟通而言，在家办公并不方便。", py: "Rán'ér, jiù gōutōng ér yán, zài jiā bàngōng bìng bù fāngbiàn.", nl: "Wat communicatie betreft, is thuiswerken echter helemaal niet handig." },
      { cn: "许多问题在网上要讨论很久，当面却几分钟就能解决。", py: "Xǔduō wèntí zài wǎngshang yào tǎolùn hěn jiǔ, dāngmiàn què jǐ fēnzhōng jiù néng jiějué.", nl: "Veel problemen moet je online lang bespreken, terwijl ze persoonlijk in een paar minuten zijn opgelost." },
      { cn: "另外，对刚工作的年轻人而言，在家办公意味着更少的学习机会。", py: "Lìngwài, duì gāng gōngzuò de niánqīngrén ér yán, zài jiā bàngōng yìwèizhe gèng shǎo de xuéxí jīhuì.", nl: "Bovendien betekent thuiswerken voor jonge starters minder kansen om te leren." },
      { cn: "总体而言，在家办公有利也有弊。", py: "Zǒngtǐ ér yán, zài jiā bàngōng yǒu lì yě yǒu bì.", nl: "Over het geheel genomen heeft thuiswerken voor- en nadelen." },
      { cn: "因此，不少公司选择了混合模式：每周在家两天，在办公室三天。", py: "Yīncǐ, bù shǎo gōngsī xuǎnzéle hùnhé móshì: měi zhōu zài jiā liǎng tiān, zài bàngōngshì sān tiān.", nl: "Daarom kiezen veel bedrijven voor een hybride model: twee dagen per week thuis, drie dagen op kantoor." }
    ],
    questions: [
      { type: "mc", q: "Wat is volgens de tekst het grootste voordeel voor werknemers?",
        options: ["Ze besparen reistijd.", "Ze verdienen meer geld.", "Ze leren sneller.", "Ze communiceren beter."], answer: 0,
        why: ["Goed: 对员工而言，最大的好处是节省了上下班的时间。", "Salaris wordt niet genoemd.", "Voor starters betekent thuiswerken juist minder leerkansen.", "Communicatie is juist een nadeel: 并不方便."] },
      { type: "mc", q: "Wat kiezen veel bedrijven daarom?",
        options: ["Twee dagen thuis en drie dagen op kantoor.", "Helemaal thuiswerken.", "Helemaal op kantoor werken.", "Drie dagen thuis en twee dagen op kantoor."], answer: 0,
        why: ["Goed: 每周在家两天，在办公室三天。", "Dat is niet het hybride model.", "Dat is niet het hybride model.", "De dagen zijn omgedraaid."] },
      { type: "mc", q: "然而，就沟通而言，在家办公并不方便。Wat doet 就 ... 而言 hier?",
        options: ["Het beperkt de uitspraak tot het aspect communicatie.", "Het noemt de groep voor wie het geldt.", "Het geeft de reden dat thuiswerken handig is.", "Het betekent \"zelfs als er communicatie is\"."], answer: 0,
        why: ["Goed: 就 + aspect + 而言 = wat ... betreft.", "Een groep noem je met 对 ... 而言, zoals 对员工而言.", "就 ... 而言 geeft geen reden.", "\"Zelfs als\" is 即使 of 就算, niet 就 ... 而言."] }
    ]
  },
  questions: [
    { type: "mc", q: "___环境而言，这个城市非常适合居住。(Wat de omgeving betreft, is deze stad zeer geschikt om te wonen.)",
      options: ["就", "对", "在", "从"], answer: 0,
      why: ["Goed: 就 + aspect + 而言.", "对 ... 而言 gebruik je voor een persoon of groep, niet voor een aspect.", "在 ... 而言 bestaat niet.", "从 hoort bij 从 ... 来看, niet bij 而言."] },
    { type: "mc", q: "___老年人而言，学习用智能手机并不容易。(Voor ouderen is leren werken met een smartphone niet makkelijk.)",
      options: ["对", "就", "在", "为"], answer: 0,
      why: ["Goed: 对 + groep + 而言 = voor ...", "就 ... 而言 noemt een aspect, niet een groep mensen.", "在 ... 而言 bestaat niet.", "为 betekent \"ten behoeve van\" en hoort niet bij 而言."] },
    { type: "mc", q: "Welke zin klopt?",
      options: ["对我而言，健康比钱重要。", "对我来而言，健康比钱重要。", "对我而说，健康比钱重要。", "对而言我，健康比钱重要。"], answer: 0,
      why: ["Goed: 对 + persoon + 而言.", "来 hoort bij 来说, niet bij 而言.", "而说 bestaat niet; het is 而言 of 来说.", "De persoon staat tussen 对 en 而言."] },
    { type: "order", q: "Zet in de goede volgorde: \"Wat kwaliteit betreft, is dit product het beste.\"",
      tokens: [["就", "jiù"], ["质量", "zhìliàng"], ["而言，", "ér yán,"], ["这个产品", "zhège chǎnpǐn"], ["是最好的", "shì zuì hǎo de"]],
      alt: ["这个产品就质量而言，是最好的"] },
    { type: "mc", q: "Je praat met een vriend. Welke zin klinkt het natuurlijkst?",
      options: ["对我来说，这部电影有点儿无聊。", "对我而言，这部电影有点儿无聊。", "就我而言，此片略显乏味。", "对笔者而言，这部电影有点儿无聊。"], answer: 0,
      why: ["Goed: 对 ... 来说 is de gewone vorm in gesprekken.", "Correct, maar 而言 klinkt stijf in een gesprek.", "Dit is heel formele schrijftaal.", "笔者 (de auteur) gebruik je alleen in teksten."] },
    { type: "fill", q: "一般___，早睡早起对身体有好处。(In het algemeen is vroeg naar bed en vroeg op goed voor je.)", answers: ["而言", "来说"],
      hint: "Welke twee tekens maken 一般 tot \"in het algemeen\"?", why: "一般而言 (schrijftaal) of 一般来说 (spreektaal) = in het algemeen." },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["对价格而言，这家店比较便宜。", "就价格而言，这家店比较便宜。", "对顾客而言，这家店比较便宜。", "相对而言，这家店比较便宜。"], answer: 0,
      why: ["Goed: prijs is een aspect, dus 就 ... 而言, niet 对.", "Dit klopt: 就 + aspect + 而言.", "Dit klopt: 对 + groep + 而言.", "Dit klopt: 相对而言 = relatief gezien."] },
    { type: "order", q: "Zet in de goede volgorde: \"Voor hem was deze ervaring erg belangrijk.\"",
      tokens: [["对", "duì"], ["他", "tā"], ["而言，", "ér yán,"], ["这次经历", "zhè cì jīnglì"], ["非常重要", "fēicháng zhòngyào"]],
      alt: ["这次经历对他而言，非常重要"] },
    { type: "mc", q: "总体而言，这次活动很成功。Wat betekent 总体而言?",
      options: ["Over het geheel genomen", "Voor de hele groep", "Wat de organisatie betreft", "Zelfs als alles meezit"], answer: 0,
      why: ["Goed: 总体而言 = over het geheel genomen.", "Een groep noem je met 对 ... 而言.", "Een aspect noem je met 就 ... 而言.", "\"Zelfs als\" is 即使 of 就算."] },
    { type: "open", q: "Vertaal (formeel): \"Voor studenten is de huur in deze stad te hoog.\"", model: ["对学生而言，这个城市的房租太高了。", "这个城市的房租对学生而言过高。"],
      tip: "Check: 对 + groep + 而言, aan het begin of na het onderwerp." },
    { type: "open", q: "Vertaal (formeel): \"Wat de economie betreft, heeft het land grote vooruitgang geboekt.\"", model: ["就经济而言，这个国家取得了很大的进步。", "就经济而言，该国取得了巨大进步。"],
      tip: "Check: 就 + aspect (经济) + 而言, gevolgd door een komma." }
  ],
  review: [
    { type: "mc", q: "___安全而言，坐火车比开车好。(Wat veiligheid betreft, is de trein beter dan de auto.)",
      options: ["就", "对", "在", "跟"], answer: 0,
      why: ["Goed: 就 + aspect + 而言.", "对 ... 而言 is voor een persoon of groep.", "在 ... 而言 bestaat niet.", "跟 hoort niet bij 而言."] },
    { type: "mc", q: "Welke zin klopt?",
      options: ["对孩子们而言，玩儿也是学习。", "对孩子们来而言，玩儿也是学习。", "对孩子们而说，玩儿也是学习。", "就孩子们而说，玩儿也是学习。"], answer: 0,
      why: ["Goed: 对 + groep + 而言.", "来 en 而言 samen bestaan niet.", "而说 bestaat niet.", "而说 bestaat niet, en voor een groep gebruik je 对."] },
    { type: "mc", q: "Wat is het verschil tussen 对 ... 而言 en 对 ... 来说?",
      options: ["Zelfde betekenis; 而言 is schrijftaal, 来说 neutraal en spreektaal.", "而言 is spreektaal; 来说 is schrijftaal.", "而言 noemt een aspect; 来说 een persoon.", "来说 kan alleen aan het eind van de zin staan."], answer: 0,
      why: ["Goed.", "Het is precies andersom.", "Een aspect noem je met 就 ... 而言; 对 ... 而言 noemt een persoon of groep.", "Allebei staan aan het begin of na het onderwerp."] }
  ]
})
