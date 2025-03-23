---
id: 509
title: 'Colorare Pacman e il terminale'
date: '2013-05-15T12:25:29+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=509'
permalink: /colorare-pacman-e-il-terminale/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Colorare Pacman e il terminale, Articolo: http://www.nazionlinux.com/?p=509'
image: /wp-content/uploads/2013/05/pacman.gif
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Distribuzioni
    - Enlightenment
    - Gnome
    - GNU/Linux
    - Kde
    - Openbox
    - Sistema
    - Terminale
    - Xfce
tags:
    - pacman
    - Terminale
---

#### Colorare Pacman e il terminale

Se siete stufi di avere il vostro terminale bicolore e volete qualcosa di più colorato seguite la nostra guida.  
Per prima cosa, nella votra cartella utente, aprire il file **.bashrc** con un qualsiasi programma per la modifica dei files di testo, tipo **scite**, **gedit**, **mousepad**, **krite**, **libreoffice**… nel nostro esempio utilizzeremo il programma **Nano** in riga di comando, di modo che tutti gli utenti **GNU/Linux** con i più disparati ambienti grafici non devono installarsi i suddetti programmi.  
Da terminale digitare:

<div class="wp-terminal">`nano ~/.bashrc`</div>elminare o commentare la riga:

> PS1='\[\\u@\\h \\W\]\\$ ‘

ed inserire:

> PS1=’\\\[\\e\[1;31m\\\]\\u\\\[\\e\[m\\\]@\\\[\\e\[1;32m\\\]\\h\\\[\\e\[m\\\] \\\[\\e\[1;34m\\\]\\w\\\[\\e\[m\\\] \\\[\\e\[0;33m\\\]\\$\\\[\\e\[m\\\] ‘

salvare il file e riaprire il terminale per vedere le modifiche.  
Potete anche aggiungere:

> alias ls=’ls –color=auto’  
> alias grep=”grep –color=auto”  
> export GREP\_COLOR=’0;31′

provate per esempio i comandi:

<div class="wp-terminal">`ls -a`</div>e per **grep**

<div class="wp-terminal">`ls /usr/lib | grep "xml"`</div>Per avere **Pacman** colorato aprire un teminale da amministratore:

<div class="wp-terminal">`nano /etc/pacman.conf`</div>e decommentare **\#Color**

> \# Misc options  
> \#UseSyslog  
> <span style="color: #ff0000;">Color</span>  
> \#TotalDownload  
> CheckSpace  
> \#VerbosePkgLists

salvate il file e provate a fare una ricerca dei pacchetti

<div class="wp-terminal">`pacman -Ss pacman`</div>