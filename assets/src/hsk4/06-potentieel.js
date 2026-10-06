({
  id: "06", slug: "potentieel", title: "Kunnen of niet: V得 / V不 + resultaat", sub: "听得懂, 听不懂, 做不完, 买不到",
  canDo: "Je kunt nu zeggen of iets wel of niet lukt, met 得 of 不 tussen werkwoord en resultaat.",
  guess: {
    q: "老师说得太快，我听不懂。Wat betekent 听不懂, denk je?",
    options: ["Ik kan het niet verstaan.", "Ik wil niet luisteren.", "Ik heb niet geluisterd.", "Ik hoef het niet te begrijpen."], answer: 0,
    why: ["Goed: V + 不 + resultaat = het lukt niet.", "Het gaat niet om willen; je luistert wel.", "Je luistert wel, maar het begrijpen lukt niet.", "Het gaat niet om moeten; het lukt gewoon niet."]
  },
  problem: "Soms lukt iets niet, hoe hard je ook probeert. De les gaat te snel. Het eten is te veel. Dan zet je 得 (de) of 不 (bu) tussen het werkwoord en het resultaat. 听得懂 betekent: ik kan het verstaan. 听不懂: dat lukt niet.",
  pattern: [
    { l: "wie", v: "我", c: 1 }, { l: "werkwoord", v: "听", c: 4 }, { l: "得 / 不", v: "不", c: 2, key: true }, { l: "resultaat", v: "懂", c: 5 }
  ],
  patternCap: "听懂 = begrepen · 听得懂 = kan begrijpen · 听不懂 = kan niet begrijpen. Zo ook: 做不完, 买不到, 看得清楚, 来不及, 吃不了.",
  rules: [
    "Het lukt: werkwoord + 得 + resultaat. 我听得懂。",
    "Het lukt niet: werkwoord + 不 + resultaat. 我做不完。",
    "Vragen: 你听得懂吗？ of 你听得懂听不懂？",
    "Het ding komt erachter, of vooraan: 我买不到票。 / 票我买不到。",
    "Geen 了 tussen werkwoord en resultaat. 了 mag wel aan het eind: 我们买不到票了。"
  ],
  pitfall: "Zeg niet 我不能听懂 of 我不听懂. Lukt het niet? Zet 不 tussen werkwoord en resultaat: 我听不懂。",
  examples: [
    { cn: "黑板上的字你看得清楚吗？", py: "Hēibǎn shang de zì nǐ kàn de qīngchu ma?", nl: "Kun je de tekst op het bord goed lezen?" },
    { cn: "菜太多了，我吃不完。", py: "Cài tài duō le, wǒ chī bu wán.", nl: "Het is te veel eten, ik krijg het niet op." },
    { cn: "这么晚了，我们买不到票了。", py: "Zhème wǎn le, wǒmen mǎi bu dào piào le.", nl: "Het is zo laat, we kunnen geen kaartjes meer krijgen." },
    { cn: "他说得很慢，我听得懂。", py: "Tā shuō de hěn màn, wǒ tīng de dǒng.", nl: "Hij praat langzaam, ik kan het verstaan." }
  ],
  nuance: [
    { h: "听不懂, 没听懂 of 不能听懂?",
      p: "听不懂 zegt: ik ben niet in staat het te verstaan. Het is te snel, te moeilijk, of een taal die je niet kent. 没听懂 is een feit over één moment: ik heb het net niet begrepen. 不能听懂 zeg je niet. Voor \"niet kunnen begrijpen\" gebruik je altijd 听不懂.",
      ex: [
        { cn: "他说上海话，我听不懂。", py: "Tā shuō Shànghǎihuà, wǒ tīng bu dǒng.", nl: "Hij spreekt Shanghainees, dat versta ik niet." },
        { cn: "刚才那句话我没听懂，请再说一遍。", py: "Gāngcái nà jù huà wǒ méi tīngdǒng, qǐng zài shuō yí biàn.", nl: "Die zin van net heb ik niet begrepen. Zeg het alstublieft nog een keer." }
      ] },
    { h: "不能 of V不: mag het niet, of lukt het niet?",
      p: "不能 gaat vaak over toestemming of regels: het mag niet, of het is niet de bedoeling. V不 + resultaat zegt dat het niet lukt, door kracht, tijd, ruimte of kennis. Vergelijk: je mag niet naar binnen zonder kaartje, of je komt er niet in omdat de deur op slot zit.",
      ex: [
        { cn: "没有票不能进去。", py: "Méiyǒu piào bù néng jìnqu.", nl: "Zonder kaartje mag je niet naar binnen." },
        { cn: "门锁了，我进不去。", py: "Mén suǒ le, wǒ jìn bu qù.", nl: "De deur zit op slot, ik kom er niet in." }
      ] },
    { h: "来得及, 来不及 en V不了",
      p: "来得及 betekent: er is nog genoeg tijd. 来不及 betekent: het is te laat, de tijd is te kort. Er kan een werkwoord achter staan: 来不及吃早饭. V不了 (liǎo) zegt in het algemeen dat iets niet kan: te veel, te moeilijk, of door omstandigheden. 吃不了 = te veel om op te eten. 去不了 = ik kan niet gaan.",
      ex: [
        { cn: "我起晚了，来不及吃早饭了。", py: "Wǒ qǐ wǎn le, lái bu jí chī zǎofàn le.", nl: "Ik was te laat opgestaan, er was geen tijd meer om te ontbijten." },
        { cn: "我明天有考试，去不了你的生日晚会。", py: "Wǒ míngtiān yǒu kǎoshì, qù bu liǎo nǐ de shēngrì wǎnhuì.", nl: "Ik heb morgen een examen, ik kan niet naar je verjaardagsfeest." }
      ] }
  ],
  mistakes: [
    { wrong: "我不能听懂他的话。", right: "我听不懂他的话。", why: "\"Niet kunnen begrijpen\" is 听不懂: 不 tussen werkwoord en resultaat, zonder 能." },
    { wrong: "我听得不懂他的话。", right: "我听不懂他的话。", why: "得 en 不 gaan niet samen. 得 = het lukt, 不 = het lukt niet. Kies er één." },
    { wrong: "我来不及了吃饭。", right: "我来不及吃饭了。", why: "Het werkwoord komt direct na 来不及. 了 staat aan het eind van de zin." },
    { wrong: "这里抽不了烟。", right: "这里不能抽烟。", why: "Gaat het om een regel (het mag niet), dan gebruik je 不能, niet V不了." }
  ],
  vocab: [
    ["得", "de", "(V得 + resultaat: het lukt)"], ["清楚", "qīngchu", "duidelijk"], ["黑板", "hēibǎn", "schoolbord"],
    ["演出", "yǎnchū", "voorstelling"], ["座位", "zuòwèi", "zitplaats"], ["剧场", "jùchǎng", "theater"],
    ["声音", "shēngyīn", "geluid, stem"], ["来得及", "láidejí", "op tijd zijn, nog genoeg tijd hebben"], ["广播", "guǎngbō", "radio-uitzending"], ["记住", "jìzhù", "onthouden"]
  ],
  dialogue: [
    ["A", "今天晚上的演出，你买到票了吗？", "Jīntiān wǎnshang de yǎnchū, nǐ mǎidào piào le ma?", "Heb je kaartjes voor de voorstelling van vanavond kunnen kopen?"],
    ["B", "没有，太晚了，买不到了。", "Méiyǒu, tài wǎn le, mǎi bu dào le.", "Nee, het was te laat. Ze zijn niet meer te krijgen."],
    ["A", "我这儿有两张，是后面的座位。", "Wǒ zhèr yǒu liǎng zhāng, shì hòumian de zuòwèi.", "Ik heb er hier twee. Het zijn plaatsen achterin."],
    ["B", "后面？听得清楚吗？", "Hòumian? Tīng de qīngchu ma?", "Achterin? Kun je het daar goed horen?"],
    ["A", "听得清楚，那个剧场的声音很好。", "Tīng de qīngchu, nàge jùchǎng de shēngyīn hěn hǎo.", "Ja, het geluid in dat theater is heel goed."],
    ["B", "太好了！现在七点，我们还来得及。", "Tài hǎo le! Xiànzài qī diǎn, wǒmen hái láidejí.", "Geweldig! Het is nu zeven uur, we zijn nog op tijd."]
  ],
  reading: {
    title: "小王的中文",
    lines: [
      { cn: "小王来北京工作已经三个月了。", py: "Xiǎo Wáng lái Běijīng gōngzuò yǐjīng sān ge yuè le.", nl: "Xiao Wang werkt al drie maanden in Beijing." },
      { cn: "刚来的时候，同事们说话很快，他常常听不懂。", py: "Gāng lái de shíhou, tóngshìmen shuōhuà hěn kuài, tā chángcháng tīng bu dǒng.", nl: "In het begin praatten zijn collega's heel snel, en verstond hij ze vaak niet." },
      { cn: "有一次，经理让他发一封电子邮件，可是他没听清楚地址。", py: "Yǒu yí cì, jīnglǐ ràng tā fā yì fēng diànzǐ yóujiàn, kěshì tā méi tīng qīngchu dìzhǐ.", nl: "Eén keer vroeg de manager hem een e-mail te sturen, maar hij had het adres niet goed gehoord." },
      { cn: "他不好意思再问，结果把邮件发错了。", py: "Tā bù hǎoyìsi zài wèn, jiéguǒ bǎ yóujiàn fācuò le.", nl: "Hij durfde het niet nog eens te vragen, en stuurde de mail naar het verkeerde adres." },
      { cn: "后来，他每天晚上都听半个小时的中文广播。", py: "Hòulái, tā měi tiān wǎnshang dōu tīng bàn ge xiǎoshí de Zhōngwén guǎngbō.", nl: "Daarna luisterde hij elke avond een half uur naar de Chinese radio." },
      { cn: "开始的时候，广播里的话他只听得懂一半。", py: "Kāishǐ de shíhou, guǎngbō li de huà tā zhǐ tīng de dǒng yíbàn.", nl: "In het begin verstond hij maar de helft van wat er op de radio gezegd werd." },
      { cn: "现在，开会的时候他基本上都听得懂了。", py: "Xiànzài, kāihuì de shíhou tā jīběnshang dōu tīng de dǒng le.", nl: "Nu verstaat hij tijdens vergaderingen bijna alles." },
      { cn: "不过，同事们的名字太多了，他还是记不住。", py: "Búguò, tóngshìmen de míngzi tài duō le, tā háishi jì bu zhù.", nl: "Maar zijn collega's hebben zoveel namen dat hij ze nog steeds niet kan onthouden." }
    ],
    questions: [
      { type: "mc", q: "Waarom ging de e-mail naar het verkeerde adres?",
        options: ["Hij had het adres niet goed gehoord en vroeg het niet nog eens.", "De manager had het verkeerde adres gegeven.", "Hij kon de e-mail niet op tijd schrijven.", "Hij kon de namen van zijn collega's niet onthouden."], answer: 0,
        why: ["Goed: 他没听清楚地址 en 他不好意思再问.", "De tekst zegt niets over een fout van de manager.", "Tijd speelt in dit stuk geen rol.", "De namen komen pas aan het eind, los van de e-mail."] },
      { type: "mc", q: "Wat lukt Xiao Wang nu nog steeds niet?",
        options: ["De namen van zijn collega's onthouden.", "Vergaderingen volgen.", "De radio verstaan.", "E-mails sturen."], answer: 0,
        why: ["Goed: 他还是记不住.", "Vergaderingen verstaat hij nu bijna helemaal: 基本上都听得懂了.", "De radio ging eerst half, en nu beter.", "De tekst zegt niet dat e-mails nog steeds mislukken."] },
      { type: "mc", q: "广播里的话他只听得懂一半。Wat betekent 听得懂 hier?",
        options: ["Hij is in staat de helft te verstaan.", "Hij heeft de helft verstaan, één keer.", "Hij wil maar de helft verstaan.", "Hij mag maar de helft horen."], answer: 0,
        why: ["Goed: V得 + resultaat = in staat zijn, het lukt.", "Een feit over één keer zou 听懂了 zijn.", "V得 gaat over kunnen, niet over willen.", "V得 gaat over kunnen, niet over toestemming."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Dit boek is te moeilijk. Ik kan het niet begrijpen.\" 这本书太难了，我___。",
      options: ["看不懂", "不看懂", "看懂不", "没看得懂"], answer: 0,
      why: ["Goed: 不 staat tussen werkwoord en resultaat.", "不 staat niet vóór het werkwoord, maar ertussen.", "不 staat tussen 看 en 懂, niet aan het eind.", "得 en 不 gaan niet samen, en 没 hoort hier niet."] },
    { type: "mc", q: "\"Kun je het verstaan?\"",
      options: ["你听得懂吗？", "你听懂得吗？", "你得听懂吗？", "你听得懂不吗？"], answer: 0,
      why: ["Goed: 得 tussen 听 en 懂.", "得 staat tussen werkwoord en resultaat, niet erachter.", "得 staat ná het werkwoord, niet ervoor.", "Met 吗 heb je geen 不 meer nodig."] },
    { type: "order", q: "Zet in de goede volgorde: \"De koffer is te zwaar, ik krijg hem niet verplaatst.\"",
      tokens: [["箱子", "xiāngzi"], ["太重了", "tài zhòng le"], ["我", "wǒ"], ["搬", "bān"], ["不", "bu"], ["动", "dòng"]] },
    { type: "mc", q: "\"De kaartjes zijn uitverkocht. Ik kan geen kaartje meer krijgen.\" 票都卖完了，我___票了。",
      options: ["买不到", "买不完", "买不懂", "买得到"], answer: 0,
      why: ["Goed: 到 = bereiken, krijgen. 买不到 = niet te krijgen.", "完 betekent \"af\": je kunt het kopen niet afmaken. Dat bedoel je niet.", "懂 hoort bij begrijpen (听懂, 看懂), niet bij kopen.", "得 betekent dat het wél lukt."] },
    { type: "open", q: "Zeg dat iets je niet lukt: afmaken, vinden of verstaan.", model: ["作业太多了，我今天做不完。", "我找不到我的钥匙。", "他说得太快，我听不懂。"],
      tip: "Check: staat 不 tussen werkwoord en resultaat, en niet vóór het werkwoord?" },
    { type: "mc", q: "Welke zin klopt?",
      options: ["我听不懂上海话。", "我不能听懂上海话。", "我听得不懂上海话。", "我不听懂上海话。"], answer: 0,
      why: ["Goed: 不 tussen 听 en 懂 = niet in staat zijn het te verstaan.", "能 past niet bij werkwoord + resultaat in de ontkenning. Zeg 听不懂.", "得 en 不 gaan niet samen.", "不 staat tussen werkwoord en resultaat, niet ervoor."] },
    { type: "mc", q: "\"Het is half acht en de film begint om acht uur. We zijn nog op tijd.\" 我们还___。",
      options: ["来得及", "来不及", "来得了", "不来及"], answer: 0,
      why: ["Goed: 来得及 = er is nog genoeg tijd.", "来不及 betekent juist: het is te laat.", "来得了 betekent \"kunnen komen\", niet \"op tijd zijn\".", "不 staat tussen 来 en 及, niet ervoor."] },
    { type: "mc", q: "这么多菜，我一个人吃不了。Wat betekent dit?",
      options: ["Zoveel eten krijg ik in mijn eentje niet op.", "Zoveel eten mag ik in mijn eentje niet eten.", "Zoveel eten heb ik in mijn eentje niet opgegeten.", "Zoveel eten wil ik in mijn eentje niet eten."], answer: 0,
      why: ["Goed: V不了 = het lukt niet, hier omdat het te veel is.", "Toestemming is 不能, niet V不了.", "Een feit over het verleden is 没吃完.", "Niet willen is 不想, niet V不了."] },
    { type: "fill", q: "快走吧，要不然就来___了！(Schiet op, anders zijn we te laat!)", answers: ["不及"],
      hint: "Welke twee tekens maken van 来 \"te laat, geen tijd meer\"?", why: "来不及 = de tijd is te kort. 了 aan het eind laat zien dat de situatie verandert." },
    { type: "order", q: "Zet in de goede volgorde: \"Er is te veel huiswerk, ik krijg het vandaag niet af.\"",
      tokens: [["作业太多了", "zuòyè tài duō le"], ["我今天", "wǒ jīntiān"], ["做", "zuò"], ["不", "bu"], ["完", "wán"]] },
    { type: "open", q: "Vertaal: \"Ik kan je niet goed verstaan. Kun je wat harder praten?\"", model: ["我听不清楚，你能大声一点儿吗？", "你说的话我听不清楚，可以大点儿声吗？"],
      tip: "Check: 听不清楚 met 不 tussen 听 en 清楚, en geen 不能听清楚." }
  ],
  review: [
    { type: "mc", q: "\"Ik kan mijn bril niet vinden.\"",
      options: ["我找不到我的眼镜。", "我不找到我的眼镜。", "我找到不我的眼镜。", "我没找得到我的眼镜。"], answer: 0,
      why: ["Goed.", "不 staat tussen 找 en 到, niet ervoor.", "不 staat tussen werkwoord en resultaat, niet erachter.", "得 betekent dat het lukt, en 没 past hier niet."] },
    { type: "mc", q: "\"Zoveel gerechten, krijg je dat allemaal op?\" 这么多菜，你吃得___吗？",
      options: ["完", "懂", "到", "见"], answer: 0,
      why: ["Goed: 吃得完 = het op kunnen.", "懂 hoort bij begrijpen, niet bij eten.", "吃得到 betekent \"te krijgen zijn\", niet \"op kunnen\".", "见 hoort bij zien of horen (看见, 听见)."] },
    { type: "mc", q: "\"Het is te donker, ik kan de letters niet goed zien.\"",
      options: ["太黑了，我看不清楚这些字。", "太黑了，我不能看清楚这些字。", "太黑了，我不看清楚这些字。", "太黑了，我看清楚不这些字。"], answer: 0,
      why: ["Goed: 看 + 不 + 清楚.", "\"Niet kunnen zien\" is 看不清楚, zonder 不能.", "不 staat tussen werkwoord en resultaat, niet ervoor.", "不 staat tussen 看 en 清楚, niet erachter."] }
  ]
})
