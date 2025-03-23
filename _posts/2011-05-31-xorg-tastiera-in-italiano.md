---
id: 107
title: 'Xorg tastiera in italiano'
date: '2011-05-31T11:28:16+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=107'
permalink: /xorg-tastiera-in-italiano/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Xorg tastiera in italiano, Articolo: http://www.nazionlinux.com/?p=107'
image: /wp-content/uploads/2014/10/15432309271_6b731c38b4_o.jpg
categories:
    - GNU/Linux
tags:
    - GNU/Linux
    - Sistema
    - X11
---

#### Xorg configurare la tastiera in italiano

Con il nuovo **Xorg** i files di configurazione che ci interessano si trovavo nella cartella **/etc/X11/xorg.conf.d/** nello specifico il file **/etc/X11/xorg.conf.d/10-evdev.conf**  
quindi aprite un terminale da root e editate il file:

<div class="wp-terminal">nano /etc/X11/xorg.conf.d/10-evdev.conf  
</div>potete editare il file con un editore grafico tipo **gedit** ([Gnome](http://www.gnome.org "Gnome")) **kate** ([Kde](http://www.kde.org "KDE")) **scite**…

aggiungete le seguenti righe:

> Option “XkbLayout” “it” # tastiera italiana  
> Option “XkbOptions” “terminate:ctrl\_alt\_bksp” # ctrl+alt+canc

nella sezione **keyboard**:

> Section “InputClass”  
> Identifier “evdev keyboard catchall”  
> MatchIsKeyboard “on”  
> MatchDevicePath “/dev/input/event\*”  
> Driver “evdev”  
> EndSection

ottenendo:

> Section “InputClass”  
> Identifier “evdev keyboard catchall”  
> MatchIsKeyboard “on”  
> MatchDevicePath “/dev/input/event\*”  
> Driver “evdev”  
> Option “XkbLayout” “it” # tastiera italiana  
> Option “XkbOptions” “terminate:ctrl\_alt\_bksp” # ctrl+alt+canc  
> EndSection

salvate il file e se volete riavviate il sistema.