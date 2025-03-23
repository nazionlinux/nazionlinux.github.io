---
id: 1693
title: 'Script bash per l&#8217;avvio dei servizi su Void Linux'
date: '2025-03-21T12:30:51+02:00'
author: NazionLinux
layout: post
guid: 'https://www.nazionlinux.com/?p=1693'
permalink: /script-bash-per-lavvio-dei-servizi-su-void-linux/
image: /wp-content/uploads/2021/01/void-linux.webp
categories:
    - Distribuzioni
    - GNU/Linux
    - Sistema
    - 'Void Linux'
tags:
    - fzf
---

Abbiamo preso spunto da uno script bash di **Derek Taylor** per gestire i servizi all’avvio di **Void Linux**.

Qui potete trovare lo script originale <https://gitlab.com/dwt1/fzscripts> invece potete scaricare il nostro script modificato da questo collegamento:

<https://www.nazionlinux.com/dotfiles/services.sh>

Prima di avviare lo script bisogna installare **fzf** con il comando:

`sudo xbps-install fzf`

o se avete seguito il nostro articolo <https://www.nazionlinux.com/void-linux-bash-alias/> basterà eseguire alias:

`xip fzf`

una volta installato dovete rendere lo script **services.sh** eseguibile con il comando:

`chmod +x service.sh`

ora potete avviare lo script con il comando:

`sudo ./services.sh`

\*\*\* **ATTENZIONE** \*\*\* Abbiamo volutamente (per sicurezza) commentato la riga 70 e 90 dove ci sono i comandi per creare o eliminare i collegamenti per avviare i servizi decommentate queste due righe se siete sicuri di ciò che fate.