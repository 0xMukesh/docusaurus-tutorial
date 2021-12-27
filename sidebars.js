/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'First Doc',
      id: 'first-doc'
    },
    {
      type: 'category',
      label: 'Category',
      items: [
        'category/category-doc',
        'category/category-doc-two'
      ],
    },
  ],
};

module.exports = sidebars;
