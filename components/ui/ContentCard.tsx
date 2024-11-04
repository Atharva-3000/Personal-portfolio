import { cn } from "@/utils/cn";
import Image from "next/image";
import profilePic from "@/public/avatar.jpeg";
type BlogCardProps = {
    url: string;
    title: string;
    description: string;
    coverImage: string;
    readingTime: number;
    authorName: string; // Added author name prop
};

export function BlogCard({ 
    url, 
    title, 
    description, 
    coverImage, 
    readingTime, 
    authorName 
}: BlogCardProps) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="max-w-xs w-full group/card">
            <div
                className={cn(
                    "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4",
                )}
                style={{
                    backgroundImage: `url(${coverImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black/60 group-hover/card:bg-black/70"></div>

                <div className="flex flex-row items-center space-x-4 z-10">
                    <div className="relative h-10 w-10">
                        <Image
                            fill
                            alt={`${authorName}'s profile`}
                            src={profilePic}
                            className="rounded-full border-2 border-gray-200 object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-normal text-base text-gray-50 relative z-10">
                            {authorName}
                        </p>
                        <p className="text-sm text-gray-400">{readingTime} min read</p>
                    </div>
                </div>

                <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                        {title}
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4 line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
        </a>
    );
}