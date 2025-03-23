---
id: 1332
title: 'Ubuntu disinstallare Unity 8'
date: '2017-04-20T12:24:12+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=1332'
permalink: /ubuntu-disinstallare-unity-8/
image: /wp-content/uploads/2014/09/15054798027_665dd2b5ba_o.jpg
categories:
    - 'Ambienti Grafici'
    - Distribuzioni
    - GNU/Linux
    - Sistema
    - Terminale
    - Ubuntu
    - Unity
tags:
    - Unity
---

#### Come rimuovere Unity 8 in Ubuntu con 3 semplici comandi

Dopo la decisione di **Canonical** di abbandonare lo sviluppo di **Unity 8** e di conseguenza tornare a **Gnome** è quasi un obbligo.

Per disinstallare **Unity** aprire un terminale e autentificarsi come amministratore di sistema oppure da utente normale dare il comando

<div class="wp-terminal">`sudo apt autoremove --purge unity8 ubuntu-system-settings`</div>Vi verrà richiesta la password utente.

Fate molta attenzione il comando **autoremove** è molto pericoloso in quanto andrà a rimuovere anche molte dipendenze di **Unity 7** il consiglio è quello di avere già installato un altro ambiente grafico prima di rimuovere **Unity**.

Se volete disinstallare Ubuntu Browser date il comando

<div class="wp-terminal">`sudo apt purge webbrowser-app`</div>anche qui fate attenzione perchè verrà disinstallato anche **Unity Tweak Tool**

L’ ultimo comando da dare è

<div class="wp-terminal">`sudo mv ~/.Xauthority ~/.Xauthority.backup`</div>e riavviare il computer.

Rimuovere **Unity 8** in **Ubuntu** è molto rischioso a causa delle molte dipendenze in comune che verranno rimosse per questo motivo prima di eseguire una operazione del genere riflette e documentatevi.