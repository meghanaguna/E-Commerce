import kids_hat from './kids_hat.png';
import kids_dress from './kids_dress.png';
import kids_joggers from './kids_joggers.png';
import kids_pajamas from './kids_pajamas.png';
import kids_winter_jacket from './kids_winter_jacket.png';
import kids_hoodie from './kids_hoodie.png';
import kids_sneakers from './kids_sneakers.png';
import kids_shorts from './kids_shorts.png';
import kids_tshirt from './kids_tshirt.png';
import ankle_boots from './ankle_boots.png';
import trench_coat from './trench_coat.png';
import formal_pants from './formal_pants.png';
import winter_coat from './winter_coat.png';
import maxi_dress from './maxi_dress.png';
import joggers from './joggers.png';
import silk_blouse from './silk_blouse.png';
import heeled_sandals from './heeled_sandals.png';
import leather_handbag from './leather_handbag.png';
import summer_dress from './summer_dress.png';
import slim_fit_chinos from './slim_fit_chinos.png';
import hoodie from './hoodie.png';
import graphic_tshirt from './graphic_tshirt.png';
import casual_shirt from './casual_shirt.png';
import denim_jeans from './denim_jeans.png';
import running_shoes from './running_shoes.png';
import leather_jacket from './leather_jacket.png';
import formal_blazer from './formal_blazer.png';
import sneakers from './sneakers.png';
import turtleneck_sweater from './turtleneck_sweater.png';


let all_products=[
  {
    "id": 1,
    "name": "Casual Shirt",
    "category": "Mens",
    "image": casual_shirt,
    "new_price": 29.99,
    "old_price": 39.99
  },
  {
    "id": 2,
    "name": "Denim Jeans",
    "category": "Mens",
    "image": denim_jeans,
    "new_price": 49.99,
    "old_price": 59.99
  },
  {
    "id": 3,
    "name": "Leather Jacket",
    "category": "Mens",
    "image": leather_jacket,
    "new_price": 119.99,
    "old_price": 149.99
  },
  {
    "id": 4,
    "name": "Running Shoes",
    "category": "Mens",
    "image": running_shoes,
    "new_price": 79.99,
    "old_price": 99.99
  },
  {
    "id": 5,
    "name": "Formal Blazer",
    "category": "Mens",
    "image": formal_blazer,
    "new_price": 89.99,
    "old_price": 109.99
  },
  {
    "id": 6,
    "name": "Sneakers",
    "category": "Mens",
    "image": sneakers,
    "new_price": 59.99,
    "old_price": 79.99
  },
  {
    "id": 7,
    "name": "Turtleneck Sweater",
    "category": "Mens",
    "image": turtleneck_sweater,
    "new_price": 39.99,
    "old_price": 49.99
  },
  {
    "id": 8,
    "name": "Graphic T-Shirt",
    "category": "Mens",
    "image": graphic_tshirt,
    "new_price": 24.99,
    "old_price": 34.99
  },
  {
    "id": 9,
    "name": "Hoodie",
    "category": "Mens",
    "image": hoodie,
    "new_price": 54.99,
    "old_price": 69.99
  },
  {
    "id": 10,
    "name": "Slim Fit Chinos",
    "category": "Mens",
    "image": slim_fit_chinos,
    "new_price": 44.99,
    "old_price": 59.99
  },
  {
    "id": 11,
    "name": "Summer Dress",
    "category": "Womens",
    "image": summer_dress,
    "new_price": 49.99,
    "old_price": 69.99
  },
  {
    "id": 12,
    "name": "Leather Handbag",
    "category": "Womens",
    "image": leather_handbag,
    "new_price": 89.99,
    "old_price": 119.99
  },
  {
    "id": 13,
    "name": "Heeled Sandals",
    "category": "Womens",
    "image": heeled_sandals,
    "new_price": 59.99,
    "old_price": 79.99
  },
  {
    "id": 14,
    "name": "Silk Blouse",
    "category": "Womens",
    "image": silk_blouse,
    "new_price": 39.99,
    "old_price": 54.99
  },
  {
    "id": 15,
    "name": "Joggers",
    "category": "Womens",
    "image": joggers,
    "new_price": 34.99,
    "old_price": 44.99
  },
  {
    "id": 16,
    "name": "Maxi Dress",
    "category": "Womens",
    "image": maxi_dress,
    "new_price": 79.99,
    "old_price": 99.99
  },
  {
    "id": 17,
    "name": "Winter Coat",
    "category": "Womens",
    "image": winter_coat,
    "new_price": 129.99,
    "old_price": 159.99
  },
  {
    "id": 18,
    "name": "Formal Pants",
    "category": "Womens",
    "image": formal_pants,
    "new_price": 49.99,
    "old_price": 69.99
  },
  {
    "id": 19,
    "name": "Trench Coat",
    "category": "Womens",
    "image": trench_coat,
    "new_price": 99.99,
    "old_price": 129.99
  },
  {
    "id": 20,
    "name": "Ankle Boots",
    "category": "Womens",
    "image": ankle_boots,
    "new_price": 74.99,
    "old_price": 94.99
  },
  {
    "id": 21,
    "name": "Kids T-Shirt",
    "category": "Kids",
    "image": kids_tshirt,
    "new_price": 14.99,
    "old_price": 19.99
  },
  {
    "id": 22,
    "name": "Kids Shorts",
    "category": "Kids",
    "image": kids_shorts,
    "new_price": 17.99,
    "old_price": 24.99
  },
  {
    "id": 23,
    "name": "Kids Sneakers",
    "category": "Kids",
    "image": kids_sneakers,
    "new_price": 29.99,
    "old_price": 39.99
  },
  {
    "id": 24,
    "name": "Kids Hoodie",
    "category": "Kids",
    "image": kids_hoodie,
    "new_price": 34.99,
    "old_price": 44.99
  },
  {
    "id": 25,
    "name": "Kids Winter Jacket",
    "category": "Kids",
    "image": kids_winter_jacket,
    "new_price": 59.99,
    "old_price": 79.99
  },
  {
    "id": 26,
    "name": "Kids Pajamas",
    "category": "Kids",
    "image": kids_pajamas,
    "new_price": 24.99,
    "old_price": 34.99
  },
  {
    "id": 27,
    "name": "Kids Dress",
    "category": "Kids",
    "image": kids_dress,
    "new_price": 34.99,
    "old_price": 49.99
  },
  {
    "id": 28,
    "name": "Kids Joggers",
    "category": "Kids",
    "image": kids_joggers,
    "new_price": 29.99,
    "old_price": 39.99
  },
  {
    "id": 29,
    "name": "Kids Hat",
    "category": "Kids",
    "image": kids_hat,
    "new_price": 14.99,
    "old_price": 19.99
  }
]

export default all_products;
