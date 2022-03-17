# Movie API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /products`
- `POST /products`
- `GET /categories`
- `GET /bucket`
- `DELETE /bucket/:id`
- `POST /bucket/add/:id`
- `post /bucket/buy`



&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "phoneNumber": "string",
}
```

_Response (201 - Created)_

```json
{
    "id": 1,
    "username": "test",
    "email": "test@mail.com"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Username is required"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "Password length min 5"
}
```

&nbsp;

## 2. POST /login


Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
    "id": 5,
    "username": "test2",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJ0ZXN0MiIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY0MTIwNDYzNX0.873yOAuRKb1_Ic6CtAxm8Jf9BLYLNPQBorK2YU-4PmY"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. GET /products

Description:
- Get all product from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  {
        "id": 1,
        "name": "book",
        "price": 12.49,
        "stock": 98,
        "import": false,
        "Category": {
            "id": 2,
            "name": "books",
            "tax": false
        }
    },
    {
        "id": 2,
        "name": "music CD",
        "price": 14.99,
        "stock": 93,
        "import": false,
        "Category": {
            "id": 4,
            "name": "music",
            "tax": true
        }
    },
  ...,
]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Forbiden to Access"
}
```

&nbsp;

## 4. POST /products

Description:
- add product to database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

- body: 

```json
{
    "name": "string",
    "price": "number",
    "import": true or false,
    "stock": "number",
    "categoryID": "number",

}

```

_Response (201 - OK)_

```json
{
    "name": "string",
    "price": "number",
    "import": true or false,
    "stock": "number",
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Forbiden to Access"
}
```

&nbsp;

## 5. GET /categories

Description:
- Get  categories from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "name": "string",
        "id": "number",
        "tax": true or false,
    },
    {
        "name": "string",
        "id": "number",
        "tax": true or false,
    },
    ....,
]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Forbiden to Access"
}
```

&nbsp;

## 5. GET /bucket

Description:
- Get  carts user from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
     

]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Forbiden to Access"
}
```

