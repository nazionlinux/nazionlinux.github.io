---
id: 1641
title: 'Pipewire su Voidlinux'
date: '2024-05-28T10:59:10+02:00'
author: NazionLinux
layout: post
guid: 'https://www.nazionlinux.com/?p=1641'
permalink: /pipewire-su-voidlinux/
image: /wp-content/uploads/2024/05/pipewire.webp
categories:
    - Distribuzioni
    - GNU/Linux
    - Sistema
    - 'Void Linux'
tags:
    - alsa
    - pipewire
    - pulseaudio
---

**Pipewire** è un server moderno per gestire i flussi audio e video su Linux e si può interfacciare con **ALSA**, **PulseAudio** ed il sistema **Jack audio**.

Per far funzionare **Pipewire** è richiesta una sessione **D-Bus** attiva oppure se non si usa un ambiente grafico può essere lanciato tramite **dbus-run-session**.

Inoltre va definita la variabile di ambiente **XDG\_RUNTIME\_DIR** per funzionare correttamente.

Installiamo i pacchetti

`xbps-install pipewire wireplumber`

Adesso bisogna decidere se configurarlo a livello di sistema o a livello utente

Per la configurazione a livello di sistema seguire questa procedura

Creare la cartella da amministratore

`mkdir -p /etc/pipewire/pipewire.conf.d`

ora bisognerà creare il collegamento simbolico sempre da amministratore

`ln -s /usr/share/examples/wireplumber/10-wireplumber.conf /etc/pipewire/pipewire.conf.d/`

nel caso si voglia configurare Pipewire a livello utente

`: "${XDG_CONFIG_HOME:=${HOME}/.config}"`

creare la cartella da utente

`mkdir -p "${XDG_CONFIG_HOME}/pipewire/pipewire.conf.d"`

e poi il collegamento simbolico

`ln -s /usr/share/examples/wireplumber/10-wireplumber.conf "${XDG_CONFIG_HOME}/pipewire/pipewire.conf.d/"`

Per l’integrazione con **ALSA** installare il pacchetto **alsa-pipewire**

`xbps-install alsa-pipewire`

Creare la cartella da amministratore

`mkdir -p /etc/alsa/conf.d`

e poi i collegamenti simbolici

`ln -s /usr/share/alsa/alsa.conf.d/50-pipewire.conf /etc/alsa/conf.d`

`ln -s /usr/share/alsa/alsa.conf.d/99-pipewire-default.conf /etc/alsa/conf.d`

Se avete installato una vecchia versione di **Pipewire** ricordarsi di eliminare il pacchetto **pipewire-media-session** ed i suoi files di configurazione.