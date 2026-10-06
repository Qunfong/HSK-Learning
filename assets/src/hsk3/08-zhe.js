({
  id: "08", slug: "zhe", title: "Toestand met 着", sub: "De deur staat open, hij zegt het lachend",
  canDo: "Je kunt nu met 着 zeggen dat iets in een toestand blijft, en dat iemand iets doet terwijl hij iets anders doet.",
  guess: {
    q: "Je ziet dat de deur openstaat. Welke zin past, denk je?",
    options: ["门开着。", "门在开。", "门开过。", "门开着了。"], answer: 0,
    why: ["Goed: 开 + 着 = hij staat open, en blijft zo.", "在 + werkwoord is bezig zijn: de deur gaat nu open.", "过 betekent: ooit eens gebeurd.", "着 en 了 staan niet samen achter één werkwoord."]
  },
  problem: "In het Nederlands zeg je \"de deur staat open\" of \"hij zei lachend\". Het Chinees heeft daar één woordje voor: 着 (zhe), direct na het werkwoord. Het zegt dat een toestand blijft duren. Of dat iets op de achtergrond gebeurt terwijl je iets anders doet.",
  pattern: [
    { l: "wie", v: "她", c: 1 }, { l: "werkwoord", v: "穿", c: 4 }, { l: "着", v: "着", c: 2, key: true },
    { l: "ding", v: "一条红裙子", c: 3 }
  ],
  patternCap: "Ding + werkwoord + 着 (toestand)  ·  werkwoord 1 + 着 + werkwoord 2 (tegelijk)  ·  plaats + werkwoord + 着 + ding (daar ligt/hangt ...)",
  rules: [
    "着 staat direct na het werkwoord: 开着, 穿着, 拿着.",
    "Een toestand die blijft: 门开着 (de deur staat open), 他穿着大衣 (hij heeft een jas aan).",
    "Twee dingen tegelijk: werkwoord 1 + 着 + werkwoord 2. Werkwoord 2 is de hoofdzaak: 他笑着说.",
    "Plaats vooraan: 墙上挂着一张地图 (aan de muur hangt een kaart).",
    "Ontkennen met 没: 门没开着. 着 en 了 staan nooit samen achter één werkwoord."
  ],
  pitfall: "V + 着 is niet \"bezig zijn\". 他在穿大衣 = hij trekt zijn jas aan. 他穿着大衣 = hij heeft zijn jas aan.",
  examples: [
    { cn: "门开着，你进来吧。", py: "Mén kāizhe, nǐ jìnlai ba.", nl: "De deur staat open, kom maar binnen." },
    { cn: "她穿着一条红裙子。", py: "Tā chuānzhe yì tiáo hóng qúnzi.", nl: "Ze heeft een rode jurk aan." },
    { cn: "他笑着说：\"没关系。\"", py: "Tā xiàozhe shuō: \"Méi guānxi.\"", nl: "Hij zei lachend: \"Geeft niet.\"" },
    { cn: "墙上挂着一张地图。", py: "Qiáng shang guàzhe yì zhāng dìtú.", nl: "Aan de muur hangt een kaart." }
  ],
  nuance: [
    { h: "着 of 在 + werkwoord?",
      p: "在 + werkwoord is een handeling die nu bezig is. Werkwoord + 着 is de toestand die daarna blijft. Bij werkwoorden als 穿, 开 en 拿 is dat een groot verschil. Eerst trek je iets aan (在穿), daarna heb je het aan (穿着).",
      ex: [
        { cn: "他在开门。", py: "Tā zài kāi mén.", nl: "Hij is de deur aan het openmaken." },
        { cn: "门开着。", py: "Mén kāizhe.", nl: "De deur staat open." }
      ] },
    { h: "着 of 了?",
      p: "了 zegt dat er iets veranderd is: de lamp is aangegaan. 着 zegt hoe het nu is en blijft: de lamp is aan. Vertel je wat er gebeurde, gebruik dan 了. Beschrijf je wat je ziet, gebruik dan 着.",
      ex: [
        { cn: "灯开了。", py: "Dēng kāi le.", nl: "De lamp is aangegaan." },
        { cn: "灯一直开着。", py: "Dēng yìzhí kāizhe.", nl: "De lamp staat de hele tijd aan." }
      ] },
    { h: "Twee dingen tegelijk: wat staat waar?",
      p: "Bij werkwoord 1 + 着 + werkwoord 2 is werkwoord 1 de manier of houding: lachend, staand, lopend. Werkwoord 2 is wat je eigenlijk doet. Zijn beide handelingen even belangrijk, dan gebruik je 一边……一边 (les 10).",
      ex: [
        { cn: "我们走着去吧，不远。", py: "Wǒmen zǒuzhe qù ba, bù yuǎn.", nl: "Laten we lopend gaan, het is niet ver." },
        { cn: "他喜欢躺着看书。", py: "Tā xǐhuan tǎngzhe kàn shū.", nl: "Hij leest graag liggend." }
      ] }
  ],
  mistakes: [
    { wrong: "门开着了。", right: "门开着。", why: "着 en 了 staan niet samen achter één werkwoord. Voor een blijvende toestand: alleen 着." },
    { wrong: "门不开着。", right: "门没开着。", why: "Een toestand met 着 ontken je met 没, niet met 不." },
    { wrong: "他说着笑：\"没关系。\"", right: "他笑着说：\"没关系。\"", why: "De manier (笑) krijgt 着. De hoofdhandeling (说) staat achteraan." },
    { wrong: "桌子上一本书放着。", right: "桌子上放着一本书。", why: "Na de plaats komt eerst werkwoord + 着, dan pas het ding." }
  ],
  vocab: [
    ["着", "zhe", "(toestand die blijft; tegelijk)"], ["穿", "chuān", "aantrekken, aanhebben"], ["挂", "guà", "hangen, ophangen"],
    ["墙", "qiáng", "muur"], ["笑", "xiào", "lachen"], ["躺", "tǎng", "liggen"],
    ["地图", "dìtú", "(land)kaart"], ["裙子", "qúnzi", "rok, jurk"], ["衬衫", "chènshān", "overhemd, blouse"], ["灯", "dēng", "lamp"]
  ],
  dialogue: [
    ["A", "你看见王老师了吗？", "Nǐ kànjiàn Wáng lǎoshī le ma?", "Heb je juffrouw Wang gezien?"],
    ["B", "看见了。门口站着的那个人就是她。", "Kànjiàn le. Ménkǒu zhànzhe de nàge rén jiù shì tā.", "Ja. Die persoon die bij de deur staat, dat is zij."],
    ["A", "穿着白衬衫的那个？", "Chuānzhe bái chènshān de nàge?", "Die met die witte blouse aan?"],
    ["B", "对。她手里还拿着一本书。", "Duì. Tā shǒu li hái názhe yì běn shū.", "Ja. Ze heeft ook een boek in haar hand."],
    ["A", "好，我过去跟她说话。", "Hǎo, wǒ guòqu gēn tā shuōhuà.", "Oké, ik ga naar haar toe om met haar te praten."]
  ],
  reading: {
    title: "一张老照片",
    lines: [
      { cn: "这是我爷爷奶奶年轻时候的一张照片。", py: "Zhè shì wǒ yéye nǎinai niánqīng shíhou de yì zhāng zhàopiàn.", nl: "Dit is een foto van mijn opa en oma toen ze jong waren." },
      { cn: "照片上，爷爷穿着一件白衬衫，奶奶穿着一条红裙子。", py: "Zhàopiàn shang, yéye chuānzhe yí jiàn bái chènshān, nǎinai chuānzhe yì tiáo hóng qúnzi.", nl: "Op de foto heeft opa een wit overhemd aan, en oma een rode jurk." },
      { cn: "他们站在一个公园门口。", py: "Tāmen zhàn zài yí ge gōngyuán ménkǒu.", nl: "Ze staan bij de ingang van een park." },
      { cn: "爷爷手里拿着一个小蛋糕。", py: "Yéye shǒu li názhe yí ge xiǎo dàngāo.", nl: "Opa heeft een taartje in zijn hand." },
      { cn: "奶奶笑着看爷爷。", py: "Nǎinai xiàozhe kàn yéye.", nl: "Oma kijkt lachend naar opa." },
      { cn: "那天是奶奶的生日，爷爷第一次请她吃饭。", py: "Nà tiān shì nǎinai de shēngrì, yéye dì yī cì qǐng tā chīfàn.", nl: "Die dag was oma jarig. Opa nam haar voor het eerst mee uit eten." },
      { cn: "现在，我家的墙上还挂着这张照片。", py: "Xiànzài, wǒ jiā de qiáng shang hái guàzhe zhè zhāng zhàopiàn.", nl: "Nu hangt deze foto nog steeds bij ons thuis aan de muur." },
      { cn: "每次奶奶看到它，都会笑着说：\"那天他很紧张！\"", py: "Měi cì nǎinai kàndào tā, dōu huì xiàozhe shuō: \"Nà tiān tā hěn jǐnzhāng!\"", nl: "Elke keer als oma hem ziet, zegt ze lachend: \"Hij was die dag heel zenuwachtig!\"" }
    ],
    questions: [
      { type: "mc", q: "Wat had opa in zijn hand?",
        options: ["Een taartje.", "Een rode jurk.", "Bloemen.", "Een foto."], answer: 0,
        why: ["Goed: 爷爷手里拿着一个小蛋糕。", "De rode jurk had oma aan.", "Over bloemen staat niets in de tekst.", "De foto is het onderwerp van de tekst, niet iets in zijn hand."] },
      { type: "mc", q: "Waar is de foto nu?",
        options: ["Hij hangt bij de schrijver thuis aan de muur.", "Hij ligt in een doos.", "Oma heeft hem in haar tas.", "Hij hangt in het park."], answer: 0,
        why: ["Goed: 我家的墙上还挂着这张照片。", "Er staat 挂着: hij hangt, hij ligt niet in een doos.", "Oma kijkt naar de foto, maar hij hangt aan de muur.", "Het park staat óp de foto."] },
      { type: "mc", q: "奶奶笑着看爷爷。Wat betekent 笑着 hier?",
        options: ["Oma lacht terwijl ze naar opa kijkt.", "Oma lacht om opa.", "Oma is net begonnen met lachen.", "Oma kijkt en lacht daarna."], answer: 0,
        why: ["Goed: werkwoord 1 + 着 + werkwoord 2: tegelijk, lachend kijken.", "笑着 zegt hoe ze kijkt, niet waar ze om lacht.", "Begin van een handeling is 起来, niet 着.", "着 betekent tegelijk, niet na elkaar."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"De lamp staat aan.\"",
      options: ["灯开着。", "灯在开。", "灯开着了。", "灯不开着。"], answer: 0,
      why: ["Goed: 开 + 着 = blijvende toestand.", "在 + werkwoord is een handeling die bezig is.", "着 en 了 staan niet samen achter één werkwoord.", "Dit is een ontkenning, en die moet met 没."] },
    { type: "mc", q: "\"Hij zei lachend: 'Geen probleem.'\"",
      options: ["他笑着说：\"没问题。\"", "他说着笑：\"没问题。\"", "他在笑说：\"没问题。\"", "他着笑说：\"没问题。\""], answer: 0,
      why: ["Goed: de manier (笑着) vóór de hoofdhandeling (说).", "De hoofdhandeling 说 hoort achteraan.", "在 + werkwoord is bezig zijn; voor \"lachend\" heb je 着 nodig.", "着 staat na het werkwoord, niet ervoor."] },
    { type: "order", q: "Zet in de goede volgorde: \"Aan de muur hangt een kaart.\"",
      tokens: [["墙上", "qiáng shang"], ["挂着", "guàzhe"], ["一张", "yì zhāng"], ["地图", "dìtú"]] },
    { type: "mc", q: "\"Hij is zijn jas aan het aantrekken.\"",
      options: ["他在穿大衣。", "他穿着大衣。", "他穿了大衣。", "他穿过大衣。"], answer: 0,
      why: ["Goed: 在 + werkwoord = nu bezig.", "穿着 = hij heeft de jas al aan.", "穿了 = hij heeft de jas aangetrokken: al klaar.", "穿过 = hij heeft die jas ooit gedragen."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["他穿着了一件新衣服。", "他穿着一件新衣服。", "他在穿衣服。", "他穿了一件新衣服。"], answer: 0,
      why: ["Goed: 着 en 了 staan niet samen. Zeg 穿着 of 穿了.", "Dit klopt: hij heeft nieuwe kleren aan.", "Dit klopt: hij is zich aan het aankleden.", "Dit klopt: hij heeft nieuwe kleren aangetrokken."] },
    { type: "fill", q: "我们走___去吧，不远。(Laten we lopend gaan, het is niet ver.)", answers: ["着"],
      hint: "Welk woord maakt van 走 de manier waarop je gaat?", why: "走着 + 去: werkwoord 1 + 着 zegt hoe je gaat." },
    { type: "mc", q: "\"Het raam staat niet open.\"",
      options: ["窗户没开着。", "窗户不开着。", "窗户开着没。", "窗户开没着。"], answer: 0,
      why: ["Goed: 没 vóór werkwoord + 着.", "Een toestand met 着 ontken je met 没.", "没 staat vóór het werkwoord, niet achteraan.", "没 komt niet tussen het werkwoord en 着."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ze lag op haar telefoon te kijken.\"",
      tokens: [["她", "tā"], ["躺着", "tǎngzhe"], ["看", "kàn"], ["手机", "shǒujī"]] },
    { type: "mc", q: "他站着吃饭。Wat betekent dit?",
      options: ["Hij eet staand.", "Hij staat op en gaat eten.", "Hij stopt met eten en staat op.", "Hij is aan het opstaan."], answer: 0,
      why: ["Goed: 站着 is de houding tijdens het eten.", "Dat is na elkaar; 着 betekent tegelijk.", "着 zegt niets over stoppen.", "Opstaan is 站起来, niet 站着."] },
    { type: "open", q: "Vertaal: \"De deur staat open.\"", model: ["门开着。", "门开着呢。"],
      tip: "Check: 开 + 着, zonder 了 en zonder 在." },
    { type: "open", q: "Vertaal: \"Ze zei huilend: 'Ik wil naar huis.'\"", model: ["她哭着说：\"我想回家。\"", "她哭着说：\"我要回家。\""],
      tip: "Check: de manier (哭着) staat vóór de hoofdhandeling (说)." }
  ],
  review: [
    { type: "mc", q: "\"Op tafel ligt een boek.\"",
      options: ["桌子上放着一本书。", "桌子上一本书放着。", "桌子上放着了一本书。", "一本书放着桌子上。"], answer: 0,
      why: ["Goed: plaats + werkwoord + 着 + ding.", "Na de plaats komt eerst werkwoord + 着, dan het ding.", "着 en 了 staan niet samen.", "De plaats staat vooraan, niet achter 放着."] },
    { type: "mc", q: "孩子们唱着歌回家了。Wat betekent dit?",
      options: ["De kinderen gingen zingend naar huis.", "De kinderen zongen thuis een lied.", "De kinderen gingen naar huis en zongen daarna.", "De kinderen zijn aan het zingen."], answer: 0,
      why: ["Goed: 唱着 is de manier waarop ze naar huis gingen.", "Ze zongen onderweg, niet pas thuis.", "着 betekent tegelijk, niet na elkaar.", "De hoofdhandeling is 回家了: naar huis gaan."] },
    { type: "mc", q: "\"De tv staat aan, maar niemand kijkt.\"",
      options: ["电视开着，可是没有人看。", "电视在开，可是没有人看。", "电视开着了，可是没有人看。", "电视开过，可是没有人看。"], answer: 0,
      why: ["Goed: 开着 = staat aan.", "在开 is bezig met aanzetten, geen toestand.", "着 en 了 staan niet samen.", "开过 betekent dat hij ooit aan heeft gestaan."] }
  ]
})
