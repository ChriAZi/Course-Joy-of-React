import Comment from "@/components/Comment";
import React from "react";
import Spinner from "@/components/Spinner";

function CommentsSection({ children }) {
  return (
    <section className="comments-section">
      <h2>Discussion</h2>
      {children}
    </section>
  );
}

export default CommentsSection;
