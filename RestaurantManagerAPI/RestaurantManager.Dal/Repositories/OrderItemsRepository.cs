using Restaurant.Models;

namespace RestaurantManager.Dal.Repositories
{
    public class OrderItemsRepository : IOrderItemsRepository
    {
        private readonly RestaurantManagerContext _context;
        public OrderItemsRepository(RestaurantManagerContext context)
        {
            _context = context;
        }
        public void SaveOrderItems(OrderItems orderItems)
        {
            _context.Add(orderItems);
            _context.SaveChanges();
        }
    }

    public interface IOrderItemsRepository
    {
        void SaveOrderItems(OrderItems orderItems);
    }
}
