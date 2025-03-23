---
id: 1535
title: 'LDM &#8211; Lightweight Device Mounter'
date: '2022-02-25T13:35:24+02:00'
author: NazionLinux
layout: post
guid: 'https://www.nazionlinux.com/?p=1535'
permalink: /ldm-lightweight-device-mounter/
image: /wp-content/uploads/2022/02/ldm.png
categories:
    - 'Arch Linux'
    - Debian
    - Deepin
    - Distribuzioni
    - Fedora
    - GNU/Linux
    - Mint
    - Sistema
    - Slackware
    - Ubuntu
    - 'Void Linux'
tags:
    - mount
    - Terminale
    - udev
    - umount
---

Montare i dischi non è mai stato cosi facile grazie a questo è un piccolo programma di **LemonBoy**.

**LDM** è un programma di montaggio che segue la filosofia UNIX ed è programmato in C e basato su **udev** e **libmount**.

L’utente può utilizzare **umount** per smontare i dispositivi o il comando **ldmc** con l’opzione **-r**.

`ldmc -r`

Per installare il programma:

## Archlinux

`pacman -S ldm`

## Voidlinux

`xbps-install -S ldm`

Può essere avviato come demone con il comando **ldmc**.

Per la documentazione la trovate su <https://github.com/LemonBoy/ldm>