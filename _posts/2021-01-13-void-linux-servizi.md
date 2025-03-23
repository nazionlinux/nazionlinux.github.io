---
id: 1463
title: 'Void Linux servizi'
date: '2021-01-13T23:04:49+02:00'
author: NazionLinux
layout: post
guid: 'https://www.nazionlinux.com/?p=1463'
permalink: /void-linux-servizi/
image: /wp-content/uploads/2021/01/void-linux.webp
categories:
    - Distribuzioni
    - GNU/Linux
    - Sistema
    - Terminale
    - 'Void Linux'
tags:
    - Runit
    - Terminale
---

**Void Linux** non utilizza **Systemd** per l’avvio dei servizi (demoni), ma **Runit** che risulta più modulare e meno invasivo.

Per capire quali servizi partono all’avvio del sistema basta digitare dal [terminale](https://www.nazionlinux.com/xfce-aprire-terminale/) d’amministratore (root)

<div class="wp-terminal">`sv status /var/service/*`</div>oppure da terminale utente

<div class="wp-terminal">`sudo sv status /var/service/*`</div>possiamo anche vedere quali servizi dovrebbero partire, senza controllare se sono funzionanti

<div class="wp-terminal">`ls /var/service/`</div>invece per sapere tutti i servizi disponibili daremo il comando

<div class="wp-terminal">`ls /etc/sv/`</div>per avviare un servizio all’avvio del sistema

<div class="wp-terminal">`ln -s /etc/sv/<strong>servizio</strong> /var/service/`</div>sostituire **servizio** con il servizio da avviare, un esempio pratico

<div class="wp-terminal">`ln -s /etc/sv/apache /var/service/`</div>l’ultimo comando avvia il server **Apache**

invece per riavviare, in questo caso, il server Apache

<div class="wp-terminal">`sv restart /var/service/apache`</div>per fermarlo

<div class="wp-terminal">`sv stop /var/service/apache`</div>per non farlo partire all’avvio, sempre dal [terminale](https://www.nazionlinux.com/xfce-aprire-terminale/) d’amministratore

<div class="wp-terminal">`rm /var/service/apache`</div>