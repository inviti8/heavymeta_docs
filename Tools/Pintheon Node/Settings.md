---
title: Settings
updated: 2025-09-10 23:30:51Z
created: 2025-08-06 17:56:32Z
latitude: 35.70902590
longitude: 139.73199250
altitude: 0.0000
---

## Settings

<img src="/.vitepress/_resources/settings.png" alt="settings.png" width="697" height="338" class="jop-noMdConv">

* * *

1.  <details><summary>id</summary> This indicates the id for this node, it can be copied to the clipboard.</details>
2.  <details><summary>gateway</summary> This is the url of the node. When the node is exposed to the internet by opening a tunnel, this value should be changed to reflect the url the tunneling service provides.</details>
3.  <details><summary>theme</summary> This allows you to set a custom color scheme for the node ui.</details>
4.  <details><summary>bg image</summary> This is allows you to set a custom background image for the node ui.</details>
5.  <details><summary>custom homepage</summary> Create a custom home page for your node. This allows you to create a static site, and zip it. The zip file can be uploaded through this interface. The site will be available at the index level, when the node is exposed to the internet.</details>
6.  <details><summary>Add Access Token</summary> Pintheon nodes are meant to be used by externally developed applications, if you so desire. As such custom access tokens can be created here, these tokens can be used to access the external api endpoints</details>

* * *

## Custom Homepage

<img src="/.vitepress/_resources/ipfs_homepage.png" alt="ipfs_homepage.png" width="248" height="257" class="jop-noMdConv">

Enter the hash of an uploaded html document, and it will be served at the root endpoint of the node.  
<img src="/.vitepress/_resources/upload_homepage.png" alt="upload_homepage.png" width="246" height="255" class="jop-noMdConv">  
Additionally, a custom homepage can be uploaded. The required file type is a zip file, of a valid static website.

* * *

## Access Tokens

![new_token.png](/.vitepress/_resources/new_token.png)

To create an access token, click the 'Add Access Token' button.  This token requires a 'Stellar 25519 Public Key', this key can be generated using the [hvym_stellar python package](https://github.com/inviti8/hvym_stellar). The token can be timestamped, with a minimum of 1 minute, and a maximum of 1 year.  More information about these types of keys is covered in the developers section.

<img src="/.vitepress/_resources/add_token2.png" alt="add_token2.png" width="439" height="351" class="jop-noMdConv">

After a token is created it can be copied, and saved as needed.  The token is not saved by your node.  Once the above window, the token cannot be regenerated.

<img src="/.vitepress/_resources/token_list.png" alt="token_list.png" width="743" height="105" class="jop-noMdConv">

The Access token list is populated under the 'Add Access Token' button. This list can be used to revoke access buttons by clicking the 'X' button to delete the public key reference.


* * *