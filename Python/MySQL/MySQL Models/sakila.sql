/*
SELECT customer.customer_id, customer.first_name, customer.last_name, customer.email, customer.address_id
FROM customer
JOIN address ON address.address_id = customer.address_id
WHERE city_id = 312
*/

/*
SELECT film.title, film.special_features, film.description, film.release_year, film.rating, category.name
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON category.category_id = film_category.category_id
WHERE category.name = "Comedy"
*/

/*
SELECT film.title, film.description, film.release_year, film.film_id
FROM film
LEFT JOIN film_actor ON film.film_id = film_actor.film_id
WHERE film_actor.actor_id = 5
*/

/*
SELECT customer.first_name, customer.last_name, customer.email, address.address
FROM customer
JOIN address ON customer.address_id = address.address_id
WHERE customer.store_id = 1 AND address.city_id in (1,42,312,459)
*/

/*
SELECT film.rating, film.release_year, film.description, film.special_features, film.title
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.special_features = "behind the scenes" AND film_actor.actor_id = 15
*/

/*
SELECT film.film_id, film.title, actor.actor_id, actor.first_name, actor.last_name
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor on film_actor.actor_id = actor.actor_id
WHERE film.film_id = 369
*/

/*
SELECT film.title, film.special_features, film.description, film.release_year, film.rating, category.name
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON category.category_id = film_category.category_id
WHERE category.name = "Drama" AND film.rental_rate = 2.99
*/

/*
SELECT film.title, film.special_features, film.description, film.release_year, film.rating, concat(actor.first_name, ' ' ,actor.last_name) as actor_name, category.name
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor on film_actor.actor_id = actor.actor_id
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON category.category_id = film_category.category_id
WHERE category.name = "Action" AND actor.first_name = "SANDRA" AND actor.last_name = "KILMER"
*/