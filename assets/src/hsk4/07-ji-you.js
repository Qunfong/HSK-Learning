({
  id: "07", slug: "ji-you", title: "既……又 / 既……也", sub: "Zowel ... als ...",
  canDo: "Je kunt nu zeggen dat twee eigenschappen of handelingen tegelijk gelden, met 既……又 en 既……也.",
  guess: {
    q: "Je wilt zeggen: \"Deze telefoon is zowel goedkoop als handig.\" Welke zin klopt, denk je?",
    options: ["这个手机既便宜又方便。", "既这个手机便宜又方便。", "这个手机便宜既又方便。", "这个手机既便宜方便又。"], answer: 0,
    why: ["Goed: onderwerp, dan 既 + eigenschap, dan 又 + eigenschap.", "既 staat na het onderwerp, niet ervoor.", "既 staat vóór de eerste eigenschap, niet ernaast bij 又.", "又 staat vóór de tweede eigenschap, niet aan het eind."]
  },
  problem: "In het Nederlands zeg je \"zowel ... als\": het restaurant is zowel goedkoop als lekker. Twee dingen gelden tegelijk, en ze zijn even belangrijk. In het Chinees zet je 既 (jì) vóór het eerste deel en 又 (yòu) of 也 (yě) vóór het tweede. Het klinkt wat netter dan 又……又.",
  pattern: [
    { l: "wie / wat", v: "这家饭馆", c: 1 }, { l: "既", v: "既", c: 2, key: true }, { l: "deel 1", v: "便宜", c: 3 },
    { l: "又 / 也", v: "又", c: 4, key: true }, { l: "deel 2", v: "好吃", c: 5 }
  ],
  patternCap: "Onderwerp + 既 + A + 又/也 + B · ontkennend: 既不 A，也不 B (noch ... noch)",
  rules: [
    "既 en 又/也 staan allebei na het onderwerp, direct vóór het werkwoord of bijvoeglijk naamwoord.",
    "Beide delen hebben hetzelfde onderwerp. Voor twee verschillende onderwerpen gebruik je 既 niet.",
    "A en B hebben een gelijke vorm: twee bijvoeglijke naamwoorden, of twee werkwoordsgroepen.",
    "Bij korte bijvoeglijke naamwoorden komt er geen 很 bij: 既便宜又好吃.",
    "Ontkennen: 既不 A，也不 B. Dat betekent \"noch A, noch B\"."
  ],
  pitfall: "既 staat nooit vóór het onderwerp. Zeg 他既会唱歌又会跳舞, niet 既他会唱歌.",
  examples: [
    { cn: "这家饭馆的菜既便宜又好吃。", py: "Zhè jiā fànguǎn de cài jì piányi yòu hǎochī.", nl: "Het eten in dit restaurant is zowel goedkoop als lekker." },
    { cn: "她既会说英语，也会说法语。", py: "Tā jì huì shuō Yīngyǔ, yě huì shuō Fǎyǔ.", nl: "Ze spreekt zowel Engels als Frans." },
    { cn: "他既是我的老师，也是我的朋友。", py: "Tā jì shì wǒ de lǎoshī, yě shì wǒ de péngyou.", nl: "Hij is zowel mijn leraar als mijn vriend." },
    { cn: "我爸爸既不抽烟，也不喝酒。", py: "Wǒ bàba jì bù chōuyān, yě bù hējiǔ.", nl: "Mijn vader rookt niet en drinkt ook niet." }
  ],
  nuance: [
    { h: "既……又 of 又……又?",
      p: "Beide betekenen \"zowel ... als\". 又……又 is spreektaal en past goed bij korte woorden en gevoelens, ook vervelende: 又累又饿. 既……又 klinkt netter en zakelijker. Je ziet het vaak in teksten, beschrijvingen en reclame, ook met langere delen.",
      ex: [
        { cn: "我今天又累又饿。", py: "Wǒ jīntiān yòu lèi yòu è.", nl: "Ik ben vandaag moe en heb honger." },
        { cn: "这个办法既简单又有效。", py: "Zhège bànfǎ jì jiǎndān yòu yǒuxiào.", nl: "Deze methode is zowel eenvoudig als effectief." }
      ] },
    { h: "既……又 of 不但……而且?",
      p: "既……又 zet twee dingen naast elkaar: ze zijn even belangrijk. 不但……而且 bouwt op: het tweede deel gaat verder dan het eerste. Ook kan 不但……而且 twee verschillende onderwerpen hebben. Met 既 kan dat niet.",
      ex: [
        { cn: "他既会说中文，也会说日语。", py: "Tā jì huì shuō Zhōngwén, yě huì shuō Rìyǔ.", nl: "Hij spreekt zowel Chinees als Japans." },
        { cn: "他不但会说中文，而且说得很好。", py: "Tā búdàn huì shuō Zhōngwén, érqiě shuō de hěn hǎo.", nl: "Hij spreekt niet alleen Chinees, hij spreekt het zelfs heel goed." }
      ] },
    { h: "又 of 也 na 既? En 既不……也不",
      p: "Met twee korte bijvoeglijke naamwoorden kies je meestal 又: 既大又亮. Bij langere werkwoordsgroepen, vaak met een komma ertussen, hoor je ook 也. In de ontkenning is 既不……也不 de vaste vorm: noch het een, noch het ander.",
      ex: [
        { cn: "她既不喜欢喝咖啡，也不喜欢喝茶。", py: "Tā jì bù xǐhuan hē kāfēi, yě bù xǐhuan hē chá.", nl: "Ze houdt niet van koffie en ook niet van thee." }
      ] }
  ],
  mistakes: [
    { wrong: "既他会唱歌，又会跳舞。", right: "他既会唱歌，又会跳舞。", why: "既 staat na het onderwerp, vóór het werkwoord." },
    { wrong: "她既聪明和漂亮。", right: "她既聪明又漂亮。", why: "Na 既 hoort 又 of 也. 和 verbindt zelfstandige naamwoorden, geen eigenschappen." },
    { wrong: "他既是老师，又医生。", right: "他既是老师，又是医生。", why: "Beide delen hebben een gelijke vorm. Herhaal het werkwoord 是 na 又." },
    { wrong: "这家店既便宜，又不好吃。", right: "这家店既便宜，又好吃。", why: "既……又 verbindt dingen die dezelfde kant op wijzen. Voor een tegenstelling gebruik je 但是: 便宜，但是不好吃." }
  ],
  vocab: [
    ["既……又", "jì……yòu", "zowel ... als"], ["经验", "jīngyàn", "ervaring"], ["尊重", "zūnzhòng", "respecteren"],
    ["导游", "dǎoyóu", "reisleider, gids"], ["了解", "liǎojiě", "kennen, goed weten"], ["紧张", "jǐnzhāng", "zenuwachtig"],
    ["担心", "dānxīn", "zich zorgen maken"], ["信心", "xìnxīn", "zelfvertrouwen"], ["环境", "huánjìng", "omgeving, sfeer"], ["适合", "shìhé", "geschikt zijn voor"]
  ],
  dialogue: [
    ["A", "周末我们去哪儿吃饭？", "Zhōumò wǒmen qù nǎr chīfàn?", "Waar gaan we dit weekend eten?"],
    ["B", "学校旁边新开了一家饭馆，听说既便宜又好吃。", "Xuéxiào pángbiān xīn kāile yì jiā fànguǎn, tīngshuō jì piányi yòu hǎochī.", "Naast de school is een nieuw restaurant open. Ik hoorde dat het goedkoop en lekker is."],
    ["A", "环境怎么样？", "Huánjìng zěnmeyàng?", "Hoe is de sfeer daar?"],
    ["B", "既安静又干净，很适合聊天。", "Jì ānjìng yòu gānjìng, hěn shìhé liáotiān.", "Rustig en schoon, heel geschikt om te praten."],
    ["A", "太好了。我既不想花太多钱，也不想去太吵的地方。", "Tài hǎo le. Wǒ jì bù xiǎng huā tài duō qián, yě bù xiǎng qù tài chǎo de dìfang.", "Mooi. Ik wil niet te veel geld uitgeven en ook niet naar een rumoerige plek."],
    ["B", "那就去那家吧！", "Nà jiù qù nà jiā ba!", "Dan gaan we daarheen!"]
  ],
  reading: {
    title: "我的新工作",
    lines: [
      { cn: "去年，我开始在一家旅游公司工作。", py: "Qùnián, wǒ kāishǐ zài yì jiā lǚyóu gōngsī gōngzuò.", nl: "Vorig jaar ben ik bij een reisbureau gaan werken." },
      { cn: "这份工作既有意思，又能让我去很多地方。", py: "Zhè fèn gōngzuò jì yǒu yìsi, yòu néng ràng wǒ qù hěn duō dìfang.", nl: "Dit werk is leuk, en ik kom er ook op veel plekken door." },
      { cn: "我的经理既年轻又有经验，大家都很尊重她。", py: "Wǒ de jīnglǐ jì niánqīng yòu yǒu jīngyàn, dàjiā dōu hěn zūnzhòng tā.", nl: "Mijn manager is zowel jong als ervaren. Iedereen heeft veel respect voor haar." },
      { cn: "她常常说，导游既要了解历史，也要会照顾客人。", py: "Tā chángcháng shuō, dǎoyóu jì yào liǎojiě lìshǐ, yě yào huì zhàogù kèrén.", nl: "Ze zegt vaak dat een gids zowel de geschiedenis moet kennen als goed voor de gasten moet kunnen zorgen." },
      { cn: "刚开始的时候，我既紧张又担心，怕自己做不好。", py: "Gāng kāishǐ de shíhou, wǒ jì jǐnzhāng yòu dānxīn, pà zìjǐ zuò bu hǎo.", nl: "In het begin was ik zenuwachtig en bezorgd. Ik was bang dat ik het niet goed zou doen." },
      { cn: "有一次，一位老人在路上生病了。", py: "Yǒu yí cì, yí wèi lǎorén zài lù shang shēngbìng le.", nl: "Op een keer werd een oudere man onderweg ziek." },
      { cn: "我马上带他去了医院，还给他的家人打了电话。", py: "Wǒ mǎshàng dài tā qùle yīyuàn, hái gěi tā de jiārén dǎle diànhuà.", nl: "Ik bracht hem meteen naar het ziekenhuis en belde ook zijn familie." },
      { cn: "后来，那位老人给公司写了一封感谢信。", py: "Hòulái, nà wèi lǎorén gěi gōngsī xiěle yì fēng gǎnxiè xìn.", nl: "Later schreef die man een bedankbrief aan het bedrijf." },
      { cn: "现在，我对这份工作既有兴趣，也有信心。", py: "Xiànzài, wǒ duì zhè fèn gōngzuò jì yǒu xìngqù, yě yǒu xìnxīn.", nl: "Nu heb ik zowel plezier in dit werk als vertrouwen in mezelf." }
    ],
    questions: [
      { type: "mc", q: "Wat moet een gids volgens de manager kunnen?",
        options: ["De geschiedenis kennen en goed voor de gasten zorgen.", "Veel talen spreken en goed autorijden.", "Jong zijn en veel reizen.", "Brieven schrijven en telefoneren."], answer: 0,
        why: ["Goed: 既要了解历史，也要会照顾客人.", "Talen en autorijden staan niet in de tekst.", "Jong is de manager zelf. Dat is geen eis voor een gids.", "De brief schreef de oudere man, niet de gids."] },
      { type: "mc", q: "Wat deed de schrijver toen de oudere man ziek werd?",
        options: ["Hij bracht hem naar het ziekenhuis en belde zijn familie.", "Hij belde de manager.", "Hij schreef een brief aan het bedrijf.", "Hij bracht hem terug naar het hotel."], answer: 0,
        why: ["Goed: 带他去了医院，还给他的家人打了电话.", "De manager wordt hier niet gebeld.", "De brief schreef de oudere man zelf.", "Er staat geen hotel in de tekst."] },
      { type: "mc", q: "我既紧张又担心。Wat zegt 既……又 hier?",
        options: ["Hij voelde allebei tegelijk: zenuwachtig én bezorgd.", "Eerst was hij zenuwachtig, daarna bezorgd.", "Hij was zenuwachtig, maar niet bezorgd.", "Bezorgd zijn is erger dan zenuwachtig zijn."], answer: 0,
        why: ["Goed: 既……又 = twee dingen die tegelijk gelden.", "既……又 gaat niet over volgorde in de tijd.", "Beide delen gelden. Er is geen tegenstelling.", "Een opbouw naar iets sterkers is 不但……而且."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Hij kan zowel zingen als dansen.\" 他既会唱歌，___会跳舞。",
      options: ["又", "和", "才", "都"], answer: 0,
      why: ["Goed: 既 A，又 B.", "和 verbindt zelfstandige naamwoorden, niet twee werkwoordsgroepen.", "才 betekent \"pas\" en hoort niet bij 既.", "都 betekent \"allemaal\" en maakt het patroon niet af."] },
    { type: "mc", q: "\"Mijn zus is zowel slim als mooi.\"",
      options: ["我姐姐既聪明又漂亮。", "既我姐姐聪明又漂亮。", "我姐姐聪明既又漂亮。", "我姐姐既聪明漂亮又。"], answer: 0,
      why: ["Goed: onderwerp + 既 + A + 又 + B.", "既 staat na het onderwerp.", "既 staat vóór de eerste eigenschap.", "又 staat vóór de tweede eigenschap."] },
    { type: "mc", q: "\"Hij eet geen vlees en ook geen vis.\" 他既不吃肉，___不吃鱼。",
      options: ["也", "和", "但是", "就"], answer: 0,
      why: ["Goed: 既不……也不 = noch ... noch.", "和 kan niet vóór 不 + werkwoord staan.", "但是 geeft een tegenstelling. Hier wijzen beide delen dezelfde kant op.", "就 betekent \"dan\" en past niet in dit patroon."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["既我去，又他去。", "他既聪明又努力。", "这儿既安静又干净。", "她既会做饭，也会画画。"], answer: 0,
      why: ["Goed, deze is fout: twee verschillende onderwerpen kan niet met 既. Zeg: 我去，他也去。", "Deze klopt: één onderwerp, twee eigenschappen.", "Deze klopt: 这儿 heeft twee eigenschappen.", "Deze klopt: 既……也 met twee werkwoordsgroepen."] },
    { type: "mc", q: "Wat drukt 既……又 uit?",
      options: ["Twee dingen gelden tegelijk en zijn even belangrijk.", "Twee dingen gebeuren na elkaar.", "Twee dingen gaan tegen elkaar in.", "Het tweede ding gaat verder dan het eerste."], answer: 0,
      why: ["Goed: 既……又 zet twee dingen naast elkaar.", "Volgorde in de tijd is 先……然后.", "Een tegenstelling geef je met 但是 of 可是.", "Die opbouw is 不但……而且."] },
    { type: "mc", q: "这份工作既轻松，___。Welk tweede deel past?",
      options: ["又很有意思", "又很累", "又没有意思", "和很有意思"], answer: 0,
      why: ["Goed: twee positieve eigenschappen die dezelfde kant op wijzen.", "轻松 en 累 spreken elkaar tegen. Dan heb je 但是 nodig.", "Positief en negatief samen past niet bij 既……又.", "Na 既 hoort 又 of 也, geen 和."] },
    { type: "fill", q: "这个办法既简单___有效。(Deze methode is zowel eenvoudig als effectief.)", answers: ["又", "也"],
      hint: "Welk woord hoort bij 既 vóór het tweede deel?", why: "既 A 又 B. Bij twee korte bijvoeglijke naamwoorden is 又 het gewoonst; 也 kan ook." },
    { type: "order", q: "Zet in de goede volgorde: \"Hij is zowel mijn leraar als mijn vriend.\"",
      tokens: [["他", "tā"], ["既是我的老师", "jì shì wǒ de lǎoshī"], ["也是", "yě shì"], ["我的朋友", "wǒ de péngyou"]] },
    { type: "order", q: "Zet in de goede volgorde: \"Mijn oma eet geen vlees en ook geen vis.\"",
      tokens: [["我奶奶", "wǒ nǎinai"], ["既不吃肉", "jì bù chī ròu"], ["也不", "yě bù"], ["吃鱼", "chī yú"]] },
    { type: "open", q: "Vertaal: \"Deze stad is zowel mooi als veilig.\"", model: ["这个城市既漂亮又安全。", "这座城市既美丽又安全。"],
      tip: "Check: staat 既 na het onderwerp, en 又 vóór 安全? Geen 很 nodig." },
    { type: "open", q: "Beschrijf een vriend of een plek met 既……又 of 既……也.", model: ["我的朋友既聪明又幽默。", "我们学校既大又漂亮。", "我妈妈既会做中国菜，也会做法国菜。"],
      tip: "Check: één onderwerp, 既 en 又/也 na het onderwerp, en twee delen die dezelfde kant op wijzen." }
  ],
  review: [
    { type: "mc", q: "\"Deze schoenen zijn zowel mooi als comfortabel.\" 这双鞋既好看___舒服。",
      options: ["又", "和", "就", "才"], answer: 0,
      why: ["Goed: 既 A 又 B.", "和 verbindt geen twee eigenschappen in dit patroon.", "就 hoort niet bij 既.", "才 betekent \"pas\" en hoort niet bij 既."] },
    { type: "mc", q: "\"Zij is zowel arts als schrijver.\"",
      options: ["她既是医生，也是作家。", "既她是医生，也是作家。", "她是既医生，也是作家。", "她既是医生，也作家。"], answer: 0,
      why: ["Goed.", "既 staat na het onderwerp.", "既 staat vóór het werkwoord 是, niet erna.", "Herhaal 是 na 也: beide delen hebben dezelfde vorm."] },
    { type: "mc", q: "\"Ik heb geen tijd en ook geen geld.\" 我既没有时间，___没有钱。",
      options: ["也", "但是", "而且", "就"], answer: 0,
      why: ["Goed: 既……也 voor twee ontkennende delen.", "但是 geeft een tegenstelling. Beide delen zijn hier ontkennend.", "而且 hoort bij 不但, niet bij 既.", "就 betekent \"dan\" en past niet in dit patroon."] }
  ]
})
