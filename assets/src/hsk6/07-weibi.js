({
  id: "07", slug: "weibi", title: "未必", sub: "Niet per se: een bewering afzwakken",
  canDo: "Je kunt nu met 未必 zeggen dat iets niet per se zo is, en je kiest tussen 未必, 不一定 en 必然.",
  guess: {
    q: "贵的东西未必好。Wat bedoelt de spreker, denk je?",
    options: ["Dure dingen zijn niet per se goed.", "Dure dingen zijn nooit goed.", "Dure dingen zijn altijd goed.", "Dure dingen zijn nog niet goed."], answer: 0,
    why: ["Goed: 未必 = niet per se, niet noodzakelijk.", "未必 is voorzichtiger dan \"nooit\": soms zijn ze wel goed.", "Je leest het 未 niet mee: de spreker twijfelt juist aan die regel.", "未 lijkt op 还没, maar 未必 gaat niet over tijd."]
  },
  problem: "Iemand zegt: \"Duur is goed\" of \"Wie hard werkt, slaagt.\" Jij denkt: dat hoeft niet zo te zijn. In het Nederlands zeg je \"niet per se\". In het Chinees zeg je 未必 (wèibì). Het klinkt wat formeler dan 不一定.",
  pattern: [
    { l: "onderwerp", v: "贵的东西", c: 1 }, { l: "niet per se", v: "未必", c: 2, key: true }, { l: "eigenschap / handeling", v: "好", c: 3 }
  ],
  patternCap: "Onderwerp + 未必 + werkwoord / bijv. nw. · 也未必 · 那可未必。· 未必不 + ... = kan best ...",
  rules: [
    "未必 is een bijwoord. Het staat na het onderwerp en vóór het werkwoord of bijvoeglijk naamwoord.",
    "Na 未必 komt een bijvoeglijk naamwoord direct, zonder 是: 未必好. Voor een naamwoord gebruik je 未必是.",
    "未必 combineert vaak met 会, 能 of 也: 他也未必会来.",
    "Als korte reactie op een bewering zeg je: 那可未必。 of 那也未必。",
    "Register: 未必 is neutraal tot schrijftaal. In gewone spreektaal hoor je vaker 不一定."
  ],
  pitfall: "未必 betekent niet \"zeker niet\". Het zegt alleen: het is niet zeker zo. 他未必知道 = misschien weet hij het niet, misschien wel.",
  examples: [
    { cn: "他说的话未必是真的。", py: "Tā shuō de huà wèibì shì zhēn de.", nl: "Wat hij zegt, is niet per se waar." },
    { cn: "学历高的人，能力未必强。", py: "Xuélì gāo de rén, nénglì wèibì qiáng.", nl: "Iemand met een hoge opleiding is niet per se bekwaam." },
    { cn: "这个办法很新，但未必有效。", py: "Zhège bànfǎ hěn xīn, dàn wèibì yǒuxiào.", nl: "Deze methode is nieuw, maar niet per se effectief." },
    { cn: "失败未必是坏事。", py: "Shībài wèibì shì huài shì.", nl: "Mislukken is niet per se iets slechts." }
  ],
  nuance: [
    { h: "未必 of 不一定?",
      p: "De betekenis is bijna gelijk. 不一定 is spreektaal en neutraal. 未必 is formeler en spreekt vaak een bewering van iemand anders tegen. Op een open vraag over plannen antwoord je met 不一定 (\"weet ik nog niet\"). Op een stellige bewering reageer je met 那可未必 (\"dat is nog maar de vraag\").",
      ex: [
        { cn: "A：你周末加班吗？B：不一定。", py: "A: Nǐ zhōumò jiābān ma? B: Bù yídìng.", nl: "Werk je dit weekend over? - Weet ik nog niet." },
        { cn: "A：他肯定会同意。B：那可未必。", py: "A: Tā kěndìng huì tóngyì. B: Nà kě wèibì.", nl: "Hij gaat zeker akkoord. - Dat is nog maar de vraag." }
      ] },
    { h: "Het tegenovergestelde: 必然 en 必定",
      p: "必然 en 必定 betekenen \"noodzakelijk, zeker\". Beide zijn schrijftaal. 必定 is alleen een bijwoord. 必然 kan ook een bijvoeglijk naamwoord zijn: 必然的结果, 这是必然的. 未必 is altijd een bijwoord. Je zegt dus niet 这是未必的.",
      ex: [
        { cn: "经济变化必然会影响就业。", py: "Jīngjì biànhuà bìrán huì yǐngxiǎng jiùyè.", nl: "Economische veranderingen hebben onvermijdelijk invloed op de werkgelegenheid." },
        { cn: "努力的人未必都能成功。", py: "Nǔlì de rén wèibì dōu néng chénggōng.", nl: "Wie hard werkt, slaagt niet per se." }
      ] },
    { h: "未必不: voorzichtig positief",
      p: "未必不 is een dubbele ontkenning. Het betekent: het kan best zo zijn. Je stelt zo voorzichtig iets positiefs voor. Dit klinkt beschouwend en hoort vooral bij schrijftaal en formele spreektaal.",
      ex: [
        { cn: "换个工作，未必不是一个好选择。", py: "Huàn ge gōngzuò, wèibì bú shì yí ge hǎo xuǎnzé.", nl: "Van baan veranderen kan best een goede keuze zijn." }
      ] }
  ],
  mistakes: [
    { wrong: "未必他知道这件事。", right: "他未必知道这件事。", why: "未必 is een bijwoord en staat na het onderwerp, vóór het werkwoord." },
    { wrong: "贵的东西未必是好。", right: "贵的东西未必好。", why: "Een bijvoeglijk naamwoord komt direct na 未必, zonder 是." },
    { wrong: "这个结果是未必的。", right: "这个结果是必然的。", why: "未必 kan niet in 是 ... 的 staan. 必然 kan dat wel: het is ook een bijvoeglijk naamwoord." },
    { wrong: "A：你明天来吗？B：未必。", right: "A：你明天来吗？B：不一定。", why: "Op een open vraag over plannen antwoord je met 不一定. 未必 spreekt een bewering tegen." }
  ],
  vocab: [
    ["未必", "wèibì", "niet per se, niet noodzakelijk"], ["必然", "bìrán", "onvermijdelijk, noodzakelijk"], ["学历", "xuélì", "opleidingsniveau"],
    ["能力", "nénglì", "bekwaamheid, vermogen"], ["有效", "yǒuxiào", "effectief"], ["名校", "míngxiào", "topuniversiteit, bekende school"],
    ["取决于", "qǔjué yú", "afhangen van"], ["因素", "yīnsù", "factor"], ["成就", "chéngjiù", "prestatie"], ["唯一", "wéiyī", "enig"]
  ],
  dialogue: [
    ["A", "这家餐厅门口排了这么长的队，菜一定很好吃。", "Zhè jiā cāntīng ménkǒu páile zhème cháng de duì, cài yídìng hěn hǎochī.", "Er staat zo'n lange rij voor dit restaurant. Het eten is vast heel lekker."],
    ["B", "那可不一定。排队的人多，未必说明菜好吃。", "Nà kě bù yídìng. Páiduì de rén duō, wèibì shuōmíng cài hǎochī.", "Dat weet je niet. Een lange rij betekent niet per se dat het eten lekker is."],
    ["A", "为什么这么说？", "Wèishénme zhème shuō?", "Waarom zeg je dat?"],
    ["B", "有的餐厅只是在网上很火，大家都想来拍照。", "Yǒu de cāntīng zhǐ shì zài wǎng shang hěn huǒ, dàjiā dōu xiǎng lái pāizhào.", "Sommige restaurants zijn gewoon populair online. Iedereen wil er foto's maken."],
    ["A", "也对。不过名气大的店，也未必都不好吃。", "Yě duì. Búguò míngqì dà de diàn, yě wèibì dōu bù hǎochī.", "Klopt. Maar bekende zaken zijn ook niet allemaal per se slecht."],
    ["B", "好吧，既然来了，就尝尝吧。", "Hǎo ba, jìrán lái le, jiù chángchang ba.", "Goed, nu we hier toch zijn, proeven we het maar."]
  ],
  reading: {
    title: "名校与成功",
    lines: [
      { cn: "很多家长认为，孩子只要进了名校，将来就一定能成功。", py: "Hěn duō jiāzhǎng rènwéi, háizi zhǐyào jìnle míngxiào, jiānglái jiù yídìng néng chénggōng.", nl: "Veel ouders denken dat hun kind later zeker slaagt, als het maar op een topuniversiteit komt." },
      { cn: "然而，事实未必如此。", py: "Rán'ér, shìshí wèibì rúcǐ.", nl: "De werkelijkheid is echter niet per se zo." },
      { cn: "名校的学生固然有更多机会，但机会多未必等于成功。", py: "Míngxiào de xuésheng gùrán yǒu gèng duō jīhuì, dàn jīhuì duō wèibì děngyú chénggōng.", nl: "Studenten van topuniversiteiten hebben wel meer kansen, maar meer kansen is niet per se succes." },
      { cn: "一个人能否成功，取决于很多因素，比如性格、努力和运气。", py: "Yí ge rén néngfǒu chénggōng, qǔjué yú hěn duō yīnsù, bǐrú xìnggé, nǔlì hé yùnqi.", nl: "Of iemand slaagt, hangt af van veel factoren, zoals karakter, inzet en geluk." },
      { cn: "有些人上的是普通大学，后来却取得了很大的成就。", py: "Yǒuxiē rén shàng de shì pǔtōng dàxué, hòulái què qǔdéle hěn dà de chéngjiù.", nl: "Sommige mensen gingen naar een gewone universiteit, maar behaalden later grote prestaties." },
      { cn: "反过来，成绩好的学生，工作能力也未必强。", py: "Fǎn guòlái, chéngjì hǎo de xuésheng, gōngzuò nénglì yě wèibì qiáng.", nl: "Omgekeerd zijn studenten met hoge cijfers ook niet per se goed in hun werk." },
      { cn: "当然，这并不是说上名校没有用。", py: "Dāngrán, zhè bìng bú shì shuō shàng míngxiào méiyǒu yòng.", nl: "Dit betekent natuurlijk niet dat een topuniversiteit geen zin heeft." },
      { cn: "只是家长不应该把它看成通往成功的唯一道路。", py: "Zhǐ shì jiāzhǎng bù yīnggāi bǎ tā kànchéng tōngwǎng chénggōng de wéiyī dàolù.", nl: "Alleen moeten ouders het niet zien als de enige weg naar succes." }
    ],
    questions: [
      { type: "mc", q: "Wat denken veel ouders volgens de tekst?",
        options: ["Een topuniversiteit leidt zeker tot succes.", "Een topuniversiteit heeft geen zin.", "Succes hangt vooral van geluk af.", "Gewone universiteiten zijn beter."], answer: 0,
        why: ["Goed: 只要进了名校，将来就一定能成功.", "Dat zegt de schrijver juist níet: 这并不是说上名校没有用.", "Geluk is één factor die de schrijver noemt, niet wat ouders denken.", "Dat staat niet in de tekst."] },
      { type: "mc", q: "Waar hangt succes volgens de schrijver van af?",
        options: ["Van veel factoren, zoals karakter, inzet en geluk.", "Alleen van de universiteit.", "Alleen van hoge cijfers.", "Van de ouders."], answer: 0,
        why: ["Goed: 取决于很多因素，比如性格、努力和运气.", "De schrijver zegt dat de school niet de enige weg is.", "Hoge cijfers betekenen niet per se goed werk: 也未必强.", "De ouders worden genoemd, maar niet als factor."] },
      { type: "mc", q: "然而，事实未必如此。Wat betekent 未必 hier?",
        options: ["De werkelijkheid is niet per se zo.", "De werkelijkheid is zeker niet zo.", "De werkelijkheid is nog niet zo.", "De werkelijkheid is zeker zo."], answer: 0,
        why: ["Goed: 未必 = niet per se.", "未必 is voorzichtiger: het sluit niets uit.", "未必 gaat niet over tijd.", "Je mist de ontkenning in 未."] }
    ]
  },
  questions: [
    { type: "mc", q: "Wat betekent: 聪明的人未必成功。",
      options: ["Slimme mensen zijn niet per se succesvol.", "Slimme mensen zijn nooit succesvol.", "Slimme mensen zijn altijd succesvol.", "Slimme mensen zijn nog niet succesvol."], answer: 0,
      why: ["Goed: 未必 = niet per se.", "未必 sluit succes niet uit; het is geen \"nooit\".", "Je mist de ontkenning in 未.", "未必 gaat niet over tijd, zoals 还没."] },
    { type: "mc", q: "\"Hij weet het niet per se.\"",
      options: ["他未必知道。", "未必他知道。", "他知道未必。", "他未必不知道。"], answer: 0,
      why: ["Goed: onderwerp + 未必 + werkwoord.", "未必 staat na het onderwerp, niet ervoor.", "未必 staat vóór het werkwoord, niet erachter.", "未必不 betekent: hij weet het misschien best. Dat is een andere betekenis."] },
    { type: "mc", q: "Je vriend vraagt: 你周末去爬山吗？ Je weet het nog niet. Wat antwoord je?",
      options: ["不一定。", "未必。", "必然。", "必定。"], answer: 0,
      why: ["Goed: 不一定 = weet ik nog niet. Gewone spreektaal.", "未必 spreekt een bewering tegen; als antwoord op een plannenvraag klinkt het vreemd.", "必然 = onvermijdelijk. Het past niet als antwoord en is schrijftaal.", "必定 is een bijwoord en kan niet alleen staan."] },
    { type: "mc", q: "努力___会成功，但不努力很难成功。(Hard werken leidt niet per se tot succes, maar zonder hard werken lukt het moeilijk.)",
      options: ["未必", "必然", "必定", "一定"], answer: 0,
      why: ["Goed: 未必 = niet per se.", "必然 = onvermijdelijk: het tegenovergestelde.", "必定 = zeker: het tegenovergestelde.", "一定 = zeker: dan valt de tegenstelling met 但 weg."] },
    { type: "mc", q: "Wat betekent: 这次失败，未必不是一件好事。",
      options: ["Deze mislukking kan best iets goeds zijn.", "Deze mislukking is zeker niets goeds.", "Deze mislukking is zeker iets goeds.", "Deze mislukking is niet per se iets goeds."], answer: 0,
      why: ["Goed: 未必不 = dubbele ontkenning, \"kan best\".", "Je leest 未必 als \"zeker niet\".", "未必不 is voorzichtig, niet zeker.", "Je mist het tweede 不: 未必不是 is positief."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["这个结果是未必的。", "这个结果是必然的。", "这个结果未必正确。", "这个结果不一定正确。"], answer: 0,
      why: ["Goed: deze klopt niet. 未必 is alleen een bijwoord en kan niet in 是 ... 的.", "Deze klopt: 必然 kan een bijvoeglijk naamwoord zijn.", "Deze klopt: 未必 + bijvoeglijk naamwoord.", "Deze klopt: 不一定 + bijvoeglijk naamwoord."] },
    { type: "order", q: "Zet in de goede volgorde: \"De kwaliteit van merkkleding is niet per se goed.\"",
      tokens: [["名牌衣服", "míngpái yīfu"], ["的", "de"], ["质量", "zhìliàng"], ["未必", "wèibì"], ["好", "hǎo"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Mensen met veel geld zijn ook niet per se gelukkiger.\"",
      tokens: [["钱多", "qián duō"], ["的人", "de rén"], ["也未必", "yě wèibì"], ["更幸福", "gèng xìngfú"]] },
    { type: "fill", q: "A: 他肯定会同意的。B: 那可___。(Hij gaat zeker akkoord. - Dat is nog maar de vraag.)", answers: ["未必", "不一定"],
      hint: "Twee woorden voor \"niet per se\" passen na 那可.", why: "那可未必 en 那可不一定 spreken een stellige bewering tegen." },
    { type: "open", q: "Vertaal: \"Wat in de krant staat, is niet per se waar.\"",
      model: ["报纸上写的未必是真的。", "报纸上说的未必都是真的。", "报纸上的消息不一定是真的。"],
      tip: "Check: staat 未必 na het onderwerp, en staat er 是 vóór het naamwoord (真的)?" },
    { type: "open", q: "Je collega zegt: 他是名校毕业的，能力一定很强。 Reageer met 未必.",
      model: ["那可未必，名校毕业的人能力也未必强。", "名校毕业未必说明能力强。"],
      tip: "Check: 未必 + bijvoeglijk naamwoord zonder 是, en geen \"zeker niet\" in je bedoeling." }
  ],
  review: [
    { type: "mc", q: "\"Een dure telefoon is niet per se beter.\"",
      options: ["贵的手机未必更好。", "贵的手机未必是更好。", "贵的手机必然更好。", "贵的手机未必不更好。"], answer: 0,
      why: ["Goed.", "Voor een bijvoeglijk naamwoord heb je geen 是 nodig.", "必然 = onvermijdelijk: het tegendeel.", "未必不 is een dubbele ontkenning en verandert de betekenis."] },
    { type: "mc", q: "Wat betekent: 年纪大的人，经验未必多。",
      options: ["Ouderen hebben niet per se veel ervaring.", "Ouderen hebben nooit veel ervaring.", "Ouderen hebben altijd veel ervaring.", "Ouderen hebben nog niet veel ervaring."], answer: 0,
      why: ["Goed: 未必 = niet per se.", "未必 is geen \"nooit\".", "Je mist de ontkenning in 未.", "未必 gaat niet over tijd."] },
    { type: "mc", q: "Welk woord is het formeelst voor \"niet per se\"?",
      options: ["未必", "不一定", "必定", "肯定"], answer: 0,
      why: ["Goed: 未必 is neutraal tot schrijftaal.", "不一定 betekent hetzelfde, maar is gewone spreektaal.", "必定 = zeker: het tegendeel.", "肯定 = zeker: het tegendeel."] }
  ]
})
