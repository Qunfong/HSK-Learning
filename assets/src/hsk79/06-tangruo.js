({
  id: "06", slug: "tangruo", title: "倘若 ... 便/就", sub: "Formeel: indien ..., dan ...",
  canDo: "Je kunt nu in contracten en regels een voorwaarde en gevolg formuleren met 倘若……便/就, en je weet dat je in gesprek 如果……就 zegt.",
  guess: {
    q: "倘若明天下雨，比赛便取消。Wat betekent dit, denk je?",
    options: ["Indien het morgen regent, gaat de wedstrijd niet door.", "Omdat het morgen regent, gaat de wedstrijd niet door.", "Hoewel het morgen regent, gaat de wedstrijd gewoon door.", "Ook als het morgen regent, gaat de wedstrijd gewoon door."], answer: 0,
    why: ["Goed: 倘若 = indien. 便 = dan.", "倘若 is een voorwaarde, geen zekere reden zoals 因为.", "倘若 is geen tegenstelling zoals 虽然.", "\"Ook als\" zou 即使 ... 也 zijn."]
  },
  problem: "In contracten en regels beschrijf je wat er gebeurt in een bepaald geval. In gesprek zeg je 如果 ... 就. In schrijftaal zeg je 倘若 (tǎngruò) ... 便 (biàn) of 就. 便 is de formele vorm van 就.",
  pattern: [
    { l: "indien", v: "倘若", c: 2, key: true }, { l: "voorwaarde", v: "对方违约", c: 3 }, { l: "wie", v: "本公司", c: 1 },
    { l: "dan", v: "便", c: 2, key: true }, { l: "gevolg", v: "有权终止合同", c: 5 }
  ],
  patternCap: "倘若 + voorwaarde，(wie) + 便/就 + gevolg · korter en ook formeel: 若 ... 便/则 · spreektaal: 如果……就 / 要是……就",
  rules: [
    "倘若 staat aan het begin van de voorwaarde, of direct na het onderwerp: 企业倘若违规, ...",
    "便 of 就 staat in het tweede deel, na het onderwerp en vóór het werkwoord.",
    "便 is formeler dan 就. In schrijftaal passen beide.",
    "Is het tweede deel een verzoek met 请, dan valt 便 weg: 倘若发现问题，请立即报告。",
    "In gesprek zeg je 如果 ... 就 of 要是 ... 就."
  ],
  pitfall: "便 en 就 staan nooit vóór het onderwerp. 倘若你同意，便我们签合同 is fout. Zeg: 倘若你同意，我们便签合同。",
  examples: [
    { cn: "倘若对方违约，本公司便有权终止合同。", py: "Tǎngruò duìfāng wéiyuē, běn gōngsī biàn yǒu quán zhōngzhǐ hétong.", nl: "Indien de wederpartij het contract schendt, heeft ons bedrijf het recht het contract te beëindigen." },
    { cn: "倘若发现问题，请立即报告。", py: "Tǎngruò fāxiàn wèntí, qǐng lìjí bàogào.", nl: "Indien u een probleem ontdekt, meld het dan onmiddellijk." },
    { cn: "倘若没有大家的支持，这个项目就不可能完成。", py: "Tǎngruò méiyǒu dàjiā de zhīchí, zhège xiàngmù jiù bù kěnéng wánchéng.", nl: "Zonder de steun van iedereen kan dit project niet worden voltooid." },
    { cn: "倘若天气良好，活动便在室外举行。", py: "Tǎngruò tiānqì liánghǎo, huódòng biàn zài shìwài jǔxíng.", nl: "Indien het weer goed is, vindt de activiteit buiten plaats." }
  ],
  nuance: [
    { h: "倘若, 如果, 假如 of 若?",
      p: "如果 past overal, in gesprek en in tekst. 倘若 is schrijftaal: contracten, regels, essays. 若 is nog korter en zie je vaak in mededelingen en reglementen, soms met 则 in plaats van 便. 假如 legt de nadruk op een bedachte situatie, vaak iets wat niet echt zo is. Je hoort het ook in gesprek, bijvoorbeeld 假如我是你.",
      ex: [
        { cn: "若有疑问，请致电本中心。", py: "Ruò yǒu yíwèn, qǐng zhìdiàn běn zhōngxīn.", nl: "Bij vragen kunt u ons centrum bellen." },
        { cn: "假如时间可以倒流，我会选择另一条路。", py: "Jiǎrú shíjiān kěyǐ dàoliú, wǒ huì xuǎnzé lìng yì tiáo lù.", nl: "Als de tijd terug kon, zou ik een andere weg kiezen." }
      ] },
    { h: "便 of 就?",
      p: "Na een voorwaarde betekenen 便 en 就 allebei \"dan\". 便 hoort bij schrijftaal. 就 kan in tekst en in gesprek. In een gesprek klinkt 便 stijf, dus daar zeg je 就. Ook de combinatie telt: 倘若 past bij 便, 要是 past bij 就.",
      ex: [
        { cn: "倘若条件成熟，双方便可签约。", py: "Tǎngruò tiáojiàn chéngshú, shuāngfāng biàn kě qiānyuē.", nl: "Indien de omstandigheden gunstig zijn, kunnen beide partijen tekenen." },
        { cn: "要是你有空，我们就一起去吧。", py: "Yàoshi nǐ yǒu kòng, wǒmen jiù yìqǐ qù ba.", nl: "Als je tijd hebt, gaan we samen." }
      ] },
    { h: "Niet voor een echte reden of voor \"zelfs als\"",
      p: "倘若 noemt een mogelijk geval. Is iets echt gebeurd, dan gebruik je 因为 of 由于. Gebeurt het gevolg hoe dan ook, dan is het \"zelfs als\": 即使 ... 也. 倘若 combineer je dus niet met 所以 of 也.",
      ex: [
        { cn: "即使下雨，比赛也照常进行。", py: "Jíshǐ xià yǔ, bǐsài yě zhàocháng jìnxíng.", nl: "Zelfs als het regent, gaat de wedstrijd gewoon door." }
      ] }
  ],
  mistakes: [
    { wrong: "倘若你同意，便我们签合同。", right: "倘若你同意，我们便签合同。", why: "便 staat na het onderwerp, direct vóór het werkwoord." },
    { wrong: "倘若下雨，比赛也照常进行。", right: "即使下雨，比赛也照常进行。", why: "\"Zelfs als\" is 即使 ... 也. 倘若 vraagt om 便 of 就." },
    { wrong: "倘若今天下雨，所以比赛取消了。", right: "因为今天下雨，所以比赛取消了。", why: "Het regent echt: dat is een reden, geen voorwaarde. Gebruik 因为 ... 所以." },
    { wrong: "妈妈，倘若明天下雨，我们便不去公园了吧？", right: "妈妈，要是明天下雨，我们就不去公园了吧？", why: "倘若 ... 便 is schrijftaal. Thuis zeg je 要是 ... 就 of 如果 ... 就." }
  ],
  vocab: [
    ["倘若", "tǎngruò", "(indien, formeel)"], ["便", "biàn", "(dan, formeel voor 就)"], ["违约", "wéiyuē", "het contract schenden"],
    ["终止", "zhōngzhǐ", "beëindigen"], ["合同", "hétong", "contract"], ["对方", "duìfāng", "wederpartij"],
    ["交货", "jiāohuò", "leveren"], ["延迟", "yánchí", "vertraging"], ["条款", "tiáokuǎn", "clausule"], ["支付", "zhīfù", "betalen"]
  ],
  dialogue: [
    ["律师", "合同第五条写得很清楚。", "Hétong dì wǔ tiáo xiě de hěn qīngchu.", "Artikel vijf van het contract is heel duidelijk."],
    ["客户", "倘若对方没有按时交货，我们怎么办？", "Tǎngruò duìfāng méiyǒu ànshí jiāohuò, wǒmen zěnme bàn?", "Wat doen we als de wederpartij niet op tijd levert?"],
    ["律师", "倘若延迟超过三十天，贵公司便有权终止合同。", "Tǎngruò yánchí chāoguò sānshí tiān, guì gōngsī biàn yǒu quán zhōngzhǐ hétong.", "Indien de vertraging meer dan dertig dagen is, heeft uw bedrijf het recht het contract te beëindigen."],
    ["客户", "那损失呢？", "Nà sǔnshī ne?", "En de schade?"],
    ["律师", "根据这一条款，对方还须支付赔偿。", "Gēnjù zhè yī tiáokuǎn, duìfāng hái xū zhīfù péicháng.", "Volgens deze clausule moet de wederpartij ook een vergoeding betalen."],
    ["客户", "好。倘若没有其他问题，我们就签字吧。", "Hǎo. Tǎngruò méiyǒu qítā wèntí, wǒmen jiù qiānzì ba.", "Goed. Als er verder geen vragen zijn, laten we tekenen."]
  ],
  reading: {
    title: "租房合同须知",
    lines: [
      { cn: "签订租房合同之前，租客应仔细阅读以下条款。", py: "Qiāndìng zūfáng hétong zhīqián, zūkè yīng zǐxì yuèdú yǐxià tiáokuǎn.", nl: "Vóór het tekenen van een huurcontract moet de huurder de volgende clausules goed lezen." },
      { cn: "房租须于每月五日前支付。", py: "Fángzū xū yú měi yuè wǔ rì qián zhīfù.", nl: "De huur moet vóór de vijfde van elke maand betaald worden." },
      { cn: "倘若租客逾期十日仍未付款，房东便有权终止合同。", py: "Tǎngruò zūkè yúqī shí rì réng wèi fùkuǎn, fángdōng biàn yǒu quán zhōngzhǐ hétong.", nl: "Indien de huurder na tien dagen nog niet betaald heeft, heeft de verhuurder het recht het contract te beëindigen." },
      { cn: "倘若房屋设施因正常使用而损坏，维修费用由房东承担。", py: "Tǎngruò fángwū shèshī yīn zhèngcháng shǐyòng ér sǔnhuài, wéixiū fèiyòng yóu fángdōng chéngdān.", nl: "Indien voorzieningen in de woning kapotgaan door normaal gebruik, betaalt de verhuurder de reparatie." },
      { cn: "倘若损坏是租客造成的，租客便须承担全部费用。", py: "Tǎngruò sǔnhuài shì zūkè zàochéng de, zūkè biàn xū chéngdān quánbù fèiyòng.", nl: "Indien de huurder de schade heeft veroorzaakt, moet de huurder alle kosten dragen." },
      { cn: "合同期满后，若双方均无异议，合同便自动续签一年。", py: "Hétong qīmǎn hòu, ruò shuāngfāng jūn wú yìyì, hétong biàn zìdòng xùqiān yì nián.", nl: "Na afloop van het contract wordt het automatisch met een jaar verlengd, indien geen van beide partijen bezwaar heeft." },
      { cn: "若租客需提前退租，应提前一个月书面通知房东。", py: "Ruò zūkè xū tíqián tuìzū, yīng tíqián yí ge yuè shūmiàn tōngzhī fángdōng.", nl: "Indien de huurder eerder wil vertrekken, moet hij de verhuurder een maand vooraf schriftelijk inlichten." },
      { cn: "倘若对以上条款有疑问，请在签字前提出。", py: "Tǎngruò duì yǐshàng tiáokuǎn yǒu yíwèn, qǐng zài qiānzì qián tíchū.", nl: "Indien u vragen heeft over deze clausules, stel ze dan vóór het tekenen." }
    ],
    questions: [
      { type: "mc", q: "Wie betaalt de reparatie als iets kapotgaat door normaal gebruik?",
        options: ["De verhuurder.", "De huurder.", "De huurder en de verhuurder samen.", "Niemand: dat staat niet in het contract."], answer: 0,
        why: ["Goed: 维修费用由房东承担.", "De huurder betaalt alleen als hij de schade zelf veroorzaakt.", "Over samen betalen staat niets in de tekst.", "Het staat er wel: 由房东承担."] },
      { type: "mc", q: "Wat gebeurt er na afloop als niemand bezwaar heeft?",
        options: ["Het contract wordt automatisch met een jaar verlengd.", "Het contract stopt automatisch.", "De huurder moet een maand vooraf opzeggen.", "De huur gaat omhoog."], answer: 0,
        why: ["Goed: 若双方均无异议，合同便自动续签一年.", "Zonder bezwaar loopt het contract juist door.", "Die maand gaat over eerder vertrekken, niet over verlengen.", "Over een hogere huur staat niets in de tekst."] },
      { type: "mc", q: "倘若租客逾期十日仍未付款，房东便有权终止合同。Wat drukt 倘若 ... 便 hier uit?",
        options: ["Een mogelijk geval en wat er dan gebeurt.", "Dat de huurder te laat heeft betaald.", "Dat de verhuurder het contract al heeft beëindigd.", "Dat het contract hoe dan ook stopt."], answer: 0,
        why: ["Goed: 倘若 = indien, 便 = dan. Het is een regel voor een mogelijk geval.", "倘若 noemt geen feit: de huurder heeft (nog) niet te laat betaald.", "有权 betekent \"heeft het recht\". Er is nog niets beëindigd.", "\"Hoe dan ook\" zou 无论 of 即使 zijn."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Indien de klant het product terugstuurt, betaalt het bedrijf het geld terug.\"",
      options: ["倘若顾客退货，公司便退款。", "倘若顾客退货，便公司退款。", "倘若顾客退货，公司退款便。", "即使顾客退货，公司便退款。"], answer: 0,
      why: ["Goed: 倘若 + voorwaarde, dan onderwerp + 便.", "便 staat na het onderwerp, niet ervoor.", "便 staat vóór het werkwoord, niet achteraan.", "即使 betekent \"zelfs als\" en vraagt om 也."] },
    { type: "mc", q: "Welk woord is de spreektaal-variant van 倘若?",
      options: ["如果", "因为", "虽然", "即使"], answer: 0,
      why: ["Goed: 如果 = als, indien.", "因为 geeft een reden, geen voorwaarde.", "虽然 betekent \"hoewel\".", "即使 betekent \"zelfs als\"."] },
    { type: "order", q: "Zet in de goede volgorde: \"Indien het weer goed is, wordt de ceremonie buiten gehouden.\"",
      tokens: [["倘若", "tǎngruò"], ["天气好", "tiānqì hǎo"], ["典礼", "diǎnlǐ"], ["便", "biàn"], ["在室外举行", "zài shìwài jǔxíng"]] },
    { type: "mc", q: "倘若资金不足，项目___无法继续。",
      options: ["便", "才", "而", "却"], answer: 0,
      why: ["Goed: 倘若 ... 便 = indien ..., dan.", "才 (\"pas dan\") hoort bij 只有 of 唯有, niet bij 倘若.", "而 verbindt geen voorwaarde met een gevolg.", "却 betekent \"maar\": dat is een tegenstelling."] },
    { type: "mc", q: "Welke zin past NIET in een officieel reglement?",
      options: ["要是你迟到了，就别进来了。", "倘若迟到，便不得入场。", "若迟到，则不得入场。", "迟到者不得入场。"], answer: 0,
      why: ["Goed: 要是 ... 就 en 别 zijn spreektaal. Zo spreek je iemand aan, zo schrijf je geen regel.", "Dit past: 倘若 ... 便 is schrijftaal.", "Dit past: 若 ... 则 is kort en formeel.", "Dit past: 者 en 不得 zijn typisch voor regels."] },
    { type: "mc", q: "Een korte mededeling: ___有疑问，请拨打客服电话。",
      options: ["若", "虽", "却", "而"], answer: 0,
      why: ["Goed: 若 = indien, kort en formeel.", "虽 betekent \"hoewel\" en vraagt om 但.", "却 betekent \"maar\" en staat na een onderwerp, niet aan het begin.", "而 verbindt twee delen, maar opent geen voorwaarde."] },
    { type: "mc", q: "Welke uitspraak over 便 en 就 klopt?",
      options: ["Na 倘若 kunnen beide; 便 is formeler.", "Na 倘若 kan alleen 便, nooit 就.", "便 staat vóór het onderwerp, 就 erna.", "便 betekent \"toch\", 就 betekent \"dan\"."], answer: 0,
      why: ["Goed: beide betekenen \"dan\"; 便 hoort bij schrijftaal.", "Ook 倘若 ... 就 is goed, zie 这个项目就不可能完成.", "Beide staan na het onderwerp, vóór het werkwoord.", "Ook 便 betekent hier \"dan\"."] },
    { type: "mc", q: "\"Zelfs als het regent, gaat de wedstrijd gewoon door.\"",
      options: ["即使下雨，比赛也照常进行。", "倘若下雨，比赛也照常进行。", "倘若下雨，比赛便照常进行。", "即使下雨，比赛便照常进行。"], answer: 0,
      why: ["Goed: \"zelfs als\" = 即使 ... 也.", "倘若 is \"indien\" en past niet bij 也.", "Dit betekent \"indien het regent, gaat hij door\": het \"zelfs\" ontbreekt.", "即使 vraagt om 也, niet om 便."] },
    { type: "order", q: "Zet in de goede volgorde: \"Indien de winkel niet op tijd verzendt, kan de klant om terugbetaling vragen.\"",
      tokens: [["倘若", "tǎngruò"], ["商家未按时发货", "shāngjiā wèi ànshí fāhuò"], ["顾客", "gùkè"], ["便可", "biàn kě"], ["申请退款", "shēnqǐng tuìkuǎn"]] },
    { type: "fill", q: "倘若明天下雨，运动会___改期举行。(Indien het morgen regent, wordt de sportdag verplaatst.)", answers: ["便", "就", "将"],
      hint: "Welk formeel woord betekent \"dan\"?", why: "倘若 ... 便 = indien ..., dan. 就 kan ook; 便 klinkt formeler." },
    { type: "open", q: "Schrijf een regel voor een bibliotheek met 倘若 ... 便.",
      model: ["倘若图书逾期未还，读者便须支付罚款。", "倘若读者损坏图书，图书馆便要求赔偿。"],
      tip: "Check: 倘若 vooraan, en 便 na het onderwerp, vóór het werkwoord." },
    { type: "open", q: "Vertaal (formeel): \"Indien u vragen heeft, kunt u contact opnemen met de klantenservice.\"",
      model: ["倘若您有任何疑问，便可联系客服。", "若有疑问，请联系客服。", "倘若有疑问，可与客服联系。"],
      tip: "Check: 倘若 of 若 vooraan. Gebruik 便 alleen na het onderwerp, en laat het weg vóór 请." }
  ],
  review: [
    { type: "mc", q: "\"Indien de stukken onvolledig zijn, wordt de aanvraag afgewezen.\"",
      options: ["倘若材料不全，申请便被拒绝。", "倘若材料不全，便申请被拒绝。", "虽然材料不全，申请便被拒绝。", "即使材料不全，申请便被拒绝。"], answer: 0,
      why: ["Goed.", "便 staat na het onderwerp, niet ervoor.", "虽然 betekent \"hoewel\": dat is geen voorwaarde.", "即使 betekent \"zelfs als\" en vraagt om 也."] },
    { type: "mc", q: "Een officiële brief: ___贵方同意以上条款，请在合同上签字。",
      options: ["倘若", "虽然", "即使", "无论"], answer: 0,
      why: ["Goed: 倘若 = indien.", "虽然 betekent \"hoewel\" en vraagt om 但是.", "即使 betekent \"zelfs als\" en vraagt om 也.", "无论 vraagt om een vraagwoord of keuze, zoals 是否."] },
    { type: "mc", q: "\"Indien het product beschadigd is, kunt u het binnen zeven dagen terugsturen.\"",
      options: ["倘若商品有损坏，您便可在七日内退货。", "倘若商品有损坏，便您可在七日内退货。", "因为商品有损坏，您便可在七日内退货。", "即使商品有损坏，您便可在七日内退货。"], answer: 0,
      why: ["Goed: 倘若 + voorwaarde, onderwerp + 便 + werkwoord.", "便 staat na het onderwerp 您, niet ervoor.", "因为 noemt een feit. Hier gaat het om een mogelijk geval.", "即使 betekent \"zelfs als\" en vraagt om 也."] }
  ]
})
