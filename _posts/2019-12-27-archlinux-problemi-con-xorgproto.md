---
id: 1416
title: 'Archlinux: problemi con xorgproto'
date: '2019-12-27T13:06:57+02:00'
author: NazionLinux
layout: post
guid: 'https://www.nazionlinux.com/?p=1416'
permalink: /archlinux-problemi-con-xorgproto/
image: /wp-content/uploads/2013/10/10243448844_63816f9f75_o.jpg
categories:
    - 'Arch Linux'
    - Distribuzioni
    - GNU/Linux
    - Sistema
    - X11
tags:
    - pacman
---

#### Archlinux problemi con xorgproto

  
Durante l’ultimo aggiornamento ha molti di voi sarà capitato di ricevere come errore

> :: installing xorgproto (2019.2-2) breaks dependency ‘inputproto’ required by lib32-libxi  
> :: installing xorgproto (2019.2-2) breaks dependency ‘dmxproto’ required by libdmx  
> :: installing xorgproto (2019.2-2) breaks dependency ‘xf86dgaproto’ required by libxxf86dga  
> :: installing xorgproto (2019.2-2) breaks dependency ‘xf86miscproto’ required by libxxf86misc

purtroppo dovuto ad una pulizia del server grafico **Xorg**.  
Per risolvere a questo inconveniente bisogna intervenire manualmente sugli aggiornamenti lanciando, da amministratore, il seguente comando

<div class="wp-terminal">`pacman -Rdd libdmx libxxf86dga libxxf86misc && pacman -Syu`</div>potrebbe capitare che il pacchetto **libxxf86misc** quindi basterà sostituire il precedente comando con

<div class="wp-terminal">`pacman -Rdd libdmx libxxf86dga  && pacman -Syu`</div>la guida è stata presa dal sito ufficiale  
<https://www.archlinux.org/news/xorg-cleanup-requires-manual-intervention/>  
e per questo motivo non ci assumiamo nessuna responsabilità in caso di mal funzionamento del vostro sistema.