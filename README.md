# ProjectMidnight

# E-Commerce Web Application

## Project Overview

This project aims to explore and understand software design principles, particularly Hexagonal Architecture and Clean Architecture. By implementing a basic e-commerce web application, we will delve into these architectures' practical aspects and their benefits in building scalable and maintainable software.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and generating static websites.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **MongoDB**: A NoSQL database for storing and managing data.

## Project Structure

The application follows Hexagonal Architecture, also known as Ports and Adapters Architecture, which promotes a separation of concerns and makes the codebase more modular, testable, and adaptable to change. Additionally, Clean Architecture principles are applied to ensure that the business logic remains independent of the framework and external dependencies.

### Domain Layer

This layer contains the core business logic and entities of the application. It includes the following entities:
- **Cart**
- **Customer**
- **Product**
- **Order**
- **Price Calculator**

### Application Layer

This layer handles the application's business rules and use cases. It orchestrates the flow of data to and from the domain layer.

### Adapter Layer

This layer acts as a bridge between the external systems and the application core. It includes the following adapters:
- **Database Adapter**: Connects to MongoDB to handle data persistence.
- **Web Adapter**: Handles HTTP requests and responses using Next.js.

### Driver Ports

Driver ports represent the entry points to the application, such as HTTP controllers, that initiate the flow of data into the system.

### Driven Ports

Driven ports represent the outgoing dependencies of the application, such as database connections or external APIs.



