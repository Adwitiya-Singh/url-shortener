Url shortening API built for the Rethink coding challenge.

To run the challenge:

- FORK this repo
- Set up your mongoDB Atlas credentials [here](https://docs.atlas.mongodb.com/getting-started/)
- put your [mongoDB URI](https://docs.mongodb.com/manual/reference/connection-string/) in the `config/default.json` file
- Make a POST request to the `baseURL` in the `config/default.json` file with the long url as the body of the request:

```json
{
    "longUrl": "https://www.amazon.com/gp/product/B08HLYRPYV/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&th=1"
}
```
-The server will respond with a shortenedURl if the url porvided is valid:
```json
{
    "_id": "601dcf7ae0679656402cc9b6",
    "longUrl": "https://www.amazon.com/gp/product/B08HLYRPYV/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&th=1",
    "shortUrl": "http://localhost:5000/dLqcPEgYy",
    "urlCode": "dLqcPEgYy",
    "date": "Fri Feb 05 2021 15:06:34 GMT-0800 (Pacific Standard Time)",
    "__v": 0
}
```

Packages Used:

- [config](https://www.npmjs.com/package/config)
- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [shortid](https://www.npmjs.com/package/shortid)
- [validurl](https://www.npmjs.com/package/valid-url)
- [nodemon](https://www.npmjs.com/package/nodemon)

Implemented:

- URL Validation before shortening
- Cloud based(MongoDB Atlas) url storage 
- Check DB to see if a shortURL already exists before creating a new one 

Future Works:

- A simple `react.js` frontend to demonstrate the API in an easier fashion
