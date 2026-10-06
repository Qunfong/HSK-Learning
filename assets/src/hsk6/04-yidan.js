({
  id: "04", slug: "yidan", title: "一旦 ... 就", sub: "Als het eenmaal gebeurt, dan ...",
  canDo: "Je kunt nu zeggen wat er volgt als iets eenmaal gebeurt, vaak een ernstig gevolg, met 一旦 ... 就.",
  guess: {
    q: "一旦下雨，比赛就取消。Wat betekent dit, denk je?",
    options: ["Als het eenmaal gaat regenen, gaat de wedstrijd niet door.", "De wedstrijd gaat niet door, en daardoor gaat het regenen.", "Het heeft één dag geregend, dus de wedstrijd ging niet door.", "Ook als het regent, gaat de wedstrijd door."], answer: 0,
    why: ["Goed: 一旦 = als ... eenmaal, 就 = dan meteen.", "Je draait het om: de regen komt eerst, de afgelasting volgt.", "一旦 betekent hier niet \"één dag\".", "一旦 is geen \"ook als\": er volgt juist iets."]
  },
  problem: "Soms wil je zeggen: als iets eenmaal gebeurt, volgt er meteen iets anders. Vaak is het eerste nog niet zeker, en het gevolg ernstig. Daarvoor is 一旦 (yídàn) ... 就. 一旦 is formeler dan 如果 of 要是.",
  pattern: [
    { l: "wie", v: "你", c: 1 }, { l: "eenmaal", v: "一旦", c: 2, key: true }, { l: "gebeurtenis", v: "决定了", c: 3 },
    { l: "dan", v: "就", c: 4, key: true }, { l: "gevolg", v: "不能改", c: 5 }
  ],
  patternCap: "(Wie +) 一旦 + gebeurtenis，(wie +) 就 + gevolg · ook achter het onderwerp: 习惯一旦养成，就很难改变。",
  rules: [
    "一旦 staat bij de voorwaarde. 就 staat bij het gevolg, direct vóór het werkwoord.",
    "Het gevolg is vaak ernstig of moeilijk terug te draaien.",
    "Heeft het tweede deel een onderwerp? Dan komt 就 ná het onderwerp: 一旦出错，我们就 ....",
    "Vaak staat 会, 要 of 很难 na 就: 就会, 就要, 就很难.",
    "一旦 is schrijftaal of formele spreektaal. In gewone spreektaal zeg je vaak 要是 ... 就."
  ],
  pitfall: "一旦 betekent hier niet \"één dag\". En zet 就 niet vóór het onderwerp: 一旦下雪，就路很滑 is fout. Zeg: 一旦下雪，路就很滑。",
  examples: [
    { cn: "一旦下雪，路就很滑。", py: "Yídàn xià xuě, lù jiù hěn huá.", nl: "Zodra het sneeuwt, zijn de wegen glad." },
    { cn: "你一旦做了决定，就不要后悔。", py: "Nǐ yídàn zuòle juédìng, jiù búyào hòuhuǐ.", nl: "Als je eenmaal een besluit hebt genomen, heb dan geen spijt." },
    { cn: "一旦发生火灾，大家就要马上离开大楼。", py: "Yídàn fāshēng huǒzāi, dàjiā jiù yào mǎshàng líkāi dàlóu.", nl: "Als er brand uitbreekt, moet iedereen meteen het gebouw verlaten." },
    { cn: "习惯一旦养成，就很难改变。", py: "Xíguàn yídàn yǎngchéng, jiù hěn nán gǎibiàn.", nl: "Als een gewoonte er eenmaal is, is ze moeilijk te veranderen." }
  ],
  nuance: [
    { h: "一旦 tegenover 如果 / 要是",
      p: "如果 en 要是 zijn neutraal \"als\". Je gebruikt ze voor elke voorwaarde, ook gewone plannen. 一旦 benadrukt het moment waarop iets begint, en wat er daarna onvermijdelijk volgt. Voor een gewoon plan klinkt 一旦 vreemd. Bij waarschuwingen en risico's past het juist goed.",
      ex: [
        { cn: "如果明天有空，我就去看你。", py: "Rúguǒ míngtiān yǒu kòng, wǒ jiù qù kàn nǐ.", nl: "Als ik morgen tijd heb, kom ik bij je langs." },
        { cn: "一旦下大雨，山路就很危险。", py: "Yídàn xià dàyǔ, shānlù jiù hěn wēixiǎn.", nl: "Zodra het hard regent, is de bergweg gevaarlijk." }
      ] },
    { h: "一旦 tegenover 只要",
      p: "只要 ... 就 betekent \"als ... maar\": deze voorwaarde is genoeg. Het gevolg is vaak positief en makkelijk te bereiken. 一旦 ... 就 gaat over een omslagpunt, en het gevolg is vaak negatief of blijvend. Vergelijk: oefenen helpt (只要), stoppen schaadt (一旦).",
      ex: [
        { cn: "只要每天练习，就能进步。", py: "Zhǐyào měitiān liànxí, jiù néng jìnbù.", nl: "Als je maar elke dag oefent, ga je vooruit." },
        { cn: "一旦停止练习，就会退步。", py: "Yídàn tíngzhǐ liànxí, jiù huì tuìbù.", nl: "Zodra je stopt met oefenen, ga je achteruit." }
      ] },
    { h: "毁于一旦: 一旦 als \"in één klap\"",
      p: "In schrijftaal is 一旦 ook een zelfstandig naamwoord: \"in één dag, in heel korte tijd\". Je ziet het vooral in de vaste uitdrukking 毁于一旦: in één klap verloren. Dit is geen voorwaarde, er volgt dus geen 就.",
      ex: [
        { cn: "多年的努力毁于一旦。", py: "Duō nián de nǔlì huǐ yú yídàn.", nl: "Jaren van inspanning gingen in één klap verloren." }
      ] }
  ],
  mistakes: [
    { wrong: "一旦下雪，就路很滑。", right: "一旦下雪，路就很滑。", why: "就 staat ná het onderwerp (路), direct vóór het gezegde." },
    { wrong: "一旦明天有空，我就去看你。", right: "如果明天有空，我就去看你。", why: "Voor een gewoon plan gebruik je 如果 of 要是. 一旦 past bij risico's en omslagpunten." },
    { wrong: "一旦停止练习，才会退步。", right: "一旦停止练习，就会退步。", why: "Bij 一旦 hoort 就 (meteen), niet 才 (pas)." },
    { wrong: "一旦密码泄露，所以别人能看到你的信息。", right: "一旦密码泄露，别人就能看到你的信息。", why: "Bij 一旦 hoort 就 in het tweede deel, niet 所以." }
  ],
  vocab: [
    ["一旦……就", "yídàn……jiù", "zodra, als ... eenmaal"], ["火灾", "huǒzāi", "brand"], ["养成", "yǎngchéng", "aankweken (gewoonte)"],
    ["泄露", "xièlòu", "uitlekken"], ["后果", "hòuguǒ", "(slecht) gevolg"], ["信任", "xìnrèn", "vertrouwen"],
    ["恢复", "huīfù", "herstellen"], ["干燥", "gānzào", "droog"], ["损失", "sǔnshī", "verlies, schade"], ["报警", "bàojǐng", "alarm slaan, de hulpdiensten bellen"]
  ],
  dialogue: [
    ["A", "你的密码太简单了，最好改一下。", "Nǐ de mìmǎ tài jiǎndān le, zuìhǎo gǎi yíxià.", "Je wachtwoord is te simpel. Je kunt het beter even veranderen."],
    ["B", "有那么严重吗？", "Yǒu nàme yánzhòng ma?", "Is het zo erg?"],
    ["A", "当然。一旦密码泄露，别人就能看到你所有的信息。", "Dāngrán. Yídàn mìmǎ xièlòu, biérén jiù néng kàndào nǐ suǒyǒu de xìnxī.", "Natuurlijk. Als je wachtwoord eenmaal uitlekt, kunnen anderen al je gegevens zien."],
    ["B", "后果这么严重啊。", "Hòuguǒ zhème yánzhòng a.", "Dus de gevolgen zijn zo ernstig."],
    ["A", "对。而且信任一旦失去，就很难恢复了。", "Duì. Érqiě xìnrèn yídàn shīqù, jiù hěn nán huīfù le.", "Ja. En vertrouwen dat je eenmaal kwijt bent, herstel je moeilijk."],
    ["B", "好，我现在就改。", "Hǎo, wǒ xiànzài jiù gǎi.", "Goed, ik verander het nu meteen."]
  ],
  reading: {
    title: "森林防火",
    lines: [
      { cn: "每年秋天，这一地区的天气都特别干燥。", py: "Měi nián qiūtiān, zhè yí dìqū de tiānqì dōu tèbié gānzào.", nl: "Elk najaar is het weer in deze regio bijzonder droog." },
      { cn: "森林一旦着火，火势就会迅速扩大。", py: "Sēnlín yídàn zháohuǒ, huǒshì jiù huì xùnsù kuòdà.", nl: "Zodra het bos in brand vliegt, breidt het vuur zich snel uit." },
      { cn: "因此，政府规定游客不许在山上吸烟或烧烤。", py: "Yīncǐ, zhèngfǔ guīdìng yóukè bùxǔ zài shān shang xīyān huò shāokǎo.", nl: "Daarom mogen toeristen van de overheid op de berg niet roken of barbecueën." },
      { cn: "有人觉得这些规定太严格了。", py: "Yǒu rén juéde zhèxiē guīdìng tài yángé le.", nl: "Sommigen vinden deze regels te streng." },
      { cn: "可是专家指出，一旦发生火灾，损失往往无法挽回。", py: "Kěshì zhuānjiā zhǐchū, yídàn fāshēng huǒzāi, sǔnshī wǎngwǎng wúfǎ wǎnhuí.", nl: "Maar deskundigen wijzen erop dat de schade na een brand vaak niet meer te herstellen is." },
      { cn: "几十年才长成的树林，可能毁于一旦。", py: "Jǐ shí nián cái zhǎngchéng de shùlín, kěnéng huǐ yú yídàn.", nl: "Een bos dat tientallen jaren nodig had om te groeien, kan in één klap verloren gaan." },
      { cn: "另外，人们一旦发现烟雾，就应该立即报警。", py: "Lìngwài, rénmen yídàn fāxiàn yānwù, jiù yīnggāi lìjí bàojǐng.", nl: "Bovendien moet je meteen de hulpdiensten bellen zodra je rook ziet." },
      { cn: "保护森林，需要每个人的努力。", py: "Bǎohù sēnlín, xūyào měi ge rén de nǔlì.", nl: "Het bos beschermen vraagt de inzet van iedereen." }
    ],
    questions: [
      { type: "mc", q: "Wat mogen toeristen in het najaar niet doen op de berg?",
        options: ["Roken of barbecueën.", "Wandelen of fotograferen.", "De hulpdiensten bellen.", "Overnachten in het bos."], answer: 0,
        why: ["Goed: 不许在山上吸烟或烧烤。", "Daarover staat niets in de tekst.", "Dat moet je juist doen als je rook ziet: 立即报警.", "Daarover staat niets in de tekst."] },
      { type: "mc", q: "Wat moet je doen als je rook ziet?",
        options: ["Meteen de hulpdiensten bellen.", "Zelf het vuur blussen.", "Snel naar huis gaan.", "Wachten tot het vuur groter wordt."], answer: 0,
        why: ["Goed: 一旦发现烟雾，就应该立即报警。", "Daarover staat niets in de tekst.", "Daarover staat niets in de tekst.", "Het vuur breidt zich juist snel uit; wachten is gevaarlijk."] },
      { type: "mc", q: "森林一旦着火，火势就会迅速扩大。Wat zegt 一旦 ... 就 hier?",
        options: ["Als er eenmaal brand is, volgt er meteen een ernstig gevolg.", "Het bos staat elke dag in brand.", "Het vuur breidt zich pas na lange tijd uit.", "Ook als het bos brandt, blijft het vuur klein."], answer: 0,
        why: ["Goed: 一旦 = als ... eenmaal, 就会 = dan zal meteen.", "一旦 betekent hier niet \"één dag\" of \"elke dag\".", "就 betekent juist \"meteen\", niet \"pas\".", "一旦 is geen \"ook als\"."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Als je er eenmaal aan gewend bent, vind je het niet meer moeilijk.\"",
      options: ["你一旦习惯了，就不觉得难了。", "你一旦习惯了，但不觉得难了。", "你一旦习惯了，就你不觉得难了。", "你就习惯了，一旦不觉得难了。"], answer: 0,
      why: ["Goed: 一旦 bij de voorwaarde, 就 bij het gevolg.", "一旦 vraagt om 就, niet om 但: er is geen tegenstelling.", "就 staat ná het onderwerp, niet ervóór.", "Je hebt 一旦 en 就 omgewisseld."] },
    { type: "mc", q: "这种药一旦吃多了，___会有危险。",
      options: ["就", "才", "都", "再"], answer: 0,
      why: ["Goed: 一旦 ... 就.", "才 betekent \"pas\". Het past niet bij 一旦.", "都 betekent \"allemaal\" of \"al\". Bij 一旦 hoort 就.", "再 betekent \"opnieuw\" of \"daarna pas\"."] },
    { type: "order", q: "Zet in de goede volgorde: \"Als je eenmaal begint, kun je niet meer stoppen.\"",
      tokens: [["你", "nǐ"], ["一旦", "yídàn"], ["开始", "kāishǐ"], ["就", "jiù"], ["停不下来", "tíng bu xiàlai"]],
      alt: ["一旦你开始就停不下来"] },
    { type: "mc", q: "Wat betekent: 机会一旦错过，就不会再来。",
      options: ["Als je een kans eenmaal mist, komt hij niet terug.", "Als je een kans één dag mist, komt hij nog terug.", "Ook als je een kans mist, komt hij weer terug.", "Als je een kans eenmaal pakt, komt er geen nieuwe."], answer: 0,
      why: ["Goed: 一旦错过 = als je hem eenmaal mist.", "一旦 betekent hier niet \"één dag\".", "一旦 is geen \"ook als\", en 不会再来 zegt: hij komt niet terug.", "错过 betekent \"missen\", niet \"pakken\"."] },
    { type: "mc", q: "Een gewoon plan: \"Als ik morgen tijd heb, kom ik bij je langs.\" Welke zin klopt?",
      options: ["如果明天有空，我就去看你。", "一旦明天有空，我就去看你。", "如果明天有空，就我去看你。", "虽然明天有空，我就去看你。"], answer: 0,
      why: ["Goed: voor een gewoon plan gebruik je het neutrale 如果.", "一旦 past bij risico's en omslagpunten, niet bij een gewoon plan.", "就 staat ná het onderwerp 我, niet ervóór.", "虽然 betekent \"hoewel\" en past niet bij 就."] },
    { type: "mc", q: "Welke zin waarschuwt voor een ernstig gevolg dat moeilijk terug te draaien is?",
      options: ["一旦失去信任，就很难恢复。", "只要你同意，我们就开始。", "如果明天下雨，我们就在家看电影。", "因为下雨，所以我们在家。"], answer: 0,
      why: ["Goed: 一旦 ... 就很难 = als het eenmaal gebeurt, is het moeilijk te herstellen.", "只要 geeft een makkelijke voorwaarde met een positief gevolg.", "如果 geeft een neutraal plan, geen waarschuwing.", "因为 ... 所以 geeft een oorzaak, geen waarschuwing."] },
    { type: "mc", q: "多年的努力毁于一旦。Wat betekent 一旦 hier?",
      options: ["In één klap, in heel korte tijd.", "Zodra het gebeurt, dan ...", "Elke dag een beetje.", "Misschien ooit in de toekomst."], answer: 0,
      why: ["Goed: in 毁于一旦 is 一旦 een naamwoord: in één klap.", "Hier is 一旦 geen voorwaarde: er volgt geen 就.", "毁于一旦 gaat juist over iets wat in één keer gebeurt.", "Het gaat niet over \"ooit\": het verlies is al gebeurd."] },
    { type: "fill", q: "一旦签了合同，___不能反悔了。(Als je het contract eenmaal getekend hebt, kun je niet meer terug.)", answers: ["就"],
      hint: "Welk woord hoort bij 一旦 in het tweede deel?", why: "一旦 ... 就: 就 staat vóór het gezegde (不能反悔)." },
    { type: "order", q: "Zet in de goede volgorde: \"Als er eenmaal brand uitbreekt, moet je meteen 119 bellen.\"",
      tokens: [["一旦", "yídàn"], ["发生火灾", "fāshēng huǒzāi"], ["就要", "jiù yào"], ["马上打119", "mǎshàng dǎ yāo yāo jiǔ"]] },
    { type: "open", q: "Waarschuw iemand: als hij eenmaal liegt, gelooft niemand hem meer.",
      model: ["你一旦说谎，就没有人相信你了。", "一旦说了谎，别人就不会再信任你。"],
      tip: "Check: 一旦 bij de voorwaarde, en 就 ná het onderwerp, vóór het werkwoord." },
    { type: "open", q: "Vertaal: \"Als je eenmaal iets beloofd hebt, moet je het ook doen.\"",
      model: ["你一旦答应了别人，就要做到。", "一旦答应了，就一定要做到。"],
      tip: "Check: 一旦 + 答应了, dan 就要 + werkwoord. Geen 所以 in het tweede deel." }
  ],
  review: [
    { type: "mc", q: "\"Als de batterij van de telefoon eenmaal leeg is, gaat hij vanzelf uit.\"",
      options: ["手机一旦没电，就会自动关机。", "手机就没电，一旦会自动关机。", "手机一天没电，就会自动关机。", "手机一旦没电，但会自动关机。"], answer: 0,
      why: ["Goed.", "Je hebt 一旦 en 就 omgewisseld.", "一旦 is niet hetzelfde als 一天 (één dag).", "Er is geen tegenstelling; bij 一旦 hoort 就."] },
    { type: "mc", q: "这个秘密一旦被别人知道，后果___很严重。(Als dit geheim eenmaal uitlekt, worden de gevolgen ernstig.)",
      options: ["就会", "才会", "不会", "曾经"], answer: 0,
      why: ["Goed: 一旦 ... 就会.", "才 betekent \"pas\". Het past niet bij 一旦.", "不会 zegt dat de gevolgen niet ernstig worden. Dat is het tegendeel.", "曾经 gaat over het verleden, niet over een mogelijk gevolg."] },
    { type: "mc", q: "\"Als je eenmaal achterloopt, is het moeilijk om bij te komen.\"",
      options: ["一旦落后，就很难追上。", "一旦落后，才很难追上。", "一天落后，就很难追上。", "就落后，一旦很难追上。"], answer: 0,
      why: ["Goed: 一旦 + voorwaarde, 就 + gevolg.", "才 betekent \"pas\". Bij 一旦 hoort 就.", "一天 betekent \"één dag\", niet \"eenmaal\".", "Je hebt 一旦 en 就 omgewisseld."] }
  ]
})
