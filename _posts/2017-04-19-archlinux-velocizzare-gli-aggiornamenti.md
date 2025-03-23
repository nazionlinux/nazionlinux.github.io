---
id: 1296
title: 'Archlinux velocizzare gli aggiornamenti'
date: '2017-04-19T16:19:09+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1296'
permalink: /archlinux-velocizzare-gli-aggiornamenti/
image: /wp-content/uploads/2013/10/10243448844_63816f9f75_o.jpg
categories:
    - 'Arch Linux'
    - Distribuzioni
    - GNU/Linux
    - Sistema
    - Terminale
tags:
    - 'Arch Linux'
    - pacman
    - Terminale
---

#### Archlinux server mirror

**Archlinux** è una distribuzione molto supportata a livello mondiale.  
Esistono molti siti (mirror) che permettono di scaricare i pacchetti per **Archlinux** per avere un idea basta visitare la pagina **<https://www.archlinux.org/mirrorlist/all/>** che contiene tutti i mirror divisi per nazioni.  
Per avere una migliore velicità bisognerebbe fare il ping ad ognuno dei siti e trovare i server mirror che rispondono nel minor tempo.  
Esiste una procedura abbastanza semplice per fare tutto ciò, aprire un terminale e autentificarsi come amministratore.  
Per sicurezza fare una copia del file **mirrorlist** con il comando

<div class="wp-terminal">`cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.backup`</div>per comodità spostiamoci in

<div class="wp-terminal">`cd /etc/pacman.d/`</div>ora dobbiamo decommentare tutti i server con il comando

<div class="wp-terminal">`sed '/^#\S/ s|#||' -i mirrorlist.backup`</div>il precedente comando non fa altro che eliminare il simbolo **\#** (cancelletto) nel file **mirrorlist.backup** decommentando tutti i server.  
Ora lanciamo il comando

<div class="wp-terminal">`rankmirrors -n 6 mirrorlist.backup > mirrorlist`</div>**6** sono il numero di quanti server mirror vogliamo usare nel file **mirrorlist**.

Per finire bisognare poi eseguire il comando

<div class="wp-terminal">`pacman -Syy`</div>per aggiornare la lista dei server mirror ed il comando

<div class="wp-terminal">`pacman -Syu`</div>per aggiornare la nostra distribuzione **Archlinux**.

Esiste anche una versione web per generare il file **mirrorlist** alla pagina **<https://www.archlinux.org/mirrorlist/>** dove è possibile selezionare i server per nazione ed il tipo ti protocollo: http, https, IPv4, IPv6