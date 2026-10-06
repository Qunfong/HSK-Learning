({
  id: "15", slug: "bufa", title: "不乏", sub: "Er is geen gebrek aan ...",
  canDo: "Je kunt nu in formele tekst zeggen dat iets of iemand ruim aanwezig is met 不乏, je houdt het uit elkaar van 缺乏 en 不少, en je weet dat je in gesprek 有不少 of 不缺 zegt.",
  guess: {
    q: "这所大学不乏优秀人才。Wat betekent dit, denk je?",
    options: ["Deze universiteit heeft genoeg uitstekend talent.", "Deze universiteit heeft een gebrek aan uitstekend talent.", "Deze universiteit heeft geen enkel uitstekend talent.", "Deze universiteit heeft alleen uitstekend talent."], answer: 0,
    why: ["Goed: 不 + 乏 (gebrek) = geen gebrek aan.", "\"Gebrek aan\" is 缺乏. 不 draait het om.", "不乏 zegt juist dat ze er wel zijn.", "不乏 zegt niet \"alleen\"; het zegt dat er genoeg zijn."]
  },
  problem: "In nieuws en rapporten wil je vaak zeggen: \"onder hen zijn ook heel wat ...\" of \"aan ... geen gebrek\". In spreektaal zeg je 有不少 of 不缺. In formeel Chinees gebruik je 不乏 (bùfá): letterlijk \"niet gebrek hebben aan\". Let op: 乏 zit ook in 缺乏 (gebrek hebben aan), met de tegenovergestelde betekenis.",
  pattern: [
    { l: "groep", v: "参赛者中", c: 1 }, { l: "geen gebrek aan", v: "不乏", c: 2, key: true }, { l: "wie/wat", v: "专业选手", c: 3 }
  ],
  patternCap: "(groep + 中 / 其中) + 不乏 + zelfstandig naamwoord · vaste vorm: 不乏其人 · tegendeel: 缺乏 · spreektaal: 有不少……, 不缺……",
  rules: [
    "不乏 is zelf het werkwoord. Zet er geen 有 voor: 不乏人才, niet 有不乏人才.",
    "Na 不乏 komt een zelfstandig naamwoord, vaak met een bepaling: 不乏优秀的年轻人.",
    "Vaak staat er een groep vóór: 其中不乏……, 参赛者中不乏…….",
    "不乏 betekent \"er zijn zeker (best wat)\". Het zegt niet dat alles of bijna alles zo is.",
    "Vaste vorm: 不乏其人 = zulke mensen zijn er genoeg."
  ],
  pitfall: "不乏 en 缺乏 delen het teken 乏, maar betekenen het tegenovergestelde. 不乏人才 = genoeg talent. 缺乏人才 = te weinig talent. Lees het eerste teken goed.",
  examples: [
    { cn: "这所大学不乏优秀人才。", py: "Zhè suǒ dàxué bùfá yōuxiù réncái.", nl: "Aan deze universiteit is geen gebrek aan uitstekend talent." },
    { cn: "参赛者中不乏专业选手。", py: "Cānsàizhě zhōng bùfá zhuānyè xuǎnshǒu.", nl: "Onder de deelnemers zijn heel wat professionele sporters." },
    { cn: "网上的评论虽多，其中却不乏有价值的意见。", py: "Wǎngshàng de pínglùn suī duō, qízhōng què bùfá yǒu jiàzhí de yìjiàn.", nl: "Online zijn er veel reacties, maar daar zitten best waardevolle meningen tussen." },
    { cn: "历史上，像他这样白手起家的企业家不乏其人。", py: "Lìshǐ shang, xiàng tā zhèyàng báishǒu qǐjiā de qǐyèjiā bùfá qí rén.", nl: "In de geschiedenis zijn er genoeg ondernemers die net als hij met niets begonnen." }
  ],
  nuance: [
    { h: "不乏 of 缺乏?",
      p: "Beide zijn formeel, maar ze zijn elkaars tegendeel. 缺乏 = tekortschieten, te weinig hebben: 缺乏经验, 缺乏资金. 不乏 = er is genoeg van, ze zijn er zeker. 缺乏 gebruik je vaak voor abstracte dingen. 不乏 gebruik je vooral voor mensen of voorbeelden in een groep.",
      ex: [
        { cn: "这个团队不乏年轻人才。", py: "Zhège tuánduì bùfá niánqīng réncái.", nl: "Dit team heeft genoeg jong talent." },
        { cn: "这个团队缺乏有经验的人。", py: "Zhège tuánduì quēfá yǒu jīngyàn de rén.", nl: "Dit team heeft te weinig ervaren mensen." }
      ] },
    { h: "不乏 of 不少?",
      p: "不少 is een hoeveelheidswoord: \"best veel\". Je zegt 有不少 + zelfstandig naamwoord, of 不少 + zelfstandig naamwoord als onderwerp. 不少 past in spreektaal en schrijftaal. 不乏 is een formeel werkwoord, zonder 有. 不乏 benadrukt dat iets aanwezig is, niet het precieze aantal.",
      ex: [
        { cn: "来的人中有不少是学生。", py: "Lái de rén zhōng yǒu bù shǎo shì xuésheng.", nl: "Onder de mensen die kwamen, waren best veel studenten." },
        { cn: "来宾中不乏知名学者。", py: "Láibīn zhōng bùfá zhīmíng xuézhě.", nl: "Onder de gasten waren heel wat bekende wetenschappers." }
      ] },
    { h: "Spreektaal",
      p: "In een gesprek klinkt 不乏 stijf. Zeg 有不少……, 不缺…… of 也有…….",
      ex: [
        { cn: "我们公司不缺人才。", py: "Wǒmen gōngsī bù quē réncái.", nl: "Ons bedrijf heeft genoeg talent. (spreektaal)" }
      ] }
  ],
  mistakes: [
    { wrong: "这里有不乏人才。", right: "这里不乏人才。", why: "不乏 is zelf het werkwoord. Er komt geen 有 voor." },
    { wrong: "由于不乏资金，项目被迫停止了。", right: "由于缺乏资金，项目被迫停止了。", why: "Het project stopte door een tekort. Dat is 缺乏, niet 不乏." },
    { wrong: "其中不乏很多好作品。", right: "其中不乏好作品。", why: "不乏 bevat al de betekenis \"genoeg\". 很多 erbij is dubbel." },
    { wrong: "不乏其中好作品。", right: "其中不乏好作品。", why: "其中 (\"daaronder\") staat vóór 不乏, als de groep." }
  ],
  vocab: [
    ["不乏", "bùfá", "geen gebrek aan, er zijn genoeg"], ["缺乏", "quēfá", "gebrek hebben aan, tekortschieten"], ["人才", "réncái", "talent, bekwame mensen"],
    ["参赛者", "cānsàizhě", "deelnemer (aan een wedstrijd)"], ["选手", "xuǎnshǒu", "sporter, deelnemer"], ["白手起家", "báishǒu qǐjiā", "met niets beginnen"],
    ["志愿者", "zhìyuànzhě", "vrijwilliger"], ["知名", "zhīmíng", "bekend, gerenommeerd"], ["招募", "zhāomù", "werven"], ["组委会", "zǔwěihuì", "organisatiecomité"]
  ],
  dialogue: [
    ["A", "这次招聘，来面试的人多吗？", "Zhè cì zhāopìn, lái miànshì de rén duō ma?", "Kwamen er bij deze vacature veel mensen op gesprek?"],
    ["B", "挺多的，有不少是名校毕业的。", "Tǐng duō de, yǒu bù shǎo shì míngxiào bìyè de.", "Best veel. Een flink aantal komt van een topuniversiteit."],
    ["A", "那给总部的报告怎么写？", "Nà gěi zǒngbù de bàogào zěnme xiě?", "Hoe schrijf je dat in het rapport voor het hoofdkantoor?"],
    ["B", "可以写：\"应聘者中不乏名校毕业生。\"", "Kěyǐ xiě: \"Yìngpìnzhě zhōng bùfá míngxiào bìyèshēng.\"", "Je kunt schrijven: \"Onder de sollicitanten zijn heel wat afgestudeerden van topuniversiteiten.\""],
    ["A", "不过他们大多缺乏工作经验吧？", "Búguò tāmen dàduō quēfá gōngzuò jīngyàn ba?", "Maar de meesten hebben toch weinig werkervaring?"],
    ["B", "对，所以我们还要好好培训。", "Duì, suǒyǐ wǒmen hái yào hǎohāo péixùn.", "Klopt, dus we moeten ze nog goed opleiden."]
  ],
  reading: {
    title: "城市马拉松",
    lines: [
      { cn: "本届城市马拉松将于下月举行，报名人数创下新高。", py: "Běn jiè chéngshì mǎlāsōng jiāng yú xià yuè jǔxíng, bàomíng rénshù chuàngxià xīn gāo.", nl: "De stadsmarathon van dit jaar wordt volgende maand gehouden, met een record aan inschrijvingen." },
      { cn: "据组委会介绍，共有三万多人报名参加。", py: "Jù zǔwěihuì jièshào, gòng yǒu sān wàn duō rén bàomíng cānjiā.", nl: "Volgens het organisatiecomité hebben meer dan dertigduizend mensen zich ingeschreven." },
      { cn: "参赛者中不乏来自海外的专业选手。", py: "Cānsàizhě zhōng bùfá láizì hǎiwài de zhuānyè xuǎnshǒu.", nl: "Onder de deelnemers zijn heel wat professionele lopers uit het buitenland." },
      { cn: "不过，大多数人是普通的跑步爱好者。", py: "Búguò, dàduōshù rén shì pǔtōng de pǎobù àihàozhě.", nl: "De meesten zijn echter gewone hardloopliefhebbers." },
      { cn: "其中年龄最大的已经七十八岁，最小的只有十八岁。", py: "Qízhōng niánlíng zuì dà de yǐjīng qīshíbā suì, zuì xiǎo de zhǐ yǒu shíbā suì.", nl: "De oudste is al achtenzeventig, de jongste pas achttien." },
      { cn: "此外，比赛还招募了两千名志愿者，其中不乏退休教师和在校大学生。", py: "Cǐwài, bǐsài hái zhāomùle liǎngqiān míng zhìyuànzhě, qízhōng bùfá tuìxiū jiàoshī hé zài xiào dàxuéshēng.", nl: "Daarnaast zijn er tweeduizend vrijwilligers geworven, onder wie heel wat gepensioneerde leraren en studenten." },
      { cn: "也有市民担心，比赛当天的交通管制会带来不便。", py: "Yě yǒu shìmín dānxīn, bǐsài dàngtiān de jiāotōng guǎnzhì huì dàilái búbiàn.", nl: "Sommige inwoners vrezen dat de verkeersmaatregelen op de wedstrijddag overlast geven." },
      { cn: "对此，组委会表示，已经制定了详细的出行方案。", py: "Duì cǐ, zǔwěihuì biǎoshì, yǐjīng zhìdìngle xiángxì de chūxíng fāng'àn.", nl: "Het comité zegt dat het daarvoor al een gedetailleerd vervoersplan heeft opgesteld." },
      { cn: "在网友的讨论中，不乏期待和赞美之声。", py: "Zài wǎngyǒu de tǎolùn zhōng, bùfá qīdài hé zànměi zhī shēng.", nl: "In de online discussies klinken veel verwachtingsvolle en lovende stemmen." }
    ],
    questions: [
      { type: "mc", q: "Wie zijn de meeste deelnemers?",
        options: ["Gewone hardloopliefhebbers.", "Professionele lopers uit het buitenland.", "Gepensioneerde leraren.", "Studenten."], answer: 0,
        why: ["Goed: 大多数人是普通的跑步爱好者.", "Die zijn er zeker (不乏), maar ze zijn niet de meerderheid.", "Gepensioneerde leraren worden genoemd bij de vrijwilligers.", "Studenten worden genoemd bij de vrijwilligers."] },
      { type: "mc", q: "Waar maken sommige inwoners zich zorgen over?",
        options: ["Verkeersoverlast op de wedstrijddag.", "Te weinig vrijwilligers.", "Te veel buitenlandse lopers.", "De leeftijd van de deelnemers."], answer: 0,
        why: ["Goed: 交通管制会带来不便.", "Er zijn tweeduizend vrijwilligers; daar is geen zorg over.", "Daar zegt de tekst niets negatiefs over.", "De leeftijden worden genoemd, maar niet als zorg."] },
      { type: "mc", q: "其中不乏退休教师和在校大学生。Wat betekent 不乏 hier?",
        options: ["Onder de vrijwilligers zijn heel wat gepensioneerde leraren en studenten.", "Onder de vrijwilligers zijn te weinig gepensioneerde leraren en studenten.", "Alle vrijwilligers zijn gepensioneerde leraren of studenten.", "Er zijn geen gepensioneerde leraren of studenten bij."], answer: 0,
        why: ["Goed: 其中不乏 = daaronder zijn er genoeg.", "\"Te weinig\" is 缺乏, het tegendeel.", "不乏 zegt niet \"allemaal\"; het zegt dat ze er zeker bij zijn.", "不 + 乏 betekent juist dat ze er wel zijn."] }
    ]
  },
  questions: [
    { type: "mc", q: "这家公司不乏优秀的工程师。Wat betekent dit?",
      options: ["Dit bedrijf heeft genoeg goede ingenieurs.", "Dit bedrijf heeft een gebrek aan goede ingenieurs.", "Dit bedrijf heeft geen enkele goede ingenieur.", "Dit bedrijf heeft alleen goede ingenieurs."], answer: 0,
      why: ["Goed: 不乏 = geen gebrek aan.", "Dat is 缺乏, het tegendeel.", "不乏 zegt juist dat ze er zijn.", "不乏 betekent niet \"alleen\"."] },
    { type: "mc", q: "由于___资金，这个项目被迫停止了。(Door geldgebrek moest het project stoppen.)",
      options: ["缺乏", "不乏", "不少", "不缺"], answer: 0,
      why: ["Goed: een tekort = 缺乏.", "不乏 = geen gebrek aan; dan stopt het project niet.", "不少资金 = best veel geld; dat is geen reden om te stoppen.", "不缺 = geen tekort aan; het tegendeel."] },
    { type: "order", q: "Zet in de goede volgorde: \"Onder de deelnemers zijn heel wat professionele sporters uit het buitenland.\"",
      tokens: [["参赛者中", "cānsàizhě zhōng"], ["不乏", "bùfá"], ["来自海外的", "láizì hǎiwài de"], ["专业选手", "zhuānyè xuǎnshǒu"]] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["这里有不乏人才。", "这里不乏人才。", "其中不乏好作品。", "参加者中不乏年轻人。"], answer: 0,
      why: ["Goed gezien: 不乏 is zelf het werkwoord; 有 ervoor is fout.", "Deze zin klopt: plaats + 不乏 + zelfstandig naamwoord.", "Deze zin klopt: 其中不乏 + zelfstandig naamwoord.", "Deze zin klopt: groep + 中 + 不乏."] },
    { type: "mc", q: "今天来的人中，有___是学生。(Onder de mensen die vandaag kwamen, waren best veel studenten.)",
      options: ["不少", "不乏", "缺乏", "不缺"], answer: 0,
      why: ["Goed: 有不少 + 是 = er zijn best veel die ... zijn.", "不乏 staat nooit na 有, en neemt geen 是 erachter.", "缺乏 = gebrek aan; dat past niet na 有.", "不缺 is een werkwoord; 有不缺是 is geen correcte zin."] },
    { type: "mc", q: "Welke zin zeg je in een gewoon gesprek voor 我们公司不乏人才？",
      options: ["我们公司不缺人才。", "我们公司缺人才。", "我们公司没什么人才。", "我们公司缺乏人才。"], answer: 0,
      why: ["Goed: 不缺 = heeft genoeg; gewone spreektaal.", "缺人才 = heeft talent nodig: het tegendeel.", "没什么人才 = bijna geen talent: het tegendeel.", "缺乏人才 = gebrek aan talent: het tegendeel, en ook formeel."] },
    { type: "fill", q: "申请者中___名校毕业生。(Onder de aanvragers zijn heel wat afgestudeerden van topuniversiteiten.)", answers: ["不乏", "有不少"],
      hint: "Welk formeel werkwoord betekent \"er is geen gebrek aan\"?", why: "Groep + 中 + 不乏 + zelfstandig naamwoord. In spreektaal kan ook 有不少." },
    { type: "mc", q: "这些建议中不乏好主意。Wat betekent dit?",
      options: ["Er zitten best wat goede ideeën tussen deze voorstellen.", "Alle voorstellen zijn goede ideeën.", "Er zit geen enkel goed idee tussen.", "Er zitten te weinig goede ideeën tussen."], answer: 0,
      why: ["Goed: X中不乏 Y = er zit zeker Y tussen.", "不乏 zegt niet \"allemaal\".", "不乏 zegt juist dat ze er zijn.", "\"Te weinig\" is 缺乏."] },
    { type: "order", q: "Zet in de goede volgorde: \"In de online reacties zitten heel wat waardevolle meningen.\"",
      tokens: [["网上的评论中", "wǎngshàng de pínglùn zhōng"], ["不乏", "bùfá"], ["有价值的", "yǒu jiàzhí de"], ["意见", "yìjiàn"]] },
    { type: "mc", q: "本次展会的参观者中___业内专家。(Onder de bezoekers van deze beurs zijn heel wat vakexperts.)",
      options: ["不乏", "缺乏", "不少", "很多"], answer: 0,
      why: ["Goed: groep + 中 + 不乏 + zelfstandig naamwoord.", "缺乏 = gebrek aan: het tegendeel.", "不少 heeft hier 有 of 是 nodig: 中有不少 / 中不少是.", "很多 is geen werkwoord; je hebt 有 nodig: 中有很多."] },
    { type: "open", q: "Vertaal in formeel Chinees: \"Onder de vrijwilligers zijn heel wat gepensioneerde leraren.\"",
      model: ["志愿者中不乏退休教师。", "在志愿者当中，不乏退休的老师。"],
      tip: "Check: groep + 中 + 不乏; geen 有 vóór 不乏." },
    { type: "open", q: "Zeg dit in gewone spreektaal: 这座城市不乏好餐厅。",
      model: ["这座城市有不少好餐厅。", "这个城市不缺好餐厅。"],
      tip: "Check: 有不少 of 不缺; de betekenis blijft \"genoeg\"." }
  ],
  review: [
    { type: "mc", q: "这次比赛的观众中不乏外国游客。Wat betekent dit?",
      options: ["Onder het publiek zijn heel wat buitenlandse toeristen.", "Onder het publiek zijn te weinig buitenlandse toeristen.", "Het publiek bestaat alleen uit buitenlandse toeristen.", "Er zijn geen buitenlandse toeristen in het publiek."], answer: 0,
      why: ["Goed: 不乏 = er zijn er zeker.", "\"Te weinig\" is 缺乏.", "不乏 betekent niet \"alleen\".", "不 + 乏 betekent dat ze er juist wel zijn."] },
    { type: "mc", q: "这个团队___经验，所以犯了不少错误。(Dit team heeft te weinig ervaring en maakte daardoor veel fouten.)",
      options: ["缺乏", "不乏", "不少", "不缺"], answer: 0,
      why: ["Goed: te weinig = 缺乏.", "不乏 = genoeg; dat past niet bij fouten maken.", "不少经验 zonder 有 is geen zin, en de betekenis klopt niet.", "不缺 = genoeg: het tegendeel."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["他们公司有不乏年轻人。", "他们公司不乏年轻人。", "他们公司有不少年轻人。", "他们公司不缺年轻人。"], answer: 0,
      why: ["Goed gezien: 不乏 is zelf het werkwoord; zonder 有.", "Deze zin klopt: formeel.", "Deze zin klopt: 有不少 + zelfstandig naamwoord.", "Deze zin klopt: spreektaal."] }
  ]
})
