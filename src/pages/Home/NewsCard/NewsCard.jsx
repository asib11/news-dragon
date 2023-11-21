import moment from 'moment';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaShareNodes, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const NewsCard = ({ news }) => {
  // eslint-disable-next-line react/prop-types
  const { title, details, _id, image_url, author, total_view, rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header className='d-flex align-items-center'>
        <Card.Img src={author?.img} className='rounded-circle' style={{ height: '40px', width: '40px' }} />
        <div className='ps-3 flex-grow-1'>
          <p className='mb-0'>{author?.name}</p>
          <p className='m-0'><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
        </div>
        <div>
          <FaRegBookmark></FaRegBookmark> <FaShareNodes></FaShareNodes>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {
            // eslint-disable-next-line react/prop-types
            details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>read more</Link> </>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex ">
        <div className='flex-grow-1'>
          <FaStar className='text-warning'></FaStar> <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye></FaEye> <span> {total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;