﻿using System;
using System.Collections.Generic;

namespace UNAprematriculaWeb.Models;

public partial class Estudiante
{
    public int EstudianteId { get; set; }

    public string Carrera { get; set; } = null!;
}
