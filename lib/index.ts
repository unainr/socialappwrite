import { z } from "zod";


export const Postvalidation = z.object({
	caption: z.string().min(5,{message: "Minimum 5 characters." }).max(200,{message: "Maximum 200 characters." }),  
    file: z.custom<File[]>(),
    tags: z.string(),
});

// sample data home page
export const SAMPLE_POSTS = [
    {
        id: 1,
        author: {
            name: "John Doe",
            username: "@johndoe",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            verified: true
        },
        content: "Just launched my new portfolio website! Check it out 🚀",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        likes: 1234,
        comments: 89,
        shares: 56,
        timestamp: "2h ago"
    },
    {
        id: 2,
        author: {
            name: "Sarah Miller",
            username: "@sarahmiller",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            verified: true
        },
        content: "Beautiful sunset at the beach today! 🌅 #nature #peace",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        likes: 2543,
        comments: 167,
        shares: 43,
        timestamp: "4h ago"
    },
    {
        id: 3,
        author: {
            name: "David Wilson",
            username: "@davidwilson",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg",
            verified: false
        },
        content: "Working on something exciting! Can't wait to share it with you all 👨‍💻",
        likes: 876,
        comments: 45,
        shares: 12,
        timestamp: "6h ago"
    },
	{
        id: 4,
        author: {
            name: "Emma Thompson",
            username: "@emmathompson",
            avatar: "https://randomuser.me/api/portraits/women/4.jpg",
            verified: true
        },
        content: "Just finished reading an amazing book on AI and the future of technology! 📚 Highly recommend it to everyone interested in tech. #AI #FutureTech",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
        likes: 1876,
        comments: 234,
        shares: 89,
        timestamp: "8h ago"
    },
    {
        id: 5,
        author: {
            name: "Michael Chen",
            username: "@mikechen",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg",
            verified: true
        },
        content: "Hosted my first tech workshop today! Thanks to everyone who attended 🙏 #coding #community",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        likes: 3421,
        comments: 178,
        shares: 156,
        timestamp: "12h ago"
    },
    {
        id: 6,
        author: {
            name: "Lisa Anderson",
            username: "@lisaanderson",
            avatar: "https://randomuser.me/api/portraits/women/6.jpg",
            verified: false
        },
        content: "Morning coffee and code review sessions are the best way to start the day ☕️💻 #developerlife",
        likes: 945,
        comments: 67,
        shares: 23,
        timestamp: "1d ago"
    },

    {
        id: 7,
        author: {
            name: "Ryan Zhang",
            username: "@ryandev",
            avatar: "https://randomuser.me/api/portraits/men/7.jpg",
            verified: true
        },
        content: "Just deployed my first machine learning model! The possibilities are endless 🤖 #ML #AI",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
        likes: 4532,
        comments: 321,
        shares: 178,
        timestamp: "1d ago"
    },
    {
        id: 8,
        author: {
            name: "Sofia Rodriguez",
            username: "@sofiatech",
            avatar: "https://randomuser.me/api/portraits/women/8.jpg",
            verified: true
        },
        content: "Giving a keynote at #TechConf2024 next month! Who else will be there? 🎤",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
        likes: 2765,
        comments: 198,
        shares: 145,
        timestamp: "1d ago"
    },
    {
        id: 9,
        author: {
            name: "Alex Kumar",
            username: "@alexk",
            avatar: "https://randomuser.me/api/portraits/men/9.jpg",
            verified: false
        },
        content: "Late night debugging session. The bug was a missing semicolon 😅 #coding #debugging",
        likes: 1543,
        comments: 87,
        shares: 34,
        timestamp: "2d ago"
    },
    {
        id: 10,
        author: {
            name: "Emily Parker",
            username: "@emilyparker",
            avatar: "https://randomuser.me/api/portraits/women/10.jpg",
            verified: true
        },
        content: "Our startup just hit 1M users! Thank you all for the amazing support 🚀 #startup #milestone",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
        likes: 8765,
        comments: 543,
        shares: 432,
        timestamp: "2d ago"
    },
    {
        id: 11,
        author: {
            name: "Marcus Johnson",
            username: "@marcusj",
            avatar: "https://randomuser.me/api/portraits/men/11.jpg",
            verified: true
        },
        content: "Just released my new open-source project! Check it out on GitHub 💻 #opensource",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        likes: 3298,
        comments: 276,
        shares: 198,
        timestamp: "3d ago"
    },
    {
        id: 12,
        author: {
            name: "Nina Patel",
            username: "@ninadev",
            avatar: "https://randomuser.me/api/portraits/women/12.jpg",
            verified: false
        },
        content: "Finally mastered Docker containerization! Next stop: Kubernetes 🐳 #DevOps",
        likes: 2187,
        comments: 154,
        shares: 89,
        timestamp: "3d ago"
    },
    {
        id: 13,
        author: {
            name: "Tom Wilson",
            username: "@tomw",
            avatar: "https://randomuser.me/api/portraits/men/13.jpg",
            verified: true
        },
        content: "Excited to announce I'm joining @TechGiant as a Senior Developer! New chapter begins 🎉",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        likes: 5432,
        comments: 432,
        shares: 265,
        timestamp: "4d ago"
    },
    {
        id: 14,
        author: {
            name: "Hannah Kim",
            username: "@hannahk",
            avatar: "https://randomuser.me/api/portraits/women/14.jpg",
            verified: true
        },
        content: "Just launched my tech podcast! First episode is about Web3 and blockchain 🎙️ #TechTalks",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc",
        likes: 3876,
        comments: 298,
        shares: 176,
        timestamp: "4d ago"
    },
    {
        id: 15,
        author: {
            name: "Carlos Mendoza",
            username: "@carlosm",
            avatar: "https://randomuser.me/api/portraits/men/15.jpg",
            verified: false
        },
        content: "Successfully migrated our entire infrastructure to the cloud! ☁️ #CloudComputing",
        likes: 2965,
        comments: 187,
        shares: 143,
        timestamp: "5d ago"
    },
    {
        id: 16,
        author: {
            name: "Rachel Green",
            username: "@rachelg",
            avatar: "https://randomuser.me/api/portraits/women/16.jpg",
            verified: true
        },
        content: "Wrote my first technical blog post about React performance optimization 📝 Link in bio!",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
        likes: 4231,
        comments: 321,
        shares: 198,
        timestamp: "5d ago"
    }
];