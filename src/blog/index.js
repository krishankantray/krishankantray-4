import React, {useState} from 'react' ;
import BlogBrief from './BlogBrief' ;
import Pagination from '@material-ui/lab/Pagination';
import '../styles/blog.css' ;
import blogData from './blogsData' ;
let n=process.env.REACT_APP_BLOG_LIST_SIZE;
let tot = blogData.length ;
console.log(tot) ;
export default function Blog(){
    const [page, setPage] = useState(1);
    const handlePage = (event, value)=>{
        setPage(value); 
    }
    return (
    <div className="blog-list">
        <div className="blogs-list-title">Blogs</div>
        {blogData.slice(n*(page-1), n*page).map(d=><BlogBrief data={d}/>)}
        <Pagination count={Math.ceil(tot/n)} page={page} color="primary" className="pagination" onChange={handlePage} />
    </div>
    )
}
