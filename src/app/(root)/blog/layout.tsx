import { ReactNode } from "react";

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <div className="w-full">{children}</div>
    </div>
  );
};

export default BlogLayout;
