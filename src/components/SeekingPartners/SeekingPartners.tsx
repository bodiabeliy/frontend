import Image from "next/image";
import { ActionButton } from "../buttons/ActionButton";
import PartnersImage from "../../../public/partners.png";
import SeekingFigure from "../../../public/SeekingFigure.png"
import SeekingFigure2 from "../../../public/SeekingFigure2.png"

const SeekingPartners = () => {
  return (
    <section className="relative w-full sm:mt-10 lg:mt-20 sm:mb-10 lg:mb-20 sm:px-3 lg:px-0">
    <Image className="absolute sm:left-[-30%] lg:left-[-100px] sm:top-[512px] lg:top-[-450px] z-[-1]" src={SeekingFigure} alt={""} /> 
    <Image className="absolute sm:left-[-30%] lg:left-[1200px] sm:top-[512px] lg:top-[-250px] z-[-1]" src={SeekingFigure2} alt={""} /> 

      <div className="max-w-[1300px] mx-auto">
        <div className="flex sm:flex-col lg:flex-row items-center justify-between sm:gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="sm:w-full lg:w-[45%] flex justify-center">
            <div className="relative sm:w-full sm:max-w-[500px] lg:w-full rounded-[30px] overflow-hidden">
              <Image 
                className="w-full h-auto" 
                src={PartnersImage} 
                alt="Partners" 
                width={600}
                height={400}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="sm:w-full lg:w-[65%] flex flex-col items-start">
            <h2 className="sm:text-3xl lg:text-[40px] text-secondaryColor font-bold mb-6">
              Шукаємо партнерів та представників в регіонах по всій Україні
            </h2>
            <p className="text-2xl mb-6">
                Хочеш готовий гарантований та прибутковий бізнес із прогнозованим та гарним доходом - пиши нам!
            </p>
            <ActionButton
              disabled={false}
              className="bg-secondaryButton sm:w-full lg:w-[550px] sm:p-4 lg:px-10 lg:py-6 rounded-[42px] text-white font-bold sm:text-lg lg:text-xl hover:shadow-[0_8px_16px_rgba(252,21,93,0.4)] transition-all border-2 border-secondaryColor"
              text="Заповнити форму"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeekingPartners;
