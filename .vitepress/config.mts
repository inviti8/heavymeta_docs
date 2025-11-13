import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Base URL configuration - will be available as import.meta.env.BASE_URL
  base: process.env.NODE_ENV === 'production' ? '/home/' : '/',
  // Ensure Vite knows about our base URL
  vite: {
    define: {
      'import.meta.env.BASE_URL': JSON.stringify(process.env.NODE_ENV === 'production' ? '/home/' : '/')
    }
  },
  ignoreDeadLinks: [
    // Don't check external links during build
    /^https?:\/\//,
    // Ignore specific paths that might be problematic
    /^\/\w+\/\w+\.md/,
  ],
  title: "Heavymeta™",
  description: "Documentation for the Heavymeta Tool Set.",
  
  // Sitemap configuration
  sitemap: {
    hostname: 'https://heavymeta.art',
    transformItems(items) {
      return items
        .filter(item => 
          // Filter out any items you don't want in the sitemap
          item.url && 
          !item.url.includes('misc') &&
          !item.url.endsWith('README/') &&  // Exclude README/ URLs
          !item.url.endsWith('README.html')  // Exclude README.html URLs
        )
        .map(item => ({
          ...item,
          // Add /home/ prefix to all URLs while ensuring we don't get double slashes
          url: item.url.startsWith('/') 
            ? `/home${item.url}` 
            : `/home/${item.url}`
        }));
    }
  },
  head: [
    ['link', { 
      rel: 'icon',
      type: 'image/x-icon',
      href: process.env.NODE_ENV === 'production' 
        ? '/favicon.ico' 
        : '/.vitepress/_resources/favicon.ico' 
    }],
    ['meta', { name: 'author', content: 'Heavymeta' }],
    ['meta', { 
      name: 'keywords', 
      content: 'Heavymeta, documentation, developer tools, Pintheon, blockchain, web3, self-hosted, crypto, NFT, DeFi, ai resistant, ai resistance, artist collective entertainment, collective artists network, artist control, artist controller, artist freedom formula, artist freedom formula reviews, artist collective, artists collective, the artist collective, collective of artists, community artists collective houston, community artists collective, artists collective spartanburg, atlanta artist collective, artist collective hartford, artist collective hartford ct, artist\'s collective, artists collective near me, the artists collective, artist collective near me, artist collectives, artist collective website, artist cooperative near me, art storage, art storage ideas, cloud storage for photographers, best cloud storage for photographers, unlimited cloud storage for photographers, blob storage vs file storage, blob storage vs file storage azure, hybrid cloud file server, cloud based file server small business, cloud based file server for small business, best cloud platforms for secure external file sharing, file storage, file backup server, creative collective, creative collective hudson, welcome to the creative collective, creative collective studio, creative studio collective, creative control, creative controls, creative control meaning, artistic freedom, freedom artist united international justice torrent, creative freedom, creative freedom meaning, freedom creativity, creative freedom app, freedom creative, creative power, god\'s creative power, gods creative power, dapp examples, blockchain dapp development, decentralized cloud storage, decentralized cloud storage using blockchain, web3 storage, digital sovereignty, digital sovereignty definition, what is digital sovereignty, distributed file storage, distributed file system, distributed file system replication, what is distributed file system, distributed file systems, distributed file sharing, distributed file system namespace, distributed file system storage mechanism, distributed file service, distributed file system examples, what is a distributed file system, s3 file gateway, sterling file gateway, file gateway, freedom artist united international justice, artistic power, power artists, free landing page builder, free landing page generator, free landing page builders for ppc reddit, gateway storage, gateway storage units, gateway self storage, gateway storage center, storage gateway, cloud storage gateway, aws storage gateway cost, amazon storage gateway, s3 storage gateway, file storage gateway, home file server, file server for home, host website from home, hosting from home, web hosting from home, what mastery digital, how mastery digital, how mastery digital, what digital mastery, digital mastery program, digital marketing mastery program, digital marketing mastery, which mastery digital, which digital mastery, why mastery digital, why digital mastery, how to protect art from ai, how to protect your art from ai, how to use ipfs gateway, ipfs hosting, ipfs gateway, ipfs ipns addresses, ipfs desktop, ipfs downloader, nft slang, nft meaning slang, open web, open web gismo, san antonio artist collective, san antonio artists collective, web3 seo, seo for web3, web 3.0 search engine, used to protect creative works, what is used to protect creative works, web3 development companies, web3 startups, top web3 companies, web3 startup, web 3.0 companies, web 3.0 stocks, web3 website, web3 design, web 3.0 examples, web 3.0 applications, web 3.0 apps, web 3.0 social media, web3 vs web2, what is web2 and web3, difference between web2 0 and web3 0, web 3.0 vs 2.0, web 1.0 web 2.0 and web 3.0, web3 projects, what is web3 wallet, web3 social media, web3 dapp, web3 dapps, web3 domains, web3 domain, web3 domain names, web3 domain name, web 3.0 domains, web3 game development, web3 gamers, web3 0 games, web3 gamer, web3 hackathon, web3 hackathons, decentralized hosting, decentralized web hosting, web3 hosting, web3 server hosting, web3 infrastructure, web3 jobs, web3 求职, web3 marketer, web3 digital marketing agency, web3 marketing strategy, web3 marketing agencies, web3 strategy, web 3.0 marketing, web3 news wire, web3 newswire, web3 payments, web3 pay, web3 payment gateway, web3 api, web3 solutions, web3 platforms, web3 development firm, web3 examples, web3 website builder, examples of web3, web3 dev tools, web3 protocol, when will web 3.0 be released, web 3.0 the future of internet, web3 是 什麼, web3 是什么, web3 0 应用, web3 0 是 什麼, web3 是什麼, web3 钱包, web3 0 钱包, web3.0钱包, web service enhancements 3.0, web services enhancements 3.0, web services enhancements wse 3.0, ipfs nft, ipfs connect, ipfs account, ipfs storage, ipfs log in, ipfs download, ipfs ins, www ipfs com, what is ipfs, ipfs meaning, ipfs and blockchain, ipfs cid, digital content protection, file cloud server, ipfs storage cost, onchain workshop, file pinning, nft logo, web3 python, aws datasync vs storage gateway, passive digital mastery, passive digital mastery reviews, artistic autonomy, freedom creative solutions, creative freedom ink, creative city free zone authority, flower power creative, power creative, creativity power, unleash your creative power, power artist, creative control lyrics, what part of the brain controls creativity, creative minds controller, creative defense foundation, german artist collective, newport artists collective, philadelphia artists collective, artists unite collective, harlem creative collective, east creative collective, genesis creative collective, creative collabs collective, artist cooperative, digital cooperation organization, digital collective, open web ui, edge & node house of web3, how to invest in web3, what is a web3 wallet, web3 community, web3 edmonton, web3 smart contract, web3 forms, web3 auth, web3 c\'est quoi, web3 development course, web3 events, web3 is going just great, web3 ios app development, web3 metaverse, web3 tokenization, web3 钱包 是 冷 钱包 吗, dao web3, que es web3, web3 adoption challenges high transaction fees, web3 design studio, web3 product management, web 3.0 development services, web 3.0 technologies stiftung, air file storage, desktop file storage, electronic file storage, what is file storage, file cloud login, pixel art cloud, blockchain dapp development company, understanding distributed systems, best free file backup program, pinata ipfs, ipfs search engine, free landing page templates'
    }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://heavymeta.art/' }],
    ['meta', { 
      property: 'og:title', 
      content: 'Heavymeta™ - Documentation for the Heavymeta Tool Set' 
    }],
    ['meta', { 
      property: 'og:description', 
      content: 'Comprehensive documentation for the Heavymeta Tool Set including Pintheon Node, Press, and development tools.' 
    }],
    ['meta', { 
      property: 'og:image', 
      content: '/og-image.jpg' 
    }],
    
    // Twitter
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:url', content: 'https://heavymeta.art/' }],
    ['meta', { 
      property: 'twitter:title', 
      content: 'Heavymeta™ - Documentation for the Heavymeta Tool Set' 
    }],
    ['meta', { 
      property: 'twitter:description', 
      content: 'Comprehensive documentation for the Heavymeta Tool Set including Pintheon Node, Press, and development tools.' 
    }],
    ['meta', { 
      property: 'twitter:image', 
      content: '/og-image.jpg' 
    }],
    
    // Canonical URL
    ['link', { 
      rel: 'canonical', 
      href: 'https://heavymeta.art/' 
    }],
    
    // JSON-LD Structured Data
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Heavymeta Documentation',
      'url': 'https://heavymeta.art/',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://heavymeta.art/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    })]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: process.env.NODE_ENV === 'production' ? '/assets/logo.png' : '/.vitepress/_resources/logo.png',
    // assetsDir is for build output, not source assets
    // Remove it as we're handling assets differently
    search: {
      provider: 'local'
    },
    nav: [
      { text: '🏯 HOME', link: '/' },
      { text: '📜 ABOUT', link: '/Tools/Introduction' },
      { text: '🪁 PINTHEON', link: '/Tools/Pintheon Node/Vision' },
      { text: '📓 HEAVYMETA PRESS', link: '/Tools/Press/Heavymeta Press' },
      { text: '🤓 TUTORIALS', link: '/Tools/Tutorials/List' },
      { text: '🛠️ DEVELOPERS', link: '/Tools/Roadmap/Development' }
    ],

    sidebar: [
    {
      text: '📜 About',
      collapsed: true,
        items: [
          { text: '💬 Introduction', link: '/Tools/Introduction' }
        ]
      },
      {
      text: '🪁 Pintheon',
      collapsed: true,
      items: [
        { text: '🪬 Vision', link: '/Tools/Pintheon Node/Vision' },
        { text: '🌟 Why Choose Pintheon', link: '/Tools/Why Pintheon' },
        { text: '📥 Installation', link: '/Tools/Pintheon Node/Installation' },
        { text: '🚀 Launching', link: '/Tools/Pintheon Node/Launching a Testnet Node' },
        { text: '🎛 Dashboard', link: '/Tools/Pintheon Node/Dashboard' },
        { text: '⚙️ Settings', link: '/Tools/Pintheon Node/Settings' },
        { text: '🌐 Serving Files', link: '/Tools/Pintheon Node/Serving Files to the Internet' },
        { text: '🌅 Opus Token', link: '/Tools/Pintheon Node/Opus Token' },
        {
          text: '🤓 Tutorials',
          collapsed: true,
          items: [
            { text: 'Deploy VitePress with Pintheon', link: '/Tools/Tutorials/Deploy Vitepress with Pintheon' },
            { text: 'Deploy with Heavymeta Press', link: '/Tools/Tutorials/Deploy with HVYM Press' },
            { text: 'The Easy way to test with xBull Wallet', link: '/Tools/Tutorials/The Easy way to test with xBull Wallet' },
            { text: 'The Easy way to test with Lobstr Wallet', link: '/Tools/Tutorials/The Easy way to test with Lobstr Wallet' }
          ]
        },
        {
          text: '🧑‍💻 Development',
          collapsed: true,
          items: [
            { text: '👋 Welcome', link: '/Tools/Pintheon Node/Developer Welcome' },
            { text: '📤 File Upload & Access', link: '/Tools/Pintheon Node/Developer Guide - Programmatic Access' }
          ]
        }
        ]
      },
      {
      text: '📓 Heavymeta Press',
      collapsed: true,
        items: [
          { text: '😎 Introduction', link: '/Tools/Press/Heavymeta Press' },
          { text: '📥 Installation', link: '/Tools/Press/Installation' },
          { text: '🏃🏻 Running Press', link: '/Tools/Press/Running Press' },
          { text: '⚙️ Settings', link: '/Tools/Press/Settings' }
        ]
      },
      {
        text: '🛠️ Roadmap',
        collapsed: true,
        items: [
          { text: 'Development', link: '/Tools/Roadmap/Development' }
        ]
      },
      {
        text: 'LEGAL',
        collapsed: true,
        items: [
          { text: 'Privacy Policy', link: '/legal/privacy-policy' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/inviti8' },
      { icon: 'discord', link: 'https://discord.gg/55mVrPcf' }
    ]
  }
})
