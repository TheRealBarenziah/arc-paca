import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import './Carousel.scss';

const items = [
    {
<<<<<<< HEAD
        src: 'https://image.noelshack.com/fichiers/2019/26/5/1561709858-earth-3866609.jpg',
        altText: 'Slide 1',
        caption: 'Afficher, référencer et convertir des données accessibles à tous'
    },
    {
        src: 'https://i.imgur.com/Y2DwkxV.png',
        altText: 'Slide 2',
        caption: 'Afficher, référencer et convertir des données accessibles à tous'
    },
    {
        src: 'https://i.imgur.com/Y2DwkxV.png',
        altText: 'Slide 3',
        caption: 'Afficher, référencer et convertir des données accessibles à tous'
=======
        src: 'https://i.imgur.com/Y2DwkxV.png',
        altText: 'Welcome Page',
        caption: 'Affichage - Référencement - Conversion'
>>>>>>> 97997d7811db91e957458f08481af8b06e97a025
    }
];

class CarouselHome extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <div className="CarouselContainer">
    <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
    >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
    </Carousel>
            </div>
        );
    }
}

export default CarouselHome;