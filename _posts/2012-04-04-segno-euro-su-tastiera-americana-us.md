---
id: 242
title: 'Segno euro (&euro;) su tastiera americana (us)'
date: '2012-04-04T01:38:08+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=242'
permalink: /segno-euro-su-tastiera-americana-us/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Segno euro (&euro;) su tastiera americana (us), Articolo: http://www.nazionlinux.com/?p=242'
categories:
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Mint
    - Sistema
    - Terminale
    - Ubuntu
    - X11
tags:
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Mint
    - Sistema
    - Terminale
    - Ubuntu
    - X11
---

Oggi ho sostituito la mia tastiera del portatile con un nuova.  
Purtroppo la tastiera in italiano era troppo costosa e quindi ho dovuto ordinare una tastiera con la disposizione dei tasti americana.  
Mi sono ritrovato con l’impossibilità di digitare il carattere **€**.  
Per risolvere questa situazione basta editare il file **/etc/X11/xorg.conf.d/10-evdev.conf**.  
Aprire un terminale, **Xterm** nel mio caso uso [Sakura](http://www.pleyades.net/david/projects/sakura "Sakura"), entrare come amministratore, quindi lanciare il comando:

<div class="wp-terminal">`su`</div>*inserire la password di amministratore* ed editare il seguente file:

<div class="wp-terminal">`/etc/X11/xorg.conf.d/10-evdev.conf`</div>aggiungete la seguente riga:

> Option “XkbVariant” “altgr-intl”

nella sezione keyboard:

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
> Option “XkbVariant” “altgr-intl”  
> EndSection

salvate il file premendo contemporaneamente i tasti **CTTRL+O** poi premete il tasto **S** per confermare ed infine premete contemporaneamente i tasti **CRTL+X** per chiudere **nano** e riavviate il sistema con il comando:

<div class="wp-terminal">`init 6`</div>se invece avete la tastiera con la disposizione in italiano, ma &amp;egrave impostata con la disposizione americana, seguite questa guida [http://www.nazionlinux.com/2011/05/31/xorg-tastiera-in-italiano/](http://www.nazionlinux.com/2011/05/31/xorg-tastiera-in-italiano/ "Xorg tastiera in italiano")