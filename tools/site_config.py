# Site settings for tools/build_pages.py (HSK-Learning). Bump V after changing anything in assets/.
V = 9
BRAND, SEAL = "HSK Learning", "汉"
FOOTER = "Oefenmateriaal, geen officiële HSK-vragen of -scores. Je voortgang staat alleen in deze browser."
SITE_JS = ""  # app.js defaults are the Chinese site
SITE_HEAD = ('<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
             '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Noto+Serif+SC:wght@400;600&display=swap">')
H1 = "Chinees leren voor de HSK, vanaf niveau 3"
LEAD = ("Grammaticalessen in het Nederlands, met Chinese voorbeelden, pinyin en uitspraak. Elke les: eerst gokken, "
        "dan het idee en de nuance, dan lezen en oefenen. Wat je gehaald hebt, komt later terug om te herhalen.")
LEVEL_LEAD = "Vijftien lessen, elk één grammaticapatroon met tien woorden en een leestekst. Doe er één per dag, en herhaal wat terugkomt."
LEVELS = [  # (data key, label, folder, topics on the home card)
    ("hsk3", "HSK 3", "hsk3", "把, 被, 比, 过, 着, richting- en resultaatcomplement, 虽然, 因为, 才/就 ..."),
    ("hsk4", "HSK 4", "hsk4", "是……的, 连……都, 不但……而且, 即使, 只有……才, 不管, 一……就 ..."),
    ("hsk5", "HSK 5", "hsk5", "无论, 既然, 宁可, 难道, 否则, 甚至, 何况, 毕竟 ..."),
    ("hsk6", "HSK 6", "hsk6", "与其……不如, 非……不可, 之所以, 一旦, 未必, 难免, 何必, 反而 ..."),
    ("hsk79", "HSK 7–9", "hsk7-9", "鉴于, 以……为, 予以, 乃至, 加以, 务必, 进而, 不乏 ..."),
]
