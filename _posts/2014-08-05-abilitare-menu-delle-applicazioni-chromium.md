---
id: 994
title: 'Abilitare il menù delle applicazioni di Chromium'
date: '2014-08-05T10:49:34+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=994'
permalink: /abilitare-menu-delle-applicazioni-chromium/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Abilitare il menù delle applicazioni di Chromium, Articolo: http://wp.me/p4ANSQ-g2'
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - Fedora
    - Gnome
    - GNU/Linux
    - Kde
    - Lxde
    - Mate
    - Mint
    - Slackware
    - Ubuntu
    - Xfce
tags:
    - chrome
    - chromium
---

[![chrome-chromium](https://i0.wp.com/farm4.staticflickr.com/3856/14811365336_34bb64b879_o.png?resize=610%2C300 "chrome-chromium")](http://www.flickr.com/photos/12418137@N07/14811365336/ "chrome-chromium")

Con la versione 35 di **Google Chrome** e **Chromium** è possibile abilitare il menu delle applicazioni di Chromium direttamente nel pannello del menù del nostro ambiente grafico preferito.  
Nel nostro caso abbiamo utilizzato per provare **Xfce4**.  
La prima opreazione da compiere è aprire Chromium/Chrome e sulla barra degli indirizzi scrivere

> chrome://flags/#enable-app-list

premere invio e si aprirà una finistra contenente molte voci, quella che vi interessa è questa

<span style="background-color: #ffcc00;">Attiva Avvio applicazioni.</span> Linux  
Attiva Avvio applicazioni. All’attivazione, crea scorciatoie del sistema operativo in Avvio applicazioni. #enable-app-list  
<span style="text-decoration: underline;">Abilita</span>

ora non resta che cliccare su <span style="text-decoration: underline;">Abilita</span> e riavviare Chromium/Chrome.  
Se tutto è andato a buon fine vi comparirà una nuova icona sulla barra del pannello per essere sicuri controllate se è stato creato un nuovo file **chromium-app-list.desktop** nella cartella /home/**utente**/.local/share/applications/ per farlo basta lancia il comando da terminale

<div class="wp-terminal">`nano ~/.local/share/applications/chromium-app-list.desktop`</div>e vi dovrà comparire qualcosa del genere

> \#!/usr/bin/env xdg-open  
> \[Desktop Entry\]  
> Version=1.0  
> Terminal=false  
> Type=Application  
> Name=Avvio applicazioni di Chromium  
> Exec=/usr/bin/chromium –show-app-list  
> Icon=chromium-app-list  
> Categories=Network;WebBrowser;  
> StartupWMClass=chromium\_app\_list

se questo file non esiste potete sempre provare a crearvelo.