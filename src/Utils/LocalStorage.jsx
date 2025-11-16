

const employees = [
    {
      "id": 1,
      "name": "Aarav Sharma",
      "email": "aarav.sharma@example.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "new": 4,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "title": "Prepare Sales Report",
          "description": "Compile Q3 sales data and generate report",
          "date": "2025-11-10",
          "category": "Sales",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Client Meeting",
          "description": "Discuss project scope with client",
          "date": "2025-11-12",
          "category": "Meetings",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update CRM",
          "description": "Add new leads to CRM system",
          "date": "2025-11-09",
          "category": "Admin",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "name": "Isha Verma",
      "email": "isha.verma@example.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "new": 2,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "title": "Design Homepage",
          "description": "Create mockups for new homepage layout",
          "date": "2025-11-08",
          "category": "Design",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Team Sync",
          "description": "Weekly design team catch-up",
          "date": "2025-11-07",
          "category": "Meetings",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Bug Fixes",
          "description": "Resolve UI bugs from feedback",
          "date": "2025-11-06",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Prototype Review",
          "description": "Review prototype with stakeholders",
          "date": "2025-11-13",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "name": "Rohan Mehta",
      "email": "rohan.mehta@example.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "new": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "title": "Database Backup",
          "description": "Run full backup of production database",
          "date": "2025-11-05",
          "category": "IT",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Security Audit",
          "description": "Conduct internal security checks",
          "date": "2025-11-11",
          "category": "Security",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Server Maintenance",
          "description": "Update server OS and patches",
          "date": "2025-11-10",
          "category": "IT",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 4,
      "name": "Neha Joshi",
      "email": "neha.joshi@example.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "new": 2,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "title": "Social Media Campaign",
          "description": "Launch Diwali campaign on Instagram",
          "date": "2025-11-01",
          "category": "Marketing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Content Calendar",
          "description": "Plan content for November",
          "date": "2025-11-03",
          "category": "Marketing",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Ad Budget Review",
          "description": "Review ad spend and ROI",
          "date": "2025-11-12",
          "category": "Finance",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Influencer Outreach",
          "description": "Contact influencers for product promotion",
          "date": "2025-11-14",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "name": "Kabir Singh",
      "email": "ks@e.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "new": 8,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "title": "Code Review",
          "description": "Review pull requests from dev team",
          "date": "2025-11-06",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "API Integration",
          "description": "Integrate payment gateway API",
          "date": "2025-11-09",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Unit Testing",
          "description": "Write unit tests for new modules",
          "date": "2025-11-10",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Deployment",
          "description": "Deploy latest build to staging",
          "date": "2025-11-11",
          "category": "DevOps",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Documentation",
          "description": "Update technical documentation",
          "date": "2025-11-13",
          "category": "Documentation",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ]
 
const admin = [
  {
    "id": 1,
    "name": "Ayush Raghuwanshi",
    "email": "ayush@r.com",
    "password": "123"
  }
]

export const SetLocalStorage = ()=>{
   localStorage.setItem('employees',JSON.stringify(employees))
   localStorage.setItem('admin',JSON.stringify(admin))
}

export const GetLocalStorage = ()=>{
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))

   return({employees,admin  })
  }