const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;
const EmployeeSchema = require('./employee').schema;

const PositionSchema = new Schema({

  CodigoPuesto2: String,
    DenominacionDelPuesto: String,
    OrganoDirectivo: String,
    Concejalia: String,
    Area2: String,
    Unidad: String,
    Escala2: String,
    Subescala2: String,
    Categoria: String,
    Grupo: String,
    Colectivo: String,
    FormaDeProvision: String,
    Tipo: String,
    NumPuestosHomogeneos: Number,
    Mision: String,
    Funciones: String,
    Tareas: String,
    FormacionReglada_Nivel: String,
    FormacionReglada_Título: String,
    FormacionComplementariaYEspecificaDelPuesto_LosConocimientosEspecificosRequeridosSon: String,
    Idiomas_Idioma: String,
    Idiomas_Nivel: String,
    Experiencia_Actividad: String,
    Experiencia_Años: String,
    PeriodoDeAdaptacionAlPuesto: String,
    Habilidades_LasSiguientesSonHabilidadesValoradasComoNecesariasParaElDesempeñoDeEstePuesto:String,
    Certificaciones_LasSiguientesSonCertificacionesDeseablesParaCompletarElPerfilDelPuesto: String,
    ResponsabilidadYAutonomia_DependenciaFuncionalDelPuesto: String,
    ResponsabilidadYAutonomia_ResponsabilidadYoMando: String,
    ResponsabilidadYAutonomia_Colaboradores: String,
    ResponsabilidadYAutonomia_MagnitudEnLaTomaDeDecisiones: String,
    ResponsabilidadYAutonomia_GuíaYOrientacionRecibidas: String,
    ResponsabilidadYAutonomia_GradoDeSupervision: String,
    RelacionesFuncionales_RelacionesInternas: String,
    RelacionesFuncionales_RelacionesExternas: String,
    OtrasCondicionesQueDefinenElDesempeñoDelPuesto_Dedicacion: String,
    OtrasCondicionesQueDefinenElDesempeñoDelPuesto_DificultadTecnica: String,
    OtrasCondicionesQueDefinenElDesempeñoDelPuesto_ResponsabilidadYoMando: String,
    OtrasCondicionesQueDefinenElDesempeñoDelPuesto_Nocturnidad: String,
    OtrasCondicionesQueDefinenElDesempeñoDelPuesto_TurnicidadJornadaPartida: String,
    OtrasCondicionesQueDefinenElDesempeñoDelPuesto_PeligroYoPenosidad: String,
  
 
})



const Position = mongoose.model('positions', PositionSchema);
module.exports = Position;