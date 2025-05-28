import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchPostData } from '../../../api/data_boardCRUD';
import { Post } from '../../../types/post';

const BasicStyle: React.FC = () => {
  const path = useLocation();
  const tab = useParams<{ tab: string }>();
  const [postData, setPostData] = useState<Post[]>([]);

  useEffect(() => {
    async function loadData(tableName: string = tab.tab || 'basic') {
      const data = await fetchPostData(tableName);
      if (data) setPostData(data);
    }
    loadData(tab.tab);
  }, [tab.tab]);

  return (
    <div className="board_list">
      {postData.map((data) => (
        <dl key={`post${data.postID}`} className="table_board">
          <div className="post_id">
            <dt className="sr-only">번호</dt>
            <dd>{data.postID}</dd>
          </div>

          <div className="post_tit d-flex gap-1">
            <dt className="sr-only">제목</dt>
            <dd>
              <Link to={`${path.pathname}/${data.postID}`}>{data.postTit}</Link>
              <b>[00]</b>
            </dd>
          </div>

          <div className="post_nickname">
            <dt className="sr-only">작성자</dt>
            <dd><span>{data.userInfo?.userNickname}</span></dd>
          </div>

          <div className="post_time">
            <dt className="sr-only">작성일</dt>
            <dd><span>{data.postedAt?.slice(0, 10)}</span></dd>
          </div>

          <div className="post_view">
            <dt className="sr-only">조회수</dt>
            <dd><span>{data.views}</span></dd>
          </div>
        </dl>
      ))}
    </div>
  );
};

export default BasicStyle;


export const GalleryStyle:React.FC = () => {

    return (
        <div className="board_list">
            갤러리~~~
        </div>
    );
};
