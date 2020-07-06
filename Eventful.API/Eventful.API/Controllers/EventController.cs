using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
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
            return Ok(await _eventManager.GetAllEventsAsync());
        }

        [HttpPost]
        public async Task<IActionResult> PostEvent([FromBody] Event.Common.Event @event)
        {
            try
            {
                return Ok(await _eventManager.CreateEventAsync(@event));
            }
            catch (Exception)
            {
                // TODO: Add exception logging
                return StatusCode(500);
            }
        }


        [HttpGet]
        public string HelloWorld()
        {
            return "Hello World. Your API is working correctly.";
        }
    }
}