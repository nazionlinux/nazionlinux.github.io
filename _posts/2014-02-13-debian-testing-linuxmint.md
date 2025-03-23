---
id: 914
title: 'Debian Testing a LinuxMint'
date: '2014-02-13T20:52:45+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=914'
permalink: /debian-testing-linuxmint/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Debian Testing a LinuxMint, Articolo: http://www.nazionlinux.com/?p=914'
categories:
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Mint
tags:
    - Debian
    - LinuxMint
    - MATE
    - testing
---

[![linuxmint](https://i0.wp.com/farm6.staticflickr.com/5533/12504224915_db1d9eca18_z.jpg?resize=640%2C400 "linuxmint")](http://www.flickr.com/photos/12418137@N07/12504224915/ "linuxmint")

**[Linux Mint Debian Edition](http://www.linuxmint.com/download_lmde.php "Linux Mint Debian Edition")** è una ditribuzione basata su **[Debian Testing](https://www.debian.org/releases/testing/ "Debian Testing")** e come **[Arch Linux](http://www.nazionlinux.com/arch-linux-2014-02-01/ "Arch Linux 2014.02.01")** è una rolling release, ossia a rilascio continuo.  
Le distribuzioni a rilascio continuo (rolling release) non sono distribuite con un numero di versione tipo **[Debian 7.4](http://www.nazionlinux.com/nuovo-aggiornamento-per-debian-7-4-wheezy/ "Nuovo aggiornamento per Debian 7.4 Wheezy")** ma vengo aggiornate di continuo e periodicamente viene rilasciata una nuova Iso d’installazione, come nel caso di **ArchLinux**.

Essendo **LinuxMint** basata su **Debian** perchè non utilizzare direttamente LinuxMint?  
Quando si installa **LinuxMint** vengono installati molti pacchetti di dubbia utilità ed inoltre **LinuxMint Debian Edition** ha come ambiente grafico predefinito **[Mate](http://mate-desktop.org "Mate")**.

**[Mate](http://mate-desktop.org "Mate")** è un ambiente grafico clone di **Gnome 2** inizialmente sviluppato dagli utenti della comunità di Archlinux (potete vedere l’annuncio ufficiale qui **[https://bbs.archlinux.org/viewtopic.php?id=121162](https://bbs.archlinux.org/viewtopic.php?id=121162 "Bbs Archlinux Mate")**) che portà con sè i vari cloni: **Caja**, **Pluma**, **Eye of MATE**, **Atril**, **Engrampa**, **MATE Terminal**.

Per questo e per altri motivi ho deciso di installarmi una versione testing di **[Debian](http://www.debian.org "Debian")** e poi farla diventare una distribuzione **LinuxMint** con pochi semplici passi.

Terminata l’installazione di **Debian Testing** aprire un terminale d’amministrazione ed editate il file **sources.list**

<div class="wp-terminal">`nano /etc/apt/sources.list`</div>ed andate ad inserire

> deb http://packages.linuxmint.com/ debian main upstream import

all’inizio del file prima dei depositi Debian

> deb http://ftp.debian.org/debian testing main contrib non-free  
> deb http://security.debian.org/ testing/updates main contrib non-free  
> deb http://www.debian-multimedia.org testing main non-free

salvate il file appena modificato **CTRL + O** cofermate col tasto **Invio** ed uscite da **[Nano](http://www.nano-editor.org/ "Nano")** con la sequenza di tasti **CTRL + X**.  
Adesso lanciate il comando

<div class="wp-terminal">`apt-get install linuxmint-keyring`</div>che serve per importare la chiave crittografica **[PGP](http://www.gnupg.org/ "GNU Privacy Guard")** dei depositi LinuxMint e rilanciate il comando

<div class="wp-terminal">`apt-get update && apt-get dist-upgrade`</div>terminate l’istallazione dei nuovi pacchetti potete iniziare a personalizzare la vostra distribuzione installandovi, per esempio, l’utile applicazione **mintupdate-debian** che vi segnalerà i nuovi aggiornamenti dei pacchetti presenti nei depositi

<div class="wp-terminal">`apt-get install mintupdate-debian`</div>oppure installarvi l’ambiente grafico **[Cinnamon](http://www.nazionlinux.com/cinnamon-come-risolvere-no-module-named-image/ "Cinnamon come risolvere “No module named Image”")** tramite il meta-pacchetto **mint-meta-debian-cinnamon**

<div class="wp-terminal">`apt-get install mint-meta-debian-cinnamon`</div>in questa pagina **[http://packages.linuxmint.com/list.php?release=Debian](http://packages.linuxmint.com/list.php?release=Debian "Linux Mint Debian Edition")** troverete tutti i pacchetti a disposizione.