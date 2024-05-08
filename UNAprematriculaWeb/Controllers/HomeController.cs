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

        public IActionResult MainAcademico()
        {
            return View();
        }

        public IActionResult CreateEstadistica()
        {
            return View();
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

            var usuarioEncontrado = _dbContext.Usuarios.FirstOrDefault(e => e.Email == loginViewModel.usuario && e.Contrasena == loginViewModel.contrasena);

            //Console.WriteLine(usuarioEncontrado.Email);
            //Console.WriteLine(usuarioEncontrado.Contrasena);

            if (usuarioEncontrado != null)
            {
                
      
                return View( "MainEstudiante",usuarioEncontrado);

               
            }
            else
            {
              

                return View("Login");
               
            }


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

        public IActionResult Courses() { 
            return View();
        }

        public IActionResult InfoCourse()
        {
            return View();
        }

        public IActionResult Prematricula() {
            return View();
        }

        public IActionResult Estadisticas()
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
