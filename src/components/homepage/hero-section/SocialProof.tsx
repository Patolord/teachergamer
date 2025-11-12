import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const avatars = [
  {
    seed: "1",
    fallback: "TG",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    seed: "2",
    fallback: "JD",
    gradient: "from-green-500 to-teal-600",
  },
  {
    seed: "3",
    fallback: "SK",
    gradient: "from-orange-500 to-red-600",
  },
  {
    seed: "4",
    fallback: "MR",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    seed: "5",
    fallback: "AL",
    gradient: "from-indigo-500 to-blue-600",
  },
];

export default function SocialProof() {
  return (
    <div className="flex flex-col items-center gap-3 mt-2">
      {/* Avatar Group */}
      <div className="flex items-center -space-x-3">
        {avatars.map((avatar, index) => (
          <Avatar key={avatar.seed} className="w-12 h-12 border-2 border-white">
            <AvatarImage
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatar.seed}`}
              alt={`User ${index + 1}`}
            />
            <AvatarFallback
              className={`bg-gradient-to-br ${avatar.gradient} text-white font-semibold`}
            >
              {avatar.fallback}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>

      {/* Social Proof Text */}
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-1">
          <span className="text-yellow-400">★★★★★</span>
        </div>
        <p className="text-sm text-gray-300">
          <span className="font-bold text-white">1,000+</span> teachers and
          gamers already joined
        </p>
      </div>
    </div>
  );
}
