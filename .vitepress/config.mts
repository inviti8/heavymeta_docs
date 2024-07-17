import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Heavymeta Docs",
  description: "Documentation for the Heavymeta Tool Set.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/Info/Introduction' },
      { text: 'Network', link: '/Network/Vision' },
      { text: 'Getting Started', link: '/Getting Started/Getting Started' },
      { text: 'Content Creation', link: '/Content Creation/Content Creation' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
    {
      text: 'Info',
      collapsed: true,
        items: [
          { text: 'Introduction', link: '/Info/Introduction' },
          { text: 'Proprium Data Structure', link: '/Info/Tools/Proprium Data Structure' },
          { text: 'Blender Addon', link: '/Info/Tools/Blender Addon' },
          { text: 'Interaction Engine', link: '/Info/Tools/Interaction Engine' }
        ]
      },
      {
      text: 'Network',
      collapsed: true,
        items: [
          { text: 'Vision', link: '/Network/Vision' },
          { text: 'Utility Tokens', link: '/Network/Utility Tokens' },
          { text: 'Tokenomics', link: '/Network/Tokenomics' }
        ]
      },
      {
      text: 'Getting Started',
      collapsed: true,
        items: [
          { text: 'Welcome', link: '/Getting Started/Getting Started' },
          { text: 'Prerequisites', link: '/Getting Started/Setup/Prerequisites' },
          { text: 'Installation', link: '/Getting Started/Setup/Installation' },
          { text: 'Engage the Network', link: '/Getting Started/Setup/Engage the Network' }
        ]
      },
      {
      text: 'Content Creation',
      collapsed: true,
        items: [
          { text: 'Create', link: '/Content Creation/Content Creation' },
          { text: 'Account Management', link: '/Content Creation/1. Account Management/Account Management' },
          { 
            text: 'Project Settings',
            items: [
                { text: 'Model Debugger Settings', link: '/Content Creation/2. Project Settings/Model Debugger Settings' },
                { text: 'NFT Minter Settings', link: '/Content Creation/2. Project Settings/NFT Minter Settings' },
                { text: 'Custom Settings', link: '/Content Creation/2. Project Settings/Custom Settings' },
                { text: 'Minter Setup Example', link: '/Content Creation/2. Project Settings/Minter Setup Example' }
              ]
          },
          { 
            text: 'Proprium Assignment',
            items: [
                { text: 'Proprium', link: '/Content Creation/3. Proprium Assignment/NFT Data - Proprium' },
                { text: 'Interactables', link: '/Content Creation/3. Proprium Assignment/NFT Data - Interactables' },
                { text: 'Actions', link: '/Content Creation/3. Proprium Assignment/NFT Data - Action' },
                { text: 'Examples', link: '/Content Creation/3. Proprium Assignment/Examples' }
              ]
          }
        ]
      },
      {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
