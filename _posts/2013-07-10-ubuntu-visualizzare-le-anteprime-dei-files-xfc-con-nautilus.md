---
id: 533
title: 'Ubuntu: visualizzare le anteprime dei files Xfc con Nautilus'
date: '2013-07-10T12:47:30+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=533'
permalink: /ubuntu-visualizzare-le-anteprime-dei-files-xfc-con-nautilus/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Ubuntu: visualizzare le anteprime dei files Xfc con Nautilus, Articolo: http://www.nazionlinux.com/?p=533'
categories:
    - 'Ambienti Grafici'
    - Distribuzioni
    - Gnome
    - GNU/Linux
    - Mint
    - Ubuntu
tags:
    - Gnome
    - Mint
    - Nautilus
    - Ubuntu
---

Chi utilizza **[Gimp](http://www.gimp.org "The Gimp")** conosce bene i files **Xfc**.  
Per prima cosa installiamo il pacchetto **gnome-xcf-thumbnailer** aprendo un terminale da amministratore e lanciamo il comando:

<div class="wp-terminal">`apt-get install gnome-xcf-thumbnailer`</div>poi, sempre da amministratore, bisognerà creare la cartella **thumbnailers** con il comando:

<div class="wp-terminal">`mkdir -p /usr/share/thumbnailers/`</div>all’interno di questa cartella andrà creato un file **gnome-xcf.thumbnailer** contenente i seguenti comandi

> \[Thumbnailer Entry\]  
> TryExec=gnome-xcf-thumbnailer  
> Exec=gnome-xcf-thumbnailer %i %o  
> MimeType=image/x-xcf;image/x-compressed-xcf;

per creare questo file potete utilizzare un semplice editor di files come **Gedit**, **Scite**, **Mousepad**… oppure **Nano**

per ultimo bisognerà eliminare le anteprime dalla cache

<div class="wp-terminal">`rm -r ~/.thumbnails/fail && rm -r ~/.cache/thumbnails/fail`</div>