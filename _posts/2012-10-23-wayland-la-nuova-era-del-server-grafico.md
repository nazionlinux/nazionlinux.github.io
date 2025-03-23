---
id: 364
title: 'Wayland la nuova era del server grafico'
date: '2012-10-23T17:10:15+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=364'
permalink: /wayland-la-nuova-era-del-server-grafico/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Wayland la nuova era del server grafico, Articolo: http://www.nazionlinux.com/?p=364'
image: /wp-content/uploads/2012/10/wayland.jpg
categories:
    - 'Ambienti Grafici'
    - Enlightenment
    - Gnome
    - GNU/Linux
    - Kde
    - Openbox
    - Sistema
    - Wayland
    - X11
    - Xfce
tags:
    - 'Ambienti Grafici'
    - Enlightenment
    - Gnome
    - GNU/Linux
    - Kde
    - Openbox
    - Sistema
    - Wayland
    - X11
    - Xfce
---

### Wayland il moderno server grafico

**Wayland** è il moderno server grafico, rispetto all’oramai obsoleto **X11**, creato da **Kristian Høgsberg**.

La differenza con il vecchio sistema X11 stà, oltre che nelle prestazioni, anche in un maggiore numero di estenzioni del protocolo X11 e una maggiore pulizia ed ordinamento delle API rispetto a quelle di **X.org**.

Con l’ uscita della versione stabile la **1.0** ci sarà, entro alcuni mesi, la possibilità di vederlo come server grafico predefinito nella maggiori distribuzioni **[GNU/Linux](http://www.nazionlinux.com/2012/10/22/linuxday-2012/ "LinuxDay 2012")**, prima tra tutte **Fedora**.

Gli sviluppatori di **Gnome** stanno lavorando per integrare **Wayland** con le **Gtk+3** mentre con la prossima uscita delle librerie **Qt5** prevista per questo dicembre tutte le applicazioni **Kde** saranno nativamente compatibili con **Wayland**.

A differenza, del server X che faceva da filtro tra le applicazioni e il motore grafico (compositor), **Wayland** interagisce direttamente col kernel e tutte le librerie contenute (KMS, evdev, mesa, fontconfig, FreeType, Cairo, Qt, ecc.) diventando di fatto il motore grafico eliminando così un passaggio.

Per avere un idea chiara del funzionamento di **Wayland** visitare:

[http://wayland.freedesktop.org/architecture.html](http://wayland.freedesktop.org/architecture.html "freedesktop.org")