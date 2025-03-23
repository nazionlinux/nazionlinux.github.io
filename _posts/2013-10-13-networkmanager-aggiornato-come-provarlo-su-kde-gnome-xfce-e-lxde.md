---
id: 688
title: 'NetworkManager aggiornato come provarlo su Kde, Gnome, Xfce e Lxde'
date: '2013-10-13T09:15:02+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=688'
permalink: /networkmanager-aggiornato-come-provarlo-su-kde-gnome-xfce-e-lxde/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: NetworkManager aggiornato come provarlo su Kde, Gnome, Xfce e Lxde, Articolo: http://www.nazionlinux.com/?p=688'
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - Enlightenment
    - Gnome
    - GNU/Linux
    - Kde
    - Mint
    - Openbox
    - Slackware
    - Ubuntu
    - Xfce
tags:
    - NetworkManager
---

[![Networkmanager](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2013/10/gnome-network-manager-e1390430545351.png?resize=640%2C204)](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2013/10/gnome-network-manager-e1390430545351.png)

Non ritengo **NetworkManager** il miglior gestore delle connessioni, ma credo sia il più utilizzato.  
Con l’uscita della versione **[NetworkManager 0.9.8.8](http://ftp.acc.umu.se/pub/GNOME/sources/NetworkManager/0.9/NetworkManager-0.9.8.8.news "NetworkManager")** sono stati risolti molti problemi uno fra tutti con il codice di **BlueZ**.  
NetworkManager è stato progettato per funzionare con le librerie **Gtk** e quindi durante l’installazione, in un altro ambiente grafico, è possibile che vi siano richiesti anche molti altri pacchetti.

Le distribuzioni come **Ubuntu**, **Linux Mint**, **Fedora**, **CentOs**, **OpenSuse**, **ElementaryOs** e molte altre ancora, hanno nativamente installato il pacchetto **NetworkManager**, mentre distribuzioni come **ArchLinux**, **Debian**, **Slackware**, **Gentoo**… questo programma dovrà essere installato a seconda dell’ambiente grafico che verrà scelto.

Iniziamo con **Archlinux** apriamo un terminale e autentifichiamoci come amministratore di sistema.

<div class="wp-terminal">`su`</div>Prima di iniziare una qualsiasi operazione di installazione, consiglio sempre di lanciare il comando

<div class="wp-terminal">`pacman -Syu`</div>al termine confermiamo con il tasto **S** o il tasto **Y** se il vostro sistema è in inglese.

Adesso andiamo ad installare **network-manager-applet** il comando da lanciare è questo

<div class="wp-terminal">`pacman -S network-manager-applet`</div>Per coloro che sono passati al nuovo gestore dei processi d’avvio **[Systemd](https://wiki.archlinux.org/index.php/Systemd_%28Italiano%29 "Systemd")** trovete i comandi per attivare **NetworkManager** di seguito in questa pagina, per tutti gli altri consiglio di leggere la pagina del **[wiki](https://wiki.archlinux.org/index.php/Systemd_%28Italiano%29 "Systemd")** di **[ArchLinux](https://wiki.archlinux.org/ "Wiki ArchLinux")**; se si dovessero riscontrare problemi leggetevi questa guida **[Archlinux aggiornamenti pericolosi](http://www.nazionlinux.com/archlinux-aggionamenti-pericolosi/ "Archlinux aggionamenti pericolosi")**.

Per avviare applet **NetworkManager** basterà lanciare il comando

<div class="wp-terminal">`systemctl start NetworkManager`</div>e vedrete che comparirà una nuova icona sull vostra barra, se volete che **NetworkManager** ogni qualvolta si accede nel vostro ambiente grafico, lanciare il seguente comando per abilitarlo all’avvio

<div class="wp-terminal">`systemctl enable NetworkManager`</div>In **Debian** per gli ambienti grafici che si basano sulle librerie **Gtk** installare il pacchetto **network-manager**, ma prima di esserci autentificati come amministratore da un terminale col comando

<div class="wp-terminal">`su`</div>ed aver aggiornato il database dei pacchetti col comando

<div class="wp-terminal">`apt-get update`</div>infine installiamo

<div class="wp-terminal">`apt-get install network-manager`</div>per gli ambienti grafici tipo **Kde** che utilizzato le librerie **Qt** il pacchetto da installare sarà

<div class="wp-terminal">`apt-get install plasma-widget-networkmanagement`</div>Vi consiglio di leggere il **[wiki](https://wiki.debian.org/it/NetworkManager "NetworkManager")** per **[Debian](https://wiki.debian.org/it/NetworkManager "Wiki Debian NetworkManager")** ed per chi utilizza **[Gentoo](http://www.gentoo.org "Gentoo")** il **[wiki](http://wiki.gentoo.org/wiki/NetworkManager "Wiki Gentoo NetworkManager")** dedicato.  
Come scritto all’inizio di questo articolo esistono molti altri gestori di connessione di rete e potete dare un occhiata nell’ottima guida sul **[wiki](https://wiki.archlinux.org/index.php/Wireless_Setup_%28Italiano%29 "Wiki ArchLinux Wireless")** di **[Archlinux](https://www.archlinux.org "ArchLinux")** all’indirizzo **[https://wiki.archlinux.org/index.php/Wireless\_Setup\_(Italiano)](https://wiki.archlinux.org/index.php/Wireless_Setup_%28Italiano%29 "Wiki ArchLinux Wireless")**