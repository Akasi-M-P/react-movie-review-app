
import { Component } from "react";

class MovieReviewsClass extends Component {
  state = {
    movieReviews: [],
  };

  componentDidMount() {
    try {
      const apiKey = "kI5ZVAhiMY0RHBEWkUkBufEP2aRSfuAH"; // Replace 'YOUR_API_KEY' with your actual API key

      fetch(
        `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({ movieReviews: data.results });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  // render() {
  //   const {movieReviews} = this.state;
  //   return (
  //     <>
  //       <div>
  //         <h1>Movie Reviews</h1>
  //         <ul>
  //           {movieReviews.map((review) => (
  //             <li key={review.display_title}>
  //               <h3>{review.display_title}</h3>
  //               <p>{review.critics_pick}</p>
  //               <p>{review.byline}</p>
  //               <p>{review.headline}</p>
  //             </li>
  //           ))}
  //         </ul>

  //         </div>

  //     </>
  //   );
  // }

  render() {
    const { movieReviews } = this.state;

    return (
      <>
        <div>
          <div className="card">
            {movieReviews.map((review) => (
              <div key={review.display_title}>
                <div className="header">
                  <div className="image">
                    <span className="tag">Art</span>
                  </div>
                  <div className="date">
                    <span>6 min ago</span>
                  </div>
                </div>
                <div className="info">
                  <a href="#" rel="noopener noreferrer" className="block">
                    <span className="title">{review.display_title}</span>
                  </a>
                  <p className="description">{review.summary_short}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default MovieReviewsClass;


