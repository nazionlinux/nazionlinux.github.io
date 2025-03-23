---
id: 928
title: 'Unity? No trasformo Xfce'
date: '2014-03-05T17:17:24+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=928'
permalink: /unity-no-trasformo-xfce/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Unity? No trasformo Xfce, Articolo: http://www.nazionlinux.com/?p=928'
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - Fedora
    - GNU/Linux
    - Mint
    - Slackware
    - Ubuntu
    - Xfce
tags:
    - Unity
    - Xfce
---

Con il passaggio dagli schermi 4:3 ai più recenti 16:9 la risoluzione verticale dei monitor si è molto ridotta rispetto alla loro larghezza.  
Per questo motivo si è passati da una barra orizzontale tipo **[Xfce](http://www.xfce.org/ "Xfce")**, **[Lxde](http://www.lxde.org/ "Lxde")**, **[Kde](http://www.kde.org/ "Kde")**, **[Mate](http://mate-desktop.org/ "Mate")**… ad una verticale laterale come quella utilizzata in **[Unity](http://unity.ubuntu.com/ "Unity")**.  
Questo è dovuto dal fatto che bisognava ottimizzare il poco spazio verticale a disposizione.  
Ma come possiamo “trasformare” il nostro ambiente grafico **Xfce** in stile **Unity**?  
Il procedimento è semplice e per renderlo più semplice lo abbiamo integrato con delle immagini.  
Per prima cosa clicchiamo, col il tasto destro del mouse, sulla barra orizzontale in uno spazio dove non ci sono icone (per chi ha i tasti invertiti deve cliccare sul tasto sinistro).  
Comparirà un menù dove andremo a selezionare **Pannello** -&gt; **Preferenze del pannello…**

[![xfce-panel](https://i0.wp.com/farm8.staticflickr.com/7451/12949869834_ec9d54109b_o.png?resize=616%2C400 "xfce-panel")](http://www.flickr.com/photos/12418137@N07/12949869834/ "xfce-panel")

Se questa operazione vi rimane difficile potete selezionare dal pulsante **Menù** della barra **Impostazioni** -&gt; **Pannello** ottenendo la medesima finestra

[![xfce-window-panel](https://i0.wp.com/farm8.staticflickr.com/7389/12949601805_2e6ed1234a_o.png?resize=389%2C483 "xfce-window-panel")](http://www.flickr.com/photos/12418137@N07/12949601805/ "xfce-window-panel")

nella precedente finestra, in alto, selezionate il pannello da voler ruotare verticalmente che sarà evidenziato con dei trattini rossi, nel nostro caso **Pannello 1**.  
Fate molta attenzione **Xfce** come impostazioni predefinite crea 2 pannelli.  
Una volta selezionato il pannello corretto, dove c’è la scritta **Disposizione**, modificate da **Orizzontale** a **Deskbar** come in figura.  
Vi consiglio di aumetare il valore di **Dimensioni riga (pixel)** da 30 a 32 il resto dovrebbe andar bene così come è.  
A questo punto noterete che il pannello si posizionerà verticalmente alla sinistra del vostro schermo proprio in stile **Unity**.

Per finire notere una scritta “Menu,” semi nascosta, subito dopo la prima icona in alto, per eliminarla cliccate col tasto destro proprio su quell’icona e selezionate **Proprietà** vi si aprirà una finestra come questa

[![xfce-window-menu](https://i0.wp.com/farm8.staticflickr.com/7411/12949954283_24b932c70d_o.png?resize=426%2C463 "xfce-window-menu")](http://www.flickr.com/photos/12418137@N07/12949954283/ "xfce-window-menu")

non dovrete far altro che deselezionare **Mostra titolo del pulsante** e chiudere la finestra.