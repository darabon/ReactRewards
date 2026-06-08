// AdminData.js

export const stats = {
    totalUsers: 1247,
    totalReviews: 3856,
    pendingReviews: 42,
    totalEarnings: 125000,
    activeAmbassadors: 156,
    monthlyGrowth: 12
};

export const recentUsers = [
    {
        id: 1,
        name: "Suraj Khandwal",
        email: "suraj@example.com",
        role: "Ambassador",
        status: "active",
        joined: "2 days ago",
        reviews: 35,
        earnings: 7000
    },
    {
        id: 2,
        name: "Priya Sharma",
        email: "priya@example.com",
        role: "User",
        status: "active",
        joined: "3 days ago",
        reviews: 12,
        earnings: 2400
    },
    {
        id: 3,
        name: "Rahul Verma",
        email: "rahul@example.com",
        role: "Ambassador",
        status: "pending",
        joined: "5 days ago",
        reviews: 8,
        earnings: 1600
    },
    {
        id: 4,
        name: "Anita Desai",
        email: "anita@example.com",
        role: "User",
        status: "active",
        joined: "1 week ago",
        reviews: 5,
        earnings: 1000
    },
    {
        id: 5,
        name: "Vikram Singh",
        email: "vikram@example.com",
        role: "Ambassador",
        status: "active",
        joined: "1 week ago",
        reviews: 28,
        earnings: 5600
    },
    {
        id: 6,
        name: "Neha Patel",
        email: "neha@example.com",
        role: "User",
        status: "inactive",
        joined: "2 weeks ago",
        reviews: 2,
        earnings: 400
    },
    {
        id: 7,
        name: "Arjun Reddy",
        email: "arjun@example.com",
        role: "Ambassador",
        status: "active",
        joined: "2 weeks ago",
        reviews: 42,
        earnings: 8400
    },
    {
        id: 8,
        name: "Kavya Nair",
        email: "kavya@example.com",
        role: "User",
        status: "active",
        joined: "3 weeks ago",
        reviews: 15,
        earnings: 3000
    }
];

export const pendingReviews = [
    {
        id: 1,
        college: "Kingston School of Management",
        user: "Suraj Khandwal",
        userId: 1,
        date: "2 hours ago",
        status: "pending",
        rating: 4.5,
        content: "Great infrastructure and faculty. The placement cell is very active..."
    },
    {
        id: 2,
        college: "Rajasthan Technical University",
        user: "Priya Sharma",
        userId: 2,
        date: "5 hours ago",
        status: "pending",
        rating: 4.0,
        content: "Good college with decent placements. Campus life is vibrant..."
    },
    {
        id: 3,
        college: "Jaipur Engineering College",
        user: "Rahul Verma",
        userId: 3,
        date: "1 day ago",
        status: "reviewing",
        rating: 3.5,
        content: "Average college. Faculty is supportive but infrastructure needs improvement..."
    },
    {
        id: 4,
        college: "Delhi Technological University",
        user: "Anita Desai",
        userId: 4,
        date: "1 day ago",
        status: "pending",
        rating: 5.0,
        content: "Excellent college! Best in the region for engineering programs..."
    },
    {
        id: 5,
        college: "Mumbai University",
        user: "Vikram Singh",
        userId: 5,
        date: "2 days ago",
        status: "pending",
        rating: 4.0,
        content: "Good academic curriculum and experienced faculty members..."
    },
    {
        id: 6,
        college: "Bangalore Institute of Technology",
        user: "Neha Patel",
        userId: 6,
        date: "3 days ago",
        status: "approved",
        rating: 4.5,
        content: "Great learning environment and excellent placement opportunities..."
    }
];

export const recentActivity = [
    {
        id: 1,
        type: "user_registered",
        title: "New user registered",
        description: "Kavya Nair created an account",
        time: "2 minutes ago",
        icon: "user"
    },
    {
        id: 2,
        type: "review_approved",
        title: "Review approved",
        description: "Suraj Khandwal's review was approved",
        time: "15 minutes ago",
        icon: "check"
    },
    {
        id: 3,
        type: "payment_processed",
        title: "Payment processed",
        description: "₹200 paid to Priya Sharma",
        time: "1 hour ago",
        icon: "payment"
    },
    {
        id: 4,
        type: "ambassador_joined",
        title: "New ambassador joined",
        description: "Arjun Reddy became campus ambassador",
        time: "3 hours ago",
        icon: "star"
    },
    {
        id: 5,
        type: "review_submitted",
        title: "New review submitted",
        description: "Vikram Singh submitted a review",
        time: "5 hours ago",
        icon: "review"
    },
    {
        id: 6,
        type: "referral_completed",
        title: "Referral completed",
        description: "Rahul Verma referred 3 friends",
        time: "1 day ago",
        icon: "referral"
    }
];

export const platformSettings = {
    platformName: "Rewards & Review",
    adminEmail: "admin@rewardsreview.com",
    reviewRewardAmount: 200,
    referralRewardAmount: 50,
    enableNotifications: true,
    autoApproveReviews: false,
    maintenanceMode: false,
    maxReviewsPerUser: 100,
    minReviewLength: 50,
    supportEmail: "support@rewardsreview.com"
};

export const quickActions = [
    {
        id: 1,
        title: "Approve All Pending",
        description: "Approve all pending reviews at once",
        icon: "check-all"
    },
    {
        id: 2,
        title: "Send Notification",
        description: "Send notification to all users",
        icon: "notification"
    },
    {
        id: 3,
        title: "Generate Report",
        description: "Generate monthly analytics report",
        icon: "report"
    },
    {
        id: 4,
        title: "Manage Rewards",
        description: "Update reward amounts and rules",
        icon: "reward"
    },
    {
        id: 5,
        title: "Export Data",
        description: "Export all data to CSV/Excel",
        icon: "export"
    },
    {
        id: 6,
        title: "Backup Database",
        description: "Create database backup",
        icon: "backup"
    }
];

export const monthlyStats = [
    { month: "Jan", users: 850, reviews: 2100, earnings: 85000 },
    { month: "Feb", users: 920, reviews: 2450, earnings: 95000 },
    { month: "Mar", users: 1050, reviews: 2890, earnings: 105000 },
    { month: "Apr", users: 1150, reviews: 3200, earnings: 115000 },
    { month: "May", users: 1247, reviews: 3856, earnings: 125000 },
];

export const topPerformers = [
    { id: 1, name: "Suraj Khandwal", reviews: 35, earnings: 7000, rank: 1 },
    { id: 2, name: "Arjun Reddy", reviews: 42, earnings: 8400, rank: 2 },
    { id: 3, name: "Vikram Singh", reviews: 28, earnings: 5600, rank: 3 },
    { id: 4, name: "Priya Sharma", reviews: 12, earnings: 2400, rank: 4 },
    { id: 5, name: "Kavya Nair", reviews: 15, earnings: 3000, rank: 5 },
];