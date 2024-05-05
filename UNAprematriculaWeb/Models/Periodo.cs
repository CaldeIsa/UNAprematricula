using System;
using System.ComponentModel.DataAnnotations;

public class Periodo
{
    public int PeriodoID { get; set; }

    [Display(Name = "Fecha de Inicio")]
    [Required(ErrorMessage = "La Fecha de Inicio es requerida.")]
    public DateTime FechaInicio { get; set; }

    [Display(Name = "Fecha Final")]
    [Required(ErrorMessage = "La Fecha Final es requerida.")]
    public DateTime FechaFinal { get; set; }
}
