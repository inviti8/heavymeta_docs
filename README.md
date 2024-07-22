# heavymeta_docs
This is site is built with [vite press](https://vitepress.dev/).

Clone this repo.

Main site configuration is done by editing:  
`.vitepress/config.mts`

Routes for the the main site sections in the top bar, are defined in "nav":

```json
nav: [
      { text: '🏡', link: '/' },
      { text: '📜', link: '/Info/Introduction' },
      { text: '🌐', link: '/Network/Vision' },
      { text: '⚙️', link: '/Getting Started/Welcome' },
      { text: '🛠️', link: '/Content Creation/Content Creation' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
```

Routes for site content are defined in "sidebar":

```json
{
      text: '📜',
      collapsed: true,
        items: [
          { text: '💬 ~ Introduction', link: '/Info/Introduction' },
          { text: '💬 ~ Proprium Data Structure', link: '/Info/Tools/Proprium Data Structure' },
          { text: '💬 ~ Blender Addon', link: '/Info/Tools/Blender Addon' },
          { text: '💬 ~ Interaction Engine', link: '/Info/Tools/Interaction Engine' }
        ]
      },
      {
      text: '🌐',
      collapsed: true,
        items: [
          { text: '💡 ~ Vision', link: '/Network/Vision' },
          { text: '💡 ~ Utility Tokens', link: '/Network/Utility Tokens' },
          { text: '💡 ~ Tokenomics', link: '/Network/Tokenomics' }
        ]
      },...
    ]
```

&nbsp;Joplin is used for generating the markdown: https://joplinapp.org/

Once done adding all new notes in Joplin, and ready to test, delete all markdown folders, and '_resources' folder.

Then, in Joplin do: File > Export All > Markdown MD, to export all updated markdown files and images.

&nbsp;

&nbsp;
