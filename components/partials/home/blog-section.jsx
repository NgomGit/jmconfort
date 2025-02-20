import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Utils
import { fadeInRightShorter } from '../../../utils/data/keyframes'
import ALink from '../../common/ALink';

export default function BlogSection(props) {

    return (
        <div className="blog-section row">
            <div className="col-lg-6">
                <Reveal keyframes={fadeInRightShorter} delay={300} duration={1000} triggerOnce>
                    <h2 className="section-title text-center  border-0 d-flex align-items-center">LATEST NEWS</h2>
                    <article className="post d-sm-flex align-items-center mb-2 mb-lg-0">
                        <div className="post-media">
                            <ALink href="/pages/blog">
                                <LazyLoadImage
                                    alt="slider image"
                                    src="images/home/blog/shop7_post1.jpg"
                                    width={280}
                                    height={209}
                                />
                            </ALink>
                            <div className="post-date">
                                <span className="day">29</span>
                                <span className="month">Jun</span>
                            </div>
                        </div>

                        <div className="post-body">
                            <h2 className="post-title">
                                <ALink href="/pages/blog">Top Jeans Collection</ALink>
                            </h2>

                            <div className="post-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi.
                                        Etiam non tellus sem. Aenean...</p>
                            </div>

                            <div className="post-meta">
                                <i className="far fa-comments"></i>
                                <a href="#" title="Comment on Top Jeans Collection"> 0 COMMENTS</a>
                            </div>
                        </div>
                    </article>
                </Reveal>
            </div>

            <div className="col-lg-6">
                <Reveal keyframes={fadeInRightShorter} delay={100} duration={1000} triggerOnce>
                    <h2 className="section-title text-center  border-0  d-flex align-items-center">LATEST REVIEWS</h2>
                    <div className="testimonials-slider mt-1">
                        <div className="testimonial">
                            <div className="testimonial-owner">
                                <figure>
                                    <LazyLoadImage
                                        alt="slider image"
                                        src="images/home/clients/client1.png"
                                        width={60}
                                        height={60}
                                    />
                                </figure>

                                <div>
                                    <h4 className="testimonial-title font1">john Smith</h4>
                                    <span className="font1 ls-n-10">CEO & Founder</span>
                                </div>
                            </div>

                            <blockquote>
                                <p>Hello, I want to thank you for creating a great template and for the excellent
                                and quick support and help that you have been providing to me as I begin to work
                                        with it.</p>
                            </blockquote>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}