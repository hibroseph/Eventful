using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Eventful.Event.Common;

namespace Eventful.Event.Repository
{
	public class EventManagerRepository : IEventManagerRepository
	{
		List<Common.Event> _events;

		public EventManagerRepository()
		{
			_events = new List<Common.Event>
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
				},
				new Common.Event
				{
					Id = Guid.NewGuid(),
					Title = "Rock Climbing",
					Description = "We are going to meet at the edge in IF at 6pm. It is college night so bring your student ID and get in for 9 american dollars. Afterwards we are going to go to Kips apartment (461 N Water Ave) and enjoy some drinks. Hope you can make it. Please contact me if you have any issues",
					PostDate = new DateTime().AddDays(1).AddHours(5).AddMinutes(57),
					EventDate = new DateTime().AddHours(7).AddMinutes(10)
				},
				new Common.Event
				{
					Id = Guid.NewGuid(),
					Title = "Sexy Slumber Party",
					Description = "5 very hot ladies want to have a sexy sleepover. Only neckbears and weeboos are allowed to come. Make sure you come with a lot of $$$",
					PostDate = new DateTime().AddDays(1).AddHours(5).AddMinutes(57),
					EventDate = new DateTime().AddHours(7).AddMinutes(10)
				}
			};
		}

		public Task CreateEventAsync( Common.Event @event )
		{
			// Add the event to the in memory database
			_events.Add( @event );

			return Task.CompletedTask;
		}

		public Task DeleteEventAsync( Guid eventId)
		{
			throw new NotImplementedException();
		}

		public Task<List<Common.Event>> GetAllEventsAsync()
		{
			// This is hardcoded data for the POC
			return Task.FromResult( _events );
		}
	}
}
