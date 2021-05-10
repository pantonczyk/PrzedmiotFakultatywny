using Restaurant.Models;

namespace RestaurantManager.Dal.Repositories
{
    public class TypeOfWorkRepositories : ITypeOfWorkRepositories
    {
        private readonly RestaurantManagerContext _context;
        public TypeOfWorkRepositories(RestaurantManagerContext context)
        {
            _context = context;
        }

        public void SaveTypeOfWork(TypeOfWork typeOfWork)
        {
            _context.Add(typeOfWork);
            _context.SaveChanges();
        }
    }

    public interface ITypeOfWorkRepositories
    {
        void SaveTypeOfWork(TypeOfWork typeOfWork);
    }
}
