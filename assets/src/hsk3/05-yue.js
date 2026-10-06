({
  id: "05", slug: "yue", title: "越来越 en 越 ... 越", sub: "Steeds meer, hoe meer ... hoe meer",
  canDo: "Je kunt nu zeggen dat iets steeds meer verandert, en dat het ene met het andere meegroeit.",
  guess: {
    q: "雨越下越大。Wat betekent dit, denk je?",
    options: ["Het regent steeds harder.", "Het regent steeds minder.", "Het regent heel hard.", "Het stopt met regenen."], answer: 0,
    why: ["Goed: 越 A 越 B = hoe meer A, hoe meer B.", "大 is \"groot\": het wordt meer, niet minder.", "Dat zou 雨很大 zijn: daar zit geen verandering in.", "Niets in de zin zegt dat het stopt."]
  },
  problem: "\"Het wordt steeds kouder.\" In het Nederlands herhaal je een woord. In het Chinees zet je 越来越 (yuè lái yuè) vóór de eigenschap. Twee dingen die samen groeien? Dan 越 A 越 B.",
  pattern: [
    { l: "wat", v: "天气", c: 1 }, { l: "steeds meer", v: "越来越", c: 2, key: true }, { l: "eigenschap", v: "冷", c: 4 }, { l: "verandering", v: "了", c: 3 }
  ],
  patternCap: "A 越来越 + eigenschap (了) · (wie) 越 + A, (wie) 越 + B: 你越练习，说得越好。",
  rules: [
    "Geen 很 of 非常 vóór de eigenschap: 越来越很冷 is fout.",
    "Vaak eindigt de zin op 了: er is iets veranderd.",
    "越 A 越 B: twee keer 越, elk vóór een werkwoord of eigenschap.",
    "Zijn er twee onderwerpen, dan staat elk onderwerp vóór zijn eigen 越: 你越说，我越不明白。",
    "越来越 kan ook vóór werkwoorden van gevoel: 我越来越喜欢这里了。"
  ],
  pitfall: "越 staat altijd vóór het werkwoord of de eigenschap, nooit vóór het onderwerp: 越我吃 is fout.",
  examples: [
    { cn: "天气越来越冷了。", py: "Tiānqì yuè lái yuè lěng le.", nl: "Het wordt steeds kouder." },
    { cn: "我的汉语水平越来越高了。", py: "Wǒ de Hànyǔ shuǐpíng yuè lái yuè gāo le.", nl: "Mijn niveau Chinees wordt steeds hoger." },
    { cn: "你越练习，说得越好。", py: "Nǐ yuè liànxí, shuō de yuè hǎo.", nl: "Hoe meer je oefent, hoe beter je spreekt." },
    { cn: "雨越下越大。", py: "Yǔ yuè xià yuè dà.", nl: "Het regent steeds harder." }
  ],
  nuance: [
    { h: "越来越 of 越 A 越 B?",
      p: "越来越 gaat over één ding dat met de tijd verandert. 越 A 越 B koppelt twee dingen: als A groeit, groeit B mee. A is vaak de oorzaak. Vergelijk: hij wordt steeds dikker, en hij wordt dikker doordat hij eet.",
      ex: [
        { cn: "他越来越胖了。", py: "Tā yuè lái yuè pàng le.", nl: "Hij wordt steeds dikker." },
        { cn: "他越吃越胖。", py: "Tā yuè chī yuè pàng.", nl: "Hoe meer hij eet, hoe dikker hij wordt." }
      ] },
    { h: "越来越 of 比 / 更?",
      p: "Met 比 en 更 vergelijk je twee dingen of momenten. Met 越来越 beschrijf je een verandering die doorgaat. Gebruik ze niet samen: 越来越比昨天冷 is fout.",
      ex: [
        { cn: "今天比昨天冷。", py: "Jīntiān bǐ zuótiān lěng.", nl: "Vandaag is het kouder dan gisteren." },
        { cn: "这几天越来越冷了。", py: "Zhè jǐ tiān yuè lái yuè lěng le.", nl: "De laatste dagen wordt het steeds kouder." }
      ] },
    { h: "Twee onderwerpen, en 就",
      p: "In 越 A 越 B kan elk deel een eigen onderwerp hebben. Het onderwerp staat dan vóór 越. Vóór het tweede 越 hoor je vaak 就. Dat maakt het verband nog duidelijker.",
      ex: [
        { cn: "你越说，我越不明白。", py: "Nǐ yuè shuō, wǒ yuè bù míngbai.", nl: "Hoe meer jij uitlegt, hoe minder ik het begrijp." },
        { cn: "人越多，就越热闹。", py: "Rén yuè duō, jiù yuè rènao.", nl: "Hoe meer mensen, hoe gezelliger." }
      ] }
  ],
  mistakes: [
    { wrong: "天气越来越很冷了。", right: "天气越来越冷了。", why: "Na 越来越 komt geen 很 of 非常." },
    { wrong: "越我吃越胖。", right: "我越吃越胖。", why: "越 staat vóór het werkwoord, het onderwerp komt ervoor." },
    { wrong: "你越说，越我不明白。", right: "你越说，我越不明白。", why: "Het tweede onderwerp (我) staat ook vóór zijn 越." },
    { wrong: "今天越来越比昨天冷。", right: "今天比昨天冷。", why: "比 vergelijkt twee momenten. 越来越 is een verandering. Kies één van de twee." }
  ],
  vocab: [
    ["越来越", "yuè lái yuè", "steeds meer"], ["越", "yuè", "hoe ... (hoe ...)"], ["变化", "biànhuà", "verandering"],
    ["习惯", "xíguàn", "gewend raken; gewoonte"], ["水平", "shuǐpíng", "niveau"], ["环境", "huánjìng", "omgeving, milieu"],
    ["城市", "chéngshì", "stad"], ["健康", "jiànkāng", "gezond"], ["自行车", "zìxíngchē", "fiets"], ["堵", "dǔ", "vaststaan (in het verkeer)"]
  ],
  dialogue: [
    ["A", "你来中国多长时间了？", "Nǐ lái Zhōngguó duō cháng shíjiān le?", "Hoe lang ben je al in China?"],
    ["B", "半年了。", "Bàn nián le.", "Een half jaar."],
    ["A", "你的汉语越来越好了！", "Nǐ de Hànyǔ yuè lái yuè hǎo le!", "Je Chinees wordt steeds beter!"],
    ["B", "谢谢！我觉得汉语越学越有意思。", "Xièxie! Wǒ juéde Hànyǔ yuè xué yuè yǒu yìsi.", "Dank je! Hoe meer ik leer, hoe leuker ik Chinees vind."],
    ["A", "天气也越来越冷了，你习惯吗？", "Tiānqì yě yuè lái yuè lěng le, nǐ xíguàn ma?", "Het wordt ook steeds kouder. Ben je eraan gewend?"],
    ["B", "还不太习惯。", "Hái bú tài xíguàn.", "Nog niet echt."]
  ],
  reading: {
    title: "我的城市",
    lines: [
      { cn: "我住的城市这几年变化很大。", py: "Wǒ zhù de chéngshì zhè jǐ nián biànhuà hěn dà.", nl: "De stad waar ik woon is de laatste jaren erg veranderd." },
      { cn: "楼越来越高，来这里工作的人也越来越多。", py: "Lóu yuè lái yuè gāo, lái zhèlǐ gōngzuò de rén yě yuè lái yuè duō.", nl: "De gebouwen worden steeds hoger, en er komen steeds meer mensen hier werken." },
      { cn: "可是路上的车也越来越多了。", py: "Kěshì lù shang de chē yě yuè lái yuè duō le.", nl: "Maar er rijden ook steeds meer auto's." },
      { cn: "上班的时候，路上常常很堵。", py: "Shàngbān de shíhou, lù shang chángcháng hěn dǔ.", nl: "Als ik naar mijn werk ga, staat het verkeer vaak vast." },
      { cn: "所以我现在骑自行车上班。", py: "Suǒyǐ wǒ xiànzài qí zìxíngchē shàngbān.", nl: "Daarom fiets ik nu naar mijn werk." },
      { cn: "刚开始我觉得很累，可是越骑越习惯。", py: "Gāng kāishǐ wǒ juéde hěn lèi, kěshì yuè qí yuè xíguàn.", nl: "In het begin was ik erg moe, maar hoe meer ik fietste, hoe meer ik eraan gewend raakte." },
      { cn: "现在我的身体越来越健康了。", py: "Xiànzài wǒ de shēntǐ yuè lái yuè jiànkāng le.", nl: "Nu word ik steeds gezonder." },
      { cn: "我觉得，骑车的人越多，城市的环境就越好。", py: "Wǒ juéde, qí chē de rén yuè duō, chéngshì de huánjìng jiù yuè hǎo.", nl: "Ik vind: hoe meer mensen fietsen, hoe beter het milieu in de stad." }
    ],
    questions: [
      { type: "mc", q: "Waarom fietst de schrijver naar zijn werk?",
        options: ["Het verkeer staat vaak vast.", "Hij heeft geen auto.", "Zijn werk is heel dichtbij.", "De dokter zei dat het moest."], answer: 0,
        why: ["Goed: 路上常常很堵，所以我现在骑自行车上班。", "Over een eigen auto staat niets in de tekst.", "De afstand wordt niet genoemd.", "Er staat geen dokter in de tekst."] },
      { type: "mc", q: "Wat is er met de schrijver zelf veranderd?",
        options: ["Hij wordt steeds gezonder.", "Hij wordt steeds vermoeider.", "Hij werkt steeds meer.", "Hij woont steeds verder weg."], answer: 0,
        why: ["Goed: 我的身体越来越健康了。", "Alleen in het begin was hij moe: 刚开始我觉得很累.", "Over meer werken staat niets in de tekst.", "Over verhuizen staat niets in de tekst."] },
      { type: "mc", q: "越骑越习惯。Wat betekent dit?",
        options: ["Hoe meer hij fietst, hoe meer hij eraan gewend raakt.", "Hij fietst steeds meer.", "Hij is al gewend, dus hij fietst.", "Hij fietst, maar raakt er niet aan gewend."], answer: 0,
        why: ["Goed: 越 A 越 B koppelt fietsen aan gewend raken.", "Dat zou 他越来越常骑车 zijn; hier groeien twee dingen samen.", "越 A 越 B zegt niet dat hij al gewend was; het groeit.", "习惯 is hier juist wat groeit, niet wat ontbreekt."] }
    ]
  },
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
    { type: "mc", q: "\"Hoe meer jij uitlegt, hoe minder ik het begrijp.\"",
      options: ["你越说，我越不明白。", "越你说，越我不明白。", "你越说，我越明白不。", "你越来越说，我越不明白。"], answer: 0,
      why: ["Goed: elk onderwerp staat vóór zijn eigen 越.", "越 staat niet vóór het onderwerp, maar erna.", "不 staat vóór 明白, niet erachter.", "越来越 is één verandering; voor twee gekoppelde dingen gebruik je 越 ... 越."] },
    { type: "mc", q: "Welke zin klopt NIET?",
      options: ["今天越来越比昨天冷。", "天气越来越冷了。", "今天比昨天冷。", "今天比昨天更冷。"], answer: 0,
      why: ["Goed: deze is fout. 比 en 越来越 gebruik je niet samen.", "Deze klopt: een verandering met 越来越.", "Deze klopt: een vergelijking met 比.", "Deze klopt: 更 mag in een 比-zin."] },
    { type: "mc", q: "\"Steeds meer mensen leren Chinees.\"",
      options: ["越来越多的人学习汉语。", "越来越很多人学习汉语。", "越来越多人的学习汉语。", "越多越来的人学习汉语。"], answer: 0,
      why: ["Goed: 越来越多的 + zelfstandig naamwoord.", "Na 越来越 komt geen 很.", "的 staat tussen 多 en 人, niet na 人.", "越来越 is een vast blok: 越来越, niet 越多越来."] },
    { type: "fill", q: "天气___冷了，你要多穿点儿衣服。(Het wordt steeds kouder, trek wat meer kleren aan.)", answers: ["越来越"],
      hint: "Welk vast blok betekent \"steeds meer\"?", why: "越来越 + eigenschap + 了: een verandering die doorgaat." },
    { type: "order", q: "Zet in de goede volgorde: \"Hoe meer je van dit gerecht eet, hoe lekkerder het wordt.\"",
      tokens: [["这个", "zhège"], ["菜", "cài"], ["越吃", "yuè chī"], ["越", "yuè"], ["好吃", "hǎochī"]] },
    { type: "open", q: "Beschrijf iets in jouw leven dat verandert.", model: ["我的城市越来越大了。", "我的工作越来越忙了。", "我越学汉语越喜欢中国。"],
      tip: "Check: geen 很 na 越来越, en 了 aan het eind." },
    { type: "open", q: "Vertaal: \"Hoe vaker ik dit liedje hoor, hoe mooier ik het vind.\"", model: ["这首歌我越听越喜欢。", "这首歌越听越好听。"],
      tip: "Check: 越 + 听, dan 越 + 喜欢 of 好听. Het onderwerp staat vóór het eerste 越." }
  ],
  review: [
    { type: "mc", q: "\"Het wordt steeds warmer.\"",
      options: ["天气越来越热了。", "天气越来越很热。", "天气越热越来了。", "天气很越来越热了。"], answer: 0,
      why: ["Goed.", "Geen 很 na 越来越.", "越来越 is één vast blok vóór de eigenschap.", "很 kan niet vóór 越来越."] },
    { type: "mc", q: "\"Hoe meer hij praat, hoe bozer hij wordt.\"",
      options: ["他越说越生气。", "他越来越说生气。", "他说越越生气。", "越他说越生气。"], answer: 0,
      why: ["Goed.", "Voor twee dingen die samen groeien: 越 A 越 B.", "Elke 越 staat vóór zijn eigen woord.", "越 staat niet vóór het onderwerp."] },
    { type: "mc", q: "\"Hoe dichter bij de toets, hoe zenuwachtiger hij wordt.\"",
      options: ["考试越近，他越紧张。", "越考试近，越他紧张。", "考试近越，他紧张越。", "考试越近，他越很紧张。"], answer: 0,
      why: ["Goed: elk onderwerp, dan 越 + eigenschap.", "越 staat na het onderwerp, niet ervoor.", "越 staat vóór de eigenschap, niet erachter.", "Na 越 komt geen 很."] }
  ]
})
