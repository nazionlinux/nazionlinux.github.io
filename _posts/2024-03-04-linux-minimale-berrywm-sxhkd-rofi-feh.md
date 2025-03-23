---
id: 1613
title: 'Linux minimale: Berrywm Sxhkd Rofi Feh'
date: '2024-03-04T09:26:00+02:00'
author: NazionLinux
layout: post
guid: 'https://www.nazionlinux.com/?p=1613'
permalink: /linux-minimale-berrywm-sxhkd-rofi-feh/
image: /wp-content/uploads/2014/10/15432309271_6b731c38b4_o.jpg
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Sistema
    - 'Void Linux'
    - X11
tags:
    - Berrywm
    - Feh
    - Rofi
    - Sxhkd
---

Come gestore delle finestre abbiamo scelto **[Berrywm](https://berrywm.org)** che insieme a **[Sxhkd](https://github.com/baskerville/sxhkd)** ci permette di avere un ambiente grafico molto minimale, ma con la possibilità, tramite la combinazione dei tasti, di personalizzare il nostro sistema.

A completare [**Rofi**](https://github.com/davatorium/rofi) il lanciatore di programmi e [**Feh**](https://feh.finalrewind.org/) per avere un immagine di sfondo oltre ad essere un visualizzatore di immagini.

Iniziamo con l’installare i programmi **berrywm** **sxhkd** **rofi** **feh** col comando:

<div class="wp-terminal">`xbps-install -S berrywm sxhkd rofi feh`</div>Adesso bisognerà creare una cartella **berry** all’interno della cartella utente **.config** con il comando

<div class="wp-terminal">`mkdir -p ~/.config/berry && cd ~/.config/berry`</div>e copiare lì questi due file:

<div class="wp-terminal">`wget -c https://raw.githubusercontent.com/JLErvin/berry/master/examples/autostart`</div>all’interno del quale troverete i colori delle finestre e alcune impostazioni di **berry**

<div class="wp-terminal">`wget -c https://raw.githubusercontent.com/JLErvin/berry/master/examples/sxhkdrc`</div>potete utilizzare anche **curl** o un altro programma per scaricare.

Il file **sxhkdrc** è il file di configurazione delle combinazione dei tasti di **sxhkd** aprendolo con un programma per modificare i file di testo troverete tutte le combinazioni che vi permettono di utilizzare **berrywm** e di avviare i vari programmi.

Noi abbiamo aggiunto nel file **sxhkdrc** le seguenti righe che non fanno altro che aprire il menu di **rofi** con tutta la lista dei programmi

> super + F3
> 
> rofi -show drun -show-icons
> 
> <cite>inserited</cite>

premendo la combinazione di tasti **Super** e **F3** si aprirà rofi in modalità menu a discesa.

In questo file potete inserire le combinazioni dei tasti che utilizzerete per gestire le finestre e avviare i programmi.

Per finire andiamo ad inserire nel file **.xinitrc**

<div class="wp-terminal">`nano ~/.xinitrc`</div>le seguenti righe

> \#!/bin/bash
> 
> \#
> 
> \# ~/.xinitrc
> 
> sxhkd -c $HOME/.config/berry/sxhkdrc &amp;
> 
> feh –bg-scale ~/immagini/sfondo.jpg &amp;
> 
> exec berry

al posto del percorso **~/immagini/sfondo.jpg** dovrete inserire il percorso della vostra immagine che volete utilizzare come sfondo.

Editate il file **.bash\_profile**

<div class="wp-terminal">`nano ~/.bash_profile`</div> e aggiungete le seguenti righe

> ```
> if[ -z "${DISPLAY}" ]; then
>    exec startx
> fi
> ```

Vi consigliamo di visitare la pagina di configurazione di [**berrywm**](https://berrywm.org)