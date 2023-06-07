module.exports = {
  sidebar: [
    {
    type: 'category',
    label: 'Introduction',
    collapsed: false,
    items: [
      {
        type: 'doc',
        id: 'introduction-kitty-inu',
      },
      {
        type: 'doc',
        id: 'why_decentralization/doc-why-dao',
      }
    ]},
    {
      type: 'category',
      label: 'Governance Documents',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'bylaws/doc-bylaws',
        },
        {
          type: 'doc',
          id: 'kittykommittee/doc-kommittee',
        }
      ],
    },
    {
      type: 'category',
      label: 'DAO Architecture',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'treasury/doc-treasury',
        },
        {
          type: 'doc',
          id: 'governance_token/doc-contract',
        }
      ],
    }
  ],
};