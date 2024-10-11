"use client"; // Add this line to declare the component as a Client Component

import { useState } from 'react';
import Link from 'next/link'; // Assuming you're using Next.js for routing
import NavBar from "@/components/navbar/navbar";

const events = [
  {
    name: "Tomato Cultivation Workshop",
    date: "April 15, 2024",
    capacity: 20,
    description: "Join us for a hands-on workshop where you will learn how to plant tomatoes in Sunny Singapore.",
    image: "/community2.png", // Replace with your image path
    rsvpLink: "/rsvp/spring-planting",
  },
  {
    name: "Plant Together @ Jurong Lake!",
    date: "May 5, 2024",
    capacity: 15,
    description: "Learn the essentials of planting. Free pots, soil, and shovels will be provided. Have fun!",
    image: "/JurongLake.png", // Replace with your image path
    rsvpLink: "/rsvp/herb-garden",
  },
  {
    name: "Meet the Gardeners @ Sengkang Community Garden",
    date: "Aug 15, 2024",
    capacity: 20,
    description: "Befriend and learn from our community planters at Sengkang Community Garden. All are welcome!",
    image: "/sengkang.png", // Replace with your image path
    rsvpLink: "/rsvp/spring-planting",
  },
  {
    name: "The Basics of Herbs",
    date: "Sept 5, 2024",
    capacity: 15,
    description: "Learn how to create your own herb garden and discover the benefits of fresh herbs.",
    image: "/community.png", // Replace with your image path
    rsvpLink: "/rsvp/herb-garden",
  },
  // Add more events as needed
];

export default function Education() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleRSVPClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleConfirm = () => {
    // Handle the RSVP submission logic here
    console.log('RSVP submitted:', formData);
    // Close the modal
    setIsModalOpen(false);
    // Reset form data
    setFormData({ name: '', phone: '', email: '' });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <div className="bg-white">
      <div className="p-10 bg-emerald-700">
        <NavBar />
      </div>
      <div className="bg-white py-10 flex flex-col items-center">
        <h2 className="text-center text-black max-w-2xl mb-10">
          Welcome to our Community Garden Events! We’re excited to bring together gardening 
          enthusiasts and newcomers alike for a fun and enriching experience. Join us as <strong>we dig into the joys of planting, 
          cultivating, and nurturing our very own plants.</strong>
          These events are not just about growing food; they’re also an <strong>opportunity to connect with your neighbors, share tips, and make lasting friendships.</strong>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 w-full max-w-6xl mx-auto mt-12">
        {events.map((event, index) => (
          <div key={index} className="flex bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0 w-1/3">
              <img src={event.image} alt={event.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex-grow p-6">
              <h3 className="text-lg font-bold text-emerald-700">{event.name}</h3>
              <p className="text-sm text-gray-600">{event.date}</p>
              <p className="text-sm text-gray-600">Max Capacity: {event.capacity}</p>
              <p className="mt-2 text-gray-800">{event.description}</p>
              <button 
                onClick={() => handleRSVPClick(event)} 
                className="mt-4 inline-block px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-600 transition duration-200"
              >
                RSVP
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RSVP Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-1/3 text-emerald-700">
            <h2 className="text-lg font-bold mb-4" >RSVP for {selectedEvent?.name}</h2>
            <div className="mb-4">
              <label className="block text-sm mb-1">Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                className="border border-gray-300 rounded w-full p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-1">Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleInputChange} 
                className="border border-gray-300 rounded w-full p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-1">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                className="border border-gray-300 rounded w-full p-2"
                required
              />
            </div>
            <div className="flex justify-end">
              <button 
                onClick={handleConfirm} 
                className="mr-2 px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-600 transition duration-200"
              >
                Confirm
              </button>
              <button 
                onClick={handleCancel} 
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-200 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      
      <br></br>
      <br></br>
    </div>
  );
}
