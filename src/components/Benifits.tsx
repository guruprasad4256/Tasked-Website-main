import HandshakeIcon from '../assets/Handshake.png';
import PackageIcon from '../assets/Package.png';
import RocketIcon from '../assets/Rocket.png';
import CoinsIcon from '../assets/Coins.png';
import ShuffleIcon from '../assets/Shuffle.png';

const benefits = [
  {
    title: 'Reliable',
    image: HandshakeIcon,
    className: 'col-span-1 row-span-1 min-h-[180px] sm:min-h-[200px] md:min-h-[230px]',
    imgSize: 'w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16',
    textSize: 'sm:text-[20px] md:text-[20px] text-[18px]',
    hoverSizeClass: 'group-hover:w-[80px] group-hover:h-[80px]',
    layout: 'vertical',
  },
  {
    title: 'Total Package',
    image: PackageIcon,
    className: 'col-span-1 row-span-1 min-h-[180px] sm:min-h-[200px] md:min-h-[230px]',
    imgSize: 'w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16',
    textSize: 'sm:text-[20px] md:text-[20px] text-[18px]',
    hoverSizeClass: 'group-hover:w-[80px] group-hover:h-[80px]',
    layout: 'vertical',
  },
  {
    title: 'Tailored for early ventures',
    image: RocketIcon,
    className:
      'col-span-1 row-span-1 sm:row-span-1 lg:row-span-2 max-h-[300px] md:max-h-[400px] lg:max-h-[430px]',
    imgSize: 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20',
    textSize: 'sm:text-[20px] md:text-[20px] text-[18px]',
    hoverSizeClass: 'group-hover:w-[100px] group-hover:h-[100px]',
    layout: 'vertical',
  },
  {
    title: 'Affordable without cutting quality',
    image: CoinsIcon,
    className:
      'col-span-1 row-span-1 sm:row-span-1 lg:row-span-2 max-h-[300px] md:max-h-[400px] lg:max-h-[430px]',
    imgSize: 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20',
    textSize: 'sm:text-[20px] md:text-[20px] text-[18px]',
    hoverSizeClass: 'group-hover:w-[110px] group-hover:h-[110px]',
    layout: 'vertical',
  },
  {
    title: 'Customizable and Scalable',
    image: ShuffleIcon,
    className:
      'col-span-2 row-span-1 max-h-[150px] sm:max-h-[170px] md:max-h-[177px]',
    imgSize: 'w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16',
    textSize: 'sm:text-[20px] md:text-[20px] text-[18px]',
    hoverSizeClass: 'group-hover:w-[80px] group-hover:h-[80px]',
    layout: 'horizontal',
  },
];

const BenefitsSection = () => {
  return (
    <section className="w-full py-10 bg-white text-center px-4 sm:px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#903033] mb-4">
        Benefits of m.o.h
      </h2>
      <p className="max-w-2xl mx-auto text-gray-700 mb-12 text-sm sm:text-base md:text-lg">
        On Demand Professional services tailored for startups and growing businesses
      </p>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-4 sm:gap-6 max-w-7xl mx-auto">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className={`group rounded-xl bg-gradient-to-b from-[#A82317] to-[#C50000F7] 
            hover:from-[#B50101] hover:to-[#430000] text-white transition-all duration-300 
            p-4 sm:p-6 md:p-[50px]
              ${item.className} ${
              item.layout === 'horizontal'
                ? 'flex flex-row items-center justify-center gap-4 text-left'
                : 'flex flex-col justify-between items-center text-center'
            }`}
          >
            {item.layout === 'horizontal' ? (
              <>
                <img
                  src={item.image}
                  alt={item.title}
                  className={`${item.imgSize} object-contain transition-all duration-300 ease-in-out ${item.hoverSizeClass}`}
                />
                <p className={`${item.textSize} font-semibold leading-snug`}>
                  {item.title}
                </p>
              </>
            ) : (
              <>
                <p className={`${item.textSize} font-semibold leading-snug`}>
                  {item.title}
                </p>
                <img
                  src={item.image}
                  alt={item.title}
                  className={`${item.imgSize} object-contain transition-all duration-300 ease-in-out ${item.hoverSizeClass}`}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
