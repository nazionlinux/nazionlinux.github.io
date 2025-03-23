---
id: 416
title: 'Semplice trucco Xfce'
date: '2013-01-16T01:15:24+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=416'
permalink: /semplice-trucco-xfce/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Semplice trucco Xfce, Articolo: http://www.nazionlinux.com/?p=416'
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Mint
    - Slackware
    - Ubuntu
    - Xfce
---

Da alcuni giorno sto risperimentando [Xfce](http://www.xfce.org "Xfce"), dopo che per molto tempo ho utilizzato [Openbox](http://openbox.org/ "OpenBox").  
Ho trovato in [Xfce](http://www.xfce.org "Xfce") una simpatica applicazione **xfce4-appfinder** che permette di trovare le applicazioni installate nel computer e di avviarle.  
Questa voce la potete trovare nel

> Menù -&gt; Accessori -&gt; Trova applicazioni

oppure, se volete, la potete installare come avviatore nel pannello.  
Io ho preferito inserirla come seconda voce del menù principale dopo **Esegui programma…**  
Per inserirla direttamente nel menù principale bisogna editare da root il file **xfce4-appfinder.desktop** che si trova nella cartella

> /usr/share/applications/

aprite un terminale entrate come amministratore ed editate il file con il comando:

<div class="wp-terminal">`nano /usr/share/applications/xfce4-appfinder.desktop`</div>cercate la riga contenente

> Categories=Utility;X-XFCE;

ed alla fine di questa riga aggiungete **X-XfceToplevel;** così

> Categories=Utility;X-XFCE;X-Xfce-Toplevel;

salvate il file **CTRL + o** confermate la modifica ed uscita da nano con i tasti **CTRL + x** adesso uscite dal terminale di amministratore col comando

<div class="wp-terminal">`exit`</div>e digitate questo ultimo comando

<div class="wp-terminal">`xfdesktop --reload`</div>e come per magia vi comparirà una nuova voce nel menù.