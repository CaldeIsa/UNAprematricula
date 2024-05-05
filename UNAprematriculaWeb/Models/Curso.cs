using System.ComponentModel.DataAnnotations;

public class Curso
{
    public int CursoID { get; set; }

    [Required(ErrorMessage = "El Nombre del Curso es requerido.")]
    [StringLength(255, ErrorMessage = "El Nombre del Curso no puede tener más de 255 caracteres.")]
    public string NombreCurso { get; set; }

    [Required(ErrorMessage = "El Código del Curso es requerido.")]
    [StringLength(50, ErrorMessage = "El Código del Curso no puede tener más de 50 caracteres.")]
    public string Codigo { get; set; }

    [StringLength(255, ErrorMessage = "El campo Registros no puede tener más de 255 caracteres.")]
    public string Registros { get; set; }
}
