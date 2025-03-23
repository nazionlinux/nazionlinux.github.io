---
id: 671
title: 'Cinnamon 2.0 e gli errori di gioventù'
date: '2013-10-10T17:58:57+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=671'
permalink: /cinnamon-2-0-e-gli-errori-di-gioventu/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
snap_isAutoPosted:
    - '1'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Cinnamon 2.0, Articolo: http://www.nazionlinux.com/?p=671'
snapEdIT:
    - '1'
snapTR:
    - 's:43:"a:1:{i:0;a:1:{s:11:"isPrePosted";s:1:"1";}}";'
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Mint
    - Slackware
    - Ubuntu
tags:
    - Cinnamon
---

[![cinnamon](https://i0.wp.com/farm4.staticflickr.com/3714/12124743314_b19414fff8_z.jpg?resize=640%2C240 "cinnamon")](http://www.flickr.com/photos/12418137@N07/12124743314/ "cinnamon")

**[Cinnamon](http://cinnamon.linuxmint.com/ "Cinnamon")** è un progetto nato dal team di **[Linux Mint](http://www.linuxmint.org "Lnux Mint")**.

Mentre la versione 1.8.8 di **[Cinnamon](http://cinnamon.linuxmint.com/ "Cinnamon")**, inclusa in **Linux Mint 15** nome in codice **Olivia**, dipendeva da **[Gnome](http://www.gnome.org "Gnome")** e quindi bisognava installare buona parte delle librerie di **[Gnome](http://www.gnome.org "Gnome")** a discapito dello spazio occupato su disco, con la nuova versione **Cinnamon 2.0** sarà completamente autonomo utilizzando i propri demoni e le proprie librerie.

Cinnamon 2.0 vedrà il suo debutto ufficiale con l’uscita di **Linux Mint 16** nome in codice **Petra** prevista per il prossimo novembre e porterà molte altre novità:

**Edge-Tiling** ossia la possibilità di spostare la finestra sul bordo dello schermo che automaticamente andrà ad occupare la metà dello schermo

**Edge-Snapping** che è simile alla funzionalità Edge-Tiling, ma con la differenza che le finestre massimizzate non coprono le finestre che abbiamo posizionato in un angolo. L’idea alla base di Edge-Snap è quella di avere una finestra principale aperta, mantenendo uno spazio occupato da una particolare finestra, senza lasciare che la finestra principale occupi tutto lo schermo. Se si dispone di più monitor la finestra si sposterà automaticamente sull’altro schermo.

Un nuovo programma per l’amministrazione degli utenti, nuovi effetti sonori, il nuove gestore della risoluzione dello schermo, il gestore dei files **Nemo** migliorato graficamente e molto più veloce all’avvio oltre una migliore integrazione con vari servizi come **Dropbox**, **Ubuntu One**… nuovi temi, applets, estensioni e desklets.

Per installarlo su **[Ubuntu](http://www.ubuntu.org "Ubuntu")** e **[Linux Mint](http://www.linuxmint.com "Linux Mint")** da terminale:

<div class="wp-terminal">`sudo add-apt-repository ppa:gwendal-lebihan-dev/cinnamon-stable`</div>per aggiungere il deposito dei pacchetti PPA (Personal Package Archive).  
Il comando successivo aggiorna i pacchetti

<div class="wp-terminal">`sudo apt-get update`</div>ed infine installiamo **[Cinnamon](http://cinnamon.linuxmint.com/ "Cinnamon")**

<div class="wp-terminal">`sudo apt-get install cinnamon`</div><del datetime="2013-10-11T12:38:00+00:00">Fra poche orà sarà disponibile anche nei depositi ufficiali di **[ArchLinux](http://www.archlinux.org "ArchLinux")**</del>

**Cinnamon 2.0.0-1** è nei depositi ufficiali di **[ArchLinux](http://www.archlinux.org "ArchLinux")** ed è possibile installarlo, prima dando il comando da un terminale di amministratore

<div class="wp-terminal">`pacman -Syu`</div>per aggionare il database dei pacchetti e poi con

<div class="wp-terminal">`pacman -S cinnamon`</div>per installarlo.  
Purtroppo una volta installato se proviamo a lanciare il comando

<div class="wp-terminal">`cinnamon-settings<br></br>No module named Image`</div>comparirà il precedente errore che non ci permette di far partire **cinnamon-control-center**  
<del datetime="2014-01-29T07:28:37+00:00">L’errore è già stato segnalato **[https://bugs.archlinux.org/task/37289](https://bugs.archlinux.org/task/37289 "ArchLinux")** ed entro poco tempo di ricuro sarà risolto.</del>

In questo articolo **[Cinnamon come risolvere “No module named Image”](http://www.nazionlinux.com/cinnamon-come-risolvere-no-module-named-image/ "Cinnamon come risolvere No module named Image")** la soluzione del problema.