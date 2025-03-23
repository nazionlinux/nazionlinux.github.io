---
id: 542
title: 'Firefox sempre in italiano'
date: '2013-07-11T08:00:16+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=542'
permalink: /firefox-sempre-in-italiano/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Firefox sempre in italiano, Articolo: http://www.nazionlinux.com/?p=542'
categories:
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Mint
    - Slackware
    - Ubuntu
tags:
    - firefox
---

Molte volte non basta installare il pacchetto **firefox-i18n-it** per ritrovarsi **[Firefox](http://www.mozilla.org/it/firefox/new/ "Firefox")** tutto in italiano.  
Partendo dal fatto che **[Firefox](http://www.mozilla.org/it/firefox/new/ "Firefox")** lo avete già installato, le operazioni da eseguire sono, prima di tutto installare il pacchetto **firefox-i18n-it**, aprire un terminale come amministratore:

<div class="wp-terminal">`sudo -s`</div>per **[Ubuntu](http://www.ubuntu.it "Ubuntu")** (**[Mint](http://www.linuxmint.com "Linux Mint")**) e derivate

<div class="wp-terminal">`su`</div>per **[ArchLinux](http://www.archlinux.it "ArchLinux")**, **[Debian](http://www.debian.org "Debian")**…

adesso bisognerà installare il pacchetto **firefox-i18n-it** con il comando

<div class="wp-terminal">`apt-get install firefox-i18n-it`</div>per **[Debian](http://www.debian.org "Debian")** (**[Ubuntu](http://www.ubuntu.it "Ubuntu")**, **[Mint](http://www.linuxmint.com "Linux Mint")**) e derivate

<div class="wp-terminal">`pacman -S firefox-i18n-it`</div>per chi utilizza **[ArchLinux](http://www.archlinux.it "ArchLinux")**

Terminata l’installazione del pacchetto potete chiudere il terminale ed avviare **[Firefox](http://www.mozilla.org/it/firefox/new/ "Firefox")**.

Nella barra degli indirizzi di **[Firefox](http://www.mozilla.org/it/firefox/new/ "Firefox")** digitare **about:config** (nella barra degli indirizzi e **NON in quella della ricerca**) e premere il tasto **INVIO**.

Si aprirà una pagina particolare nella quale è presente un pulsante con scritto **Farò attenzione, prometto** cliccare 1 volta sul pulsante col il tasto sinistro del mouse (per chi ha i tasti inverti col il tasto destro).

![Firefox](https://i0.wp.com/img684.imageshack.us/img684/773/farattenzione.png?w=1200)

La schermata successiva conterrà moltissime voci, a questo punto, bisognerà cercare la voce **general.useragent.locale**.

Per farlo scrivere, nella barra, dove a sinistra c’è scritto **<span style="text-decoration: underline;">C</span>erca**, la parola **general.useragent.locale**.

Una volta individuata la stringa bisognerà modificare il valore trovato ad esempio **en-US** in **it-IT** basterà cliccarci sopra 2 volte per far aprira una finestra di modifica.

Chiudere **[Firefox](http://www.mozilla.org/it/firefox/new/ "Firefox")** e riavviarlo.