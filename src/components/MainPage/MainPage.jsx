// css
import "./Guide_rule.css"
import "./How_Join.css"
import "./Instructions.css"
import "./Join.css"
import "./main.css"
import "./Rewards.css"
import "./Rules.css"
import "./Tasks.css"
import LeaderBoard from "./Leader-Board/Leader-Board"


function MainPage() {
    return (
        <div className="MainPage">

            {/*Hero*/}

            <div>
                <div className='trophy'>
                    <img src="/right-win-trophhy.png" alt="" />
                </div>
                <div className='bg-container'>
                    <img src="/main-bg.svg" alt="svg-bg" className='main-svg-bg' />
                    <img src="/main-city-bg.png" alt="city-bg" className='main-city-bg'/>
                </div>
                <div className='main-input'>
                    <p className='top-text-input'>
                        Share your College Experience
                    </p>
                    <div className='Search_bar'>
                        <img src="/SEARCH.svg" alt="Search" className='search_icon' />
                        <input type="text" className='input' placeholder='Search your College'/>
                    </div>
                    <p className='button-text-input'>
                        Help millions of students in making informed career decisions.
                    </p>
                </div>
            </div>

            {/*  Instruction  */}

            <div className='Instructions'>
                <div className='InHeader'>
                    <p className='subtitle'>How to Win</p>
                    <h1 className='Logo'>Awesome Rewards? 🏆</h1>
                    <p className='description'>
                        The first way is by writing a detailed and factual review of your institution.
                        And the other is to Join for Campus Ambassador Program
                    </p>
                </div>

                <div className='MainIn'>

                    <div className='illustration'>
                        <img src='/Instr.png' alt='Rewards illustration' />
                    </div>


                    <div className='content'>
                        <h2 className='ConH'>Submit review</h2>

                        <div className='info-block'>
                            <div className='block-header'>
                                <img src='/Group_106.png' alt='Write review icon' />
                                <h3>Write a review</h3>
                            </div>
                            <p className='descr'>
                                Give a detailed and factual review of your institution & help the future prospects
                                in deciding the right college. Remember You're a part of critical decision-making process.
                                A reviewer, who has attended multiple institutions, can write a review for all those institutions.
                            </p>
                        </div>

                        <div className='info-block'>
                            <div className='block-header'>
                                <img src='/Group_105.png' alt='Reward icon' />
                                <h3>Receive your Reward</h3>
                            </div>
                            <p className='descr'>
                                Every published review will be rewarded between Rs. 50-200 within 14 days.
                                Provide sought-after and lesser-known information about your college and get a
                                quality score which will decide the amount of reward. Higher the score, higher the reward!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Join   */}

            <div className='Join'>
                <div className='join-content'>
                    <div className='join-text'>
                        <h3>Join to Campus Ambassador Program</h3>
                        <p>
                            Campus Ambassador Program has been initiated to recognize smart and
                            dedicated college students and provide them with adequate opportunities
                            to learn the industry-relevant skills, while earning Cash rewards and
                            certifications from our Industry-experts.
                        </p>
                    </div>
                    <div className='join-illustration'>
                        <img src='/2block.png' alt='Campus Ambassador Program' />
                    </div>
                </div>

                <div className='join-benefits'>
                    <h4>Benefit to Campus Ambassador</h4>
                    <div className='benefits-grid'>
                        <div className='benefit-item'>
                            <img src='/diplom.svg' alt='Certificate icon' />
                            <p>Certificates of Internship/LOR</p>
                        </div>
                        <div className='benefit-item'>
                            <img src='/wifi.svg' alt='Subscription icon' />
                            <p>Free Subscription Vouchers</p>
                        </div>
                        <div className='benefit-item'>
                            <img src='/list.svg' alt='Featuring icon' />
                            <p>Featuring on College.com</p>
                        </div>
                        <div className='benefit-item'>
                            <img src='/loud.svg' alt='Social media icon' />
                            <p>Social Media Promotions</p>
                        </div>
                        <div className='benefit-item'>
                            <img src='/people.svg' alt='Webinars icon' />
                            <p>Free Webinars and Counselling sessions</p>
                        </div>
                        <div className='benefit-item'>
                            <img src='/payment.svg' alt='PayTM icon' />
                            <p>Instant PayTM cash payments</p>
                        </div>
                        <div className='benefit-item'>
                            <img src='/light.svg' alt='Internship icon' />
                            <p>Internship opportunities at College.com HQ</p>
                        </div>
                        <div className='benefit-item'>
                            <img src='/luffy.svg' alt='Merchandise icon' />
                            <p>Exclusive Collegedunia Merchandise</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tasks   */}

            <div className='Join_t'>
                <h3>What will you be up to?</h3>

                <div className='tasks-content'>


                    <div className='task-item'>
                        <div className='icon-wrapper' >

                            <img src='/dots.svg' alt='Review icon' />
                        </div>
                        <h6>Review Collation</h6>
                        <p>Collate College reviews, on Collegedunia.com using your referral code and get paid for each approved Review.</p>
                    </div>


                    <div className='task-item'>
                        <div className='icon-wrapper' >
                            <img src='/green_man.svg' alt='Refer icon' />
                        </div>
                        <h6>Refer your friends</h6>
                        <p>Refer your friends to join the program, and Gain paytm cash for every approved review that they get.</p>
                    </div>


                    <div className='task-item'>
                        <div className='icon-wrapper' >
                            <img src='/contact.svg' alt='Representation icon' />
                        </div>
                        <h6>Representation</h6>
                        <p>Represent us your campus and provide insights into your campus through Articles and Campus Tour Videos</p>
                    </div>


                    <div className='task-item'>
                        <div className='icon-wrapper' >
                            <img src='/bin.svg' alt='Collaboration icon' />
                        </div>
                        <h6>Collaborations</h6>
                        <p>Find, build and promote collaborations/ partnerships for Collegedunia with like- minded communities within your institution, promoting mutual learning and growth.</p>
                    </div>


                    <div className='task-item'>
                        <div className='icon-wrapper'>
                            <img src='/red_man.svg' alt='Interview icon' />
                        </div>
                        <h6>Guest Interviews</h6>
                        <p>Conduct insightful Student and Faculty interviews to provide information about your institution, and learn about their vision for the growth and welfare of the student.</p>
                    </div>

                </div>
            </div>

            {/*  Rewards  */}

            <div className='Rewards'>
                {/* Исправил h7 на h2, так как h7 не существует в HTML */}
                <h2 className='Reward_title'>Milestones and Rewards</h2>

                <div className='rewards'>
                    {/* Item 1 */}
                    <div className='reward_item'>
                        <div className='reward_score'>
                            {/* Если картинка не грузится, используйте заглушку или emoji ★ */}
                            <img src='/star.svg' className='star' alt="star" />
                            <p>5</p>
                        </div>
                        <p className='approve_score'>Approved Reviews</p>
                        <div className='reward_item_txt'>
                            <p>Certificate of Participation (Beginner)</p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className='reward_item'>
                        <div className='reward_score'>
                            <img src='/star.svg' className='star' alt="star" />
                            <p>20</p>
                        </div>
                        <p className='approve_score'>Approved Reviews</p>
                        <div className='reward_item_txt'>
                            <p>Certificate of Participation (Beginner)</p>
                            <p>Exclusive Collegedunia merchandise</p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className='reward_item'>
                        <div className='reward_score'>
                            <img src='/star.svg' className='star' alt="star" />
                            <p>35</p>
                        </div>
                        <p className='approve_score'>Approved Reviews</p>
                        <div className='reward_item_txt'>
                            <p>Internship Certificate (Master)</p>
                            <p>Additional Paytm Cash Reward</p>
                            <p>Social Media Promotions</p>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className='reward_item'>
                        <div className='reward_score'>
                            <img src='/star.svg' className='star' alt="star" />
                            <p>50</p>
                        </div>
                        <p className='approve_score'>Approved Reviews</p>
                        <div className='reward_item_txt'>
                            <p>Certificate of Recognition (Jedi) and LOR</p>
                            <p>Paytm Cash Reward (upto INR 500)</p>
                            <p>Feature on CD Website and Social Media</p>
                        </div>
                    </div>

                    {/* Item 5 */}
                    <div className='reward_item'>
                        <div className='reward_score'>
                            <img src='/star.svg' className='star' alt="star" />
                            <p>+50</p>
                        </div>
                        <p className='approve_score'>Approved Reviews</p>
                        <div className='reward_item_txt_last'>
                            <p>Paytm Cash Reward Per 25 Approved Reviews</p>
                            <p>Featured Interview on CD Website and Social Media</p>
                            <p>Linkedin Endorsements</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* How_Join   */}

            <div className='How_Join'>
                <h1 className='How'>How to Join</h1>
                <ul className='How_list'>
                    <li>Submit your review for your college using the Review Form. You will get your Referral code after submitting a review of your college  </li>
                    <li>Refer your colleagues to join as a campus ambassador using this Referral form</li>
                </ul>
                <div className='How_bt'>See All Activity Guidline</div>
            </div>

            {/* Leader board */}

            <LeaderBoard />

            {/*  Guide_rule  */}

            <div className='Guide_rule'>
                <h1 className='Main_Rule'>Rules and Guidelines</h1>
                <div className='Rule_Flex'>
                    <img src='/Rule.png' />
                    <div className='Rule_right'>
                        <p>Key Point</p>
                        <ul className='Rule_list'>
                            <li>Add maximum details to your answer</li>
                            <li>There should be no plagiarism and negative content about the college</li>
                            <li>Review should be written only for the courses offered by the college</li>
                            <li>Mention facts and figures as per your best knowledge</li>
                            <li>A good validated review will also lead to better reward</li>
                        </ul>
                        <div className='Rule_bt'>Read Terms & Guidelines</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainPage;