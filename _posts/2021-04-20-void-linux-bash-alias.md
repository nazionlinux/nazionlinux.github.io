---
id: 1475
title: 'Void Linux bash alias'
date: '2021-04-20T18:00:00+02:00'
author: NazionLinux
layout: post
guid: 'https://www.nazionlinux.com/?p=1475'
permalink: /void-linux-bash-alias/
footnotes:
    - ''
image: /wp-content/uploads/2021/01/void-linux.webp
categories:
    - GNU/Linux
    - 'Void Linux'
tags:
    - nano
    - Terminale
    - Xbps
---

Digitare dal terminale d’amministratore (root) il comando:

<div class="wp-terminal">`nano /root/.bashrc`</div>Nano è l’editor di testo ma potete utilizzare quello che preferite.  
Ora inserite il seguente codice

> \## Void Xbps Alias  
> \##—————-  
> \## Xbps Up Date aggiorna il database  
> xud() { xbps-install -S; }  
> \## Xbps Up Grade aggiorna il database dei pacchetti e aggiorna la distribuzione equivale a dist-upgrade di Debian  
> xug() { xbps-install -Su; }  
> \## Xbps Up Grade Yes aggiorna il database dei pacchetti e aggiorna la distribuzione senza chiedere conferma  
> xugy() { xbps-install -Syu; }  
> \## Xbps Install Package installa molteplici pacchetti  
> xip() { xbps-install $\*; }  
> \## Xbps Update Package aggiorna un singolo pacchetto  
> xup() { xbps-install -u $1; }  
> \## Xbps Search Package cerca pacchetto  
> xsp() { xbps-query -Rs $1; }  
> \## Xbps Remove Package rimuove il pacchetto  
> xrp() { xbps-remove $1; }  
> \## Xbps Remove Package Dependencies (Deep) rimuove il pacchetto e le sue dipendenze  
> xrpd() { xbps-remove -R $1; }  
> \## Xbps Remove &amp; Clean rimuove i pacchetti orfani e pulisce la cache del repository  
> xrc() { xbps-remove -Oo; }

Salvate il file con i tasti **Ctrl + o** confermate premendo il tasto **Invio** e uscite da **Nano** con i tasti **Ctrl + x**  
Abbiamo lasciato anche i commenti.  
Ora per fare una ricerca dei pacchetti basterà lanciare il comando

<div class="wp-terminal">`xsp <em>nome pacchetto</em>`</div>Per esempio

<div class="wp-terminal">`xsp nano`</div>