import { img } from '../utils/assets';
import { svg } from '../utils/assets';
import { IoMdPlay } from 'react-icons/io';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

const HeroContent = () => {
	return (
		<div className="flex flex-col md:flex-row gap-4 sm:gap-0 md:gap-8">
			<motion.div
				variants={fadeIn('left', 0.2, 1)}
				initial="offscreen"
				whileInView={'onscreen'}
				viewport={{ once: true, amount: 0.7 }}
				className="relative w-full sm:grid sm:place-content-center md:w-1/2 aspect-[1/1.2] sm:aspect-square md:order-1 overflow-hidden"
			>
				<img src={svg.Plane} alt={svg.Plane} className="absolute -z-10 w-36 md:40 lg:w-44" />
				<img
					src={svg.Plane}
					alt="plane"
					className="absolute -z-10 bottom-20 xs:bottom-32 md:bottom-10 lg:bottom-32 -right-4 md:-right-6 lg:-right-4 w-24 md:w-28 lg:w-32"
				/>
				<img
					src={img.Traveller}
					alt="traveller"
					className="absolute top-0 left-0 -z-10 sm:static w-full h-full sm:w-auto sm:h-auto object-cover"
				/>
			</motion.div>
			<motion.div
				variants={fadeIn('right', 0.2, 1)}
				initial="offscreen"
				whileInView={'onscreen'}
				viewport={{ once: true, amount: 0.7 }}
				className="w-full md:w-1/2 md:flex md:flex-col md:justify-center"
			>
				<p className="font-bold uppercase text-sm text-orange-pink mb-4 md:mb-2 lg:mb-4 font-poppins">
					Best Destinations around the world
				</p>
				<h1 className="text-4xl xs:text-5xl xs:leading-[58px] sm:text-[55px] sm:leading-[65px] md:text-[2.5rem] md:leading-[2.8rem] lg:text-5xl xl:text-6xl font-bold font-volkhov mb-4 md:mb-2 lg:mb-4 text-blue-dark">
					Travel, <span className="decore__enjoy">enjoy</span> and live a new and full life
				</h1>
				<p className="font-poppins text-sm text-black-light mb-4 md:mb-2 lg:mb-4 lg:pr-10">
					Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen
					it engrossed listening. Park gate sell they west hard for the.
				</p>
				<div className="flex gap-4">
					<button className="w-36 h-14 md:h-12 bg-yellow hover:opacity-90 shadow-2xl rounded-md font-poppins text-light cursor-pointer active:translate-y-2 active:scale-95 transition-all">
						Find out more
					</button>
					<button className="w-36 h-14 md:h-12 flex items-center gap-2 cursor-pointer active:translate-y-2 active:scale-95 transition-all">
						<div className="w-10 h-10 bg-orange-pink rounded-full shadow-2xl grid place-content-center">
							<IoMdPlay className="text-light" />
						</div>
						<span className="font-poppins font-medium text-black-light">play demo</span>
					</button>
				</div>
			</motion.div>
		</div>
	);
};

export default HeroContent;
