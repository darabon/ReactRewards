import "./Profile.css";

import { recentActivity, achievements } from '../../../data/ProfileData';
function Profile() {
    // Пример данных пользователя (в реальном приложении будут приходить с бэкенда)
    const userData = {
        name: "Suraj Khandwal",
        college: "Jaipur, Rajasthan",
        avatar: "/user-avatar.png",
        rank: "Master",
        totalReviews: 35,
        totalReferrals: 12,
        totalEarnings: 7000,
        memberSince: "January 2024",
        nextReward: {
            reviews: 50,
            reward: "Certificate of Recognition (Jedi) and LOR"
        }
    }
    return (
        <div className="Profile">
            {/* Profile Header */}
            <div className="profile-header">
                <div className="profile-header-bg">
                    <img src="/main-bg.svg" alt="bg" className="profile-bg" />
                </div>
                <div className="profile-info">
                    <div className="profile-avatar">
                        <img src={userData.avatar || "/default-avatar.png"} alt="User Avatar" />
                    </div>
                    <div className="profile-details">
                        <h1 className="profile-name">{userData.name}</h1>
                        <p className="profile-college">{userData.college}</p>
                        <div className="profile-badge">
                            <img src="/trophy.svg" alt="rank" />
                            <span>{userData.rank} Ambassador</span>
                        </div>
                        <p className="profile-member">Member since {userData.memberSince}</p>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="profile-stats">
                <div className="stat-card">
                    <div className="stat-icon">
                        <img src="/review-icon.svg" alt="reviews" />
                    </div>
                    <div className="stat-info">
                        <h3>{userData.totalReviews}</h3>
                        <p>Approved Reviews</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <img src="/referral-icon.svg" alt="referrals" />
                    </div>
                    <div className="stat-info">
                        <h3>{userData.totalReferrals}</h3>
                        <p>Total Referrals</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <img src="/money-icon.svg" alt="earnings" />
                    </div>
                    <div className="stat-info">
                        <h3>₹{userData.totalEarnings}</h3>
                        <p>Total Earnings</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <img src="/target-icon.svg" alt="next" />
                    </div>
                    <div className="stat-info">
                        <h3>{userData.nextReward.reviews - userData.totalReviews}</h3>
                        <p>Reviews to next reward</p>
                    </div>
                </div>
            </div>

            {/* Progress to Next Reward */}
            <div className="profile-progress">
                <h2>Progress to Next Reward</h2>
                <div className="progress-bar">
                    <div className="progress-fill" ></div>
                </div>
                <div className="progress-info">
                    <span>{userData.totalReviews} of {userData.nextReward.reviews} reviews</span>
                    <span className="progress-reward">{userData.nextReward.reward}</span>
                </div>
            </div>

            <div className="profile-content">
                {/* Recent Activity */}
                <div className="profile-section">
                    <h2 className="section-title">Recent Activity</h2>
                    <div className="activity-list">
                        {recentActivity.map((activity) => (
                            <div key={activity.id} className="activity-item">
                                <div className="activity-icon">
                                    <img src={activity.type === "review" ? "/review-icon.svg" : "/referral-icon.svg"} alt={activity.type} />
                                </div>
                                <div className="activity-details">
                                    <h4>{activity.type === "review" ? `Review: ${activity.college}` : activity.name}</h4>
                                    <p className="activity-date">{activity.date}</p>
                                </div>
                                <div className="activity-reward">
                                    <span className="reward-amount">+₹{activity.reward}</span>
                                    <span className={`status ${activity.status}`}>{activity.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="view-all-btn">View All Activity</button>
                </div>

                {/* Achievements */}
                <div className="profile-section">
                    <h2 className="section-title">Achievements</h2>
                    <div className="achievements-grid">
                        {achievements.map((achievement) => (
                            <div key={achievement.id} className={`achievement-card ${achievement.earned ? 'earned' : 'locked'}`}>
                                <div className="achievement-icon">
                                    <img src={achievement.icon} alt={achievement.title} />
                                </div>
                                <p className="achievement-title">{achievement.title}</p>
                                {!achievement.earned && <span className="locked-badge">Locked</span>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Account Settings Preview */}
                <div className="profile-section">
                    <h2 className="section-title">Account Settings</h2>
                    <div className="settings-list">
                        <div className="setting-item">
                            <div className="setting-info">
                                <h4>Personal Information</h4>
                                <p>Update your name, email, and phone number</p>
                            </div>
                            <button className="setting-btn">Edit</button>
                        </div>
                        <div className="setting-item">
                            <div className="setting-info">
                                <h4>Payment Details</h4>
                                <p>Manage your PayTM account for rewards</p>
                            </div>
                            <button className="setting-btn">Edit</button>
                        </div>
                        <div className="setting-item">
                            <div className="setting-info">
                                <h4>Notifications</h4>
                                <p>Configure email and push notifications</p>
                            </div>
                            <button className="setting-btn">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile