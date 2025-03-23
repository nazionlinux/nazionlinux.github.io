---
id: 1052
title: 'Installare MKVToolnix su GNU/Linux'
date: '2014-08-26T15:08:03+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1052'
permalink: /installare-mkvtoolnix-su-gnu-linux/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Installare MKVToolnix su GNU/Linux, Articolo: http://wp.me/p4ANSQ-gY'
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Cinnamon
    - Debian
    - Distribuzioni
    - Enlightenment
    - Fedora
    - Gnome
    - GNU/Linux
    - Kde
    - Lxde
    - Lxqt
    - Mate
    - Mint
    - Openbox
    - Sistema
    - Terminale
    - Ubuntu
    - Xfce
tags:
    - 'Arch Linux'
    - CentOS
    - Debian
    - 'Elementary OS'
    - Fedora
    - gpg
    - 'Linux Mint'
    - Matroska
    - mkv
    - MKVToolnix
    - 'Red Hat'
    - Ubuntu
---

[![mkvtoolnix](https://i0.wp.com/farm6.staticflickr.com/5591/14855957237_9bb9ca70f2_o.jpg?resize=610%2C300 "mkvtoolnix")](http://www.flickr.com/photos/12418137@N07/14855957237/ "mkvtoolnix")

**[MKVToolnix](https://www.bunkus.org/videotools/mkvtoolnix/ "MKVToolnix/")** è un insieme di programmi che servono per lavorare sui files video **.mkv**.

**MKVToolnix** puoi modificare, dividere, sincronizzare l’audio con il video dei files .mkv (**[Matroska](http://www.matroska.org/ "Matroska")**).

**Matroska** è uno standard multimediale a codice aperto (**[open source](http://it.wikipedia.org/wiki/Open_source "Open source")**) composto da diversi tipi di files ed estensioni:

- .MKV files (matroska video)
- .MKA files (matroska audio)
- .MKS files (sottotitoli)
- .MK3D files (3D video)

è anche la base dei files .webm (WebM).

**MKVToolnix** è composto da diverse applicazioni

- **mkvmerge** serve per convertire in files Matroska da altri formati
- **mkvinfo** è uno strumento per reperire diverse informazioni dai un file Matroska
- **mkvextract** uno strumento che estrae tracce dai file Matroska in altri formati

andiamolo ad installare nella nostra distribuzione.

### Arch Linux

Aprire un terminale d’amministratore e laciare il comando

<div class="wp-terminal">`pacman -S mkvtoolnix`</div>### Fedora

Aprire un terminale e lanciare il comando

<div class="wp-terminal">`sudo rpm -Uhv https://www.bunkus.org/videotools/mkvtoolnix/<strong style="color: #ff0000;">fedora</strong>/bunkus-org-repo-1-4.noarch.rpm`</div>per **CentOS** e **RedHat Enterprise Linux 6.x/7.x** sostituire **fedora** con **centos**

per installare **MKVToolnix** lanciare il comando

<div class="wp-terminal">`sudo yum install mkvtoolnix`</div>### Debian e derivate

Per installare **MKVToolnix** su **[Debian](http://www.nazionlinux.com/tanti-auguri-debian/ "Tanti auguri Debian")** e derivate (**Ubuntu**, **Linux Mint**, **Elementary OS** …) basta aprire un terminale da **semplice utente** e lanciare il doppio comando

<div class="wp-terminal">`wget -q -O - https://www.bunkus.org/gpg-pub-moritzbunkus.txt | sudo apt-key add -`</div>il primo comando

> wget -q -O – https://www.bunkus.org/gpg-pub-moritzbunkus.txt

vi scarica la chiave gpg (**[GNU Privacy Guard](http://it.wikipedia.org/wiki/GNU_Privacy_Guard "GNU Privacy Guard")**) dal sito www.bunkus.org mentre il secondo comando

> sudo apt-key add –

vi aggiungerà la chiave gpg che vi permetterà di installarvi **MKVToolnix**.

Ora bisogna fare **\*\*\* ATTENZIONE \*\*\*** ad aggiungere i depositi giusti.

### Debian Wheezy

<div class="wp-terminal">`sudo sh -c 'echo "deb http://www.bunkus.org/debian/wheezy/ ./" >> /etc/apt/sources.list'`</div>### Ubuntu 14.04 “Trusty Tahr”

<div class="wp-terminal">`sudo sh -c 'echo "deb http://www.bunkus.org/ubuntu/<strong style="color: #ff0000;">trusty</strong>/ ./" >> /etc/apt/sources.list'`</div>Ubuntu 13.10 “Saucy Salamander” sostituire **trusty** con **saucy**  
Ubuntu 13.04 “Raring Ringtail” sostituire **trusty** con **raring**  
Ubuntu 12.04 “Precise Pangolin” sostituire **trusty** con **precise**

per finire bisogna prima aggiornare il database dei pacchetti con il comando

<div class="wp-terminal">`sudo apt-get update`</div>poi installare **MKVToolnix** con il comando

<div class="wp-terminal">`sudo apt-get install mkvtoolnix mkvtoolnix-gui`</div>