---
id: 945
title: 'Migliorare i carettari con Infinality'
date: '2014-04-01T18:44:07+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=945'
permalink: /migliorare-i-carettari-con-infinality/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Migliorare i carettari con Infinality, Articolo: http://www.nazionlinux.com/?p=945'
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
    - Mate
    - Mint
    - Openbox
    - Slackware
    - Ubuntu
    - Xfce
tags:
    - font
    - infinality
---

[![infinality](https://i0.wp.com/farm8.staticflickr.com/7376/13563709203_17e995a5d1_o.jpg?resize=610%2C300 "infinality")](http://www.flickr.com/photos/12418137@N07/13563709203/ "infinality")

Il progetto **[Infinality](http://www.infinality.net "Infinality")** è un insieme di caratteri(fonts) **Freetype** modificati appositamente per rendere più leggibile il testo nelle distrbuzioni **GNU/Linux**.  
Per installare questi fonts le procedure sono molto semplici

### Archlinux

Chi utilizza Archlinux dovrà aggiungere i depositi **infinality-bundle**, **infinality-bundle-multilib** (per i sistemi a 64-bit) e **infinality-bundle-fonts** nel file **/etc/pacman.conf** aprite un terminale d’amministratore ed editate il file **/etc/pacman.conf**

<div class="wp-terminal">`nano /etc/pacman.conf`</div>ed aggiungete queste righe

<div class="wp-terminal">`[infinality-bundle]<br></br>Server = http://bohoomil.com/repo/$arch<p>[infinality-bundle-multilib]<br></br>Server = http://bohoomil.com/repo/multilib/$arch</p><p>[infinality-bundle-fonts]<br></br>Server = http://bohoomil.com/repo/fonts</p>`</div>salvate il file appena modificato e lanciate il comando

<div class="wp-terminal">`pacman -Syu`</div>per aggiornare i pacchetti, una volta teminato di aggiornare i pacchetti installate

<div class="wp-terminal">`pacman -S infinality-bundle ibfonts-meta-extended`</div>per i sistemi a **64bit** installatevi anche il pacchetto **infinality-bundle-multilib**

<div class="wp-terminal">`pacman -S infinality-bundle-multilib`</div>Rispondete **Si** se vi viene richiesto di sostituire **freetype2** e riavviate la macchina.

Prima di eseguire questa operazione vi consiglio di dare una letta a **[https://wiki.archlinux.org/index.php/Font\_Configuration\_%28Italiano%29#Infinality  ](https://wiki.archlinux.org/index.php/Font_Configuration_%28Italiano%29#Infinality "Infinality")**

### Fedora

Aprite un teminale d’amministratore e lanciate il comando

<div class="wp-terminal">`rpm -Uvh http://www.infinality.net/fedora/linux/infinality-repo-1.0-1.noarch.rpm`</div>una volta teminato installatevi i pacchetti **freetype-infinality** e **fontconfig-infinality** con il comando

<div class="wp-terminal">`yum install freetype-infinality fontconfig-infinality`</div>ora non vi resta che riavviare il computer.

### Debian

In **Debian** l’operazione risulta più complessa prima di tutto controllate di avere installato il comando **sudo** se è presente nel vostro sistema basta aprire un semplice treminale e lanciare i camnadi concatenati

<div class="wp-terminal">`echo "deb http://ppa.launchpad.net/no1wantdthisname/ppa/ubuntu raring main" | sudo tee /etc/apt/sources.list.d/infinality.list`</div>e di seguito un altro doppio comando

<div class="wp-terminal">`echo "deb-src http://ppa.launchpad.net/no1wantdthisname/ppa/ubuntu raring main" | sudo tee -a /etc/apt/sources.list.d/infinality.list`</div>poi da un terminale d’amministratore lanciare il comando per acquisire la chiave pubblica

<div class="wp-terminal">`apt-key adv --keyserver keyserver.ubuntu.com --recv-keys E985B27B`</div>e sempre da amminnistratore

<div class="wp-terminal">`sudo apt-get update`</div>che aggiornerà il database dei pacchetti e  
apt-get upgrade

che aggiornerà il sistema per ultimo installatevi il pacchetto **fontconfig-infinality** con il comando

<div class="wp-terminal">`apt-get install fontconfig-infinality`</div>ora dovrete configurare **Infinality** lanciate sempre da amministratore

<div class="wp-terminal">`bash /etc/fonts/infinality/infctl.sh setstyle`</div>e scegliete il vostro stile preferito.

### Slackware

Per gli utenti Slackware vi consiglio di visitare questo sito **[http://someslack.wordpress.com/infinality-on-slackware/](http://someslack.wordpress.com/infinality-on-slackware/ "Infinality on Slackware")**   
Per tutte le altre distribuzioni o per chi volesse compilarsi i pacchetti potete scaricare il codice da **[https://github.com/Infinality/fontconfig-infinality/tree/master/infinality](https://github.com/Infinality/fontconfig-infinality/tree/master/infinality "Github Infinality")**