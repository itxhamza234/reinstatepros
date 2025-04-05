import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DemoCarousel = () => {
    const onChange = (index) => {
        console.log(`Slide changed to: ${index}`);
    };

    const onClickItem = (index) => {
        console.log(`Item clicked at index: ${index}`);
    };

    const onClickThumb = (index) => {
        console.log(`Thumbnail clicked at index: ${index}`);
    };

    return (
        <div style={{ maxWidth: '1800px', margin: '0px' }}>
            <Carousel 
                showArrows={true} 
                onChange={onChange} 
                onClickItem={onClickItem} 
                onClickThumb={onClickThumb}
                infiniteLoop
                showThumbs={false}
                dynamicHeight={false}
                autoPlay
            >
                <div style={{ position: 'relative' }}>
                    <img 
                        src="./public/amz1.jpg" 
                        alt="image1" 
                        style={{ width: '100%', height: '400px', objectFit: 'cover' }} 
                    />
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        padding: '20px',
                        borderRadius: '8px'
                    }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: 'bold',
                            marginBottom: '1rem'
                        }}>
                            Brand Registry
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            marginBottom: '2rem'
                        }}>
                            Fix frustrating suspensions and problems
                        </p>
                        <button style={{
                            padding: '12px 24px',
                            backgroundColor: '#FF9900',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#e68a00'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#FF9900'}
                        >
                            GET STARTED
                        </button>
                    </div>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img 
                        src="./public/amz2.jpg" 
                        alt="image2" 
                        style={{ width: '100%', height: '400px', objectFit: 'cover' }} 
                    />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img 
                        src="./public/amz3.jpg" 
                        alt="image2" 
                        style={{ width: '100%', height: '400px', objectFit: 'cover' }} 
                    />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img 
                        src="./public/amz4.jpg" 
                        alt="image2" 
                        style={{ width: '100%', height: '400px', objectFit: 'cover' }} 
                    />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        </div>
    );
}

export default DemoCarousel;