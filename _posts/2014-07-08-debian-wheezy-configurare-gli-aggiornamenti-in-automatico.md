---
id: 985
title: 'Debian Wheezy configurare gli aggiornamenti in automatico'
date: '2014-07-08T10:10:22+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=985'
permalink: /debian-wheezy-configurare-gli-aggiornamenti-in-automatico/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Debian Wheezy configurare gli aggiornamenti in automatico, Articolo: http://wp.me/p4ANSQ-fT'
image: /wp-content/uploads/2013/12/11389848483_f2024ea111_z.jpg
categories:
    - Debian
    - Distribuzioni
    - GNU/Linux
tags:
    - Debian
    - Wheezy
---

[![Debian](https://i0.wp.com/farm4.staticflickr.com/3777/11389848483_5f70765d8e_o.jpg?resize=635%2C307 "Debian")](http://www.flickr.com/photos/12418137@N07/11389848483/ "Debian")

Oggi vi spiegheremo come aggiornare automaticamente **Debian Wheezy** senza nessun tipo di interazione da parte dell’utente.

Apriamo un terminale come amministratore di sistema

<div class="wp-terminal">`su`</div>inserite la password dell’amministratore di sistema ed installatevi il pacchetto **unattended-upgrades** con il comando

<div class="wp-terminal">`apt-get install unattended-upgrades`</div>terminata l’installazione del pacchetto unattended-upgrades sarà possibile configurarlo editando il file di configurazione nel seguente modo

<div class="wp-terminal">`nano /etc/apt/apt.conf.d/50unattended-upgrades`</div>normalmente la configurazione predefinita del file dovrebbe andar bene.  
In caso contrario potete anche crearvi una lista nera dei pacchetti che non devono essere aggiornati oppure rimuovere le dipendenza non utilizzate e molto altro ancora.

Adesso bisognerà creare un file di nome **20auto-upgrades** editandolo in questo modo

<div class="wp-terminal">`nano /etc/apt/apt.conf.d/20auto-upgrades`</div>e completatelo scrivendo i seguenti comandi

> // 1 abilita gli aggiornamenti (0 = disabilita)  
> APT::Periodic::Enable “1”;
> 
> // avvia il comando “apt-get update” automaticamente ogni n-giorni (0 = disabilita)  
> APT::Periodic::Update-Package-Lists “1”;
> 
> // avvia il comando “apt-get upgrade –download-only” ogni n-giorni (0 = disabilita)  
> APT::Periodic::Download-Upgradeable-Packages “1”;
> 
> // avvia “unattended-upgrade” security upgrade script ogni n-giorni (0 = disabilita)  
> // e scrive le modifiche nel file log in /var/log/unattended-upgrades  
> APT::Periodic::Unattended-Upgrade “1”;
> 
> // avvia il comando “apt-get autoclean” ogni n-giorni (0 = disabilita)  
> APT::Periodic::AutocleanInterval “7”;

salvate il file tenedo presente che tutto ciò che è sritto dopo **//** non sono altro che dei commenti e possono essere tranquillamente tralasciati.  
Il comando **unattended-upgrades** sarà caricato ogni giorno dello script cron job nella cartella /etc/cron.daily/apt per sapere se tutto è andato a buon fine editate il file **unattended-upgrades.log** con il seguente comando

<div class="wp-terminal">`nano /var/log/unattended-upgrades/unattended-upgrades.log`</div>e controllate!