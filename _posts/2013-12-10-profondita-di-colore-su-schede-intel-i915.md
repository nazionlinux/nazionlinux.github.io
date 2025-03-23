---
id: 752
title: 'Profondità di colore su schede Intel i915'
date: '2013-12-10T10:00:32+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=752'
permalink: /profondita-di-colore-su-schede-intel-i915/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Profondità di colore su schede Intel i915, Articolo: http://www.nazionlinux.com/?p=752'
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Cinnamon
    - Distribuzioni
    - Enlightenment
    - Gnome
    - GNU/Linux
    - Kde
    - Lxde
    - Mate
    - Openbox
    - Sistema
    - X11
    - Xfce
tags:
    - Asus
    - i915
    - Intel
    - m5200n
---

[![cinescopio](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2014/01/cinescopio-e1390431501772.jpg?resize=640%2C480)](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2014/01/cinescopio-e1390431501772.jpg)

Un amico mi ha portato un **Asus m5200n** sul quale dovevo installare **[Archlinux](http://www.archlinux.org "Archlinux")**.  
Al termine dell’installazione del server **X**, mi sono accorto che con la configurazione automatica di **X.org** aveva una profondità di colore **[depth 15](http://it.wikipedia.org/wiki/Profondit%C3%A0_di_colore "Profondità di colore")**.

Il driver per far funzionare la scheda video è un **Intel i915** e si attiva con il pacchetto **xf86-video-intel** che era installato, il driver **Intel** era caricato correttamente ho anche provato a ricompilare il kernel come descritto nel **[Wiki Archlinux](https://wiki.archlinux.org/index.php/Intel_%28Italiano%29 "Wiki ArchLinux")** in questa guida **[https://wiki.archlinux.org/index.php/Intel\_%28Italiano%29#KMS\_.28Kernel\_Mode\_Setting.29](https://wiki.archlinux.org/index.php/Intel_%28Italiano%29#KMS_.28Kernel_Mode_Setting.29 "Wiki ArchLinux - Kernel Mode Setting")**, ma nulla da fare la profondità di colore era sempre impostata a **[depth 15](http://it.wikipedia.org/wiki/Profondit%C3%A0_di_colore "Profondità di colore")**.

L’unica soluzione che ho trovato è stata quella di cambiare il metodo di accelerazione da **SNA** (Sandybridge’s New Acceleration) predefinito al vecchio **UXA** (Unified Acceleration Architecture).

Per fare ciò bisogna creare un file **20-intel.conf** nella cartella **/etc/X11/xorg.conf.d**  
Aprite un terminale di amministratore di sistema e lanciate il comando

<div class="wp-terminal">`nano /etc/X11/xorg.conf.d/20-intel.conf`</div>e compilatelo come riportato in seguito

<div class="wp-terminal">`Section "Device"<br></br>Identifier "Intel Graphics"<br></br>Driver "intel"<br></br>Option "AccelMethod" "uxa"<br></br>EndSection`</div>Premere contemporaneamente i stati **CTRL** + **O** per salvare il file appena creato, confermate col tasto **S** ed infine **CTRL** + **X** per uscire da **Nano**.  
Non vi resta che riavviare il sistema e controllare se la profondità di colore è di **[24 depth](http://it.wikipedia.org/wiki/Profondit%C3%A0_di_colore#Truecolor_.2824_bit.29 "Profondità di colore")**.