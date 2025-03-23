---
id: 758
title: 'Debian si aggiorna alla versione 7.3'
date: '2013-12-16T10:54:17+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=758'
permalink: /debian-si-aggiorna-alla-versione-7-3/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Debian si aggiorna alla versione 7.3, Articolo: http://www.nazionlinux.com/?p=758'
categories:
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Sistema
    - Terminale
tags:
    - apt-get
    - aptitude
    - Debian
    - dist-upgrade
    - full-upgrade
    - Squeeze
    - update
    - upgrade
    - Wheezy
---

[![Debian logo](https://i0.wp.com/farm4.staticflickr.com/3777/11389848483_f2024ea111_z.jpg?resize=635%2C307 "Debian logo")](http://www.flickr.com/photos/12418137@N07/11389848483/ "Debian logo")

**[Debian](http://www.debian.org/ "Debian")** nome in codice **Wheezy** raggiunge la versione **7.3** che non aggiungerà nulla di nuovo, ma porta con se molte correzioni.  
La più importante risolve il problema nella gestione dei pacchetti **.deb** superiori a 2GB di dimensione.  
Per aggiornare la vostra distribuzione bastano 3 semplici comandi da terminale d’aaministratore di sistema

<div class="wp-terminal">`apt-get update`</div>una volta aggiornato il database dei pacchetti eseguite

<div class="wp-terminal">`apt-get upgrade`</div>ed infine lanciate il comando

<div class="wp-terminal">`apt-get dist-upgrade`</div>Invece di usare **apt-get upgrade** e **apt-get dist-upgrade** potete usare i seguenti comandi

<div class="wp-terminal">`aptitude update && aptitude full-upgrade`</div>ma fate molta **ATTENZIONE** nell’utilizzare **aptitude**

> Il processo di aggiornamento di alcune versioni precedenti raccomandano l’uso di **aptitude** per l’aggiornamento. Questo strumento non è raccomandato per aggiornamenti da **Squeeze** a **Wheezy**.

come si legge in  
**[http://www.debian.org/releases/wheezy/amd64/release-notes/ch-upgrading.en.html]( http://www.debian.org/releases/wheezy/amd64/release-notes/ch-upgrading.en.html "Debian AMD64")**

Tutti gli aggiornamenti li potete trovare a questo indirizzo **[http://www.debian.org/News/2013/20131214](http://www.debian.org/News/2013/20131214 "Debian")**