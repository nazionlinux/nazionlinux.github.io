---
id: 464
title: 'Scaricare torrents in sicurezza con Vuze &#038; Transmission'
date: '2013-04-30T14:35:05+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=464'
permalink: /scaricare-torrents-in-sicurezza-con-vuze-transmission/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Scaricare torrents in sicurezza con Vuze &#038; Transmission, Articolo: http://www.nazionlinux.com/?p=464'
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
    - Slackware
    - Ubuntu
    - Xfce
tags:
    - p2p
    - Sicurezza
    - Torrent
    - Transmission
    - Vuze
---

Abbiamo preso spunto da un articolo pubblicato oggi su **[www.lffl.org](http://www.lffl.org "lffl.org")**, dove viene spiegato come scaricare i files torrent in sicurezza evitando i server spia.  
La procedura è semplice basta utilizzare un sito che mette a disposizione un file compresso contenente una lista di indirizzi ip bloccati.

**Vuze**  
Avviare **Vuze** dal menu selezionare Strumenti -&gt; Opzioni  
si aprirà questa finestra

<figure aria-describedby="caption-attachment-465" class="wp-caption aligncenter" id="attachment_465" style="width: 468px">[![Vuze](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2013/04/vuze.png?resize=468%2C232)](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2013/04/vuze.png)<figcaption class="wp-caption-text" id="caption-attachment-465">Vuze</figcaption></figure>

cliccare, nella parte sinistra della finestra, su **Filtri IP** ed inserire di fianco “Filtri IP da caricare automaticamente”, il seguente indirizzo:

> http://www.bluetack.co.uk/config/level1.gz

salvare e riavviare **Vuze**.

**Transmission**  
Avviare **Transmission** dal menu selezionare Modifica -&gt; Preferenze

<figure aria-describedby="caption-attachment-472" class="wp-caption aligncenter" id="attachment_472" style="width: 386px">[![Transmission](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2013/04/transmission.png?resize=386%2C255)](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2013/04/transmission.png)<figcaption class="wp-caption-text" id="caption-attachment-472">Transmission</figcaption></figure>

Nella schermata che si aprirà cliccate sulla voce Privacy.  
Ora non ci resta che spuntare la voce **Abilitare blocklist** e nel campo scrivere

> http://www.bluetack.co.uk/config/level1.gz

chiudere e riavviare **Transmission**.