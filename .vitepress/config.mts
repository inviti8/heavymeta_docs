import { defineConfig } from 'vitepress'

export default defineConfig({
  // Base URL configuration - will be available as import.meta.env.BASE_URL
  base: process.env.NODE_ENV === 'production' ? '/custom_homepage/' : '/',
  
  // Site metadata
  title: "Heavymeta™",
  description: "Documentation for the Heavymeta Tool Set.",
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: true,
  
  // Sitemap configuration
  sitemap: {
    hostname: 'https://heavymeta.art',
    transformItems(items) {
      return items.filter(item => item.url && !item.url.includes('misc'));
    }
  },

  // Vite configuration
  vite: {
    // Development server options
    server: {
      host: '0.0.0.0',
      port: 3000,
      open: false,
      fs: {
        // Allow serving files from one level up from the package root
        allow: ['..']
      }
    },
    publicDir: 'public',
    build: {
      // Minify CSS
      minify: 'terser',
      // Generate source maps
      sourcemap: process.env.NODE_ENV !== 'production',
      // Chunk size warning limit (in kbs)
      chunkSizeWarningLimit: 1000,
      assetsDir: '.',
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo: { name: string | undefined }) => {
            const fileName = assetInfo.name;
            if (fileName && ['robots.txt', 'llms.txt', 'sitemap.xml'].includes(fileName)) {
              return '[name][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          }
        }
      }
    },
    define: {
      'import.meta.env.BASE_URL': JSON.stringify(
        process.env.NODE_ENV === 'production' ? '/custom_homepage/' : '/'
      )
    },
    plugins: [
      {
        name: 'configure-response-headers',
        configureServer(server) {
          server.middlewares.use((_req, res, next) => {
            res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
            res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
            next();
          });
        }
      }
    ]
  },

  // Head configuration
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

  // Theme configuration
  themeConfig: {
    logo: process.env.NODE_ENV === 'production' 
      ? '/assets/logo.png' 
      : '/.vitepress/_resources/logo.png',
    
    // Search configuration
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },

    // Navigation
    nav: [
      { text: '🏯', link: '/' },
      { text: '📜', link: '/Tools/Introduction' },
      { text: '🪁', link: '/Tools/Pintheon Node/Vision' },
      { text: '📓', link: '/Tools/Press/Heavymeta Press' },
      { text: '🛠️', link: '/Tools/Roadmap/Development' }
    ],

    // Sidebar
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
          { text: '⚙️ Settings', link: '/Tools/Pintheon Node/Settings' }
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
        }
    ],

    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/inviti8' },
      { icon: 'discord', link: 'https://discord.gg/55mVrPcf' }
    ],

    // Edit link
    editLink: {
      pattern: 'https://github.com/your-org/heavymeta-docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    // Footer
    footer: {
      message: 'All Rights Reserved.',
      copyright: `Copyright © ${new Date().getFullYear()} Heavymeta`
    },

    // Algolia DocSearch (if using)
    // algolia: {
    //   appId: 'YOUR_APP_ID',
    //   apiKey: 'YOUR_API_KEY',
    //   indexName: 'heavymeta',
    //   placeholder: 'Search documentation...',
    //   searchParameters: {
    //     hitsPerPage: 10,
    //   },
    // }
  },

  // Markdown extensions
  markdown: {
    lineNumbers: true
  }
});
