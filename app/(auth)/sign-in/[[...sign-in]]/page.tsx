import { SignIn } from '@clerk/nextjs'
import { Metadata } from 'next';

export default function Page() {
  return <SignIn />
}

export const metadata: Metadata = {
  title: "Sign In | EngageX",
  description: "Welcome back to EngageX! Sign in to continue your social journey.",
};
