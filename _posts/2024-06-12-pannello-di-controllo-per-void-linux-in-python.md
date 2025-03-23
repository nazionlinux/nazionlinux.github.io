---
id: 1653
title: 'Pannello di controllo per Void Linux in python'
date: '2024-06-12T06:48:12+02:00'
author: NazionLinux
layout: post
guid: 'https://www.nazionlinux.com/?p=1653'
permalink: /pannello-di-controllo-per-void-linux-in-python/
image: /wp-content/uploads/2024/06/immagine.png
categories:
    - Distribuzioni
    - GNU/Linux
    - Sistema
    - Terminale
    - 'Void Linux'
tags:
    - python
---

**Void Linux Control Panel** è un semplice pannello di controllo scritto in **python** per gestire la vostra distribuzione **GNU/Linux** direttamente dal terminale.

Con questo script potete gestire l’installazione dei pacchetti o la loro rimozione ed anche la rimozione dei vecchi kernels.

Non c’è bisogno di installazione basta che nel vostro sistema è installata una versione di **Python3** che potete controllare con il comando:

`xbps-query -Rs python`

o con il nostro comando abbreviato **xsp** seguendo la guida [**https://www.nazionlinux.com/void-linux-bash-alias/**](https://www.nazionlinux.com/void-linux-bash-alias/)

`xsp python`

Può essere modificato per qualsiasi distribuzione ed il codice sorgente lo potete trovare su [**https://github.com/nazionlinux/Void-Linux-Control-Panel**](https://github.com/nazionlinux/Void-Linux-Control-Panel)

Basterà scompattare l’archivio e lanciare il comando

`python vlcp.py`