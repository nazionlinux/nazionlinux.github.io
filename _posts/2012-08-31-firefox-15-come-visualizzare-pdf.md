---
id: 316
title: 'Firefox 15 come visualizzare i files PDF'
date: '2012-08-31T16:52:49+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=316'
permalink: /firefox-15-come-visualizzare-pdf/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Firefox 15 come visualizzare PDF, Articolo: http://www.nazionlinux.com/?p=316'
categories:
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Mint
    - Ubuntu
tags:
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Mint
    - Ubuntu
---

Una novità di **Mozilla Firefox 15** è la possibilità di visualizzare i files pdf direttamente all’interno del programma.

Per poterlo fare però bisognerà effettuare delle modifiche al programma.

Per prima cosa avviare Firefox e nella barra degli indirizzi digitare **about:config** (nella barra degli indirizzi e **NON in quella della ricerca**) e premere il tasto **INVIO**.

Si aprirà una pagina particolare nella quale è presente un pulsante con scritto **Farò attenzione, prometto** cliccare 1 volta sul pulsante col il tasto sinistro del mouse (per chi ha i tasti inverti col il tasto destro).

![Firefox](https://i0.wp.com/img684.imageshack.us/img684/773/farattenzione.png?w=1200)

La schermata successiva conterrà moltissime voci, a questo punto, bisognerà cercare la voce **pdfjs.disabled**.

Per farlo scrivere, nella barra, dove a sinistra c’è scritto **<span style="text-decoration: underline;">C</span>erca**, la parola **pdfjs.disabled** se non vi dà alcun risultato dobbiamo crearla.

Cliccare col il tasto destro (per chi ha i tasti inverti col il tasto sinistro) al centro della pagina o in un qualsiasi spazio vuoto, selezionare **Nuovo -&gt; Booleano** e scrivere **pdfjs.disabled** e dare invio a questo punto cliccare 2 volte col il tasto sinistro del mouse (per chi ha i tasti inverti col il tasto destro) sulla nuova chiave creata in modo che assuma il valore **false** e riavviare Firefox se volete fare una prova.