import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel,
    SelectGroup
  } from '@/components/ui/select'

export default function SeekFlights() {
  return (
    <div className='flex items-center '>
          <Select>
            <SelectTrigger className='w-[150px]'>
              <SelectValue defaultValue='Round Trip' placeholder='Round Trip' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className='bg-white'>
                <SelectItem value='Return Trip'>Return Trip</SelectItem>
                <SelectItem value='One time Trip'>One time Trip</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='w-[150px]'>
              <SelectValue
                defaultValue='1 Passenger'
                placeholder='1 Passenger'
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className='bg-white'>
                <SelectItem value='2 Passengers'>2 Passengers</SelectItem>
                <SelectItem value='3 Passengers'>3 Passengers</SelectItem>
                <SelectItem value='4 Passengers'>4 Passengers</SelectItem>
                <SelectItem value='5 Passengers'>5 Passengers</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='w-[150px]'>
              <SelectValue
                defaultValue='Business'
                placeholder='Business & First'
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className='bg-white'>
                <SelectItem value='First'>First</SelectItem>
                <SelectItem value='Business'>Business</SelectItem>
                <SelectItem value='Business & First'>
                  Business & First
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
  );
}
