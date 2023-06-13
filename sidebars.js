module.exports = {
  sidebar: [
    {
    type: 'category',
    label: 'Introduction',
    collapsed: false,
    items: [
      {
        type: 'doc',
        id: 'introduction/introduction_kitty_inu',
      },
      {
        type: 'doc',
        id: 'introduction/why_decentralization',
      }
    ]},
    {
      type: 'category',
      label: 'Governance Documents',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'governance_documents/bylaws',
        },
        {
          type: 'doc',
          id: 'governance_documents/kitty_kommittee',
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
          id: 'dao_architecture/treasury',
        },
        {
          type: 'category',
          label: 'Kitty Inu ERC20',
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'dao_architecture/governance_token/overview',
            },
            {
              type: 'doc',
              id: 'dao_architecture/governance_token/contract_addresses',
            },
            {
              type: 'doc',
              id: 'dao_architecture/governance_token/api_reference',
            },
            {
              type: 'doc',
              id: 'dao_architecture/governance_token/installation_and_setup',
            },
            {
              type: 'doc',
              id: 'dao_architecture/governance_token/usage_instructions',
            },
            {
              type: 'doc',
              id: 'dao_architecture/governance_token/security',
            },
            {
              type: 'doc',
              id: 'dao_architecture/governance_token/integration_guides',
            },
            {
              type: 'doc',
              id: 'dao_architecture/governance_token/faq',
            },
            {
              type: 'doc',
              id: 'dao_architecture/governance_token/glossary',
            }
          ],
        },
        {
          type: 'doc',
          id: 'dao_architecture/snapshot_voting',
        }
      ],
    },
    {
      type: 'category',
      label: "How-To Guides",
      collapsed: false,
      items: [
        {
          type: 'category',
          label: "Contributing",
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'how_tos/contribute_to_documentation',
            },
            {
              type: 'doc',
              id: 'how_tos/contribute_to_development',
            }
          ],
        },
        {
          type: 'doc',
          id: 'how_tos/filing_issues',
        }
      ],
    },
    {
      type: 'category',
      label: 'Brand Kit',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'brand_kit/logos',
        },
        {
          type: 'doc',
          id: 'brand_kit/font_guidelines',
        },
        {
          type: 'doc',
          id: 'brand_kit/color_palette',
        }
      ],
    }
  ],
};