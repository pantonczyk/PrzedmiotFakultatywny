using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using RestaurantManager.Dal.Repositories;
using Restaurant.Models;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RestaurantManager.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TableStatusController : ControllerBase
    {
        private readonly ITableStatusRepository _tableStatusRepository;
        public TableStatusController(ITableStatusRepository tableStatusRepository)
        {
            _tableStatusRepository = tableStatusRepository;
        }

        // GET: api/<TableStatusController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<TableStatusController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<TableStatusController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
            _tableStatusRepository.SaveTableStatusRepository(new TableStatus());
        }

        // PUT api/<TableStatusController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TableStatusController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
