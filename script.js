
        document.addEventListener("DOMContentLoaded", function() {
            const restaurants = [
                { name: "Pizza Palace", cuisine: "Italian" },
                { name: "Sushi World", cuisine: "Japanese" },
                { name: "Burger Hub", cuisine: "Fast Food" },
                { name: "Spicy Delight", cuisine: "Indian" }
            ];

            const restaurantList = document.getElementById("restaurant-list");
            const searchInput = document.getElementById("search");

            function displayRestaurants(filteredRestaurants) {
                restaurantList.innerHTML = "";
                filteredRestaurants.forEach(restaurant => {
                    const div = document.createElement("div");
                    div.classList.add("restaurant");
                    div.innerHTML = `<h3>${restaurant.name}</h3><p>${restaurant.cuisine}</p>`;
                    restaurantList.appendChild(div);
                });
            }

            searchInput.addEventListener("input", function() {
                const query = searchInput.value.toLowerCase();
                const filtered = restaurants.filter(restaurant =>
                    restaurant.name.toLowerCase().includes(query) ||
                    restaurant.cuisine.toLowerCase().includes(query)
                );
                displayRestaurants(filtered);
            });

            displayRestaurants(restaurants);
        });