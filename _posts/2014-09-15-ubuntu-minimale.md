---
id: 1096
title: 'Ubuntu minimale'
date: '2014-09-15T13:00:20+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1096'
permalink: /ubuntu-minimale/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Ubuntu minimale, Articolo: http://wp.me/p4ANSQ-hG'
categories:
    - 'Ambienti Grafici'
    - Distribuzioni
    - GNU/Linux
    - Kde
    - Lxde
    - Ubuntu
    - Unity
    - Xfce
tags:
    - Kde
    - LXDE
    - Ubuntu
    - Unity
    - Xfce
---

[![Bill raccomanda Ubuntu](https://i0.wp.com/farm6.staticflickr.com/5572/15054798027_665dd2b5ba_o.jpg?resize=610%2C300 "Bill raccomanda Ubuntu")](http://www.flickr.com/photos/12418137@N07/15054798027/ "Bill raccomanda Ubuntu")

**[Ubuntu](http://www.ubuntu-it.org/ "Ubuntu Italia")**, terminata la fase d’installazione, noterete che molte applicazioni sono già presenti.

Questo può essere molto vantaggioso se le applicazioni installate sono quelle che utilizzate, in caso contrario le dovrete disinstallare a mano.  
Lo stesso vale per gli ambienti grafici dove molte volte vengono intallate cose che poi non utlizziamo.

Per avere un installazione minimale del vostro ambiente grafico preferito in **Ubuntu** dovete eseguire l’installazione utilizzando la ISO **Ubuntu Server**.

Ora passiamo alle procedure per installare un ambiente grafico minimale.

### Unity minimale

Aprite un terminale e lanciate il comando

<div class="wp-terminal">`sudo apt-get install --no-install-recommends ubuntu-desktop`</div>per vedere i pacchetti che verranno installati

<div class="wp-terminal">`apt-cache show ubuntu-desktop | grep "Depends"`</div>per vedere i pacchetti che non verranno installati

<div class="wp-terminal">`apt-cache show ubuntu-desktop | grep "Recommends"`</div>### Kde minimale

La stessa procedura vale per **Kde** installando però ilmeta-pacchetto **kubuntu-desktop**

<div class="wp-terminal">`sudo apt-get install --no-install-recommends kubuntu-desktop`</div>### Xfce minimale

In **Xfce** installeremo invece il meta-pacchetto **xubuntu-desktop**

<div class="wp-terminal">`sudo apt-get install --no-install-recommends xubuntu-desktop`</div>### Lxde minimale

In **Lxde** il meta-pacchetto sarà **lubuntu-desktop**

<div class="wp-terminal">`sudo apt-get install lubuntu-desktop`</div>Il pacchetto **lubuntu-desktop** non installa ulteriori pacchetti raccomandati per questo motivo **–no-install-recommends** andrà omesso.