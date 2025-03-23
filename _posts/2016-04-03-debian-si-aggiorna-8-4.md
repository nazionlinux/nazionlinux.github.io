---
id: 1250
title: 'Debian si aggiorna 8.4'
date: '2016-04-03T12:30:19+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1250'
permalink: /debian-si-aggiorna-8-4/
hl_twitter_has_auto_tweeted:
    - 'Titolo: Debian si aggiorna 8.4, Articolo: http://wp.me/p4ANSQ-ka'
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
image: /wp-content/uploads/2013/12/11389848483_f2024ea111_z.jpg
categories:
    - Debian
    - Distribuzioni
    - GNU/Linux
tags:
    - Debian
    - Jessie
---

#### Debian arriva il nuovo aggiornamento 8.4

**Debian** aggiorna il suo ramo stabile alla versione 8.4 corregendo falle nella sicurezza dei pacchetti.  
Per la lista di tutte le correzzioni e gli aggiornamenti potete consultare <https://www.debian.org/News/2016/20160402>  
Questo non è un passaggio ad una nuova versione, ma solamente un aggiornamento della versione attuale e quindi non porta con sè cambiamenti strutturali ma solo correzioni ed aggiornamenti.

Tra le correzioni dei pacchetti troviamo i navigatori **Chromium** ed **Iceweasel** (Firefox), gli emulatori **Virtualbox** e **Qemu**, i pacchetti **OpenSSL** e **Samba**…

Per l’aggiornamento della distribuzione basta lanciare il comando da amministratore di sistema

<div class="wp-terminal">`apt-get dist-upgrade`</div>non prima di aver lanciato i seguenti comandi

<div class="wp-terminal">`apt-get update`</div>una volta aggiornato il database dei pacchetti lanciamo il comando

<div class="wp-terminal">`apt-get upgrade`</div>per chi costantemente aggiorna la propria distribuzione non dovrà aggiornare molti pacchetti in quanto sono già presenti in **security.debian.org**