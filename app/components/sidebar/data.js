const sections = [
  {
    name: 'Settings',
    url: '/memberships',
    icon: 'fa-briefcase',
    subsections: [
      {
        name: 'Contributors',
        url: '/memberships'
      },
      {
        name: 'Watermarks',
        url: '/watermarks'
      },
      {
        name: 'Distribution',
        url: 'distribution'
      }
    ]
  },
  {
    name: 'Video',
    url: '/published',
    icon: 'fa-play-circle-o',
    subsections: [
      {
        name: 'Pending',
        url: '/touts/pending'
      },
      {
        name: 'Scheduled',
        url: '/touts/scheduled'
      },
      {
        name: 'Published',
        url: '/touts/published'
      },
      {
        name: 'Rejected',
        url: '/touts/rejected'
      },
      {
        name: 'Upload',
        url: '/touts/new'
      }
    ]
  },
  {
    name: 'Smart Article',
    url: '/articles',
    icon: 'fa-flash',
    subsections: [
      {
        name: 'Matched Articles',
        url: '/articles'
      },
      {
        name: 'Unmatched Articles',
        url: '/articles/unmatched'
      }
    ]
  },
  {
    name: 'Analytics',
    url: '/analytics',
    icon: 'fa-chart',
    subsections: []
  },
  {
    name: 'Organizations',
    url: '/organizations',
    icon: 'fa-laptop',
    subsections: []
  },
  {
    name: 'Marketplace',
    url: '/marketplace',
    icon: 'fa-globe',
    subsections: []
  }
]

exports.getAll = function() {
  return sections
}