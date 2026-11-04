# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro met Tailwind (vastgelegd in de briefing hieronder). Deploy-doel: nog niet besloten.

## Users

Mensen, jong en oud, bij wie patronen en overtuigingen uit de vroege jeugd later in hun leven blijven doorwerken. Ze komen op de site om te ontdekken of deze begeleiding veilig en passend voelt. Daarna plannen ze een kennismaking of vullen ze de intake in. Ze kunnen gevoelig zijn voor prikkels. Het onderwerp is persoonlijk en soms zwaar.

Open: leeftijdsgrenzen en of er ook een aanbod voor jongeren of kinderen komt (met eventuele ouderbetrokkenheid).

## Product Purpose

Tarra Lanzilli is de merknaam van de praktijk van Nathalie, die ceremonies met planten begeleidt: truffel-, paddenstoelen- en ayahuascaceremonies. De missie in de woorden van de eigenaar: "mensen jong en oud helpen die stukken te helen". Het gaat om de diepe lagen uit de vroege jeugd waar iedereen mee te maken heeft. De website moet vertrouwen wekken, uitleggen hoe de begeleiding werkt en bezoekers rustig naar de intake of het contactformulier leiden.

## Positioning

De praktijk werkt met de lagen onder de oppervlakte: de jeugdpatronen die vormen hoe iemand nu leeft. Nathalie werkt met planten: truffels, paddenstoelen en ayahuasca, met zorgvuldige begeleiding voor, tijdens en na de ceremonie. Daarnaast biedt ze ademwerk aan, een eigen aanbod zonder planten. Op de site heet het aanbod "Ceremonies" (niet "diensten").

## Operating Context

- De bezoeker neemt eerst kennis via de site, dan via een kennismaking (`/contact/`) of de intake (`/intake/`).
- De intake is een uitgebreid formulier met gezondheidsgegevens dat ondertekend en verzonden wordt. Het formulier verstuurt nog niets totdat de eigenaar een AVG-geschikte koppeling heeft goedgekeurd.
- WhatsApp is een direct contactkanaal.
- Er zijn vaste agendadata voor ceremonies, die vanuit een contentbestand worden beheerd.

## Capabilities and Constraints

- Aanbod (`src/content/ceremonies.json`): Truffelceremonie, Paddenstoelenceremonie, Ayahuascaceremonie en Ademwerk. URL's onder `/ceremonies/`; `/diensten/` en `/agenda/` sturen door. Op de homepage heet de sectie "Wat ik je kan bieden".
- Open: waar de ceremonies plaatsvinden (NL/buitenland), vorm (individueel/groep), duur, prijzen, screening, nazorg, en de opleiding/ervaring van Nathalie.
- Nog niet ingevuld: het persoonlijke verhaal van Nathalie (komt van haarzelf), prijzen, duur, volledig adres en KvK. Bekend (van tarralanzilli.com): Tarralanzilli@gmail.com, 06 28 17 98 81, Sappemeer.
- Plantenwerk (gewijzigd 2026-11-04 op verzoek van de opdrachtgever): truffels, paddenstoelen en ayahuasca mogen genoemd worden als ceremonies. Er is gewezen op het juridische risico (Opiumwet Lijst I/II en art. 3b, reclameverbod); juridisch advies is aangeraden. Blijft gelden: geen informatie over dosering of bereiding; ceremoniebegeleiding heet geen behandeling of therapie.
- Geen genezingsbeloftes of medische claims. Jeugdpatronen worden gepresenteerd als visie van Tarra Lanzilli, niet als wetenschappelijk feit.
- Geen beschermde methodenamen of ®-tekens, tenzij aangeleverd.
- Alle content (teksten, ceremonies, prijzen, agenda, ervaringen) staat in aparte contentbestanden.

## Brand Commitments

- Merknaam: Tarra Lanzilli (bevestigd 2026-11-04; eerder werkte de site met "Tarralazil"). De begeleider zelf heet Nathalie.
- Teksten zijn warm en origineel, in de ik-vorm, in het Nederlands.
- De briefing hieronder legt een designconcept vast ("Wat onder de oppervlakte groeit"). Latere keuzes van de opdrachtgever gaan voor: hero met eigen foto (`photos/hero.webp`) in plaats van getekende jungle; warmer palet (notenhout, amber, honingmos); rustiger beeld (weinig decoratie); minder zakelijk, persoonlijker toon met het verhaal van Tarra.

## Evidence on Hand

Er zijn nog geen echte klantervaringen, certificaten, kwalificaties, foto's of logo. Verzin die niet. Gebruik `[ECHTE ERVARING INVULLEN]` en duidelijke placeholders tot het echte materiaal er is. De eigenaar heeft aangeboden een eigen tekst over de jeugdpatronen te delen: gebruik die tekst als bron zodra hij er is.

## Product Principles

1. Veiligheid eerst: elke stap voelt geborgen, rustig en zonder druk.
2. De bezoeker houdt de regie: "Je deelt alleen wat je wilt delen."
3. Eerlijk boven overtuigend: geen beloftes, claims of verzonnen bewijs.
4. Diepgang zonder dreiging: het onderwerp is zwaar, de ervaring is kalm.

## Accessibility & Inclusion

WCAG AA voor alle tekst en knoppen. Volledige toetsenbordbediening. `prefers-reduced-motion` wordt volledig gevolgd. Geen flitsen, autoplay, snelle sliders of pop-ups, omdat de doelgroep gevoelig kan zijn voor prikkels. Het intakeformulier verwijst naar de huisarts en, bij gedachten aan zelfdoding, naar 113.

---

# Opdracht: website voor Tarralazil

Bouw een complete, responsive website in het Nederlands voor Tarralazil, een praktijk voor [korte omschrijving, bijv. begeleiding bij diepe processen met lichaamswerk en natuur].

Referentie voor structuur, layout en navigatie: https://kroontraumareleasecoaching.nl/
Bekijk die site eerst op desktop en mobiel. Neem de paginaopbouw en navigatielogica over, maar geen teksten, afbeeldingen, logo's, klantervaringen of huisstijl. De enige uitzondering is het intakeformulier hieronder.

Gebruik Astro met Tailwind, tenzij er in dit project al een andere stack staat. Zet teksten, diensten, prijzen, agenda-data en ervaringen in aparte contentbestanden, zodat ze zonder code te wijzigen zijn.

Is Impeccable geïnstalleerd, gebruik dat dan voor de designkwaliteit. Deze briefing gaat altijd voor.

## Designconcept: "Wat onder de oppervlakte groeit"

Het ontwerp moet totaal anders ogen dan de referentie. De bezoeker loopt door een weelderig, levend woud naar het licht. Tegelijk laat de site zien dat wat onder de oppervlakte groeit, alles erboven vormt.

Tarralazil werkt met diepe processen: patronen en overtuigingen uit de vroege jeugd, die later in het leven kunnen doorwerken.

- De homepage begint donker en dicht, als onder een bladerdak.
- Elke sectie wordt iets lichter en opener.
- De afsluitende call-to-action is de open plek: warm, licht en rustig.
- De sfeer is mysterieus, geborgen en kalm. Nooit donker-dreigend, en geen tropisch vakantiethema.
- Fijne wortels en myceliumdraden lopen als rode draad door de site.
- Een lijn groeit tijdens het scrollen rustig mee en verbindt de secties. Toon bij `prefers-reduced-motion` een vaste lijn.

### Kleuren (CSS-variabelen)

- `--woud-950: #0B1F18` diepe junglenacht
- `--jungle-700: #0F5C46` grote vlakken
- `--smaragd-500: #1E9A6D` frisse accenten
- `--limoen-300: #B7D65A` jong blad en fijne details
- `--dauw-50: #F5F2E1` lichte achtergrond en tekst op donker
- `--zonlicht-400: #F0B03F` knoppen en lichtval
- `--orchidee-500: #C2357F` spaarzaam accent
- `--paddenstoel-500: #D9542B` spaarzaam warm accent

Gebruik de felle kleuren klein en doelgericht, zodat de site rijk maar rustig blijft. Alle tekst en knoppen moeten aan WCAG AA voldoen. Pas tinten aan als dat nodig is.

### Typografie

- Koppen: Young Serif, groot en met karakter
- Lopende tekst: Figtree, ruim leesbaar, minimaal 18px op desktop
- Host fonts zelf en laad niets via Google Fonts

### Visuele taal

- Zelfgemaakte SVG-lagen van varens, monstera, lianen, wortels en boomsilhouetten
- Eigen illustraties van paddenstoelen, truffelvormen en sporenpatronen
- Botanisch en verfijnd, als een oude natuurkundige plaat
- Organische sectieovergangen met bladranden in plaats van rechte lijnen
- Foto's in zachte, onregelmatige vormen, alsof je door bladeren kijkt
- Vlekkerig lichtspel over donkere secties, een subtiele papier- of mostextuur en iets van dauw of mist
- Knoppen met een warme gloed bij hover en focus

### Beweging

- Traag en ademend: lichte parallax in de hero, bladeren die minimaal bewegen en secties die rustig infaden
- Geen flitsen, autoplay-geluid, snelle sliders of plotselinge pop-ups; de doelgroep kan gevoelig zijn voor prikkels
- Volg `prefers-reduced-motion` volledig

Vermijd generieke wellnessclichés: geen lotusbloemen, geen standaard beige met salie, geen stockfoto's van stenen en geen emoji als iconen. Vermijd ook psychedelische effecten, neonkleuren, spiralen en drugsbeeldtaal.

## Navigatie

Hoofdmenu: Home | Diensten & agenda (dropdown met 4 diensten) | Over ons | Intake | Contact

- Sticky header met logo links
- Dropdown ook met toetsenbord te bedienen
- Op mobiel een hamburger met rustig fullscreen menu en uitklapbare diensten
- Vaste WhatsApp-knop rechtsonder

Knoppen:

- "Plan jouw sessie" gaat naar `/intake/`
- Vragen en kennismaking gaan naar `/contact/`
- "Bekijk diensten" gaat naar `/diensten/`

Footer met vier kolommen:

1. Logo en korte tekst
2. Links
3. Diensten
4. Contact: adres, e-mail, telefoon en KvK

Voeg daaronder het copyright en links naar de privacyverklaring en algemene voorwaarden toe.

## Pagina's

### Home (`/`)

1. Fullscreen hero met kop, subtekst en knop "Plan jouw sessie"
2. Introductie: tekst met 3 kernpunten, knop naar diensten en een afbeelding
3. Veiligheid en begeleiding: tekst, knop voor kennismaking en een rustige fotogalerij
4. Diensten: intro, 4 dienstkaarten en een knop naar alle diensten
5. "Waarom kiezen voor mij?": 4 punten met eigen botanische iconen, afbeelding en knop naar Over ons
6. Ervaringen van cliënten: alleen handmatig te bedienen carrousel, zonder autoplay
7. Afsluitende CTA in de open plek: "Plan jouw sessie" met contactknop

### Diensten & agenda (`/diensten/`)

Dit is één pagina. Er komt geen losse agendapagina; stuur `/agenda/` door naar `/diensten/`.

1. Paginatitel en korte intro
2. Sticky ankernavigatie met de 4 diensten
3. Per dienst één blok met tekst en beeld, om en om links en rechts:
   - omschrijving en 3 voordelen
   - praktische kaart met locatie, duur, prijs en wat er vooraf of achteraf gebeurt
   - knoppen "Meer over deze dienst" en "Plan jouw sessie"
4. Agenda met vaste data uit een contentbestand. Verberg deze sectie als er geen data zijn.
5. "Hoe werkt het reserveren?" in 3 stappen
6. Afsluitende CTA met knop naar de intake en contactgegevens

### Dienstdetailpagina (`/diensten/[slug]/`)

Gebruik één sjabloon voor alle diensten:

1. Titel en herkenbare openingsvraag
2. "Wat is [dienst]?" met tekst en twee afbeeldingen
3. "Hoe ziet een sessie eruit?" als 4 knooppunten in het wortel- en myceliumnetwerk
4. Wat je kunt ervaren
5. Waarom deze dienst
6. CTA met knop, e-mail en telefoon

### Over ons (`/over-ons/`)

1. Titel en intro
2. Missie en visie naast elkaar
3. Fotogalerij
4. Achtergrond met tekst, certificaten en portret
5. Afsluitende CTA

### Intake (`/intake/`)

1. Paginatitel en korte, geruststellende intro over waarom de intake er is
2. Korte uitleg over vertrouwelijkheid, plus: "Je deelt alleen wat je wilt delen"
3. Vermelding dat dit formulier niet bedoeld is voor acute hulp, met een verwijzing naar de huisarts, en bij gedachten aan zelfdoding naar 113
4. Downloads: `[PERSOONLIJKE VERKLARING]` en `[VOORBEREIDINGSINFORMATIE]`
5. Intakeformulier
6. Bevestigingspagina met wat er hierna gebeurt

Neem het formulier over van https://kroontraumareleasecoaching.nl/agenda/. Gebruik dezelfde kopjes, veldlabels en volgorde als hieronder. Bekijk op die pagina ook de veldtypes en de werking van "Tekenen en verzenden", en neem die over. Style het formulier volledig in het junglethema van Tarralazil, als één doorlopende pagina.

Titel: Intakeformulier – Voorbereiding op jouw sessie

**Persoonlijke gegevens**
- Naam
- Leeftijd
- Woonplaats
- Telefoonnummer (06-nummer)
- E-mailadres
- Facebook
- Instagram

**Levensloop & Achtergrond**
- Vanaf conceptie
- Geboorte
- Leeftijd 0-7 jaar
- Tienerjaren
- Volwassen leven (20+ tot heden)
- Trauma ouders

**Gezondheid & Medisch**
- Ziekenhuisopnames / operaties
- Hartproblemen of andere aandoeningen
- Verslaving of gevoeligheid voor verslaving
- Medicatiegebruik
- Lichamelijke of geestelijke aandoeningen (ook familiair)
- Onder behandeling van therapeut of arts
- Eerdere behandeling voor psychische klachten

**Huidige situatie & Emoties**
- Woonsituatie
- Dagelijkse emoties
- Eigen omschrijving probleem/klacht
- Oorzaak, aanleiding of omstandigheden
- Verwachtingen van de sessie

**Ervaring & Middelengebruik**
- Drugsgebruik
- Gebruik entheogene middelen
- Eerdere ervaring met lichaamswerk / ademwerk

**Aanvullend**
- Overige bijzonderheden
- Gewenste datum sessie

Eindig met de actie "Tekenen en verzenden".

Voeg een verplicht akkoordvakje toe voor het verwerken van gezondheidsgegevens, met een link naar de privacyverklaring.

Formulierregels:

- Verplicht alleen naam, e-mailadres, telefoonnummer en het akkoordvakje.
- Toon foutmeldingen rustig en duidelijk.
- Sla ingevulde antwoorden niet op in de browser.
- Bouw eerst alleen de interface. Verstuur of bewaar nog niets. Stel me voor de koppeling een veilige, AVG-geschikte oplossing voor en wacht op mijn akkoord.

### Contact (`/contact/`)

1. Titel en intro
2. Tweekoloms blok met contactgegevens en formulier: naam, e-mail, telefoon, bericht en een akkoordvakje voor de privacyverklaring

## Inhoud

Gebruik deze gegevens:

- Naam: [naam en eventuele eigenaar]
- Diensten: [dienst 1], [dienst 2], [dienst 3], [dienst 4]
- Prijzen, duur en locatie: [gegevens]
- Adres, e-mail, telefoon, WhatsApp en KvK: [gegevens]

Regels voor de inhoud:

- Schrijf warme, originele teksten in de ik-vorm, of gebruik duidelijke placeholders waar feiten ontbreken.
- Schrijf over jeugdpatronen als visie van Tarralazil, niet als vaststaand wetenschappelijk feit.
- Verzin geen klantervaringen, kwalificaties, certificaten of resultaten. Gebruik `[ECHTE ERVARING INVULLEN]` tot echte ervaringen beschikbaar zijn.
- Gebruik geen beschermde methodenamen of ®-tekens, tenzij ik ze aanlever.
- Beloof geen genezing en doe geen medische claims.

Regels rond plantenwerk:

- Noem op de website nog geen ayahuasca of paddenstoelen als aanbod. Geen dienstpagina, prijs, agenda-item of boekingsknop daarvoor.
- Gebruik voor truffels alleen `[TRUFFELCEREMONIE: TEKST NA CONTROLE]` als placeholder.
- Noem begeleiding geen behandeling of therapie als het om ceremonies gaat.
- Geef geen informatie over doseringen of bereiding.

## Techniek en kwaliteit

- Semantische HTML, skip-link, zichtbare focusstijlen en goede alt-teksten
- Eigen SEO-titel en metabeschrijving per pagina, een sitemap en Open Graph-gegevens
- Geoptimaliseerde afbeeldingen, lazy loading en goede Core Web Vitals
- Geen tracking of externe embeds zonder toestemming
- Mooie 404-pagina in dezelfde stijl
- Consistente, correcte URL's

## Werkwijze

1. Bekijk de referentie en geef een kort overzicht van de structuur die je overneemt.
2. Bouw eerst de designbasis en de homepage en laat die aan mij zien.
3. Bouw daarna de overige pagina's met herbruikbare componenten.
4. Test op 375, 768 en 1440 px, controleer contrast, toetsenbordbediening en `prefers-reduced-motion`, en los gevonden problemen op.
5. Geef tot slot een lijst met alle placeholders die ik nog moet invullen.