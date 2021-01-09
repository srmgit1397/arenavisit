import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Carousel} from 'react-bootstrap'
import img1 from './Mainslider/sliderpics1.jpg'
import img2 from './Mainslider/sliderpics2.jpg'
import img3 from './Mainslider/sliderpics3.jpg'
import img4 from './Mainslider/sliderpics4.jpg'
import img5 from './Mainslider/sliderpics5.jpg'

function MainSlider () {
    return (
            <Carousel>
                <Carousel.Item interval={2500}>
                    <img className="d-block w-100" src={img1} alt="slide"/>
                    <Carousel.Caption>
                        <h3>عنوان تصاویر</h3>
                        <p>شرح و توضیح مرتبط با تصاویر و هر متن موردنظر</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img className="d-block w-100" src={img2} alt="slide" />
                    <Carousel.Caption>
                        <h3>عنوان تصاویر</h3>
                        <p>شرح و توضیح مرتبط با تصاویر و هر متن موردنظر</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img className="d-block w-100" src={img3} alt="slide"/>
                    <Carousel.Caption>
                        <h3>عنوان تصاویر</h3>
                        <p>شرح و توضیح مرتبط با تصاویر و هر متن موردنظر</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img className="d-block w-100" src={img4} alt="slide"/>
                    <Carousel.Caption>
                     <h3>عنوان تصاویر</h3>
                        <p>شرح و توضیح مرتبط با تصاویر و هر متن موردنظر</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img className="d-block w-100" src={img5} alt="slide"/>
                    <Carousel.Caption>
                     <h3>عنوان تصاویر</h3>
                        <p>شرح و توضیح مرتبط با تصاویر و هر متن موردنظر</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
}
export default MainSlider 