import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Heavymeta Docs",
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
      { text: '📓', link: '/Tools/Press/Heavymeta Press' }
    ],

    sidebar: [
    {
      text: '📜',
      collapsed: true,
        items: [
          { text: '💬 Introduction', link: '/Tools/Introduction' }
        ]
      },
      {
      text: '🪁 Pintheon',
      collapsed: true,
      items: [
        { text: '🌟 Why Choose Pintheon', link: '/Tools/Why Pintheon' },
        { text: '🪬 Vision', link: '/Tools/Pintheon Node/Vision' },
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
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
