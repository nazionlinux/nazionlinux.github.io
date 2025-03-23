---
id: 249
title: 'Velocizzare la nostra distribuzione GNU/Linux con lo Swappiness Tuning'
date: '2013-09-18T09:15:20+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=249'
permalink: /velocizzare-la-nostra-distribuzione-gnulinux-con-lo-swappiness-tuning/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Velocizzare la nostra distribuzione GNU/Linux con lo Swappiness Tuning, Articolo: http://www.nazionlinux.com/?p=249'
image: /wp-content/uploads/2013/12/12124773174_4ea1263a58_z.jpg
categories:
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Mint
    - Sistema
    - Ubuntu
tags:
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Mint
    - Sistema
    - Ubuntu
---

#### Happy swappiness

La partizione di swap non è altro che un file.  
Logicamente scrivere un file nella partizione swap risulta molto più lento che scriverlo direttamente nella memoria RAM.  
Lo swap file viene controllato e gestito da una variabile del kernel chiamata “swappiness”.  
Questa variabile può avere un valore da 0 a 100.  
Per conoscere il valore attuale basta lanciare da terminale il comando:

<div class="wp-terminal">`cat /proc/sys/vm/swappiness`</div>Il valore predefinito dovrebbe essere **60**.  
Quanto più il valore della variabile swappiness è alto, maggiore sarà la probabilità di scrivere i dati sulla partizione di swap.  
Un modo per ottenere delle prestazioni migliori, consiste nel diminuire il valore di questa variabile.  
Per modificare tale valore basta lanciare da **terminale di amministratore** il comando:

<div class="wp-terminal">`sysctl -w vm.swappiness=10`</div>questa operazione tuttavia non rende definitiva la modifica quindi al riavvio del sistema il valore ritornerà a 60.  
Per rendere definitiva la modifica bisogna editare, sempre tramite il terminale di amministratore, il file **sysctl.conf**

<div class="wp-terminal">`nano /etc/sysctl.conf`</div>ed aggiungere la riga **vm.swappiness=10** alle fine del file.  
Ottenendo all’incirca questo schema

> \#  
> \# Kernel sysctl configuration  
> \#
> 
> \# Disable packet forwarding  
> net.ipv4.ip\_forward=0
> 
> \# Disable the magic-sysrq key (console security issues)  
> kernel.sysrq = 0
> 
> \# Enable TCP SYN Cookie Protection  
> net.ipv4.tcp\_syncookies = 1
> 
> **vm.swappiness=10**

Premere contemporaneamente i tasti **CTRL + O** per salvare il file e **CTRL + X** per uscire da nano.  
C’è chi consiglia addirittura di impostare il valore **vm.swappiness** a 0 il mio consiglio invece è quello di provare prima con un valore di 10 e di eseguire questa operazione con macchine che hanno almeno un 1Gb di RAM.  
L’ aumento delle prestazioni si noterà soprattutto nei computer datati.

**<span style="color: #ff0000;">\*\*\* ATTENZIONE \*\*\*</span>**

A partire dalla versione **207** di Systemd le impostazioni lette da **/etc/sysctl.conf** non saranno più valide.  
**Systemd** applicherà solo quelle lette nei files della cartella **/etc/sysctl.d/**

Con l’aggiornamento di **procps-ng-3.3.8-3**, bisognerà muovere e rinominare il file **/etc/sysctl.conf** e posizionarlo nella cartella **/etc/sysctl.d/**  
per farlo basta lanciare, sempre da un terminale di amministratore, il comando:

<div class="wp-terminal">`mv /etc/sysctl.conf.pacsave /etc/sysctl.d/99-sysctl.conf`</div>