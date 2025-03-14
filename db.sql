CREATE TABLE shoes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    category INTEGER NOT NULL,
    rating INTEGER NOT NULL,
    size INT[] NOT NULL,
    img_url text

);

INSERT INTO shoes (title, price, category, rating, size, img_url)
VALUES
    ('Nike Air Max', 129.99, 1, 5, ARRAY[40, 41, 42, 43, 44],'https://img.freepik.com/free-photo/shot-elegant-beautiful-leather-heels-isolated-white_181624-32574.jpg?ga=GA1.1.1788822883.1716140498&semt=ais_hybrid'),
    ('Adidas Ultraboost', 149.99, 1, 4, ARRAY[38, 39, 40, 41, 42],'https://img.freepik.com/free-photo/shot-elegant-beautiful-leather-heels-isolated-white_181624-32574.jpg?ga=GA1.1.1788822883.1716140498&semt=ais_hybrid'),
    ('Puma RS-X', 119.99, 2, 4, ARRAY[39, 40, 41, 42, 43],'https://img.freepik.com/free-photo/shot-elegant-beautiful-leather-heels-isolated-white_181624-32574.jpg?ga=GA1.1.1788822883.1716140498&semt=ais_hybrid'),
    ('New Balance 574', 99.99, 3, 5, ARRAY[40, 41, 42, 43],'https://img.freepik.com/free-photo/shot-elegant-beautiful-leather-heels-isolated-white_181624-32574.jpg?ga=GA1.1.1788822883.1716140498&semt=ais_hybrid'),
    ('Reebok Classic', 89.99, 3, 4, ARRAY[39, 40, 41, 42, 43],'https://img.freepik.com/free-photo/shot-elegant-beautiful-leather-heels-isolated-white_181624-32574.jpg?ga=GA1.1.1788822883.1716140498&semt=ais_hybrid');
