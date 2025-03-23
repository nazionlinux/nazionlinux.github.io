---
id: 284
title: 'Alla scoperta di JWM'
date: '2012-08-12T19:11:37+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=284'
permalink: /alla-scoperta-di-jwm/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Alla scoperta di JWM, Articolo: http://www.nazionlinux.com/?p=284'
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Debian
    - GNU/Linux
    - Mint
    - Ubuntu
    - X11
tags:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Debian
    - GNU/Linux
    - Mint
    - Ubuntu
    - X11
---

Dopo aver letto che **Debian** cambierà il suo ambiente grafico passando da **Gnome** ad **Xfce** per motivi di spazio, mi sono messo alla ricerca di un ambiente grafico minimale.

Navigando nel [Wiki Archlinux](https://wiki.archlinux.org/index.php/JWM_%28Italiano%29 "Wiki Archlinux") mi sono imbattuto in [**JWM**](http://joewing.net/programs/jwm/ "Joe's Window Mamager")

> **JWM** (Joe’s Window Manager) è scritto in **C** usa all’incirca 5 MB di memoria in condizioni operative normali.  
> La dimensione della versione presente nei [repository ufficiali di Arch Linux](https://wiki.archlinux.org/index.php/Official_Repositories "Official Repositories") è inferiore ai 76 KB (confronto con [Dwm](https://wiki.archlinux.org/index.php/Dwm "Dwm") che è sotto i 17 KB) e sotto i 171 KB una volta installato (confronto con **Dwm** che occupa 68 KB).  
> Una versione minimale compilata consuma approssimativamente 136 KB di spazio su disco e occupa al di sotto di 1500 KB di memoria ram.  
> *Sebbene lo sviluppo di JWM abbia rallentato un po’, Joe Wingbermuehle continua a lavorarci…*.

Jwm ha una barra che può essere posizionata sia orizzontalmente che verticalmente, i menu interamente configurabili, l’orologio, i desktop vituali, una taskbar… il tutto configurabile tramite un semplice file **XML**

L’installazione è semplice, per gli arcieri dal terminale d’amministratore basta eseguire questo comando:

<div class="wp-terminal">`pacman -S jwm`</div>per **Debian** e derivate invece:

<div class="wp-terminal">`apt-get install jwm`</div>per chi volesse può anche conpilarsi il pacchetto manualmente.

Per poterlo avviare come ambiente grafico predefinito bisognerà inserire il comando nel file **.xinitrc** quindi utente normale basterà aprire un terminale ed eseguire:

<div class="wp-terminal">`nano ~/.xinitrc`</div>vi mostro una parte del mio file in rosso le parole da modificare

<div class="wp-terminal">`DEFAULT_SESSION=<strong style="color: #ff0000;">jwm</strong><br></br>case $1 in<br></br>openbox)<br></br>## se si usa Slim ck-launch-session non va messo<br></br>exec dbus-launch openbox-session<br></br>;;<br></br>*)<br></br>## se si usa Slim ck-launch-session non va messo<br></br>exec dbus-launch $DEFAULT_SESSION<br></br>;;<br></br>esac`</div>a questo punto bisognerà andare a modificare anche il file di configurazione di **[Slim](https://wiki.archlinux.org/index.php/Display_Manager_%28Italiano%29 "Simple Login Manager")** oppure del vostro gestore di accessi: **Grub**, **LightDM**… per semplicità vi descrivo come modificare **slim.conf**

da terminale di amministratore:

<div class="wp-terminal">`nano /etc/slim.conf`</div>trovate la riga

> sessions openbox,razor-qt,dwm,xfce4

ed aggiungete jwm

> sessions **jwm**,openbox,razor-qt,dwm,xfce4

salvate il file con premendo i tasti **CTRL + O** confermate con **INVIO** ed uscite **CTRL + X**.

Adesso non vi rimane che copiarvi il file di configurazione di Jwm aprite un terminale da utente normale e date il comando:

<div class="wp-terminal">`cp -i /etc/system.jwmrc ~/.jwmrc`</div>per le modifche potete leggervi la guida [http://joewing.net/programs/jwm/config.shtml](http://joewing.net/programs/jwm/config.shtml "Configurare JWM") che purtroppo è solo in inglese oppure la guida da [https://wiki.archlinux.org/index.php/JWM\_%28Italiano](https://wiki.archlinux.org/index.php/JWM_%28Italiano "Configurare JWM").