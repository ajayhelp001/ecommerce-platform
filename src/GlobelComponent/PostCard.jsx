import { Link } from 'react-router'
import ThemeButton from './ThemeButton'

const PostCard = ({postImg, postTitle, postDiscription, postViews, postCommentCount, postTags, postLink}) => {
  return (
    <>
    <div className="card blogcard">
        <div className="blogimg"><img src={postImg} className="w-100" alt="" /></div>
        <div className="card-body d-flex flex-column justify-content-between">
            <div className="">
                <p className="admin_text d-flex align-items-center justify-content-between"><span className="fw-normal">views <span className="fw-bold">({postViews})</span></span> <span className="fw-normal">Commnents <span className="fw-bold">({postCommentCount})</span></span> </p>
                <Link to={postLink} className="blogName">{postTitle}</Link>
                <p className="loremText text">{postDiscription}</p>
            </div>
            <ThemeButton btnLink={postLink} btnFillName={'w-100'} btnTitle={'Read More'}/>
        </div>
        <div className="date">{postTags}</div>
    </div>
    </>
  )
}

export default PostCard