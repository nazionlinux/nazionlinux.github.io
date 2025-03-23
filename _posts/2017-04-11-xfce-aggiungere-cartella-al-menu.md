---
id: 1288
title: 'Xfce aggiungere sotto cartella al menu'
date: '2017-04-11T12:35:58+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1288'
permalink: /xfce-aggiungere-cartella-al-menu/
image: /wp-content/uploads/2014/08/14804283038_e595f7e9be_o.png
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - Fedora
    - GNU/Linux
    - Mint
    - Sistema
    - Slackware
    - Terminale
    - Ubuntu
    - Xfce
tags:
    - Xfce
---

#### Xfce configurare menu

In **Xfce** inizia col creare una cartella **menus** nel caso non esistesse aprendo un terminale lanciamo il comando

<div class="wp-terminal">`mkdir ${XDG_CONFIG_HOME:-~/.config}/menus/`</div>ora dobbiamo copiare il file **xfce-applications.menu** nella cartella appena creata

<div class="wp-terminal">`cp $prefix/etc/xdg/menus/xfce-applications.menu ${XDG_CONFIG_HOME:-~/.config}/menus`</div>Nel nostro esempio verrà creato un file per lanciare il server **Apache** e **MySQL** da utente.

Locatevi nella cartella **~/.local/share/applications**

<div class="wp-terminal">`cd ~/.local/share/applications`</div>e create un file **lamp.desktop** contenente il seguente codice

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

da notare che bisognerà avere installato il comando **gksu** per farlo funzionare.

Per chi preferisce potrà usare una piccola applicazione per creare il file

<div class="wp-terminal">`exo-desktop-item-edit --create-new ~/.local/share/applications`</div>Editate il file

<div class="wp-terminal">`nano ~/.config/menus/xfce-applications.menu`</div>ed andate ad inserire nella sezione **System** prima della chiusura del tag il seguente codice

> &lt;Menu&gt;  
> &lt;Name&gt;Server&lt;/Name&gt;  
> &lt;Directory&gt;server.directory&lt;/Directory&gt;  
> &lt;Include&gt;  
> &lt;Category&gt;X-Folders&lt;/Category&gt;  
> &lt;/Include&gt;  
> &lt;/Menu&gt;

fatto questo creare il file **server.directory**

<div class="wp-terminal">`nano ~/.local/share/desktop-directories/server.directory`</div>contenente il codice

> \[Desktop Entry\]  
> Version=1.0  
> Type=Directory  
> Name=Server  
> Icon=applications-system  
> Comment=Server deamons

se tutto e andato a buon fine comparirà un sub menu nella categoria **Sistema** del menu di **Xfce** provate anche a riavviare il menu col comando

<div class="wp-terminal">`xfdesktop --reload`</div>Una vecchia guida la potete trovare a questo indirizzo [Xfce aggiungere un sotto menu](http://www.nazionlinux.com/xfce-aggiungere-menu/)