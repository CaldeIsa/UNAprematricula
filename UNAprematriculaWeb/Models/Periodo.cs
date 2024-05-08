using System;
using System.Collections.Generic;

namespace UNAprematriculaWeb.Models;

public partial class Periodo
{
    public int PeriodoId { get; set; }

    public DateOnly FechaInicio { get; set; }

    public DateOnly FechaFinal { get; set; }
}
