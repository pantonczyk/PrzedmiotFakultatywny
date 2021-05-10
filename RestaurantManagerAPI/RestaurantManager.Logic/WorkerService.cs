using Restaurant.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using RestaurantManager.Dal.Repositories;


namespace RestaurantManager.Logic
{
    public class WorkerService : IWorkerService
    {
        private readonly IWorkerRepository _workerRepository;

        public WorkerService(IWorkerRepository workerRepository)
        {
            _workerRepository = workerRepository;
        }

        public IEnumerable<Worker> GetAll()
        {
            var result = _workerRepository.GetAll();
            if (result.Count() == 0)
            {
                return new List<Worker>();
            }

            return result;
        }
    }

    public interface IWorkerService
    {
        IEnumerable<Worker> GetAll();
    }
}
