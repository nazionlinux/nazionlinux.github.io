---
id: 478
title: 'Rilasciata Debian 7.0 &#8220;Wheezy&#8221;'
date: '2013-05-05T12:52:53+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=478'
permalink: /rilasciata-debian-7-0-wheezy/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Rilasciata Debian 7.0 &#8220;Wheezy&#8221;, Articolo: http://www.nazionlinux.com/?p=478'
categories:
    - Debian
    - Distribuzioni
    - GNU/Linux
tags:
    - Debian
---

Nella giornata di ieri, come si apprende dal sito ufficiale **[http://www.debian.org/News/2013/20130504](http://www.debian.org/News/2013/20130504 "Debian 7.0 Wheezy")**, è stata rilasciata **[Debian 7.0](http://www.debian.org/News/2013/20130504 "Debian 7.0 Wheezy")** nome in codice **Wheezy**.  
Molte sono le novità, da un sistema di installazione disponibile in 73 lingue al supporto multiarchitettura, ma soprattutto più di 36.000 pacchetti pronti all’uso.

Il supporto **multiarchitettura** consentirà agli utenti **[Debian](http://www.debian.org/ "Debian")** di installare pacchetti creati sia per le architetture **32 bit** sia per le architetture **64 bit**, il sistema provvederà a risolvere le dipendenze dei pacchetti automaticamente.  
Per leggere le novità di ogni singola architettura:

- Note di rilascio per **[64-bit PC (amd64)](http://www.debian.org/releases/wheezy/amd64/release-notes/)**
- Note di rilascio per **[32-bit PC (i386)](http://www.debian.org/releases/wheezy/i386/release-notes/)**
- Note di rilascio per **[EABI ARM](http://www.debian.org/releases/wheezy/armel/release-notes/)**
- Note di rilascio per **[PowerPC](http://www.debian.org/releases/wheezy/powerpc/release-notes/)**
- Note di rilascio per **[Hard Float ABI ARM](http://www.debian.org/releases/wheezy/armhf/release-notes/)**
- Note di rilascio per **[SPARC](http://www.debian.org/releases/wheezy/sparc/release-notes/)**
- Note di rilascio per **[kFreeBSD 64-bit PC (amd64)](http://www.debian.org/releases/wheezy/kfreebsd-amd64/release-notes/)**
- Note di rilascio per **[kFreeBSD 32-bit PC (i386)](http://www.debian.org/releases/wheezy/kfreebsd-i386/release-notes/)**
- Note di rilascio per **[Intel Itanium IA-64](http://www.debian.org/releases/wheezy/ia64/release-notes/)**
- Note di rilascio per **[MIPS (little endian)](http://www.debian.org/releases/wheezy/mipsel/release-notes/)**
- Note di rilascio per **[IBM S/390](http://www.debian.org/releases/wheezy/s390/release-notes/)**
- Note di rilascio per **[MIPS (big endian)](http://www.debian.org/releases/wheezy/mips/release-notes/)**
- Note di rilascio per **[IBM System z](http://www.debian.org/releases/wheezy/s390x/release-notes/)**

Per chi non ha installato **[Debian](http://www.debian.org/ "Debian")** sul proprio computer vi consigliamo di scaricare il file torrent **multiarch**:

**[http://cdimage.debian.org/debian-cd/7.0.0/multi-arch/bt-cd/](http://cdimage.debian.org/debian-cd/7.0.0/multi-arch/bt-cd/ "Debian 7.0 Wheezy MultiArch - ISO CD Torrent")**

che vi per metterà di scaricare l’immagine ISO del cd di **[Debian](http://www.debian.org/ "Debian")** contenente il solo processo di installazione ed i pacchetti base per costruirvi il vostro sistema da zero.  
Per chi non conoscesse i files torrent e su come scaricarli leggetevi questo articolo

**[http://www.nazionlinux.com/scaricare-torrents-in-sicurezza-con-vuze-transmission/](http://www.nazionlinux.com/scaricare-torrents-in-sicurezza-con-vuze-transmission/ "Scaricare torrents in sicurezza con Vuze & Transmission")**

Invece chi ha installato **[Debian](http://www.debian.org/ "Debian")** precedente alla versione 7.0 deve solamante aprire un terminale, autentificarsi come amministratore di sistema (root)

<div class="wp-terminal">`su <em><password amministratore></em>`</div>editare il file

<div class="wp-terminal">`nano /etc/apt/sources.list`</div>e sotituire il termine:

- buzz
- rex
- bo
- hamm
- slink
- potato
- woody
- sarge
- etch
- lenny
- squeeze

con **wheezy**  
Per esempio il file **sources.list** che avrete se avete installato **Debian 6.0 Squeeze**

> deb http://mirrors.kernel.org/debian/ squeeze main  
> deb-src http://mirrors.kernel.org/debian/ squeeze main
> 
> deb http://security.debian.org/ squeeze/updates main  
> deb-src http://security.debian.org/ squeeze/updates main

sarà mofificato così

> deb http://mirrors.kernel.org/debian/ **wheezy** main  
> deb-src http://mirrors.kernel.org/debian/ **wheezy** main
> 
> deb http://security.debian.org/ **wheezy**/updates main  
> deb-src http://security.debian.org/ **wheezy**/updates main

buzz, rex, bo, hamm, slink, potato, woody, sarge, etch, lenny, squeeze non sono altro che i nomi di tutte le versioni **[Debian](http://www.debian.org/ "Debian")** fino ad oggi.

salvare il file appena modificato (CTRL + O), chiudere il programma **[Nano](http://www.nano-editor.org/ "Nano")** (CTRL + X) e lanciare il comando:

<div class="wp-terminal">`apt-get update && apt-get upgrade`</div>\[ad#Google Adsense 468x15\_4\]