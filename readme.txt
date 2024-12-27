Requirements:
* Release 1.0
  - Show a list of products
* Release 2.0
  - Add products to shopping cart (CRUD)
  - Shopping cart checkout
* Release 3.0
  - Login/logout security
  - Track previous orders for logged in users

High level steps:
1. Setup database tables
2. Create Spring Boot starter
3. Setup Product and ProductCategory entities (with JPA mappings)
4. Create REST API for GET/POST/PUT/DELETE on Products


TO-DO:
- Front end
	1. Create angular project
	2. Create Angular component for the product-list
	3. Create a TS class for Products
	4. Create Angular service to call REST APIs
	5. Configure product-list component to subscribe to the Angular service for data updates
	6. Display data into HTML
	7. Add cross-origin support in Spring Boot