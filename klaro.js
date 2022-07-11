 
var klaroConfig = { 
    testing: false, 
    elementID: 'klaro', 
    styling: {
        theme: ['light', 'top', 'wide']
    },
    noAutoLoad: false,
    embedded: false,

    storageMethod: 'cookie', 
    storageName: 'klaro', 
    htmlTexts: false,  
    cookieExpiresAfterDays: 30, 
    default: false, 
    mustConsent: false, 
    acceptAll: true,  
    hideDeclineAll: false, 
    hideLearnMore: false, 
    translations: { 
        zz: {
            privacyPolicyUrl: '/privacy', 
        },
        de: { 
            privacyPolicyUrl: '/datenschutz',
            consentNotice: {
                description: 'Dieser Text wird in der Einwilligungsbox erscheinen.',
            },
            consentModal: {
                description:
                    'Hier können Sie einsehen und anpassen, welche Information wir über Sie ' + 
                    'sammeln. Einträge die als "Beispiel" gekennzeichnet sind dienen lediglich ' + 
                    'zu Demonstrationszwecken und werden nicht wirklich verwendet.',
            }, 
            purposes: {
                analytics: {
                    title: 'Besucher-Statistiken'
                },
                security: {
                    title: 'Sicherheit'
                },
                livechat: {
                    title: 'Live Chat'
                },
                advertising: {
                    title: 'Anzeigen von Werbung'
                },
                styling: {
                    title: 'Styling'
                },
            },
        },  
    },
    services: [
        {
            name: 'Google Analytics',
            default: false,
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: ['_ga']
        },
        { 
            name: 'matomo', 
            default: true, 
            translations: {
                zz: {
                    title: 'Matomo/Piwik'
                }, 
                de: {
                    description: 'Matomo ist ein einfacher, selbstgehosteter Analytics-Service.'
                },
            },  
            purposes: ['analytics'],

            cookies: [ 
                [/^_pk_.*$/, '/', 'klaro.kiprotect.com'], 
                [/^_pk_.*$/, '/', 'localhost'], 
                'piwik_ignore',
            ], 
            callback: function(consent, service) {
                console.log(
                    'User consent for service ' + service.name + ': consent=' + consent
                );
            }, 
            required: false, 
            optOut: false, 
            onlyOnce: true,
        },
        {
            name: 'youtube', 
            contextualConsentOnly: true,
        },
    ], 
    callback: function(consent, service) {
        console.log(
            'User consent for service ' + service.name + ': consent=' + consent
        );
    },

};

var klaroConfig = {
    privacyPolicy: '/privacy.html',
    apps : [
        {
            name : 'google-analytics',
            default: true,
            title : 'Google Analytics',
            purposes : ['statistics'],
            cookies : [/^ga/i]
        }
    ],
    translations: {
        'en': {
            'consentModal': {
                'title': 'My new fancy title!', // update the main title
                'description': 'A detailed description of what this is.', // main description
                'privacyPolicy': {
                  'text': 'Read our {privacyPolicy} right now!' // using {brackets} we can use placeholders
                }
            },
            'acceptSelected': 'Press me!' // override accept button label
        }
    }
}
/******************************************************************************* */


// By default, Klaro will load the config from  a global "klaroConfig" variable.
// You can change this by specifying the "data-config" attribute on your
// script take, e.g. like this:
// <script src="klaro.js" data-config="myConfigVariableName" />
var klaroConfig = {
    version: 1,
    elementID: 'klaro',
    styling: {
        theme: ['light', 'top', 'wide'],
    },
    noAutoLoad: false,
    htmlTexts: true,
    embedded: false,
    groupByPurpose: true,
    storageMethod: 'cookie',
    cookieName: 'klaro',
    cookieExpiresAfterDays: 365,
    default: false,
    mustConsent: true,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,
    noticeAsModal: false,
    disablePoweredBy: true,
    lang: 'de',
    translations: {
        // translationsed defined under the 'zz' language code act as default
        // translations.
        zz: {
            privacyPolicyUrl: '/#privacy',
        },
        // If you erase the "consentModal" translations, Klaro will use the
        // bundled translations.
        de: {
            privacyPolicyUrl: '/datenschutz',
            consentModal: {
                description:
                    'Hier können Sie einsehen und anpassen, welche Information wir über Sie sammeln. Einträge die als "Beispiel" gekennzeichnet sind dienen lediglich zu Demonstrationszwecken und werden nicht wirklich verwendet.',
            },
            inlineTracker: {
                description: 'Beispiel für ein Inline-Tracking Skript',
            },
            externalTracker: {
                description: 'Beispiel für ein externes Tracking Skript',
            },
            adsense: {
                description: 'Anzeigen von Werbeanzeigen (Beispiel)',
                title: 'Google AdSense Werbezeugs',
            },
            matomo: {
                description: 'Sammeln von Besucherstatistiken',
            },
            camera: {
                description:
                    'Eine Überwachungskamera (nur ein Beispiel zu IMG-Tags)',
            },
            cloudflare: {
                description: 'Schutz gegen DDoS-Angriffe',
            },
            intercom: {
                description:
                    'Chat Widget & Sammeln von Besucherstatistiken (nur ein Beispiel)',
            },
            mouseflow: {
                description: 'Echtzeit-Benutzeranalyse (nur ein Beispiel)',
            },
            purposes: {
                analytics: 'Besucher-Statistiken',
                security: 'Sicherheit',
                livechat: 'Live Chat',
                advertising: 'Anzeigen von Werbung',
                styling: 'Styling',
            },
        },
    },

    // This is a list of third-party services that Klaro will manage for you.
    services: [
        {
            name : 'google-analytics',
            default: true,
            title : 'Google Analytics',
            purposes : ['statistics'],
            cookies : [/^ga/i]
        }, 

        // The services will appear in the modal in the same order as defined here.
        {
            name: 'inlineTracker',
            title: 'Inline Tracker',
            purposes: ['analytics'],
            cookies: ['inline-tracker'],
            optOut: false,
        },
        {
            name: 'externalTracker',
            title: 'External Tracker',
            purposes: ['analytics', 'security'],
            cookies: ['external-tracker'],
        },
        {
            name: 'intercom',
            title: 'Intercom',
            default: true,
            purposes: ['livechat'],
        },
        {
            name: 'mouseflow',
            title: 'Mouseflow',
            purposes: ['analytics'],
        }, 
        {
            name: 'camera',
            title: 'Surveillance Camera',
            purposes: ['security'],
        }, 
        {
            name: 'cloudflare',
            title: 'Cloudflare',
            purposes: ['security'],
            required: true,
        },
    ],
};