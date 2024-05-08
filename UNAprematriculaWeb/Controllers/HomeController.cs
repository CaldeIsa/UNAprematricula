using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using UNAprematriculaWeb.Models;
using UNAprematriculaWeb.ViewModels;

namespace UNAprematriculaWeb.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private readonly PrematriculaUnaContext _dbContext = new PrematriculaUnaContext();

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;

        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Login()
        {
            return View();
        }



        [HttpPost]
        public IActionResult MainEstudiante(LoginViewModel loginViewModel)
        {
            Console.WriteLine(loginViewModel.usuario);
            Console.WriteLine(loginViewModel.contrasena);

            var usuarioEncontrado = _dbContext.Usuarios.Select(e => e.Email == loginViewModel.usuario && e.Contrasena == loginViewModel.contrasena).FirstOrDefault();



           
            return View();
        }

        [HttpGet]
        public IActionResult MainEstudiante()
        {

            return View();
        }

        public IActionResult Register()
        {
            return View();
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
