using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Eventful.Event.Common;

namespace Eventful.Event.Repository
{
	public class EventManagerRepository : IEventManagerRepository
	{
		public Task CreateEventAsync( Common.Event @event )
		{
			throw new NotImplementedException();
		}

		public Task DeleteEventAsync( Guid eventId)
		{
			throw new NotImplementedException();
		}

		public Task<List<Common.Event>> GetAllEventsAsync()
		{
			// This is hardcoded data for the POC
			return Task.FromResult( new List<Common.Event>()
			{
				new Common.Event
				{
					Id = Guid.NewGuid(),
					Title = "Porter Park Ultimate Frisbee",
					Description = "Come play some frisbee in porter park",
					PostDate = DateTime.Now,
					EventDate = new DateTime().AddDays(5).AddHours(3).AddMinutes(30)
				},
				new Common.Event
				{
					Id = Guid.NewGuid(),
					Title = "Backpacking Trip?",
					Description = "I'd like to get outside this weekend. Let's go somewhere!",
					PostDate = new DateTime().AddDays(1).AddHours(2).AddMinutes(13),
					EventDate = new DateTime().AddDays(2).AddHours(7).AddMinutes(10)
				}
			} );

			throw new NotImplementedException();
		}
	}
}
