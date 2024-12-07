/* eslint-disable react/prop-types */
import { MoreHorizontal, Heart, MessageCircle, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

const Post = ({ author, content, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium">{author.name}</h3>
              <p className="text-xs md:text-sm text-gray-500">@{author.username}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-400">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
        </div>
        <div className="mt-4">
          <p className="text-sm md:text-base text-gray-600">{content}</p>
          <button className="text-red-400 text-xs md:text-sm mt-2">Read More</button>
        </div>
      </div>

      {image && (
        <div className="relative">
          <img
            src='/assets/feed1.png'
            alt="Post content"
            className="w-full"
          />
        </div>
      )}

      <div className="px-4 md:px-6 py-3 md:py-4 flex items-center gap-4 md:gap-6">
        <button className="flex items-center gap-1 md:gap-2 text-gray-500 hover:text-gray-600">
          <Heart className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-xs md:text-sm">9.8k</span>
        </button>
        <button className="flex items-center gap-1 md:gap-2 text-gray-500 hover:text-gray-600">
          <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-xs md:text-sm">8.6k</span>
        </button>
        <button className="flex items-center gap-1 md:gap-2 text-gray-500 hover:text-gray-600">
          <Share2 className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-xs md:text-sm">7.2k</span>
        </button>
      </div>
    </div>
  )
}

export default function Feed() {
  const posts = Array(10).fill({
    author: {
      name: "Lara Leones",
      username: "theartgirl",
      avatar: "/assets/feed1.png"
    },
    content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/assets/feed1.png"
  })

  return (
    <div className="space-y-4 md:space-y-6">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  )
}

