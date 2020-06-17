using System.Collections.Generic;
using System.Threading.Tasks;

namespace Eventful.Event.Common
{
	public interface IEventManager
	{
		Task<List<Event>> GetAllEventsAsync();
	}
}
