---
id: 1226
title: 'Fedora 23 come aggiornarla'
date: '2015-11-04T01:56:17+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1226'
permalink: /fedora-23-come-aggiornarla/
hl_twitter_has_auto_tweeted:
    - 'Titolo: Fedora 23 come aggiornarla, Articolo: http://wp.me/p4ANSQ-jM'
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
image: /wp-content/uploads/2015/11/fedora-22-23.png
categories:
    - 'Ambienti Grafici'
    - Cinnamon
    - Distribuzioni
    - Fedora
    - Gnome
    - GNU/Linux
    - Kde
    - Lxde
    - Mate
    - Xfce
tags:
    - Fedora
---

[![fedora-22-23](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2015/11/fedora-22-23.png?resize=610%2C300)](http://www.nazionlinux.com/fedora-23-come-aggiornarla/fedora-22-23/)

Con l’uscita di **Fedora 23** la distribuzione passa al **DNF system upgrade** per gli aggionamenti di versione.  
Prima di effettuare il passaggio alla versione 23 bisogna essere sicuri di aver aggiornato tutti i pacchetti del nostro sistema.  
Apriamo un terminale e laciamo il comando:

<div class="wp-terminal">`sudo dnf update`</div>bisognerà digitare la password d’amministratore di sistema e poi confermare per installare i pacchetti.  
Una volta terminata questa procedura possiamo iniziare il processo d’aggiornamento con il comando

<div class="wp-terminal">`sudo dnf upgrade`</div>come abbiamo anticipato **Fedora 23** utilizza un nuovo gestore degli aggiornamenti per questo motivo bisognerà installarlo prima di continuare, con il comando:

<div class="wp-terminal">`sudo dnf install dnf-plugin-system-upgrade`</div>una volta installato passiamo all’aggionamento dei pacchetti

<div class="wp-terminal">`sudo dnf system-upgrade download --releasever=23 --best`</div>da notare che **23** si riferisce al numero di versione mentre l’opzione **–best** ci permette di controllare tutte le dipendenze dei pacchetti non soddisfatte.

Ora basterà lanciare il comando

<div class="wp-terminal">`sudo dnf system-upgrade reboot`</div>per aggiornare e riavviare la distribuzione.