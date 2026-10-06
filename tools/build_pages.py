# Generates every HTML page of the site. Run from the repo root: python tools/build_pages.py
# Bump V after changing anything in assets/, so browsers fetch the new files.
import io, os

V = 5
BRAND, SEAL = "HSK Learning", "汉"
FOOTER = "Oefenmateriaal, geen officiële HSK-vragen of -scores. Je voortgang staat alleen in deze browser."
SITE_JS = ""  # e.g. '<script>window.SITE={...}</script>' to override app.js defaults
H1 = "Chinees leren voor de HSK, vanaf niveau 3"
LEAD = ("Korte grammaticalessen in het Nederlands, met Chinese voorbeelden, pinyin en uitspraak. Elke les: eerst gokken, "
        "dan het idee, dan oefenen. Wat je gehaald hebt, komt later terug om te herhalen.")
LEVELS = [  # (data key, label, folder, topics on the home card)
    ("hsk3", "HSK 3", "hsk3", "把, resultaat, 比, 过, 越来越, 被"),
    ("hsk4", "HSK 4", "hsk4", "是……的, 连……都, 不但……而且, 即使……也, 除了, 听得懂"),
    ("hsk5", "HSK 5", "hsk5", "无论, 既然, 宁可, 难道, 以免, 尽管"),
    ("hsk6", "HSK 6", "hsk6", "与其……不如, 非……不可, 之所以, 一旦, 固然, 不至于"),
    ("hsk79", "HSK 7–9", "hsk7-9", "鉴于, 以……为, 予以, 乃至, 唯有……才, 倘若"),
]


def page(prefix, title, body, scripts=True):
    tags = ""
    if scripts:
        tags = "".join('<script src="%sassets/data/%s.js?v=%d"></script>' % (prefix, k, V) for k, *_ in LEVELS)
        tags += SITE_JS + '<script src="%sassets/app.js?v=%d"></script>' % (prefix, V)
    return """<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<link rel="stylesheet" href="{p}assets/style.css?v={v}">
</head>
<body>
<header class="site"><div class="wrap">
  <a class="brand" href="{p}index.html"><span class="seal">{seal}</span> {brand}</a>
  <nav><a href="{p}index.html#niveaus">Niveaus</a><a href="{p}herhaling.html">Herhalen</a><a href="{p}documentatie.html">Documentatie</a></nav>
</div></header>
<main class="wrap">
{body}
<footer>{footer}</footer>
</main>
{tags}</body></html>
""".format(footer=FOOTER, seal=SEAL, brand=BRAND, title=title, p=prefix, v=V, body=body.strip(), tags=tags)


def write(path, text):
    os.makedirs(os.path.dirname(path) or ".", exist_ok=True)
    with io.open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(text)


cards = "\n".join(
    '  <a class="card" href="%s/"><div class="big">%s</div><p class="muted small zh">%s</p><span class="tag ok">6 lessen</span></a>' % (d, label, topics)
    for _, label, d, topics in LEVELS
)
write("index.html", page("", BRAND, """
<h1>%s</h1>
<p class="lead">%s</p>

<h2 id="niveaus">Kies je niveau</h2>
<div class="grid">
%s
</div>

<h2>Zo werkt een les</h2>
<div class="card">
<ol>
  <li><b>Gok eerst.</b> Eén vraag over het nieuwe patroon, vóór de uitleg. Telt niet mee.</li>
  <li><b>Het idee.</b> Welk probleem lost het patroon op, een plaatje van de zinsbouw, en de valkuil.</li>
  <li><b>Voorbeelden, woorden en een dialoog.</b> Met uitspraakhulp (uit te zetten) en uitspraak via je browser.</li>
  <li><b>Oefenen.</b> Meerkeuze, zinnen bouwen en een eigen zin. Fout? Je krijgt uitleg en probeert opnieuw.</li>
  <li><b>Herhalen.</b> Na 2 dagen komen nieuwe vragen terug. Goed: de pauze verdubbelt. Fout: morgen opnieuw.</li>
</ol>
</div>
<p>Alle patronen en woorden op één plek: <a href="documentatie.html">Documentatie</a>.</p>
""" % (H1, LEAD, cards), scripts=False))

write("herhaling.html", page("", "Herhalen · " + BRAND, '<div id="app" data-page="review"><p>Laden...</p></div>'))
write("documentatie.html", page("", "Documentatie · " + BRAND, '<div id="app" data-page="docs"><p>Laden...</p></div>'))

for key, label, d, _ in LEVELS:
    write(d + "/index.html", page("../", label + " · " + BRAND, """
<h1>%s</h1>
<p class="lead">Zes korte lessen, elk één grammaticapatroon met tien woorden. Doe er één per dag, en herhaal wat terugkomt.</p>
<div id="app" data-page="level" data-level="%s"><p>Laden...</p></div>
""" % (label, key)))
    write(d + "/les.html", page("../", "Les · " + label, """
<div id="app" data-page="lesson" data-level="%s"><p>Laden...</p><noscript>Deze les heeft JavaScript nodig.</noscript></div>
""" % key))
print("pages written, v=%d" % V)
