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
  ignoreDeadLinks: [
    // Don't check external links during build
    /^https?:\/\//,
    // Ignore specific paths that might be problematic
    /^\/\w+\/\w+\.md/,
  ],
  title: "Heavymeta™",
  description: "Documentation for the Heavymeta Tool Set.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/.vitepress/_resources/logo.png',
    // assetsDir is for build output, not source assets
    // Remove it as we're handling assets differently
    search: {
      provider: 'local'
    },
    nav: [
      { text: '🏯', link: '/' },
      { text: '📜', link: '/Tools/Introduction' },
      { text: '🪁', link: '/Tools/Pintheon Node/Vision' },
      { text: '📓', link: '/Tools/Press/Heavymeta Press' },
      { text: '🛠️', link: '/Tools/Roadmap/Development' }
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
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/inviti8' },
      { icon: 'discord', link: 'https://discord.gg/gyWxJSRb' }
    ]
  }
})
