using System;

namespace Restaurant.Models
{
    public class Order
    {
        public int Id { get; set; }
        public Table Table { get; set; }
        public OrderStatus OrderStatus { get; set; }
        public Worker Worker { get; set; }
        public DateTime DateOfAcceptance { get; set; }
        public DateTime ReleaseDate { get; set; }
        public DateTime PaymentDate { get; set; }
        public int Discount { get; set; }
    }
}
