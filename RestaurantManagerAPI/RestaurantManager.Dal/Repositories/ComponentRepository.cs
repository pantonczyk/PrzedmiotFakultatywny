using Restaurant.Models;

namespace RestaurantManager.Dal.Repositories
{
    public class ComponentRepository : IComponentRepository
    {
        private readonly RestaurantManagerContext _context;
        public ComponentRepository(RestaurantManagerContext context)
        {
            _context = context;
        }

        public void SaveComponent(Component component)
        {
            _context.Add(component);
            _context.SaveChanges();
        }
    }

    public interface IComponentRepository
    {
        void SaveComponent(Component component);
    }
}
