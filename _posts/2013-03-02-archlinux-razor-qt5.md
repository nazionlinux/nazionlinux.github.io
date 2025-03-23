---
id: 431
title: 'Archlinux Razor-qt5'
date: '2013-03-02T13:17:07+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=431'
permalink: /archlinux-razor-qt5/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Archlinux Razor-qt5, Articolo: http://www.nazionlinux.com/?p=431'
image: /wp-content/uploads/2013/03/razorqt.png
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Distribuzioni
    - GNU/Linux
    - Kde
tags:
    - Razor-qt
---

[![Razor-qt](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2013/03/razorqt.png?resize=600%2C350)](http://www.nazionlinux.com/archlinux-razor-qt5/razorqt/)

Con l’ultimo aggiornamento di **Archlinux** si ha il passaggio dalle librerie **Qt4** alle nuove **Qt5**.  
Per poter continuare ad utilizzare **[Razor-qt](http://razor-qt.org/ "Razor-qt")** con le nuove **Qt5** bisognerà aggiungere nel file **PKGBUILD** la seguente stringa:

> -DQT\_QMAKE\_EXECUTABLE=qmake4

La prima operazione da fare è scaricarsi il pacchetto dal **[Arch User Repository](https://aur.archlinux.org/?setlang=it "Arch User Repository")** (**AUR**) più precisamente da qui:

**[https://aur.archlinux.org/packages/ra/razor-qt/razor-qt.tar.gz](https://aur.archlinux.org/packages/ra/razor-qt/razor-qt.tar.gz "Razor-qt")**

da terminale lanciare il comando:

<div class="wp-terminal">`wget -c https://aur.archlinux.org/packages/ra/razor-qt/razor-qt.tar.gz`</div>una volta terminato lo scaricamento del file si dovrà scompattare il file, sempre da terminale, con il comando:

<div class="wp-terminal">`tar -zxvf razor-qt.tar.gz && cd razor-qt`</div>il comando aggiunto **&amp;&amp; cd razor-qt** serve per spostarsi nella nuova cartella creata in seguito all’estrazione del pacchetto, eseguita questa operazione dobbiamo editare il file **PKGBUILD**

<div class="wp-terminal">`nano PKGBUILD`</div>mi raccomando **PKGBUILD tutto in MAIUSCOLO**

 ed aggiungere la seguente riga evidenziata in rosso

<div class="wp-terminal">`cmake ./ -DCMAKE_INSTALL_PREFIX=/usr -DLIB_SUFFIX="" -DENABLE_LIGHTDM_GREETER=OFF -DMODULE_LIGHTDM=OFF <span style="color: #ff0000;">-DQT_QMAKE_EXECUTABLE=qmake4</span>`</div>salvare il file ed iniziare la compilazione del pacchetto con i seguenti comandi, da semplice utente:

<div class="wp-terminal">`makepkg`</div>teminata la compilazione, se non dà errori di dipendenze, entrare come amministatore con il comando:

<div class="wp-terminal">`su`</div>oppure

<div class="wp-terminal">`sudo -s`</div>ed installare il pacchetto con:

<div class="wp-terminal">`pacman -U razor-qt-0.5.2-3-x86_64.pkg.tar.xz`</div>**0.5.2-3-x86\_64** dipende dalla versione del pacchetto e dal tipo di processore quindi non è detto che otterrete questo tipo di numerazione!!!

Questo articolo a preso spunto da un commento inviato da **kreed**