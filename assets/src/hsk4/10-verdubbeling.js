({
  id: "10", slug: "verdubbeling", title: "Verdubbeling", sub: "看看, 试一试, 休息休息, 高高兴兴",
  canDo: "Je kunt nu een verzoek zachter maken met een verdubbeld werkwoord, en iets levendig beschrijven met een verdubbeld bijvoeglijk naamwoord.",
  guess: {
    q: "Je vriend kookt en zegt: 你尝尝。Wat bedoelt hij, denk je?",
    options: ["Proef even.", "Proef het twee keer.", "Je hebt het al geproefd.", "Je mag het niet proeven."], answer: 0,
    why: ["Goed: een verdubbeld werkwoord betekent \"even, eens\". Het klinkt licht en vriendelijk.", "Verdubbelen betekent niet \"twee keer\", maar juist kort en licht.", "Er staat geen 了: het is een uitnodiging, geen verleden.", "Er staat geen ontkenning in de zin."]
  },
  problem: "In het Nederlands zeg je \"kijk even\" of \"probeer het eens\". Zo klinkt een verzoek kort en vriendelijk. In het Chinees verdubbel je daarvoor het werkwoord: 看看, 试一试, 休息休息. Ook bijvoeglijke naamwoorden kun je verdubbelen: 高高兴兴, 干干净净. Dan wordt de beschrijving levendiger.",
  pattern: [
    { l: "wie", v: "我们", c: 1 }, { l: "bijv. nw. AA", v: "好好", c: 3, key: true }, { l: "werkwoord ABAB", v: "休息休息", c: 4, key: true }, { l: "toon", v: "吧", c: 5 }
  ],
  patternCap: "Werkwoord: AA (看看), A一A (试一试), A了A (看了看), ABAB (休息休息), AAB (散散步) · bijv. nw.: AA的/地 (慢慢地), AABB的 (干干净净的)",
  rules: [
    "Eenlettergrepige werkwoorden: AA of A一A. 看看, 看一看. De herhaling is toonloos: kànkan, kàn yi kàn.",
    "Tweelettergrepige werkwoorden: ABAB, zonder 一 ertussen. 休息休息. Bij scheidbare werkwoorden verdubbel je alleen het eerste deel: 散散步, 聊聊天.",
    "Is het al gebeurd? Dan zet je 了 in het midden: 他看了看手表。我尝了尝。",
    "Bijvoeglijke naamwoorden: AA of AABB, meestal met 的 of 地 erachter: 慢慢地走, 干干净净的.",
    "Een verdubbeld bijvoeglijk naamwoord krijgt geen 很, 非常 of 不, en ook geen 了."
  ],
  pitfall: "Werkwoorden verdubbel je als ABAB (休息休息), bijvoeglijke naamwoorden als AABB (干干净净). Haal die twee vormen niet door elkaar.",
  examples: [
    { cn: "你尝尝这个菜，很好吃。", py: "Nǐ chángchang zhège cài, hěn hǎochī.", nl: "Proef dit gerecht eens, het is heel lekker." },
    { cn: "这双鞋你可以试一试。", py: "Zhè shuāng xié nǐ kěyǐ shì yi shì.", nl: "Deze schoenen kun je even passen." },
    { cn: "你太累了，休息休息吧。", py: "Nǐ tài lèi le, xiūxi xiūxi ba.", nl: "Je bent te moe, rust even uit." },
    { cn: "孩子们高高兴兴地去公园了。", py: "Háizimen gāogāoxìngxìng de qù gōngyuán le.", nl: "De kinderen gingen vrolijk naar het park." }
  ],
  nuance: [
    { h: "De toon: verzachten en \"even\"",
      p: "Een verdubbeld werkwoord maakt de handeling kort en licht. Een verzoek klinkt daardoor vriendelijker: 你帮我看看 is zachter dan 你帮我看. Het past alleen bij handelingen die je bewust doet. Bij 喜欢, 知道 of 是 verdubbel je niet. En niet bij iets wat nu bezig is: 我在看看 is fout.",
      ex: [
        { cn: "你帮我看看这个句子对不对。", py: "Nǐ bāng wǒ kànkan zhège jùzi duì bu duì.", nl: "Kun je even kijken of deze zin klopt?" },
        { cn: "周末我们去公园走走吧。", py: "Zhōumò wǒmen qù gōngyuán zǒuzou ba.", nl: "Laten we in het weekend even een rondje in het park lopen." }
      ] },
    { h: "高兴高兴 of 高高兴兴?",
      p: "Sommige woorden kunnen allebei. ABAB maakt er een handeling van: \"plezier maken, opvrolijken\". AABB maakt er een beschrijving van: \"vrolijk, blij\". De vorm laat dus zien of het werkwoord of bijvoeglijk naamwoord is.",
      ex: [
        { cn: "周末带爷爷出去玩玩，让他高兴高兴。", py: "Zhōumò dài yéye chūqu wánwan, ràng tā gāoxìng gāoxìng.", nl: "Neem opa in het weekend mee uit, om hem wat op te vrolijken." },
        { cn: "爷爷高高兴兴地回家了。", py: "Yéye gāogāoxìngxìng de huíjiā le.", nl: "Opa ging blij naar huis." }
      ] },
    { h: "Geen 很, 不 of 了 bij AABB",
      p: "Een verdubbeld bijvoeglijk naamwoord is al sterk en beeldend. Daarom komt er geen 很 of 非常 voor. Ontkennen met 不 kan ook niet. En 了 past er niet bij: zet 的 erachter. Je hoort deze vormen vooral in spreektaal en verhalen.",
      ex: [
        { cn: "她把房间打扫得干干净净的。", py: "Tā bǎ fángjiān dǎsǎo de gāngānjìngjìng de.", nl: "Ze heeft de kamer brandschoon gemaakt." },
        { cn: "这个房间很干净。", py: "Zhège fángjiān hěn gānjìng.", nl: "Deze kamer is erg schoon." }
      ] }
  ],
  mistakes: [
    { wrong: "我们休休息息吧。", right: "我们休息休息吧。", why: "Een tweelettergrepig werkwoord verdubbel je als ABAB, niet als AABB." },
    { wrong: "房间很干干净净。", right: "房间干干净净的。", why: "Een verdubbeld bijvoeglijk naamwoord krijgt geen 很. Zet 的 erachter." },
    { wrong: "我在看看电视。", right: "我在看电视。", why: "Iets wat nu bezig is (在) verdubbel je niet. Verdubbeling betekent \"even\"." },
    { wrong: "你介绍一介绍你自己吧。", right: "你介绍介绍你自己吧。", why: "一 in het midden kan alleen bij eenlettergrepige werkwoorden: 试一试." }
  ],
  vocab: [
    ["看看", "kànkan", "even kijken (verdubbeling: even, eens)"], ["尝", "cháng", "proeven"], ["试", "shì", "proberen, passen"],
    ["收拾", "shōushi", "opruimen"], ["散步", "sànbù", "wandelen"], ["聊天", "liáotiān", "kletsen"],
    ["味道", "wèidao", "smaak"], ["太极拳", "tàijíquán", "taiji"], ["颜色", "yánsè", "kleur"], ["正好", "zhènghǎo", "precies goed"]
  ],
  dialogue: [
    ["A", "这件衣服怎么样？", "Zhè jiàn yīfu zěnmeyàng?", "Wat vind je van dit kledingstuk?"],
    ["B", "颜色挺好看的。你试一试吧。", "Yánsè tǐng hǎokàn de. Nǐ shì yi shì ba.", "De kleur is mooi. Pas het even."],
    ["A", "有点儿大。你帮我看看还有没有小一点儿的。", "Yǒudiǎnr dà. Nǐ bāng wǒ kànkan hái yǒu méiyǒu xiǎo yìdiǎnr de.", "Een beetje groot. Kun je even kijken of er een kleinere maat is?"],
    ["B", "好，我去问问服务员。", "Hǎo, wǒ qù wènwen fúwùyuán.", "Goed, ik vraag het even aan de verkoper."],
    ["B", "有！你再试试这件。", "Yǒu! Nǐ zài shìshi zhè jiàn.", "Er is er een! Pas deze nog even."],
    ["A", "这件正好！", "Zhè jiàn zhènghǎo!", "Deze past precies!"]
  ],
  reading: {
    title: "星期天",
    lines: [
      { cn: "星期天早上，我先去楼下的公园走了走。", py: "Xīngqītiān zǎoshang, wǒ xiān qù lóuxià de gōngyuán zǒule zǒu.", nl: "Zondagochtend liep ik eerst even door het park beneden." },
      { cn: "公园里安安静静的，只有几个老人在打太极拳。", py: "Gōngyuán li ān'ānjìngjìng de, zhǐyǒu jǐ ge lǎorén zài dǎ tàijíquán.", nl: "Het was heel stil in het park. Er deden alleen een paar ouderen aan taiji." },
      { cn: "回家以后，我把房间收拾得干干净净的。", py: "Huíjiā yǐhòu, wǒ bǎ fángjiān shōushi de gāngānjìngjìng de.", nl: "Thuis ruimde ik mijn kamer helemaal netjes op." },
      { cn: "中午，妈妈打电话说：\"晚上回家吃饭吧，我做了你最爱吃的鱼。\"", py: "Zhōngwǔ, māma dǎ diànhuà shuō: \"Wǎnshang huíjiā chīfàn ba, wǒ zuòle nǐ zuì ài chī de yú.\"", nl: "Rond het middaguur belde mijn moeder: \"Kom vanavond thuis eten, ik heb je lievelingsvis gemaakt.\"" },
      { cn: "我高高兴兴地回了家。", py: "Wǒ gāogāoxìngxìng de huíle jiā.", nl: "Blij ging ik naar huis." },
      { cn: "吃饭的时候，妈妈说：\"你尝尝，看看味道怎么样。\"", py: "Chīfàn de shíhou, māma shuō: \"Nǐ chángchang, kànkan wèidao zěnmeyàng.\"", nl: "Bij het eten zei mijn moeder: \"Proef eens hoe het smaakt.\"" },
      { cn: "我尝了尝，说：\"跟以前一样好吃！\"", py: "Wǒ chángle cháng, shuō: \"Gēn yǐqián yíyàng hǎochī!\"", nl: "Ik proefde even en zei: \"Net zo lekker als vroeger!\"" },
      { cn: "吃完饭，我们一起出去散散步，聊聊天。", py: "Chīwán fàn, wǒmen yìqǐ chūqu sànsan bù, liáoliao tiān.", nl: "Na het eten gingen we samen even wandelen en wat kletsen." }
    ],
    questions: [
      { type: "mc", q: "Wat zag de schrijver in het park?",
        options: ["Een paar ouderen die aan taiji deden.", "Veel kinderen die speelden.", "Zijn moeder die wandelde.", "Mensen die aan het vissen waren."], answer: 0,
        why: ["Goed: 只有几个老人在打太极拳.", "Het park was juist stil: 安安静静的.", "Zijn moeder belde pas rond het middaguur.", "De vis hoort bij het eten van zijn moeder."] },
      { type: "mc", q: "Wat deden ze na het eten?",
        options: ["Ze gingen even wandelen en kletsen.", "Ze ruimden samen de kamer op.", "Ze gingen naar het park om taiji te doen.", "Ze keken samen televisie."], answer: 0,
        why: ["Goed: 出去散散步，聊聊天.", "Opruimen deed de schrijver 's ochtends alleen.", "Taiji deden de ouderen 's ochtends.", "Televisie staat niet in de tekst."] },
      { type: "mc", q: "我尝了尝。Wat zegt 尝了尝 hier?",
        options: ["Hij proefde even, kort.", "Hij proefde twee keer.", "Hij wilde nog niet proeven.", "Hij proefde lang en zorgvuldig."], answer: 0,
        why: ["Goed: A了A = even iets gedaan, in het verleden.", "Verdubbeling betekent niet \"twee keer\".", "了 laat zien dat hij het al gedaan heeft.", "Verdubbeling maakt de handeling juist kort en licht."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Mag ik even kijken?\" 我可以___吗？",
      options: ["看看", "看看看", "看看了", "看了看"], answer: 0,
      why: ["Goed: AA = even kijken.", "Een eenlettergrepig werkwoord verdubbel je maar één keer.", "了 hoort niet aan het eind van een verdubbeld werkwoord.", "A了A is voor iets wat al gebeurd is, niet voor een verzoek."] },
    { type: "mc", q: "\"Laten we even uitrusten.\" 我们___吧。",
      options: ["休息休息", "休休息息", "休息一休息", "休息了休息"], answer: 0,
      why: ["Goed: tweelettergrepig werkwoord = ABAB.", "AABB is de vorm voor bijvoeglijke naamwoorden.", "一 in het midden kan alleen bij eenlettergrepige werkwoorden.", "了 hoort bij iets wat al gebeurd is, niet bij 吧."] },
    { type: "mc", q: "\"Ze heeft de kamer brandschoon gemaakt.\" 她把房间打扫得___。",
      options: ["干干净净的", "干净干净的", "很干干净净", "干干净净了"], answer: 0,
      why: ["Goed: bijvoeglijk naamwoord = AABB + 的.", "ABAB is de vorm voor werkwoorden.", "Een verdubbeld bijvoeglijk naamwoord krijgt geen 很.", "Na AABB komt 的, geen 了."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["我在看看电视。", "你尝尝这个菜。", "他看了看手表。", "我们去散散步吧。"], answer: 0,
      why: ["Goed, deze is fout: met 在 (nu bezig) verdubbel je niet. Zeg 我在看电视。", "Deze klopt: AA als vriendelijk verzoek.", "Deze klopt: A了A voor iets wat al gebeurd is.", "Deze klopt: scheidbaar werkwoord, alleen het eerste deel verdubbeld."] },
    { type: "mc", q: "周末带孩子去公园玩玩，让他们___。(om ze wat plezier te geven)",
      options: ["高兴高兴", "高高兴兴地", "很高兴高兴", "高兴一高兴"], answer: 0,
      why: ["Goed: ABAB maakt er een handeling van: plezier maken, opvrolijken.", "高高兴兴地 beschrijft hoe iemand iets doet. Er volgt hier geen werkwoord.", "Een verdubbeld woord krijgt geen 很.", "一 in het midden kan alleen bij eenlettergrepige werkwoorden."] },
    { type: "mc", q: "你帮我看看这个句子。Wat voegt 看看 toe ten opzichte van 看?",
      options: ["Het klinkt korter en vriendelijker: \"even kijken\".", "Het betekent: twee keer kijken.", "Het betekent dat je al gekeken hebt.", "Het klinkt strenger, als een bevel."], answer: 0,
      why: ["Goed: verdubbeling verzacht een verzoek.", "Verdubbeling betekent niet \"twee keer\".", "Voor het verleden heb je 了 nodig: 看了看.", "Het is juist andersom: het klinkt zachter."] },
    { type: "mc", q: "\"Hij keek even op zijn horloge.\" 他___手表。",
      options: ["看了看", "看看了", "看了看看", "看一看了"], answer: 0,
      why: ["Goed: A了A voor een korte handeling in het verleden.", "了 staat in het midden, niet aan het eind.", "Het werkwoord komt maar twee keer.", "In het verleden gebruik je 了 in het midden, niet 一."] },
    { type: "fill", q: "你穿上这双鞋，走一___，看看合适不合适。(Doe deze schoenen aan en loop er even mee, kijk of ze passen.)", answers: ["走"],
      hint: "A一A: welk werkwoord komt terug?", why: "走一走 = even lopen. Bij een eenlettergrepig werkwoord kan 一 in het midden." },
    { type: "order", q: "Zet in de goede volgorde: \"Laten we na het eten even gaan wandelen.\"",
      tokens: [["吃完饭", "chīwán fàn"], ["我们去", "wǒmen qù"], ["散散步", "sànsan bù"], ["吧", "ba"]] },
    { type: "order", q: "Zet in de goede volgorde: \"De kinderen gingen vrolijk naar school.\"",
      tokens: [["孩子们", "háizimen"], ["高高兴兴", "gāogāoxìngxìng"], ["地", "de"], ["去上学了", "qù shàngxué le"]] },
    { type: "open", q: "Vertaal: \"Proef deze soep eens.\"", model: ["你尝尝这个汤。", "你尝一尝这个汤吧。"],
      tip: "Check: 尝尝 of 尝一尝, en geen 了 (het is een verzoek)." },
    { type: "open", q: "Beschrijf een kamer of een persoon met een AABB-vorm.", model: ["他的房间总是干干净净的。", "她每天都高高兴兴的。", "教室里安安静静的。"],
      tip: "Check: AABB (niet ABAB), geen 很 ervoor, en 的 erachter." }
  ],
  review: [
    { type: "mc", q: "\"Kun je dit even voor me uitleggen?\" 你能给我___吗？",
      options: ["解释解释", "解解释释", "解释一解释", "解释了解释"], answer: 0,
      why: ["Goed: tweelettergrepig werkwoord = ABAB.", "AABB is de vorm voor bijvoeglijke naamwoorden.", "一 in het midden kan alleen bij eenlettergrepige werkwoorden.", "了 hoort bij iets wat al gebeurd is, niet bij een verzoek."] },
    { type: "mc", q: "\"Het kind slaapt heel rustig.\" 孩子睡得___。",
      options: ["安安静静的", "安静安静的", "很安安静静", "不安安静静"], answer: 0,
      why: ["Goed: AABB + 的 voor een levendige beschrijving.", "ABAB is de vorm voor werkwoorden.", "Een verdubbeld bijvoeglijk naamwoord krijgt geen 很.", "Een verdubbeld bijvoeglijk naamwoord kun je niet ontkennen met 不."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["我很喜欢喜欢中文。", "你试试这件衣服吧。", "我们聊聊天吧。", "他笑了笑，没说话。"], answer: 0,
      why: ["Goed, deze is fout: 喜欢 is geen korte handeling en verdubbel je niet. Zeg 我很喜欢中文。", "Deze klopt: AA als vriendelijk voorstel.", "Deze klopt: scheidbaar werkwoord, AAB.", "Deze klopt: A了A voor iets wat al gebeurd is."] }
  ]
})
