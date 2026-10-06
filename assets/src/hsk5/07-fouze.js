({
  id: "07", slug: "fouze", title: "否则 / 不然 / 要不然", sub: "Doe dit, anders gebeurt er iets",
  canDo: "Je kunt nu zeggen wat er gebeurt als iets niet gedaan wordt, met 否则, 不然 en 要不然.",
  guess: {
    q: "快点儿走吧，否则要迟到了。Wat betekent dit, denk je?",
    options: ["Laten we opschieten, anders komen we te laat.", "Laten we opschieten, want we zijn al te laat.", "Laten we opschieten, dan komen we niet te laat.", "We komen te laat, ook als we opschieten."], answer: 0,
    why: ["Goed: na 否则 staat wat er gebeurt als je het eerste deel niet doet.", "否则 geeft geen reden. Het noemt een gevolg dat nog kan komen.", "Na 否则 staat juist het slechte gevolg: 要迟到了.", "否则 zegt dat opschieten het probleem voorkomt, niet dat het niet helpt."]
  },
  problem: "\"Schiet op, anders missen we de trein.\" In het Nederlands zeg je \"anders\": als je het niet doet, gebeurt er iets. In het Chinees noem je eerst wat moet. Dan begint het tweede deel met 否则 (fǒuzé), 不然 (bùrán) of 要不然 (yàobùrán). Daarna komt het gevolg.",
  pattern: [
    { l: "wat moet", v: "你得早点儿睡", c: 4 }, { l: "否则", v: "否则", c: 2, key: true },
    { l: "wanneer", v: "明天", c: 3 }, { l: "gevolg", v: "会起不来", c: 5 }
  ],
  patternCap: "Wat moet of beter is, + 否则 / 不然 / 要不然 (+ wie) + (就 / 会 / 要……了) + gevolg; 否则 = formeel, 不然 / 要不然 = spreektaal",
  rules: [
    "否则, 不然 en 要不然 staan aan het begin van het tweede deel. Het onderwerp komt erna: 否则你会后悔。",
    "Het eerste deel zegt wat moet of beter is. Vaak staat er 必须, 得, 要, 最好 of een opdracht.",
    "Na 否则 komt het gevolg, vaak met 就, 会, 可能 of 要……了.",
    "否则 is formeel en past in geschreven tekst. 不然 en 要不然 hoor je in gesprekken. Ook mogelijk: 不然的话, 要不然的话.",
    "否则 betekent al \"als dat niet zo is\". Je zet er dus geen 如果 vóór."
  ],
  pitfall: "否则 is alleen \"anders\" in de zin van \"zo niet\". \"Ik doe het anders\" (op een andere manier) is 我换个方法做 of 我用别的方法做, nooit 否则.",
  examples: [
    { cn: "快点儿走吧，否则要迟到了。", py: "Kuài diǎnr zǒu ba, fǒuzé yào chídào le.", nl: "Laten we opschieten, anders komen we te laat." },
    { cn: "你得多复习，不然考试会不及格。", py: "Nǐ děi duō fùxí, bùrán kǎoshì huì bù jígé.", nl: "Je moet meer herhalen, anders haal je het examen niet." },
    { cn: "幸亏你提醒我，要不然我就忘了。", py: "Xìngkuī nǐ tíxǐng wǒ, yàobùrán wǒ jiù wàng le.", nl: "Gelukkig herinnerde je me eraan, anders was ik het vergeten." },
    { cn: "申请材料必须在五月一日以前提交，否则无效。", py: "Shēnqǐng cáiliào bìxū zài wǔ yuè yī rì yǐqián tíjiāo, fǒuzé wúxiào.", nl: "De aanvraagstukken moeten vóór 1 mei worden ingediend, anders zijn ze ongeldig." }
  ],
  nuance: [
    { h: "否则, 不然 of 要不然?",
      p: "De betekenis is hetzelfde. Het verschil zit in het register. 否则 hoort bij schrijftaal: regels, mededelingen, formele brieven. 不然 en 要不然 zijn spreektaal en klinken persoonlijker. In gesprekken hoor je ook het korte 要不. Tegen een vriend zeg je dus liever 不然 dan 否则.",
      ex: [
        { cn: "考试时不得使用手机，否则成绩无效。", py: "Kǎoshì shí bùdé shǐyòng shǒujī, fǒuzé chéngjì wúxiào.", nl: "Tijdens het examen mag je geen telefoon gebruiken, anders is je cijfer ongeldig." },
        { cn: "好好学习吧，不然以后会后悔的。", py: "Hǎohāo xuéxí ba, bùrán yǐhòu huì hòuhuǐ de.", nl: "Leer goed, anders krijg je later spijt." }
      ] },
    { h: "否则 of 如果不?",
      p: "Beide zeggen: als je dit niet doet, dan ... De bouw is anders. Met 如果不 zet je de ontkende voorwaarde in het eerste deel, en daarna 就. Met 否则 noem je eerst wat je wél moet doen. Gebruik nooit beide samen: 如果……否则 is fout.",
      ex: [
        { cn: "你最好带把伞，否则会被雨淋湿。", py: "Nǐ zuìhǎo dài bǎ sǎn, fǒuzé huì bèi yǔ línshī.", nl: "Neem beter een paraplu mee, anders word je nat van de regen." },
        { cn: "如果不带伞，你就会被雨淋湿。", py: "Rúguǒ bú dài sǎn, nǐ jiù huì bèi yǔ línshī.", nl: "Als je geen paraplu meeneemt, word je nat van de regen." }
      ] },
    { h: "Twee extra gebruiken van 要不然",
      p: "Terugkijken: na 幸亏 of 多亏 zeg je met 要不然 wat er bijna was gebeurd. Een voorstel doen: 要不然 (of 要不) betekent dan \"of anders\". Je biedt een andere mogelijkheid aan. In dat gebruik komt geen slecht gevolg na 要不然, maar een plan.",
      ex: [
        { cn: "多亏他帮忙，要不然我们今天做不完。", py: "Duōkuī tā bāngmáng, yàobùrán wǒmen jīntiān zuò bu wán.", nl: "Dankzij zijn hulp lukt het. Anders hadden we het vandaag niet af gekregen." },
        { cn: "这家店今天关门了，要不然我们去那家吧。", py: "Zhè jiā diàn jīntiān guānmén le, yàobùrán wǒmen qù nà jiā ba.", nl: "Deze winkel is vandaag dicht. Laten we anders naar die andere gaan." }
      ] }
  ],
  mistakes: [
    { wrong: "否则快点儿走，要迟到了。", right: "快点儿走，否则要迟到了。", why: "否则 staat aan het begin van het tweede deel, ná wat moet gebeuren." },
    { wrong: "你要多穿点儿，否则不会感冒。", right: "你要多穿点儿，否则会感冒。", why: "Na 否则 staat het slechte gevolg. De ontkenning zit al in 否则." },
    { wrong: "如果你不早点儿睡，否则明天起不来。", right: "如果你不早点儿睡，明天就起不来。", why: "如果不 en 否则 zeggen hetzelfde. Kies er één: met 如果不 gebruik je 就." },
    { wrong: "这个问题我想否则解决。", right: "这个问题我想用别的方法解决。", why: "否则 is \"anders\" in de zin van \"zo niet\". Voor \"op een andere manier\" zeg je 用别的方法." }
  ],
  vocab: [
    ["否则", "fǒuzé", "anders, zo niet (formeel)"], ["不然", "bùrán", "anders (spreektaal)"], ["要不然", "yàobùrán", "anders; of anders (spreektaal)"],
    ["幸亏", "xìngkuī", "gelukkig, maar goed dat"], ["及格", "jígé", "een voldoende halen"], ["提交", "tíjiāo", "indienen"],
    ["无效", "wúxiào", "ongeldig"], ["罚款", "fákuǎn", "boete"], ["赔偿", "péicháng", "vergoeden, schadevergoeding"],
    ["后悔", "hòuhuǐ", "spijt hebben"]
  ],
  dialogue: [
    ["A", "都十一点了，你怎么还在玩手机？", "Dōu shíyī diǎn le, nǐ zěnme hái zài wán shǒujī?", "Het is al elf uur. Waarom zit je nog op je telefoon?"],
    ["B", "我再看一会儿就睡。", "Wǒ zài kàn yíhuìr jiù shuì.", "Nog heel even, dan ga ik slapen."],
    ["A", "你明天早上八点有面试，得早点儿睡，不然起不来。", "Nǐ míngtiān zǎoshang bā diǎn yǒu miànshì, děi zǎo diǎnr shuì, bùrán qǐ bu lái.", "Je hebt morgen om acht uur een sollicitatiegesprek. Ga vroeg slapen, anders kom je je bed niet uit."],
    ["B", "放心，我定了两个闹钟。", "Fàngxīn, wǒ dìngle liǎng ge nàozhōng.", "Geen zorgen, ik heb twee wekkers gezet."],
    ["A", "那你把衣服也准备好吧，要不然明天早上又找不到。", "Nà nǐ bǎ yīfu yě zhǔnbèi hǎo ba, yàobùrán míngtiān zǎoshang yòu zhǎo bu dào.", "Leg dan ook je kleren klaar, anders kun je ze morgenochtend weer niet vinden."],
    ["B", "好吧。幸亏你提醒我，要不然我就忘了。", "Hǎo ba. Xìngkuī nǐ tíxǐng wǒ, yàobùrán wǒ jiù wàng le.", "Oké. Gelukkig zeg je het, anders was ik het vergeten."]
  ],
  reading: {
    title: "图书馆借书须知",
    lines: [
      { cn: "欢迎使用本馆。借书时，请注意以下几点。", py: "Huānyíng shǐyòng běn guǎn. Jiè shū shí, qǐng zhùyì yǐxià jǐ diǎn.", nl: "Welkom in onze bibliotheek. Let bij het lenen op de volgende punten." },
      { cn: "第一，借书必须使用本人的借书证，否则不能借书。", py: "Dì yī, jiè shū bìxū shǐyòng běnrén de jièshūzhèng, fǒuzé bù néng jiè shū.", nl: "Ten eerste: je moet je eigen lenerspas gebruiken, anders kun je geen boeken lenen." },
      { cn: "第二，每次最多可以借五本书，借期为一个月。", py: "Dì èr, měi cì zuì duō kěyǐ jiè wǔ běn shū, jièqī wéi yí ge yuè.", nl: "Ten tweede: je mag per keer hoogstens vijf boeken lenen, voor een maand." },
      { cn: "第三，请按时还书，否则每本书每天要交五毛钱罚款。", py: "Dì sān, qǐng ànshí huán shū, fǒuzé měi běn shū měi tiān yào jiāo wǔ máo qián fákuǎn.", nl: "Ten derde: breng boeken op tijd terug, anders betaal je vijftig cent boete per boek per dag." },
      { cn: "如果需要多借几天，请在到期以前办理续借，否则系统不会自动延长。", py: "Rúguǒ xūyào duō jiè jǐ tiān, qǐng zài dàoqī yǐqián bànlǐ xùjiè, fǒuzé xìtǒng bú huì zìdòng yáncháng.", nl: "Wil je een boek langer houden, verleng het dan vóór de einddatum. Anders verlengt het systeem niet vanzelf." },
      { cn: "第四，请爱护图书，不要在书上写字，否则需要按原价赔偿。", py: "Dì sì, qǐng àihù túshū, búyào zài shū shang xiě zì, fǒuzé xūyào àn yuánjià péicháng.", nl: "Ten vierde: ga zorgvuldig met boeken om en schrijf er niet in, anders moet je de volle prijs vergoeden." },
      { cn: "第五，借书证丢失以后，请马上告诉工作人员，否则别人可能会用你的证借书。", py: "Dì wǔ, jièshūzhèng diūshī yǐhòu, qǐng mǎshàng gàosu gōngzuò rényuán, fǒuzé biérén kěnéng huì yòng nǐ de zhèng jiè shū.", nl: "Ten vijfde: ben je je pas kwijt, meld het dan meteen. Anders kan iemand anders met jouw pas boeken lenen." },
      { cn: "谢谢您的合作。", py: "Xièxie nín de hézuò.", nl: "Bedankt voor uw medewerking." }
    ],
    questions: [
      { type: "mc", q: "Wat gebeurt er als je een boek te laat terugbrengt?",
        options: ["Je betaalt vijftig cent boete per boek per dag.", "Je moet de volle prijs vergoeden.", "Het systeem verlengt het boek vanzelf.", "Je mag nooit meer boeken lenen."], answer: 0,
        why: ["Goed: 否则每本书每天要交五毛钱罚款。", "Dat geldt als je in een boek schrijft.", "Er staat juist: 系统不会自动延长.", "Dat staat niet in de tekst."] },
      { type: "mc", q: "Waarom moet je een verloren pas meteen melden?",
        options: ["Anders kan iemand anders met jouw pas lenen.", "Anders moet je boete betalen.", "Anders kun je maar vijf boeken lenen.", "Anders verlengt het systeem je boeken niet."], answer: 0,
        why: ["Goed: 否则别人可能会用你的证借书。", "Boete hoort bij te laat terugbrengen.", "Vijf boeken is de normale regel.", "Verlengen hoort bij een ander punt."] },
      { type: "mc", q: "借书必须使用本人的借书证，否则不能借书。Wat betekent 否则 hier?",
        options: ["Als je dat niet doet.", "Bovendien.", "Hoewel.", "Op een andere manier."], answer: 0,
        why: ["Goed: 否则 = als je je eigen pas niet gebruikt.", "\"Bovendien\" is 而且 of 另外.", "\"Hoewel\" is 虽然 of 尽管.", "\"Op een andere manier\" is 用别的方法. 否则 betekent \"zo niet\"."] }
    ]
  },
  questions: [
    { type: "mc", q: "Wat betekent: 你最好现在就订票，否则就买不到了。",
      options: ["Boek nu je kaartjes, anders zijn ze straks op.", "Boek nu je kaartjes, want ze zijn al op.", "Boek nu je kaartjes, dan zijn ze straks op.", "Boek geen kaartjes, ze zijn toch op."], answer: 0,
      why: ["Goed: 否则 = als je het niet doet. 买不到 is het gevolg.", "否则 geeft geen reden. De kaartjes zijn nog niet op.", "Het gevolg na 否则 geldt juist als je níet boekt.", "最好现在就订票 zegt dat je wél moet boeken."] },
    { type: "mc", q: "快点儿吃，___菜就凉了。(Eet snel, anders wordt het eten koud.)",
      options: ["不然", "而且", "所以", "尽管"], answer: 0,
      why: ["Goed: 不然 = anders, in spreektaal.", "而且 betekent \"bovendien\". Het eten wordt niet koud doordat je snel eet.", "所以 zou zeggen dat snel eten het eten koud maakt.", "尽管 betekent \"hoewel\" en staat in het eerste deel."] },
    { type: "order", q: "Zet in de goede volgorde: \"Je moet je paspoort meenemen, anders mag je niet in het vliegtuig.\"",
      tokens: [["你得带护照", "nǐ děi dài hùzhào"], ["否则", "fǒuzé"], ["不能", "bù néng"], ["上飞机", "shàng fēijī"]] },
    { type: "mc", q: "Welke zin betekent hetzelfde als: 你要多穿点儿，不然会感冒。",
      options: ["如果你不多穿点儿，就会感冒。", "如果你多穿点儿，就会感冒。", "你没多穿点儿，所以感冒了。", "即使你多穿点儿，也会感冒。"], answer: 0,
      why: ["Goed: 不然 = 如果不这样. De voorwaarde wordt 如果不.", "De ontkenning ontbreekt: niet warm aankleden geeft de kou.", "不然 gaat over iets wat nog kan gebeuren, niet over iets wat al gebeurd is.", "即使 ... 也 zegt dat je hoe dan ook ziek wordt. Dat staat er niet."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["如果你不早点儿出发，否则会迟到。", "你得早点儿出发，否则会迟到。", "你得早点儿出发，不然会迟到。", "如果你不早点儿出发，就会迟到。"], answer: 0,
      why: ["Goed: deze klopt niet. 如果不 en 否则 zeggen hetzelfde. Gebruik er één.", "Deze klopt: wat moet, dan 否则 + gevolg.", "Deze klopt: 不然 is de spreektaalvorm.", "Deze klopt: 如果不 + voorwaarde, dan 就."] },
    { type: "mc", q: "Welk woord is het meest formeel en past het best in een officiële mededeling?",
      options: ["否则", "要不然", "不然", "要不"], answer: 0,
      why: ["Goed: 否则 hoort bij schrijftaal en officiële teksten.", "要不然 is spreektaal.", "不然 is spreektaal.", "要不 is de kortste en meest informele vorm."] },
    { type: "mc", q: "\"Ik wil het eens anders proberen.\"",
      options: ["我想换个方法试试。", "我想否则试试。", "我想不然试试。", "我想要不然试试。"], answer: 0,
      why: ["Goed: \"anders\" = op een andere manier: 换个方法.", "否则 betekent \"zo niet\", niet \"op een andere manier\".", "不然 betekent \"zo niet\", niet \"op een andere manier\".", "要不然 betekent \"zo niet\" of \"of anders\", niet \"op een andere manier\"."] },
    { type: "mc", q: "幸亏带了伞，___我们全身都湿了。(Gelukkig hadden we een paraplu bij, anders waren we kletsnat geworden.)",
      options: ["要不然", "所以", "而且", "因此"], answer: 0,
      why: ["Goed: na 幸亏 zeg je met 要不然 wat er bijna was gebeurd.", "所以 zou zeggen dat de paraplu ons nat maakte.", "而且 voegt iets toe. Hier is het een gevolg dat níet gebeurde.", "因此 = daarom. Dat is een echt gevolg, geen bijna-gevolg."] },
    { type: "order", q: "Zet in de goede volgorde: \"Gelukkig was jij er, anders wist ik echt niet wat ik moest doen.\"",
      tokens: [["幸亏", "xìngkuī"], ["有你在", "yǒu nǐ zài"], ["要不然", "yàobùrán"], ["我真不知道", "wǒ zhēn bù zhīdào"], ["怎么办", "zěnme bàn"]] },
    { type: "fill", q: "你得每天练习，___的话很快就会忘。(Je moet elke dag oefenen, anders vergeet je het snel.)",
      answers: ["不然", "要不然", "否则"], hint: "Welk woord betekent \"anders\" en kan vóór 的话 staan?", why: "不然的话, 要不然的话 en 否则的话 betekenen allemaal \"zo niet\"." },
    { type: "open", q: "Vertaal: \"Schiet op, anders missen we de trein.\"",
      model: ["快点儿，不然我们赶不上火车了。", "快点儿走，要不然会错过火车。", "快点儿，否则我们赶不上火车了。"],
      tip: "Check: eerst de opdracht, dan 不然/要不然/否则 aan het begin van het tweede deel, dan het gevolg." },
    { type: "open", q: "Vertaal (formeel): \"Het formulier moet vóór vrijdag worden ingediend, anders is het ongeldig.\"",
      model: ["表格必须在星期五以前提交，否则无效。", "申请表必须在周五之前提交，否则无效。"],
      tip: "Check: in een formele tekst kies je 否则, en het staat vooraan in het tweede deel." }
  ],
  review: [
    { type: "mc", q: "\"Neem je jas mee, anders krijg je het koud.\"",
      options: ["带上外套，不然你会冷。", "不然带上外套，你会冷。", "带上外套，所以你会冷。", "带上外套，不然你不会冷。"], answer: 0,
      why: ["Goed: eerst wat moet, dan 不然 + gevolg.", "不然 staat aan het begin van het tweede deel.", "所以 zou zeggen dat de jas je koud maakt.", "Na 不然 staat het slechte gevolg, zonder extra 不."] },
    { type: "mc", q: "你最好先给他打个电话，___他可能不在家。(Bel hem eerst even, anders is hij misschien niet thuis.)",
      options: ["否则", "所以", "虽然", "不但"], answer: 0,
      why: ["Goed: 否则 = als je niet eerst belt.", "所以 zou zeggen dat bellen hem van huis weghoudt.", "虽然 betekent \"hoewel\" en staat in het eerste deel.", "不但 hoort bij 而且: niet alleen ... maar ook."] },
    { type: "mc", q: "Wat betekent: 外面太吵了，要不然我们换个地方吧。",
      options: ["Het is te lawaaiig buiten. Laten we anders ergens anders heen gaan.", "Het is te lawaaiig buiten, dus we blijven hier.", "Het is te lawaaiig buiten, hoewel we ergens anders zijn.", "Als het buiten niet lawaaiig is, gaan we ergens anders heen."], answer: 0,
      why: ["Goed: hier doet 要不然 een voorstel: \"of anders\".", "要不然 + 吧 stelt juist iets anders voor.", "要不然 betekent niet \"hoewel\".", "Er staat geen voorwaarde. 太吵了 is een feit."] }
  ]
})
