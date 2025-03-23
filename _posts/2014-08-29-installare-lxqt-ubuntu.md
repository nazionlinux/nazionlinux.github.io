---
id: 1066
title: 'Installare LxQt su Ubuntu'
date: '2014-08-29T11:00:25+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1066'
permalink: /installare-lxqt-ubuntu/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Installare LxQt su Ubuntu, Articolo: http://wp.me/p4ANSQ-hc'
image: /wp-content/uploads/2014/08/15010559461_5faa25b635_o.png
categories:
    - 'Ambienti Grafici'
    - Distribuzioni
    - GNU/Linux
    - Lxde
    - Lxqt
    - Openbox
    - Ubuntu
tags:
    - Lxqt
    - Openbox
    - Ubuntu
---

[![LxQt](https://i0.wp.com/farm6.staticflickr.com/5584/15010559461_5faa25b635_o.png?resize=610%2C300 "LxQt")](http://www.flickr.com/photos/12418137@N07/15010559461/ "LxQt")

**[LxQt](http://lxqt.org/ "LxQt")** come scritto nel precedente articolo **[Installare LxQt su Archlinux](http://www.nazionlinux.com/installare-lxqt-su-archlinux/ "Installare LxQt su Archlinux")** è ancora in fase sperimentale, ma per chi lo volesse provare su **Ubuntu** esiste un **PPA** (Personal Package Archive) apposito.

Come sempre la prima operazione da compiere è avviare **Ubuntu** ed aprire una finestra del terminale e lanciare il comando

<div class="wp-terminal">`sudo add-apt-repository ppa:lubuntu-dev/lubuntu-daily`</div>ogni volta che viene eseguito il comando **sudo** vi verrà richiesta la password.  
Ora lanciate quest’ altro comando

<div class="wp-terminal">`sudo add-apt-repository ppa:gilir/q-project`</div>terminata la questa fase bisognerà aggiornare il database dei pacchetti

<div class="wp-terminal">`sudo apt-get update`</div>ora bisogna aggiornare il sistema con il comando

<div class="wp-terminal">`sudo apt-get upgrade`</div>infine per installare **LxQt** lanciare

<div class="wp-terminal">`sudo apt-get install lxqt-metapackage lxqt-panel openbox`</div>da notare che verrà installato come gestore delle finestre **[Openbox](http://openbox.org/ "Openbox")**.

**lxqt-metapackage** è un metapacchetto che installa **LxQt** mentre **lxqt-panel** è solo il pannello contente il menù delle applicazioni e le varie estensioni di **LxQt**.