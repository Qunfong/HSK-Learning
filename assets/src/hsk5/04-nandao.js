({
  id: "04", slug: "nandao", title: "难道 ... 吗", sub: "Een vraag die eigenlijk een bewering is",
  canDo: "Je kunt nu verbazing of ongeloof tonen met een retorische vraag met 难道 ... 吗, en zo'n vraag goed begrijpen.",
  guess: {
    q: "难道你不知道吗？Wat bedoelt de spreker, denk je?",
    options: ["Je weet het toch wel?", "Ik vraag gewoon of je het weet.", "Je weet het echt niet, dat is duidelijk.", "Ik weet het zelf ook niet."], answer: 0,
    why: ["Goed: 难道 + 不 = \"toch wel\". De spreker is verbaasd.", "难道 maakt geen neutrale vraag. De spreker verwacht het antwoord al.", "De vorm is ontkennend, maar de bedoeling is: je weet het wel.", "De vraag gaat over jou, niet over de spreker."]
  },
  problem: "Soms stel je een vraag, maar je weet het antwoord al. \"Je weet toch wel dat hij jarig is?\" Je bent verbaasd of een beetje boos. In het Chinees zet je 难道 (nándào) in de vraag. Aan het eind staat 吗.",
  pattern: [
    { l: "wie", v: "你", c: 1 }, { l: "难道", v: "难道", c: 2, key: true },
    { l: "ontkenning", v: "不知道", c: 4 }, { l: "吗", v: "吗", c: 5, key: true }
  ],
  patternCap: "难道 + ontkenning + 吗？ = toch wel ...; 难道 + bevestiging + 吗？ = toch niet ...",
  rules: [
    "难道 + 不/没 = \"toch wel\". 难道你没看见吗？ = je hebt het toch gezien.",
    "难道 zonder ontkenning = \"toch niet\". 难道他是老师吗？ = hij is toch geen leraar.",
    "难道 staat vóór of ná het onderwerp: 难道你 ... en 你难道 ... kunnen allebei.",
    "Aan het eind staat 吗 en een vraagteken. In de spreektaal valt 吗 soms weg, maar het blijft een vraag.",
    "De toon is verbaasd, ongelovig of een beetje boos."
  ],
  pitfall: "Lees 难道你不知道吗？ niet als \"Weet je het niet?\". De spreker bedoelt: \"Je weet het toch wel!\"",
  examples: [
    { cn: "难道你忘了今天是我的生日吗？", py: "Nándào nǐ wàngle jīntiān shì wǒ de shēngrì ma?", nl: "Je bent toch niet vergeten dat ik vandaag jarig ben?" },
    { cn: "这么简单的问题，难道你不会吗？", py: "Zhème jiǎndān de wèntí, nándào nǐ bú huì ma?", nl: "Zo'n eenvoudige vraag, die kun je toch wel?" },
    { cn: "他难道是你哥哥吗？你们一点儿都不像。", py: "Tā nándào shì nǐ gēge ma? Nǐmen yìdiǎnr dōu bú xiàng.", nl: "Is hij echt je broer? Jullie lijken helemaal niet op elkaar." },
    { cn: "难道我说错了吗？", py: "Nándào wǒ shuōcuò le ma?", nl: "Heb ik soms iets verkeerds gezegd?" }
  ],
  nuance: [
    { h: "难道 ... 吗 of 不是 ... 吗?",
      p: "Beide zijn vragen waarop je het antwoord al weet. 不是 ... 吗 is milder: je herinnert iemand aan iets wat jullie allebei weten. 难道 is sterker: je bent verbaasd of je verwijt iets. Let op: 不是 ... 吗 betekent altijd \"toch wel\". Bij 难道 hangt het af van de ontkenning.",
      ex: [
        { cn: "你不是说今天来吗？", py: "Nǐ bú shì shuō jīntiān lái ma?", nl: "Je zei toch dat je vandaag kwam?" },
        { cn: "难道你忘了今天要来吗？", py: "Nándào nǐ wàngle jīntiān yào lái ma?", nl: "Je bent toch niet vergeten dat je vandaag zou komen?" }
      ] },
    { h: "Een vermoeden: zou ... soms?",
      p: "难道 kan ook een vermoeden uitdrukken. Je ziet iets vreemds en denkt aan een verklaring die je eigenlijk niet wilt geloven. Dan betekent 难道 ongeveer \"zou ... soms\". Het antwoord is dan nog echt open.",
      ex: [
        { cn: "他三天没来上班了，难道生病了？", py: "Tā sān tiān méi lái shàngbān le, nándào shēngbìng le?", nl: "Hij is al drie dagen niet op zijn werk geweest. Zou hij soms ziek zijn?" }
      ] },
    { h: "Wanneer niet: neutrale vragen en beleefdheid",
      p: "Voor een gewone vraag gebruik je 难道 niet. Wil je alleen informatie, vraag dan met 吗 of 是不是. 难道 klinkt snel als een verwijt. Tegen je baas of een klant kies je daarom beter 是不是 of 不是 ... 吗.",
      ex: [
        { cn: "您是不是忘了带文件？", py: "Nín shì bu shì wàngle dài wénjiàn?", nl: "Bent u misschien vergeten de documenten mee te nemen?" }
      ] }
  ],
  mistakes: [
    { wrong: "难道你不知道。", right: "难道你不知道吗？", why: "Een zin met 难道 is een vraag. Zet 吗 en een vraagteken aan het eind." },
    { wrong: "你不知道难道吗？", right: "你难道不知道吗？", why: "难道 staat vóór of na het onderwerp, niet aan het eind." },
    { wrong: "难道你是不是忘了吗？", right: "难道你忘了吗？", why: "难道 maakt al een vraag. Een tweede vraagvorm (是不是) erbij kan niet." },
    { wrong: "难道你明天有空吗？(gewone vraag)", right: "你明天有空吗？", why: "Voor een neutrale vraag gebruik je geen 难道. 难道 klinkt verbaasd of verwijtend." }
  ],
  vocab: [
    ["难道", "nándào", "(toch niet, soms)"], ["简单", "jiǎndān", "eenvoudig"], ["像", "xiàng", "lijken op"],
    ["接", "jiē", "ophalen"], ["完全", "wánquán", "helemaal"], ["消息", "xiāoxi", "bericht, nieuws"],
    ["记住", "jìzhù", "onthouden"], ["忍不住", "rěnbuzhù", "het niet kunnen laten"], ["不好意思", "bù hǎoyìsi", "zich schamen, verlegen"],
    ["不许", "bùxǔ", "niet mogen"]
  ],
  dialogue: [
    ["A", "你怎么还在睡觉？", "Nǐ zěnme hái zài shuìjiào?", "Waarom lig je nog te slapen?"],
    ["B", "今天是星期六啊。", "Jīntiān shì xīngqīliù a.", "Het is toch zaterdag."],
    ["A", "难道你忘了今天要去机场接奶奶吗？", "Nándào nǐ wàngle jīntiān yào qù jīchǎng jiē nǎinai ma?", "Je bent toch niet vergeten dat we oma vandaag van het vliegveld halen?"],
    ["B", "啊！我完全忘了！几点的飞机？", "À! Wǒ wánquán wàng le! Jǐ diǎn de fēijī?", "Ah! Helemaal vergeten! Hoe laat komt het vliegtuig?"],
    ["A", "十点到。难道你没看我昨天发的消息吗？", "Shí diǎn dào. Nándào nǐ méi kàn wǒ zuótiān fā de xiāoxi ma?", "Om tien uur. Je hebt mijn bericht van gisteren toch wel gelezen?"],
    ["B", "看了，但是没记住。对不起，我马上起来！", "Kàn le, dànshì méi jìzhù. Duìbuqǐ, wǒ mǎshàng qǐlai!", "Gelezen wel, maar niet onthouden. Sorry, ik sta meteen op!"]
  ],
  reading: {
    title: "饭桌上的手机",
    lines: [
      { cn: "周末，我们一家人去饭馆吃饭。", py: "Zhōumò, wǒmen yì jiā rén qù fànguǎn chīfàn.", nl: "In het weekend gingen we met het hele gezin uit eten." },
      { cn: "菜还没上，大家就都拿出了手机。", py: "Cài hái méi shàng, dàjiā jiù dōu náchūle shǒujī.", nl: "Het eten was er nog niet, maar iedereen had zijn telefoon al gepakt." },
      { cn: "爸爸在看新闻，妈妈在回消息，弟弟在玩游戏。", py: "Bàba zài kàn xīnwén, māma zài huí xiāoxi, dìdi zài wán yóuxì.", nl: "Papa las het nieuws, mama beantwoordde berichten en mijn broertje speelde een spel." },
      { cn: "奶奶看了看我们，忍不住说：\"难道手机比家人还重要吗？\"", py: "Nǎinai kànle kàn wǒmen, rěnbuzhù shuō: \"Nándào shǒujī bǐ jiārén hái zhòngyào ma?\"", nl: "Oma keek naar ons en kon het niet laten te zeggen: \"Een telefoon is toch niet belangrijker dan je familie?\"" },
      { cn: "大家都不好意思地放下了手机。", py: "Dàjiā dōu bù hǎoyìsi de fàngxiàle shǒujī.", nl: "Iedereen legde een beetje beschaamd zijn telefoon neer." },
      { cn: "奶奶又说：\"我们一个月才见一次面，难道你们不想跟我聊聊天吗？\"", py: "Nǎinai yòu shuō: \"Wǒmen yí ge yuè cái jiàn yí cì miàn, nándào nǐmen bù xiǎng gēn wǒ liáoliao tiān ma?\"", nl: "Oma zei nog: \"We zien elkaar maar één keer per maand. Jullie willen toch wel even met me praten?\"" },
      { cn: "弟弟小声说：\"奶奶，您不是也常常看手机吗？\"", py: "Dìdi xiǎoshēng shuō: \"Nǎinai, nín bú shì yě chángcháng kàn shǒujī ma?\"", nl: "Mijn broertje zei zachtjes: \"Oma, u kijkt toch ook vaak op uw telefoon?\"" },
      { cn: "奶奶笑了：\"对，所以从今天开始，吃饭的时候谁都不许看手机。\"", py: "Nǎinai xiào le: \"Duì, suǒyǐ cóng jīntiān kāishǐ, chīfàn de shíhou shéi dōu bù xǔ kàn shǒujī.\"", nl: "Oma lachte: \"Klopt. Daarom mag vanaf vandaag niemand tijdens het eten op zijn telefoon kijken.\"" },
      { cn: "那顿饭我们聊了两个多小时。难道这不比看手机更有意思吗？", py: "Nà dùn fàn wǒmen liáole liǎng ge duō xiǎoshí. Nándào zhè bù bǐ kàn shǒujī gèng yǒu yìsi ma?", nl: "Tijdens die maaltijd praatten we ruim twee uur. Dat is toch veel leuker dan op je telefoon kijken?" }
    ],
    questions: [
      { type: "mc", q: "Welke regel stelde oma voor?",
        options: ["Tijdens het eten kijkt niemand op zijn telefoon.", "Iedereen belt oma één keer per maand.", "Alleen oma mag op haar telefoon kijken.", "De kinderen mogen geen spelletjes meer spelen."], answer: 0,
        why: ["Goed: 吃饭的时候谁都不许看手机。", "Ze zien elkaar één keer per maand, maar dat is geen regel.", "Ze zegt 谁都不许: niemand mag het, ook zij niet.", "De regel gaat over alle telefoons tijdens het eten, niet alleen over spelletjes."] },
      { type: "mc", q: "Hoe lang praatte het gezin die avond?",
        options: ["Ruim twee uur.", "Een uur.", "Een hele maand.", "Ze praatten bijna niet."], answer: 0,
        why: ["Goed: 我们聊了两个多小时。", "Er staat 两个多小时, meer dan twee uur.", "Een maand is hoe vaak ze elkaar zien.", "Na de nieuwe regel praatten ze juist lang."] },
      { type: "mc", q: "难道手机比家人还重要吗？Wat bedoelt oma?",
        options: ["Een telefoon is niet belangrijker dan je familie.", "Ze vraagt neutraal wat belangrijker is.", "Een telefoon is belangrijker dan je familie.", "Ze weet zelf niet wat belangrijker is."], answer: 0,
        why: ["Goed: 难道 zonder ontkenning = toch niet. Het is een verwijt.", "难道 maakt geen neutrale vraag; ze kent het antwoord al.", "Ze bedoelt juist het omgekeerde.", "Met 难道 laat ze zien dat ze het antwoord al weet."] }
    ]
  },
  questions: [
    { type: "mc", q: "Wat bedoelt de spreker met: 难道你没听说吗？",
      options: ["Je hebt het toch wel gehoord?", "Je hebt het toch niet gehoord?", "Ik heb het zelf niet gehoord.", "Wil je het graag horen?"], answer: 0,
      why: ["Goed: 难道 + 没 = toch wel.", "Met een ontkenning betekent 难道 juist \"toch wel\".", "De vraag gaat over jou, niet over de spreker.", "听说 gaat over iets wat je gehoord hebt, niet over willen horen."] },
    { type: "mc", q: "\"Je bent toch geen kind meer!\" Welke zin past?",
      options: ["难道你还是孩子吗？", "难道你不是孩子吗？", "难道你还是孩子。", "你还是孩子难道吗？"], answer: 0,
      why: ["Goed: 难道 zonder ontkenning = toch niet.", "Met 不 wordt het: je bent toch wel een kind.", "难道 maakt een vraag. Zonder 吗 en vraagteken klopt het niet.", "难道 staat vóór of na het onderwerp, niet achteraan."] },
    { type: "order", q: "Zet in de goede volgorde: \"Je hebt mijn bericht toch wel gezien?\"",
      tokens: [["难道你", "nándào nǐ"], ["没看到", "méi kàndào"], ["我的", "wǒ de"], ["消息", "xiāoxi"], ["吗", "ma"]] },
    { type: "mc", q: "这么重要的会，___你不参加吗？(Zo'n belangrijke vergadering, daar ga je toch wel naartoe?)",
      options: ["难道", "既然", "无论", "宁可"], answer: 0,
      why: ["Goed: 难道 + 不 + 吗 = toch wel.", "既然 geeft een feit met een conclusie, geen verbaasde vraag.", "Na 无论 hoort een vraagwoord en 都.", "宁可 hoort bij 也不: liever ... dan."] },
    { type: "mc", q: "你不是说今天来吗？Wat bedoelt de spreker?",
      options: ["Je zei toch dat je vandaag zou komen?", "Zei je dat je vandaag kwam? (neutrale vraag)", "Je zei dat je vandaag níet zou komen.", "Je komt vandaag toch niet?"], answer: 0,
      why: ["Goed: 不是 ... 吗 herinnert iemand aan iets wat al bekend is.", "不是 ... 吗 is geen neutrale vraag; de spreker weet het al.", "不是 ontkent hier niet het komen; het hoort bij de vraagvorm.", "不是 ... 吗 betekent \"toch wel\", niet \"toch niet\"."] },
    { type: "mc", q: "他三天没来上班了，难道生病了？Wat drukt 难道 hier uit?",
      options: ["Een vermoeden: zou hij soms ziek zijn?", "Een verwijt: hij had niet ziek mogen worden.", "Een feit: hij is zeker ziek.", "Een bevel: hij moet naar de dokter."], answer: 0,
      why: ["Goed: 难道 kan een vermoeden geven dat je eigenlijk niet wilt geloven.", "Er staat geen verwijt; de spreker zoekt een verklaring.", "Het blijft een vraag. Zeker is het niet.", "Er staat geen opdracht in de zin."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["难道你是不是忘了吗？", "难道你忘了吗？", "你难道忘了吗？", "你是不是忘了？"], answer: 0,
      why: ["Goed gezien: 难道 en 是不是 zijn allebei vraagvormen. Kies er één.", "Deze klopt: 难道 + 吗.", "Deze klopt: 难道 mag na het onderwerp.", "Deze klopt: een gewone vraag met 是不是."] },
    { type: "order", q: "Zet in de goede volgorde: \"Begrijp je het nu nog steeds niet?\"",
      tokens: [["你难道", "nǐ nándào"], ["到现在", "dào xiànzài"], ["还", "hái"], ["不明白", "bù míngbai"], ["吗", "ma"]],
      alt: ["到现在你难道还不明白吗"] },
    { type: "fill", q: "___你没看见红灯吗？(Je hebt het rode licht toch wel gezien?)", answers: ["难道"],
      hint: "Welk woord maakt een verbaasde vraag met 吗?", why: "难道 + 没 + 吗 = toch wel: de spreker is verbaasd of boos." },
    { type: "open", q: "Reageer verbaasd: \"Je weet toch wel dat er morgen een examen is?\"", model: ["难道你不知道明天考试吗？", "你难道不知道明天要考试吗？", "难道你忘了明天有考试吗？"],
      tip: "Check: 难道 vóór of na 你, een ontkenning (不 of 没) voor \"toch wel\", en 吗 aan het eind." },
    { type: "open", q: "Vertaal: \"Je bent toch niet vergeten je sleutels mee te nemen?\"", model: ["难道你忘了带钥匙吗？", "你难道忘了带钥匙吗？"],
      tip: "Check: \"toch niet vergeten\" = 难道 + 忘了, zonder 不. En 吗 aan het eind." }
  ],
  review: [
    { type: "mc", q: "Wat betekent: 难道这是你写的吗？",
      options: ["Dit heb jij toch niet geschreven?", "Dit heb jij toch wel geschreven?", "Heb jij dit geschreven? (neutrale vraag)", "Dit heb ik niet geschreven."], answer: 0,
      why: ["Goed: 难道 zonder ontkenning = toch niet. De spreker gelooft het niet.", "Voor \"toch wel\" moet er 不 of 没 in de zin staan.", "难道 maakt geen neutrale vraag. De spreker is verbaasd.", "De vraag gaat over jou (你写的), niet over de spreker."] },
    { type: "mc", q: "\"Hij is toch wel je vriend?\" (je verwacht ja)",
      options: ["难道他不是你的朋友吗？", "难道他是你的朋友吗？", "难道他不是你的朋友。", "他不是你的朋友难道吗？"], answer: 0,
      why: ["Goed.", "Zonder 不 betekent het: hij is toch niet je vriend.", "难道 maakt een vraag. Er hoort 吗 en een vraagteken bij.", "难道 staat vóór of na het onderwerp, niet achteraan."] },
    { type: "mc", q: "Wat betekent: 难道我们不是朋友吗？",
      options: ["We zijn toch vrienden?", "We zijn toch geen vrienden?", "Zijn we vrienden? (neutrale vraag)", "Ik wil geen vrienden zijn."], answer: 0,
      why: ["Goed: 难道 + 不 = toch wel.", "Met 不 betekent 难道 juist \"toch wel\".", "难道 maakt geen neutrale vraag.", "De zin is een vraag die het antwoord al geeft: ja."] }
  ]
})
