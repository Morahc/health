import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import Nav from '../../Components/Nav';

export const Research = () => {
  return (
    <main className=''>
      <Nav />
      <div class='mx-auto mt-8 grid max-w-2xl divide-y divide-neutral-200 text-neutral-700'>
        <div class='py-5'>
          <details class='group transition-height duration-500'>
            <summary class='flex cursor-pointer list-none items-center justify-between font-medium'>
              <div className='flex flex-col gap-4'>
                <p className='font-extrabold'>Inequity in the Consequences of Rule Breaking</p>
                <p>
                  Recruiting men and women | N2000 incentive | 350 spots available | Posted on Feb
                  25, 2023
                </p>
              </div>
              <span class='transition group-open:rotate-180'>
                <BsChevronDown />
              </span>
            </summary>
            <p class='group-open:animate-fadeIn mt-3 text-neutral-600'>
              Springerdata offers a variety of billing options, including monthly and annual
              subscription plans, as well as pay-as-you-go pricing for certain services. Payment is
              typically made through a credit card or other secure online payment method.
            </p>
          </details>
        </div>
        <div class='py-5'>
          <details class='group transition-height duration-500'>
            <summary class='flex cursor-pointer list-none items-center justify-between font-medium'>
              <div className='flex flex-col gap-4'>
                <p className='font-extrabold'>Inequity in the Consequences of Rule Breaking</p>
                <p>
                  Recruiting men and women | N2000 incentive | 350 spots available | Posted on Feb
                  25, 2023
                </p>
              </div>
              <span class='transition group-open:rotate-180'>
                <BsChevronDown />
              </span>
            </summary>
            <p class='group-open:animate-fadeIn mt-3 text-neutral-600'>
              Springerdata offers a variety of billing options, including monthly and annual
              subscription plans, as well as pay-as-you-go pricing for certain services. Payment is
              typically made through a credit card or other secure online payment method.
            </p>
          </details>
        </div>
      </div>
    </main>
  );
};
