/* Spanish */
module.exports = {
  code: 'es',
  htmlLang: 'es',
  name: 'Español',
  nameShort: 'ES',
  ogLocale: 'es_ES',

  slugs: {
    home: '',
    wellbeing: 'llamadas-de-bienestar',
    realestate: 'inmobiliarias',
    confirmations: 'confirmacion-de-citas',
    afterhours: 'atencion-fuera-de-horario',
    contact: 'contacto',
    thanks: 'gracias',
    privacy: 'privacidad',
    legal: 'aviso-legal'
  },

  ui: {
    skip: 'Ir al contenido principal',
    menu: 'Menú',
    openMenu: 'Abrir el menú',
    closeMenu: 'Cerrar el menú',
    language: 'Idioma',
    changeLanguage: 'Cambiar de idioma',
    home: 'Inicio',
    backHome: 'Volver al inicio',
    allUseCases: 'Ver todos los casos de uso',
    learnMore: 'Cómo funciona',
    exampleCall: 'Ejemplo de llamada real',
    demoDisclaimer: 'Ejemplo ilustrativo de una conversación con el agente.',
    agent: 'Agente Duodat',
    person: 'Persona',
    callLive: 'En curso'
  },

  nav: {
    useCases: 'Casos de uso',
    how: 'Cómo funciona',
    pricing: 'Precios',
    faq: 'Preguntas',
    contact: 'Contacto',
    cta: 'Pide una demo'
  },

  meta: {
    home: {
      title: 'Duodat — Agentes de voz que llaman y responden por ti',
      description: 'Agentes telefónicos con IA que hacen llamadas de seguimiento a personas dependientes, confirman citas y atienden a tus clientes fuera de horario. En catalán, español e inglés.'
    },
    contact: {
      title: 'Pide una demo — Duodat',
      description: 'Cuéntanos tu caso y te preparamos una demostración con un agente de voz configurado para tu negocio. Respuesta en 24 h laborables.'
    },
    thanks: {
      title: 'Gracias — Duodat',
      description: 'Hemos recibido tu solicitud.'
    },
    privacy: {
      title: 'Política de privacidad — Duodat',
      description: 'Cómo tratamos los datos personales en duodat.com y en el servicio de agentes de voz.'
    },
    legal: {
      title: 'Aviso legal — Duodat',
      description: 'Información legal y condiciones de uso del sitio web duodat.com.'
    },
    notFound: {
      title: 'Página no encontrada — Duodat',
      description: 'La página que buscabas no existe.'
    }
  },

  home: {
    heroEyebrow: 'Agentes de voz con IA',
    heroTitle: 'Agentes de voz que llaman y responden por ti',
    heroLead: 'Duodat crea agentes telefónicos que hacen llamadas de seguimiento a personas dependientes, confirman citas y atienden a tus clientes cuando tú no estás. Hablan catalán, español e inglés, y te avisan de todo lo que pasa.',
    heroCtaPrimary: 'Pide una demo gratuita',
    heroCtaSecondary: 'Ver casos de uso',
    heroBadges: [
      { icon: 'globe', text: 'Catalán, español e inglés' },
      { icon: 'shield', text: 'Datos alojados en la UE' },
      { icon: 'plug', text: 'Sin centralita nueva' }
    ],
    heroNote: 'Estamos abriendo plazas para el programa piloto. Te contactamos en 24 h laborables.',

    demo: {
      who: 'Montserrat, 83 años',
      meta: 'Llamada de bienestar · hoy, 09:02 · 1 min 48 s',
      turns: [
        { s: 'agent', t: '¡Buenos días, Montserrat! Soy el asistente de Mireia. ¿Cómo ha ido la noche?' },
        { s: 'human', t: 'Bien, hija, he dormido bastante bien. Gracias por llamar.' },
        { s: 'agent', t: 'Me alegro mucho. ¿Se ha tomado la pastilla de la mañana?' },
        { s: 'human', t: 'Sí, con el desayuno.' },
        { s: 'agent', t: 'Perfecto. Avisaré a Mireia de que todo va bien. ¡Buen día!' }
      ],
      foot: 'Resumen enviado a Mireia por correo y SMS'
    },

    trust: [
      { icon: 'clock', text: 'Disponible 24 h, todos los días' },
      { icon: 'bell', text: 'Avisos por correo y SMS' },
      { icon: 'user', text: 'Pasa a una persona cuando hace falta' },
      { icon: 'lock', text: 'Conforme con el RGPD' }
    ],

    problemEyebrow: 'El problema',
    problemTitle: 'El teléfono es el cuello de botella de tu día',
    problemLead: 'Cada llamada que no se atiende o que no se hace tiene un coste: una visita perdida, una familia preocupada, un cliente que se va a la competencia.',
    problemItems: [
      {
        icon: 'phone-missed',
        title: 'Las llamadas se pierden fuera de horario',
        text: 'Quien llama a las 21 h y no obtiene respuesta no vuelve a llamar: llama al siguiente de la lista.'
      },
      {
        icon: 'repeat',
        title: 'Las tareas repetitivas queman al equipo',
        text: 'Confirmar citas, recordar visitas o hacer seguimientos ocupa horas de personal cualificado cada semana.'
      },
      {
        icon: 'heart',
        title: 'El cuidado diario no se puede delegar',
        text: 'Llamar cada día a un familiar dependiente es difícil de sostener, y no llamar genera angustia.'
      }
    ],

    howEyebrow: 'Cómo funciona',
    howTitle: 'En marcha en pocos días, no en meses',
    howLead: 'Nos cuentas lo que necesitas, nosotros configuramos el agente y lo probamos contigo antes de ponerlo en producción.',
    howSteps: [
      {
        title: 'Nos cuentas tu caso',
        text: 'Una conversación de 20 minutos para entender a quién hay que llamar o quién llama, qué hay que preguntar y qué debe pasar después.'
      },
      {
        title: 'Configuramos y probamos el agente',
        text: 'Preparamos el guion, la voz, el idioma y las reglas de escalado. Lo probamos juntos con llamadas reales hasta que suena como quieres.'
      },
      {
        title: 'El agente entra en servicio',
        text: 'Empieza a llamar o a atender. Recibirás el resumen de cada conversación y los avisos que hayas configurado.'
      }
    ],

    featuresEyebrow: 'Qué hace diferente a Duodat',
    featuresTitle: 'Pensado para negocios pequeños y medianos de aquí',
    featuresItems: [
      {
        icon: 'globe',
        title: 'Catalán de verdad',
        text: 'El agente entiende y habla catalán con naturalidad, y cambia a español o inglés si quien llama lo hace.'
      },
      {
        icon: 'plug',
        title: 'Funciona con tu teléfono',
        text: 'Mantienes el número actual. Solo hace falta un desvío de llamadas, sin comprar equipos ni cambiar de operador.'
      },
      {
        icon: 'calendar',
        title: 'Se integra con tu agenda',
        text: 'Google Calendar, Outlook o tu programa de citas. Si no se puede conectar, recibirás las peticiones por correo.'
      },
      {
        icon: 'user',
        title: 'Nunca deja a nadie colgado',
        text: 'Si la conversación se complica o alguien pide hablar con una persona, el agente pasa la llamada o abre un aviso urgente.'
      },
      {
        icon: 'file-text',
        title: 'Resumen de cada llamada',
        text: 'Transcripción, resumen y resultado de cada conversación, en tu correo o en tu panel. Sin sorpresas.'
      },
      {
        icon: 'shield',
        title: 'Privacidad desde el diseño',
        text: 'Datos alojados en la Unión Europea, contrato de encargado del tratamiento y solo los datos que hacen falta.'
      }
    ],

    useCasesEyebrow: 'Casos de uso',
    useCasesTitle: 'Cuatro maneras de empezar',
    useCasesLead: 'Cada caso de uso tiene su propio guion, sus reglas y sus avisos. Elige el que más se parezca al tuyo y mira cómo funciona.',

    trustEyebrow: 'Confianza y privacidad',
    trustTitle: 'Un agente que habla en tu nombre tiene que ser transparente',
    trustLead: 'No queremos esconder que es un asistente automático: queremos que la gente lo encuentre útil y se quede tranquila.',
    trustItems: [
      {
        title: 'El agente se identifica siempre',
        text: 'Al empezar cada llamada dice quién es y de parte de quién llama. Sin engaños ni voces que suplanten a nadie.'
      },
      {
        title: 'Datos en la Unión Europea',
        text: 'Los datos de las llamadas se procesan y se guardan en servidores de la UE, con cifrado en tránsito y en reposo.'
      },
      {
        title: 'Tú decides qué se guarda',
        text: 'Puedes activar o desactivar la grabación de audio y fijar el tiempo de conservación de transcripciones y resúmenes.'
      },
      {
        title: 'Salida a una persona siempre disponible',
        text: 'Cualquiera puede pedir hablar con alguien del equipo, y el agente lo facilita de inmediato.'
      },
      {
        title: 'Contrato de encargado del tratamiento',
        text: 'Firmamos el acuerdo que exige el RGPD para tratar datos personales por tu cuenta, con el detalle de subencargados.'
      },
      {
        title: 'Nada de decisiones clínicas',
        text: 'El agente recoge información y avisa. No diagnostica, no da consejos médicos ni sustituye a los servicios de emergencia.'
      }
    ],

    pricingEyebrow: 'Precios',
    pricingTitle: 'Precios orientativos del programa piloto',
    pricingLead: 'Estamos empezando y queremos cerrar los primeros clientes con condiciones de lanzamiento. Estos importes son una referencia: el presupuesto final depende del volumen de llamadas y de las integraciones.',
    pricingPlans: [
      {
        name: 'Bienestar',
        audience: 'Familias y personas cuidadoras',
        amount: 19,
        unit: '/ mes por persona',
        desc: 'Una llamada diaria de seguimiento con aviso a los familiares.',
        features: [
          'Una llamada programada cada día',
          'Aviso por correo y SMS a dos contactos',
          'Alerta inmediata si no contesta',
          'Guion adaptado a la persona'
        ],
        cta: 'Quiero probarlo',
        useCase: 'wellbeing'
      },
      {
        name: 'Negocio',
        audience: 'Clínicas, tiendas e inmobiliarias',
        amount: 99,
        unit: '/ mes',
        desc: 'Un agente que atiende o llama por tu negocio, con agenda conectada.',
        features: [
          'Hasta 200 llamadas al mes',
          'Atención fuera de horario y confirmaciones',
          'Citas en tu agenda',
          'Resumen de cada llamada por correo',
          'Escalado a una persona del equipo'
        ],
        featured: true,
        flag: 'El más pedido',
        cta: 'Pide presupuesto',
        useCase: 'confirmations'
      },
      {
        name: 'Volumen alto',
        audience: 'Integraciones y multiagente',
        amountText: 'A medida',
        unit: '',
        desc: 'Varios agentes, más idiomas y conexión con tu CRM o programa de gestión.',
        features: [
          'Volumen de llamadas sin límite fijo',
          'Integración con tu CRM o ERP',
          'Varios agentes y números',
          'Informes y acuerdo de nivel de servicio'
        ],
        cta: 'Hablemos',
        useCase: 'other'
      }
    ],
    pricingNote: 'Importes en euros, sin IVA. Sin permanencia durante el piloto.',

    faqEyebrow: 'Preguntas frecuentes',
    faqTitle: 'Lo que nos pregunta todo el mundo',
    faq: [
      {
        q: '¿La gente se da cuenta de que habla con una máquina?',
        a: 'Normalmente sí, y no lo escondemos: el agente se identifica como asistente automático al principio de la llamada. Lo que buscamos no es engañar a nadie, sino que la conversación sea clara, educada y útil. En las pruebas, la mayoría de personas lo aceptan bien cuando saben de parte de quién se llama.'
      },
      {
        q: '¿Qué pasa si el agente no entiende algo?',
        a: 'Primero lo vuelve a preguntar de otra manera. Si sigue sin entender, o si la persona pide hablar con alguien, pasa la llamada a un teléfono que tú nos indiques o genera un aviso para devolver la llamada. El agente no se inventa respuestas.'
      },
      {
        q: '¿Qué idiomas habla?',
        a: 'Catalán, español e inglés. Detecta en qué idioma le hablan y responde en ese idioma. Si necesitas otro, dínoslo y lo valoramos.'
      },
      {
        q: '¿Tengo que cambiar de teléfono o de operador?',
        a: 'No. Puedes mantener tu número y desviar las llamadas al agente cuando cierras, o darle un número nuevo para las llamadas salientes. No hace falta comprar equipamiento.'
      },
      {
        q: '¿Cuánto tarda en estar en marcha?',
        a: 'Para los casos estándar, pocos días desde la conversación inicial. Las integraciones con programas de gestión pueden necesitar más tiempo, y te lo diremos antes de empezar.'
      },
      {
        q: '¿Quién puede escuchar las llamadas?',
        a: 'Solo tú y las personas que autorices. El equipo de Duodat accede únicamente para resolver incidencias y bajo contrato de confidencialidad. Puedes desactivar la grabación de audio y quedarte solo con el resumen.'
      },
      {
        q: '¿Sirve para emergencias?',
        a: 'No. Duodat no es un servicio de emergencias ni de teleasistencia sanitaria. Si el agente detecta una situación preocupante, avisa de inmediato a los contactos que hayas configurado para que puedan actuar, pero ante una emergencia hay que llamar al 112.'
      },
      {
        q: '¿Cuánto cuesta?',
        a: 'Durante el piloto trabajamos con precios de lanzamiento desde 19 € al mes para familias y desde 99 € al mes para negocios. El presupuesto final depende del volumen de llamadas y de las integraciones que necesites.'
      }
    ],

    finalEyebrow: 'Programa piloto',
    finalTitle: 'Cuéntanos tu caso y te preparamos una demo',
    finalLead: 'Queremos entender cómo son tus llamadas antes de venderte nada. Rellena el formulario y te contactamos en 24 h laborables con una propuesta concreta o con una demostración en vivo.',
    finalPoints: [
      'Demostración con un agente configurado para tu caso',
      'Sin compromiso ni tarjeta de crédito',
      'Condiciones de lanzamiento para los primeros clientes',
      'Si no te sirve, te lo diremos claramente'
    ]
  },

  useCaseSection: {
    problem: 'Dónde duele',
    solution: 'Cómo lo resuelve Duodat',
    includes: 'Qué incluye',
    notFor: 'Qué no hace',
    faq: 'Preguntas sobre este caso',
    other: 'Otros casos de uso'
  },

  useCases: {
    wellbeing: {
      id: 'wellbeing',
      icon: 'heart',
      tag: 'Familias, residencias y servicios sociales',
      navTitle: 'Llamadas de bienestar',
      navDesc: 'Llamadas diarias a personas mayores o dependientes, con aviso a los familiares.',
      cardTitle: 'Llamadas de bienestar',
      cardText: 'Una llamada amable cada día a una persona mayor o dependiente, con confirmación a los familiares por correo o SMS.',
      cardBullets: [
        'Llamada diaria a la hora que quieras',
        'Aviso automático si no contesta',
        'Resumen por correo y SMS a la familia'
      ],
      metaTitle: 'Llamadas diarias de bienestar a personas mayores — Duodat',
      metaDescription: 'Un agente de voz llama cada día a la persona que cuidas, comprueba que está bien y avisa a la familia por correo o SMS. En catalán, español e inglés.',
      h1: 'Una llamada cada día para saber que todo va bien',
      lead: 'Duodat llama a la persona que cuidas a la hora acordada, conversa con ella unos minutos y te envía el resumen. Si no contesta o algo no cuadra, te avisa en seguida.',
      cta: 'Quiero probarlo con mi familiar',

      demo: {
        who: 'Juan, 79 años',
        meta: 'Llamada de bienestar · hoy, 10:00 · 2 min 06 s',
        turns: [
          { s: 'agent', t: 'Buenos días, Juan. Soy el asistente de su hija Ana. Llamo para ver cómo se encuentra hoy.' },
          { s: 'human', t: 'Pues regular, tengo un poco de dolor de espalda.' },
          { s: 'agent', t: 'Vaya, lo siento. ¿Es un dolor nuevo o ya lo tenía días atrás?' },
          { s: 'human', t: 'Desde ayer por la noche.' },
          { s: 'agent', t: 'Entendido, lo apunto y se lo haré saber a Ana para que puedan hablar. ¿Ha desayunado y se ha tomado la medicación?' },
          { s: 'human', t: 'Sí, todo hecho.' },
          { s: 'agent', t: 'Perfecto, Juan. Que tenga un buen día, mañana le vuelvo a llamar.' }
        ],
        foot: 'Aviso enviado a Ana: «Dolor de espalda desde ayer» · Medicación: sí'
      },

      problemIntro: 'Cuidar a distancia significa vivir con una pregunta constante en la cabeza: ¿hoy está bien?',
      problemItems: [
        'Llamar cada día a la misma hora es difícil de mantener cuando trabajas, viajas o cuidas de otras personas.',
        'Cuando no contesta el teléfono, la cabeza se te va a lo peor y no sabes si hay que moverse o esperar.',
        'Los servicios de teleasistencia clásicos reaccionan cuando ya ha pasado algo, pero no llaman para hablar.',
        'Los hermanos y familiares se desinforman entre ellos: quién llamó el último, qué dijo, cómo estaba.'
      ],

      solutionIntro: 'Un agente amable, puntual y constante, que siempre te cuenta cómo ha ido.',
      solutionItems: [
        {
          icon: 'clock',
          title: 'Siempre a la hora acordada',
          text: 'Una o más llamadas al día, los días que tú elijas. Si no contesta, vuelve a probar a los pocos minutos las veces que hayáis pactado.'
        },
        {
          icon: 'message',
          title: 'Una conversación, no un cuestionario',
          text: 'El agente pregunta cómo ha ido la noche, si ha comido, si se ha tomado la medicación y cómo está de ánimo, con un tono natural y sin prisas.'
        },
        {
          icon: 'bell',
          title: 'Avisos claros a quien toca',
          text: 'Resumen diario por correo o SMS a los contactos que indiques, y aviso inmediato si no contesta o si dice algo preocupante.'
        },
        {
          icon: 'users',
          title: 'Toda la familia informada',
          text: 'Los mismos avisos pueden llegar a varios hermanos o cuidadores, así nadie tiene que hacer de puente.'
        },
        {
          icon: 'sliders',
          title: 'Adaptado a la persona',
          text: 'Nos dices cómo se llama, cómo le gusta que la traten, qué medicación toma y qué es importante preguntarle. El agente lo tiene en cuenta.'
        }
      ],

      includesItems: [
        'Configuración del guion contigo, por teléfono o videollamada',
        'Llamada diaria programada a la hora que decidáis',
        'Reintentos automáticos si no contesta',
        'Resumen de cada llamada por correo electrónico',
        'Aviso por SMS a los contactos de emergencia',
        'Cambios de guion y de horario sin coste durante el piloto'
      ],

      notForItems: [
        'No es un servicio de emergencias: ante una urgencia hay que llamar al 112.',
        'No es teleasistencia con botón de pánico ni detección de caídas.',
        'No da consejos médicos ni valora síntomas: recoge lo que dice la persona y avisa.'
      ],

      faq: [
        {
          q: '¿Y si mi familiar no quiere hablar con una máquina?',
          a: 'Es lo primero que hay que probar, y por eso hacemos una demo con vosotros antes de empezar. El agente se presenta diciendo de parte de quién llama, algo que ayuda mucho. Hay personas a las que no acaba de convencer, y en ese caso te lo diremos sin problema.'
        },
        {
          q: '¿Qué pasa si no contesta la llamada?',
          a: 'El agente vuelve a probar a los pocos minutos, tantas veces como hayáis acordado. Si sigue sin contestar, recibirás un aviso inmediato por SMS y correo indicando la hora de los intentos, para que puedas actuar tú.'
        },
        {
          q: '¿Puedo cambiar las preguntas?',
          a: 'Sí. El guion es tuyo: puedes añadir preguntas sobre medicación concreta, sobre si ha venido la cuidadora o sobre cualquier cosa que quieras seguir. Durante el piloto los cambios no tienen coste.'
        },
        {
          q: '¿Se graban las llamadas?',
          a: 'Solo si lo autorizáis. Por defecto guardamos la transcripción y el resumen, no el audio. Tanto la persona que recibe la llamada como tú podéis pedir que no se guarde nada más allá del aviso.'
        }
      ]
    },

    realestate: {
      id: 'realestate',
      icon: 'home',
      tag: 'Agencias inmobiliarias',
      navTitle: 'Inmobiliarias',
      navDesc: 'Atiende a los interesados, fíltralos con tu inventario y llena la agenda de visitas.',
      cardTitle: 'Agente para inmobiliarias',
      cardText: 'Atiende a quien llama por un piso, lo cruza con tu inventario y cierra la visita en la agenda sin que nadie tenga que descolgar.',
      cardBullets: [
        'Consulta el inventario en tiempo real',
        'Cualifica al interesado antes de la visita',
        'Programa visitas o deja la petición'
      ],
      metaTitle: 'Agente de voz para inmobiliarias: atiende llamadas y programa visitas — Duodat',
      metaDescription: 'Un agente telefónico que atiende a los interesados, los cruza con tu inventario de pisos, los cualifica y programa la visita en tu agenda. Catalán, español e inglés.',
      h1: 'Ninguna llamada de un comprador se vuelve a perder',
      lead: 'El agente atiende a quien llama por el cartel o por el anuncio, le explica los inmuebles que encajan con lo que busca, lo cualifica y cierra la visita en tu agenda. Tú recibes el contacto ya filtrado.',
      cta: 'Quiero un agente para mi agencia',

      demo: {
        who: 'Inmobiliaria Vallès',
        meta: 'Llamada entrante · sábado, 11:34 · 2 min 51 s',
        turns: [
          { s: 'agent', t: 'Inmobiliaria Vallès, buenos días. ¿En qué le puedo ayudar?' },
          { s: 'human', t: 'Llamo por el piso del cartel de la calle Girona, el de 230.000.' },
          { s: 'agent', t: 'Sí, el de 85 metros con tres habitaciones y balcón. Está disponible. ¿Busca para vivir o como inversión?' },
          { s: 'human', t: 'Para vivir. Necesitaría hipoteca.' },
          { s: 'agent', t: 'Perfecto. Tenemos visitas el martes a las 17 h y el jueves a las 10 h. ¿Cuál le va mejor?' },
          { s: 'human', t: 'El martes a las cinco.' },
          { s: 'agent', t: 'Hecho. ¿Me dice su nombre y un correo para enviarle la confirmación y la ficha del piso?' }
        ],
        foot: 'Visita creada en la agenda · Ficha enviada · Lead cualificado: hipoteca'
      },

      problemIntro: 'Las llamadas de los compradores llegan cuando el equipo no las puede coger.',
      problemItems: [
        'Los interesados llaman el fin de semana y a última hora, justo cuando no hay nadie en la oficina.',
        'Quien no obtiene respuesta llama a la agencia siguiente: el lead se pierde en minutos, no en días.',
        'El equipo repite veinte veces al día los mismos datos de metros, precio y disponibilidad.',
        'Se programan visitas con gente que no ha dicho qué busca ni si tiene financiación.'
      ],

      solutionIntro: 'Un agente que conoce el inventario y sabe qué tiene que preguntar.',
      solutionItems: [
        {
          icon: 'search',
          title: 'Conoce tu inventario',
          text: 'Cargamos tus inmuebles con referencia, precio, metros, habitaciones y zona. El agente responde con datos reales y actualizados, y no promete nada que no exista.'
        },
        {
          icon: 'filter',
          title: 'Cualifica antes de la visita',
          text: 'Presupuesto, zona, número de habitaciones, si necesita hipoteca y cuándo quiere mudarse. Llegas a la visita sabiendo con quién hablas.'
        },
        {
          icon: 'calendar',
          title: 'Cierra la visita en la agenda',
          text: 'Propone los huecos libres de tu agenda y crea la cita. Si prefieres validarlo tú, deja la petición pendiente de confirmación.'
        },
        {
          icon: 'clock',
          title: 'Atiende cuando tú no puedes',
          text: 'Fuera de horario, los fines de semana o cuando todas las líneas están ocupadas. También puede atender solo el desbordamiento.'
        },
        {
          icon: 'mail',
          title: 'Envía la ficha del inmueble',
          text: 'Después de la llamada, el interesado recibe por correo la ficha del piso y la confirmación de la visita con la dirección.'
        }
      ],

      includesItems: [
        'Carga inicial de tu inventario de inmuebles',
        'Guion de cualificación adaptado a tu agencia',
        'Atención de llamadas entrantes en tres idiomas',
        'Creación de visitas en Google Calendar u Outlook',
        'Resumen de cada llamada y datos del lead por correo',
        'Transferencia a un comercial cuando la llamada lo pide'
      ],

      notForItems: [
        'No negocia precios ni condiciones: eso queda para el equipo comercial.',
        'No firma nada ni recoge pagos ni señales por teléfono.',
        'No sustituye la visita presencial ni el asesoramiento de tu equipo.'
      ],

      faq: [
        {
          q: '¿Cómo mantenéis el inventario actualizado?',
          a: 'Podemos leerlo de una hoja de cálculo, de un fichero que genere tu CRM o de una conexión directa si tu programa lo permite. Como mínimo, una actualización diaria; si hay conexión, en tiempo real.'
        },
        {
          q: '¿Puede atender varias llamadas a la vez?',
          a: 'Sí. A diferencia de una persona, el agente atiende varias llamadas en paralelo, de modo que nadie oye la señal de ocupado en una campaña o un fin de semana con mucho movimiento.'
        },
        {
          q: '¿Y si el interesado quiere hablar con un comercial?',
          a: 'El agente pasa la llamada al número que nos indiques en horario de oficina, o recoge el contacto y la mejor franja para devolver la llamada si no hay nadie disponible.'
        },
        {
          q: '¿Funciona también para alquiler?',
          a: 'Sí. Los criterios de cualificación cambian (nómina, avales, fecha de entrada) y el guion se adapta. Si trabajas los dos mercados, el agente pregunta primero qué busca la persona.'
        }
      ]
    },

    confirmations: {
      id: 'confirmations',
      icon: 'check-circle',
      tag: 'Clínicas, dentistas, ópticas y ortopedias',
      navTitle: 'Confirmación de citas',
      navDesc: 'Llamadas de confirmación y recordatorio para reducir las ausencias.',
      cardTitle: 'Confirmación de citas',
      cardText: 'El agente llama a los pacientes antes de la visita, confirma, reprograma o anula, y actualiza tu agenda.',
      cardBullets: [
        'Confirma, cambia o anula por teléfono',
        'Libera huecos con suficiente antelación',
        'Sincroniza con la agenda'
      ],
      metaTitle: 'Llamadas de confirmación de citas para clínicas — Duodat',
      metaDescription: 'Un agente de voz llama a tus pacientes para confirmar, reprogramar o anular la cita, y actualiza la agenda. Menos ausencias y menos trabajo en el mostrador.',
      h1: 'Menos ausencias, sin dedicarle ni una llamada',
      lead: 'El agente llama a los pacientes el día antes, confirma la visita, la mueve si no les va bien o la anula. Tú recibes la agenda actualizada y el mostrador se queda libre para atender a la gente que tiene delante.',
      cta: 'Quiero reducir las ausencias',

      demo: {
        who: 'Clínica Dental San Pedro',
        meta: 'Llamada saliente · ayer, 18:12 · 1 min 12 s',
        turns: [
          { s: 'agent', t: 'Buenas tardes, ¿hablo con la señora Ríos? Llamo de la Clínica Dental San Pedro para recordarle la cita de mañana a las 16:30 con el doctor Soler.' },
          { s: 'human', t: 'Ay, mañana no puedo. Me ha salido una reunión.' },
          { s: 'agent', t: 'Ningún problema, lo cambiamos. Tengo el jueves a las 11:00 o el viernes a las 17:00.' },
          { s: 'human', t: 'El viernes a las cinco me va bien.' },
          { s: 'agent', t: 'Perfecto, viernes a las 17:00 con el doctor Soler. Le envío la confirmación por SMS. ¡Buenas tardes!' }
        ],
        foot: 'Cita movida en la agenda · Hueco de mañana liberado · SMS enviado'
      },

      problemIntro: 'Cada hora vacía en la agenda es un profesional pagado sin facturar.',
      problemItems: [
        'Los pacientes no se presentan y el hueco se descubre demasiado tarde para llenarlo.',
        'Los SMS y los correos de recordatorio se ignoran: nadie responde y nadie reprograma.',
        'El mostrador pasa la mañana al teléfono en lugar de atender a la gente que hace cola.',
        'Las listas de espera no avanzan porque los huecos se liberan el mismo día.'
      ],

      solutionIntro: 'Una llamada de verdad, con alguien al otro lado que puede decir que no le va bien.',
      solutionItems: [
        {
          icon: 'phone',
          title: 'Llamada, no solo un SMS',
          text: 'Una llamada consigue respuesta inmediata y permite resolver el cambio en el momento, en lugar de esperar a que alguien conteste un mensaje.'
        },
        {
          icon: 'calendar',
          title: 'Reprograma en la misma llamada',
          text: 'Si el paciente no puede venir, el agente le ofrece los huecos reales de la agenda y mueve la cita. El hueco queda libre con días de antelación.'
        },
        {
          icon: 'refresh',
          title: 'Llena los huecos que se liberan',
          text: 'Con tu lista de espera, el agente puede llamar para ofrecer una cita que acaba de quedarse libre.'
        },
        {
          icon: 'list',
          title: 'Recordatorios de preparación',
          text: 'Si la visita requiere ayuno, traer informes o venir antes, el agente lo recuerda y lo confirma.'
        },
        {
          icon: 'bar-chart',
          title: 'Sabes qué ha pasado con cada cita',
          text: 'Confirmada, movida, anulada o sin respuesta. Con la hora de la llamada y el resumen de la conversación.'
        }
      ],

      includesItems: [
        'Conexión con tu agenda o carga diaria de citas',
        'Llamadas de confirmación con la antelación que decidas',
        'Reprogramación y anulación durante la llamada',
        'Confirmación por SMS o correo al paciente',
        'Reintentos en franjas diferentes si no contesta',
        'Informe diario del estado de todas las citas'
      ],

      notForItems: [
        'No da resultados de pruebas ni información clínica por teléfono.',
        'No hace triaje ni valora la urgencia de un síntoma.',
        'No vende tratamientos ni hace promociones si no lo pides expresamente.'
      ],

      faq: [
        {
          q: '¿Con qué programas de agenda os conectáis?',
          a: 'Directamente con Google Calendar y Microsoft Outlook. Con programas de gestión de clínicas, trabajamos por API cuando la tienen, o con un intercambio de ficheros diario cuando no. En la primera conversación lo revisamos.'
        },
        {
          q: '¿Esto cumple la normativa de protección de datos sanitarios?',
          a: 'El agente solo maneja los datos mínimos para gestionar la cita: nombre, teléfono, día, hora y profesional. No trata diagnósticos ni historias clínicas. Firmamos el contrato de encargado del tratamiento y los datos se procesan en la UE.'
        },
        {
          q: '¿Cuántas veces llama si no contestan?',
          a: 'Las que decidas, en franjas horarias diferentes para aumentar las posibilidades. Si al final no hay respuesta, la cita queda marcada como no confirmada en el informe.'
        },
        {
          q: '¿Puede llamar en nombre de varios profesionales?',
          a: 'Sí. El agente dice el nombre del profesional y el servicio de cada cita, y puede gestionar varias agendas dentro del mismo centro.'
        }
      ]
    },

    afterhours: {
      id: 'afterhours',
      icon: 'moon',
      tag: 'Clínicas, tiendas sanitarias y servicios',
      navTitle: 'Atención fuera de horario',
      navDesc: 'Un agente que atiende y da cita cuando tu equipo ya ha cerrado.',
      cardTitle: 'Atención fuera de horario',
      cardText: 'Cuando cierras, el agente sigue atendiendo: da cita, responde las preguntas habituales y te avisa de lo que es urgente.',
      cardBullets: [
        'Da citas por la noche y los fines de semana',
        'Responde horarios, dirección y precios',
        'Aviso inmediato de lo urgente'
      ],
      metaTitle: 'Atención telefónica fuera de horario con citas automáticas — Duodat',
      metaDescription: 'Un agente de voz atiende el teléfono de tu centro cuando está cerrado: da cita, responde las preguntas habituales y te avisa de lo que no puede esperar.',
      h1: 'Tu teléfono sigue atendiendo cuando tú cierras',
      lead: 'Las llamadas que llegan de noche, al mediodía o el fin de semana no se pierden: el agente las atiende, da cita en tu agenda, responde las preguntas de siempre y te deja un resumen para cuando vuelvas.',
      cta: 'Quiero atender fuera de horario',

      demo: {
        who: 'Ortopedia Figueres',
        meta: 'Llamada entrante · domingo, 20:47 · 1 min 39 s',
        turns: [
          { s: 'agent', t: 'Ortopedia Figueres, buenas noches. Ahora estamos cerrados, pero puedo ayudarle yo. ¿Qué necesita?' },
          { s: 'human', t: 'Quería saber si tienen muletas y cuánto cuestan.' },
          { s: 'agent', t: 'Sí, tenemos de alquiler y de venta. El alquiler sale por 15 euros la semana. Si quiere, le reservo una visita para mañana por la mañana.' },
          { s: 'human', t: 'Sí, mejor. ¿A qué hora abren?' },
          { s: 'agent', t: 'A las 9:30. Tiene libre a las 10:00 o a las 11:15.' },
          { s: 'human', t: 'A las diez.' },
          { s: 'agent', t: 'Reservado a las 10:00. ¿Me dice su nombre y un teléfono de contacto?' }
        ],
        foot: 'Cita creada para mañana 10:00 · Resumen enviado al centro'
      },

      problemIntro: 'La mitad de las llamadas llegan cuando no hay nadie para atenderlas.',
      problemItems: [
        'El contestador no convierte: la gente cuelga y busca otra opción.',
        'Las preguntas de siempre (horario, dirección, si tenéis tal producto) se quedan sin respuesta.',
        'Las urgencias reales se mezclan con consultas que podían esperar, y no te enteras hasta el día siguiente.',
        'El lunes por la mañana el teléfono no para porque se acumula todo el fin de semana.'
      ],

      solutionIntro: 'Un agente de guardia que sabe lo que tiene que saber y te pasa lo que te tiene que pasar.',
      solutionItems: [
        {
          icon: 'calendar',
          title: 'Da cita a cualquier hora',
          text: 'Consulta los huecos reales de tu agenda y crea la cita, o deja la petición pendiente de validar por la mañana si lo prefieres.'
        },
        {
          icon: 'help-circle',
          title: 'Responde las preguntas habituales',
          text: 'Horarios, dirección, cómo llegar, aparcamiento, mutuas aceptadas, precios de referencia y servicios disponibles. Lo preparamos contigo.'
        },
        {
          icon: 'alert',
          title: 'Distingue lo que es urgente',
          text: 'Con las reglas que fijamos juntos, el agente detecta las llamadas que no pueden esperar y te avisa por SMS o pasa la llamada al teléfono de guardia.'
        },
        {
          icon: 'inbox',
          title: 'Te deja el trabajo hecho',
          text: 'Cada mañana encuentras el listado de llamadas con resumen, citas creadas y las cosas que requieren tu atención.'
        },
        {
          icon: 'globe',
          title: 'Atiende en tres idiomas',
          text: 'Catalán, español e inglés. Útil en zonas turísticas y en centros con pacientes internacionales.'
        }
      ],

      includesItems: [
        'Desvío de llamadas fuera del horario que fijes',
        'Base de respuestas de tu centro preparada contigo',
        'Creación de citas en la agenda o peticiones para validar',
        'Reglas de urgencia y teléfono de guardia',
        'Resumen diario de llamadas por correo',
        'Mensaje de bienvenida con tu identidad'
      ],

      notForItems: [
        'No atiende emergencias médicas: en esos casos indica llamar al 112.',
        'No da consejos clínicos ni diagnostica nada.',
        'No cobra, no gestiona pagos ni pide datos bancarios.'
      ],

      faq: [
        {
          q: '¿Cómo se desvían las llamadas?',
          a: 'Con un desvío condicional en tu operador o en tu centralita: fuera del horario que fijes, las llamadas van al agente. Mantienes tu número y te ayudamos a configurarlo.'
        },
        {
          q: '¿Puede atender también en horario de oficina?',
          a: 'Sí. Hay centros que lo usan solo fuera de horario y otros que lo ponen a atender cuando todas las líneas están ocupadas, así nadie espera.'
        },
        {
          q: '¿Cómo decidís qué es urgente?',
          a: 'Lo definimos juntos a partir de tus criterios, y lo ajustamos durante las primeras semanas con las llamadas reales. El agente siempre puede pasar la llamada si la persona insiste en hablar con alguien.'
        },
        {
          q: '¿Qué oye quien llama?',
          a: 'La voz y el nombre que tú elijas, con un mensaje de identificación que dice que es el asistente del centro. Puedes escoger el tono: cercano o más formal.'
        }
      ]
    }
  },

  form: {
    title: 'Pide una demo',
    intro: 'Rellena el formulario y te contactamos en 24 h laborables. Sin compromiso.',
    name: 'Nombre y apellidos',
    namePlaceholder: '¿Cómo te llamas?',
    email: 'Correo electrónico',
    emailPlaceholder: 'nombre@empresa.com',
    phone: 'Teléfono',
    phonePlaceholder: '600 000 000',
    phoneHint: 'Opcional, pero nos ayuda a llamarte antes.',
    organization: 'Empresa u organización',
    organizationPlaceholder: 'Nombre del negocio (o «particular»)',
    useCase: 'Qué te interesa',
    useCaseOptions: [
      { value: '', label: 'Elige una opción' },
      { value: 'wellbeing', label: 'Llamadas de bienestar a personas dependientes' },
      { value: 'realestate', label: 'Agente para inmobiliaria' },
      { value: 'confirmations', label: 'Confirmación de citas' },
      { value: 'afterhours', label: 'Atención fuera de horario' },
      { value: 'other', label: 'Otra cosa' }
    ],
    volume: 'Volumen aproximado de llamadas',
    volumeOptions: [
      { value: '', label: 'Elige una opción' },
      { value: '1-30', label: 'Menos de 30 al mes' },
      { value: '30-200', label: 'Entre 30 y 200 al mes' },
      { value: '200-1000', label: 'Entre 200 y 1.000 al mes' },
      { value: '1000+', label: 'Más de 1.000 al mes' },
      { value: 'unknown', label: 'Todavía no lo sé' }
    ],
    message: 'Cuéntanos tu caso',
    messagePlaceholder: 'A quién hay que llamar o quién te llama, en qué idioma, en qué horario y qué debe pasar después de la llamada.',
    consent: 'Acepto que Duodat trate mis datos para responder a esta solicitud, tal como explica la <a href="{privacy}">política de privacidad</a>.',
    submit: 'Enviar la solicitud',
    note: 'Respuesta en 24 h laborables. No compartimos tus datos con nadie.',
    required: 'obligatorio',
    okTitle: 'Solicitud enviada.',
    okText: '¡Gracias! Te contactamos en 24 h laborables.',
    errRequired: 'Este campo es obligatorio.',
    errEmail: 'Escribe una dirección de correo válida.',
    errSend: 'No hemos podido enviar el formulario. Inténtalo de nuevo o escríbenos a <a href="mailto:{email}">{email}</a>.',
    errNoKey: 'El formulario todavía no está conectado. Escríbenos directamente a <a href="mailto:{email}">{email}</a> y te atendemos igual.',
    subject: 'Nueva solicitud desde duodat.com'
  },

  contact: {
    eyebrow: 'Contacto',
    h1: 'Hablemos de tu caso',
    lead: 'Queremos entender cómo son tus llamadas antes de proponerte nada. Escríbenos y te contactamos en 24 h laborables.',
    sideTitle: 'Qué pasa cuando nos escribes',
    sideSteps: [
      { title: 'Te contactamos en 24 h laborables', text: 'Por correo o por teléfono, como tú prefieras.' },
      { title: 'Conversación de 20 minutos', text: 'Entendemos tu caso y te decimos si Duodat encaja o no.' },
      { title: 'Demo con tu guion', text: 'Si tiene sentido, preparamos un agente configurado para tu caso y lo probamos juntos.' }
    ],
    directTitle: '¿Prefieres escribir directamente?',
    directText: 'Escríbenos a {email} y te atendemos igual. Si nos dices en qué horario te va bien que te llamemos, mejor.'
  },

  thanks: {
    eyebrow: 'Solicitud recibida',
    h1: '¡Gracias, lo tenemos!',
    lead: 'Hemos recibido tu solicitud y te contactamos en 24 h laborables.',
    nextTitle: 'Mientras tanto',
    nextText: 'Si quieres adelantar trabajo, piensa en estas tres cosas: a quién hay que llamar (o quién te llama), en qué horario, y qué debe pasar justo después de la llamada. Son las tres preguntas con las que empezaremos.',
    backBtn: 'Volver al inicio',
    casesBtn: 'Ver los casos de uso',
    mailNote: '¿No te ha llegado ninguna confirmación? Escríbenos a {email}.'
  },

  notFound: {
    h1: 'Esta página no existe',
    lead: 'Puede que el enlace sea antiguo o que haya un error en la dirección. Desde el inicio encontrarás todo lo que ofrecemos.',
    backBtn: 'Volver al inicio'
  },

  footer: {
    about: 'Duodat crea agentes de voz con inteligencia artificial para negocios y familias: llamadas de seguimiento, confirmación de citas y atención telefónica fuera de horario, en catalán, español e inglés.',
    colUseCases: 'Casos de uso',
    colCompany: 'Duodat',
    colLegal: 'Legal',
    rights: 'Todos los derechos reservados.',
    madeIn: 'Hecho en Barcelona',
    statusPilot: 'Servicio en fase piloto'
  },

  legalPages: {
    privacy: {
      h1: 'Política de privacidad',
      updated: 'Última actualización: 25 de octubre de 2025',
      blocks: [
        { h2: 'Quién es el responsable del tratamiento' },
        { p: 'El responsable del tratamiento de los datos recogidos en este sitio web es {legalName} ({domain}), con dirección de contacto en {city}, {country}. Puedes contactarnos para cualquier cuestión relativa a la privacidad en {email}.' },

        { h2: 'Qué datos recogemos' },
        { p: 'En este sitio web solo recogemos los datos que nos facilitas voluntariamente a través del formulario de contacto:' },
        { ul: [
          'Nombre y apellidos.',
          'Dirección de correo electrónico.',
          'Teléfono, si decides facilitarlo.',
          'Empresa u organización, si decides facilitarla.',
          'El caso de uso que te interesa, el volumen de llamadas aproximado y el mensaje que escribes.',
          'La dirección de la página desde la que has enviado el formulario y el idioma de navegación.'
        ] },
        { p: 'No usamos cookies de seguimiento ni herramientas de analítica que te perfilen. No hay publicidad ni rastreadores de terceros en este sitio web.' },

        { h2: 'Para qué los usamos' },
        { table: {
          head: ['Finalidad', 'Base jurídica', 'Conservación'],
          rows: [
            ['Responder a tu solicitud de información o de demostración', 'Tu consentimiento y el interés legítimo en atender una consulta comercial', 'Hasta 24 meses desde el último contacto'],
            ['Preparar un presupuesto o una prueba piloto', 'Ejecución de una relación precontractual', 'Durante la negociación y su prescripción legal'],
            ['Cumplir obligaciones legales (contables, fiscales)', 'Obligación legal', 'Los plazos que exige la ley']
          ]
        } },
        { p: 'No usaremos tus datos para enviarte comunicaciones comerciales sobre otros productos sin pedirte permiso antes.' },

        { h2: 'Quién puede acceder a tus datos' },
        { p: 'Para poder funcionar, contamos con proveedores que actúan como encargados del tratamiento y que solo tratan los datos según nuestras instrucciones:' },
        { ul: [
          'El proveedor que procesa el envío del formulario web y nos lo hace llegar por correo electrónico.',
          'Nuestro proveedor de correo electrónico.',
          'El proveedor de alojamiento de este sitio web.'
        ] },
        { p: 'No vendemos ni cedemos tus datos a terceros con fines comerciales. Cuando algún proveedor implique una transferencia internacional de datos, nos aseguramos de que existan las garantías que exige el RGPD, como las cláusulas contractuales tipo de la Comisión Europea.' },

        { h2: 'Datos tratados en el servicio de agentes de voz' },
        { p: 'Cuando un cliente contrata el servicio de Duodat, los datos de las personas que reciben o hacen las llamadas se tratan por cuenta de ese cliente, que es su responsable. En estos casos, Duodat actúa como encargada del tratamiento y firma el contrato que exige el artículo 28 del RGPD. Este tratamiento incluye:' },
        { ul: [
          'Datos de identificación y de contacto necesarios para hacer la llamada.',
          'Transcripción y resumen de la conversación, y grabación de audio solo si el cliente la activa.',
          'Metadatos de la llamada: fecha, hora, duración y resultado.'
        ] },
        { p: 'Los agentes de voz se identifican como asistentes automáticos al principio de cada llamada. El cliente decide los plazos de conservación y si se guarda el audio. Estos datos se procesan en servidores situados en la Unión Europea.' },

        { h2: 'Tus derechos' },
        { p: 'Puedes ejercer en cualquier momento los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar el consentimiento que nos hayas dado. Solo tienes que escribirnos a {email} indicando qué derecho quieres ejercer.' },
        { p: 'Si consideras que no hemos atendido correctamente tu solicitud, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) o ante la Autoridad Catalana de Protección de Datos (apdcat.gencat.cat).' },

        { h2: 'Seguridad' },
        { p: 'Aplicamos medidas técnicas y organizativas razonables para proteger los datos: cifrado de las comunicaciones, control de acceso por rol, minimización de los datos que recogemos y revisión de nuestros proveedores. Ningún sistema es infalible, pero nos comprometemos a avisarte sin dilación indebida si se produce una violación de seguridad que te afecte.' },

        { h2: 'Cambios en esta política' },
        { p: 'Si modificamos esta política, actualizaremos la fecha del principio. Te recomendamos revisarla de vez en cuando.' }
      ]
    },
    legal: {
      h1: 'Aviso legal',
      updated: 'Última actualización: 25 de octubre de 2025',
      blocks: [
        { h2: 'Titular del sitio web' },
        { p: 'Este sitio web, accesible a través del dominio {domain}, es titularidad de {legalName}, con domicilio en {city}, {country}, y dirección de contacto electrónica {email}.' },

        { h2: 'Objeto' },
        { p: 'Este sitio web tiene una finalidad informativa: presenta los servicios de agentes de voz de Duodat y permite solicitar información o una demostración a través de un formulario. El envío del formulario no constituye ningún contrato ni ninguna obligación de prestación del servicio.' },

        { h2: 'Estado del servicio' },
        { p: 'Duodat se encuentra en fase de desarrollo y de pruebas piloto. La información de este sitio web describe los servicios que ofrecemos y las condiciones previstas para el programa piloto. Las funcionalidades, los precios y los plazos indicados son orientativos y pueden cambiar; las condiciones definitivas serán las que se recojan en el contrato o presupuesto firmado con cada cliente.' },

        { h2: 'Precios indicados' },
        { p: 'Los precios que aparecen en este sitio web son orientativos, están expresados en euros y no incluyen el IVA ni otros impuestos aplicables. El precio final de cada servicio depende del volumen de llamadas, de las integraciones necesarias y del alcance acordado, y se confirma siempre por escrito en un presupuesto.' },

        { h2: 'Propiedad intelectual e industrial' },
        { p: 'Los contenidos de este sitio web (textos, diseño, logotipo, código y elementos gráficos) son propiedad de {legalName} o se utilizan con la autorización correspondiente, y están protegidos por la normativa de propiedad intelectual. No se permite su reproducción, distribución ni transformación sin autorización por escrito, salvo los usos permitidos por la ley.' },

        { h2: 'Responsabilidad' },
        { p: 'Hacemos lo posible por mantener la información de este sitio web actualizada y sin errores, pero no podemos garantizar que no los haya. {legalName} no se responsabiliza de los daños derivados del uso de este sitio web ni de las interrupciones del servicio ajenas a su control. Los enlaces a sitios de terceros se ofrecen solo por comodidad y no implican ninguna vinculación ni responsabilidad sobre sus contenidos.' },

        { h2: 'Limitaciones del servicio de agentes de voz' },
        { p: 'Los agentes de voz de Duodat no son un servicio de emergencias, de teleasistencia sanitaria ni de asistencia médica. No diagnostican, no dan consejos clínicos y no sustituyen la atención profesional. En caso de emergencia hay que llamar al 112.' },

        { h2: 'Legislación aplicable' },
        { p: 'Este aviso legal se rige por la legislación española. Para cualquier controversia relativa a este sitio web, las partes se someten a los juzgados y tribunales que correspondan según la normativa aplicable.' }
      ]
    }
  }
};
