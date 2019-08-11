using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TrainingApi.Models;

namespace TrainingApi.Controllers
{
    public class TrainingController : ApiController
    {
        private ITrainingContext dbContext = new TrainingDBEntities();

        public TrainingController() { }

        public TrainingController(ITrainingContext context)
        {
            dbContext = context;
        }

        // POST api/<controller>
        public IHttpActionResult Post(Training training)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                dbContext.Trainings.Add(training);
                dbContext.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }

            return CreatedAtRoute("DefaultApi", new { id = training.Id }, training);
        }
    }
}