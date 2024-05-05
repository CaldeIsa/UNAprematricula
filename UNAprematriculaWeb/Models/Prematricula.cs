using System.ComponentModel.DataAnnotations;
using UNAprematriculaWeb.Models;

public class Prematricula
{
    public int UserID { get; set; }

    public Usuario Usuario { get; set; }

    public int CursosSeleccionados { get; set; }

    public int PeriodoID { get; set; } // Clave foránea hacia Periodo
    public Periodo Periodo { get; set; } // Propiedad de navegación

    public int EstudianteID { get; set; } // Clave foránea hacia Estudiante
    public Estudiante Estudiante { get; set; } // Propiedad de navegación
}
