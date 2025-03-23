---
id: 1356
title: 'Firefox 54 grandi novità'
date: '2017-06-16T16:59:04+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1356'
permalink: /firefox-54-grandi-novita/
image: /wp-content/uploads/2014/05/14099912203_cac8c51d88_o.jpg
categories:
    - 'Arch Linux'
    - Debian
    - Deepin
    - Distribuzioni
    - Fedora
    - GNU/Linux
    - Mint
    - Slackware
    - Ubuntu
tags:
    - firefox
---

#### **Firefox** il navigatore della Mozilla Foundation attivata la funzione Electrolysis

**Mozilla** già dalla versione 48 aveva introdotto il progetto **Electrolysis** che permette allo stesso Firefox la possibilità di navigare aprendo diversi processi.

La novità stà nel fatto che un processo viene utilizzato per creare l’interfaccia utente mentre gli altri processi saranno utilizzati per il caricamento delle pagine, aumentando la velocità di caricamento delle pagine e la stabilità complessiva del navigatore.

Una stabilità maggiore è possibile grazie alla divisione dei processi, se per esempio una pagina non viene caricata o va in errore per uno script Firefox non si chiuderà.

Per verificare l’abilitazione del multiprocesso digitare

> about:config

nella barra degli indirizzi di **Firefox** e cercare la voce

> dom.ipc.processCount

inserendo un numero pari al numero di core fisici del processore del vostro computer.

Invece per verificare se Electrolysis è attivo basta digitare

> about:support

sempre nella barra degli indirizzi di Firefox e vedere se c’è il numero 1 nella linea Finestre multiprocesso.