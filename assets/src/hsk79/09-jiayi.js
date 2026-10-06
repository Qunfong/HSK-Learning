({
  id: "09", slug: "jiayi", title: "加以 + werkwoord", sub: "Formeel: een zaak aanpakken, onderzoeken, verbeteren",
  canDo: "Je kunt nu in rapporten en officiële teksten zeggen dat een probleem wordt onderzocht, opgelost of verbeterd, met 加以, en je kent het verschil met 予以 en 进行.",
  guess: {
    q: "对这些问题，我们将认真加以研究。Wat betekent dit, denk je?",
    options: ["We gaan deze problemen zorgvuldig onderzoeken.", "We hebben deze problemen al onderzocht.", "We voegen deze problemen aan het onderzoek toe.", "We vinden deze problemen niet belangrijk."], answer: 0,
    why: ["Goed: 加以 + 研究 = (een zaak) onderzoeken. 将 = zal.", "将 wijst naar de toekomst; het onderzoek moet nog komen.", "加 betekent hier niet \"toevoegen\". 加以 maakt van 研究 een formele handeling.", "认真 betekent \"zorgvuldig\": ze nemen de problemen juist serieus."]
  },
  problem: "In een officiële tekst noem je eerst een zaak, bijvoorbeeld \"deze problemen\". Daarna zeg je wat ermee gebeurt: onderzoeken, oplossen, verbeteren. In het Nederlands zeg je \"deze problemen worden aangepakt\". In schrijftaal zet je 加以 (jiāyǐ) vóór het werkwoord: 加以解决.",
  pattern: [
    { l: "de zaak", v: "对这些问题", c: 3 }, { l: "wie", v: "我们", c: 1 }, { l: "hoe", v: "将认真", c: 4 },
    { l: "加以", v: "加以", c: 2, key: true }, { l: "handeling", v: "研究", c: 5 }
  ],
  patternCap: "(对) + zaak，(wie) + (bijwoord) + 加以 + werkwoord van twee lettergrepen: 加以研究, 加以分析, 加以改进, 加以解决, 加以限制 · spreektaal: gewoon 研究一下 / 解决这个问题",
  rules: [
    "Na 加以 komt een werkwoord van twee lettergrepen: 研究, 分析, 改进, 解决, 说明, 限制.",
    "De zaak staat vóór 加以: als onderwerp, of met 对 / 对于. Na het werkwoord komt geen object.",
    "Hulpwerkwoorden en bijwoorden staan vóór 加以: 应及时加以解决, 必须严格加以限制.",
    "Na 加以 staat geen 了 of 过. Voor iets wat al gebeurd is, gebruik je 进行了 of het werkwoord zelf.",
    "In gesprek laat je 加以 weg: 我们研究一下这个问题。"
  ],
  pitfall: "Zet geen object achter het werkwoord: 我们要加以解决这个问题 is fout. Zet de zaak vooraan: 这个问题我们要加以解决。",
  examples: [
    { cn: "对于群众反映的问题，有关部门应及时加以解决。", py: "Duìyú qúnzhòng fǎnyìng de wèntí, yǒuguān bùmén yīng jíshí jiāyǐ jiějué.", nl: "Problemen die burgers melden, moeten door de betrokken afdelingen snel worden opgelost." },
    { cn: "这些数据需要进一步加以分析。", py: "Zhèxiē shùjù xūyào jìn yí bù jiāyǐ fēnxī.", nl: "Deze gegevens moeten verder worden geanalyseerd." },
    { cn: "传统文化应当在继承的基础上加以发展。", py: "Chuántǒng wénhuà yīngdāng zài jìchéng de jīchǔ shang jiāyǐ fāzhǎn.", nl: "Traditionele cultuur moet worden doorgegeven en op die basis verder ontwikkeld." },
    { cn: "对野生动物的买卖，必须严格加以限制。", py: "Duì yěshēng dòngwù de mǎimài, bìxū yángé jiāyǐ xiànzhì.", nl: "De handel in wilde dieren moet streng worden beperkt." }
  ],
  nuance: [
    { h: "加以 of 予以?",
      p: "Beide staan vóór een werkwoord van twee lettergrepen, zonder object erachter. 予以 (les 03) gebruik je als een instantie iets verleent of oplegt aan mensen: steun, goedkeuring, straf, lof. 加以 gebruik je als je een zaak of probleem aanpakt: onderzoeken, analyseren, verbeteren, oplossen.",
      ex: [
        { cn: "对表现突出的员工，公司予以奖励。", py: "Duì biǎoxiàn tūchū de yuángōng, gōngsī yǔyǐ jiǎnglì.", nl: "Werknemers met uitstekende prestaties krijgen een beloning van het bedrijf." },
        { cn: "对员工提出的建议，公司认真加以研究。", py: "Duì yuángōng tíchū de jiànyì, gōngsī rènzhēn jiāyǐ yánjiū.", nl: "Het bedrijf bestudeert de voorstellen van werknemers zorgvuldig." }
      ] },
    { h: "加以 of 进行?",
      p: "Ook 进行 staat vóór een werkwoord van twee lettergrepen: 进行调查, 进行讨论. 进行 is breder. Het kan 了 of 过 krijgen en een maatwoord: 进行了一次调查. 加以 kan dat niet. 加以 legt de nadruk op de zaak die al genoemd is en die nu behandeld wordt. Is het al gebeurd? Kies dan 进行了.",
      ex: [
        { cn: "专家对事故原因进行了调查。", py: "Zhuānjiā duì shìgù yuányīn jìnxíngle diàochá.", nl: "Experts hebben de oorzaak van het ongeluk onderzocht." },
        { cn: "对这些意见，我们会认真加以考虑。", py: "Duì zhèxiē yìjiàn, wǒmen huì rènzhēn jiāyǐ kǎolǜ.", nl: "Deze meningen zullen we zorgvuldig overwegen." }
      ] },
    { h: "Spreektaal: laat 加以 weg",
      p: "加以 hoort bij beleid, rapporten en nieuws. In een gesprek zeg je het werkwoord zelf, met een object erachter of met 一下. 加以 en 一下 gaan nooit samen.",
      ex: [
        { cn: "这个问题我们回去再研究研究。", py: "Zhège wèntí wǒmen huíqu zài yánjiū yánjiū.", nl: "Dit probleem bekijken we straks nog eens." }
      ] }
  ],
  mistakes: [
    { wrong: "我们要加以解决这个问题。", right: "这个问题我们要加以解决。", why: "Na 加以 + werkwoord komt geen object. Zet de zaak vooraan." },
    { wrong: "对这些建议，公司已经加以了研究。", right: "对这些建议，公司已经进行了研究。", why: "加以 kan geen 了 krijgen. Voor iets wat al gebeurd is, gebruik je 进行了." },
    { wrong: "对这个问题要加以看。", right: "对这个问题要加以研究。", why: "Na 加以 komt een formeel werkwoord van twee lettergrepen, niet een kort woord als 看." },
    { wrong: "这道题你帮我加以分析一下吧。", right: "这道题你帮我分析一下吧。", why: "加以 is formeel en gaat niet samen met 一下. In gesprek laat je 加以 weg." }
  ],
  vocab: [
    ["加以", "jiāyǐ", "(een zaak) aanpakken, behandelen (formeel)"], ["反映", "fǎnyìng", "melden, weergeven"], ["及时", "jíshí", "tijdig, snel"],
    ["分析", "fēnxī", "analyseren"], ["限制", "xiànzhì", "beperken"], ["意见", "yìjiàn", "mening, klacht"],
    ["纠正", "jiūzhèng", "corrigeren, rechtzetten"], ["采纳", "cǎinà", "overnemen (een voorstel)"], ["投诉", "tóusù", "klacht, klagen"], ["监督", "jiāndū", "toezien, toezicht"]
  ],
  dialogue: [
    ["主任", "上个月客户的投诉主要集中在哪些方面？", "Shàng ge yuè kèhù de tóusù zhǔyào jízhōng zài nǎxiē fāngmiàn?", "Waar gingen de klachten van klanten vorige maand vooral over?"],
    ["员工", "主要是送货慢，还有客服电话打不通。", "Zhǔyào shì sònghuò màn, hái yǒu kèfú diànhuà dǎ bu tōng.", "Vooral over trage levering, en dat de klantenservice onbereikbaar is."],
    ["主任", "这两个问题必须尽快加以解决。", "Zhè liǎng ge wèntí bìxū jǐnkuài jiāyǐ jiějué.", "Die twee problemen moeten zo snel mogelijk worden opgelost."],
    ["员工", "送货的问题，物流部已经进行了调查，原因是仓库人手不足。", "Sònghuò de wèntí, wùliúbù yǐjīng jìnxíngle diàochá, yuányīn shì cāngkù rénshǒu bùzú.", "De afdeling logistiek heeft het leveringsprobleem al onderzocht: het magazijn heeft te weinig personeel."],
    ["主任", "好。客服的问题，请你们下周拿出方案，我们再开会加以讨论。", "Hǎo. Kèfú de wèntí, qǐng nǐmen xià zhōu náchū fāng'àn, wǒmen zài kāihuì jiāyǐ tǎolùn.", "Goed. Kom volgende week met een plan voor de klantenservice, dan bespreken we dat in een vergadering."],
    ["员工", "明白，我们会认真准备。", "Míngbai, wǒmen huì rènzhēn zhǔnbèi.", "Begrepen, we bereiden het goed voor."]
  ],
  reading: {
    title: "食堂整改通知",
    lines: [
      { cn: "近期，不少同学对学校食堂提出了意见。", py: "Jìnqī, bù shǎo tóngxué duì xuéxiào shítáng tíchūle yìjiàn.", nl: "De laatste tijd hebben veel studenten klachten over de kantine ingediend." },
      { cn: "学校对这些意见高度重视，并逐条加以分析。", py: "Xuéxiào duì zhèxiē yìjiàn gāodù zhòngshì, bìng zhú tiáo jiāyǐ fēnxī.", nl: "De school neemt deze klachten zeer serieus en analyseert ze punt voor punt." },
      { cn: "关于饭菜价格偏高的问题，后勤处已对成本进行了调查。", py: "Guānyú fàncài jiàgé piān gāo de wèntí, hòuqínchù yǐ duì chéngběn jìnxíngle diàochá.", nl: "Over de vrij hoge prijzen van de maaltijden: de facilitaire dienst heeft de kosten al onderzocht." },
      { cn: "对不合理的收费，学校将坚决加以纠正。", py: "Duì bù hélǐ de shōufèi, xuéxiào jiāng jiānjué jiāyǐ jiūzhèng.", nl: "Onredelijke prijzen zal de school vastberaden rechtzetten." },
      { cn: "关于用餐高峰排队时间长的问题，食堂将增加两个窗口。", py: "Guānyú yòngcān gāofēng páiduì shíjiān cháng de wèntí, shítáng jiāng zēngjiā liǎng ge chuāngkǒu.", nl: "Tegen de lange rijen op drukke etenstijden opent de kantine twee extra loketten." },
      { cn: "同学们提出的好建议，食堂会认真加以采纳。", py: "Tóngxuémen tíchū de hǎo jiànyì, shítáng huì rènzhēn jiāyǐ cǎinà.", nl: "Goede voorstellen van studenten zal de kantine serieus overnemen." },
      { cn: "对于卫生方面的问题，学校将定期检查，发现问题立即加以处理。", py: "Duìyú wèishēng fāngmiàn de wèntí, xuéxiào jiāng dìngqī jiǎnchá, fāxiàn wèntí lìjí jiāyǐ chǔlǐ.", nl: "Voor de hygiëne houdt de school regelmatig controles. Problemen worden meteen aangepakt." },
      { cn: "欢迎同学们继续监督。", py: "Huānyíng tóngxuémen jìxù jiāndū.", nl: "Studenten blijven van harte welkom om mee toe te zien." }
    ],
    questions: [
      { type: "mc", q: "Wat doet de kantine tegen de lange rijen?",
        options: ["Twee extra loketten openen.", "De prijzen verlagen.", "Regelmatig controleren.", "Langer open blijven."], answer: 0,
        why: ["Goed: 食堂将增加两个窗口.", "De prijzen horen bij een ander probleem.", "Controles gaan over hygiëne.", "Over langere openingstijden staat niets in de tekst."] },
      { type: "mc", q: "Wat heeft de facilitaire dienst al gedaan?",
        options: ["De kosten onderzocht.", "De prijzen verlaagd.", "Twee loketten geopend.", "Alle voorstellen overgenomen."], answer: 0,
        why: ["Goed: 后勤处已对成本进行了调查.", "Het rechtzetten van prijzen is nog een plan (将).", "De loketten komen nog (将).", "Over de voorstellen zegt de tekst 会: dat komt nog."] },
      { type: "mc", q: "发现问题立即加以处理。Wat betekent 加以处理 hier?",
        options: ["(de problemen) aanpakken", "problemen toevoegen", "problemen melden", "problemen negeren"], answer: 0,
        why: ["Goed: 加以 + 处理 = de genoemde zaak behandelen.", "加以 betekent hier niet \"toevoegen\".", "Melden doen de studenten; de school pakt aan.", "立即 betekent \"meteen\": er wordt juist gehandeld."] }
    ]
  },
  questions: [
    { type: "mc", q: "Welke zin klopt?",
      options: ["对这个问题，我们要认真加以研究。", "我们要认真加以研究这个问题。", "对这个问题，我们要加以认真研究了。", "对这个问题，我们要认真加以看。"], answer: 0,
      why: ["Goed: de zaak vooraan, bijwoord vóór 加以, dan het werkwoord.", "Na 加以 + werkwoord komt geen object.", "加以 kan niet met 了, en 要 wijst naar iets wat nog moet gebeuren.", "Na 加以 komt een formeel werkwoord van twee lettergrepen."] },
    { type: "mc", q: "对存在的不足，我们将认真___改进。",
      options: ["加以", "予以", "以便", "从而"], answer: 0,
      why: ["Goed: een zaak (de tekortkomingen) aanpakken = 加以改进.", "予以 is voor wat een instantie verleent of oplegt: 予以支持, 予以处罚.", "以便 geeft een doel en staat aan het begin van een deel.", "从而 opent een resultaat na een maatregel."] },
    { type: "mc", q: "专家已经对事故原因___了调查。",
      options: ["进行", "加以", "予以", "从而"], answer: 0,
      why: ["Goed: 进行 kan 了 krijgen: 进行了调查.", "加以 kan geen 了 krijgen.", "予以 is voor straf, steun of goedkeuring, en kan ook geen 了 krijgen.", "从而 geeft een resultaat en staat niet vóór 了."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["对这些建议，公司已经加以了研究。", "对这些建议，公司已经进行了研究。", "对这些建议，公司将认真加以研究。", "这些建议，公司已经研究过了。"], answer: 0,
      why: ["Goed, deze is fout: 加以 kan geen 了 krijgen.", "Deze klopt: 进行了 voor iets wat al gebeurd is.", "Deze klopt: 将 + 加以 voor de toekomst.", "Deze klopt: gewoon het werkwoord met 过."] },
    { type: "mc", q: "Je vraagt een klasgenoot: \"Kun je deze opgave even voor me analyseren?\"",
      options: ["你能帮我分析一下这道题吗？", "你能帮我加以分析一下这道题吗？", "你能帮我加以分析这道题吗？", "你能帮我进行分析一下这道题吗？"], answer: 0,
      why: ["Goed: in gesprek gewoon 分析一下.", "加以 en 一下 gaan nooit samen.", "Na 加以 + werkwoord komt geen object, en het is te formeel.", "进行 en 一下 gaan niet samen, en ook 进行 is te formeel."] },
    { type: "mc", q: "对野生动物的买卖，必须严格加以限制。Wat zegt deze zin?",
      options: ["De handel in wilde dieren moet streng beperkt worden.", "De handel in wilde dieren moet worden toegestaan.", "Wilde dieren moeten de handel beperken.", "De handel in wilde dieren is al streng beperkt."], answer: 0,
      why: ["Goed: 对 + zaak, 必须 + 加以限制 = moet beperkt worden.", "限制 betekent \"beperken\", niet \"toestaan\".", "Het onderwerp van 限制 is niet de dieren; de handel wordt beperkt.", "必须 betekent \"moet\": het is een eis, nog geen feit."] },
    { type: "order", q: "Zet in de goede volgorde: \"Deze gegevens moeten verder worden geanalyseerd.\"",
      tokens: [["这些数据", "zhèxiē shùjù"], ["需要进一步", "xūyào jìn yí bù"], ["加以", "jiāyǐ"], ["分析", "fēnxī"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Dit gedrag moet streng worden beperkt.\"",
      tokens: [["这种行为", "zhè zhǒng xíngwéi"], ["必须", "bìxū"], ["严格", "yángé"], ["加以", "jiāyǐ"], ["限制", "xiànzhì"]],
      alt: ["这种行为必须加以严格限制"] },
    { type: "fill", q: "对于大家提出的意见，我们会认真___考虑。(De ingebrachte meningen zullen we zorgvuldig overwegen.)", answers: ["加以", "予以"],
      hint: "Welk formeel woord van twee tekens staat vóór 考虑?", why: "加以考虑 = (de genoemde zaak) overwegen. Ook 予以考虑 komt voor." },
    { type: "open", q: "Vertaal (officieel): \"De school zal de problemen in de kantine zo snel mogelijk oplossen.\"",
      model: ["对食堂存在的问题，学校将尽快加以解决。", "食堂的问题，学校会尽快加以解决。"],
      tip: "Check: de zaak (食堂的问题) vooraan, 尽快 vóór 加以, en geen object na 解决." },
    { type: "open", q: "Herschrijf formeel met 加以: 我们会研究一下你们的建议。",
      model: ["对你们的建议，我们将认真加以研究。", "你们的建议，我们会加以研究。"],
      tip: "Check: 一下 is weg, de zaak staat vóór 加以, en na 研究 komt niets meer." }
  ],
  review: [
    { type: "mc", q: "对于这种浪费现象，必须___制止。",
      options: ["加以", "以便", "从而", "由此"], answer: 0,
      why: ["Goed: 必须 + 加以 + 制止 = moet een halt toegeroepen worden.", "以便 geeft een doel en opent een nieuw deel.", "从而 geeft een resultaat na een maatregel.", "由此 betekent \"hieruit\" en staat niet vóór een werkwoord als 制止."] },
    { type: "mc", q: "\"Dit plan moet nog worden verbeterd.\"",
      options: ["这个方案还需要加以完善。", "这个方案还需要加以完善它。", "这个方案还需要加以了完善。", "这个方案还需要加以好。"], answer: 0,
      why: ["Goed: de zaak vooraan, dan 加以 + werkwoord.", "Na het werkwoord komt geen object; 方案 staat al vooraan.", "加以 kan geen 了 krijgen.", "Na 加以 komt een werkwoord van twee lettergrepen, geen bijvoeglijk naamwoord."] },
    { type: "mc", q: "调查组上周___了实地调查。",
      options: ["进行", "加以", "予以", "给予"], answer: 0,
      why: ["Goed: iets wat al gebeurd is: 进行了调查.", "加以 kan geen 了 krijgen.", "予以 is voor steun, goedkeuring of straf, en kan geen 了 krijgen.", "给予 geeft iets aan iemand, het past niet bij 调查."] }
  ]
})
