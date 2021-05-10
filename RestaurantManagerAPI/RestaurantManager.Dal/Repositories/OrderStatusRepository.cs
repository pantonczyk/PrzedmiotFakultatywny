using Restaurant.Models;

namespace RestaurantManager.Dal.Repositories
{
    public class OrderStatusRepository : IOrderStatusRepository
    {
        private readonly RestaurantManagerContext _context;
        public OrderStatusRepository(RestaurantManagerContext context)
        {
            _context = context;
        }
        public void SaveOrderStatus(OrderStatus orderStatus)
        {
            _context.Add(orderStatus);
            _context.SaveChanges();
        }
    }

    public interface IOrderStatusRepository
    {
        void SaveOrderStatus(OrderStatus orderStatus);
    }
}
