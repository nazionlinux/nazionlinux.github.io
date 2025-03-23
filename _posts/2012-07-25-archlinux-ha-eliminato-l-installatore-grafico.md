---
id: 264
title: 'Aiuto! Archlinux ha eliminato l&#8217;installatore grafico'
date: '2012-07-25T11:54:15+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=264'
permalink: /archlinux-ha-eliminato-l-installatore-grafico/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Aiuto Archlinux ha eliminato l&#8217;installatore grafico, Articolo: http://www.nazionlinux.com/?p=264'
image: /wp-content/uploads/2013/10/10243448844_63816f9f75_o.jpg
categories:
    - 'Arch Linux'
    - Distribuzioni
    - GNU/Linux
    - Sistema
    - Terminale
tags:
    - 'Arch Linux'
    - Distribuzioni
    - GNU/Linux
    - Sistema
    - Terminale
---

Con l’uscita della versione **Arch Linux 2012.07.15** molti utente si sono trovati spiazzati.  
Dalla nuova versione è stato rimosso **ArchLinux Installation Framework** l’installatore grafico di **[Archlinux](http://www.archlinux.it/ "Archlinux")** per ovviare a questo piccolo inconveniente una della soluzione è provare **Archboot**.

**Archboot** vi permetterà di installare Archlinux tramite un installatore grafico, inoltre ci dà la possibilità di installare **Archlinux** con il kernel **LTS** anche su supporti esterni come ad esempio una in penna USB, ci permette la gestione della console e il supporto per raid, dmraid e lvm2 e molto altro ancora.

**Archboot** fino ad oggi viene rilasciata con la ISO aggiornata al **giugno 2012** e per questo motivo volta installata avremo il problema di dipendenze con le librerie **glib**, tale problema comunque è risolvibile nel seguente modo.

Per **ArchLinux a 32 bit** eseguire questo comando da amministratore:

`pacman -U http://pkgbuild.com/~allan/glibc-2.16.0-1-i686.pkg.tar.xz`

Per **ArchLinux a 64 bit** eseguire questo comando da amministratore:

`pacman -U http://pkgbuild.com/~allan/glibc-2.16.0-1-x86_64.pkg.tar.xz`

poi digitiamo:

`rm /etc/profile.d/locale.sh`

e di seguito, sempre come amministratore, il comando:

`pacman -Su --ignore glibc`

a questo punto possiamo effettuare l’aggiornamento della distribuzione.  
Finito l’aggiornamento basta dare comando da amministratore:

`pacman -Su`

questa volta aggiorneremo anche **glibc** ed avremo la nostra **Arch Linux** perfettamente aggiornata.

Per maggiori informazioni consiglio di consultare la pagina dedicata nel **[wiki di Arch Linux](https://wiki.archlinux.org/index.php/DeveloperWiki:usrlib)**.

Per chi si è ritrovato il sistema inutilizzabile, una soluzione è montare la partizione su cui è installata la **Archlinux** con un live cd o con qualsiasi altra distribuzione installata sul nostro disco fisso con il comando:

`mount /dev/sda<strong>X</strong> /mnt`

dove la **X** và sostituita con il numero della **partizione root** nella quale è installata la nostra **Archlinux**.  
Spostarsi nella cartella **mnt** con il comando:

`cd /mnt`

e dare i seguenti 3 comandi:

`cp -ar lib/* usr/lib/ && rm -rf lib && ln -s usr/lib lib`

Con questi comandi per prima cosa copiamo i files della cartella **lib** nella cartella **/usr/lib** (cp -ar lib/\* usr/lib/), rimuovono la vecchia cartella **lib** (rm -rf lib) e per ultimo si crea un collegamento simbolico **lib** che rimanda alla cartella **/usr/lib** (ln -s usr/lib lib).  
I simboli **&amp;&amp;** servono solo per concatenare i vari comandi.

Per maggiori informazioni su **Archboot** consiglio di [consultare la pagina dedicata](https://wiki.archlinux.org/index.php/Archboot) dal wiki di **Arch Linux** in inglese.

Per scaricare le ISO potete visitare il sito [mirrors.prometeus.net](http://mirrors.prometeus.net/archlinux/iso/archboot/2012.06/)