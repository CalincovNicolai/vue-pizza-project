import { defineStore } from 'pinia';
import { ref } from 'vue';
import { MenuCartViewModel, RestaurantViewModel } from '@types/types.ts';
import RestaurantsJsonData from '@db/partners.json';

export const useRestaurantStore = defineStore('restaurant', () => {
  const _restaurants = ref([] as RestaurantViewModel[]);
  const _selectedRestaurant = ref(null as RestaurantViewModel | null);
  const _cartList = ref([] as MenuCartViewModel[]);

  function init() {
    fetchRestaurants();
  }

  function fetchRestaurants() {
    _restaurants.value = RestaurantsJsonData;
  }

  function setSelectedRestaurant(payload?: RestaurantViewModel | null) {
    if (payload) {
      _selectedRestaurant.value = payload;
      updateLocalStorage(payload);
    } else {
      const value = localStorage.getItem('restaurant');

      if (value) {
        _selectedRestaurant.value = JSON.parse(value);
      } else {
        _selectedRestaurant.value = null;
        return;
      }
    }
  }

  function fetchCartFromLocalStorage() {
    const cartList = localStorage.getItem('cart');

    if (cartList) {
      _cartList.value = JSON.parse(cartList);
    }
  }

  function resetCart() {
    localStorage.setItem('cart', JSON.stringify([]));
    _cartList.value = [];
  }

  function setSelectedItemsToCart(payload?: MenuCartViewModel | null) {
    if (!payload) {
      return;
    }

    const cartArray = localStorage.getItem('cart');
    if (cartArray) {
      const storageList = JSON.parse(cartArray);
      const index = storageList.findIndex((item: MenuCartViewModel) => item.id === payload.id);
      if (index === -1) {
        storageList.push(payload);
      } else {
        storageList[index].quantity += 1;
      }

      _cartList.value = storageList;
      localStorage.setItem('cart', JSON.stringify(_cartList.value));
    }
  }

  function updateCartItemQuantity(id: number, type: string) {
    if (type === 'increase') {
      const index = _cartList.value.findIndex((item: MenuCartViewModel) => item.id === id);
      if (index !== -1) {
        _cartList.value[index].quantity += 1;
      }
    }

    if (type === 'decrease') {
      const index = _cartList.value.findIndex((item: MenuCartViewModel) => item.id === id);
      if (index !== -1) {
        if (_cartList.value[index].quantity === 1) {
          _cartList.value.splice(index, 1);
        } else {
          _cartList.value[index].quantity -= 1;
        }
      }
    }

    localStorage.setItem('cart', JSON.stringify(_cartList.value));
  }

  function calculateCartTotalPrice() {
    let totalPrice = 0;
    _cartList.value.forEach((item: MenuCartViewModel) => {
      totalPrice += item.price * item.quantity;
    });

    return totalPrice;
  }

  function sortItemsExpensiveToCheap() {
    _selectedRestaurant.value?.products.sort((a, b) => b.price - a.price);
  }

  function sortItemsCheapToExpensive() {
    _selectedRestaurant.value?.products.sort((a, b) => a.price - b.price);
  }

  function searchRestaurant(filter: string) {
    _restaurants.value = RestaurantsJsonData.filter((restaurant: RestaurantViewModel) => {
      return restaurant.name.toLowerCase().includes(filter.toLowerCase()) ||
        restaurant.products.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())).length > 0||
        restaurant.products.filter(item => item.description.toLowerCase().includes(filter.toLowerCase())).length > 0;
    });

  }

  function updateLocalStorage(payload: RestaurantViewModel | null) {
    localStorage.setItem('restaurant', JSON.stringify(payload));
  }

  return {
    getRestaurants: _restaurants,
    getSelectedRestaurant: _selectedRestaurant,
    getCartList: _cartList,
    init,
    setSelectedRestaurant,
    setSelectedItemsToCart,
    fetchCartFromLocalStorage,
    resetCart,
    updateCartItemQuantity,
    calculateCartTotalPrice,
    sortItemsExpensiveToCheap,
    sortItemsCheapToExpensive,
    searchRestaurant
  }
});
