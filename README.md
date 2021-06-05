# Product Register API

### Tecnologies
The API was developed by using NodeJS tecnology.
The database used in this project was mongoDB, a simple and powerful noSQL database,
used for big companies and applications like Globo, MTV and LinkedIn.

### Purpose
This API was developed with an initial purpose of register users and their products to assist business management.

## Database Models Relation
Basically two entities were created: User and Item.
Both are related via user ID by a one_to_many relationship.
An item is directly linked to one, and only one, user, but each user can be associated with several different items

## Schemas
The schemas of  **user** and **item** entities are described below:
### User
```
{
  name: { type: String, required: true },
  login: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: false },
  createdAt: { type: Date, required: false },
  updatedAt: { type: Date, required: false },
}
```
### Item
```
{
  name: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: String, required: true },
  category: { type: String, required: true },
  ownerId: { type: String, required: true },
  description: { type: String, required: false },
  createdAt: { type: Date, required: false },
  updatedAt: { type: Date, required: false },
}
```

## User Endpoints
1. Create User:<br />
   URL: https://product-register-api.herokuapp.com/user/create<br />
   method:  POST<br />
   returns: Created User<br />
   body params:
   ```
   {
     name: { type: String, required: true },
     role: { type: String, required: false },
     login: { type: String, required: true },
     password: { type: String, required: true },
   }
   ```

2) SignIn:<br />
   URL: https://product-register-api.herokuapp.com/user/access<br />
   method:  POST<br />
   returns: User if exists, null if don't<br />
   body params:
   ```
   {
     login: { type: String, required: true },
     password: { type: String, required: true },
   }
   ```

3) Check if an user exists:<br />
   URL: https://product-register-api.herokuapp.com/user/exists<br />
   method:  POST<br />
   returns: boolean<br />
   body params:
   ```
   {
     login: { type: String, required: true }
   }
   ```

4) Update an user:<br />
   URL: https://product-register-api.herokuapp.com/user<br />
   mathod:  PATCH<br />
   returns: Updated user<br />
   body params:
   ```
   {
     id: { type: String, required: true },
     newValues: { type: UserModel, required: true }
   }
   ```

5) Find by ID:<br />
   URL: https://product-register-api.herokuapp.com/user<br />
   method:  GET<br />
   returns: finded user if exists, null if don't<br />
   query params:
   ```
   {
     id: { type: String, required: true }
   }
   ```

6) Get position:<br />
   URL: https://product-register-api.herokuapp.com/user/position<br />
   method:  GET<br />
   returns: user index in the data bank (-1 if don't exists)<br />
   query params:
   ```
   {
     id: { type: String, required: true }
   }
   ```

## Items Endpoints
1) Create:<br />
   URL: https://product-register-api.herokuapp.com/item/create<br />
   method:  POST<br />
   returns: all users items (including the created)<br />
   body params:
   ```
   {
     name: { type: String, required: true},
     category: { type: String, required: true},
     price: { type: String, required: true},
     ownerId: { type: String, required: true},
     quantity: { type: String, required: true},
     description: { type: String, required: false},
   }
   ```

2) Update:<br />
   URL: https://product-register-api.herokuapp.com/item<br />
   method:  PATCH<br />
   returns: all users items (including the updated)<br />
   body params:
   ```
   {
     id: { type: String, required: true},
     newValues: { type: ItemModel, required: true},
   }
   ```

3) Find by ID:<br />
   URL: https://product-register-api.herokuapp.com/item<br />
   method:  GET<br />
   returns: finded item<br />
   query params:
   ```
   {
     id: { type: String, required: true}
   }
   ```

4) Get all:<br />
   URL: https://product-register-api.herokuapp.com/item/all<br />
   method:  GET<br />
   returns: all items for the ownerId<br />
   query params:
   ```
   {
     ownerId: { type: String, required: true}
   }
   ```

5) Delete:<br />
   URL: https://product-register-api.herokuapp.com/item/selete<br />
   method:  DELETE<br />
   returns: all remaining items<br />
   query params:
   ```
   {
     id: { type: String, required: true}
   }
   ```
## How to make changes to the project?
It's simple! Just run the following commands in the terminal:
1. git clone https://github.com/DanielSantos01/product-register-api
2. cd product-register-api
3. yarn install or npm install<br />
_Ready! Now just make your changes and, if you want, submit a pull request._
