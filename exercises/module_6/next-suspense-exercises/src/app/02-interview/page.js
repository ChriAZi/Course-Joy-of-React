import React from "react";

import { getComments } from "@/helpers/interview-helpers";
import Comment from "@/components/Comment";
import CommentsSection from "@/components/CommentsSection/CommentsSection";
import Article from "@/components/Article/Article";
import Spinner from "@/components/Spinner";

export const dynamic = "force-dynamic";

async function InterviewExercise() {
  return (
    <>
      <Article />
      <CommentsSection>
        <React.Suspense fallback={<Spinner />}>
          <Comments />
        </React.Suspense>
      </CommentsSection>
    </>
  );
}

async function Comments() {
  const comments = await getComments();
  return comments.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));
}

export default InterviewExercise;
