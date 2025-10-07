---
title: Installation
updated: 2025-08-06 05:06:37Z
created: 2025-08-06 04:13:20Z
latitude: 36.11470740
longitude: -115.17284970
altitude: 0.0000
---

## Prerequisites:

#### Install Docker or Docker Desktop

For installing docker only, follow instructions [here](https://docs.docker.com/get-started/get-docker/).  
Recommended, install Docker Desktop from [here](https://www.docker.com/products/docker-desktop/).

## Installation:

#### Install Metavinci Desktop

Official installers for Linux (.deb), Windows (.msi), and macOS (.zip) are available on the [GitHub Releases](https://github.com/inviti8/metavinci/releases) page.

### Windows Installation

1. **Download the following files from the latest release**:
   - `metavinci-x.x.x.msi` (the installer)
   - `install-win-metavinci-cert.ps1` (certificate installation script)
   - `heavymeta-code-sign.cer` (code signing certificate)

2. **Install the Certificate (one-time setup)**:
   - Right-click on `install-win-metavinci-cert.ps1` and select "Run with PowerShell"
   - When prompted, confirm running the script
   - The script will automatically install the certificate to the Trusted Publishers store

3. **Run the Installer**:
   - Double-click `metavinci-x.x.x.msi`
   - Follow the installation wizard
   - The application will be available in the Start Menu and as a Desktop shortcut

### Linux Installation
```bash
# Install the .deb package
sudo dpkg -i metavinci-x.x.x.deb

# Install any missing dependencies
sudo apt-get install -f
```

### macOS Installation
- Download the `dmg` file for your architecture (arm64 or amd64)
- Drag the application to your Applications folder
- If you see a security warning, right-click the app and select "Open" to run it

Windows firewall may flag the file as a virus on download, if this happens, follow instructions [here](https://learn.microsoft.com/en-us/answers/questions/3187645/how-to-add-an-exception-to-windows-defender?forum=windows-all&referrer=answers). To add an exception for the installer, then install as normal.


* * *

## Running Metavinci
<img src="/.vitepress/_resources/metavinci_app_menu.png" alt="metavinci_app_menu.png" width="538" height="180" class="jop-noMdConv">

After installation the program icon will be available in the apps menu of your specific operating system.  Click it to launch the tray program.  Metavinci is a minimal program designed to make it easier to install various tools in the Heavymeta ecosystem.

* * *
## Installing the Heavymeta CLI
<img src="/.vitepress/_resources/metavinci_install_hvym.png" alt="metavinci_install_hvym.png" width="573" height="192" class="jop-noMdConv">

The first tool required is the hvym cli.  If you right-click the Metavinci icon shown in the tray, a drop down menu will be displayed, prompting you in to install the hvym cli.  Click this to install.
* * *
## Installing Pintheon
<img src="/.vitepress/_resources/metavinci_install_pintheon.png" alt="metavinci_install_pintheon.png" width="545" height="213" class="jop-noMdConv">

After hvym is installed, you will now have ability to install Pintheon. ==Make sure that docker is running when trying to install Pintheon, if it isn't installation will fail.==  Installation could take a quite a while due to the Pintheon Image size.
* * *
## Running Pintheon
<img src="/.vitepress/_resources/start_pintheon.png" alt="start_pintheon.png" width="542" height="206" class="jop-noMdConv">

Once installed, you will now be able to start up the Pintheon node in the Metavinci tray.
* * *
