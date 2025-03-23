---
id: 577
title: 'Archlinux anteprime video'
date: '2013-09-30T19:56:21+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=577'
permalink: /archlinux-anteprime-video/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Archlinux anteprime video, Articolo: http://www.nazionlinux.com/?p=577'
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Distribuzioni
    - Enlightenment
    - Gnome
    - GNU/Linux
    - Kde
    - Openbox
    - Xfce
tags:
    - 'Arch Linux'
    - ffmpegthumbnailer
    - Mplayer
    - Nautilus
    - PcManFm
    - Thunar
    - Vlc
---

[![archlinux](https://i0.wp.com/farm8.staticflickr.com/7436/10243448844_63816f9f75_o.jpg?resize=610%2C300 "archlinux")](http://www.flickr.com/photos/12418137@N07/10243448844/ "archlinux")

Premesso che questa guida è unicamente per **ArchLinux** non è detto che si possa usare anche per una qualsiasi altra ditribuzione.

Apriamo un terminale, loggatevi come amministratore e lanciate il comando:

<div class="wp-terminal">`pacman -S vlc ffmpegthumbnailer gstreamer0.10-{{bad,good,ugly,base}{,-plugins},ffmpeg}`</div>così come è scritto.  
Il comando installerà il programma **Vlc** che serve per vedere i filmati, volendo si può sostituire con un altro programma video a vostro piacimento come ad esempio **Mplayer**.  
Verranno installati anche tutti i plugins **gstreamer0.10-\*** per vedere i nostri video.  
Il pacchetto **ffmpegthumbnailer** è quello che invece servirà a far visualizzare all’interno di **Nautilus**, **Dolphin**, **PcManFm**, **Thunar**… le anteprime dei files video.

Finita l’installazione dei pacchetti lanciate il seguente comando questa volta dal terminale utente:

<div class="wp-terminal">`rm -rf ~/.thumbnails/fail`</div>per ultimo riavviate il sistema.