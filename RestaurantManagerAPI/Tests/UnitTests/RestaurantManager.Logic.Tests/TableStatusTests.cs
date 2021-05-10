using FakeItEasy;
using FluentAssertions;
using Restaurant.Models;
using RestaurantManager.Dal.Repositories;
using Xunit;

namespace RestaurantManager.Logic.Tests
{
    public class TableStatusTests
    {
        [Fact]
        public void ChangeStatus_To_Busy_When_Free()
        {
            //Arrange
            var tableStatusRepository = A.Fake<ITableStatusRepository>();
            var tableRepository = A.Fake<ITableRepository>();
            A.CallTo(() => tableRepository.GetTable(1, TableStatus.Free)).Returns(new Table(){
                Id = 1,
                Name = "stolik nr 1",
                NumberOfSeats = 6,
                TableStatus = TableStatus.Free,
                Worker = new Worker()
                {
                    FirstName = "Adam",
                    LastName = "Krajewski",
                    Id = 15,
                    TypeOfWork = new TypeOfWork()
                    {
                        Name = "kelner"
                    }
                }
            });
            A.CallTo(() => tableRepository.GetTable(2, TableStatus.Free)).Returns(null);
            var sut = new TableStatusService(tableRepository);
            //Act
            sut.ChangeStatusToBusy(1);
            sut.ChangeStatusToBusy(2);
            //Assert
            tableRepository.GetTable(1, TableStatus.Free).Id.Should().Be(expected: 1);
            tableRepository.GetTable(1, TableStatus.Free).TableStatus.Should().Be(expected: TableStatus.Busy);
            tableRepository.GetTable(2, TableStatus.Free).Should().Be(expected: null);
        }
    }
}
