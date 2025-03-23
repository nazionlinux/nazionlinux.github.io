---
id: 405
title: 'Come creare un avviatore .desktop'
date: '2013-01-05T13:55:02+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=405'
permalink: /come-creare-un-avviatore-desktop/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Come creare un avviatore .desktop, Articolo: http://www.nazionlinux.com/?p=405'
image: /wp-content/uploads/2014/01/12124673963_fbe31845c6_z.jpg
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - Enlightenment
    - Gnome
    - GNU/Linux
    - Kde
    - Mint
    - Slackware
    - Ubuntu
    - Xfce
tags:
    - 'Ambienti Grafici'
---

#### Icona per avviare programmi sullo schermo

I files con estensione .desktop sono situati nelle cartelle **/usr/share/applications** e nella cartella **/home/utente/.local/share/applications** solo in alcuni casi anche nella cartella **Desktop**.  
Quelli nella cartella /usr/share/applications sono visibili da tutti gli utenti del sistema, mentre quelli nella cartella /home/**utente**/.local/share/applications sono visibili solo dall’utente proprietario della cartella.  
Tutti questi files andranno a comporre i vari menù di [Gnome](http://www.gnome.org/ "Gnome"), [Kde](http://www.kde.org "Kde"), [Xfce](http://www.xfce.org "Xfce") e molti altri ambienti grafici.  
Se proviamo, per esempio ad ediatare il file /usr/share/applications/chromium.desktop otteniamo questo risultato

> \[Desktop Entry\]  
> Version=1.0  
> Name=Chromium  
> GenericName=Web Browser  
> GenericName\[it\]=Browser Web  
> …  
> Comment=Access the Internet  
> Comment\[it\]=Accesso a Internet  
> …  
> Exec=chromium %U –disk-cache-dir=”/dev/shm/chromium”  
> Terminal=false  
> Icon=chromium  
> Type=Application  
> Categories=GTK;Network;WebBrowser;  
> MimeType=text/html;text/xml;application/xhtml+xml;text/mml;x-scheme-handler/http;x-scheme-handler/https;

da notare la mia personalizzazione ossia l’aggiunta dell’opzione **–disk-cache-dir=”/dev/shm/chromium”** nella riga **Exec** che serve per velocizzare **Chromium** ([Appunti](http://www.nazionlinux.com/appunti/ "Appunti")).

La riga **Categories=GTK;Network;WebBrowser;** vi indicherà in quale categoria l’applicazione sarà visibile secondo quanto viene dettato dallo standard [Freedesktop.org](http://standards.freedesktop.org/menu-spec/latest/apa.html "Freedesktop") in questo caso nella categoria **Internet** cioè la traduzione italiana di **Network**.  
Questi files possono essere creati con un semplice programma tipo **nano**, **vi**, **emacs**, **scite**, **kedit**, **gedit**, **kwrite**, **libreoffice**… oppure possiamo, da terminale, lanciare il comando

`exo-desktop-item-edit --create-new ~/.local/share/applications`

che vi creerà un file nella vostra cartella /home/**utente**/.local/share/applications abbreviata in **~/.local/share/applications**  
Per utilizzare questo comando bisogna aver installato il pacchetto **exo**.  
Per chi è veramante pigro si può creare un file .desktop di questo tipo

> \[Desktop Entry\]  
> Version=1.0  
> Type=Application  
> Name=Create Launcher  
> Name\[it\]=Crea un avviatore  
> Comment=Add a new launcher  
> Comment\[it\]=Aggiunge un nuovo avviatore  
> Exec=exo-desktop-item-edit –create-new ~/.local/share/applications  
> Icon=application-x-executable  
> Categories=Utility;Application;  
> Terminal=false  
> NoDisplay=true  
> StartupNotify=false  
> MimeType=application/x-desktop;

e salvarlo nella cartella **~/.local/share/applications**, ma dove verrà visualizzato?  
Va ricordato che gli ambienti tipo Openbox, [Jwm](http://www.nazionlinux.com/2012/08/12/alla-scoperta-di-jwm/ "Alla scoperta di JWM")… utilizzano un altro tipo di gestione dei menù.