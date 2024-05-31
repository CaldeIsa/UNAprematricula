namespace UNAprematriculaWeb.ViewModels
{
	public class LoginViewModel
	{
		public LoginViewModel(string usuario, string contrasena)
		{
			this.usuario = usuario;
			this.contrasena = contrasena;
		}

		public string usuario { get; set; }
		public string contrasena { get; set; }


		public LoginViewModel()
		{

		}



	}
}
