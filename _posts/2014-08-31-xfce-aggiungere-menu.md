---
id: 1070
title: 'Xfce aggiungere un sotto menu'
date: '2014-08-31T19:56:25+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1070'
permalink: /xfce-aggiungere-menu/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Xfce aggiungere un sotto menu, Articolo: http://wp.me/p4ANSQ-hg'
image: /wp-content/uploads/2014/08/14804283038_e595f7e9be_o.png
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - Fedora
    - GNU/Linux
    - Mint
    - Slackware
    - Ubuntu
    - Xfce
tags:
    - Xfce
    - xfdesktop
---

#### Xfce aggiungere sub menu

Il menu di **Xfce**, come molti altri ambienti grafici, è personalizzabile.

È molto utile avere un sotto menu con le nostre applicazioni all’interno di una categoria principale come ad esempio: Accessori, Grafica, Internet, Multimedia…  
Ho ritenuto molto comodo avere un sotto menu chiamato **Server**, facente parte della categoria preincipale **Sistema**, all’interno del quale ho inserito alcune applicazioni che avviano il server **Apache** ed il database **MariaDB**.

Partendo dal presupposto che nella vostra distribuzione sia installato il pacchetto **xfdesktop** che è il gestore del desktop dell’ambiente grafico **Xfce** ed il pacchetto **xdg-utils** andiamo ad iniziare!  
Verifichiamo che la cartella **menus** esista e si trova nella cartella nascosta **.config** della nostra cartella utente.  
Apriamo un terminale da utente normale e laciamo il comando

<div class="wp-terminal">`cd ~/.config/menus`</div>se come risposta ricevete un messaggio d’ errore significa che la cartella non esiste quindi la dovete creare con il comando

<div class="wp-terminal">`mkdir ${XDG_CONFIG_HOME:-~/.config}/menus/`</div>il simbolo **~** si ottieme prememndo contemporaneamente i tasti \[ Alt Gr \] + \[ ì \] fate attenzione il tasto **Alt Gr** è quello a destra mentre il tasto **ì** contiene anche il simbolo **^** ovviamente nella tastiera italiana.

Adesso dobbiamo copiare il file **xfce-applications.menu** che, nella maggior parte delle distribuzioni, si trova nella cartella **/etc/xfce/xdg/menus/** o nella cartella **/etc/xfce/xdg/menus/**.  
Per controllare dove si trova il file lanciate il comando

<div class="wp-terminal">`find $prefix/etc/x* -name xfce-applications.menu`</div>e quindi a seconda della posizione del file utilizzeremo uno dei seguenti comandi

<div class="wp-terminal">`cp $prefix/etc/xdg/menus/xfce-applications.menu ${XDG_CONFIG_HOME:-~/.config}/menus`</div>oppure

<div class="wp-terminal">`cp $prefix/etc/xfce/xdg/menus/xfce-applications.menu ${XDG_CONFIG_HOME:-~/.config}/menus`</div>anteponiamo la variabile **$prefix** perchè in molte distribuzioni corrisponde alla cartella **usr**.

Finito di copiare il file nella nostra cartella **~/.config/menus/** lo andremo ad editare e modificare

<div class="wp-terminal">`nano ~/.config/menus/xfce-applications.menu`</div>andate a cercare la voce **System**

> &lt;Menu&gt;  
>  &lt;Name&gt;**System**&lt;/Name&gt;  
>  &lt;Directory&gt;xfce-system.directory&lt;/Directory&gt;  
>  &lt;Include&gt;  
>  &lt;Or&gt;  
>  &lt;Category&gt;Emulator&lt;/Category&gt;  
>  &lt;Category&gt;System&lt;/Category&gt;  
>  &lt;/Or&gt;  
>  &lt;/Include&gt;  
>  &lt;Exclude&gt;  
>  &lt;Or&gt;  
>  &lt;Filename&gt;xfce4-session-logout.desktop&lt;/Filename&gt;  
>  &lt;/Or&gt;  
>  &lt;/Exclude&gt;  
>  &lt;/Menu&gt;

andiamo ad aggiungere, subito dopo il tag di chiusura **&lt;/Exclude&gt;**, il seguente testo

> &lt;Menu&gt;  
>  &lt;Name&gt;Server&lt;/Name&gt;  
>  &lt;Directory&gt;server-apps.directory&lt;/Directory&gt;  
>  &lt;Include&gt;  
>  &lt;Category&gt;X-Folders&lt;/Category&gt;  
>  &lt;/Include&gt;  
>  &lt;/Menu&gt;

ottenendo questo un nuovo file con il testo aggiunto evidenziato in rosso

> &lt;Menu&gt;  
>  &lt;Name&gt;System&lt;/Name&gt;  
>  &lt;Directory&gt;xfce-system.directory&lt;/Directory&gt;  
>  &lt;Include&gt;  
>  &lt;Or&gt;  
>  &lt;Category&gt;Emulator&lt;/Category&gt;  
>  &lt;Category&gt;System&lt;/Category&gt;  
>  &lt;/Or&gt;  
>  &lt;/Include&gt;  
>  &lt;Exclude&gt;  
>  &lt;Or&gt;  
>  &lt;Filename&gt;xfce4-session-logout.desktop&lt;/Filename&gt;  
>  &lt;/Or&gt;  
>  &lt;/Exclude&gt;  
>  **&lt;Menu&gt;  
>  &lt;Name&gt;Server&lt;/Name&gt;  
>  &lt;Directory&gt;server-apps.directory&lt;/Directory&gt;  
>  &lt;Include&gt;  
>  &lt;Category&gt;X-Folders&lt;/Category&gt;  
>  &lt;/Include&gt;  
>  &lt;/Menu&gt;**  
>  &lt;/Menu&gt;

salvate il file modificato.  
Come vedete c’è un riferimento ad un file chiamato **server-apps.directory** questo file dovrà essere creato nella cartella **~/.local/share/desktop-directories/** e deve essere strutturato nel seguente modo

> \[Desktop Entry\]  
> Version=1.0  
> Type=Directory  
> Icon=network-server  
> Name=Server  
> GenericName=Server applications  
> Comment=Start Server applications  
> Name\[it\]=Server  
> GenericName\[it\]=Applicazioni Server  
> Comment\[it\]=Avvia le applicazioni del Server

**\[it\]** serve per la traduzione in italiano.  
Noterete anche un altra scritta **X-Folders** nel tag **Category** dove la **X** stà ad indicare che non è una categoria standard del consorzio **[freedesktop.org](http://standards.freedesktop.org/menu-spec/latest/apa.html#main-category-registry "Freedesktop.org")**.  
**X-Folders** ci servirà in seguito.

Ora dobbiamo creare delle applicazioni che compariranno nella sottocartella **Server** per fare questo dovete creare un file nella cartella **~/.local/share/applications/** che abbia estensione **.desktop** magari seguendo la guida **[Come creare un avviatore .desktop](http://www.nazionlinux.com/come-creare-un-avviatore-desktop/ "Come creare un avviatore .desktop")** oppure editandolo con il comando

<div class="wp-terminal">`nano ~/.local/share/applications/lamp.desktop`</div>il file lamp.desktop è un file di esempio lo potete nominare come volete l’importante è che sia strutturato nel seguente modo

> \[Desktop Entry\]  
> Version=1.0  
> Name=Linux Apache MySQL Php  
> GenericName=Apache deamon and MySQL deamon  
> Comment=Start deamons Apache and MySQL  
> Name\[it\]=Linux Apache MySQL Php  
> GenericName\[it\]=Demone Apache e MySQL  
> Comment\[it\]=Avvia i demoni di Apache e MySQL  
> Exec=gksu systemctl start httpd.service &amp;&amp; systemctl start mysqld.service  
> Terminal=false  
> StartupNotify=true  
> Icon=applications-system  
> Type=Application  
> Categories=X-Folders;System;Development;

e soprattutto che come prima opzione nella voce **Categories** ci sia la dicitura **X-Folders** consentendo al menù di Xfce di visualizzare la nostra applicazione nella categoria **Sistema -&gt; Server -&gt; Linux Apache MySQL Php**

Come potete notare la nostra applicazione comparirà anche nella categoria **Sistema** (System) e nella categoria **Sviluppo** (Development) che volendo possono essere omesse.

Se effettuate queste modifiche la nostra nuova sottocartella non viene visualizzata provate a lanciare questo comando

<div class="wp-terminal">`xfdesktop --reload`</div>serve a riavviare **xfdesktop**.

La nuova guida la potete trovare a questo indirizzo [Xfce aggiungere sotto cartella al menu](http://www.nazionlinux.com/xfce-aggiungere-cartella-al-menu/)