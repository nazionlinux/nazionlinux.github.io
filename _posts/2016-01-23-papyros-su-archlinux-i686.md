---
id: 1238
title: 'Papyros su Archlinux i686'
date: '2016-01-23T00:14:13+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1238'
permalink: /papyros-su-archlinux-i686/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Papyros su Archlinux i686, Articolo: http://wp.me/p4ANSQ-jY'
image: /wp-content/uploads/2016/01/papyros-laptop.png
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Distribuzioni
    - GNU/Linux
    - Papyros
    - Sistema
    - Wayland
    - X11
tags:
    - 'Arch Linux'
    - Papyros
---

![Papyros](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2016/01/papyros-laptop.png?resize=610%2C300)

**Papyros** è un ambiente grafico basato sul **material design** di **Google**.

**Papyros** si basa su le librerie **Qt5** ed è ancora in fase sperimentale.

Prima per provare **Papyros** su **Archlinux 32 bit** bastava aggiungere queste righe

> \[papyros\]  
> SigLevel = Never  
> Server = http://dash.papyros.io/repos/$repo/$arch

nel file **/etc/pacman.conf** ora bisognerà aggiungere

> \[papyros**-testing**\]  
> SigLevel = Never  
> Server = http://dash.papyros.io/repos/$repo/$arch

per farlo bisogna aprire un terminale e autentificarsi come **amministratore di sistema** col comando

<div class="wp-terminal">`su`</div>ora editiamo il file **pacman.conf** con il comando

<div class="wp-terminal">`nano /etc/pacman.conf`</div>ed aggiungiamo alla fine del file le righe sopradescritte, salviamo il tutto premendo contemporaneamente i tasti **\[ CTRL \] + \[ o \]** e usciamo da **nano** premendo i contemporaneamente i tasti **\[ CTRL \] + \[ x \]**

Prima di installare **Papyros** aggiorniamo il sistema ed i nuovi depositi col comando

<div class="wp-terminal">`pacman -Syu`</div>confermiamo in caso di aggiornamenti premendo il tasto **\[ s \]** per installarli poi installiamo **Papyros** col comando

<div class="wp-terminal">`pacman -S papyros-shell`</div>a questo punto vi potreste trovare con delle dipendenze che vanno in conflitto quindi fate molta **\*\*\* ATTENZIONE \*\*\*** prima di confermare l’installazione di tutti i pacchetti.

Se invece siete dei temerari confermate tutti i pacchetti ed una volta terminato il processo d’installazione lanciate da un terminale il comando

<div class="wp-terminal">`papyros-session`</div>e vi troverete difronte il nuovo ambiente grafico.

Vi ricordo per chi vuole provare **[Papyros](http://papyros.io/)** su sistemi a **32 bit** (i686) la dicitura è **\[papyros-testing\]** mentre sui i sistemi a **64 bit** (x86\_64) vanno bene entrambi **\[papyros\]** oppure **\[papyros-testing\]**