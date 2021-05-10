using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using RestaurantManager.Dal.Repositories;
using Restaurant.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RestaurantManager.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MealController : ControllerBase
    {
        private readonly IMealRepository _mealRepository;
        public MealController(IMealRepository mealRepository)
        {
            _mealRepository = mealRepository;
        }

        // GET: api/<MealController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<MealController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<MealController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
            _mealRepository.SaveMeal(new Meal());
        }

        // PUT api/<MealController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<MealController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
