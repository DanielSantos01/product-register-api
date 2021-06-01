# Product Register API

The API was developed by using NodeJS tecnology.

The database used in this project was mongoDB, a simple and powerful noSQL database,
used for big companies and applications like Globo, MTV and LinkedIn.

This API was developed with an initial purpose of register users and their products.

# Models Relation
basically two entities were created: User and Item.
Both are related via user ID by a one_to_many relationship.
An item is directly linked to one, and only one, user, but each user can be associated with several different items

# User Endpoints
1) Create User:
   url: https://product-register-api.herokuapp.com/user/create
   method:  POST
   returns: Created User
   body params:
        * name:     string, required
        * role:     string, optional
        * login:    string, required
        * password: string, required

2) SignIn:
   url: https://product-register-api.herokuapp.com/user/access
   method:  POST
   returns: User if exists, null if don't
   body params:
        * login:    string, required
        * password: string, required

3) Check if an user exists:
   url: https://product-register-api.herokuapp.com/user/exists
   method:  POST
   returns: boolean
   body params:
        * login:      string, required

4) Update an user:
   url: https://product-register-api.herokuapp.com/user
   mathod:  PATCH
   returns: Updated user
   body params:
        * id:         string, required
        * new values: object, required

5) Find by ID:
   url: https://product-register-api.herokuapp.com/user
   method:  GET
   returns: finded user if exists, null if don't
   query params:
         * id:        string, required

6) Get position:
   url: https://product-register-api.herokuapp.com/user/position
   method:  GET
   returns: user index in the data bank (-1 if don't exists)
   query params:
         * id:        string, required

# Items Endpoints
1) Create:
   url: https://product-register-api.herokuapp.com/item/create
   method:  POST
   returns: all users items (including the created)
   body params:
         * name:        string, required
         * category:    string, required
         * price:       string, required
         * ownerId:     string, required
         * quantity:    string, required
         * description: string, optional

2) Update:
   url: https://product-register-api.herokuapp.com/item
   method:  PATCH
   returns: all users items (including the updated)
   body params:
         * id:          string, required
         * new values:  object, required

3) Find by ID:
   url: https://product-register-api.herokuapp.com/item
   method:  GET
   returns: finded item
   query params:
         * id:          string, required

4) Get all:
   url: https://product-register-api.herokuapp.com/item/all
   method:  GET
   returns: all items for the ownerId
   query params:
         * ownerId:     string, required

5) Delete:
   url: https://product-register-api.herokuapp.com/item/selete
   method:  DELETE
   returns: all remaining items
   query params:
         * id:          string, required
         
