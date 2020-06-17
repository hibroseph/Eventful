using System;
using System.Collections.Generic;
using System.Text;

namespace Eventful.Event.Common
{
	public class Event
	{
		public Guid Id { get; set; }
		public string Title { get; set;}
		public string Description { get; set;}
		public DateTime EventDate { get; set;}
		public DateTime PostDate { get; set;}
	}
}
