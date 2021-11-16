import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';


import g1 from '../assets/gallery/slide-pictures/gallery-1.jpg';
import g2 from '../assets/gallery/slide-pictures/gallery-2.jpg';
import g3 from '../assets/gallery/slide-pictures/gallery-3.jpg';


const items = [
    {
        src: `${g1}`,
        altText: 'Editing Services 1',
        caption: 'Covers Gramma and Spelling and full Proofreading'
    },
    {
        src: `${g2}`,
        altText: 'Get a great Book Cover Design',
        caption: 'SProfessional Graphic Designed Cover'
    },
    {
        src: `${g3}`,
        altText: 'Page Layout and Typesetting',
        caption: 'Best format package included. Professional Interior Design'
    }
];

const Services = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} height="400px" width="auto" />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Services;


