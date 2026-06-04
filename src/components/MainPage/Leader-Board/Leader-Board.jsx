import './Leader-Board.css';
import { reviewData, referalsData } from '../../../../data/RRData.js';

const ReviewCard = ({ review }) => {
    return (
        <div className="Weekly-Left">
            <div className="Person">
                <div className="Person-Avatar">
                    {review.rank ? <img src={review.rank} alt="" /> : null}
                    {review.avatar ? <img src={review.avatar} alt="" /> : null}
                    <p className="Person-Name">{review.name}</p>
                    <p className="Location">{review.location}</p>
                </div>

                <div className="Achivments">
                    {review.achivments &&
                        review.achivments.map((icon, index) =>
                            icon ? (
                                <img
                                    key={index}
                                    src={icon}
                                    alt="achievement"
                                    className="icon"
                                />
                            ) : null,
                        )}
                </div>
            </div>
            <div className="Person-Title">
                <div className="Person-Rairing">{review.raiting}</div>

                <div className="Person-Text">{review.text}</div>

                <div className="Person-Location">{review.location}</div>
            </div>
        </div>
    );
};

const ReferalCard = ({ referal }) => {
    return (
        <div className="Weekly-Right">
            <div className="Person-Card">
                <div className="Person-Avatar">
                    {referal.rank ? <img src={referal.rank} alt="" /> : null}
                    {referal.avatar ? (
                        <img src={referal.avatar} alt="" />
                    ) : null}
                    <p className="Person-Name">{referal.name}</p>
                    <p className="Location">{referal.location}</p>
                </div>

                <div className="Big-Achivment">
                    <div>
                        {referal.ref_icon ? (
                            <img src={referal.ref_icon} alt="" />
                        ) : null}
                        <h3 className="Quantity">{referal.referals}</h3>
                        <p className="Name-Quantity">Referasl</p>
                    </div>

                    <div>
                        {referal.rew_icon ? (
                            <img
                                src={referal.rew_icon}
                                alt=""
                                className="icon"
                            />
                        ) : null}
                        <h3 className="Quantity">{referal.rewards}</h3>
                        <p className="Name-Quantity">Rewards</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

function LeaderBoard() {
    return (
        <div className="Leader-Board">
            <h1>Weekly Top Leaderboard</h1>

            <div className="Colums">
                <div className="Left-Colum">
                    <h2>Top R</h2>
                    <div className="Review-Container">
                        {reviewData.map(review => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                    </div>
                </div>

                <div className="Right-Colum">
                    <h2>Top R</h2>
                    <div className="Referal-Container">
                        {referalsData.map(referal => (
                            <ReferalCard key={referal.id} referal={referal} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeaderBoard;
