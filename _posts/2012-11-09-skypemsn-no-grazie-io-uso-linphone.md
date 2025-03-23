---
id: 391
title: 'Skype/Msn? No grazie, io uso LinPhone'
date: '2012-11-09T19:07:55+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=391'
permalink: /skypemsn-no-grazie-io-uso-linphone/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Skype/Msn? No grazie, io uso LinPhone, Articolo: http://www.nazionlinux.com/?p=391'
categories:
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Mint
    - Slackware
    - Ubuntu
tags:
    - linphone
---

In questi giorni è uscita la notizia che il programma Msn verrà inglobato in Skype.  
La notizia non ci ha di certo scosso visto che da tempo noi di [**Nazion Linux**](http://www.nazionlinux.com "Nazion Linux") utilizziamo, per le nostre comunicazioni audio/video il programma a codice aperto [**Linphone**](http://www.linphone.org "Linphone").  
Linphone è gratuito e basta una semplice iscrizione per ottenere un nome utente univoco (nickname) con il quale effettuare video chiamate o semplici telefonate.

L’installazione è semplice per **Debian** e derivate da terminale di amministratore:

<div class="wp-terminal">`apt-get install linphone`</div>o se vi trovate meglio utilizzate **Ubuntu Software Center**.  
In **Archlinux** basta dare il comando, sempre da un terminale di amministratore

<div class="wp-terminal">`pacman -S linphone`</div>Una volta installato e ottenuto il vostro nome utente bisognerà configurare il programma.  
Avviare il programma dal menù del vostro ambiente grafico o da terminale

<div class="wp-terminal">`linphone &`</div>dal menù di **Linphone** cliccate su **Opzioni -&gt; Preferenze** e selezionate la linguetta **Gesetisci SIP Account**.  
A questo punto si apre una nuova finestra nella quale dovete cliccare sul pulsante **Aggiungi** che aprirà

[![Linphone](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2012/11/linphone.png?resize=474%2C220 "Linphone")](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2012/11/linphone.png)Linphone

basterà inserire

> sip:**nome\_utente**@sip.linphone.org

nel riquadro a destra di **Identità SIP** sostituendo nome\_utente con il vostro ed inserire

> **sip:sip.linphone.org**

nel riquadro a destra di **Indirizzo sip proxy**, cliccare sul pulsante **Ok** per confermare, poi sul pulsante **Fatto** in basso a destra dell’altra finestra Preferenze.  
Linphone è disponibile anche per **Android**, **iPhone** e **Blackberry**