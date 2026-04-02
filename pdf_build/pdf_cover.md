---
title: "Arrowhead navodila za uporabo"
subtitle: "- Prvi del -"
author: "Simon Pavlin"
lang: "sl"
date: "Verzija 1.1 – april 2026"
geometry: margin=2cm
header-includes:
  - \usepackage{fancyhdr}               # header/footer package
  - \usepackage{graphicx}               # za slike
  - \usepackage{float}
  - \usepackage[labelformat=empty]{caption}
  - \renewcommand{\contentsname}{Vsebina}
  - \renewcommand{\figurename}{Slika}
  - \pagestyle{fancy}                   # fancy page style
  - \fancyhf{}                           # počisti vse predefinirano
  - \fancyfoot[L]{© 2026 Simon, Brane...}     # besedilo v footerju levo
  - \fancyfoot[R]{\includegraphics[height=0.7cm]{pdf/logo_paradoks.jpg}} # logotip desno
  - \fancyfoot[C]{\thepage}             # številka strani center
  - \renewcommand{\headrulewidth}{0pt}  # brez linije nad headerjem
  - \renewcommand{\footrulewidth}{0.4pt} # optional linija nad footerjem
  - \AtBeginDocument{\thispagestyle{empty}} # prva stran brez footerja
---