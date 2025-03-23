---
id: 649
title: 'Archlinux compilare pacchetti da AUR'
date: '2013-10-08T16:43:15+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=649'
permalink: /archlinux-compilare-pacchetti-da-aur/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Archlinux compilare pacchetti da AUR, Articolo: http://www.nazionlinux.com/?p=649'
image: /wp-content/uploads/2014/02/10243448844_00922de6d7_z.jpg
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Distribuzioni
    - Enlightenment
    - Gnome
    - GNU/Linux
    - Kde
    - Openbox
    - Xfce
tags:
    - 'Arch Linux'
    - AUR
    - gsharkdown
---

[![archlinux](https://i0.wp.com/farm8.staticflickr.com/7436/10243448844_63816f9f75_o.jpg?resize=610%2C300 "archlinux")](http://www.flickr.com/photos/12418137@N07/10243448844/ "archlinux")

**[AUR](https://aur.archlinux.org "AUR - Arch User Repository")** **Arch User Repository**

Prendiamo per esempio un piccolo programma **gsharkdown** che ci permette di ricercare, ascoltare e **\* scaricare** gratuitamente musica dal sito **[www.groveshark.com](http://www.groveshark.com "Groveshark")**.  
Al momento **gsharkdown** non è presente nei depositi ufficiuali di **[Archlinux](http://www.archlinux.it "Archlinux")**, ma presente in **[AUR](https://aur.archlinux.org "AUR - Arch User Repository")**.  
Primo passo aprire un terminale e lanciate il comando

<div class="wp-terminal">`su`</div>inserite la password dell’amministratore (**root**).  
Il successivo comando aggionerà il database dei pacchetti ed aggiornerà il sistema

<div class="wp-terminal">`pacman -Syu`</div>qui il risultato

<div class="wp-terminal">`:: <strong>Sincronizzazione dei database in corso...</strong><br></br>core è aggiornato<br></br>extra 1534,8 KiB 308K/s 00:05 [######################] 100%<br></br>community 2010,5 KiB 334K/s 00:06 [######################] 100%<br></br>:: <strong>Aggiornamento del sistema in corso...</strong><br></br>non ci sono aggiornamenti disponibili`</div>Aggiornato il sistema è indispensabile installare il pacchetto **fakeroot**, quindi basterà lanciare

<div class="wp-terminal">`pacman -S fakeroot`</div>**fakeroot** è obbligatorio mentre i successivi pacchetti di sicuro vi serviranno per molte altre compilazioni, non sono necessari, ma ve li consiglio.

<div class="wp-terminal">`pacman -S patch gcc make autoconf automake pkg-config git`</div>Uscite dal terminale d’amministratore col comando

<div class="wp-terminal">`exit`</div>terminate queste operazioni siamo pronti per prelevare il pacchetto **gsharkdown** dal deposito **[AUR](https://aur.archlinux.org "AUR - Arch User Repository")**.

<div class="wp-terminal">`wget -c https://aur.archlinux.org/packages/gs/gsharkdown/gsharkdown.tar.gz`</div>oppure leggetevi la guida **[Scaricare con Axel a velocità ultrasonica](http://www.nazionlinux.com/scaricare-con-axel-a-velocita-ultrasonica/ "Scaricare con Axel a velocità ultrasonica")**

Adesso bisognerà scompattare il pacchetto **gsharkdown.tar.gz** appena scaricato col comando

<div class="wp-terminal">`tar -zxvf gsharkdown.tar.gz`</div>vi si creerà un cartella di nome **gsharkdown** contenete diversi files nella quale dovete entrare e lanciare il comando **makepkg** per iniziare la compilazione.

<div class="wp-terminal">`cd gsharkdown && makepkg`</div>come potete notare dal risultato bisognerà soddisfare le dipendenze

<div class="wp-terminal">`<strong><span style="color: #00ff00;">==></span> Creazione del pacchetto: gsharkdown 0.7.0-4 (mar 8 ott 2013, 16.26.29, CEST)<br></br><span style="color: #00ff00;">==></span> Controllo delle dipendenze durante l'avvio in corso...<br></br><span style="color: #00ff00;">==></span> Dipendenze mancanti:<br></br><span style="color: #0000ff;">-></span> gstreamer0.10-python<br></br><span style="color: #0000ff;">-></span> python2-configobj<br></br><span style="color: #0000ff;">-></span> python2-dbus<br></br><span style="color: #0000ff;">-></span> python2-pycurl<br></br><span style="color: #00ff00;">==></span> Controllo delle dipendenze durante la compilazione in corso...<br></br><span style="color: #ff0000;">==> ERRORE:</span> Impossibile risolvere tutte le dipendenze.</strong>`</div>ri-autentificatevi come amministratore e installatevi i pacchetti mancanti

<div class="wp-terminal">`pacman -S gstreamer0.10-python python2-configobj python2-dbus python2-pycurl`</div>ricordatevi di confermare l’installazione dei pacchetti premendo il tasto **S**.  
Teminata l’installazione uscite con il comando **exit** e ridate il comando **makepkg**

<div class="wp-terminal">`exit && makepkg`</div>se tutto è andato a buon fine, al termine della compilazione, sarà creato il pacchetto **gsharkdown-0.7.0-4-any.pkg.tar.xz** che, dopo esserci ri-autentificati come amministratore sempre col comando

<div class="wp-terminal">`su`</div>sarà installato col comando

<div class="wp-terminal">`pacman -U gsharkdown-0.7.0-4-any.pkg.tar.xz`</div>e confermare l’installazione premendo il tasto **S**

\* fate molta **ATTENZIONE** in alcuni paesi scaricare musica è **ILLEGALE**