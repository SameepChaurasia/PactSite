import { Autoplay, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';



export default function SlideShow() {

    const images = ["/slide1.jpg","/slide2.jpg","/slide3.jpeg","/slide4.jpg","/slide5.jpeg","/slide6.jpeg"];

  return (
    <section className='bg-gradient-to-r from-emerald-50 to-cyan-50'>

            <Swiper
                modules={[Autoplay, A11y]}
                spaceBetween={30} // Adjust the spacing as needed
                slidesPerView={1} // Show only one slide by default
                autoplay
                
            >
                {images.map((images, index) => (
                    <SwiperSlide key={index}>
                        <a href='/#'>
                            <img
                                src={images}
                                alt={`slide-${index + 1}`}
                                className='w-fit h-[500px] mx-auto select-none'
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
  )
}
