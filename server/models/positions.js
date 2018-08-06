const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;
const EmployeeSchema = require('./employee').schema;

const PositionSchema = new Schema({

  CódigoPuesto2: String,
    DenominaciónDelPuesto: String,
    ÓrganoDirectivo: String,
    Concejalía: String,
    Área2: String,
    Unidad: String,
    Escala2: String,
    Subescala2: String,
    Categoría: String,
    Grupo: String,
    Colectivo: String,
    FormaDeProvisión: String,
    Tipo: String,
    NumPuestosHomogéneos: Number,
    Misión: String,
    Funciones: String,
    Tareas: String,
    FormaciónReglada_Nivel: String,
    FormaciónReglada_Título: String,
    FormaciónComplementariaYEspecíficaDelPuesto_LosConocimientosEspecíficosRequeridosSon: String,
    Idiomas_Idioma: String,
    Idiomas_Nivel: String,
    Experiencia_Actividad: String,
    Experiencia_Años: String,
    PeriodoDeAdaptaciónAlPuesto: String,
    Habilidades_LasSiguientesSonHabilidadesValoradasComoNecesariasParaElDesempeñoDeEstePuesto:String,
    Certificaciones_LasSiguientesSonCertificacionesDeseablesParaCompletarElPerfilDelPuesto: String,
    ResponsabilidadYAutonomía_DependenciaFuncionalDelPuesto: String,
    ResponsabilidadYAutonomía_ResponsabilidadYoMando: String,
    ResponsabilidadYAutonomía_Colaboradores: String,
    ResponsabilidadYAutonomía_MagnitudEnLaTomaDeDecisiones: String,
    ResponsabilidadYAutonomía_GuíaYOrientaciónRecibidas: String,
    ResponsabilidadYAutonomía_GradoDeSupervisión: String,
    RelacionesFuncionales_RelacionesInternas: String,
    RelacionesFuncionales_RelacionesExternas: String,
    OtrasCondicionesQueDefinenElDesempeñoDelPuesto_Dedicación: String,
    OtrasCondicionesQueDefinenElDesempeñoDelPuesto_DificultadTécnica: String,
    OtrasCondicionesQueDefinenElDesempeñoDelPuesto_ResponsabilidadYoMando: String,
    OtrasCondicionesQueDefinenElDesempeñoDelPuesto_Nocturnidad: String,
    OtrasCondicionesQueDefinenElDesempeñoDelPuesto_TurnicidadJornadaPartida: String,
    OtrasCondicionesQueDefinenElDesempeñoDelPuesto_PeligroYoPenosidad: String,
  
 
})



const Position = mongoose.model('positions', PositionSchema);
module.exports = Position;