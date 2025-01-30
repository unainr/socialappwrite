import React from 'react';
import Image from 'next/image';

const USERS_DATA = [
  {
      name: "John Doe",
      username: "@johndoe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      verified: true
  },
  {
      name: "Jane Smith",
      username: "@janesmith",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      verified: true
  },
  {
      name: "Alice Johnson",
      username: "@alicejohnson",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      verified: false
  },
  {
      name: "David Wilson",
      username: "@davidwilson",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      verified: true
  },
  {
      name: "Emma Davis",
      username: "@emmadavis",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
      verified: true
  },
  {
      name: "Michael Brown",
      username: "@michaelbrown",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
      verified: false
  },
  {
      name: "Sarah Miller",
      username: "@sarahmiller",
      avatar: "https://randomuser.me/api/portraits/women/7.jpg",
      verified: true
  },
  {
      name: "Robert Taylor",
      username: "@roberttaylor",
      avatar: "https://randomuser.me/api/portraits/men/8.jpg",
      verified: false
  },
  {
      name: "Olivia White",
      username: "@oliviawhite",
      avatar: "https://randomuser.me/api/portraits/women/9.jpg",
      verified: true
  },
  {
      name: "Daniel Lee",
      username: "@daniellee",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
      verified: true
  }
];


const FollowCard = () => {
    return (
      <div className="h-96 overflow-y-auto overflow-x-hidden  space-y-4 my-2">
            {USERS_DATA.map((user, index) => (
                <div key={index} className="group  bg-white dark:bg-gray-800/50 flex items-center gap-4 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    {/* Avatar */}
                    <div className="relative ">
                        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-100 dark:ring-purple-900 group-hover:ring-purple-300">
                            <Image
                                src={user.avatar}
                                alt={user.name}
                                width={48}
                                height={48}
                                className="object-cover"
                            />
                        </div>
                        {user.verified && (
                            <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                                </svg>
                            </div>
                        )}
                    </div>

                    {/* User Info */}
                    <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{user.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{user.username}</p>
                    </div>

                    {/* Follow Button */}
                    <button className="px-4 py-1.5 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-200">
                        Follow
                    </button>
                </div>
            ))}
        </div>
    );
};

export default FollowCard;
