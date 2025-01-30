import SavedPosts from '@/components/SavedPosts';
import { Metadata } from 'next';

const SavedPostsPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <SavedPosts />
    </div>
  );
};

export default SavedPostsPage;

export const metadata: Metadata = {
  title: "Saved Posts | EngageX",
  description: "Access your curated collection of favorite posts and memories on EngageX.",
};
