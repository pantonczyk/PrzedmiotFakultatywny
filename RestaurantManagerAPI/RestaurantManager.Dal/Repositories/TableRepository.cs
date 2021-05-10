using Restaurant.Models;

namespace RestaurantManager.Dal.Repositories
{
    public class TableRepository : ITableRepository
    {
        private readonly RestaurantManagerContext _context;
        public TableRepository(RestaurantManagerContext context)
        {
            _context = context;
        }

        public void SaveTable(Table table)
        {
            _context.Add(table);
            _context.SaveChanges();
        }

        public Table GetTable(int tableId, TableStatus free)
        {
            Table table = _context.Tables.Find(tableId);

            if (table.TableStatus == free)
            {
                return table;
            }

            return null;
        }
    }

    public interface ITableRepository
    {
        void SaveTable(Table table);
        Table GetTable(int tableId, TableStatus free);
    }
}
