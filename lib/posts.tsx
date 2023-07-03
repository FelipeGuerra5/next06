import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'blogposts')

export function getSortedPostData() {
    const fileNames = fs.readdirSync(postDirectory)
    const allPostsData = fileNames.map((fileName) => {

        const id = fileName.replace(/\.md$/, '')

        const fullPath = path.join(postDirectory, fileName)
        const fileContent = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContent)

        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
        }

        return blogPost
    })
    return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1)
}