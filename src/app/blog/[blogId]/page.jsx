export default function BlogPage({ params }) {
    console.log(params);
    return (
        <div>
            blogID: {params.blogId}
        </div>
    );
}
