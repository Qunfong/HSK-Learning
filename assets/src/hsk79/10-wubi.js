({
  id: "10", slug: "wubi", title: "务必", sub: "Absoluut, beslist: dringende instructies",
  canDo: "Je kunt nu in mededelingen, e-mails en instructies dringend vragen dat iemand iets beslist doet, met 请务必, en je kent het verschil met 必须 en 一定.",
  guess: {
    q: "请务必于周五前提交材料。Wat betekent 务必, denk je?",
    options: ["absoluut, beslist", "misschien, als het kan", "liever niet", "pas na"], answer: 0,
    why: ["Goed: 务必 = absoluut, beslist. Het is een dringend verzoek.", "务必 is juist niet vrijblijvend: het moet echt.", "务必 is geen ontkenning; \"liever niet\" zou 最好不要 zijn.", "\"Pas na\" is een tijdwoord; 于周五前 betekent \"vóór vrijdag\"."]
  },
  problem: "In een mededeling of e-mail wil je iets dringend vragen: \"Neem absoluut uw paspoort mee.\" In het Nederlands zeg je \"absoluut\" of \"beslist\". In formele Chinese teksten zeg je 请务必 (wùbì). In gesprek zeg je 一定要 of 千万要.",
  pattern: [
    { l: "verzoek", v: "请", c: 1 }, { l: "absoluut", v: "务必", c: 2, key: true },
    { l: "wanneer", v: "于周五前", c: 3 }, { l: "handeling", v: "提交材料", c: 5 }
  ],
  patternCap: "(请 / 各位) + 务必 + (tijd / plaats) + handeling · ontkennen: 请务必不要 + werkwoord, of 切勿 + werkwoord · spreektaal: 一定要 / 千万要 / 千万别",
  rules: [
    "务必 staat vóór het werkwoord, en meestal ook vóór tijd en plaats. Vaak staat 请 ervoor.",
    "Het is een dringend verzoek aan de lezer of luisteraar, of een oproep aan de eigen groep: 我们务必……",
    "Ontkennen doe je met 务必不要 of met 切勿. 不务必 bestaat niet.",
    "务必 drukt geen vermoeden uit. Voor \"vast, zeker wel\" gebruik je 一定.",
    "务必 hoort bij mededelingen, instructies en e-mails. In gesprek zeg je 一定要 of 千万."
  ],
  pitfall: "务必 is een verzoek, geen gok. 他务必已经到了 is fout. Wil je zeggen \"hij is vast al aangekomen\", zeg dan 他一定已经到了。",
  examples: [
    { cn: "请各位考生务必携带身份证。", py: "Qǐng gèwèi kǎoshēng wùbì xiédài shēnfènzhèng.", nl: "Alle kandidaten worden verzocht beslist hun identiteitsbewijs mee te nemen." },
    { cn: "请务必于本周五前提交申请材料。", py: "Qǐng wùbì yú běn zhōuwǔ qián tíjiāo shēnqǐng cáiliào.", nl: "Lever uw aanvraagstukken absoluut vóór deze vrijdag in." },
    { cn: "登山时请务必注意安全，不要离开登山道。", py: "Dēngshān shí qǐng wùbì zhùyì ānquán, bú yào líkāi dēngshāndào.", nl: "Let bij het bergwandelen absoluut op uw veiligheid en verlaat het pad niet." },
    { cn: "此药须遵医嘱服用，请务必不要自行加量。", py: "Cǐ yào xū zūn yīzhǔ fúyòng, qǐng wùbì bú yào zìxíng jiāliàng.", nl: "Neem dit middel in volgens voorschrift van de arts. Verhoog de dosis beslist niet zelf." }
  ],
  nuance: [
    { h: "务必 of 必须?",
      p: "必须 (moeten) beschrijft een plicht of een regel. Het klinkt neutraal en kan elk onderwerp hebben: 我必须走了. 务必 is een dringend verzoek: \"zorg er absoluut voor\". Je spreekt de lezer aan, vaak met 请. Let op: het tegendeel van 必须 is 不必 (hoeft niet), niet 不务必.",
      ex: [
        { cn: "所有乘客必须系好安全带。", py: "Suǒyǒu chéngkè bìxū jìhǎo ānquándài.", nl: "Alle passagiers moeten hun gordel dragen." },
        { cn: "飞机即将起飞，请您务必系好安全带。", py: "Fēijī jíjiāng qǐfēi, qǐng nín wùbì jìhǎo ānquándài.", nl: "Het vliegtuig vertrekt zo. Doe uw gordel beslist om." }
      ] },
    { h: "务必 of 一定?",
      p: "一定 heeft twee betekenissen. Met 要 is het een sterke wens of opdracht: 你一定要来. Dat komt overeen met 务必, maar 一定要 is spreektaal. Zonder 要 is 一定 vaak een vermoeden: \"vast, zeker wel\". Die tweede betekenis heeft 务必 nooit.",
      ex: [
        { cn: "他一定是生病了。", py: "Tā yídìng shì shēngbìng le.", nl: "Hij is vast ziek." },
        { cn: "明天你一定要来啊！", py: "Míngtiān nǐ yídìng yào lái a!", nl: "Morgen moet je echt komen, hoor!" }
      ] },
    { h: "Ontkennen: 务必不要, 切勿 en 千万别",
      p: "Wil je dringend zeggen dat iemand iets niet mag doen? In een mededeling schrijf je 请务必不要. Op borden en in gebruiksaanwijzingen zie je het korte 切勿 (qièwù). In gesprek zeg je 千万别.",
      ex: [
        { cn: "切勿将贵重物品留在车内。", py: "Qièwù jiāng guìzhòng wùpǐn liú zài chē nèi.", nl: "Laat nooit waardevolle spullen in de auto achter." },
        { cn: "千万别忘了带钥匙！", py: "Qiānwàn bié wàngle dài yàoshi!", nl: "Vergeet vooral je sleutels niet!" }
      ] }
  ],
  mistakes: [
    { wrong: "他务必已经到了。", right: "他一定已经到了。", why: "务必 is een verzoek, geen vermoeden. Voor \"vast wel\" gebruik je 一定." },
    { wrong: "请不务必迟到。", right: "请务必不要迟到。", why: "De ontkenning komt na 务必: 务必不要. 不务必 bestaat niet." },
    { wrong: "请携带务必身份证。", right: "请务必携带身份证。", why: "务必 staat vóór het werkwoord, niet ertussen." },
    { wrong: "妈，明天你务必给我打电话啊！", right: "妈，明天你一定要给我打电话啊！", why: "务必 hoort bij mededelingen en instructies. Thuis zeg je 一定要." }
  ],
  vocab: [
    ["务必", "wùbì", "absoluut, beslist (in verzoeken)"], ["携带", "xiédài", "meenemen, bij zich dragen"], ["身份证", "shēnfènzhèng", "identiteitsbewijs"],
    ["证件", "zhèngjiàn", "(officieel) document, legitimatie"], ["准时", "zhǔnshí", "op tijd"], ["集合", "jíhé", "verzamelen"],
    ["切勿", "qièwù", "beslist niet (op borden)"], ["填写", "tiánxiě", "invullen"], ["提交", "tíjiāo", "indienen"], ["示意", "shìyì", "een teken geven"]
  ],
  dialogue: [
    ["导游", "各位游客，明天早上六点出发，请务必准时在酒店门口集合。", "Gèwèi yóukè, míngtiān zǎoshang liù diǎn chūfā, qǐng wùbì zhǔnshí zài jiǔdiàn ménkǒu jíhé.", "Beste reizigers, morgen vertrekken we om zes uur. Verzamel absoluut op tijd bij de ingang van het hotel."],
    ["游客", "六点？这么早！需要带护照吗？", "Liù diǎn? Zhème zǎo! Xūyào dài hùzhào ma?", "Zes uur? Zo vroeg! Moeten we ons paspoort meenemen?"],
    ["导游", "需要。进景区要检查证件，请务必随身携带护照。", "Xūyào. Jìn jǐngqū yào jiǎnchá zhèngjiàn, qǐng wùbì suíshēn xiédài hùzhào.", "Ja. Bij de ingang van het park worden documenten gecontroleerd. Draag uw paspoort beslist bij u."],
    ["游客", "好的。山上冷不冷？", "Hǎo de. Shān shang lěng bu lěng?", "Oké. Is het koud op de berg?"],
    ["导游", "山顶只有五度左右，大家一定要多穿点儿衣服。", "Shāndǐng zhǐ yǒu wǔ dù zuǒyòu, dàjiā yídìng yào duō chuān diǎnr yīfu.", "Op de top is het maar zo'n vijf graden. Trek allemaal echt wat extra kleren aan."],
    ["游客", "明白了，我们一定准时到。", "Míngbai le, wǒmen yídìng zhǔnshí dào.", "Begrepen, we zijn er zeker op tijd."]
  ],
  reading: {
    title: "考生须知",
    lines: [
      { cn: "为保证考试顺利进行，请各位考生仔细阅读以下须知。", py: "Wèi bǎozhèng kǎoshì shùnlì jìnxíng, qǐng gèwèi kǎoshēng zǐxì yuèdú yǐxià xūzhī.", nl: "Om het examen goed te laten verlopen, worden alle kandidaten verzocht de volgende regels goed te lezen." },
      { cn: "考生须于开考前三十分钟进入考场。", py: "Kǎoshēng xū yú kāikǎo qián sānshí fēnzhōng jìnrù kǎochǎng.", nl: "Kandidaten moeten dertig minuten voor de start de examenzaal binnengaan." },
      { cn: "进入考场时，请务必携带准考证和身份证。", py: "Jìnrù kǎochǎng shí, qǐng wùbì xiédài zhǔnkǎozhèng hé shēnfènzhèng.", nl: "Neem bij het binnengaan absoluut uw oproepbrief en identiteitsbewijs mee." },
      { cn: "证件不全者，不得参加考试。", py: "Zhèngjiàn bù quán zhě, bù dé cānjiā kǎoshì.", nl: "Wie niet alle documenten heeft, mag niet deelnemen." },
      { cn: "手机等电子设备必须关机，并放在指定位置。", py: "Shǒujī děng diànzǐ shèbèi bìxū guānjī, bìng fàng zài zhǐdìng wèizhi.", nl: "Telefoons en andere elektronische apparaten moeten uit en op de aangewezen plek liggen." },
      { cn: "答题前，请务必在答题卡上正确填写姓名和考号。", py: "Dátí qián, qǐng wùbì zài dátíkǎ shang zhèngquè tiánxiě xìngmíng hé kǎohào.", nl: "Vul vóór het antwoorden absoluut uw naam en kandidaatnummer correct in op het antwoordblad." },
      { cn: "考试结束铃响后，请立即停止答题，切勿继续书写。", py: "Kǎoshì jiéshù líng xiǎng hòu, qǐng lìjí tíngzhǐ dátí, qièwù jìxù shūxiě.", nl: "Stop meteen als de eindbel gaat. Schrijf beslist niet verder." },
      { cn: "考试期间如遇特殊情况，请务必举手示意，不要自行离开座位。", py: "Kǎoshì qījiān rú yù tèshū qíngkuàng, qǐng wùbì jǔshǒu shìyì, bú yào zìxíng líkāi zuòwèi.", nl: "Is er tijdens het examen iets bijzonders, steek dan beslist uw hand op en verlaat uw plaats niet op eigen houtje." }
    ],
    questions: [
      { type: "mc", q: "Wat moeten kandidaten meenemen?",
        options: ["Hun oproepbrief en identiteitsbewijs.", "Hun telefoon.", "Een eigen antwoordblad.", "Hun paspoort en een foto."], answer: 0,
        why: ["Goed: 请务必携带准考证和身份证.", "De telefoon moet juist uit en weg.", "Het antwoordblad krijg je; je vult er je naam op in.", "Paspoort en foto staan niet in de tekst."] },
      { type: "mc", q: "Wat moet je doen als de eindbel gaat?",
        options: ["Meteen stoppen en niet verder schrijven.", "Je hand opsteken.", "De zaal meteen verlaten.", "Je naam nog invullen."], answer: 0,
        why: ["Goed: 请立即停止答题，切勿继续书写.", "Je hand opsteken doe je bij iets bijzonders tijdens het examen.", "Over het verlaten van de zaal na de bel staat niets in de tekst.", "Je naam vul je vóór het antwoorden in."] },
      { type: "mc", q: "进入考场时，请务必携带准考证。Wat drukt 务必 hier uit?",
        options: ["Dat het echt verplicht is: zonder document geen examen.", "Dat het alleen een tip is.", "Dat de schrijver denkt dat je het wel meeneemt.", "Dat je het document niet mag meenemen."], answer: 0,
        why: ["Goed: 务必 = absoluut. De volgende zin zegt: 证件不全者，不得参加考试.", "务必 is geen vrijblijvende tip.", "Een vermoeden zou 一定 zijn. 务必 is een verzoek.", "务必 zonder 不要 is een gebod, geen verbod."] }
    ]
  },
  questions: [
    { type: "mc", q: "Een e-mail: \"Lever uw stukken absoluut vóór vrijdag in.\"",
      options: ["请务必于周五前提交材料。", "请不务必于周五前提交材料。", "请务必于周五前提交了材料。", "请提交务必于周五前材料。"], answer: 0,
      why: ["Goed: 请 + 务必 + tijd + handeling.", "不务必 bestaat niet, en hier hoort geen ontkenning.", "Een verzoek gaat over iets wat nog moet gebeuren; daar past geen 了.", "务必 staat vóór het werkwoord, niet erachter."] },
    { type: "mc", q: "\"Het is al tien uur, hij is vast al thuis.\"",
      options: ["已经十点了，他一定到家了。", "已经十点了，他务必到家了。", "已经十点了，他必须到家了。", "已经十点了，他千万到家了。"], answer: 0,
      why: ["Goed: een vermoeden = 一定.", "务必 is een verzoek, nooit een vermoeden.", "必须 is een plicht, geen vermoeden.", "千万 hoort bij dringende verzoeken (千万要, 千万别), niet bij een vermoeden."] },
    { type: "mc", q: "Je zegt tegen een collega: 我___走了，再见！(Ik moet nu gaan, dag!)",
      options: ["必须", "务必", "一定", "不必"], answer: 0,
      why: ["Goed: 必须 beschrijft je eigen plicht.", "务必 is een dringend verzoek aan anderen, niet je eigen plicht.", "一定 zonder 要 klinkt hier als een vermoeden; het past niet.", "不必 betekent \"hoeft niet\": dan ga je juist niet."] },
    { type: "mc", q: "Een bord: \"Laat absoluut geen waardevolle spullen in de auto achter.\"",
      options: ["请务必不要将贵重物品留在车内。", "请不务必将贵重物品留在车内。", "请务必将贵重物品留在车内。", "请务必不要将贵重物品留在车内了。"], answer: 0,
      why: ["Goed: 务必不要 = beslist niet.", "De ontkenning komt na 务必: 务必不要.", "Zonder 不要 zeg je juist dat je ze moet achterlaten.", "Een verbod gaat over wat nog kan gebeuren; daar past geen 了."] },
    { type: "mc", q: "Je zegt tegen je broer: \"Vergeet morgen vooral niet te bellen!\"",
      options: ["明天千万别忘了打电话！", "明天不务必忘了打电话！", "明天千万忘了打电话！", "明天别务必忘了打电话！"], answer: 0,
      why: ["Goed: in gesprek zeg je 千万别.", "不务必 bestaat niet, en 务必 is te formeel voor je broer.", "Zonder 别 zeg je: \"vergeet het vooral\".", "别 en 务必 staan in de verkeerde volgorde, en 务必 is te formeel."] },
    { type: "mc", q: "请务必准时到达。Wat betekent dit?",
      options: ["Kom absoluut op tijd.", "U hoeft niet op tijd te komen.", "U bent vast op tijd.", "Kom op tijd als het lukt."], answer: 0,
      why: ["Goed: 务必 = absoluut, beslist.", "\"Hoeft niet\" is 不必.", "Een vermoeden zou 一定 zijn; 务必 is een verzoek.", "务必 is niet vrijblijvend."] },
    { type: "order", q: "Zet in de goede volgorde: \"Draag uw paspoort beslist bij u.\"",
      tokens: [["请", "qǐng"], ["务必", "wùbì"], ["随身携带", "suíshēn xiédài"], ["护照", "hùzhào"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Vul uw naam absoluut correct in op het antwoordblad.\"",
      tokens: [["请务必", "qǐng wùbì"], ["在答题卡上", "zài dátíkǎ shang"], ["正确填写", "zhèngquè tiánxiě"], ["姓名", "xìngmíng"]] },
    { type: "fill", q: "参加面试时，请___带好简历。(Neem bij het sollicitatiegesprek absoluut je cv mee.)", answers: ["务必", "一定"],
      hint: "Welk formeel woord van twee tekens betekent \"absoluut\"?", why: "请务必 + werkwoord = dringend verzoek. 一定 kan ook, maar klinkt minder formeel." },
    { type: "open", q: "Vertaal (e-mail): \"Lever het formulier absoluut vóór 1 juni in.\"",
      model: ["请务必于六月一日前提交表格。", "请务必在六月一日之前交表。"],
      tip: "Check: 请 + 务必 vóór de tijd en het werkwoord, en geen 了." },
    { type: "open", q: "Herschrijf als formele mededeling: 明天千万别迟到！",
      model: ["明天请务必准时到达。", "明天请务必不要迟到。", "请大家明天务必准时出席。"],
      tip: "Check: 千万别 wordt 务必不要, of je maakt er iets positiefs van: 务必准时." }
  ],
  review: [
    { type: "mc", q: "Een mededeling: \"Neem beslist een geldig legitimatiebewijs mee.\" ___携带有效证件。",
      options: ["请务必", "请不务必", "请大概", "请必然"], answer: 0,
      why: ["Goed: 请务必 + werkwoord = dringend verzoek.", "不务必 bestaat niet.", "大概 betekent \"waarschijnlijk\": dat is geen verzoek.", "必然 betekent \"onvermijdelijk\" en past niet bij 请."] },
    { type: "mc", q: "\"Hij is vast verdwaald.\"",
      options: ["他一定是迷路了。", "他务必是迷路了。", "他务必迷路了。", "他必须迷路了。"], answer: 0,
      why: ["Goed: een vermoeden = 一定.", "务必 is een verzoek, geen vermoeden.", "务必 is een verzoek; niemand vraagt hem te verdwalen.", "必须 is een plicht, geen vermoeden."] },
    { type: "mc", q: "Een bord in een hotel: 请___将行李留在大厅内。(Laat beslist geen bagage in de hal achter.)",
      options: ["务必不要", "不务必", "务必", "不必"], answer: 0,
      why: ["Goed: 务必不要 = beslist niet.", "不务必 bestaat niet.", "Zonder 不要 vraag je juist om de bagage achter te laten.", "不必 betekent \"hoeft niet\": dat is geen verbod."] }
  ]
})
