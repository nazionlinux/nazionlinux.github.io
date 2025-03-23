---
id: 128
title: 'Kernel 3.0 modificare /boot/grub/menu.lst'
date: '2011-08-08T14:54:56+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=128'
permalink: /kernel-3-0-modificare-bootgrubmenu-lst/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Kernel 3.0 modificare /boot/grub/menu.lst, Articolo: http://www.nazionlinux.com/?p=128'
categories:
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Sistema
    - Ubuntu
tags:
    - 'Arch Linux'
    - Debian
    - Distribuzioni
    - GNU/Linux
    - Sistema
    - Ubuntu
---

Utilizzando **Grub**, come programma per l’avvio del sistema, con la versione 3.0 del nuovo kernel bisogna modificare le impostazioni del file **/boot/grub/menu.lst**.  
Dopo il mio ultimo aggiornamento di **ArchLinux** con il comando:

<div class="wp-terminal">pacman -Syu  
</div>sono passato al nuovo **Kernel 3.0**.  
Come potete trovare anche sul forum di [ArchLinux](http://www.archlinux.it/forum/viewtopic.php?pid=102497#p102497 "ArchLinux") sono descritte le modifiche da effettuare sul file **menu.lst**.

> vmlinuz26 -&gt; vmlinuz-linux  
> kernel26.img -&gt; initramfs-linux.img  
> kernel26-fallback.img -&gt; initramfs-linux-fallback.img

Queste modifiche credo valgano anche per chi utilizza **Debian** o **Ubuntu** e per molte altre distrubuzioni.  
Iniziamo col aprire un terminale da root ed eseguire il comando:

<div class="wp-terminal">nano /boot/grub/menu.lst  
</div>dopo diverse righe noterete la seguente scritta:

> kernel /boot/**vmlinuz26** root=…

bisognerà sostituire **vmlinuz26** con la scritta **vmlinuz-linux** facendo diventare la riga:

> kernel /boot/**vmlinuz-linux** root=…

tutto quello che segue dopo vmlinuz26 non va assolutamente modificato!  
Lo stesso vale per la riga successiva.

> initrd /boot/**kernel26**.img

La scritta **kernel26** viene sostituita dalla scritta **initramfs-linux**:

> initrd /boot/**initramfs-linux**.img

Non dimanticatevi di sostituire anche nella sezione del kernel **Arch Linux Fallback** quindi la riga:

> kernel /boot/**vmlinuz26** root=…

diventa:

> kernel /boot/**vmlinuz-linux** root=…

mentre fate attenzione a **fallback** nella riga successiva:

> initrd /boot/**kernel26-fallback**.img

diventa:

> initrd /boot/**initramfs-linux-fallback**.img

adesso salvate premendo contemporaneamente i tasti **CTRL+O** premere il tasto **invio** per confermare il salvataggio del file ed uscite da **Nano** premendo contemporaneamente i tasti **CTRL+X**  
per vedere se tutto è andato a buon fine riavviate il sistema.  
Vi consiglio, una volta riavviato il sistema ed aver controllato che tutto è andato a buon fine, di eliminare il link simbolici creati per far funzionare il vecchio kernel.  
Quindi aprite un terminale sempre da root mi raccomando e date i seguenti comandi:

<div class="wp-terminal">cd /boot &amp;&amp; rm kernel26-fallback.img vmlinuz26 kernel26.img  
</div>fate molta attenzione se non siete esperti potete anche tralasciare quasta ultima indicazione.  
\[ad#Google Adsense 468x15\_4\]