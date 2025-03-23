---
id: 682
title: 'Navigare &#8220;anonimi&#8221; con Tor'
date: '2013-10-13T12:00:08+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=682'
permalink: /navigare-anonimi-con-tor/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Navigare &#8220;anonimi&#8221; con Tor, Articolo: http://www.nazionlinux.com/?p=682'
categories:
    - 'Arch Linux'
    - Debian
    - GNU/Linux
    - Mint
    - Slackware
    - Ubuntu
tags:
    - chrome
    - chromium
    - firefox
    - Iceweasel
    - Tor
---

Partendo dal principio che l’anonimato in rete al 100% non esiste c’è comunque la possibilità didifendere la nostra privacy e navigare in modo sicuro.  
**[Tor](https://www.torproject.org/ "Tor")** è una rete parallela alla rete tradizionale con l’unica differenza che la nostra navigazione sarà protetta da occhi indiscreti.  
Per installare **Tor** su **Debian** e **ArchLinux** aprite un terminale e autentificatevi come amministratore di sistema col comando

<div class="wp-terminal">`su`</div>in **Ubuntu** e derivate (**Linux Mint**, **ElementaryOs**…) o Fedora e derivate (**CentOs**…)

<div class="wp-terminal">`sudo -s`</div>ed installatevi il pacchetto **Tor**

**ArchLinux**

<div class="wp-terminal">`pacman -S tor`</div>**Debian** e derivate (**Ubuntu**, **Linux Mint**, **ElementaryOs**…)

<div class="wp-terminal">`apt-get install tor`</div>**Fedora** e derivate (**CentOs**, **OpenSuse**…)

<div class="wp-terminal">`yum install tor`</div>Terminata l’installazione a seconda se il sistema utilizzi **Systemd** o il vecchio **SysVinit** bisognerà (sempre da amministratore di sistema) lanciare il comando

<div class="wp-terminal">`systemctl start tor`</div>oppure per initscripts **SysVinit**

<div class="wp-terminal">`/etc/init.d/tor start`</div>Non abbiamo ancora finito adesso bisognerà configurare il navigatore o installarlo

Procedura per **Firefox/Iceweasel**

Prima di tutto controllate che **Firefox** sia installato nel vostro sistema in caso contrario su **Debian** e **ArchLinux** aprite un terminale e autentificatevi come amministratore di sistema col comando

<div class="wp-terminal">`su`</div>in **Ubuntu** e derivate (**Linux Mint**, **ElementaryOs**…) o Fedora e derivate (**CentOs**…)

<div class="wp-terminal">`sudo -s`</div>ed installatelo

**ArchLinux**

<div class="wp-terminal">`pacman -S firefox firefox-i18n-it`</div>vi consiglio di leggervi anche **[Firefox sempre in italiano](http://www.nazionlinux.com/firefox-sempre-in-italiano/ "Firefox sempre in italiano")**

in **Debian**, per motivi di licenza, **Firefox** si chiama **Iceweasel**

<div class="wp-terminal">`apt-get install iceweasel iceweasel-l10n-fi`</div>in **Ubuntu** e derivate **Firefox** dovrebbe essere già installato come **Fedora** e derivate.

Terminata l’installazione **[Firefox](http://www.mozilla.org/it/firefox/new/ "Firefox")** nella barra degli indirizzi digitare **about:config** (nella barra degli indirizzi e **NON in quella della ricerca**) e premere il tasto **INVIO**.

Si aprirà una pagina particolare nella quale è presente un pulsante con scritto **Farò attenzione, prometto** cliccare 1 volta sul pulsante col il tasto sinistro del mouse (per chi ha i tasti inverti col il tasto destro).

![farattenzione](https://i0.wp.com/farm8.staticflickr.com/7292/10243218006_1b71a62f77_o.png?resize=801%2C286 "farattenzione")

La schermata successiva conterrà moltissime voci, a questo punto, bisognerà cercare la voce **network.proxy.socks\_remote\_dns**.

Per farlo scrivere, nella barra, dove a sinistra c’è scritto **<span style="text-decoration: underline;">C</span>erca**, la parola **network.proxy.socks\_remote\_dns**.

Una volta individuata la stringa bisognerà cliccarci sopra 2 volte per far cambiare il valore da false a **true**.

Questa volta nella barra degli indirizzi di digitare **about:preferences** (nella barra degli indirizzi e **NON in quella della ricerca**) e premere il tasto **INVIO**.  
Cliccate sull’ultimo pulsante a destra con scritto **Avanzate** poi su **Rete** e per finire sul pulsante **Impostazioni** e configurate in modo da ottenere questo risulatato

![imposta-connessioni](https://i0.wp.com/farm8.staticflickr.com/7296/10243216485_0a6eae264c_o.png?resize=549%2C515 "imposta-connessioni")

Cliccate sul pulsante **Ok** per confermare la modifica

Chiudere **[Firefox](http://www.mozilla.org/it/firefox/new/ "Firefox")** e riavviatelo.Tor

Procedura per **Chromium**

Una volta avviato **Tor** basterà semplicemente lanciare **Chromium**, da un terminale utente, in questo modo

<div class="wp-terminal">`chromium --proxy-server="socks://localhost:9050"`</div>vi consiglio leggere queste due guide **[Semplice trucco Xfce](http://www.nazionlinux.com/semplice-trucco-xfce/ "Semplice trucco Xfce")** e [Come creare un avviatore .desktop](http://www.nazionlinux.com/come-creare-un-avviatore-desktop/ "Come creare un avviatore .desktop") per non dover ogni volta lanciare **Chromium** da terminale.

Per controllare se tutto è andato a buon fine andate a questo indirizzo **[https://check.torproject.org/](https://check.torproject.org/ "Check Tor")** e dovrebbe comparire una cipolla verde con scritto

<div style="text-align: center;">![Tor](https://i0.wp.com/check.torproject.org/images/tor-on.png?resize=128%2C128&ssl=1)> Congratulations. Your browser is configured to use Tor.

</div>Esiste anche un motore di ricerca interno alla rete **Tor** all’indirizzo **[https://ahmia.fi](https://ahmia.fi "Ahmia.fi")**