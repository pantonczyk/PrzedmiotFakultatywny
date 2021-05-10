using Restaurant.Models;

namespace RestaurantManager.Dal.Repositories
{
    public class MealRepository : IMealRepository
    {
        private readonly RestaurantManagerContext _context;
        public MealRepository(RestaurantManagerContext context)
        {
            _context = context;
        }
        public void SaveMeal(Meal meal)
        {
            _context.Add(meal);
            _context.SaveChanges();
        }
    }

    public interface IMealRepository
    {
        void SaveMeal(Meal meal);
    }
}
