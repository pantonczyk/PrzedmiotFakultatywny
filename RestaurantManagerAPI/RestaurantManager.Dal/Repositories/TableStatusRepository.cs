using System;
using Restaurant.Models;

namespace RestaurantManager.Dal.Repositories
{
    public class TableStatusRepository
    {
        private readonly RestaurantManagerContext _context;
        public TableStatusRepository(RestaurantManagerContext context)
        {
            _context = context;
        }
        public void SaveTableStatusRepository(TableStatus tableStatus)
        {
            _context.Add(tableStatus);
            _context.SaveChanges();
        }

    }

    public interface ITableStatusRepository
    {
        void SaveTableStatusRepository(TableStatus tableStatus);

        void ChangeStatusToBusy(int tableId);
    }
}
