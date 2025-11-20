import { ActionButton } from "../buttons/ActionButton";

const HurryUpSection = () => {
  return (
    <section className="relative w-full sm:mt-10 lg:mt-20 sm:mb-10 lg:mb-20 sm:px-3 lg:px-0">
      <div className="max-w-[1300px] mx-auto text-center">
          <h2 className="sm:text-4xl lg:text-7xl font-extrabold mb-6">
          Не зволікай! 
          <br />
          <span className=" text-secondaryColor">
            Будь Першим! 
          </span>
          <br />
          Не втрать можливість! 

        </h2>
      
        <p className="sm:text-xl lg:text-3xl font-semibold mb-8">
          Єдиний маркетплейс, який використовує систему підписки замість роздрібної націнки
        </p>
        <p className="sm:text-xl lg:text-3xl text-secondaryColor font-semibold mb-8">
          Підписку платите один раз - економите постійно! Очікуйте запуск вже в цьому році!
        </p>

        <ActionButton
          disabled={false}
          className="bg-primaryButton sm:w-full lg:w-auto sm:max-w-[500px] mx-auto sm:p-4 lg:px-12 lg:py-5 rounded-[42px] text-white font-bold sm:text-lg lg:text-2xl hover:shadow-[0_8px_16px_rgba(252,21,93,0.4)] transition-all"
          text="Обрати тариф зі знижкою"
        />
      </div>
    </section>
  );
};

export default HurryUpSection;
