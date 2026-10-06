// HSK 6 lessons. Vocabulary is level-appropriate practice, not a certified official HSK 3.0 list.
// Question types: mc (answer = index), order (tokens in the right order), open (self-check with model answers).
// "review" questions never appear in the lesson itself; they come back on the review page.
window.HSK = window.HSK || {};
window.HSK.hsk6 = {
  level: "HSK 6", dir: "hsk6",
  lessons: [
    {
      id: "01", slug: "yuqi", title: "与其 ... 不如", sub: "In plaats van A, kun je beter B",
      canDo: "Je kunt nu twee keuzes afwegen en de betere aanraden, met 与其 ... 不如.",
      guess: {
        q: "与其在家等，不如出去找找。Wat betekent dit, denk je?",
        options: ["In plaats van thuis te wachten, kun je beter gaan zoeken.", "In plaats van te gaan zoeken, kun je beter thuis wachten.", "Thuis wachten is net zo goed als gaan zoeken.", "Als je thuis gewacht hebt, ga je daarna zoeken."], answer: 0,
        why: ["Goed: na 与其 staat de slechtere keuze, na 不如 de betere.", "Je draait de keuzes om: 与其 hoort bij wat je afwijst.", "不如 betekent \"is niet zo goed als\": de keuzes zijn niet gelijk.", "Het gaat niet om een volgorde in de tijd, maar om een keuze."]
      },
      problem: "Je moet kiezen tussen twee dingen. Het ene vind je minder goed, het andere beter. Met 与其 (yǔqí) A，不如 (bùrú) B zeg je: laat A, kies liever B. Het klinkt vrij formeel. Je hoort het in schrijftaal en in serieuze gesprekken.",
      pattern: [
        { l: "afwijzen", v: "与其", c: 2, key: true }, { l: "keuze A", v: "抱怨", c: 3 },
        { l: "beter", v: "不如", c: 4, key: true }, { l: "keuze B", v: "想办法", c: 5 }
      ],
      patternCap: "与其 + A (minder goede keuze)，(还/倒) 不如 + B (betere keuze) · 与其说 A，不如说 B = niet zozeer A, eerder B",
      rules: [
        "Na 与其 staat de keuze die je afwijst. Na 不如 staat de keuze die je aanraadt.",
        "Je kunt 还 of 倒 vóór 不如 zetten: 还不如. Dat maakt het advies sterker.",
        "与其说 A，不如说 B betekent: het is niet zozeer A, het is eerder B.",
        "Het is schrijftaal of formele spreektaal. In gewone spreektaal zeg je vaak alleen 还不如 + B."
      ],
      pitfall: "Draai A en B niet om. 与其 staat bij de slechtere keuze, niet bij de betere. En gebruik na 与其 geen 但是 of 所以: het tweede deel begint altijd met 不如.",
      examples: [
        { cn: "与其在家抱怨，不如出去找工作。", py: "Yǔqí zài jiā bàoyuàn, bùrú chūqu zhǎo gōngzuò.", nl: "In plaats van thuis te klagen, kun je beter werk gaan zoeken." },
        { cn: "与其坐出租车，还不如坐地铁，又快又便宜。", py: "Yǔqí zuò chūzūchē, hái bùrú zuò dìtiě, yòu kuài yòu piányi.", nl: "In plaats van een taxi te nemen, neem je beter de metro. Die is sneller en goedkoper." },
        { cn: "与其说他聪明，不如说他努力。", py: "Yǔqí shuō tā cōngming, bùrú shuō tā nǔlì.", nl: "Hij is niet zozeer slim, hij werkt eerder hard." }
      ],
      vocab: [
        ["与其", "yǔqí", "(in plaats van)"], ["不如", "bùrú", "(kan beter, liever)"], ["抱怨", "bàoyuàn", "klagen"],
        ["辞职", "cízhí", "ontslag nemen"], ["犹豫", "yóuyù", "aarzelen, twijfelen"], ["浪费", "làngfèi", "verspillen"],
        ["干脆", "gāncuì", "gewoon, meteen maar"], ["方向", "fāngxiàng", "richting"], ["后悔", "hòuhuǐ", "spijt hebben"],
        ["运气", "yùnqi", "geluk"]
      ],
      dialogue: [
        ["A", "这份工作我做得一点儿也不开心，可是又不敢辞职。", "Zhè fèn gōngzuò wǒ zuò de yìdiǎnr yě bù kāixīn, kěshì yòu bù gǎn cízhí.", "Ik ben helemaal niet blij met dit werk, maar ik durf ook geen ontslag te nemen."],
        ["B", "与其每天抱怨，不如好好想想自己想要什么。", "Yǔqí měitiān bàoyuàn, bùrú hǎohǎo xiǎngxiang zìjǐ xiǎng yào shénme.", "In plaats van elke dag te klagen, kun je beter goed nadenken over wat je zelf wilt."],
        ["A", "我已经犹豫了半年了。", "Wǒ yǐjīng yóuyùle bàn nián le.", "Ik twijfel al een half jaar."],
        ["B", "与其这样浪费时间，还不如干脆试试新的方向。", "Yǔqí zhèyàng làngfèi shíjiān, hái bùrú gāncuì shìshi xīn de fāngxiàng.", "In plaats van zo je tijd te verspillen, kun je beter gewoon een nieuwe richting proberen."],
        ["A", "你说得对。我不想以后后悔。", "Nǐ shuō de duì. Wǒ bù xiǎng yǐhòu hòuhuǐ.", "Je hebt gelijk. Ik wil later geen spijt hebben."]
      ],
      questions: [
        { type: "mc", q: "\"In plaats van op anderen te wachten, kun je het beter zelf doen.\"",
          options: ["与其等别人，不如自己做。", "与其自己做，不如等别人。", "与其等别人，但是自己做。", "不如等别人，与其自己做。"], answer: 0,
          why: ["Goed: 与其 + afgewezen keuze, 不如 + betere keuze.", "De keuzes zijn omgedraaid: nu raad je aan te wachten.", "Na 与其 komt 不如, niet 但是.", "与其 staat in het eerste deel, 不如 in het tweede."] },
        { type: "mc", q: "与其在网上看评论，___自己去试一试。",
          options: ["不如", "而且", "所以", "或者"], answer: 0,
          why: ["Goed: 与其 vraagt om 不如 in het tweede deel.", "而且 voegt iets toe; het maakt geen keuze.", "所以 geeft een gevolg; 与其 vraagt om een betere keuze.", "或者 geeft twee gelijke opties; 与其 zegt welke beter is."] },
        { type: "order", q: "Zet in de goede volgorde: \"In plaats van een taxi te nemen, neem je beter de metro.\"",
          tokens: [["与其", "yǔqí"], ["坐出租车", "zuò chūzūchē"], ["还", "hái"], ["不如", "bùrú"], ["坐地铁", "zuò dìtiě"]] },
        { type: "mc", q: "Wat betekent: 与其说这是运气，不如说这是他努力的结果。",
          options: ["Dit is niet zozeer geluk, het is eerder het resultaat van zijn inzet.", "Dit is niet zozeer zijn inzet, het is eerder geluk.", "Dit is zowel geluk als het resultaat van zijn inzet.", "Als hij geluk heeft, ziet hij het resultaat van zijn inzet."], answer: 0,
          why: ["Goed: 与其说 A，不如说 B = niet zozeer A, eerder B.", "Je draait het om: na 不如说 staat de betere beschrijving.", "与其 ... 不如 kiest één van de twee, het zegt niet \"allebei\".", "与其 is geen \"als\": het maakt geen voorwaarde."] },
        { type: "open", q: "Een vriend klaagt steeds dat Chinees moeilijk is. Geef advies met 与其 ... 不如.", model: ["与其抱怨汉语难，不如每天多练习。", "与其天天抱怨，还不如找个老师。", "与其说汉语难，不如说你练习得太少。"],
          tip: "Check: staat na 与其 wat hij nu doet (de slechtere keuze), en na 不如 jouw advies?" }
      ],
      review: [
        { type: "mc", q: "\"In plaats van te aarzelen, kun je beter meteen beslissen.\"",
          options: ["与其犹豫，不如马上决定。", "与其马上决定，不如犹豫。", "与其犹豫，所以马上决定。", "不如犹豫，与其马上决定。"], answer: 0,
          why: ["Goed.", "De keuzes zijn omgedraaid: nu raad je aarzelen aan.", "Na 与其 komt 不如, niet 所以.", "与其 komt eerst, 不如 daarna."] },
        { type: "mc", q: "与其花钱买新的，___把旧的修一修。(In plaats van geld uit te geven aan iets nieuws, kun je beter het oude repareren.)",
          options: ["不如", "而且", "因此", "虽然"], answer: 0,
          why: ["Goed: 与其 ... 不如.", "而且 voegt iets toe; het maakt geen keuze.", "因此 geeft een gevolg, geen betere keuze.", "虽然 staat in het eerste deel van een tegenstelling."] }
      ]
    },
    {
      id: "02", slug: "feibuke", title: "非 ... 不可", sub: "Het moet echt, er is geen andere weg",
      canDo: "Je kunt nu sterk zeggen dat iets echt moet, of dat iemand iets per se wil, met 非 ... 不可.",
      guess: {
        q: "这件事非他来不可。Wat betekent dit, denk je?",
        options: ["Dit moet echt door hem gedaan worden.", "Dit hoeft niet door hem gedaan te worden.", "Dit mag niet door hem gedaan worden.", "Dit kan door hem, maar het hoeft niet."], answer: 0,
        why: ["Goed: 非 ... 不可 = het kan niet anders, het moet.", "Twee keer \"niet\" (非 en 不) maakt samen een sterke \"moet\".", "不可 alleen is \"mag niet\", maar met 非 ervoor betekent het \"moet\".", "Het patroon is juist heel sterk: er is geen vrije keuze."]
      },
      problem: "Soms is 应该 of 得 te zwak. Je wilt zeggen: dit moet, er is geen andere weg. Of: iemand wil iets per se. Daarvoor is 非 (fēi) ... 不可 (bùkě). Letterlijk staat er: \"niet ... gaat niet\". Twee keer \"niet\" maakt samen een sterke \"moet\".",
      pattern: [
        { l: "wie", v: "我", c: 1 }, { l: "非", v: "非", c: 2, key: true }, { l: "wat moet", v: "去", c: 4 },
        { l: "不可", v: "不可", c: 5, key: true }
      ],
      patternCap: "Wie + 非 + werkwoord(groep) + 不可 · spreektaal ook: 非 ... 不行 / 非得 + werkwoord · per se willen: 非要 ... 不可",
      rules: [
        "非 en 不可 vormen samen één \"moet\". Wat moet gebeuren, staat ertussen.",
        "Het kan \"moet echt\" betekenen: 这个手术非做不可。",
        "Met 要 erbij betekent het vaak \"wil per se\": 他非要去不可。",
        "不可 klinkt wat formeler. In spreektaal hoor je ook 非 ... 不行, of alleen 非得 + werkwoord."
      ],
      pitfall: "Laat 非 niet weg: 我去不可 is fout. En 不可 zonder 非 betekent juist \"mag niet\": 你不可以去 = je mag niet gaan.",
      examples: [
        { cn: "这个问题很严重，非解决不可。", py: "Zhège wèntí hěn yánzhòng, fēi jiějué bùkě.", nl: "Dit probleem is ernstig. Het moet echt opgelost worden." },
        { cn: "明天的会很重要，我非去不可。", py: "Míngtiān de huì hěn zhòngyào, wǒ fēi qù bùkě.", nl: "De vergadering van morgen is belangrijk. Ik moet er echt heen." },
        { cn: "孩子非要买那个玩具不可。", py: "Háizi fēi yào mǎi nàge wánjù bùkě.", nl: "Het kind wil per se dat speelgoed kopen." },
        { cn: "要学好汉语，非下功夫不可。", py: "Yào xuéhǎo Hànyǔ, fēi xià gōngfu bùkě.", nl: "Wie goed Chinees wil leren, moet er echt moeite in steken." }
      ],
      vocab: [
        ["非", "fēi", "(met 不可: moet echt)"], ["不可", "bùkě", "(niet kunnen, niet mogen)"], ["严重", "yánzhòng", "ernstig"],
        ["手术", "shǒushù", "operatie"], ["下功夫", "xià gōngfu", "moeite insteken"], ["脸色", "liǎnsè", "gelaatskleur"],
        ["陪", "péi", "vergezellen"], ["道歉", "dàoqiàn", "excuses aanbieden"], ["亲自", "qīnzì", "zelf, persoonlijk"],
        ["玩具", "wánjù", "speelgoed"]
      ],
      dialogue: [
        ["A", "你脸色这么差，快去医院看看吧。", "Nǐ liǎnsè zhème chà, kuài qù yīyuàn kànkan ba.", "Je ziet er zo slecht uit. Ga snel naar het ziekenhuis."],
        ["B", "没事，休息一下就好了。", "Méi shì, xiūxi yíxià jiù hǎo le.", "Niets aan de hand. Even rusten en het is over."],
        ["A", "你已经疼了三天了，这次非去不可。", "Nǐ yǐjīng téngle sān tiān le, zhè cì fēi qù bùkě.", "Je hebt al drie dagen pijn. Deze keer moet je echt gaan."],
        ["B", "好吧好吧。可是我妈非要陪我去不可。", "Hǎo ba hǎo ba. Kěshì wǒ mā fēi yào péi wǒ qù bùkě.", "Goed dan. Maar mijn moeder wil per se met me mee."],
        ["A", "那很好，有人陪你，我就放心了。", "Nà hěn hǎo, yǒu rén péi nǐ, wǒ jiù fàngxīn le.", "Dat is goed. Als er iemand bij je is, ben ik gerust."]
      ],
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
        { type: "open", q: "Zeg dat je morgen echt vroeg moet opstaan.", model: ["明天我非早起不可。", "明天我非得早起。", "明天我非六点起床不可。"],
          tip: "Check: staat het werkwoord tussen 非 en 不可? Of gebruik je 非得 zonder 不可?" }
      ],
      review: [
        { type: "mc", q: "\"Deze film moet je echt zien.\"",
          options: ["这部电影你非看不可。", "这部电影你非看可。", "这部电影你看不可。", "这部电影你不可看。"], answer: 0,
          why: ["Goed.", "Je hebt 不 weggelaten. Het patroon is 非 ... 不可.", "Je hebt 非 weggelaten.", "不可 alleen betekent \"mag niet\": je mag hem niet zien."] },
        { type: "mc", q: "Wat betekent: 她非要今天走不可。",
          options: ["Ze wil per se vandaag vertrekken.", "Ze wil per se niet vandaag vertrekken.", "Ze mag vandaag niet vertrekken.", "Ze hoeft vandaag niet te vertrekken."], answer: 0,
          why: ["Goed: 非要 ... 不可 = per se willen.", "Twee keer \"niet\" maakt samen een \"wel\".", "Dat zou 她今天不可以走 zijn.", "非 ... 不可 is sterk, geen \"hoeft niet\"."] }
      ]
    },
    {
      id: "03", slug: "zhisuoyi", title: "之所以 ... 是因为", sub: "Eerst het gevolg, dan de reden",
      canDo: "Je kunt nu een bekend feit uitleggen door eerst het gevolg en dan de reden te noemen, met 之所以 ... 是因为.",
      guess: {
        q: "他之所以迟到，是因为路上堵车。Wat zegt de zin, denk je?",
        options: ["Hij was te laat. De reden: er was file.", "Hij was te laat, en daardoor kwam er file.", "Er was file, maar hij was niet te laat.", "Hij was te laat, ook al was er geen file."], answer: 0,
        why: ["Goed: na 之所以 staat het gevolg, na 是因为 de reden.", "Je draait oorzaak en gevolg om: de file is de reden.", "之所以 is geen \"maar\": er is geen tegenstelling.", "是因为 betekent \"is omdat\", niet \"ook al\"."]
      },
      problem: "Normaal zeg je eerst de reden: 因为 ...，所以 .... Maar soms is het gevolg al bekend. Je wilt vooral de reden uitleggen. Dan zet je het gevolg voorop met 之所以 (zhīsuǒyǐ). De reden komt daarna met 是因为. Dit is vrij formeel.",
      pattern: [
        { l: "wie", v: "他", c: 1 }, { l: "gevolg", v: "之所以", c: 2, key: true }, { l: "wat", v: "成功", c: 3 },
        { l: "reden", v: "是因为", c: 4, key: true }, { l: "waarom", v: "他很努力", c: 5 }
      ],
      patternCap: "Wie + 之所以 + gevolg，是因为 + reden · Vergelijk: 因为 + reden，所以 + gevolg",
      rules: [
        "Het gevolg staat voorop, na 之所以. De reden komt na 是因为.",
        "之所以 staat meestal direct na het onderwerp: 我之所以 ....",
        "Na 之所以 komt nooit nog een 所以. Het tweede deel begint met 是因为 (of formeler: 是由于).",
        "Het is schrijftaal of formele spreektaal: toespraken, uitleg, artikelen."
      ],
      pitfall: "Draai het niet om. 之所以 staat bij het gevolg, niet bij de reden. 我之所以累，是因为加班 is goed. 我之所以加班，是因为累 zegt iets heel anders.",
      examples: [
        { cn: "我之所以学汉语，是因为我对中国文化很感兴趣。", py: "Wǒ zhīsuǒyǐ xué Hànyǔ, shì yīnwèi wǒ duì Zhōngguó wénhuà hěn gǎn xìngqù.", nl: "De reden dat ik Chinees leer, is dat ik de Chinese cultuur interessant vind." },
        { cn: "这家公司之所以成功，是因为它重视员工。", py: "Zhè jiā gōngsī zhīsuǒyǐ chénggōng, shì yīnwèi tā zhòngshì yuángōng.", nl: "Dit bedrijf is succesvol omdat het zijn personeel belangrijk vindt." },
        { cn: "他之所以没来，是因为身体不舒服。", py: "Tā zhīsuǒyǐ méi lái, shì yīnwèi shēntǐ bù shūfu.", nl: "Hij is niet gekomen omdat hij zich niet goed voelde." }
      ],
      vocab: [
        ["之所以", "zhīsuǒyǐ", "(de reden dat)"], ["由于", "yóuyú", "(doordat, vanwege)"], ["重视", "zhòngshì", "belangrijk vinden"],
        ["员工", "yuángōng", "werknemer, personeel"], ["吸引", "xīyǐn", "aantrekken"], ["独特", "dútè", "uniek, bijzonder"],
        ["排队", "páiduì", "in de rij staan"], ["游客", "yóukè", "toerist"], ["取消", "qǔxiāo", "afgelasten"],
        ["选择", "xuǎnzé", "kiezen"]
      ],
      dialogue: [
        ["A", "这家小饭馆每天都排长队，为什么？", "Zhè jiā xiǎo fànguǎn měitiān dōu pái cháng duì, wèi shénme?", "Bij dit kleine restaurant staat elke dag een lange rij. Hoe komt dat?"],
        ["B", "它之所以吸引这么多人，是因为老板做的菜很独特。", "Tā zhīsuǒyǐ xīyǐn zhème duō rén, shì yīnwèi lǎobǎn zuò de cài hěn dútè.", "Het trekt zoveel mensen omdat de eigenaar heel bijzondere gerechten maakt."],
        ["A", "价格呢？", "Jiàgé ne?", "En de prijs?"],
        ["B", "也不贵。很多人之所以每周都来，是因为这里又好吃又便宜。", "Yě bú guì. Hěn duō rén zhīsuǒyǐ měi zhōu dōu lái, shì yīnwèi zhèli yòu hǎochī yòu piányi.", "Ook niet duur. Veel mensen komen elke week, omdat het hier lekker en goedkoop is."],
        ["A", "那我们今天也去试试吧。", "Nà wǒmen jīntiān yě qù shìshi ba.", "Laten we het dan vandaag ook proberen."]
      ],
      questions: [
        { type: "mc", q: "\"Ze heeft gewonnen omdat ze elke dag trainde.\"",
          options: ["她之所以赢了，是因为她每天都练习。", "她之所以每天都练习，是因为她赢了。", "她之所以赢了，所以她每天都练习。", "她之所以赢了，但是她每天都练习。"], answer: 0,
          why: ["Goed: gevolg na 之所以, reden na 是因为.", "Je draait het om: nu is winnen de reden van het trainen.", "Na 之所以 komt geen 所以, maar 是因为.", "之所以 maakt geen tegenstelling; 但是 past niet."] },
        { type: "mc", q: "我之所以选择这份工作，___这里离家很近。",
          options: ["是因为", "所以", "但是", "而且"], answer: 0,
          why: ["Goed: 之所以 ... 是因为.", "Na 之所以 komt geen 所以.", "Er is geen tegenstelling; 但是 past niet.", "而且 voegt iets toe, maar geeft geen reden."] },
        { type: "order", q: "Zet in de goede volgorde: \"Hij is niet gekomen omdat hij ziek was.\"",
          tokens: [["他", "tā"], ["之所以", "zhīsuǒyǐ"], ["没来", "méi lái"], ["是因为", "shì yīnwèi"], ["病了", "bìng le"]] },
        { type: "mc", q: "Welke zin betekent hetzelfde als: 因为天气不好，所以比赛取消了。",
          options: ["比赛之所以取消，是因为天气不好。", "天气之所以不好，是因为比赛取消了。", "比赛之所以取消，所以天气不好。", "比赛取消之所以，是因为天气不好。"], answer: 0,
          why: ["Goed: het gevolg (取消) staat voorop, de reden (天气不好) achter 是因为.", "Je draait oorzaak en gevolg om.", "Na 之所以 komt 是因为, niet 所以.", "之所以 staat vóór het gevolg, niet erachter."] },
        { type: "open", q: "Leg uit waarom je Chinees leert, met 之所以 ... 是因为.", model: ["我之所以学汉语，是因为我想去中国工作。", "我之所以学汉语，是因为我喜欢中国电影。", "我之所以学中文，是由于工作需要。"],
          tip: "Check: staat het gevolg (学汉语) na 之所以, en de reden na 是因为? Geen 所以 erbij." }
      ],
      review: [
        { type: "mc", q: "\"Deze stad trekt veel toeristen omdat ze een lange geschiedenis heeft.\"",
          options: ["这座城市之所以吸引很多游客，是因为它的历史很长。", "这座城市之所以历史很长，是因为它吸引很多游客。", "这座城市之所以吸引很多游客，所以它的历史很长。", "这座城市之所以吸引很多游客，但是它的历史很长。"], answer: 0,
          why: ["Goed.", "Je draait het om: nu zijn de toeristen de reden van de geschiedenis.", "Na 之所以 komt 是因为, niet 所以.", "Er is geen tegenstelling; 但是 past niet."] },
        { type: "mc", q: "他之所以搬家，___新公司在城市的另一边。",
          options: ["是因为", "所以", "虽然", "而且"], answer: 0,
          why: ["Goed: 之所以 ... 是因为.", "Na 之所以 komt geen 所以.", "虽然 maakt een tegenstelling, geen reden.", "而且 voegt iets toe, maar geeft geen reden."] }
      ]
    },
    {
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
        "一旦 is schrijftaal of formele spreektaal. In gewone spreektaal zeg je vaak 要是 ... 就."
      ],
      pitfall: "一旦 betekent hier niet \"één dag\". En zet 就 niet vóór het onderwerp: 一旦下雪，就路很滑 is fout. Zeg: 一旦下雪，路就很滑。",
      examples: [
        { cn: "一旦下雪，路就很滑。", py: "Yídàn xià xuě, lù jiù hěn huá.", nl: "Zodra het sneeuwt, zijn de wegen glad." },
        { cn: "你一旦做了决定，就不要后悔。", py: "Nǐ yídàn zuòle juédìng, jiù búyào hòuhuǐ.", nl: "Als je eenmaal een besluit hebt genomen, heb dan geen spijt." },
        { cn: "一旦发生火灾，大家就要马上离开大楼。", py: "Yídàn fāshēng huǒzāi, dàjiā jiù yào mǎshàng líkāi dàlóu.", nl: "Als er brand uitbreekt, moet iedereen meteen het gebouw verlaten." },
        { cn: "习惯一旦养成，就很难改变。", py: "Xíguàn yídàn yǎngchéng, jiù hěn nán gǎibiàn.", nl: "Als een gewoonte er eenmaal is, is ze moeilijk te veranderen." }
      ],
      vocab: [
        ["一旦", "yídàn", "(zodra, als ... eenmaal)"], ["火灾", "huǒzāi", "brand"], ["养成", "yǎngchéng", "aankweken (gewoonte)"],
        ["密码", "mìmǎ", "wachtwoord"], ["泄露", "xièlòu", "uitlekken"], ["后果", "hòuguǒ", "(slecht) gevolg"],
        ["信任", "xìnrèn", "vertrouwen"], ["恢复", "huīfù", "herstellen"], ["错过", "cuòguò", "missen (kans)"],
        ["秘密", "mìmì", "geheim"]
      ],
      dialogue: [
        ["A", "你的密码太简单了，最好改一下。", "Nǐ de mìmǎ tài jiǎndān le, zuìhǎo gǎi yíxià.", "Je wachtwoord is te simpel. Je kunt het beter even veranderen."],
        ["B", "有那么严重吗？", "Yǒu nàme yánzhòng ma?", "Is het zo erg?"],
        ["A", "当然。一旦密码泄露，别人就能看到你所有的信息。", "Dāngrán. Yídàn mìmǎ xièlòu, biérén jiù néng kàndào nǐ suǒyǒu de xìnxī.", "Natuurlijk. Als je wachtwoord eenmaal uitlekt, kunnen anderen al je gegevens zien."],
        ["B", "后果这么严重啊。", "Hòuguǒ zhème yánzhòng a.", "Dus de gevolgen zijn zo ernstig."],
        ["A", "对。而且信任一旦失去，就很难恢复了。", "Duì. Érqiě xìnrèn yídàn shīqù, jiù hěn nán huīfù le.", "Ja. En vertrouwen dat je eenmaal kwijt bent, herstel je moeilijk."],
        ["B", "好，我现在就改。", "Hǎo, wǒ xiànzài jiù gǎi.", "Goed, ik verander het nu meteen."]
      ],
      questions: [
        { type: "mc", q: "\"Als je er eenmaal aan gewend bent, vind je het niet meer moeilijk.\"",
          options: ["你一旦习惯了，就不觉得难了。", "你一旦习惯了，但不觉得难了。", "你一旦习惯了，就你不觉得难了。", "你就习惯了，一旦不觉得难了。"], answer: 0,
          why: ["Goed: 一旦 bij de voorwaarde, 就 bij het gevolg.", "一旦 vraagt om 就, niet om 但: er is geen tegenstelling.", "就 staat ná het onderwerp, niet ervóór.", "Je hebt 一旦 en 就 omgewisseld."] },
        { type: "mc", q: "这种药一旦吃多了，___会有危险。",
          options: ["就", "才", "都", "再"], answer: 0,
          why: ["Goed: 一旦 ... 就.", "才 betekent \"pas\". Het past niet bij 一旦.", "都 betekent \"allemaal\" of \"al\". Bij 一旦 hoort 就.", "再 betekent \"opnieuw\" of \"daarna pas\"."] },
        { type: "order", q: "Zet in de goede volgorde: \"Als je eenmaal begint, kun je niet meer stoppen.\"",
          tokens: [["你", "nǐ"], ["一旦", "yídàn"], ["开始", "kāishǐ"], ["就", "jiù"], ["停不下来", "tíng bu xiàlai"]] },
        { type: "mc", q: "Wat betekent: 机会一旦错过，就不会再来。",
          options: ["Als je een kans eenmaal mist, komt hij niet terug.", "Als je een kans één dag mist, komt hij nog terug.", "Ook als je een kans mist, komt hij weer terug.", "Als je een kans eenmaal pakt, komt er geen nieuwe."], answer: 0,
          why: ["Goed: 一旦错过 = als je hem eenmaal mist.", "一旦 betekent hier niet \"één dag\".", "一旦 is geen \"ook als\", en 不会再来 zegt: hij komt niet terug.", "错过 betekent \"missen\", niet \"pakken\"."] },
        { type: "open", q: "Waarschuw iemand: als hij eenmaal liegt, gelooft niemand hem meer.", model: ["你一旦说谎，就没有人相信你了。", "一旦说了谎，别人就不会再信任你。"],
          tip: "Check: 一旦 bij de voorwaarde, en 就 ná het onderwerp, vóór het werkwoord." }
      ],
      review: [
        { type: "mc", q: "\"Als de batterij van de telefoon eenmaal leeg is, gaat hij vanzelf uit.\"",
          options: ["手机一旦没电，就会自动关机。", "手机就没电，一旦会自动关机。", "手机一天没电，就会自动关机。", "手机一旦没电，但会自动关机。"], answer: 0,
          why: ["Goed.", "Je hebt 一旦 en 就 omgewisseld.", "一旦 is niet hetzelfde als 一天 (één dag).", "Er is geen tegenstelling; bij 一旦 hoort 就."] },
        { type: "mc", q: "这个秘密一旦被别人知道，后果___很严重。(Als dit geheim eenmaal uitlekt, worden de gevolgen ernstig.)",
          options: ["就会", "才会", "不会", "曾经"], answer: 0,
          why: ["Goed: 一旦 ... 就会.", "才 betekent \"pas\". Het past niet bij 一旦.", "不会 zegt dat de gevolgen niet ernstig worden. Dat is het tegendeel.", "曾经 gaat over het verleden, niet over een mogelijk gevolg."] }
      ]
    },
    {
      id: "05", slug: "guran", title: "固然 ... 但", sub: "Dat klopt weliswaar, maar ...",
      canDo: "Je kunt nu een punt toegeven en daarna een sterker punt maken, met 固然 ... 但.",
      guess: {
        q: "钱固然重要，但健康更重要。Wat bedoelt de spreker, denk je?",
        options: ["Geld is weliswaar belangrijk, maar gezondheid is belangrijker.", "Geld is niet belangrijk, alleen gezondheid is belangrijk.", "Geld is belangrijker dan gezondheid.", "Omdat geld belangrijk is, is gezondheid belangrijker."], answer: 0,
        why: ["Goed: 固然 geeft het eerste punt toe, na 但 komt het sterkere punt.", "固然 ontkent niets: het zegt juist dat geld wél belangrijk is.", "Het zwaardere punt staat na 但: gezondheid.", "固然 geeft geen reden; het is een toegeving."]
      },
      problem: "Je wilt iets toegeven, maar daarna een sterker punt maken. In het Nederlands zeg je: \"Dat is weliswaar waar, maar ...\". Daarvoor is 固然 (gùrán) ... 但(是). Eerst erken je het eerste punt. Na 但 komt wat jij zwaarder vindt. Het is vooral schrijftaal.",
      pattern: [
        { l: "wat", v: "钱", c: 1 }, { l: "weliswaar", v: "固然", c: 2, key: true }, { l: "toegeven", v: "重要", c: 3 },
        { l: "maar", v: "但", c: 4, key: true }, { l: "sterker punt", v: "健康更重要", c: 5 }
      ],
      patternCap: "A + 固然 + toegegeven punt，但(是) / 可是 + sterker punt · 固然 ... 也 = allebei goed",
      rules: [
        "固然 staat na het onderwerp, vóór het werkwoord of bijvoeglijk naamwoord: 钱固然重要.",
        "Na 但(是) of 可是 komt het punt dat zwaarder weegt.",
        "Met 也 erna zijn beide kanten goed: 你来固然好，不来也没关系。",
        "固然 is schrijftaal of formele spreektaal. In spreektaal zeg je vaak 虽然 ... 但是, of 好是好，可是 ...."
      ],
      pitfall: "固然 is geen \"omdat\": gebruik er geen 所以 achter. En zet 固然 na het onderwerp, niet erachter: 钱重要固然 is fout.",
      examples: [
        { cn: "这个方法固然简单，但效果不太好。", py: "Zhège fāngfǎ gùrán jiǎndān, dàn xiàoguǒ bú tài hǎo.", nl: "Deze methode is weliswaar eenvoudig, maar het effect is niet zo goed." },
        { cn: "工作固然重要，但是家人也不能忽视。", py: "Gōngzuò gùrán zhòngyào, dànshì jiārén yě bù néng hūshì.", nl: "Werk is weliswaar belangrijk, maar je mag je familie niet verwaarlozen." },
        { cn: "你的想法固然有道理，可是现在很难实现。", py: "Nǐ de xiǎngfǎ gùrán yǒu dàolǐ, kěshì xiànzài hěn nán shíxiàn.", nl: "Je idee is weliswaar redelijk, maar het is nu moeilijk uit te voeren." },
        { cn: "坐飞机固然快，坐火车也不错。", py: "Zuò fēijī gùrán kuài, zuò huǒchē yě búcuò.", nl: "Vliegen is natuurlijk snel, maar de trein is ook prima." }
      ],
      vocab: [
        ["固然", "gùrán", "(weliswaar)"], ["效果", "xiàoguǒ", "effect, resultaat"], ["忽视", "hūshì", "verwaarlozen, negeren"],
        ["实现", "shíxiàn", "verwezenlijken"], ["有道理", "yǒu dàolǐ", "redelijk, terecht"], ["收入", "shōurù", "inkomen"],
        ["承认", "chéngrèn", "toegeven"], ["稳定", "wěndìng", "stabiel"], ["缺点", "quēdiǎn", "nadeel, zwakte"],
        ["天赋", "tiānfù", "talent"]
      ],
      dialogue: [
        ["A", "那家公司给我的工资比现在高很多。", "Nà jiā gōngsī gěi wǒ de gōngzī bǐ xiànzài gāo hěn duō.", "Dat bedrijf biedt me veel meer salaris dan nu."],
        ["B", "工资高固然好，但你考虑过别的方面吗？", "Gōngzī gāo gùrán hǎo, dàn nǐ kǎolǜguo bié de fāngmiàn ma?", "Een hoog salaris is natuurlijk fijn, maar heb je over andere dingen nagedacht?"],
        ["A", "你是说工作时间？", "Nǐ shì shuō gōngzuò shíjiān?", "Bedoel je de werktijden?"],
        ["B", "对。收入固然重要，可是每天加班到晚上十点，对身体不好。", "Duì. Shōurù gùrán zhòngyào, kěshì měitiān jiābān dào wǎnshang shí diǎn, duì shēntǐ bù hǎo.", "Ja. Inkomen is weliswaar belangrijk, maar elke dag tot tien uur overwerken is slecht voor je lichaam."],
        ["A", "我承认，现在的工作比较稳定。", "Wǒ chéngrèn, xiànzài de gōngzuò bǐjiào wěndìng.", "Ik geef toe, mijn huidige baan is vrij stabiel."]
      ],
      questions: [
        { type: "mc", q: "\"Deze telefoon is weliswaar duur, maar de kwaliteit is erg goed.\"",
          options: ["这个手机固然贵，但质量很好。", "这个手机固然贵，所以质量很好。", "这个手机固然不贵，但质量很好。", "这个手机贵固然，但质量很好。"], answer: 0,
          why: ["Goed: 固然 + toegegeven punt, 但 + sterker punt.", "固然 geeft geen reden; na 固然 komt 但, niet 所以.", "固然 ontkent niets. De telefoon ís duur.", "固然 staat vóór het bijvoeglijk naamwoord, niet erachter."] },
        { type: "mc", q: "这个计划固然有很多优点，___也有一些缺点。",
          options: ["但", "所以", "因为", "而且"], answer: 0,
          why: ["Goed: 固然 ... 但.", "所以 geeft een gevolg. Hier volgt een tegenstelling.", "因为 geeft een reden, geen tegenstelling.", "而且 voegt iets in dezelfde richting toe. Hier draait het om."] },
        { type: "order", q: "Zet in de goede volgorde: \"Autorijden is weliswaar handig, maar het is duur.\"",
          tokens: [["开车", "kāichē"], ["固然", "gùrán"], ["方便", "fāngbiàn"], ["但是", "dànshì"], ["很贵", "hěn guì"]] },
        { type: "mc", q: "Wat betekent: 你来固然好，不来也没关系。",
          options: ["Het is fijn als je komt, maar als je niet komt, is het ook goed.", "Het is fijn als je komt; als je niet komt, is het een probleem.", "Het is beter als je niet komt.", "Pas als je komt, is het goed."], answer: 0,
          why: ["Goed: 固然 ... 也 = allebei goed.", "没关系 zegt juist dat het geen probleem is.", "固然好 zegt dat komen wél fijn is.", "固然 is geen \"pas als\"; met 也 zijn beide kanten goed."] },
        { type: "open", q: "Geef toe dat iets goed is, en noem dan een groter nadeel. Gebruik 固然 ... 但.", model: ["这个房子固然漂亮，但离公司太远了。", "网上购物固然方便，但有时候质量不好。"],
          tip: "Check: staat 固然 na het onderwerp, en komt het zwaardere punt na 但?" }
      ],
      review: [
        { type: "mc", q: "\"Talent is weliswaar belangrijk, maar inzet is belangrijker.\"",
          options: ["天赋固然重要，但努力更重要。", "天赋固然重要，所以努力更重要。", "天赋固然不重要，但努力更重要。", "天赋重要固然，但努力更重要。"], answer: 0,
          why: ["Goed.", "固然 geeft geen reden; na 固然 komt 但.", "固然 ontkent niets: talent ís belangrijk.", "固然 staat vóór 重要, niet erachter."] },
        { type: "mc", q: "这家餐厅的菜固然好吃，___价格实在太高了。",
          options: ["但是", "所以", "因此", "并且"], answer: 0,
          why: ["Goed: 固然 ... 但是.", "所以 geeft een gevolg, geen tegenstelling.", "因此 geeft ook een gevolg, geen tegenstelling.", "并且 voegt iets toe in dezelfde richting."] }
      ]
    },
    {
      id: "06", slug: "buzhiyu", title: "不至于", sub: "Zo erg zal het niet worden",
      canDo: "Je kunt nu iemand geruststellen dat iets niet zo erg wordt, met 不至于, en vragen of iets nou nodig is met 至于吗.",
      guess: {
        q: "他只是有点儿累，不至于生病吧。Wat bedoelt de spreker, denk je?",
        options: ["Hij is wat moe, maar zo erg dat hij ziek wordt, zal het niet zijn.", "Hij is wat moe, dus hij wordt zeker ziek.", "Hij is niet moe en ook niet ziek.", "Hij is wat moe, omdat hij ziek is."], answer: 0,
        why: ["Goed: 不至于 = het gaat niet zo ver dat ....", "Je leest het 不 niet mee: de spreker zegt juist dat het niet zo ver komt.", "有点儿累 zegt dat hij wél moe is.", "不至于 geeft geen reden; het zegt hoe ver iets gaat."]
      },
      problem: "Iemand maakt zich zorgen en denkt meteen aan het ergste. Jij denkt: zo ver komt het niet. Daarvoor is 不至于 (bú zhìyú). Je zegt dat iets niet zo erg wordt. Het werkt in spreektaal en in schrijftaal.",
      pattern: [
        { l: "wie", v: "他", c: 1 }, { l: "niet zo erg", v: "不至于", c: 2, key: true }, { l: "waarom", v: "为这点小事", c: 3 },
        { l: "erg gevolg", v: "生气", c: 4 }, { l: "", v: "吧", c: 5 }
      ],
      patternCap: "(Kleine oorzaak,) wie + 不至于 + te erg gevolg (+ 吧) · spreektaal: 至于 + gevolg + 吗？= Is dat nou nodig?",
      rules: [
        "Na 不至于 staat een gevolg dat te erg of overdreven is.",
        "Vaak komt er 吧 achter: je bent er bijna zeker van.",
        "Vaak staat er iets kleins voor: 只是, 一点小事, ... 而已. Dat maakt het contrast duidelijk.",
        "In spreektaal hoor je 至于吗？ of 至于 + gevolg + 吗？ Dat betekent: is dat nou nodig?"
      ],
      pitfall: "不至于 is anders dan 不会. 不会 zegt alleen \"gebeurt niet\". 不至于 zegt: \"het wordt niet zó erg\". Gebruik het dus voor een erg gevolg, niet voor iets goeds.",
      examples: [
        { cn: "这点小事，他不至于生气吧。", py: "Zhè diǎn xiǎo shì, tā bú zhìyú shēngqì ba.", nl: "Om zo'n kleinigheid wordt hij toch niet boos." },
        { cn: "只是感冒而已，不至于住院。", py: "Zhǐ shì gǎnmào éryǐ, bú zhìyú zhùyuàn.", nl: "Het is maar een verkoudheid. Opgenomen worden is niet nodig." },
        { cn: "他虽然没复习，但也不至于不及格。", py: "Tā suīrán méi fùxí, dàn yě bú zhìyú bù jígé.", nl: "Hij heeft niet geleerd, maar hij zal heus niet zakken." },
        { cn: "你们只是吵了一架，至于分手吗？", py: "Nǐmen zhǐ shì chǎole yí jià, zhìyú fēnshǒu ma?", nl: "Jullie hebben alleen ruzie gehad. Is uit elkaar gaan nou nodig?" }
      ],
      vocab: [
        ["不至于", "bú zhìyú", "(zo erg wordt het niet)"], ["而已", "éryǐ", "(meer niet, slechts)"], ["住院", "zhùyuàn", "opgenomen worden"],
        ["及格", "jígé", "slagen (toets)"], ["吵架", "chǎojià", "ruzie maken"], ["开除", "kāichú", "ontslaan"],
        ["焦虑", "jiāolǜ", "gespannen, angstig"], ["夸张", "kuāzhāng", "overdrijven"], ["分手", "fēnshǒu", "uit elkaar gaan"],
        ["航班", "hángbān", "vlucht"]
      ],
      dialogue: [
        ["A", "我今天在会上说错了一句话，老板会不会开除我？", "Wǒ jīntiān zài huì shang shuōcuòle yí jù huà, lǎobǎn huì bu huì kāichú wǒ?", "Ik zei vandaag in de vergadering iets verkeerds. Zou de baas me ontslaan?"],
        ["B", "只是一句话而已，不至于吧。", "Zhǐ shì yí jù huà éryǐ, bú zhìyú ba.", "Het was maar één zin. Zo erg zal het niet zijn."],
        ["A", "可是我现在很焦虑，怕今天晚上睡不着。", "Kěshì wǒ xiànzài hěn jiāolǜ, pà jīntiān wǎnshang shuì bu zháo.", "Maar ik ben nu heel gespannen. Ik ben bang dat ik vannacht niet kan slapen."],
        ["B", "你太夸张了。谁都会说错话，老板不至于因为这个开除你。", "Nǐ tài kuāzhāng le. Shéi dōu huì shuōcuò huà, lǎobǎn bú zhìyú yīnwèi zhège kāichú nǐ.", "Je overdrijft. Iedereen zegt weleens iets verkeerds. De baas ontslaat je echt niet om zoiets."],
        ["A", "希望你说得对。", "Xīwàng nǐ shuō de duì.", "Ik hoop dat je gelijk hebt."]
      ],
      questions: [
        { type: "mc", q: "\"Het is maar een klein foutje; je zakt er heus niet door.\"",
          options: ["只是一个小错误，你不至于不及格。", "只是一个小错误，你至于不及格。", "只是一个小错误，你不至于及格。", "只是一个小错误，你一定不及格。"], answer: 0,
          why: ["Goed: 不至于 + het erge gevolg (不及格).", "Zonder 不 is het geen geruststelling. 至于 alleen hoort in een vraag met 吗.", "Na 不至于 staat het erge gevolg. 及格 (slagen) is niet erg.", "一定 zegt dat je zeker zakt: het tegendeel."] },
        { type: "mc", q: "他身体一直很好，淋了一点儿雨，___生病吧。(Hij is altijd gezond. Een beetje regen maakt hem heus niet ziek.)",
          options: ["不至于", "之所以", "一旦", "固然"], answer: 0,
          why: ["Goed: 不至于 = zo erg wordt het niet.", "之所以 vraagt om 是因为 en geeft een reden.", "一旦 is \"als ... eenmaal\" en vraagt om 就.", "固然 geeft iets toe en vraagt om 但."] },
        { type: "order", q: "Zet in de goede volgorde: \"Hij wordt heus niet boos, denk ik.\"",
          tokens: [["他", "tā"], ["应该", "yīnggāi"], ["不至于", "bú zhìyú"], ["生气", "shēngqì"], ["吧", "ba"]] },
        { type: "mc", q: "Wat betekent: 迟到五分钟而已，至于这么生气吗？",
          options: ["Het is maar vijf minuten te laat. Is zo boos worden nou nodig?", "Het is vijf minuten te laat, dus boos worden is terecht.", "Hij is vijf minuten te laat, omdat hij zo boos is.", "Het is niet te laat, dus niemand is boos."], answer: 0,
          why: ["Goed: 至于 ... 吗？ = is dat nou nodig?", "至于 ... 吗 zegt juist dat de reactie overdreven is.", "De zin geeft geen reden voor het te laat komen.", "迟到五分钟 zegt dat iemand wél te laat is."] },
        { type: "open", q: "Iemand zegt: 我考试没准备好，一定会不及格！ Stel hem gerust met 不至于.", model: ["别担心，你不至于不及格吧。", "你平时学得不错，不至于考不过。"],
          tip: "Check: staat 不至于 vóór het erge gevolg, en is dat gevolg echt iets ergs?" }
      ],
      review: [
        { type: "mc", q: "\"Het regent maar een beetje; de vlucht wordt heus niet geannuleerd.\"",
          options: ["只是下一点儿小雨，航班不至于取消吧。", "只是下一点儿小雨，航班至于取消吧。", "只是下一点儿小雨，航班不至于不取消吧。", "只是下一点儿小雨，航班一定会取消吧。"], answer: 0,
          why: ["Goed.", "Zonder 不 is het geen geruststelling.", "Na 不至于 staat het erge gevolg (取消), niet het goede.", "一定会 zegt dat de vlucht zeker vervalt: het tegendeel."] },
        { type: "mc", q: "Wat betekent: 这道题有点儿难，但还不至于做不出来。",
          options: ["Deze opgave is wat lastig, maar niet zo moeilijk dat je hem niet kunt oplossen.", "Deze opgave is wat lastig, en daarom kun je hem niet oplossen.", "Deze opgave is makkelijk, en je hebt hem al opgelost.", "Deze opgave is wat lastig, maar je hoeft hem niet op te lossen."], answer: 0,
          why: ["Goed: 不至于做不出来 = zo erg dat het niet lukt, wordt het niet.", "Je leest 不至于 als een gevolg; het zegt juist dat het niet zo ver komt.", "有点儿难 zegt dat de opgave wél wat lastig is.", "不至于 gaat over hoe erg iets is, niet over moeten."] }
      ]
    }
  ]
};
