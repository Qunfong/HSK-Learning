({
  id: "01", slug: "shide", title: "De 是……的-zin", sub: "Wanneer, waar en hoe het gebeurde",
  canDo: "Je kunt nu vragen en vertellen wanneer, waar, hoe of met wie iets in het verleden gebeurde, met 是……的.",
  guess: {
    q: "Je bent gisteren aangekomen. De nadruk ligt op \"gisteren\". Welke zin klopt, denk je?",
    options: ["我是昨天到的。", "我是昨天到了。", "我昨天是到的。", "我是到昨天的。"], answer: 0,
    why: ["Goed: 是 vóór het detail (昨天), 的 aan het eind.", "In een 是……的-zin gebruik je geen 了.", "是 staat direct vóór het detail dat je benadrukt, niet vóór het werkwoord.", "Het detail (昨天) staat vóór het werkwoord, niet erachter."]
  },
  problem: "Iemand weet al dat je naar China bent geweest. Hij wil nu weten wanneer, hoe of met wie. Het gebeurde dus al. Je benadrukt alleen het detail. In het Nederlands doe je dat met klemtoon: \"Ik ben met de TREIN gekomen.\" In het Chinees gebruik je 是 (shì) ... 的 (de).",
  pattern: [
    { l: "wie", v: "我", c: 1 }, { l: "是", v: "是", c: 2, key: true }, { l: "detail", v: "坐火车", c: 3 },
    { l: "werkwoord", v: "来", c: 4 }, { l: "的", v: "的", c: 5, key: true }
  ],
  patternCap: "Wie + 是 + wanneer / waar / hoe / met wie + werkwoord + 的. Het gebeurde al; jij benadrukt het detail.",
  rules: [
    "是 staat direct vóór het detail dat je benadrukt.",
    "的 staat aan het eind van de zin, of direct na het werkwoord en vóór het lijdend voorwerp: 我是在北京学的中文。",
    "In een bevestigende zin mag 是 weg: 我昨天来的。",
    "Ontkennen doe je met 不是: 我不是坐飞机来的。",
    "Een vraag maak je met 吗, of met een vraagwoord op de plaats van het detail: 你是怎么来的？"
  ],
  pitfall: "Gebruik geen 了 in een 是……的-zin. 我是昨天到了 is fout. Zeg 我是昨天到的。",
  examples: [
    { cn: "你是什么时候来的？", py: "Nǐ shì shénme shíhou lái de?", nl: "Wanneer ben je gekomen?" },
    { cn: "我是坐火车来的。", py: "Wǒ shì zuò huǒchē lái de.", nl: "Ik ben met de trein gekomen." },
    { cn: "这本书是在北京买的。", py: "Zhè běn shū shì zài Běijīng mǎi de.", nl: "Dit boek is in Beijing gekocht." },
    { cn: "我不是一个人去的，是跟朋友一起去的。", py: "Wǒ bú shì yí ge rén qù de, shì gēn péngyou yìqǐ qù de.", nl: "Ik ben niet alleen gegaan, ik ben met een vriend gegaan." }
  ],
  nuance: [
    { h: "是……的 of 了?",
      p: "Met 了 vertel je nieuws: iets is gebeurd. Met 是……的 is dat al bekend. Je benadrukt dan alleen wanneer, waar, hoe of met wie. Vertel je voor het eerst dat je aangekomen bent? Gebruik 了. Vraagt iemand wanneer? Gebruik 是……的.",
      ex: [
        { cn: "我到上海了。", py: "Wǒ dào Shànghǎi le.", nl: "Ik ben in Shanghai aangekomen. (nieuws)" },
        { cn: "我是昨天到上海的。", py: "Wǒ shì zuótiān dào Shànghǎi de.", nl: "Ik ben gisteren in Shanghai aangekomen. (de nadruk ligt op gisteren)" }
      ] },
    { h: "Alleen voor wat al gebeurd is",
      p: "Deze 是……的-zin gaat over het verleden. Voor plannen gebruik je hem niet. Wil je zeggen hoe je morgen gaat? Zeg dan gewoon 我明天坐火车去。 Met 是……的 klinkt het alsof de reis al voorbij is.",
      ex: [
        { cn: "我明天坐飞机去北京。", py: "Wǒ míngtiān zuò fēijī qù Běijīng.", nl: "Ik vlieg morgen naar Beijing." },
        { cn: "我是坐飞机去北京的。", py: "Wǒ shì zuò fēijī qù Běijīng de.", nl: "Ik ben met het vliegtuig naar Beijing gegaan." }
      ] },
    { h: "Waar staat 的 bij een lijdend voorwerp?",
      p: "Heeft het werkwoord een lijdend voorwerp? Dan kan 的 aan het eind staan, of tussen werkwoord en voorwerp. In de spreektaal hoor je vaak de tweede vorm. Beide zijn goed. Bij een voornaamwoord zoals 他 of 你 zet je 的 wel aan het eind.",
      ex: [
        { cn: "我是在大学学中文的。", py: "Wǒ shì zài dàxué xué Zhōngwén de.", nl: "Ik heb Chinees aan de universiteit geleerd." },
        { cn: "我是在大学学的中文。", py: "Wǒ shì zài dàxué xué de Zhōngwén.", nl: "Ik heb Chinees aan de universiteit geleerd." }
      ] }
  ],
  mistakes: [
    { wrong: "我是去年毕业了。", right: "我是去年毕业的。", why: "是 hoort bij 的, niet bij 了." },
    { wrong: "我没是坐飞机来的。", right: "我不是坐飞机来的。", why: "是 ontken je altijd met 不, ook als het om het verleden gaat." },
    { wrong: "我是明天坐火车去的。", right: "我明天坐火车去。", why: "是……的 gaat over iets wat al gebeurd is. Voor een plan gebruik je een gewone zin." },
    { wrong: "我坐火车是来的。", right: "我是坐火车来的。", why: "是 staat vóór het detail (坐火车), niet vóór het werkwoord." }
  ],
  vocab: [
    ["是……的", "shì……de", "(benadrukt wanneer, waar, hoe)"], ["火车", "huǒchē", "trein"], ["飞机", "fēijī", "vliegtuig"],
    ["风景", "fēngjǐng", "landschap, uitzicht"], ["毕业", "bìyè", "afstuderen"], ["认识", "rènshi", "(leren) kennen"],
    ["网上", "wǎng shang", "online"], ["地铁", "dìtiě", "metro"], ["留学", "liúxué", "in het buitenland studeren"], ["公司", "gōngsī", "bedrijf"]
  ],
  dialogue: [
    ["A", "你是什么时候到上海的？", "Nǐ shì shénme shíhou dào Shànghǎi de?", "Wanneer ben je in Shanghai aangekomen?"],
    ["B", "我是上个星期五到的。", "Wǒ shì shàng ge xīngqīwǔ dào de.", "Vorige week vrijdag."],
    ["A", "你是坐飞机来的吗？", "Nǐ shì zuò fēijī lái de ma?", "Ben je met het vliegtuig gekomen?"],
    ["B", "不是，我是坐火车来的。我想看看路上的风景。", "Bú shì, wǒ shì zuò huǒchē lái de. Wǒ xiǎng kànkan lù shang de fēngjǐng.", "Nee, met de trein. Ik wilde onderweg het landschap zien."],
    ["A", "你是一个人来的吗？", "Nǐ shì yí ge rén lái de ma?", "Ben je alleen gekomen?"],
    ["B", "不是，我是跟我女朋友一起来的。", "Bú shì, wǒ shì gēn wǒ nǚpéngyou yìqǐ lái de.", "Nee, ik ben samen met mijn vriendin gekomen."]
  ],
  reading: {
    title: "我和我的同事",
    lines: [
      { cn: "我的同事马克是荷兰人，他在我们公司工作三年了。", py: "Wǒ de tóngshì Mǎkè shì Hélánrén, tā zài wǒmen gōngsī gōngzuò sān nián le.", nl: "Mijn collega Mark is Nederlander. Hij werkt al drie jaar bij ons bedrijf." },
      { cn: "他的中文说得很好，很多人问他是在哪儿学的。", py: "Tā de Zhōngwén shuō de hěn hǎo, hěn duō rén wèn tā shì zài nǎr xué de.", nl: "Hij spreekt heel goed Chinees. Veel mensen vragen waar hij het geleerd heeft." },
      { cn: "他说，他是在北京留学的时候学的。", py: "Tā shuō, tā shì zài Běijīng liúxué de shíhou xué de.", nl: "Hij zegt dat hij het geleerd heeft toen hij in Beijing studeerde." },
      { cn: "他是二零一八年去北京的，在那儿住了两年。", py: "Tā shì èr líng yī bā nián qù Běijīng de, zài nàr zhùle liǎng nián.", nl: "Hij ging in 2018 naar Beijing en woonde er twee jaar." },
      { cn: "我问他：\"你的太太也是在北京认识的吗？\"", py: "Wǒ wèn tā: \"Nǐ de tàitai yě shì zài Běijīng rènshi de ma?\"", nl: "Ik vroeg hem: \"Heb je je vrouw ook in Beijing leren kennen?\"" },
      { cn: "他笑着说：\"不是，我们是在网上认识的。\"", py: "Tā xiàozhe shuō: \"Bú shì, wǒmen shì zài wǎng shang rènshi de.\"", nl: "Hij zei lachend: \"Nee, we hebben elkaar online leren kennen.\"" },
      { cn: "今天早上，他是骑自行车来公司的。", py: "Jīntiān zǎoshang, tā shì qí zìxíngchē lái gōngsī de.", nl: "Vanochtend kwam hij op de fiets naar het werk." },
      { cn: "他说，这是荷兰人的习惯。", py: "Tā shuō, zhè shì Hélánrén de xíguàn.", nl: "Hij zegt dat dat een Nederlandse gewoonte is." }
    ],
    questions: [
      { type: "mc", q: "Waar heeft Mark Chinees geleerd?",
        options: ["In Beijing, toen hij daar studeerde.", "Online, met een app.", "Bij het bedrijf, van zijn collega's.", "In Nederland, op de universiteit."], answer: 0,
        why: ["Goed: 他是在北京留学的时候学的。", "Online heeft hij zijn vrouw leren kennen, niet Chinees geleerd.", "Het bedrijf staat in de tekst, maar niet als plek waar hij Chinees leerde.", "Over een Nederlandse universiteit staat niets in de tekst."] },
      { type: "mc", q: "Hoe kwam Mark vanochtend naar het werk?",
        options: ["Op de fiets.", "Met de metro.", "Met de trein.", "Lopend."], answer: 0,
        why: ["Goed: 他是骑自行车来公司的。", "De metro staat niet in de tekst.", "De trein staat niet in de tekst.", "Er staat 骑自行车, dus niet lopend."] },
      { type: "mc", q: "我们是在网上认识的。Wat benadrukt Marks antwoord?",
        options: ["Waar ze elkaar hebben leren kennen.", "Dat ze elkaar nog niet kennen.", "Wanneer ze elkaar hebben leren kennen.", "Dat ze elkaar binnenkort gaan ontmoeten."], answer: 0,
        why: ["Goed: 是 staat vóór 在网上, de plaats krijgt de nadruk.", "Er is geen ontkenning bij 认识; 不是 ontkent alleen Beijing.", "在网上 is een plaats, geen tijd.", "是……的 gaat over iets wat al gebeurd is."] }
    ]
  },
  questions: [
    { type: "mc", q: "\"Ik ben niet met de bus gekomen.\" Welke zin klopt?",
      options: ["我不是坐公共汽车来的。", "我是不坐公共汽车来的。", "我没是坐公共汽车来的。", "我不是坐公共汽车来了。"], answer: 0,
      why: ["Goed: 不 staat vóór 是.", "Je ontkent 是, niet het detail: 不 hoort vóór 是.", "是 ontken je met 不, nooit met 没.", "In een 是……的-zin gebruik je 的, geen 了."] },
    { type: "order", q: "Zet in de goede volgorde: \"Ik heb hem vorig jaar leren kennen.\"",
      tokens: [["我", "wǒ"], ["是", "shì"], ["去年", "qùnián"], ["认识他", "rènshi tā"], ["的", "de"]] },
    { type: "mc", q: "Je collega is op vakantie geweest. Je vraagt met wie hij ging. Wat zeg je?",
      options: ["你是跟谁一起去的？", "你跟谁一起去？", "你是跟谁一起去了？", "你跟谁是一起去的？"], answer: 0,
      why: ["Goed: het gebeurde al, en je vraagt naar een detail.", "Zonder 是……的 klinkt dit als een plan: met wie ga je?", "In een 是……的-zin gebruik je geen 了.", "是 staat vóór het detail (跟谁), niet erachter."] },
    { type: "mc", q: "\"Waar heb je deze jas gekocht?\" 这件衣服你是在哪儿买___？",
      options: ["的", "了", "过", "着"], answer: 0,
      why: ["Goed: 是 ... 的 hoort bij elkaar.", "Met 是 vóór het detail sluit je af met 的, niet met 了.", "过 gaat over ervaring, niet over een detail van één keer.", "着 betekent \"bezig / in een toestand\"."] },
    { type: "mc", q: "Je vriend weet nog niet dat je terug bent. Je stuurt een bericht: \"Ik ben terug!\" Welke zin past?",
      options: ["我回来了！", "我是回来的！", "我是回来了！", "我回来的了！"], answer: 0,
      why: ["Goed: dit is nieuws, dus 了.", "是……的 gebruik je pas als het al bekend is en je een detail benadrukt.", "是 en 了 horen niet samen in deze zin.", "的 en 了 stapel je hier niet."] },
    { type: "mc", q: "Welke zin is FOUT?",
      options: ["我是下个月去中国的。", "我是上个月去中国的。", "我是跟同事去中国的。", "我是坐飞机去中国的。"], answer: 0,
      why: ["Goed gezien: 下个月 is toekomst. Zeg: 我下个月去中国。", "Dit klopt: vorige maand is verleden, 是 benadrukt de tijd.", "Dit klopt: 是 benadrukt met wie.", "Dit klopt: 是 benadrukt hoe."] },
    { type: "fill", q: "你是怎么来___？(Hoe ben je gekomen?)", answers: ["的"],
      hint: "Welk woord hoort bij 是 aan het eind?", why: "是 + 怎么 + 来 + 的: je vraagt naar de manier van iets wat al gebeurd is." },
    { type: "order", q: "Zet in de goede volgorde: \"Dit cadeau heb ik online gekocht.\"",
      tokens: [["这个礼物", "zhège lǐwù"], ["是", "shì"], ["在网上", "zài wǎng shang"], ["买", "mǎi"], ["的", "de"]] },
    { type: "mc", q: "\"Ik heb Chinees in Beijing geleerd.\" Welke zin is in de spreektaal heel gewoon?",
      options: ["我是在北京学的中文。", "我是在北京学中文了。", "我在北京是学的中文。", "我是学的中文在北京。"], answer: 0,
      why: ["Goed: 的 mag tussen werkwoord en voorwerp staan.", "Geen 了 in een 是……的-zin.", "是 staat vóór het detail (在北京).", "De plaats (在北京) staat vóór het werkwoord."] },
    { type: "open", q: "Vertel hoe je vandaag naar je werk of school bent gegaan.",
      model: ["我是骑自行车去公司的。", "我是坐地铁来的。", "我是走路去学校的。"],
      tip: "Check: staat 是 vóór hoe je ging, staat 的 aan het eind, en is er geen 了?" },
    { type: "open", q: "Vertaal: \"Wanneer is je broer afgestudeerd?\"",
      model: ["你哥哥是什么时候毕业的？", "你弟弟是哪年毕业的？"],
      tip: "Check: 是 vóór 什么时候 of 哪年, 的 aan het eind, en geen 了." }
  ],
  review: [
    { type: "mc", q: "我是在网上认识她的。Wat benadruk je hier?",
      options: ["Waar ik haar heb leren kennen.", "Dat ik haar ga leren kennen.", "Dat ik haar nog niet ken.", "Wanneer ik haar heb leren kennen."], answer: 0,
      why: ["Goed: 是 staat vóór 在网上, dus de plaats (online) krijgt de nadruk.", "是……的 gaat over iets wat al gebeurd is, niet over de toekomst.", "Er staat geen ontkenning in de zin.", "在网上 is een plaats (online), geen tijd."] },
    { type: "mc", q: "\"In welk jaar is zij afgestudeerd?\"",
      options: ["她是哪年毕业的？", "她是哪年毕业了？", "她哪年是毕业的？", "她是毕业哪年的？"], answer: 0,
      why: ["Goed.", "Geen 了 in een 是……的-zin.", "是 staat vóór het detail (哪年), niet vóór het werkwoord.", "Het detail (哪年) komt vóór het werkwoord."] },
    { type: "mc", q: "\"Deze foto is niet in China gemaakt.\"",
      options: ["这张照片不是在中国拍的。", "这张照片没是在中国拍的。", "这张照片是不在中国拍的。", "这张照片不是在中国拍了。"], answer: 0,
      why: ["Goed: 不是 + plaats + werkwoord + 的.", "是 ontken je met 不, niet met 没.", "不 staat vóór 是, niet erna.", "Sluit af met 的, niet met 了."] }
  ]
})
