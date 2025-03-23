---
id: 231
title: 'Alternative Adobe Flash Player su GNU/Linux'
date: '2012-04-01T12:06:51+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=231'
permalink: /alternative-adobe-flash-player-su-gnulinux/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Alternative Adobe Flash Player su GNU/Linux, Articolo: http://www.nazionlinux.com/?p=231'
categories:
    - 'Arch Linux'
    - Debian
    - GNU/Linux
    - Mint
    - Ubuntu
tags:
    - 'Arch Linux'
    - Debian
    - GNU/Linux
    - Mint
    - Ubuntu
---

Come già annunciato da **Adobe** la versione 11.2 di **Flash Player** sarà l’ultima versione disponibile per **GNU/Linux** o meglio l’ultima versione del plugin per **Firefox**, **Midori**… ad esclusione di **Chrome** che, grazie ad un [accordo](http://blogs.adobe.com/flashplayer/2012/02/adobe-and-google-partnering-for-flash-player-on-linux.html "accordo") tra **Google** e Adobe, continuerà ad essere aggiornato ed i futuri rilasci saranno disponibili utilizzando le API attraverso Pepper plugin, mentre per tutti gli altri navigatori ci saranno solo aggiornamenti di sicurezza.

Esistono già delle ottime alternative per visualizzare i filmati flash, due delle migliori sono [GNU Gnash](http://www.gnu.org/software/gnash/ "GNU Gnash") un progetto [GNU](http://www.gnu.org "GNU") sviluppato dalla [Free Software Foundation](http://www.fsf.org/ "Free Software Foundation") e [Lightspark](http://lightspark.github.com/ "Lightspark") rilasciati con licenza [GPL v3](http://www.gnu.org/copyleft/gpl.html "GNU General Public License") e [LGPL v3](http://www.gnu.org/copyleft/lesser.html "GNU Lesser General Public License").

Adesso vediamo come installarli.

Sia GNU Gnash che Lightspark si trovano nei repository ufficiali di **Debian**/**Ubuntu**/**Mint** quindi basterà digitare da terminale il comando:

<div class="wp-terminal">`su`</div>inserire la password di amministratore ed eseguire il comando:

<div class="wp-terminal">`apt-get install gnash mozilla-plugin-gnash`</div>e confermare per installare **GNU Gnash**.

Per installare **Lightspark** la procedura è la stessa cambia solo il comando:

<div class="wp-terminal">`apt-get install lightspark browser-plugin-lightspark`</div>Per quanto riguarda **ArchLinux** per installare GNU Gnash sempre da un terminale di amministratore bisognerà digitare il comando:

<div class="wp-terminal">`pacman -S gnash-gtk`</div>mentre per installare **Lightspark**, che non si trova ancora nei repository ufficiali di ArchLinux la prcedura si fa un pò complicata perchè il pacchetto dovrà essere compilato.  
Prima di inziare la fase della compilazione del pacchetto postreste aver bisogno di diversi porgrammi come il compilatore **gcc** o i pacchetti **make** **automake** **pkg-config** **autoconf** che sono installabili sempre da terminale di amministratore col comando:

<div class="wp-terminal">`pacman -S make automake autoconf pkg-config`</div>questi solo solo alcuni, ogni pacchetto può richiedere l’installazione di altri come:

<div class="wp-terminal">`pacman -S cmake nasm xulrunner llvm glproto boost fontconfig`</div>Usciamo da terminale di amministratore (#) col comando:

<div class="wp-terminal">`exit`</div>Adesso dovreste essere in un terminale da **utente** riconoscibile dal **segno del dollaro ($)**.  
Creiamo per comodità una cartella con il comando:

<div class="wp-terminal">`mkdir lightspark && cd lightspark`</div>Poi bisognerà cercare sul sito [AUR](http://aur.archlinux.org/index.php?setlang=it "Arch User Repository") il pacchetto [Lightspark](https://aur.archlinux.org/packages.php?ID=56576 "Lightspark") oppure, sempre dallo stesso terminale eseguire:

<div class="wp-terminal">`wget -c https://aur.archlinux.org/packages/li/lightspark/lightspark.tar.gz`</div>il file appena scaricato lo scompattiamo con il comando:

<div class="wp-terminal">`tar -zxvf lightspark.tar.gz && cd lightspark`</div>sempre dallo stesso terminale digitiamo il comando:

<div class="wp-terminal">`mkepkg`</div>per avviare la fase della compilazione del pacchetto.  
**IMPORTANTE** il comando **makepkg** non va mai lanciato da terminale di amministratore.  
Prima che questa operazione abbia inizio dovtrete risolvere alcune dipendenze nel mio caso

> ==&gt; Creazione del pacchetto: lightspark 0.5.5-1 (dom 1 apr 2012, 17.10.08, CEST)  
> ==&gt; Controllo delle dipendenze durante l’avvio in corso…  
> ==&gt; Dipendenze mancanti:  
> -&gt; **glew**  
> -&gt; **libxml++**  
> ==&gt; Controllo delle dipendenze durante la compilazione in corso…  
> ==&gt; Dipendenze mancanti:  
> -&gt; **nasm**  
> -&gt; **llvm**  
> -&gt; **boost**  
> ==&gt; ERRORE: Impossibile risolvere tutte le dipendenze.

quindi rientrate come amministratore nel terminale col il comando:

<div class="wp-terminal">`su`</div>inserire di nuovo la password e installatevi le dipendeze mancati con il comando:

<div class="wp-terminal">`pacman -S glew libxml++ nasm llvm bost`</div>terminata l’installazione ritornate come utente:

<div class="wp-terminal">`exit`</div>e rieseguite il comando:

<div class="wp-terminal">`makepkg`</div>alla fine se tutto ha funzionato vi trovere un nuovo pacchetto con estenzione **.pkg.tar.xz**  
per finire ritornate amministratore col comando **su** e digitate il comando per installare il pacchetto appena creato nel mio caso:

<div class="wp-terminal">`pacman -U lightspark-0.5.5-i686.pkg.tar.xz`</div>per sapere le dipenenze del pacchetto editare il file **PKGBUILD** al suo interno troverete la stringa

> depends=(‘gtk2’ ‘ffmpeg’ ‘glew’ ‘curl’ ‘boost-libs’ ‘libxml++’ ‘desktop-file-utils’ ‘hicolor-icon-theme’)

prima di effettuare ogni operazione vi consiglio di visitare il sito [http://wiki.archlinux.org/index.php/Arch\_User\_Repository\_(taliano)](http://wiki.archlinux.org/index.php/Arch_User_Repository_(taliano) "Wiki Arch User Repository") per capire cosa sono i repository **AUR** e come funzionano.