---
id: 1444
title: 'Tabella comparativa comandi'
date: '2020-12-14T22:11:43+02:00'
author: NazionLinux
layout: post
guid: 'https://www.nazionlinux.com/?p=1444'
permalink: /tabella-comparativa-comandi/
image: /wp-content/uploads/2020/12/Void_Linux-1.webp
categories:
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Sistema
    - Terminale
    - 'Void Linux'
tags:
    - Terminale
---

<figure class="wp-block-table is-style-stripes">|  | Void Linux | Arch Linux | Debian |
|---|---|---|---|
| aggiorna il database dei pacchetti | xbps-install -S | pacman -Syy | apt update |
| aggiorna il database dei pacchetti e la distribuzione | xbps-install -Suv | pacman -Syu | apt full-upgrade |
| aggiorna il database dei pacchetti e la distribuzione senza chiedere conferma | xbps-install -Syu |  |  |
| installa un singolo pacchetto | xbps-install -S *pacchetto* | pacman -S *pacchetto* | apt install *pacchetto* |
| aggiorna un singolo pacchetto | xbps-install -u *pacchetto* |  |  |
| cerca pacchetto | xbps-query -s *pacchetto* | pacman -Ss *pacchetto* | apt search *pacchetto* |
| disinstalla singolo pacchetto | xbps-remove *pacchetto* | pacman -R *pacchetto* | apt remove *pacchetto* |
| disinstalla il pacchetto e le sue dipendenze   Debian rimuove i files di configurazione | xbps-remove -R *pacchetto* | pacman -Rs *pacchetto* | apt purge *pacchetto* |
| disinstalla i pacchetti orfani e pulisce la cache del repository | xbps-remove -Oo | pacman -R $(pacman -Qdtq) | apt-get autoclean |

</figure>#### Tabella comandi Void Linux – Arch Linux – Debian