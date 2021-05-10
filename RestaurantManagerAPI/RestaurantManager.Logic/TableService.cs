using Restaurant.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using RestaurantManager.Dal.Repositories;


namespace RestaurantManager.Logic
{
    public class TableService
    {
        private readonly ITableRepository _tableRepository;

        public TableService(ITableRepository tableRepository)
        {
            _tableRepository = tableRepository;
        }

        
    }
}
