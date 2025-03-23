---
id: 620
title: 'LibreOffice 4.1.2 finale pronto per essere provato'
date: '2013-10-04T19:08:49+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=620'
permalink: /libreoffice-4-1-2-finale-pronto-per-essere-provato/
hl_twitter_has_auto_tweeted:
    - 'Titolo: LibreOffice 4.1.2 finale pronto per essere provato, Articolo: http://www.nazionlinux.com/?p=620'
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
categories:
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Mint
    - Slackware
    - Ubuntu
tags:
    - LibreOffice
---

La **Document Foundation** ha annunciato che la seconda versione dell’aggiornamento di LibreOffice ramo 4.1.x è ora disponibile per tutte le piattaforme, tra cui **GNU/Linux**, portando un sacco di correzioni e miglioramenti.  
Qui l’**[annuncio ufficiale](http://blog.documentfoundation.org/2013/10/04/the-document-foundation-announces-libreoffice-4-1-2/ "LibreOffice")** dove troverete la lista completa di tutti gli aggiornamenti e le corezzioni che sono state effettuate.

Per chi non ha tempo di aspettare che entri nei repository ufficiali della vostra distribuziona, può provarlo  
seguendo la guida che segue.  
Questa guida è valita per tutte le **[Debian](http://www.debian.org/ "Debian")** e derivate: **[Ubuntu](http://www.ubuntu.it "Ubuntu")**, **[Linux Mint](http://www.linuxmint.org "Linux Mint")**, **[Elementary OS](http://elementaryos.org/ "Elementary OS")**…  
Prima di tutto aprire un terminale e scaricare il pacchetto

<div class="wp-terminal">`wget -c download.documentfoundation.org/libreoffice/stable/4.1.2/deb/<strong style="color: #ff0000;">x86</strong>/LibreOffice_4.1.2_Linux_<strong style="color: #ff0000;">x86</strong>_deb.tar.gz`</div>per i sistemi a **64bit** basterà sostituire **x86** con **x86\_64**.  
Adesso scompattiamo il pacchetto appena scaricato

<div class="wp-terminal">`tar -xzvf LibreOffice_4.1.2_Linux_<strong style="color: #ff0000;">x86</strong>_deb.tar.gz`</div>ci spostiamo nella cartella **LibreOffice\_4.1.2.3\_Linux\_x86\_deb/DEBS** nel caso avete un sistema a 64bit la cartella sarà **LibreOffice\_4.1.2.3\_Linux\_x86-64\_deb/DEBS**

<div class="wp-terminal">`cd LibreOffice_4.1.2.3_Linux_<strong style="color: #ff0000;">x86</strong>_deb/DEBS`</div>adesso entrate come amministratore con il comando **su** o **sudo** a seconda della distribuzione

<div class="wp-terminal">`su`</div>per le derivate

<div class="wp-terminal">`sudo -s`</div>infine installate **LibreOffice** con il comando

<div class="wp-terminal">`dpkg -i *.deb`</div>per le distribuzioni **[Fedora](http://http://fedoraproject.org/it/ "Fedora")**, **[CentOS](http://www.centos.org/ "CentOS")**, **[OpenSUSE](http://it.opensuse.org "OpenSuse")** dovete eseguire questi comandi

<div class="wp-terminal">`wget -c download.documentfoundation.org/libreoffice/stable/4.1.2/rpm/<strong style="color: #ff0000;">x86</strong>/LibreOffice_4.1.2_Linux_<strong style="color: #ff0000;">x86</strong>_rpm.tar.gz`</div>per i sistemi a **64bit** basterà sostituire **x86** con **x86\_64**.  
Scompattiamo il pacchetto appena scaricato

<div class="wp-terminal">`tar -xzvf LibreOffice_4.1.2_Linux_<strong style="color: #ff0000;">x86</strong>_rpm.tar.gz`</div>spostiamoci nella cartella **LibreOffice\_4.1.2.3\_Linux\_x86\_deb/RPMS** nel caso avete un sistema a 64bit la cartella sarà **LibreOffice\_4.1.2.3\_Linux\_x86-64\_deb/RPMS**

<div class="wp-terminal">`cd LibreOffice_4.1.2.3_Linux_<strong style="color: #ff0000;">x86</strong>_rpm/RPMS`</div>installate **LibreOffice** con il comando

<div class="wp-terminal">`sudo rpm -i *.rpm`</div>