using System;
using System.Collections.Generic;

namespace UNAprematriculaWeb.Models;

public partial class Usuario
{
    public int UserId { get; set; }

    public string Email { get; set; } = null!;

    public string TipoUsuario { get; set; } = null!;

    public string Nombre { get; set; } = null!;

    public string Apellido { get; set; } = null!;

    public string Contrasena { get; set; } = null!;
}
