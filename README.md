# 📅 Calendar Reservation Backend  

A powerful and flexible **backend service** designed for managing shop reservations, staff schedules, and customer availability. Built with **Node.js**, this system provides businesses with an efficient way to handle bookings, reduce scheduling conflicts, and improve customer satisfaction.  

---

## 🚀 Key Features  

- **Smart Availability Management**  
  - Check available slots by day or month  
  - Automatically adjust based on shop working hours  

- **Reservation Handling**  
  - Manage bookings seamlessly with real-time updates  
  - Avoid double-booking with structured database design  

- **Shop Data Integration**  
  - Store and retrieve shop details, working hours, and services offered  
  - Flexible enough to support multiple locations or service providers  

- **Media & Information Access**  
  - Serve images (shops, staff, services) for a richer customer experience  
  - Easy integration with frontend applications  

- **Scalable Architecture**  
  - Modular design with controllers and models  
  - Built to grow with your business  

---

## 🛠️ Tech Stack  

- **Node.js** – server-side runtime  
- **Express.js** – API routing & middleware  
- **Database Ready** – with ER schema provided for reservations & availability  
- **Prettier** – code formatting for consistency  

---

## 📡 API Endpoints  

### Public Routes  

- `GET /api/img`  
  Retrieves image data.  

- `GET /api/getShopData`  
  Returns shop information (details, working hours, etc.).  

- `GET /api/month`  
  Fetches availability for an entire month.  

- `GET /api/day`  
  Fetches available slots for a specific day.  

- Any undefined route will return:  
  **400 Bad Request** → `"Cannot find page"`


---

## 📂 Repository Overview  

- `controllers/` → Business logic for availability, reservations, shop data, and media  
- `models/` → Data access for reservations & shop working hours  
- `public/` → Static assets (images, ER diagrams)  
- `pages/` → Simple HTML interface (for demo/testing)  
- `constants.js` & `utils.js` → Configuration and helper functions  

---

## 🚦 Getting Started  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/calendar-back-node.git
   cd calendar-back-node
