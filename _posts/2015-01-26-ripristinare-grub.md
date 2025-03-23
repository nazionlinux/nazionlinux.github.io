---
id: 1160
title: 'Ripristinare Grub'
date: '2015-01-26T11:11:27+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1160'
permalink: /ripristinare-grub/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Ripristinare Grub, Articolo: http://wp.me/p4ANSQ-iI'
image: /wp-content/uploads/2013/12/11389848483_f2024ea111_z.jpg
categories:
    - Debian
    - GNU/Linux
    - Terminale
tags:
    - boot
    - grub
    - grub2
---

[![Debian](https://i0.wp.com/farm4.staticflickr.com/3777/11389848483_5f70765d8e_o.jpg?resize=635%2C307 "Debian")](http://www.flickr.com/photos/12418137@N07/11389848483/ "Debian")

La prima operazione da effettuare è procurarsi un CD/DVD o una penna USB con installata una distribuzione **GNU/Linux** funzionante come live.

Le possibilità sono molteplici, si può scaricare un immagine ISO, per esempio una **Debian Live** dal sito **[https://www.debian.org/CD/live/](https://www.debian.org/CD/live/ "Debian Live")** e masterizzarla in un CD/DVD oppure scriverla su una chiavetta USB tremite il programma **[UNetbootin](http://unetbootin.sourceforge.net/ "UNetbootin")**.

Adesso non vi resta che far avviare la vostra distribuzione in modalità live ed aprire un teminale  
e autentificarsi con il comando

<div class="wp-terminal">`su`</div>abbiamo preso una Debian Live per esempio in altre distribuzioni bisognerà usare il comando

<div class="wp-terminal">`sudo -s`</div>Ora dobbiamo capire come il disco è partizionato quindi lanciamo il comando

<div class="wp-terminal">`fdisk -l`</div>abbiamo volutamente scelto un disco con un doppio sistema

<div class="wp-terminal">`<strong>Device</strong>     <strong>Boot</strong>     <strong>Start</strong>       <strong>End</strong>   <strong>Sectors</strong>   <strong>Size</strong> <strong>Id</strong> <strong>Type</strong><br></br>/dev/sda1  *           63 586084351 586084289 279,5G 83 Linux<br></br>/dev/sda2       586084352 586289151    204800   100M  7 HPFS/NTFS/exFAT<br></br>/dev/sda3       586289152 625139711  38850560  18,5G  7 HPFS/NTFS/exFAT`</div>per individuare la partizione che ci interessa e capire meglio il funzionamento.

Nell’esempio la partizione sarà **sda1** che dovrà essere montata con il comando

<div class="wp-terminal">`mount /dev/sda1 /mnt`</div>di seguito montiamo anche gli altri dispositivi con i seguienti comandi

<div class="wp-terminal">`mount --bind /dev /mnt/dev`</div><div class="wp-terminal">`mount --bind /proc /mnt/proc`</div><div class="wp-terminal">`mount --bind /sys /mnt/sys`</div>Una volta montati tutti i dispositivi entriamo con il comando **chroot** nel nuovo sistema posizionato in **mnt**

<div class="wp-terminal">`chroot /mnt`</div>se la partizione **boot** si trova in una partizione separata bisognerà montarla

<div class="wp-terminal">`mount /dev/sda1 /boot`</div>mentre, come nel nostro esempio, la partizione è unica quindi dobbiamo solo lanciare il comando

<div class="wp-terminal">`grub-install /dev/sda`</div>con questo comando **Grub** si andrà a reinstallare nel **MBR** del disco.

Se il comando **grub-install** dovesse restituire degli errori, sostituitelo con

<div class="wp-terminal">`grub-install --recheck /dev/sda`</div>se avete installato nella vostra distribuzione **os-prober** lanciatelo per far riconoscere a **Grub** gli altri sistemi operativi installati

<div class="wp-terminal">`os-prober`</div>e poi lanciate

<div class="wp-terminal">`update-grub`</div>per aggiornare **Grub**.

Terminiamo le operazioni ed usciamo dall’ambiente **chroot** dando il comando

<div class="wp-terminal">`exit`</div>e procediamo allo smontaggio delle partizioni dando in sequenza i seguenti comandi

<div class="wp-terminal">`cd ~`</div>per tornare nella all’inizio del percorso lanciamo il seguenti comandi concatenati

<div class="wp-terminal">`umount /mnt/dev && umount /mnt/proc && umount /mnt/sys`</div>per smontare i dispositivi ed infine smontiamo la cartella principale **mnt** con il comando

<div class="wp-terminal">`umount /mnt/`</div>riavviamo il sistema con il comando

<div class="wp-terminal">`reboot`</div>e ricordatevi di rimuovere il CD/DVD o la penna USB.