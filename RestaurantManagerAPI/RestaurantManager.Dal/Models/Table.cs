namespace Restaurant.Models
{
    public class Table
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int NumberOfSeats { get; set; }
        public TableStatus TableStatus { get; set; }
        public Worker Worker { get; set; }
    }
}
