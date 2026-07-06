# RiwiMarket Database Project

## Project Description

This project was developed as part of a database simulation for Riwi. The objective is to design and implement a relational database for RiwiMarket S.A.S., a company dedicated to the distribution of consumer products.

The original information was provided in a CSV file containing duplicated records, inconsistent data, null values, and redundant information. The data was analyzed, normalized, and implemented in PostgreSQL to improve data integrity and organization.

---

## Technologies Used

- PostgreSQL
- pgAdmin 4
- SQL
- Draw.io (Entity Relationship Diagram)
- CSV files

---

## Database Engine

- PostgreSQL 17
- pgAdmin 4

---

## Normalization Process

The database was normalized up to the Third Normal Form (3NF).

### First Normal Form (1NF)

- Removed repeated groups.
- Ensured atomic values.
- Eliminated duplicate records.

### Second Normal Form (2NF)

- Removed partial dependencies.
- Created independent tables for suppliers, products, categories, brands, warehouses, and cities.

### Third Normal Form (3NF)

- Removed transitive dependencies.
- Established relationships using primary and foreign keys.

---

## Database Structure

The database includes the following tables:

- rm_suppliers
- rm_products
- rm_categories
- rm_brands
- rm_cities
- rm_warehouses
- rm_purchases
- rm_purchase_details
- rm_inventory
- rm_inventory_movements
- rm_employees

Each table uses primary keys, foreign keys, unique constraints, and appropriate validations.

---

## Entity Relationship Model

The Entity Relationship Model (ERD) represents the relationships between suppliers, products, purchases, inventory, warehouses, cities, and employees.

The diagram was created using Draw.io and exported as a PDF.

---

## Installation Instructions

1. Install PostgreSQL.
2. Open pgAdmin 4.
3. Create a new database.
4. Execute the SQL script to create all tables.
5. Import the CSV files.
6. Execute the SQL queries.

---

## Database Creation

Database name example:

```
bd_juan_reyes_lovelace
```

All tables start with the prefix:

```
rm_
```

Example:

```
rm_products
rm_suppliers
rm_categories
```

---

## Data Loading Process

The original CSV file was separated into multiple CSV files according to the normalized tables.

The data was imported into PostgreSQL using the COPY command.

Example:

```sql
COPY rm_products
FROM 'products.csv'
DELIMITER ','
CSV HEADER;
```

---

## SQL Queries Explanation

The project includes SQL queries to:

- Display available inventory by product.
- Show products stored in each warehouse.
- Calculate total purchases by supplier.
- Identify products with low stock.
- Display the five most purchased products.
- Calculate inventory value by city.

---

## Developer Information

**Full Name:** Juan David Reyes García

**Clan:** Lovelace

**Institution:** Riwi

**Year:** 2026

---

## Conclusion

This project demonstrates the complete database design process, including data analysis, normalization, relational modeling, implementation in PostgreSQL, data loading, and SQL query development. The final solution improves data consistency, integrity, and accessibility for RiwiMarket S.A.S.
