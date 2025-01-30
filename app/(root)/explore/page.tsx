import React from 'react'
import FetchPost from '@/components/FetchPost'
import { Metadata } from 'next';

const Explore = () => {
  return (
    <>
    <FetchPost/>
    </>
  )
}

export default Explore

export const metadata: Metadata = {
  title: "Explore | EngageX",
  description: "Discover trending posts, new connections, and exciting content on EngageX.",
};
