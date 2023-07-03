import { getSortedPostData } from "@/lib/posts"
import { notFound } from "next/navigation"

export default async function Post({ params }: { params: { postId: string } }) {
    const posts = getSortedPostData() // This is deduped automatically!
    const { postId } = params

    if (!posts.find(post => post.id === postId)) {
        return notFound()
    }


    return (
  )
}
