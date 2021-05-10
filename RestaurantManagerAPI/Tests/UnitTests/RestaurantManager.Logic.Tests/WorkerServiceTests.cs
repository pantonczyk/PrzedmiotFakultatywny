using System.Collections.Generic;
using System.Linq;
using FakeItEasy;
using FluentAssertions;
using Restaurant.Models;
using RestaurantManager.Dal.Repositories;
using Xunit;

namespace RestaurantManager.Logic.Tests
{
    public class WorkerServiceTests
    {
        [Fact]
        public void GetAll_Return_Workers_When_Is_All_Ok()
        {
            //Arrange
            var workerRepository = A.Fake<IWorkerRepository>();
            A.CallTo(() => workerRepository.GetAll()).Returns(new List<Worker>()
            {
                new Worker()
                {
                    FirstName = "Bartosz",
                    LastName = "Kwiatkowski",
                    Id = 13,
                    TypeOfWork = new TypeOfWork()
                    {
                        Name = "kelner"
                    }
                },
                new Worker()
                {
                    FirstName = "Mateusz",
                    LastName = "Głuchy",
                    Id = 14,
                    TypeOfWork = new TypeOfWork()
                    {
                        Name = "sprzątacz"
                    }
                },
            });
            var sut = new WorkerService(workerRepository);
            //Act
            var result = sut.GetAll();
            //Assert
            result.Should().HaveCount(expected: 2);
            result.FirstOrDefault().Id.Should().Be(expected: 13);
        }

        [Fact]
        public void GetAll_Return_Empty_List_When_Repository_Empty_List()
        {
            //Arrange
            var workerRepository = A.Fake<IWorkerRepository>();
            A.CallTo(() => workerRepository.GetAll()).Returns(new List<Worker>());
            var sut = new WorkerService(workerRepository);
            //Act
            var result = sut.GetAll();
            //Assert
            result.Should().HaveCount(expected: 0);
        }
    }
}
