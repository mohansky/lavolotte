var klaroConfig = {
    privacyPolicy: '/datenschutz/',
    apps : [
      {
          name : 'google-analytics',
          default: true,
          title : 'Google Analytics',
          purposes : ['statistics'],
          cookies : [/^ga/i]
      }
    ]
    }