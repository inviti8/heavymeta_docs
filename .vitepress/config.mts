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
      return items.filter(item => 
        // Filter out any items you don't want in the sitemap
        item.url && 
        !item.url.includes('misc') &&
        // Ensure all URLs are properly formatted with the base URL
        (item.url.startsWith('/') ? !item.url.startsWith('//') : true)
      );
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
      content: 'Heavymeta, documentation, developer tools, Pintheon, blockchain, web3, self-hosted, crypto, NFT, DeFi' 
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
