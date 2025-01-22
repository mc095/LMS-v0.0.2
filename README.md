	Frontend /
	    ├── node_modules
	    ├── public
	    │     ├── vite.svg
     	    |
	    ├── src
	    │     ├── assets
	    │     │     ├── react.svg
	    |     |
	    │     ├── components
	    │     │     ├── Login.jsx
	    |     |     |-- CourseCard.jsx
	    |     |     |-- CoursesSection.jsx
	    |     |     |-- Navbar.jsx
	    |     |     |-- Sidebar.jsx
	    |     |
	    |     |-- data
	    |     |     |-- branches.json
	    |     |     |-- courses.json
	    |     |
	    |     |-- pages
	    |     |     |-- HomePage.jsx
	    |     |   
	    │     ├── hooks
	    │     │     ├── useAuth.js
	    |     |
	    │     ├── services
	    │     │     ├── authService.js
	    |     |
	    │     ├── App.css
	    │     ├── App.jsx
	    │     ├── index.css
	    │     ├── Router.jsx
	    |
	    ├── .gitignore
	    ├── eslint.config.js
	    ├── index.html
	    ├── package-lock.json
	    ├── package.json
	    ├── README.md
	    |-- tailwind.config.js
	    ├── vite.config.js


        Backend /
		├── config                                 
		│   ├── db.js                  # Database configuration
		│   ├── env.js                 # Environment variable validation
		|
		├── controllers
		│   ├── authController.js      # Authentication logic
		|
		├── middleware
		│   ├── errorHandler.js        # Global error handling
		|
		├── node_modules
		├── routes
		│   ├── authRoutes.js          # Authentication routes
		|
		├── utils
		│   ├── jwtUtils.js            # JWT utility functions
		|
		├── .env
		├── app.js                     # Main application setup
		├── package-lock.json
		├── package.json
		├── server.js                  # Server entry point
