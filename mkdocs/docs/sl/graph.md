# Zgodba o poševnem metu

Ko sem začel streljati Arrowhead, takrat imenovan še Hunter & Field,
sem se vedno spraševal, koliko odbiti ali dodati na merilni napravi, če tarča ni postavljena vodoravno,
se pravi če streljaš navzgor ali navzdol.
Med lokostrelci so se kresala mnenja, izmenjevale izkušnje...
Potem pa v osemdesetih letih dobim fotokopijo nekega grafa.

<figure class="zoomable-container">
<img src="../../img/graph-s.jpg" alt="Švedski graf" class="zoomable"/>
<figcaption>Švedski graf</figcaption>
</figure>

Naredili so ga Švedi. Na strelišče so pripeljali ogromen žerjav, potem pa streljali na različne razdalje pod različnimi koti. Poskušali znova in znova. Narisali so ga popolnoma empirično - s poskušanjem, brez fizikalne osnove. Ta graf sem uporabljal in moram priznati, je kar držal. Ampak po glavi se mi je motalo kar naprej, kako bi to točno izračunal. Ker mi matematika in fizika nista tuji, sem se lotil zadeve. Cilj mi je bil, kako nastaviti merilno napravo pri določeni razdalji in kotu, kot bi streljal na ravnem.

V roke vzamem svinčnik in papir in po nekaj dneh mi uspe razvozljati uganko, dobim formulo. Zanemaril sem zračni upor, ki bi se tako ali tako kompenziral, saj se dolžina parabole malenkost spremeni pod različnimi koti. Zanimivo je to, da edino kar vpliva na izračun, je začetna hitrost in pa seveda gravitacijski pospešek. Slednji je pri nas tako ali tako približno 9.81 m/s2. Izpeljava je bila kar trd oreh, ker se je v formuli pojavila kar kompleksna trigonometrična funkcija, pa ne bi sedaj o tem.

<figure class="zoomable-container">
<img src="../../img/izracun.jpg" alt="Izpeljana formula na papirju" class="zoomable"/>
<figcaption>Izpeljana formula na papirju</figcaption>
</figure>

Nato pa za računalnik, sprogramirati in narisati graf.
<!--V spustnem meniju so predstavljeni grafi v odvisnosti od začetne hitrosti (v0).-->
Kratka razlaga: različno obarvane pikice so kjer je treba dodati ali odvzeti meter, dva, tri ...

<figure class="zoomable-container">
<img src="../../img/35-s.jpg" alt="Izračunan graf pri začetni hitrosti puščice 35m/s" class="zoomable"/>
<figcaption>Izračunan graf pri začetni hitrosti puščice 35m/s</figcaption>
</figure>
Seveda je potrebno pri tem upoštevati, da se ustreli tako kot na ravnem. Se pravi zgornji del, ramenski obroč, roke v liniji, spust... Bistvo je da se prepogneš v bokih. Je težko, samo z nekaj treninga se da.

Ena misel: Ko so vprašali najboljšega plezalca vseh časov Wolfganga Güllicha, katera mišica je najpomembnejša pri plezanju. Je odgovoril: glava. To velja tudi v lokostrelstvu. 

<details>
  <summary>Izberi graf glede na začetno hitrost</summary>
  <div class="image-gallery">
    <figure>
      <a href="../../img/30-s.jpg" data-lightbox="gallery" data-title="Izračunan graf pri začetni hitrosti 30m/s">
        <img src="../../img/30-s.jpg" alt="30 m/s" class="thumbnail"/>
      </a>
      <figcaption>30 m/s</figcaption>
    </figure>
    <figure>
      <a href="../../img/35-s.jpg" data-lightbox="gallery" data-title="Izračunan graf pri začetni hitrosti 35m/s">
        <img src="../../img/35-s.jpg" alt="35 m/s" class="thumbnail"/>
      </a>
      <figcaption>35 m/s</figcaption>
    </figure>
    <figure>
      <a href="../../img/40-s.jpg" data-lightbox="gallery" data-title="Izračunan graf pri začetni hitrosti 40m/s">
        <img src="../../img/40-s.jpg" alt="40 m/s" class="thumbnail"/>
      </a>
      <figcaption>40 m/s</figcaption>
    </figure>
    <figure>
      <a href="../../img/45-s.jpg" data-lightbox="gallery" data-title="Izračunan graf pri začetni hitrosti 45m/s">
        <img src="../../img/45-s.jpg" alt="45 m/s" class="thumbnail"/>
      </a>
      <figcaption>45 m/s</figcaption>
    </figure>
    <figure>
      <a href="../../img/50-s.jpg" data-lightbox="gallery" data-title="Izračunan graf pri začetni hitrosti 50m/s">
        <img src="../../img/50-s.jpg" alt="50 m/s" class="thumbnail"/>
      </a>
      <figcaption>50 m/s</figcaption>
    </figure>
  </div>
</details>






