---
id: 743
title: 'Cinnamon come risolvere &#8220;No module named Image&#8221;'
date: '2013-11-15T09:17:42+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=743'
permalink: /cinnamon-come-risolvere-no-module-named-image/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Cinnamon come risolvere &#8220;No module named Image&#8221;, Articolo: http://www.nazionlinux.com/?p=743'
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Cinnamon
    - Distribuzioni
    - GNU/Linux
tags:
    - Cinnamon
---

[![cinnamon](https://i0.wp.com/farm4.staticflickr.com/3714/12124743314_b19414fff8_z.jpg?resize=640%2C240 "cinnamon")](http://www.flickr.com/photos/12418137@N07/12124743314/ "cinnamon")

Come stà capitando a molti utenti di **[Archlinux](http://www.archlinux.org "Arch Linux")** che utilizzano il nuovo [Cinnamon](http://www.nazionlinux.com/cinnamon/ "Cinnamon 2.0 e gli errori di gioventù") avviando il comando

<div class="wp-terminal">`cinnamon-settings<br></br>No module named Image`</div>compare l’errore **No module named Image** quest’errore è dovuto da una vecchia compilazione dei files **pyc**.  
La soluzione la potete trovare qui **[https://bbs.archlinux.org/viewtopic.php?pid=1347539#p1347539](https://bbs.archlinux.org/viewtopic.php?pid=1347539#p1347539 "cinnamon-settings: python2 PIL Image import issue")** nel forum dedicato di **[Archlinux](http://www.archlinux.org "Arch Linux")**.  
Bisognerà scaricare il pacchetto **[lostfiles](https://aur.archlinux.org/packages/lostfiles/ "Lostfiles")** dal deposito **[AUR](https://aur.archlinux.org/packages/lostfiles/ "ArchLinux User Repository")** e compilarlo come descritto nella nostra precendete guida **[Archlinux compilare pacchetti da AUR](http://www.nazionlinux.com/archlinux-compilare-pacchetti-da-aur/ "Archlinux compilare pacchetti da AUR")**.  
Una volta installato il pacchetto **[lostfiles](https://aur.archlinux.org/packages/lostfiles/ "Lostfiles")** aprite un terminale ed autentificatevi come amministratore col il comando

<div class="wp-terminal">`su`</div>inserite la password d’amministratore di sistema e lanciate il comando

<div class="wp-terminal">`lostfiles`</div>fate molta attenzione vi comparirà una lista di files, quelli che ci interessano sono nella cartella **/usr/lib/cinnamon-settings/modules/** ed hanno estensione **.pyc** tutti questi files andranno cancellati con il comando

<div class="wp-terminal">`rm /usr/lib/cinnamon-settings/modules/*.pyc`</div>terminate queste operazioni riavviate il sistema.