---
id: 7
title: 'Openbox Gtk3'
date: '2011-05-03T17:42:39+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=7'
permalink: /openbox-gtk3/
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Distribuzioni
    - Gnome
    - GNU/Linux
    - Openbox
tags:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Distribuzioni
    - Gnome
    - GNU/Linux
    - Openbox
---

Questa mattina ho effettuato un aggiornamento al mio sistema operativo.

<div class="wp-terminal">su -c "pacman -Syu"  
</div>Utilizzando una distribuzione [Archlinux](http://www.archlinux.it/ "Arch Linux") e come ambiente grafico [Openbox](http://openbox.org/ "Openbox") mi sono ritrovato che alcuni programmi tipo **gEdit** non avevano più l’aspetto di prima, cosa è successo!?  
Semplice con l’aggiornamento il sistema è passato dalle **GTK2** alle ultime **GTK3** e di conseguenza tutti i temi che prima erano funzionanti con le librerie precedenti (gtk2) adesso risultano non compatibili con le nuove librerie (gtk3).  
Inoltre anche il file di configurazione è cambiato per le GTK2 si trovava nella cartella **home/*utente*/.gtkrc-2.0** adesso per le nuove librerie ha cambiato nome e posizione e si dovrebbe trovare in **/home/*utente*/.config/gtk-3.0/** col nome di **settings.ini**  
in caso il file o la cartella non esistesse basta crearlo da terminale col comando:

<div class="wp-terminal">mkdir -p ~/.config/gtk-3.0/ &amp;&amp; touch ~/.config/gtk-3.0/settings.ini  
</div>sono due comandi legati insieme il primo **mkdir** crea la cartella il secondo **touch** il file.  
Il file **settings.ini** risulterà comunque vuoto riempitelo con questo:

> \[Settings\]  
> gtk-theme-name = Adwaita  
> gtk-fallback-icon-theme = gnome  
> \# la seguente opzione è applicabile solo il tema selezionato la supporta  
> gtk-application-prefer-dark-theme = true  
> \# imposta nome e dimensione del font  
> gtk-font-name = Sans 10

và ricordato che prima di effettuare queste operazioni è meglio controllare se il tema **Adwaita** è installato sul vostro sistema da root nel terminale date il comando:

<div class="wp-terminal">pacman -S gnome-themes-standard  
</div>poi premete il pulsante **S** per installarlo.

per entrare come amministratore dal terminale bisogna dare il comando:

<div class="wp-terminal">su  
</div>oppure **su -c** e tra le virgolette il comando da eseguire come amministratore

<div class="wp-terminal">su -c "*comando da eseguire*"  
</div>è importante conoscere la password dell’amministratore.  
\[ad#Google Adsense 468x15\_4\]