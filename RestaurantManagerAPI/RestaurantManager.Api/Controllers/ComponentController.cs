using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using RestaurantManager.Dal.Repositories;
using Restaurant.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RestaurantManager.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComponentController : ControllerBase
    {
        public readonly IComponentRepository _componentRepository;
        public ComponentController(IComponentRepository componentRepository)
        {
            _componentRepository = componentRepository;
        }
        // GET: api/<ComponentController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<ComponentController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ComponentController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
            _componentRepository.SaveComponent(new Component());
        }

        // PUT api/<ComponentController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ComponentController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
