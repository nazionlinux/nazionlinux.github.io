---
id: 1027
title: 'Viber 4.2 per GNU/Linux 64 bit'
date: '2014-08-19T18:13:56+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1027'
permalink: /viber-4-2-per-gnu-linux-64-bit/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Viber 4.2 per GNU/Linux 64 bit, Articolo: http://wp.me/p4ANSQ-gz'
categories:
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Ubuntu
tags:
    - 'Arch Linux'
    - Debian
    - Ubuntu
    - Viber
    - voip
---

[![Viber](https://i0.wp.com/farm4.staticflickr.com/3888/14967279421_81624a1b79_o.png?resize=635%2C307 "Viber")](http://www.flickr.com/photos/12418137@N07/14967279421/ "Viber")

**[Viber](http://www.viber.com/ "Viber")** è un programma che permette di telefonare e video chiamare persone in tutto il mondo tramite **[VOIP](http://it.wikipedia.org/wiki/Voice_over_IP "VoIP")**.

Nella la versione 4.2 di **Viber** sono presenti molte novità come la possibilità di impostare diversi gruppi per le persone presenti sulla nostra rubrica, è stata introdutta la possibilità di inviare immagini, video, musica, documenti semplicemente trascinadoli nella finestra della conversazione per inviarli.  
Inviare video-messaggi con la notifica se un messaggio è stato letto.  
Aumentato fino a 100 il numero di partecipanti ad un gruppo con la possibilità di avere conversazioni private con gli stessi partecipanti del gruppo.  
La sincronizzazione dei contatti e degli stickers tra computer e telefono.  
Migliora la qualità video nelle video chiamate.

È stato aggiunto il supporto per **Viber Out** che ci consente di chiamare le persone ai telefoni cellulari o telefono fisso a prezzi molto vantaggiosi, con e senza Viber.

Per ora il programma è rilasciato solo per **sistemi a 64bit** ed è possibile scaricare il pacchetto a questo indirizzo **[http://download.cdn.viber.com/cdn/desktop/Linux/viber.deb](http://download.cdn.viber.com/cdn/desktop/Linux/viber.deb "Viber")** per **[Ubuntu](http://www.ubuntu-it.org/ "Ubuntu Italia")** e **[Debian](http://www.debian.org "Debian")**.  
Mentre per gli utilizzatori di **[ArchLinux](http://www.archlinux.it "ArchLinux")** potete scaricare il pacchetto **[viber.tar.gz](https://aur.archlinux.org/packages/vi/viber/viber.tar.gz "Viber")** tramite **[AUR](https://aur.archlinux.org/packages/viber/ "AUR Viber")** e poi compilarlo seguendo la guida **[Archlinux compilare pacchetti da AUR](http://www.nazionlinux.com/archlinux-compilare-pacchetti-da-aur/ "Archlinux compilare pacchetti da AUR")**.

Prucedura per Debian ed Ubuntu

Aprite un terminale e date il comando

<div class="wp-terminal">`su`</div>o

<div class="wp-terminal">`sudo -s`</div>a seconda che se nel vostro sistema sia attivo o no l’utente **root**.  
Logicamente vi verrà chiesta la password d’amministratore di sistema che nel caso di **Ubuntu** è la stessa password del primo utente che è stato creato, salvo modifiche.

Adesso vi dovrete scaricare il pacchetto con il comando

<div class="wp-terminal">`wget -c http://download.cdn.viber.com/cdn/desktop/Linux/viber.deb`</div>visto che il pacchetto è di circa **44mb** vi consiglio di leggervi questa guida **[Scaricare con Axel a velocità ultrasonica ](http://www.nazionlinux.com/scaricare-con-axel-a-velocita-ultrasonica/ "Scaricare con Axel a velocità ultrasonica")** per volicizzare l’operazione.

Terminato di scaricare il pacchetto **viber.deb** lo dovrete installare con il comando

<div class="wp-terminal">`dkpg -i viber.deb`</div>Esiste anche una versione binaria per tutte le altre distribuzioni che potete scaricare a questo indirizzo **[http://download.cdn.viber.com/cdn/desktop/Linux/Viber.zip  ](http://download.cdn.viber.com/cdn/desktop/Linux/Viber.zip "Viber")**

Và ricordato che **Viber** è un programma proprietario quindi i suoi sorgenti non sono visionabili e per questo motivo sarebbe meglio utilizzare programmi a codice aperto come ad esempio **[LinPhone](http://www.linphone.org/ "LinPhone")** in questo articolo vi viene spiegato su come installarlo **[Skype/Msn? No grazie, io uso LinPhone](http://www.nazionlinux.com/skypemsn-no-grazie-io-uso-linphone/ "Skype/Msn? No grazie, io uso LinPhone")** nella nostra distribuzione.