---
id: 1482
title: 'Firefox colorare la scheda attiva'
date: '2021-08-31T10:28:50+02:00'
author: NazionLinux
layout: post
guid: 'https://www.nazionlinux.com/?p=1482'
permalink: /firefox-colorare-la-scheda-attiva/
image: /wp-content/uploads/2014/05/14099912203_cac8c51d88_o.jpg
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Cinnamon
    - Debian
    - Deepin
    - Deepin
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
    - Papyros
    - Slackware
    - Ubuntu
    - Unity
    - 'Void Linux'
    - Xfce
tags:
    - firefox
---

In **Firefox** abbiamo notato che c’è poca differenza di colore tra la scheda attiva e le altre c’è un piccolo trucco su come colorare la scheda attiva.

La prima cosa da fare è avviare Firefox e sulla barra degli indirizzi scrivere

**about:config**

ora cliccate su sul pulsante **Accetto i rischi** (questa voce potrebbe cambiare con le nuove versioni), si aprirà una finestra con una nuova barra nella quale scrivere o cercare

**toolkit.legacyUserProfileCustomizations.stylesheets**

a questo punto modificate la voce da **false** in **true** e chiudete **Firefox**

Adesso bisogna aprire il file manager e andare nella cartella **~/.mozilla/firefox/** dove troverete la cartella utente del vostro profilo **Firefox** nel nostro caso è **nazionlinux.default** all’interno di questa cartella creare una nuova cartella chiamata **chrome** tutto in minuscolo all’interno della quale create un file di nome **userChrome.css** che dovrà contenere i seguenti comandi

> .tab-background\[selected=”true”\], .tab-background\[multiselected=”true”\] {  
> background-image: none !important; background-color: #ff007f !important;  
> }

Finito.

In breve possiamo riassumere in:

**about:config** -&gt; **toolkit.legacyUserProfileCustomizations.stylesheets** -&gt; **true**

creare la cartella

<div class="wp-terminal">`mkdir -p ~/.mozilla/firefox/nazionlinux.default/chrome`</div>creare il file **userChrome.css**

<div class="wp-terminal">`echo '.tab-background[selected="true"], .tab-background[multiselected="true"] {<br></br>background-image: none !important; background-color: #ff007f !important;<br></br>}' >> userChrome.css`</div>