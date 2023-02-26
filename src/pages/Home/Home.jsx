import React from 'react';
import Nav from '../../Components/Nav';

export const Home = () => {
  return (
    <main>
      <section className="h-screen flex flex-col bg-[url('/bg.jpeg')] bg-center bg-cover">
        <Nav />
        <div className='grow grid place-items-center '>
          <div className='px-2 text-center text-3xl md:text-7xl space-y-2 font-bold lg:text-8xl md:space-y-4 lg:font-black text-white'>
            <h1>Be heard.</h1>
            <h1>Make a difference.</h1>
            <h1>Participate in research.</h1>
          </div>
        </div>
      </section>
      <section className='bg-sky-900'>
        <div className='py-8 mx-8 md:mx-12 lg:mx-36 text-white'>
          <h1 className='text-2xl lg:text-4xl mb-4 lg:mb-8 font-bold text-center'>About Us</h1>
          <div className='flex flex-wrap lg:flex-nowrap gap-4 items-center'>
            <div className='space-y-4 lg:basis-1/2'>
              <p>
                Every day, researchers at the University of Illinois Chicago are exploring new ideas
                aimed at preventing, treating or curing disease and improving our ability to live
                longer, healthier lives.
              </p>
              <p>
                Unfortunately there is a very real shortage of research volunteers whose
                participation in studies could help move these potentially life-changing ideas into
                the clinics and hospital where they might benefit patients.
              </p>
              <p>
                Because it can be difficult for people to find studies that fit their needs, and for
                researchers to find people who fit their studies, the University of Illinois Chicago
                launched the UI Health Research Registry.
              </p>
              <p>
                We invite you to learn more about this research matchmaking portal and how it can
                help you make a difference in the lives of others and the health of our communities.
              </p>
            </div>
            <div className='hidden lg:block lg:basis-1/2'>
              <img src='/bg.jpeg' />
            </div>
          </div>
        </div>
      </section>
      <section className='my-4 lg:my-8 mx-8 md:mx-12 lg:mx-36'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='text-2xl lg:text-4xl font-bold text-center'>Featured Studies</h1>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2'>
            <div className='flex flex-col gap-4 border rounded-lg shadow-lg overflow-hidden'>
              <img src='/bg.jpeg' />
              <p className='text-center p-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus reiciendis rem
                eos, expedita blanditiis, laborum repellat quod, quibusdam iusto veritatis officiis
                consequuntur quo! Tempora, dolorem eum repellendus libero harum id.
              </p>
              <button className='btn-primary'>Read more</button>
            </div>
            <div className='flex flex-col gap-4 border rounded-lg shadow-lg overflow-hidden'>
              <img src='/bg.jpeg' />
              <p className='text-center p-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus reiciendis rem
                eos, expedita blanditiis, laborum repellat quod, quibusdam iusto veritatis officiis
                consequuntur quo! Tempora, dolorem eum repellendus libero harum id.
              </p>
              <button className='btn-primary'>Read more</button>
            </div>
            <div className='flex flex-col gap-4 border rounded-lg shadow-lg overflow-hidden'>
              <img src='/bg.jpeg' />
              <p className='text-center p-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus reiciendis rem
                eos, expedita blanditiis, laborum repellat quod, quibusdam iusto veritatis officiis
                consequuntur quo! Tempora, dolorem eum repellendus libero harum id.
              </p>
              <button className='btn-primary'>Read more</button>
            </div>
            <div className='flex flex-col gap-4 border rounded-lg shadow-lg overflow-hidden'>
              <img src='/bg.jpeg' />
              <p className='text-center p-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus reiciendis rem
                eos, expedita blanditiis, laborum repellat quod, quibusdam iusto veritatis officiis
                consequuntur quo! Tempora, dolorem eum repellendus libero harum id.
              </p>
              <button className='btn-primary'>Read more</button>
            </div>
          </div>
          <button className='btn-primary md:w-1/3'>See all studies</button>
        </div>
      </section>
      <footer className='bg-cyan-800'></footer>
    </main>
  );
};
