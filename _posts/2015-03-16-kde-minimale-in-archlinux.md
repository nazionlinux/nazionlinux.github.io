---
id: 1183
title: 'KDE minimale in Archlinux'
date: '2015-03-16T10:31:17+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1183'
permalink: /kde-minimale-in-archlinux/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: KDE minimale in Archlinux, Articolo: http://wp.me/p4ANSQ-j5'
image: /wp-content/uploads/2015/01/16246227416_10ed8c3a78_o.png
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Distribuzioni
    - GNU/Linux
    - Kde
tags:
    - 'Arch Linux'
    - Kde
---

[![KDE](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2015/01/16246227416_10ed8c3a78_o.png?resize=610%2C300)](http://www.nazionlinux.com/linux-mint-kde-si-aggiorna/rp_16246227416_10ed8c3a78_o-png/)

**Kde** è un ambiente grafico ricco di applicazioni.  
**Archlinux** è una distribuzione che si costruisce passo dopo passo.  
Molte volte gli utenti di **Archlinux** non sono interessati ad installare meta-pacchetti contenenti svariate applicazioni che poi, alla fine, non verranno utilizzate.  
Per questo motivo è sempre consigliabile installare una versione minimale del vostro ambiente grafico e di seguito installarsi quello che effetivamente ci occorre.  
Per prima cosa bisogna aprire un terminale e autentificarsi come amministratore di sistema con il comando

<div class="wp-terminal">`su`</div>vi verrà richiesto d’inserire la password d’amministratore.

Il passo successivo è quello di aggiornare il sistema con il comando

<div class="wp-terminal">`pacman -Syu`</div>alla fine bisognerà confermare premendo il tasto **\[ s \]**.

Per installare **Kde minimale** basta il comando

<div class="wp-terminal">`pacman -S kdebase-workspace`</div>adesso non vi resta che riavviare il sistema e provare Kde, ricordatevi di selezionarlo prima di rientrare come utente.