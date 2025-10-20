It's extremely simple to deploy a static site using Heavymeta Press. This allows you to focus on creating quality content.

* * *
## Video Walkthrough
<iframe width="560" height="315" src="https://www.youtube.com/embed/lr6UITyRfzY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

* * *

### Prerequisites

1.  [Metavinci](https://heavymeta.art/home/Tools/Pintheon%20Node/Installation.html)
2.  [Heavymeta Press](https://heavymeta.art/home/Tools/Press/Installation.html)
3.  [A Pinggy Account](https://pinggy.io/)

* * *

### Site Files

<img src="/.vitepress/_resources/4733385489629a2006be30ae34eab2be.png" alt="4733385489629a2006be30ae34eab2be.png" width="286" height="248" class="jop-noMdConv">

Heavymeta Press only needs markdown files inside of a folder structure to generate a static site. See [documentation](https://heavymeta.art/home/Tools/Press/Running%20Press.html) to understand how to use it fully. For this tutorial, we will use this sample project to demonstrate how easy it is to deploy a site.

* * *

### Create a Pintheon Access Token

Press needs to communicate with your Pintheon node, to facilitate this you must create an access token for the app.

<img src="/.vitepress/_resources/cb396314d460a57c0682408f2d510a88.png" alt="cb396314d460a57c0682408f2d510a88.png" width="375" height="243" class="jop-noMdConv">

Open Press, <ins>**Metavinci > Press > Run**</ins> Press. Navigate to your project folder to open the project.  Once Press opens navigate to the Settings, and copy the key from the '**25519 Pub**' field.

<img src="/.vitepress/_resources/4d142ddd5919dcd4581cef8ddb28a0ef.png" alt="4d142ddd5919dcd4581cef8ddb28a0ef.png" width="365" height="167" class="jop-noMdConv">

Press the '**Add Access Token**' button to create a new Access token.

<img src="/.vitepress/_resources/ea1082e39d8fb07fceca4127cbf6a76a.png" alt="ea1082e39d8fb07fceca4127cbf6a76a.png" width="333" height="264" class="jop-noMdConv">

Name the new token, and paste the copied key into the '**Stellar 25519 Public Key**' field, press '**Add**'.

<img src="/.vitepress/_resources/67cd279ef161fb1a357bb48ef0aee759.png" alt="67cd279ef161fb1a357bb48ef0aee759.png" width="312" height="256" class="jop-noMdConv">

A new window will pop up with your Access Token.  Press the '**Copy**' button to copy it.  <ins>The Access Token only appears when created, and it is not saved</ins>.

<img src="/.vitepress/_resources/16f5275248c28e0029cd80e1f8d73ffd.png" alt="16f5275248c28e0029cd80e1f8d73ffd.png" width="427" height="170" class="jop-noMdConv">

Paste the Access Token into the Heavymeta Press '**Deployment Settings**', '**Access Token**' field.

* * *

### Set the Gateway URL

This tutorial assumes you already have a Pinggy account, and have set your Pinggy Token, and Pinggy Tier in the Metavinci Pintheon settings.

<img src="/.vitepress/_resources/a3dff35b6e99dcd2094c0142f30b6e24.png" alt="a3dff35b6e99dcd2094c0142f30b6e24.png" width="450" height="226" class="jop-noMdConv">

<ins>Metavinci > Pintheon > Open Tunnel</ins>, to open a new tunnel.  In this case we are using Pinggys' free tier.

<img src="/.vitepress/_resources/3743afcf6d9085e538f2b78c23eb7656.png" alt="3743afcf6d9085e538f2b78c23eb7656.png" width="505" height="131" class="jop-noMdConv">

The Pinggy window will pop up, and the public link will be displayed in the terminal. Copy the link address from the terminal window.

<img src="/.vitepress/_resources/68b144c749a593739d6df70149a1ea89.png" alt="68b144c749a593739d6df70149a1ea89.png" width="479" height="190" class="jop-noMdConv">

Paste the public link from the Pinggy terminal into the Heavymeta Press **'Deployment Settings**', '**Gateway URL**' field. <ins>Make sure there is no extra spaces, or characters pasted into the field.</ins>

* * *

### Deploy the Site

<img src="/.vitepress/_resources/3fdd133e9dd1e3bad50eb72b8fea50cf.png" alt="3fdd133e9dd1e3bad50eb72b8fea50cf.png" width="414" height="165" class="jop-noMdConv">

In the Heavymeta Press Menu Bar, choose **<ins>Deploy > Launch Deploy</ins>.** The program will first upload all media files in the project '\_resources' folder to the Pintheon node, storing the deployed link.  After all media has been deployed, the site is rendered using the deployed media links.

<img src="/.vitepress/_resources/ffb6fc2c4174ead71fcab9ef9471a79a.png" alt="ffb6fc2c4174ead71fcab9ef9471a79a.png" width="447" height="281" class="jop-noMdConv">

On deployment completion, a browser will open to the deployed site. Since we used Pinggy free, the site will have a warning that needs to be clicked through.  The warning does not appear if you have a paid Pinggy account.

<img src="/.vitepress/_resources/fc83a318ef2a8eca27c195f138d8a74a.png" alt="fc83a318ef2a8eca27c195f138d8a74a.png" width="454" height="267" class="jop-noMdConv">

Clicking through, you'll see the site is a fully functional multi-page site.

<img src="/.vitepress/_resources/60bea2da8bb5b09cfd315609e45be0ee.png" alt="60bea2da8bb5b09cfd315609e45be0ee.png" width="483" height="293" class="jop-noMdConv">

If you look in your Pintheon node you'll find that all the media files, and the index.html for the site are shown as uploaded to your node.

It's that easy to deploy and self host a fully functional website from your own hardware.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;