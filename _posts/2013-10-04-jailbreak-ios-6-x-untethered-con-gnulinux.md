---
id: 605
title: 'Jailbreak iOS 6.x Untethered con GNU/Linux'
date: '2013-10-04T13:42:04+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=605'
permalink: /jailbreak-ios-6-x-untethered-con-gnulinux/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Jailbreak iOS 6.x Untethered con GNU/Linux, Articolo: http://www.nazionlinux.com/?p=605'
categories:
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Mint
    - Sistema
    - Slackware
    - Terminale
    - Ubuntu
tags:
    - evasi0n
    - iOS
    - iPad
    - iPhone
    - iPod
    - Jailbreak
---

Molti amici mi chiedono se è possibile fare il **[Jailbreak](http://it.wikipedia.org/wiki/Jailbreak_%28informatica%29 "Jailbreak")** di un dispositivo **Apple** da **GNU/Linux**, premettendo che, per mia libera scelta, non posseggo e non ho mai posseduto **iPhone**, **iPad** e via discorrendo, la risposta è certamente si!

**\*\*\* ATTENZIONE \*\*\*  
Questa guida ha il solo scopo didattico e dimostrativo, non mi ritengo responsabile dell’uso che ne potrete fare e vi assumete interamente ogni responsabilità nel caso potessero sorgere malfunzionamenti o guasti di qualsiasi tipo compresa la perdita dei dati.**

Inoltre da **[Wikipedia](http://it.wikipedia.org/ "Wikipedia")** si può leggere:

> Ai fini della legislazione italiana invece, non esistendo sentenze in merito e facendo riferimento al Codice Civile Italiano il jailbreak è legale. Questo perché il consumatore possiede i Diritti Reali sugli oggetti in suo possesso: questi diritti fanno sì che con gli oggetti acquistati regolarmente si possa fare ciò che si vuole (senza violare altre leggi), anche il jailbreaking.

In Italia, eseguire l’operazione di jailbreak sul dispositivo, non è quindi illegale, ma potrebbe causare la **perdita della garanzia** del dispositivo stesso.

Prima di eseguire la procedura è consigliabile fare una copia di sicurezza dei vostri dati e disabilitare il codice di blocco del vostro dispositivo.  
Assicuratevi che la batteria del vostro dispositivo sia carica più del 50% e che siati muniti del cavo USB per collegarlo al computer.  
Inoltre dovete avere una connessione wireless che permetta al dispositivo di collegarsi alla rete.

Controllate che il vostro dispositivo sia supportato quindi presente nella lista:

- iPhone 3GS
- iPhone 4 GSM
- iPhone 4S
- iPod Touch 4G
- iPod Touch 5G
- iPad 2 Wi-Fi
- iPad 2 3G
- iPad 2 2012
- iPad 3 Wi-Fi
- iPad 3 Wi-Fi + 4G
- iPad 4 Wi-Fi
- iPad 4 Wi-Fi + 4G
- iPad Mini Wi-Fi
- iPad Mini 3G

Adesso non vi resta che scaricare il programma **[evasi0n](http://evasi0n.com "evasi0n")** che vi consentirà di effettuare il jailbreak.  
Andate sul sito **[www.evasi0n.com](http://evasi0n.com "evasi0n")** e scaricatevi il paccheeto per **GNU/Linux**.  
Terminato lo scaricamento aprite un terminale nella cartella dove è stato scaricato il pacchetto e lanciate il comando

<div class="wp-terminal">`sha1sum <strong style="color: #ff0000;">nome_file</strong>.tar.lzma`</div>sostituite la scritta in rosso con il nome del vostro file, nel mio caso

<div class="wp-terminal">`sha1sum evasi0n-linux-1.5.3-f284166e164e33735163af64b0af4e6336654345-release.tar.lzma`</div>controllate che il risultato corrisponde a questo numero

> 620dcb7996b1f3497827b11876bf0c2fae069ecf

se non corrisponde riscaricatevi il file.  
Adesso bisognerà scompattare il paccetto lanciando il comando

<div class="wp-terminal">`tar --lzma -xvf evasi0n-linux-1.5.3-f284166e164e33735163af64b0af4e6336654345-release.tar.lzma`</div>si creerà una cartella **evasi0n-linux-1.5.3** spostatevi in quella cartella e avviate **evasi0n**

<div class="wp-terminal">`cd evasi0n-linux-1.5.3 && ./evasi0n`</div>vi dovrebbe comparire questa finestra

[![evasi0n](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2013/10/evasi0n.png?resize=482%2C345)](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2013/10/evasi0n.png)

non vi resta che collegare il vostro dispositivo al computer, tramite cavo USB, ed avviare cliccando sul pulsante **jailbreak**  
Non toccare nessun tasto ne rimuovere il dispositivo!!!  
Quando il processo è completo comparirà un icona di **evasi0n** sul dispositivo cliccateci sopra per completare il **jailbreak**.  
Al termine riavviate il dispositivo e vedrete, nello schermo del vostro dispositivo, l’icona **Cydia** che certificherà il successo del vostro **jailbreak**.