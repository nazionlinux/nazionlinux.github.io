---
title: Appunti
permalink: "/appunti/"
layout: page
date: '2011-09-12T02:29:07+02:00'
author: NazionLinux
guid: 'http://www.nazionlinux.com/?page_id=153'
footnotes:
    - ''
---

##### Velocizzare Firefox

about:config

Nuovo -&gt; Stringa

inserire:

browser.cache.disk.parent\_directory

come valore:

/dev/shm/firefox

---

##### Velocizzare Chromium

<div class="wp-terminal">`chromium %U --disk-cache-dir="/dev/shm/chromium"`</div>

---

##### Archlinux: mantiene la versione corrente e la penultima dei pacchetti

aggiornare il database

<div class="wp-terminal">`pacman -Syyu`</div>installare il pacchetto pacman-contrib

<div class="wp-terminal">`pacman -S pacman-contrib`</div>lanciare il comando

<div class="wp-terminal">`paccache -rvk1`</div>---

##### Archlinux: rimuovere dipendenze non più necessarie

visualizzare i pacchetti e le dipendenze non più necessarie

<div class="wp-terminal">`pacman -Qdtq`</div>per rimuovere i pacchetti orfani ricorsivamente (attenzione!)

<div class="wp-terminal">`pacman -Rs $(pacman -Qtdq)`</div>reinstallare tutti i pacchetti del vostro sistema (se disponibili in un repository attivo)

<div class="wp-terminal">`pacman -S $(pacman -Qq | grep -v "$(pacman -Qmq)")`</div>

---

##### Modificare i permessi solo dei files contenuti nella cartella e in tutte le sottocartelle

(escludendo le cartelle)

<div class="wp-terminal">`find . -type f -exec chmod 644 {} ';'`</div>proprietario: lettura scrittura (6)  
gruppo: lettura (4)  
altro: lettura (4)

---

##### Eliminare i files Thumbs.db da tutte le cartelle

<div class="wp-terminal">`find ~ -type f -name 'Thumbs.db' -exec rm {} \;`</div>

---

##### Conoscere il nostro IP pubblico con curl

<div class="wp-terminal">`curl ifconfig.me`</div>

---

##### Sincronizzare una cartella remota con una locale

<div class="wp-terminal">`rsync -rtvz --exclude 'cartella/da/escludere' utente@dominio:/var/www/cartella ~/documenti`</div>

---

##### Copiare una cartella locale con una remota (utente remoto)

<div class="wp-terminal">`rsync -avzP -e 'ssh' $HOME/documenti/ utente@192.168.1.11:$HOME/documenti/`</div>

---

##### Da file ISO a USB

da root

<div class="wp-terminal">`dd if=/percorso/archlinux-2020.01.09-dual.iso of=/dev/sdb status=progress`</div>

---

##### Creare un utente in Archlinux

da root

<div class="wp-terminal">`useradd -m -G wheel -s /bin/bash <em>utente</em>`</div>il gruppo **wheel** è utilizzato per consentire l’accesso tramite **sudo** o **su** e per avere accesso completo in lettura ai files journal

---

##### Eliminare un utente in Archlinux

da root

<div class="wp-terminal">`userdel -r <em>utente</em>`</div>l’opzione **-r** elimina la cartella home dell’utente

---

##### Versione del Bios

da terminale

<div class="wp-terminal">`cat /sys/devices/virtual/dmi/id/bios_version`</div>

---

##### Modificare data e ora

da root

<div class="wp-terminal">`timedatectl set-time "yyyy-MM-dd hh:mm:ss"`</div>

---

##### Scansione canale wi-fi

wlp3s0 scheda di rete, 11 numero del canale, da root

<div class="wp-terminal">`iwlist wlp3s0 scan | grep 11`</div>

---

##### Percentuale batteria

da terminale

<div class="wp-terminal">`cat /sys/class/power_supply/BAT0/capacity`</div>
