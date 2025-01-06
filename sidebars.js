/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  // About Me sidebar
  aboutSidebar: [
    {
      type: 'category',
      label: 'About Me',
      collapsed: false,
      items: [
        'about/bio',
        'about/life-philosophy',
        'about/resume',
        'about/travels',
      ],
    },
  ],

  // Content sidebar
  contentSidebar: [
    {
      type: 'category',
      label: 'Content',
      collapsed: false,
      items: [
        'content/sketchnotes',
      ],
    },
  ],

  // Talks sidebar
  talksSidebar: [
    {
      type: 'category',
      label: 'Conferences',
      collapsed: false,
      items: [
        'talks/conferences/consensus',
        'talks/conferences/PL-Summit',
      ],
    },
    
    {
      type: 'category',
      label: 'Talks',
      collapsed: false,
      items: [
        'talks/conferences',
        'talks/podcasts',
        'talks/workshops',
      ],
    },
  ],

  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  // tutorialSidebar: [
  //   'intro',
  //   'hello',
  //   {
  //     type: 'category',
  //     label: 'Tutorial',
  //     items: ['tutorial-basics/create-a-document'],
  //   },
  // ],
   
};

export default sidebars;
