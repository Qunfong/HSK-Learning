// HSK 3 lessons. Vocabulary is level-appropriate practice, not a certified official HSK 3.0 list.
// Question types: mc (answer = index), order (tokens in the right order), open (self-check with model answers).
// "review" questions never appear in the lesson itself; they come back on the review page.
window.HSK = window.HSK || {};
window.HSK.hsk3 = {
  level: "HSK 3",
  lessons: [
    {
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
        "Ontkennen doe je vóór 把: 我没把书放在桌子上。"
      ],
      pitfall: "Werkwoorden zonder handeling op een ding, zoals 知道, 喜欢 of 有, kunnen niet met 把.",
      examples: [
        { cn: "我把书放在桌子上了。", py: "Wǒ bǎ shū fàng zài zhuōzi shang le.", nl: "Ik heb het boek op tafel gelegd." },
        { cn: "请把门关上。", py: "Qǐng bǎ mén guānshang.", nl: "Doe de deur dicht, alsjeblieft." },
        { cn: "他把衣服洗干净了。", py: "Tā bǎ yīfu xǐ gānjìng le.", nl: "Hij heeft de kleren schoongewassen." }
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
      questions: [
        { type: "mc", q: "\"Ik ben mijn sleutels niet thuis vergeten.\" Welke zin klopt?",
          options: ["我没把钥匙忘在家里。", "我把钥匙没忘在家里。", "我把钥匙忘没在家里。", "我把没钥匙忘在家里。"], answer: 0,
          why: ["Goed: 没 staat vóór 把.", "In een 把-zin staat 没 niet na het ding, maar vóór 把.", "没 komt nooit tussen werkwoord en resultaat.", "没 hoort niet tussen 把 en het ding."] },
        { type: "order", q: "Zet in de goede volgorde: \"Zet de melk in de koelkast, alsjeblieft.\"",
          tokens: [["请", "qǐng"], ["把", "bǎ"], ["牛奶", "niúnǎi"], ["放在", "fàng zài"], ["冰箱里", "bīngxiāng li"]] },
        { type: "mc", q: "Welke zin kan NIET met 把?",
          options: ["我把这个问题知道了。", "我把作业做完了。", "他把窗户打开了。", "妈妈把碗洗干净了。"], answer: 0,
          why: ["Goed: 知道 is geen handeling op een ding. Zeg: 我知道这个问题。", "Dit kan: je doet iets met het huiswerk, en het is af (完).", "Dit kan: je doet iets met het raam, en het is open.", "Dit kan: de kommen zijn na het wassen schoon."] },
        { type: "open", q: "Vertaal: \"Zet de tv uit.\"", model: ["把电视关了。", "请把电视关上。", "把电视关掉吧。"],
          tip: "Check: staat 把 vóór 电视, en komt er na 关 nog iets (了, 上, 掉)?" }
      ],
      review: [
        { type: "mc", q: "\"Ik heb het raam opengedaan.\"",
          options: ["我把窗户打开了。", "我把窗户打开。", "我打开把窗户了。", "我把打开窗户了。"], answer: 0,
          why: ["Goed.", "Er moet nog iets na het werkwoord komen, zoals 了.", "把 + ding staat vóór het werkwoord.", "Het ding komt direct na 把."] },
        { type: "mc", q: "昨天我___把作业忘在家里。(Gisteren ben ik mijn huiswerk níet thuis vergeten.)",
          options: ["没", "不", "别", "很"], answer: 0,
          why: ["Goed: voor iets dat (niet) gebeurd is, gebruik je 没 vóór 把.", "不 past niet bij iets wat gisteren (niet) gebeurde.", "别 betekent \"doe niet\": dat is een opdracht.", "很 is \"heel\" en ontkent niets."] }
      ]
    },
    {
      id: "02", slug: "resultaat", title: "Werkwoord + resultaat", sub: "找 of 找到: zoeken of vinden",
      canDo: "Je kunt nu zeggen of een handeling gelukt of af is, met 完, 到, 懂, 错, 住 en 好.",
      guess: {
        q: "我找了，但是没找到。Wat betekent dit, denk je?",
        options: ["Ik heb gezocht, maar niet gevonden.", "Ik heb niet gezocht.", "Ik heb het gevonden, maar niet gezocht.", "Ik zoek nog, en ik ga het vinden."], answer: 0,
        why: ["Goed: 找 is de handeling (zoeken), 找到 is het resultaat (vinden).", "找了 zegt juist dat je wél gezocht hebt.", "没找到 zegt dat het resultaat er niet is.", "Er staat 了 en 没: het gaat over wat al gebeurd is."]
      },
      problem: "Het Chinese werkwoord zegt alleen wat je doet, niet of het lukt. 看 is \"kijken\", maar heb je het ook gezien of uitgelezen? Daarvoor plak je een resultaat achter het werkwoord.",
      pattern: [
        { l: "werkwoord", v: "看", c: 4 }, { l: "resultaat", v: "完", c: 5, key: true }, { l: "", v: "了", c: 3 }
      ],
      patternCap: "看完 = uitgelezen · 找到 = gevonden · 听懂 = begrepen · 写错 = fout geschreven · 记住 = onthouden · 做好 = goed af",
      rules: [
        "Het resultaat staat direct achter het werkwoord. Er past niets tussen.",
        "Ontkennen doe je met 没 vóór het werkwoord, zonder 了: 我没听懂。",
        "Een vraag: 你听懂了吗？"
      ],
      pitfall: "Zeg niet 我不听懂 of 我没听懂了. Het resultaat is er niet: 我没听懂。",
      examples: [
        { cn: "我找到我的手机了。", py: "Wǒ zhǎodào wǒ de shǒujī le.", nl: "Ik heb mijn telefoon gevonden." },
        { cn: "老师说的话我都听懂了。", py: "Lǎoshī shuō de huà wǒ dōu tīngdǒng le.", nl: "Ik heb alles begrepen wat de leraar zei." },
        { cn: "对不起，我没听清楚。", py: "Duìbuqǐ, wǒ méi tīng qīngchu.", nl: "Sorry, ik heb het niet goed verstaan." }
      ],
      vocab: [
        ["完", "wán", "af, klaar"], ["到", "dào", "bereikt, gelukt"], ["懂", "dǒng", "begrijpen"], ["错", "cuò", "fout"],
        ["找", "zhǎo", "zoeken"], ["作业", "zuòyè", "huiswerk"], ["遇到", "yùdào", "tegenkomen"], ["准备", "zhǔnbèi", "voorbereiden"],
        ["记住", "jìzhù", "onthouden"], ["清楚", "qīngchu", "duidelijk"]
      ],
      dialogue: [
        ["A", "你的作业做完了吗？", "Nǐ de zuòyè zuòwán le ma?", "Is je huiswerk af?"],
        ["B", "还没做完。第三题我没看懂。", "Hái méi zuòwán. Dì sān tí wǒ méi kàndǒng.", "Nog niet. Opgave drie begrijp ik niet."],
        ["A", "我给你讲讲。……听懂了吗？", "Wǒ gěi nǐ jiǎngjiang. …… Tīngdǒng le ma?", "Ik leg het even uit. ... Begrepen?"],
        ["B", "听懂了！我找到错的地方了。谢谢！", "Tīngdǒng le! Wǒ zhǎodào cuò de dìfang le. Xièxie!", "Ja! Ik heb gevonden waar de fout zat. Dank je!"]
      ],
      questions: [
        { type: "mc", q: "\"Ik heb dit boek uitgelezen.\"",
          options: ["我看完这本书了。", "我看这本书完了。", "我完看这本书了。", "我看了完这本书。"], answer: 0,
          why: ["Goed: 完 staat direct achter 看.", "Het resultaat komt direct na het werkwoord, niet na het ding.", "Het resultaat komt ná het werkwoord.", "Er past niets tussen 看 en 完, ook geen 了."] },
        { type: "mc", q: "\"Ik heb het niet begrepen.\"",
          options: ["我没听懂。", "我不听懂了。", "我听没懂。", "我没听懂了。"], answer: 0,
          why: ["Goed: 没 vóór het werkwoord, zonder 了.", "Voor een resultaat dat er niet is, gebruik je 没, niet 不.", "没 komt vóór het werkwoord, niet ertussen.", "Met 没 valt 了 weg."] },
        { type: "order", q: "Zet in de goede volgorde: \"Ben je klaar (goed voorbereid)?\"",
          tokens: [["你", "nǐ"], ["准备", "zhǔnbèi"], ["好", "hǎo"], ["了", "le"], ["吗", "ma"]] },
        { type: "mc", q: "这个字我写___了，应该是\"买\"，不是\"卖\"。",
          options: ["错", "完", "懂", "到"], answer: 0,
          why: ["Goed: 写错 = fout geschreven.", "写完 = af geschreven; dat past niet bij de verbetering.", "写懂 bestaat niet: 懂 hoort bij 听 of 看.", "写到 betekent \"tot ... geschreven\"; hier gaat het om een fout."] },
        { type: "open", q: "Zeg dat je de nieuwe woorden onthouden hebt.", model: ["我记住这些新词了。", "这些生词我都记住了。"],
          tip: "Check: staat 住 direct achter 记?" }
      ],
      review: [
        { type: "mc", q: "\"Heb je je telefoon gevonden?\"",
          options: ["你找到手机了吗？", "你找手机了吗？", "你到找手机了吗？", "你找手机到了吗？"], answer: 0,
          why: ["Goed.", "找 alleen is \"zoeken\": heb je gezocht?", "到 komt ná het werkwoord.", "到 staat direct achter 找, niet na het ding."] },
        { type: "mc", q: "\"Heb je deze karakters onthouden?\" 这些汉字你记___了吗？",
          options: ["住", "懂", "开", "饱"], answer: 0,
          why: ["Goed: 记住 = onthouden.", "懂 hoort bij begrijpen (听懂, 看懂).", "开 betekent open of weg.", "饱 is verzadigd, na eten (吃饱)."] }
      ]
    },
    {
      id: "03", slug: "vergelijken", title: "Vergelijken met 比", sub: "Groter, niet zo groot, even groot",
      canDo: "Je kunt nu twee dingen vergelijken met 比, 没有 ... 那么 en 跟 ... 一样.",
      guess: {
        q: "\"Hij is twee jaar ouder dan ik.\" Welke zin klopt, denk je?",
        options: ["他比我大两岁。", "他比我两岁大。", "他两岁比我大。", "他比我很大两岁。"], answer: 0,
        why: ["Goed: het verschil komt ná het bijvoeglijk naamwoord.", "Het verschil (两岁) komt achter 大, niet ervoor.", "比我 staat direct na wie je vergelijkt.", "In een 比-zin gebruik je geen 很."]
      },
      problem: "In het Nederlands verander je het woord: groot, groter. In het Chinees verandert het woord niet. Je zet er 比 (bǐ) voor, met wat je vergelijkt.",
      pattern: [
        { l: "A", v: "他", c: 1 }, { l: "比", v: "比", c: 2, key: true }, { l: "B", v: "我", c: 3 },
        { l: "eigenschap", v: "高", c: 4 }, { l: "verschil", v: "一点儿", c: 5 }
      ],
      patternCap: "A 比 B + eigenschap (+ 一点儿 / 多了 / 两岁) · A 没有 B (那么) + eigenschap · A 跟 B 一样 + eigenschap",
      rules: [
        "Geen 很 of 非常 in een 比-zin. Wel 更 of 还: 他比我还高。",
        "Het verschil komt achteraan: 大两岁, 快多了, 贵一点儿.",
        "\"Niet zo ... als\": A 没有 B 那么 + eigenschap.",
        "\"Even ... als\": A 跟 B 一样 + eigenschap."
      ],
      pitfall: "他比我很高 is fout. Zeg 他比我高, 他比我高多了 of 他比我还高.",
      examples: [
        { cn: "今天比昨天冷。", py: "Jīntiān bǐ zuótiān lěng.", nl: "Vandaag is het kouder dan gisteren." },
        { cn: "我哥哥比我高一点儿。", py: "Wǒ gēge bǐ wǒ gāo yìdiǎnr.", nl: "Mijn broer is iets langer dan ik." },
        { cn: "这个房间没有那个房间那么安静。", py: "Zhège fángjiān méiyǒu nàge fángjiān nàme ānjìng.", nl: "Deze kamer is niet zo rustig als die." },
        { cn: "我跟你一样高。", py: "Wǒ gēn nǐ yíyàng gāo.", nl: "Ik ben even lang als jij." }
      ],
      vocab: [
        ["比", "bǐ", "dan (bij vergelijken)"], ["更", "gèng", "nog meer"], ["一样", "yíyàng", "hetzelfde, even"], ["矮", "ǎi", "klein (van lengte)"],
        ["胖", "pàng", "dik"], ["瘦", "shòu", "dun"], ["年轻", "niánqīng", "jong"], ["安静", "ānjìng", "rustig, stil"],
        ["简单", "jiǎndān", "eenvoudig"], ["舒服", "shūfu", "comfortabel, lekker"]
      ],
      dialogue: [
        ["A", "北京和上海，你觉得哪个城市好？", "Běijīng hé Shànghǎi, nǐ juéde nǎge chéngshì hǎo?", "Beijing of Shanghai, welke stad vind jij beter?"],
        ["B", "北京的冬天比上海冷多了。", "Běijīng de dōngtiān bǐ Shànghǎi lěng duō le.", "De winter in Beijing is veel kouder dan in Shanghai."],
        ["A", "上海呢？", "Shànghǎi ne?", "En Shanghai?"],
        ["B", "上海没有北京那么冷，可是比北京贵一点儿。", "Shànghǎi méiyǒu Běijīng nàme lěng, kěshì bǐ Běijīng guì yìdiǎnr.", "Shanghai is niet zo koud als Beijing, maar wel iets duurder."],
        ["A", "那我还是去北京吧。", "Nà wǒ háishi qù Běijīng ba.", "Dan ga ik toch maar naar Beijing."]
      ],
      questions: [
        { type: "mc", q: "Welke zin klopt?",
          options: ["地铁比公共汽车快多了。", "地铁比公共汽车很快。", "地铁比公共汽车非常快。", "地铁快比公共汽车。"], answer: 0,
          why: ["Goed: 多了 komt achter de eigenschap.", "很 mag niet in een 比-zin.", "非常 mag ook niet in een 比-zin.", "比 + B komt vóór de eigenschap."] },
        { type: "mc", q: "\"Shanghai is niet zo koud als Beijing.\"",
          options: ["上海没有北京那么冷。", "上海不比北京冷。", "上海比北京没有冷。", "上海没有比北京冷。"], answer: 0,
          why: ["Goed: A 没有 B 那么 + eigenschap.", "不比 betekent \"niet kouder dan\": ongeveer even koud. Dat is iets anders.", "没有 staat vóór B, niet na 比 B.", "Gebruik 没有 B 那么, niet 没有 比 B."] },
        { type: "order", q: "Zet in de goede volgorde: \"Ik ben even lang als mijn zus.\"",
          tokens: [["我", "wǒ"], ["跟", "gēn"], ["我姐姐", "wǒ jiějie"], ["一样", "yíyàng"], ["高", "gāo"]] },
        { type: "mc", q: "这件衣服比那件___贵。",
          options: ["还", "很", "非常", "太"], answer: 0,
          why: ["Goed: 还 (of 更) mag wel in een 比-zin.", "很 mag niet in een 比-zin.", "非常 mag niet in een 比-zin.", "太 mag niet in een 比-zin."] },
        { type: "open", q: "Vergelijk twee dingen uit je eigen leven met 比.", model: ["我的新工作比以前的工作忙多了。", "我的猫比我的狗安静。"],
          tip: "Check: geen 很 in de zin, en het verschil (多了, 一点儿) staat achteraan." }
      ],
      review: [
        { type: "mc", q: "\"Deze film is niet zo interessant als die.\"",
          options: ["这个电影没有那个电影那么有意思。", "这个电影比那个电影不有意思。", "这个电影不有意思比那个。", "这个电影那么没有那个电影有意思。"], answer: 0,
          why: ["Goed.", "不有意思 bestaat niet, en \"niet zo ... als\" is 没有 ... 那么.", "比 + B komt vóór de eigenschap.", "那么 staat ná B, vlak voor de eigenschap."] },
        { type: "mc", q: "我妹妹___我小三岁。",
          options: ["比", "跟", "没有", "一样"], answer: 0,
          why: ["Goed: 比我小三岁 = drie jaar jonger dan ik.", "跟 vraagt om 一样 erachter.", "没有 ... 小三岁 kan niet: bij 没有 komt geen verschil.", "一样 staat ná B, niet op deze plek."] }
      ]
    },
    {
      id: "04", slug: "guo-le", title: "过 of 了", sub: "Ooit meegemaakt, of net gebeurd",
      canDo: "Je kunt nu met 过 vertellen wat je ooit hebt meegemaakt, en het verschil met 了 zien.",
      guess: {
        q: "Welke zin zegt: \"Ik heb (ooit in mijn leven) Chinees geleerd\"?",
        options: ["我学过汉语。", "我学了汉语。", "我在学汉语。", "我要学汉语。"], answer: 0,
        why: ["Goed: 过 = ervaring, ergens in je verleden.", "了 zegt dat het op een bepaald moment gebeurd is, niet dat het een ervaring is.", "在 = nu bezig.", "要 = gaat gebeuren."]
      },
      problem: "\"Ben je weleens in China geweest?\" gaat niet over één moment. Het gaat over je ervaring tot nu. Daarvoor zet je 过 (guo) achter het werkwoord. Met 了 vertel je wat er op een bepaald moment gebeurde.",
      pattern: [
        { l: "wie", v: "我", c: 1 }, { l: "werkwoord", v: "去", c: 4 }, { l: "ervaring", v: "过", c: 2, key: true }, { l: "waar/wat", v: "中国", c: 3 }
      ],
      patternCap: "过 = ooit, ergens in je leven · 了 = gebeurd, vaak op een genoemd moment (去年, 昨天)",
      rules: [
        "Ervaring: werkwoord + 过. 我去过中国。",
        "Ontkennen: 没 + werkwoord + 过. 我没去过中国。 Nooit: 从来没 ... 过.",
        "Vragen: 你去过中国吗？ of 你去过中国没有？",
        "Hoe vaak: 我去过两次。"
      ],
      pitfall: "Bij 过 gebruik je 没, nooit 不: 我不去过 is fout.",
      examples: [
        { cn: "我去过中国。", py: "Wǒ qùguo Zhōngguó.", nl: "Ik ben weleens in China geweest." },
        { cn: "我去年去了中国。", py: "Wǒ qùnián qùle Zhōngguó.", nl: "Vorig jaar ben ik naar China gegaan." },
        { cn: "我从来没吃过北京烤鸭。", py: "Wǒ cónglái méi chīguo Běijīng kǎoyā.", nl: "Ik heb nog nooit Pekingeend gegeten." }
      ],
      vocab: [
        ["过", "guo", "(ervaring: weleens)"], ["曾经", "céngjīng", "ooit, vroeger"], ["从来", "cónglái", "altijd (从来没 = nog nooit)"], ["次", "cì", "keer"],
        ["爬山", "páshān", "bergwandelen"], ["国家", "guójiā", "land"], ["历史", "lìshǐ", "geschiedenis"], ["熊猫", "xióngmāo", "panda"],
        ["节目", "jiémù", "programma"], ["地方", "dìfang", "plek"]
      ],
      dialogue: [
        ["A", "你去过中国吗？", "Nǐ qùguo Zhōngguó ma?", "Ben je weleens in China geweest?"],
        ["B", "去过，去过两次。", "Qùguo, qùguo liǎng cì.", "Ja, twee keer."],
        ["A", "你爬过长城吗？", "Nǐ páguo Chángchéng ma?", "Heb je weleens de Chinese Muur beklommen?"],
        ["B", "爬过！去年我去了北京，第一天就爬了长城。", "Páguo! Qùnián wǒ qùle Běijīng, dì yī tiān jiù pále Chángchéng.", "Ja! Vorig jaar ging ik naar Beijing en de eerste dag beklom ik meteen de Muur."],
        ["A", "真好。我从来没去过中国。", "Zhēn hǎo. Wǒ cónglái méi qùguo Zhōngguó.", "Wat mooi. Ik ben nog nooit in China geweest."]
      ],
      questions: [
        { type: "mc", q: "\"Ik ben nog nooit in Japan geweest.\"",
          options: ["我从来没去过日本。", "我从来不去过日本。", "我从来没去了日本。", "我没从来去过日本。"], answer: 0,
          why: ["Goed: 从来没 + werkwoord + 过.", "Bij 过 gebruik je 没, niet 不.", "Voor \"nog nooit\" is het 过, niet 了.", "从来 komt vóór 没."] },
        { type: "mc", q: "Iemand vraagt: 你去过上海吗？ Welk antwoord past?",
          options: ["去过，去过两次。", "没去了。", "不去过。", "去着。"], answer: 0,
          why: ["Goed: je antwoordt met hetzelfde werkwoord + 过.", "Met 没 valt 了 weg, en de vraag ging over 过.", "Bij 过 gebruik je 没, niet 不.", "着 betekent \"bezig met / in een toestand\"."] },
        { type: "order", q: "Zet in de goede volgorde: \"Ik heb nog nooit een panda gezien.\"",
          tokens: [["我", "wǒ"], ["从来", "cónglái"], ["没", "méi"], ["看过", "kànguo"], ["熊猫", "xióngmāo"]] },
        { type: "mc", q: "Wat betekent: 我曾经在北京住过一年。",
          options: ["Ik heb ooit een jaar in Beijing gewoond.", "Ik woon al een jaar in Beijing.", "Ik ga een jaar in Beijing wonen.", "Ik woon sinds vorig jaar in Beijing."], answer: 0,
          why: ["Goed: 曾经 ... 过 = ooit, in het verleden.", "\"Al een jaar en nog steeds\" zou 了 ... 了 zijn.", "Dit gaat over de toekomst; 过 gaat over het verleden.", "去年 staat er niet; 过 zegt niets over nu."] },
        { type: "open", q: "Vertel iets wat je nog nooit gedaan hebt.", model: ["我从来没爬过黄山。", "我从来没吃过臭豆腐。"],
          tip: "Check: 从来没 + werkwoord + 过 + ding." }
      ],
      review: [
        { type: "mc", q: "\"Heb je weleens Chinese thee gedronken?\"",
          options: ["你喝过中国茶吗？", "你喝了中国茶过吗？", "你过喝中国茶吗？", "你喝中国茶过吗？"], answer: 0,
          why: ["Goed.", "过 staat direct achter het werkwoord, zonder 了.", "过 komt ná het werkwoord.", "过 staat direct achter 喝, niet na het ding."] },
        { type: "mc", q: "\"Deze film heb ik nog nooit gezien.\" 这个电影我从来没看___。",
          options: ["过", "了", "着", "的"], answer: 0,
          why: ["Goed: 从来没 ... 过.", "Met 没 valt 了 weg.", "着 is \"bezig / in een toestand\".", "的 hoort hier niet."] }
      ]
    },
    {
      id: "05", slug: "yue", title: "越来越 en 越 ... 越", sub: "Steeds meer, hoe meer ... hoe meer",
      canDo: "Je kunt nu zeggen dat iets steeds meer verandert, en dat het ene met het andere meegroeit.",
      guess: {
        q: "雨越下越大。Wat betekent dit, denk je?",
        options: ["Het regent steeds harder.", "Het regent steeds minder.", "Het regent heel hard.", "Het stopt met regenen."], answer: 0,
        why: ["Goed: 越 A 越 B = hoe meer A, hoe meer B.", "大 is \"groot\": het wordt meer, niet minder.", "Dat zou 雨很大 zijn: daar zit geen verandering in.", "Niets in de zin zegt dat het stopt."]
      },
      problem: "\"Het wordt steeds kouder.\" In het Nederlands herhaal je een woord. In het Chinees zet je 越来越 (yuè lái yuè) vóór de eigenschap. Twee dingen die samen groeien? Dan 越 A 越 B.",
      pattern: [
        { l: "wat", v: "天气", c: 1 }, { l: "steeds meer", v: "越来越", c: 2, key: true }, { l: "eigenschap", v: "冷", c: 4 }, { l: "", v: "了", c: 3 }
      ],
      patternCap: "A 越来越 + eigenschap (了) · 越 + A, 越 + B: 你越练习，说得越好。",
      rules: [
        "Geen 很 of 非常 vóór de eigenschap: 越来越很冷 is fout.",
        "Vaak eindigt de zin op 了: er is iets veranderd.",
        "越 A 越 B: twee keer 越, elk vóór een werkwoord of eigenschap."
      ],
      pitfall: "越 staat altijd vóór het werkwoord of de eigenschap, nooit vóór het onderwerp: 越我吃 is fout.",
      examples: [
        { cn: "天气越来越冷了。", py: "Tiānqì yuè lái yuè lěng le.", nl: "Het wordt steeds kouder." },
        { cn: "我的汉语水平越来越高了。", py: "Wǒ de Hànyǔ shuǐpíng yuè lái yuè gāo le.", nl: "Mijn niveau Chinees wordt steeds hoger." },
        { cn: "你越练习，说得越好。", py: "Nǐ yuè liànxí, shuō de yuè hǎo.", nl: "Hoe meer je oefent, hoe beter je spreekt." },
        { cn: "雨越下越大。", py: "Yǔ yuè xià yuè dà.", nl: "Het regent steeds harder." }
      ],
      vocab: [
        ["越来越", "yuè lái yuè", "steeds meer"], ["越", "yuè", "hoe ... (hoe ...)"], ["变化", "biànhuà", "verandering"], ["习惯", "xíguàn", "gewend raken; gewoonte"],
        ["水平", "shuǐpíng", "niveau"], ["提高", "tígāo", "verbeteren, verhogen"], ["环境", "huánjìng", "omgeving, milieu"], ["城市", "chéngshì", "stad"],
        ["练习", "liànxí", "oefenen"], ["健康", "jiànkāng", "gezond"]
      ],
      dialogue: [
        ["A", "你来中国多长时间了？", "Nǐ lái Zhōngguó duō cháng shíjiān le?", "Hoe lang ben je al in China?"],
        ["B", "半年了。", "Bàn nián le.", "Een half jaar."],
        ["A", "你的汉语越来越好了！", "Nǐ de Hànyǔ yuè lái yuè hǎo le!", "Je Chinees wordt steeds beter!"],
        ["B", "谢谢！我觉得汉语越学越有意思。", "Xièxie! Wǒ juéde Hànyǔ yuè xué yuè yǒu yìsi.", "Dank je! Hoe meer ik leer, hoe leuker ik Chinees vind."],
        ["A", "天气也越来越冷了，你习惯吗？", "Tiānqì yě yuè lái yuè lěng le, nǐ xíguàn ma?", "Het wordt ook steeds kouder. Ben je eraan gewend?"],
        ["B", "还不太习惯。", "Hái bú tài xíguàn.", "Nog niet echt."]
      ],
      questions: [
        { type: "mc", q: "Welke zin klopt?",
          options: ["这个城市越来越漂亮了。", "这个城市越来越很漂亮。", "这个城市很越来越漂亮。", "这个城市越来越漂亮很。"], answer: 0,
          why: ["Goed.", "Na 越来越 komt geen 很.", "很 kan niet vóór 越来越.", "很 staat nooit achter de eigenschap."] },
        { type: "mc", q: "\"Hoe meer ik eet, hoe dikker ik word.\"",
          options: ["我越吃越胖。", "我越来越吃胖。", "我吃越越胖。", "越我吃越胖。"], answer: 0,
          why: ["Goed: 越 + werkwoord, 越 + eigenschap.", "越来越 gaat over één ding dat verandert, niet over twee.", "Elke 越 staat vóór zijn eigen werkwoord of eigenschap.", "越 staat vóór het werkwoord, niet vóór het onderwerp."] },
        { type: "order", q: "Zet in de goede volgorde: \"Zijn Chinees wordt steeds beter.\"",
          tokens: [["他的", "tā de"], ["汉语", "Hànyǔ"], ["越来越", "yuè lái yuè"], ["好", "hǎo"], ["了", "le"]] },
        { type: "mc", q: "我来中国半年了，越来越___这里的生活了。",
          options: ["习惯", "提高", "水平", "环境"], answer: 0,
          why: ["Goed: 习惯 = gewend raken aan.", "提高 = verbeteren; je verbetert het leven hier niet.", "水平 is een zelfstandig naamwoord: niveau.", "环境 is een zelfstandig naamwoord: omgeving."] },
        { type: "open", q: "Beschrijf iets in jouw leven dat verandert.", model: ["我的城市越来越大了。", "我的工作越来越忙了。", "我越学汉语越喜欢中国菜。"],
          tip: "Check: geen 很 na 越来越, en 了 aan het eind." }
      ],
      review: [
        { type: "mc", q: "\"Het wordt steeds warmer.\"",
          options: ["天气越来越热了。", "天气越来越很热。", "天气越热越来了。", "天气很越来越热了。"], answer: 0,
          why: ["Goed.", "Geen 很 na 越来越.", "越来越 is één vast blok vóór de eigenschap.", "很 kan niet vóór 越来越."] },
        { type: "mc", q: "\"Hoe meer hij praat, hoe bozer hij wordt.\"",
          options: ["他越说越生气。", "他越来越说生气。", "他说越越生气。", "越他说越生气。"], answer: 0,
          why: ["Goed.", "Voor twee dingen die samen groeien: 越 A 越 B.", "Elke 越 staat vóór zijn eigen woord.", "越 staat niet vóór het onderwerp."] }
      ]
    },
    {
      id: "06", slug: "bei", title: "De 被-zin", sub: "Wat jou (of iets) overkomt",
      canDo: "Je kunt nu met 被 vertellen wat iets of iemand is overkomen, en wie het deed.",
      guess: {
        q: "我的手机被我弟弟弄坏了。Wie heeft de telefoon kapotgemaakt?",
        options: ["Mijn broertje", "Ik", "Niemand, hij ging vanzelf kapot", "Dat staat er niet"], answer: 0,
        why: ["Goed: na 被 staat wie het deed.", "我 staat in 我的手机: het is míjn telefoon, maar ik deed het niet.", "被 + 我弟弟 zegt wie het deed.", "Het staat er wel: direct na 被."]
      },
      problem: "Vaak wil je beginnen met wat er iets overkwam: mijn fiets. Daarna zeg je wie het deed en wat er gebeurde. Daarvoor is 被 (bèi). Het lijkt op 把, maar andersom.",
      pattern: [
        { l: "wat", v: "杯子", c: 3 }, { l: "被", v: "被", c: 2, key: true }, { l: "door wie", v: "我", c: 1 },
        { l: "werkwoord", v: "打", c: 4 }, { l: "resultaat", v: "破了", c: 5 }
      ],
      patternCap: "Vergelijk: 我把杯子打破了 (ik → glas)  ·  杯子被我打破了 (glas ← door mij)",
      rules: [
        "Na het werkwoord komt nog iets, net als bij 把: 了, 走, 坏 ...",
        "Wie het deed mag weg: 我的自行车被偷了。",
        "Ontkennen vóór 被: 他没被骗。",
        "Vaak gaat het om iets vervelends."
      ],
      pitfall: "被 en 把 niet verwisselen: bij 把 komt eerst wie het doet, bij 被 eerst wat het overkomt.",
      examples: [
        { cn: "我的自行车被偷了。", py: "Wǒ de zìxíngchē bèi tōu le.", nl: "Mijn fiets is gestolen." },
        { cn: "杯子被我打破了。", py: "Bēizi bèi wǒ dǎpò le.", nl: "Het glas is door mij gebroken." },
        { cn: "我的帽子被风吹走了。", py: "Wǒ de màozi bèi fēng chuīzǒu le.", nl: "Mijn hoed is door de wind weggeblazen." }
      ],
      vocab: [
        ["被", "bèi", "(door; wat iemand overkomt)"], ["偷", "tōu", "stelen"], ["小偷", "xiǎotōu", "dief"], ["骗", "piàn", "bedriegen"],
        ["弄坏", "nònghuài", "kapotmaken"], ["打破", "dǎpò", "breken"], ["吹", "chuī", "blazen, waaien"], ["风", "fēng", "wind"],
        ["自行车", "zìxíngchē", "fiets"], ["拿走", "názǒu", "meenemen, weghalen"]
      ],
      dialogue: [
        ["A", "你怎么走路来上班？", "Nǐ zěnme zǒulù lái shàngbān?", "Waarom kom je lopend naar je werk?"],
        ["B", "别提了，我的自行车被偷了。", "Bié tí le, wǒ de zìxíngchē bèi tōu le.", "Hou op, mijn fiets is gestolen."],
        ["A", "真的吗？什么时候？", "Zhēn de ma? Shénme shíhou?", "Echt? Wanneer?"],
        ["B", "昨天晚上。今天早上我的伞也被风吹坏了。", "Zuótiān wǎnshang. Jīntiān zǎoshang wǒ de sǎn yě bèi fēng chuīhuài le.", "Gisteravond. En vanochtend is mijn paraplu ook nog kapotgewaaid."],
        ["A", "你最近运气不太好啊。", "Nǐ zuìjìn yùnqi bú tài hǎo a.", "Je hebt de laatste tijd niet veel geluk, hè."]
      ],
      questions: [
        { type: "mc", q: "Maak er een 被-zin van: 小偷偷了我的钱包。",
          options: ["我的钱包被小偷偷了。", "小偷被我的钱包偷了。", "我的钱包被偷小偷了。", "被小偷我的钱包偷了。"], answer: 0,
          why: ["Goed: wat het overkomt + 被 + wie + werkwoord + 了.", "Nu steelt de portemonnee de dief: de rollen zijn omgedraaid.", "Wie het deed staat direct na 被, vóór het werkwoord.", "De zin begint met wat het overkomt, niet met 被."] },
        { type: "mc", q: "\"Hij is niet bedrogen.\"",
          options: ["他没被骗。", "他被没骗。", "他不被骗了。", "他被骗没。"], answer: 0,
          why: ["Goed: 没 vóór 被.", "没 staat vóór 被, niet erna.", "Voor iets wat (niet) gebeurd is: 没, en dan zonder 了.", "没 staat nooit achteraan."] },
        { type: "order", q: "Zet in de goede volgorde: \"Mijn taart is door mijn zusje opgegeten.\"",
          tokens: [["我的", "wǒ de"], ["蛋糕", "dàngāo"], ["被", "bèi"], ["妹妹", "mèimei"], ["吃了", "chī le"]] },
        { type: "mc", q: "Welke zin klopt?",
          options: ["窗户被风吹开了。", "窗户被风吹。", "窗户被吹风开了。", "风被窗户吹开了。"], answer: 0,
          why: ["Goed.", "Na het werkwoord moet nog iets komen (开了).", "Wie het deed (风) staat vóór het werkwoord.", "Nu blaast het raam de wind open: de rollen zijn omgedraaid."] },
        { type: "open", q: "Vertel iets vervelends dat jou overkwam, met 被.", model: ["我的伞被别人拿走了。", "我的手机被我弄坏了。"],
          tip: "Check: eerst wat het overkwam, dan 被, dan wie, dan werkwoord + iets erachter." }
      ],
      review: [
        { type: "mc", q: "\"Mijn boek is door een vriend meegenomen.\"",
          options: ["我的书被朋友拿走了。", "朋友被我的书拿走了。", "我的书被拿走朋友了。", "我的书朋友被拿走了。"], answer: 0,
          why: ["Goed.", "De rollen zijn omgedraaid: nu neemt het boek de vriend mee.", "Wie het deed staat vóór het werkwoord.", "被 staat direct vóór wie het deed."] },
        { type: "mc", q: "杯子___我打破了。",
          options: ["被", "把", "比", "跟"], answer: 0,
          why: ["Goed: het glas staat voorop, dus 被.", "Met 把 komt wie het doet voorop: 我把杯子打破了。", "比 is voor vergelijken.", "跟 betekent \"met\"."] }
      ]
    }
  ]
};
