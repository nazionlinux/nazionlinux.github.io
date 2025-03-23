---
id: 999
title: 'Debian stabile sostituire Grub2 con Syslinux'
date: '2014-08-10T16:33:22+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=999'
permalink: /debian-stabile-sostituire-grub2-syslinux/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Debian stabile sostituire Grub2 con Syslinux, Articolo: http://wp.me/p4ANSQ-g7'
image: /wp-content/uploads/2013/12/11389848483_f2024ea111_z.jpg
categories:
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Ubuntu
tags:
    - bootloader
    - Debian
    - extlinux
    - syslinux
    - Wheezy
---

[![Debian](https://i0.wp.com/farm4.staticflickr.com/3777/11389848483_5f70765d8e_o.jpg?resize=635%2C307 "Debian")](http://www.flickr.com/photos/12418137@N07/11389848483/ "Debian")

**Syslinux** è un avviatore di sitema molto più leggero di **Grub** ed anche la sua configurazione è molto più semplice.

In realtà Syslinux originariamente veniva usato per avviare il sistema da filesystem FAT (File Allocation Table) come ad esempio dischi floppy o chiavette USB.  
In molte distribuzioni tipo **ArchLinux** il pacchetto da installare è **syslinux** mentre in **Debian 7.0** stabile bisognerà installare **extlinux**.  
**Extlinux** non è altro che una parte del progetto syslinux e serve a far partire il sistema operativo da filesystem Ext2/Ext3/Ext4, XFS, Btrfs, FAT e NTFS sono supportati nel caso abbiate installato un doppio sistema operativo sul computer.

La prima procedura da effetture è aprire un terminale e autentificarsi come amministratore di sistema

<div class="wp-terminal">`su`</div>o per chi utilizza sudo

<div class="wp-terminal">`sudo -s`</div>una volta entrati nel terminale con i permessi d’amministratore di sistema, lanciate il doppio comando

<div class="wp-terminal">`apt-get update && apt-get install extlinux syslinux-common`</div>*apt-get update* aggiornerà il vostro database dei pacchetti (che non fà mai male) mentre il secondo comando *apt-get install extlinux syslinux-common* installerà i pacchetti che ci interessano.

Terminata la prochedurà di installazione se tutto è andato a buon fine verrà creata una nuova cartella **extlinux** all’interno della cartella **boot** che conterrà alcuni file di configurazione.  
Se la cartella nonè stata creata

<div class="wp-terminal">`mkdir -p /boot/extlinux`</div>Ora bisognerà installare alcuni files di extlinux con il comando

<div class="wp-terminal">`extlinux --install /boot/extlinux`</div>Tutto questo non basta per far funzionare correttamente extlinux bisogna controllare se il nostro disco è avviabile (bootable).  
Lanciate il comando

<div class="wp-terminal">`fdisk -l /dev/sda`</div>vi dovrebbe comparire qualcosa del genere

<div class="wp-terminal">`Device Boot Start End Sectors Size Id Type<br></br>/dev/sda1 <span style="color: #ff0000;">*</span> 63 586084351 586084289 298,1G 83 Linux`</div>da notare l’asterisco, volutamente in rosso, che compare sotto la scritta **Boot** significa appunto che il disco sda è bootable.  
Come si capisce dal titolo di questo articolo si presume che sul vostro computer ci sia installato Grub come avviatore di sistema.  
Grub và a sovrascrivere MBR (Master Boot Record) con un prorpio file e per questo motivo dobbiamo riscrivere di nuovo l’MBR con il nostro nostro file lanciando il comando

<div class="wp-terminal">`cat /usr/lib/extlinux/mbr.bin >/dev/sda`</div>Adesso extlinux è pronto manca solo il menù per la scelta del sistema da avviare per farlo basta dare il comando

<div class="wp-terminal">`cp /usr/lib/syslinux/*menu* /boot/extlinux`</div>e tutti i menù saranno copiati nella cartella /boot/extlinux.

Un consiglio prima di eliminare Grub controllate che tutto funzioni alla perfezione e fate **\*\*\* MOLTA ATTENZIONE \*\*\*** sono operazioni delicate se sbagliate qualcosa o non sapete benne quello che state facendo c’è il serio rischio che il vostro sietema Debian non riparta.