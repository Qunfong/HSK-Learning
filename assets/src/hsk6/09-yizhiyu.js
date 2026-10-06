({
  id: "09", slug: "yizhiyu", title: "以至于 en 以至", sub: "Zo erg dat ...: een gevolg van een hoge graad",
  canDo: "Je kunt nu met 以至于 zeggen dat iets zo sterk was dat er een gevolg uit kwam, en je kiest tussen 以至于, 以致 en 所以.",
  guess: {
    q: "他太紧张了，以至于把准备好的话全忘了。Wat bedoelt de spreker, denk je?",
    options: ["Hij was zo zenuwachtig dat hij alles wat hij had voorbereid vergat.", "Hij was zenuwachtig omdat hij alles vergeten was.", "Hij was zenuwachtig, maar hij vergat niets.", "Hij was zenuwachtig, zodat hij niets zou vergeten."], answer: 0,
    why: ["Goed: 以至于 leidt het gevolg in: zo erg dat ....", "以至于 geeft geen oorzaak, maar het gevolg.", "全忘了 zegt dat hij alles wél vergat.", "以至于 is geen doel (\"zodat niet\"), maar een gevolg."]
  },
  problem: "In het Nederlands zeg je: \"Hij was zó moe dat hij in de bus in slaap viel.\" Het gevolg komt uit de hoge graad. In het Chinees leid je dat gevolg in met 以至于 (yǐzhìyú) of korter 以至 (yǐzhì). Het klinkt wat formeler dan 所以.",
  pattern: [
    { l: "oorzaak", v: "他", c: 1 }, { l: "hoge graad", v: "太累了", c: 2 }, { l: "zo erg dat", v: "以至于", c: 3, key: true },
    { l: "gevolg", v: "在车上睡着了", c: 4 }
  ],
  patternCap: "Oorzaak met hoge graad (太/这么/如此 ...)，以至(于) + gevolg · ongewenst gevolg: 以致 · bereik: A 以至 B = A, tot zelfs B",
  rules: [
    "以至于 staat aan het begin van het tweede zinsdeel. Daarna komt het gevolg.",
    "Het eerste deel toont vaak een hoge graad: 太, 非常, 这么, 如此, 越来越.",
    "以至 betekent hetzelfde als 以至于. Het is korter en formeler.",
    "Het gevolg kan neutraal, negatief of soms positief zijn. Vaak staat er 都 of 连 ... 都 in.",
    "Register: schrijftaal en formele spreektaal. In gewone spreektaal zeg je liever 所以 of 结果."
  ],
  pitfall: "以至于 leidt het gevolg in, niet de oorzaak. Zet het dus nooit vóór het eerste deel, zoals je met 因为 doet. Combineer het ook niet met 因为.",
  examples: [
    { cn: "他工作太投入了，以至于忘了吃午饭。", py: "Tā gōngzuò tài tóurù le, yǐzhìyú wàngle chī wǔfàn.", nl: "Hij ging zo op in zijn werk dat hij vergat te lunchen." },
    { cn: "这部电影太感人了，以至于很多观众都哭了。", py: "Zhè bù diànyǐng tài gǎnrén le, yǐzhìyú hěn duō guānzhòng dōu kū le.", nl: "De film was zo ontroerend dat veel kijkers huilden." },
    { cn: "城市变化如此之快，以至于很多老人都认不出自己的家乡了。", py: "Chéngshì biànhuà rúcǐ zhī kuài, yǐzhìyú hěn duō lǎorén dōu rèn bu chū zìjǐ de jiāxiāng le.", nl: "De stad verandert zo snel dat veel ouderen hun geboorteplaats niet meer herkennen." },
    { cn: "他没有仔细检查合同，以致公司损失了一大笔钱。", py: "Tā méiyǒu zǐxì jiǎnchá hétong, yǐzhì gōngsī sǔnshīle yí dà bǐ qián.", nl: "Hij controleerde het contract niet goed, waardoor het bedrijf veel geld verloor." }
  ],
  nuance: [
    { h: "以至于 of 以致?",
      p: "以致 (ook yǐzhì uitgesproken) leidt bijna altijd een ongewenst gevolg in. Vaak is iemand er schuldig aan. Het is schrijftaal. 以至于 is breder: het gevolg mag ook neutraal of positief zijn. Bij een slecht gevolg kunnen beide. Bij een goed of neutraal gevolg kan alleen 以至于.",
      ex: [
        { cn: "他太粗心了，以致考试没及格。", py: "Tā tài cūxīn le, yǐzhì kǎoshì méi jígé.", nl: "Hij was zo slordig dat hij voor het examen zakte." },
        { cn: "他进步得这么快，以至于老师都很惊讶。", py: "Tā jìnbù de zhème kuài, yǐzhìyú lǎoshī dōu hěn jīngyà.", nl: "Hij ging zo snel vooruit dat zelfs de leraar verbaasd was." }
      ] },
    { h: "以至于 of 所以?",
      p: "所以 is een gewoon \"dus\", in spreektaal en schrijftaal. Het past bij 因为. 以至于 legt de nadruk op de graad: het ging zo ver dat er iets gebeurde. Daarom heeft het eerste deel meestal 太, 这么 of 如此. 因为 ... 以至于 is geen goede combinatie.",
      ex: [
        { cn: "因为下雨，所以比赛取消了。", py: "Yīnwèi xià yǔ, suǒyǐ bǐsài qǔxiāo le.", nl: "Omdat het regende, werd de wedstrijd afgelast." },
        { cn: "雨下得太大了，以至于比赛不得不取消。", py: "Yǔ xià de tài dà le, yǐzhìyú bǐsài bù dé bù qǔxiāo.", nl: "Het regende zo hard dat de wedstrijd afgelast moest worden." }
      ] },
    { h: "以至 in een reeks: \"tot zelfs\"",
      p: "以至 heeft nog een tweede betekenis. Tussen twee woorden betekent A 以至 B: A, en zelfs B. B is groter of verder dan A. Dit gebruik is echte schrijftaal. 以至于 gebruik je hier niet.",
      ex: [
        { cn: "这种变化可能需要几年以至几十年。", py: "Zhè zhǒng biànhuà kěnéng xūyào jǐ nián yǐzhì jǐ shí nián.", nl: "Zo'n verandering kan jaren, tot zelfs tientallen jaren duren." }
      ] }
  ],
  mistakes: [
    { wrong: "以至于他太累了，在车上睡着了。", right: "他太累了，以至于在车上睡着了。", why: "以至于 staat vóór het gevolg, niet vóór de oorzaak." },
    { wrong: "因为下雨，以至于比赛取消了。", right: "因为下雨，所以比赛取消了。", why: "因为 hoort bij 所以. 以至于 heeft een hoge graad in het eerste deel nodig." },
    { wrong: "他进步得这么快，以致老师都很惊讶。", right: "他进步得这么快，以至于老师都很惊讶。", why: "以致 is voor een ongewenst gevolg. Verbaasd zijn over vooruitgang is niets slechts." }
  ],
  vocab: [
    ["以至于 / 以至", "yǐzhìyú / yǐzhì", "zodanig dat, met als gevolg dat"], ["以致", "yǐzhì", "met als (slecht) gevolg dat"], ["投入", "tóurù", "opgaan in, toegewijd"],
    ["如此", "rúcǐ", "zo, zodanig"], ["损失", "sǔnshī", "verliezen, verlies"], ["睡眠", "shuìmián", "slaap"],
    ["升职", "shēngzhí", "promotie maken"], ["请假", "qǐngjià", "verlof vragen"], ["效率", "xiàolǜ", "efficiëntie"], ["入迷", "rùmí", "helemaal gegrepen zijn"]
  ],
  dialogue: [
    ["A", "你昨天怎么没回我消息？", "Nǐ zuótiān zěnme méi huí wǒ xiāoxi?", "Waarom reageerde je gisteren niet op mijn bericht?"],
    ["B", "对不起，我在看一本小说，太好看了，以至于把手机都忘了。", "Duìbuqǐ, wǒ zài kàn yì běn xiǎoshuō, tài hǎokàn le, yǐzhìyú bǎ shǒujī dōu wàng le.", "Sorry, ik las een roman. Hij was zo goed dat ik mijn telefoon helemaal vergat."],
    ["A", "什么小说这么厉害？", "Shénme xiǎoshuō zhème lìhai?", "Wat voor roman is er zo goed?"],
    ["B", "一本侦探小说。我看得太入迷了，以至于一直看到凌晨三点。", "Yì běn zhēntàn xiǎoshuō. Wǒ kàn de tài rùmí le, yǐzhìyú yìzhí kàndào língchén sān diǎn.", "Een detective. Ik was zo gegrepen dat ik tot drie uur 's nachts doorlas."],
    ["A", "难怪你今天这么累。借给我看看吧！", "Nánguài nǐ jīntiān zhème lèi. Jiè gěi wǒ kànkan ba!", "Geen wonder dat je vandaag zo moe bent. Leen hem me eens!"]
  ],
  reading: {
    title: "工作与生活",
    lines: [
      { cn: "近年来，很多年轻人的工作压力非常大。", py: "Jìnniánlái, hěn duō niánqīngrén de gōngzuò yālì fēicháng dà.", nl: "De laatste jaren staan veel jongeren onder grote werkdruk." },
      { cn: "有的人每天加班到深夜，以至于连周末都没有时间休息。", py: "Yǒu de rén měi tiān jiābān dào shēnyè, yǐzhìyú lián zhōumò dōu méiyǒu shíjiān xiūxi.", nl: "Sommigen werken elke dag tot diep in de nacht over, zo erg dat ze zelfs in het weekend geen tijd hebben om uit te rusten." },
      { cn: "长期睡眠不足，以致不少人的身体出现了问题。", py: "Chángqī shuìmián bùzú, yǐzhì bù shǎo rén de shēntǐ chūxiànle wèntí.", nl: "Door langdurig slaaptekort krijgen veel mensen gezondheidsproblemen." },
      { cn: "小王就是一个例子。他太想升职了，以至于生病都不肯请假。", py: "Xiǎo Wáng jiù shì yí ge lìzi. Tā tài xiǎng shēngzhí le, yǐzhìyú shēngbìng dōu bù kěn qǐngjià.", nl: "Xiao Wang is een voorbeeld. Hij wilde zo graag promotie maken dat hij zelfs bij ziekte geen verlof nam." },
      { cn: "去年冬天，他终于病倒了，在医院住了两个星期。", py: "Qùnián dōngtiān, tā zhōngyú bìngdǎo le, zài yīyuàn zhùle liǎng ge xīngqī.", nl: "Afgelopen winter werd hij uiteindelijk ziek en lag hij twee weken in het ziekenhuis." },
      { cn: "出院以后，他开始重新思考工作和生活的关系。", py: "Chūyuàn yǐhòu, tā kāishǐ chóngxīn sīkǎo gōngzuò hé shēnghuó de guānxì.", nl: "Na het ziekenhuis begon hij opnieuw na te denken over werk en privéleven." },
      { cn: "现在他每天按时下班，周末去爬山，心情好多了。", py: "Xiànzài tā měi tiān ànshí xiàbān, zhōumò qù páshān, xīnqíng hǎo duō le.", nl: "Nu gaat hij elke dag op tijd naar huis en gaat hij in het weekend wandelen in de bergen. Hij voelt zich veel beter." },
      { cn: "他的工作效率反而提高了很多，以至于同事们都来问他有什么秘诀。", py: "Tā de gōngzuò xiàolǜ fǎn'ér tígāole hěn duō, yǐzhìyú tóngshìmen dōu lái wèn tā yǒu shénme mìjué.", nl: "Zijn efficiëntie is juist zo gestegen dat zijn collega's hem naar zijn geheim komen vragen." }
    ],
    questions: [
      { type: "mc", q: "Wat deed Xiao Wang toen hij ziek was, vóór het ziekenhuis?",
        options: ["Hij bleef werken en nam geen verlof.", "Hij nam meteen verlof.", "Hij ging wandelen in de bergen.", "Hij vroeg zijn collega's om hulp."], answer: 0,
        why: ["Goed: 生病都不肯请假.", "不肯请假 zegt dat hij juist geen verlof nam.", "Wandelen doet hij pas nu, na het ziekenhuis.", "Zijn collega's komen pas aan het eind, met een vraag aan hem."] },
      { type: "mc", q: "Wat is er nu anders?",
        options: ["Hij gaat op tijd naar huis en werkt efficiënter.", "Hij werkt nog meer over.", "Hij heeft promotie gemaakt.", "Hij werkt niet meer."], answer: 0,
        why: ["Goed: 按时下班 en 效率反而提高了很多.", "Hij gaat juist op tijd naar huis.", "Over promotie staat er niets.", "Hij werkt nog wel, maar op tijd."] },
      { type: "mc", q: "In de laatste zin staat 以至于, niet 以致. Waarom?",
        options: ["Het gevolg is niet slecht.", "Het gevolg is slecht.", "Er staat 因为 in de zin.", "以致 kan niet na een komma staan."], answer: 0,
        why: ["Goed: collega's die om zijn geheim vragen is geen ongewenst gevolg. 以致 past daar niet.", "Juist niet: bij een slecht gevolg had 以致 wel gekund.", "Er staat geen 因为 in de zin.", "以致 staat net als 以至于 na een komma."] }
    ]
  },
  questions: [
    { type: "mc", q: "Wat betekent: 她太高兴了，以至于一句话都说不出来。",
      options: ["Ze was zo blij dat ze geen woord kon uitbrengen.", "Ze was blij omdat ze niets hoefde te zeggen.", "Ze was blij, maar ze zei veel.", "Ze was blij, zodat ze niets verkeerds zou zeggen."], answer: 0,
      why: ["Goed: 以至于 = zo erg dat.", "以至于 geeft het gevolg, niet de oorzaak.", "说不出来 zegt dat ze níets kon zeggen.", "以至于 is geen doel, maar een gevolg."] },
    { type: "mc", q: "\"Het was zo koud dat het meer helemaal bevroor.\"",
      options: ["天太冷了，以至于湖面都结冰了。", "以至于天太冷了，湖面都结冰了。", "天太冷了，以至于湖面都没结冰。", "天太冷了，因为湖面都结冰了。"], answer: 0,
      why: ["Goed: hoge graad, dan 以至于 + gevolg.", "以至于 staat vóór het gevolg, niet vóór de oorzaak.", "没 draait het gevolg om.", "因为 geeft een oorzaak; hier is het bevriezen het gevolg."] },
    { type: "mc", q: "他的中文进步得这么快，___连中国朋友都很惊讶。(Zijn Chinees ging zo snel vooruit dat zelfs Chinese vrienden verbaasd waren.)",
      options: ["以至于", "以致", "以免", "不至于"], answer: 0,
      why: ["Goed: 以至于 past ook bij een positief gevolg.", "以致 is voor een ongewenst gevolg. Verbazing over vooruitgang is niets slechts.", "以免 = om te voorkomen dat. Dat is een doel.", "不至于 = zo erg wordt het niet. Dat is geen gevolg."] },
    { type: "mc", q: "因为路上堵车，___我迟到了。(Omdat er file was, kwam ik te laat.)",
      options: ["所以", "以至于", "至于", "以免"], answer: 0,
      why: ["Goed: 因为 hoort bij 所以.", "以至于 past niet bij 因为; het heeft een hoge graad nodig.", "至于 = wat betreft. Het geeft geen gevolg.", "以免 = om te voorkomen dat. Dat is een doel."] },
    { type: "mc", q: "Wat betekent: 这项研究可能需要几年以至几十年。",
      options: ["Dit onderzoek kan jaren, tot zelfs tientallen jaren duren.", "Dit onderzoek duurt jaren, waardoor het mislukt.", "Dit onderzoek duurt hooguit een paar jaar.", "Dit onderzoek moet binnen een paar jaar klaar zijn."], answer: 0,
      why: ["Goed: A 以至 B = A, en zelfs B.", "以至 tussen twee woorden geeft een reeks, geen gevolg.", "以至 gaat juist verder: tot tientallen jaren.", "Er staat niets over een deadline."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["以至于他太累了，上课睡着了。", "他太累了，以至于上课睡着了。", "他太累了，所以上课睡着了。", "他累得上课都睡着了。"], answer: 0,
      why: ["Goed: deze klopt niet. 以至于 staat vóór het gevolg.", "Deze klopt: hoge graad, dan 以至于 + gevolg.", "Deze klopt: 所以 is een gewoon \"dus\".", "Deze klopt: 得 + gevolg zegt hetzelfde, in spreektaal."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hij lachte zo hard dat hij niets meer kon zeggen.\"",
      tokens: [["他", "tā"], ["笑得太厉害了", "xiào de tài lìhai le"], ["以至于", "yǐzhìyú"], ["说不出话来", "shuō bu chū huà lái"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Het verkeer wordt zo druk dat veel mensen voortaan de metro nemen.\"",
      tokens: [["交通", "jiāotōng"], ["越来越拥挤", "yuè lái yuè yōngjǐ"], ["以至于", "yǐzhìyú"], ["很多人", "hěn duō rén"], ["改坐地铁", "gǎi zuò dìtiě"]] },
    { type: "fill", q: "他太专心了，___连电话响了都没听见。(Hij was zo geconcentreerd dat hij de telefoon niet eens hoorde.)", answers: ["以至于", "以至", "以致"],
      hint: "Welk woord leidt een gevolg in: \"zo erg dat\"?", why: "以至(于) leidt het gevolg in. Omdat het gevolg ongewenst is, kan 以致 hier ook." },
    { type: "open", q: "Vertaal: \"Het was buiten zo lawaaiig dat ik de hele nacht niet kon slapen.\"",
      model: ["外面太吵了，以至于我一夜都没睡着。", "外面的噪音如此之大，以致我整夜没睡好。"],
      tip: "Check: hoge graad in het eerste deel (太, 如此), en 以至于 of 以致 vóór het gevolg." },
    { type: "open", q: "Herschrijf met 以至于: 因为他太忙了，所以忘了妈妈的生日。",
      model: ["他太忙了，以至于忘了妈妈的生日。", "他忙得不得了，以至于连妈妈的生日都忘了。"],
      tip: "Check: 因为 en 所以 zijn weg, en 以至于 staat aan het begin van het gevolg." }
  ],
  review: [
    { type: "mc", q: "Wat betekent: 这个地方变化太大了，以至于我差点儿没认出来。",
      options: ["Deze plek is zo veranderd dat ik hem bijna niet herkende.", "Deze plek is veranderd omdat ik hem niet herkende.", "Deze plek is veranderd, maar ik herkende hem meteen.", "Deze plek is niet veranderd, dus ik herkende hem."], answer: 0,
      why: ["Goed.", "以至于 leidt het gevolg in, niet de oorzaak.", "差点儿没认出来 = bijna niet herkend.", "变化太大了 zegt dat de plek wél veranderd is."] },
    { type: "mc", q: "他说话太快，___大家都没听懂。(Hij praatte zo snel dat niemand het verstond.)",
      options: ["以至于", "不至于", "至于", "未必"], answer: 0,
      why: ["Goed.", "不至于 = zo erg wordt het niet: het tegendeel.", "至于 = wat betreft, of in een vraag met 吗.", "未必 = niet per se. Het leidt geen gevolg in."] },
    { type: "mc", q: "他非常努力，___考上了理想的大学。Welk woord past hier NIET?",
      options: ["以致", "所以", "因此", "终于"], answer: 0,
      why: ["Goed: 以致 past niet. Het is voor een ongewenst gevolg, en een droomuniversiteit is goed nieuws.", "Past wel: 所以 = dus, ook bij een goed gevolg.", "Past wel: 因此 = daardoor, ook bij een goed gevolg.", "Past wel: 终于 = uiteindelijk."] }
  ]
})
