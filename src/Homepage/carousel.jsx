import React, { useCallback } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Preload images for smoother transitions
const preloadImages = ["amz1.jpg", "amz2.jpg", "amz3.jpg", "amz4.jpg"].forEach(img => {
  new Image().src = `./public/${img}`;
});

const DemoCarousel = () => {
    const onChange = useCallback((index) => {
        console.log(`Slide changed to: ${index}`);
    }, []);

    const onClickItem = useCallback((index) => {
        console.log(`Item clicked at index: ${index}`);
    }, []);

    const onClickThumb = useCallback((index) => {
        console.log(`Thumbnail clicked at index: ${index}`);
    }, []);

    const renderOverlayContent = (title, subtitle, buttonText, phoneNumber, email) => (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
            borderRadius: '8px',
            width: '80%',
            maxWidth: '600px',
            pointerEvents: 'none'
        }}>
            <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
                {title}
            </h2>
            <p style={{
                fontSize: '1.2rem',
                marginBottom: '0.5rem',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
                {subtitle}
            </p>
            {phoneNumber && (
                <p style={{
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                    fontWeight: 'bold'
                }}>
                    {phoneNumber}
                </p>
            )}
            {email && (
                <p style={{
                    fontSize: '1.2rem',
                    marginBottom: '2rem',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}>
                    {email}
                </p>
            )}
            <button style={{
                padding: '12px 24px',
                backgroundColor: '#FF9900',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                pointerEvents: 'auto'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e68a00'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#FF9900'}
            >
                {buttonText}
            </button>
        </div>
    );

    return (
        <div style={{ maxWidth: '1800px', maxHeight: 'auto', overflow: 'hidden' }}>
            <Carousel 
                showArrows={true}
                showStatus={false}
                showIndicators={true}
                onChange={onChange}
                onClickItem={onClickItem}
                onClickThumb={onClickThumb}
                infiniteLoop={true}
                showThumbs={false}
                dynamicHeight={false}
                autoPlay={true}
                interval={5000}
                transitionTime={500}
                swipeable={true}
                emulateTouch={true}
                stopOnHover={false}
                useKeyboardArrows={true}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            title={label}
                            style={{
                                position: 'absolute',
                                zIndex: 2,
                                top: '50%',
                                left: 15,
                                transform: 'translateY(-50%)',
                                width: 40,
                                height: 40,
                                backgroundColor: 'rgba(255,255,255,0.5)',
                                border: 'none',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                fontSize: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            ❮
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            title={label}
                            style={{
                                position: 'absolute',
                                zIndex: 2,
                                top: '50%',
                                right: 15,
                                transform: 'translateY(-50%)',
                                width: 40,
                                height: 40,
                                backgroundColor: 'rgba(255,255,255,0.5)',
                                border: 'none',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                fontSize: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            ❯
                        </button>
                    )
                }
            >
                {/* First slide with Brand Registry */}
                <div style={{ position: 'relative', height: '520px' }}>
                    <img 
                        src="./public/amz1.jpg" 
                        alt="Brand Registry" 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            willChange: 'transform'
                        }} 
                        loading="eager"
                    />
                    {renderOverlayContent(
                        "Brand Registry",
                        "Fix frustrating suspensions and problems",
                        "GET STARTED"
                    )}
                </div>

                {/* Second slide with Amazon Appeal */}
                <div style={{ position: 'relative', height: '520px' }}>
                    <img 
                        src="./public/amz2.jpg" 
                        alt="Amazon Appeal" 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            willChange: 'transform'
                        }}
                    />
                    {renderOverlayContent(
                        "Amazon Appeal",
                        "Reinstate your Amazon account and ASINs",
                        "GET STARTED"
                    )}
                </div>

                {/* Third slide with FBA Reimbursements */}
                <div style={{ position: 'relative', height: '520px' }}>
                    <img 
                        src="./public/amz3.jpg" 
                        alt="FBA Reimbursements" 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            willChange: 'transform'
                        }}
                    />
                    {renderOverlayContent(
                        "FBA Reimbursements",
                        "Get back every penny Amazon owes you",
                        "GET STARTED"
                    )}
                </div>

                {/* Fourth slide with Contact Information */}
                <div style={{ position: 'relative', height: '520px' }}>
                    <img 
                        src="./public/amz4.jpg" 
                        alt="Contact Us" 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            willChange: 'transform'
                        }}
                        loading="lazy"
                    />
                    {renderOverlayContent(
                        "Contact us today",
                        "",
                        "CONTACT US",
                        "0307-7971099",
                        "sales@riverbendconsulting.com"
                    )}
                </div>
            </Carousel>
        </div>
    );
}

export default DemoCarousel;