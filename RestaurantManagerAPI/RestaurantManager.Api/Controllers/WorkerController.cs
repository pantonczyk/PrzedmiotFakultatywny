using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using RestaurantManager.Dal.Repositories;
using Restaurant.Models;
using RestaurantManager.Logic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RestaurantManager.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkerController : ControllerBase
    {
        private readonly IWorkerService _workerService;
        public WorkerController(IWorkerService workerService)
        {
            _workerService = workerService;
        }

        // GET: api/<WorkerController>
        [HttpGet]
        public IEnumerable<Worker> Get()
        {
            return _workerService.GetAll();
        }

        // GET api/<WorkerController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<WorkerController>
        [HttpPost]
        public void Post([FromBody] string value)
        {

        }

        // PUT api/<WorkerController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<WorkerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
