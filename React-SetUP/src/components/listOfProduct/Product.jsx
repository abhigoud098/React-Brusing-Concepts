import "./Product.css";

function Product({ task }) {

  if(task.completed){
      return (
        <div className="product-card">
          <h3 className="product-name">{task.task}</h3>
          <p className="product-price">
            {task.completed ? "Completed" : "Not Completed"}
          </p>
          {/* here this condition is used to show completed or not completed and it automatic change based on the value of completed */}
        </div>
      );
  } else {
      return null; // Return null if the task is not completed
  }
}

export default Product;
