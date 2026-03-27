---
# NOMBRE DEL ARCHIVO: nombre-del-miembro.md

# Información Personal
nombre: Ricardo Tribaldos
idiomas: ['Español', 'Inglés']
pais: "PA"
ciudad: "David"

# Imagen de perfil
# Agregar su foto al directorio src/images/members/nombre-del-miembro.jpg
# Puede usar cualquier formato de imagen (jpg, png, webp, etc.)
# Evite usar imágenes muy grandes para optimizar el rendimiento
imagen: "@memberImages/ricardo-tribaldos.jpg"

# Información Profesional
profesion: "Full-stack Developer"
biografia: "Desarrollador Web Full-stack con especial interés en el desarrollo backend y más de una década de experiencia de trabajo con equipos remotos. Experto en desarrollo de software administrativo y procesos financieros, con un enfoque analítico y estratégico. Comprometido con el servicio a la comunidad."
tecnologias: ['TS/JS', 'PHP', 'Node', 'SQL', 'Docker', 'Linux'] # opcional

# Indica si el miembro está buscando trabajo activamente
disponibleParaTrabajar: true
# Indica si el miembro está disponible para dar mentoría
disponibleParaMentoria: true
# Indica si el miembro está disponible para nuevos proyectos
disponibleParaProyectos: true

# Enlaces a redes sociales y sitio web personal
redesSociales: {
  github: "tribal2",
  linkedIn: "rtribaldos",
  twitter: "r_tribaldos",
  website: "https://tribal2.dev"
}

# Información sobre el empleo actual
empresa: {
  nombre: "BaruStudio",
  cargo: "Ingeniero de software",
  departamento: "Ingeniería",
  ciudad: "David",
  # Código de país ISO de dos letras
  pais: "PA",
  url: "https://barustudio.com",
  # Agregar el logo de la empresa al directorio src/images/companyLogos/nombre-de-la-empresa.jpg
  # Puede usar cualquier formato de imagen (jpg, png, webp, etc.)
  # Evite usar imágenes muy grandes para optimizar el rendimiento
  logo: "@companyLogos/barustudio.com.png"
}

# Información de membresía en la plataforma
fechaIngreso: 2020-12-18
# Roles disponibles: 'miembro' o 'administrador'
rol: "administrador"
# Indica si el perfil está activo en la plataforma
activo: true

cv:
  email: "rtribaldos@gmail.com"
  phone: "+507 6515-6690"
  address: "David, Panamá"
  addressUrl: "https://maps.app.goo.gl/6F8jqmUbc59R5Ww38"
  timezone: "EST (UTC-5)"
  summary: "Full-stack Web Developer and MBA with over ten years of remote work experience. Experienced in administrative software, financial processes, and operational systems, with a strong focus on problem-solving, strategic thinking, and community building."
  experience:
    - company:
        name: "Wapa"
        city: "David"
        country: "Panamá"
        url: "https://wa.pa"
      current: true
      positions:
        - title: "Founder & CTO"
          startDate: "2024-11"
          description: "Founded and lead the development of a platform to automate customer interactions via WhatsApp."
          tasks:
            - description: "Defined the product vision, directed technical design, and coordinated the development team."
              output: "Aligned product strategy and execution around a robust MVP."
            - description: "Implemented tools for order, payment, and appointment management for non-technical business owners."
              output: "Reduced operational burden and streamlined key workflows for small businesses."
            - description: "Designed a scalable architecture adaptable to different business verticals."
              output: "Positioned the platform for broader market expansion."
    - company:
        name: "Central"
        city: "Remote"
        country: "USA"
        url: "https://centralhq.com/"
        remarks: "Y Combinator Startup"
      positions:
        - title: "Software Engineer"
          startDate: "2024-04"
          endDate: "2024-11"
          description: "Contributed to early product development in a fast-growing startup environment."
          tasks:
            - description: "Integrated external services, developed TOTP-based multi-factor authentication, and implemented user-facing flows."
              output: "Improved security posture and core user experience."
    - company:
        name: "Panama Public Records Bureau"
        city: "David"
        country: "Panamá"
        url: "https://www.registro-publico.gob.pa/"
      positions:
        - title: "Full Stack Developer"
          startDate: "2014-09"
          endDate: "2024-03"
          description: "Led end-to-end development of internal systems and applications, from requirements gathering to deployment, training, and long-term maintenance."
          tasks:
            - description: "Built a Human Resources Management System and integrated biometric attendance devices."
              output: "Reduced manual workload and improved payroll, leave, and vacation workflows."
            - description: "Developed an Asset Management System and a mobile Android auditing tool integrated with its API."
              output: "Improved inventory control, depreciation reporting, and field audit accuracy."
            - description: "Implemented a private GitLab CE code repository and CI/CD workflows."
              output: "Centralized source control, improved traceability, and fostered team collaboration."
        - title: "Financial Advisor"
          startDate: "2012-06"
          endDate: "2014-09"
          description: "Led pricing updates, revenue modeling, and financial process optimization initiatives."
          tasks:
            - description: "Developed projection models across multiple income streams and launched a public fee calculator."
              output: "Supported a pricing update that increased annual revenue by over $15M."
  volunteering:
    - organization:
        name: "FullStack Panama"
        city: "Panamá"
        country: "Panamá"
        url: "https://xopa.dev/"
        remarks: "Developers community"
      positions:
        - title: "Founder"
          startDate: "2021-08"
      tasks:
        - "Created a supportive community for developers in Panama."
        - "Organized recurring meetups to share knowledge and experiences."
      isActiveMember: true
    - organization:
        name: "Rotary Club of David"
        city: "David"
        country: "Panamá"
        url: "https://www.facebook.com/rotaryclubofdavid"
        remarks: "Oldest Rotary club in the city"
      positions:
        - title: "Youth and Education Chair, Secretary, CTO and Webmaster, President, PR Chair"
          startDate: "2019-12"
      tasks:
        - "Achieved record fundraising results for the Rotary Foundation."
        - "Built the club website and a Notion workspace to improve collaboration."
      isActiveMember: true
  education:
    - institution:
        name: "INCAE Business School"
        city: "Alajuela"
        country: "Costa Rica"
        url: "https://www.incae.edu/"
        remarks: "Ranked #1 Business School in Latin America by Financial Times"
      degree: "Master of Business Administration (MBA)"
      major: "Economy, Finances, and Sustainable Development"
      achievements:
        - "Honored with the MEF-IFARHU Scholarship in 2007 for international studies."
    - institution:
        name: "Universidad Tecnológica de Panamá"
        city: "Panama City"
        country: "Panamá"
        url: "https://www.utp.ac.pa/"
        remarks: "Ranked #1 University in Panama by QS World University Rankings"
      degree: "Bachelor of Engineering (BE)"
      major: "Electrical and Electronics Engineering"
      achievements:
        - "Graduated summa cum laude."
        - "Awarded the Fundación Petroterminal de Panamá Scholarship in 2002."
  projects:
    - name: "Minimalist CV"
      url: "https://tribal2.dev/projects/foss-cv-astro"
      description: "Astro component to display a print-friendly and minimalist CV."
      technologies:
        - name: "TypeScript"
          url: "https://www.typescriptlang.org/"
        - name: "Astro"
          url: "https://astro.build/"
    - name: "PHP DbHandler"
      url: "https://tribal2.dev/projects/foss-php-dbhandler"
      description: "Library designed to simplify interactions with MySQL databases."
      technologies:
        - name: "PHP"
          url: "https://www.php.net/"
        - name: "MySQL"
          url: "https://www.mysql.com/"
        - name: "PDO"
          url: "https://www.php.net/manual/en/book.pdo.php"
        - name: "Pest"
          url: "https://pestphp.com/"
  skills:
    - name: "TypeScript"
      proficiency: 5
      category: "Backend"
      url: "https://www.typescriptlang.org/"
    - name: "PHP"
      proficiency: 5
      category: "Backend"
      url: "https://www.php.net/"
    - name: "Node.js"
      proficiency: 5
      category: "Backend"
      url: "https://nodejs.org/"
    - name: "MySQL"
      proficiency: 5
      category: "Data"
      url: "https://www.mysql.com/"
    - name: "PostgreSQL"
      proficiency: 4
      category: "Data"
      url: "https://www.postgresql.org/"
    - name: "React"
      proficiency: 4
      category: "Frontend"
      url: "https://react.dev/"
    - name: "Astro"
      proficiency: 4
      category: "Frontend"
      url: "https://astro.build/"
    - name: "Tailwind"
      proficiency: 4
      category: "Frontend"
      url: "https://tailwindcss.com/"
    - name: "Docker"
      proficiency: 5
      category: "DevOps"
      url: "https://www.docker.com/"
    - name: "GitLab CI"
      proficiency: 4
      category: "DevOps"
      url: "https://docs.gitlab.com/ee/ci/"
    - name: "Traefik"
      proficiency: 4
      category: "DevOps"
      url: "https://traefik.io/"
    - name: "Flutter"
      proficiency: 3
      category: "Mobile"
      url: "https://flutter.dev/"
  config:
    categoryOrder: ["Backend", "Frontend", "Data", "DevOps", "Mobile"]
---
