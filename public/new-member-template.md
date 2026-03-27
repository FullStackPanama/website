---
# NOMBRE DEL ARCHIVO: nombre-del-miembro.md

# Información Personal
nombre: María González
idiomas: ['Español', 'Inglés']

# Imagen de perfil
# Agregar su foto al directorio src/images/members/nombre-del-miembro.jpg
# Puede usar cualquier formato de imagen (jpg, png, webp, etc.)
# Evite usar imágenes muy grandes para optimizar el rendimiento
imagen: "@memberImages/maria-gonzalez.jpg"
pais: "PA"
ciudad: "David"

# Información Profesional
profesion: "Desarrolladora Full Stack" # opcional
biografia: "Desarrolladora Full Stack con una pasión por resolver problemas complejos y entregar soluciones centradas en el usuario."
tecnologias: ['Ruby on Rails', 'JavaScript', 'React', 'SQL', 'Docker', 'Vue.js', 'GraphQL'] # opcional
# Indica si el miembro está buscando trabajo activamente
disponibleParaTrabajar: false
# Indica si el miembro está disponible para dar mentoría
disponibleParaMentoria: false
# Indica si el miembro está disponible para nuevos proyectos
disponibleParaProyectos: false

# Enlaces a redes sociales y sitio web personal
redesSociales: {
  github: "maria-gonzalez",
  linkedIn: "maria-gonzalez",
  twitter: "maria_gonzalez",
  website: "https://maria-gonzalez.dev"
}

# Información sobre el empleo actual
empresa: {
  nombre: "OPACTIC",
  cargo: "Desarrolladora Full Stack",
  departamento: "Engineering",
  ciudad: "David",
  # Código de país ISO de dos letras
  pais: "PA",
  url: "https://barustudio.com",
  # Agregar el logo de la empresa al directorio src/images/companyLogos/nombre-de-la-empresa.jpg
  # Puede usar cualquier formato de imagen (jpg, png, webp, etc.)
  # Evite usar imágenes muy grandes para optimizar el rendimiento
  logo: "@companyLogos/opactic.jpg"
}

# Información de membresía en la plataforma
fechaIngreso: 2024-01-01
# Roles disponibles: 'miembro' o 'administrador'
rol: "miembro"
# Indica si el perfil está activo en la plataforma
activo: true

# CV (opcional)
# Si no quieres publicar tu CV, simplemente borra todo el bloque `cv:`.
# Si quieres publicar tu CV en /miembros/<tu-slug>/cv agrega el bloque `cv:` en
# este mismo archivo.
# Puedes incluir datos de contacto, experiencia, educación, proyectos,
# certificaciones y skills.
# Todos los campos y secciones dentro de `cv:` son opcionales, así que si no
# quieres incluir cierta información, simplemente borra esa sección o campo.

cv:
  email: "correo@ejemplo.com"
  phone: "+507 6000-0000"
  address: "David, Panamá"
  addressUrl: "https://maps.app.goo.gl/tu-enlace"
  timezone: "EST (UTC-5)"
  summary: "Resumen profesional breve y directo."
  experience:
    - company:
        name: "Empresa"
        city: "David"
        country: "Panamá"
        url: "https://empresa.com"
        remarks: "Información adicional opcional sobre la empresa"
      current: true
      positions:
        - title: "Software Engineer"
          startDate: "2024-01"
          endDate: "2024-12"
          description: "Describe el contexto general de tu rol."
          tasks:
            - description: "Resume una responsabilidad o logro importante."
              output: "Explica el resultado o impacto logrado."
          projects:
            - name: "Proyecto interno"
              url: "https://empresa.com/proyecto"
              description: "Describe brevemente el proyecto."
              output: "Resultado o impacto del proyecto."
              technologies:
                - name: "TypeScript"
                  url: "https://www.typescriptlang.org/"
                - name: "Astro"
                  url: "https://astro.build/"
  volunteering:
    - organization:
        name: "Organización"
        city: "David"
        country: "Panamá"
        url: "https://organizacion.org"
        remarks: "Contexto opcional"
      description: "Descripción general opcional."
      positions:
        - title: "Mentor"
          startDate: "2023-01"
          endDate: "2024-01"
      tasks:
        - "Actividad o aporte relevante."
        - "Otro aporte relevante."
      isActiveMember: true
      startDate: "2023-01"
      endDate: "2024-01"
  education:
    - institution:
        name: "Universidad"
        city: "Panamá"
        country: "Panamá"
        url: "https://universidad.edu"
        remarks: "Dato opcional"
      degree: "Bachelor of Science"
      major: "Computer Science"
      startDate: "2018-01"
      endDate: "2022-12"
      inProgress: false
      projects:
        - name: "Proyecto académico"
          description: "Proyecto relevante durante tus estudios."
          technologies:
            - name: "React"
              url: "https://react.dev/"
      achievements:
        - "Reconocimiento, beca o logro relevante."
  certifications:
    - authority: "AWS"
      name: "AWS Certified Developer"
      code: "ABC-123"
      description: "Descripción opcional de la certificación."
      license: "Licencia opcional"
      issueDate: "2024-01"
      expirationDate: "2027-01"
      url: "https://aws.amazon.com/certification/"
      image: "https://example.com/cert.png"
  projects:
    - name: "Proyecto destacado"
      url: "https://github.com/usuario/proyecto"
      description: "Resumen corto del proyecto."
      output: "Impacto o resultado opcional."
      technologies:
        - name: "Node.js"
          url: "https://nodejs.org/"
        - name: "PostgreSQL"
          url: "https://www.postgresql.org/"
  skills:
    - name: "TypeScript"
      proficiency: 5
      category: "Backend"
      url: "https://www.typescriptlang.org/"
    - name: "Docker"
      proficiency: 4
      category: "DevOps"
      url: "https://www.docker.com/"
  config:
    categoryOrder: ["Backend", "Frontend", "Data", "DevOps", "Mobile"]
---
