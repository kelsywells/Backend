# Backend

Backend for RV Airbnb

 // Listings-model: 
    holds find, insert, remove functions for listings endpoints

// Listings: 
    Router for endpoints to view all or individual listings, as well adding and deleting listings for registered users only.

// Auth-router:
    Router for login & register endpoints. 
    Uses tokens. 
    Hashed passwords for security.
    Some old notes from previously using sessions in case they are needed to revert back for any reason. Logout function kept from old sessions code in case needed at any point.
    Generate token function at the bottom for tokens in register and login functions.

// Restricted-middleware:
    Middleware used to determine if someone is allowed to: 
    -view other registered users
    -create a listing

// Secrets: 
    Holds JWT secret

// User-model: 
    Functions for viewing users, registering, logging in

// Users-router:
    Endpoint for finding users

// dbConfig: 
    For storing knexfile configuration

// Users.db3:
    Database files for existing users

// Migrations: 
    Individual table information for database showing required fields, max characters, unique constraints.

// Seeds: 
    Hold example/mock data for each individual table: 
    -Listings shows listings
    -Booking shows a listing that has been booked
    -Member shows a member with login info

// Server: 
    Holds & uses all files that are pushed to the server
    Get request/message to show server is running
    Holds old session data if needed

// Index:
    Tells server where to run

// Knexfile:
    Holds configuration settings
