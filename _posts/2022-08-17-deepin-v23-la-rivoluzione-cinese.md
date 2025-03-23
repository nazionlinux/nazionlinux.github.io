---
id: 1574
title: 'Deepin V23 la rivoluzione cinese'
date: '2022-08-17T11:32:29+02:00'
author: NazionLinux
layout: post
guid: 'https://www.nazionlinux.com/?p=1574'
permalink: /deepin-v23-la-rivoluzione-cinese/
ocean_gallery_link_images:
    - 'off'
ocean_sidebar:
    - '0'
ocean_second_sidebar:
    - '0'
ocean_disable_margins:
    - enable
ocean_display_top_bar:
    - default
ocean_display_header:
    - default
ocean_center_header_left_menu:
    - '0'
ocean_custom_header_template:
    - '0'
ocean_header_custom_menu:
    - '0'
ocean_menu_typo_font_family:
    - '0'
ocean_disable_title:
    - default
ocean_disable_heading:
    - default
ocean_disable_breadcrumbs:
    - default
ocean_display_footer_widgets:
    - default
ocean_display_footer_bottom:
    - default
ocean_custom_footer_template:
    - '0'
ocean_link_format_target:
    - self
ocean_quote_format_link:
    - post
image: /wp-content/uploads/2022/08/deepin-23.png
categories:
    - GNU/Linux
---

**Deepin** è una distribuzione **GNU/Linux** proveniente dalla Cina che ha un suo ambiente grafico **Deepin Desktop Environment**, ma veniva sviluppata su una base **Debian** mentre il suo l’ambiente grafico può essere installato anche su **ArchLinux**.

Deepin V23 Preview ha 3 importanti novità:

1. **Linglong** il nuovo formato di pacchettizzazione
2. Non sarà più dipendente da **Debian** ma sarà sviluppata in modo indipendente
3. Nuovo metodo di aggiornamento “aggiornamenti atomici”

<figure class="wp-block-image size-full">![](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2022/08/linglong.png?resize=900%2C383&ssl=1)</figure>## Linglong

**Linglong** è un nuovo formato di pacchetto sviluppato da **Deepin** il suo l’obiettivo è quello di risolvere vari problemi di compatibilità causati dalle complesse dipendenze dei formati di pacchetto tradizionali sotto GNU/Linux e ridurre i rischi per la sicurezza causati dal controllo decentralizzato dei permessi. È disponibile per qualsiasi distribuzione GNU/Linux, supporta aggiornamenti incrementali delle applicazioni, gestione, distribuzione e sandbox delle app migliorando la facilità d’uso e proteggendo anche notevolmente la privacy degli utenti.

<figure class="wp-block-image size-full">![](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2022/08/atom-updates.png?resize=900%2C383&ssl=1)</figure>## Aggiornamenti atomici

L’aggiornamento atomico è una nuova idea per gli aggiornamenti di sistema, che considera gli aggiornamenti di sistema come operazioni atomiche: se i pacchetti vengono installati correttamente, gli aggiornamenti di sistema sono terminati; se gli aggiornamenti di sistema falliscono, il sistema può essere ripristinato alla versione precedente senza modifiche, il che evita effettivamente il problema dell’installazione di alcune dipendenze ma del sistema non completamente aggiornato. Gli aggiornamenti atomici non si basano sui metodi di installazione del sistema e su partizioni specifiche e supportano il ripristino del sistema dopo un aggiornamento.

<figure class="wp-block-image size-full">![](https://i0.wp.com/www.nazionlinux.com/wp-content/uploads/2022/08/indipendent-upstream.png?resize=900%2C383&ssl=1)</figure>## Indipendente da nessuna distribuzione

Basandosi sui pacchetti principali e su alcuni componenti opzionali, nella fase di anteprima viene creato un nuovissimo deposito dei pacchetti v23. **Deepin** continuerà ad imparare dalle distribuzioni come **Debian** e **Arch Linux**.