using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using UNAprematriculaWeb.Models;

namespace UNAprematriculaWeb.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

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
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}