({
  id: "02", slug: "feibuke", title: "非 ... 不可", sub: "Het moet echt, er is geen andere weg",
  canDo: "Je kunt nu sterk zeggen dat iets echt moet, dat iemand iets per se wil, of dat iets zeker gaat gebeuren, met 非 ... 不可.",
  guess: {
    q: "这件事非他来不可。Wat betekent dit, denk je?",
    options: ["Dit moet echt door hem gedaan worden.", "Dit hoeft niet door hem gedaan te worden.", "Dit mag niet door hem gedaan worden.", "Dit kan door hem, maar het hoeft niet."], answer: 0,
    why: ["Goed: 非 ... 不可 = het kan niet anders, het moet.", "Twee keer \"niet\" (非 en 不) maakt samen een sterke \"moet\".", "不可 alleen is \"mag niet\", maar met 非 ervoor betekent het \"moet\".", "Het patroon is juist heel sterk: er is geen vrije keuze."]
  },
  problem: "Soms is 应该 of 得 te zwak. Je wilt zeggen: dit moet, er is geen andere weg. Of: iemand wil iets per se. Daarvoor is 非 (fēi) ... 不可 (bùkě). Letterlijk staat er: \"niet ... gaat niet\". Twee keer \"niet\" maakt samen een sterke \"moet\".",
  pattern: [
    { l: "wie", v: "我", c: 1 }, { l: "非", v: "非", c: 2, key: true },
    { l: "wat moet", v: "去", c: 4 }, { l: "不可", v: "不可", c: 5, key: true }
  ],
  patternCap: "Wie + 非 + werkwoord(groep) + 不可 · spreektaal ook: 非 ... 不行 / 非得 + werkwoord · per se willen: 非要 ... 不可",
  rules: [
    "非 en 不可 vormen samen één \"moet\". Wat moet gebeuren, staat ertussen.",
    "Het kan \"moet echt\" betekenen: 这个手术非做不可。",
    "Met 要 erbij betekent het vaak \"wil per se\": 他非要去不可。",
    "Na een voorwaarde betekent het \"gaat zeker gebeuren\": 再不走，非迟到不可。",
    "不可 klinkt wat formeler. In spreektaal hoor je ook 非 ... 不行, of alleen 非得 (fēiděi) + werkwoord."
  ],
  pitfall: "Laat 非 niet weg: 我去不可 is fout. En 不可 zonder 非 betekent juist \"mag niet\": 你不可以去 = je mag niet gaan.",
  examples: [
    { cn: "这个问题很严重，非解决不可。", py: "Zhège wèntí hěn yánzhòng, fēi jiějué bùkě.", nl: "Dit probleem is ernstig. Het moet echt opgelost worden." },
    { cn: "明天的会很重要，我非去不可。", py: "Míngtiān de huì hěn zhòngyào, wǒ fēi qù bùkě.", nl: "De vergadering van morgen is belangrijk. Ik moet er echt heen." },
    { cn: "孩子非要买那个玩具不可。", py: "Háizi fēi yào mǎi nàge wánjù bùkě.", nl: "Het kind wil per se dat speelgoed kopen." },
    { cn: "要学好汉语，非下功夫不可。", py: "Yào xuéhǎo Hànyǔ, fēi xià gōngfu bùkě.", nl: "Wie goed Chinees wil leren, moet er echt moeite in steken." }
  ],
  nuance: [
    { h: "非 ... 不可 tegenover 必须",
      p: "必须 is een neutrale plicht: regels, instructies, officiële teksten. 非 ... 不可 zegt meer: er is geen andere weg, en de spreker voelt het sterk. Op een bord of in een reglement gebruik je 必须. In een gesprek waarin je iemand overtuigt, klinkt 非 ... 不可 krachtiger.",
      ex: [
        { cn: "所有乘客必须系好安全带。", py: "Suǒyǒu chéngkè bìxū jìhǎo ānquándài.", nl: "Alle passagiers moeten hun gordel vastmaken." },
        { cn: "你的牙这么疼，非去医院不可。", py: "Nǐ de yá zhème téng, fēi qù yīyuàn bùkě.", nl: "Je tand doet zo'n pijn, je moet echt naar het ziekenhuis." }
      ] },
    { h: "非得: de spreektaalvorm",
      p: "In de spreektaal zeg je vaak 非得 + werkwoord. 不可 of 不行 mag je dan weglaten. 非得 kan \"moet echt\" betekenen, maar ook \"wil per se\". In een vraag klinkt het vaak geïrriteerd: moet dat nou per se?",
      ex: [
        { cn: "你非得现在走吗？", py: "Nǐ fēiděi xiànzài zǒu ma?", nl: "Moet je nou per se nu weg?" }
      ] },
    { h: "Gevolg en \"alleen X\": twee andere gebruiken",
      p: "Na een voorwaarde voorspelt 非 ... 不可 een gevolg dat zeker komt, vaak iets negatiefs. En met een persoon of ding tussen 非 en 不可 zeg je: alleen dit werkt. 这件事非你不可 = alleen jij kunt dit.",
      ex: [
        { cn: "你穿这么少，非感冒不可。", py: "Nǐ chuān zhème shǎo, fēi gǎnmào bùkě.", nl: "Met zo weinig kleren aan word je zeker verkouden." },
        { cn: "这个角色非他不可。", py: "Zhège juésè fēi tā bùkě.", nl: "Alleen hij kan deze rol spelen." }
      ] }
  ],
  mistakes: [
    { wrong: "我去不可。", right: "我非去不可。", why: "Zonder 非 klopt de zin niet. 非 en 不可 horen samen." },
    { wrong: "我非不可去。", right: "我非去不可。", why: "Wat moet gebeuren staat tussen 非 en 不可, niet erachter." },
    { wrong: "这件事你非必须做不可。", right: "这件事你非做不可。", why: "必须 en 非 ... 不可 zeggen allebei \"moet\". Kies er één." }
  ],
  vocab: [
    ["非……不可", "fēi……bùkě", "moet echt, kan niet anders"], ["严重", "yánzhòng", "ernstig"], ["手术", "shǒushù", "operatie"],
    ["下功夫", "xià gōngfu", "moeite insteken"], ["陪", "péi", "vergezellen, meegaan met"], ["道歉", "dàoqiàn", "excuses aanbieden"],
    ["亲自", "qīnzì", "zelf, persoonlijk"], ["牙医", "yáyī", "tandarts"], ["拔", "bá", "trekken (een tand)"], ["拖", "tuō", "uitstellen, rekken"]
  ],
  dialogue: [
    ["A", "你脸色这么差，快去医院看看吧。", "Nǐ liǎnsè zhème chà, kuài qù yīyuàn kànkan ba.", "Je ziet er zo slecht uit. Ga snel naar het ziekenhuis."],
    ["B", "没事，休息一下就好了。", "Méi shì, xiūxi yíxià jiù hǎo le.", "Niets aan de hand. Even rusten en het is over."],
    ["A", "你已经疼了三天了，这次非去不可。", "Nǐ yǐjīng téngle sān tiān le, zhè cì fēi qù bùkě.", "Je hebt al drie dagen pijn. Deze keer moet je echt gaan."],
    ["B", "好吧好吧。可是我妈非要陪我去不可。", "Hǎo ba hǎo ba. Kěshì wǒ mā fēi yào péi wǒ qù bùkě.", "Goed dan. Maar mijn moeder wil per se met me mee."],
    ["A", "那很好，有人陪你，我就放心了。", "Nà hěn hǎo, yǒu rén péi nǐ, wǒ jiù fàngxīn le.", "Dat is goed. Als er iemand bij je is, ben ik gerust."]
  ],
  reading: {
    title: "拔牙",
    lines: [
      { cn: "小陈的牙已经疼了一个星期了。", py: "Xiǎo Chén de yá yǐjīng téngle yí ge xīngqī le.", nl: "Xiao Chen had al een week kiespijn." },
      { cn: "他怕疼，一直不愿意去看牙医。", py: "Tā pà téng, yìzhí bú yuànyì qù kàn yáyī.", nl: "Hij was bang voor pijn en wilde steeds niet naar de tandarts." },
      { cn: "他的妻子说：\"这次你非去不可，不然会越来越严重。\"", py: "Tā de qīzi shuō: \"Zhè cì nǐ fēi qù bùkě, bùrán huì yuè lái yuè yánzhòng.\"", nl: "Zijn vrouw zei: \"Deze keer moet je echt gaan, anders wordt het steeds erger.\"" },
      { cn: "小陈只好去了医院。", py: "Xiǎo Chén zhǐhǎo qùle yīyuàn.", nl: "Xiao Chen had geen keus en ging naar het ziekenhuis." },
      { cn: "医生检查以后说，这颗牙非拔不可。", py: "Yīshēng jiǎnchá yǐhòu shuō, zhè kē yá fēi bá bùkě.", nl: "Na het onderzoek zei de arts dat deze tand echt getrokken moest worden." },
      { cn: "小陈问能不能下个月再拔。", py: "Xiǎo Chén wèn néng bu néng xià ge yuè zài bá.", nl: "Xiao Chen vroeg of het trekken tot volgende maand kon wachten." },
      { cn: "医生摇摇头说：\"再拖下去，你非住院不可。\"", py: "Yīshēng yáoyao tóu shuō: \"Zài tuō xiàqu, nǐ fēi zhùyuàn bùkě.\"", nl: "De arts schudde zijn hoofd: \"Als je het nog langer uitstelt, beland je zeker in het ziekenhuis.\"" },
      { cn: "拔完牙以后，小陈终于不疼了。", py: "Bá wán yá yǐhòu, Xiǎo Chén zhōngyú bù téng le.", nl: "Na het trekken had Xiao Chen eindelijk geen pijn meer." },
      { cn: "他笑着说：\"早知道这样，我早就该来了。\"", py: "Tā xiàozhe shuō: \"Zǎo zhīdào zhèyàng, wǒ zǎo jiù gāi lái le.\"", nl: "Hij zei lachend: \"Had ik dit geweten, dan was ik veel eerder gekomen.\"" }
    ],
    questions: [
      { type: "mc", q: "Waarom ging Xiao Chen eerst niet naar de tandarts?",
        options: ["Hij was bang voor pijn.", "Hij had geen tijd.", "Zijn vrouw vond het niet nodig.", "De tandarts was een maand weg."], answer: 0,
        why: ["Goed: 他怕疼，一直不愿意去看牙医。", "Over tijd staat niets in de tekst.", "Zijn vrouw vond juist: 这次你非去不可。", "Xiao Chen wilde zelf wachten tot volgende maand, niet de tandarts."] },
      { type: "mc", q: "Wat zei de arts na het onderzoek?",
        options: ["De tand moest echt getrokken worden.", "De tand kon tot volgende maand wachten.", "De tand hoefde niet getrokken te worden.", "Xiao Chen moest meteen in het ziekenhuis blijven."], answer: 0,
        why: ["Goed: 这颗牙非拔不可。", "Dat vroeg Xiao Chen, maar de arts schudde zijn hoofd.", "非 ... 不可 betekent juist \"moet echt\".", "Opname was een gevolg als hij zou wachten, geen besluit."] },
      { type: "mc", q: "再拖下去，你非住院不可。Wat betekent 非 ... 不可 hier?",
        options: ["Het voorspelt een gevolg: dan beland je zeker in het ziekenhuis.", "Het is een regel: patiënten moeten worden opgenomen.", "Het is een wens: Xiao Chen wil per se worden opgenomen.", "Het is een verbod: Xiao Chen mag niet worden opgenomen."], answer: 0,
        why: ["Goed: na een voorwaarde (再拖下去) zegt 非 ... 不可 wat zeker gaat gebeuren.", "Een neutrale regel zou je eerder met 必须 zeggen.", "\"Per se willen\" vraagt meestal om 非要, en Xiao Chen wil dit niet.", "Twee keer \"niet\" maakt samen een \"wel\", geen verbod."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik moet je echt mijn excuses aanbieden.\"",
      options: ["我非向你道歉不可。", "我非向你道歉可。", "我向你道歉不可。", "我不可向你道歉。"], answer: 0,
      why: ["Goed: 非 + wat moet + 不可.", "Je hebt 不 weggelaten. Het patroon heeft twee keer \"niet\" nodig.", "Je hebt 非 weggelaten. Zonder 非 is de zin fout.", "不可 alleen betekent \"mag niet\": ik mag geen excuses aanbieden."] },
    { type: "mc", q: "Wat betekent: 他非要自己开车不可。",
      options: ["Hij wil per se zelf rijden.", "Hij wil per se niet zelf rijden.", "Hij mag niet zelf rijden.", "Hij hoeft niet zelf te rijden."], answer: 0,
      why: ["Goed: 非要 ... 不可 = per se willen.", "Twee keer \"niet\" maakt samen een \"wel\", geen \"niet\".", "Dat zou 他不可以自己开车 zijn. Met 非 ervoor wordt het \"moet\".", "非 ... 不可 is juist heel sterk, geen \"hoeft niet\"."] },
    { type: "order", q: "Zet in de goede volgorde: \"Jij moet er echt zelf heen.\"",
      tokens: [["你", "nǐ"], ["非", "fēi"], ["亲自", "qīnzì"], ["去", "qù"], ["不可", "bùkě"]] },
    { type: "mc", q: "这个病很严重，非做手术___。",
      options: ["不可", "不要", "可以", "不用"], answer: 0,
      why: ["Goed: 非 ... 不可 = moet echt.", "不要 is \"doe niet\". Het past niet bij 非.", "可以 is \"mag\". Bij 非 hoort 不可 of 不行.", "不用 is \"hoeft niet\": het tegenovergestelde."] },
    { type: "mc", q: "Op een officieel bord in een museum staat: \"Bezoekers moeten hun tas afgeven.\" Welke zin past het best?",
      options: ["参观者必须存包。", "参观者非存包。", "参观者存包不可。", "参观者不必存包。"], answer: 0,
      why: ["Goed: een neutrale regel op een bord vraagt om 必须.", "Je hebt 不可 weggelaten. 非 alleen is hier geen goede zin.", "Je hebt 非 weggelaten. Zonder 非 klopt de zin niet.", "不必 betekent \"hoeft niet\"."] },
    { type: "mc", q: "Wat betekent: 你穿这么少，非感冒不可。",
      options: ["Met zo weinig kleren aan word je zeker verkouden.", "Met zo weinig kleren aan word je misschien verkouden.", "Met zo weinig kleren aan mag je niet verkouden worden.", "Met zo weinig kleren aan wil je per se verkouden worden."], answer: 0,
      why: ["Goed: na een oorzaak voorspelt 非 ... 不可 een zeker gevolg.", "非 ... 不可 is niet voorzichtig: het is zeker, niet misschien.", "Twee keer \"niet\" maakt een \"wel\", geen verbod.", "\"Per se willen\" vraagt om 非要, en hier gaat het om een gevolg."] },
    { type: "mc", q: "Wat betekent: 这件事非你不可。",
      options: ["Alleen jij kunt dit doen.", "Jij mag dit niet doen.", "Dit is niet jouw zaak.", "Jij hoeft dit niet te doen."], answer: 0,
      why: ["Goed: 非 + persoon + 不可 = alleen deze persoon werkt.", "Twee keer \"niet\" maakt samen een \"wel\", geen verbod.", "非 betekent hier niet \"niet van jou\": het hoort bij 不可.", "非 ... 不可 is sterk, geen \"hoeft niet\"."] },
    { type: "fill", q: "你___现在走吗？再坐一会儿吧。(Moet je nou per se nu weg? Blijf nog even.)", answers: ["非得", "非要"],
      hint: "Welke spreektaalvorm met 非 kan zonder 不可?", why: "非得 (of 非要) + werkwoord is spreektaal. 不可 of 不行 mag je dan weglaten." },
    { type: "order", q: "Zet in de goede volgorde: \"Dit probleem moet echt vandaag opgelost worden.\"",
      tokens: [["这个问题", "zhège wèntí"], ["非", "fēi"], ["今天解决", "jīntiān jiějué"], ["不可", "bùkě"]] },
    { type: "open", q: "Zeg dat je morgen echt vroeg moet opstaan.",
      model: ["明天我非早起不可。", "明天我非得早起。", "明天我非六点起床不可。"],
      tip: "Check: staat het werkwoord tussen 非 en 不可? Of gebruik je 非得 zonder 不可?" },
    { type: "open", q: "Vertaal: \"Als je zo doorgaat, word je zeker ziek.\"",
      model: ["你再这样下去，非生病不可。", "再这样下去，你非病倒不可。"],
      tip: "Check: eerst de voorwaarde (再这样下去), dan 非 + gevolg + 不可." }
  ],
  review: [
    { type: "mc", q: "\"Deze film moet je echt zien.\"",
      options: ["这部电影你非看不可。", "这部电影你非看可。", "这部电影你看不可。", "这部电影你不可看。"], answer: 0,
      why: ["Goed.", "Je hebt 不 weggelaten. Het patroon is 非 ... 不可.", "Je hebt 非 weggelaten.", "不可 alleen betekent \"mag niet\": je mag hem niet zien."] },
    { type: "mc", q: "Wat betekent: 她非要今天走不可。",
      options: ["Ze wil per se vandaag vertrekken.", "Ze wil per se niet vandaag vertrekken.", "Ze mag vandaag niet vertrekken.", "Ze hoeft vandaag niet te vertrekken."], answer: 0,
      why: ["Goed: 非要 ... 不可 = per se willen.", "Twee keer \"niet\" maakt samen een \"wel\".", "Dat zou 她今天不可以走 zijn.", "非 ... 不可 is sterk, geen \"hoeft niet\"."] },
    { type: "mc", q: "\"Als je niet opschiet, mis je zeker de trein.\"",
      options: ["你再不快点儿，非错过火车不可。", "你再不快点儿，错过火车不可。", "你再不快点儿，非错过火车可。", "你再不快点儿，不可错过火车。"], answer: 0,
      why: ["Goed: voorwaarde + 非 + gevolg + 不可.", "Je hebt 非 weggelaten.", "Je hebt 不 weggelaten. Het patroon is 非 ... 不可.", "不可 alleen betekent \"mag niet\": je mag de trein niet missen."] }
  ]
})
