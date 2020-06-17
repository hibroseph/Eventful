using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Eventful.Event.Common
{
	public interface IEventManagerRepository
	{
		Task CreateEventAsync(Event @event );
		Task DeleteEventAsync( Guid eventId );
		Task<List<Event>> GetAllEventsAsync();
	}
}
