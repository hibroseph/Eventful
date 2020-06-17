using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Eventful.Event.Common;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Eventful.API.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class EventController : ControllerBase
    {
        IEventManager _eventManager;

        public EventController(IEventManager eventManager)
        {
            _eventManager = eventManager;
        }

        [HttpGet]
        public async Task<IActionResult> GetEvents()
        {
            return Ok( await _eventManager.GetAllEventsAsync());
        }

        [HttpGet]
        public ActionResult<string> HelloWorld()
        {
            return "Hello World";
        }
    }
}