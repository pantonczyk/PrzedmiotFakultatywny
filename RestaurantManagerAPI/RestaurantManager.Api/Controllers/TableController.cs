using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using RestaurantManager.Dal.Repositories;
using Restaurant.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RestaurantManager.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TableController : ControllerBase
    {
        private readonly ITableRepository _tableRepository;
        public TableController(ITableRepository tableRepository)
        {
            _tableRepository = tableRepository;
        }

        // GET: api/<TableController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<TableController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<TableController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
            _tableRepository.SaveTable(new Table());
        }

        // PUT api/<TableController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TableController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
