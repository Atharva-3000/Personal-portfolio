"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BlogCard } from "./ui/ContentCard";

type BlogPost = {
    id: number;
    url: string;
    title: string;
    description: string;
    cover_image: string;
    reading_time_minutes: number;
    user: {
        name: string;
    };
};

const Blogs = () => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchBlogs() {
            setIsLoading(true);
            try {
                const response = await axios.get("https://dev.to/api/articles?username=atharva3000");
                console.log(response.data.slice(1, 5));
                setBlogs(response.data.slice(1, 5));

            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchBlogs();
    }, []);

    if (isLoading) {
        return (
            <div className="container mx-auto py-12 mb-24" id="blogs">
                <h1 className="heading mb-10 text-center">
                    My <span className="text-orange-500">Blogs</span>
                </h1>
                <div className="w-full mt-12 grid grid-cols-1 
                    sm:grid-cols-2
                md:grid-cols-2
                lg:grid-cols-4 gap-6 px-4 md:px-6">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="h-96 rounded-md bg-gray-200 animate-pulse mx-auto w-full max-w-sm" />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-12 mb-24" id="blogs">
            <h1 className="heading mb-10 text-center">
                My <span className="text-orange-500">Blogs</span>
            </h1>
            <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-6">
                {blogs.map((blog) => (
                    <div key={blog.id} className="mx-auto w-full transform transition-transform duration-300 hover:scale-105">
                        <BlogCard
                            url={blog.url}
                            title={blog.title}
                            description={blog.description}
                            coverImage={blog.cover_image || "/default-cover.png"}
                            readingTime={blog.reading_time_minutes}

                            authorName={blog.user.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;