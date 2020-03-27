# link-shortener

Link shortener for create short link, and grab statistics for analytics your links for business

This service based on
- node.js
- fastify
- ajv
- postgres
- sequelize
- docker
- docker-compose

## Requirements

### v1

- One customer can have maximum 1000 links
- Each link should expire after 7 days (default)
- User can switch expired time for link to unlimited (this will not clear old links)
- If user inactive (last login) more than 1 year. Remove his links. Make cron job for every day.
- When request getSourceByLink => fetch user data like country by IP, browser, reference
- Auth only via google
- Customer can't update link, because then in statistics dosn't make sense 

- #### Tables

    - Each link should have (https://domain.com/customerId/slug => https://domain.com/123/YQwCA)
        - Opening count all,
        - Opening by Countries (like UK:3, USA: 15, RUS: 7),
        - Opening by devices (like Android: 5, iOS: 3, Chrome: 15),
        - References. From where user clicked to link,
        - Uniq slug (randomString). Should be only characters
        - name
        - source (real link),
        - customerId,
        - expiredDate
        - createdAt
    
    - Each customer should have
        - email (uniq)
        - password
        - name
    
    - Policy (uniq by version + customerId)
        - version
        - text
        - customerId
        - accepted (boolean)
        
- #### Endpoints

    - `/login` (POST) Auth = return auth_token
    - `/link`  (POST) Create link = return customerId+linkSlug
    - `/link/delete`  (DELETE) Remove link = return { error } or empty 200 status if success
    - `/link/delete/group`  (DELETE) Remove bulk links by slugs = return { error } or empty 200 status if success
    - `/link/all` (GET) Get customer links = return { count, list: [], page, perPage, pages }
    Each link in list should have
        - name
        - opening count all
        - opening count android
        - opening count apple
        - opening other
        - countries opening count { UK, USA, UA, RUS, CH }
        - expired date
    - `/link/{slug}` (GET) Get info by link
    From auth token get customerId, find link in database by customerId, linkSlug
    return next info
        - opening count all
        - opening count by devices
        - opening count by coutries
        - expired date
        - name
        - references list (all places which from was opened this link)
        - createdAt
