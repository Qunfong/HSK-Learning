({
  id: "05", slug: "yimian", title: "以免 en 免得", sub: "Iets doen om een probleem te voorkomen",
  canDo: "Je kunt nu zeggen wat je doet om een probleem te voorkomen, met 以免 en 免得.",
  guess: {
    q: "出门带把伞，以免被雨淋湿。Wat betekent dit, denk je?",
    options: ["Neem een paraplu mee, zodat je niet nat wordt.", "Neem een paraplu mee, want je wordt nat.", "Neem geen paraplu mee, je wordt toch niet nat.", "Je wordt nat, ook met een paraplu."], answer: 0,
    why: ["Goed: na 以免 staat wat je wilt voorkomen.", "以免 geeft geen reden. Het zegt wat je wilt voorkomen.", "带把伞 zegt juist dat je een paraplu meeneemt.", "以免 zegt dat de paraplu het natworden voorkomt."]
  },
  problem: "Je doet iets om een probleem te voorkomen. \"Schrijf het op, anders vergeet je het.\" In het Chinees noem je eerst de handeling. Daarna komt 以免 (yǐmiǎn) of 免得 (miǎnde). Na dat woord staat wat je wilt voorkomen.",
  pattern: [
    { l: "handeling", v: "把地址写下来", c: 4 }, { l: "以免", v: "以免", c: 2, key: true }, { l: "wat je wilt voorkomen", v: "忘了", c: 5 }
  ],
  patternCap: "Handeling + ，以免 / 免得 + wat je wilt voorkomen; 以免 = formeler, vaak geschreven; 免得 = spreektaal; 以便 + wat je wél wilt bereiken",
  rules: [
    "以免 en 免得 staan aan het begin van het tweede deel, ná de handeling.",
    "Na 以免 staat wat je níet wilt. 以免 bevat de ontkenning al.",
    "以免 is formeel en past in geschreven tekst. 免得 hoor je vaker in gesprekken.",
    "Na 免得 mag een onderwerp komen: 早点儿回家，免得妈妈担心。"
  ],
  pitfall: "Zet geen 不 na 以免. 以免迟到 = om niet te laat te komen. 以免不迟到 is fout.",
  examples: [
    { cn: "把地址写下来，以免忘了。", py: "Bǎ dìzhǐ xiě xiàlai, yǐmiǎn wàng le.", nl: "Schrijf het adres op, zodat je het niet vergeet." },
    { cn: "开车要慢一点儿，以免发生事故。", py: "Kāichē yào màn yìdiǎnr, yǐmiǎn fāshēng shìgù.", nl: "Rij wat langzamer, om een ongeluk te voorkomen." },
    { cn: "你早点儿回家，免得妈妈担心。", py: "Nǐ zǎo diǎnr huíjiā, miǎnde māma dānxīn.", nl: "Ga wat vroeger naar huis, zodat je moeder zich geen zorgen maakt." },
    { cn: "多穿点儿衣服，免得感冒。", py: "Duō chuān diǎnr yīfu, miǎnde gǎnmào.", nl: "Trek wat meer kleren aan, zodat je niet verkouden wordt." }
  ],
  nuance: [
    { h: "以免 of 以便?",
      p: "Ze lijken op elkaar, maar de richting is tegengesteld. Na 以免 staat wat je níet wilt: een probleem. Na 以便 (yǐbiàn) staat wat je wél wilt: een doel. Vraag jezelf dus: wil ik dit voorkomen of bereiken? Beide zijn formeel en staan in het tweede deel.",
      ex: [
        { cn: "我们提前出发，以免迟到。", py: "Wǒmen tíqián chūfā, yǐmiǎn chídào.", nl: "We vertrekken eerder, zodat we niet te laat komen." },
        { cn: "我们提前出发，以便准时到达。", py: "Wǒmen tíqián chūfā, yǐbiàn zhǔnshí dàodá.", nl: "We vertrekken eerder, zodat we op tijd aankomen." }
      ] },
    { h: "以免 of 免得?",
      p: "De betekenis is hetzelfde. 以免 hoort bij geschreven taal: regels, mededelingen, instructies. 免得 is spreektaal en klinkt persoonlijker. 免得 kan ook betekenen: dan hoeft iemand iets lastigs niet te doen. In die betekenis hoor je ook 省得 (shěngde).",
      ex: [
        { cn: "请保管好随身物品，以免丢失。", py: "Qǐng bǎoguǎn hǎo suíshēn wùpǐn, yǐmiǎn diūshī.", nl: "Let goed op uw spullen, om verlies te voorkomen." },
        { cn: "我帮你带过去吧，免得你再跑一趟。", py: "Wǒ bāng nǐ dài guòqu ba, miǎnde nǐ zài pǎo yí tàng.", nl: "Ik breng het wel voor je, dan hoef je niet nog een keer te gaan." }
      ] },
    { h: "Wat staat er na 以免?",
      p: "Na 以免 staat het probleem dat jouw handeling echt voorkomt. Een paraplu voorkomt geen regen, maar wel dat je nat wordt. Daarom: 带把伞，以免被雨淋湿, niet 以免下雨. Vaak gebruik je 被 na 以免: 以免被偷, 以免被骗."
    }
  ],
  mistakes: [
    { wrong: "早点儿出发，以免不迟到。", right: "早点儿出发，以免迟到。", why: "以免 bevat de ontkenning al. Na 以免 staat wat je níet wilt, zonder 不." },
    { wrong: "以免迟到，我们早点儿出发。", right: "我们早点儿出发，以免迟到。", why: "以免 staat in het tweede deel, ná de handeling." },
    { wrong: "早点儿出发，以免准时到达。", right: "早点儿出发，以便准时到达。", why: "准时到达 wil je juist bereiken. Voor een doel gebruik je 以便." },
    { wrong: "带把伞，以免下雨。", right: "带把伞，以免被雨淋湿。", why: "Na 以免 staat wat de handeling voorkomt. Een paraplu voorkomt geen regen, wel dat je nat wordt." }
  ],
  vocab: [
    ["以免", "yǐmiǎn", "(om te voorkomen dat)"], ["免得", "miǎnde", "(zodat niet, spreektaal)"], ["以便", "yǐbiàn", "(zodat, om te)"],
    ["事故", "shìgù", "ongeluk"], ["着急", "zháojí", "gehaast, ongerust"], ["身份证", "shēnfènzhèng", "identiteitskaart"],
    ["影响", "yǐngxiǎng", "beïnvloeden, storen"], ["护照", "hùzhào", "paspoort"], ["丢失", "diūshī", "kwijtraken, verliezen"],
    ["贵重", "guìzhòng", "waardevol"]
  ],
  dialogue: [
    ["A", "明天的考试八点开始，你几点出发？", "Míngtiān de kǎoshì bā diǎn kāishǐ, nǐ jǐ diǎn chūfā?", "Het examen morgen begint om acht uur. Hoe laat vertrek je?"],
    ["B", "七点吧。", "Qī diǎn ba.", "Om zeven uur, denk ik."],
    ["A", "早上路上车很多，你最好六点半出发，免得迟到。", "Zǎoshang lùshang chē hěn duō, nǐ zuìhǎo liù diǎn bàn chūfā, miǎnde chídào.", "'s Ochtends is het druk op de weg. Vertrek beter om half zeven, zodat je niet te laat komt."],
    ["B", "好。我今天晚上就把东西准备好，以免明天早上太着急。", "Hǎo. Wǒ jīntiān wǎnshang jiù bǎ dōngxi zhǔnbèi hǎo, yǐmiǎn míngtiān zǎoshang tài zháojí.", "Goed. Ik leg vanavond alles al klaar, zodat ik morgenochtend geen haast heb."],
    ["A", "对，也别忘了带身份证。", "Duì, yě bié wàngle dài shēnfènzhèng.", "Ja, en vergeet je identiteitskaart niet."]
  ],
  reading: {
    title: "出国旅行的几点建议",
    lines: [
      { cn: "出国旅行之前，有几件事需要提前准备。", py: "Chūguó lǚxíng zhīqián, yǒu jǐ jiàn shì xūyào tíqián zhǔnbèi.", nl: "Voor een reis naar het buitenland moet je een paar dingen van tevoren regelen." },
      { cn: "首先，请检查护照的有效期，以免到了机场才发现问题。", py: "Shǒuxiān, qǐng jiǎnchá hùzhào de yǒuxiàoqī, yǐmiǎn dàole jīchǎng cái fāxiàn wèntí.", nl: "Controleer eerst hoe lang je paspoort nog geldig is, zodat je niet pas op het vliegveld een probleem ontdekt." },
      { cn: "其次，最好把护照复印一份，和原件分开放，以免丢失以后无法证明身份。", py: "Qícì, zuìhǎo bǎ hùzhào fùyìn yí fèn, hé yuánjiàn fēnkāi fàng, yǐmiǎn diūshī yǐhòu wúfǎ zhèngmíng shēnfèn.", nl: "Maak daarna een kopie van je paspoort en bewaar die apart van het origineel. Zo kun je na verlies toch bewijzen wie je bent." },
      { cn: "另外，出发前应该了解当地的天气，以便准备合适的衣服。", py: "Lìngwài, chūfā qián yīnggāi liǎojiě dāngdì de tiānqì, yǐbiàn zhǔnbèi héshì de yīfu.", nl: "Zoek voor vertrek ook het weer ter plaatse op, zodat je de juiste kleren kunt inpakken." },
      { cn: "在国外使用银行卡之前，最好先通知银行，免得卡被停用。", py: "Zài guówài shǐyòng yínhángkǎ zhīqián, zuìhǎo xiān tōngzhī yínháng, miǎnde kǎ bèi tíngyòng.", nl: "Laat het je bank weten voordat je je pas in het buitenland gebruikt, zodat je pas niet geblokkeerd wordt." },
      { cn: "贵重物品要随身带着，不要放在行李箱里，以免被偷。", py: "Guìzhòng wùpǐn yào suíshēn dàizhe, búyào fàng zài xínglixiāng li, yǐmiǎn bèi tōu.", nl: "Houd waardevolle spullen bij je en stop ze niet in je koffer, zodat ze niet gestolen worden." },
      { cn: "最后，请把酒店的地址存在手机里，以便迷路时问路。", py: "Zuìhòu, qǐng bǎ jiǔdiàn de dìzhǐ cún zài shǒujī li, yǐbiàn mílù shí wènlù.", nl: "Sla tot slot het adres van je hotel op in je telefoon, zodat je de weg kunt vragen als je verdwaalt." },
      { cn: "做好这些准备，旅行就会顺利很多。", py: "Zuòhǎo zhèxiē zhǔnbèi, lǚxíng jiù huì shùnlì hěn duō.", nl: "Met deze voorbereiding verloopt je reis veel soepeler." }
    ],
    questions: [
      { type: "mc", q: "Waarom moet je een kopie van je paspoort maken?",
        options: ["Zodat je na verlies toch kunt bewijzen wie je bent.", "Zodat je paspoort langer geldig blijft.", "Zodat je bankpas niet geblokkeerd wordt.", "Zodat je de weg kunt vragen."], answer: 0,
        why: ["Goed: 以免丢失以后无法证明身份。", "De geldigheid controleer je, maar een kopie verandert die niet.", "Daarvoor laat je het de bank weten.", "Daarvoor sla je het hoteladres op."] },
      { type: "mc", q: "Wat moet je met waardevolle spullen doen?",
        options: ["Ze bij je houden en niet in je koffer stoppen.", "Ze in je koffer stoppen.", "Ze thuis laten.", "Ze aan de bank laten zien."], answer: 0,
        why: ["Goed: 要随身带着，不要放在行李箱里。", "De tekst zegt juist: 不要放在行李箱里.", "Thuis laten staat niet in de tekst.", "De bank hoort bij de bankpas, niet bij waardevolle spullen."] },
      { type: "mc", q: "Waarom staat er in 了解当地的天气，以便准备合适的衣服 wel 以便 en geen 以免?",
        options: ["De juiste kleren inpakken is een doel dat je wilt bereiken.", "De juiste kleren inpakken is een probleem dat je wilt voorkomen.", "以便 is spreektaal en 以免 niet.", "以便 staat altijd in het eerste deel."], answer: 0,
        why: ["Goed: 以便 + wat je wél wilt, 以免 + wat je níet wilt.", "Een probleem voorkomen is juist 以免.", "Beide zijn formeel; 免得 is de spreektaalvorm.", "以便 staat net als 以免 in het tweede deel."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Zet je telefoon uit, zodat je anderen niet stoort.\"",
      options: ["把手机关了，以免影响别人。", "把手机关了，以免不影响别人。", "以免影响别人，把手机关了。", "把手机关了，所以影响别人。"], answer: 0,
      why: ["Goed: eerst de handeling, dan 以免 + wat je wilt voorkomen.", "Geen 不 na 以免: de ontkenning zit al in 以免.", "以免 staat in het tweede deel, ná de handeling.", "所以 geeft een gevolg: nu stoor je de anderen juist."] },
    { type: "mc", q: "路上很滑，你开慢点儿，___出事。(De weg is glad. Rij langzaam, zodat er niets gebeurt.)",
      options: ["免得", "因为", "既然", "难道"], answer: 0,
      why: ["Goed: 免得 + wat je wilt voorkomen.", "因为 geeft een reden. Dan zeg je dat je langzaam rijdt omdat er iets gebeurt.", "既然 staat bij een bekend feit in het eerste deel.", "难道 maakt een verbaasde vraag met 吗."] },
    { type: "order", q: "Zet in de goede volgorde: \"Neem beter je jas mee, zodat je niet verkouden wordt.\"",
      tokens: [["最好", "zuìhǎo"], ["带上", "dàishang"], ["外套", "wàitào"], ["免得", "miǎnde"], ["感冒", "gǎnmào"]] },
    { type: "mc", q: "Wat betekent: 我写完以后再检查一遍，以免出错。",
      options: ["Na het schrijven controleer ik het nog een keer, zodat er geen fouten in staan.", "Na het schrijven controleer ik het nog een keer, omdat er fouten in staan.", "Na het schrijven controleer ik het niet, want er staan geen fouten in.", "Na het schrijven controleer ik het nog een keer, maar er staan toch fouten in."], answer: 0,
      why: ["Goed: 以免出错 = om fouten te voorkomen.", "以免 geeft geen reden. Het zegt wat je wilt voorkomen.", "再检查一遍 zegt juist dat je wel controleert.", "以免 geeft geen tegenstelling. Het zegt wat je wilt voorkomen."] },
    { type: "mc", q: "请提前十分钟到，___会议准时开始。(Kom tien minuten eerder, zodat de vergadering op tijd kan beginnen.)",
      options: ["以便", "以免", "因为", "虽然"], answer: 0,
      why: ["Goed: op tijd beginnen is een doel. Dat is 以便.", "以免 voorkomt iets. Dan voorkom je dat de vergadering op tijd begint.", "因为 geeft een reden, geen doel.", "虽然 geeft een tegenstelling."] },
    { type: "mc", q: "Welke uitspraak over 以免 en 免得 klopt?",
      options: ["以免 klinkt formeler; 免得 hoor je vaker in gesprekken.", "免得 klinkt formeler; 以免 hoor je vaker in gesprekken.", "以免 noemt een doel; 免得 noemt een probleem.", "Na 以免 moet altijd 不 staan."], answer: 0,
      why: ["Goed: zelfde betekenis, ander register.", "Het is andersom: 以免 is het formele woord.", "Beide noemen een probleem dat je wilt voorkomen. Een doel is 以便.", "以免 bevat de ontkenning al. Een extra 不 is fout."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["早点儿出发，以免不迟到。", "早点儿出发，以免迟到。", "早点儿出发，免得迟到。", "早点儿出发，以便准时到。"], answer: 0,
      why: ["Goed gezien: na 以免 staat geen 不.", "Deze klopt: 以免 + wat je niet wilt.", "Deze klopt: 免得 is de spreektaalvorm.", "Deze klopt: 以便 + wat je wél wilt."] },
    { type: "order", q: "Zet in de goede volgorde: \"Doe de deur goed op slot, zodat er niets gestolen wordt.\"",
      tokens: [["把门", "bǎ mén"], ["锁好", "suǒhǎo"], ["以免", "yǐmiǎn"], ["东西", "dōngxi"], ["被偷", "bèi tōu"]] },
    { type: "fill", q: "多带点儿钱，___不够用。(Neem wat meer geld mee, zodat je niet tekortkomt.)", answers: ["免得", "以免", "省得"],
      hint: "Welk woord betekent \"zodat niet\" en staat na de handeling?", why: "免得 (spreektaal) of 以免 + wat je wilt voorkomen: 不够用." },
    { type: "open", q: "Zeg tegen een vriend: \"Zet een wekker, zodat je je niet verslaapt.\"", model: ["你定个闹钟，免得睡过头。", "定好闹钟，免得明天起晚了。", "你最好定个闹钟，以免迟到。"],
      tip: "Check: eerst de handeling, dan 免得 of 以免, en daarna geen 不." },
    { type: "open", q: "Vertaal: \"Bel eerst even, zodat je niet voor niets gaat.\"", model: ["先打个电话，免得白跑一趟。", "你最好先打电话，以免白去一趟。"],
      tip: "Check: de handeling (打电话) staat vooraan, dan 免得/以免 + 白跑一趟, zonder 不." }
  ],
  review: [
    { type: "mc", q: "\"Praat wat zachter, zodat je de baby niet wakker maakt.\"",
      options: ["小声点儿，免得把孩子吵醒。", "小声点儿，免得不把孩子吵醒。", "免得把孩子吵醒，小声点儿。", "小声点儿，所以把孩子吵醒。"], answer: 0,
      why: ["Goed.", "Geen 不 na 免得: de ontkenning zit er al in.", "免得 staat in het tweede deel, ná de handeling.", "所以 geeft een gevolg: nu maak je de baby juist wakker."] },
    { type: "mc", q: "请把票放好，___丢了。(Berg je kaartje goed op, zodat je het niet verliest.)",
      options: ["以免", "以后", "因为", "虽然"], answer: 0,
      why: ["Goed: 以免 + wat je wilt voorkomen.", "以后 betekent \"later, daarna\".", "因为 geeft een reden: dan is het kaartje al kwijt.", "虽然 geeft een tegenstelling."] },
    { type: "mc", q: "睡觉前把闹钟定好，___明天起晚了。(Zet voor het slapen je wekker, zodat je morgen niet te laat opstaat.)",
      options: ["免得", "以便", "因为", "然后"], answer: 0,
      why: ["Goed: 免得 + wat je wilt voorkomen (起晚了).", "以便 hoort bij een doel. Te laat opstaan wil je niet.", "因为 geeft een reden; je bent nog niet te laat opgestaan.", "然后 betekent \"daarna\"; dan sta je juist te laat op."] }
  ]
})
