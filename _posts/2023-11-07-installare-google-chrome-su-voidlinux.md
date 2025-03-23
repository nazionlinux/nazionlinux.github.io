---
id: 1610
title: 'Installare Google Chrome su Voidlinux'
date: '2023-11-07T18:35:57+02:00'
author: NazionLinux
layout: post
guid: 'https://www.nazionlinux.com/?p=1610'
permalink: /installare-google-chrome-su-voidlinux/
image: /wp-content/uploads/2021/01/void-linux.webp
categories:
    - Distribuzioni
    - GNU/Linux
    - 'Void Linux'
tags:
    - chrome
    - chromium
    - google
---

**Google Chrome** utilizza lo stesso codice sorgente di **Chromium** con l’aggiunta dei servizi di **Google**.

In passato con **Chromium** era possibile sincronizzare i preferiti, la cronologia e le estensioni, purtroppo di recente **Google** ha tolto la possibilità di usufruire di questi servizi su **Chromium**.

Un’altra differenza tra **Chrome** e **Chromium** sono i plugin e codec “closed source” in **Chromium** manca il supporto per i contenuti multimediali AAC, H.264, MP3, cosa che invece è possibile sul **Chrome.**

Per questi motivi molti utenti ci hanno chiesto come poter installare **Google Crhome** su **Voidlinux**.

La prima cosa da fare è accertarsi di aver installato i pacchetti **git** **base-devel** **xtools** nel caso contrario li andremo ad installare con il comando:

<div class="wp-terminal">`sudo xbps-install git base-devel xtools`</div>Ora bisogna clonare il deposito **void-packages** con il comando:

<div class="wp-terminal">`git clone https://github.com/void-linux/void-packages`</div>Al termine spostiamoci nella cartella **void-packages**

<div class="wp-terminal">`cd void-packages`</div>e lanciamo il comando:

<div class="wp-terminal">`./xbps-src binary-bootstrap`</div>a questo punto creiamo il file **conf** ed inseriamo la stringa **XBPS\_ALLOW\_RESTRICTED=yes** con il comando:

<div class="wp-terminal">`echo XBPS_ALLOW_RESTRICTED=yes >> ~/void-packages/etc/conf`</div>ora dobbiamo compilare il pacchetto **google-chrome**

<div class="wp-terminal">`./xbps-src pkg google-chrome`</div>terminata la compilazione del pacchetto **google-chrome** lo andremo ad installare con il comando:

<div class="wp-terminal">`sudo xbps-install google-chrome --repository=/home/<strong>UTENTE</strong>/void-packages/hostdir/binpkgs/nonfree`</div>fate **ATTENZIONE** la scritta **UTENTE** andrà sostituita col il vostro nome utente.