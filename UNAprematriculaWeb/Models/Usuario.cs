using System.ComponentModel.DataAnnotations;

public class Usuario
{
    public int UserID { get; set; }

    [Required(ErrorMessage = "El campo Email es requerido.")]
    [EmailAddress(ErrorMessage = "Ingrese un formato de correo electrónico válido.")]
    [StringLength(191, ErrorMessage = "El campo Email no puede tener más de 191 caracteres.")]
    public string Email { get; set; }

    [Required(ErrorMessage = "El campo Tipo de Usuario es requerido.")]
    [StringLength(191, ErrorMessage = "El campo Tipo de Usuario no puede tener más de 191 caracteres.")]
    public string TipoUsuario { get; set; }

    [Required(ErrorMessage = "El campo Nombre es requerido.")]
    [StringLength(191, ErrorMessage = "El campo Nombre no puede tener más de 191 caracteres.")]
    public string Nombre { get; set; }

    [Required(ErrorMessage = "El campo Apellido es requerido.")]
    [StringLength(191, ErrorMessage = "El campo Apellido no puede tener más de 191 caracteres.")]
    public string Apellido { get; set; }
}
