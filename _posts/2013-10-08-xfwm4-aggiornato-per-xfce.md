---
id: 640
title: 'Xfwm4 aggiornato per Xfce'
date: '2013-10-08T15:01:15+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=640'
permalink: /xfwm4-aggiornato-per-xfce/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Xfwm aggionato per Xfce, Articolo: http://www.nazionlinux.com/?p=640'
snapEdIT:
    - '1'
categories:
    - 'Ambienti Grafici'
    - Distribuzioni
    - GNU/Linux
    - Ubuntu
    - Xfce
tags:
    - Xfwm
    - Xubuntu
---

**Xfwm** è un gestore delle finestre utilizzato dall’ambiente grafico **[Xfce](http://www.xfce.org "Xfce")**.  
**Xfwm4** è arrivato alla versione **4.11.0** portando con sè un importante novità, il supporto a **Sync** in **VBlank** che andrà a migliorare la fluidità dell’intero ambiente grafico.  
Xfwm4 gestisce le trasparenze e le ombre delle finestre tramite un comodo strumento chiamato **Regolazioni del gestore delle finestre**.  
Per accedere

> Menu -&gt; Impostazioni -&gt; Regolazioni del gestore delle finestre

si aprirà una finestra dove bisognerà selezionare l’ultima voce il alto a destra

> Compositore -&gt; Abilita la visualizzazione composita

La prima distribuzione ad integrare **Xfwm4 4.11.0** è **[Xubuntu](http://xubuntu.org/ "Xubuntu")**.  
Per installare Xfwm4 4.11.0 su **[Xubuntu](http://xubuntu.org/ "Xubuntu")** bastano 4 semplici comandi

<div class="wp-terminal">`sudo add-apt-repository ppa:xubuntu-dev/xfce-4.10`</div>il comando precedente aggiunge il deposito dei pacchetti **PPA** (Personal Package Archive) dal sito **[Launchpad](https://launchpad.net "Launchpad")** di **[Canonical](http://www.canonical.com/ "Canonical")**.  
Il successivo aggiunge la versione **4.12** di **[Xfce](http://www.xfce.org "Xfce")**

<div class="wp-terminal">`sudo add-apt-repository ppa:xubuntu-dev/xfce-4.12`</div>il comando successivo aggiorna i pacchetti

<div class="wp-terminal">`sudo apt-get update`</div>prima di confermare quest’ultimo comando con il tasto **S** leggete bene quali pacchetti verranno rimossi, alcuni dei quali sono molto importanti

<div class="wp-terminal">`sudo apt-get dist-upgrade`</div>terminato il processo d’installazione, se l’opzione **VSync** in **VBlank** non funziona, per abilitare **Sync** in **VBlank** a mano, lanciate il seguente comando

<div class="wp-terminal">`xfconf-query -c xfwm4 -p "/general/sync_to_vblank" -s true`</div>chiudete tutto e riavviate la macchina.