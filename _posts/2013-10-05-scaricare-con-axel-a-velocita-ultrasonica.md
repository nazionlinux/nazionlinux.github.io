---
id: 629
title: 'Scaricare con Axel a velocità ultrasonica'
date: '2013-10-05T12:25:17+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=629'
permalink: /scaricare-con-axel-a-velocita-ultrasonica/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Scaricare con Axel a velocità ultrasonica, Articolo: http://www.nazionlinux.com/?p=629'
image: /wp-content/uploads/2014/08/14905144631_a95ce77985_o.png
categories:
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - Fedora
    - GNU/Linux
    - Mint
    - Sistema
    - Slackware
    - Terminale
    - Ubuntu
tags:
    - axel
    - Terminale
---

#### Axel è un programma in linea di comando molto utile per scaricare files dalla rete.

Il programma è presente nelle maggiori distribuzioni e la sua installazione è molto semplice.  
Apriamo, come al solito, il nostro terminale e autentifichiamoci come amministratore utilizzando il comando **su** o **sudo -s** a seconda della distribuzione utilizzata.  
Una volta entrati nel terminale come amministratore di sistema lanciate uno dei seguenti comandi

**Debian**/**Ubuntu**/**Linux Mint**/**Elementary OS**

<div class="wp-terminal">`apt-get install axel`</div>**Fedora**/**Centos**/**OpenSuse**

<div class="wp-terminal">`yum install axel`</div>**ArchLinux**

<div class="wp-terminal">`pacman -S axel`</div>Con **Axel** possiamo suddividere il processo di scaricamento in 4 connessioni parallele diminuendo cosi il tempo

<div class="wp-terminal">`axel -n 4 http://www.nazionlinux.com/wp-content/uploads/2012/01/archlinux.jpg`</div>Si può impostare il limite di banda da utilizzare durante lo scaricamento del file, in modo da evitare fastidiosi rallentamenti durante la navigazione in rete.  
Il seguente esempio limita a 10mb/s (10485760 bytes) cioè 10 megabytes per secondo

<div class="wp-terminal">`axel -s 10485760 http://www.nazionlinux.com/wp-content/uploads/2012/01/archlinux.jpg`</div>Possiamo anche utilizzare i precedenti comandi contemporaneamente riducendo di molto tutto il processo di scaricamento

<div class="wp-terminal">`axel -n 4 -s 10485760 http://www.nazionlinux.com/wp-content/uploads/2012/01/archlinux.jpg`</div>come potete notare un file da 39.4mb è stato scaricato in 4 secondi

<div class="wp-terminal">`axel http://kernel.org/pub/linux/kernel/v2.6/linux-2.6.17.11.tar.bz2<br></br>Initializing download: http://kernel.org/pub/linux/kernel/v2.6/linux-2.6.17.11.tar.bz2<br></br>File size: 41288067 bytes<br></br>Opening output file linux-2.6.17.11.tar.bz2.1<br></br>Starting download<br></br>[  0%]  .......... .......... .......... ..........  [ 247.1KB/s]<br></br>[  0%]  .......... .......... .......... ..........  [ 408.3KB/s]<br></br>[  0%]  .......... .......... .......... ..........  [ 566.3KB/s]<br></br>...<br></br>[ 99%]  .......... .......... .......... ..........  [8710.2KB/s]<br></br>[ 99%]  .......... .......... .......... ..........  [8680.7KB/s]<br></br>[100%]  .......... .......... ..........<br></br>Downloaded 39.4 megabytes in 4 seconds. (8681.65 KB/s)`</div>