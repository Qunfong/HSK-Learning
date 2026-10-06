({
  id: "02", slug: "resultaat", title: "Werkwoord + resultaat", sub: "找 of 找到: zoeken of vinden",
  canDo: "Je kunt nu zeggen of een handeling gelukt of af is, met 完, 到, 懂, 错, 住 en 好.",
  guess: {
    q: "我找了，但是没找到。Wat betekent dit, denk je?",
    options: ["Ik heb gezocht, maar niet gevonden.", "Ik heb niet gezocht.", "Ik heb het gevonden, maar niet gezocht.", "Ik zoek nog, en ik ga het vinden."], answer: 0,
    why: ["Goed: 找 is de handeling (zoeken), 找到 is het resultaat (vinden).", "找了 zegt juist dat je wél gezocht hebt.", "没找到 zegt dat het resultaat er niet is.", "Er staat 了 en 没: het gaat over wat al gebeurd is."]
  },
  problem: "Het Chinese werkwoord zegt alleen wat je doet, niet of het lukt. 看 is \"kijken\", maar heb je het ook gezien of uitgelezen? In het Nederlands zit dat vaak in het werkwoord zelf (zoeken of vinden). In het Chinees plak je een resultaat achter het werkwoord.",
  pattern: [
    { l: "wie", v: "我", c: 1 }, { l: "werkwoord", v: "看", c: 4 }, { l: "resultaat", v: "完", c: 5, key: true },
    { l: "ding", v: "这本书", c: 3 }, { l: "afgerond", v: "了", c: 2 }
  ],
  patternCap: "Werkwoord + resultaat (+ ding) + 了: 看完 = uitgelezen · 找到 = gevonden · 听懂 = begrepen · 写错 = fout geschreven · 记住 = onthouden · 做好 = goed af",
  rules: [
    "Het resultaat staat direct achter het werkwoord. Er past niets tussen, ook geen ding en geen 了.",
    "Het ding komt na het resultaat (看完这本书), of vooraan als onderwerp (这本书我看完了).",
    "Ontkennen doe je met 没 vóór het werkwoord, zonder 了: 我没听懂。 Nog niet = 还没: 我还没做完。",
    "Een vraag: 你听懂了吗？ of 你听懂了没有？"
  ],
  pitfall: "Zeg niet 我不听懂 of 我没听懂了. Het resultaat is er niet: 我没听懂。",
  examples: [
    { cn: "我找到我的手机了。", py: "Wǒ zhǎodào wǒ de shǒujī le.", nl: "Ik heb mijn telefoon gevonden." },
    { cn: "老师说的话我都听懂了。", py: "Lǎoshī shuō de huà wǒ dōu tīngdǒng le.", nl: "Ik heb alles begrepen wat de leraar zei." },
    { cn: "对不起，我没听清楚。", py: "Duìbuqǐ, wǒ méi tīng qīngchu.", nl: "Sorry, ik heb het niet goed verstaan." },
    { cn: "这个字你写错了。", py: "Zhège zì nǐ xiěcuò le.", nl: "Dit karakter heb je fout geschreven." }
  ],
  nuance: [
    { h: "Handeling of resultaat: 看 en 看见, 听 en 听懂",
      p: "Het werkwoord alleen zegt dat je iets deed. Het resultaat zegt of het lukte. Je kunt dus luisteren zonder te begrijpen, en kijken zonder te zien. Daarom is 我听了，可是没听懂 een gewone zin.",
      ex: [
        { cn: "我听了，可是没听懂。", py: "Wǒ tīng le, kěshì méi tīngdǒng.", nl: "Ik heb geluisterd, maar ik heb het niet begrepen." },
        { cn: "你看见我的钥匙了吗？", py: "Nǐ kànjiàn wǒ de yàoshi le ma?", nl: "Heb je mijn sleutels gezien?" }
      ] },
    { h: "完 of 好: af, of goed af?",
      p: "完 zegt alleen dat iets af is: er is niets meer over. 好 zegt dat iets af is en klaar voor gebruik. Bij eten en voorbereiden hoor je daarom vaak 好. Bij lezen en opeten hoor je 完.",
      ex: [
        { cn: "我吃完了。", py: "Wǒ chīwán le.", nl: "Ik heb het op. (Mijn bord is leeg.)" },
        { cn: "饭做好了，快来吃吧！", py: "Fàn zuòhǎo le, kuài lái chī ba!", nl: "Het eten is klaar, kom snel eten!" }
      ] },
    { h: "没 of 不?",
      p: "Een resultaat is er wel of niet. Daarom ontken je het met 没: het is (nog) niet gelukt. 不 hoort bij gewoontes en wil, niet bij een resultaat. 我不听懂 is dus fout."
    }
  ],
  mistakes: [
    { wrong: "我看这本书完了。", right: "我看完这本书了。", why: "Het resultaat staat direct achter het werkwoord. Het ding komt daarna." },
    { wrong: "我不听懂。", right: "我没听懂。", why: "Een resultaat dat er niet is, ontken je met 没, niet met 不." },
    { wrong: "我没找到了。", right: "我没找到。", why: "Na 没 valt 了 weg." },
    { wrong: "我找了我的手机。(= gevonden)", right: "我找到我的手机了。", why: "找 is alleen zoeken. Voor vinden heb je het resultaat 到 nodig." }
  ],
  vocab: [
    ["完", "wán", "af, op (resultaat)"], ["到", "dào", "gelukt, bereikt (resultaat)"], ["懂", "dǒng", "begrijpen"],
    ["错", "cuò", "fout"], ["记住", "jìzhù", "onthouden"], ["清楚", "qīngchu", "duidelijk"],
    ["准备", "zhǔnbèi", "voorbereiden"], ["复习", "fùxí", "herhalen, studeren voor"], ["课文", "kèwén", "les(tekst)"], ["遍", "biàn", "keer (van begin tot eind)"]
  ],
  dialogue: [
    ["A", "你的作业做完了吗？", "Nǐ de zuòyè zuòwán le ma?", "Is je huiswerk af?"],
    ["B", "还没做完。第三题我没看懂。", "Hái méi zuòwán. Dì sān tí wǒ méi kàndǒng.", "Nog niet. Opgave drie begrijp ik niet."],
    ["A", "我给你讲讲。……听懂了吗？", "Wǒ gěi nǐ jiǎngjiang. …… Tīngdǒng le ma?", "Ik leg het even uit. ... Begrepen?"],
    ["B", "听懂了！我找到错的地方了。谢谢！", "Tīngdǒng le! Wǒ zhǎodào cuò de dìfang le. Xièxie!", "Ja! Ik heb gevonden waar de fout zat. Dank je!"]
  ],
  reading: {
    title: "考试前一天",
    lines: [
      { cn: "明天有汉语考试，今天晚上我要好好复习。", py: "Míngtiān yǒu Hànyǔ kǎoshì, jīntiān wǎnshang wǒ yào hǎohǎo fùxí.", nl: "Morgen heb ik een toets Chinees. Vanavond wil ik goed studeren." },
      { cn: "吃完晚饭以后，我开始找我的课本。", py: "Chīwán wǎnfàn yǐhòu, wǒ kāishǐ zhǎo wǒ de kèběn.", nl: "Na het avondeten ging ik mijn studieboek zoeken." },
      { cn: "我找了半天，最后在床下找到了。", py: "Wǒ zhǎole bàntiān, zuìhòu zài chuáng xià zhǎodào le.", nl: "Ik zocht een hele tijd en vond het uiteindelijk onder het bed." },
      { cn: "书里有一篇新课文，我看了两遍，还是没看懂。", py: "Shū li yǒu yì piān xīn kèwén, wǒ kànle liǎng biàn, háishi méi kàndǒng.", nl: "In het boek stond een nieuwe tekst. Ik las hem twee keer, maar begreep hem nog steeds niet." },
      { cn: "我给同学小王打电话，他给我讲了一遍。", py: "Wǒ gěi tóngxué Xiǎo Wáng dǎ diànhuà, tā gěi wǒ jiǎngle yí biàn.", nl: "Ik belde mijn klasgenoot Xiao Wang en hij legde het één keer uit." },
      { cn: "这次我听懂了。", py: "Zhè cì wǒ tīngdǒng le.", nl: "Deze keer begreep ik het." },
      { cn: "然后我把生词写了三遍，终于都记住了。", py: "Ránhòu wǒ bǎ shēngcí xiěle sān biàn, zhōngyú dōu jìzhù le.", nl: "Daarna schreef ik de nieuwe woorden drie keer op, en eindelijk had ik ze allemaal onthouden." },
      { cn: "十二点，我准备好了，就去睡觉了。", py: "Shí'èr diǎn, wǒ zhǔnbèi hǎo le, jiù qù shuìjiào le.", nl: "Om twaalf uur was ik klaar en ging ik slapen." }
    ],
    questions: [
      { type: "mc", q: "Waar was het studieboek?",
        options: ["Onder het bed.", "Bij Xiao Wang.", "Op school.", "In de keuken."], answer: 0,
        why: ["Goed: 最后在床下找到了。", "Xiao Wang legde alleen iets uit via de telefoon.", "School staat niet in de tekst.", "De keuken staat niet in de tekst."] },
      { type: "mc", q: "Waarom belde de schrijver Xiao Wang?",
        options: ["Hij begreep de nieuwe tekst niet.", "Hij kon zijn boek niet vinden.", "Hij wilde samen eten.", "Hij had de woorden niet opgeschreven."], answer: 0,
        why: ["Goed: 我看了两遍，还是没看懂。", "Het boek had hij al gevonden, onder het bed.", "Hij had al gegeten: 吃完晚饭以后.", "De woorden schreef hij pas daarna op."] },
      { type: "mc", q: "我看了两遍，还是没看懂。Wat betekent dit?",
        options: ["Hij heeft gelezen, maar het resultaat (begrijpen) bleef uit.", "Hij heeft de tekst niet gelezen.", "Hij heeft de tekst begrepen.", "Hij wil de tekst niet lezen."], answer: 0,
        why: ["Goed: 看了 = de handeling, 没看懂 = geen resultaat.", "看了两遍 zegt dat hij wél twee keer las.", "没看懂 zegt juist dat hij het niet begreep.", "Er staat niets over willen; 没 gaat over wat (niet) gebeurd is."] }
    ]
  },
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
    { type: "mc", q: "\"Ik heb het gehoord, maar niet begrepen.\"",
      options: ["我听到了，可是没听懂。", "我听到了，可是不听懂。", "我听懂了，可是没听到。", "我听了到，可是没听懂。"], answer: 0,
      why: ["Goed: 听到 = gehoord, 没听懂 = niet begrepen.", "Een resultaat ontken je met 没, niet met 不.", "De resultaten zijn omgedraaid: dit zegt \"begrepen maar niet gehoord\".", "了 kan niet tussen 听 en 到."] },
    { type: "mc", q: "你看___我的钥匙了吗？(Heb je mijn sleutels gezien?)",
      options: ["见", "完", "懂", "错"], answer: 0,
      why: ["Goed: 看见 = zien, het resultaat van kijken.", "看完 = uitgelezen of uitgekeken; dat past niet bij sleutels.", "看懂 = begrijpen wat je leest; sleutels begrijp je niet.", "看错 = verkeerd zien; dat vraag je hier niet."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["我写作业完了。", "我写完作业了。", "作业我写完了。", "我把作业写完了。"], answer: 0,
      why: ["Goed: deze is fout. 完 moet direct achter 写, vóór het ding.", "Deze klopt: werkwoord + resultaat + ding.", "Deze klopt: het ding staat vooraan als onderwerp.", "Deze klopt: 把 haalt het ding naar voren."] },
    { type: "fill", q: "我的钥匙找___了！(Mijn sleutels zijn gevonden!)", answers: ["到", "着"],
      hint: "Welk resultaat maakt van zoeken \"vinden\"?", why: "找到 = gevonden. 找 alleen is zoeken." },
    { type: "order", q: "Zet in de goede volgorde: \"Laten we eerst eten, en dan gaan.\"",
      tokens: [["我们", "wǒmen"], ["吃完", "chīwán"], ["饭", "fàn"], ["再", "zài"], ["走吧", "zǒu ba"]],
      alt: ["吃完饭我们再走吧"] },
    { type: "mc", q: "\"Heb je het begrepen?\"",
      options: ["你听懂了吗？", "你懂听了吗？", "你听了懂吗？", "你不听懂吗？"], answer: 0,
      why: ["Goed: werkwoord + resultaat + 了吗.", "Het werkwoord 听 komt eerst, het resultaat 懂 daarna.", "了 komt na het resultaat, niet ertussen.", "不 past niet bij een resultaat."] },
    { type: "open", q: "Zeg dat je de nieuwe woorden onthouden hebt.", model: ["我记住这些新词了。", "这些生词我都记住了。"],
      tip: "Check: staat 住 direct achter 记?" },
    { type: "open", q: "Vertaal: \"Mijn huiswerk is nog niet af.\"", model: ["我的作业还没做完。", "我还没写完作业。", "作业我还没做完。"],
      tip: "Check: 还没 vóór het werkwoord, 完 direct erachter, en geen 了." }
  ],
  review: [
    { type: "mc", q: "\"Heb je je telefoon gevonden?\"",
      options: ["你找到手机了吗？", "你找手机了吗？", "你到找手机了吗？", "你找手机到了吗？"], answer: 0,
      why: ["Goed.", "找 alleen is \"zoeken\": heb je gezocht?", "到 komt ná het werkwoord.", "到 staat direct achter 找, niet na het ding."] },
    { type: "mc", q: "\"Heb je deze karakters onthouden?\" 这些汉字你记___了吗？",
      options: ["住", "懂", "开", "饱"], answer: 0,
      why: ["Goed: 记住 = onthouden.", "懂 hoort bij begrijpen (听懂, 看懂).", "开 betekent open of weg.", "饱 is verzadigd, na eten (吃饱)."] },
    { type: "mc", q: "\"Ik heb mijn koffie nog niet op.\"",
      options: ["我还没喝完咖啡。", "我还不喝完咖啡。", "我还没喝咖啡完。", "我还没喝完咖啡了。"], answer: 0,
      why: ["Goed: 还没 + werkwoord + 完 + ding.", "Een resultaat ontken je met 没, niet met 不.", "完 staat direct achter 喝, vóór het ding.", "Na 没 valt 了 weg."] }
  ]
})
