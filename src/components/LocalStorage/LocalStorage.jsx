const employees = [
    {
      "id" : 1,
      "name": "John",
      "email" : "employee1@example.com",
      "password": "123",
      "taskSummary": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "title": "Prepare Report",
          "description": "Prepare the monthly sales report.",
          "date": "2024-12-01",
          "category": "Reports",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update Inventory",
          "description": "Check and update the inventory levels.",
          "date": "2024-12-02",
          "category": "Operations",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Client Follow-Up",
          "description": "Contact pending clients for feedback.",
          "date": "2024-12-03",
          "category": "Client Relations",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 2,
      "name" : "Jane",
      "email": "employee2@example.com",
      "password": "123",
      "taskSummary": {
        "active": 2,
        "newTask": 2,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "title": "Team Meeting",
          "description": "Attend the weekly team meeting.",
          "date": "2024-12-01",
          "category": "Meetings",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Social Media Post",
          "description": "Create and schedule a social media post.",
          "date": "2024-12-02",
          "category": "Marketing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Bug Fixes",
          "description": "Fix bugs reported in the latest app release.",
          "date": "2024-12-03",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Backup Data",
          "description": "Backup server data.",
          "date": "2024-12-04",
          "category": "IT",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 3,
      "name" : "Alice",
      "email" : "employee3@example.com",
      "password": "123",
      "taskSummary": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "title": "Market Analysis",
          "description": "Analyze competitor trends.",
          "date": "2024-12-01",
          "category": "Research",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Product Design",
          "description": "Design mockups for the new product.",
          "date": "2024-12-02",
          "category": "Design",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "QA Testing",
          "description": "Test features for quality assurance.",
          "date": "2024-12-03",
          "category": "Quality",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "name" : "Robert",
      "email" : "employee4@example.com",
      "password": "123",
      "taskSummary": {
        "active": 2,
        "newTask": 2,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "title": "Client Onboarding",
          "description": "Guide new clients through onboarding.",
          "date": "2024-12-01",
          "category": "Client Relations",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Performance Review",
          "description": "Complete staff performance reviews.",
          "date": "2024-12-02",
          "category": "HR",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Website Update",
          "description": "Update website content for the holidays.",
          "date": "2024-12-03",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "name" : "Emma",
      "email": "employee5@example.com",
      "password": "123",
      "taskSummary": {
        "active": 2,
        "newTask": 2,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "title": "Campaign Launch",
          "description": "Launch the new email marketing campaign.",
          "date": "2024-12-01",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Data Analysis",
          "description": "Analyze customer survey results.",
          "date": "2024-12-02",
          "category": "Research",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Budget Planning",
          "description": "Plan the budget for next quarter.",
          "date": "2024-12-03",
          "category": "Finance",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ];
  
  
  const admin = [
    {
      "id": 1,
      "name": "Mark",
      "email": "admin@example.com",
      "password": "123"
    }
  ];

  export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }
  export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees , admin }
  }