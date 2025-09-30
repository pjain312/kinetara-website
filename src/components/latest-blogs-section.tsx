// "use client";

// import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";

// const blogData = {

// };

// const BlogCard = ({ blog }: { blog: (typeof blogData.blogs)[0] }) => (
//   <div className="bg-white rounded-2xl overflow-hidden shadow-lg group">
//     <div className="relative h-56">
//       <Image src={blog.image} alt={blog.title} fill className="object-cover" />
//       <div className="absolute inset-0 bg-white">
//         <Image
//           src={blog.image}
//           alt="Physiotherapy Logo"
//           fill
//           className="object-cover"
//         />
//       </div>
//     </div>
//     <div className="p-6">
//       <h3 className="text-lg font-semibold text-[#153C33] min-h-[4.5rem]">
//         {blog.title}
//       </h3>
//       <a
//         href={blog.link}
//         className="text-[#153C33] font-semibold flex items-center mt-4 group-hover:text-green-700 transition-colors"
//       >
//         Read More <FaArrowRight className="ml-2" />
//       </a>
//     </div>
//   </div>
// );

// export function LatestBlogsSection() {
//   return (
//     <section className="py-20 bg-primary-foreground">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h2 className="text-4xl font-bold text-[#153C33]">
//               {blogData.title}
//             </h2>
//             <p className="text-gray-600 mt-2">{blogData.description}</p>
//           </div>
//           <a
//             href="#"
//             className="bg-primary/20 text-primary font-bold py-3 px-6 rounded-full flex items-center hover:bg-opacity-90 transition-opacity"
//           >
//             View All Blogs <FaArrowRight className="ml-2" />
//           </a>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {blogData.blogs.map((blog, index) => (
//             <BlogCard key={index} blog={blog} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
