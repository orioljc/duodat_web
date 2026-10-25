/* Catalan — default locale */
module.exports = {
  code: 'ca',
  htmlLang: 'ca',
  name: 'Català',
  nameShort: 'CA',
  ogLocale: 'ca_ES',

  slugs: {
    home: '',
    wellbeing: 'trucades-de-benestar',
    realestate: 'immobiliaries',
    confirmations: 'confirmacio-de-cites',
    afterhours: 'atencio-fora-dhorari',
    contact: 'contacte',
    thanks: 'gracies',
    privacy: 'privacitat',
    legal: 'avis-legal'
  },

  ui: {
    skip: 'Vés al contingut principal',
    menu: 'Menú',
    openMenu: 'Obre el menú',
    closeMenu: 'Tanca el menú',
    language: 'Idioma',
    changeLanguage: 'Canvia d\'idioma',
    home: 'Inici',
    backHome: 'Tornar a l\'inici',
    allUseCases: 'Veure tots els casos d\'ús',
    learnMore: 'Com funciona',
    exampleCall: 'Exemple de trucada real',
    demoDisclaimer: 'Exemple il·lustratiu d\'una conversa amb l\'agent.',
    agent: 'Agent Duodat',
    person: 'Persona',
    callLive: 'En curs'
  },

  nav: {
    useCases: 'Casos d\'ús',
    how: 'Com funciona',
    pricing: 'Preus',
    faq: 'Preguntes',
    contact: 'Contacte',
    cta: 'Demana una demo'
  },

  meta: {
    home: {
      title: 'Duodat — Agents de veu que truquen i responen per tu',
      description: 'Agents telefònics amb IA que fan trucades de seguiment a persones dependents, confirmen cites i atenen els teus clients fora d\'horari. En català, castellà i anglès.'
    },
    contact: {
      title: 'Demana una demo — Duodat',
      description: 'Explica\'ns el teu cas i et prepararem una demostració amb un agent de veu configurat per al teu negoci. Resposta en 24 h laborables.'
    },
    thanks: {
      title: 'Gràcies — Duodat',
      description: 'Hem rebut la teva sol·licitud.'
    },
    privacy: {
      title: 'Política de privacitat — Duodat',
      description: 'Com tractem les dades personals a duodat.com i en el servei d\'agents de veu.'
    },
    legal: {
      title: 'Avís legal — Duodat',
      description: 'Informació legal i condicions d\'ús del lloc web duodat.com.'
    },
    notFound: {
      title: 'Pàgina no trobada — Duodat',
      description: 'La pàgina que buscaves no existeix.'
    }
  },

  home: {
    heroEyebrow: 'Agents de veu amb IA',
    heroTitle: 'Agents de veu que truquen i responen per tu',
    heroLead: 'Duodat crea agents telefònics que fan trucades de seguiment a persones dependents, confirmen cites i atenen els teus clients quan tu no hi ets. Parlen català, castellà i anglès, i t\'avisen de tot el que passa.',
    heroCtaPrimary: 'Demana una demo gratuïta',
    heroCtaSecondary: 'Veure casos d\'ús',
    heroBadges: [
      { icon: 'globe', text: 'Català, castellà i anglès' },
      { icon: 'shield', text: 'Dades allotjades a la UE' },
      { icon: 'plug', text: 'Sense centraleta nova' }
    ],
    heroNote: 'Estem obrint places per al programa pilot. Et contactem en 24 h laborables.',

    demo: {
      who: 'Montserrat, 83 anys',
      meta: 'Trucada de benestar · avui, 09:02 · 1 min 48 s',
      turns: [
        { s: 'agent', t: 'Bon dia, Montserrat! Sóc l\'assistent de la Mireia. Com ha anat la nit?' },
        { s: 'human', t: 'Bé, maca, he dormit força bé. Gràcies per trucar.' },
        { s: 'agent', t: 'Me n\'alegro molt. S\'ha pres la pastilla del matí?' },
        { s: 'human', t: 'Sí, amb l\'esmorzar.' },
        { s: 'agent', t: 'Perfecte. Avisaré la Mireia que tot va bé. Bon dia!' }
      ],
      foot: 'Resum enviat a la Mireia per correu i SMS'
    },

    trust: [
      { icon: 'clock', text: 'Disponible 24 h, tots els dies' },
      { icon: 'bell', text: 'Avisos per correu i SMS' },
      { icon: 'user', text: 'Escalada a una persona quan cal' },
      { icon: 'lock', text: 'Conforme amb el RGPD' }
    ],

    problemEyebrow: 'El problema',
    problemTitle: 'El telèfon és el coll d\'ampolla del teu dia',
    problemLead: 'Cada trucada que no s\'atén o que no es fa té un cost: una visita perduda, una família preocupada, un client que marxa a la competència.',
    problemItems: [
      {
        icon: 'phone-missed',
        title: 'Les trucades es perden fora d\'horari',
        text: 'Qui truca a les 21 h i no obté resposta no torna a trucar: truca al següent de la llista.'
      },
      {
        icon: 'repeat',
        title: 'Les tasques repetitives cremen l\'equip',
        text: 'Confirmar cites, recordar visites o fer seguiments ocupa hores de personal qualificat cada setmana.'
      },
      {
        icon: 'heart',
        title: 'La cura diària no es pot delegar',
        text: 'Trucar cada dia a un familiar dependent és difícil de sostenir, i no trucar genera angoixa.'
      }
    ],

    howEyebrow: 'Com funciona',
    howTitle: 'En marxa en pocs dies, no en mesos',
    howLead: 'Ens expliques el que necessites, nosaltres configurem l\'agent i el provem amb tu abans de posar-lo en producció.',
    howSteps: [
      {
        title: 'Ens expliques el teu cas',
        text: 'Una conversa de 20 minuts per entendre a qui s\'ha de trucar o qui truca, què s\'ha de preguntar i què ha de passar després.'
      },
      {
        title: 'Configurem i provem l\'agent',
        text: 'Preparem el guió, la veu, l\'idioma i les regles d\'escalada. El provem junts amb trucades reals fins que sona com vols.'
      },
      {
        title: 'L\'agent entra en servei',
        text: 'Comença a trucar o a atendre. Rebràs el resum de cada conversa i els avisos que hagis configurat.'
      }
    ],

    featuresEyebrow: 'Què fa diferent Duodat',
    featuresTitle: 'Pensat per a negocis petits i mitjans del nostre entorn',
    featuresItems: [
      {
        icon: 'globe',
        title: 'Català de debò',
        text: 'L\'agent entén i parla català amb naturalitat, i canvia a castellà o anglès si qui truca ho fa.'
      },
      {
        icon: 'plug',
        title: 'Funciona amb el teu telèfon',
        text: 'Mantens el número actual. Només cal un desviament de trucades, sense comprar equips ni canviar d\'operador.'
      },
      {
        icon: 'calendar',
        title: 'S\'integra amb la teva agenda',
        text: 'Google Calendar, Outlook o el teu programa de cites. Si no es pot connectar, rebràs les peticions per correu.'
      },
      {
        icon: 'user',
        title: 'Mai deixa ningú penjat',
        text: 'Si la conversa es complica o algú demana parlar amb una persona, l\'agent passa la trucada o obre un avís urgent.'
      },
      {
        icon: 'file-text',
        title: 'Resum de cada trucada',
        text: 'Transcripció, resum i resultat de cada conversa, al teu correu o al teu panell. Sense sorpreses.'
      },
      {
        icon: 'shield',
        title: 'Privacitat des del disseny',
        text: 'Dades allotjades a la Unió Europea, contracte d\'encarregat del tractament i només les dades que calen.'
      }
    ],

    useCasesEyebrow: 'Casos d\'ús',
    useCasesTitle: 'Quatre maneres de començar',
    useCasesLead: 'Cada cas d\'ús té el seu propi guió, les seves regles i els seus avisos. Tria el que s\'assembli més al teu i mira com funciona.',

    trustEyebrow: 'Confiança i privacitat',
    trustTitle: 'Un agent que parla en nom teu ha de ser transparent',
    trustLead: 'No volem amagar que és un assistent automàtic: volem que la gent el trobi útil i es quedi tranquil·la.',
    trustItems: [
      {
        title: 'L\'agent s\'identifica sempre',
        text: 'Al començament de cada trucada diu qui és i de part de qui truca. Sense enganys ni veus que suplanten ningú.'
      },
      {
        title: 'Dades a la Unió Europea',
        text: 'Les dades de les trucades es processen i es guarden a servidors de la UE, amb xifratge en trànsit i en repòs.'
      },
      {
        title: 'Tu decideixes què es guarda',
        text: 'Pots activar o desactivar la gravació d\'àudio i fixar el temps de conservació de transcripcions i resums.'
      },
      {
        title: 'Sortida a una persona sempre disponible',
        text: 'Qualsevol persona pot demanar parlar amb algú de l\'equip, i l\'agent ho facilita de seguida.'
      },
      {
        title: 'Contracte d\'encarregat del tractament',
        text: 'Signem l\'acord que exigeix el RGPD per tractar dades personals per compte teu, amb el detall de subencarregats.'
      },
      {
        title: 'Res de decisions clíniques',
        text: 'L\'agent recull informació i avisa. No diagnostica, no dóna consells mèdics ni substitueix els serveis d\'emergència.'
      }
    ],

    pricingEyebrow: 'Preus',
    pricingTitle: 'Preus orientatius del programa pilot',
    pricingLead: 'Som a l\'inici i volem tancar els primers clients amb condicions de llançament. Aquests imports són una referència: el pressupost final depèn del volum de trucades i de les integracions.',
    pricingPlans: [
      {
        name: 'Benestar',
        audience: 'Famílies i persones cuidadores',
        amount: 19,
        unit: '/ mes per persona',
        desc: 'Una trucada diària de seguiment amb avís als familiars.',
        features: [
          'Una trucada programada cada dia',
          'Avís per correu i SMS a dos contactes',
          'Alerta immediata si no contesta',
          'Guió adaptat a la persona'
        ],
        cta: 'Vull provar-ho',
        useCase: 'wellbeing'
      },
      {
        name: 'Negoci',
        audience: 'Clíniques, botigues i immobiliàries',
        amount: 99,
        unit: '/ mes',
        desc: 'Un agent que atén o truca pel teu negoci, amb agenda connectada.',
        features: [
          'Fins a 200 trucades al mes',
          'Atenció fora d\'horari i confirmacions',
          'Cites a la teva agenda',
          'Resum de cada trucada per correu',
          'Escalada a una persona de l\'equip'
        ],
        featured: true,
        flag: 'El més demanat',
        cta: 'Demana pressupost',
        useCase: 'confirmations'
      },
      {
        name: 'Volum alt',
        audience: 'Integracions i multi-agent',
        amountText: 'A mida',
        unit: '',
        desc: 'Diversos agents, més idiomes i connexió amb el teu CRM o programa de gestió.',
        features: [
          'Volum de trucades sense límit fix',
          'Integració amb el teu CRM o ERP',
          'Diversos agents i números',
          'Informes i acord de nivell de servei'
        ],
        cta: 'Parlem-ne',
        useCase: 'other'
      }
    ],
    pricingNote: 'Imports en euros, sense IVA. Sense permanència durant el pilot.',

    faqEyebrow: 'Preguntes freqüents',
    faqTitle: 'El que ens pregunta tothom',
    faq: [
      {
        q: 'La gent s\'adona que parla amb una màquina?',
        a: 'Normalment sí, i no ho amaguem: l\'agent s\'identifica com a assistent automàtic al començament de la trucada. El que busquem no és enganyar ningú, sinó que la conversa sigui clara, educada i útil. En les proves, la majoria de persones ho accepten bé quan saben de part de qui es truca.'
      },
      {
        q: 'Què passa si l\'agent no entén alguna cosa?',
        a: 'Primer ho torna a preguntar d\'una altra manera. Si continua sense entendre, o si la persona demana parlar amb algú, passa la trucada a un telèfon que tu ens indiquis o genera un avís per tornar a trucar. L\'agent no inventa respostes.'
      },
      {
        q: 'Quins idiomes parla?',
        a: 'Català, castellà i anglès. Detecta en quin idioma li parlen i hi respon. Si necessites un altre idioma, digues-nos-ho i ho valorem.'
      },
      {
        q: 'He de canviar de telèfon o d\'operador?',
        a: 'No. Pots mantenir el teu número i desviar les trucades a l\'agent quan tanques, o bé donar-li un número nou per a les trucades sortints. No cal comprar equipament.'
      },
      {
        q: 'Com de ràpid es pot posar en marxa?',
        a: 'Per als casos estàndard, en pocs dies des de la conversa inicial. Les integracions amb programes de gestió poden necessitar més temps, i t\'ho direm abans de començar.'
      },
      {
        q: 'Qui pot escoltar les trucades?',
        a: 'Només tu i les persones que autoritzis. L\'equip de Duodat hi accedeix únicament per resoldre incidències i sota contracte de confidencialitat. Pots desactivar la gravació d\'àudio i quedar-te només amb el resum.'
      },
      {
        q: 'Serveix per a emergències?',
        a: 'No. Duodat no és un servei d\'emergències ni de teleassistència sanitària. Si l\'agent detecta una situació preocupant, avisa immediatament els contactes que hagis configurat perquè puguin actuar, però davant d\'una emergència cal trucar al 112.'
      },
      {
        q: 'Quant costa?',
        a: 'Durant el pilot treballem amb preus de llançament des de 19 € al mes per a famílies i des de 99 € al mes per a negocis. El pressupost final depèn del volum de trucades i de les integracions que necessitis.'
      }
    ],

    finalEyebrow: 'Programa pilot',
    finalTitle: 'Expliquem-nos el teu cas i et preparem una demo',
    finalLead: 'Volem entendre com són les teves trucades abans de vendre\'t res. Omple el formulari i et contactem en 24 h laborables amb una proposta concreta o amb una demostració en viu.',
    finalPoints: [
      'Demostració amb un agent configurat per al teu cas',
      'Sense compromís ni targeta de crèdit',
      'Condicions de llançament per als primers clients',
      'Si no et serveix, t\'ho direm clarament'
    ]
  },

  useCaseSection: {
    problem: 'On fa mal',
    solution: 'Com ho resol Duodat',
    includes: 'Què inclou',
    notFor: 'Què no fa',
    faq: 'Preguntes sobre aquest cas',
    other: 'Altres casos d\'ús'
  },

  useCases: {
    wellbeing: {
      id: 'wellbeing',
      icon: 'heart',
      tag: 'Famílies, residències i serveis socials',
      navTitle: 'Trucades de benestar',
      navDesc: 'Trucades diàries a persones grans o dependents, amb avís als familiars.',
      cardTitle: 'Trucades de benestar',
      cardText: 'Una trucada amable cada dia a una persona gran o dependent, amb confirmació als familiars per correu o SMS.',
      cardBullets: [
        'Trucada diària a l\'hora que vulguis',
        'Avís automàtic si no contesta',
        'Resum per correu i SMS a la família'
      ],
      metaTitle: 'Trucades diàries de benestar a persones grans — Duodat',
      metaDescription: 'Un agent de veu truca cada dia a la persona que cuides, comprova que està bé i avisa la família per correu o SMS. En català, castellà i anglès.',
      h1: 'Una trucada cada dia per saber que tot va bé',
      lead: 'Duodat truca a la persona que cuides a l\'hora acordada, conversa amb ella uns minuts i t\'envia el resum. Si no contesta o alguna cosa no quadra, t\'avisa de seguida.',
      cta: 'Vull provar-ho amb el meu familiar',

      demo: {
        who: 'Joan, 79 anys',
        meta: 'Trucada de benestar · avui, 10:00 · 2 min 06 s',
        turns: [
          { s: 'agent', t: 'Bon dia, Joan. Sóc l\'assistent de la seva filla Anna. Truco per veure com es troba avui.' },
          { s: 'human', t: 'Doncs regular, tinc una mica de mal d\'esquena.' },
          { s: 'agent', t: 'Em sap greu. És un dolor nou o ja el tenia dies enrere?' },
          { s: 'human', t: 'Des d\'ahir a la nit.' },
          { s: 'agent', t: 'Entesos, ho apunto i ho faré saber a l\'Anna perquè us pugueu parlar. Ha esmorzat i s\'ha pres la medicació?' },
          { s: 'human', t: 'Sí, tot fet.' },
          { s: 'agent', t: 'Perfecte, Joan. Que tingui un bon dia i demà el torno a trucar.' }
        ],
        foot: 'Avís enviat a l\'Anna: «Mal d\'esquena des d\'ahir» · Medicació: sí'
      },

      problemIntro: 'Cuidar a distància vol dir viure amb una pregunta constant al cap: avui està bé?',
      problemItems: [
        'Trucar cada dia a la mateixa hora és difícil de mantenir quan treballes, viatges o cuides altres persones.',
        'Quan no contesta el telèfon, el cap se\'t va al pitjor i no saps si cal moure\'t o esperar.',
        'Els serveis de teleassistència clàssics reaccionen quan ja ha passat alguna cosa, però no truquen per parlar.',
        'Els germans i familiars es desinformen entre ells: qui va trucar l\'últim, què va dir, com estava.'
      ],

      solutionIntro: 'Un agent amable, puntual i constant, que sempre t\'explica com ha anat.',
      solutionItems: [
        {
          icon: 'clock',
          title: 'Sempre a l\'hora acordada',
          text: 'Una o més trucades al dia, els dies que tu triïs. Si no contesta, torna a provar al cap d\'uns minuts el nombre de vegades que hàgiu pactat.'
        },
        {
          icon: 'message',
          title: 'Una conversa, no un qüestionari',
          text: 'L\'agent pregunta com ha anat la nit, si ha menjat, si s\'ha pres la medicació i com es troba d\'ànim, amb un to natural i sense presses.'
        },
        {
          icon: 'bell',
          title: 'Avisos clars a qui toca',
          text: 'Resum diari per correu o SMS als contactes que indiquis, i avís immediat si no contesta o si diu alguna cosa preocupant.'
        },
        {
          icon: 'users',
          title: 'Tota la família informada',
          text: 'Els mateixos avisos poden arribar a diversos germans o cuidadors, així ningú no ha de fer de pont.'
        },
        {
          icon: 'sliders',
          title: 'Adaptat a la persona',
          text: 'Ens dius com es diu, com li agrada que la tractin, quina medicació pren i què és important preguntar-li. L\'agent ho té en compte.'
        }
      ],

      includesItems: [
        'Configuració del guió amb tu, per telèfon o videotrucada',
        'Trucada diària programada a l\'hora que decidiu',
        'Reintents automàtics si no contesta',
        'Resum de cada trucada per correu electrònic',
        'Avís per SMS als contactes d\'emergència',
        'Canvis de guió i d\'horari sense cost durant el pilot'
      ],

      notForItems: [
        'No és un servei d\'emergències: davant d\'una urgència, cal trucar al 112.',
        'No és teleassistència amb botó de pànic ni detecció de caigudes.',
        'No dóna consells mèdics ni valora símptomes: recull el que diu la persona i avisa.'
      ],

      faq: [
        {
          q: 'I si el meu familiar no vol parlar amb una màquina?',
          a: 'És la primera cosa que cal provar, i per això fem una demo amb vosaltres abans de començar. L\'agent es presenta dient de part de qui truca, cosa que ajuda molt. Hi ha persones a qui no els acaba de fer el pes, i en aquest cas t\'ho direm sense problema.'
        },
        {
          q: 'Què passa si no contesta la trucada?',
          a: 'L\'agent torna a provar al cap d\'uns minuts, tantes vegades com hàgiu acordat. Si continua sense contestar, rebràs un avís immediat per SMS i correu indicant l\'hora dels intents, perquè puguis actuar tu.'
        },
        {
          q: 'Puc canviar les preguntes?',
          a: 'Sí. El guió és teu: pots afegir preguntes sobre medicació concreta, sobre si ha vingut la cuidadora o sobre qualsevol cosa que vulguis fer seguir. Durant el pilot els canvis no tenen cost.'
        },
        {
          q: 'Es graven les trucades?',
          a: 'Només si ho autoritzeu. Per defecte guardem la transcripció i el resum, no l\'àudio. Tant la persona que rep la trucada com tu podeu demanar que no es guardi res més enllà de l\'avís.'
        }
      ]
    },

    realestate: {
      id: 'realestate',
      icon: 'home',
      tag: 'Agències immobiliàries',
      navTitle: 'Immobiliàries',
      navDesc: 'Atén els interessats, filtra-los amb l\'inventari i omple l\'agenda de visites.',
      cardTitle: 'Agent per a immobiliàries',
      cardText: 'Atén qui truca per un pis, el creua amb el teu inventari i tanca la visita a l\'agenda sense que ningú hagi de despenjar.',
      cardBullets: [
        'Consulta l\'inventari en temps real',
        'Qualifica l\'interessat abans de la visita',
        'Programa visites o deixa la petició'
      ],
      metaTitle: 'Agent de veu per a immobiliàries: atén trucades i programa visites — Duodat',
      metaDescription: 'Un agent telefònic que atén els interessats, els creua amb el teu inventari de pisos, els qualifica i programa la visita a la teva agenda. Català, castellà i anglès.',
      h1: 'Cap trucada d\'un comprador es torna a perdre',
      lead: 'L\'agent atén qui truca pel cartell o per l\'anunci, li explica els immobles que encaixen amb el que busca, el qualifica i tanca la visita a la teva agenda. Tu reps el contacte ja filtrat.',
      cta: 'Vull un agent per a la meva agència',

      demo: {
        who: 'Immobiliària Vallès',
        meta: 'Trucada entrant · dissabte, 11:34 · 2 min 51 s',
        turns: [
          { s: 'agent', t: 'Immobiliària Vallès, bon dia. En què el puc ajudar?' },
          { s: 'human', t: 'Truco pel pis del cartell del carrer Girona, el de 230.000.' },
          { s: 'agent', t: 'Sí, el de 85 metres amb tres habitacions i balcó. Està disponible. Busca per a viure-hi o com a inversió?' },
          { s: 'human', t: 'Per viure-hi. Necessitaria hipoteca.' },
          { s: 'agent', t: 'Perfecte. Tenim visites dimarts a les 17 h i dijous a les 10 h. Quina li va millor?' },
          { s: 'human', t: 'Dimarts a les cinc.' },
          { s: 'agent', t: 'Fet. Em diu el seu nom i un correu per enviar-li la confirmació i la fitxa del pis?' }
        ],
        foot: 'Visita creada a l\'agenda · Fitxa enviada · Lead qualificat: hipoteca'
      },

      problemIntro: 'Les trucades dels compradors arriben quan l\'equip no les pot agafar.',
      problemItems: [
        'Els interessats truquen el cap de setmana i a última hora, just quan ningú és a l\'oficina.',
        'Qui no obté resposta truca a l\'agència següent: el lead es perd en minuts, no en dies.',
        'L\'equip repeteix vint vegades al dia les mateixes dades de metres, preu i disponibilitat.',
        'Es programen visites amb gent que no ha dit què busca ni si té finançament.'
      ],

      solutionIntro: 'Un agent que coneix l\'inventari i sap què ha de preguntar.',
      solutionItems: [
        {
          icon: 'search',
          title: 'Coneix el teu inventari',
          text: 'Carreguem els teus immobles amb referència, preu, metres, habitacions i zona. L\'agent respon amb dades reals i actualitzades, i no promet res que no existeixi.'
        },
        {
          icon: 'filter',
          title: 'Qualifica abans de la visita',
          text: 'Pressupost, zona, nombre d\'habitacions, si necessita hipoteca i quan es vol mudar. Arribes a la visita sabent amb qui parles.'
        },
        {
          icon: 'calendar',
          title: 'Tanca la visita a l\'agenda',
          text: 'Proposa els buits lliures de la teva agenda i hi crea la cita. Si prefereixes validar-ho tu, deixa la petició pendent de confirmació.'
        },
        {
          icon: 'clock',
          title: 'Atén quan tu no pots',
          text: 'Fora d\'horari, els caps de setmana o quan totes les línies estan ocupades. També pot atendre només el desbordament.'
        },
        {
          icon: 'mail',
          title: 'Envia la fitxa de l\'immoble',
          text: 'Després de la trucada, l\'interessat rep per correu la fitxa del pis i la confirmació de la visita amb l\'adreça.'
        }
      ],

      includesItems: [
        'Càrrega inicial del teu inventari d\'immobles',
        'Guió de qualificació adaptat a la teva agència',
        'Atenció de trucades entrants en tres idiomes',
        'Creació de visites a Google Calendar o Outlook',
        'Resum de cada trucada i dades del lead per correu',
        'Transferència a un comercial quan la trucada ho demana'
      ],

      notForItems: [
        'No negocia preus ni condicions: això queda per a l\'equip comercial.',
        'No signa res ni recull pagaments ni senyals per telèfon.',
        'No substitueix la visita presencial ni l\'assessorament del teu equip.'
      ],

      faq: [
        {
          q: 'Com manteniu l\'inventari actualitzat?',
          a: 'Podem llegir-lo d\'un full de càlcul, d\'un fitxer que ens generi el teu CRM o d\'una connexió directa si el teu programa ho permet. Com a mínim, una actualització diària; si hi ha connexió, en temps real.'
        },
        {
          q: 'Pot atendre diverses trucades alhora?',
          a: 'Sí. A diferència d\'una persona, l\'agent atén diverses trucades en paral·lel, de manera que ningú no sent el senyal d\'ocupat en una campanya o un cap de setmana amb molt moviment.'
        },
        {
          q: 'I si l\'interessat vol parlar amb un comercial?',
          a: 'L\'agent passa la trucada al número que ens indiquis en horari d\'oficina, o recull el contacte i la millor franja per tornar a trucar si no hi ha ningú disponible.'
        },
        {
          q: 'Funciona també per a lloguer?',
          a: 'Sí. Els criteris de qualificació canvien (nòmina, avals, data d\'entrada) i el guió s\'adapta. Si treballes els dos mercats, l\'agent pregunta primer què busca la persona.'
        }
      ]
    },

    confirmations: {
      id: 'confirmations',
      icon: 'check-circle',
      tag: 'Clíniques, dentistes, òptiques i ortopèdies',
      navTitle: 'Confirmació de cites',
      navDesc: 'Trucades de confirmació i recordatori per reduir les absències.',
      cardTitle: 'Confirmació de cites',
      cardText: 'L\'agent truca els pacients abans de la visita, confirma, reprograma o anul·la, i actualitza la teva agenda.',
      cardBullets: [
        'Confirma, canvia o anul·la per telèfon',
        'Allibera buits amb prou antelació',
        'Sincronitza amb l\'agenda'
      ],
      metaTitle: 'Trucades de confirmació de cites per a clíniques — Duodat',
      metaDescription: 'Un agent de veu truca els teus pacients per confirmar, reprogramar o anul·lar la cita, i actualitza l\'agenda. Menys absències i menys feina al taulell.',
      h1: 'Menys absències, sense dedicar-hi ni una trucada',
      lead: 'L\'agent truca els pacients el dia abans, confirma la visita, la mou si no els va bé o l\'anul·la. Tu reps l\'agenda actualitzada i el taulell es queda lliure per atendre la gent que té al davant.',
      cta: 'Vull reduir les absències',

      demo: {
        who: 'Clínica Dental Sant Pere',
        meta: 'Trucada sortint · ahir, 18:12 · 1 min 12 s',
        turns: [
          { s: 'agent', t: 'Bona tarda, parlo amb la senyora Rius? Truco de la Clínica Dental Sant Pere per recordar-li la cita de demà a les 16:30 amb el doctor Soler.' },
          { s: 'human', t: 'Ai, demà no puc. Em va sortir una reunió.' },
          { s: 'agent', t: 'Cap problema, ho canviem. Tinc dijous a les 11:00 o divendres a les 17:00.' },
          { s: 'human', t: 'Divendres a les cinc em va bé.' },
          { s: 'agent', t: 'Perfecte, divendres a les 17:00 amb el doctor Soler. Li envio la confirmació per SMS. Bona tarda!' }
        ],
        foot: 'Cita moguda a l\'agenda · Buit de demà alliberat · SMS enviat'
      },

      problemIntro: 'Cada hora buida a l\'agenda és un professional pagat sense facturar.',
      problemItems: [
        'Els pacients no es presenten i el buit es descobreix massa tard per omplir-lo.',
        'Els SMS i els correus de recordatori s\'ignoren: ningú no respon i ningú no reprograma.',
        'El taulell passa el matí al telèfon en comptes d\'atendre la gent que fa cua.',
        'Les llistes d\'espera no avancen perquè els buits s\'alliberen el mateix dia.'
      ],

      solutionIntro: 'Una trucada de veritat, amb una persona a l\'altra banda que pot dir que no li va bé.',
      solutionItems: [
        {
          icon: 'phone',
          title: 'Trucada, no només un SMS',
          text: 'Una trucada aconsegueix resposta immediata i permet resoldre el canvi al moment, en comptes d\'esperar que algú contesti un missatge.'
        },
        {
          icon: 'calendar',
          title: 'Reprograma a la mateixa trucada',
          text: 'Si el pacient no pot venir, l\'agent li ofereix els buits reals de l\'agenda i mou la cita. El forat queda lliure amb dies d\'antelació.'
        },
        {
          icon: 'refresh',
          title: 'Omple els buits que s\'alliberen',
          text: 'Amb la teva llista d\'espera, l\'agent pot trucar per oferir una cita que s\'acaba de quedar lliure.'
        },
        {
          icon: 'list',
          title: 'Recordatoris de preparació',
          text: 'Si la visita demana dejuni, portar informes o venir abans, l\'agent ho recorda i ho confirma.'
        },
        {
          icon: 'bar-chart',
          title: 'Saps què ha passat amb cada cita',
          text: 'Confirmada, moguda, anul·lada o sense resposta. Amb l\'hora de la trucada i el resum de la conversa.'
        }
      ],

      includesItems: [
        'Connexió amb la teva agenda o càrrega diària de cites',
        'Trucades de confirmació amb l\'antelació que decideixis',
        'Reprogramació i anul·lació durant la trucada',
        'Confirmació per SMS o correu al pacient',
        'Reintents en franges diferents si no contesta',
        'Informe diari de l\'estat de totes les cites'
      ],

      notForItems: [
        'No dóna resultats de proves ni informació clínica per telèfon.',
        'No fa triatge ni valora la urgència d\'un símptoma.',
        'No ven tractaments ni fa promocions si no ho demanes expressament.'
      ],

      faq: [
        {
          q: 'Amb quins programes d\'agenda us connecteu?',
          a: 'Directament amb Google Calendar i Microsoft Outlook. Amb programes de gestió de clíniques, treballem per API quan en tenen, o amb un intercanvi de fitxers diari quan no. A la primera conversa ho revisem.'
        },
        {
          q: 'Això compleix la normativa de protecció de dades sanitàries?',
          a: 'L\'agent només maneja les dades mínimes per gestionar la cita: nom, telèfon, dia, hora i professional. No tracta diagnòstics ni històries clíniques. Signem el contracte d\'encarregat del tractament i les dades es processen a la UE.'
        },
        {
          q: 'Quantes vegades truca si no contesten?',
          a: 'Les que decideixis, en franges horàries diferents per augmentar les possibilitats. Si al final no hi ha resposta, la cita queda marcada com a no confirmada a l\'informe.'
        },
        {
          q: 'Pot trucar en nom de diversos professionals?',
          a: 'Sí. L\'agent diu el nom del professional i el servei de cada cita, i pot gestionar diverses agendes dins del mateix centre.'
        }
      ]
    },

    afterhours: {
      id: 'afterhours',
      icon: 'moon',
      tag: 'Clíniques, botigues sanitàries i serveis',
      navTitle: 'Atenció fora d\'horari',
      navDesc: 'Un agent que atén i dóna cita quan el teu equip ja ha plegat.',
      cardTitle: 'Atenció fora d\'horari',
      cardText: 'Quan tanques, l\'agent continua atenent: dóna cita, respon les preguntes habituals i t\'avisa del que és urgent.',
      cardBullets: [
        'Dóna cites a la nit i els caps de setmana',
        'Respon horaris, adreça i preus',
        'Avís immediat del que és urgent'
      ],
      metaTitle: 'Atenció telefònica fora d\'horari amb cites automàtiques — Duodat',
      metaDescription: 'Un agent de veu atén el telèfon del teu centre quan està tancat: dóna cita, respon les preguntes habituals i t\'avisa del que no pot esperar.',
      h1: 'El teu telèfon continua atenent quan tu tanques',
      lead: 'Les trucades que arriben a la nit, al migdia o el cap de setmana no es perden: l\'agent les atén, dóna cita a la teva agenda, respon les preguntes de sempre i et deixa un resum per quan tornis.',
      cta: 'Vull atendre fora d\'horari',

      demo: {
        who: 'Ortopèdia Figueres',
        meta: 'Trucada entrant · diumenge, 20:47 · 1 min 39 s',
        turns: [
          { s: 'agent', t: 'Ortopèdia Figueres, bona nit. Ara estem tancats, però el puc ajudar jo. Què necessita?' },
          { s: 'human', t: 'Volia saber si tenen crosses i quant costen.' },
          { s: 'agent', t: 'Sí, en tenim de lloguer i de venda. El lloguer surt per 15 euros la setmana. Si vol, li reservo una visita per demà al matí.' },
          { s: 'human', t: 'Sí, millor. A quina hora obren?' },
          { s: 'agent', t: 'A les 9:30. Té lliure a les 10:00 o a les 11:15.' },
          { s: 'human', t: 'A les deu.' },
          { s: 'agent', t: 'Reservat a les 10:00. Em diu el seu nom i un telèfon de contacte?' }
        ],
        foot: 'Cita creada per demà 10:00 · Resum enviat al centre'
      },

      problemIntro: 'La meitat de les trucades arriben quan no hi ha ningú per atendre-les.',
      problemItems: [
        'El contestador no converteix: la gent penja i busca una altra opció.',
        'Les preguntes de sempre (horari, adreça, si teniu tal producte) es queden sense resposta.',
        'Les urgències reals es barregen amb consultes que podien esperar, i no te n\'assabentes fins l\'endemà.',
        'Dilluns al matí el telèfon no para perquè s\'acumula tot el cap de setmana.'
      ],

      solutionIntro: 'Un agent de guàrdia que sap el que ha de saber i et passa el que t\'ha de passar.',
      solutionItems: [
        {
          icon: 'calendar',
          title: 'Dóna cita a qualsevol hora',
          text: 'Consulta els buits reals de la teva agenda i hi crea la cita, o deixa la petició pendent de validar al matí si ho prefereixes.'
        },
        {
          icon: 'help-circle',
          title: 'Respon les preguntes habituals',
          text: 'Horaris, adreça, com arribar, aparcament, mútues acceptades, preus de referència i serveis disponibles. Ho preparem amb tu.'
        },
        {
          icon: 'alert',
          title: 'Distingeix el que és urgent',
          text: 'Amb les regles que fixem junts, l\'agent detecta les trucades que no poden esperar i t\'avisa per SMS o passa la trucada al telèfon de guàrdia.'
        },
        {
          icon: 'inbox',
          title: 'Et deixa la feina feta',
          text: 'Cada matí trobes el llistat de trucades amb resum, cites creades i les coses que requereixen la teva atenció.'
        },
        {
          icon: 'globe',
          title: 'Atén en tres idiomes',
          text: 'Català, castellà i anglès. Útil en zones turístiques i en centres amb pacients internacionals.'
        }
      ],

      includesItems: [
        'Desviament de trucades fora de l\'horari que fixis',
        'Base de respostes del teu centre preparada amb tu',
        'Creació de cites a l\'agenda o peticions per validar',
        'Regles d\'urgència i telèfon de guàrdia',
        'Resum diari de trucades per correu',
        'Missatge de benvinguda amb la teva identitat'
      ],

      notForItems: [
        'No atén emergències mèdiques: en aquests casos indica trucar al 112.',
        'No dóna consells clínics ni diagnostica res.',
        'No cobra, no gestiona pagaments ni demana dades bancàries.'
      ],

      faq: [
        {
          q: 'Com es desvien les trucades?',
          a: 'Amb un desviament condicional al teu operador o a la teva centraleta: fora de l\'horari que fixis, les trucades van a l\'agent. Mantens el teu número i t\'ajudem a configurar-ho.'
        },
        {
          q: 'Pot atendre també en horari d\'oficina?',
          a: 'Sí. Hi ha centres que el fan servir només fora d\'horari i altres que el posen a atendre quan totes les línies estan ocupades, així ningú no espera.'
        },
        {
          q: 'Com decidiu què és urgent?',
          a: 'Ho definim junts a partir dels teus criteris, i ho ajustem durant les primeres setmanes amb les trucades reals. L\'agent sempre pot passar la trucada si la persona insisteix a parlar amb algú.'
        },
        {
          q: 'Què sent qui truca?',
          a: 'La veu i el nom que tu triïs, amb un missatge d\'identificació que diu que és l\'assistent del centre. Pots escollir el to: proper o més formal.'
        }
      ]
    }
  },

  form: {
    title: 'Demana una demo',
    intro: 'Omple el formulari i et contactem en 24 h laborables. Sense compromís.',
    name: 'Nom i cognoms',
    namePlaceholder: 'Com et dius?',
    email: 'Correu electrònic',
    emailPlaceholder: 'nom@empresa.com',
    phone: 'Telèfon',
    phonePlaceholder: '600 000 000',
    phoneHint: 'Opcional, però ens ajuda a trucar-te abans.',
    organization: 'Empresa o organització',
    organizationPlaceholder: 'Nom del negoci (o «particular»)',
    useCase: 'Què t\'interessa',
    useCaseOptions: [
      { value: '', label: 'Tria una opció' },
      { value: 'wellbeing', label: 'Trucades de benestar a persones dependents' },
      { value: 'realestate', label: 'Agent per a immobiliària' },
      { value: 'confirmations', label: 'Confirmació de cites' },
      { value: 'afterhours', label: 'Atenció fora d\'horari' },
      { value: 'other', label: 'Una altra cosa' }
    ],
    volume: 'Volum aproximat de trucades',
    volumeOptions: [
      { value: '', label: 'Tria una opció' },
      { value: '1-30', label: 'Menys de 30 al mes' },
      { value: '30-200', label: 'Entre 30 i 200 al mes' },
      { value: '200-1000', label: 'Entre 200 i 1.000 al mes' },
      { value: '1000+', label: 'Més de 1.000 al mes' },
      { value: 'unknown', label: 'Encara no ho sé' }
    ],
    message: 'Explica\'ns el teu cas',
    messagePlaceholder: 'A qui s\'ha de trucar o qui et truca, en quin idioma, en quin horari i què ha de passar després de la trucada.',
    consent: 'Accepto que Duodat tracti les meves dades per respondre aquesta sol·licitud, tal com explica la <a href="{privacy}">política de privacitat</a>.',
    submit: 'Enviar la sol·licitud',
    note: 'Resposta en 24 h laborables. No compartim les teves dades amb ningú.',
    required: 'obligatori',
    okTitle: 'Sol·licitud enviada.',
    okText: 'Gràcies! Et contactem en 24 h laborables.',
    errRequired: 'Aquest camp és obligatori.',
    errEmail: 'Escriu una adreça de correu vàlida.',
    errSend: 'No hem pogut enviar el formulari. Torna-ho a provar o escriu-nos a <a href="mailto:{email}">{email}</a>.',
    errNoKey: 'El formulari encara no està connectat. Escriu-nos directament a <a href="mailto:{email}">{email}</a> i t\'atenem igual.',
    subject: 'Nova sol·licitud des de duodat.com'
  },

  contact: {
    eyebrow: 'Contacte',
    h1: 'Parlem del teu cas',
    lead: 'Volem entendre com són les teves trucades abans de proposar-te res. Escriu-nos i et contactem en 24 h laborables.',
    sideTitle: 'Què passa quan ens escrius',
    sideSteps: [
      { title: 'Et contactem en 24 h laborables', text: 'Per correu o per telèfon, com tu prefereixis.' },
      { title: 'Conversa de 20 minuts', text: 'Entenem el teu cas i et diem si Duodat hi encaixa o no.' },
      { title: 'Demo amb el teu guió', text: 'Si té sentit, preparem un agent configurat per al teu cas i el provem junts.' }
    ],
    directTitle: 'Prefereixes escriure directament?',
    directText: 'Escriu-nos a {email} i t\'atenem igual. Si ens dius en quin horari et va bé que et truquem, millor.'
  },

  thanks: {
    eyebrow: 'Sol·licitud rebuda',
    h1: 'Gràcies, ho tenim!',
    lead: 'Hem rebut la teva sol·licitud i et contactem en 24 h laborables.',
    nextTitle: 'Mentrestant',
    nextText: 'Si vols avançar feina, pensa en aquestes tres coses: a qui s\'ha de trucar (o qui et truca), en quin horari, i què ha de passar just després de la trucada. Són les tres preguntes amb què començarem.',
    backBtn: 'Tornar a l\'inici',
    casesBtn: 'Veure els casos d\'ús',
    mailNote: 'No t\'ha arribat cap confirmació? Escriu-nos a {email}.'
  },

  notFound: {
    h1: 'Aquesta pàgina no existeix',
    lead: 'Potser l\'enllaç és antic o hi ha un error a l\'adreça. Des de l\'inici hi trobaràs tot el que oferim.',
    backBtn: 'Tornar a l\'inici'
  },

  footer: {
    about: 'Duodat crea agents de veu amb intel·ligència artificial per a negocis i famílies: trucades de seguiment, confirmació de cites i atenció telefònica fora d\'horari, en català, castellà i anglès.',
    colUseCases: 'Casos d\'ús',
    colCompany: 'Duodat',
    colLegal: 'Legal',
    rights: 'Tots els drets reservats.',
    madeIn: 'Fet a Barcelona',
    statusPilot: 'Servei en fase pilot'
  },

  legalPages: {
    privacy: {
      h1: 'Política de privacitat',
      updated: 'Última actualització: 25 d\'octubre de 2025',
      blocks: [
        { h2: 'Qui és el responsable del tractament' },
        { p: 'El responsable del tractament de les dades recollides en aquest lloc web és {legalName} ({domain}), amb adreça de contacte a {city}, {country}. Pots contactar-nos per a qualsevol qüestió relativa a la privacitat a {email}.' },

        { h2: 'Quines dades recollim' },
        { p: 'En aquest lloc web només recollim les dades que ens facilites voluntàriament a través del formulari de contacte:' },
        { ul: [
          'Nom i cognoms.',
          'Adreça de correu electrònic.',
          'Telèfon, si decideixes facilitar-lo.',
          'Empresa o organització, si decideixes facilitar-la.',
          'El cas d\'ús que t\'interessa, el volum de trucades aproximat i el missatge que escrius.',
          'L\'adreça de la pàgina des de la qual has enviat el formulari i l\'idioma de navegació.'
        ] },
        { p: 'No fem servir galetes de seguiment ni eines d\'analítica que et perfilin. No hi ha publicitat ni rastrejadors de tercers en aquest lloc web.' },

        { h2: 'Per a què les fem servir' },
        { table: {
          head: ['Finalitat', 'Base jurídica', 'Conservació'],
          rows: [
            ['Respondre la teva sol·licitud d\'informació o de demostració', 'El teu consentiment i l\'interès legítim en atendre una consulta comercial', 'Fins a 24 mesos des de l\'últim contacte'],
            ['Preparar un pressupost o una prova pilot', 'Execució d\'una relació precontractual', 'Durant la negociació i la seva prescripció legal'],
            ['Complir obligacions legals (comptables, fiscals)', 'Obligació legal', 'Els terminis que exigeix la llei']
          ]
        } },
        { p: 'No farem servir les teves dades per enviar-te comunicacions comercials sobre altres productes sense demanar-te permís abans.' },

        { h2: 'Qui pot accedir a les teves dades' },
        { p: 'Per poder funcionar, comptem amb proveïdors que actuen com a encarregats del tractament i que només tracten les dades segons les nostres instruccions:' },
        { ul: [
          'El proveïdor que processa l\'enviament del formulari web i ens el fa arribar per correu electrònic.',
          'El nostre proveïdor de correu electrònic.',
          'El proveïdor d\'allotjament d\'aquest lloc web.'
        ] },
        { p: 'No venem ni cedim les teves dades a tercers amb finalitats comercials. Quan algun proveïdor impliqui una transferència internacional de dades, ens assegurem que hi hagi les garanties que exigeix el RGPD, com les clàusules contractuals tipus de la Comissió Europea.' },

        { h2: 'Dades tractades en el servei d\'agents de veu' },
        { p: 'Quan un client contracta el servei de Duodat, les dades de les persones que reben o fan les trucades es tracten per compte d\'aquest client, que n\'és el responsable. En aquests casos, Duodat actua com a encarregada del tractament i signa el contracte que exigeix l\'article 28 del RGPD. Aquest tractament inclou:' },
        { ul: [
          'Dades d\'identificació i de contacte necessàries per fer la trucada.',
          'Transcripció i resum de la conversa, i gravació d\'àudio només si el client l\'activa.',
          'Metadades de la trucada: data, hora, durada i resultat.'
        ] },
        { p: 'Els agents de veu s\'identifiquen com a assistents automàtics al començament de cada trucada. El client decideix els terminis de conservació i si es guarda l\'àudio. Aquestes dades es processen en servidors situats a la Unió Europea.' },

        { h2: 'Els teus drets' },
        { p: 'Pots exercir en qualsevol moment els drets d\'accés, rectificació, supressió, oposició, limitació del tractament i portabilitat, així com retirar el consentiment que ens hagis donat. Només cal que ens escriguis a {email} indicant quin dret vols exercir.' },
        { p: 'Si consideres que no hem atès correctament la teva sol·licitud, pots presentar una reclamació davant l\'Agència Espanyola de Protecció de Dades (www.aepd.es) o davant l\'Autoritat Catalana de Protecció de Dades (apdcat.gencat.cat).' },

        { h2: 'Seguretat' },
        { p: 'Apliquem mesures tècniques i organitzatives raonables per protegir les dades: xifratge de les comunicacions, control d\'accés per rol, minimització de les dades que recollim i revisió dels nostres proveïdors. Cap sistema és infal·lible, però ens comprometem a avisar-te sense dilació indeguda si es produeix una violació de seguretat que t\'afecti.' },

        { h2: 'Canvis en aquesta política' },
        { p: 'Si modifiquem aquesta política, actualitzarem la data del principi. Et recomanem revisar-la de tant en tant.' }
      ]
    },
    legal: {
      h1: 'Avís legal',
      updated: 'Última actualització: 25 d\'octubre de 2025',
      blocks: [
        { h2: 'Titular del lloc web' },
        { p: 'Aquest lloc web, accessible a través del domini {domain}, és titularitat de {legalName}, amb domicili a {city}, {country}, i adreça de contacte electrònica {email}.' },

        { h2: 'Objecte' },
        { p: 'Aquest lloc web té una finalitat informativa: presenta els serveis d\'agents de veu de Duodat i permet sol·licitar informació o una demostració a través d\'un formulari. L\'enviament del formulari no constitueix cap contracte ni cap obligació de prestació del servei.' },

        { h2: 'Estat del servei' },
        { p: 'Duodat es troba en fase de desenvolupament i de proves pilot. La informació d\'aquest lloc web descriu els serveis que oferim i les condicions previstes per al programa pilot. Les funcionalitats, els preus i els terminis indicats són orientatius i poden canviar; les condicions definitives seran les que es recullin en el contracte o pressupost signat amb cada client.' },

        { h2: 'Preus indicats' },
        { p: 'Els preus que apareixen en aquest lloc web són orientatius, estan expressats en euros i no inclouen l\'IVA ni altres impostos aplicables. El preu final de cada servei depèn del volum de trucades, de les integracions necessàries i de l\'abast acordat, i es confirma sempre per escrit en un pressupost.' },

        { h2: 'Propietat intel·lectual i industrial' },
        { p: 'Els continguts d\'aquest lloc web (textos, disseny, logotip, codi i elements gràfics) són propietat de {legalName} o s\'utilitzen amb l\'autorització corresponent, i estan protegits per la normativa de propietat intel·lectual. No se\'n permet la reproducció, la distribució ni la transformació sense autorització per escrit, tret dels usos permesos per la llei.' },

        { h2: 'Responsabilitat' },
        { p: 'Fem el possible per mantenir la informació d\'aquest lloc web actualitzada i sense errors, però no podem garantir que no n\'hi hagi. {legalName} no es responsabilitza dels danys derivats de l\'ús d\'aquest lloc web ni de les interrupcions del servei alienes al seu control. Els enllaços a llocs de tercers s\'ofereixen només per comoditat i no impliquen cap vinculació ni cap responsabilitat sobre els seus continguts.' },

        { h2: 'Limitacions del servei d\'agents de veu' },
        { p: 'Els agents de veu de Duodat no són un servei d\'emergències, de teleassistència sanitària ni d\'assistència mèdica. No diagnostiquen, no donen consells clínics i no substitueixen l\'atenció professional. En cas d\'emergència cal trucar al 112.' },

        { h2: 'Legislació aplicable' },
        { p: 'Aquest avís legal es regeix per la legislació espanyola. Per a qualsevol controvèrsia relativa a aquest lloc web, les parts se sotmeten als jutjats i tribunals que corresponguin segons la normativa aplicable.' }
      ]
    }
  }
};
