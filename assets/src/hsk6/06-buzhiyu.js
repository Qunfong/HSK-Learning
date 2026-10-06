({
  id: "06", slug: "buzhiyu", title: "不至于", sub: "Zo erg zal het niet worden",
  canDo: "Je kunt nu iemand geruststellen dat iets niet zo erg wordt, met 不至于, en vragen of iets nou nodig is met 至于吗.",
  guess: {
    q: "他只是有点儿累，不至于生病吧。Wat bedoelt de spreker, denk je?",
    options: ["Hij is wat moe, maar zo erg dat hij ziek wordt, zal het niet zijn.", "Hij is wat moe, dus hij wordt zeker ziek.", "Hij is niet moe en ook niet ziek.", "Hij is wat moe, omdat hij ziek is."], answer: 0,
    why: ["Goed: 不至于 = het gaat niet zo ver dat ....", "Je leest het 不 niet mee: de spreker zegt juist dat het niet zo ver komt.", "有点儿累 zegt dat hij wél moe is.", "不至于 geeft geen reden; het zegt hoe ver iets gaat."]
  },
  problem: "Iemand maakt zich zorgen en denkt meteen aan het ergste. Jij denkt: zo ver komt het niet. Daarvoor is 不至于 (bú zhìyú). Je zegt dat iets niet zo erg wordt. Het werkt in spreektaal en in schrijftaal.",
  pattern: [
    { l: "wie", v: "他", c: 1 }, { l: "niet zo erg", v: "不至于", c: 2, key: true }, { l: "waarom", v: "为这点小事", c: 3 },
    { l: "erg gevolg", v: "生气", c: 4 }, { l: "zachter", v: "吧", c: 5 }
  ],
  patternCap: "(Kleine oorzaak,) wie + 不至于 + te erg gevolg (+ 吧) · spreektaal: 至于 + gevolg + 吗？= Is dat nou nodig?",
  rules: [
    "Na 不至于 staat een gevolg dat te erg of overdreven is.",
    "Vaak komt er 吧 achter: je bent er bijna zeker van.",
    "Vaak staat er iets kleins voor: 只是, 一点小事, ... 而已. Dat maakt het contrast duidelijk.",
    "In spreektaal hoor je 至于吗？ of 至于 + gevolg + 吗？ Dat betekent: is dat nou nodig?",
    "In schrijftaal staat 不至于 vaak met 造成, 导致 of 影响: 不至于造成严重后果."
  ],
  pitfall: "不至于 is anders dan 不会. 不会 zegt alleen \"gebeurt niet\". 不至于 zegt: \"het wordt niet zó erg\". Gebruik het dus voor een erg gevolg, niet voor iets goeds.",
  examples: [
    { cn: "这点小事，他不至于生气吧。", py: "Zhè diǎn xiǎo shì, tā bú zhìyú shēngqì ba.", nl: "Om zo'n kleinigheid wordt hij toch niet boos." },
    { cn: "只是感冒而已，不至于住院。", py: "Zhǐ shì gǎnmào éryǐ, bú zhìyú zhùyuàn.", nl: "Het is maar een verkoudheid. Opgenomen worden is niet nodig." },
    { cn: "他虽然没复习，但也不至于不及格。", py: "Tā suīrán méi fùxí, dàn yě bú zhìyú bù jígé.", nl: "Hij heeft niet geleerd, maar hij zal heus niet zakken." },
    { cn: "你们只是吵了一架，至于分手吗？", py: "Nǐmen zhǐ shì chǎole yí jià, zhìyú fēnshǒu ma?", nl: "Jullie hebben alleen ruzie gehad. Is uit elkaar gaan nou nodig?" }
  ],
  nuance: [
    { h: "不至于 of 不会?",
      p: "不会 is een neutrale voorspelling: het gebeurt niet. 不至于 zegt meer. Het gevolg zou een te sterke reactie zijn op iets kleins. Je denkt dus aan een schaal: het gaat wel een beetje mis, maar niet zó ver. Zonder die schaal, bijvoorbeeld bij gewone plannen, gebruik je 不会.",
      ex: [
        { cn: "他明天不会来。", py: "Tā míngtiān bú huì lái.", nl: "Hij komt morgen niet." },
        { cn: "迟到一次而已，老板不至于开除他。", py: "Chídào yí cì éryǐ, lǎobǎn bú zhìyú kāichú tā.", nl: "Het is maar één keer te laat. Zo ver dat de baas hem ontslaat, gaat het niet." }
      ] },
    { h: "至于 zonder 不: \"wat betreft\"",
      p: "至于 aan het begin van een zin is iets anders. Dan betekent het \"wat betreft\". Je stapt over op een nieuw onderwerp. Daarna komt een zelfstandig naamwoord of een kort zinsdeel, en dan een komma. Dit gebruik is neutraal tot formeel.",
      ex: [
        { cn: "我们先定时间。至于地点，以后再说。", py: "Wǒmen xiān dìng shíjiān. Zhìyú dìdiǎn, yǐhòu zài shuō.", nl: "We prikken eerst een tijd. Wat de plek betreft, dat zien we later." }
      ] },
    { h: "Spreektaal: 至于吗？",
      p: "至于吗？ en 至于 + gevolg + 吗？ zijn spreektaal. Het is een retorische vraag: je vindt een reactie overdreven. Het klinkt direct en soms wat spottend. In een formele tekst gebruik je liever 不至于 of 没有必要.",
      ex: [
        { cn: "不就是一支笔吗？至于吗？", py: "Bú jiù shì yì zhī bǐ ma? Zhìyú ma?", nl: "Het is toch maar een pen? Is dat nou nodig?" }
      ] }
  ],
  mistakes: [
    { wrong: "这点小事，他不至于高兴吧。", right: "这点小事，他不至于生气吧。", why: "Na 不至于 staat een erg of overdreven gevolg. 高兴 is niets ergs." },
    { wrong: "这点小事，他至于生气。", right: "这点小事，他不至于生气。", why: "Een kale 至于 met een gevolg werkt alleen in een vraag met 吗. Een bewering heeft 不 nodig." },
    { wrong: "不至于价格，我们以后再谈。", right: "至于价格，我们以后再谈。", why: "Voor \"wat betreft\" gebruik je 至于 zonder 不." },
    { wrong: "这点小事不至于他生气吧。", right: "这点小事他不至于生气吧。", why: "Het onderwerp (他) staat vóór 不至于, net als bij 不会." }
  ],
  vocab: [
    ["不至于", "bú zhìyú", "(zo erg wordt het niet)"], ["而已", "éryǐ", "(meer niet, slechts)"], ["住院", "zhùyuàn", "opgenomen worden"],
    ["及格", "jígé", "slagen (toets)"], ["吵架", "chǎojià", "ruzie maken"], ["开除", "kāichú", "ontslaan"],
    ["焦虑", "jiāolǜ", "gespannen, angstig"], ["夸张", "kuāzhāng", "overdrijven"], ["分手", "fēnshǒu", "uit elkaar gaan"], ["血压", "xuèyā", "bloeddruk"]
  ],
  dialogue: [
    ["A", "我今天在会上说错了一句话，老板会不会开除我？", "Wǒ jīntiān zài huì shang shuōcuòle yí jù huà, lǎobǎn huì bu huì kāichú wǒ?", "Ik zei vandaag in de vergadering iets verkeerds. Zou de baas me ontslaan?"],
    ["B", "只是一句话而已，不至于吧。", "Zhǐ shì yí jù huà éryǐ, bú zhìyú ba.", "Het was maar één zin. Zo erg zal het niet zijn."],
    ["A", "可是我现在很焦虑，怕今天晚上睡不着。", "Kěshì wǒ xiànzài hěn jiāolǜ, pà jīntiān wǎnshang shuì bu zháo.", "Maar ik ben nu heel gespannen. Ik ben bang dat ik vannacht niet kan slapen."],
    ["B", "你太夸张了。谁都会说错话，老板不至于因为这个开除你。", "Nǐ tài kuāzhāng le. Shéi dōu huì shuōcuò huà, lǎobǎn bú zhìyú yīnwèi zhège kāichú nǐ.", "Je overdrijft. Iedereen zegt weleens iets verkeerds. De baas ontslaat je echt niet om zoiets."],
    ["A", "希望你说得对。", "Xīwàng nǐ shuō de duì.", "Ik hoop dat je gelijk hebt."]
  ],
  reading: {
    title: "体检报告",
    lines: [
      { cn: "上个月，老陈拿到了体检报告，发现血压有点儿高。", py: "Shàng ge yuè, Lǎo Chén nádàole tǐjiǎn bàogào, fāxiàn xuèyā yǒudiǎnr gāo.", nl: "Vorige maand kreeg Lao Chen zijn keuringsrapport. Zijn bloeddruk bleek wat hoog." },
      { cn: "他非常紧张，以为自己得了什么大病。", py: "Tā fēicháng jǐnzhāng, yǐwéi zìjǐ déle shénme dà bìng.", nl: "Hij was erg zenuwachtig en dacht dat hij een zware ziekte had." },
      { cn: "医生看了报告，说：\"血压只是稍微高了一点儿，还不至于要吃药。\"", py: "Yīshēng kànle bàogào, shuō: \"Xuèyā zhǐ shì shāowēi gāole yìdiǎnr, hái bú zhìyú yào chī yào.\"", nl: "De arts las het rapport en zei: \"De bloeddruk is maar iets te hoog. Medicijnen zijn nog niet nodig.\"" },
      { cn: "\"只要少吃盐、多运动，就不至于发展成严重的问题。\"", py: "\"Zhǐyào shǎo chī yán, duō yùndòng, jiù bú zhìyú fāzhǎn chéng yánzhòng de wèntí.\"", nl: "\"Als u minder zout eet en meer beweegt, wordt het geen ernstig probleem.\"" },
      { cn: "\"至于喝酒，最好少喝一点儿。\"", py: "\"Zhìyú hē jiǔ, zuìhǎo shǎo hē yìdiǎnr.\"", nl: "\"Wat alcohol betreft: drink liever wat minder.\"" },
      { cn: "回到家，老陈马上把家里的酒全部送给了邻居。", py: "Huídào jiā, Lǎo Chén mǎshàng bǎ jiā li de jiǔ quánbù sònggěile línjū.", nl: "Thuis gaf Lao Chen meteen alle drank in huis aan de buren." },
      { cn: "他太太笑着说：\"医生只是让你少喝，至于全都送人吗？\"", py: "Tā tàitai xiàozhe shuō: \"Yīshēng zhǐ shì ràng nǐ shǎo hē, zhìyú quán dōu sòng rén ma?\"", nl: "Zijn vrouw zei lachend: \"De arts zei alleen dat je minder moet drinken. Moet je nou alles weggeven?\"" },
      { cn: "老陈说：\"家里有酒，我就忍不住，还是送走好。\"", py: "Lǎo Chén shuō: \"Jiā li yǒu jiǔ, wǒ jiù rěn bu zhù, háishi sòngzǒu hǎo.\"", nl: "Lao Chen zei: \"Als er drank in huis is, kan ik me niet inhouden. Weggeven is beter.\"" },
      { cn: "三个月以后，他的血压恢复了正常。", py: "Sān ge yuè yǐhòu, tā de xuèyā huīfùle zhèngcháng.", nl: "Drie maanden later was zijn bloeddruk weer normaal." }
    ],
    questions: [
      { type: "mc", q: "Wat zei de arts over medicijnen?",
        options: ["Die zijn nog niet nodig.", "Die moet hij meteen nemen.", "Die helpen niet bij hoge bloeddruk.", "Die moet hij samen met minder zout nemen."], answer: 0,
        why: ["Goed: 还不至于要吃药.", "Je leest 不至于 niet mee: het is juist nog niet nodig.", "Dat staat niet in de tekst.", "De arts noemt minder zout in plaats van medicijnen."] },
      { type: "mc", q: "Wat deed Lao Chen met de drank?",
        options: ["Hij gaf alles aan de buren.", "Hij dronk minder, zoals de arts zei.", "Hij gaf het aan zijn vrouw.", "Hij verkocht alles."], answer: 0,
        why: ["Goed: 把家里的酒全部送给了邻居.", "De arts vroeg dat, maar Lao Chen gaf alles weg.", "Zijn vrouw lachte erom; de drank ging naar de buren.", "送 is geven, niet verkopen."] },
      { type: "mc", q: "至于全都送人吗？Wat bedoelt zijn vrouw?",
        options: ["Alles weggeven is overdreven.", "Wat betreft het weggeven: aan wie?", "Hij moet echt alles weggeven.", "Het weggeven is niet gelukt."], answer: 0,
        why: ["Goed: 至于 ... 吗？ = is dat nou nodig?", "至于 + 吗 aan het eind is de retorische vraag, niet \"wat betreft\".", "Ze vindt het juist te veel.", "Hij heeft alles wél weggegeven."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Het is maar een klein foutje; je zakt er heus niet door.\"",
      options: ["只是一个小错误，你不至于不及格。", "只是一个小错误，你至于不及格。", "只是一个小错误，你不至于及格。", "只是一个小错误，你一定不及格。"], answer: 0,
      why: ["Goed: 不至于 + het erge gevolg (不及格).", "Zonder 不 is het geen geruststelling. 至于 alleen hoort in een vraag met 吗.", "Na 不至于 staat het erge gevolg. 及格 (slagen) is niet erg.", "一定 zegt dat je zeker zakt: het tegendeel."] },
    { type: "mc", q: "他身体一直很好，淋了一点儿雨，___生病吧。(Hij is altijd gezond. Een beetje regen maakt hem heus niet ziek.)",
      options: ["不至于", "之所以", "一旦", "固然"], answer: 0,
      why: ["Goed: 不至于 = zo erg wordt het niet.", "之所以 vraagt om 是因为 en geeft een reden.", "一旦 is \"als ... eenmaal\" en vraagt om 就.", "固然 geeft iets toe en vraagt om 但."] },
    { type: "order", q: "Zet in de goede volgorde: \"Hij wordt heus niet boos, denk ik.\"",
      tokens: [["他", "tā"], ["应该", "yīnggāi"], ["不至于", "bú zhìyú"], ["生气", "shēngqì"], ["吧", "ba"]] },
    { type: "mc", q: "Wat betekent: 迟到五分钟而已，至于这么生气吗？",
      options: ["Het is maar vijf minuten te laat. Is zo boos worden nou nodig?", "Het is vijf minuten te laat, dus boos worden is terecht.", "Hij is vijf minuten te laat, omdat hij zo boos is.", "Het is niet te laat, dus niemand is boos."], answer: 0,
      why: ["Goed: 至于 ... 吗？ = is dat nou nodig?", "至于 ... 吗 zegt juist dat de reactie overdreven is.", "De zin geeft geen reden voor het te laat komen.", "迟到五分钟 zegt dat iemand wél te laat is."] },
    { type: "mc", q: "___你说的那个问题，我们明天开会再讨论。(Wat dat probleem van jou betreft, bespreken we dat morgen in de vergadering.)",
      options: ["至于", "不至于", "以至于", "甚至"], answer: 0,
      why: ["Goed: 至于 aan het begin = wat betreft.", "不至于 = zo erg wordt het niet. Het opent geen onderwerp.", "以至于 geeft een gevolg en staat niet aan het begin.", "甚至 = zelfs. Het opent geen nieuw onderwerp."] },
    { type: "mc", q: "Je vriend is boos omdat hij een pen kwijt is. Wat zeg je in spreektaal?",
      options: ["一支笔而已，至于吗？", "一支笔而已，不至于吗？", "一支笔而已，至于。", "一支笔而已，至于是吗？"], answer: 0,
      why: ["Goed: 至于吗？ = is dat nou nodig?", "De retorische vraag is 至于吗, zonder 不.", "Een kale 至于 zonder 吗 is geen zin.", "Er komt niets tussen 至于 en 吗."] },
    { type: "mc", q: "他不至于生气 zegt meer dan 他不会生气. Wat voegt 不至于 toe?",
      options: ["Dat boos worden een te sterke reactie zou zijn.", "Dat hij zeker boos wordt.", "Dat hij in geen enkele situatie ooit boos wordt.", "Dat hij nu al boos is."], answer: 0,
      why: ["Goed: 不至于 = het gaat niet zó ver.", "Je mist het 不: hij wordt juist niet boos.", "不至于 gaat over deze kleine aanleiding, niet over altijd.", "Er is geen 了 of 已经; het gaat om een voorspelling."] },
    { type: "order", q: "Zet in de goede volgorde: \"Dat beetje geld laat hem heus niet failliet gaan.\"",
      tokens: [["这点钱", "zhè diǎn qián"], ["还不至于", "hái bú zhìyú"], ["让他", "ràng tā"], ["破产", "pòchǎn"], ["吧", "ba"]] },
    { type: "fill", q: "只是一次小考试，你___紧张成这样吗？(Het is maar een kleine toets. Moet je nou zo zenuwachtig zijn?)", answers: ["至于"],
      hint: "Welk woord vormt met 吗 de vraag \"is dat nou nodig?\"", why: "至于 + gevolg + 吗？ is spreektaal voor: dat is overdreven." },
    { type: "open", q: "Iemand zegt: 我考试没准备好，一定会不及格！ Stel hem gerust met 不至于.",
      model: ["别担心，你不至于不及格吧。", "你平时学得不错，不至于考不过。"],
      tip: "Check: staat 不至于 vóór het erge gevolg, en is dat gevolg echt iets ergs?" },
    { type: "open", q: "Vertaal: \"Het was maar een klein foutje. Zo erg dat je ontslagen wordt, is het niet.\"",
      model: ["只是一个小错误而已，不至于被开除。", "就是一个小错误，老板不至于开除你吧。"],
      tip: "Check: iets kleins vooraan (只是 ... 而已), daarna 不至于 + het erge gevolg (被开除)." }
  ],
  review: [
    { type: "mc", q: "\"Het regent maar een beetje; de vlucht wordt heus niet geannuleerd.\"",
      options: ["只是下一点儿小雨，航班不至于取消吧。", "只是下一点儿小雨，航班至于取消吧。", "只是下一点儿小雨，航班不至于不取消吧。", "只是下一点儿小雨，航班一定会取消吧。"], answer: 0,
      why: ["Goed.", "Zonder 不 is het geen geruststelling.", "Na 不至于 staat het erge gevolg (取消), niet het goede.", "一定会 zegt dat de vlucht zeker vervalt: het tegendeel."] },
    { type: "mc", q: "Wat betekent: 这道题有点儿难，但还不至于做不出来。",
      options: ["Deze opgave is wat lastig, maar niet zo moeilijk dat je hem niet kunt oplossen.", "Deze opgave is wat lastig, en daarom kun je hem niet oplossen.", "Deze opgave is makkelijk, en je hebt hem al opgelost.", "Deze opgave is wat lastig, maar je hoeft hem niet op te lossen."], answer: 0,
      why: ["Goed: 不至于做不出来 = zo erg dat het niet lukt, wordt het niet.", "Je leest 不至于 als een gevolg; het zegt juist dat het niet zo ver komt.", "有点儿难 zegt dat de opgave wél wat lastig is.", "不至于 gaat over hoe erg iets is, niet over moeten."] },
    { type: "mc", q: "Wat betekent: 他只是开个玩笑，你至于这么认真吗？",
      options: ["Hij maakte maar een grapje. Moet je het nou zo serieus nemen?", "Hij maakte maar een grapje, dus je moet het serieus nemen.", "Wat zijn grapje betreft: neem je het serieus?", "Hij maakte een grapje omdat jij zo serieus bent."], answer: 0,
      why: ["Goed: 至于 ... 吗？ = is dat nou nodig?", "至于 ... 吗 zegt juist dat zo serieus doen overdreven is.", "至于 midden in de zin met 吗 is niet \"wat betreft\".", "De zin geeft geen reden voor het grapje."] }
  ]
})
