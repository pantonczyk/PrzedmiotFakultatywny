using Restaurant.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using RestaurantManager.Dal.Repositories;


namespace RestaurantManager.Logic
{
    public class TableStatusService
    {
        private readonly ITableRepository _tableRepository;

        public TableStatusService(ITableRepository tableRepository)
        {
            _tableRepository = tableRepository;
        }

        public void ChangeStatusToBusy(int tableId)
        {
            var table = _tableRepository.GetTable(tableId, TableStatus.Free);
            if(!(table is null))
            {
                table.TableStatus = TableStatus.Busy;
            }
        }
    }

}

