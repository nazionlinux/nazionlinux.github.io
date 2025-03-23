---
id: 779
title: 'Abilitare ZSWAP su kernel 3.11'
date: '2013-12-30T15:18:26+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=779'
permalink: /abilitare-zswap-su-kernel-3-11/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Abilitare ZSWAP su kernel 3.11, Articolo: http://www.nazionlinux.com/?p=779'
categories:
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - Fedora
    - GNU/Linux
    - Kernel
    - Mint
    - Sistema
    - Slackware
    - Ubuntu
tags:
    - grub
    - swap
    - syslinux
    - zswap
---

[![zswap](https://i0.wp.com/farm8.staticflickr.com/7371/12124773174_4ea1263a58_z.jpg?resize=640%2C300 "zswap")](http://www.flickr.com/photos/12418137@N07/12124773174/ "zswap")

**Zswap** è stato inserito con l’uscita del kernel 3.11 Linux.  
Zswap è uno strumento che entra in funzione quando rimane poca RAM libera e permette di comprimere blocchi di memoria evitando al sistema di andare a scrivere sul disco rigido, aumentando di conseguenza la reattività della nostra distribuzione **GNU/Linux**.  
Zswap è disabilitato, per attivarlo dobbiamo modificare il nostro **[bootloader](http://it.wikipedia.org/wiki/Boot_loader "Boot loader")**.  
Esistono molti bootloader per nostra comodità tratteremo solo **[Grub](http://www.gnu.org/software/grub/ "Grub: GRand Unified Bootloader")** e **[Syslinux](http://www.syslinux.org/wiki/index.php/The_Syslinux_Project "Syslinux")**.  
Prima di tutto accertarsi quale versione del kernel è installato nel nostro computer, per farlo lanciare il comando:

<div class="wp-terminal">`uname -r`</div>se il risultato è una versione del kernel pari o maggiore di 3.11 potete proseguire, se minore vi consiglio di aggiornare il vostro kernel.

### PROCEDURA PER GRUB 2

Aprire un terminale come amministratore di sistema e lanciare il comando

<div class="wp-terminal">`nano /etc/default/grub`</div>modificare la seguente riga

> GRUB\_CMDLINE\_LINUX\_DEFAULT=””

aggiungendo **zswap.enabled=1** frà le virgolette

> GRUB\_CMDLINE\_LINUX\_DEFAULT=”zswap.enabled=1″

salvate il file **CTRL + O** confermate con il tasto **Invio** e chiudete **Nano** con i tasti **CTRL + X**.  
Ultima operazione sarà quella di riconfigurare Grub con il comando

<div class="wp-terminal">`grub-mkconfig -o /boot/grub/grub.cfg`</div>ora riavvitate il sistema.

### PROCEDURA PER GRUB

La procedura per le versioni di Grub precedenti è leggermente differente.  
Aprire un terminale come amministratore di sistema e andate ad editare il file **menu.lst** come segue

<div class="wp-terminal">`nano /boot/grub/menu.lst`</div>cercate la riga che inizia con **kernel** come nell’esempio seguente

> …  
> kernel /boot/vmlinuz-linux root=/dev/sda1 ro  
> …

ed aggiungete **zswap.enabled=1** alla fine della riga

> …  
> kernel /boot/vmlinuz-linux root=/dev/sda1 ro **zswap.enabled=1**  
> …

senza virgolette!!!  
Salvate il file appena modificato con i tasti **CTRL + O** confermate premendo il tasto **Invio** e chiudete **Nano** con i tasti **CTRL + X**.  
Riavviate il sistema.

### PROCEDURA PER SYSLINUX

La procedura con Syslinux non è molto differente dalle precedenti.  
Aprire un terminale come amministratore di sistema e andate ad editare il file **syslinux.cfg** come segue

<div class="wp-terminal">`nano /boot/syslinux/syslinux.cfg`</div>cercate la riga che inizia con **APPEND** come nell’esempio seguente

> …  
> APPEND root=/dev/sda1 rw  
> …

ed aggiungete **zswap.enabled=1** alla fine della riga

> …  
> APPEND root=/dev/sda1 rw **zswap.enabled=1**  
> …

mi raccomando di evitare le virgolette!  
Salvate il file appena modificato premendo contemporaneamente i tasti **CTRL + O** confermate con il tasto **Invio** e chiudete **Nano** con i tasti **CTRL + X**.  
Riavviate il sistema.

Per sapere se Zswap è in funzione una volta riavviato il computer aprite un terminale e lanaciate i comandi

<div class="wp-terminal">`dmesg | grep zswap`</div>vi consiglio inoltre di leggere **[Velocizzare la nostra distribuzione GNU/Linux con lo Swappiness Tuning](http://www.nazionlinux.com/velocizzare-la-nostra-distribuzione-gnulinux-con-lo-swappiness-tuning/ "Velocizzare la nostra distribuzione GNU/Linux con lo Swappiness Tuning")** e ricordatevi Zswap funziona se il sistema possiede una partizione **Swap** sul disco fisso in caso contrario vi consiglio di leggere **[Aggiungere la Swap a mano](http://www.nazionlinux.com/aggiungere-la-swap-a-mano/ "Aggiungere la Swap a mano")** prima di attivare Zswap.