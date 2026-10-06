({
  id: "01", slug: "ba", title: "De 把-zin", sub: "Zeggen wat je mét iets doet",
  canDo: "Je kunt nu zeggen wat je met een bepaald ding doet en waar het terechtkomt, met 把.",
  guess: {
    q: "Je hebt de appel opgegeten. Welke zin klopt, denk je?",
    options: ["我把苹果吃了。", "我把苹果吃。", "我吃把苹果了。", "我把吃苹果了。"], answer: 0,
    why: ["Goed: 把 + ding, dan het werkwoord, en daarna nog iets (了).", "Na het werkwoord moet nog iets komen; een kaal 吃 is te kort.", "把 staat vóór het ding, niet na het werkwoord.", "Het ding komt direct na 把, het werkwoord pas daarna."]
  },
  problem: "In het Nederlands zeg je: \"Ik leg het boek op tafel.\" In het Chinees wil je vaak eerst het ding noemen, en dan pas wat ermee gebeurt. Daarvoor is 把 (bǎ). Je haalt het ding naar voren, en eindigt met het resultaat.",
  pattern: [
    { l: "wie", v: "我", c: 1 }, { l: "把", v: "把", c: 2, key: true }, { l: "ding", v: "书", c: 3 },
    { l: "werkwoord", v: "放", c: 4 }, { l: "resultaat", v: "在桌子上了", c: 5 }
  ],
  patternCap: "Wie + 把 + bepaald ding + werkwoord + resultaat (plaats, 了, 完, 干净 ...)",
  rules: [
    "Het ding na 把 is bekend: \"het boek\", niet \"een boek\".",
    "Na het werkwoord komt altijd nog iets: 了, een plaats, of een resultaat.",
    "Ontkennen doe je vóór 把: 我没把书放在桌子上。",
    "Hulpwerkwoorden zoals 要, 想 en 应该 staan ook vóór 把."
  ],
  pitfall: "Werkwoorden zonder handeling op een ding, zoals 知道, 喜欢 of 有, kunnen niet met 把.",
  examples: [
    { cn: "我把书放在桌子上了。", py: "Wǒ bǎ shū fàng zài zhuōzi shang le.", nl: "Ik heb het boek op tafel gelegd." },
    { cn: "请把门关上。", py: "Qǐng bǎ mén guānshang.", nl: "Doe de deur dicht, alsjeblieft." },
    { cn: "他把衣服洗干净了。", py: "Tā bǎ yīfu xǐ gānjìng le.", nl: "Hij heeft de kleren schoongewassen." },
    { cn: "你应该把房间打扫干净。", py: "Nǐ yīnggāi bǎ fángjiān dǎsǎo gānjìng.", nl: "Je moet je kamer schoonmaken." }
  ],
  nuance: [
    { h: "Wanneer 把, en wanneer een gewone zin?",
      p: "Gebruik 把 als het ding door je handeling verandert of verplaatst. Gaat het alleen om wat je aan het doen bent, zonder resultaat, dan is een gewone zin natuurlijker. Vergelijk: je leest (geen resultaat) en je hebt het boek uit (wel resultaat).",
      ex: [
        { cn: "我在看书。", py: "Wǒ zài kàn shū.", nl: "Ik ben een boek aan het lezen." },
        { cn: "我把那本书看完了。", py: "Wǒ bǎ nà běn shū kànwán le.", nl: "Ik heb dat boek uitgelezen." }
      ] },
    { h: "Bijna verplicht: 把 met 在, 到, 给 of 成",
      p: "Staat er na het werkwoord een plaats of ontvanger met 在, 到, 给 of 成? Dan heb je 把 bijna altijd nodig. 我放书在桌子上 is fout. Het ding moet vóór het werkwoord, en dat doet 把.",
      ex: [
        { cn: "请把这封信交给老师。", py: "Qǐng bǎ zhè fēng xìn jiāo gěi lǎoshī.", nl: "Geef deze brief alsjeblieft aan de leraar." },
        { cn: "他把美元换成了人民币。", py: "Tā bǎ Měiyuán huànchéngle rénmínbì.", nl: "Hij heeft dollars in renminbi gewisseld." }
      ] },
    { h: "Spreektaal: opdrachten met 把",
      p: "In opdrachten en verzoeken hoor je 把 heel vaak, met 请 ervoor of 吧 erachter. Zo noem je eerst het ding waar het om gaat. Dat klinkt duidelijk en vriendelijk.",
      ex: [
        { cn: "把手机给我吧。", py: "Bǎ shǒujī gěi wǒ ba.", nl: "Geef me de telefoon maar." }
      ] }
  ],
  mistakes: [
    { wrong: "我把书看。", right: "我把书看完了。", why: "Na het werkwoord moet nog iets volgen: een resultaat, een plaats of 了." },
    { wrong: "我放书在桌子上。", right: "我把书放在桌子上。", why: "Met 在 + plaats na het werkwoord moet het ding vóór het werkwoord. Dat doet 把." },
    { wrong: "我把一本书放在桌子上了。", right: "我把那本书放在桌子上了。", why: "Het ding na 把 is bekend. Gebruik 这/那 of een bekend ding, geen 一本." },
    { wrong: "我把作业没做完。", right: "我没把作业做完。", why: "没 en 不 staan vóór 把, niet vóór het werkwoord." }
  ],
  vocab: [
    ["把", "bǎ", "(markeert het ding waar je iets mee doet)"], ["放", "fàng", "leggen, zetten"], ["关", "guān", "dichtdoen, uitzetten"],
    ["打开", "dǎkāi", "openen, aanzetten"], ["拿", "ná", "pakken, nemen"], ["忘", "wàng", "vergeten"],
    ["桌子", "zhuōzi", "tafel"], ["冰箱", "bīngxiāng", "koelkast"], ["洗", "xǐ", "wassen"], ["干净", "gānjìng", "schoon"]
  ],
  dialogue: [
    ["A", "你把我的钥匙放在哪儿了？", "Nǐ bǎ wǒ de yàoshi fàng zài nǎr le?", "Waar heb je mijn sleutels gelegd?"],
    ["B", "我把它们放在桌子上了。", "Wǒ bǎ tāmen fàng zài zhuōzi shang le.", "Ik heb ze op tafel gelegd."],
    ["A", "桌子上没有啊。", "Zhuōzi shang méiyǒu a.", "Op tafel liggen ze niet."],
    ["B", "你打开冰箱看看。我刚才把牛奶放进冰箱了……", "Nǐ dǎkāi bīngxiāng kànkan. Wǒ gāngcái bǎ niúnǎi fàngjìn bīngxiāng le……", "Kijk eens in de koelkast. Ik heb net de melk in de koelkast gezet..."],
    ["A", "啊！钥匙在冰箱里！", "À! Yàoshi zài bīngxiāng li!", "Ah! De sleutels liggen in de koelkast!"]
  ],
  reading: {
    title: "搬家",
    lines: [
      { cn: "上个星期六，我搬家了。", py: "Shàng ge xīngqīliù, wǒ bānjiā le.", nl: "Afgelopen zaterdag ben ik verhuisd." },
      { cn: "早上，我把所有的书都放进了箱子里。", py: "Zǎoshang, wǒ bǎ suǒyǒu de shū dōu fàngjìnle xiāngzi li.", nl: "'s Ochtends deed ik alle boeken in dozen." },
      { cn: "我的朋友小李来帮我，他把桌子和椅子搬到了车上。", py: "Wǒ de péngyou Xiǎo Lǐ lái bāng wǒ, tā bǎ zhuōzi hé yǐzi bāndàole chē shang.", nl: "Mijn vriend Xiao Li kwam helpen. Hij droeg de tafel en de stoelen naar de auto." },
      { cn: "到了新家以后，我们先把床放在卧室里。", py: "Dàole xīn jiā yǐhòu, wǒmen xiān bǎ chuáng fàng zài wòshì li.", nl: "In het nieuwe huis zetten we eerst het bed in de slaapkamer." },
      { cn: "然后，我把衣服挂进了衣柜。", py: "Ránhòu, wǒ bǎ yīfu guàjìnle yīguì.", nl: "Daarna hing ik de kleren in de kast." },
      { cn: "可是我找了半天，也没找到我的钥匙。", py: "Kěshì wǒ zhǎole bàntiān, yě méi zhǎodào wǒ de yàoshi.", nl: "Maar ik zocht een hele tijd en vond mijn sleutels niet." },
      { cn: "最后小李笑着说：\"你是不是把钥匙放在箱子里了？\"", py: "Zuìhòu Xiǎo Lǐ xiàozhe shuō: \"Nǐ shì bu shì bǎ yàoshi fàng zài xiāngzi li le?\"", nl: "Uiteindelijk zei Xiao Li lachend: \"Heb je de sleutels soms in een doos gedaan?\"" },
      { cn: "他说得对。我把钥匙和书一起放进了箱子里！", py: "Tā shuō de duì. Wǒ bǎ yàoshi hé shū yìqǐ fàngjìnle xiāngzi li!", nl: "Hij had gelijk. Ik had de sleutels samen met de boeken in een doos gedaan!" }
    ],
    questions: [
      { type: "mc", q: "Wat deed Xiao Li?",
        options: ["Hij droeg de tafel en de stoelen naar de auto.", "Hij deed de boeken in dozen.", "Hij hing de kleren in de kast.", "Hij zette het bed in de slaapkamer."], answer: 0,
        why: ["Goed: 他把桌子和椅子搬到了车上。", "Dat deed de schrijver zelf: 我把所有的书都放进了箱子里。", "Dat deed de schrijver: 我把衣服挂进了衣柜。", "Dat deden ze samen: 我们先把床放在卧室里。"] },
      { type: "mc", q: "Waar waren de sleutels?",
        options: ["In een doos, bij de boeken.", "In de koelkast.", "In de kast, bij de kleren.", "In de auto."], answer: 0,
        why: ["Goed: 我把钥匙和书一起放进了箱子里。", "De koelkast hoort bij de dialoog, niet bij deze tekst.", "De kleren gingen in de kast, de sleutels niet.", "De auto staat in de tekst, maar niet bij de sleutels."] },
      { type: "mc", q: "我把衣服挂进了衣柜。Wat laat 把 hier zien?",
        options: ["Wat er met de kleren gebeurde: ze kwamen in de kast.", "Dat de kleren nieuw zijn.", "Dat iemand anders de kleren ophing.", "Dat de kleren nog in de doos zitten."], answer: 0,
        why: ["Goed: 把 + ding + werkwoord + resultaat (进了衣柜).", "把 zegt niets over nieuw of oud.", "Wie het deed staat vóór 把: 我.", "Het resultaat is 进了衣柜: ze zijn in de kast."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik ben mijn sleutels niet thuis vergeten.\" Welke zin klopt?",
      options: ["我没把钥匙忘在家里。", "我把钥匙没忘在家里。", "我把钥匙忘没在家里。", "我把没钥匙忘在家里。"], answer: 0,
      why: ["Goed: 没 staat vóór 把.", "In een 把-zin staat 没 niet na het ding, maar vóór 把.", "没 komt nooit tussen werkwoord en resultaat.", "没 hoort niet tussen 把 en het ding."] },
    { type: "order", q: "Zet in de goede volgorde: \"Zet de melk in de koelkast, alsjeblieft.\"",
      tokens: [["请", "qǐng"], ["把", "bǎ"], ["牛奶", "niúnǎi"], ["放在", "fàng zài"], ["冰箱里", "bīngxiāng li"]] },
    { type: "mc", q: "Welke zin kan NIET met 把?",
      options: ["我把这个问题知道了。", "我把作业做完了。", "他把窗户打开了。", "妈妈把碗洗干净了。"], answer: 0,
      why: ["Goed: 知道 is geen handeling op een ding. Zeg: 我知道这个问题。", "Dit kan: je doet iets met het huiswerk, en het is af (完).", "Dit kan: je doet iets met het raam, en het is open.", "Dit kan: de kommen zijn na het wassen schoon."] },
    { type: "fill", q: "外面很冷，你能___窗户关上吗？(Het is koud buiten. Kun je het raam dichtdoen?)", answers: ["把"],
      hint: "Welk woord haalt 窗户 naar voren?", why: "能 + 把 + 窗户 + 关上: het hulpwerkwoord staat vóór 把." },
    { type: "mc", q: "\"Geef dit boek alsjeblieft aan je zus.\"",
      options: ["请把这本书给你姐姐。", "请给这本书你姐姐把。", "请把这本书你姐姐给。", "请这本书把给你姐姐。"], answer: 0,
      why: ["Goed: 把 + ding + 给 + ontvanger.", "把 staat vóór het ding, niet aan het eind.", "Het werkwoord 给 komt vóór de ontvanger.", "把 staat vóór 这本书, niet erna."] },
    { type: "fill", q: "我已经把作业做___了。(Ik heb mijn huiswerk al af.)", answers: ["完"],
      hint: "Welk resultaatwoord betekent \"af\"?", why: "做完 = af gemaakt. Na het werkwoord moet een resultaat staan." },
    { type: "mc", q: "Welke zin klopt?",
      options: ["我把那杯咖啡喝了。", "我把一杯咖啡喝了。", "我把咖啡喝。", "我喝把那杯咖啡了。"], answer: 0,
      why: ["Goed: een bekend ding (那杯) en 了 na het werkwoord.", "Het ding na 把 is bekend: 那杯, niet 一杯.", "Na 喝 moet nog iets komen, zoals 了 of 完.", "把 + ding staat vóór het werkwoord."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hij heeft de dollars in euro's gewisseld.\"",
      tokens: [["他", "tā"], ["把", "bǎ"], ["美元", "Měiyuán"], ["换成了", "huànchéngle"], ["欧元", "Ōuyuán"]] },
    { type: "mc", q: "你应该___房间打扫干净。(Je moet je kamer schoonmaken.)",
      options: ["把", "被", "比", "从"], answer: 0,
      why: ["Goed: 应该 + 把 + 房间 + 打扫干净.", "被 draait de rollen om: dan wordt de kamer iets aangedaan door iemand.", "比 is voor vergelijken.", "从 betekent \"vanaf\"."] },
    { type: "open", q: "Vertaal: \"Zet de tv uit.\"", model: ["把电视关了。", "请把电视关上。", "把电视关掉吧。"],
      tip: "Check: staat 把 vóór 电视, en komt er na 关 nog iets (了, 上, 掉)?" },
    { type: "open", q: "Vertaal: \"Leg je tas op de stoel.\"", model: ["把你的包放在椅子上。", "请把包放在椅子上。"],
      tip: "Check: 把 + 包 + 放在 + plaats. Zonder 把 kan 在椅子上 niet achter 放." }
  ],
  review: [
    { type: "mc", q: "\"Ik heb het raam opengedaan.\"",
      options: ["我把窗户打开了。", "我把窗户打开。", "我打开把窗户了。", "我把打开窗户了。"], answer: 0,
      why: ["Goed.", "Er moet nog iets na het werkwoord komen, zoals 了.", "把 + ding staat vóór het werkwoord.", "Het ding komt direct na 把."] },
    { type: "mc", q: "昨天我___把作业忘在家里。(Gisteren ben ik mijn huiswerk níet thuis vergeten.)",
      options: ["没", "不", "别", "很"], answer: 0,
      why: ["Goed: voor iets dat (niet) gebeurd is, gebruik je 没 vóór 把.", "不 past niet bij iets wat gisteren (niet) gebeurde.", "别 betekent \"doe niet\": dat is een opdracht.", "很 is \"heel\" en ontkent niets."] },
    { type: "mc", q: "\"Leg de foto in het boek.\"",
      options: ["把照片放在书里。", "放照片在书里。", "把照片放。", "把书里放照片。"], answer: 0,
      why: ["Goed: 把 + ding + 放在 + plaats.", "Met 在 + plaats achter het werkwoord heb je 把 nodig.", "Na 放 moet nog een plaats of resultaat komen.", "Na 把 komt het ding (照片), niet de plaats."] }
  ]
})
