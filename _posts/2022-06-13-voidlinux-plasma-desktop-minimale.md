---
id: 1562
title: 'Voidlinux Plasma Desktop minimale'
date: '2022-06-13T13:31:42+02:00'
author: NazionLinux
layout: post
guid: 'https://www.nazionlinux.com/?p=1562'
permalink: /voidlinux-plasma-desktop-minimale/
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
image: /wp-content/uploads/2022/06/ParrotOS-4.6-plasma.jpg
categories:
    - 'Ambienti Grafici'
    - Distribuzioni
    - GNU/Linux
    - Kde
    - 'Void Linux'
tags:
    - plasma
---

Andiamo alla scoperta dell’ambiente grafico **KDE** installando la versione minima cioè **Plasma Desktop**.

Per prima cosa apriamo un terminale come amministratore e laciamo il comando:

`xbps-install plasma-desktop`

questo primo comando installerà i pacchetti base per far funzionare Plasma Desktop.

Vi consigliamo di dare un occhiata anche al nostro articolo **[Void Linux bash alias](https://www.nazionlinux.com/void-linux-bash-alias/)** nel caso basterà dare il comando:

`xip plasma-desktop`

Una volta installato il pacchetto e le varie dipendenze vi consigliamo anche di installare **kde-cli-tools** per modificare il programma predefinito che apre il files o le cartelle:

`xbps-install kde-cli-tools`

vi consiglio anche, per avere l’icona delle reti wireless sulla barra, il pacchetto **plasma-nm**

`xbps-install plasma-nm`

poi bisognerà installare tutti i programmi o le applicazioni che vi interessano.