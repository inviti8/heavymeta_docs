---
title: Running Press
updated: 2025-09-10 23:31:51Z
created: 2025-09-10 01:53:37Z
latitude: 1.35537940
longitude: 103.86774440
altitude: 0.0000
---
#### Running Press

<img src="/.vitepress/_resources/run_press.png" alt="run_press.png" width="583" height="229" class="jop-noMdConv">

After installation, Press can be run by selecting 'Run Press', from the 'Press' sub-menu.

Your markdown folders & any associated media must be saved using specific folder structures.  These structures define the separation of different sections in the web site.

* * *

## Project Folder Setup


```markdown
└── Project/
    ├── section_a/
    │   ├── page_a1.md
    │   └── page_a2.md
    ├── section_b/
    │   ├── page_b1.md
    │   ├── page_b2.md
    │   └── page_b3.md
    └── _resources/
        ├── logo.png
        └── banner.png
```

Inside of the main project folder, there should be a sub-folder for each set of markdown files for a given section.

```markdown
└── Project/
    ├── home.md
    ├── section_a/
    │   ├── page_a1.md
    │   └── page_a2.md
    ├── section_b/
    │   ├── page_b1.md
    │   ├── page_b2.md
    │   └── page_b3.md
    └── _resources/
        ├── logo.png
        └── banner.png
```

Additionally, if a single markdown file is placed inside the project folder named 'home.md', this markdown file will be recognized and rendered differently as the homepage of the site, that can be configured to have links to specific sections of the site.

To understand the folder structure required for a project, download the [sample project](https://github.com/inviti8/hvym_press/tree/main/sample) from the [github repo](https://github.com/inviti8/hvym_press), and open it with Press.

* * *

## Select working project folder

<img src="/.vitepress/_resources/press_sample_select.png" alt="press_sample_select.png" width="560" height="168" class="jop-noMdConv">

Download the sample project, run Press, and navigate into the 'sample' folder and click 'Ok'.

* * *

## Launch Debug Site

<img src="/.vitepress/_resources/press_debug.png" alt="press_debug.png" width="520" height="186" class="jop-noMdConv">

Choose **Debug > Launch Debug**, to render the markdown into a site on localhost.

<img src="/.vitepress/_resources/press_debug_site.png" alt="press_debug_site.png" width="720" height="458" class="jop-noMdConv">

The site will be opened at http:localhost:8000/serve, and you can see how the site is rendered by default.

* * *

## Press Main UI

<img src="/.vitepress/_resources/press_open.png" alt="press_open.png" width="293" height="248" class="jop-noMdConv">

Folders, are shown in the Press ui, they represent "Pages" for the static app.

<img src="/.vitepress/_resources/press_folders.png" alt="press_folders.png" width="311" height="484" class="jop-noMdConv">

The folders("Pages"), can be expanded, showing the markdown files, they represent "Articles" for the static site.

<img src="/.vitepress/_resources/press_right_click_menu.png" alt="press_right_click_menu.png" width="307" height="340" class="jop-noMdConv">

Both Pages and Articles can be re-ordered by right clicking them, and selecting 'Move Up' or 'Move Down'. In this way the Pages and Articles can be arranged into any order.

* * *

## Customizing Site Elements

Each Page element can be double clicked, and the Page style can be customized.

<img src="/.vitepress/_resources/press_rename_section_a.png" alt="press_rename_section_a.png" width="539" height="419" class="jop-noMdConv"> <details><summary>Properties</summary> <details><summary>Title</summary> Used to set a custom title for the particular Page.</details> <details><summary>Use Text</summary> In the case, that an Icon is set, this ensures both the icon and text are rendered. If the icon is set, and Use Text is false, only the icon is rendered.</details> <details><summary>Icon</summary> The Page can use an Icon, when clicked a custom icon can be assigned.</details> <details><summary>Max Height</summary> This sets the Maximum Height of the rendered page.</details> <details><summary>Columns</summary> Articles on the Page by default are rendered in descending order in a single column, this drop-down can be used to set the number of columns for article placement.</details> <details><summary>Footer Height</summary> This sets space on the bottom of the Page, can be used to vertically place Articles, useful in particular in the case there a few Articles on a Page.</details></details>

* * *

## Customizing Article Titles

<img src="/.vitepress/_resources/press_section_a_renamed.png" alt="press_section_a_renamed.png" width="511" height="276" class="jop-noMdConv">

In this case, we can change the Page to use a custom Title, from being based on the original folder name 'section_a', to 'Getting Started'.

* * *

## Customizing Article Style

Each Article element can be double clicked, and the Article style can be customized.

![press_set_article_data.png](/.vitepress/_resources/press_set_article_data.png)

<details><summary>Properties</summary><details><summary>Color</summary> Used to set a custom color for the Article.</details> <details><summary>Use Color</summary> This is used in the case, the color has been set, but we want to not use it for this element. It's a bit of a janky control.</details> <details><summary>Name</summary> Set the custom name for tha Article, by default it uses the markdown file name.</details> <details><summary>Border Type</summary> Apply subtle style differences in the Article card element style.</details> <details><summary>Author</summary> This field will be populated with authors that are saved in the settings.</details> <details><summary>Background Image</summary> Set a custom image that is applied to the Article card, as well as the Article page background.</details> <details><summary>Use Author Name & Thumbnail</summary> This enables rendering of the author name and thumbnail, which is assigned in settings.</details></details>


* * *

## Customization Example
We earlier updated the page title to "Get Started", we can set the number of columns to 2 in the Page data. 


![press_set_page_columns.png](/.vitepress/_resources/press_set_page_columns.png)

We set the Color property to Red for page_a1.md.

![press_get_started_article_data.png](/.vitepress/_resources/press_get_started_article_data.png)
Then for page_a2.md, we change the Column to 2, and set the Name to "Features".

![press_set_article_column.png](/.vitepress/_resources/press_set_article_column.png)

Rebuild the site, and refresh the debug site, observe the changes.

![press_getting_started.png](/.vitepress/_resources/press_getting_started.png)

* * *

