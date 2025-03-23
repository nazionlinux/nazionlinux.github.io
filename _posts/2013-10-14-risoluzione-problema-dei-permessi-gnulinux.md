---
id: 678
title: 'Risoluzione problema dei permessi in GNU/Linux'
date: '2013-10-14T08:30:41+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=678'
permalink: /risoluzione-problema-dei-permessi-gnulinux/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Risoluzione problema dei permessi, Articolo: http://www.nazionlinux.com/?p=678'
categories:
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Mint
    - Sistema
    - Slackware
    - Terminale
    - Ubuntu
tags:
    - filesystem
---

![Bart Simpson](https://i0.wp.com/farm4.staticflickr.com/3716/12201056624_811bf85ef0_z.jpg?resize=576%2C309)

Può capitare che durante l’installazione o l’aggiornamento di una distribuzione **[GNU/Linux](http://www.gnu.org/home.it.html "GNU/Linux")** si abbia un problema con i permessi.  
Quello che verrà visualizzato è un errore di questo tipo

<div class="wp-terminal">`attenzione: i permessi delle directory differiscono su var/log/gdm<br></br>filesystem: 770 pacchetto: 755`</div>la risoluzione a queato problema è molto semplice, basta aprire un teminale ed autentificarsi come amministratore

**Ubuntu** e derivate **Linux Mint**, **ElementaryOS**… **Fedora**, **CentOs**, **OpenSuse**

<div class="wp-terminal">`sudo -s`</div>**ArchLinux**, **Debian**, **Slackware**…

<div class="wp-terminal">`su`</div>una volta inserita la password d’amministratore di sistema lanciate questo comando

<div class="wp-terminal">`chmod -R 755 /var/log/gdm`</div>l’opzione **-R** attribuisce **ricorsivamente** i permessi **755** a tutti files e le sottocartelle.  
Nel caso in cui, **per esempio**, il file sia un binario e non una cartella bisognerà lanciare il comando senza tale opzione

<div class="wp-terminal">`chmod 755 /usr/bin/gdm`</div>