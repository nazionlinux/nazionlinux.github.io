---
id: 728
title: 'Scaricare torrent con Aria2'
date: '2013-11-11T10:30:57+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=728'
permalink: /scaricare-torrent-con-aria2/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Scaricare torrent con Aria2, Articolo: http://www.nazionlinux.com/?p=728'
image: /wp-content/uploads/2014/01/aria2.png
categories:
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Mint
    - Sistema
    - Slackware
    - Terminale
    - Ubuntu
tags:
    - aria2
    - Torrent
---

#### Scaricare torrent con Aria2

Prima di tutto aprire un terminale e lanciate il comando

<div class="wp-terminal">`su`</div>inserite la password d’amministratore di sistema (**root**) ed installatevi **aria2**

per **Debian** e derivate (**Ubuntu**, **Linux Mint**…)

<div class="wp-terminal">`apt-get install aria2`</div>per **ArchLinux** e derivate (**[Chakra](http://chakra-project.org "Chakra")**, **[ArchBang](http://www.archbang.org/ "ArchBang")**…)

<div class="wp-terminal">`pacman -S aria2`</div>per **Fedora** e derivate (**[CentOs](http://www.centos.org/ "CentOs")**)

<div class="wp-terminal">`yum install aria2`</div>terminata l’installazione potete uscire dal teminale d’amministratore con il comando

<div class="wp-terminal">`exit`</div>adesso potete iniziare a scaricare con **aria2** i vostri files torrent.  
Per capire meglio facciamo un esempio pratico.  
Lanciando questo comando

<div class="wp-terminal">`aria2c http://www.nazionlinux.com/wp-content/uploads/2013/01/linux-wallpaper.torrent`</div>andiamo a scaricare il file **[linux-wallpaper.torrent](http://www.nazionlinux.com/wp-content/uploads/2013/01/linux wallpaper.torrent "Linux Wallpaper")** dal sito sul nostro computer ed **aria2c** inizierà lo scaricamento in modo automatico.

Se invece il file, una volta scaricato, non dovesse partire in automatico bisognerà lanciare questo comando

<div class="wp-terminal">`aria2c -T linux-wallpaper.torrent`</div>l’opzione **-T** indica al programma che stiamo caricando un file **.torrent**

Un opzione utile è quella di vedere la percentuale del file che si sta scaricando, per farlo basta aggiungere **–download-result=full** al comando precedente

<div class="wp-terminal">`aria2c --download-result=full -T linux-wallpaper.torrent`</div>Nel nostro esempio stiamo scaricando 4 sfondi del sito www.nazionlinux.com, possiamo anche scaricare solo 2 dei quattro sfondi.  
Lanciando aria2 con l’opzione **-S**

<div class="wp-terminal">`aria2c -S linux-wallpaper.torrent`</div>possiamo visualizzare il contenuto del file **[linux-wallpaper.torrent](http://www.nazionlinux.com/wp-content/uploads/2013/01/linux wallpaper.torrent "Linux Wallpaper")** ossia ottenere un risultato simile

<div class="wp-terminal">`>>> Visualizzazione contenuti del file 'linux-wallpaper.torrent'...<br></br>*** BitTorrent File Information ***<br></br>Creation Date: Sun, 10 Nov 2013 18:43:24 GMT<br></br>Created By: uTorrent/3320<br></br>Mode: multi<br></br>Announce:<br></br>udp://tracker.openbittorrent.com:80/announce<br></br>udp://tracker.publicbt.com:80/announce<br></br>udp://tracker.ccc.de:80/announce<br></br>Info Hash: e5fc7bd555bfa563a8ffe1b9928d1b1773775e17<br></br>Piece Length: 16KiB<br></br>The Number of Pieces: 86<br></br>Total Length: 1.3MiB (1,406,068)<br></br>Name: linux wallpaper<br></br>Magnet URI: magnet:?xt=urn:btih:E5FC7BD555BFA563A8FFE1B9928D1B1773775E17&dn=linux%20wallpaper&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.publicbt.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.ccc.de%3A80%2Fannounce<br></br>Files:<br></br>idx|path/length<br></br>===+===========================================================<br></br>1|./linux wallpaper/debian1920x1200.jpg<br></br>|846KiB (866,452)<br></br>---+-----------------------------------------------------------<br></br>2|./linux wallpaper/lubuntu1600x1200.png<br></br>|369KiB (377,928)<br></br>---+-----------------------------------------------------------<br></br>3|./linux wallpaper/kubuntu_lux_wallpaper_by_hyarmenadan.jpg<br></br>|96KiB (98,766)<br></br>---+-----------------------------------------------------------<br></br>4|./linux wallpaper/archlinux.jpg<br></br>|61KiB (62,922)<br></br>---+-----------------------------------------------------------`</div>Come potete vedere all’interno ci sono i files (quelli di colore <span style="color: #00ff00;">verde</span>) di nome

<div class="wp-terminal">`===+===========================================================<br></br><strong style="color: #ff0000;">1</strong>|./linux wallpaper/<strong style="color: #00ff00;">debian1920x1200.jpg</strong><br></br>|846KiB (866,452)<br></br>---+-----------------------------------------------------------<br></br><strong style="color: #ff0000;">2</strong>|./linux wallpaper/<strong style="color: #00ff00;">lubuntu1600x1200.png</strong><br></br>|369KiB (377,928)<br></br>---+-----------------------------------------------------------<br></br><strong style="color: #ff0000;">3</strong>|./linux wallpaper/<strong style="color: #00ff00;">kubuntu_lux_wallpaper_by_hyarmenadan.jpg</strong><br></br>|96KiB (98,766)<br></br>---+-----------------------------------------------------------<br></br><strong style="color: #ff0000;">4</strong>|./linux wallpaper/<strong style="color: #00ff00;">archlinux.jpg</strong><br></br>|61KiB (62,922)<br></br>---+-----------------------------------------------------------`</div>ognuno abbinato ad un numero (quelli scritti in <span style="color: #ff0000;">rosso</span>).  
A questo punto per scaricare ad esempio solo i primi 2 files, cioè **debian1920x1200.jpg** e **lubuntu1600x1200.png** dobbiamo lanciare aria2 con l’opzione **– -select-file=**

<div class="wp-terminal">`aria2c --select-file=1,2 linux-wallpaper.torrent`</div>dove **1,2** stà ad indicare il numero corrispondente hai files che vogliamo scaricare.

<div class="wp-terminal">`aria2c --enable-dht=true "magnet:?xt=urn:btih:e7049b56395adec28b50e0e6f4849fdd311eec75&dn=archlinux-2019.04.01-x86_64.iso&tr=udp://tracker.archlinux.org:6969&tr=http://tracker.archlinux.org:6969/announce"`</div>