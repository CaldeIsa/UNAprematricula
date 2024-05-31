namespace UNAprematriculaWeb.Models;

public partial class Curso
{
	public int CursoId { get; set; }

	public string NombreCurso { get; set; } = null!;

	public string Codigo { get; set; } = null!;

	public string? Registros { get; set; }
}
