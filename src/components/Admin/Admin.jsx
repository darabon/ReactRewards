import { stats, recentUsers, pendingReviews, recentActivity, platformSettings, quickActions, topPerformers } from '../../../data/AdminData';
import React, { useState } from 'react';
import './Admin.css';

function Admin() {
    const [activeTab, setActiveTab] = useState('dashboard'); // ← Добавили эту строку

    return (
        <div className="Admin">
            {/* Admin Header */}
            <div className="admin-header">
                <div className="admin-header-content">
                    <h1 className="admin-title">Admin Dashboard</h1>
                    <p className="admin-subtitle">Manage users, reviews, and platform settings</p>
                </div>
                <div className="admin-actions">
                    <button className="admin-btn-secondary">Export Data</button>
                    <button className="admin-btn-primary">+ Add User</button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="admin-stats">
                <div className="admin-stat-card">
                    <div className="stat-card-icon">
                        <img src="/people.svg" alt="users" />
                    </div>
                    <div className="stat-card-info">
                        <h3>{stats.totalUsers}</h3>
                        <p>Total Users</p>
                    </div>
                    <div className="stat-card-change positive">+12%</div>
                </div>

                <div className="admin-stat-card">
                    <div className="stat-card-icon">
                        <img src="/review-icon.svg" alt="reviews" />
                    </div>
                    <div className="stat-card-info">
                        <h3>{stats.totalReviews}</h3>
                        <p>Total Reviews</p>
                    </div>
                    <div className="stat-card-change positive">+8%</div>
                </div>

                <div className="admin-stat-card">
                    <div className="stat-card-icon">
                        <img src="/pending.svg" alt="pending" />
                    </div>
                    <div className="stat-card-info">
                        <h3>{stats.pendingReviews}</h3>
                        <p>Pending Reviews</p>
                    </div>
                    <div className="stat-card-change negative">-3%</div>
                </div>

                <div className="admin-stat-card">
                    <div className="stat-card-icon">
                        <img src="/money-icon.svg" alt="earnings" />
                    </div>
                    <div className="stat-card-info">
                        <h3>₹{stats.totalEarnings.toLocaleString()}</h3>
                        <p>Total Earnings</p>
                    </div>
                    <div className="stat-card-change positive">+15%</div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="admin-tabs">
                <button 
                    className={`admin-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
                    onClick={() => setActiveTab('dashboard')}
                >
                    Dashboard
                </button>
                <button 
                    className={`admin-tab ${activeTab === 'users' ? 'active' : ''}`}
                    onClick={() => setActiveTab('users')}
                >
                    Users
                </button>
                <button 
                    className={`admin-tab ${activeTab === 'reviews' ? 'active' : ''}`}
                    onClick={() => setActiveTab('reviews')}
                >
                    Reviews
                </button>
                <button 
                    className={`admin-tab ${activeTab === 'settings' ? 'active' : ''}`}
                    onClick={() => setActiveTab('settings')}
                >
                    Settings
                </button>
            </div>

            {/* Main Content */}
            <div className="admin-content">
                {/* Users Section */}
                {activeTab === 'users' && (
                    <div className="admin-section">
                        <div className="section-header">
                            <h2>Recent Users</h2>
                            <div className="section-actions">
                                <input 
                                    type="text" 
                                    placeholder="Search users..." 
                                    className="search-input"
                                />
                                <button className="filter-btn">Filter</button>
                            </div>
                        </div>

                        <div className="data-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Joined</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentUsers.map((user) => (
                                        <tr key={user.id}>
                                            <td>
                                                <div className="user-cell">
                                                    <div className="user-avatar-small">
                                                        {user.name.charAt(0)}
                                                    </div>
                                                    <span>{user.name}</span>
                                                </div>
                                            </td>
                                            <td>{user.email}</td>
                                            <td>
                                                <span className={`role-badge ${user.role.toLowerCase()}`}>
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td>
                                                <span className={`status-badge ${user.status}`}>
                                                    {user.status}
                                                </span>
                                            </td>
                                            <td>{user.joined}</td>
                                            <td>
                                                <div className="action-buttons">
                                                    <button className="action-btn edit">Edit</button>
                                                    <button className="action-btn delete">Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <button className="load-more-btn">Load More Users</button>
                    </div>
                )}

                {/* Reviews Section */}
                {activeTab === 'reviews' && (
                    <div className="admin-section">
                        <div className="section-header">
                            <h2>Pending Reviews</h2>
                            <div className="section-actions">
                                <input 
                                    type="text" 
                                    placeholder="Search reviews..." 
                                    className="search-input"
                                />
                                <button className="filter-btn">Filter</button>
                            </div>
                        </div>

                        <div className="reviews-list">
                            {pendingReviews.map((review) => (
                                <div key={review.id} className="review-card">
                                    <div className="review-info">
                                        <h4>{review.college}</h4>
                                        <p>By: {review.user}</p>
                                        <span className="review-date">{review.date}</span>
                                    </div>
                                    <div className="review-actions">
                                        <span className={`review-status ${review.status}`}>
                                            {review.status}
                                        </span>
                                        <div className="review-buttons">
                                            <button className="review-btn approve">Approve</button>
                                            <button className="review-btn reject">Reject</button>
                                            <button className="review-btn view">View</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="load-more-btn">Load More Reviews</button>
                    </div>
                )}

                {/* Dashboard Overview */}
                {activeTab === 'dashboard' && (
                    <div className="admin-section">
                        <div className="dashboard-grid">
                            <div className="dashboard-card">
                                <h3>Quick Actions</h3>
                                <div className="quick-actions">
                                    {quickActions.slice(0, 4).map((action) => (
                                        <button key={action.id} className="quick-action-btn">
                                            {action.title}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="dashboard-card">
                                <h3>Recent Activity</h3>
                                <div className="activity-feed">
                                    {recentActivity.slice(0, 4).map((activity) => (
                                        <div key={activity.id} className="activity-item-small">
                                            <span className="activity-dot"></span>
                                            <div>
                                                <p><strong>{activity.title}</strong></p>
                                                <span className="activity-time">{activity.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Settings Section */}
                {activeTab === 'settings' && (
                    <div className="admin-section">
                        <h2>Platform Settings</h2>
                        <div className="settings-form">
                            <div className="form-group">
                                <label>Platform Name</label>
                                <input type="text" defaultValue={platformSettings.platformName} />
                            </div>
                            <div className="form-group">
                                <label>Admin Email</label>
                                <input type="email" defaultValue={platformSettings.adminEmail} />
                            </div>
                            <div className="form-group">
                                <label>Review Reward Amount (₹)</label>
                                <input type="number" defaultValue={platformSettings.reviewRewardAmount} />
                            </div>
                            <div className="form-group">
                                <label>Referral Reward Amount (₹)</label>
                                <input type="number" defaultValue={platformSettings.referralRewardAmount} />
                            </div>
                            <div className="form-group">
                                <label className="checkbox-label">
                                    <input type="checkbox" defaultChecked={platformSettings.enableNotifications} />
                                    Enable notifications
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="checkbox-label">
                                    <input type="checkbox" defaultChecked={platformSettings.autoApproveReviews} />
                                    Auto-approve reviews
                                </label>
                            </div>
                            <button className="save-settings-btn">Save Settings</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Admin;