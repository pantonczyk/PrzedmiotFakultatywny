using Restaurant.Models;
using System.Collections.Generic;

namespace RestaurantManager.Dal.Repositories
{
    public class WorkerRepository : IWorkerRepository
    {
        private readonly RestaurantManagerContext _context;
        public WorkerRepository(RestaurantManagerContext context)
        {
            _context = context;
        }

        public void SaveWorker(Worker worker)
        {
            _context.Add(worker);
            _context.SaveChanges();
        }
        public IEnumerable<Worker> GetAll()
        {
            return _context.Workers;
        }
    }

    public interface IWorkerRepository
    {
        void SaveWorker(Worker worker);
        IEnumerable<Worker> GetAll();
    }
}
