namespace Restaurant.Models
{
    public class OrderItems
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Meal Meal { get; set; }
        public Component Component { get; set; }
        public decimal Price { get; set; }
    }
}
