const Dpt = require('../models/positions');
const mongoose     = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DBURL);

const dpt = [{

    "CódigoPuesto2": "RH100",
    "DenominaciónDelPuesto": "Director Servicio RRHH",
    "ÓrganoDirectivo": "Concejal�a Delegada",
    "Concejalía": "",
    "Área2": "Recursos Humanos",
    "Unidad": "Recursos Humanos",
    "Escala2": "(AE) Administraci�n Especial",
    "Subescala2": "Técnica",
    "Categoría": "Superior",
    "Grupo": "A1",
    "Colectivo": "(F) Funcionario",
    "FormaDeProvisión": "(LD) Libre Designaci�n",
    "Tipo": "(S) Singularizado",
    "NumPuestosHomogéneos": 1,
    "Misión": "Dirigir, planificar, organizar, informar, coordinar y resolver el conjunto de actividades propias del Departamento de Recursos Humanos, en la medida de posibilidades que proporcionan los recursos, las normas y las directrices pol�ticas, para el buen funcionamiento de los servicios y de forma especial en manejo y custodia de fondos, valores y efectos de la entidad.",
    "Funciones": "",
    "Tareas": "",
    "FormaciónReglada_Nivel": "A1",
    "FormaciónReglada_Título": "Licenciado en Derecho / M�ster en Direcci�n y Gerencia P�blica",
    "FormaciónComplementariaYEspecficaDelPuesto_LosConocimientosEspecíficosRequeridosSon": "Ofim�tica avanzada Conocimientos de gesti�n de personal",
    "Idiomas_Idioma": "",
    "Idiomas_Nivel": "",
    "Experiencia_Actividad": "-",
    "Experiencia_Años": "-",
    "PeriodoDeAdaptaciónAlPuesto": "3 meses",
    "Habilidades_LasSiguientesSonHabilidadesValoradasComoNecesariasParaElDesempeñoDeEstePuesto": "",
    "Certificaciones_LasSiguientesSonCertificacionesDeseablesParaCompletarElPerfilDelPuesto": "",
    "ResponsabilidadYAutonomía_DependenciaFuncionalDelPuesto": "Concejal Delegado",
    "ResponsabilidadYAutonomía_ResponsabilidadYoMando": "Si",
    "ResponsabilidadYAutonomía_Colaboradores": "",
    "ResponsabilidadYAutonomía_MagnitudEnLaTomaDeDecisiones": "Las que se adoptan en momentos puntuales en las que no existen normas previas preestablecidas para conseguir los objetivos.",
    "ResponsabilidadYAutonomía_GuíaYOrientaciónRecibidas": "Derivadas de la legislaci�n vigente relacionada con el puesto",
    "ResponsabilidadYAutonomía_GradoDeSupervisión": "La Corporaci�n Municipal",
    "RelacionesFuncionales_RelacionesInternas": "Relaciones recíprocas entre Dependencias Municipales para el cumplimiento de sus fines. Tambi�n las derivadas de exigir el cumplimiento de las obligaciones del subordinado.",
    "RelacionesFuncionales_RelacionesExternas": "Por motivos de las funciones encomendadas: Oficina de Empleo, Instituto N. de la Seguridad Social; Tesorer�a de la S. Social, con relaci�n continua.  Y con relaci�n espor�dica: Delegaci�n de Trabajo, Inspecci�n de Trabajo, Gabinete de Salud y Seguridad Laboral, Delegaci�n de Hacienda o Educaci�n. Por Convenios Formativos: todos los centros de formaci�n que el Ayuntamiento tenga o pueda establecer convenios. Por entidades privadas y p�blicas no constantes por diferentes motivos relacionados con sus funciones.",
    "OtrasCondicionesQueDefinenElDesempeñoDelPuesto_Dedicación": "Si",
    "OtrasCondicionesQueDefinenElDesempeñoDelPuesto_DificultadTécnica": "Si",
    "OtrasCondicionesQueDefinenElDesempeñoDelPuesto_ResponsabilidadYoMando": "Si",
    "OtrasCondicionesQueDefinenElDesempeñoDelPuesto_Nocturnidad": "No",
    "OtrasCondicionesQueDefinenElDesempeñoDelPuesto_TurnicidadJornadaPartida": "No",
    "OtrasCondicionesQueDefinenElDesempeñoDelPuesto_PeligroYoPenosidad": "No"
  },
  {
    "CódigoPuesto2": "RH100",
    "DenominaciónDelPuesto": "Director Servicio IT",
    "ÓrganoDirectivo": "Concejal�a Delegada",
    "Concejalía": "",
    "Área2": "Recursos Humanos",
    "Unidad": "Recursos Humanos",
    "Escala2": "(AE) Administraci�n Especial",
    "Subescala2": "Técnica",
    "Categoría": "Superior",
    "Grupo": "A1",
    "Colectivo": "(F) Funcionario",
    "FormaDeProvisión": "(LD) Libre Designaci�n",
    "Tipo": "(S) Singularizado",
    "NumPuestosHomogéneos": 1,
    "Misión": "Dirigir, planificar, organizar, informar, coordinar y resolver el conjunto de actividades propias del Departamento de Recursos Humanos, en la medida de posibilidades que proporcionan los recursos, las normas y las directrices pol�ticas, para el buen funcionamiento de los servicios y de forma especial en manejo y custodia de fondos, valores y efectos de la entidad.",
    "Funciones": "",
    "Tareas": "",
    "FormaciónReglada_Nivel": "A1",
    "FormaciónReglada_Título": "Licenciado en Derecho / M�ster en Direcci�n y Gerencia P�blica",
    "FormaciónComplementariaYEspecficaDelPuesto_LosConocimientosEspecíficosRequeridosSon": "Ofim�tica avanzada Conocimientos de gesti�n de personal",
    "Idiomas_Idioma": "",
    "Idiomas_Nivel": "",
    "Experiencia_Actividad": "-",
    "Experiencia_Años": "-",
    "PeriodoDeAdaptaciónAlPuesto": "3 meses",
    "Habilidades_LasSiguientesSonHabilidadesValoradasComoNecesariasParaElDesempeñoDeEstePuesto": "",
    "Certificaciones_LasSiguientesSonCertificacionesDeseablesParaCompletarElPerfilDelPuesto": "",
    "ResponsabilidadYAutonomía_DependenciaFuncionalDelPuesto": "Concejal Delegado",
    "ResponsabilidadYAutonomía_ResponsabilidadYoMando": "Si",
    "ResponsabilidadYAutonomía_Colaboradores": "",
    "ResponsabilidadYAutonomía_MagnitudEnLaTomaDeDecisiones": "Las que se adoptan en momentos puntuales en las que no existen normas previas preestablecidas para conseguir los objetivos.",
    "ResponsabilidadYAutonomía_GuíaYOrientaciónRecibidas": "Derivadas de la legislaci�n vigente relacionada con el puesto",
    "ResponsabilidadYAutonomía_GradoDeSupervisión": "La Corporaci�n Municipal",
    "RelacionesFuncionales_RelacionesInternas": "Relaciones recíprocas entre Dependencias Municipales para el cumplimiento de sus fines. Tambi�n las derivadas de exigir el cumplimiento de las obligaciones del subordinado.",
    "RelacionesFuncionales_RelacionesExternas": "Por motivos de las funciones encomendadas: Oficina de Empleo, Instituto N. de la Seguridad Social; Tesorer�a de la S. Social, con relaci�n continua.  Y con relaci�n espor�dica: Delegaci�n de Trabajo, Inspecci�n de Trabajo, Gabinete de Salud y Seguridad Laboral, Delegaci�n de Hacienda o Educaci�n. Por Convenios Formativos: todos los centros de formaci�n que el Ayuntamiento tenga o pueda establecer convenios. Por entidades privadas y p�blicas no constantes por diferentes motivos relacionados con sus funciones.",
    "OtrasCondicionesQueDefinenElDesempeñoDelPuesto_Dedicación": "Si",
    "OtrasCondicionesQueDefinenElDesempeñoDelPuesto_DificultadTécnica": "Si",
    "OtrasCondicionesQueDefinenElDesempeñoDelPuesto_ResponsabilidadYoMando": "Si",
    "OtrasCondicionesQueDefinenElDesempeñoDelPuesto_Nocturnidad": "No",
    "OtrasCondicionesQueDefinenElDesempeñoDelPuesto_TurnicidadJornadaPartida": "No",
    "OtrasCondicionesQueDefinenElDesempeñoDelPuesto_PeligroYoPenosidad": "No"
  }
]

Dpt.create(dpt, (err, dpt) => {
    if (err){ throw(err) }
    console.log("Success", dpt);
    mongoose.connection.close();
  })