using Microsoft.EntityFrameworkCore;
using Restaurant.Models;

namespace RestaurantManager.Dal
{
    public class RestaurantManagerContext : DbContext
    {
        public RestaurantManagerContext (DbContextOptions<RestaurantManagerContext> options)
            : base(options)
        {
        }

        public DbSet<Worker> Workers { get; set; }
        public DbSet<Table> Tables { get; set; }
    }
}
