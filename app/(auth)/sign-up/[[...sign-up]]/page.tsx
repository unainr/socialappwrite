import { SignUp } from '@clerk/nextjs'
import { Metadata } from 'next';

export default function Page() {
  return <SignUp />
}

export const metadata: Metadata = {
  title: "Join EngageX | Create Account",
  description: "Create your EngageX account today and start connecting with an amazing community.",
};
