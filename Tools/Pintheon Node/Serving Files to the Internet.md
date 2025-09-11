---
title: Serving Files to the Internet
updated: 2025-09-11 05:27:33Z
created: 2025-09-11 04:54:22Z
latitude: 34.05223420
longitude: -118.24368490
altitude: 0.0000
---

Pintheon nodes allow you to serve files to the internet via tunneling. Currently this is done by using [Pinggy](https://pinggy.io) to open a tunnel. So it requires you to open an account at pinggy.com.

## Set a Custom Domain

You can connect a custom domain to your Pinggy account.

<img src="/.vitepress/_resources/pinggy_custom_domain.png" alt="pinggy_custom_domain.png" width="580" height="140" class="jop-noMdConv">

This domain should also be set in your running Pintheon Node.

<img src="/.vitepress/_resources/pintheon_gateway_domain.png" alt="pintheon_gateway_domain.png" width="583" height="354" class="jop-noMdConv">

* * *

## Set Pinggy Token

You want to copy your access token from Pinggy and paste it into the Metavinci using **Pintheon > Settings > Set Pinggy Token**

&nbsp;

<img src="/.vitepress/_resources/pinggy_set_token.png" alt="pinggy_set_token.png" width="581" height="175" class="jop-noMdConv">

<img src="/.vitepress/_resources/pinggy_paste_token.png" alt="pinggy_paste_token.png" width="286" height="284" class="jop-noMdConv">

* * *

## Open the Tunnel

Use Metavinci **Pintheon > Open Tunnel**, to start the service.

<img src="/.vitepress/_resources/open_tunnel.png" alt="open_tunnel.png" width="558" height="165" class="jop-noMdConv">

Once started, the Pinggy terminal window will pop up, showing information about the tunnel.

<img src="/.vitepress/_resources/pinggy_cli_terminal.png" alt="pinggy_cli_terminal.png" width="661" height="280" class="jop-noMdConv">

* * *

## File Serving Example

In this case I uploaded an image to my node.  
![pintheon_ipfs_upload.png](/.vitepress/_resources/pintheon_ipfs_upload.png)

The image is now served on the Internet, using my custom domain.

<img src="/.vitepress/_resources/pintheon_gateway_file.png" alt="pintheon_gateway_file.png" width="687" height="762" class="jop-noMdConv">

* * *