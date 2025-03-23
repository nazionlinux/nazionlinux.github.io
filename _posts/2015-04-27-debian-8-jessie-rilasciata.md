---
id: 1192
title: 'Debian 8 &#8220;Jessie&#8221; rilasciata'
date: '2015-04-27T10:45:24+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1192'
permalink: /debian-8-jessie-rilasciata/
hl_twitter_has_auto_tweeted:
    - 'Titolo: Debian 8 &#8220;Jessie&#8221; rilasciata, Articolo: http://wp.me/p4ANSQ-je'
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

[![Debian](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2013/12/11389848483_f2024ea111_z.jpg?resize=635%2C307)](http://www.nazionlinux.com/debian-si-aggiorna-alla-versione-7-3/rp_11389848483_f2024ea111_z-jpg/)

Dopo quasi 24 mesi di sviluppo costante del progetto Debian è orgogliosa di presentare il suo nuovo (nome in codice “Jessie”) versione stabile 8, che sarà supportata per i prossimi 5 anni, grazie al lavoro congiunto del [team di sicurezza di Debian](http://security-team.debian.org/) e del [team Debian Long Term di supporto](https://wiki.debian.org/LTS).

“Jessie” arriva con un nuovo sistema init di default, `systemd`. La suite `systemd` offre molte caratteristiche interessanti, come i tempi di avvio più rapidi, cgroups per i servizi, la possibilità di isolare una parte dei servizi. Il sistema di init `sysvinit` è ancora disponibile in “Jessie”.

Il supporto dell’UEFI (“Unified Extensible Firmware Interface”), introdotto con “Wheezy” è stato notevolmente migliorato in Jessie. Ciò comprende il lavoro svolto su molti bug noti del firmware, il supporto per UEFI su sistemi a 32 bit e quello per i kernel a 64-bit con firmware a 32 bit UEFI (con quest’ultimo che verrà incluso solo sul nostro supporto di installazione multi-arch per `amd64/i386`).

A partire dalla versione precedente, i membri del progetto Debian hanno anche fatto importanti miglioramenti ai nostri servizi di supporto. Uno di questi è [una vista sfogliabile di tutto il codice sorgente fornito con Debian](https://www.debian.org/News/weekly/2013/14/#sources) attualmente disponibile su [ sources.debian.net](https://sources.debian.net). Naturalmente, con oltre 20.000 pacchetti sorgenti, può essere abbastanza frustrante individuare il file giusto. Pertanto, siamo anche molto lieti di presentare [Debian Code Search](https://www.debian.org/News/weekly/2014/17/#DCS), disponibile all’indirizzo [ codesearch.debian.net](https://codesearch.debian.net/). Entrambi i servizi sono completati da un [sistema di tracciatura dei pacchetti](https://tracker.debian.org/) completamente riscritto e più responsivo.

Questa versione include numerosi pacchetti software aggiornati, come ad esempio:

- Apache 2.4.10
- Asterisk 11.13.1
- GIMP 2.8.14
- una versione aggiornata dell’ambiente desktop GNOME 3.14
- GNU Compiler Collection 4.9.2
- Icedove 31.6.0 (una versione unbranded di Mozilla Thunderbird)
- Iceweasel 31.6.0esr (una versione unbranded di Mozilla Firefox)
- Aree di lavoro KDE Plasma e KDE Applications 4.11.13
- LibreOffice 4.3.3
- Linux 3.16.7-ckt9
- MariaDB 10.0.16 e MySQL 5.5.42
- Nagios 3.5.1
- OpenJDK 7u75
- Perl 5.20.2
- PHP 5.6.7
- PostgreSQL 9.4.1
- Python 2.7.9 e 3.4.2
- Samba 4.1.17
- Tomcat 7.0.56 e 8.0.14
- Xen Hypervisor 4.4.1
- il desktop environment Xfce 4.10
- più di 43.000 altri pacchetti di software pronto per l’uso, compilati da quasi 20.100 pacchetti sorgenti.

Con questa ampia selezione di pacchetti e la sua tradizionale architettura sostegno ampio, Debian rimane ancora una volta fedele al suo obiettivo di essere il sistema operativo universale. É adatto a molti diversi modi di utilizzo: dai sistemi desktop ai netbook; dal server di sviluppo ai sistemi cluster; e per i server di database, web, o di archiviazione. Allo stesso tempo, gli l’impegno per il controllo della qualità aggiuntive quali l’installazione automatica e i test di aggiornamento per tutti i pacchetti dell’archivio Debian assicurano che “Jessie” soddisferà le aspettative che gli utenti hanno nei confronti di un rilascio stabile di Debian.

Un totale di dieci architetture sono supportate: 32-bit PC / Intel IA-32 (`i386`), 64-bit PC / Intel EM64T / x86-64 (`amd64`), Motorola/IBM PowerPC (`powerpc` per l’hardware più vecchio e `ppc64el` per il nuovo 64-bit (little-endian)), MIPS (`mips` (big-endian) e `mipsel` (little-endian)), IBM S/390 (64-bit `s390x`) e per ARM, `armel` e `armhf` per vecchi e nuovi hardware a 32 bit, più `arm64` per la nuova architettura a 64-bit “AArch64”.

### Volete fare soltanto una prova?

Se si vuole semplicemente provare Debian 8 “Jessie” senza doverlo installare, è possibile utilizzare una speciale immagine, conosciuta come un’immagine live, disponibile per i CD, chiavette USB, e le impostazioni netboot. Per adesso queste immagini sono disponibili solo per le architetture `amd64` e `i386`. È anche possibile utilizzare queste immagini live per installare Debian. Maggiori informazioni sono disponibili dall’[homepage Debian Live](http://live.debian.net/).

Se, invece, si desiderasse installarlo sul disco fisso del computer, è possibile scegliere tra una gamma di supporti di installazione, come ad esempio i dischi Blu-ray, DVD, CD e le chiavette USB, o direttamente dalla rete. Diversi ambienti desktop — GNOME, KDE Plasma Desktop e applicazioni, Xfce, e LXDE — possono essere installati tramite immagini CD; quello desiderato può essere scelto dai menu di avvio dei CD/DVD. Inoltre, sono disponibili dei CD e DVD multi-architettura che supportano l’installazione di molteplici architetture da un solo disco. Oppure si può sempre creare un supporto di installazione USB avviabile (vedere la [Guida all’installazione](https://www.debian.org/releases/jessie/installmanual) per maggiori dettagli). Per gli utenti di cloud Debian offre anche [immagini OpenStack pre-compilate, pronte per l’uso. ](http://cdimage.debian.org/cdimage/openstack/current/)

[ Le immagini di installazione possono essere scaricate già da adesso tramite ](http://cdimage.debian.org/cdimage/openstack/current/)[bittorrent](https://www.debian.org/CD/torrent-cd/) (metodo consigliato), [jigdo](https://www.debian.org/CD/jigdo-cd/#which) o [HTTP](https://www.debian.org/CD/http-ftp/); vedere [Debian su CD](https://www.debian.org/CD/) per ulteriori informazioni. “Jessie” sarà presto disponibile su DVD, CD-ROM, e dischi Blu-ray fisici anche presso numerosi rivenditori.

### Aggiornamento di Debian

Gli aggiornamenti a Debian 8 dalla versione precedente, Debian 7 (nome in codice “Wheezy”), vengono gestiti automaticamente dallo strumento per la gestione dei pacchetti apt-get per la maggior parte delle configurazioni. Come sempre, i sistemi Debian possono essere aggiornati senza problemi, sul posto, senza alcuna interruzione di servizio forzata, ma si raccomanda vivamente di leggere le [note di rilascio](https://www.debian.org/releases/jessie/releasenotes) e la [guida di installazione](https://www.debian.org/releases/jessie/installmanual) per evitare possibili problemi, e per avere le istruzioni dettagliate sull’installazione e l’aggiornamento. Le note di rilascio verranno ulteriormente migliorate e tradotte in ulteriori lingue nelle settimane dopo il rilascio.

### Informazioni su Debian

Debian è un sistema operativo libero, sviluppato da migliaia di volontari provenienti da tutto il mondo che collaborano tramite Internet. Punti di forza del progetto Debian sono la base di volontariato, la sua dedizione al Contratto Sociale Debian e al Software Libero, e il suo impegno a fornire il miglior sistema operativo possibile. Debian 8 è un altro passo importante in questa direzione.

fonte: [https://www.debian.org/News/2015/20150426](https://www.debian.org/News/2015/20150426 "Debian 8 Jessie")