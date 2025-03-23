---
id: 445
title: 'Archlinux: passaggio da MySQL a MariaDB'
date: '2013-03-28T15:57:39+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=445'
permalink: /archlinux-passaggio-da-mysql-a-mariadb/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Archlinux: passaggio da MySQL a MariaDB, Articolo: http://www.nazionlinux.com/?p=445'
categories:
    - 'Arch Linux'
    - Distribuzioni
    - GNU/Linux
    - Sistema
tags:
    - 'Arch Linux'
    - MariaDB
    - MySQL
---

**[MariaDB](https://www.mariadb.org "MariaDB")** ha ufficialmente sostituito MySQL anche in **Archlinux**.  
Per tutti gli utenti che utilizzano **Archlinux** si raccomanda di eseguire l’aggiornamento da  
MySQL a **[MariaDB](https://www.mariadb.org "MariaDB")** inquanto, nelle prossime settimane, il database MySQL passerà dal deposito ufficiale a quelli **[AUR](https://aur.archlinux.org/?setlang=it "Arch User Repository")** **Arch User Repository**.  
La procedura non è molto complicata.  
La prima cosa da fare è fermare il demone MySQL aprendo un terminale come amministratore ed eseguire il comando:

<div class="wp-terminal">`systemctl stop mysqld`</div>si suppone che siete già passati a **Systemd** in caso contrario consultare  
**[https://wiki.archlinux.org/index.php/Systemd\_%28Italiano%29  ](https://wiki.archlinux.org/index.php/Systemd_%28Italiano%29 "Wiki Archlinux: Systemd")**

Prima di installare **[MariaDB](https://www.mariadb.org "MariaDB")** vi consiglio di aggiornare il sistema con il comando:

<div class="wp-terminal">`pacman -Syu`</div>confermare l’installazione dei pacchetti con il tasto **S** ed esguire il comando per installare i pacchetti:

<div class="wp-terminal">`pacman -S mariadb libmariadbclient mariadb-clients`</div>dopo aver installati i pacchetti bisogna riavviare il demone

<div class="wp-terminal">`systemctl start mysqld`</div>ed infine eseguire il comando

<div class="wp-terminal">`mysql_upgrade -p`</div>