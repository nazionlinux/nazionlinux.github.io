---
id: 278
title: 'Archlinux e pyvolwheel'
date: '2012-07-28T16:18:36+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=278'
permalink: /archlinux-e-pyvolwheel/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Archlinux e pyvolwheel, Articolo: http://www.nazionlinux.com/?p=278'
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Distribuzioni
    - Enlightenment
    - Gnome
    - GNU/Linux
    - Kde
    - Kernel
    - Openbox
    - Sistema
    - Terminale
    - Xfce
tags:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Distribuzioni
    - Enlightenment
    - Gnome
    - GNU/Linux
    - Kde
    - Kernel
    - Openbox
    - Sistema
    - Terminale
    - Xfce
---

Ultimamente per chi utilizza **Archlinux** le cose sono un pò cambiate.  
Il file **rc.conf** è stato decentralizzato, adesso i moduli è preferibile caricarli dalla cartella **/etc/modules-load.d/**.  
La cartella logicamente risulterà vuota starà a noi inserire i files corrispondenti hai moduli da caricare all’avvio.  
In precendenza avevo scritto un articolo [pyvolwheel Error: file o directory non esistente: ‘/dev/mixer’](http://www.nazionlinux.com/2011/06/04/archlinux-pyvolwheel-error-file-o-directory-non-esistente-devmixer/ "Archlinux: pyvolwheel Error: file o directory non esistente: ‘/dev/mixer’") per correggere l’errore e per far funziona **pyvolwheel** bastava inserire il modulo **snd-mixer-oss** nella sezione **MODULES()** nel file rc.conf, ma come detto in precendenza, adesso la soluzione migliore è crearsi un file snd-mixer-oss.conf nella cartella /etc/modules-load.d/ per caricarlo.  
La procedura è semplice basta aprire un terminale da ammonistratore e dare il seguente comando

<div class="wp-terminal">`nano /etc/modules-load.d/snd-mixer-oss.conf`</div>inserire questa 2 righe:

> \# carica il modulo snd-mixer-oss.ko all’avvio del sistema  
> snd-mixer-oss

salvare il file premendo contemporaneamente i tasti **CRTL** e **O** premere il tasto **INVIO** per confermare ed uscire premendo i tasti **CTRL** e **X**  
a questo punto potete togliere **snd-mixer-oss** da MODULES() in rc.conf e consiglio di dare una letta al manuale di rc.conf

<div class="wp-terminal">`man rc.conf`</div>