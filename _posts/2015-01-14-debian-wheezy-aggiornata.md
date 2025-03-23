---
id: 1148
title: 'Debian Wheezy aggiornata'
date: '2015-01-14T16:00:43+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1148'
permalink: /debian-wheezy-aggiornata/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Debian Wheezy aggiornata, Articolo: http://wp.me/p4ANSQ-iw'
image: /wp-content/uploads/2013/12/11389848483_f2024ea111_z.jpg
categories:
    - Debian
    - Distribuzioni
    - GNU/Linux
tags:
    - Debian
    - Wheezy
---

[![Debian](https://i0.wp.com/farm4.staticflickr.com/3777/11389848483_5f70765d8e_o.jpg?resize=635%2C307 "Debian")](http://www.flickr.com/photos/12418137@N07/11389848483/ "Debian")

**[Debian](http://www.debian.org "Debian")** nome in codice **Wheezy** è stata aggiornata alla versione 7.8, in attesa della prossima versione stabile **Debian 8.0** nome in codice **Jessie** prevista per il 2015.

Questa nuova versione porta con sè solo gli aggiornamenti per la sicurezza e alcune correzioni, per effettuare l’aggiornamento non bisogna ne cambiare i depositi ne re-installare la distribuzione.

L’annuncio ufficiale in inglese lo potete trovare **[https://lists.debian.org/debian-announce/2015/msg00000.html](https://lists.debian.org/debian-announce/2015/msg00000.html "Debian")** con tutta la lista dei pacchetti che verranno aggiornati.

Per aggionare la nostra distribuzione Debian, per chi non avesse letto il nostro articolo **[Debian Wheezy configurare gli aggiornamenti in automatico](http://www.nazionlinux.com/debian-wheezy-configurare-gli-aggiornamenti-in-automatico/ "Debian Wheezy configurare gli aggiornamenti in automatico")** bisogna aprire un terminale ed autentificarsi come amministratore di sistema con il comando

<div class="wp-terminal">`su`</div>una volta inserita la password d’amministratore lanciare il comando

<div class="wp-terminal">`apt-get update`</div>terminato l’aggiornamento del database dai pacchetti lanciare il comando

<div class="wp-terminal">`apt-get dist-upgrade`</div>confermare l’installazione dei pacchetti per far partire l’aggiornamento vero e proprio.  
Al termine potete lanciare il comando

<div class="wp-terminal">`apt-get clean`</div>per ripulire il sistema da tutti i pacchetti che non servono più.