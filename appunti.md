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

#### Velocizzare Firefox

about:config

Nuovo -&gt; Stringa

inserire:

browser.cache.disk.parent\_directory

come valore:

/dev/shm/firefox

---

#### Velocizzare Chromium

`chromium %U --disk-cache-dir="/dev/shm/chromium"`

---

#### Archlinux: mantiene la versione corrente e la penultima dei pacchetti

aggiornare il database

`pacman -Syyu`

installare il pacchetto pacman-contrib

`pacman -S pacman-contrib`</div>lanciare il comando

`paccache -rvk1`

---

#### Archlinux: rimuovere dipendenze non più necessarie

visualizzare i pacchetti e le dipendenze non più necessarie

`pacman -Qdtq`
    
per rimuovere i pacchetti orfani ricorsivamente (attenzione!)

`pacman -Rs $(pacman -Qtdq)`

reinstallare tutti i pacchetti del vostro sistema (se disponibili in un repository attivo)

`pacman -S $(pacman -Qq | grep -v "$(pacman -Qmq)")`

---

#### Modificare i permessi solo dei files contenuti nella cartella e in tutte le sottocartelle

(escludendo le cartelle)

`find . -type f -exec chmod 644 {} ';'`

proprietario: lettura scrittura (6)  
gruppo: lettura (4)  
altro: lettura (4)

---

#### Eliminare i files Thumbs.db da tutte le cartelle

`find ~ -type f -name 'Thumbs.db' -exec rm {} \;`

---

#### Conoscere il nostro IP pubblico con curl

`curl ifconfig.me`

---

#### Sincronizzare una cartella remota con una locale

`rsync -rtvz --exclude 'cartella/da/escludere' utente@dominio:/var/www/cartella ~/documenti`

---

#### Copiare una cartella locale con una remota (utente remoto)

`rsync -avzP -e 'ssh' $HOME/documenti/ utente@192.168.1.11:$HOME/documenti/`

---

#### Da file ISO a USB

da root

`dd if=/percorso/archlinux-2020.01.09-dual.iso of=/dev/sdb status=progress`

---

#### Creare un utente in Archlinux

da root

`useradd -m -G wheel -s /bin/bash _utente_`

il gruppo **wheel** è utilizzato per consentire l’accesso tramite **sudo** o **su** e per avere accesso completo in lettura ai files journal

---

#### Eliminare un utente in Archlinux

da root

`userdel -r _utente_`

l’opzione **-r** elimina la cartella home dell’utente

---

##### Versione del Bios

da terminale

`cat /sys/devices/virtual/dmi/id/bios_version`

---

##### Modificare data e ora

da root

`timedatectl set-time "yyyy-MM-dd hh:mm:ss"`

---

##### Scansione canale wi-fi

wlp3s0 scheda di rete, 11 numero del canale, da root

`iwlist wlp3s0 scan | grep 11`

---

##### Percentuale batteria

da terminale

`cat /sys/class/power_supply/BAT0/capacity`
