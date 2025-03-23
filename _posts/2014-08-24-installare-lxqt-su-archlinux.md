---
id: 1043
title: 'Installare LxQt su Archlinux'
date: '2014-08-24T02:08:19+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1043'
permalink: /installare-lxqt-su-archlinux/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Installare LxQt su Archlinux, Articolo: http://wp.me/p4ANSQ-gP'
categories:
    - 'Ambienti Grafici'
    - GNU/Linux
    - Lxqt
tags:
    - 'Arch Linux'
    - LXDE
    - Lxqt
    - nano
    - Openbox
---

[![LxQt](https://i0.wp.com/farm6.staticflickr.com/5584/15010559461_5faa25b635_o.png?resize=610%2C300 "LxQt")](http://www.flickr.com/photos/12418137@N07/15010559461/ "LxQt")

**[LxQt](http://lxqt.org/ "LxQt")** è la trasformazione del vecchio **[Lxde](http://lxde.org/ "Lxde")** basato sulle librerie **Gtk**, ha questo nuovo ambiente grafico basato sulle librerie **Qt** nonchè la fusione con un altro ambiente grafico **[Razor-qt](http://www.nazionlinux.com/archlinux-razor-qt5/ "Razor-qt")**.

**LxQt** è in fase sperimentale e per questo motivo non ancora pronto per l’utilizzo giornaliero, ma per chi vuole sperimentare è possibile installarlo tramite un deposito (repository) **[Archlinux](http://www.archlinux.it "Arch Linux")** non ufficiale.

Aprite un terminale e autentificatevi come amministratore di sistema con il comando

<div class="wp-terminal">`su`</div>adesso editate il file **pacman.conf** con il comando

<div class="wp-terminal">`nano /etc/pacman.conf`</div>alla fine del file aggiungete queste 3 righe

> \[repolxqt\]  
> SigLevel = Optional TrustAll  
> Server = http://esclapion.free.fr/lxqt/$arch/repolxqt/

salvate il file con premendo contemporaneamente la combinazione di tasi **\[ CRTL \]** + **\[ O \]** poi **\[ INVIO \]** per la conferma e **\[ CRTL \]** + **\[ X \] per uscire dal programma [Nano](http://www.nano-editor.org/ "Nano")**.

Ora non vi resta che installarvi **LxQt** con il comando

<div class="wp-terminal">`pacman -Sy lxqt-desktop-git openbox`</div>và ricordato che **LxQt** utilizza **[Openbox](http://openbox.org/ "Openbox")** come gestore delle finestre.

Potete inoltre installarvi **PCManFM-Qt** che è il gestore dei files di **LxQt**, **Qt-LXimage** che è il gestore delle immagini

<div class="wp-terminal">`pacman -S pcmanfm-qt-git lximage-qt-git`</div>ma soprattutto **Sddm** il gestore delle sessioni

<div class="wp-terminal">`pacman -S sddm`</div>e renderlo predefinito, per chi è passato a **Systemd**, con il comando

<div class="wp-terminal">`systemctl enable sddm`</div>