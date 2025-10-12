VitePress is a popular static site generation library, especially for technical documentation.  With Pintheon, it's easy to deploy you VitePress docs to the internet.

* * *

## Video Walkthrough
<iframe width="560" height="315" src="https://www.youtube.com/embed/5NjT73pFHD4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

* * *

### Prerequisites

- [Install NPM](https://nodejs.org/en/download)
    
- [Install VitePress](https://vitepress.dev/guide/getting-started#installation)
    
- [Install Metavinci](https://heavymeta.art/custom_homepage/Tools/Pintheon%20Node/Installation.html)
    
- [Open a Pinggy Account](https://pinggy.io/)
    
- Install these packages:
    
    ```
    npm install dotenv --save
    npm install --save-dev @types/node
    ```
    

* * *

### Process

First step is to create you VitePress site, this tutorial isn't about how to use VitePress, to follow the [docs](https://vitepress.dev/) for to understand fully how to use the library.

In this case we will be scaffolding a very basic site.

* * *

##### Scaffold the Site

Open a terminal in the directory in which you want your project files to exist, then run:

```
npx vitepress init
```

VitePress will give you a set of interactive prompts that act as a basis for the site setup.

```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Where should VitePress look for your markdown files?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◇  Theme:
│  Default Theme
│
◇  Use TypeScript for config and theme files?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
◇  Add a prefix for VitePress npm scripts?
│  Yes
│
◇  Prefix for VitePress npm scripts:
│  docs
│
└  Done! Now run pnpm run docs:dev and start writing.
```

* * *

##### Site Files

<img src="/.vitepress/_resources/8c3a4cfee3b7d5e20b440147bc6efeb5.png" alt="8c3a4cfee3b7d5e20b440147bc6efeb5.png" width="380" height="282" class="jop-noMdConv">

* * *

###### config.mts

This file configures the site. This file needs to be updated so that it works when uploaded to your Pintheon node.  
We will update it, adding an environment variable, so routing is consistent for development, and when built for deplyment on Pintheon. We add these lines to the config:

```
// Base URL configuration - will be available as import.meta.env.BASE_URL
base: process.env.NODE_ENV === 'production' ? '/custom_homepage/' : '/',
// Ensure Vite knows about our base URL
vite: {
  define: {
    'import.meta.env.BASE_URL': JSON.stringify(process.env.NODE_ENV === 'production' ? '/custom_homepage/' : '/')
  }
}
```

So the config now looks like this:

```
import { defineConfig } from 'vitepress'

  // https://vitepress.dev/reference/site-config
  export default defineConfig({
  // Base URL configuration - will be available as import.meta.env.BASE_URL
  base: process.env.NODE_ENV === 'production' ? '/custom_homepage/' : '/',
  // Ensure Vite knows about our base URL
  vite: {
    define: {
      'import.meta.env.BASE_URL': JSON.stringify(process.env.NODE_ENV === 'production' ? '/custom_homepage/' : '/')
    }
  },
  title: "Pintheon Demo",
  description: "A Pintheon Demo",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

```

* * *

###### package.json

<img src="/.vitepress/_resources/51bb4e99c4fa254ff2793d6b1347c0ea.png" alt="51bb4e99c4fa254ff2793d6b1347c0ea.png" width="596" height="279" class="jop-noMdConv">

This file defines the dependencies, as well as settings for building the project. We want to update it to include the 'NODE_ENV' environment variable we defined above:

```
{
  "scripts": {
    "docs:dev": "vitepress dev",
    "docs:build": "NODE_ENV=production vitepress build",
    "docs:preview": "vitepress preview"
  },
  "dependencies": {
    "dotenv": "^17.2.3"
  },
  "devDependencies": {
    "@types/node": "^24.6.2"
  }
}

```

This is specifically so the routing works in the built app. To build and run for development we call:

```
npm run docs:dev
```

The site will be built and runs on: http://localhost:5173/

* * *

###### markdown files

<img src="/.vitepress/_resources/76ad01c4bf01c77c682d00421081c58c.png" alt="76ad01c4bf01c77c682d00421081c58c.png" width="349" height="293" class="jop-noMdConv">

The markdown files are used for the site content, customize these, add more etc., in order to customize the site content.

* * *

###### Deploying to Pintheon

First build the site with:

```
npm run docs:build
```

&nbsp;

<img src="/.vitepress/_resources/9c204ace7c0d8dc5d71d30f3f3a152c5.png" alt="9c204ace7c0d8dc5d71d30f3f3a152c5.png" width="284" height="366" class="jop-noMdConv">

All the built assets are built into the /dist directory

* * *

&nbsp;

<img src="/.vitepress/_resources/ec78acf4d0a89f812552ad47959b7851.png" alt="ec78acf4d0a89f812552ad47959b7851.png" width="325" height="221" class="jop-noMdConv">

We want to compress these into a zip file so we can upload them to the Pintheon node.

* * *

###### Uploading zip to Pintheon<img src="/.vitepress/_resources/d5c5d12a00314f026c22279def7fbc13.png" alt="d5c5d12a00314f026c22279def7fbc13.png" width="418" height="210" class="jop-noMdConv">

Log into your Pintheon node, and navigate to Settings. Under 'Homepage', choose 'Upload' from the drop-down.

&nbsp;

* * *

<img src="/.vitepress/_resources/791f9b13c725c990efb3c1e03fa36291.png" alt="791f9b13c725c990efb3c1e03fa36291.png" width="393" height="324" class="jop-noMdConv">

Then press the upload button and find the zipped site assets.

* * *

<img src="/.vitepress/_resources/e7bb366ea14fe5ee037bcd7f8a4dfa38.png" alt="e7bb366ea14fe5ee037bcd7f8a4dfa38.png" width="403" height="303" class="jop-noMdConv">

If upload was successful, a confirmation will show.

* * *

&nbsp;

<img src="/.vitepress/_resources/c314fcf26c1e79af3a2123b2a7d03b35.png" alt="c314fcf26c1e79af3a2123b2a7d03b35.png" width="418" height="319" class="jop-noMdConv">

The site is now served on: https://127.0.0.1:9998/custom_homepage/

* * *

&nbsp;

<img src="/.vitepress/_resources/3519a9a378d86085e7fe0f6f39b2fed7.png" alt="3519a9a378d86085e7fe0f6f39b2fed7.png" width="492" height="352" class="jop-noMdConv">

Log into your pinggy acccount, and copy your token.

* * *

  
<img src="/.vitepress/_resources/1a24e5fde23fe7baf12eafea7c7f28fe.png" alt="1a24e5fde23fe7baf12eafea7c7f28fe.png" width="289" height="140" class="jop-noMdConv"><img src="/.vitepress/_resources/35d13d2f8e8e33f63645fc3d7465aadf.png" alt="35d13d2f8e8e33f63645fc3d7465aadf.png" width="240" height="201" class="jop-noMdConv">

Set your Pinggy token in Metavinci.

* * *

&nbsp;

<img src="/.vitepress/_resources/65df0a6a59cfdeffdebc332e76839280.png" alt="65df0a6a59cfdeffdebc332e76839280.png" width="335" height="192" class="jop-noMdConv">

By default metavinci assumes tunnels will use pinggy pro, if you want to use pinggy free, you must set it in metavinci.

* * *

###### Serving your site to the Internet

<img src="/.vitepress/_resources/2d184283b6ca2997743348d40b8f6da8.png" alt="2d184283b6ca2997743348d40b8f6da8.png" width="353" height="206" class="jop-noMdConv">

Open a tunnel with metavinci

* * *

&nbsp;

<img src="/.vitepress/_resources/2d58e9ae0b3325b000d1f1199ea9538a.png" alt="2d58e9ae0b3325b000d1f1199ea9538a.png" width="521" height="281" class="jop-noMdConv">

The Pinggy terminal will popup, and showing the links to where you site is being served on the internet.

That's it!  You now have a custom website served to the web, directly from your computer.

* * *

&nbsp;