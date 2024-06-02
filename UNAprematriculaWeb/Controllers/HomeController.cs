using Microsoft.AspNetCore.Mvc;
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

		public IActionResult PlanEstudio()
		{
			return View();
		}

        public IActionResult CreateMatricula()
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

		public IActionResult MainEstudiante()
		{

			return View();
		}


		public IActionResult Register()
		{
			return View();
		}

		public IActionResult Courses()
		{
			return View();
		}

		public IActionResult InfoCourse()
		{
			return View();
		}

		public IActionResult Prematricula()
		{
			return View();
		}

		public IActionResult PruebaDT ()
		{
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
