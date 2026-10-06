({
  id: "13", slug: "xingkui", title: "幸亏 en 多亏", sub: "Gelukkig ..., anders was het misgegaan",
  canDo: "Je kunt nu zeggen dat iets gunstigs een slechte afloop heeft voorkomen, met 幸亏 of 多亏, plus 才 of 要不然/否则.",
  guess: {
    q: "幸亏你提醒我，要不然我就忘了。Wat betekent dit, denk je?",
    options: ["Gelukkig herinnerde je me eraan, anders was ik het vergeten.", "Jammer dat je me eraan herinnerde, want ik was het vergeten.", "Als je me eraan herinnert, vergeet ik het niet.", "Je herinnerde me eraan, maar ik was het toch vergeten."], answer: 0,
    why: ["Goed: 幸亏 = gelukkig. 要不然 = anders: wat er zonder dat geluk was gebeurd.", "幸亏 is positief: \"gelukkig\", niet \"jammer\".", "De zin gaat over iets wat al gebeurd is, niet over een voorwaarde.", "要不然 ... 就忘了 zegt wat er zou zijn gebeurd. Het is dus niet gebeurd."]
  },
  problem: "Soms ging het bijna mis, maar iets gunstigs redde de situatie. In het Nederlands zeg je: \"Gelukkig had ik een paraplu bij me, anders was ik nat geworden.\" In het Chinees gebruik je dan 幸亏 (xìngkuī). Wil je iemand bedanken, dan gebruik je 多亏 (duōkuī): \"dankzij jou\".",
  pattern: [
    { l: "幸亏/多亏", v: "幸亏", c: 2, key: true }, { l: "gunstige oorzaak", v: "你提醒我", c: 3 },
    { l: "要不然/否则 of 才", v: "要不然", c: 4, key: true }, { l: "afloop", v: "我就忘了", c: 5 }
  ],
  patternCap: "幸亏/多亏 + gunstige oorzaak + ，(wie) + 才 + goede afloop / ，要不然 (否则) + (wie) + 就 + slechte afloop + 了",
  rules: [
    "幸亏 staat aan het begin van de zin, of direct na het onderwerp: 幸亏我带了伞 of 我幸亏带了伞.",
    "Goede afloop: gebruik 才 in het tweede deel. 幸亏你帮我，我才做完了。",
    "Slechte afloop die niet gebeurde: 要不然 of 否则 + 就 ... 了. 否则 klinkt formeler.",
    "多亏 kan ook een werkwoord zijn, met 了 + persoon: 这次多亏了你。 Met 幸亏 kan dat niet.",
    "幸好 betekent bijna hetzelfde als 幸亏 en is iets lichter. Je kunt ze meestal uitwisselen."
  ],
  pitfall: "幸亏 gebruik je alleen als iets gunstigs een slechte afloop voorkomt. Voor gewoon goed nieuws of voor pech past het niet.",
  examples: [
    { cn: "幸亏你提醒我，要不然我就忘了。", py: "Xìngkuī nǐ tíxǐng wǒ, yàobùrán wǒ jiù wàng le.", nl: "Gelukkig herinnerde je me eraan, anders was ik het vergeten." },
    { cn: "幸亏带了伞，我们才没被淋湿。", py: "Xìngkuī dàile sǎn, wǒmen cái méi bèi línshī.", nl: "Gelukkig hadden we een paraplu bij ons, daardoor werden we niet nat." },
    { cn: "多亏了大家的帮助，我们才按时完成了任务。", py: "Duōkuīle dàjiā de bāngzhù, wǒmen cái ànshí wánchéngle rènwu.", nl: "Dankzij de hulp van iedereen hebben we de taak op tijd afgerond." },
    { cn: "幸亏我们出门早，否则就赶不上飞机了。", py: "Xìngkuī wǒmen chūmén zǎo, fǒuzé jiù gǎn bu shàng fēijī le.", nl: "Gelukkig vertrokken we vroeg, anders hadden we het vliegtuig gemist." }
  ],
  nuance: [
    { h: "幸亏 of 多亏?",
      p: "幸亏 legt de nadruk op geluk: de omstandigheden zaten mee. 多亏 legt de nadruk op dank: iemand of iets heeft geholpen. Daarom kan 多亏 als werkwoord met 了 + persoon staan. 幸亏 is een bijwoord en kan dat niet.",
      ex: [
        { cn: "这次多亏了你。", py: "Zhè cì duōkuīle nǐ.", nl: "Dit keer is het dankzij jou." },
        { cn: "幸亏那天没下雨。", py: "Xìngkuī nà tiān méi xiàyǔ.", nl: "Gelukkig regende het die dag niet." }
      ] },
    { h: "幸好 en 好在",
      p: "幸好 is bijna gelijk aan 幸亏. 好在 is anders: de situatie is al slecht, maar er is één gunstig punt. Vaak staat eerst het probleem, dan 好在. Met 好在 bedank je niemand.",
      ex: [
        { cn: "路上堵车了，好在我们出门早。", py: "Lù shang dǔchē le, hǎozài wǒmen chūmén zǎo.", nl: "Er was file, maar gelukkig waren we vroeg vertrokken." },
        { cn: "幸好你来了，我正需要人帮忙。", py: "Xìnghǎo nǐ lái le, wǒ zhèng xūyào rén bāngmáng.", nl: "Gelukkig ben je er. Ik had net iemand nodig om te helpen." }
      ] },
    { h: "才 of 要不然: twee manieren om af te ronden",
      p: "Met 才 zeg je wat er goed afliep: alleen daardoor lukte het. Met 要不然 of 否则 zeg je wat er mis was gegaan. Dan volgt meestal 就 ... 了. In geschreven tekst kies je liever 否则. In de spreektaal hoor je vaker 要不然 of 不然.",
      ex: [
        { cn: "幸亏医生来得及时，他才没出事。", py: "Xìngkuī yīshēng lái de jíshí, tā cái méi chūshì.", nl: "Gelukkig was de dokter er op tijd, daardoor liep het goed met hem af." }
      ] }
  ],
  mistakes: [
    { wrong: "这次幸亏了你。", right: "这次多亏了你。", why: "Alleen 多亏 kan als werkwoord met 了 + persoon. 幸亏 is een bijwoord." },
    { wrong: "幸亏你提醒我，我才忘了。", right: "幸亏你提醒我，我才没忘。", why: "Na 才 komt de goede afloop. Je bent het juist níet vergeten." },
    { wrong: "幸亏你提醒我，否则我忘了。", right: "幸亏你提醒我，否则我就忘了。", why: "Na 否则 of 要不然 volgt de afloop die niet gebeurde, meestal met 就 ... 了." },
    { wrong: "幸亏我没带伞，全身都湿了。", right: "可惜我没带伞，全身都湿了。", why: "幸亏 is voor geluk dat iets slechts voorkomt. Bij pech past 可惜 (jammer genoeg)." }
  ],
  vocab: [
    ["幸亏 / 多亏", "xìngkuī / duōkuī", "gelukkig / dankzij"], ["提醒", "tíxǐng", "herinneren aan, waarschuwen"], ["要不然", "yàobùrán", "anders"],
    ["否则", "fǒuzé", "anders (formeel)"], ["淋湿", "línshī", "nat regenen"], ["及时", "jíshí", "op tijd, tijdig"],
    ["堵车", "dǔchē", "file"], ["赶上", "gǎnshang", "op tijd halen"], ["信号", "xìnhào", "signaal, bereik"], ["摔倒", "shuāidǎo", "vallen"]
  ],
  dialogue: [
    ["A", "你怎么才到？飞机还有四十分钟就起飞了！", "Nǐ zěnme cái dào? Fēijī hái yǒu sìshí fēnzhōng jiù qǐfēi le!", "Waarom ben je nu pas hier? Het vliegtuig vertrekt over veertig minuten!"],
    ["B", "路上堵车了。幸亏我出门早，要不然肯定赶不上。", "Lù shang dǔchē le. Xìngkuī wǒ chūmén zǎo, yàobùrán kěndìng gǎn bu shàng.", "Er was file. Gelukkig vertrok ik vroeg, anders had ik het zeker niet gehaald."],
    ["A", "护照带了吗？", "Hùzhào dàile ma?", "Heb je je paspoort bij je?"],
    ["B", "带了。昨天多亏你提醒我，我才把护照放进包里。", "Dài le. Zuótiān duōkuī nǐ tíxǐng wǒ, wǒ cái bǎ hùzhào fàngjìn bāo li.", "Ja. Dankzij jouw herinnering gisteren heb ik mijn paspoort in mijn tas gedaan."],
    ["A", "好在航班没有晚点。快走吧！", "Hǎozài hángbān méiyǒu wǎndiǎn. Kuài zǒu ba!", "Gelukkig is de vlucht niet vertraagd. Kom, snel!"]
  ],
  reading: {
    title: "山里的一天",
    lines: [
      { cn: "上个月，我和朋友小林去山里徒步。", py: "Shàng ge yuè, wǒ hé péngyou Xiǎo Lín qù shān li túbù.", nl: "Vorige maand ging ik met mijn vriend Xiao Lin wandelen in de bergen." },
      { cn: "下午三点，天突然变了，开始下大雨。", py: "Xiàwǔ sān diǎn, tiān tūrán biàn le, kāishǐ xià dàyǔ.", nl: "Om drie uur 's middags sloeg het weer plotseling om en begon het hard te regenen." },
      { cn: "我们走错了路，手机也没有信号。", py: "Wǒmen zǒucuòle lù, shǒujī yě méiyǒu xìnhào.", nl: "We liepen verkeerd, en onze telefoons hadden ook geen bereik." },
      { cn: "幸亏小林带了地图，我们才找到了下山的路。", py: "Xìngkuī Xiǎo Lín dàile dìtú, wǒmen cái zhǎodàole xià shān de lù.", nl: "Gelukkig had Xiao Lin een kaart bij zich. Daardoor vonden we de weg naar beneden." },
      { cn: "路上我脚下一滑，差点儿摔倒，多亏小林及时拉住了我。", py: "Lù shang wǒ jiǎo xià yì huá, chàdiǎnr shuāidǎo, duōkuī Xiǎo Lín jíshí lāzhùle wǒ.", nl: "Onderweg gleed ik uit en viel ik bijna. Dankzij Xiao Lin, die me op tijd vastgreep, gebeurde er niets." },
      { cn: "到山下的时候，天已经黑了。", py: "Dào shān xià de shíhou, tiān yǐjīng hēi le.", nl: "Toen we beneden waren, was het al donker." },
      { cn: "幸好附近有一家小饭馆，老板让我们进去休息，还给我们做了热汤。", py: "Xìnghǎo fùjìn yǒu yì jiā xiǎo fànguǎn, lǎobǎn ràng wǒmen jìnqu xiūxi, hái gěi wǒmen zuòle rè tāng.", nl: "Gelukkig was er een restaurantje in de buurt. De eigenaar liet ons binnen uitrusten en maakte warme soep voor ons." },
      { cn: "现在想起来，幸亏有小林，否则那天我们可能就回不来了。", py: "Xiànzài xiǎng qǐlai, xìngkuī yǒu Xiǎo Lín, fǒuzé nà tiān wǒmen kěnéng jiù huí bu lái le.", nl: "Als ik er nu aan terugdenk: gelukkig was Xiao Lin erbij, anders waren we die dag misschien niet teruggekomen." },
      { cn: "从那以后，我出门前一定会先看天气预报。", py: "Cóng nà yǐhòu, wǒ chūmén qián yídìng huì xiān kàn tiānqì yùbào.", nl: "Sindsdien kijk ik altijd eerst naar de weersverwachting voordat ik op pad ga." }
    ],
    questions: [
      { type: "mc", q: "Hoe vonden ze de weg naar beneden?",
        options: ["Met de kaart van Xiao Lin.", "Met hun telefoon.", "De eigenaar van het restaurant wees de weg.", "Ze wachtten tot het stopte met regenen."], answer: 0,
        why: ["Goed: 幸亏小林带了地图，我们才找到了下山的路。", "De telefoons hadden geen bereik: 手机也没有信号。", "Het restaurant vonden ze pas toen ze al beneden waren.", "Er staat niet dat de regen stopte."] },
      { type: "mc", q: "Wat gebeurde er toen de schrijver uitgleed?",
        options: ["Xiao Lin greep hem op tijd vast.", "Hij viel en raakte gewond.", "Hij verloor de kaart.", "Hij brak zijn telefoon."], answer: 0,
        why: ["Goed: 多亏小林及时拉住了我。", "差点儿摔倒 = bijna gevallen. Hij viel dus niet.", "De kaart was van Xiao Lin, en die raakte niet kwijt.", "Over een kapotte telefoon staat niets in de tekst."] },
      { type: "mc", q: "幸亏小林带了地图，我们才找到了下山的路。Wat betekent 幸亏 ... 才 hier?",
        options: ["Gelukkig had Xiao Lin een kaart; alleen daardoor vonden ze de weg.", "Jammer genoeg had Xiao Lin alleen een kaart.", "Ze vonden de weg pas laat, ook al had Xiao Lin een kaart.", "Xiao Lin vond de weg, maar zonder kaart."], answer: 0,
        why: ["Goed: 幸亏 = gelukkig; 才 = alleen daardoor liep het goed af.", "幸亏 is positief: gelukkig, niet jammer.", "才 betekent hier niet \"pas laat\", maar \"alleen daardoor\".", "De kaart was juist de reden dat het lukte."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Gelukkig herinnerde je me eraan, anders was ik het vergeten.\"",
      options: ["幸亏你提醒我，要不然我就忘了。", "幸亏你提醒我，所以我就忘了。", "你提醒我幸亏，要不然我就忘了。", "可惜你提醒我，要不然我就忘了。"], answer: 0,
      why: ["Goed: 幸亏 + oorzaak, 要不然 + wat er was gebeurd.", "所以 geeft een gevolg dat echt gebeurde. Je bent het juist niet vergeten.", "幸亏 staat aan het begin, vóór de oorzaak.", "可惜 betekent \"jammer\". Dat past niet bij een goede afloop."] },
    { type: "mc", q: "这次___了你，我们才赢了比赛。(Dit keer hebben we dankzij jou de wedstrijd gewonnen.)",
      options: ["多亏", "幸亏", "好在", "幸好"], answer: 0,
      why: ["Goed: 多亏 kan als werkwoord met 了 + persoon.", "幸亏 is een bijwoord: 幸亏了你 kan niet.", "好在 neemt geen 了 + persoon.", "幸好 is een bijwoord, net als 幸亏. 幸好了你 kan niet."] },
    { type: "fill", q: "幸亏我们出门早，___赶上了飞机。(Gelukkig vertrokken we vroeg, daardoor haalden we het vliegtuig.)", answers: ["才"],
      hint: "Welk woord zegt: alleen daardoor liep het goed af?", why: "幸亏 ... 才 + goede afloop." },
    { type: "order", q: "Zet in de goede volgorde: \"Gelukkig hadden we een paraplu bij ons, daardoor werden we niet nat.\"",
      tokens: [["幸亏", "xìngkuī"], ["带了伞", "dàile sǎn"], ["我们才", "wǒmen cái"], ["没被淋湿", "méi bèi línshī"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Dankzij de hulp van iedereen hebben we de taak op tijd afgerond.\"",
      tokens: [["多亏", "duōkuī"], ["大家的帮助", "dàjiā de bāngzhù"], ["我们才", "wǒmen cái"], ["按时", "ànshí"], ["完成了任务", "wánchéngle rènwu"]] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["这次幸亏了你。", "这次多亏了你。", "幸亏有你。", "多亏你帮忙。"], answer: 0,
      why: ["Goed: deze is fout. 幸亏 is een bijwoord en neemt geen 了 + persoon.", "Deze klopt: 多亏 kan als werkwoord.", "Deze klopt: 幸亏 + 有 + persoon.", "Deze klopt: 多亏 + wat iemand deed."] },
    { type: "mc", q: "雨下得很大，好在我带了伞。Wat drukt 好在 hier uit?",
      options: ["Er is een probleem, maar er is ook een gunstig punt.", "Ik ben blij dat het regent.", "Dankzij de regen heb ik een paraplu.", "Het regende niet hard."], answer: 0,
      why: ["Goed: 好在 noemt een gunstig punt in een slechte situatie.", "好在 slaat op de paraplu, niet op de regen.", "De paraplu is er niet door de regen.", "雨下得很大 zegt juist: het regende hard."] },
    { type: "mc", q: "___我带了护照，要不然就上不了飞机了。(Gelukkig had ik mijn paspoort bij me, anders kon ik niet aan boord.)",
      options: ["幸亏", "可惜", "难怪", "恐怕"], answer: 0,
      why: ["Goed: 幸亏 + gunstige oorzaak + 要不然.", "可惜 betekent \"jammer\". Het paspoort hebben is juist goed.", "难怪 betekent \"geen wonder\". Dat past niet bij 要不然.", "恐怕 betekent \"ik vrees\". Het gaat hier om iets wat al gebeurd is."] },
    { type: "mc", q: "幸亏你来了，否则我一个人搬不动。Wat betekent dit?",
      options: ["Gelukkig kwam je, anders had ik het alleen niet kunnen tillen.", "Je kwam, maar ik kon het toch niet alleen tillen.", "Jammer dat je kwam, ik kon het ook alleen.", "Als je niet komt, kan ik het niet tillen."], answer: 0,
      why: ["Goed: 否则 noemt wat er zonder jou was gebeurd.", "否则 zegt dat het zónder jou niet lukte. Met jou lukte het dus.", "幸亏 is positief: gelukkig.", "来了 gaat over iets wat al gebeurd is, niet over een voorwaarde."] },
    { type: "mc", q: "Wat is het verschil tussen 多亏 en 幸亏?",
      options: ["多亏 legt de nadruk op dank aan iemand of iets, 幸亏 op geluk.", "多亏 kan alleen in vragen staan.", "幸亏 kan direct gevolgd worden door 了 + persoon.", "多亏 betekent \"jammer genoeg\"."], answer: 0,
      why: ["Goed: 多亏 = dankzij, 幸亏 = gelukkig.", "多亏 staat gewoon in mededelende zinnen.", "Dat kan alleen 多亏, niet 幸亏.", "多亏 is positief: dankzij."] },
    { type: "open", q: "Vertaal: \"Gelukkig vertrokken we vroeg, anders hadden we de trein gemist.\"", model: ["幸亏我们出门早，要不然就赶不上火车了。", "幸亏我们走得早，否则就赶不上火车了。", "幸好我们出发得早，要不然就错过火车了。"],
      tip: "Check: 幸亏 + oorzaak, dan 要不然/否则 + 就 ... 了." },
    { type: "open", q: "Vertaal: \"Dankzij jouw hulp ben ik voor het examen geslaagd.\"", model: ["多亏你的帮助，我才通过了考试。", "多亏了你的帮助，我才考过了。"],
      tip: "Check: 多亏 (dank), en 才 vóór de goede afloop." }
  ],
  review: [
    { type: "mc", q: "\"Gelukkig was de dokter er op tijd, anders was het gevaarlijk geworden.\"",
      options: ["幸亏医生来得及时，否则就危险了。", "幸亏医生来得及时，所以就危险了。", "可惜医生来得及时，否则就危险了。", "幸亏医生来得及时，但是就危险了。"], answer: 0,
      why: ["Goed: 幸亏 + oorzaak, 否则 + wat er was gebeurd.", "所以 zegt dat het echt gevaarlijk werd.", "可惜 betekent \"jammer\". Dat past niet bij goed nieuws.", "但是 geeft een tegenstelling, geen \"anders\"."] },
    { type: "mc", q: "这件事___了老王，要不然我们找不到房子。(Dit is dankzij Lao Wang, anders hadden we geen huis gevonden.)",
      options: ["多亏", "幸亏", "好在", "幸好"], answer: 0,
      why: ["Goed: 多亏了 + persoon = dankzij iemand.", "幸亏 kan niet met 了 + persoon.", "好在 kan niet met 了 + persoon.", "幸好 kan niet met 了 + persoon."] },
    { type: "mc", q: "天气不好，好在大家都带了雨衣。Wat betekent dit?",
      options: ["Het weer was slecht, maar gelukkig had iedereen een regenjas bij zich.", "Het weer was slecht, daarom kocht iedereen een regenjas.", "Het weer was goed, dus niemand had een regenjas nodig.", "Het weer was slecht, en niemand had een regenjas bij zich."], answer: 0,
      why: ["Goed: 好在 = gelukkig, een gunstig punt in een slechte situatie.", "Er staat 带了 (bij zich hebben), niet kopen.", "天气不好 = het weer was slecht.", "大家都带了 = iedereen had er een bij zich."] }
  ]
})
