---
id: 1130
title: 'Pidgin e msn ancora funziona'
date: '2014-11-24T10:11:28+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1130'
permalink: /pidgin-e-msn-ancora-funziona/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Pidgin e msn ancora funziona, Articolo: http://wp.me/p4ANSQ-ie'
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Cinnamon
    - Debian
    - Distribuzioni
    - Enlightenment
    - Fedora
    - Gnome
    - GNU/Linux
    - Kde
    - Lxde
    - Lxqt
    - Mate
    - Mint
    - Openbox
    - Slackware
    - Ubuntu
    - Unity
    - Xfce
tags:
    - msn
    - pidgin
    - python
---

[![pidgin](https://i0.wp.com/farm8.staticflickr.com/7513/15670878490_2f1507e31a_o.png?resize=610%2C300 "pidgin")](http://www.flickr.com/photos/12418137@N07/15670878490/ "pidgin")

Molti utilizzatori di **[Pidgin](https://www.pidgin.im/ "Pidgin")** si sono ritrovati a non poter contattare i propri contatti su msn perchè il programma non si collegava più.

Per risolvere questo problema bisogna andare a modificare la libreria **libmsn.so**.  
Abbiamo provato questo metodo su una macchina sulla quale girava **[Archlinux](http://www.archlinux.it "ArchLinux")** a **64 bit** e quindi non è detto che la libreria **libmsn.so** si trovi nella stessa cartella di questo esempio.

Per trovare il file **libmsn.so** lanciate da terminale il comando

<div class="wp-terminal">`find /usr/lib -name libmsn.so`</div>oppure il più veloce

<div class="wp-terminal">`locate libmsn.so`</div>il comando **locate** risulta più veloce, ma deve essere installato, in alcune distribuzioni come ad esempio la nostra **[Arch Linux](http://www.archlinux.it "Arch Linux")** non è presente.

Individuata la cartella autentificatevi come amministratore di sistema con il comando

<div class="wp-terminal">`su`</div>e spostatevi nella cartella dove si trova il file **libmsn.so** nel nostro caso

<div class="wp-terminal">`cd /usr/lib/purple-2/`</div>non vi resta che scaricare il file **patch.py** in questo modo

<div class="wp-terminal">`wget -c https://gist.githubusercontent.com/dequis/77b478f35f93f64ac640/raw/164ea64b8db31f1d6d2aecb9b4a20e9b84b29770/patch.py`</div>ora dovete controllare la versione di **[Python](http://www.python.it/ "Python")** che gira nel vostro sistema lanciando il comando

<div class="wp-terminal">`python --version`</div>la versione di **Python** deve essere superiore **2.7** se non è presente ve lo dovete installare!

Per sicurezza facciamo una copia del file **libmsn.so**

<div class="wp-terminal">`cp libmsn.so libmsn.so.bak`</div>ora dobbiamo applicare la modifica al file **libmsn.so**

<div class="wp-terminal">`python patch.py libmsn.so`</div>verrà generato un file di nome **libmsn.so.out** che basterà rinomminarlo

<div class="wp-terminal">`cp libmsn.so.out libmsn.so`</div>e confermare la sovrascrittura del file.  
Se tutto è andato a buon fine lanciate **[Pidgin](https://www.pidgin.im/ "Pidgin")** e ricordatevi di cancellare i files **patch.py** e **libmsn.so.bak** nella cartella **purple-2**