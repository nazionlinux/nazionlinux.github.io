---
id: 665
title: 'Gala di Elementary OS in Xfce'
date: '2013-10-10T16:04:50+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=665'
permalink: /gala-di-elementary-os-in-xfce/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Gala di ElementaryOS in Xfce, Articolo: http://www.nazionlinux.com/?p=665'
categories:
    - 'Ambienti Grafici'
    - Distribuzioni
    - GNU/Linux
    - Mint
    - Ubuntu
    - Xfce
tags:
    - ElementaryOS
    - Gala
    - Xfwm
    - Xubuntu
---

[![elementary](https://i0.wp.com/farm6.staticflickr.com/5522/12124773133_f076173519_o.png?resize=640%2C300 "elementary")](http://www.flickr.com/photos/12418137@N07/12124773133/ "elementary")

**Gala**, una versione modificata di **Mutter**, è il gestore delle finestre di **[Elementary OS](http://elementaryos.org/ "ElementaryOS")**.  
Come già scritto nella precedente guida **[Xfwm aggiornato per Xfce](http://www.nazionlinux.com/xfwm-aggiornato-per-xfce/ "Xfwm aggiornato per Xfce")** il gestore delle finestre predefinito di **[Xfce](http://www.xfce.org "Xfce")** può essere sostituito.

Prenderemo come esempio la distribuzione **[Xubuntu](http://xubuntu.org/ "Xubuntu")** già utilizzata nella precedente guida.

Per prima cosa aggiungere il deposito dei pacchetti PPA (Personal Package Archive).

<div class="wp-terminal">`sudo apt-add-repository ppa:elementary-os/daily`</div>il comando successivo aggiorna i pacchetti

<div class="wp-terminal">`sudo apt-get update`</div>ed installiamo i pacchetti **gala** e **dconf-tools**

<div class="wp-terminal">`sudo apt-get install gala dconf-tools`</div>prima di confermare quest’ultimo comando con il tasto **S** leggete bene quali pacchetti verranno rimossi

Consiglio di usare **gala** al posto di **xfwm4** dando il comando

<div class="wp-terminal">`gala --replace`</div>per vedere se ci piace e magari renderlo definitivo con le seguente procedura.

Da terminale utente copiatevi il file **xfce4-session.xml** con

<div class="wp-terminal">`cp /etc/xdg/xfce4/xfconf/xfce-perchannel-xml/xfce4-session.xml ~/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-session.xml`</div>editate il file **xfce4-session.xml**

<div class="wp-terminal">`nano ~/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-session.xml`</div>e sostituite **xfwm4**-session con **gala**-session