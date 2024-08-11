import person from "../../../public/assets/images/about_us/person.jpg";
import parts from "../../../public/assets/images/about_us/parts.jpg";
import Image from "next/image";
const About = () => {
  return (
    <div>
      <div className='hero py-32'>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='lg:w-full relative'>
            <Image
              alt={"personImg"}
              src={person}
              className='w-[460px] h-[473px] rounded-lg shadow-2xl '
            />
            <div className='w-[332px] absolute right-[15%] top-[40%] rounded-lg p-2 bg-white shadow-2xl'>
              <Image alt='personImg' src={parts} className='w-full h-[332px]' />
            </div>
          </div>
          <div className='lg:w-full p-6'>
            <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
            <h1 className='text-5xl font-bold'>
              We are qualified & of experience in this field
            </h1>
            <p className='py-6'>
              There are many variations of passages of Lorem <br />
              Ipsum available, but the majority have suffered alteration in some{" "}
              <br />
              form, by injected humour, or randomised words which don&apos;t{" "}
              <br />
              look even slightly believable.
            </p>
            <p className='pb-6'>
              the majority have suffered alteration in some form, by injected{" "}
              <br />
              humour, or randomised words which don&apos;t look even slightly{" "}
              <br />
              believable.
            </p>
            <button className='btn btn-warning bg-red-500 border-none text-white'>
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
