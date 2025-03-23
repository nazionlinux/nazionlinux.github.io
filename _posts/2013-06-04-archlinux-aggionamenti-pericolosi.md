---
id: 520
title: 'ArchLinux aggionamenti pericolosi'
date: '2013-06-04T11:00:15+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=520'
permalink: /archlinux-aggionamenti-pericolosi/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: ArchLinux aggionamenti pericolosi, Articolo: http://www.nazionlinux.com/?p=520'
categories:
    - GNU/Linux
tags:
    - 'Arch Linux'
    - filesystem
    - pacman
    - Terminale
---

Prima di affettuare l’ultimo aggionamento contente il pacchetto **filesystem 2013.05-2**, vi consiglio di passare da Grub a **Grub2** oppure a **[Syslinux](https://wiki.archlinux.org/index.php/Syslinux_%28Italiano%29 "Syslinux")**, questo perchè i files di **Grub 0.97** sono sia nella cartella **/sbin** che nella cartella **/bin** ed andranno a bloccare l’aggiornamento del pacchetto **filesystem 2013.05-2**.  
Inoltre bisognerà passsare a **[Systemd](https://wiki.archlinux.org/index.php/Systemd_%28Italiano%29 "Systemd")** per poter elimninare il pacchetto **consolekit** che è stato sostituito da **loginid** un componente di **Systemd**.

> <span style="color: #ff0000;">errore</span>: impossibile eseguire l’operazione richiesta (file in conflitto)  
> filesystem: /bin è già presente nel filesystem  
> filesystem: /sbin è già presente nel filesystem  
> filesystem: /usr/sbin è già presente nel filesystem

La prima cosa da fare è controllare i pacchetti **non ufficiali** installati sul nostro computer e tutti i pacchetti che installano i files nella cartelle /bin, /sbin e /usr/sbin, aprite quindi un terminale a date il comando

<div class="wp-terminal">`pacman -Qqo /bin /sbin /usr/sbin | pacman -Qm -`</div>se il risultato sarà vuoto potete proseguire le operazioni di aggiornamento, se invece vi verranno segnalati dei pacchetti li dovrete rimuovere, stando attenti a non rimuovere i pacchetti che servono per il funzionamento del sistema, conviene che vi documentate prima di rimuoverli.

Adesso bisognerà controllare se sono stati installati dei pacchetti dai repository non ufficiali con il comando

<div class="wp-terminal">`paclist <strong style="color: #ff0000;"><repo></strong> | awk ' { print $1 } ' | pacman -Ql - | grep ' /s\?bin/\| /usr/sbin/'`</div>La stringa **&lt;repo&gt;** và sostituita con il nome del repository che si vuole controllare.  
Anche in questo caso se il risultato sarà vuoto potete proseguire in caso contrario conviene che vi documentate su ogni singolo pacchetto.  
Da amministratore eseguite il comando

<div class="wp-terminal">`find /bin /sbin /usr/sbin -exec pacman -Qo -- {} + >/dev/null`</div>con questo ultimo comando verranno elencati tutti i files ed i pacchetti senza proprietario.  
Inoltre bisognerà controllare che non vi siano script personali e/o di terze parti nella cartella **/bin** inquanto, come ci fà notare **veleno77**, alcuni utenti hanno avuto questi problemi.

Infine, sempre da amministratore, lanciate questi ultimi comandi

<div class="wp-terminal">`pacman -Syu --ignore filesystem,bash`</div>aggiorna il sistema senza aggiornare i pacchetti **filesystem** e **bash**

<div class="wp-terminal">`pacman -S bash`</div>installa **bash**

<div class="wp-terminal">`pacman -Su`</div>aggiorna il sistema compreso il pacchetto **filesystem**