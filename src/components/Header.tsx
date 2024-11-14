import { useState } from 'react';
import { logo1 } from '../assets';
import { menu } from '../constants';
import { MenuType } from '../constants/types';
import { HiDotsVertical } from 'react-icons/hi';

export const Header = () => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  return (
    <section className="flex items-center justify-between sm:px-16 px-6 py-5 text-white">
      <div className="flex items-center gap-5 md:gap-8">
        <img src={logo1} alt="logo" className="h-[40px] object-cover" />

        {menu.map((item: MenuType) => (
          <div
            key={item.name}
            className="hidden lg:flex items-center gap-3 text-[15px] font-semibold cursor-pointer"
          >
            <item.Icon />

            <div className="relative group">
              <h2>{item.name}</h2>
              <span className="absolute border-b-2 border-white pt-[1px] w-0 group-hover:w-full duration-200" />
            </div>
          </div>
        ))}

        <div className="flex gap-5 lg:hidden">
          {menu.map(
            (item: MenuType, index) =>
              index < 3 && (
                <div key={item.name} className="text-[15px] cursor-pointer">
                  <item.Icon />
                </div>
              )
          )}

          <div className="relative">
            <HiDotsVertical
              className="text-[15px] cursor-pointer"
              onClick={() => setShowDropDown((prev) => !prev)}
            />

            {showDropDown && (
              <div className="absolute z-50 mt-3 bg-[#121212] border-[1px] border-gray-500 rounded-sm px-4 py-3 space-y-2">
                {menu.map(
                  (item: MenuType, index) =>
                    index > 2 && (
                      <div
                        key={item.name}
                        className="lg:hidden flex items-center gap-3 text-[15px] font-semibold mr-6 cursor-pointer"
                      >
                        <item.Icon />

                        <div className="relative group">
                          <h2>{item.name}</h2>
                          <span className="absolute border-b-2 border-white pt-[1px] w-0 group-hover:w-full duration-200" />
                        </div>
                      </div>
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full cursor-pointer"
      />
    </section>
  );
};
