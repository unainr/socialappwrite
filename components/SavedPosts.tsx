"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BookmarkMinus } from 'lucide-react';

const SavedPosts = () => {
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedPosts') || '[]');
    setSavedPosts(saved);
  }, []);

  const removeSavedPost = (postId: string) => {
    const updatedSavedPosts = savedPosts.filter((post: any) => post.$id !== postId);
    localStorage.setItem('savedPosts', JSON.stringify(updatedSavedPosts));
    setSavedPosts(updatedSavedPosts);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Saved Posts</h1>
      {savedPosts.map((post: any) => (
        <div key={post.$id} className="rounded-xl shadow-md overflow-hidden">
          <div className="p-3 sm:p-4 flex items-center space-x-3">
            <div className="relative flex-shrink-0">
              <Image
                src={post.imageUrl || '/default-avatar.png'}
                alt={post.caption}
                width={40}
                height={40}
                className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base truncate">
                {post.caption}
              </h2>
              <p className="text-xs sm:text-sm text-blue-500 truncate">
                {post.tags?.join(', ')}
              </p>
            </div>
          </div>

          <div className="px-3 sm:px-4 pb-2">
            <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
              {post.caption}
            </p>
          </div>

          {post.imageUrl && (
            <div className="mt-2">
              <Image
                src={post.imageUrl}
                alt="Post image"
                width={600}
                height={400}
                className="w-full h-48 sm:h-64 md:h-96 object-cover"
              />
            </div>
          )}

          <div className="px-2 sm:px-4 py-3 flex items-center justify-between border-t dark:border-gray-700">
            <button className="flex items-center space-x-1 sm:space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
              <span className="text-xs sm:text-sm">2350</span>
            </button>
            <button className="flex items-center space-x-1 sm:space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              <span className="text-xs sm:text-sm">460</span>
            </button>
            <button className="flex items-center space-x-1 sm:space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
              </svg>
              <span className="text-xs sm:text-sm">50</span>
            </button>
            <button
              onClick={() => removeSavedPost(post.$id)}
              className="flex items-center space-x-1 sm:space-x-2 text-gray-500 hover:text-red-500 transition-colors"
            >
              <BookmarkMinus className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">Remove</span>
            </button>
          </div>
        </div>
      ))}
      {savedPosts.length === 0 && (
        <p className="text-center text-gray-500">No saved posts yet</p>
      )}
    </div>
  );
};

export default SavedPosts;
