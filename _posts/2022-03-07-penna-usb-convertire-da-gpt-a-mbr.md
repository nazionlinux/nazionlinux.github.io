---
id: 1541
title: 'Penna USB convertire da GPT a MBR'
date: '2022-03-07T12:09:25+02:00'
author: NazionLinux
layout: post
guid: 'https://www.nazionlinux.com/?p=1541'
permalink: /penna-usb-convertire-da-gpt-a-mbr/
image: /wp-content/uploads/2022/03/sakura.png
categories:
    - GNU/Linux
    - Sistema
    - Terminale
---

Apriamo un [terminale](https://www.nazionlinux.com/xfce-aprire-terminale/) e digitiamo:

`lsblk`

comparirà la lista di dispositivi dove **SD\*** sono i dischi fissi mentre **SR\*** sono CD, DVD…

<figure class="wp-block-image size-full">![](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2022/03/sakura.png?resize=838%2C282&ssl=1)</figure>e la varie partizioni ad esempio **sda1** oppure **sdb1**, **sdb2** ora supponiamo che la nostra penna USB sia **sdb**

a questo punto basterà lanciare il comando da terminale amministratore:

`cfdisk -z /dev/sdb`

comparirà un menu dove si dovrà selezionare la voce **dos**

<div class="wp-block-image"><figure class="aligncenter size-full">![](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2022/03/cfdisk.png?resize=250%2C134&ssl=1)</figure></div>\* **cfdisk -z** l’opzione -z non azzera la tabella delle partizioni sul disco, ma avvia il programma senza leggere la tabella delle partizioni esistente, consentendo di creare una nuova tabella delle partizioni da zero.