---
id: 1223
title: 'Archlinux Xfce minimale'
date: '2015-10-30T13:07:43+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1223'
permalink: /archlinux-xfce-minimale/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Archlinux Xfce minimale, Articolo: http://wp.me/p4ANSQ-jJ'
image: /wp-content/uploads/2014/08/14804283038_e595f7e9be_o.png
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Distribuzioni
    - GNU/Linux
    - Xfce
tags:
    - 'Arch Linux'
    - Xfce
---

[![Xfce](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2014/08/14804283038_e595f7e9be_o.png?resize=610%2C300)](http://www.nazionlinux.com/xfce-aprire-terminale/rp_14804283038_e595f7e9be_o-png/)

Partendo dal fatto che nel vostro computer sia già installato una versione base di **Archlinux** che comprenda anche il server grafico **X.org** per installare **Xfce minimale** basta lanciare da amministratore di sistema il comando:

<div class="wp-terminal">`pacman -S xfce4-settings xfce4-panel xfce4-mixer xfce4-session xfwm4 xfdesktop gvfs gksu`</div>**gvfs** serve per far funzionare l’applet del cestino sulla barra mentre **gksu** è l’interfaccia grafica per entrare in modalità amministratore di sistema.

Vi consigli inoltre di installarvi un terminale

<div class="wp-terminal">`pacman -S sakura`</div>ed altri pacchetti tra cui

<div class="wp-terminal">`pacman -S thunar-archive-plugin ffmpegthumbnailer`</div>**thunar-archive-plugin** per far gestire gli archivi direttamante da **thunar** e **ffmpegthumbnailer** per le anteprime.