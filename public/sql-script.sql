-- Create database schema for Calendar Booking System
CREATE DATABASE IF NOT EXISTS reservation;
USE reservation;

-- 1️⃣ Create address table (no dependencies)
CREATE TABLE IF NOT EXISTS address (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    street VARCHAR(50) NOT NULL,
    street_number SMALLINT NOT NULL,
    city VARCHAR(30) NOT NULL,
    suburb VARCHAR(30) NOT NULL,
    postal_code SMALLINT NOT NULL
);

-- 2️⃣ Create image table (no dependencies)
CREATE TABLE IF NOT EXISTS image (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    path VARCHAR(255) NOT NULL,
    name VARCHAR(150) NOT NULL
);

-- 3️⃣ Create customer table (no dependencies)
CREATE TABLE IF NOT EXISTS customer (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    phone TINYINT NOT NULL,
    email VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL
);

-- 4️⃣ Create business table (depends on image)
CREATE TABLE IF NOT EXISTS business (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    logo BIGINT,
    CONSTRAINT fk_business_logo FOREIGN KEY (logo) REFERENCES image(id)
        ON DELETE SET NULL ON UPDATE CASCADE
);

-- 5️⃣ Create service table (depends on image)
CREATE TABLE IF NOT EXISTS service (
    id SMALLINT PRIMARY KEY AUTO_INCREMENT,
    label VARCHAR(15) NOT NULL,
    price DECIMAL(4,2) NOT NULL,
    lasts TIME NOT NULL,
    img BIGINT,
    CONSTRAINT fk_service_img FOREIGN KEY (img) REFERENCES image(id)
        ON DELETE SET NULL ON UPDATE CASCADE
);

-- 6️⃣ Create shop table (depends on business, address, image)
CREATE TABLE IF NOT EXISTS shop (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    business_id BIGINT NOT NULL,
    name VARCHAR(50) NOT NULL,
    img BIGINT,
    opening_time TIME NOT NULL,
    closing_time TIME NOT NULL,
    address_id BIGINT NOT NULL,
    CONSTRAINT fk_shop_business FOREIGN KEY (business_id) REFERENCES business(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_shop_img FOREIGN KEY (img) REFERENCES image(id)
        ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT fk_shop_address FOREIGN KEY (address_id) REFERENCES address(id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- 7️⃣ Create barber table (depends on shop, image)
CREATE TABLE IF NOT EXISTS barber (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    img BIGINT,
    shop_id BIGINT NOT NULL,
    CONSTRAINT fk_barber_img FOREIGN KEY (img) REFERENCES image(id)
        ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT fk_barber_shop FOREIGN KEY (shop_id) REFERENCES shop(id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- 8️⃣ Create business_have_service junction table (depends on business, service)
CREATE TABLE IF NOT EXISTS business_have_service (
    business_id BIGINT NOT NULL,
    service_id SMALLINT NOT NULL,
    PRIMARY KEY (business_id, service_id),
    CONSTRAINT fk_bhs_business FOREIGN KEY (business_id) REFERENCES business(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_bhs_service FOREIGN KEY (service_id) REFERENCES service(id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- 9️⃣ Create phone table (depends on shop)
CREATE TABLE IF NOT EXISTS phone (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    shop_id BIGINT NOT NULL,
    value CHAR(10) NOT NULL,
    CONSTRAINT fk_phone_shop FOREIGN KEY (shop_id) REFERENCES shop(id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- 🔟 Create comment table (depends on customer)
CREATE TABLE IF NOT EXISTS comment (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    customer_id BIGINT NOT NULL,
    comment_value VARCHAR(200) NOT NULL,
    CONSTRAINT fk_comment_customer FOREIGN KEY (customer_id) REFERENCES customer(id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- 11️⃣ Create reservation table (depends on customer, barber, shop)
CREATE TABLE IF NOT EXISTS reservation (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    reservation_date DATE NOT NULL,
    reservation_time TIME NOT NULL,
    customer_id BIGINT NOT NULL,
    barber_id BIGINT NOT NULL,
    shop_id BIGINT NOT NULL,
    CONSTRAINT fk_reservation_customer FOREIGN KEY (customer_id) REFERENCES customer(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_reservation_barber FOREIGN KEY (barber_id) REFERENCES barber(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_reservation_shop FOREIGN KEY (shop_id) REFERENCES shop(id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- 12️⃣ Create shop_have_reservation junction table (depends on shop, reservation)
CREATE TABLE IF NOT EXISTS shop_have_reservation (
    shop_id BIGINT NOT NULL,
    reservation_id BIGINT NOT NULL,
    PRIMARY KEY (shop_id, reservation_id),
    CONSTRAINT fk_shr_shop FOREIGN KEY (shop_id) REFERENCES shop(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_shr_reservation FOREIGN KEY (reservation_id) REFERENCES reservation(id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- 13️⃣ Create indexes for better query performance
CREATE INDEX idx_shop_business_id ON shop(business_id);
CREATE INDEX idx_shop_address ON shop(address_id);
CREATE INDEX idx_barber_shop ON barber(shop_id);
CREATE INDEX idx_phone_shop_id ON phone(shop_id);
CREATE INDEX idx_comment_customer_id ON comment(customer_id);
CREATE INDEX idx_reservation_customer_id ON reservation(customer_id);
CREATE INDEX idx_reservation_barber_id ON reservation(barber_id);
CREATE INDEX idx_reservation_shop_id ON reservation(shop_id);
CREATE INDEX idx_reservation_date_time ON reservation(reservation_date, reservation_time);
