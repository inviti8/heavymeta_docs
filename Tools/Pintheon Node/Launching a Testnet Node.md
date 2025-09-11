---
title: Launching a Testnet Node
updated: 2025-09-10 00:06:34Z
created: 2025-07-27 20:06:33Z
latitude: 35.70902590
longitude: 139.73199250
altitude: 0.0000
---

&nbsp;

## Open Pintheon on localhost

Once the Pintheon Container is up and running, it will be accessible by opening a browser to: https://127.0.01:9999/admin. To access it follow the instructions below.

On first run, the ssl certificate will be saved on your system at the following locations:


- Windows: `C:/Users/<username>/pintheon_data/ssl/pintheon-rootCa.crt`
- MacOS: `/Users/<username>/pintheon_data/ssl/pintheon-rootCa.crt`
- Linux: `/home/<username>/pintheon_data/ssl/pintheon-rootCa.crt`

## Installing the SSL Certificate

### Google Chrome/Chromium
1. Open Chrome and go to `chrome://settings/certificates`
2. Select the "Authorities" tab
3. Click "Import" and navigate to your certificate file:
   - Windows: `C:/Users/<username>/pintheon_data/ssl/pintheon-rootCa.crt`
   - MacOS: `/Users/<username>/pintheon_data/ssl/pintheon-rootCa.crt`
   - Linux: `/home/<username>/pintheon_data/ssl/pintheon-rootCa.crt`
4. Check "Trust this certificate for identifying websites"
5. Click "OK" and restart Chrome

### Mozilla Firefox
1. Open Firefox and go to `about:preferences#privacy`
2. Scroll down and click "View Certificates"
3. Go to the "Authorities" tab
4. Click "Import..." and select your certificate file
5. Check "Trust this CA to identify websites"
6. Click "OK" and restart Firefox

### Microsoft Edge
1. Open Edge and go to `edge://settings/privacy`
2. Click on "Manage certificates"
3. Go to the "Authorities" tab
4. Click "Import" and select your certificate file
5. Check "Trust this certificate for identifying websites"
6. Click "OK" and restart Edge

### Safari (MacOS only)
1. Open Keychain Access (Applications > Utilities > Keychain Access)
2. Select "System" keychain
3. Go to File > Import Items...
4. Select your certificate file
5. Double-click the imported certificate
6. Expand "Trust" and set "When using this certificate" to "Always Trust"
7. Close the window, enter your password, and restart Safari

* * *

## Launch UI

<img src="/.vitepress/_resources/pintheon_launch_page_1.png" alt="pintheon_launch_page_1.png" width="539" height="320" class="jop-noMdConv">

In order to launch your node, you must have a launch key and token. Click the 'Open Token Gen' button, and the Token Generation app will be opened in a new tab.

* * *

## Launch Token Generator

<img src="/.vitepress/_resources/pintheon_token_gen1.png" alt="pintheon_token_gen1.png" width="549" height="278" class="jop-noMdConv">

Enter a valid email address, and then click the launch button.

* * *

## Fund the node

<img src="/.vitepress/_resources/fund_node.png" alt="fund_node.png" width="407" height="515">

You'll be presented with a prompt to fund the new node using XLM.

* * *

## Copy Launch Token from UI

<img src="/.vitepress/_resources/launch_token_gen2.png" alt="launch_token_gen2.png" width="544" height="270" class="jop-noMdConv">

Once node is funded, a token will be generated, which can be copied to the clipboard.

* * *

## Copy Launch Key from email

<img src="/.vitepress/_resources/Screenshot%202025-08-04%20180653.png" alt="Screenshot 2025-08-04 180653.png" width="544" height="512" class="jop-noMdConv">

Your launch key will be sent to the provided email address. Along with the address of your node on the Stellar network. The node is pre-funded with xlm to cover the launch fees.  You'll need to keep this address funded to perform additional network actions.

* * *

## Paste Launch token and key

<img src="/.vitepress/_resources/pintheon_launch_page_2.png" alt="pintheon_launch_page_2.png" width="546" height="540" class="jop-noMdConv">

Paste both the launch token and key into their related fields, and click the 'Establish' button.

* * *

## Establish Node on Network

<img src="/.vitepress/_resources/establish_pintheon_node.png" alt="establish_pintheon_node.png" width="543" height="521" class="jop-noMdConv">

Enter a unique name for your node, a description, and some optional meta data.  Then click the 'Save Keystore' button, to establish your node data on the Stellar Network.

* * *

## Save Node Keystore

<img src="/.vitepress/_resources/creat_keystore_1.png" alt="creat_keystore_1.png" width="547" height="512" class="jop-noMdConv">

You will be prompted to enter a password.  This will create an encrypted keystore file.  **DO NOT lose your password, or the file,** it is required to enter the dashboard of your node.

* * *

## Load Keystore to login to Node

<img src="/.vitepress/_resources/authenticate.png" alt="authenticate.png" width="548" height="428" class="jop-noMdConv">

After the encrypted keystore is generated and downloaded, you'll be redirected to the 'Authenticate' page.  From here you can click the 'Authenticate' button, enter your password, and select you encrypted keystore file.  Which will log you into the dashboard.

&nbsp;