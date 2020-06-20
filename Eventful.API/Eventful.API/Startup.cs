using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Eventful.Event.Common;
using Eventful.Event.Repository;
using Eventful.Event.ClientService;

namespace Eventful.API
{
	public class Startup
	{
		const string _localHostCorsPolicyName = "LocalHostCorsPolicyName";

		public Startup( IConfiguration configuration )
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices( IServiceCollection services )
		{
			services.AddControllers();

			services.AddCors( options =>
			 {

				 options.AddPolicy( _localHostCorsPolicyName, builder =>
				  {
					  builder.WithOrigins( "http://localhost:3000/", 
						  "http://localhost:3000",
						  "https://localhost:3000/",
						  "https://localhost:3000" )
					  .AllowAnyHeader()
					  .AllowAnyMethod();
				  } );
			 } );

			IEventManagerRepository eventRepository = new EventManagerRepository();
			IEventManager eventManager = new EventManager( eventRepository );

			services.AddSingleton<IEventManager>( eventManager );
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure( IApplicationBuilder app, IWebHostEnvironment env )
		{
			if ( env.IsDevelopment() )
			{
				app.UseDeveloperExceptionPage();
			}

			app.UseHttpsRedirection();

			app.UseRouting();

			app.UseAuthorization();

			app.UseCors( _localHostCorsPolicyName );

			app.UseEndpoints( endpoints =>
			 {
				 endpoints.MapControllers();
			 } );
		}
	}
}
