/* English */
module.exports = {
  code: 'en',
  htmlLang: 'en',
  name: 'English',
  nameShort: 'EN',
  ogLocale: 'en_GB',

  slugs: {
    home: '',
    wellbeing: 'wellbeing-check-in-calls',
    realestate: 'real-estate',
    confirmations: 'appointment-confirmations',
    afterhours: 'after-hours-answering',
    contact: 'contact',
    thanks: 'thank-you',
    privacy: 'privacy',
    legal: 'legal-notice'
  },

  ui: {
    skip: 'Skip to main content',
    menu: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    changeLanguage: 'Change language',
    home: 'Home',
    backHome: 'Back to home',
    allUseCases: 'See all use cases',
    learnMore: 'How it works',
    exampleCall: 'Example of a real call',
    demoDisclaimer: 'Illustrative example of a call with the voice agent.',
    agent: 'Duodat agent',
    person: 'Person',
    transcript: 'Live transcript',
    callLive: 'Live'
  },

  nav: {
    useCases: 'Use cases',
    how: 'How it works',
    pricing: 'Pricing',
    faq: 'FAQ',
    contact: 'Contact',
    cta: 'Book a demo'
  },

  meta: {
    home: {
      title: 'Duodat — Voice agents that call and answer for you',
      description: 'AI phone agents that make daily check-in calls to dependent people, confirm appointments and answer your customers after hours. In Catalan, Spanish and English.'
    },
    contact: {
      title: 'Book a demo — Duodat',
      description: 'Tell us about your case and we will prepare a demo with a voice agent configured for your business. We reply within one working day.'
    },
    thanks: {
      title: 'Thank you — Duodat',
      description: 'We have received your request.'
    },
    privacy: {
      title: 'Privacy policy — Duodat',
      description: 'How we handle personal data on duodat.com and in the voice agent service.'
    },
    legal: {
      title: 'Legal notice — Duodat',
      description: 'Legal information and terms of use for the duodat.com website.'
    },
    notFound: {
      title: 'Page not found — Duodat',
      description: 'The page you were looking for does not exist.'
    }
  },

  home: {
    heroEyebrow: 'AI voice agents',
    heroTitle: 'Voice agents that call and answer for you',
    heroLead: 'Duodat builds phone agents that make check-in calls to dependent people, confirm appointments and answer your customers when you are not there. They speak Catalan, Spanish and English, and keep you posted on everything that happens.',
    heroCtaPrimary: 'Book a free demo',
    heroCtaSecondary: 'See use cases',
    heroBadges: [
      { icon: 'globe', text: 'Catalan, Spanish and English' },
      { icon: 'shield', text: 'Data hosted in the EU' },
      { icon: 'plug', text: 'No new phone system' }
    ],
    heroNote: 'Free demo, no commitment. We reply within one working day.',

    demo: {
      who: 'Margaret, 83',
      meta: 'Check-in call · today, 09:02 · 1 min 48 s',
      turns: [
        { s: 'agent', t: 'Good morning, Margaret! I am Claire\'s assistant. How was your night?' },
        { s: 'human', t: 'Not bad at all, dear. I slept well. Thanks for calling.' },
        { s: 'agent', t: 'That is good to hear. Did you take your morning tablet?' },
        { s: 'human', t: 'Yes, with breakfast.' },
        { s: 'agent', t: 'Perfect. I will let Claire know everything is fine. Have a lovely day!' }
      ],
      foot: 'Summary sent to Claire by email and SMS'
    },

    trust: [
      { icon: 'clock', text: 'Available 24/7' },
      { icon: 'bell', text: 'Email and SMS alerts' },
      { icon: 'user', text: 'Hands over to a human when needed' },
      { icon: 'lock', text: 'GDPR compliant' }
    ],

    problemEyebrow: 'The problem',
    problemTitle: 'The phone is the bottleneck in your day',
    problemLead: 'Every call that goes unanswered — or never gets made — has a cost: a missed appointment, a worried family, a customer who goes to your competitor.',
    problemItems: [
      {
        icon: 'phone-missed',
        title: 'Calls are lost after hours',
        text: 'Someone who calls at 9pm and gets no answer does not call back: they call the next business on the list.'
      },
      {
        icon: 'repeat',
        title: 'Repetitive tasks burn out your team',
        text: 'Confirming appointments, reminding people about visits and following up takes hours of qualified staff time every week.'
      },
      {
        icon: 'heart',
        title: 'Daily care cannot be delegated',
        text: 'Calling a dependent relative every single day is hard to keep up, and not calling leaves you anxious.'
      }
    ],

    howEyebrow: 'How it works',
    howTitle: 'Live in days, not months',
    howLead: 'You tell us what you need, we configure the agent and we test it together with you before it goes live.',
    howSteps: [
      {
        title: 'You tell us about your case',
        text: 'A 20-minute conversation to understand who should be called or who calls you, what needs to be asked, and what should happen next.'
      },
      {
        title: 'We configure and test the agent',
        text: 'We prepare the script, the voice, the language and the escalation rules. We test it together with real calls until it sounds the way you want.'
      },
      {
        title: 'The agent goes live',
        text: 'It starts calling or answering. You get a summary of every conversation and the alerts you have configured.'
      }
    ],

    featuresEyebrow: 'What makes Duodat different',
    featuresTitle: 'Built for small and mid-sized local businesses',
    featuresItems: [
      {
        icon: 'globe',
        title: 'Proper Catalan',
        text: 'The agent understands and speaks natural Catalan, and switches to Spanish or English if the caller does.'
      },
      {
        icon: 'plug',
        title: 'Works with your existing phone',
        text: 'You keep your current number. All it takes is call forwarding — no hardware to buy and no need to change operator.'
      },
      {
        icon: 'calendar',
        title: 'Connects to your calendar',
        text: 'Google Calendar, Outlook or your booking software. If it cannot be connected, you get the requests by email.'
      },
      {
        icon: 'user',
        title: 'Never leaves anyone stranded',
        text: 'If the conversation gets complicated or someone asks for a human, the agent transfers the call or raises an urgent alert.'
      },
      {
        icon: 'file-text',
        title: 'A summary of every call',
        text: 'Transcript, summary and outcome of each conversation, in your inbox or your dashboard. No surprises.'
      },
      {
        icon: 'shield',
        title: 'Privacy by design',
        text: 'Data hosted in the European Union, a data processing agreement in place, and only the data that is actually needed.'
      }
    ],

    useCasesEyebrow: 'Use cases',
    useCasesTitle: 'Four ways to start',
    useCasesLead: 'Each use case has its own script, its own rules and its own alerts. Pick the one closest to yours and see how it works.',

    trustEyebrow: 'Trust and privacy',
    trustTitle: 'An agent that speaks on your behalf has to be transparent',
    trustLead: 'We do not want to hide that it is an automated assistant: we want people to find it useful and feel reassured.',
    trustItems: [
      {
        title: 'The agent always identifies itself',
        text: 'At the start of every call it says who it is and on whose behalf it is calling. No deception and no voices impersonating anyone.'
      },
      {
        title: 'Data in the European Union',
        text: 'Call data is processed and stored on EU servers, encrypted in transit and at rest.'
      },
      {
        title: 'You decide what is kept',
        text: 'You can turn audio recording on or off and set how long transcripts and summaries are retained.'
      },
      {
        title: 'A route to a human, always',
        text: 'Anyone can ask to speak to someone on your team, and the agent makes that happen straight away.'
      },
      {
        title: 'Data processing agreement',
        text: 'We sign the agreement the GDPR requires in order to process personal data on your behalf, including the list of sub-processors.'
      },
      {
        title: 'No clinical decisions',
        text: 'The agent gathers information and raises alerts. It does not diagnose, give medical advice or replace emergency services.'
      }
    ],

    pricingEyebrow: 'Pricing',
    pricingTitle: 'Clear pricing, no surprises',
    pricingLead: 'You pay for what you use, with no setup fee and no lock-in. These figures are the starting point: the final quote depends on call volume and on the integrations you want connected.',
    pricingPlans: [
      {
        name: 'Wellbeing',
        audience: 'Families and carers',
        amount: 19,
        unit: '/ month per person',
        desc: 'One daily check-in call with alerts to the family.',
        features: [
          'One scheduled call every day',
          'Email and SMS alerts to two contacts',
          'Immediate alert if there is no answer',
          'Script tailored to the person'
        ],
        cta: 'I want to try it',
        useCase: 'wellbeing'
      },
      {
        name: 'Business',
        audience: 'Clinics, shops and estate agencies',
        amount: 99,
        unit: '/ month',
        desc: 'An agent that answers or calls for your business, with your calendar connected.',
        features: [
          'Up to 200 calls per month',
          'After-hours answering and confirmations',
          'Appointments in your calendar',
          'Summary of every call by email',
          'Escalation to someone on your team'
        ],
        featured: true,
        flag: 'Recommended',
        cta: 'Request a quote',
        useCase: 'confirmations'
      },
      {
        name: 'High volume',
        audience: 'Integrations and multi-agent',
        amountText: 'Custom',
        unit: '',
        desc: 'Multiple agents, more languages and a connection to your CRM or management software.',
        features: [
          'No fixed cap on call volume',
          'Integration with your CRM or ERP',
          'Multiple agents and numbers',
          'Reporting and a service level agreement'
        ],
        cta: 'Let us talk',
        useCase: 'other'
      }
    ],
    pricingNote: 'Amounts in euros, excluding VAT. No setup fee and no lock-in.',

    faqEyebrow: 'Frequently asked questions',
    faqTitle: 'What everyone asks us',
    faq: [
      {
        q: 'Do people realise they are talking to a machine?',
        a: 'Usually yes, and we do not hide it: the agent introduces itself as an automated assistant at the start of the call. The goal is not to fool anyone, but to make the conversation clear, polite and useful. That is why the agent always says who it is calling on behalf of: knowing that completely changes how the call lands.'
      },
      {
        q: 'What happens if the agent does not understand something?',
        a: 'First it asks again, phrased differently. If it still does not understand, or if the person asks for a human, it transfers the call to a number you give us or raises an alert to call back. The agent does not make up answers.'
      },
      {
        q: 'Which languages does it speak?',
        a: 'Catalan, Spanish and English. It detects which language it is being spoken to in and replies in that language. If you need another one, tell us and we will look into it.'
      },
      {
        q: 'Do I have to change my phone or my operator?',
        a: 'No. You can keep your number and forward calls to the agent when you close, or give it a new number for outbound calls. There is no equipment to buy.'
      },
      {
        q: 'How quickly can it be up and running?',
        a: 'For standard cases, within a few days of our first conversation. Integrations with management software can take longer, and we will tell you that before we start.'
      },
      {
        q: 'Who can listen to the calls?',
        a: 'Only you and the people you authorise. The Duodat team only accesses them to resolve incidents, under a confidentiality agreement. You can switch off audio recording and keep only the summary.'
      },
      {
        q: 'Is it suitable for emergencies?',
        a: 'No. Duodat is not an emergency service or a medical alert service. If the agent picks up on something worrying, it immediately notifies the contacts you have configured so they can act — but in an emergency you must call the emergency number (112 in Spain and across the EU).'
      },
      {
        q: 'How much does it cost?',
        a: 'From €19 per month for families and from €99 per month for businesses. The final quote depends on call volume and on the integrations you need, and we give it to you in writing before anything starts.'
      }
    ],

    finalEyebrow: 'Book a demo',
    finalTitle: 'Tell us about your case and we will prepare a demo',
    finalLead: 'We want to understand what your calls look like before selling you anything. Fill in the form and we will get back to you within one working day with a concrete proposal or a live demo.',
    finalPoints: [
      'A demo with an agent configured for your case',
      'No commitment and no credit card',
      'A fixed written quote before anything starts',
      'If it is not a fit, we will say so plainly'
    ]
  },

  useCaseSection: {
    problem: 'Where it hurts',
    solution: 'How Duodat solves it',
    includes: 'What is included',
    notFor: 'What it does not do',
    faq: 'Questions about this use case',
    other: 'Other use cases'
  },

  useCases: {
    wellbeing: {
      id: 'wellbeing',
      icon: 'heart',
      tag: 'Families, care homes and social services',
      navTitle: 'Wellbeing check-in calls',
      navDesc: 'Daily calls to older or dependent people, with alerts to their relatives.',
      cardTitle: 'Wellbeing check-in calls',
      cardText: 'A friendly call every day to an older or dependent person, with confirmation to relatives by email or SMS.',
      cardBullets: [
        'A daily call at whatever time you choose',
        'Automatic alert if there is no answer',
        'Email and SMS summary to the family'
      ],
      metaTitle: 'Daily wellbeing check-in calls for older people — Duodat',
      metaDescription: 'A voice agent calls the person you care for every day, checks that they are well and notifies the family by email or SMS. In Catalan, Spanish and English.',
      h1: 'One call a day, so you know everything is fine',
      lead: 'Duodat calls the person you care for at the agreed time, talks with them for a few minutes and sends you the summary. If they do not answer or something does not add up, you hear about it straight away.',
      cta: 'I want to try this for my relative',

      demo: {
        who: 'John, 79',
        meta: 'Check-in call · today, 10:00 · 2 min 06 s',
        turns: [
          { s: 'agent', t: 'Good morning, John. I am your daughter Anna\'s assistant. I am calling to see how you are today.' },
          { s: 'human', t: 'So-so, really. My back is aching a bit.' },
          { s: 'agent', t: 'I am sorry to hear that. Is the pain new, or have you had it for a few days?' },
          { s: 'human', t: 'Since last night.' },
          { s: 'agent', t: 'Understood, I will note that down and let Anna know so you can talk about it. Have you had breakfast and taken your medication?' },
          { s: 'human', t: 'Yes, all done.' },
          { s: 'agent', t: 'Perfect, John. Have a good day — I will call again tomorrow.' }
        ],
        foot: 'Alert sent to Anna: "Back pain since last night" · Medication: yes'
      },

      problemIntro: 'Caring from a distance means living with one question always at the back of your mind: are they all right today?',
      problemItems: [
        'Calling at the same time every day is hard to sustain when you work, travel or care for other people too.',
        'When nobody picks up, your mind jumps to the worst and you cannot tell whether to drop everything or wait.',
        'Traditional medical alert services react once something has already happened — they do not call for a chat.',
        'Siblings and relatives lose track of each other: who called last, what was said, how they seemed.'
      ],

      solutionIntro: 'A kind, punctual, consistent agent that always tells you how it went.',
      solutionItems: [
        {
          icon: 'clock',
          title: 'Always at the agreed time',
          text: 'One or more calls a day, on the days you choose. If there is no answer, it tries again a few minutes later, as many times as you have agreed.'
        },
        {
          icon: 'message',
          title: 'A conversation, not a questionnaire',
          text: 'The agent asks how the night went, whether they have eaten, whether they have taken their medication and how their mood is — in a natural, unhurried tone.'
        },
        {
          icon: 'bell',
          title: 'Clear alerts to the right people',
          text: 'A daily summary by email or SMS to the contacts you name, and an immediate alert if there is no answer or if something worrying comes up.'
        },
        {
          icon: 'users',
          title: 'The whole family stays informed',
          text: 'The same alerts can reach several siblings or carers, so nobody has to act as the go-between.'
        },
        {
          icon: 'sliders',
          title: 'Tailored to the person',
          text: 'You tell us their name, how they like to be addressed, what medication they take and what matters to ask about. The agent takes it all into account.'
        }
      ],

      includesItems: [
        'Script set-up with you, by phone or video call',
        'A daily call scheduled at the time you decide',
        'Automatic retries if there is no answer',
        'A summary of every call by email',
        'SMS alerts to emergency contacts',
        'Script and schedule changes at no cost'
      ],

      notForItems: [
        'It is not an emergency service: in an emergency you must call 112.',
        'It is not a medical alert service with a panic button or fall detection.',
        'It does not give medical advice or assess symptoms: it records what the person says and raises an alert.'
      ],

      faq: [
        {
          q: 'What if my relative does not want to talk to a machine?',
          a: 'That is the first thing to test, which is why we run a demo with you before starting. The agent introduces itself by saying who it is calling on behalf of, and that helps a lot. Some people never warm to it, and if that is the case we will tell you so.'
        },
        {
          q: 'What happens if they do not answer the call?',
          a: 'The agent tries again a few minutes later, as many times as you have agreed. If there is still no answer, you get an immediate SMS and email alert with the times of each attempt, so you can act.'
        },
        {
          q: 'Can I change the questions?',
          a: 'Yes. The script is yours: you can add questions about specific medication, about whether the carer turned up, or about anything else you want tracked. Script changes are free.'
        },
        {
          q: 'Are calls recorded?',
          a: 'Only if you authorise it. By default we keep the transcript and the summary, not the audio. Both you and the person receiving the call can ask for nothing beyond the alert to be stored.'
        }
      ]
    },

    realestate: {
      id: 'realestate',
      icon: 'home',
      tag: 'Estate agencies',
      navTitle: 'Estate agencies',
      navDesc: 'Answer enquiries, match them against your listings and fill your viewing calendar.',
      cardTitle: 'Agent for estate agencies',
      cardText: 'Answers callers asking about a property, matches it against your listings and books the viewing — without anyone picking up the phone.',
      cardBullets: [
        'Checks your listings in real time',
        'Qualifies the enquiry before the viewing',
        'Books viewings or logs the request'
      ],
      metaTitle: 'Voice agent for estate agencies: answer calls and book viewings — Duodat',
      metaDescription: 'A phone agent that answers enquiries, matches them against your property listings, qualifies the buyer and books the viewing in your calendar. Catalan, Spanish and English.',
      h1: 'You will never lose a buyer\'s call again',
      lead: 'The agent answers people calling about a board or an online listing, talks them through the properties that match what they want, qualifies them and books the viewing in your calendar. You get the lead already filtered.',
      cta: 'I want an agent for my agency',

      demo: {
        who: 'Vallès Estates',
        meta: 'Inbound call · Saturday, 11:34 · 2 min 51 s',
        turns: [
          { s: 'agent', t: 'Vallès Estates, good morning. How can I help?' },
          { s: 'human', t: 'I am calling about the flat on the board on Girona Street, the one at 230,000.' },
          { s: 'agent', t: 'Yes, the 85-square-metre one with three bedrooms and a balcony. It is still available. Are you looking to live in it or as an investment?' },
          { s: 'human', t: 'To live in. I would need a mortgage.' },
          { s: 'agent', t: 'Understood. We have viewings on Tuesday at 5pm and Thursday at 10am. Which suits you better?' },
          { s: 'human', t: 'Tuesday at five.' },
          { s: 'agent', t: 'Done. Could I take your name and an email so I can send the confirmation and the property details?' }
        ],
        foot: 'Viewing added to the calendar · Details sent · Lead qualified: mortgage needed'
      },

      problemIntro: 'Buyers call exactly when your team cannot pick up.',
      problemItems: [
        'Enquiries come in at weekends and late in the evening, precisely when the office is empty.',
        'Anyone who gets no answer calls the next agency: the lead is lost in minutes, not days.',
        'Your team repeats the same square metres, prices and availability twenty times a day.',
        'Viewings get booked with people who never said what they want or whether they have financing.'
      ],

      solutionIntro: 'An agent that knows your listings and knows what to ask.',
      solutionItems: [
        {
          icon: 'search',
          title: 'It knows your listings',
          text: 'We load your properties with reference, price, size, bedrooms and area. The agent answers with real, up-to-date data and never promises something that does not exist.'
        },
        {
          icon: 'filter',
          title: 'Qualifies before the viewing',
          text: 'Budget, area, number of bedrooms, whether they need a mortgage and when they want to move. You arrive at the viewing knowing who you are talking to.'
        },
        {
          icon: 'calendar',
          title: 'Books the viewing in your calendar',
          text: 'It offers the real free slots in your calendar and creates the appointment. If you would rather approve them yourself, it leaves the request pending confirmation.'
        },
        {
          icon: 'clock',
          title: 'Answers when you cannot',
          text: 'After hours, at weekends or when every line is busy. It can also pick up overflow calls only.'
        },
        {
          icon: 'mail',
          title: 'Sends the property details',
          text: 'After the call, the caller receives the property details by email along with the viewing confirmation and the address.'
        }
      ],

      includesItems: [
        'Initial load of your property listings',
        'A qualification script tailored to your agency',
        'Inbound call answering in three languages',
        'Viewings created in Google Calendar or Outlook',
        'A summary of each call and the lead details by email',
        'Transfer to an agent when the call calls for it'
      ],

      notForItems: [
        'It does not negotiate prices or terms — that stays with your sales team.',
        'It does not sign anything and does not take payments or deposits over the phone.',
        'It does not replace the in-person viewing or your team\'s advice.'
      ],

      faq: [
        {
          q: 'How do you keep the listings up to date?',
          a: 'We can read them from a spreadsheet, from a file your CRM exports, or from a direct connection if your software allows it. At minimum a daily refresh; with a live connection, in real time.'
        },
        {
          q: 'Can it handle several calls at once?',
          a: 'Yes. Unlike a person, the agent handles multiple calls in parallel, so nobody gets an engaged tone during a campaign or a busy weekend.'
        },
        {
          q: 'What if the caller wants to speak to a human?',
          a: 'The agent transfers the call to the number you give us during office hours, or takes their details and the best time to call back if nobody is available.'
        },
        {
          q: 'Does it work for lettings too?',
          a: 'Yes. The qualification criteria change (payslips, guarantors, move-in date) and the script adapts. If you work both markets, the agent asks what the caller is after first.'
        }
      ]
    },

    confirmations: {
      id: 'confirmations',
      icon: 'check-circle',
      tag: 'Clinics, dentists, opticians and medical shops',
      navTitle: 'Appointment confirmations',
      navDesc: 'Confirmation and reminder calls that cut no-shows.',
      cardTitle: 'Appointment confirmations',
      cardText: 'The agent calls patients before their visit to confirm, reschedule or cancel — and updates your calendar.',
      cardBullets: [
        'Confirms, moves or cancels by phone',
        'Frees up slots with enough notice',
        'Syncs with your calendar'
      ],
      metaTitle: 'Appointment confirmation calls for clinics — Duodat',
      metaDescription: 'A voice agent calls your patients to confirm, reschedule or cancel their appointment, and updates the calendar. Fewer no-shows and less work at the front desk.',
      h1: 'Fewer no-shows, without making a single call',
      lead: 'The agent calls patients the day before, confirms the appointment, moves it if the time no longer suits them, or cancels it. You get an up-to-date calendar, and your front desk stays free for the people standing in front of them.',
      cta: 'I want to cut no-shows',

      demo: {
        who: 'St Peter Dental Clinic',
        meta: 'Outbound call · yesterday, 18:12 · 1 min 12 s',
        turns: [
          { s: 'agent', t: 'Good afternoon, is this Mrs Rees? I am calling from St Peter Dental Clinic about your appointment tomorrow at 4:30pm with Dr Soler.' },
          { s: 'human', t: 'Oh, I cannot make tomorrow. A meeting came up.' },
          { s: 'agent', t: 'No problem at all, we can move it. I have Thursday at 11am or Friday at 5pm.' },
          { s: 'human', t: 'Friday at five works.' },
          { s: 'agent', t: 'Perfect — Friday at 5pm with Dr Soler. I will text you the confirmation. Have a good afternoon!' }
        ],
        foot: 'Appointment moved · Tomorrow\'s slot freed · SMS sent'
      },

      problemIntro: 'Every empty hour in the calendar is a professional you pay but cannot bill for.',
      problemItems: [
        'Patients do not turn up, and the gap is discovered far too late to fill.',
        'Reminder texts and emails get ignored: nobody replies and nobody reschedules.',
        'The front desk spends the morning on the phone instead of serving the queue in front of them.',
        'Waiting lists never move, because slots only free up on the day.'
      ],

      solutionIntro: 'A real call, with someone on the other end who can say the time does not work.',
      solutionItems: [
        {
          icon: 'phone',
          title: 'A call, not just a text',
          text: 'A phone call gets an immediate answer and lets the change be settled there and then, instead of waiting for someone to reply to a message.'
        },
        {
          icon: 'calendar',
          title: 'Reschedules during the same call',
          text: 'If the patient cannot come, the agent offers the real free slots in your calendar and moves the appointment. The gap is freed up days in advance.'
        },
        {
          icon: 'refresh',
          title: 'Fills the slots that free up',
          text: 'Working from your waiting list, the agent can call people to offer an appointment that has just become available.'
        },
        {
          icon: 'list',
          title: 'Preparation reminders',
          text: 'If the visit requires fasting, bringing reports or arriving early, the agent reminds them and confirms they understood.'
        },
        {
          icon: 'bar-chart',
          title: 'You know where every appointment stands',
          text: 'Confirmed, moved, cancelled or no answer — with the time of the call and a summary of the conversation.'
        }
      ],

      includesItems: [
        'Connection to your calendar, or a daily appointment upload',
        'Confirmation calls as far ahead as you decide',
        'Rescheduling and cancellation during the call',
        'SMS or email confirmation to the patient',
        'Retries at different times of day if there is no answer',
        'A daily report on the status of every appointment'
      ],

      notForItems: [
        'It does not give test results or clinical information over the phone.',
        'It does not triage or assess how urgent a symptom is.',
        'It does not upsell treatments or run promotions unless you specifically ask.'
      ],

      faq: [
        {
          q: 'Which calendar software do you connect to?',
          a: 'Directly with Google Calendar and Microsoft Outlook. With clinic management software we work through their API where one exists, or a daily file exchange where it does not. We review this in our first conversation.'
        },
        {
          q: 'Does this comply with health data protection rules?',
          a: 'The agent only handles the minimum data needed to manage the appointment: name, phone number, date, time and practitioner. It does not process diagnoses or medical records. We sign the data processing agreement and the data is processed in the EU.'
        },
        {
          q: 'How many times does it call if nobody answers?',
          a: 'As many as you decide, at different times of day to improve the odds. If there is still no answer, the appointment is flagged as unconfirmed in the report.'
        },
        {
          q: 'Can it call on behalf of several practitioners?',
          a: 'Yes. The agent states the practitioner and the service for each appointment, and can manage several calendars within the same practice.'
        }
      ]
    },

    afterhours: {
      id: 'afterhours',
      icon: 'moon',
      tag: 'Clinics, medical shops and service businesses',
      navTitle: 'After-hours answering',
      navDesc: 'An agent that answers and books appointments once your team has gone home.',
      cardTitle: 'After-hours answering',
      cardText: 'When you close, the agent keeps answering: it books appointments, answers the usual questions and flags anything urgent.',
      cardBullets: [
        'Books appointments at night and at weekends',
        'Answers opening hours, address and prices',
        'Immediate alerts for anything urgent'
      ],
      metaTitle: 'After-hours phone answering with automatic appointment booking — Duodat',
      metaDescription: 'A voice agent answers your practice phone while you are closed: it books appointments, answers the usual questions and alerts you to anything that cannot wait.',
      h1: 'Your phone keeps answering after you close',
      lead: 'The calls that come in at night, over lunch or at the weekend are no longer lost: the agent answers them, books into your calendar, answers the usual questions and leaves you a summary for when you are back.',
      cta: 'I want after-hours answering',

      demo: {
        who: 'Figueres Medical Supplies',
        meta: 'Inbound call · Sunday, 20:47 · 1 min 39 s',
        turns: [
          { s: 'agent', t: 'Figueres Medical Supplies, good evening. We are closed right now, but I can help you. What do you need?' },
          { s: 'human', t: 'I wanted to know whether you have crutches and how much they cost.' },
          { s: 'agent', t: 'Yes, we have them to rent and to buy. Renting is 15 euros a week. If you like, I can book you a visit for tomorrow morning.' },
          { s: 'human', t: 'Yes, better. What time do you open?' },
          { s: 'agent', t: 'At 9:30. There is a slot free at 10:00 or at 11:15.' },
          { s: 'human', t: 'Ten o\'clock.' },
          { s: 'agent', t: 'Booked for 10:00. Could I take your name and a contact number?' }
        ],
        foot: 'Appointment created for tomorrow 10:00 · Summary sent to the practice'
      },

      problemIntro: 'Half the calls arrive when there is nobody there to take them.',
      problemItems: [
        'Voicemail does not convert: people hang up and look elsewhere.',
        'The everyday questions — opening hours, address, whether you stock something — go unanswered.',
        'Genuine urgencies get mixed in with enquiries that could have waited, and you only find out the next day.',
        'Monday morning the phone never stops, because the whole weekend has piled up.'
      ],

      solutionIntro: 'An on-call agent that knows what it needs to know and passes on what it needs to pass on.',
      solutionItems: [
        {
          icon: 'calendar',
          title: 'Books appointments at any hour',
          text: 'It checks the real free slots in your calendar and creates the appointment — or leaves the request for you to approve in the morning, if you prefer.'
        },
        {
          icon: 'help-circle',
          title: 'Answers the usual questions',
          text: 'Opening hours, address, how to get there, parking, which insurers you accept, reference prices and available services. We prepare all of it with you.'
        },
        {
          icon: 'alert',
          title: 'Tells urgent from routine',
          text: 'Using rules we set together, the agent spots calls that cannot wait and alerts you by SMS, or transfers the call to your on-call number.'
        },
        {
          icon: 'inbox',
          title: 'Leaves the work done',
          text: 'Every morning you find the list of calls with summaries, the appointments created, and the items that need your attention.'
        },
        {
          icon: 'globe',
          title: 'Answers in three languages',
          text: 'Catalan, Spanish and English. Useful in tourist areas and in practices with international patients.'
        }
      ],

      includesItems: [
        'Call forwarding outside the hours you set',
        'A knowledge base for your practice, prepared with you',
        'Appointments created in your calendar, or requests to approve',
        'Urgency rules and an on-call number',
        'A daily call summary by email',
        'A welcome message in your own brand voice'
      ],

      notForItems: [
        'It does not handle medical emergencies: in those cases it tells the caller to ring 112.',
        'It does not give clinical advice and does not diagnose anything.',
        'It does not charge anyone, handle payments or ask for bank details.'
      ],

      faq: [
        {
          q: 'How are calls forwarded?',
          a: 'With a conditional forward on your operator or your phone system: outside the hours you set, calls go to the agent. You keep your number, and we help you set it up.'
        },
        {
          q: 'Can it answer during office hours too?',
          a: 'Yes. Some practices use it only after hours; others have it answer whenever every line is busy, so nobody is left waiting.'
        },
        {
          q: 'How do you decide what counts as urgent?',
          a: 'We define it together from your criteria, then tune it over the first few weeks against real calls. The agent can always transfer the call if the person insists on speaking to someone.'
        },
        {
          q: 'What does the caller hear?',
          a: 'The voice and the name you choose, with an identification message saying it is the practice\'s assistant. You pick the tone: warm or more formal.'
        }
      ]
    }
  },

  form: {
    title: 'Book a demo',
    intro: 'Fill in the form and we will get back to you within one working day. No commitment.',
    name: 'Full name',
    namePlaceholder: 'What is your name?',
    email: 'Email address',
    emailPlaceholder: 'name@company.com',
    phone: 'Phone',
    phonePlaceholder: '+34 600 000 000',
    phoneHint: 'Optional, but it helps us call you sooner.',
    organization: 'Company or organisation',
    organizationPlaceholder: 'Business name (or "private individual")',
    useCase: 'What are you interested in',
    useCaseOptions: [
      { value: '', label: 'Choose an option' },
      { value: 'wellbeing', label: 'Wellbeing check-in calls to dependent people' },
      { value: 'realestate', label: 'Agent for an estate agency' },
      { value: 'confirmations', label: 'Appointment confirmations' },
      { value: 'afterhours', label: 'After-hours answering' },
      { value: 'other', label: 'Something else' }
    ],
    volume: 'Approximate call volume',
    volumeOptions: [
      { value: '', label: 'Choose an option' },
      { value: '1-30', label: 'Fewer than 30 a month' },
      { value: '30-200', label: 'Between 30 and 200 a month' },
      { value: '200-1000', label: 'Between 200 and 1,000 a month' },
      { value: '1000+', label: 'More than 1,000 a month' },
      { value: 'unknown', label: 'I do not know yet' }
    ],
    message: 'Tell us about your case',
    messagePlaceholder: 'Who should be called or who calls you, in which language, during which hours, and what should happen after the call.',
    consent: 'I agree that Duodat may process my data in order to respond to this request, as set out in the <a href="{privacy}">privacy policy</a>.',
    submit: 'Send request',
    note: 'We reply within one working day. We never share your data with anyone.',
    required: 'required',
    okTitle: 'Request sent.',
    okText: 'Thank you! We will get back to you within one working day.',
    errRequired: 'This field is required.',
    errEmail: 'Enter a valid email address.',
    errSend: 'We could not send the form. Please try again, or email us at <a href="mailto:{email}">{email}</a>.',
    errNoKey: 'The form is not connected yet. Email us directly at <a href="mailto:{email}">{email}</a> and we will take it from there.',
    subject: 'New enquiry from duodat.com'
  },

  contact: {
    eyebrow: 'Contact',
    h1: 'Let us talk about your case',
    lead: 'We want to understand what your calls look like before proposing anything. Write to us and we will get back to you within one working day.',
    sideTitle: 'What happens when you write',
    sideSteps: [
      { title: 'We reply within one working day', text: 'By email or phone, whichever you prefer.' },
      { title: 'A 20-minute conversation', text: 'We understand your case and tell you honestly whether Duodat fits.' },
      { title: 'A demo with your script', text: 'If it makes sense, we configure an agent for your case and test it together.' }
    ],
    directTitle: 'Prefer to write directly?',
    directText: 'Email us at {email} and we will take it from there. Even better if you tell us when it suits you to be called.'
  },

  thanks: {
    eyebrow: 'Request received',
    h1: 'Thank you — we have it!',
    lead: 'We have received your request and will get back to you within one working day.',
    nextTitle: 'In the meantime',
    nextText: 'If you want a head start, think about three things: who should be called (or who calls you), during which hours, and what should happen right after the call. Those are the three questions we will start from.',
    backBtn: 'Back to home',
    casesBtn: 'See the use cases',
    mailNote: 'No confirmation came through? Email us at {email}.'
  },

  notFound: {
    h1: 'This page does not exist',
    lead: 'The link may be out of date, or there may be a typo in the address. The home page has everything we offer.',
    backBtn: 'Back to home'
  },

  footer: {
    about: 'Duodat builds AI voice agents for businesses and families: check-in calls, appointment confirmations and after-hours phone answering, in Catalan, Spanish and English.',
    colUseCases: 'Use cases',
    colCompany: 'Duodat',
    colLegal: 'Legal',
    rights: 'All rights reserved.',
    madeIn: 'Made in Barcelona'
  },

  legalPages: {
    privacy: {
      h1: 'Privacy policy',
      updated: 'Last updated: 25 October 2025',
      blocks: [
        { h2: 'Who is the data controller' },
        { p: 'The controller of the data collected on this website is {legalName} ({domain}), contactable at {city}, {country}. You can reach us about any privacy matter at {email}.' },

        { h2: 'What data we collect' },
        { p: 'On this website we only collect the data you voluntarily provide through the contact form:' },
        { ul: [
          'Your name.',
          'Your email address.',
          'Your phone number, if you choose to give it.',
          'Your company or organisation, if you choose to give it.',
          'The use case you are interested in, your approximate call volume and the message you write.',
          'The address of the page you submitted the form from, and your browsing language.'
        ] },
        { p: 'We do not use tracking cookies or analytics tools that profile you. There is no advertising and there are no third-party trackers on this website.' },

        { h2: 'What we use it for' },
        { table: {
          head: ['Purpose', 'Legal basis', 'Retention'],
          rows: [
            ['Responding to your request for information or a demo', 'Your consent and our legitimate interest in answering a business enquiry', 'Up to 24 months from the last contact'],
            ['Preparing a quote or a trial of the service', 'Performance of a pre-contractual relationship', 'For the duration of the negotiation and its statutory limitation period'],
            ['Meeting legal obligations (accounting, tax)', 'Legal obligation', 'The periods required by law']
          ]
        } },
        { p: 'We will not use your data to send you marketing about other products without asking your permission first.' },

        { h2: 'Who can access your data' },
        { p: 'To operate, we rely on providers who act as data processors and who only process data on our instructions:' },
        { ul: [
          'The provider that processes the web form submission and delivers it to us by email.',
          'Our email provider.',
          'The hosting provider for this website.'
        ] },
        { p: 'We do not sell or share your data with third parties for commercial purposes. Where a provider involves an international data transfer, we make sure the safeguards the GDPR requires are in place, such as the European Commission\'s standard contractual clauses.' },

        { h2: 'Data processed in the voice agent service' },
        { p: 'When a customer takes out the Duodat service, the data of the people who receive or make the calls is processed on behalf of that customer, who is the controller. In those cases Duodat acts as a processor and signs the agreement required by Article 28 of the GDPR. This processing covers:' },
        { ul: [
          'Identification and contact data needed to place the call.',
          'The transcript and summary of the conversation, and audio recording only if the customer enables it.',
          'Call metadata: date, time, duration and outcome.'
        ] },
        { p: 'Voice agents identify themselves as automated assistants at the start of every call. The customer decides the retention periods and whether audio is stored. This data is processed on servers located in the European Union.' },

        { h2: 'Your rights' },
        { p: 'You can exercise your rights of access, rectification, erasure, objection, restriction of processing and portability at any time, and withdraw any consent you have given us. Just write to {email} telling us which right you want to exercise.' },
        { p: 'If you believe we have not handled your request properly, you can lodge a complaint with the Spanish Data Protection Agency (www.aepd.es) or with the Catalan Data Protection Authority (apdcat.gencat.cat).' },

        { h2: 'Security' },
        { p: 'We apply reasonable technical and organisational measures to protect data: encrypted communications, role-based access control, minimising the data we collect and reviewing our providers. No system is infallible, but we commit to notifying you without undue delay if a security breach affects you.' },

        { h2: 'Changes to this policy' },
        { p: 'If we change this policy, we will update the date at the top. We recommend checking back from time to time.' }
      ]
    },
    legal: {
      h1: 'Legal notice',
      updated: 'Last updated: 25 October 2025',
      blocks: [
        { h2: 'Website owner' },
        { p: 'This website, available at the domain {domain}, is owned by {legalName}, based in {city}, {country}, with the contact email address {email}.' },

        { h2: 'Purpose' },
        { p: 'This website is informational: it presents Duodat\'s voice agent services and allows you to request information or a demo through a form. Submitting the form does not create a contract or any obligation to provide the service.' },

        { h2: 'Scope of the information' },
        { p: 'The information on this website is commercial and descriptive in nature. The features, prices and timescales shown are indicative and may vary with the scope of each project; the terms binding on the parties are solely those set out in the contract or quote signed with each customer.' },

        { h2: 'Prices shown' },
        { p: 'The prices shown on this website are indicative, are expressed in euros and exclude VAT and any other applicable taxes. The final price of each service depends on call volume, the integrations required and the agreed scope, and is always confirmed in writing in a quote.' },

        { h2: 'Intellectual and industrial property' },
        { p: 'The content of this website (text, design, logo, code and graphic elements) belongs to {legalName} or is used with the relevant permission, and is protected by intellectual property law. It may not be reproduced, distributed or altered without written permission, except for uses allowed by law.' },

        { h2: 'Liability' },
        { p: 'We do our best to keep the information on this website accurate and up to date, but we cannot guarantee it is free of errors. {legalName} is not liable for damages arising from the use of this website, or for service interruptions outside its control. Links to third-party sites are offered for convenience only and imply no association with, or responsibility for, their content.' },

        { h2: 'Limitations of the voice agent service' },
        { p: 'Duodat\'s voice agents are not an emergency service, a medical alert service or a medical assistance service. They do not diagnose, do not give clinical advice and do not replace professional care. In an emergency you must call 112.' },

        { h2: 'Governing law' },
        { p: 'This legal notice is governed by Spanish law. For any dispute relating to this website, the parties submit to the courts with jurisdiction under the applicable rules.' }
      ]
    }
  }
};
