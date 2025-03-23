---
id: 1113
title: 'Xorg minimale'
date: '2014-10-04T11:11:47+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1113'
permalink: /xorg-minimale/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Xorg minimale, Articolo: http://wp.me/p4ANSQ-hX'
image: /wp-content/uploads/2014/10/15432309271_6b731c38b4_o.jpg
categories:
    - 'Ambienti Grafici'
    - Cinnamon
    - Debian
    - Distribuzioni
    - Enlightenment
    - Gnome
    - GNU/Linux
    - Kde
    - Lxde
    - Lxqt
    - Mate
    - Mint
    - Ubuntu
    - Unity
    - X11
    - Xfce
tags:
    - Debian
    - 'Elementary OS'
    - ElementaryOS
    - i915
    - Kubuntu
    - 'Linux Mint'
    - LinuxMint
    - Ubuntu
    - X11
    - xorg
    - Xubuntu
---

[![xorg](https://i0.wp.com/farm4.staticflickr.com/3931/15432309271_6b731c38b4_o.jpg?resize=610%2C300 "xorg")](http://www.flickr.com/photos/12418137@N07/15432309271/ "xorg")

Dopo avervi descritto come installare **[Ubuntu minimale](http://www.nazionlinux.com/ubuntu-minimale/ "Ubuntu minimale")** vi descriveremo come installare **Xorg minimale**.

Questa procedura è stata testata su una **Debian Wheezy** ma dovrebbe andar bene per tutte le sue derivate tipo **[Ubuntu](http://www.ubuntu-it.org/ "Ubuntu Italia")**, **[LinuxMint](http://www.linuxmint.com/ "Linux Mint")**, **[Elementary Os](http://www.elementaryos.org "Elementary Os")**…

Apriamo un terminale per chi utilizza **[Xfce](http://www.xfce.org/?lang=it "Xfce")** e non sà come fare basta leggere **[Xfce aprire un terminale](http://www.nazionlinux.com/xfce-aprire-terminale/ "Xfce aprire un terminale")**.

Ora ci dobbiamo autentificare come amministratore di sistema.  
Lo possiamo fare in due modi o con il comando **su** o con il comando **sudo -s** la differenza stà nel fatto che nella vostra distribuzione sia abilitato o no l’utente **root**.  
Per chi utilizza **[Debian](http://www.debian.org "Debian")** la maggior parte delle volte dovrà lanciare il comando

<div class="wp-terminal">`su`</div>ed inserire la password d’amministratore di sistema.  
Altre distribuzioni invece hanno disabilitato l’utente root ed il primo utente che viene creato è anche amministratore di sistema ed in questo caso bisogna lanciare il comando

<div class="wp-terminal">`sudo -s`</div>ed inserire la password dell’utente che coincide con la password d’amministratore di sistema.

Iniziamo l’installazione di **Xorg** la prima cosa da fare è aggiornare il database dei pacchetti con il comando

<div class="wp-terminal">`apt-get update`</div>buona norma sarebbe anche aggiornare il sistema con

<div class="wp-terminal">`apt-get upgrade`</div>terminata l’installazione dei pacchetti iniziamo l’installazione di **Xorg** con questo comando

<div class="wp-terminal">`apt-get install --no-install-recommends xserver-xorg-core xserver-xorg-input-all xserver-xorg-video-fbdev xserver-xorg-video-vesa`</div>è possibile sostituire **xserver-xorg-video-vesa** con il driver della vostra scheda video per sapere quale scheda video è montata lanciate

<div class="wp-terminal">`lspci | grep VGA`</div>e controllare il risultato.  
Nel nostro caso installeremo il pacchetto **xserver-xorg-video-ati** lanciando

<div class="wp-terminal">`apt-get install xserver-xorg-video-ati`</div>Qui ci fermiamo per le varie configurazioni specifiche purtroppo bisognerà cercare nei forum o cercare su internet.  
Per chi avesse una scheda Intel i915 possiamo solo consigliarvi di leggere **[Profondità di colore su schede Intel i915  ](http://www.nazionlinux.com/profondita-di-colore-su-schede-intel-i915/ "Profondità di colore su schede Intel i915")**.