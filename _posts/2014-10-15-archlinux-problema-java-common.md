---
id: 1118
title: 'Archlinux problema con java-common'
date: '2014-10-15T10:01:41+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1118'
permalink: /archlinux-problema-java-common/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Archlinux problema con java-common, Articolo: http://wp.me/p4ANSQ-i2'
image: /wp-content/uploads/2013/10/10243448844_63816f9f75_o.jpg
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Cinnamon
    - Distribuzioni
    - Enlightenment
    - Gnome
    - GNU/Linux
    - Kde
    - Lxde
    - Lxqt
    - Mate
    - Openbox
    - Unity
    - Xfce
tags:
    - 'Arch Linux'
    - java
    - java-common
    - java-runtime-common
---

[![archlinux](https://i0.wp.com/farm8.staticflickr.com/7436/10243448844_00922de6d7_z.jpg?resize=640%2C512 "archlinux")](http://www.flickr.com/photos/12418137@N07/10243448844/ "archlinux")

Durante l’ultimo aggiornamento del sistema operativo **[ArchLinux](http://www.archlinux.it "ArchLinux")** molti utenti si sono trovati a dover risolvere il conflitto tra il pacchetto **java-common** ed il nuovo pacchetto **java-runtime-common**.

Molti utenti lanciando il comando tipico **pacman -Syu**, come nell’esempio qui sotto riportato, si sono ritrovati con una serie di errori dovuto al sopracitato conflitto dei pacchetti.

<div class="wp-terminal">`pacman -Syu<br></br>:: Sincronizzazione dei database in corso...<br></br>:: Aggiornamento del sistema in corso...<br></br>:: Vuoi sostituire java-common con extra/java-runtime-common? [S/n] s<br></br>risoluzione delle dipendenze in corso...<br></br>ricerca dei conflitti in corso...<p>...</p><p>errore: impossibile eseguire l'operazione richiesta (file in conflitto)<br></br>java-runtime-common: /usr/bin/java è già presente nel filesystem<br></br>...<br></br>java-environment-common: /usr/bin/xjc è già presente nel filesystem<br></br>Si sono verificati degli errori, nessun pacchetto è stato aggiornato.</p>`</div>Per risolvere questo problema bisogna per prima cosa aprire un terminale d’amministrazione

<div class="wp-terminal">`su`</div>inserire la password dell’amministratore di sistema (**root**) poi lanciare questo comando

<div class="wp-terminal">`archlinux-java unset`</div>adesso dobbiamo eseguire un comando più complesso

<div class="wp-terminal">`pacman -Sydd --asdeps java-runtime-common`</div>al termine vi verrà richiesto

<div class="wp-terminal">`...<p>:: java-runtime-common e java-common vanno in conflitto. Vuoi rimuovere java-common? [s/N] s</p><p>...</p>`</div>per poter continuare dovete premere il tasto **\[ S \]** in modo da rispondere affermativamente alla domanda e premere di nuovo il tasto **\[ S \]** per installare i pacchetti.  
Al termine dell’installazione dei pacchetti lanciate il comando

<div class="wp-terminal">`archlinux-java fix`</div>Questa è la procedura consigliata nel wiki di **Archlinux** consultabile al seguente indirizzo  
**[http://www.archlinux.it/forum/viewtopic.php?t=19618&amp;f=2#p162684](http://www.archlinux.it/forum/viewtopic.php?t=19618&f=2#p162684 "Arch Linux")**