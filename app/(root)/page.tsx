import FetchPost from '@/components/FetchPost';
import { SAMPLE_POSTS } from '@/lib';
import Image from 'next/image';

export default function Home() {
    return (
		<main className="w-full max-w-3xl mx-auto px-4 my-5">
		<div className="space-y-4">
			<FetchPost/>
			{SAMPLE_POSTS.map((post) => (
				<div key={post.id} className=" rounded-xl shadow-md overflow-hidden">
					{/* Post Header */}
					<div className="p-3 sm:p-4 flex items-center space-x-3">
						<div className="relative flex-shrink-0">
							<Image
								src={post.author.avatar}
								alt={post.author.name}
								width={40}
								height={40}
								className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
							/>
							{post.author.verified && (
								<div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
									<svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
									</svg>
								</div>
							)}
						</div>
						<div className="min-w-0 flex-1">
							<h2 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base truncate">
								{post.author.name}
							</h2>
							<p className="text-xs sm:text-sm text-gray-500 truncate">
								{post.author.username} · {post.timestamp}
							</p>
						</div>
					</div>

					{/* Post Content */}
					<div className="px-3 sm:px-4 pb-2">
						<p className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
							{post.content}
						</p>
					</div>

					{/* Post Image */}
					{post.image && (
						<div className="mt-2">
							<Image
								src={post.image}
								alt="Post image"
								width={600}
								height={400}
								className="w-full h-48 sm:h-64 md:h-96 object-cover"
							/>
						</div>
					)}

					{/* Post Actions */}
					<div className="px-2 sm:px-4 py-3 flex items-center justify-between border-t dark:border-gray-700">
						<button className="flex items-center space-x-1 sm:space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
							<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
							</svg>
							<span className="text-xs sm:text-sm">{post.likes}</span>
						</button>
						<button className="flex items-center space-x-1 sm:space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
							<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
							</svg>
							<span className="text-xs sm:text-sm">{post.comments}</span>
						</button>
						<button className="flex items-center space-x-1 sm:space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
							<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
							</svg>
							<span className="text-xs sm:text-sm">{post.shares}</span>
						</button>
					</div>
				</div>
			))}
		</div>
	</main>
    );
}
