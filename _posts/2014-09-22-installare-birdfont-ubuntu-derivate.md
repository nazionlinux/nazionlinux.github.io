---
id: 1106
title: 'Installare Birdfont su Ubuntu e derivate'
date: '2014-09-22T09:15:16+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1106'
permalink: /installare-birdfont-ubuntu-derivate/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Installare Birdfont su Ubuntu e derivate, Articolo: http://wp.me/p4ANSQ-hQ'
image: /wp-content/uploads/2014/04/13563709203_17e995a5d1_o.jpg
categories:
    - Distribuzioni
    - GNU/Linux
    - Mint
    - Ubuntu
tags:
    - birdfont
    - font
---

[![Birdfont](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2014/04/13563709203_17e995a5d1_o.jpg?resize=610%2C300)](http://www.nazionlinux.com/migliorare-i-carettari-con-infinality/rp_13563709203_17e995a5d1_o-jpg/)

**[Birdfont](http://birdfont.org "Birdfont")** è un progetto a codice aperto ospitato nei i depositi PPA (Personal Package Archives) di **[Ubuntu](http://www.ubuntu-it.org/ "Ubuntu Italia")** che serve per editare e creare le lettere che andranno a comporre i caratteri per il nostro testo.

Con **Birdfont** possiamo creare files in formato TTF, EOT e SVG.  
Birdfont ci permette di creare anche delle lettere da un immagine come possiamo vedere in questo video

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" frameborder="0" height="675" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/pJD5HDf9OOE?feature=oembed" title="Create a vector font from images" width="1200"></iframe>

Il discorso su come migliorare i caratteri nel mondo **GNU/Linux** lo abbiamo già descritto nell’articolo **[Migliorare i carettari con Infinality](http://www.nazionlinux.com/migliorare-i-carettari-con-infinality/ "Migliorare i carettari con Infinality")**, ma con **Birdfont** ne possiamo creare di nuovi e soprattutto personalizzarli.

Birdfont si installa tramite i depositi PPA (Personal Package Archives) tramite terminale

<div class="wp-terminal">`sudo add-apt-repository ppa:ubuntuhandbook1/birdfont`</div>poi bisognerà aggiornare il database con il comando

<div class="wp-terminal">`sudo apt-get update`</div>ed infine instllare Birdfont con il comando

<div class="wp-terminal">`sudo apt-get install birdfont`</div>se il programma non ci piace lo possiamo eliminare con il comando

<div class="wp-terminal">`sudo apt-get remove birdfont`</div>Ogni volta che si lancia un comando tramite **sudo** vi verrà richiesta la password.