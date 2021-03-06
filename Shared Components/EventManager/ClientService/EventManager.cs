﻿using Eventful.Event.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Eventful.Event.ClientService
{
	public class EventManager : IEventManager
	{
		private IEventManagerRepository _repository;

		public EventManager(IEventManagerRepository eventManagerRepository)
		{
			_repository = eventManagerRepository;
		}

		public Task<Common.Event> CreateEventAsync(Common.Event @event)
		{
			if (@event.Id == Guid.Empty || @event.Id == null)
			{
				@event.Id = Guid.NewGuid();
			}
			try
			{
				_repository.CreateEventAsync( @event );

			} catch (Exception ex)
			{
				// TODO: Add exception logging
			}

			return Task.FromResult(@event);
		}

		public Task DeleteEventAsync(Guid eventId)
		{
			try
			{
				_repository.DeleteEventAsync( eventId );
			
			} catch (Exception ex)
			{
				// TODO: Add exception logging
			}

			return Task.CompletedTask;
		}

		public async Task<List<Common.Event>> GetAllEventsAsync()
		{
			try
			{
				return await _repository.GetAllEventsAsync();
			} catch (Exception ex)
			{
				// TODO: Add exception logging

			}

			return null;
		}

	}
}
