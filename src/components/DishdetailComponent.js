import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const RenderDish = ({ dish }) => {
  return (
    <div className="col-12 col-md-5 ml-2">
      <Card>
        <CardImg width="100%" top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

function RenderComments({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      {dish.comments.map((comment) => {
        return (
          <ul key={dish.id}>
            {comment.comment == null ? (
              <div></div>
            ) : (
              <li className="list-unstyled">{comment.comment}</li>
            )}
            <li className="list-unstyled">
              {comment.author},
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

const DishDetail = ({ dish }) => {
  // console.log(dish)
  return (
    <div className="container">
      {dish == null ? (
        <div></div>
      ) : (
        <div className="row">
          <RenderDish dish={dish} />
          <RenderComments dish={dish} />
        </div>
      )}
    </div>
  );
};

export default DishDetail;
