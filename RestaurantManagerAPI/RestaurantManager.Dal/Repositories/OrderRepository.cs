using Restaurant.Models;

namespace RestaurantManager.Dal.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly RestaurantManagerContext _context;
        public OrderRepository(RestaurantManagerContext context)
        {
            _context = context;
        }
        public void SaveOrder(Order order)
        {
            _context.Add(order);
            _context.SaveChanges();
        }
    }

    public interface IOrderRepository
    {
        void SaveOrder(Order order);
    }
}
