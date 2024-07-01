import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png';
import ChooseMeals from '../Assets/choose-image.png';
import DeliveryMeals from '../Assets/delivery-image.png';

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem Ipsum is simply dummy text of the printing.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Lorem Ipsum is simply dummy text.",
        }
    ]
    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Work</p>
                <h1 className='primary-heading'>How it works</h1>
                <p className='primary-text'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
            </div>
            <div className='work-section-bottom'>
                {
                  workInfoData.map((data)=>(
                    <div className='work-section-info'>
                        <div className="info-boxex-image-container">
                            <img src={data.image} alt="" srcset="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                        </div>
                  ))
                }
            </div>
        </div>
    )
}

export default Work