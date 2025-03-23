---
id: 304
title: 'Aggiungere la Swap a mano'
date: '2012-08-24T21:08:19+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=304'
permalink: /aggiungere-la-swap-a-mano/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Aggiungere la Swap a mano, Articolo: http://www.nazionlinux.com/?p=304'
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - Enlightenment
    - Gnome
    - GNU/Linux
    - Kde
    - Mint
    - Openbox
    - Sistema
    - Terminale
    - Ubuntu
    - Xfce
tags:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - Enlightenment
    - Gnome
    - GNU/Linux
    - Kde
    - Mint
    - Openbox
    - Sistema
    - Terminale
    - Ubuntu
    - Xfce
---

Sul mio vecchio portatile, per motivi di spazio, non ho creato la partizione di **swap** pensando che i 512mb di RAM bastassero.  
All’ atto pratico avviando alcuni programmi (che non scrivo per non creare guerre filosofiche) la memoria si satura ed il sistema si riavvia.

Aggiungere un bancale di memoria non è possibile, riformattare il disco non mi sembra proprio il caso, cosa fare?

Come già descritto [la partizione **swap** non è altro che un file](http://www.nazionlinux.com/2012/05/01/velocizzare-la-nostra-distribuzione-gnulinux-con-lo-swappiness-tuning/ "Velocizzare la nostra distribuzione GNU/Linux con lo Swappiness Tuning") e per questo motivo è possibile creare un file che serva proprio per eseguire le stesse operazioni della partizione swap, per esempio per aggiungere 512mb, al sistema, basterà aprire un terminale da amministratore e dare il comando:

<div class="wp-terminal">`dd if=/dev/zero of=/var/tmp/swapfile bs=1024 count=524288`</div>dove il comando **dd if=/dev/zero of=/var/tmp/swapfile**, per semplificare, crea un file vuoto nella cartella **/var/tmp** l’ opzione **bs=1024** permette di leggere e scrivere 1024bytes al tempo stesso e l’opzione **count=524288** dà la dimenzione al file **swapfile** di 512mb.

Adesso si dovrà impostare la **swap** e farla puntare sul file **/var/tmp/swapfile** sempre da terminale d’ amministratore digitare il comando:

<div class="wp-terminal">`mkswap /var/tmp/swapfile`</div>per motivi di sicurezza bisognerà impostare i permessi sul file creato con i comandi:

<div class="wp-terminal">`chown root:root /var/tmp/swapfile`</div><div class="wp-terminal">`chmod 0600 /var/tmp/swapfile`</div>solamente l’ utente root può leggere e scrivere il file.

Adesso attiviamo la partizione swap col comando:

<div class="wp-terminal">`swapon /var/tmp/swapfile`</div>per rendere effettiva questa modifica bisognerà inserire nel file **/etc/fstab** la seguente stringa

> /var/tmp/swapfile swap swap defaults 0 0

per vedere se tutto è andato a buon fine digitare:

<div class="wp-terminal">`swapon -s`</div>