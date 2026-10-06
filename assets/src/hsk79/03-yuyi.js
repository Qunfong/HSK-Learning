({
  id: "03", slug: "yuyi", title: "予以", sub: "Formeel: verlenen, toepassen",
  canDo: "Je kunt nu in regels en officiële brieven zeggen dat een instantie iets goedkeurt, steunt of bestraft, met 予以 en 不予.",
  guess: {
    q: "对违反规定的人，学校将予以处罚。Wat betekent dit, denk je?",
    options: ["Wie de regels overtreedt, krijgt van de school een straf.", "Wie de regels overtreedt, krijgt van de school hulp.", "De school overtreedt de regels en krijgt een straf.", "De school schaft de straf voor overtreders af."], answer: 0,
    why: ["Goed: 予以 + 处罚 = een straf opleggen.", "处罚 betekent straf, niet hulp.", "De school geeft de straf; zij krijgt hem niet.", "予以 betekent toepassen, niet afschaffen."]
  },
  problem: "In regels en officiële brieven zeg je niet 给他们罚款. Je zegt dat een instantie een maatregel toepast. Daarvoor is 予以 (yǔyǐ): \"verlenen, toepassen\". Erna komt een werkwoord van twee lettergrepen, zoals 支持, 批准 of 处罚.",
  pattern: [
    { l: "wie", v: "政府", c: 1 }, { l: "zal", v: "将", c: 3 }, { l: "予以", v: "予以", c: 2, key: true }, { l: "handeling", v: "支持", c: 4 }
  ],
  patternCap: "(对 + wie,) instantie + 予以 + werkwoord van twee lettergrepen: 予以批准, 予以支持, 予以处罚, 予以表扬 · ontkennen: 不予 · met object: 给予 + wie + iets · spreektaal: gewoon 支持, 批准, 罚",
  rules: [
    "Na 予以 komt een werkwoord van twee lettergrepen, soms met een bijwoord ervoor (大力支持). Er komt geen object achter.",
    "Wie het krijgt, noem je vóór 予以, vaak met 对: 对优秀员工予以表扬。",
    "Het is zeer formeel: wetten, regels, besluiten. In gesprek zeg je gewoon 支持 of 批准.",
    "Ontkennen doe je met 不予: 不予批准, 不予受理."
  ],
  pitfall: "Zet geen object achter het werkwoord: 予以支持他们 is fout. Zeg: 对他们予以支持。",
  examples: [
    { cn: "对违反规定的行为，公司将予以处罚。", py: "Duì wéifǎn guīdìng de xíngwéi, gōngsī jiāng yǔyǐ chǔfá.", nl: "Overtredingen van de regels worden door het bedrijf bestraft." },
    { cn: "政府对中小企业予以大力支持。", py: "Zhèngfǔ duì zhōngxiǎo qǐyè yǔyǐ dàlì zhīchí.", nl: "De overheid steunt het mkb krachtig." },
    { cn: "您的申请已予以批准。", py: "Nín de shēnqǐng yǐ yǔyǐ pīzhǔn.", nl: "Uw aanvraag is goedgekeurd." },
    { cn: "材料不全的申请，一律不予受理。", py: "Cáiliào bù quán de shēnqǐng, yílǜ bù yǔ shòulǐ.", nl: "Aanvragen met onvolledige stukken worden niet in behandeling genomen." }
  ],
  nuance: [
    { h: "予以 of 给予?",
      p: "Beide zijn formeel en betekenen \"verlenen\". Na 予以 komt alleen een werkwoord, zonder object. De ontvanger staat ervóór met 对. 给予 (jǐyǔ) kan wel een ontvanger en een zelfstandig naamwoord achter zich hebben. Wil je de ontvanger ná het werkwoord noemen? Kies dan 给予.",
      ex: [
        { cn: "政府对受灾家庭予以帮助。", py: "Zhèngfǔ duì shòuzāi jiātíng yǔyǐ bāngzhù.", nl: "De overheid helpt de getroffen gezinnen." },
        { cn: "政府给予受灾家庭经济帮助。", py: "Zhèngfǔ jǐyǔ shòuzāi jiātíng jīngjì bāngzhù.", nl: "De overheid geeft de getroffen gezinnen financiële hulp." }
      ] },
    { h: "予以 of 加以?",
      p: "Ook 加以 (jiāyǐ) staat vóór een werkwoord van twee lettergrepen. 加以 betekent: een handeling uitvoeren op iets wat al genoemd is, zoals een probleem. Denk aan 加以分析, 加以改进, 加以说明. 予以 gaat meer over iets wat een instantie verleent of oplegt: goedkeuring, steun, straf.",
      ex: [
        { cn: "对存在的问题，我们会认真加以改进。", py: "Duì cúnzài de wèntí, wǒmen huì rènzhēn jiāyǐ gǎijìn.", nl: "De bestaande problemen zullen wij zorgvuldig verbeteren." },
        { cn: "对表现突出的员工，公司予以奖励。", py: "Duì biǎoxiàn tūchū de yuángōng, gōngsī yǔyǐ jiǎnglì.", nl: "Werknemers met uitstekende prestaties krijgen een beloning van het bedrijf." }
      ] },
    { h: "Spreektaal: laat 予以 weg",
      p: "In een gesprek klinkt 予以 als een wettekst. Gebruik dan gewoon het werkwoord zelf, met een object erachter. 不予批准 wordt 不批准 of 没批. 予以罚款 wordt 罚款 of 罚钱.",
      ex: [
        { cn: "老板批准了我的假。", py: "Lǎobǎn pīzhǔnle wǒ de jià.", nl: "Mijn baas heeft mijn verlof goedgekeurd." },
        { cn: "他乱停车，被罚了两百块。", py: "Tā luàn tíngchē, bèi fále liǎngbǎi kuài.", nl: "Hij parkeerde fout en kreeg tweehonderd yuan boete." }
      ] }
  ],
  mistakes: [
    { wrong: "政府予以支持这些项目。", right: "政府对这些项目予以支持。", why: "Na 予以 + werkwoord komt geen object. Zet de ontvanger met 对 vóór 予以." },
    { wrong: "您的申请没予批准。", right: "您的申请不予批准。", why: "De vaste ontkenning is 不予, ook als het besluit al genomen is." },
    { wrong: "政府予以受灾家庭经济帮助。", right: "政府给予受灾家庭经济帮助。", why: "Met een ontvanger en een zelfstandig naamwoord erachter gebruik je 给予, niet 予以." },
    { wrong: "对迟到的学生，学校予以骂。", right: "对迟到的学生，学校予以批评。", why: "Na 予以 komt een formeel werkwoord van twee lettergrepen. 骂 is kort en informeel." }
  ],
  vocab: [
    ["予以", "yǔyǐ", "verlenen, toepassen (formeel)"], ["不予", "bù yǔ", "niet verlenen (formeel)"], ["处罚", "chǔfá", "bestraffen"],
    ["违反", "wéifǎn", "overtreden"], ["批准", "pīzhǔn", "goedkeuren"], ["受理", "shòulǐ", "in behandeling nemen"],
    ["一律", "yílǜ", "zonder uitzondering"], ["依法", "yīfǎ", "volgens de wet"], ["赔偿", "péicháng", "schadevergoeding"], ["警告", "jǐnggào", "waarschuwen, waarschuwing"]
  ],
  dialogue: [
    ["记者", "对于这次食品安全问题，政府会怎么处理？", "Duìyú zhè cì shípǐn ānquán wèntí, zhèngfǔ huì zěnme chǔlǐ?", "Hoe gaat de overheid om met dit voedselveiligheidsprobleem?"],
    ["发言人", "我们高度关注此事。对违法企业，将依法予以处罚。", "Wǒmen gāodù guānzhù cǐ shì. Duì wéifǎ qǐyè, jiāng yīfǎ yǔyǐ chǔfá.", "Wij volgen deze zaak nauwlettend. Bedrijven die de wet overtreden, worden volgens de wet bestraft."],
    ["记者", "受影响的消费者能得到赔偿吗？", "Shòu yǐngxiǎng de xiāofèizhě néng dédào péicháng ma?", "Krijgen de getroffen consumenten een vergoeding?"],
    ["发言人", "符合条件的申请，我们都会予以受理。", "Fúhé tiáojiàn de shēnqǐng, wǒmen dōu huì yǔyǐ shòulǐ.", "Aanvragen die aan de voorwaarden voldoen, nemen wij allemaal in behandeling."]
  ],
  reading: {
    title: "共享单车停放规定",
    lines: [
      { cn: "为规范共享单车停放，市交通局发布了新规定。", py: "Wèi guīfàn gòngxiǎng dānchē tíngfàng, shì jiāotōngjú fābùle xīn guīdìng.", nl: "Om het parkeren van deelfietsen te regelen, heeft het stedelijk verkeersbureau nieuwe regels uitgevaardigd." },
      { cn: "规定要求，单车必须停放在指定区域内。", py: "Guīdìng yāoqiú, dānchē bìxū tíngfàng zài zhǐdìng qūyù nèi.", nl: "Volgens de regels moeten de fietsen in aangewezen zones staan." },
      { cn: "对乱停乱放的用户，平台将予以警告。", py: "Duì luàn tíng luàn fàng de yònghù, píngtái jiāng yǔyǐ jǐnggào.", nl: "Gebruikers die hun fiets overal neerzetten, krijgen een waarschuwing van het platform." },
      { cn: "三次警告后仍不改正的，将予以罚款。", py: "Sān cì jǐnggào hòu réng bù gǎizhèng de, jiāng yǔyǐ fákuǎn.", nl: "Wie na drie waarschuwingen niets verandert, krijgt een boete." },
      { cn: "对长期规范停车的用户，平台将予以奖励，例如免费骑行券。", py: "Duì chángqī guīfàn tíngchē de yònghù, píngtái jiāng yǔyǐ jiǎnglì, lìrú miǎnfèi qíxíng quàn.", nl: "Gebruikers die steeds netjes parkeren, krijgen een beloning, zoals bonnen voor gratis ritten." },
      { cn: "同时，市民发现问题可以通过热线举报。", py: "Tóngshí, shìmín fāxiàn wèntí kěyǐ tōngguò rèxiàn jǔbào.", nl: "Inwoners die een probleem zien, kunnen het ook via een meldlijn melden." },
      { cn: "对没有证据的举报，有关部门不予处理。", py: "Duì méiyǒu zhèngjù de jǔbào, yǒuguān bùmén bù yǔ chǔlǐ.", nl: "Meldingen zonder bewijs worden door de betrokken afdeling niet behandeld." },
      { cn: "新规定自下月一日起施行。", py: "Xīn guīdìng zì xià yuè yī rì qǐ shīxíng.", nl: "De nieuwe regels gelden vanaf de eerste van volgende maand." }
    ],
    questions: [
      { type: "mc", q: "Wat gebeurt er als iemand na drie waarschuwingen nog steeds fout parkeert?",
        options: ["Hij krijgt een boete.", "Hij krijgt nog een waarschuwing.", "Hij mag geen deelfiets meer gebruiken.", "Zijn melding wordt niet behandeld."], answer: 0,
        why: ["Goed: 三次警告后仍不改正的，将予以罚款.", "Na drie waarschuwingen komt er geen vierde, maar een boete.", "Over een verbod staat niets in de tekst.", "不予处理 gaat over meldingen zonder bewijs, niet over parkeren."] },
      { type: "mc", q: "Wat krijgen gebruikers die steeds netjes parkeren?",
        options: ["Een beloning, zoals bonnen voor gratis ritten.", "Een waarschuwing.", "Een eigen parkeerplaats.", "Geld terug van het verkeersbureau."], answer: 0,
        why: ["Goed: 予以奖励，例如免费骑行券.", "Een waarschuwing is voor wie fout parkeert.", "Over een eigen parkeerplaats staat niets in de tekst.", "De beloning komt van het platform, en het zijn ritbonnen, geen geld."] },
      { type: "mc", q: "对没有证据的举报，有关部门不予处理。Wat betekent 不予处理?",
        options: ["De afdeling behandelt deze meldingen niet.", "De afdeling behandelt deze meldingen meteen.", "De afdeling bestraft wie zo'n melding doet.", "De afdeling heeft deze meldingen nog niet behandeld."], answer: 0,
        why: ["Goed: 不予 + werkwoord = (als besluit) niet doen.", "不予 is een ontkenning: het is juist \"niet\".", "处理 is behandelen, niet bestraffen.", "不予 is een vast besluit, geen \"nog niet\" zoals 还没."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"De overheid steunt deze projecten.\" (officieel)",
      options: ["政府对这些项目予以支持。", "政府予以支持这些项目。", "政府对这些项目支持予以。", "政府对这些项目不予支持。"], answer: 0,
      why: ["Goed: 对 + wie, dan 予以 + werkwoord.", "Na 予以 + werkwoord komt geen object.", "予以 staat vóór het werkwoord.", "不予 betekent juist \"niet\": dat is het omgekeerde."] },
    { type: "mc", q: "Een brief: \"Uw aanvraag wordt niet goedgekeurd.\" 您的申请___批准。",
      options: ["不予", "予以", "别予", "没予"], answer: 0,
      why: ["Goed: 不予批准 = niet goedkeuren.", "予以批准 betekent juist wél goedkeuren.", "别 is een verbod (\"doe niet\"), geen besluit.", "De vaste ontkenning bij 予 is 不, niet 没."] },
    { type: "order", q: "Zet in de goede volgorde: \"Het bedrijf prijst uitstekende werknemers.\"",
      tokens: [["公司对", "gōngsī duì"], ["表现", "biǎoxiàn"], ["优秀的员工", "yōuxiù de yuángōng"], ["予以", "yǔyǐ"], ["表扬", "biǎoyáng"]] },
    { type: "mc", q: "Welke zin klopt?",
      options: ["对迟到的学生，学校予以批评。", "对迟到的学生，学校予以批评他们。", "对迟到的学生，学校予以骂。", "学校予以对迟到的学生批评。"], answer: 0,
      why: ["Goed: wie het krijgt staat vooraan, na 予以 alleen het werkwoord.", "Na 予以 + werkwoord komt geen object.", "Na 予以 komt een formeel werkwoord van twee lettergrepen, niet 骂.", "Het deel met 对 staat vóór 予以."] },
    { type: "mc", q: "\"De overheid geeft de getroffen gezinnen financiële hulp.\"",
      options: ["政府给予受灾家庭经济帮助。", "政府予以受灾家庭经济帮助。", "政府给予经济帮助受灾家庭。", "受灾家庭给予政府经济帮助。"], answer: 0,
      why: ["Goed: 给予 + ontvanger + wat je geeft.", "予以 neemt geen ontvanger en geen zelfstandig naamwoord achter zich. Daarvoor is 给予.", "Na 给予 komt eerst de ontvanger, dan wat je geeft.", "Nu geven de gezinnen geld aan de overheid: de rollen zijn omgedraaid."] },
    { type: "mc", q: "Je vertelt een collega: \"Mijn baas heeft mijn verlof goedgekeurd.\" Welke zin is het natuurlijkst?",
      options: ["老板批准了我的假。", "老板对我的假予以批准了。", "老板予以批准我的假。", "老板不予批准我的假。"], answer: 0,
      why: ["Goed: in gesprek gebruik je gewoon 批准 met een object.", "予以 is voor wetten en officiële brieven. Tegen een collega klinkt dat stijf.", "Na 予以 + werkwoord komt geen object, en het is te formeel.", "不予 betekent \"niet\": het verlof is dan afgewezen."] },
    { type: "mc", q: "对于存在的问题，我们会及时___解决。(De bestaande problemen zullen we snel oplossen.)",
      options: ["加以", "不予", "以为", "鉴于"], answer: 0,
      why: ["Goed: 加以 + werkwoord = een handeling uitvoeren op iets wat al genoemd is.", "不予 betekent \"niet\": dan los je de problemen juist niet op.", "以为 betekent \"(ten onrechte) denken\".", "鉴于 betekent \"gezien\" en staat vóór een feit, niet vóór een werkwoord."] },
    { type: "order", q: "Zet in de goede volgorde: \"Uw aanvraag is al goedgekeurd.\"",
      tokens: [["您的申请", "nín de shēnqǐng"], ["已", "yǐ"], ["予以", "yǔyǐ"], ["批准", "pīzhǔn"]] },
    { type: "fill", q: "符合条件的申请，我们将___批准。(Aanvragen die aan de voorwaarden voldoen, keuren wij goed.)", answers: ["予以", "给予"],
      hint: "Welk formeel woord van twee tekens staat vóór 批准?", why: "予以批准 = goedkeuren (formeel). Ook 给予批准 kan." },
    { type: "open", q: "Schrijf een officiële regel: \"Wie te laat betaalt, krijgt een boete.\"",
      model: ["对逾期付款的人，将予以罚款。", "逾期付款者，一律予以罚款。"],
      tip: "Check: wie het krijgt staat vóór 予以, en na 予以 komt alleen een werkwoord van twee lettergrepen." },
    { type: "open", q: "Vertaal (officieel): \"De gemeente steunt deze activiteit krachtig.\"",
      model: ["市政府对这项活动予以大力支持。", "市政府对此次活动予以大力支持。"],
      tip: "Check: 对 + activiteit vóór 予以, en 大力支持 aan het eind, zonder object erachter." }
  ],
  review: [
    { type: "mc", q: "\"De school prijst deze leerlingen.\" (officieel bericht)",
      options: ["学校对这些学生予以表扬。", "学校予以表扬这些学生。", "学校对这些学生表扬予以。", "学校对这些学生不予表扬。"], answer: 0,
      why: ["Goed.", "Na 予以 + werkwoord komt geen object.", "予以 staat vóór het werkwoord.", "不予 betekent \"niet\": dat is het omgekeerde."] },
    { type: "mc", q: "Een regel: \"Te late aanvragen worden niet in behandeling genomen.\" 逾期的申请一律___受理。",
      options: ["不予", "予以", "别予", "没予"], answer: 0,
      why: ["Goed: 不予受理 = niet in behandeling nemen.", "予以受理 betekent juist wél in behandeling nemen.", "别 is een verbod, geen regel van een instantie.", "De vaste ontkenning bij 予 is 不, niet 没."] },
    { type: "mc", q: "Een wettekst: \"Overtreders worden volgens de wet bestraft.\" 对违法者，将依法___处罚。",
      options: ["予以", "不予", "以为", "鉴于"], answer: 0,
      why: ["Goed: 予以处罚 = een straf opleggen.", "不予处罚 betekent juist dat er géén straf komt.", "以为 betekent \"(ten onrechte) denken\".", "鉴于 betekent \"gezien\" en staat vóór een feit."] }
  ]
})
