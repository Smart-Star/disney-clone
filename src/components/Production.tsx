import { productionList } from '../constants';
import { ProductionType } from '../constants/types';

export const Production = () => {
  return (
    <section className="flex items-center justify-between gap-5 sm:px-16 px-6 py-5">
      {productionList.map((item: ProductionType) => (
        <div
          key={item.id + 'w'}
          className="bg-[#171926] ring-[2px] ring-gray-600 hover:ring-gray-200 rounded-md shadow-xl shadow-black hover:scale-105 duration-200 cursor-pointer relative"
        >
          <img
            src={item.image}
            alt="production-img"
            className="w-full z-10 overflow-x-hidden"
          />
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute inset-0 w-full rounded-md z-0 opacity-0 hover:opacity-50"
          />
        </div>
      ))}
    </section>
  );
};
