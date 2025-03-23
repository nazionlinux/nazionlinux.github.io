---
id: 114
title: 'Archlinux: pyvolwheel Error: file o directory non esistente: &#8216;/dev/mixer&#8217;'
date: '2011-06-04T11:29:23+02:00'
author: NazionLinux
layout: post
guid: 'http://www.nazionlinux.com/?p=114'
permalink: /archlinux-pyvolwheel-error-file-o-directory-non-esistente-devmixer/
'Hide SexyBookmarks':
    - '0'
'Hide OgTags':
    - '0'
hl_twitter_has_auto_tweeted:
    - 'Titolo: Archlinux: pyvolwheel Error: file o directory non esistente: ‘/dev/mixer’, Articolo: http://www.nazionlinux.com/?p=114'
categories:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Distribuzioni
    - GNU/Linux
    - Openbox
    - Sistema
    - Terminale
tags:
    - 'Ambienti Grafici'
    - 'Arch Linux'
    - Distribuzioni
    - GNU/Linux
    - Openbox
    - Sistema
    - Terminale
---

Utilizzando **[Openbox](http://openbox.org/)** come ambiente grafico ho scelto di usare [pyvolwheel](https://github.com/epinull/pyvolwheel) come gestore del volume audio.  
**Pyvolwheel** è un piccolo programma che non si trova nel ramo ufficiale di **[Archlinux](http://www.archlinux.it/)** e quindi non installabile con il comando ***pacman -S nome\_pacchetto*** ma lo potete trovare in <acronym title="Arch User Repository">AUR</acronym>.  
Logicamente trovandosi in **[AUR](https://aur.archlinux.org/)** il programma va compilato.  
La procedura è semplice, ma prima di scaricarvi il file per la compilazione, vi consiglio di creare una cartella *pyvolwheel* io di solito mi creo la cartella direttamente sulla “Scrivania” (Desktop) con il doppio comando:

<div class="wp-terminal">cd ~/Scrivania/ &amp;&amp; mkdir pyvolwheel  
</div>se il comando non va a buon fine sostituite *Scrivania* con *Desktop* questo dipende da come avete impostate le variabili d’ambiente sul vostro computer, entrate nella cartella appena creata:

<div class="wp-terminal">cd ~/Scrivania/pyvolwheel  
</div>e scaricatevi da <acronym title="Arch User Repository">AUR</acronym> il file **[PKGBUILD](https://aur.archlinux.org/packages/pyvolwheel-git/PKGBUILD)** entrate nel terminale e date il comando:

<div class="wp-terminal">wget -c https://aur.archlinux.org/packages/pyvolwheel-git/PKGBUILD  
</div>quando si compila un programma bisogna far attenzione alle dipendenze vi consiglio di installarvi alcuni pacchetti, da root:

<div class="wp-terminal">pacman -S patch gcc make fakeroot autoconf automake pkg-config git  
</div>**fakeroot** è obbligatorio mentre gli altri pacchetti di sicuro vi serviranno per altre compilazioni.  
**Pyvolwheel** funziona, come dice il nome, con **Python** installatelo da root:

<div class="wp-terminal">pacman -S python2  
</div>Ora iniziamo la compilazione del pacchetto date da **utente normale** il comando:

<div class="wp-terminal">makepkg  
</div>alle fine se la compilazione non ha dato problemi verrà creato, nel mio caso, il pacchetto **pyvolwheel-git-20101101-1-any.pkg.tar.xz** se invece alla fine della compilazione vi vengono richesti dei pacchetti installateli con il comando *pacman -S nome\_pacchetto* da amministratore.  
Per installare il pacchetto appena creato eseguite, da root, il comando:

<div class="wp-terminal">pacman -U pyvolwheel-git-20101101-1-any.pkg.tar.xz  
</div>**20101101-1** questo numero può variare è solo un esempio da non prendere alla lettera!

Per avviare **pyvolwheel** sin dall’inizio inserite questa stringa *pyvolwheel &amp;* nel file **autostart.sh**

<div class="wp-terminal">nano ~/.config/openbox/autostart.sh  
</div>questo è il mio file **autostart.sh** che vi può essere da esempio:

> tint2 &amp;  
> pyvolwheel &amp;

**tint2** è la barra delle applicazioni dove comparirà l’icona di *pyvolwheel*.

Dopo un ultimo aggiornamento del kernel pyvolwheel mi ha dato un errore ***Error: file o directory non esistente: ‘/dev/mixer’*** il problema l’ho risolto inserendo il modulo **snd-mixer-oss** nella sezione **MODULES=()** nel file **rc.conf** eseguite il comando da root:

<div class="wp-terminal">nano /etc/rc.conf  
</div>scrivete nella parentesi *MODULES=()* la stringa *snd-mixer-oss*:

> \# ———————————————————————–  
> \# HARDWARE  
> \# ———————————————————————–  
> \#  
> \# MOD\_AUTOLOAD: Allow autoloading of modules at boot and when needed  
> \# MODULES: Modules to load at boot-up. Prefix with a ! to blacklist.  
> \#  
> MOD\_AUTOLOAD=”yes”  
> MODULES=(**snd-mixer-oss**)

\[ad#Google Adsense 468x15\_4\]